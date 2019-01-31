---
title: How to Impact Another JSF Component from a Command or Select
description: When designing a screen or form, you may want to render a part of the page when clicking on a link or when choosing an element in a select. This page explains how this can be done in a XHTML template.
review:
    comment: ''
    date: '2015-12-01'
    status: ok
details:
    howto:
        excerpt: Learn how to impact another JSF component from a Command or Select.
        level: Advanced
        tool: Nuxeo IDE
        topics: 'Layout, JSF UI'
labels:
    - content-review-lts2016
    - howto
    - seam-jsf-component
    - atchertchian
    - jsf-ui
    - excerpt
    - content-review-lts2017
toc: true
confluence:
    ajs-parent-page-id: '9830458'
    ajs-parent-page-title: JSF and Ajax Tips and How-To Index
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: How+to+Impact+Another+JSF+Component+from+a+Command+or+Select
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/How+to+Impact+Another+JSF+Component+from+a+Command+or+Select'
    page_id: '20519998'
    shortlink: Phw5AQ
    shortlink_source: 'https://doc.nuxeo.com/x/Phw5AQ'
    source_link: /display/NXDOC/How+to+Impact+Another+JSF+Component+from+a+Command+or+Select
tree_item_index: 900
history:
    -
        author: Solen Guitter
        date: '2016-09-05 10:10'
        message: ''
        version: '14'
    -
        author: Anahide Tchertchian
        date: '2016-01-06 10:26'
        message: ''
        version: '13'
    -
        author: Anahide Tchertchian
        date: '2015-10-07 13:02'
        message: fotrmat
        version: '12'
    -
        author: Anahide Tchertchian
        date: '2015-10-07 13:01'
        message: add bulk edit example
        version: '11'
    -
        author: Anahide Tchertchian
        date: '2015-08-18 09:58'
        message: 'NXDOC-649: add checkbox rerender example'
        version: '10'
    -
        author: Anahide Tchertchian
        date: '2015-08-18 09:35'
        message: 'NXDOC-649: fix first example, ajaxifying it'
        version: '9'
    -
        author: Anahide Tchertchian
        date: '2015-07-31 16:47'
        message: 'fix subimtChanges -> submitValue'
        version: '8'
    -
        author: Solen Guitter
        date: '2014-12-09 17:06'
        message: fix typo
        version: '7'
    -
        author: Solen Guitter
        date: '2014-12-09 17:04'
        message: link update
        version: '6'
    -
        author: Anahide Tchertchian
        date: '2014-12-09 16:58'
        message: ''
        version: '5'
    -
        author: Anahide Tchertchian
        date: '2014-12-09 16:25'
        message: 'NXDOC-363 : add howtos about selectionActions helpers'
        version: '4'
    -
        author: Anahide Tchertchian
        date: '2014-12-09 15:57'
        message: 'NXDOC-363: start doc about value holder tag usage'
        version: '3'
    -
        author: Anahide Tchertchian
        date: '2014-12-01 14:52'
        message: ''
        version: '2'
    -
        author: Anahide Tchertchian
        date: '2014-12-01 14:52'
        message: ''
        version: '1'

---
{{{multiexcerpt 'JSF-UI-required' page='generic-multi-excerpts'}}}

{{#> callout type='info' }}
{{{multiexcerpt 'check-jsf-ui-dependency' page='how-to-define-a-new-content-view'}}}
{{/callout}}

{{! excerpt}}
When designing a screen or form, you may want to render a part of the page when clicking on a link or when choosing an element in a select. This page explains how this can be done in a XHTML template.
{{! /excerpt}}

This page describes how to do so without having to define a Seam component, keeping the contextual information. This is better for reuse of templates (like in widgets) within the same page, as you do not have to define a new Seam component for every context variable on the page.

The context variable is kept by a [nxu:valueHolder](http://community.nuxeo.com/api/nuxeo/7.1/tlddoc/nxu/valueHolder.html) tag, which also exposes the corresponding value in the context.

Two examples are given:

*   impact a given component with a static value
*   impact a given component with a value taken on another component

## Impacting with a Static Value

### Use Case

When i click on a button, another element should be hidden (or shown).

#### Available Helper

The Seam Component [selectionActions](http://explorer.nuxeo.org/nuxeo/site/distribution/latest/viewSeamComponent/seam:selectionActions) has a method named `setStaticValue` that will retrieve attributes named `selectedValue` and `targetComponentId` from its originating tag. It will lookup the corresponding component in the tree and set the value given by the `selectedValue` attribute (which can also be an EL expression).

#### Sample Template Excerpt

```xml
<ui:fragment
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:ui="http://java.sun.com/jsf/facelets"
  xmlns:h="http://java.sun.com/jsf/html"
  xmlns:c="http://java.sun.com/jstl/core"
  xmlns:f="http://java.sun.com/jsf/core"
  xmlns:a4j="http://richfaces.org/a4j"
  xmlns:nxu="http://nuxeo.org/nxweb/util">

<h:form>

  [...]

 <a4j:outputPanel id="showContentHolderPanel">
    <nxu:valueHolder id="showContentHolder"
      defaultValue="false"
      var="showContent">

      <h:commandButton rendered="#{not showContent}" value="Show">
        <f:attribute name="selectedValue" value="true" />
        <f:attribute name="targetComponentId" value="showContentHolder" />
        <nxu:actionListenerMethod value="#{selectionActions.setStaticValue}"/>
        <f:ajax execute="@this" render="showContentHolderPanel" />
      </h:commandButton>
      <h:commandButton rendered="#{showContent}" value="Hide">
        <f:attribute name="selectedValue" value="false" />
        <f:attribute name="targetComponentId" value="showContentHolder" />
        <nxu:actionListenerMethod value="#{selectionActions.setStaticValue}"/>
        <f:ajax execute="@this" render="showContentHolderPanel" />
      </h:commandButton>

      <c:if test="#{showContent}">
        My content
      </c:if>

    </nxu:valueHolder>
  </a4j:outputPanel>

  [...]

</h:form>

</ui:fragment>
```

## Impacting with a Value Taken on Another Component

### First Use Case

When I select an element in a drop down list, another element should be displayed depending on the selected value.

#### Available Helper

The Seam Component [selectionActions](http://explorer.nuxeo.org/nuxeo/site/distribution/latest/viewSeamComponent/seam:selectionActions) has a method named `setValueFromComponent` that will retrieve attributes named `sourceComponentId` and `targetComponentId` from its originating tag. It will lookup the corresponding source component in the tree, retrieve its current value, and set this value to the corresponding target component.

#### Sample Template Excerpt

This is an excerpt of the [widget template displaying additional information about a selected flavor](https://github.com/nuxeo/nuxeo-features/blob/master/localconf/nuxeo-localconf-web/src/main/resources/web/nuxeo.war/widgets/select_flavor_widget_template.xhtml) in local configuration:

```xml
<h:panelGroup>
  <nxu:set var="flavors"
    value="#{themeConfigurationActions.getAvailableFlavors(themeActions.defaultTheme)}"
    cache="true">
    <h:selectOneListbox id="#{widget.id}" value="#{field}">
      <nxu:selectItems
        var="flavor" value="#{flavors}"
        itemValue="#{flavor.name}" itemLabel="#{messages[flavor.label]}" />
      <f:attribute name="sourceComponentId" value="#{widget.id}" />
      <f:attribute name="targetComponentId" value="#{widget.id}_valueHolder" />
      <f:ajax execute="@this" render="#{widget.id}_preview"
        listener="#{selectionActions.setValueFromComponent}"
        id="#{widget.id}_ajax_select" />
    </h:selectOneListbox>
  </nxu:set>
  <h:message for="#{widget.id}" id="#{widget.id}_message"
    styleClass="errorMessage" />
</h:panelGroup>

<nxu:valueHolder id="#{widget.id}_valueHolder"
  var="selectedFlavorName"
  defaultValue="#{origSelectedFlavorName}"
  submitValue="false">
  <a4j:outputPanel id="#{widget.id}_preview" layout="block">
    <nxu:set var="selectedFlavor"
      value="#{themeActions.getFlavor(selectedFlavorName)}"
      cache="true">
      <c:choose>
        <c:when test="#{! empty selectedFlavor.logo.previewPath}">
          <h:graphicImage value="#{selectedFlavor.logo.previewPath}" class="palettePreviewLogo" />
        </c:when>
        <c:otherwise>
          <c:choose>
            <c:when test="#{! empty selectedFlavor.logo.path}">
              <h:graphicImage value="#{selectedFlavor.logo.path}" class="palettePreviewLogo" />
            </c:when>
            <c:otherwise>
              #{messages['label.local.configuration.theme.flavorSelection.noPreviewAvailable']}
            </c:otherwise>
          </c:choose>
        </c:otherwise>
      </c:choose>
    </nxu:set>
  </a4j:outputPanel>
</nxu:valueHolder>
```

### Second Use Case

In a form, when i check some checkbox, additional input fields are shown.

#### Available Helper

The Seam Component [selectionActions](http://explorer.nuxeo.org/nuxeo/site/distribution/latest/viewSeamComponent/seam:selectionActions) has a method named `setValueFromComponent` that will retrieve attributes named `sourceComponentId` and `targetComponentId` from its originating tag. It will lookup the corresponding source component in the tree, retrieve its current value, and set this value to the corresponding target component.

Also, additional input fields to show are declared as standard sub-widgets to a widget of type `template` which is displaying the checkbox and holding the re-render logics.

#### Sample Widget Template

```xml
<ui:fragment
  xmlns:h="http://java.sun.com/jsf/html"
  xmlns:a4j="http://richfaces.org/a4j"
  xmlns:nxu="http://nuxeo.org/nxweb/util"
  xmlns:ui="http://java.sun.com/jsf/facelets"
  xmlns:f="http://java.sun.com/jsf/core"
  xmlns:nxl="http://nuxeo.org/nxforms/layout">

  <h:selectBooleanCheckbox id="#{widget.id}" value="#{field_1}">
    <f:attribute name="sourceComponentId" value="#{widget.id}" />
    <f:attribute name="targetComponentId" value="#{widget.id}_valueholder"/>
    <f:ajax execute="@this" render="#{widget.id}_panel"
      listener="#{selectionActions.setValueFromComponent}" />
  </h:selectBooleanCheckbox>

  <a4j:outputPanel id="#{widget.id}_panel" layout="block">
    <nxu:valueHolder id="#{widget.id}_valueholder"
      var="show"
      defaultValue="#{field_1}">
      <ui:fragment rendered="#{show}">
        <nxl:subWidget>
          <nxl:widget widget="#{widget}" value="#{value}" />
        </nxl:subWidget>
      </ui:fragment>
     </nxu:valueHolder>
  </a4j:outputPanel>

</ui:fragment>
```

To use this template:

*   define a widget of type `template` and if you're in Studio, use an advanced `Generic Widget` to control fields definitions
*   add two fields for this widget: the first field should be empty, so that subwidgets are still bound to the same document (as first field mapping will be taken into account when building the subwidgets field binding), and second field should match the property holding the boolean value &ndash; note that persisting this value is useful for edition, so that persisted value can be taken into account when displaying the form again.

Here is a sample contribution:

```xml
<extension target="org.nuxeo.ecm.platform.forms.layout.WebLayoutManager"
  point="widgets">

  <widget name="checkboxReRender" type="template">
    <labels>
      <label mode="any">My widget</label>
    </labels>
    <fields>
      <field></field>
      <field>myschema:mybooleancheck</field>
    </fields>
    <properties mode="any">
      <property name="template">
        /widgets/checkbox_re_render.xhtml
      </property>
    </properties>
    <subWidgets>
      <widget name="sub" type="text">
        <fields>
          <field>myschema:mytext</field>
        </fields>
      </widget>
    </subWidgets>
  </widget>

</extension>
```

Refined version of this template when using it inside the bulk edit form (to make sure sub widget value is handled by the bulk edit too):

```
<ui:fragment
  xmlns:h="http://java.sun.com/jsf/html"
  xmlns:a4j="http://richfaces.org/a4j"
  xmlns:nxu="http://nuxeo.org/nxweb/util"
  xmlns:c="http://java.sun.com/jstl/core"
  xmlns:ui="http://java.sun.com/jsf/facelets"
  xmlns:f="http://java.sun.com/jsf/core"
  xmlns:nxl="http://nuxeo.org/nxforms/layout">

  <h:selectBooleanCheckbox id="#{widget.id}" value="#{field_1}"
    onclick="#{widgetProperty_onclick}">
    <f:attribute name="sourceComponentId" value="#{widget.id}" />
    <f:attribute name="targetComponentId" value="#{widget.id}_valueholder"/>
    <f:ajax execute="@this" render="#{widget.id}_panel"
      listener="#{selectionActions.setValueFromComponent}" />
  </h:selectBooleanCheckbox>

  <a4j:outputPanel id="#{widget.id}_panel" layout="block">
    <nxu:valueHolder id="#{widget.id}_valueholder"
      var="show"
      defaultValue="#{field_1}">
      <ui:fragment rendered="#{show}">
        <nxl:subWidget>

          <c:set var="contextDataKey"
            value="bulkEdit/#{nxl:fieldDefinitionsAsString(widget.fieldDefinitions)}" />
          <h:inputHidden
            id="#{widget.id}_bulk_key"
            value="#{value.contextData[contextDataKey]}">
            <f:attribute name="value" value="true" />
            <f:converter converterId="javax.faces.Boolean" />
          </h:inputHidden>

          <nxl:widget widget="#{widget}" value="#{value}" />

        </nxl:subWidget>
      </ui:fragment>
     </nxu:valueHolder>
  </a4j:outputPanel>

</ui:fragment>
```
