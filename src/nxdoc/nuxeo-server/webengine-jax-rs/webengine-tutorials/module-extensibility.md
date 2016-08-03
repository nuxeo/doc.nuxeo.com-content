---
title: Module Extensibility
labels:
    - howto
    - webengine
    - webengine-component
    - lts2015-ok
confluence:
    ajs-parent-page-id: '3343141'
    ajs-parent-page-title: WebEngine Tutorials
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Module+Extensibility
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Module+Extensibility'
    page_id: '3343208'
    shortlink: aAMz
    shortlink_source: 'https://doc.nuxeo.com/x/aAMz'
    source_link: /display/NXDOC/Module+Extensibility
history:
    - 
        author: Damien Metzler
        date: '2015-10-20 14:11'
        message: ''
        version: '6'
    - 
        author: Solen Guitter
        date: '2011-11-07 17:09'
        message: Migrated to Confluence 4.0
        version: '5'
    - 
        author: Solen Guitter
        date: '2011-11-07 17:09'
        message: ''
        version: '4'
    - 
        author: Bogdan Stefanescu
        date: '2010-07-21 11:59'
        message: ''
        version: '3'
    - 
        author: Bogdan Stefanescu
        date: '2010-07-21 11:58'
        message: ''
        version: '2'
    - 
        author: Bogdan Stefanescu
        date: '2010-07-20 16:34'
        message: ''
        version: '1'

---
The module defined here extends the module defined in [Tutorial 4]({{page page='working-with-documents'}}).

## Module definition

##### MANIFEST.MF

```
...
Nuxeo-WebModule: org.nuxeo.ecm.webengine.app.WebEngineModule;name=sample5;extends=sample4

```

## JAX-RS resources

##### Samples5.java

```
import javax.ws.rs.*;
import javax.ws.rs.core.*;
import org.nuxeo.ecm.core.rest.*;
import org.nuxeo.ecm.webengine.model.impl.*;
import org.nuxeo.ecm.webengine.model.*;
import org.nuxeo.ecm.webengine.model.exceptions.*;

/**
 * Web Module Extensibility.
 *
 * This sample is demonstrating how existing web modules can be extended.
 * To extend another module you should use the base="BaseModule" in the @WebModule
 * annotation. This way the new module will inherit all templates and resources defined in the base module.
 * You can thus create a chain of inherited web modules.
 * 

 * Here is how template resolval will be impacted by the module inheritance:
 * 
 * If a template T is not found in skin directory of derived module then search the template inside the base module and so on
 * until a template is found or no more base module exists.
 * The view resolval is similar to the template one but it will use the WebObject inheritance too:
 * 
 * 
 * 
 * Note that only the skin directory is stacked over the one in the base module.
 * The other directories in the module are not inheritable.
 * 

 * Also, resource types defined by the base module will become visible in the derived one.
 * 

 * In this example you will also find a very useful feature of WebEngine: the builtin view service adapter.
 * This adapter can be used on any web object to locate any view declared on that object.
 * Let's say we define a view named info for the Document WebObject type.
 * And the following request path will point to a Document WebObject: /my/doc.
 * Then to display the info view we can use the builtin views adapter this way:
 * /my/doc/@views/info.
 * 

 * Obviously, you can redefine the WebObject corresponding to your document type and add a new method that will dispatch
 * the view info using a pretty path like /my/doc/info. But this involves changing code.
 * If you don't want this then the views adapter will be your friend.
 *
 * 

 * 

 * This example will extend the module defined in sample5 and will reuse and add more templates.
 * Look into template files to see how base module templates are reused.
 *
 * @author Bogdan Stefanescu
 */
@WebObject(type="sample5")
@Produces("text/html")
public class Sample5 extends Sample4 {

  /**
   * We are reusing bindings declared in the main class from sample5 and only a new one.
   */
  @Path("info")
  @GET
  public Object getInfo() {
    return "This is the 'info' segment added by the derived module";
  }

}

```

_

## Object views

h5 skin/views/sample5/index.ftl

```
<#-- we="" are="" reusing="" the="" base="" template="" from="" module="" --="">
<@extends src="base.ftl">

<#-- we="" are="" redefining="" only="" the="" title="" block="" --="">
<@block name="title">Sample 5: Web Module Extensibility

<@block name="content">
Browse repository

```

##### skin/views/Document/index.ftl

```
<#-- we="" reuse="" base.ftl="" from="" base="" module="" --="">
<@extends src="base.ftl">

<@block name="content">

${Document.title}

Document ID: ${Document.id}

Document path: ${Document.path}

Document name: ${Document.name}

Document type: ${Document.type}

    <#-- we="" redefine="" the="" nested="" block="" info="" by="" adding="" a="" link="" to="" another="" view="" named="" 'info'="" on="" document="" --="">
    <@block name="info">
    <#-- look="" how="" the="" builtin="" view="" service="" adapter="" is="" used="" to="" locate="" 'info'="" --="">
    More Info

  <#if Document.isFolder="">

    Document children:

    <#list Document.children="" as="" doc="">

 ${doc.name} 

```

##### skin/views/Document/info.ftl

```
<@extends src="base.ftl">

<#-- Here="" is="" an="" additional="" view="" on="" a="" document="" added="" by="" the="" derived="" module.="" You="" can="" display="" using="" builtin="" View="" Service="" adapter.="" Example:="" my="" doc="" @views="" info="" --="">

<@block name="content">

More info on document ${Document.title}

Last modified: ${Document["dc:modified"]}

    Document schemas:

    <#list Document.schemas="" as="" schema="">

 ${schema} 

    Document facets:

    <#list Document.facets="" as="" facet="">

 ${facet} 

```

_