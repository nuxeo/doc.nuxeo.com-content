---
title: Document types
labels:
    - document-type
    - facelet
    - facet
    - doctype
    - schema
toc: true
confluence:
    ajs-parent-page-id: '17334376'
    ajs-parent-page-title: Repository features
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Document+types
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/Document+types'
    page_id: '17334388'
    shortlink: dIAIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/dIAIAQ'
    source_link: /display/NXDOC58/Document+types
history:
    - 
        author: Solen Guitter
        date: '2016-09-02 08:13'
        message: ''
        version: '36'
    - 
        author: Solen Guitter
        date: '2015-08-28 09:55'
        message: ''
        version: '35'
    - 
        author: Solen Guitter
        date: '2013-09-05 15:34'
        message: ''
        version: '34'
    - 
        author: Solen Guitter
        date: '2013-09-04 15:32'
        message: ''
        version: '33'
    - 
        author: Solen Guitter
        date: '2013-09-04 15:23'
        message: Added link
        version: '32'
    - 
        author: Solen Guitter
        date: '2013-09-04 10:52'
        message: ''
        version: '31'
    - 
        author: Anahide Tchertchian
        date: '2013-05-01 13:14'
        message: >-
            better default sample + add require on pre-existing types
            configuration + remove deprecated layouts configuration + format
        version: '30'
    - 
        author: Solen Guitter
        date: '2013-04-10 10:33'
        message: ''
        version: '29'
    - 
        author: Michael Bell
        date: '2012-06-02 19:04'
        message: Migrated to Confluence 4.0
        version: '28'
    - 
        author: Michael Bell
        date: '2012-06-02 19:04'
        message: minor XML fix
        version: '27'
    - 
        author: Benjamin Jalon
        date: '2012-02-23 10:23'
        message: ''
        version: '26'
    - 
        author: Benjamin Jalon
        date: '2012-02-23 10:21'
        message: ''
        version: '25'
    - 
        author: Benjamin Jalon
        date: '2012-01-17 12:31'
        message: Add the override schema information into the schema section
        version: '24'
    - 
        author: Anahide Tchertchian
        date: '2011-03-03 17:40'
        message: ''
        version: '23'
    - 
        author: Solen Guitter
        date: '2011-03-02 18:15'
        message: ''
        version: '22'
    - 
        author: Florent Guillaume
        date: '2011-01-25 15:43'
        message: ''
        version: '21'
    - 
        author: Solen Guitter
        date: '2011-01-07 17:00'
        message: formatting and typos
        version: '20'
    - 
        author: Solen Guitter
        date: '2011-01-07 16:17'
        message: ''
        version: '19'
    - 
        author: Solen Guitter
        date: '2011-01-07 12:17'
        message: ''
        version: '18'
    - 
        author: Florent Guillaume
        date: '2010-12-29 11:35'
        message: ''
        version: '17'
    - 
        author: Florent Guillaume
        date: '2010-12-28 18:16'
        message: ''
        version: '16'
    - 
        author: Florent Guillaume
        date: '2010-12-28 18:00'
        message: ''
        version: '15'
    - 
        author: Florent Guillaume
        date: '2010-12-15 16:18'
        message: ''
        version: '14'
    - 
        author: Florent Guillaume
        date: '2010-12-15 16:01'
        message: ''
        version: '13'
    - 
        author: Florent Guillaume
        date: '2010-12-15 13:21'
        message: Rewriting in progress
        version: '12'
    - 
        author: whajeri
        date: '2010-10-09 20:21'
        message: ''
        version: '11'
    - 
        author: Anahide Tchertchian
        date: '2010-07-28 17:44'
        message: ''
        version: '10'
    - 
        author: Anahide Tchertchian
        date: '2010-07-28 17:42'
        message: ''
        version: '9'
    - 
        author: Anahide Tchertchian
        date: '2010-07-28 17:41'
        message: ''
        version: '8'
    - 
        author: Anahide Tchertchian
        date: '2010-07-28 17:41'
        message: ''
        version: '7'
    - 
        author: Anahide Tchertchian
        date: '2010-07-28 17:39'
        message: ''
        version: '6'
    - 
        author: Anahide Tchertchian
        date: '2010-07-28 17:37'
        message: ''
        version: '5'
    - 
        author: Anahide Tchertchian
        date: '2010-07-28 17:35'
        message: ''
        version: '4'
    - 
        author: Anahide Tchertchian
        date: '2010-07-28 17:32'
        message: ''
        version: '3'
    - 
        author: Anahide Tchertchian
        date: '2010-07-28 17:18'
        message: ''
        version: '2'
    - 
        author: Admin name placeholder
        date: '2010-03-01 00:49'
        message: ''
        version: '1'

---
&nbsp;

In addition to the structural definition for a document type, there's another registration at the UI level, through a different extension point, to define how a given document type will be rendered (its icon, layouts, default view, etc.).

{{#> callout type='info' }}

The sections below describe how schemas, facets and document types are defined at a low level in Nuxeo EP using XML configuration files. Unless you're an advanced user, it will be much simpler to use [Nuxeo Studio]({{page space='nxdoc' page='how-to-define-a-document-type'}}) to define them.

{{/callout}}

## Schemas

A schema describes the names and types of some fields. The name is a simple string, like "title", and the type describes what kind of information it stores, like a string, an integer or a date.

A schema is defined in a `.xsd` file and obeys the standard [XML Schema](http://www.w3.org/XML/Schema) syntax.

> For example, we can create a schema in the `schemas/sample.xsd` file:
> 
> ```
> <?xml version="1.0"?>
> <xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema"
>     targetNamespace="http://project.nuxeo.org/sample/schemas/sample/">
>   <xs:element name="sample1" type="xs:string"/>
>   <xs:element name="sample2" type="xs:string"/>
> </xs:schema>
> 
> ```
> 
> This schema defines two things:
> 
> *   an XML namespace that will be associated with the schema (but isn't used by Nuxeo EP),
> *   two elements and their type.
> 
> The two elements are sample1 and sample2\. They are both of type "string", which is a standard type defined by the [XML Schema](http://www.w3.org/XML/Schema) specification.

A schema file has to be referenced by Nuxeo configuration to be found and used. The schema must be referenced in the **schema** extension point of the [`org.nuxeo.ecm.core.schema.TypeService`](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-5.8/viewComponent/org.nuxeo.ecm.core.schema.TypeService) component. A reference to a schema defines:

*   the schema name,
*   the schema location (file),
*   an optional (but recommended) schema prefix.

> For example, in the configuration file `OSGI-INF/types-contrib.xml` (the name is just a convention) you can define:
> 
> ```
> <?xml version="1.0"?>
> <component name="org.nuxeo.project.sample.types">
>   <extension target="org.nuxeo.ecm.core.schema.TypeService" point="schema">
>     <schema name="sample" src="schemas/sample.xsd" prefix="smp" />
>   </extension>
> </component>
> 
> ```
> 
> We name our schema "sample", and the `.xsd` file is referenced through its path, `schemas/sample.xsd`. The schema is registered through the **schema** extension point of the Nuxeo component [`org.nuxeo.ecm.core.schema.TypeService`](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-5.8/viewComponent/org.nuxeo.ecm.core.schema.TypeService). Our own extension component is given a name, `org.nuxeo.project.sample.types`, which is not very important as we only contribute to existing extension points and don't define new ones &mdash; but the name must be new and unique.

Finally, like for all components defining configuration, the component has to registered with the system by referencing it from the `META-INF/MANIFEST.MF` file of the bundle.

> In our example, we tell the system that the `OSGI-INF/types-contrib.xml` file has to be read, by mentioning it in the `Nuxeo-Component` part of the `META-INF/MANIFEST.MF`:
> 
> ```
> Manifest-Version: 1.0
> Bundle-SymbolicName: org.nuxeo.project.sample;singleton:=true
> Nuxeo-Component: OSGI-INF/types-contrib.xml
> ...
> 
> ```
> 
> &nbsp;

You may need to override an existing schema defined by Nuxeo. As usual, this possible and you have to contribute a schema descriptor with same name. But you must also add an override parameter with value "true".

> For instance, you can add your own parameters into the user.xsd schema to add the extra information stored into your ldap and fetch them and store them into the principal instance (that represents every user).
> The contribution will be something like:
> 
> ```xml
> <component name="fr.mycompanyname.myproject.schema.contribution">
>   <!-- to be sure to deployed after the Nuxeo default contributions>
>   <require>org.nuxeo.ecm.directory.types</require>
>   <extension target="org.nuxeo.ecm.core.schema.TypeService" point="schema">
>     <schema name="group" src="directoryschema/group.xsd" override="true"/>
>   </extension>
> </component>
> 
> ```
> 
> Focus your attention on the **override="true"**&nbsp;that is often missing
> 
> You will need to improve the UI to also display your extra-informations...

## Facets

A facet describes an aspect of a document that can apply to several document types or document instances. Facets can have zero, one or more schemas associated to them. Configuration is done in the **doctype** extension point of the same [`org.nuxeo.ecm.core.schema.TypeService`](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-5.8/viewComponent/org.nuxeo.ecm.core.schema.TypeService) component as for schemas.

> For example, in the same `OSGI-INF/types-contrib.xml` as above, we add the following:
> 
> ```
> <?xml version="1.0"?>
> <component name="org.nuxeo.project.sample.types">
>   ...
>   <extension target="org.nuxeo.ecm.core.schema.TypeService" point="doctype">
>     <facet name="Rated">
>       <schema name="rating"/>
>     </facet>
>     ...
>   </extension>
> </component>
> 
> ```
> 
> &nbsp;

Facets can be used in two ways:

*   on document types, by adding the facet to the `<doctype>` element described below,
*   on document instances, by application code.

When a document's type or a document's instance has a facet, the document behaves normally with respect to the added schemas. Facets with no schemas are useful to mark certain types or certain document instances specially, for instance to add additional behavior when they are used.

Standard Nuxeo EP facets are:

*   **Folderish**: special facet allowing the creation of children in this document,
*   **Orderable**: special facet allowing the children of a folderish type to be ordered,
*   **Versionable**: special facet marking the document type as versionable,
*   **HiddenInNavigation**: special facet for document types which should not appear in listings.

See the [Available Facets]({{page page='available-facets'}}) page for more details on available facets.

## Structural Document Types

By itself, the schema is not very useful, it must be associated with a document type. This is done in the same **doctype** extension point as above. In this extension point, we define:

*   the document type to create,
*   which standard document type it extends (usually "Document" or "Folder"),
*   what schemas it contains,
*   what facets it has (this implicitly adds all the facet's schemas).

When extending a document type, all its schemas and facets are inherited as well.

> For example, in the same `OSGI-INF/types-contrib.xml` as above, we add the following:
> 
> ```
> <?xml version="1.0"?>
> <component name="org.nuxeo.project.sample.types">
>   ...
>   <extension target="org.nuxeo.ecm.core.schema.TypeService" point="doctype">
>     ...
>     <doctype name="Sample" extends="Document">
>       <schema name="common"/>
>       <schema name="dublincore"/>
>       <schema name="sample"/>
>       <facet name="Rated"/>
>     </doctype>
>   </extension>
> </component>
> 
> ```
> 
> Here we specify that our document type "Sample" will be an extension of the standard system type "Document" and that it will be composed of three schemas, two standard ones and our specific one, and has one facet.

The standard schemas "common" and "dublincore" already contain standard metadata fields, like a title, a description, the modification date, the document contributors, etc. Adding it to a document type ensures that a minimal level of functionality will be present, and is recommended for all types.

## UI Document Types

After the structural document type, a UI registration for our document type must be done for the type to be visible in the Nuxeo DM interface (or in other applications based on Nuxeo EP). This is done through a contribution to the **types** extension point of the [`org.nuxeo.ecm.platform.types.TypeService`](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-5.8/viewComponent/org.nuxeo.ecm.core.schema.TypeService) component (which is a different component than for the structural types, despite also ending in `TypeService`).

> For example, in `OSGI-INF/ui-types-contrib.xml` we will define:
> 
> ```
> <?xml version="1.0"?>
> <component name="org.nuxeo.project.sample.ecm.types">
>   <extension target="org.nuxeo.ecm.platform.types.TypeService" point="types">
>     <type id="Sample">
>       <label>...</label>
>       <icon>...</icon>
>       <bigIcon>...</bigIcon>
>       <description>...</description>
>       <category>...</category>
>       <layouts>...</layouts>
>       ...
>     </type>
>   </extension>
> </component>
> 
> ```
> 
> &nbsp;

The extension must be added to `META-INF/MANIFEST.MF` so that it will be taken into account by the deployment mechanism:

> &nbsp;
> 
> ```
> Nuxeo-Component: OSGI-INF/types-contrib.xml,
>  OSGI-INF/ui-types-contrib.xml
> 
> ```
> 
> &nbsp;

The type element will contain all the information for this type, described below.

### General Information

The **label**, **description**, **icon**, **bigIcon** and **category** are used by the user interface, for instance in the creation page when a list of possible types is displayed.

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

> Example:
> 
> ```
> <type id="Sample">
>   <label>Sample document</label>
>   <description>Sample document to do such and such</description>
>   <icon>/icons/file.gif</icon>
>   <bigIcon>/icons/file_100.png</bigIcon>
>   <category>SimpleDocument</category>
>   ...
> </type>
> 
> ```
> 
> &nbsp;

### Facelet Views

The **default-view** tag specifies the name of the facelet to use to display this document. This corresponds to a file that lives in the webapp, by default `view_documents.xhtml` which is a standard view defined in the base Nuxeo EP bundle. This standard view takes care of displaying available tabs and the document body according to the currently selected type.

{{#> callout type='note' }}

Changing it is not advised unless extremely nonstandard rendering is needed.

{{/callout}}

The **create-view** and **edit-view** tags can point to a specific creation or edit facelets.

Proper defaults are used when these are not specified, so no need to add them to your type.

> Example:
> 
> ```
> <type id="Sample">
>   ...
>   <default-view>view_documents</default-view>
>   <create-view>create_document</default-view>
>   <edit-view>edit_document</default-view>
>   ...
> </type>
> 
> ```
> 
> &nbsp;

### Layout

A layout is a series of widgets, which makes the association between the field of a schema with a JSF component. The layout is used by the standard Nuxeo modification and summary views, to automatically display the document metadata according to the layout rules.

#### Layouts Configuration

The **layouts** section (with a final **s**) defines the layouts for the document type for a given mode.

Defaults mode are:

*   **create** for creation,
*   **edit** for edition,
*   **view** for view,
*   **any** for layouts that will be merged in all the other modes.

The **layout** names refer to layouts defined on another extension point. Please see the [layouts section]({{page page='layouts-and-widgets-forms-listings-grids'}}) for more information.

> Example:
> 
> ```
> <type id="Sample">
>   ...
>   <layouts mode="any">
>     <layout>heading</layout>
>     <layout>note</layout>
>   </layouts>
>   ...
> </type>
> 
> ```
> 
> &nbsp;

### Containment Rules

The **subtypes** section defines a list of **type** elements for the document types that can be created as children objects of other document types. When defining a type, you can specify:

*   what child document types can be create in it,
*   in what parent document types it can be created.

This can also be defined for a pre-existing type, to add new allowed subtypes. Please make sure you require the components defining the pre-existing type to ensure a good merge of contributions.

> For example, we can specify that the Sample type can be created in a Folder and a Workspace. Note that we define two new `<type>` sections here, we don't add this information in the `<type id="Sample">` section.
> 
> ```
> <type id="Folder">
>   <subtypes>
>     <type>Sample</type>
>   </subtypes>
> </type>
> <type id="Workspace">
>   <subtypes>
>     <type>Sample</type>
>   </subtypes>
> </type>
> 
> ```
> 
> &nbsp;

It is also possible to define that some types will not be allowed as children in some cases (creation, copy/paste). To do that, a **hidden** attribute for the **type** element can be used.

The hidden cases are stored in a list, so if a check is needed for a hidden case, then the hidden cases list ought to be verified to check it contains that particular case.

> Example:
> 
> ```
> <type id="Workspace">
>   <subtypes>
>     <type>Workspace</type>
>     <type hidden="create, paste">Folder</type>
>     <type>File</type>
>     <type>Note</type>
>   </subtypes>
> </type>
> 
> ```
> 
> &nbsp;

### Summary

The final `OSGI-INF/ui-types-contrib.xml` looks like:

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