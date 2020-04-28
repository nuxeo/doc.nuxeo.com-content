---
title: Using FreeMarker Template Language (FTL)
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
    canonical: viewpage.action?pageId=3343202
    canonical_source: viewpage.action?pageId=3343202
    page_id: '3343202'
    shortlink: YgMz
    shortlink_source: 'https://doc.nuxeo.com/x/YgMz'
    source_link: /pages/viewpage.action?pageId=3343202
tree_item_index: 200
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

## JAX-RS Resources
{{#> panel type='code' heading='Sample2.java'}}
```java
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
<p>
 * WebEngine is adding a new type of response objects: templates.
 * Templates are freemarker based templates that can be used to render your objects depending on the request context.
 * WebEngine is adding some cool extensions to freemarker templates that let you build your web site in a modular fashion.
 * These extensions are called blocks. Blocks are dynamic template parts that can be extended or replaced using derived blocks.
 * Using blocks, you can write a base template that may define the site layout (using blocks containing empty or generic content) and then
 * write final <i>skins</i> for your layout by extending the base template and redefining blocks you are interested in.
 * See the <i>skin</i> directory for template examples.
 *
<p>
 * Templates are stored in files under the <i>skin</i> directory. Templates are always resolved relative to the <i>skin</i> directory,
 * even if you are using absolute paths.
 * The following variables are accessible from a template when rendered at rendering time:
 *
<ul>
 *
<li> <code>Context</code>  - the WebContext instance
 *
<li> <code>Engine</code>   - the WebEngine instance
 *
<li> <code>This</code>     - the target Web Object.
 *
<li> <code>Root</code>     - the root WebObject.
 *
<li> <code>Document</code> - the target Document if any otherwise null.
 *
<li> <code>Session</code>  - the Repository Session. (aka Core Session)
 *
<li> <code>basePath</code> - the request base path (context path + servlet path)
 * </ul>
 * To render a template as a response you need to instantiate it and then return it from the resource method.
 * The template will be processed by the corresponding MessageBodyWriter and rendered on the client stream.
 *
 * @author <a href="mailto:bs@nuxeo.com">Bogdan Stefanescu</a>
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
{{/panel}}

## Object Views

{{#> panel type='code' heading='skin/base.ftl'}}
```html
<!-- Base template that defines the site layout -->
<html>
  <head>
    <title><@block name="title"/></title>
  </head>
  <body>
    <table width="100%" border="1">
      <tr>
        <td>
          <@block name="header">Header</@block>
        </td>
      </tr>
      <tr>
        <td>
          <@block name="content">Content</@block>
        </td>
      </tr>
      <tr>
        <td>
          <@block name="footer">Footer</@block>
        </td>
      </tr>
    </table>
  </body>
</html>
```
{{/panel}}

{{#> panel type='code' heading='skin/index1.ftl'}}
```
<@extends src="base.ftl">
  <@block name="title">Index 2</@block>
  <@block name="header">
    <#if name>
    Hello ${name}!
    <#else>
    Hello World!
    </#if>
  </@block>
  <@block name="content">
    This is the <i>index1</i> skin.
  </@block>
  <@block name="footer">
    The footer here ...
  </@block>
</@extends>
```
{{/panel}}

{{#> panel type='code' heading='skin/index2.ftl'}}
```
<@extends src="base.ftl">
  <@block name="title">Index 2</@block>
  <@block name="content">
    This is the <i>index2</i> skin.
  </@block>
</@extends>
```
{{/panel}}
