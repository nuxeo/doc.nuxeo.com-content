---
title: Routing
review:
    comment: ''
    date: '2017-01-09'
    status: ok
toc: true
labels:
    - lts2016-ok
    - nuxeo-web-ui
    - extension
    - routing
tree_item_index: 800

---
## Web UI Routing Mechanism

The [nuxeo-app.html](https://github.com/nuxeo/nuxeo-web-ui/blob/0.8/elements/nuxeo-app/nuxeo-app.html#L34) is the very top element of the Web UI.

Its main content is composed as follow:
 - a [paper-drawer-panel](https://github.com/nuxeo/nuxeo-web-ui/blob/0.8/elements/nuxeo-app/nuxeo-app.html#L307) which has:
   - a [paper-menu](https://github.com/nuxeo/nuxeo-web-ui/blob/0.8/elements/nuxeo-app/nuxeo-app.html#L317) defining the left drawer menu buttons.
   - a collapsible [iron-pages](https://github.com/nuxeo/nuxeo-web-ui/blob/0.8/elements/nuxeo-app/nuxeo-app.html#L336) defining the left menu content associated to each menu button.
 - a [paper-header-panel](https://github.com/nuxeo/nuxeo-web-ui/blob/0.8/elements/nuxeo-app/nuxeo-app.html#L426) defining the main content with an [iron-pages](https://github.com/nuxeo/nuxeo-web-ui/blob/0.8/elements/nuxeo-app/nuxeo-app.html#L428):


```xml
 <iron-pages id="pages" selected="[[page]]" fallback-selection="error" attr-for-selected="name" selected-attribute="visible" class="flex">

     ...

     <nuxeo-browser name="browse" id="browser" document="[[currentDocument]]" selected-tab="{{docAction}}" clipboard="[[clipboard]]"></nuxeo-browser>

     ...

     <nuxeo-collection-results name="collection" id="collectionResults" on-navigate="_navigateFromCollection"></nuxeo-collection-results>

     <nuxeo-admin name="admin" user="[[currentUser]]" selected-tab="[[selectedAdminTab]]" entity="[[entity]]"></nuxeo-admin>

     ...

</iron-pages>
```

On this [iron-pages](https://github.com/nuxeo/nuxeo-web-ui/blob/0.8/elements/nuxeo-app/nuxeo-app.html#L428), you can see the `selected` attributes bound to the [page](https://github.com/nuxeo/nuxeo-web-ui/blob/0.8/elements/nuxeo-app/nuxeo-app.html#L513) property. When this [page](https://github.com/nuxeo/nuxeo-web-ui/blob/0.8/elements/nuxeo-app/nuxeo-app.html#L513) property changes its value, the [iron-pages](https://github.com/nuxeo/nuxeo-web-ui/blob/0.8/elements/nuxeo-app/nuxeo-app.html#L428) will display the content element which has the same `name`.

For instance, when clicking on a collection in the *Collection* left menu, it will call the [_navigateFromCollection](https://github.com/nuxeo/nuxeo-web-ui/blob/0.8/elements/nuxeo-app/nuxeo-app.html#L695) method:

```javascript
page('/browse' + e.detail.doc.path);
```
defined by [routing.html](https://github.com/nuxeo/nuxeo-web-ui/blob/master/elements/routing.html#L54). It will navigate to the `/browse` part of the Web UI and therefore display the [nuxeo-browser](https://github.com/nuxeo/nuxeo-web-ui/blob/0.8/elements/nuxeo-app/nuxeo-app.html#L445) element in the main [iron-pages](https://github.com/nuxeo/nuxeo-web-ui/blob/0.8/elements/nuxeo-app/nuxeo-app.html#L428) which shows the clicked document.

## Routing Behavior

The [Nuxeo.RoutingBehavior](https://github.com/nuxeo/nuxeo-ui-elements/blob/0.8/nuxeo-routing-behavior.html) is a behavior which provides convenient methods such as [urlFor](https://github.com/nuxeo/nuxeo-ui-elements/blob/0.8/nuxeo-routing-behavior.html#L37) to insert inner links in the Web UI.

For instance, [nuxeo-document-tree.html](https://github.com/nuxeo/nuxeo-web-ui/blob/0.8/elements/nuxeo-document-tree/nuxeo-document-tree.html#L164) which is the navigation tree in the left menu uses `urlFor` on each tree node to navigate to the associated document.

```xml
<a href$="[[urlFor('browse', item.path)]]" class="layout horizontal">
  <span><iron-icon icon="icons:chevron-left" class="flex"></iron-icon></span>
  <span class="parent">[[item.title]]</span>
</a>
```
![]({{file name='NAVIGATION_TREE.png'}} ?w=400,border=true)


Another example use case of the routing mechanism are:
 - the [USER_MENU]({{page page='web-ui-slots#user_menu'}}) slot
 - when [adding a new search]({{page page='web-ui-search'}})
