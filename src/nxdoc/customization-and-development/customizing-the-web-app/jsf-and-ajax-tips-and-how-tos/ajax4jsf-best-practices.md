---
title: Ajax4jsf Best Practices
labels:
    - a4j
    - ajax4jsf
toc: true
confluence:
    ajs-parent-page-id: '17334513'
    ajs-parent-page-title: JSF and Ajax Tips and How-Tos
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Ajax4jsf+Best+Practices
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/Ajax4jsf+Best+Practices'
    page_id: '17334489'
    shortlink: 2YAIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/2YAIAQ'
    source_link: /display/NXDOC58/Ajax4jsf+Best+Practices
history:
    - 
        author: Solen Guitter
        date: '2014-01-23 15:20'
        message: dded TOC and formattin
        version: '5'
    - 
        author: Anahide Tchertchian
        date: '2013-04-29 16:44'
        message: >-
            NXP-11472: add doc about attribute layout="block" on tag
            a4j:outputPanel
        version: '4'
    - 
        author: Solen Guitter
        date: '2012-09-13 22:04'
        message: Migrated to Confluence 4.0
        version: '3'
    - 
        author: Solen Guitter
        date: '2012-09-13 22:04'
        message: ''
        version: '2'
    - 
        author: Stéfane Fermigier
        date: '2010-12-21 15:15'
        message: ''
        version: '1'

---
<div class="row"><div class="column medium-8">

## Use a4j:region&nbsp;to Speed up Ajax Rendering

Wrap JSF components that are affected by rerender targets or&nbsp;`a4j:support`&nbsp;tags with a&nbsp;`a4j:region renderRegionOnly="true"`&nbsp;in order to both lower the network bandwith usage and the CPU pressure on the server since a much smaller part of the JSF tree will be processed:

TODO: add an example here

## Use a4j:outputPanel as&nbsp;Target of Rerender Clauses

If you have JSF elements with dynamic render clause that are evaluated to false in the first page rendering, a4j reRendering will fail to make them appear afterward since will not be present in the JSF rendering tree. Wrapping them with a&nbsp;`a4j:outputPanel`&nbsp;that holds the reRender target id will solve the issue.

TODO: add an example here

Also see for reference:&nbsp;[http://www.jroller.com/a4j/entry/ajax_regions_and_output_panels](http://www.jroller.com/a4j/entry/ajax_regions_and_output_panels)

</div><div class="column medium-4">{{#> panel heading='On this page'}}

&nbsp;

{{/panel}}</div></div>

## <span style="line-height: 1.5;">Use Attribute layout="block" on a4j:outputPanel Tag</span>

If the `a4j:outputPanel` tag will contain divs or tables, for instance, you should use attribute `layout="block"` so that it's displayed using a `div` instead of a `span`, as a span tag containing divs or tables will produce invalid HTML.

See the reference documentation at [http://docs.jboss.org/richfaces/latest_3_3_X/en/devguide/html/a4j_outputPanel.html](http://docs.jboss.org/richfaces/latest_3_3_X/en/devguide/html/a4j_outputPanel.html)

## a4j:commandLink Does Not Behave&nbsp;Like h:commandLink

For instance if you naively replace `h:commandLink` by `a4j:commandLink` in the sort column links of a document listings you can get no effect on the first click (but works the second time but with the wrong arrow position).

The reason is that `h:commandLink` is a traditional JSF JavaScript postback that first sends a POST request to apply the new values and then redirect the browser using HTTP code 302 to the updated page using a second GET request that renders the results. In the `a4j:commandLink` case this is a different story since there is only one HTTP request to perform both the model values update and the new HTML fragment rendering. Hence if you use Seam variables computed by EVENT scoped factory, it is computed twice in the first case and only once (and then "cached") in the second case.

For instance the `SortActionsBean` has been improved to allow the caller to invalidate Seam components using an additional `f:param` with name `invalidateSeamVariables` to invalidate the `filterSelectModel` that gets cached too early (before we change the order with the Ajax action):&nbsp;[http://hg.nuxeo.org/nuxeo/nuxeo-jsf/rev/7e388aa56786](http://hg.nuxeo.org/nuxeo/nuxeo-jsf/rev/7e388aa56786).

Hence the sort title controls can be ajaxified in the following way:

```
<a4j:commandLink id="title" action="#{sortActions.repeatSearch}"
              rendered="#{provider.sortable}" reRender="filterResultTable" >
      <h:outputText value="#{messages['label.content.header.title']}" />
      <f:param name="providerName" value="#{providerName}" />
      <f:param name="sortColumn" value="dc:title" />
      <f:param name="invalidateSeamVariables" value="filterSelectModel" />
      <h:panelGroup rendered="#{provider.sortInfo.sortColumn == 'dc:title' }" 
        <h:graphicImage value="/icons/arrow_down.gif"
            rendered="#{provider.sortInfo.sortAscending}" />
        <h:graphicImage value="/icons/arrow_up.gif"
            rendered="#{!provider.sortInfo.sortAscending}" />
      </h:panelGroup>
</a4j:commandLink>

```

## Use the New a4j Namespace

The URI for `a4j:` and `rich:` namespaces are changed to "http://richfaces.org/a4j" and "http://richfaces.org/rich". The previous URIs are also available for a backward compatibility but it is recommended to switch to the new names for consistency.

## Testing with Selenium

Add the following functions in your user-extensions.js of your Selenium tests suite to be able to setup smart waiters in your Selenium tests suite that have a far better stability than "pause" steps that may slowdown then set suite a lot while still breaking randomly if the Selenium server is otherwise put under too much load:&nbsp;[http://www.nuxeo.com/blog/development/2009/03/selenium-ajax-requests/](http://www.nuxeo.com/blog/development/2009/03/selenium-ajax-requests/).

{{#> callout type='note' }}

There seems to be bugs remaining with this method: it works most of the time but sometimes breaks later unexpectedly. More investigations are needed to make it robust.

{{/callout}}