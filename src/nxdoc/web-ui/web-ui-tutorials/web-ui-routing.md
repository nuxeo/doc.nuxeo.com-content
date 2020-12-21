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

The [nuxeo-app.html](https://github.com/nuxeo/nuxeo-web-ui/blob/72abdc5/elements/nuxeo-app.js) is the very top element of the Web UI.

Its main content is composed of:
 - a [paper-drawer-panel](https://github.com/nuxeo/nuxeo-web-ui/blob/72abdc5/elements/nuxeo-app.js#L300-L306) which has:
 - a [paper-listbox](https://github.com/nuxeo/nuxeo-web-ui/blob/72abdc5/elements/nuxeo-app.js#L314-L320) defining the left drawer menu buttons.
   - collapsible [iron-pages](https://github.com/nuxeo/nuxeo-web-ui/blob/72abdc5/elements/nuxeo-app.js#L342-L348) defining the left menu content associated to each menu button.
 - a [paper-header-panel](https://github.com/nuxeo/nuxeo-web-ui/blob/72abdc5/elements/nuxeo-app.js#L380) defining the main content with [iron-pages](https://github.com/nuxeo/nuxeo-web-ui/blob/72abdc5/elements/nuxeo-app.js#L381):


```xml
<iron-pages id="pages" selected="[[page]]" attr-for-selected="name" selected-attribute="visible">

    <nuxeo-slot slot="PAGES" model="[[actionContext]]"></nuxeo-slot>

    <nuxeo-home name="home" tasks="[[tasks]]"></nuxeo-home>

    <nuxeo-browser name="browse" id="browser" document="[[currentDocument]]" selected-tab="\{{docAction}}" clipboard="[[clipboard]]"></nuxeo-browser>

    <nuxeo-search-results name="search" id="searchResults" search-form="[[searchForm]]"></nuxeo-search-results>

    ...

</iron-pages>
```

On [iron-pages](https://github.com/nuxeo/nuxeo-web-ui/blob/72abdc5/elements/nuxeo-app.js#L381), you can see the `selected` attributes bound to the [page](https://github.com/nuxeo/nuxeo-web-ui/blob/72abdc5/elements/nuxeo-app.js#L482-L485) property. When this [page](https://github.com/nuxeo/nuxeo-web-ui/blob/72abdc5/elements/nuxeo-app.js#L482-L485) property changes its value, the [iron-pages](https://github.com/nuxeo/nuxeo-web-ui/blob/72abdc5/elements/nuxeo-app.js#L381) will display the content element which has the same `name`.

For instance, on [nuxeo-home](https://github.com/nuxeo/nuxeo-web-ui/blob/72abdc5/elements/nuxeo-app.js#L384), when clicking a recently viewed document, it will call the [navigateTo](https://github.com/nuxeo/nuxeo-web-ui/blob/72abdc5/elements/nuxeo-home.html#L333) method defined on `Nuxeo.RoutingBehavior`.

```javascript
  this.navigateTo(detail.doc);
```

This will trigger the display of the [nuxeo-browser](https://github.com/nuxeo/nuxeo-web-ui/blob/72abdc5/elements/nuxeo-app.js#L386-L392) element in the main [iron-pages](https://github.com/nuxeo/nuxeo-web-ui/blob/72abdc5/elements/nuxeo-app.js#L381), showing the clicked document.

## Routing Behavior

The `Nuxeo.RoutingBehavior` is a behavior which provides convenient methods such as `urlFor` to insert inner links in the Web UI.

For instance, [nuxeo-document-tree](https://github.com/nuxeo/nuxeo-web-ui/blob/72abdc5/elements/nuxeo-document-tree/nuxeo-document-tree.js) which is the navigation tree in the left menu uses `urlFor` on each tree node to navigate to the associated document.

```xml
<a href$="[[urlFor(item)]]">
  <span><iron-icon icon="icons:chevron-left"></iron-icon></span>
  <span class="parent">[[item.title]]</span>
</a>
```
![]({{file name='NAVIGATION_TREE.png'}} ?w=400,border=true)

By default, Web UI navigation is based on document path, but it can be configured to be based on document UID instead.
To enable navigation by UID (instead of path), the `org.nuxeo.web.ui.router.key.document` property can overridden with an XML contribution as follows:

```xml
<component name="org.nuxeo.web.ui.properties.contrib">
  <extension target="org.nuxeo.runtime.ConfigurationService" point="configuration">

    <!-- Navigation by UID -->
    <property name="org.nuxeo.web.ui.router.key.document">uid</property>

  </extension>
</component>
```

Other use case examples of the routing mechanism are:
 - the [USER_MENU]({{page page='web-ui-slots#user_menu'}}) slot
 - when [adding a new search]({{page version='' space='nxdoc' page='web-ui-search'}})
