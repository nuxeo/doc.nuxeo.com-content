---
title: Web UI Routing
review:
    comment: ''
    date: '2017-01-16'
    status: ok
toc: true
labels:
    - lts2016-ok
    - nuxeo-web-ui
    - nsilva
    - extension
    - routing
    - content-review-lts2017
tree_item_index: 200

---
## Web UI Routing Mechanism

The [nuxeo-app.html](https://github.com/nuxeo/nuxeo-web-ui/blob/1.0/elements/nuxeo-app.html#L65) is the very top element of the Web UI.

Its main content is composed of:
 - a [paper-drawer-panel](https://github.com/nuxeo/nuxeo-web-ui/blob/1.0/elements/nuxeo-app.html#L245) which has:
   - a [paper-menu](https://github.com/nuxeo/nuxeo-web-ui/blob/1.0/elements/nuxeo-app.html#L254) defining the left drawer menu buttons.
   - collapsible [iron-pages](https://github.com/nuxeo/nuxeo-web-ui/blob/1.0/elements/nuxeo-app.html#L264) defining the left menu content associated to each menu button.
 - a [paper-header-panel](https://github.com/nuxeo/nuxeo-web-ui/blob/1.0/elements/nuxeo-app.html#L290) defining the main content with [iron-pages](https://github.com/nuxeo/nuxeo-web-ui/blob/1.0/elements/nuxeo-app.html#L291):


```xml
<iron-pages id="pages" selected="[[page]]" attr-for-selected="name" selected-attribute="visible">

    <nuxeo-slot slot="PAGES" model="[[actionContext]]"></nuxeo-slot>

    <nuxeo-home name="home" tasks="[[tasks]]"></nuxeo-home>

    <nuxeo-browser name="browse" id="browser" document="[[currentDocument]]" selected-tab="{{docAction}}" clipboard="[[clipboard]]"></nuxeo-browser>

    <nuxeo-search-results name="search" id="searchResults" search-form="[[searchForm]]"></nuxeo-search-results>

    ...

</iron-pages>
```

On [iron-pages](https://github.com/nuxeo/nuxeo-web-ui/blob/1.0/elements/nuxeo-app.html#L291), you can see the `selected` attributes bound to the [page](https://github.com/nuxeo/nuxeo-web-ui/blob/1.0/elements/nuxeo-app.html#L361) property. When this [page](https://github.com/nuxeo/nuxeo-web-ui/blob/1.0/elements/nuxeo-app.html#L361) property changes its value, the [iron-pages](https://github.com/nuxeo/nuxeo-web-ui/blob/1.0/elements/nuxeo-app.html#L291) will display the content element which has the same `name`.

For instance, on [nuxeo-home](https://github.com/nuxeo/nuxeo-web-ui/blob/1.0/elements/nuxeo-app.html#L295), when clicking a recently viewed document, it will call the [navigateTo](https://github.com/nuxeo/nuxeo-web-ui/blob/1.0/elements/nuxeo-home.html#L210) method

```javascript
  this.navigateTo('browse', detail.doc.path);
```

defined by [routing.html](https://github.com/nuxeo/nuxeo-web-ui/blob/1.0/elements/routing.html#L159). It will navigate to the `/browse` part of the Web UI and therefore display the [nuxeo-browser](https://github.com/nuxeo/nuxeo-web-ui/blob/1.0/elements/nuxeo-app.html#L297) element in the main [iron-pages](https://github.com/nuxeo/nuxeo-web-ui/blob/1.0/elements/nuxeo-app.html#L291) which shows the clicked document.

## Routing Behavior

The [Nuxeo.RoutingBehavior](https://github.com/nuxeo/nuxeo-ui-elements/blob/1.0/nuxeo-routing-behavior.html) is a behavior which provides convenient methods such as [urlFor](https://github.com/nuxeo/nuxeo-ui-elements/blob/1.0/nuxeo-routing-behavior.html#L32) to insert inner links in the Web UI.

For instance, [nuxeo-document-tree.html](https://github.com/nuxeo/nuxeo-web-ui/blob/1.0/elements/nuxeo-document-tree/nuxeo-document-tree.html#L158) which is the navigation tree in the left menu uses `urlFor` on each tree node to navigate to the associated document.

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
