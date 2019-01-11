---
title: Working with Documents
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
    canonical: Working+with+Documents
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Working+with+Documents'
    page_id: '3343206'
    shortlink: ZgMz
    shortlink_source: 'https://doc.nuxeo.com/x/ZgMz'
    source_link: /display/NXDOC/Working+with+Documents
tree_item_index: 400
history:
    -
        author: Damien Metzler
        date: '2015-10-20 14:09'
        message: ''
        version: '5'
    -
        author: Bogdan Stefanescu
        date: '2010-07-21 11:54'
        message: Migrated to Confluence 4.0
        version: '4'
    -
        author: Bogdan Stefanescu
        date: '2010-07-21 11:54'
        message: ''
        version: '3'
    -
        author: Bogdan Stefanescu
        date: '2010-07-20 16:35'
        message: ''
        version: '2'
    -
        author: Bogdan Stefanescu
        date: '2010-07-20 16:34'
        message: ''
        version: '1'
---
## JAX-RS Resources

{{#> panel type='code' heading='Sample4.java'}}
```java
import javax.ws.rs.*;
import javax.ws.rs.core.*;
import org.nuxeo.ecm.core.rest.*;
import org.nuxeo.ecm.webengine.model.impl.*;
import org.nuxeo.ecm.webengine.model.*;
import org.nuxeo.ecm.webengine.model.exceptions.*;

/**
 * Working with Nuxeo Documents.
 *
 * Nuxeo Documents are transparently mapped to WebObjects so that you can easily access your documents
 * through WebEngine.
 * Nuxeo Documents are defined by a document type and can be structured in a hierarchy based on their type.
 * The ancestor of all document types is the "Document" type.
 * Document types are transparently mapped to WebObject types, so that you don't need to explicitely declare
 * WebObjects that expose documents. By default all documents are exposed as DocumentObject instances (which is an WebObject).
 * If you need specific control over your document type you need then to explicitely declare a new WebObject using the same
 * type name as your document type. This way, the default binding to DocumentObject will be replaced with your own WebObject.
 *
<p>
 * <b>Note</b> that it is recommended to subclass the DocumentObject when redefining document WebObjects.
 *
<p>
 * Also, Documents as WebObjects may have a set of facets. Documents facets are transparently exposed as WebObject facets.
 * When redefining the WebObject used to expose a Document you can add new facets using @WebObject annotation
 * (these new facets that are not existing at document level but only at WebObject level).
 *
<p>
 * To work with documents you need first to get a view on the repository. This can be done using the following methods:
 * <br>
 * <code>DocumentFactory.getDocumentRoot(ctx, path)</code> or <code>DocumentFactory.getDocument(ctx, path)</code>
 * <br>
 * The difference between the two methods is that the getDocumentRoot is also setting
 * the newly created document WebObject as the root of the request chain.
 * The document WebObject created using the DocumentFactory helper class will represent the root of your repository view.
 * To go deeper in the repository tree you can use the <code>newDocument</code> methods on the DocumentObject instance.
 *
<p>
 * <b>Remember</b> that when working with documents you may need to log in to be able to access the repository.
 * (it depends on whether or not the repository root is accessible to Anonymous user)
 * For this reason we provide in this example a way to login into the repository.
 * This also demonstrates <b>how to handle errors</b> in WebEngine. The mechanism is simple:
 * At your module resource level you redefine a method
 * <code>public Object handleError(WebApplicationException e)</code> that will be invoked each time
 * an uncatched exception is thrown during the request. From that method you should return a suitable response to render the error.
 * To ensure exceptions are correclty redirected to your error handler you must catch all exceptions thrown in your resource methods
 * and rethrowing them as following: <code> ... } catch (Throwable t) { throw WebException.wrap(t); } </code>.
 * The exception wrapping is automatically converting exceptions to the ones defined by WebEngine model.
 *
<p>
 * The default exception handling defined in ModuleRoot class is simply printing the exception on the output stream.
 *
 * @author <a href="mailto:bs@nuxeo.com">Bogdan Stefanescu</a>
 */
@Path("/sample4")
@WebObject(type="sample4")
@Produces("text/html")
public class Sample4 extends ModuleRoot {

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
{{/panel}}

## Object Views

{{#> panel type='code' heading='skin/base.ftl'}}
```html
<!-- base template -->
<html>
  <head>
    <title><@block name="title"/>Sample4</title>
  </head>
  <body>
    <@block name="content"/>
  </body>
</html>

```
{{/panel}}

{{#> panel type='code' heading='skin/views/sample4/index.ftl'}}
```
<@extends src="base.ftl">
<@block name="title">Sample 4: Working with documents</@block>
<@block name="content">

Browse <a href="${This.path}/repository">repository</a>

</@block>
</@extends>

```
{{/panel}}

{{#> panel type='code' heading='skin/views/Document/index.ftl'}}
```
<@extends src="base.ftl">

<@block name="content">

<h2>${Document.title}</h2>

<div>Document ID: ${Document.id}

<div>Document path: ${Document.path}

<div>Document name: ${Document.name}

<div>Document type: ${Document.type}

    <#-- Here we declare a nested block. Look in sample6 how nested block can be redeclared -->
    <@block name="info">

<div>
    Document schemas:

<ul>
    <#list Document.schemas as schema>

<li> ${schema}
    </#list>
    </ul>
    </div>

<div>
    Document facets:

<ul>
    <#list Document.facets as facet>

<li> ${facet}
    </#list>
    </ul>
    </div>
  </@block>

  <#if Document.isFolder>

<hr>

<div>
    Document children:

<ul>
    <#list Document.children as doc>

<li> <a href="${This.path}/${doc.name}">${doc.name}</a>
    </#list>
    </ul>
    </div>
  </#if>

</@block>
</@extends>

```
{{/panel}}

## Templates

{{#> panel type='code' heading='skin/error/error_401.ftl'}}
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
{{/panel}}

{{#> panel type='code' heading='skin/error/error_404.ftl'}}
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
{{/panel}}

{{#> panel type='code' heading='skin/error/login.ftl'}}
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
{{/panel}}
