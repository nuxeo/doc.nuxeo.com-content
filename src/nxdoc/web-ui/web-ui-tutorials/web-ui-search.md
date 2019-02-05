---
title: 'HOWTO: Customize Searches'
review:
    comment: ''
    date: '2017-12-14'
    status: ok
toc: true
details:
    howto:
        excerpt: Learn how to create a new search screen with Studio Designer.
        level: Intermediate
        tool: 'Studio Designer, code'
        topics: 'Web UI, Studio Designer'
labels:
    - lts2016-ok
    - nuxeo-web-ui
    - tcardoso
    - extension
    - search-tab-component
    - lts2017-ok
tree_item_index: 500

---
After having created your own [document type]({{page page='web-ui-document-layouts'}}#how-to-define-a-new-document-type-layout-with-the-view-designer) you will probably want to create your own search.

We will learn how to create a new search screen with an icon in the left menu. The search will be compose of a full text search, a search by date range, a search by owners and finally by tags.


## Prerequisites
- A [Contract document type]({{page version='' space='nxdoc' page='web-ui-document-layouts'}}) created in Nuxeo Studio
- The Web UI addon installed on your instance

Once you are all set, you can navigate to Nuxeo Studio to start creating your search.

## Create a Page Provider

The first step is to create a [page provider]({{page version='' space='studio' page='page-providers'}}) in Nuxeo Studio.

In **Configuration**, go to **Page Providers**, click on **New** and name it `Search`.

**The full text search:**
![]({{file name='full-text-vd.png'}} ?w=250, border=true)
1. Next to **Predicates** click on **Add**.
  A popup window appears.
1. Click on **Edit binding** and select `schema:system`&nbsp;> `fulltext`.
1. Save your changes.

**The search by date range:**
![]({{file name='creation-date-range-vd.png'}} ?w=250, border=true)
1. Next to **Aggregates** click on **Add**.
  A popup window appears.
1. Fill the popup window like this:
  <div class="table-scroll">
  <table class="hover">
  <tbody>
  <tr>
  <th colspan="1">Field</th>
  <td colspan="1">dc:created</td>
  </tr>
  <tr>
  <th colspan="1">Date Ranges</th><td colspan="1">
  <ul>
      <li>Label: `Last year` From: `now-1y` To: `now-1M`</li>
      <li>Label: `Last month` From: `now-1M` To: `now-7d`</li>
      <li>Label: `Last week` From: `now-7d` To: `now-24H`</li>
      <li>Label: `Last 24h` From: `now-24H` To: `now`</li>
  </ul>
  </td>
  </tr>
  </tbody>
  </table>
  </div>

**The search by tags:**
![]({{file name='tags-search-vd.png'}} ?w=250,border=true)
  1. Add another new Predicates.
  1. Click on **Edit binding** and select `schema:system`&nbsp;> `tag[]`.

**The search by owner of the contract:**
![]({{file name='contract-owner-vd.png'}} ?w=250,border=true)
  1. Add another new Predicates.
  1. Click on **Edit binding** and select `schema:contract`&nbsp;> `owner`.

You can now save your changes and go to the Studio Designer.

## Create a Search Layout

In the Studio Designer, in the **UI** tab, under  **Layouts** > **Page Providers** you will find your page provider created previously.

Click on your page provider, two layouts are available. Let's edit the **Form** layout first.

1. Click on **form**, then **Customize**.
    The form layout is now displayed in bold. On the right, in the properties catalog, the elements that we defined in Studio are displayed here.
1. Expand the first element and drag and drop the **Edit** mode into the editor.
  Do the same for the three other elements.
1. Once it's done, click on the **Full text** element on the main view, you can edit the label in the left catalog to display `Full text`. You can do the same with the other elements.

Let's customize the **results** layout now.

1. Click on **results**, then **Customize**.
1. It automatically creates the result view by default. Leave it like this and click on **Save**.

## Create a New Left Menu Item
The next step is to add a button in the left menu to display the search screen.

1. Go to the UI tab in the Studio Designer and then on **Left Menu Items**.
1. Roll over the Create button and select the Search type ![]({{file name='search-icon-drawer-vd.png'}} ?w=20).
1. Fill in the page like this:
  - Name: Contract
  - Available: enabled
  - Label: `Contracts`
  - Icon: `icons:assignment`
  - provider: `Search`
  - schemas: `dublincore`, `contract`
  - search-name: `search`
  - auto: enabled

1. Save your changes, deploy your Studio project on your instance and you're done :)

![]({{file name='result-search-screen-vd.png'}} ?w=350,border=true)

## Technical Overview

### Overriding Existing Nuxeo Web UI Search

Nuxeo Web UI comes with the *Default Search* and *Expired Search* both plugged on server side page providers [default_search](https://github.com/nuxeo/nuxeo/blob/release-9.10/nuxeo-features/nuxeo-search/nuxeo-search-core/src/main/resources/OSGI-INF/search-pageprovider-contrib.xml#L6) and [expired_search](https://github.com/nuxeo/nuxeo/blob/release-9.10/nuxeo-features/nuxeo-search/nuxeo-search-core/src/main/resources/OSGI-INF/search-pageprovider-contrib.xml#L150) by default.

| Default search                                             | Expired search                                             |
|:-----------------------------------------------------------|:-----------------------------------------------------------|
| ![]({{file name='DEFAULT_SEARCH.png'}} ?w=400,border=true) | ![]({{file name='EXPIRED_SEARCH.png'}} ?w=400,border=true) |

Within the Web UI, a search is composed of 2 main parts:
 - the search form displayed on the left in the drawer panel.
 - the search result panel displayed on the right in the main content.

 ![]({{file name='SEARCH_COMPOSITION.png'}} ?w=600,border=true)

The search form itself has 2 rendering modes:
 - `filter mode` where you can set filter and criteria. Each time a filter changes, it updates the results displayed in the main container.
 - `queue mode` where search results are displayed with a vertical scroll (like in the expired search screenshot above).

A toggle button allows you to switch between `filter mode` and `queue mode`.

The search form is a dynamically loaded element. For instance, [nuxeo-default-search-form.html](https://github.com/nuxeo/nuxeo-web-ui/blob/9.10/elements/search/default/nuxeo-default-search-form.html) and [nuxeo-default-search-results.html](https://github.com/nuxeo/nuxeo-web-ui/blob/9.10/elements/search/default/nuxeo-default-search-results.html) contribute the *Default Search* form and results layouts and the [nuxeo-expired-search-form.html](https://github.com/nuxeo/nuxeo-web-ui/blob/9.10/elements/search/expired/nuxeo-expired-search-form.html) and [nuxeo-expired-search-results.html](https://github.com/nuxeo/nuxeo-web-ui/blob/9.10/elements/search/expired/nuxeo-expired-search-results.html) contribute the *Expired Search* form and results layouts.

```
$NUXEO_SERVER/nxserver/nuxeo.war/ui% tree
.
├── document
│   ├── ...
├── elements.html
├── favicon.ico
├── i18n
│   ├── ...
├── images
│   ...
├── index.jsp
├── manifest.json
├── nuxeo-admin
│   ├── ...
├── nuxeo-dam
│   ├── ...
├── nuxeo-drive
│   ├── ...
├── nuxeo-home.html
├── nuxeo-liveconnect
│   ├── ...
├── nuxeo-user-group-management
│   ├── ...
├── search
│   ├── nuxeo-saved-search-actions.html
│   ├── nuxeo-search-form.html
│   ├── default
│   │   ├── nuxeo-default-search-form.html
│   │   ├── nuxeo-default-search-results.html
│   ├── expired
│   │   ├── nuxeo-expired-search-form.html
│   │   ├── nuxeo-expired-search-results.html
├── ...
...
```

Referring to  [Web UI deployment]({{page version='' page='web-ui-deployment'}}) documentation, you can override these [nuxeo-default-search.html](https://github.com/nuxeo/nuxeo-web-ui/blob/9.10/elements/search/default/nuxeo-default-search-form.html) and [nuxeo-expired-search-form.html](https://github.com/nuxeo/nuxeo-web-ui/blob/9.10/elements/search/expired/nuxeo-expired-search-form.html) in order to customize the *Default Search* and *Expired Search* filter form. To do so, your own marketplace must deploy and override the proper HTML files in `$NUXEO_SERVER/nxserver/nuxeo.war/ui/search`.

### Add New Searches

You can insert a new search in the left drawer menu the same exact way you insert any slot contribution to it, by using the [DRAWER_ITEMS]({{page page='web-ui-slots#drawer_pages'}}) slot.

#### The DAM Example

The [Nuxeo DAM](https://github.com/nuxeo/nuxeo-dam/blob/9.10/nuxeo-dam-web-ui/src/main/resources/web/nuxeo.war/ui/nuxeo-dam/nuxeo-dam.html) addon defines its own `Asset Search` with the following:
```xml
<nuxeo-slot-content name="damSearchMenuButtons" slot="DRAWER_ITEMS" order="45">
  <template>
    <nuxeo-menu-icon id="assetsSearchButton" name="assetsSearch" icon="icons:perm-media" label="dam.assets.heading">
    </nuxeo-menu-icon>
  </template>
</nuxeo-slot-content>
```

And the corresponding [DRAWER_PAGE]({{page page='web-ui-slots#drawer_page'}}) slot, containing a `nuxeo-search-form` element.
```xml
<nuxeo-slot-content name="damSearchMenuButtons" slot="DRAWER_PAGES">
  <template>
    <nuxeo-search-form name="assetsSearch" search-name="assets" auto display-auto-control
                       provider="assets_search"
                       schemas="dublincore,common,uid,thumbnail"></nuxeo-search-form>
  </template>
</nuxeo-slot-content>
```
Here are some explanations about `nuxeo-menu-icon` and `nuxeo-search-form` properties:

```properties
name="assets"
```

The `name`property links the `nuxeo-menu-icon`to the `nuxeo-search-form`, so that clicking the former will trigger the latter to show.

```properties
search-name="assets"
```
The `search-name` property defines the name of the search and it is used to support the for the dynamic loading of the search-form as follows:


Navigating to `/search/assets` will display the search form and searh results defined by [nuxeo-assets-search-form.html](https://github.com/nuxeo/nuxeo-dam/blob/9.10/nuxeo-dam-web-ui/src/main/resources/web/nuxeo.war/ui/search/assets/nuxeo-assets-search-form.html) and [nuxeo-assets-search-results.html](https://github.com/nuxeo/nuxeo-dam/blob/9.10/nuxeo-dam-web-ui/src/main/resources/web/nuxeo.war/ui/search/assets/nuxeo-assets-search-results.html). This is only possible because they follow the following convention:
 - they are both located on the `$NUXEO_SERVER/nxserver/nuxeo.war/ui/search/assets` which has the same name as the `search-name` property
 - the name of [nuxeo-assets-search-form.html](https://github.com/nuxeo/nuxeo-dam/blob/9.10/nuxeo-dam-web-ui/src/main/resources/web/nuxeo.war/ui/search/assets/nuxeo-assets-search-form.html) and [nuxeo-assets-search-results.html](https://github.com/nuxeo/nuxeo-dam/blob/9.10/nuxeo-dam-web-ui/src/main/resources/web/nuxeo.war/ui/search/assets/nuxeo-assets-search-results.html) are in the form `nuxeo-{searchName}-search-form.html` and `nuxeo-{searchName}-search-results.html` respectively where `{searchName}` is `assets`, matching the `search-name` property of the `nuxeo-search-form` element, and are both placed on the `assets` directory mentioned above.

 ```properties
 search-name="assets"
 ```

 Please refer to the [Web UI routing]({{page page='web-ui-routing'}}) documentation for further details.

```properties
icon="icons:perm-media"
```
defines the icons to be displayed in the left drawer menu.

```properties
label="dam.assets.heading"
```
is the key label to be retrieved from [i18n]({{page page='web-ui-managing-translations'}}) resources to be used as tooltip in the left drawer menu.

#### Meaningful Properties When Defining Your Own Search

As just explained, to create a search, you just need to deploy a new `nuxeo-{searchName}-search.html` element in your `$NUXEO_SERVER/nxserver/nuxeo.war/ui/search/{searchName}` directory and add it as a slot contribution using the `nuxeo-searh-form` element. However, it is important that these elements provides the proper information to perform the search.

| Property                                                                                                   | Description                                                                                                | Example                                                                                                                              |
|:-----------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------|
| [provider](https://github.com/nuxeo/nuxeo-web-ui/blob/9.10/elements/search/nuxeo-search-form.html#L383)    | The name of the page provider to be used, defined server side.                                             | [default_search](https://github.com/nuxeo/nuxeo-web-ui/blob/9.10/elements/nuxeo-web-ui-bundle.html#L366) page provider               |
| [schemas](https://github.com/nuxeo/nuxeo-web-ui/blob/9.10/elements/search/nuxeo-search-form.html#L402)     | A comma-separated value list of schema names to be fetched when loading documents retrieved by the search. | [schemas](https://github.com/nuxeo/nuxeo-web-ui/blob/9.10/elements/nuxeo-web-ui-bundle.html#L366) needed for default search          |
| [queue](https://github.com/nuxeo/nuxeo-web-ui/blob/9.10/elements/search/nuxeo-search-form.html#L408)       | Boolean property. If true, then the queue will be displayed by default instead of search filters.          | [expired_search](https://github.com/nuxeo/nuxeo-web-ui/blob/9.10/elements/nuxeo-web-ui-bundle.html#L377) displays a queue by default |
| [auto](https://github.com/nuxeo/nuxeo-web-ui/blob/9.10/elements/search/nuxeo-search-form.html#L494)        | Boolean property.  If `true`, automatically execute the search each time a param is changed.               | [auto](https://github.com/nuxeo/nuxeo-web-ui/blob/9.10/elements/nuxeo-web-ui-bundle.html#L366) search                                |
| [label](https://github.com/nuxeo/nuxeo-web-ui/blob/9.10/elements/search/nuxeo-search-form.html#L259)       | String property.  The key to the `i18n` label to be shown as the search title                              | [expiredSearch.expiredDocuments](https://github.com/nuxeo/nuxeo-web-ui/blob/9.10/elements/nuxeo-web-ui-bundle.html#L379) search      |
| [search-name](https://github.com/nuxeo/nuxeo-web-ui/blob/9.10/elements/search/nuxeo-search-form.html#L479) | String property.  The name of the search layout, as explained above                                        | [expired](https://github.com/nuxeo/nuxeo-web-ui/blob/9.10/elements/nuxeo-web-ui-bundle.html#L377) name-search                        |
