---
title: 'HOWTO: Configure Searches'
description: Learn how to create a new search screen with Studio Designer.
review:
  comment: ''
  date: '2019-07-18'
  status: ok
toc: true
details:
  howto:
    excerpt: Learn how to create a new search screen with Studio Designer.
    level: Intermediate
    tool: 'Studio Designer, code'
    topics: 'Searches'
labels:
  - lts2016-ok
  - nuxeo-web-ui
  - tcardoso
  - extension
  - university
  - search-tab-component
  - lts2017-ok
  - lts2019-ok
  - howto
tree_item_index: 600
---

After having created your own [document type]({{page page='web-ui-document-layouts'}}#how-to-define-a-new-document-type-layout-with-the-view-designer) you will probably want to create your own search.

{{! excerpt}}
Learn how to create a new search screen with an icon in the left menu. The search will be compose of a full text search, a search by date range, a search by owners and finally by tags.
{{! /excerpt}}

{{#> callout type='info'}}
Watch the related courses on Hyland University:</br>
[Course on Searches with Nuxeo Studio Modeler & Designer](https://university.hyland.com/courses/e4141)</br>
[Video on a simple Nuxeo Project Creation](https://university.hyland.com/courses/e4114)
![]({{file name='web-ui-search-university.png'}} ?w=450,border=true)
{{/callout}}

## Prerequisites

- A [Contract document type]({{page version='' space='nxdoc' page='web-ui-document-layouts'}}#create-a-contract-document-type) created in Nuxeo Modeler
- Make sure that the [Nuxeo Web UI]({{page version='' space='nxdoc' page='web-ui'}}) addon is installed on your instance.

Once you are all set, you can navigate to Nuxeo Studio to start creating your search.

## Create a Page Provider

The first step is to create a [page provider]({{page version='' space='studio' page='page-providers'}}) in Studio Modeler.

In **Configuration**, go to **Page Providers**, click on **New** and name it `Search`.

**The full text search:**
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/HOWTO: Configure Searches/full-text-vd.png
    name: full-text-vd.png
    1.1.3#screenshot#up_to_date
--}}
![full-text-vd.png](/nx_assets/6d9c814a-febc-41e9-82b2-7ab55a78ea1c.png ?w=250,border=true)

1. Next to **Predicates** click on **Add**.</br>
   A popup window appears.
1. Click on **Edit binding** and select `schema:system`&nbsp;> `fulltext`.
1. Save your changes.

**The search by date range:**
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/HOWTO: Configure Searches/creation-date-range-vd.png
    name: creation-date-range-vd.png
    1.1.3#screenshot#up_to_date
--}}
![creation-date-range-vd.png](/nx_assets/4ce1b16a-6422-4f43-87f2-e6e1f2bea0d0.png ?w=250,border=true)

1. Next to **Aggregates** click on **Add**.</br>
   A popup window appears.
1. Fill the popup window like this:
   <div class="table-scroll">
   <table class="hover">
   <tbody>
   <tr>
   <th colspan="1">Aggregate Type</th>
   <td colspan="1">Date Range</td>
   </tr>
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
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/HOWTO: Configure Searches/tags-search-vd.png
    name: tags-search-vd.png
    1.1.3#screenshot#up_to_date
--}}
![tags-search-vd.png](/nx_assets/6325dccd-6998-4daa-85e5-b2537e74bc75.png ?w=250,border=true)

1. Add another new Predicates.
1. Click on **Edit binding** and select `schema:system`&nbsp;> `tag[]`.

**The search by owner of the contract:**
![]({{file name='contract-owner-vd.png'}} ?w=250,border=true)

1. Add another new Predicates.
1. Click on **Edit binding** and select `schema:contract`&nbsp;> `owner`.
1. Save your changes.

Now, click on **Configure layouts in Designer** at the top-right of your screen.
You are now in Studio Designer, where you can configure the layouts of your Search.

## Create a Search Layout

In the Studio Designer, you are now in the **UI** tab, under **Layouts** > **Page Providers**. You will find the page provider created previously.

{{{multiexcerpt 'quick-switcher' page='generic-multi-excerpts'}}}

Two layouts are available. Let's edit the **form** layout first.

1. Click on **form**, then **Configure**.</br>
   The form layout is now displayed in bold. On the right, in the properties catalog, the elements that we defined in Studio are displayed.
1. Click on the **System Fulltext** element on the main view, you can edit the label in the left catalog to display `Full text`. You can do the same with the other elements.

Let's configure the **results** layout now.

1. On the left menu, click on **results**, then **Configure**.
1. It automatically creates the result view by default (grid and table). Leave it like this and click on **Save**.

You now need to add your labels to your translations file to display them correctly in the UI.</br>
To do so:

1. Click on the **UI** table.
1. Click on **Translations**.
1. Use the default `messages.json` or create your own language.
1. Create a new entry in the JSON file with key `label.ui.aggregate.<label>` and the label as value. Here it's:
  ```
  {
  	"label.ui.aggregate.from_now-1y_to_now-1M":"Last year",
  	"label.ui.aggregate.from_now-1M_to_now-7d":"Last month",
  	"label.ui.aggregate.from_now-7d_to_now-24H":"Last week",
  	"label.ui.aggregate.from_now-24H_to_now":"Last 24H"
  }
  ```

## Create a New Drawer Item

The next step is to add a button in the drawer menu to display the search screen.

1. Go back to your `Search` page provider, in Modeler.
1. In the **Bind more elements** section, select **Drawer item search** to create your menu item.
1. Fill in the page like this:
  - Name: Contract
  - Available: enabled
  - Label: `Contracts`
  - Icon: `icons:assignment`
  - provider: `Search`
  - schemas: `dublincore`, `contract`
  - search-name: `search`
1. Click on **Show Advanced Options**:
  - auto: enabled
1. Save your changes, deploy your Studio project on your instance and you're done :)

![]({{file name='result-search-screen-vd.png'}} ?w=350,border=true)

## Going Further

### Visually Configure Table Results Layout

In Studio Designer's layout tab:

1. Go back to your **Search** page provider results layout configuration. ![]({{file name='pp-results-menu.png'}} ?w=122,border=true)
1. Edit the table layout configuration. ![]({{file name='pp-results-table-config.png'}} ?w=344,border=true)
1. You will be taken to the element's configuration. From there, click on the **Switch to Table Editor** icon at the bottom of the page. ![]({{file name='switch-table-editor.png'}} ?w=155,border=true)

You are now in the table editor.

Each result column is shown with the corresponding field and element. Clicking on an element will display its properties on the right side of the screen so that you can configure it.

![]({{file name='pp-table-editor-element-properties.png'}} ?w=621,border=true)

More columns can be added using drag and drop from the catalog on the right side of the screen. For each column, the label can be edited directly and translated by entering the `[[i18n('your.translation.key')]]` pattern.

![]({{file name='pp-table-editor-layout.png'}} ?w=650,border=true)

Columns can be reordered by drag and dropping them around.

Finally, when hovering on a column, you can use additional icons to configure them:

- ![]({{file name='icon-arrows.png'}} ?w=25) The arrows icon toggles the possibility to sort results using this column.

- ![]({{file name='icon-eye.png'}} ?w=25) The eye icon toggles the default visibility of the column. If you make it optional, it won't appear by default but can be made visible by users in Web UI. When made visible, it will be placed exactly where you put it in your configuration.

- ![]({{file name='icon-trash.png'}} ?w=25) The trash icon deletes the column.

When you are finished, click on **Save work in progress** at the top right of the screen.

## Technical Overview

### Overriding Existing Nuxeo Web UI Search

Nuxeo Web UI comes with the _Default Search_ and _Expired Search_ both plugged on server side page providers [default_search](https://github.com/nuxeo/nuxeo/blob/9.10/nuxeo-features/nuxeo-search/nuxeo-search-core/src/main/resources/OSGI-INF/search-pageprovider-contrib.xml#L6) and [expired_search](https://github.com/nuxeo/nuxeo/blob/9.10/nuxeo-features/nuxeo-search/nuxeo-search-core/src/main/resources/OSGI-INF/search-pageprovider-contrib.xml#L150) by default.

| Default search                                             | Expired search                                             |
| :--------------------------------------------------------- | :--------------------------------------------------------- |
| ![]({{file name='DEFAULT_SEARCH.png'}} ?w=400,border=true) | ![]({{file name='EXPIRED_SEARCH.png'}} ?w=400,border=true) |

Within the Web UI, a search is composed of 2 main parts:

- the search form displayed on the left in the drawer panel.
- the search result panel displayed on the right in the main content.

![]({{file name='SEARCH_COMPOSITION.png'}} ?w=600,border=true)

The search form itself has 2 rendering modes:

- `filter mode` where you can set filter and criteria. Each time a filter changes, it updates the results displayed in the main container.
- `queue mode` where search results are displayed with a vertical scroll (like in the expired search screenshot above).

A toggle button allows you to switch between `filter mode` and `queue mode`.

The search form is a dynamically loaded element. For instance, [nuxeo-default-search-form.html](https://github.com/nuxeo/nuxeo-web-ui/blob/9.10/elements/search/default/nuxeo-default-search-form.html) and [nuxeo-default-search-results.html](https://github.com/nuxeo/nuxeo-web-ui/blob/9.10/elements/search/default/nuxeo-default-search-results.html) contribute to the _Default Search_ form and results layouts and the [nuxeo-expired-search-form.html](https://github.com/nuxeo/nuxeo-web-ui/blob/9.10/elements/search/expired/nuxeo-expired-search-form.html) and [nuxeo-expired-search-results.html](https://github.com/nuxeo/nuxeo-web-ui/blob/9.10/elements/search/expired/nuxeo-expired-search-results.html) contribute to the _Expired Search_ form and results layouts.

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

Referring to [Web UI deployment]({{page version='' page='web-ui-deployment'}}) documentation, you can override these [nuxeo-default-search.html](https://github.com/nuxeo/nuxeo-web-ui/blob/9.10/elements/search/default/nuxeo-default-search-form.html) and [nuxeo-expired-search-form.html](https://github.com/nuxeo/nuxeo-web-ui/blob/9.10/elements/search/expired/nuxeo-expired-search-form.html) in order to customize the _Default Search_ and _Expired Search_ filter form. To do so, your own marketplace must deploy and override the proper HTML files in `$NUXEO_SERVER/nxserver/nuxeo.war/ui/search`.

### Add New Searches

You can insert a new search in the left drawer menu the same exact way you insert any slot contribution to it, by using the [DRAWER_ITEMS]({{page page='web-ui-slots'}}#drawer_pages) slot.

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

And the corresponding [DRAWER_PAGE]({{page page='web-ui-slots'}}#drawer_page) slot, containing a `nuxeo-search-form` element.

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

Navigating to `/search/assets` will display the search form and search results defined by [nuxeo-assets-search-form.html](https://github.com/nuxeo/nuxeo-dam/blob/9.10/nuxeo-dam-web-ui/src/main/resources/web/nuxeo.war/ui/search/assets/nuxeo-assets-search-form.html) and [nuxeo-assets-search-results.html](https://github.com/nuxeo/nuxeo-dam/blob/9.10/nuxeo-dam-web-ui/src/main/resources/web/nuxeo.war/ui/search/assets/nuxeo-assets-search-results.html). This is only possible because they follow the following convention:

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

As just explained, to create a search, you just need to deploy a new `nuxeo-{searchName}-search.html` element in your `$NUXEO_SERVER/nxserver/nuxeo.war/ui/search/{searchName}` directory and add it as a slot contribution using the `nuxeo-search-form` element. However, it is important that these elements provide the proper information to perform the search.

| Property                                                                                                   | Description                                                                                                | Example                                                                                                                              |
| :--------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| [provider](https://github.com/nuxeo/nuxeo-web-ui/blob/9.10/elements/search/nuxeo-search-form.html#L383)    | The name of the page provider to be used, defined server side.                                             | [default_search](https://github.com/nuxeo/nuxeo-web-ui/blob/9.10/elements/nuxeo-web-ui-bundle.html#L366) page provider               |
| [schemas](https://github.com/nuxeo/nuxeo-web-ui/blob/9.10/elements/search/nuxeo-search-form.html#L402)     | A comma-separated value list of schema names to be fetched when loading documents retrieved by the search. | [schemas](https://github.com/nuxeo/nuxeo-web-ui/blob/9.10/elements/nuxeo-web-ui-bundle.html#L366) needed for default search          |
| [queue](https://github.com/nuxeo/nuxeo-web-ui/blob/9.10/elements/search/nuxeo-search-form.html#L408)       | Boolean property. If true, then the queue will be displayed by default instead of search filters.          | [expired_search](https://github.com/nuxeo/nuxeo-web-ui/blob/9.10/elements/nuxeo-web-ui-bundle.html#L377) displays a queue by default |
| [auto](https://github.com/nuxeo/nuxeo-web-ui/blob/9.10/elements/search/nuxeo-search-form.html#L494)        | Boolean property. If `true`, automatically executes the search each time a param is changed.                | [auto](https://github.com/nuxeo/nuxeo-web-ui/blob/9.10/elements/nuxeo-web-ui-bundle.html#L366) search                                |
| [label](https://github.com/nuxeo/nuxeo-web-ui/blob/9.10/elements/search/nuxeo-search-form.html#L259)       | String property. The key to the `i18n` label to be shown as the search title                               | [expiredSearch.expiredDocuments](https://github.com/nuxeo/nuxeo-web-ui/blob/9.10/elements/nuxeo-web-ui-bundle.html#L379) search      |
| [search-name](https://github.com/nuxeo/nuxeo-web-ui/blob/9.10/elements/search/nuxeo-search-form.html#L479) | String property. The name of the search layout, as explained above                                         | [expired](https://github.com/nuxeo/nuxeo-web-ui/blob/9.10/elements/nuxeo-web-ui-bundle.html#L377) name-search                        |

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Nuxeo Studio Community Cookbook'}}

- [Custom Searches with Highlight](https://github.com/nuxeo/nuxeo-studio-community-cookbook/tree/master/modules/nuxeo/highlight)

{{/panel}}</div><div class="column medium-6">
</div></div>
