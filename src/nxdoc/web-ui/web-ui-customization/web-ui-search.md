---
title: Searches
review:
    comment: ''
    date: '2016-12-20'
    status: ok
toc: true
labels:
    - lts2016-ok
    - nuxeo-web-ui
    - extension
    - search
tree_item_index: 300

---

## Overriding existing Nuxeo Web UI search

Nuxeo Web UI comes with the *Default Search* and *Expired Search* both plugged on a server side page providers [default_search](https://github.com/nuxeo/nuxeo/blob/master/nuxeo-features/nuxeo-search/nuxeo-search-core/src/main/resources/OSGI-INF/search-pageprovider-contrib.xml#L6) and [expired_search](https://github.com/nuxeo/nuxeo/blob/master/nuxeo-features/nuxeo-search/nuxeo-search-core/src/main/resources/OSGI-INF/search-pageprovider-contrib.xml#L150) by default.

| Default search                                             | Expired search                                             |
|:-----------------------------------------------------------|:-----------------------------------------------------------|
| ![]({{file name='DEFAULT_SEARCH.png'}} ?w=400,border=true) | ![]({{file name='EXPIRED_SEARCH.png'}} ?w=400,border=true) |

Within the Web UI, a search is composed of 2 main parts:
 - the search form displayed the left hand side drawer panel.
 - the search result panel displayed in the right hand side main content.

 ![]({{file name='SEARCH_COMPOSITION.png'}} ?w=600,border=true)

The search form itself has 2 rendering modes:
 - `filter mode` where you can set filter and criteria. Each time a filter changes, it updates the results displayed in the main container.
 - `queue mode` where search results are displayed within an vertical scrolling (like in expired search screenshot above).

A toggle button allows to switch between `filter mode` and `queue mode`.

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

Referring to  [Web UI deployment]({{page version='' page='web-ui-deployment'}}) documentation, you can just override these [nuxeo-default-search.html](https://github.com/nuxeo/nuxeo-web-ui/blob/0.8/elements/search/nuxeo-default-search.html) and [nuxeo-expired-search.html](https://github.com/nuxeo/nuxeo-web-ui/blob/0.8/elements/search/nuxeo-expired-search.html) in order to customize the *Default Search* and *Expired Search* filter form. To do so, your own marketplace must deploy and override in `$NUXEO_SERVER/nxserver/nuxeo.war/ui/search` the proper html files.

## Add new searches

You can insert a new search in the left drawer menu thanks to the [SEARCH_MENU_BUTTONS]({{page page='web-ui-slots#search_menu_buttons'}}) slot.

### The DAM example

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

will trigger a navigation to `/search/assets`. The fact of navigating to `/search/assets` will display the search filters form defined by [nuxeo-assets-search.html](https://github.com/nuxeo/nuxeo-dam/blob/8.10/nuxeo-dam-web-ui/src/main/resources/web/nuxeo.war/ui/search/nuxeo-assets-search.html) in the left drawer menu content. Note that this is only possible because it is convention based:
 - [nuxeo-assets-search.html](https://github.com/nuxeo/nuxeo-dam/blob/8.10/nuxeo-dam-web-ui/src/main/resources/web/nuxeo.war/ui/search/nuxeo-assets-search.html) is deployed in the `$NUXEO_SERVER/nxserver/nuxeo.war/ui/search` directory.
 - the name of [nuxeo-assets-search.html](https://github.com/nuxeo/nuxeo-dam/blob/8.10/nuxeo-dam-web-ui/src/main/resources/web/nuxeo.war/ui/search/nuxeo-assets-search.html) is of the form `nuxeo-{searchName}-search.html` where `{searchName}` is *assets* and matches the second part of the routing directive:
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
is the key label to be retrieved from [i18n]({{page page='managing-translations'}}) resources to be used as tooltip in the left drawer menu.

### Meaningful properties when defining your own search

As just explained, to create a search, you just need to deploy a new `nuxeo-{searchName}-search.html` element in your `$NUXEO_SERVER/nxserver/nuxeo.war/ui/search` directory. However, it is important that this elements provides the proper information to perform the search.

| Property       | Description                                                                                               | Example                                                                                                                                     |
|:---------------|:----------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------|
| `provider`     | the name of the page provider defined server side to be used                                              | [default_search](https://github.com/nuxeo/nuxeo-web-ui/blob/0.8/elements/search/nuxeo-default-search.html#L147) page provider               |
| `schemas`      | a comma separated value list of schema names to be fetched when loading documents retrieved by the search | [schemas](https://github.com/nuxeo/nuxeo-web-ui/blob/0.8/elements/search/nuxeo-default-search.html#L167) needed for default search          |
| `displayQueue` | boolean property. If true, then the queue will be displayed by default instead of serach filters          | [expired_search](https://github.com/nuxeo/nuxeo-web-ui/blob/0.8/elements/search/nuxeo-expired-search.html#L119) displays a queue by default |

{{#> callout type='info' }}

LIMITATION: it is not possible to customize the screen showing search results in the main container yet.

{{/callout}}
