---
title: Working with Documents
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
    canonical: Working+with+Documents
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Working+with+Documents'
    page_id: '3343206'
    shortlink: ZgMz
    shortlink_source: 'https://doc.nuxeo.com/x/ZgMz'
    source_link: /display/NXDOC/Working+with+Documents
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
## JAX-RS resources

##### Sample4.java

```
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

 * Note that it is recommended to subclass the DocumentObject when redefining document WebObjects.
 * 

 * Also, Documents as WebObjects may have a set of facets. Documents facets are transparently exposed as WebObject facets.
 * When redefining the WebObject used to expose a Document you can add new facets using @WebObject annotation
 * (these new facets that are not existing at document level but only at WebObject level).
 * 

 * To work with documents you need first to get a view on the repository. This can be done using the following methods:
 * 
 * DocumentFactory.getDocumentRoot(ctx, path) or DocumentFactory.getDocument(ctx, path)
 * 
 * The difference between the two methods is that the getDocumentRoot is also setting
 * the newly created document WebObject as the root of the request chain.
 * The document WebObject created using the DocumentFactory helper class will represent the root of your repository view.
 * To go deeper in the repository tree you can use the newDocument methods on the DocumentObject instance.
 * 

 * Remember that when working with documents you may need to log in to be able to access the repository.
 * (it depends on whether or not the repository root is accessible to Anonymous user)
 * For this reason we provide in this example a way to login into the repository.
 * This also demonstrates how to handle errors in WebEngine. The mechanism is simple:
 * At your module resource level you redefine a method
 * public Object handleError(WebApplicationException e) that will be invoked each time
 * an uncatched exception is thrown during the request. From that method you should return a suitable response to render the error.
 * To ensure exceptions are correclty redirected to your error handler you must catch all exceptions thrown in your resource methods
 * and rethrowing them as following:  ... } catch (Throwable t) { throw WebException.wrap(t); } .
 * The exception wrapping is automatically converting exceptions to the ones defined by WebEngine model.
 * 

 * The default exception handling defined in ModuleRoot class is simply printing the exception on the output stream.
 *
 * @author Bogdan Stefanescu
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

## Object views

##### skin/base.ftl

```

    <@block name="title"/>Sample4

    <@block name="content"/>

```

##### skin/views/sample4/index.ftl

```
<@extends src="base.ftl">
<@block name="title">Sample 4: Working with documents
<@block name="content">

Browse repository

```

##### skin/views/Document/index.ftl

```
<@extends src="base.ftl">

<@block name="content">

${Document.title}

Document ID: ${Document.id}

Document path: ${Document.path}

Document name: ${Document.name}

Document type: ${Document.type}

    <#-- Here="" we="" declare="" a="" nested="" block.="" Look="" in="" sample6="" how="" block="" can="" be="" redeclared="" --="">
    <@block name="info">

    Document schemas:

    <#list Document.schemas="" as="" schema="">

 ${schema}

    Document facets:

    <#list Document.facets="" as="" facet="">

 ${facet}

  <#if Document.isFolder="">

    Document children:

    <#list Document.children="" as="" doc="">

 ${doc.name}

```

## Templates

##### skin/error/error_401.ftl

```
<@extends src="base.ftl">
<@block name="header">
Error
<@block name="content">

401 - Unauthorized

You don't have privileges to access this page

<#include "error="" login.ftl"="">

```

##### skin/error/error_404.ftl

```
<@extends src="base.ftl">
<@block name="header">
Error
<@block name="content">

404 - Resource Not Found

The page you requested doesn't exists

```

##### skin/error/login.ftl

```

  <#if Context.getProperty("failed")="=" "true"="">

Username:

Password:

Authentication Failed!

```