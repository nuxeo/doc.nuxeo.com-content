---
title: Filters and Access Controls
review:
    comment: ''
    date: '2015-12-01'
    status: ok
labels:
    - content-review-lts2016
    - filter
    - el
    - action
    - atchertchian
    - content-review-lts2017
toc: true
confluence:
    ajs-parent-page-id: '950289'
    ajs-parent-page-title: 'Actions (Links, Buttons, Icons, Tabs and More)'
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Filters+and+Access+Controls
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Filters+and+Access+Controls'
    page_id: '17794319'
    shortlink: D4UPAQ
    shortlink_source: 'https://doc.nuxeo.com/x/D4UPAQ'
    source_link: /display/NXDOC/Filters+and+Access+Controls
tree_item_index: 400
history:
    -
        author: Manon Lumeau
        date: '2016-08-17 10:05'
        message: emove deleted pag
        version: '18'
    -
        author: Anahide Tchertchian
        date: '2016-06-24 10:26'
        message: add tip to help debugging filters
        version: '17'
    -
        author: Manon Lumeau
        date: '2016-06-09 13:54'
        message: ''
        version: '16'
    -
        author: Vincent Dutat
        date: '2016-03-30 18:19'
        message: ''
        version: '15'
    -
        author: Vincent Dutat
        date: '2016-03-30 18:19'
        message: ''
        version: '14'
    -
        author: Manon Lumeau
        date: '2016-01-19 10:37'
        message: 'replace "Write" by "Edit"     '
        version: '13'
    -
        author: Solen Guitter
        date: '2015-10-15 11:42'
        message: Update related pages
        version: '12'
    -
        author: Anahide Tchertchian
        date: '2015-10-13 14:30'
        message: ''
        version: '11'
    -
        author: Manon Lumeau
        date: '2015-02-12 10:05'
        message: ''
        version: '10'
    -
        author: Vincent Dutat
        date: '2015-01-17 03:22'
        message: ''
        version: '9'
    -
        author: Anahide Tchertchian
        date: '2014-12-05 18:51'
        message: 'NXDOC-222: mention currentUser availability in action context'
        version: '8'
    -
        author: Solen Guitter
        date: '2014-01-20 15:46'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2014-01-20 15:45'
        message: ''
        version: '6'
    -
        author: Anahide Tchertchian
        date: '2013-12-20 19:19'
        message: add more info about context + filters without actions
        version: '5'
    -
        author: Anahide Tchertchian
        date: '2013-12-20 15:38'
        message: ''
        version: '4'
    -
        author: Anahide Tchertchian
        date: '2013-12-16 18:57'
        message: remove deprecated warning for 5.8
        version: '3'
    -
        author: Anahide Tchertchian
        date: '2013-12-16 18:56'
        message: move content from parent page + add wip warning
        version: '2'
    -
        author: Anahide Tchertchian
        date: '2013-12-03 16:27'
        message: ''
        version: '1'

---
{{! excerpt}}

Filters configuration allows to control activation of an action, to control its visibility depending on the user rights, for instance, or selected documents, etc.

{{! /excerpt}}

## {{> anchor 'filters'}}Managing Filters to Control an Action Visibility

An action visibility can be controlled using filters. An action filter is a set of rules that will apply - or not - given an action and a context.

Filters can be registered using their own [extension point](http://explorer.nuxeo.org/nuxeo/site/distribution/latest/viewExtensionPoint/org.nuxeo.ecm.platform.actions.ActionService--filters), or registered implicitly when defining them inside of an action definition.

Example of a filter registration:

```html/xml
<filter id="view_content">
  <rule grant="true">
    <permission>ReadChildren</permission>
    <facet>Folderish</facet>
  </rule>
  <rule grant="false">
    <type>Root</type>
  </rule>
</filter>

```

Example of a filter registration inside an action registration:

```html/xml
<action id="newSection" link="#{documentActions.createDocument('Section')}"
    enabled="true" label="command.create.section"
    icon="/icons/action_add.gif">
  <category>SUBVIEW_UPPER_LIST</category>
  <filter id="newSection">
    <rule grant="true">
      <permission>AddChildren</permission>
      <type>SectionRoot</type>
    </rule>
  </filter>
</action>

```

A filter can accept any number of rules. It will grant access to an action if, among its rules, no denying rule (`grant=false`) is found and at least one granting rule (`grant=true`) is found. A general rule to remember is that if you would like to add a filter to an action that already has one or more filters, it has to hold constraining rules: a granting filter will be ignored if another filter is already too constraining.

If no granting rule (`grant=true`) is found, the filter will grant access if no denying rule is found. If no rule is set, the filter will grant access by default.

The default filter implementation uses filter rules with the following properties:

*   `grant`: a boolean indicating whether this is a granting rule or a denying rule.
*   `permission`: a permission like "Edit" that will be checked on the context for the given user. A rule can hold several permissions: it applies if user holds at least one of them.
*   `facet`: a [facet]({{page page='available-facets'}}) like "Folderish" that can be set on the document type (`org.nuxeo.ecm.core.schema.types.Type`) to describe the document type general behavior. A rule can hold several facets: it applies if current document in context has at least one of them.
*   `condition`: an EL expression that can be evaluated against the context. The Seam context is made available for conditions evaluation. A rule can hold several conditions: it applies if at least one of the conditions is verified.
*   `type`: a document type to check against current document in context. A rule can hold several types: it applies if current document is one of them. The fake `Server` type is used to check the server context.
*   `schema`: a document schema to check against current document in context. A rule can hold several schemas: it applies if current document has one of them.
*   `group`: a group like "members" to check against current user in context. A rule can hold several groups: it applies if current user is in one of them.

Filters do not support merging, so if you define a filter with an id that is already used in another contribution, only the first contribution will be taken into account.

## EL Expressions and Available Context Variables

When defining an action which visibility that depends on the current document, the `currentDocument` variable can be used inside a `condition` element.

The `currentUser` variable is also available, resolving to a NuxeoPrincipal instance, and can also be used inside a `condition` element.

All other variables available in the Seam context can also be used (Seam components for instance).

In some specific use cases, some additional variables are available, for instance when displaying actions on content view results. These actions are hidden when filters resolve to false, often the filter will check if there are selected documents. These filters can use the custom variable `selectedDocuments`, representing the list of entries that have been selected, or&nbsp; `contentView`, representing the corresponding content view POJO.

## Using Filters without Actions

Since 5.6, filters resolution can be done independently from actions. This makes it possible to benefit from filters configurability and override/merging features.

For instance, `directoriesManagementAccess` makes it possible to control access to a given directory:

```xml
<extension target="org.nuxeo.ecm.platform.actions.ActionService"
  point="filters">
  <filter id="directoriesManagementAccess">
    <rule grant="true">
      <condition>#{currentUser.administrator}</condition>
      <condition>#{currentUser.isMemberOf('powerusers')}</condition>
    </rule>
  </filter>
</extension>
```

This can be looked up in the code, by calling the action service, and evaluating the filter given an evaluation context:

```java
ActionManager actionManager = Framework.getService(ActionManager.class);
return actionManager.checkFilter("directoriesManagementAccess", createActionContext(ctx));
```

This also can be looked up in XHTML templates, calling Seam component [webActions](http://explorer.nuxeo.org/nuxeo/site/distribution/latest/viewSeamComponent/seam:webActions) and using its default evaluation context:

```xml
<c:if test="#{webActions.checkFilter('directoriesManagementAccess')}">
  [...]
</c:if>
```

&nbsp;

## Debugging Filters

It can be useful to activate server logs to help debugging filters resolution. Logs are verbose, here is the configuration to setup to see these logs on the sever&nbsp;`lib/log4j.xml` configuration file:

```
  <category name="org.nuxeo.ecm.platform.actions.ActionService">
    <priority value="TRACE" />
  </category>
```

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Actions and Filters Related Documentation'}}

*   [HOWTO: Hide a Tab, a Link or a Button for a Group or a User]({{page page='how-to-hide-a-tab-a-link-or-a-button-for-a-group-or-a-user'}})
*   [HOWTO: Control the Display Mode of a Widget]({{page page='how-to-control-the-display-mode-of-a-widget'}})
*   [Filtering Options Reference Page]({{page space='studio' page='filtering-options-reference-page'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='EL and Variables Related Documentation'}}

*   [Understand Expression and Scripting Languages Used in Nuxeo]({{page page='understand-expression-and-scripting-languages-used-in-nuxeo'}})
*   [Field Binding and Expressions]({{page page='field-binding-and-expressions'}})

{{/panel}}</div></div>
