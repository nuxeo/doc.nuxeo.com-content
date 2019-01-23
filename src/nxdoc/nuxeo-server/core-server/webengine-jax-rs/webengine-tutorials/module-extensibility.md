---
title: Module Extensibility
review:
    comment: ''
    date: '2016-12-20'
    status: ok
labels:
    - lts2016-ok
    - howto
    - webengine
    - webengine-component
    - dmetzler
    - content-review-lts2017
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
tree_item_index: 500
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

## Module Definition

{{#> panel type='code' heading='MANIFEST.MF'}}
```
...
Nuxeo-WebModule: org.nuxeo.ecm.webengine.app.WebEngineModule;name=sample5;extends=sample4

```
{{/panel}}

## JAX-RS Resources

{{#> panel type='code' heading='Samples5.java'}}
```java
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
 * To extend another module you should use the <code>base="BaseModule"</code> in the <code>@WebModule</code>
 * annotation. This way the new module will inherit all templates and resources defined in the base module.
 * You can thus create a chain of inherited web modules.
 *
<p>
 * Here is how template resolval will be impacted by the module inheritance:
 * <br>
 * <i>If a template T is not found in skin directory of derived module then search the template inside the base module and so on
 * until a template is found or no more base module exists.</i>
 * The view resolval is similar to the template one but it will use the WebObject inheritance too:
 * <br>
 * <i></i>
 * <br>
 * <b>Note</b> that only the <i>skin</i> directory is stacked over the one in the base module.
 * The other directories in the module are not inheritable.
 *
<p>
 * Also, resource types defined by the base module will become visible in the derived one.
 *
<p>
 * In this example you will also find a very useful feature of WebEngine: the builtin <b>view service adapter</b>.
 * This adapter can be used on any web object to locate any view declared on that object.
 * Let's say we define a view named <i>info</i> for the <i>Document</i> WebObject type.
 * And the following request path will point to a Document WebObject: <code>/my/doc</code>.
 * Then to display the <i>info</i> view we can use the builtin views adapter this way:
 * <code>/my/doc/@views/info</code>.
 *
<p>
 * Obviously, you can redefine the WebObject corresponding to your document type and add a new method that will dispatch
 * the view <info>info</info> using a pretty path like <code>/my/doc/info</code>. But this involves changing code.
 * If you don't want this then the views adapter will be your friend.
 *
 *
<p>
 *
<p>
 * This example will extend the module defined in sample5 and will reuse and add more templates.
 * Look into template files to see how base module templates are reused.
 *
 * @author <a href="mailto:bs@nuxeo.com">Bogdan Stefanescu</a>
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
{{/panel}}

## Object Views

{{#> panel type='code' heading='skin/views/sample5/index.ftl'}}
```
<#-- we are reusing the base template from the base module -->
<@extends src="base.ftl">

<#-- we are redefining only the title block -->
<@block name="title">Sample 5: Web Module Extensibility</@block>

<@block name="content">
Browse <a href="${This.path}/repository">repository</a>
</@block>

</@extends>
```
{{/panel}}

{{#> panel type='code' heading='skin/views/Document/index.ftl'}}
```
<#-- we reuse base.ftl from base module -->
<@extends src="base.ftl">

<@block name="content">

<h2>${Document.title}</h2>

<div>Document ID: ${Document.id}</div>

<div>Document path: ${Document.path}</div>

<div>Document name: ${Document.name}</div>

<div>Document type: ${Document.type}</div>

<p>
    <#-- we redefine the nested block info by adding a link to another view named 'info' on the document -->
    <@block name="info">
    <#-- look how the builtin view service adapter is used to locate the 'info' view -->
    <a href="${This.path}/@views/info">More Info</a>
    </@block>
  </p>

  <#if Document.isFolder>
    <hr/>

<div>
    Document children:

<ul>
    <#list Document.children as doc>

<li> <a href="${This.path}/${doc.name}">${doc.name}</a> </li>
    </#list>
    </ul>
    </div>
  </#if>

</@block>
</@extends>
```
{{/panel}}

{{#> panel type='code' heading='skin/views/Document/info.ftl'}}
```
<@extends src="base.ftl">

<#--
Here is an additional view on a document added by the derived  module.
You can display the view by using the builtin View Service adapter.
Example: /my/doc/@views/info
-->

<@block name="content">

<h2>More info on document ${Document.title}</h2>

<h3>Last modified: ${Document["dc:modified"]}</h3>

<div>
    Document schemas:

<ul>
    <#list Document.schemas as schema>

<li> ${schema} </li>
    </#list>
    </ul>
  </div>

<div>
    Document facets:

<ul>
    <#list Document.facets as facet>

<li> ${facet} </li>
    </#list>
    </ul>
  </div>
</@block>

</@extends>

```
{{/panel}}
