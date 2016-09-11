---
title: Managing Links
review:
    comment: ''
    date: ''
    status: ok
labels:
    - howto
    - webengine
confluence:
    ajs-parent-page-id: '22380575'
    ajs-parent-page-title: WebEngine Tutorials
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: Managing+Links
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC60/Managing+Links'
    page_id: '22380569'
    shortlink: GYBVAQ
    shortlink_source: 'https://doc.nuxeo.com/x/GYBVAQ'
    source_link: /display/NXDOC60/Managing+Links
history:
    - 
        author: Bogdan Stefanescu
        date: '2010-07-21 12:05'
        message: igrated to Confluence 4.
        version: '3'
    - 
        author: Bogdan Stefanescu
        date: '2010-07-21 12:05'
        message: ''
        version: '2'
    - 
        author: Bogdan Stefanescu
        date: '2010-07-20 16:34'
        message: ''
        version: '1'

---
## Module definition

##### module.xml

```

<?xml version="1.0"?>
<module name="sample6" root-type="sample6" path="/sample6" extends="base">
  <nature>groovy</nature>

  <links>
  <!-- link IDs are normally used as the keys of i18n messages - but in this example we are displaying them directly without using i18n mechanism-->
  <!-- link to a info view available for all Documents (i.e. WebObjects that are derived from Document type) -->
  <link id="Info" path="/@views/info">
    <category>TOOLS</category>
    <category>INFO</category>
    <type>Document</type>
  </link>

  <!-- Link enabled only for folderish documents -->
  <link id="Children" path="/@views/children">
    <facet>Folderish</facet>
    <type>Document</type>
    <category>TOOLS</category>
  </link>

  <!-- this is only demonstrating link conditions - this is not a real link...
       This link will be enabled only for WebObject derived from Workspace
  -->
  <link id="I am a workspace" path="">
    <type>Workspace</type>
    <category>TOOLS</category>
  </link>
  </links>

</module>

```

## JAX-RS resources

##### Sample6.groovy

```

import javax.ws.rs.*;
import javax.ws.rs.core.*;
import org.nuxeo.ecm.core.rest.*;
import org.nuxeo.ecm.webengine.model.impl.*;
import org.nuxeo.ecm.webengine.model.*;
import org.nuxeo.ecm.webengine.model.exceptions.*;

/**
 * Managing links.
 * 
<p>
 * Almost any template page will contain links to other pages in your application.
 * These links are usually absolute paths to other WebObjects or WebAdapters (including parameters if any).
 * Maintaining these links when application object changes is painful when you are using modular applications
 * (that may contribute new views or templates).
 * 
<p>
 * WebEngine is providing a flexible way to ease link management.
 * First, you should define all of your links in <i>module.xml</i> configuration file.
 * A Link is described by a target URL, an enablement condition, and one or more categories that can be used to organize links.
 * 
<ul>
 * Here are the possible conditions that you can use on links:
 * 
<li> type - represent the target Web Object type. If present the link will be enabled only in the context of such an object.
 * 
<li> adapter - represent the target Web Adapter name. If present the link will be enabled only if the active adapter is the same as this one.
 * 
<li> facet - a set of facets that the target web object must have in order to enable the link.
 * 
<li> guard - a guard to be tested in order to enable the link. This is using the guard mechanism of WebEngine.
 * </ul>
 * If several conditions are specified an <code>AND</code> will be used between them.
 * 
<p>
 * Apart conditions you can <i>group</i> links in categories.
 * Using categories and conditions you can quickly find in a template which are all enabled links that are part of a category.
 * This way, you can control which links are written in the template without needing to do conditional code to check the context if links are enabled.
 * 
<p>
 * Conditions and categories manage thus where and when your links are displayed in a page. Apart this you also want to have a target URL for each link.
 * 
<ul>
 * You have two choices in specifying such a target URL:
 * 
<li> define a custom link handler using the <code>handler</handler> link attribute.
 * The handler will be invoked each time the link code need to be written in the output stream so that it can programatically generate the link code.
 * 
<li> use the builtin link handler. The builtin link handler will append the <code>path</code> attribute you specified in link definition
 * to the current WebObject path on the request. This behavior is good enough for most of the use cases.
 * 
<li>
 * </ul>
 * 
<p>
 * 
<p>
 * This example will demonstrate how links work. Look into <code>module.xml</code> for link definitions
 * and then in <code>skin/views/Document/index.ftl</code> on how they are used in the template.
 *
 * @author <a href="mailto:bs@nuxeo.com">Bogdan Stefanescu</a>
 */
@WebObject(type="sample6")
@Produces(["text/html"])
public class Sample6 extends ModuleRoot {

  @GET
  public Object doGet() {
    return getView("index");
  }

  /**
   * Get a repository view rooted under "/default-domain".
   */
  @Path("repository")
  public Object getRepositoryView() {
    return DocumentFactory.newDocumentRoot(ctx, "/default-domain");
  }

  /**
   * Example on how to handle errors
   */
  public Response handleError(WebApplicationException e) {
    if (e instanceof WebSecurityException) {
      // display a login page
      return Response.status(401).entity(getTemplate("error/error_401.ftl")).build();
    } else if (e instanceof WebResourceNotFoundException) {
      return Response.status(404).entity(getTemplate("error/error_404.ftl")).build();
    } else {
      // not interested in that exception - use default handling
      return super.handleError(e);
    }
  }

}

```

## Object views

##### skin/base.ftl

```

<html>
  <head>
    <title>Sample 6: Working with links</title>
  </head>
  <body>
    <@block name="content"/>
  </body>
</html>

```

##### skin/views/sample6/index.ftl

```

<@extends src="base.ftl">

  <@block name="content">
    Browse Repository: <a href="${This.path}/repository">repository</a>
  </@block>

</@extends>

```

##### skin/views/Document/index.ftl

```

<@extends src="base.ftl">

<@block name="content">

<h2>${Document.title}</h2>

<table width="100%" border="1">

<tr>

<td>

<div>Document ID: ${Document.id}

<div>Document path: ${Document.path}

<div>Document name: ${Document.name}

<div>Document type: ${Document.type}

<hr>
    <#if Document.isFolder>

<div>
    Document children:

<ul>
    <#list Document.children as doc>

<li> <a href="${This.path}/${doc.name}">${doc.name}</a> </li>
    </#list>
    </ul>
    </div>
    </#if>
    </td>

<td>
      <#-- display here the links available in the current context in category INFO -->

<ul>
      <b>Tools</b>
      <#list This.getLinks("INFO") as link>

<li> <a href="${link.getCode(This)}">${link.id}</a> </li>
      </#list>
      </ul>
      <#-- display here the links available in the current context in category TOOLS -->

<ul>
      <b>Adminitsration</b>
      <#list This.getLinks("TOOLS") as link>

<li> <a href="${link.getCode(This)}">${link.id}</a> </li>
      </#list>
      </ul>
    </td>
  </tr>
</table>

</@block>
</@extends>

```

##### skin/views/Document/children.ftl

```

<@extends src="base.ftl">

<@block name="content">
  <#if Document.isFolder>

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

##### skin/views/Document/info.ftl

```

<@extends src="base.ftl">

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

## Templates

##### skin/error/error_401.ftl

```

<@extends src="base.ftl">
<@block name="header">
<h1><a href="${appPath}">Error</a></h1></@block>
<@block name="content">

<h1>401 - Unauthorized</h1>

<p>
You don't have privileges to access this page
</p>

<p>
<br/>
</p>
<#include "error/login.ftl">

</@block>
</@extends>

```

##### skin/error/error_404.ftl

```

<@extends src="base.ftl">
<@block name="header">
<h1><a href="${appPath}">Error</a></h1></@block>
<@block name="content">

<h1>404 - Resource Not Found</h1>

The page you requested doesn't exists

</@block>
</@extends>

```

##### skin/error/login.ftl

```

<!-- Login Form -->
<form action="${Context.loginPath}" method="POST">

<table cellpadding="4" cellspacing="1">

<tr>

<td>Username:</td>

<td><input name="username" type="text"></td>
  </tr>

<tr>

<td>Password:</td>

<td><input name="password" type="password"></td>
  </tr>

<tr align="right">

<td colspan="2">
      <input type="submit" value="Sign In"/>
    </td>
  </tr>
  <#if Context.getProperty("failed") == "true">

<tr align="center">

<td colspan="2"><font color="red">Authentication Failed!</font></td>
  </tr>
  </#if>
</table>
</form>

```