---
title: Documents Display Configuration
review:
    comment: ''
    date: ''
    status: ok
labels:
    - lts2015-ok
    - web-ui-component
    - content-view
    - layout
toc: true
confluence:
    ajs-parent-page-id: '28475788'
    ajs-parent-page-title: Web UI Framework
    ajs-space-key: NXDOC710
    ajs-space-name: Nuxeo Platform Developer Documentation — LTS 2015
    canonical: Documents+Display+Configuration
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC710/Documents+Display+Configuration'
    page_id: '28475840'
    shortlink: wIGyAQ
    shortlink_source: 'https://doc.nuxeo.com/x/wIGyAQ'
    source_link: /display/NXDOC710/Documents+Display+Configuration
tree_item_index: 500
history:
    -
        author: Anonymous
        date: '2015-10-12 13:40'
        message: dd page TO
        version: '11'
    -
        author: Alain Escaffre
        date: '2014-09-19 12:12'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2014-01-17 17:08'
        message: ''
        version: '9'
    -
        author: Anahide Tchertchian
        date: '2013-12-12 18:14'
        message: even better title
        version: '8'
    -
        author: Anahide Tchertchian
        date: '2013-12-12 17:46'
        message: better title
        version: '7'
    -
        author: Solen Guitter
        date: '2013-09-05 15:41'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2013-09-04 16:38'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2011-03-04 09:47'
        message: Migrated to Confluence 4.0
        version: '4'
    -
        author: Solen Guitter
        date: '2011-03-04 09:47'
        message: ''
        version: '3'
    -
        author: Solen Guitter
        date: '2011-03-04 09:17'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2011-03-04 08:56'
        message: ''
        version: '1'

---
{{! excerpt}}

The views on documents, the forms to create or edit them, how lists of documents are presented, all that can be changed in a Nuxeo application, to make sure the information displayed are meaningful. To enable the customization of how documents, forms and listings are presented, Nuxeo Platform-based application use layouts and content views.

{{! /excerpt}}

&nbsp;

## UI Document Types

After the structural document type, a UI registration for our document type must be done for the type to be visible in the Nuxeo DM interface (or in other applications based on Nuxeo Platform). This is done through a contribution to the&nbsp;**types**&nbsp;extension point of the&nbsp;[`org.nuxeo.ecm.platform.types.TypeService`](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-7.10/viewComponent/org.nuxeo.ecm.core.schema.TypeService)&nbsp;component (which is a different component than for the structural types, despite also ending in&nbsp;`TypeService`).

For example, in&nbsp;`OSGI-INF/ui-types-contrib.xml`&nbsp;we will define:

```
<?xml version="1.0"?>
<component name="org.nuxeo.project.sample.ecm.types">
  <extension target="org.nuxeo.ecm.platform.types.TypeService" point="types">
    <type id="Sample">
      <label>...</label>
      <icon>...</icon>
      <bigIcon>...</bigIcon>
      <description>...</description>
      <category>...</category>
      <layouts>...</layouts>
      ...
    </type>
  </extension>
</component>

```

The extension must be added to&nbsp;`META-INF/MANIFEST.MF`&nbsp;so that it will be taken into account by the deployment mechanism:

```
Nuxeo-Component: OSGI-INF/types-contrib.xml,
 OSGI-INF/ui-types-contrib.xml

```

The type element will contain all the information for this type, described below.

### General Information

The&nbsp;**label**,&nbsp;**description**,&nbsp;**icon**,&nbsp;**bigIcon**&nbsp;and&nbsp;**category**&nbsp;are used by the user interface, for instance in the creation page when a list of possible types is displayed.

*   **label**: a short name for the type.
*   **description**: a longer description of the type.
*   **icon**: a 16x16 icon path for the type, used in listings for instance. The path points to a resource defined in the Nuxeo WAR.
*   **bigIcon**: a 100x100 icon path for the type, used in the creation screen for instance.
*   **category**: a category for the type, used to separate types in different sections in the creation screen for instance.

Standard categories used in the Nuxeo DM interface are:

*   SimpleDocument: a simple document
*   Collaborative: a document or folder-like objects used for collaboration
*   SuperDocument: a structural document usually created by the system

Other categories can freely be defined.

Example:

```
<type id="Sample">
  <label>Sample document</label>
  <description>Sample document to do such and such</description>
  <icon>/icons/file.gif</icon>
  <bigIcon>/icons/file_100.png</bigIcon>
  <category>SimpleDocument</category>
  ...
</type>

```

### Facelet Views

The&nbsp;**default-view**&nbsp;tag specifies the name of the facelet to use to display this document. This corresponds to a file that lives in the webapp, by default&nbsp;`view_documents.xhtml`&nbsp;which is a standard view defined in the base Nuxeo Platform bundle. This standard view takes care of displaying available tabs and the document body according to the currently selected type.

{{#> callout type='note' }}

Changing it is not advised unless extremely nonstandard rendering is needed.

{{/callout}}

The&nbsp;**create-view**&nbsp;and&nbsp;**edit-view**&nbsp;tags can point to a specific creation or edit facelets.

Proper defaults are used when these are not specified, so no need to add them to your type.

Example:

```
<type id="Sample">
  ...
  <default-view>view_documents</default-view>
  <create-view>create_document</default-view>
  <edit-view>edit_document</default-view>
  ...
</type>

```

### Layout

A layout is a series of widgets, which makes the association between the field of a schema with a JSF component. The layout is used by the standard Nuxeo modification and summary views, to automatically display the document metadata according to the layout rules.

#### Layouts Configuration

The&nbsp;**layouts**&nbsp;section (with a final&nbsp;**s**) defines the layouts for the document type for a given mode.

Defaults mode are:

*   **create**&nbsp;for creation,
*   **edit**&nbsp;for edition,
*   **view**&nbsp;for view,
*   **any**&nbsp;for layouts that will be merged in all the other modes.

The&nbsp;**layout**&nbsp;names refer to layouts defined on another extension point. Please see the&nbsp;[layouts section]({{page page='layouts-and-widgets-forms-listings-grids'}})&nbsp;for more information.

Example:

```
<type id="Sample">
  ...
  <layouts mode="any">
    <layout>heading</layout>
    <layout>note</layout>
  </layouts>
  ...
</type>

```

### Containment Rules

The&nbsp;**subtypes**&nbsp;section defines a list of&nbsp;**type**&nbsp;elements for the document types that can be created as children objects of other document types. When defining a type, you can specify:

*   what child document types can be create in it,
*   in what parent document types it can be created.

This can also be defined for a pre-existing type, to add new allowed subtypes. Please make sure you require the components defining the pre-existing type to ensure a good merge of contributions.

For example, we can specify that the Sample type can be created in a Folder and a Workspace. Note that we define two new&nbsp;`<type>`&nbsp;sections here, we don't add this information in the&nbsp;`<type id="Sample">`&nbsp;section.

```
<type id="Folder">
  <subtypes>
    <type>Sample</type>
  </subtypes>
</type>
<type id="Workspace">
  <subtypes>
    <type>Sample</type>
  </subtypes>
</type>

```

It is also possible to define that some types will not be allowed as children in some cases (creation, copy/paste). To do that, a&nbsp;**hidden**&nbsp;attribute for the&nbsp;**type**&nbsp;element can be used.

The hidden cases are stored in a list, so if a check is needed for a hidden case, then the hidden cases list ought to be verified to check it contains that particular case.

Example:

```
<type id="Workspace">
  <subtypes>
    <type>Workspace</type>
    <type hidden="create, paste">Folder</type>
    <type>File</type>
    <type>Note</type>
  </subtypes>
</type>

```

### Summary

The final&nbsp;`OSGI-INF/ui-types-contrib.xml`&nbsp;looks like:

```
<?xml version="1.0"?>
<component name="org.nuxeo.project.sample.ecm.types">

 <!-- Add require to component declaring Workspace and Folder types -->
 <require>org.nuxeo.ecm.platform.types</require>

  <extension target="org.nuxeo.ecm.platform.types.TypeService" point="types">

    <type id="Sample">
      <label>Sample document</label>
      <description>Sample document to do such and such</description>
      <icon>/icons/file.gif</icon>
      <bigIcon>/icons/file_100.png</bigIcon>
      <category>SimpleDocument</category>
      <default-view>view_documents</default-view>
      <layouts mode="any">
        <layout>heading</layout>
        <layout>note</layout>
      </layouts>
    </type>

 <!-- containment rules -->
  <type id="Folder">
      <subtypes>
        <type>Sample</type>
      </subtypes>
    </type>
    <type id="Workspace">
      <subtypes>
        <type>Sample</type>
      </subtypes>
    </type>

 </extension>
</component>

```
