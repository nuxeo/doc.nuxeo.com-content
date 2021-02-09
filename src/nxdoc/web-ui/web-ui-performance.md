---
title: 'Web UI Performance'
review:
    comment: ''
    date: '2021-01-07'
    status: ok
toc: true
labels:
    - nuxeo-web-ui
    - perfs
    - grenard
tree_item_index: 350
---

In this page, we go through different aspects of customization and usage that may impact the performance of your Web UI apps.

## Document Property Resolution

When fetching a document from the Rest API, you can request to resolve some document's [extended fields]({{page version='' space='nxdoc' page='document-json-extended-fields'}}). An extended field references other entities such as:
 - users or groups
 - vocabulary entries
 - other documents

in order to be able to display them. For example, in a document layout, when it comes to display who created the document (`dc:creator` field), if we don't ask the REST API to resolve this field, we'll only be able to display the username. With a resolved field, we can display the firstname, lastname, email, etc.

By default, Web UI requests any available field when navigating to a particular document. However, depending on your custom document types, resolving every single field may result in degraded performance.

Since 10.10 ([NXP-26520](https://jira.nuxeo.com/browse/NXP-26520) and [NXP-25512](https://jira.nuxeo.com/browse/NXP-25512)), you can limit the list of fields that should be resolved with a contribution such as the following:

```xml
<require>org.nuxeo.web.ui.properties.contrib</require>
<extension target="org.nuxeo.runtime.ConfigurationService" point="configuration">
 <property name="org.nuxeo.web.ui.fetch.document" list="true" override="true">dc:creator</property>
 <property name="org.nuxeo.web.ui.fetch.document" >dc:nature</property>
 <property name="org.nuxeo.web.ui.fetch.document" >dc:coverage</property>
 <property name="org.nuxeo.web.ui.fetch.document" >dc:subjects</property>
</extension>
```

## Searches

### Property Resolution

Whenever a search result is populated or a `Folderish` document's content is listed, it queries the [search endpoint]({{page version='' space='nxdoc' page='search-endpoints'}}). This endpoint takes into account a couple of [HTTP headers]({{page version='' space='nxdoc' page='special-http-headers'}}).

A [Web UI search]({{page version='' space='nxdoc' page='search-endpoints'}}) is defined as follows:

```xml
<nuxeo-slot-content name="defaultSearchMenuPage" slot="DRAWER_PAGES">
  <template>
    <nuxeo-search-form name="defaultSearch" search-name="default" auto
      provider="default_search" schemas="dublincore,common,uid"></nuxeo-search-form>
  </template>
</nuxeo-slot-content>
```

which requests the search endpoint to serialize the `dublincore,common,uid` schemas of the result documents.

{{#> callout type='note' }}
To make your search efficient, always limit the schemas to be serialized as much as possible. Serializing properties is costly.
{{/callout}}

The search will, by default, request to resolve all properties referencing other entities (as explained in the above section).
If you have document types with a lot of references, this can significantly slow down your search because results will take much longer to be serialized by the server.

To speed up your search, you can explicitly define the properties to be resolved by specifying the `X-NXfetch.document` in the `headers` property on the `nuxeo-search-form` element:

```xml
<nuxeo-search-form name="defaultSearch" search-name="default" auto
  provider="default_search" schemas="dublincore,common,uid"
  headers='{"X-NXfetch.document": "dc:creator,dc:nature", "X-NXtranslate.directoryEntry": "label"}'>
</nuxeo-search-form>
```

{{#> callout type='note' }}
In the above example, `"X-NXtranslate.directoryEntry": "label"` is needed to translate the label of the directory entries.
{{/callout}}

<!--
TODO explain the same for nuxeo-document-content once https://jira.nuxeo.com/browse/NXP-26184 is done.
-->

### Aggregation

[Aggregates]({{page version='' space='nxdoc' page='page-provider-aggregates'}}) are often added to a search to provide efficient search criteria and a better user experience.

However, the computation of these aggregates by the Elasticsearch back-end does not come for free.

{{#> callout type='warning' }}
It is not realistic to design a search that allows an end-user to trigger a complex aggregate computation on a search result set potentially containing hundreds of thousands of documents.
{{/callout}}

As a direct result, a search definition:
  - in `auto` mode (refresh results each time a parameter changes)
  - with complex aggregations definitions
  - potentially returning hundreds of thousands or even millions of documents

will likely not behave well because each time you change a parameter, all aggregates will be recomputed on a large amount of data.

For such use case, it is better not to use `auto` mode or have more specialized searches by adding different ones with a query pattern focusing on, for example, a given document type.

{{#> callout type='tip' }}
Since 10.3 ([NXP-24880](https://jira.nuxeo.com/browse/NXP-24880)), page-provider aggregate computations can be skipped on demand to speed up the query.
{{/callout}}

Depending on your search form design, you may only wish to compute aggregates if some other parameters are set in order to restrict the result set. For example, if we'd like the [Web UI default search](https://github.com/nuxeo/nuxeo-web-ui/blob/release-10.3/elements/search/default/nuxeo-default-search-form.html) to only compute aggregates if the fulltext parameter is not empty, we can add `skipAggregates`:
```javascript
skipAggregates: {
  type: Boolean,
  notify: true,
  computed: '_skipAggregates(params.*)'
}
```
which is set to true only if the fulltext parameter is not empty:
```javascript
_skipAggregates() {
  return !this.params || !this.params.ecm_fulltext || this.params.ecm_fulltext.length === 0;
}
```
## HTTP Caching

Since 10.3 , we have improved caching strategy to better leverage browser HTTP cache.

### Static Resources

Since 10.3 ([NXP-25700](https://jira.nuxeo.com/browse/NXP-25700)), we added a Service Worker (SW) to allow for more aggressive cache on `\*.html` and `\*.js` resources by appending the server latest hot-reload or restart timestamp (TS) to their URL:
 - On clean hit, we will read resources without TS (default cache will be ineffective). SW will be installed.
 - On next hit, SW will intercept matching requests, append the TS and forward them to the network (aggressive cache will be effective)
 - On subsequent hits, SW will keep intercepting requests and network will read them from cache.

On server restart or hot-reload:
 - On first reload previous SW will still be installed and will still serve resources with previous TS. Updated SW gets installed on page load.
 - On subsequent hits updated SW will add updated TS to requests

Other static resources such as images (`\*.png`, `\*jpeg`, `\*svg`, etc.) have a default cache define in [`browser-cache-contrib.xml` contribution](https://github.com/nuxeo/nuxeo-web-ui/blob/maintenance-3.0.x/plugin/web-ui/addon/src/main/resources/OSGI-INF/browser-cache-contrib.xml#L12) which you can override to fit your needs.

{{#> callout type='tip' }}
According to the [specs](https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle#shift-reload) SWs are not active during a hard reload (e.g. Ctrl+Shift+R on most browsers).
{{/callout}}

### Dynamic Resources

Since 10.3 ([NXP-25385](https://jira.nuxeo.com/browse/NXP-25385)), resource URLs for document previews, thumbnails, blobs, etc. have the document's `changeToken` appended as a query parameter.

Such URLs have a very aggressive cache (approximately 1 year) defined in [web-request-controller-contrib.xml#L47](https://github.com/nuxeo/nuxeo/blob/master/modules/platform/nuxeo-platform-web-common/src/main/resources/OSGI-INF/web-request-controller-contrib.xml#L47). As a matter of fact, each time the document changes, its `changeToken` also changes and the resource is invalidated by the browser cache.

## Document Tabs

The Web UI's browser shows a set of tabs when navigating to a document. Most documents have, by default, the `View`, `Permissions`, `History` and `Publishing` tabs.

You can add new tabs (and even override existing ones) by contributing to the [DOCUMENT_VIEWS_ITEMS]({{page version='' space='nxdoc' page='web-ui-slots'}}#document_views_items) and [DOCUMENT_VIEWS_PAGES]({{page version='' space='nxdoc' page='web-ui-slots'}}#document_views_pages) slots.

Pages introduced in the [DOCUMENT_VIEWS_PAGES]({{page version='' space='nxdoc' page='web-ui-slots'}}#document_views_pages) slot are present in the DOM even if not selected. These pages are just hidden if not displayed. If the page needs to fetch data to populate listing, then you must pay attention to the `visible` attribute available on your page element. The idea is to fetch the data only if your element is visible.

Here is a concrete example. We add a new tab to list the `Book` documents associated to an `Author` document:

```js

class AuthorBookListing extends mixinBehaviors([I18nBehavior, LayoutBehavior], Nuxeo.Element) {
  static get template() {
    return html`
      <nuxeo-page-provider id="bookPP"
                     provider="BOOK_PAGE_PROVIDER"
                     enrichers="thumbnail"
                     params='{"book_author": [[document.uid]]};'
                     page-size="40"
                     schemas="dublincore,book">
      </nuxeo-page-provider>

      <nuxeo-data-table id="table" nx-provider="bookPP">
        <nuxeo-data-table-column name="[[i18n('book.title')]]" flex="100" sort-by="book:title" filter-by="book_title">
          <template>
            <nuxeo-document-thumbnail document="[[item]]"></nuxeo-document-thumbnail>
            <a class="title ellipsis" href$="[[urlFor('browse', item.path)]]">[[item.title]]</a>
          </template>
        </nuxeo-data-table-column>
      </nuxeo-data-table>
    `;
  }

  static get is() {
    return 'author-book-listing';
  }

  customElements.define(AuthorBookListing.is, AuthorBookListing);
}
```
Then you can see the `visible` property to only fetch the books when the page is displayed:

```js
static get properties() {
  return {
    document: {
      type: Object,
    },
    visible: {
      type: Boolean,
      value: false,
    },
  };
}

static get observers() {
  return ['refresh(document, visible)'];
}
```

Thanks to this pattern, you can prevent useless requests from being sent and make sure your tab content is refreshed each time you display it.

## Clipboard Usage

Web UI clipboard is designed to guarantee that the move / copy operations can work up until 1500 documents roughly, and knowing that waiting time increases with the number of documents to handle.

The clipboard operations leverage regular automation calls to the server, meaning that an operation is handled as a single transaction, and can timeout if it takes too long to execute (5 minutes by default).

From a user experience standpoint, the feature was designed to work in optimal conditions up to 100 documents.

Below are some benchmarks ran on the feature to consider as a starting point to plan for your application usage.

| Number of Documents | Copy | Move
| :------------- | :----------: | -----------: |
| 50 | 5/6 seconds | 3/4 seconds
| 100 | 11/12 seconds | 5/6 seconds
| 200 | 19/20 seconds | 6 seconds
| 500 | 48/49 seconds | 12/13 seconds
| 1000 | 1 min 33/34 seconds | 27/28 seconds
| 2000 | 3m 15 seconds | 1 min 48 seconds
