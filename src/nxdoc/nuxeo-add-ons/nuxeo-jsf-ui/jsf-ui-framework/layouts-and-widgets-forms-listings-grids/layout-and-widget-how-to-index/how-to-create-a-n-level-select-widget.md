---
title: How to Create a N-Level Select Widget
review:
    comment: ''
    date: '2017-12-01'
    status: ok
notes: Documentation page used on Nuxeo Studio. Check with NOS team before deleting or moving.
details:
    howto:
        excerpt: >-
            Learn how to create a selection widget with 3 levels by contributing
            a "template widget" in Studio.
        level: Advanced
        tool: Studio
        topics: 'Layout, Widget'
labels:
    - content-review-lts2017
    - widget
    - layout
    - howto
    - studio
    - layout-widgets-component
    - excerpt
toc: true
confluence:
    ajs-parent-page-id: '19235623'
    ajs-parent-page-title: Layout & Widget How-To Index
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: How+to+Create+a+N-Level+Select+Widget
    canonical_source: >-
        https://doc.nuxeo.com/display/NXDOC/How+to+Create+a+N-Level+Select+Widget
    page_id: '6029528'
    shortlink: 2ABc
    shortlink_source: 'https://doc.nuxeo.com/x/2ABc'
    source_link: /display/NXDOC/How+to+Create+a+N-Level+Select+Widget
tree_item_index: 400
history:
    -
        author: Anahide Tchertchian
        date: '2015-05-04 12:06'
        message: ''
        version: '26'
    -
        author: Anahide Tchertchian
        date: '2015-04-03 10:04'
        message: 'NXP-16605: templates update again (wrong version edited before...)'
        version: '25'
    -
        author: Anahide Tchertchian
        date: '2015-04-03 09:58'
        message: >-
            NXP-16605: another template update for incmplete selection related
            bugs
        version: '24'
    -
        author: Anahide Tchertchian
        date: '2015-04-02 17:05'
        message: fix the "onchange" event to "change" (again...)
        version: '23'
    -
        author: Anahide Tchertchian
        date: '2015-03-25 21:37'
        message: fix the "onchange" event to "change"
        version: '22'
    -
        author: Anahide Tchertchian
        date: '2015-03-23 17:57'
        message: fix the "onchange" event to "change"
        version: '21'
    -
        author: Anahide Tchertchian
        date: '2015-03-06 10:26'
        message: >-
            NXP-16605: update templates to fix "Incomplete selections are not
            allowed" validation message issue
        version: '20'
    -
        author: Solen Guitter
        date: '2014-12-01 22:30'
        message: ''
        version: '19'
    -
        author: Anahide Tchertchian
        date: '2014-11-28 17:41'
        message: ''
        version: '18'
    -
        author: Anahide Tchertchian
        date: '2014-11-28 17:37'
        message: 'NXDOC-414: update samples for JSF2 migration'
        version: '17'
    -
        author: Manon Lumeau
        date: '2014-09-12 15:39'
        message: ''
        version: '16'
    -
        author: Manon Lumeau
        date: '2014-09-11 17:59'
        message: ''
        version: '15'
    -
        author: Solen Guitter
        date: '2014-08-25 11:39'
        message: Remove 5.4 reference
        version: '14'
    -
        author: Solen Guitter
        date: '2014-08-25 10:31'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2013-09-02 14:54'
        message: ''
        version: '12'
    -
        author: Anahide Tchertchian
        date: '2012-05-11 11:24'
        message: Migrated to Confluence 4.0
        version: '11'
    -
        author: Anahide Tchertchian
        date: '2012-05-11 11:24'
        message: fix size value on multiselect example
        version: '10'
    -
        author: Laurent Doguin
        date: '2012-03-02 17:32'
        message: ''
        version: '9'
    -
        author: Laurent Doguin
        date: '2012-03-02 17:20'
        message: add template widget configuration screenshot
        version: '8'
    -
        author: Solen Guitter
        date: '2011-09-05 18:45'
        message: ''
        version: '7'
    -
        author: Alain Escaffre
        date: '2011-05-25 20:11'
        message: ''
        version: '6'
    -
        author: Alain Escaffre
        date: '2011-03-23 11:27'
        message: ''
        version: '5'
    -
        author: Anahide Tchertchian
        date: '2011-03-03 19:17'
        message: ''
        version: '4'
    -
        author: Anahide Tchertchian
        date: '2011-03-03 18:36'
        message: ''
        version: '3'
    -
        author: Anahide Tchertchian
        date: '2011-03-03 18:16'
        message: ''
        version: '2'
    -
        author: Alain Escaffre
        date: '2011-03-02 20:27'
        message: ''
        version: '1'
---
{{! excerpt}}

In this page we provide samples to have a selection widget with 3 levels by contributing a "template widget" in Studio. Each sample code below is the sample for one widget that has a different behavior (described before the code).

{{! /excerpt}}

To create and use a new widget:

1.  Copy-paste the sample of your choice in a file that you call, for instance, "3_level_select_widget.xhtml".

    {{#> callout type='tip' }}

    Of course you can modify the samples below to add other levels, or other behaviors. You just need to be familiar with facelets and JSF.

    {{/callout}}
2.  Upload this file in the **Resources** > **Widgets** section.
    The widget is created. You can now use it on layouts and forms.
3.  In the layout of the document type where you want to use the widget, drag and drop the **Template** widget from the **Advanced Widgets** category on the right.
4.  Edit the properties of the widget.
    Here are the properties specific to custom widgets that you need to fill in.
    - Template: choose the XHTML file you have just uploaded.
    - Fields: add one field and put the XPath of the field you want to update. For instance, "dc:coverage".
    - Custom properties configuration: in our sample, you can (should) add those three properties labels and put the value you need:
        - localize
        - required
        - directoryName (should be the name of the vocabulary that holds the values that are displayed).

![]({{file name='ConfigureTemplateWidget.png'}} ?w=450,border=true)

## Widget Samples

### Mono-Select 3-Level Widget

Sample example on 3 levels with widget property&nbsp;`directoryName` filled with the directory name (mono select):

```
<f:subview
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:f="http://java.sun.com/jsf/core"
  xmlns:c="http://java.sun.com/jstl/core"
  xmlns:h="http://java.sun.com/jsf/html"
  xmlns:a4j="http://richfaces.org/a4j"
  xmlns:fn="http://java.sun.com/jsp/jstl/functions"
  xmlns:nxu="http://nuxeo.org/nxweb/util"
  xmlns:nxdir="http://nuxeo.org/nxdirectory"
  xmlns:nxl="http://nuxeo.org/nxforms/layout"
  xmlns:nxp="http://nuxeo.org/nxweb/pdf"
  id="#{widget.id}">
<c:if test="#{nxl:isLikeViewMode(widget.mode)}">

  <nxdir:chainSelect id="#{widget.id}_viewselect" size="3" value="#{field}"
    displayValueOnly="true" defaultRootKey="">
    <nxdir:chainSelectListbox index="0" size="0" directoryName="#{widget.properties['directoryName']}"
      localize="true" id="#{widget.id}_parent" displayObsoleteEntries="true" />
    <nxdir:chainSelectListbox index="1" size="0" directoryName="#{widget.properties['directoryName']}"
      localize="true" id="#{widget.id}_parent2" displayObsoleteEntries="true" />
    <nxdir:chainSelectListbox index="2" size="0" directoryName="#{widget.properties['directoryName']}"
      localize="true" id="#{widget.id}_child" displayObsoleteEntries="true" />
    <nxdir:chainSelectStatus display="value" id="#{widget.id}_status" />
  </nxdir:chainSelect>

</c:if>
<c:if test="#{widget.mode == 'edit'}">

  <nxdir:chainSelect size="3" value="#{field}"
    id="#{widget.id}_editselect" multiSelect="false"
    multiParentSelect="false"
    allowBranchSelection="#{widgetProperty_allowBranchSelection}"
    defaultRootKey="" required="#{widgetProperty_required}">
    <a4j:region id="#{widget.id}_region">
      <nxdir:chainSelectListbox index="0" size="1"
        directoryName="#{widget.properties['directoryName']}"
        localize="#{widget.properties['localize']}"
        id="#{widget.id}_parent" ordering="label">
        <f:ajax event="change"
          render="#{widget.id}_parent2 #{widget.id}_child #{widget.id}_message"
          execute="@this" />
      </nxdir:chainSelectListbox>
      <nxdir:chainSelectListbox index="1" size="1"
        directoryName="#{widget.properties['directoryName']}"
        localize="#{widget.properties['localize']}"
        id="#{widget.id}_parent2" ordering="label">
        <a4j:ajax event="change"
          render="#{widget.id}_child #{widget.id}_message"
          execute="@region" />
      </nxdir:chainSelectListbox>
    </a4j:region>
    <nxdir:chainSelectListbox size="1" index="2"
      directoryName="#{widget.properties['directoryName']}"
      localize="#{widget.properties['localize']}"
      id="#{widget.id}_child" ordering="label" />
  </nxdir:chainSelect>
  <h:message styleClass="errorMessage" for="#{widget.id}_editselect"
    id="#{widget.id}_message" />

</c:if>
</f:subview>
```

### Multi-Select 3-Level Widget

Sample example on 3 levels with widget property `directoryName` filled with the directory name (multi select):

```
<f:subview
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:f="http://java.sun.com/jsf/core"
  xmlns:c="http://java.sun.com/jstl/core"
  xmlns:h="http://java.sun.com/jsf/html"
  xmlns:a4j="http://richfaces.org/a4j"
  xmlns:fn="http://java.sun.com/jsp/jstl/functions"
  xmlns:nxu="http://nuxeo.org/nxweb/util"
  xmlns:nxdir="http://nuxeo.org/nxdirectory"
  xmlns:nxl="http://nuxeo.org/nxforms/layout"
  xmlns:nxp="http://nuxeo.org/nxweb/pdf"
  id="#{widget.id}">
<c:if test="#{nxl:isLikeViewMode(widget.mode)}">

  <nxdir:chainSelect id="#{widget.id}_viewselect" size="3"
    value="#{field}" displayValueOnly="true" multiSelect="true"
    defaultRootKey="">
    <nxdir:chainSelectListbox index="0" size="4"
    directoryName="#{widget.properties['directoryName']}"
    localize="#{widget.properties['localize']}"
    id="#{widget.id}_parent" />
    <nxdir:chainSelectListbox size="4"
      directoryName="#{widget.properties['directoryName']}" index="1"
      localize="#{widget.properties['localize']}"
      id="#{widget.id}_parent2" />
    <nxdir:chainSelectListbox size="4"
      directoryName="#{widget.properties['directoryName']}" index="2"
      localize="#{widget.properties['localize']}"
      id="#{widget.id}_child" />
    <nxdir:chainSelectStatus display="value" id="#{widget.id}_status" />
  </nxdir:chainSelect>

</c:if>
<c:if test="#{widget.mode == 'edit'}">

  <a4j:region id="#{widget.id}_region" renderRegionOnly="true">
    <nxdir:chainSelect size="3" value="#{field}"
      id="#{widget.id}_editselect" multiSelect="true"
      multiParentSelect="true"
      allowBranchSelection="#{widgetProperty_allowBranchSelection}"
      defaultRootKey="" required="#{widgetProperty_required}">
      <nxdir:chainSelectListbox index="0" size="4"
        directoryName="#{widget.properties['directoryName']}"
        localize="#{widget.properties['localize']}"
        id="#{widget.id}_parent" ordering="label">
        <a4j:ajax event="change"
          render="#{widget.id}_parent2 #{widget.id}_child #{widget.id}_message"
          execute="@this" />
      </nxdir:chainSelectListbox>
      <nxdir:chainSelectListbox index="1" size="4"
        directoryName="#{widget.properties['directoryName']}"
        localize="#{widget.properties['localize']}"
        id="#{widget.id}_parent2" ordering="label">
        <a4j:ajax event="change"
          render="#{widget.id}_child #{widget.id}_message"
          immediate="true" />
      </nxdir:chainSelectListbox>
      <nxdir:chainSelectListbox size="4" index="2"
        directoryName="#{widget.properties['directoryName']}"
        localize="#{widget.properties['localize']}"
        id="#{widget.id}_child" ordering="label" />
      <a4j:commandButton value="#{messages['command.add']}"
        styleClass="button" immediate="true"
        actionListener="#{chainSelectActions.add}"
        render="#{widget.id}_status #{widget.id}_message"
        id="#{widget.id}_add" />
      <br />
      <nxdir:chainSelectStatus display="value"
        entryCssStyle="background-color: #DDEEFF"
        label="#{messages['label.chainSelect.selection']}"
        id="#{widget.id}_status">
        <f:facet name="removeButton">
          <a4j:commandButton
            actionListener="#{chainSelectActions.delete}"
            execute="@this" render="#{widget.id}_status"
            image="/icons/toggle_minus.png"
            id="#{widget.id}_delete" />
        </f:facet>
      </nxdir:chainSelectStatus>
    </nxdir:chainSelect>
  </a4j:region>
  <h:message styleClass="errorMessage" for="#{widget.id}_editselect"
    id="#{widget.id}_message" />

</c:if>
</f:subview>

```

## Complete Examples with CSV (Plain) and PDF Rendering

### Mono-Select Widget

```
<f:subview
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:f="http://java.sun.com/jsf/core"
  xmlns:c="http://java.sun.com/jstl/core"
  xmlns:h="http://java.sun.com/jsf/html"
  xmlns:a4j="http://richfaces.org/a4j"
  xmlns:fn="http://java.sun.com/jsp/jstl/functions"
  xmlns:nxu="http://nuxeo.org/nxweb/util"
  xmlns:nxdir="http://nuxeo.org/nxdirectory"
  xmlns:nxl="http://nuxeo.org/nxforms/layout"
  xmlns:nxp="http://nuxeo.org/nxweb/pdf"
  id="#{widget.id}">
<c:if test="#{nxl:isLikePlainMode(widget.mode)}">
<f:subview rendered="#{not empty field}"><nxdir:directoryEntryOutput
  directoryName="#{widget.properties['directoryName']}"
    value="#{fn:split(field, '/')[0]}"
    localize="#{widget.properties['localize']}" />/<nxdir:directoryEntryOutput
    directoryName="#{widget.properties['directoryName']}"
    value="#{fn:split(field, '/')[1]}"
    localize="#{widget.properties['localize']}" />/<nxdir:directoryEntryOutput
    directoryName="#{widget.properties['directoryName']}"
    value="#{field}"
    localize="#{widget.properties['localize']}"
    keySeparator="/" />
</f:subview>
</c:if>
<c:if test="#{widget.mode == 'pdf'}">
  <nxp:html>
   <nxdir:chainSelect id="#{widget.id}_viewselect" size="3" value="#{field}"
    displayValueOnly="true" defaultRootKey="">
     <nxdir:chainSelectListbox index="0" size="0" directoryName="#{widget.properties['directoryName']}"
       localize="true" id="#{widget.id}_parent" displayObsoleteEntries="true" />
     <nxdir:chainSelectListbox index="1" size="0" directoryName="#{widget.properties['directoryName']}"
       localize="true" id="#{widget.id}_parent2" displayObsoleteEntries="true" />
     <nxdir:chainSelectListbox index="2" size="0" directoryName="#{widget.properties['directoryName']}"
       localize="true" id="#{widget.id}_child" displayObsoleteEntries="true" />
     <nxdir:chainSelectStatus display="value" id="#{widget.id}_status" />
   </nxdir:chainSelect>
  </nxp:html>
</c:if>
<c:if test="#{nxl:isLikeViewMode(widget.mode)}">

  <nxdir:chainSelect id="#{widget.id}_viewselect" size="3" value="#{field}"
    displayValueOnly="true" defaultRootKey="">
    <nxdir:chainSelectListbox index="0" size="0" directoryName="#{widget.properties['directoryName']}"
      localize="true" id="#{widget.id}_parent" displayObsoleteEntries="true" />
    <nxdir:chainSelectListbox index="1" size="0" directoryName="#{widget.properties['directoryName']}"
      localize="true" id="#{widget.id}_parent2" displayObsoleteEntries="true" />
    <nxdir:chainSelectListbox index="2" size="0" directoryName="#{widget.properties['directoryName']}"
      localize="true" id="#{widget.id}_child" displayObsoleteEntries="true" />
    <nxdir:chainSelectStatus display="value" id="#{widget.id}_status" />
  </nxdir:chainSelect>

</c:if>
<c:if test="#{widget.mode == 'edit'}">

  <nxdir:chainSelect size="3" value="#{field}"
    id="#{widget.id}_editselect" multiSelect="false"
    multiParentSelect="false"
    allowBranchSelection="#{widgetProperty_allowBranchSelection}"
    defaultRootKey="" required="#{widgetProperty_required}">
    <a4j:region id="#{widget.id}_region">
      <nxdir:chainSelectListbox index="0" size="1"
        directoryName="#{widget.properties['directoryName']}"
        localize="#{widget.properties['localize']}"
        id="#{widget.id}_parent" ordering="label">
        <f:ajax event="change"
          render="#{widget.id}_parent2 #{widget.id}_child #{widget.id}_message"
          execute="@this" />
      </nxdir:chainSelectListbox>
      <nxdir:chainSelectListbox index="1" size="1"
        directoryName="#{widget.properties['directoryName']}"
        localize="#{widget.properties['localize']}"
        id="#{widget.id}_parent2" ordering="label">
        <a4j:ajax event="change"
          render="#{widget.id}_child #{widget.id}_message"
          execute="@region" />
      </nxdir:chainSelectListbox>
    </a4j:region>
    <nxdir:chainSelectListbox size="1" index="2"
      directoryName="#{widget.properties['directoryName']}"
      localize="#{widget.properties['localize']}"
      id="#{widget.id}_child" ordering="label" />
  </nxdir:chainSelect>
  <h:message styleClass="errorMessage" for="#{widget.id}_editselect"
    id="#{widget.id}_message" />

</c:if>
</f:subview>

```

### Multi-Select Widget

```
<f:subview
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:f="http://java.sun.com/jsf/core"
  xmlns:c="http://java.sun.com/jstl/core"
  xmlns:h="http://java.sun.com/jsf/html"
  xmlns:a4j="http://richfaces.org/a4j"
  xmlns:fn="http://java.sun.com/jsp/jstl/functions"
  xmlns:nxu="http://nuxeo.org/nxweb/util"
  xmlns:nxdir="http://nuxeo.org/nxdirectory"
  xmlns:nxl="http://nuxeo.org/nxforms/layout"
  xmlns:nxp="http://nuxeo.org/nxweb/pdf"
  id="#{widget.id}">
<c:if test="#{nxl:isLikePlainMode(widget.mode)}"><nxu:inputList
  value="#{field}" model="chainModel"><nxdir:directoryEntryOutput
  directoryName="#{widget.properties['directoryName']}"
    value="#{fn:split(chainModel.rowData, '/')[0]}"
    localize="#{widget.properties['localize']}" />/<nxdir:directoryEntryOutput
    directoryName="#{widget.properties['directoryName']}"
    value="#{fn:split(chainModel.rowData, '/')[1]}"
    localize="#{widget.properties['localize']}" />/<nxdir:directoryEntryOutput
    directoryName="#{widget.properties['directoryName']}"
    value="#{chainModel.rowData}"
    localize="#{widget.properties['localize']}"
    keySeparator="/" /><h:outputText
  rendered="#{chainModel.rowIndex != chainModel.rowCount -1}" value=", " /></nxu:inputList>
</c:if>
<c:if test="#{widget.mode == 'pdf'}">
  <nxp:html>
    <nxdir:chainSelect id="#{widget.id}_viewselect" size="3"
      value="#{field}" displayValueOnly="true" multiSelect="true"
      defaultRootKey="">
      <nxdir:chainSelectListbox index="0" size="4"
      directoryName="#{widget.properties['directoryName']}"
      localize="#{widget.properties['localize']}"
      id="#{widget.id}_parent" />
      <nxdir:chainSelectListbox size="4"
        directoryName="#{widget.properties['directoryName']}" index="1"
        localize="#{widget.properties['localize']}"
        id="#{widget.id}_parent2" />
      <nxdir:chainSelectListbox size="4"
        directoryName="#{widget.properties['directoryName']}" index="2"
        localize="#{widget.properties['localize']}"
        id="#{widget.id}_child" />
      <nxdir:chainSelectStatus display="value" id="#{widget.id}_status" />
    </nxdir:chainSelect>
    </nxp:html>
</c:if>
<c:if test="#{nxl:isLikeViewMode(widget.mode)}">

  <nxdir:chainSelect id="#{widget.id}_viewselect" size="3"
    value="#{field}" displayValueOnly="true" multiSelect="true"
    defaultRootKey="">
    <nxdir:chainSelectListbox index="0" size="4"
    directoryName="#{widget.properties['directoryName']}"
    localize="#{widget.properties['localize']}"
    id="#{widget.id}_parent" />
    <nxdir:chainSelectListbox size="4"
      directoryName="#{widget.properties['directoryName']}" index="1"
      localize="#{widget.properties['localize']}"
      id="#{widget.id}_parent2" />
    <nxdir:chainSelectListbox size="4"
      directoryName="#{widget.properties['directoryName']}" index="2"
      localize="#{widget.properties['localize']}"
      id="#{widget.id}_child" />
    <nxdir:chainSelectStatus display="value" id="#{widget.id}_status" />
  </nxdir:chainSelect>

</c:if>
<c:if test="#{widget.mode == 'edit'}">

  <a4j:region id="#{widget.id}_region" renderRegionOnly="true">
    <nxdir:chainSelect size="3" value="#{field}"
      id="#{widget.id}_editselect" multiSelect="true"
      multiParentSelect="true"
      allowBranchSelection="#{widgetProperty_allowBranchSelection}"
      defaultRootKey="" required="#{widgetProperty_required}">
      <nxdir:chainSelectListbox index="0" size="4"
        directoryName="#{widget.properties['directoryName']}"
        localize="#{widget.properties['localize']}"
        id="#{widget.id}_parent" ordering="label">
        <a4j:ajax event="change"
          render="#{widget.id}_parent2 #{widget.id}_child #{widget.id}_message"
          execute="@this" />
      </nxdir:chainSelectListbox>
      <nxdir:chainSelectListbox index="1" size="4"
        directoryName="#{widget.properties['directoryName']}"
        localize="#{widget.properties['localize']}"
        id="#{widget.id}_parent2" ordering="label">
        <a4j:ajax event="change"
          render="#{widget.id}_child #{widget.id}_message"
          immediate="true" />
      </nxdir:chainSelectListbox>
      <nxdir:chainSelectListbox size="4" index="2"
        directoryName="#{widget.properties['directoryName']}"
        localize="#{widget.properties['localize']}"
        id="#{widget.id}_child" ordering="label" />
      <a4j:commandButton value="#{messages['command.add']}"
        styleClass="button" immediate="true"
        actionListener="#{chainSelectActions.add}"
        render="#{widget.id}_status #{widget.id}_message"
        id="#{widget.id}_add" />
      <br />
      <nxdir:chainSelectStatus display="value"
        entryCssStyle="backgroundcolor: #DDEEFF"
        label="#{messages['label.chainSelect.selection']}"
        id="#{widget.id}_status">
        <f:facet name="removeButton">
          <a4j:commandButton
            actionListener="#{chainSelectActions.delete}"
            execute="@this" render="#{widget.id}_status"
            image="/icons/toggle_minus.png"
            id="#{widget.id}_delete" />
        </f:facet>
      </nxdir:chainSelectStatus>
    </nxdir:chainSelect>
  </a4j:region>
  <h:message styleClass="errorMessage" for="#{widget.id}_editselect"
    id="#{widget.id}_message" />

</c:if>
</f:subview>
```

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related How-Tos'}}

- [How to Set a Default Date on a Field at Document Creation]({{page page='how-to-set-a-default-date-on-a-field-at-document-creation'}})
- [Customize the Versioning and Comment Widget]({{page page='how-to-customize-the-versioning-and-comment-widget-on-document-edit-form'}})
- [How to Add a JSF Form Validation]({{page page='how-to-add-a-jsf-form-validation'}})
- [How-To Index]({{page page='how-to-index'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [JSF UI Framework]({{page page='jsf-ui-framework'}})
- [Form Layouts in Nuxeo Studio]({{page space='studio' page='form-layouts'}})
- [Layout and Widgets]({{page page='layouts-and-widgets-forms-listings-grids'}})
- [JSF UI Limitations]({{page page='jsf-ui-limitations'}})
- [Widget Definitions]({{page page='widget-definitions'}})

{{/panel}}</div></div>
