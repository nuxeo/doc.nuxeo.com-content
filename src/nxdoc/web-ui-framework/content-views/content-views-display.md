---
title: Content Views Display
review:
    comment: ''
    date: ''
    status: ok
labels:
    - content-view
toc: true
confluence:
    ajs-parent-page-id: '22380596'
    ajs-parent-page-title: Content Views
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: Content+Views+Display
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC60/Content+Views+Display'
    page_id: '22380670'
    shortlink: foBVAQ
    shortlink_source: 'https://doc.nuxeo.com/x/foBVAQ'
    source_link: /display/NXDOC60/Content+Views+Display
history:
    - 
        author: Solen Guitter
        date: '2014-12-08 15:12'
        message: >-
            pdate related pages, format screenshots, replace link to GitHub by
            the Explore
        version: '12'
    - 
        author: Anahide Tchertchian
        date: '2014-12-05 19:15'
        message: fix links to 6.0 release
        version: '11'
    - 
        author: Anahide Tchertchian
        date: '2014-12-05 19:12'
        message: 'NXDOC-222: report changes from FT doc'
        version: '10'
    - 
        author: Anahide Tchertchian
        date: '2014-12-02 11:28'
        message: 'NXDOC-222: remove leftover copy/paste'
        version: '9'
    - 
        author: Anahide Tchertchian
        date: '2014-12-02 11:19'
        message: 'NXDOC-222: complete the "content view actions" section'
        version: '8'
    - 
        author: Anahide Tchertchian
        date: '2014-12-01 20:33'
        message: 'NXDOC-222: save work about content view actions conf'
        version: '7'
    - 
        author: Anahide Tchertchian
        date: '2014-12-01 19:29'
        message: ''
        version: '6'
    - 
        author: Anahide Tchertchian
        date: '2014-12-01 19:21'
        message: 'NXDOC-222: add plan'
        version: '5'
    - 
        author: Anahide Tchertchian
        date: '2014-12-01 19:17'
        message: Reverted from v. 2
        version: '4'
    - 
        author: Anahide Tchertchian
        date: '2014-12-01 19:16'
        message: ''
        version: '3'
    - 
        author: Anahide Tchertchian
        date: '2014-12-01 18:58'
        message: 'NXDOC-222: Copy/paste old rendering section content'
        version: '2'
    - 
        author: Anahide Tchertchian
        date: '2014-12-01 18:56'
        message: ''
        version: '1'

---
{{! excerpt}}

This chapter presents how content views are displayed on a page.

{{! /excerpt}}

Here is a typical content view display:

![Typical Content View Display]({{file name='cv_display.png'}} ?w=600,border=true 'Typical Content View Display')

## Content View Widget Type Definition

From Studio, the easiest way to render a content view is to insert the [Content View Widget Type]({{page page='tab-designer-widget-types#contentviewwithformscontentview'}}) in a tab.

## Content View Actions Definition

![]({{file name='cv_actions.png'}} ?w=600,border=true)

Content view actions are visible on the top right corner. Since 6.0, these actions use the category `CONTENT_VIEW_ACTIONS`.

By default, some filters apply to these actions. These filters have access to the [Seam/JSF context]({{page page='filters-and-access-controls#elexpressionsandavailablecontextvariables'}}), and they also have access to the additional variable `contentView`, representing the current content view instance being displayed.

This allows to use expressions like `#{contentView.showRefreshCommand}` or `#{contentView.currentResultLayout.showCSVExport}`, but additional variables have also been added to the context, to help filtering on rendering information coming from a content view widget configuration, for instance. Default filters usually use this variable if defined, and fallback on the content view configuration if not.

Here is the list of the default actions:

*   `selectContentViewPageSize` displays the selector presenting the number of elements per page, variable `showPageSizeSelector` is available to control its filter, defaulting to condition `#{nxu:test(empty showPageSizeSelector, contentView.showPageSizeSelector, showPageSizeSelector)}`, for instance)
*   `selectContentViewResultLayout` displays links to alternative listing presentations of results,
*   `refreshContentView` displays a link to refresh the content view, keeping filtering and other presentation criteria, variable `showRefreshCommand` is available in context,
*   `contentViewCSVExport` displays a link to the CSV export, variable `showCSVExport` is available in context,
*   `contentViewPDFExport` displays a link to the PDF export, variable `showPDFExport` is available in context,
*   `contentViewRSSExport` displays a link to the RSS export, variable `showSyndicationLinks` is available in context,
*   `contentViewATOMExport` displays a links to the ATOM export, variable `showSyndicationLinks` is available in context,
*   `contentViewEditColumns` opens a fancybox to select visible columns, variable `showEditColumns` is available in context,
*   `contentViewEditRows` opens a fancybox to select visible rows (similar to the previous action, but using a different wording when listed data is not presenting columns, for instance thumbnail listings), variable `showEditRows` is available in context,

If you'd like to disable or override these actions behaviour, please read [the chapter explaining how to redefine an action]({{page page='actions-overview#redefininganaction'}}).

You should make sure to add the following requirement to your extension point contribution to ensure proper override:

```xml
<require>org.nuxeo.ecm.platform.contentview.jsf.actions</require> 
```

Most of the original contributions are declared in:

*   The&nbsp;`actions` extension point: [http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-6.0/viewExtensionPoint/org.nuxeo.ecm.platform.actions.ActionService--actions](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-6.0/viewExtensionPoint/org.nuxeo.ecm.platform.actions.ActionService--actions)
*   The&nbsp;`filters` extension point: [http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-6.0/viewExtensionPoint/org.nuxeo.ecm.platform.actions.ActionService--filters](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-6.0/viewExtensionPoint/org.nuxeo.ecm.platform.actions.ActionService--filters)

Actions are displayed using a [Toolbar Actions]({{page page='tab-designer-widget-types#documentactionswithformstoolbaractions'}}) widget, allowing to use [any action type (including fancy boxes)]({{page page='standard-action-types'}}).

## Content View Selection Actions Definition

![]({{file name='cv_selection_actions.png'}} ?w=600,border=true)

Content view selection actions are displayed on the bottom left corner. The default category used is `CURRENT_SELECTION_LIST` but [this can be configured on the content view]({{page page='content-views#thecontentviewselectionactions'}}).

Selection actions rely on a [selection list]({{page page='content-views#thecontentviewselectionlist'}}) to retrieve the list of checked documents. The default list is named `CURRENT_SELECTION`, default actions will rely on it.

These filters have access to the [Seam/JSF context]({{page page='filters-and-access-controls#elexpressionsandavailablecontextvariables'}}), and they also have access to the additional variable `contentView`, representing the current content view instance being displayed, as well as `selectedDocuments`, corresponding to the list of selected documents.

If you'd like to disable or override these actions behaviour, please read [the chapter explaining how to redefine an action]({{page page='actions-overview#redefininganaction'}}). Using the UI development mode can help you find the action identifier for easier override.

These actions display allows to use [any action type (including fancy boxes)]({{page page='standard-action-types'}}).

## Advanced Display

To handle document content views categories, rendering is done using methods set on generic Seam components:

*   [`contentViewActions`](http://explorer.nuxeo.org/nuxeo/site/distribution/latest/viewSeamComponent/seam:contentViewActions) &mdash; `org.nuxeo.ecm.webapp.contentbrowser.ContentViewActions`
*   [`documentContentViewActions`](http://explorer.nuxeo.org/nuxeo/site/distribution/latest/viewSeamComponent/seam:documentContentViewActions) &mdash; `org.nuxeo.ecm.webapp.contentbrowser.DocumentContentViewActions`

A typical usage of content views, to render the results, would be:

```html/xml
<nxu:set var="contentViewName" value="my_content_view_name">

  <ui:decorate template="/incl/content_view.xhtml" />

</nxu:set>

```

The template `/incl/content_view.xhtml` handles generic rendering of the given content view (content view title, pagination, result layout selection, list rendering, actions rendering) . It inserts names region that can be overridden when using the `ui:decorate` tag.

The current version of this template is here: [https://github.com/nuxeo/nuxeo-jsf/blob/release-6.0/nuxeo-platform-webapp-base/src/main/resources/web/nuxeo.war/incl/content_view.xhtml](https://github.com/nuxeo/nuxeo-jsf/blob/release-6.0/nuxeo-platform-webapp-base/src/main/resources/web/nuxeo.war/incl/content_view.xhtml).

It is not recommended to override this template for better maintenance, but it might be useful to override one of its sub-templates if this cannot be handled by action configuration override.

Here is the sample rendering of the search form defined on a content view named "document_content_filter":

```html/xml
<nxu:set var="contentView"
  value="#{contentViewActions.getContentViewWithProvider('document_content_filter')}"
  cache="true">
  <c:if test="#{contentView != null}">
    <nxl:layout name="#{contentView.searchLayout.name}" mode="edit"
      value="#{contentView.searchDocumentModel}" />
  </c:if>
</nxu:set>

```

Here is a typical way of refreshing or resetting a provider named "advanced_search" from the interface:

```html/xml

<div>
  <h:commandButton value="#{messages['command.search']}"
    action="search_results_advanced"
    styleClass="button">
    <nxu:actionListenerMethod value="#{contentViewActions.refresh('advanced_search')}" />
  </h:commandButton>
  <h:commandButton value="#{messages['command.clearSearch']}"
    action="#{contentViewActions.reset('advanced_search')}"
    immediate="true"
    styleClass="button" />
</div>

```

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">

{{! Please update the label in the Content by Label macro below. }}

{{#> panel heading='Related Documentation'}}

*   [Content Views]({{page page='content-views'}})
*   [Content View How-To Index]({{page page='content-view-how-to-index'}})
*   [Custom Page Providers]({{page page='custom-page-providers'}})

{{/panel}}</div><div class="column medium-6">

{{! Please update the label and target spaces in the Content by Label macro below. }}

{{#> panel heading='Other Related Documentation '}}

*   [Content Views]({{page space='studio' page='content-views'}}) (Studio)
*   [Tabs]({{page space='studio' page='tabs'}}) (Studio)

{{/panel}}</div></div>