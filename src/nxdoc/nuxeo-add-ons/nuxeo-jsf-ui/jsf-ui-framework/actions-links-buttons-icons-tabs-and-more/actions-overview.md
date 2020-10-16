---
title: Actions Overview
review:
    comment: ''
    date: '2020-09-30'
    status: ok
labels:
    - content-review-lts2016
    - action
    - atchertchian
    - actions-filters-component
    - excerpt
    - content-review-lts2017
toc: true
confluence:
    ajs-parent-page-id: '950289'
    ajs-parent-page-title: 'Actions (Links, Buttons, Icons, Tabs and More)'
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Actions+Overview
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Actions+Overview'
    page_id: '17794909'
    shortlink: XYcPAQ
    shortlink_source: 'https://doc.nuxeo.com/x/XYcPAQ'
    source_link: /display/NXDOC/Actions+Overview
tree_item_index: 100
history:
    -
        author: Solen Guitter
        date: '2015-10-15 13:41'
        message: ''
        version: '17'
    -
        author: Anahide Tchertchian
        date: '2015-10-13 13:46'
        message: ''
        version: '16'
    -
        author: Anahide Tchertchian
        date: '2015-10-13 13:45'
        message: ''
        version: '15'
    -
        author: Solen Guitter
        date: '2014-12-02 11:20'
        message: ''
        version: '14'
    -
        author: Anahide Tchertchian
        date: '2014-12-02 11:16'
        message: 'NXDOC-222: mention require element or action override'
        version: '13'
    -
        author: Solen Guitter
        date: '2014-03-10 18:31'
        message: ''
        version: '12'
    -
        author: Anahide Tchertchian
        date: '2014-02-04 18:21'
        message: fix label example
        version: '11'
    -
        author: Solen Guitter
        date: '2014-01-20 15:12'
        message: ''
        version: '10'
    -
        author: Anahide Tchertchian
        date: '2013-12-20 19:32'
        message: mention fallback on link when missing type
        version: '9'
    -
        author: Anahide Tchertchian
        date: '2013-12-20 18:09'
        message: add info that properties can contain EL expressions
        version: '8'
    -
        author: Anahide Tchertchian
        date: '2013-12-20 18:01'
        message: wording
        version: '7'
    -
        author: Anahide Tchertchian
        date: '2013-12-20 18:01'
        message: wording
        version: '6'
    -
        author: Anahide Tchertchian
        date: '2013-12-20 18:00'
        message: add more action samples
        version: '5'
    -
        author: Anahide Tchertchian
        date: '2013-12-20 17:38'
        message: cleanup forgotten tes content
        version: '4'
    -
        author: Anahide Tchertchian
        date: '2013-12-20 17:37'
        message: give better examples
        version: '3'
    -
        author: Anahide Tchertchian
        date: '2013-12-17 18:09'
        message: adding content from parent page (action registration)
        version: '2'
    -
        author: Anahide Tchertchian
        date: '2013-12-16 14:44'
        message: ''
        version: '1'

---
{{! excerpt}}

In this chapter, an action will stand for any kind of command that can be triggered via user interface interaction. In other words, it will describe a link and other information that may be used to manage its display (the link label, an icon, security information for instance).

{{! /excerpt}}

&nbsp;

## Registering a New Action

Custom actions can be contributed to the actions service, using its extension point. Their description is then available through this service to control where and how they will be displayed.

An action can be registered using the following example extension:

```html/xml
<extension target="org.nuxeo.ecm.platform.actions.ActionService" point="actions">

  <action id="newWorkspace" label="command.create.workspace"
	link="#{documentActions.createDocument('Workspace')}"
    type="link" icon="/icons/action_add.gif">
    <category>SUBVIEW_UPPER_LIST</category>
    <filter id="newWorkspace">
      <rule grant="true">
        <permission>AddChildren</permission>
        <type>WorkspaceRoot</type>
      </rule>
    </filter>
  </action>

</extension>

```

The above action will be used to display the creation page for a Workspace document type. Here are its properties:

*   `id`: the string identifying the action. In the example, the action id is&nbsp;`newWorkspace`. The same identifier can be reused to override (or merge) the original action configuration.
*   `label`: the action name that will be used when displaying the link. In the example, the label is `command.create.workspace`. This label is a message that will always be translated at display (there is no boolean property stating if the action label should be translated like on widget definitions).
*   `link`: the string representing the command the action will trigger. This string may have a different form and syntax depending on the action type. In the example, a JSF command link will be used, so it represents an action method expression. The Seam component called&nbsp; [`documentActions`](http://explorer.nuxeo.org/nuxeo/site/distribution/latest/viewSeamComponent/seam:documentActions) holds a method named `createDocument` that will perform the navigation to the creation page.
*   `category`: a string useful to group actions that will be rendered in the same area of a page. An action can define several categories. Here, the only category defined is&nbsp;`SUBVIEW_UPPER_LIST`. It is designed to group all the actions that will be displayed on the right top corner of any page of the site. Some default categories are available at [Actions Display]({{page page='actions-display'}}).
*   `type`: an optional typing of the action, so that actions needing different kinds of rendering can be mixed up in the same category (see chapter [Adapt templates to display an action]({{page page='actions-display'}})). When the type is not defined, a default type can be deduced from the action category (for compatibility), or else the type "link" is used.

Other elements can be used to define an action. They are listed here but you can have a look at the main actions contribution files for more examples, like [`nuxeo-platform-webapp-core/src/main/resources/OSGI-INF/actions-contrib.xml`](https://github.com/nuxeo/nuxeo-dm/blob/master/nuxeo-platform-webapp-core/src/main/resources/OSGI-INF/actions-contrib.xml) or [`nuxeo-platform-webapp-base/src/main/resources/OSGI-INF/actions-contrib.xml`](https://github.com/nuxeo/nuxeo-jsf/blob/master/nuxeo-platform-webapp-base/src/main/resources/OSGI-INF/actions-contrib.xml) .

*   `filter-ids`: the id of a filter that will be used to control the action visibility. An action can have several filters: it is visible if all of its filters grant the access (see chapter about [Filters and Access Controls]({{page page='filters-and-access-controls'}})).
*   `filter`: a filter definition can be done directly within the action definition. It is a filter like others and can be referred by other actions. This way of defining filters is here for compatibility, defining filters on the filters extension points is recommended.
*   `icon`: the optional icon path for this action.
*   `confirm`: an optional JavaScript confirmation string that can be triggered when executing the command.
*   `order`: an optional integer used to sort actions within the same category.
*   `enabled`: a boolean indicating whether the action is currently active. This can be used to disable/hide existing actions when customizing the application.
*   `immediate`: an optional boolean to execute action immediately, without validating the form.
*   `accessKey`: an optional key that can be used for keyboard navigation.
*   `properties`: a tag that allows to attach any kind of named string, list or map-like property to the action. Most of the above elements are also looked up in properties (label, icon, link, immediate, accessKey). Depending on the type of the action, some custom properties may be available. Properties usually accept EL expressions for dynamic resolution of values. Please refer to the documentation at [http://showcase.nuxeo.com/nuxeo/layoutDemo/linkAction](http://showcase.nuxeo.com/nuxeo/layoutDemo/linkAction) for instance.

## Redefining an Action

The [`actions` extension point](http://explorer.nuxeo.com/nuxeo/site/distribution/10.10/viewExtensionPoint/org.nuxeo.ecm.platform.actions.ActionService--actions) provides merging features: you can change an existing action definition in your custom extension point provided you use the same identifier. Properties holding single values (label, link for instance) will be replaced using the new value. Properties holding multiple values (categories, filters) will be merged with existing values. Properties will be merged if they hold the attribute `append="true"`.

Do not forget to add the original component name requirement to ensure proper override.

Here are some actions override examples:

```xml
<require>org.nuxeo.ecm.platform.actions</require>

<extension target="org.nuxeo.ecm.platform.actions.ActionService" point="actions">

  <action id="newWorkspace" enabled="false" />

  <action id="newWorkspace" icon="/icons/my_icon.png" />

</extension>
```

## Examples

Here are more examples showing how to use actions in the default application.

### Adding a Custom Confirmation Message on an Action

Here is a small sample to add a custom confirmation message on an action:

```xml
<extension point="actions" target="org.nuxeo.ecm.platform.actions.ActionService">

  <action id="JenkinsReportSendMail" label="Send Mail" order="0" type="link"
    icon="/img/jenkins_send_email.png"
    link="#{operationActionBean.doOperation('JenkinsReportSendMail')}">
    <category>DOCUMENT_UPPER_ACTION</category>
    <properties>
      <property name="confirmMessage">label.jenkins.sendMail.confirm</property>
      <propertyList name="confirmMessageArgs">
        <value>#{docSuggestionActions.getDocumentWithId(currentSuperSpace.id).getPropertyValue('jenkinsreports:report_email')}</value>
      </propertyList>
    </properties>
  </action>

</extension>
```

The confirmation label&nbsp;`label.jenkins.sendMail.confirm` is holding a variable parameter:

```
label.jenkins.sendMail.confirm=This will send an email to {0}, are you sure that you would like to continue?
```

This definition makes it possible to show the following confirmation message at runtime: "This will send an email to [myemail@example.com](mailto:myemail@example.com), are you sure that you would like to continue?".

Of course the confirmation message can be simple and not hold any arguments.

### Adding a Tab Supporting Key Access and Ajax

Tab items on document views, for instance, are using actions to benefit from sorting and filtering features. The tab link is a RESTful link to the current document, with additional request parameters to show this tab as selected.

So tab actions are using the type "[Rest document link](http://showcase.nuxeo.com/nuxeo/layoutDemo/rest_document_linkAction)" and state in the "link" property the template to include for the tab content:

```xml
<extension target="org.nuxeo.ecm.platform.actions.ActionService" point="actions">

  <action id="TAB_EDIT" link="/incl/tabs/document_edit.xhtml" order="20"
    label="action.view.modification" icon="/icons/file.gif" accessKey="e"
    type="rest_document_link">
    <category>VIEW_ACTION_LIST</category>
    <filter-id>edit</filter-id>
    <filter-id>mutable_document</filter-id>
    <properties>
      <property name="ajaxSupport">true</property>
    </properties>
  </action>

</extension>
```

This action is showing the "Edit" tab on documents. It displays the content of the "/incl/tabs/document_edit.xhtml" template, defines an access key, and specifies that it supports Ajax (in case action is displayed in an ajaxified context).

### Displaying a Permalink inside a Fancybox

Here is another sample that displays the document permanent link inside a FancyBox:

```xml
<extension target="org.nuxeo.ecm.platform.actions.ActionService" point="actions">

  <action id="permalinkAction" order="20" label="label.permalink" type="fancybox"
    icon="/icons/contextual_menu/share.png" accessKey="k">
    <category>DOCUMENT_UPPER_ACTION</category>
    <properties>
      <property name="include">/incl/permalink_box.xhtml</property>
      <property name="ajaxSupport">true</property>
    </properties>
  </action>  

</extension>
```

The FancyBox content is defined by "/incl/permalink_box.xhtml". Note that if the fancybox content holds a form, you must make sure that the action is not itself already placed within a bigger form (as nested forms are not supported).

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related How-Tos'}}

*   [HOWTO: Add a Button in the JSF UI]({{page page='how-to-add-a-button-in-the-jsf-ui'}})
*   [HOWTO: Add a New Action Category on a Document Tab]({{page page='how-to-add-a-new-action-category-on-a-document-tab'}})
*   [HOWTO: Make the New Button Appear on a Custom Folderish Document]({{page page='how-to-make-the-new-button-appear-on-a-custom-folderish-document'}})
*   [How-To Index]({{page page='how-to-index'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Other Related Documentation'}}

*   [Actions Display]({{page page='actions-display'}})
*   [Actions (Links, Buttons, Icons, Tabs and More)]({{page page='actions-links-buttons-icons-tabs-and-more'}})

{{/panel}}</div></div>
