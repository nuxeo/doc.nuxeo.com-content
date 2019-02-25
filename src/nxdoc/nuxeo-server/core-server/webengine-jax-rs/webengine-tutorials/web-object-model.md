---
title: Web Object Model
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
    canonical: Web+Object+Model
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Web+Object+Model'
    page_id: '3343204'
    shortlink: ZAMz
    shortlink_source: 'https://doc.nuxeo.com/x/ZAMz'
    source_link: /display/NXDOC/Web+Object+Model
tree_item_index: 300
history:
    -
        author: Damien Metzler
        date: '2015-10-20 14:08'
        message: ''
        version: '8'
    -
        author: Damien Metzler
        date: '2015-10-20 14:07'
        message: ''
        version: '7'
    -
        author: Damien Metzler
        date: '2015-10-20 14:07'
        message: ''
        version: '6'
    -
        author: Bogdan Stefanescu
        date: '2010-07-21 11:46'
        message: Migrated to Confluence 4.0
        version: '5'
    -
        author: Bogdan Stefanescu
        date: '2010-07-21 11:46'
        message: ''
        version: '4'
    -
        author: Bogdan Stefanescu
        date: '2010-07-21 11:42'
        message: ''
        version: '3'
    -
        author: Bogdan Stefanescu
        date: '2010-07-21 11:31'
        message: ''
        version: '2'
    -
        author: Bogdan Stefanescu
        date: '2010-07-20 16:33'
        message: ''
        version: '1'
---
## JAX-RS Resources

{{#> panel type='code' heading='Sample3.java'}}
```java
import javax.ws.rs.*;
import javax.ws.rs.core.*;
import org.nuxeo.ecm.webengine.model.impl.*;
import org.nuxeo.ecm.webengine.model.*;

/**
 * WebEngine Object Model.
 *
 * This sample is explaining the basics of Nuxeo WebEngine Object Model.
 *
<p>
 *
 *
<h3>Resource Model</h3>
 * Resources are objects used to serve the request. WebEngine Resources are always stateless (a new instance is created on each request).
 * There are three type of resources defined by WebEngine:
 *
<ul>
 *
<li> Module Resource - this is the Web Module entry point as we've seen in sample3.
 * This is the root resource. The other type of resources are JAX-RS sub-resources.
 * A WebModule entry point is a special kind of WebObject having as type name the module name.
 *
<li> Web Object - this represents an object that can be requested via HTTP methods.
 *  This resource is usually wrapping some internal object to expose it as a JAX-RS resource.
 *
<li> Web Adapter - this is a special kind of resource that can be used to adapt Web Objects
 * to application specific needs.
 * These adapters are useful to add new functionalities on Web Objects without breaking application modularity
 * or adding new methods on resources.
 * This is helping in creating extensible applications, in keeping the code cleaner and in focusing better on the REST approach
 * of the application.
 * For example let say you defined a DocumentObject which will expose documents as JAX-RS resources.
 * A JAX-RS resources will be able to respond to any HTTP method like GET, POST, PUT, DELETE.
 * So let say we use:
 *
<ul>
 *
<li> <code>GET</code> to get a view on the DocumentObject
 *
<li> <code>POST</code> to create a DocumentObject
 *
<li> <code>PUT</code> to update a document object
 *
<li> <code>DELETE</code> to delete a DocumentObject.
 * </ul>
 * But what if I want to put a lock on the document? Or to query the lock state? or to remove the lock?
 * Or more, to create a document version? or to get a document version?
 * A simple way is to add new methods on the DocumentObject resource that will handle requests top lock, unlock, version etc.
 * Somethig like <code>@GET @Path("lock") getLock()</code> or <code>@POST @Path("lock") postLock()</code>.
 * But this approach is not flexible because you cannot easily add new functionalities on existing resources in a dynamic way.
 * And also, doing so, you will end up with a cluttered code, having many methods for each new aspect of the Web Object you need to handle.
 * To solve this problem, WebEngine is defining Web Adapters, so that they can be used to add new functionality on existing objects.
 * For example, to handle the lock actions on an Web Object we will define a new class LockAdapter which will implement
 * the <code>GET</code>, <code>POST</code>, <code>DELETE</code> methods to manage the lock functionality on the target Web Object.
 * Adapters are specified using an '@' prefix on the segment in an HTTP request path. This is needed by WebEngine to differentiate
 * Web Objects from Web Adapters.
 * Thus in our lock example to request the lock adapter on an object you will use a request path of like the following:
 * <code>GET /my/document/@lock</code> or <code>POST /my/document/@lock</code> etc.
 *
<p>
 * When defining a Web Adapter you can specify on which type of Web Object it may be used. (this is done using annotations)
 * </ul>
 * All WebEngine resources have a type, a super type, an optional set of facets and an optional guard (these are declared using annotations)
 * By using types and super types you can create hierarchies or resources, so that derived resource types will inherit attributes of the super types.
 *
<p>
 *
 * There is a builtin adapter that is managing Web Objects views. The adapter name is <code>@views</code>.
 * You will see in the view model an example on how to use it.
 *
<p>
 *
 * Thus, request paths will be resolved to a resource chain usually of the form: WebModule -> WebObject -> ... -> WebObject [ -> WebAdapter ].
 * <br>
 * Each of these resource objects will be <i>served</i> using the <i>sub-resource</i> mechanism of JAX-RS until the last resource is reached.
 * The last resource will usually return a view to be rendered or a redirection response.
 * The request resource chain is exposed by the WebContext object, so that one can programatically retrieve any resource from the chain.
 * In a given resource chain there will be always 2 special resources: a <b>root</b> and a <b>target</b> resource
 * The root resource is exposed in templates as the <code>Root</code> object and the target one as the contextual object: <code>This</code>.
 * <br>
 * <b>Note</b> that the root resource is not necessarily the first one, and the target resource is not necessarily the last one!
 * More, the root and the target resources are never WebAdapters. They can be only WebObjects or WebModule entry points
 * (that are a special kind of WebObjects).
 *
<p>
 * The root resource is by default the module entry point (i.e. the first resource in the chain) but can be programatically set to point to any other
 * WebObject from the chain.
 *
<p>
 * The target resource will be always the last WebObject resource from the chain.(so any trailing WebAdapters are excluded).
 * This means in the chain: <code>/my/space/doc/@lock</code>, the root will be by default <code>my</code> which is the module entry point,
 * and the target resource will be <code>doc</doc>. So it means that the <code>$This</code> object exposed to templates (and/or views) will
 * never points to the adapter <code>@lock</code> - but to the last WebObject in the chain.
 * So when an adapter view is rendered the <code>$This</code> variable will point to the adapted WebObject and not to the adapter itself.
 * In that case you can retrieve the adapter using <code>${This.activeAdapter}</code>.
 * This is an important aspect in order to correctly understand the behavior of the <code>$This</code> object exposed in templates.
 *
<p>
 *
<p>
 *
<h3>View Model</h3>
 * The view model is an extension of the template model we discussed in the previous sample.
 * The difference between views and templates is that views are always attached to an Web Object. Also, the view file resolution is
 * a bit different from template files. Templates are all living in <code>skin</skin> directory. Views may live in two places:
 *
<ul>
 *
<li> in the skin/views/${type-name} folders where type-name is the resource type name the view is applying on.
 * This location will be consulted first when a view file is resolved, so it can be used by derived modules to replace views on already defined objects.
 *
<li> in the same folder (e.g. java package) as the resource class.
 * This location is useful to defining views inside JARs along with resource classes.
 * </ul>
 * Another specific property of views is that they are inherited from resource super types.
 * For example if you have a resource of type <code>Base</code> and a resource of type <code>Derived</code> then all views
 * defined on type <code>Base</code> apply on type <code>Dervied</code> too.
 * You may override these views by redefining them on type <code>Derived</code>
 * <br>
 * Another difference between templates and views is that views may vary depending on the response media-type.
 * A view is identified by an ID. The view file name is computed as follow:
 *
<pre>
 * view_id + [-media_type_id] + ".ftl"
 * </pre>
 * The <code>media_type_id</code> is optional and will be empty for media-types not explicitely bound to an ID in modules.xml configuration file.
 * For example, to dynamically change the view file corresponding to a view
 * having the ID <code>index</code> when the response media-type is <code>application/atom+xml</code>
 * you can define a mapping of this media type to the media_type_id <code>atom</code> and then you can use the file name
 * <code>index-atom.ftl</code> to specify a specific index view when <code>atom</code> output is required.
 *
 * @author <a href="mailto:bs@nuxeo.com">Bogdan Stefanescu</a>
 */
@WebObject(type="sample3")
@Produces(["text/html"])
public class Sample3 extends ModuleRoot {

  /**
   * Get the index view. The view file name is computed as follows: index[-media_type_id].ftl
   * First the skin/views/sample4 is searched for that file then the current directory.
   * (The type of a module is the same as its name)
   */
  @GET
  public Object doGet() {
    return getView("index");
  }

  /**
   * Get the WebObject (i.e. a JAX-RS sub-resource) bound to "users".
   * Look into "users" directory for the UserManager WebObject. The location of WebObjects is not explicitly specified by the programmer.
   * The module directory will be automatically scanned for WebObject and WebAdapters.
   */
  @Path("users")
  public Object getUserManager() {
    // create a new instance of an WebObject which type is "UserManager" and push this object on the request chain
    return newObject("UserManager");
  }

}
```
{{/panel}}

{{#> panel type='code' heading='users/UserManager.java'}}
```java
package users;

import javax.ws.rs.*;
import javax.ws.rs.core.*;
import org.nuxeo.ecm.webengine.model.impl.*;
import org.nuxeo.ecm.webengine.model.*;

/**
 * UserManager object.
 * You can see the @WebObject annotation that is defining a WebObject of type "UserManager"
 * @author <a href="mailto:bs@nuxeo.com">Bogdan Stefanescu</a>
 */
@Path("/sample3")
@WebObject(type="UserManager")
@Produces({"text/html", "*/*"})
public class UserManager extends DefaultObject {

  /**
   * Get the index view. The view file name is computed as follows: index[-media_type_id].ftl
   * First the skin/views/UserManager is searched for that file then the current directory.
   * (The type of a module is the same as its name)
   */
  @GET
  public Object doGet() {
    return getView("index");
  }

  /**
   * A hack to accept users as user?name=xxx query parameters
   */
  @GET
  @Path("user")
  public Object getUserByQueryString(@QueryParam("name") String name) {
    if (name == null) {
      return doGet();
    } else {
      return redirect(getPath()+"/user/"+name);
    }
  }

  /**
   * Get the user JAX-RS resource given the user name
   */
  @Path("user/{name}")
  public Object getUser(@PathParam("name") String name) {
    // create a new instance of a WebObject which type is "User" and push this object on the request chain
    // the User object is intialized with the String "Username: name"
    return newObject("User", "Username: "+name);
  }

}
```
{{/panel}}

{{#> panel type='code' heading='users/User.java'}}
```java
package users;

import javax.ws.rs.*;
import javax.ws.rs.core.*;
import org.nuxeo.ecm.webengine.model.impl.*;
import org.nuxeo.ecm.webengine.model.*;

/**
 * User object.
 * You can see the @WebObject annotation that is defining a WebObject of type "User"
 * @author <a href="mailto:bs@nuxeo.com">Bogdan Stefanescu</a>
 */
@WebObject(type="User")
@Produces({"text/html", "*/*"})
public class User extends DefaultObject {

  String displayName;

  /**
   * Initialize the object.
   * args values are the one passed to the method newObject(String type, Object ... args)
   */
  protected void initialize(Object... args) {
    displayName = args[0];
  }

  /**
   * Getter the variable displayName. Would be accessible from views with ${This.displayName}
   */
  public String getDisplayName() {
    return displayName;
  }

  /**
   * Get the index view of the User object.
   * The view file is located in <code>skin/views/User</code> so that it can be easily extended
   * by a derived module. See extensibility sample.
   */
  @GET
  public Object doGet() {
    return getView("index");
  }

  /**
   * This method is not implemented but demonstrates how DELETE requests can be used
   */
  @DELETE
  public Object doRemove(@PathParam("name") String name) {
    //TODO ... remove user here ...
    // redirect to the UserManager (the previous object in the request chain)
    return redirect(getPrevious().getPath());
  }

  /**
   * This method is not implemented but demonstrates how PUT requests can be used
   */
  @PUT
  public Object doPut(@PathParam("name") String name) {
    //TODO ... update user here ...
    // redirect to myself
    return redirect(getPath());
  }

}
```
{{/panel}}

{{#> panel type='code' heading='users/UserBuddies.java'}}
```java
package users;

import javax.ws.rs.*;
import javax.ws.rs.core.*;
import org.nuxeo.ecm.webengine.model.impl.*;
import org.nuxeo.ecm.webengine.model.*;

/**
 * UserBuddies object.
 * You can see the @WebAdapter annotation that is defining a WebAdapter of type "UserBuddies" that applies to any User WebObject.
 * The name used to access this adapter is the adapter name prefixed with a '@' character: <code>@buddies</code>
 *
 * @author <a href="mailto:bs@nuxeo.com">Bogdan Stefanescu</a>
 */
@WebAdapter(name="buddies", type="UserBuddies", targetType="User")
@Produces({"text/html", "*/*"})
public class UserBuddies extends DefaultAdapter {

  /**
   * Get the index view. The view file name is computed as follows: index[-media_type_id].ftl
   * First the skin/views/UserBuddies is searched for that file then the current directory.
   * (The type of a module is the same as its name)
   */
  @GET
  public Object doGet() {
    return getView("index");
  }

}
```
{{/panel}}

## Object Views

{{#> panel type='code' heading='skin/views/sample3/index.ftl'}}
```html
<html>
  <head>
    <title>Sample3</title>
  </head>
  <body>

<h3>Sample3 Index View.</h3>

<p><a href="${This.path}/users">User Management</a></p>
  </body>
</html>
```
{{/panel}}

{{#> panel type='code' heading='skin/views/UserManager/index.ftl'}}
```html
<html>
  <head>
    <title>Sample3</title>
  </head>
  <body>

<h3>UserManager Index</h3>
    <form method="GET" action="${This.path}/user" onSubmit="">
    Enter a fictive User name: <input type="text" name="name" value=""/>
    </form>
  </body>
</html>
```
{{/panel}}


{{#> panel type='code' heading='skin/views/User/index.ftl'}}
```html
<html>
  <head>
    <title>Sample3</title>
  </head>
  <body>

<h3>${This.displayName}</h3>
    View my <a href="${This.path}/@buddies">buddies</a>
  </body>
</html>
```
{{/panel}}

{{#> panel type='code' heading='skin/views/UserBuddies/index.ftl'}}
```html
<html>
  <head>
    <title>Sample3 - Adapter example</title>
  </head>
  <body>
    <#-- Look here how $This is used to access current user and not Buddies adapter -->

<h3>Buddies for user ${This.name}!</h3>
    <#-- Look here how to access the adapter instance: ${This.activeAdapter} -->
    This is an adapter named  ${This.activeAdapter.name}

<ul>
    Buddies:

<li><a href="${This.previous.path}/user/Tom">Tom</li>

<li><a href="${This.previous.path}/user/Jerry">Jerry</li>
    </ul>
  </body>
</html>
```
{{/panel}}
