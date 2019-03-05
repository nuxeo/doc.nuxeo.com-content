---
title: Ajax4jsf Best Practices
review:
    comment: ''
    date: '2019-02-13'
    status: ok
details:
    howto:
        excerpt: 'Learn the best practices of Ajax4JSF to ensure correct rendering, HTML and testing.'
        level: Advanced
        tool: Code
        topics: 'JSF, Ajax'
labels:
    - content-review-lts2016
    - ajax4jsf
    - todo
    - a4j
    - howto
    - jsf
    - seam-jsf-component
    - atchertchian
    - excerpt
    - content-review-lts2017
    - jsf-ui
toc: true
confluence:
    ajs-parent-page-id: '9830458'
    ajs-parent-page-title: JSF and Ajax Tips and How-To Index
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Ajax4jsf+Best+Practices
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Ajax4jsf+Best+Practices'
    page_id: '4688639'
    shortlink: '-4pH'
    shortlink_source: 'https://doc.nuxeo.com/x/-4pH'
    source_link: /display/NXDOC/Ajax4jsf+Best+Practices
tree_item_index: 100
history:
    -
        author: Anahide Tchertchian
        date: '2014-12-09 15:31'
        message: ''
        version: '11'
    -
        author: Manon Lumeau
        date: '2014-09-18 11:08'
        message: ''
        version: '10'
    -
        author: Manon Lumeau
        date: '2014-09-17 17:23'
        message: ''
        version: '9'
    -
        author: Manon Lumeau
        date: '2014-09-17 12:41'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2014-01-23 15:27'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2014-01-23 15:21'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2014-01-23 15:17'
        message: Added TOC and formatting
        version: '5'
    -
        author: Anahide Tchertchian
        date: '2013-04-29 16:44'
        message: 'NXP-11472: add doc about attribute layout="block" on tag a4j:outputPanel'
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
{{{multiexcerpt 'JSF-UI-required' page='generic-multi-excerpts'}}}
{{! excerpt}}
This page lists some good practices to follow to ensure correct rendering, HTML and testing.
{{! /excerpt}}

## Use a4j:region to Speed up Ajax Rendering

Wrap JSF components that are affected by rerender targets or&nbsp;`a4j:support`&nbsp;tags with a&nbsp;`a4j:region renderRegionOnly="true"`&nbsp;in order to both lower the network bandwidth usage and the CPU pressure on the server since a much smaller part of the JSF tree will be processed:

TODO: add an example here

## Use a4j:outputPanel as Target of Rerender Clauses

If you have JSF elements with dynamic render clause that are evaluated to false in the first page rendering, a4j reRendering will fail to make them appear afterward since will not be present in the JSF rendering tree. Wrapping them with a&nbsp;`a4j:outputPanel`&nbsp;that holds the reRender target id will solve the issue.

TODO: add an example here

Also see for reference:&nbsp;[http://www.jroller.com/a4j/entry/ajax_regions_and_output_panels](http://www.jroller.com/a4j/entry/ajax_regions_and_output_panels)

## Use Attribute layout="block" on [a4j:outputPanel](http://a4joutputPanel) Tag

If the&nbsp;[`a4j:outputPanel`](http://a4joutputPanel)&nbsp;tag will contain divs or tables, for instance, you should use attribute&nbsp;`layout="block"`&nbsp;so that it's displayed using a&nbsp;`div`&nbsp;instead of a&nbsp;`span`, as a span tag containing divs or tables will produce invalid HTML.

See the reference documentation at&nbsp;[http://docs.jboss.org/richfaces/latest_3_3_X/en/devguide/html/a4j_outputPanel.html](http://docs.jboss.org/richfaces/latest_3_3_X/en/devguide/html/a4j_outputPanel.html)

## [a4j:commandLink](http://a4jcommandLink) Does Not Behave Like h:commandLink

For instance if you naively replace&nbsp;`h:commandLink`&nbsp;by&nbsp;[`a4j:commandLink`](http://a4jcommandLink)&nbsp;in the sort column links of a document listings you can get no effect on the first click (but works the second time but with the wrong arrow position).

The reason is that&nbsp;`h:commandLink`&nbsp;is a traditional JSF JavaScript postback that first sends a POST request to apply the new values and then redirect the browser using HTTP code 302 to the updated page using a second GET request that renders the results. In the&nbsp;[`a4j:commandLink`](http://a4jcommandLink)&nbsp;case this is a different story since there is only one HTTP request to perform both the model values update and the new HTML fragment rendering. Hence if you use Seam variables computed by EVENT scoped factory, it is computed twice in the first case and only once (and then "cached") in the second case.

For instance the&nbsp;`SortActionsBean`&nbsp;has been improved to allow the caller to invalidate Seam components using an additional&nbsp;`f:param`&nbsp;with name&nbsp;`invalidateSeamVariables`&nbsp;to invalidate the&nbsp;`filterSelectModel`&nbsp;that gets cached too early (before we change the order with the Ajax action):&nbsp;[http://hg.nuxeo.org/nuxeo/nuxeo-jsf/rev/7e388aa56786](http://hg.nuxeo.org/nuxeo/nuxeo-jsf/rev/7e388aa56786).

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

The URI for&nbsp;`a4j:`&nbsp;and&nbsp;`rich:`&nbsp;namespaces are changed to "[http://richfaces.org/a4j](http://richfaces.org/a4j)" and "[http://richfaces.org/rich](http://richfaces.org/rich)". The previous URIs are also available for a backward compatibility but it is recommended to switch to the new names for consistency.

## Testing with Selenium

Add the following functions in your user-extensions.js of your Selenium tests suite to be able to setup smart waiters in your Selenium tests suite that have a far better stability than "pause" steps that may slowdown then set suite a lot while still breaking randomly if the Selenium server is otherwise put under too much load:&nbsp;[http://www.nuxeo.com/blog/development/2009/03/selenium-ajax-requests/](http://www.nuxeo.com/blog/development/2009/03/selenium-ajax-requests/).

{{#> callout type='note' }}

There seems to be bugs remaining with this method: it works most of the time but sometimes breaks later unexpectedly. More investigations are needed to make it robust.

{{/callout}}

&nbsp;

* * *

&nbsp;

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related How-Tos'}}

- [JSF and Javascript ]({{page page='jsf-and-javascript'}})
- [Ajax Forms and Actions]({{page page='ajax-forms-and-actions'}})
- [How to Add a JSF Form Validation]({{page page='how-to-add-a-jsf-form-validation'}})
- [How-To Index]({{page page='how-to-index'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [JavaScript Client]({{page page='javascript-client'}})
- [JSF UI Framework]({{page page='jsf-ui-framework'}})
- [Nuxeo JSF UI]({{page page='nuxeo-jsf-ui'}})&nbsp;

{{/panel}}</div></div>
