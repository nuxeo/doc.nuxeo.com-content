---
title: JSF UI Framework Overview
review:
    comment: ''
    date: '2019-02-13'
    status: ok
tree_item_index: 50
toc: true
version_override:
    '6.0': 60/nxdoc/web-ui-framework-overview
labels:
    - content-review-lts2017
    - seam-jsf-component
    - atchertchian
    - jsf-ui

---
{{{multiexcerpt 'JSF-UI-required' page='generic-multi-excerpts'}}}

The Nuxeo Platform provides a web framework to build business applications for thin clients. This framework is based on the standard JEE view technology: Java Server Faces (JSF).

## Nuxeo JSF Technical Stack

Nuxeo JSF framework integrates several technologies in order to make the development of web applications fast and efficient.

The Nuxeo JSF stack includes:

*   Mojarra JSF (2.2.6) as MVC and UI component model, including, as of JSF 2 specifications, facelets as rendering engine and templating system,
*   RichFaces (4.5.0) for high level UI components, including the a4j library for Ajax behaviors support
*   JBoss Seam (2.3.1) as Web Framework

Inside the Nuxeo Platform, Seam Framework is used only for the JSF (client) layer.

The usage of Seam has several benefits:

*   usage of JSF is simpler,
*   powerful context management,
*   dependency injection and Nuxeo Service lookup via injection,
*   Nuxeo Web Component are easily overridable,
*   decoupling of Web Components (that can communicate via Seam event bus).

The Nuxeo JSF framework also comes with additional concepts and tools:

*   [Action service]({{page page='actions-links-buttons-icons-tabs-and-more'}}) is used to make buttons, tabs and views configurable.
*   [Layout]({{page page='layouts-and-widgets-forms-listings-grids'}}) and [Content View]({{page page='content-views'}}) allow to define how you want to see documents and listings.
*   [URL Service]({{page page='navigation-urls'}}): the Nuxeo Platform provides REST URLs for all pages so that you can bookmark pages or send via email a link to a specific view on a specific document.
*   [Nuxeo Tag Libraries]({{page page='how-to-register-a-jsf-tag-library'}}): extend existing tags and provides new Document Oriented tags.
*   [Theme engine]({{page page='theme'}}).

## Nuxeo JSF Approach

We built Nuxeo JSF framework with two main ideas in mind:

*   Make the UI simple,
*   Make the UI pluggable.

For the first point, we choose to have an "File Explorer" like navigation. So you have tools (tree, breadcrumb, search, tags) to navigate in a document repository and when on a document you can see several views on this document (Summary, Relations, Workflows, Rights, History ...).

We also choose to make the UI very pluggable, because each project needs to have a slightly different UI. In order to achieve that, each page/view is in fact made of several fragments that are assembled based on the context. This means you can easily add, remove or change a button, a link, a tab or a HTML/JSF block. You don't need to change or override the Nuxeo Platform code for that, neither do you need to change the default Nuxeo Platform templates. The assembly of the fragments is governed by "Actions", so you can change the filters and conditions for each fragment. Of course each project also needs to define it's own views on Document, for that we use the Layout and Content View system.

All this means that you can start from a standard Nuxeo Platform, and with simple configuration have a custom UI.

## JSF Page Layout System Overview
A Nuxeo Platform page is made up of several layers:

- Nuxeo Theme (aka NXTheme)

    - Defines a page level layout (slots)
    - Defines CSS resources
- XHTML/facelet

    - Fills the NXTheme slots
    - Uses Nuxeo Tags to render Layouts, Widgets, Actions
- Layouts/Widgets/Actions
    - This is the application meta-model
    - This is the part that is configured via Nuxeo Studio

Here is a very quick walk-through of the main principles with some examples and links to code or documentation.

### Nuxeo Theme

The Nuxeo Theme is a page layout engine that also handles resources management. See the page [Theme]({{page page='theme'}}) for a general introduction. A part of the theme definition can be configured via Nuxeo Studio (the CSS and Flavor part).

As any other Nuxeo component, the [Theme system](http://explorer.nuxeo.com/nuxeo/site/distribution/latest/viewComponent/org.nuxeo.theme.styling.service) uses extension points to define:

- [pages](http://explorer.nuxeo.com/nuxeo/site/distribution/latest/viewExtensionPoint/org.nuxeo.theme.styling.service--pages): Define what slots should be available in the page
- [styles](http://explorer.nuxeo.com/nuxeo/site/distribution/latest/viewExtensionPoint/org.nuxeo.theme.styling.service--styles): Define CSS styles
- [flavors](http://explorer.nuxeo.com/nuxeo/site/distribution/latest/viewExtensionPoint/org.nuxeo.theme.styling.service--flavors): Define variables used in CSS
- [resources](http://explorer.nuxeo.com/nuxeo/site/distribution/latest/viewExtensionPoint/org.nuxeo.theme.styling.service--resources): Define JavaScript to be injected in the page

Let's see how Document Management and Digital Asset Management pages as examples.

#### Document Management Pages

The Document Management pages are using a Theme page layout defined [in the document.xml definition](https://github.com/nuxeo/nuxeo/blob/master/nuxeo-dm/nuxeo-platform-webapp-core/src/main/resources/themes/document-management.xml).

`nxMainContainer` has two columns (i.e. `<cell>`):

- The first column contains three slots (i.e. `<fragment>`).
- The second column contains two slots (i.e. `<fragment>`).

The slots themselves (called `view` in NXTheme) are defined in the [theme-contrib](https://github.com/nuxeo/nuxeo/blob/master/nuxeo-dm/nuxeo-platform-webapp-core/src/main/resources/OSGI-INF/theme-contrib.xml):

```xml
<view name="nuxeo5 tree explorer" template-engine="jsf-facelets">
  <format-type>widget</format-type>
  <template>incl/multi_tree_explorer.xhtml</template>
</view>
```

This extract shows you were to find the XHTML code corresponding to the tree explorer: The `view` `nuxeo5 tree explorer` is defined as `incl/multi_tree_explorer.xhtml`.

This view is referenced in the document.xml theme file via:

```xml
<widget element="page[1]/section[2]/cell[1]/fragment[2]">
  <view>nuxeo5 tree explorer</view>
</widget>
```

The XPath indicates what part of the page layout will be used to display the tree explorer.

```xml
<!-- tree view -->
<fragment perspectives="default,multiple_domains" type="generic fragment"/>
```

#### Digital Asset Management Pages

For Nuxeo DAM (and the current search view), the theme only defines the headers and footer. The actual content of the main slot will be handled by the application layer.

- [nuxeo-dam theme](https://github.com/nuxeo/nuxeo-dam/blob/master/nuxeo-dam-theme/src/main/resources/themes/nuxeo-dam.xml) only defines a `nxMainContainer` that will be structured via layouts.
- There is no specific view (structure of the `nxMainContainer` will be done via XHTML).

### XHTML/Facelets

The XHTML Facelet templates are rendered through the Theme Engine. The XHTML calls the theme engine via the NXTheme composition page:
```xml
<nxthemes:composition xmlns="http://www.w3.org/1999/xhtml"
    xmlns:ui="http://java.sun.com/jsf/facelets"
    xmlns:nxthemes="http://nuxeo.org/nxthemes"
    xmlns:nxl="http://nuxeo.org/nxforms/layout">

  <ui:define name="page title">
    <h:outputText value="#{nuxeoApplicationName} - #{messages['label.main.tab.dam']}" />
  </ui:define>

  <ui:define name="body">
    <ui:include src="/incl/message_banner.xhtml"/>
    <nxl:layout value="#{currentDocument}" name="gridDamSingleAssetLayout" mode="view" />
  </ui:define>
</nxthemes:composition>
```

#### Document Management Example

See the [sample DM view_documents.xhtml](https://github.com/nuxeo/nuxeo/blob/master/nuxeo-dm/nuxeo-platform-webapp/src/main/resources/web/nuxeo.war/view_documents.xhtml).

The main content of the page is actually defined via facelet templating (i.e. using native facelet composition engine to include and templatize)

```xml
<!--Document header -->  <h:form id="document_header_layout_form" class="titleBlock">
    <nxl:documentLayout documentMode="header" mode="view"
      value="#{currentDocument}" defaultLayout="document_header"
      includeAnyMode="false" />
  </h:form>

  <!-- buttons displayed in the upper right corder -->
  <ui:include src="/incl/document_actions_upperbuttons.xhtml"/>
  <ui:include src="/incl/message_banner.xhtml"/>

  <!-- widget to display the tabs-->
  <nxl:widget name="documentTabs" mode="view" value="#{currentDocument}" />
```

#### Digital Asset Management Example

See the [sample DAM asset.xhtml](https://github.com/nuxeo/nuxeo-dam/blob/master/nuxeo-dam-jsf/src/main/resources/web/nuxeo.war/dam/asset.xhtml).

Content is defined by a `GridLayout`:

```xml
<nxl:layout value="#{currentDocument}" name="gridDamSingleAssetLayout" mode="view" />
```

### Layout / Widgets / Actions

This is the very core of the Nuxeo application level model: that's the part that is defined inside Nuxeo Studio.

There is plenty of documentation about this:

- [Layouts and Widgets (Forms, Listings, Grids)]({{page page='layouts-and-widgets-forms-listings-grids'}})
- [Actions (Links, Buttons, Icons, Tabs and More)]({{page page='actions-links-buttons-icons-tabs-and-more'}})

You can also use the [Layout Showcase site](http://showcase.nuxeo.com/nuxeo/layoutDemo/).

Let's continue with the previous example pages for DM and DAM.

#### Digital Asset Management Pages

For DAM, the main layout is [dam-layouts-contrib.xml](https://github.com/nuxeo/nuxeo-dam/blob/master/nuxeo-dam-jsf/src/main/resources/OSGI-INF/dam-layouts-contrib.xml), it defines:

- Some widgets
- The `gridDamSingleAssetLayout` that itself defines two columns:
    - The `damSingleAssetPanelLeft` widget
    - The `damSingleAssetPanelRight` widget

Both widgets are of type `documentAction` meaning they use the action system to resolve what are the subwidgets.

We use this Widget/Action association to provide a way to have [Incremental Layouts]({{page page='incremental-layouts-and-actions'}}): the idea being that the content of the screen is the result of the aggregation of:

- What is contributed by the deployed plugin
  If workflow is deployed you will have some WF related information displayed.
- What is contributed by your Studio configuration

Using that principle, the `damSingleAssetPanelLeft` will display all widgets associated to the action category `DAM_SINGLE_ASSET_PANEL_LEFT`: you will find 10 of them in the [same dam-layouts-contrib.xml contribution file](https://github.com/nuxeo/nuxeo-dam/blob/master/nuxeo-dam-jsf/src/main/resources/OSGI-INF/dam-layouts-contrib.xml), each of them being displayed according to the type of content.

```xml
...
 <action id="damAssetViewTitle" type="widget" order="200">
  <category>DAM_PANEL_RIGHT</category>
  <category>DAM_SINGLE_ASSET_PANEL_LEFT</category>
  <properties>
    <property name="widgetName">damAssetViewTitle</property>
  </properties>
  <filter-id>hasAssetFacet</filter-id>
</action>

<action id="damAssetViewThumbnail" type="widget" order="250">
  <category>DAM_PANEL_RIGHT</category>
  <category>DAM_SINGLE_ASSET_PANEL_LEFT</category>
  <properties>
    <property name="widgetName">damAssetViewThumbnail</property>
  </properties>
  <filter-id>hasNotVideoFacet</filter-id>
  <filter-id>hasNotPictureFacet</filter-id>
  <filter-id>hasNotAudioFacet</filter-id>
  <filter-id>hasAssetFacet</filter-id>
</action>
...
```

#### Document Management Pages

For Document Management pages, a similar system is used to contribute the part of screens.

The `documentTabs` widget will display the tabs defined as [actions contrib](https://github.com/nuxeo/nuxeo/blob/master/nuxeo-dm/nuxeo-platform-webapp-core/src/main/resources/OSGI-INF/actions-contrib.xml).

```xml
...
<action id="TAB_VIEW" link="/incl/tabs/document_view.xhtml" order="0"
  label="action.view.summary" icon="/icons/file.gif" accessKey="v"
  type="rest_document_link">
  <category>VIEW_ACTION_LIST</category>
  <filter-id>view</filter-id>
  <properties>
    <property name="ajaxSupport">true</property>
  </properties>
</action>

<action id="TAB_CONTENT" link="/incl/tabs/document_content.xhtml"
  order="10" label="action.view.content" icon="/icons/file.gif" accessKey="c"
  type="rest_document_link">
  <category>VIEW_ACTION_LIST</category>
  <filter-id>view_content</filter-id>
  <properties>
    <property name="ajaxSupport">true</property>
  </properties>
</action>
...
```

Each of these tab is associated with a XHTML, that itself will also use layouts and widgets. If we take the [`documentView.xhml`](https://github.com/nuxeo/nuxeo/blob/master/nuxeo-dm/nuxeo-platform-webapp/src/main/resources/web/nuxeo.war/incl/tabs/document_view.xhtml) that corresponds to the default Summary tab in the platform we see that it takes the "summary" layouts defined for the type of document being currently displayed. The widgets and different possible layouts are defined on the [layouts-summary-contrib.xml](https://github.com/nuxeo/nuxeo/blob/master/nuxeo-dm/nuxeo-platform-webapp-core/src/main/resources/OSGI-INF/layouts-summary-contrib.xml). By default unless defined otherwise all summary layout use `grid_summary_layout`.

However, looking at the [type to layout configuration](https://github.com/nuxeo/nuxeo/blob/master/nuxeo-jsf/nuxeo-platform-webapp-base/src/main/resources/OSGI-INF/ecm-types-contrib.xml) you can see that each document type can be associated with different layout and that there are several categories of layout.

### Seam and Navigation

So far we have defined view level components. These views will need to get some data from the Nuxeo service and have some UI specific controllers.

This is the role of the Seam layer:

- Seam Beans can be used as Controllers that access the Nuxeo Service to push/retrieve data.
- Seam Context is used to manage the web context and the associated transient state.

Because of the way the screen are rendered inside the Nuxeo Platform, all Nuxeo navigations do not correspond to JSF navigation. Actually, in a lot of cases you always render the same JSF view, but thanks to the Actions/Layout/Widget model the actual content displayed in the page will change according to the context:

- What is the document you are looking at
- What is the currently selected tab
- What is the lifecycle of the document
- ...

However, sometimes, there is an actual JSF level navigation that relies on standard JSF navigation case. For that, each Nuxeo Bundle can contribute navigation cases to the JSF config via a [deployment-fragment](https://github.com/nuxeo/nuxeo-dam/blob/master/nuxeo-dam-theme/src/main/resources/OSGI-INF/deployment-fragment.xml).

```xml
<extension target="faces-config#NAVIGATION">
 <navigation-case>
  <from-outcome>assets</from-outcome>
  <to-view-id>/dam/assets.xhtml</to-view-id>
  <redirect />
 </navigation-case>

 <navigation-case>
  <from-outcome>asset</from-outcome>
  <to-view-id>/dam/asset.xhtml</to-view-id>
  <redirect />
 </navigation-case>
</extension>
```

In addition, the Nuxeo Platform provides a system to manage REST URL that combine JSF navigation and Actions: see the page [Navigation URLs]({{page page='navigation-urls'}}) for more details.

### About Possible Approaches

#### Pure Studio

Nuxeo Studio provides a high level configuration UI to configure Actions, Layouts, Widgets, etc. It hides a lot of the complexity of the underlying model, as well as some details.

For now, Nuxeo Studio allows you to customize pretty much everything that is inside the "slots" defined by the target XHTML/Theme template (DM or DAM). However, Nuxeo Studio does not give you direct access to the "low level" model.

{{#> callout type='info' }}
In the context of 7.x, we are working on replacing all the low level model by layouts only.
{{/callout}}

#### Custom Web Templates

As the rest of the framework, the JSF web framework is extensible:

- You can contribute new XHTML pages
- You can extend the theme
- You can contribute to the Action/Widget/Layout system
- You an contribute new Seam beans

At the same time, as long as your screens logic depends on Action/Widgets/Layouts, you will be able to use Studio to configure it.

However, going that road requires more knowledge and skills:

- You have to be familiar with underlying technologies
    - Java/JSF/Seam
    - Nuxeo Extension Point model
    - Actions/Layout/Widget
- On the Studio side, things will be less polished
    For example you will have to know the name of the layout you want to change since it won't be one of the default layout from DAM/DM

We are not saying that this road is not good, we just want to make it clear that the technical requirements are higher: more freedom but also more responsibilities.

If you are mainly interested in DAM, one option could be to review your mock-ups against the current Nuxeo DAM view. We switched from the 3 panes view to the 2 panes + lightbox because we think that from a user perspective it is better. It may be worth giving a try to this option since it would make things simpler.

However, if you think the custom UI is the way to go, we'll be happy to help you on that road. But you may want to consider a [training](http://www.nuxeo.com/services/training/).

## JSF UI Limitations
{{! excerpt}}
This chapter presents the limitations to the Seam/JSF web application.
{{! /excerpt}}

### {{> anchor 'back-next-paradigm'}} Back and Next Buttons Paradigm and JSF in the Nuxeo Platform

Nuxeo Platform navigation is based solely on the JSF library.

{{! excerpt}}
Although the JSF library is not designed to take advantage of the Back and Next buttons of the browser, these buttons work in most cases when called on GET actions, but some inconsistent display could happen if used after a user action modifying data. However, those cache-related display inconsistency aren't harmful in anyway for the system.
{{! /excerpt}}

Those unwanted displays are hard to fix: it could be done by pushing "by hand" some history info into a queue whenever the Nuxeo Platform does a navigation, and try to return to that when an application-based back button is pressed. But this would be quite complex and browser dependent.

So if you're massively using POST action, the solution is to train the users to never activate/use the Back and the Next buttons when using the Nuxeo Platform.

### Default Widget Types Known Limitations
{{{excerpt 'Default Widget Types Known Limitations'}}}
See the page [Default Widget Types Known Limitations]({{page page='default-widget-types-known-limitations'}}).    

* * *

{{#> panel heading='Related Documentation'}}
- [JSF Page Layout System Overview]({{page space='NXDOC' page='JSF Page+Layout+System+Overview'}})
- [JSF and Ajax Tips and How-To Index]({{page space='NXDOC' page='JSF and+Ajax+Tips+and+How-To+Index'}})
{{/panel}}
