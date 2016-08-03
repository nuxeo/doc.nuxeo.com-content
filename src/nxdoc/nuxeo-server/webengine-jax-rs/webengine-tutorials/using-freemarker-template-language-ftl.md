---
title: Using FreeMarker Template Language (FTL)
labels:
    - howto
    - webengine
    - webengine-component
confluence:
    ajs-parent-page-id: '3343141'
    ajs-parent-page-title: WebEngine Tutorials
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: viewpage.action?pageId=3343202
    canonical_source: viewpage.action?pageId=3343202
    page_id: '3343202'
    shortlink: YgMz
    shortlink_source: 'https://doc.nuxeo.com/x/YgMz'
    source_link: /pages/viewpage.action?pageId=3343202
history:
    - 
        author: Damien Metzler
        date: '2015-10-20 14:06'
        message: ''
        version: '6'
    - 
        author: Julien Carsique
        date: '2010-11-16 16:44'
        message: Migrated to Confluence 4.0
        version: '5'
    - 
        author: Julien Carsique
        date: '2010-11-16 16:44'
        message: ''
        version: '4'
    - 
        author: Bogdan Stefanescu
        date: '2010-07-21 11:41'
        message: ''
        version: '3'
    - 
        author: Bogdan Stefanescu
        date: '2010-07-21 11:24'
        message: ''
        version: '2'
    - 
        author: Bogdan Stefanescu
        date: '2010-07-20 16:33'
        message: ''
        version: '1'

---
## Module definition

##### <span style="color: rgb(0,0,0);">JAX-RS resources</span>

##### Sample2.java

```
import javax.ws.rs.*;
import javax.ws.rs.core.*;
import org.nuxeo.ecm.webengine.model.impl.*;
import org.nuxeo.ecm.webengine.model.*;

/**
 * Templates sample.
 *
 * This demonstrates how to use template files to build client responses.
 * JAX-RS provides a flexible mechanism to send responses based on the mime type that the client expects.
 * To send a response to the client you simply return the Object you want as the response.
 * JAX-RS engines will usually know how to render common Java objects like String, InputStream, File etc.
 * If you need to output specific objects you need to register a custom MessageBodyWriter class.
 * In JAX-RS you are not able to modify the HttpServletResponse object directly from a resource method. (add headers, cookies etc)
 * Anything you may want to output must be returned from the resource method back to JAX-RS engine, and the engine will output it for you.
 * This is a very good thing, even if for some people this approach may seem strange.
 * You may ask yourself, ok cool, The response rendering is pretty well separated from the resource logic.
 * But how can I modify response headers?
 * In that case you must return a javax.ws.rs.Response that may be used to customize your response headers.
 * 

 * WebEngine is adding a new type of response objects: templates.
 * Templates are freemarker based templates that can be used to render your objects depending on the request context.
 * WebEngine is adding some cool extensions to freemarker templates that let you build your web site in a modular fashion.
 * These extensions are called blocks. Blocks are dynamic template parts that can be extended or replaced using derived blocks.
 * Using blocks, you can write a base template that may define the site layout (using blocks containing empty or generic content) and then
 * write final skins for your layout by extending the base template and redefining blocks you are interested in.
 * See the skin directory for template examples.
 * 

 * Templates are stored in files under the skin directory. Templates are always resolved relative to the skin directory,
 * even if you are using absolute paths.
 * The following variables are accessible from a template when rendered at rendering time:
 * 

 * 
 Context  - the WebContext instance
 * 
 Engine   - the WebEngine instance
 * 
 This     - the target Web Object.
 * 
 Root     - the root WebObject.
 * 
 Document - the target Document if any otherwise null.
 * 
 Session  - the Repository Session. (aka Core Session)
 * 
 basePath - the request base path (context path + servlet path)
 * 
 * To render a template as a response you need to instantiate it and then return it from the resource method.
 * The template will be processed by the corresponding MessageBodyWriter and rendered on the client stream.
 *
 * @author Bogdan Stefanescu
 */
@WebObject(type="sample2")
@Path("/sample2")
@Produces({"text/html"})
public class Sample2 extends ModuleRoot {

  @GET
  public Object doGet() {
    return "Sample2: Hello World!";
  }

  /**
   * Return the template index.ftl from 'skin' directory
   */
  @GET
  @Path("index1")
  public Object getIndex1() {
    return getTemplate("index1.ftl");
  }

  /**
   * Inject the variable 'name' in the template context and then return the template.
   */
  @GET
  @Path("index1/{name}")
  public Object getIndex1(@PathParam("name") String name) {
    return getTemplate("index1.ftl").arg("name", name);
  }

  /**
   * Render the index2 template
   */
  @GET
  @Path("index2")
  public Object getIndex2() {
    return getTemplate("index2.ftl");
  }

  /**
   * Example of using redirect.
   * The redirect method inherited from DefaultModule is returning a Response object that is doing a redirect
   */
  @GET
  @Path("redirect/{whereToRedirect}")
  public Response doRedirect(@PathParam("whereToRedirect") String path) {
    return redirect(ctx.getModulePath() + "/"+ path);
  }

  /**
   * Example of using a Response object.
   * This method is sending a 403 HTTP error.
   */
  @GET
  @Path("error/{errorCode}")
  public Response sendError(@PathParam("errorCode") String errorCode) {
    try {
      int statusCode = Integer.parseInt(errorCode);
      Response.Status status = Response.Status.fromStatusCode(statusCode);
      if (status != null) {
	      return Response.status(status).build();
      }
    } catch (Exception e) {
    }
    return Response.status(500).entity("Invalid error code: " + errorCode).build();
  }

}

```

## Object views

##### skin/base.ftl

```

    <@block name="title"/>

<@block name="header">Header

<@block name="content">Content

<@block name="footer">Footer

```

##### skin/index1.ftl

```
<@extends src="base.ftl">
  <@block name="title">Index 2
  <@block name="header">
    <#if name="">
    Hello ${name}!
    <#else>
    Hello World!

  <@block name="content">
    This is the index1 skin.

  <@block name="footer">
    The footer here ...

```

##### skin/index2.ftl

```
<@extends src="base.ftl">
  <@block name="title">Index 2
  <@block name="content">
    This is the index2 skin.

```