---
title: NXPointDoc Documentation tool
review:
    comment: ''
    date: ''
    status: ok
confluence:
    ajs-parent-page-id: '3868947'
    ajs-parent-page-title: Development Tools and Process
    ajs-space-key: CORG
    ajs-space-name: Core Developer Guide
    canonical: NXPointDoc+Documentation+tool
    canonical_source: 'https://doc.nuxeo.com/display/CORG/NXPointDoc+Documentation+tool'
    page_id: '3868991'
    shortlink: Pwk7
    shortlink_source: 'https://doc.nuxeo.com/x/Pwk7'
    source_link: /display/CORG/NXPointDoc+Documentation+tool
history:
    - 
        author: Florent Guillaume
        date: '2012-04-27 14:01'
        message: igrated to Confluence 4.
        version: '7'
    - 
        author: Florent Guillaume
        date: '2012-04-27 14:01'
        message: ''
        version: '6'
    - 
        author: Mathieu Guillaume
        date: '2012-02-09 13:27'
        message: svn -> hg
        version: '5'
    - 
        author: Stéfane Fermigier
        date: '2010-11-08 19:14'
        message: ''
        version: '4'
    - 
        author: Julien Carsique
        date: '2010-10-25 16:51'
        message: ''
        version: '3'
    - 
        author: Julien Carsique
        date: '2010-10-25 16:49'
        message: ''
        version: '2'
    - 
        author: Julien Carsique
        date: '2010-10-25 16:34'
        message: ''
        version: '1'

---
{{#> callout type='warning' }}

The nxPointDoc tool is obsolete, the extension point documentation is now generated at the [http://explorer.nuxeo.org/](http://explorer.nuxeo.org/) website.

{{/callout}}

Nuxeo heavily uses extension points. In order to manage them nxPointDoc tool has been created. Its purpose is to explore all XML files and build the documentation of each explored components. Cross links and indexes are also built to ease the navigation.

The NxPointDoc pages are available at [https://hg.nuxeo.org/tools/nxpointdoc](https://hg.nuxeo.org/tools/nxpointdoc)

The tool is written in Python and the following libraries are needed:

*   Genshi for templating
*   ElementTree for XML processing
*   Pygments for code highlighting

## Documenting a component

A component XML file is structured as follow:

```
<component ...>
  <!-- ############## Component configuration ############ -->
  <!-- implementation class (optional) -->
  <implementation>...</implementation>

  <!-- component properties (optional) -->
  <property name="..." value="..."/>
  ...
  <property name="..." value="..."/>

  <!-- ############### Extension points ################ -->
  <!-- extension points are optional -->
  <extension-point ...>
  ...
  </extension-point>
  ...

  <!-- ############### Contributions ################ -->
  <!-- contributions are optional -->
  <extension ...>
  ...
  </extension>
  ...
</component>
```

We can see that the only required element is the component element (although it is useless to have an empty component). So there are 3 main sections (any of these sections are optional).

*   Component configuration: This section defines the component implementation class and some properties to initialize the component (This section content may be modified in future especially when aligning nuxeo components with OSGi services).
*   Extension points: This sections contains all the extension point declared by the component.
*   Contributions (extension tag): This section contains all the contributions made by this component to other components.
    To add documentation to these elements a <documentation> tag will be used. An element may have different content depending on what it is documenting. While some information is already available in other XML elements in the file, there is no need to duplicate these information inside the documentation provided though the element. For example the name of the component can be retrieved from the name attribute of the component element, the implementation class name from the implementation element etc.

To format the description text, we can use XHTML tags and javadoc-like markers such as @property, @schema etc. Javadoc-like links are also supported: @see points on the javadoc, @component points on another component documentation. For example,

{@see org.nuxeo.ecm.core.schema.types.Type}
will point on the [http://maven.nuxeo.org/apidocs](http://maven.nuxeo.org/apidocs) corresponding page while

{@component org.nuxeo.ecm.webapp.directory.DirectoryTreeService}
will explicitly insert a link to the related NxPointDoc page. Code colorization is also supported through the <code language='xml'> ... </code> tags. If no language is given, xml is taken by default. Java (language='java') and many other languages are supported (see Pygments pages).

Regarding <component> documentation, the following elements are available:

*   @author: may be duplicated for multiple authoring
*   @version
*   @property
*   @see: points to Javadoc
*   @component: points to nxpointdoc
*   @deprecated
*   component@name attribute: the component name
*   component/implementation tag: the implementation class
*   component/require tag: required elements
*   component/documentation tag: the description
    For <extension-point> the following elements have to be used:
*   @author: may be duplicated for multiple authoring
*   @schema
*   @deprecated
*   @see
*   @component
*   component/extension-point@name attribute: the name
*   component/extension-point/documentation tag - the description
*   If the extension point is using object sub-elements, the DTD should be extracted from the XMap annotated class, otherwise the user may specify the DTD using the @schema marker inside the documentation element
    For <extension>, describing contributions to an extension-point, we have
*   @author: may be duplicated for multiple authoring
*   @see
*   @component
*   @deprecated
*   component/extension@target attribute - rendered as a link to the component documentation
*   component/extension@point - rendered as a link to the extension point documentation
*   component/extension-point/documentation description
    Here is a short example of what a component xml file may look like.

```

<?xml version="1.0"?>
<component name="org.nuxeo.ecm.MyService">
<documentation>
My demo service
<p/>
This service does nothing
@property home home directory to be used to create temp files
@property timeout the time interval in seconds
@version 1.0
@author Bogdan
</documentation>
<require>org.nuxeo.ecm.Service1</require>
<require>org.nuxeo.ecm.Service2</require>
<implementation class="org.nuxeo.ecm.core.demo.Service2"/>
<property name="home" value="/home/bstefanescu"/>
<property name="interval" value="20" type="Integer"/>

<extension target="org.nuxeo.ecm.SchemaService" point="schema">
<documentation>Common and Dublin Core schemas</documentation>
<schema name="dublincore" src="schema/dublincore.xsd" />
<schema name="common" src="schema/common.xsd" />
</extension>

<extension-point name="repository">
<documentation>Register new repositories</documentation>
<object/>
</extension-point>

</component>

```

Feel free to browse the NxPointDoc site and the corresponding xml file to go deeper. The systematic link to the source code svn repository may help you.

## Creating the NxPointDoc site

nxpointdoc is a command line program that creates the whole site from a source repository SOURCE_DIR to a target publication directory TARGET_DIR. Each component is analyzed and all related pages created. Index pages are then created.

```

$ ./nxpointdoc.py -h
usage: nxpointdoc.py [options]

options:
--version                         show program's version number and exit
-h, --help                        show this help message and exit
--source=SOURCE_DIR               Source root directory containing xml component files
--target=TARGET_DIR               Target directory for the generated documentation
--template=TEMPLATE               Genshi template for component html file
--template-index=TEMPLATE_INDEX   Genshi template for index html file
--allow-xhtml-comment=ALLOW_XHTML_COMMENT 'no' to not interpret xhtml tags in comment
--color=COLOR_CODE                'no' to not color <code>  contentsValid SOURCE_DIR and TARGET_DIR are mandatory. Template files  have to exist. The one delivered have the .template extension and can be  used as is.

```

## Browsing NxPointDoc

NxPointDoc generates 3 indexes that are the entry points; The documentation is accessible at [http://svn.nuxeo.org/nxpointdoc/](http://svn.nuxeo.org/nxpointdoc/) with 3 indexes related to components, extension points and contributions. Each one is an entry point for the documentation. The Indexes give the name and the first line of the documentation. An hyperlink allows to see the detail of the examinated item.

The statistic gives some rough indicators on the documentation coverage, globally or for each component file. The G.D.C stands for Global Documentation Coverage while the I.D.C stands for Individual Documentation Coverage. They show the ratio between all the information/documentation that is written over all the entries that are considered as mandatory (like author, documentation, etc.). The higher these indicators are, the better it is.