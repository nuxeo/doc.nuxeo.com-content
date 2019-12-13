---
title: Web UI Routing
review:
    comment: ''
    date: '2017-12-13'
    status: ok
toc: true
labels:
    - lts2016-ok
    - nuxeo-web-ui
    - nsilva
    - extension
    - routing
    - lts2017-ok
tree_item_index: 200

---
## Web UI Routing Mechanism

The [nuxeo-app.html](https://github.com/nuxeo/nuxeo-web-ui/blob/9.10/elements/nuxeo-app.html) is the very top element of the Web UI.

Its main content is composed of:
 - a [paper-drawer-panel](https://github.com/nuxeo/nuxeo-web-ui/blob/9.10/elements/nuxeo-app.html#L220) which has:
 - a [paper-listbox](https://github.com/nuxeo/nuxeo-web-ui/blob/9.10/elements/nuxeo-app.html#L229) defining the left drawer menu buttons.
   - collapsible [iron-pages](https://github.com/nuxeo/nuxeo-web-ui/blob/9.10/elements/nuxeo-app.html#L243) defining the left menu content associated to each menu button.
 - a [paper-header-panel](https://github.com/nuxeo/nuxeo-web-ui/blob/9.10/elements/nuxeo-app.html#L269) defining the main content with [iron-pages](https://github.com/nuxeo/nuxeo-web-ui/blob/9.10/elements/nuxeo-app.html#L270):


```xml
<iron-pages id="pages" selected="[[page]]" attr-for-selected="name" selected-attribute="visible">

    <nuxeo-slot slot="PAGES" model="[[actionContext]]"></nuxeo-slot>

    <nuxeo-home name="home" tasks="[[tasks]]"></nuxeo-home>

    <nuxeo-browser name="browse" id="browser" document="[[currentDocument]]" selected-tab="\{{docAction}}" clipboard="[[clipboard]]"></nuxeo-browser>

    <nuxeo-search-results name="search" id="searchResults" search-form="[[searchForm]]"></nuxeo-search-results>

    ...

</iron-pages>
```

On [iron-pages](https://github.com/nuxeo/nuxeo-web-ui/blob/9.10/elements/nuxeo-app.html#L270), you can see the `selected` attributes bound to the [page](https://github.com/nuxeo/nuxeo-web-ui/blob/9.10/elements/nuxeo-app.html#L350) property. When this [page](https://github.com/nuxeo/nuxeo-web-ui/blob/9.10/elements/nuxeo-app.html#lL350) property changes its value, the [iron-pages](https://github.com/nuxeo/nuxeo-web-ui/blob/9.10/elements/nuxeo-app.html#L270) will display the content element which has the same `name`.

For instance, on [nuxeo-home](https://github.com/nuxeo/nuxeo-web-ui/blob/9.10/elements/nuxeo-app.html#L274), when clicking a recently viewed document, it will call the [navigateTo](https://github.com/nuxeo/nuxeo-web-ui/blob/9.10/elements/nuxeo-home.html#L215) method

```javascript
  this.navigateTo('browse', detail.doc.path);
```

defined on `Nuxeo.RoutingBehavior`. It will navigate to the `/browse` part of the Web UI and therefore display the [nuxeo-browser](https://github.com/nuxeo/nuxeo-web-ui/blob/9.10/elements/nuxeo-app.html#L276) element in the main [iron-pages](https://github.com/nuxeo/nuxeo-web-ui/blob/9.10/elements/nuxeo-app.html#L270) which shows the clicked document.

## Routing Behavior

The `Nuxeo.RoutingBehavior` is a behavior which provides convenient methods such as `urlFor` to insert inner links in the Web UI.

For instance, [nuxeo-document-tree.html](https://github.com/nuxeo/nuxeo-web-ui/blob/9.10/elements/nuxeo-document-tree/nuxeo-document-tree.html) which is the navigation tree in the left menu uses `urlFor` on each tree node to navigate to the associated document.

```xml
<a href$="[[urlFor('browse', item.path)]]" class="layout horizontal">
  <span><iron-icon icon="icons:chevron-left" class="flex"></iron-icon></span>
  <span class="parent">[[item.title]]</span>
</a>
```
![]({{file name='NAVIGATION_TREE.png'}} ?w=400,border=true)


Another example use case of the routing mechanism are:
 - the [USER_MENU]({{page page='web-ui-slots#user_menu'}}) slot
 - when [adding a new search]({{page version='' space='nxdoc' page='web-ui-search'}})
