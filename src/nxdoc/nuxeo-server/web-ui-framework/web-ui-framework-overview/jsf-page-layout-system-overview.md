---
title: JSF Page Layout System Overview
labels:
    - jsf
    - seam-jsf-component
    - lts2015-not-ok
    - nxdoc-741
toc: true
confluence:
    ajs-parent-page-id: '950313'
    ajs-parent-page-title: Web UI Framework Overview
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: JSF+Page+Layout+System+Overview
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/JSF+Page+Layout+System+Overview'
    page_id: '23367560'
    shortlink: iI9kAQ
    shortlink_source: 'https://doc.nuxeo.com/x/iI9kAQ'
    source_link: /display/NXDOC/JSF+Page+Layout+System+Overview
history:
    - 
        author: Solen Guitter
        date: '2015-04-20 16:02'
        message: ''
        version: '4'
    - 
        author: Solen Guitter
        date: '2015-04-20 16:01'
        message: ''
        version: '3'
    - 
        author: Thierry Delprat
        date: '2015-03-18 16:04'
        message: ''
        version: '2'
    - 
        author: Thierry Delprat
        date: '2015-03-18 16:02'
        message: ''
        version: '1'

---
A Nuxeo Platform page is made up of several layers:

*   Nuxeo Theme (aka NXTheme)

    *   Defines a page level layout (slots)
    *   Defines CSS resources
*   XHTML/facelet

    *   Fills the NXTheme slots
    *   Uses Nuxeo Tags to render Layouts, Widgets, Actions
*   Layouts/Widgets/Actions
    *   This is the application meta-model
    *   This is the part that is configured via Nuxeo Studio

Here is a very quick walk-through of the main principles with some examples and links to code or documentation.

## Nuxeo Theme

The Nuxeo Theme is a page layout engine that also handles resources management. See the page [Theme]({{page page='theme'}})&nbsp;for a general introduction. A part of the theme definition can be configured via Nuxeo Studio (the CSS and Flavor part).

As any other Nuxeo component, the&nbsp;[Theme system](http://explorer.nuxeo.com/nuxeo/site/distribution/latest/viewComponent/org.nuxeo.theme.styling.service)&nbsp;uses extension points to define:

*   [pages](http://explorer.nuxeo.com/nuxeo/site/distribution/latest/viewExtensionPoint/org.nuxeo.theme.styling.service--pages): Define what slots should be available in the page
*   [styles](http://explorer.nuxeo.com/nuxeo/site/distribution/latest/viewExtensionPoint/org.nuxeo.theme.styling.service--styles): Define CSS styles
*   [flavors](http://explorer.nuxeo.com/nuxeo/site/distribution/latest/viewExtensionPoint/org.nuxeo.theme.styling.service--flavors): Define variables used in CSS
*   [resources](http://explorer.nuxeo.com/nuxeo/site/distribution/latest/viewExtensionPoint/org.nuxeo.theme.styling.service--resources): Define JavaScript to be injected in the page

Let's see how Document Management and Digital Asset Management pages as examples.

### Document Management Pages

The Document Management pages are using a Theme page layout defined&nbsp;[in the document.xml definition](https://github.com/nuxeo/nuxeo/blob/master/nuxeo-dm/nuxeo-platform-webapp-core/src/main/resources/themes/document-management.xml).

`nxMainContainer`&nbsp;has two columns (i.e.&nbsp;`<cell>`):

*   The first column contains three slots (i.e.&nbsp;`<fragment>`).
*   The second column contains two slots (i.e.&nbsp;`<fragment>`).

The slots themselves (called `view` in NXTheme) are defined in the&nbsp;[theme-contrib](https://github.com/nuxeo/nuxeo/blob/master/nuxeo-dm/nuxeo-platform-webapp-core/src/main/resources/OSGI-INF/theme-contrib.xml):

```

  widget

```

This extract shows you were to find the XHTML code corresponding to the tree explorer: The&nbsp;`view` `nuxeo5 tree explorer` is defined as&nbsp;`incl/multi_tree_explorer.xhtml`.

This view is referenced in the document.xml theme file via:

```

  nuxeo5 tree explorer

```

The XPath indicates what part of the page layout will be used to display the tree explorer.

```

```

### Digital Asset Management Pages

For Nuxeo DAM (and the current search view), the theme only defines the headers and footer. The actual content of the main slot will be handled by the application layer.

*   [nuxeo-dam theme](https://github.com/nuxeo/nuxeo-dam/blob/master/nuxeo-dam-theme/src/main/resources/themes/nuxeo-dam.xml)&nbsp;only defines a&nbsp;`nxMainContainer`&nbsp;that will be structured via layouts.
*   There is no specific view (structure of the&nbsp;`nxMainContainer`&nbsp;will be done via XHTML).

## XHTML/Facelets

The XHTML Facelet templates are rendered through the Theme Engine. The XHTML calls the theme engine via the NXTheme composition page:

```

```

### Document Management Example

See the [sample DM view_documents.xhtml](https://github.com/nuxeo/nuxeo/blob/master/nuxeo-dm/nuxeo-platform-webapp/src/main/resources/web/nuxeo.war/view_documents.xhtml).

The main content of the page is actually defined via facelet templating (i.e. using native facelet composition engine to include and templatize)

```

```

<div class="line"><span class="text plain">&nbsp;</span></div>

### Digital Asset Management Example

See the [sample DAM asset.xhtml](https://github.com/nuxeo/nuxeo-dam/blob/master/nuxeo-dam-jsf/src/main/resources/web/nuxeo.war/dam/asset.xhtml).

Content is defined by a `GridLayout`:

```

```

## Layout / Widgets / Actions

This is the very core of the Nuxeo application level model: that's the part that is defined inside Nuxeo Studio.

There is plenty of documentation about this:

*   [Layouts and Widgets (Forms, Listings, Grids)]({{page page='layouts-and-widgets-forms-listings-grids'}})
*   [Actions (Links, Buttons, Icons, Tabs and More)]({{page page='actions-links-buttons-icons-tabs-and-more'}})

You can also use the&nbsp;[Layout Showcase site](http://showcase.nuxeo.com/nuxeo/layoutDemo/).

Let's continue with the previous example pages for DM and DAM.

### Digital Asset Management Pages

For DAM, the main layout is&nbsp;[dam-layouts-contrib.xml](https://github.com/nuxeo/nuxeo-dam/blob/master/nuxeo-dam-jsf/src/main/resources/OSGI-INF/dam-layouts-contrib.xml), it defines:

*   Some widgets
*   The&nbsp;`gridDamSingleAssetLayout`&nbsp;that itself defines two columns:
    *   The&nbsp;`damSingleAssetPanelLeft`&nbsp;widget
    *   The&nbsp;`damSingleAssetPanelRight`&nbsp;widget

Both widgets are of type&nbsp;`documentAction`&nbsp;meaning they use the action system to resolve what are the subwidgets.

We use this Widget/Action association to provide a way to have [Incremental Layouts]({{page page='incremental-layouts-and-actions'}}): the idea being that the content of the screen is the result of the aggregation of:

*   What is contributed by the deployed plugin
    If workflow is deployed you will have some WF related information displayed.
*   What is contributed by your Studio configuration

Using that principle, the&nbsp;`damSingleAssetPanelLeft`&nbsp;will display all widgets associated to the action category `DAM_SINGLE_ASSET_PANEL_LEFT`: you will find 10 of them in the&nbsp;[same dam-layouts-contrib.xml contribution file](https://github.com/nuxeo/nuxeo-dam/blob/master/nuxeo-dam-jsf/src/main/resources/OSGI-INF/dam-layouts-contrib.xml), each of them being displayed according to the type of content.

```
...

  DAM_PANEL_RIGHT
  DAM_SINGLE_ASSET_PANEL_LEFT

    damAssetViewTitle

  hasAssetFacet

  DAM_PANEL_RIGHT
  DAM_SINGLE_ASSET_PANEL_LEFT

    damAssetViewThumbnail

  hasNotVideoFacet
  hasNotPictureFacet
  hasNotAudioFacet
  hasAssetFacet

...
```

### Document Management Pages

For Document Management pages, a similar system is used to contribute the part of screens.

The&nbsp;`documentTabs`&nbsp;widget will display the tabs defined as&nbsp;[actions contrib](https://github.com/nuxeo/nuxeo/blob/master/nuxeo-dm/nuxeo-platform-webapp-core/src/main/resources/OSGI-INF/actions-contrib.xml).

```
...

  VIEW_ACTION_LIST
  view

    true

  VIEW_ACTION_LIST
  view_content

    true

...
```

Each of these tab is associated with a XHTML, that itself will also use layouts and widgets. If we take the [`documentView.xhml`](https://github.com/nuxeo/nuxeo/blob/master/nuxeo-dm/nuxeo-platform-webapp/src/main/resources/web/nuxeo.war/incl/tabs/document_view.xhtml) that corresponds to the default Summary tab in the platform we see that it takes the "summary" layouts defined for the type of document being currently displayed. The widgets and different possible layouts are defined on the [layouts-summary-contrib.xml](https://github.com/nuxeo/nuxeo/blob/master/nuxeo-dm/nuxeo-platform-webapp-core/src/main/resources/OSGI-INF/layouts-summary-contrib.xml). By default unless defined otherwise all summary layout use&nbsp;`grid_summary_layout`.

However, looking at the&nbsp;[type to layout configuration](https://github.com/nuxeo/nuxeo/blob/master/nuxeo-jsf/nuxeo-platform-webapp-base/src/main/resources/OSGI-INF/ecm-types-contrib.xml)&nbsp;you can see that each document type can be associated with different layout and that there are several categories of layout.

## Seam and Navigation

So far we have defined view level components. These views will need to get some data from the Nuxeo service and have some UI specific controllers.

This is the role of the Seam layer:

*   Seam Beans can be used as Controllers that access the Nuxeo Service to push/retrieve data.
*   Seam Context is used to manage the web context and the associated transient state.

Because of the way the screen are rendered inside the Nuxeo Platform, all Nuxeo navigations do not correspond to JSF navigation. Actually, in a lot of cases you always render the same JSF view, but thanks to the Actions/Layout/Widget model the actual content displayed in the page will change according to the context:

*   What is the document you are looking at
*   What is the currently selected tab
*   What is the life cycle of the document
*   ...

However, sometimes, there is an actual JSF level navigation that relies on standard JSF navigation case. For that, each Nuxeo Bundle can contribute navigation cases to the JSF config via a&nbsp;[deployment-fragment](https://github.com/nuxeo/nuxeo-dam/blob/master/nuxeo-dam-theme/src/main/resources/OSGI-INF/deployment-fragment.xml).

```

  assets
  /dam/assets.xhtml

  asset
  /dam/asset.xhtml

```

In addition, the Nuxeo Platform provides a system to manage REST URL that combine JSF navigation and Actions: see the page [Navigation URLs]({{page page='navigation-urls'}})&nbsp;for more details.

## About Possible Approaches

### Pure Studio

Nuxeo Studio provides a high level configuration UI to configure Actions, Layouts, Widgets, etc. It hides a lot of the complexity of the underlying model, as well as some details.

For now, Nuxeo Studio allows you to customize pretty much everything that is inside the "slots" defined by the target XHTML/Theme template (DM or DAM). However, Nuxeo Studio does not give you direct access to the "low level" model.

{{#> callout type='info' }}

In the context of 7.x, we are working on replacing all the low level model by layouts only.

{{/callout}}

### Custom Web Templates

As the rest of the framework, the JSF web framework is extensible:

*   You can contribute new XHTML pages
*   You can extend the theme
*   You can contribute to the Action/Widget/Layout system
*   You an contribute new Seam beans

At the same time, as long as your screens logic depends on Action/Widgets/Layouts, you will be able to use Studio to configure it.

However, going that road requires more knowledge and skills:

*   You have to be familiar with underlying technologies
    *   Java/JSF/Seam
    *   Nuxeo Extension Point model
    *   Actions/Layout/Widget
*   On the Studio side, things will be less polished
    For example you will have to know the name of the layout you want to change since it won't be one of the default layout from DAM/DM

We are not saying that this road is not good, we just want to make it clear that the technical requirements are higher: more freedom but also more responsibilities.

If you are mainly interested in DAM, one option could be to review your mock-ups against the current Nuxeo DAM view. We switched from the 3 panes view to the 2 panes + lightbox because we think that from a user perspective it is better. It may be worth giving a try to this option since it would make things simpler.

However, if you think the custom UI is the way to go, we'll be happy to help you on that road. But you may want to consider a [training](http://www.nuxeo.com/services/training/).

&nbsp;

* * *