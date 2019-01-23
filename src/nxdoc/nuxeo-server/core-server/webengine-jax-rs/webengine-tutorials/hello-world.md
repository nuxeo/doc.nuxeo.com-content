---
title: Hello World
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
    canonical: Hello+World
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Hello+World'
    page_id: '3343200'
    shortlink: YAMz
    shortlink_source: 'https://doc.nuxeo.com/x/YAMz'
    source_link: /display/NXDOC/Hello+World
tree_item_index: 100
history:
    -
        author: Damien Metzler
        date: '2015-10-20 14:05'
        message: ''
        version: '7'
    -
        author: Bogdan Stefanescu
        date: '2010-07-21 11:41'
        message: Migrated to Confluence 4.0
        version: '6'
    -
        author: Bogdan Stefanescu
        date: '2010-07-21 11:40'
        message: ''
        version: '5'
    -
        author: Bogdan Stefanescu
        date: '2010-07-21 11:40'
        message: ''
        version: '4'
    -
        author: Bogdan Stefanescu
        date: '2010-07-21 11:20'
        message: ''
        version: '3'
    -
        author: Bogdan Stefanescu
        date: '2010-07-21 11:19'
        message: ''
        version: '2'
    -
        author: Bogdan Stefanescu
        date: '2010-07-20 16:33'
        message: ''
        version: '1'

---
## JAX-RS Resources
{{#> panel type='code' heading='Sample1.groovy'}}
```java
import javax.ws.rs.*;
import javax.ws.rs.core.*;
import org.nuxeo.ecm.core.rest.*;
import org.nuxeo.ecm.webengine.model.*;
import org.nuxeo.ecm.webengine.model.impl.*;
import org.nuxeo.ecm.webengine.model.exceptions.*;
import org.nuxeo.ecm.webengine.*;

/**
 * Web Module Main Resource Sample.
 *
<p>
 * This demonstrates how to define the entry point for a WebEngine module.
 *
<p>
 * The module entry point is a regular JAX-RS resource named 'Sample1' and with an additional @WebModule annotation.
 * This annotation is mainly used to specify the WebModule name. I will explain the rest of @WebModule attributes in the following samples.
 * A Web Module is implicitly defined by its entry point. You can also configure a Web Module using a module.xml file located
 * in the module root directory. This file can be used to define: root resources (as we've seen in the previous example), links, media type IDs
 * random extensions to other extension points; but also to define new Web Modules without an entry point.
 *
<p>
 * A Web Module's Main resource is the entry point to the WebEngine model build over JAX-RS resources.
 * If you want to benefit of this model you should define such a module entry point rather than using plain JAX-RS resources.
 *
<p>
 * This is a very simple module example, that prints the "Hello World!" message.
 *
 * @author <a href="mailto:bs@nuxeo.com">Bogdan Stefanescu</a>
 */
@WebObject(type="sample1")
@Produces(["text/html"])
@Path("/sample1")
public class Sample1 extends ModuleRoot {

  @GET
  public String doGet() {
    return "Sample1: Hello World!";
  }

  @GET
  @Path("{name}")
  public String doGet(@PathParam("name") String name) {
    return "Sample1: Hello "+name+"!";
  }

}
```
{{/panel}}
