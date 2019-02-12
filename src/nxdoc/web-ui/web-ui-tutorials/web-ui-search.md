---
title: "HOWTO: Customize Searches"
review:
    comment: ''
    date: '2017-01-16'
    status: ok
toc: true
details:
    howto:
        excerpt: Learn how to create a new search screen with Studio Designer.
        level: Intermediate
        tool: Studio Designer, code
        topics: Web UI, Studio Designer
labels:
    - lts2016-ok
    - nuxeo-web-ui
    - extension
    - search
tree_item_index: 500

---
After having created your own [document type]({{page page='web-ui-document-layouts'}}#how-to-define-a-new-document-type-layout-with-the-view-designer) you will probably want to create your own search.

We will learn how to create a new search screen with an icon in the left menu. The search will be compose of a full text search, a search by date range, a search by owners and finally by tags.

## Prerequisites
- A [Contract document type]({{page version='' space='nxdoc' page='getting-started-with-nuxeo-studio'}}#step-3-create-a-contract-document-type) created in Studio Modeler
- The Web UI addon installed on your instance

Once you are all set, you can navigate to Studio Modeler to start creating your search.

## Create a Page Provider

The first step is to create a [page provider]({{page version='' space='studio' page='page-providers'}}) in Studio Modeler.

In **Configuration**, go to **Page Providers**, click on **New** and name it `Search`.

**The full text search:**
![]({{file name='full-text-vd.png'}} ?w=250, border=true)
1. Next to **Predicates** click on **Add**.
  A popup window appears.
1. Click on **Edit binding** and select `schema:system`&nbsp;> `fulltext`.

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

## Create a Form Layout

In the Studio Designer, in the **UI** tab, under  **Layouts** > **Page Providers** you will find your page provider created previously.

Click on **Customize**, two layouts are available. Let's edit the **Form** layout.

1. Click on **Form**, then **Customize**.
    The form layout is now displayed in bold with an asterisk next to it. On the right, in the properties catalog, the elements that we defined in Studio are displayed here.
2. Expand the first element and drag and drop the **Edit** mode into the editor.
  Do the same for the three other elements.
4. Click on the **Full text** one, on the right you can edit the label to display `Full text`.

You now need to add your labels to your translations file to display them correctly in the UI. To do so:

1. Click on the **UI** table.
1. Click on **Translations**.
1. Use the default `messages.json` or create your own language.
1. Create a new entry in the JSON file with key `label.ui.aggregate.<label>` and the label as value. Here it's:
    - `"label.ui.aggregate.from_now-1y_to_now-1M":"Last year"`,
    - `"label.ui.aggregate.from_now-1M_to_now-7d":"Last month"`,
    - `"label.ui.aggregate.from_now-7d_to_now-24H":"Last week"`,
    - `"label.ui.aggregate.from_now-24H_to_now":"Last 24H"`

## Create a Drawer
The next step is to add a button in the left menu to display the search screen.

1. Go to the **UI** tab in the Studio Designer and then on **Drawer**.
1. Roll over the Create button and select the Search type ![]({{file name='search-icon-drawer-vd.png'}} ?w=20).
1. Fill in the page like this:
  - Name: Contract
  - Available: enabled
  - provider: `Search`
  - schemas: `dublincore`, `contract`
  - search-name: `search`
  - name: contract
  - Label: `Contracts`
  - Icon: `icons:assignment`
1. Expand the **Elements & Attributes** box and check the **Auto** attribute to automatically execute the search each time a param is changed.
1. Save your changes, deploy your Studio project on your instance and you're done :)

![]({{file name='result-search-screen-vd-810.png'}} ?w=350,border=true)

## Technical Overview

### Overriding Existing Nuxeo Web UI Search

Nuxeo Web UI comes with the *Default Search* and *Expired Search* both plugged on server side page providers [default_search](https://github.com/nuxeo/nuxeo/blob/master/nuxeo-features/nuxeo-search/nuxeo-search-core/src/main/resources/OSGI-INF/search-pageprovider-contrib.xml#L6) and [expired_search](https://github.com/nuxeo/nuxeo/blob/master/nuxeo-features/nuxeo-search/nuxeo-search-core/src/main/resources/OSGI-INF/search-pageprovider-contrib.xml#L150) by default.

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

The search form is a dynamically loaded element. For instance, [nuxeo-default-search.html](https://github.com/nuxeo/nuxeo-web-ui/blob/0.8/elements/search/nuxeo-default-search.html) contributes the *Default Search* and the [nuxeo-expired-search.html](https://github.com/nuxeo/nuxeo-web-ui/blob/0.8/elements/search/nuxeo-expired-search.html) contributes the *Expired Search*.

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
│   ├── nuxeo-assets-search.html
│   ├── nuxeo-default-search.html
│   ├── nuxeo-expired-search.html
│   ├── nuxeo-saved-search-actions.html
│   ├── nuxeo-search-form.html
│   └── nuxeo-search-results.html
├── ...
...
```

Referring to  [Web UI deployment]({{page version='' page='web-ui-deployment'}}) documentation, you can override these [nuxeo-default-search.html](https://github.com/nuxeo/nuxeo-web-ui/blob/0.8/elements/search/nuxeo-default-search.html) and [nuxeo-expired-search.html](https://github.com/nuxeo/nuxeo-web-ui/blob/0.8/elements/search/nuxeo-expired-search.html) in order to customize the *Default Search* and *Expired Search* filter form. To do so, your own marketplace must deploy and override the proper HTML files in `$NUXEO_SERVER/nxserver/nuxeo.war/ui/search`.

### Add New Searches

You can insert a new search in the left drawer menu thanks to the [SEARCH_MENU_BUTTONS]({{page page='web-ui-slots#search_menu_buttons'}}) slot.

#### The DAM Example

The [Nuxeo DAM](https://github.com/nuxeo/nuxeo-dam/blob/8.10/nuxeo-dam-web-ui/src/main/resources/web/nuxeo.war/ui/nuxeo-dam/nuxeo-dam.html) addon defines its own `Asset Search` with the following:
```xml
<nuxeo-slot-content name="damSearchMenuButtons" slot="SEARCH_MENU_BUTTONS">
  <template>
    <nuxeo-menu-icon id="assetsSearchButton" name="assetsSearch" route="search:assets" icon="icons:perm-media" label="dam.assets.heading">
    </nuxeo-menu-icon>
  </template>
</nuxeo-slot-content>
```

Here are some explanations about `nuxeo-menu-icon` properties:

```properties
route="search:assets"
```

will trigger a navigation to `/search/assets`.

Navigating to `/search/assets` will display the search filters form defined by [nuxeo-assets-search.html](https://github.com/nuxeo/nuxeo-dam/blob/8.10/nuxeo-dam-web-ui/src/main/resources/web/nuxeo.war/ui/search/nuxeo-assets-search.html) in the left drawer menu content. Note that this is only possible because it is convention-based:
 - [nuxeo-assets-search.html](https://github.com/nuxeo/nuxeo-dam/blob/8.10/nuxeo-dam-web-ui/src/main/resources/web/nuxeo.war/ui/search/nuxeo-assets-search.html) is deployed in the `$NUXEO_SERVER/nxserver/nuxeo.war/ui/search` directory.
 - the name of [nuxeo-assets-search.html](https://github.com/nuxeo/nuxeo-dam/blob/8.10/nuxeo-dam-web-ui/src/main/resources/web/nuxeo.war/ui/search/nuxeo-assets-search.html) is in the form `nuxeo-{searchName}-search.html` where `{searchName}` is `assets` and matches the second part of the routing directive:
 ```properties
 route="search:assets"
 ```
 on the `nuxeo-menu-icon`.

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

As just explained, to create a search, you just need to deploy a new `nuxeo-{searchName}-search.html` element in your `$NUXEO_SERVER/nxserver/nuxeo.war/ui/search` directory. However, it is important that this elements provides the proper information to perform the search.

| Property       | Description                                                                                               | Example                                                                                                                                     |
|:---------------|:----------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------|
| `provider`     | the name of the page provider to be used, defined server side                                              | [default_search](https://github.com/nuxeo/nuxeo-web-ui/blob/0.8/elements/search/nuxeo-default-search.html#L147) page provider               |
| `schemas`      | a comma-separated value list of schema names to be fetched when loading documents retrieved by the search | [schemas](https://github.com/nuxeo/nuxeo-web-ui/blob/0.8/elements/search/nuxeo-default-search.html#L167) needed for default search          |
| `displayQueue` | boolean property. If true, then the queue will be displayed by default instead of search filters          | [expired_search](https://github.com/nuxeo/nuxeo-web-ui/blob/0.8/elements/search/nuxeo-expired-search.html#L119) displays a queue by default |

{{#> callout type='warning' }}
It is not possible to customize the screen showing search results in the main container yet.
{{/callout}}
