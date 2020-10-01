---
title: Document Views
review:
    comment: ''
    date: '2020-09-30'
    status: ok
labels:
    - lts2016-ok
    - view_action_list
    - document-tab
    - web-ui-component
    - atchertchian
    - excerpt
    - content-review-lts2017
confluence:
    ajs-parent-page-id: '6029663'
    ajs-parent-page-title: Documents Display Configuration
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Document+Views
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Document+Views'
    page_id: '950321'
    shortlink: MYAO
    shortlink_source: 'https://doc.nuxeo.com/x/MYAO'
    source_link: /display/NXDOC/Document+Views
tree_item_index: 100
history:
    -
        author: Andre Justo
        date: '2015-10-13 13:43'
        message: ''
        version: '11'
    -
        author: Solen Guitter
        date: '2014-01-13 17:28'
        message: Added link
        version: '10'
    -
        author: Anahide Tchertchian
        date: '2013-12-12 18:41'
        message: better excerpt
        version: '9'
    -
        author: Anahide Tchertchian
        date: '2013-12-03 16:23'
        message: better title
        version: '8'
    -
        author: Solen Guitter
        date: '2013-09-04 16:35'
        message: ''
        version: '7'
    -
        author: Anahide Tchertchian
        date: '2011-04-01 12:36'
        message: Migrated to Confluence 4.0
        version: '6'
    -
        author: Anahide Tchertchian
        date: '2011-04-01 12:36'
        message: removin coretype from ui type definition
        version: '5'
    -
        author: Solen Guitter
        date: '2011-02-24 17:37'
        message: ''
        version: '4'
    -
        author: Anahide Tchertchian
        date: '2010-07-28 17:54'
        message: ''
        version: '3'
    -
        author: Anahide Tchertchian
        date: '2010-07-28 17:53'
        message: ''
        version: '2'
    -
        author: Admin name placeholder
        date: '2010-03-01 00:54'
        message: ''
        version: '1'

---
{{! excerpt}}

Pages visible for a given document can be configured depending on the document type.

{{! /excerpt}}

First of all, we have to make the difference between a view in a standard JSF way (navigation case view id, navigation case output) and views in the Nuxeo Platform (document type view, creation view).

## Standard JSF Navigation Concepts

A standard JSF navigation rule can be defined in the `OSGI-INF/deployment-fragment.xml` files, inside the `faces-config#NAVIGATION` directive.

Example of a navigation rule case definition:

```xml
<extension target="faces-config#NAVIGATION">

    <navigation-case>
      <from-outcome>create_document</from-outcome>
      <to-view-id>/create_document.xhtml</to-view-id>
      <redirect />
    </navigation-case>

    <navigation-case>
      <from-outcome>view_documents</from-outcome>
      <to-view-id>/view_documents.xhtml</to-view-id>
      <redirect />
    </navigation-case>

</extension>

```

## Nuxeo Platform Views

A certain Nuxeo document type can have defined a default view (used to view/edit the document) and a create view (used to create the document). These views are specified in the `OSGI-INF/ecm-types-contrib.xml` file, as in the following example.

```xml
<extension target="org.nuxeo.ecm.platform.types.TypeService" point="types">
    <type id="Workspace">
      <label>Workspace</label>
      <icon>/icons/workspace.gif</icon>
      <icon-expanded>/icons/workspace_open.gif</icon-expanded>
      <default-view>view_documents</default-view>
      <create-view>create_workspace</create-view>
    </type>
</extension>

```

The default view of a document is rendered as a list of tabs. The document tabs are defined as actions in the `OSGI-INF/actions-contrib.xml` file, having as [category]({{page page='actions-display'}}) `VIEW_ACTION_LIST`. A tab can be added to a document default view as shown in the following example.

```xml
<extension target="org.nuxeo.ecm.platform.actions.ActionService" point="actions">
    <action id="TAB_EDIT" link="/incl/tabs/document_edit.xhtml" enabled="true"
      order="20" label="action.view.edit" icon="/icons/file.gif">
      <category>VIEW_ACTION_LIST</category>
      <filter-id>edit</filter-id>
      <filter-id>mutable_document</filter-id>
    </action>
</extension>

```
