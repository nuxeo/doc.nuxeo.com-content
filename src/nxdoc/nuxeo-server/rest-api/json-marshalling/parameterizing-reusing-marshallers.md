---
title: Parameterizing and Reusing Marshallers
review:
    comment: ''
    date: '2018-01-15'
    status: ok
labels:
    - content-review-lts2016
    - rest-api
    - troger
    - json
    - marshalling
    - lts2017-ok
toc: true
tree_item_index: 400

---

The Nuxeo Platform marshalling service provides a rendering context. This context allows you to parametrize your JSON marshallers. For example you can decide to add a parameter which tells your marshaller to fetch or not some parts of the rendered object.

### Usages

This context is managed by the class `org.nuxeo.ecm.core.io.registry.context.RenderingContext`. A helper is provided to easily create a context: `org.nuxeo.ecm.core.io.registry.context.RenderingContext.CtxBuilder`.

When the marshalling service is used from Jakarta-RS, the context is filled with:

*   The Nuxeo URL
*   The client locale
*   The given [HTTP headers]({{page page='special-http-headers'}})
*   The GET parameters
*   The Java Request attributes

If you add parametrized behaviors to your marshaller, it is then customizable by the end-user application using the corresponding parameter in headers or in GET parameters.

{{#> panel type='code' heading='Parametrize the description and add the product\'s URL'}}

```java
@Setup(mode = SINGLETON, priority = Priorities.REFERENCE)
public class ProductJsonWriter extends AbstractJsonWriter<Product> {
    public void write(Product product, JsonGenerator jg) throws IOException {
        jg.writeStartObject();
        jg.writeNumberField("ref", product.getReference());
        if (ctx.getBooleanParameter("loadProductDescription")) {
            jg.writeStringField("desc", product.getDescription());
        }
        String url = ctx.getBaseUrl() + "/productApp/product/ref/" + product.getReference();
        jg.writeStringField("url", url);
        jg.writeEndObject();
    }
}
```

{{/panel}}

You can send the parameters using HTTP GET parameter or HTTP header (useful for POST/PUT/DELETE results).

{{#> panel type='code' heading='Curl calls'}}

```bash
$ curl -X GET 'http://NUXEO_SERVER/nuxeo/site/productApp/product/ref/10001?loadProductDescription=true'
$ curl -X GET -H 'loadProductDescription:true' 'http://NUXEO_SERVER/nuxeo/site/productApp/product/ref/10001'
```

{{/panel}}

You can also use the rendering context from the server side using the `CtxBuilder`.

{{#> panel type='code' heading='MarshallingRegistry - Java-to-JSON'}}

```java
Product product = ...;
RenderindContext ctx = CtxBuilder.param("loadProductDescription", Boolean.TRUE).get();
String json = MarshallerHelper.objectToJson(product, ctx);
```

{{/panel}}

Finally, you can force the value of a parameter on the server side by overriding the rendering context used to produce the response.

{{#> panel type='code' heading='Use marshallers'}}

```java
@GET
@Produces(MediaType.APPLICATION_JSON)
public Product doGet(@Context HttpServletRequest request) {
    Product product;
    // get the product ... and configure output
    RenderindContext ctx = CtxBuilder.param("loadProductDescription", Boolean.TRUE).get();
    request.setAttribute(CTX_KEY, ctx);
    return product;
}
private static final String CTX_KEY = "_STORED_GENERATED_RENDERING_CONTEXT";
```

{{/panel}}

### RenderingContext API

#### Setting/Getting the Nuxeo Base URL

<div class="table-scroll">
<table class="hover">
<tbody>
<tr
><th colspan="1">Web context usage</th>
<td colspan="1">Retrieved from the HTTP call</td>
</tr><tr><th colspan="1">Server side usage</th>
<td colspan="1">

<pre>
ctx = CtxBuilder.base("http://server/nuxeo").get();
</pre>

</td>
</tr>
<tr>
<th colspan="1">Use from marshallers</th>
<td colspan="1">

<pre>
String url = ctx.getBaseUrl();
</pre>

</td>
</tr>
</tbody>
</table>
</div>

#### Setting/Getting the Current Locale

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th colspan="1">Web context usage</th>
<td colspan="1">Retrieved from the end-user's browser</td>
</tr>
<tr>
<th colspan="1">Server side usage</th>
<td colspan="1">

<pre>
ctx = CtxBuilder.locale(Locale.FRENCH).get();
</pre>

</td>
</tr>
<tr>
<th colspan="1">Use from marshallers</th>
<td colspan="1">
<pre>Locale locale = ctx.getLocale();</pre>
</td>
</tr>
</tbody>
</table>
</div>

#### Delivering/Using a CoreSession to/in Marshallers

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th colspan="1">Web context usage</th>
<td colspan="1">Retrieved from the WebContext, or from a document or created from a `nxrepository` parameter or created from a Repository header.</td>
</tr>
<tr>
<th colspan="1">Server side usage</th>
<td colspan="1">

<pre>
CoreSession session = ...;
ctx = CtxBuilder.session(session).get();
</pre>

</td>
</tr>
<tr>
<th colspan="1">Use from marshallers</th><td colspan="1">

The try-resource statement ensure the session would be closed if it's necessary
<br/>
<pre>
try (SessionWrapper wrapper = ctx.getSession(document)) {CoreSession session = wrapper.getSession();
    }
</pre>

<pre>
try (SessionWrapper wrapper = ctx.getSession(null)) {CoreSession session = wrapper.getSession();
    }
</pre>

</td>
</tr>
</tbody>
</table>
</div>

#### Setting/Getting Any Parameter

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th colspan="1">Web context usage</th>
<td colspan="1">

URL:
<ul>
<li>`.../some-url?paramName=paramValue`</li>
</ul>

HTTP Header:
<ul>
<li>`paramName:paramValue`</li>
</ul>
</td>
</tr>
<tr>
<th colspan="1">Server side usage</th>
<td colspan="1">

<pre>
ctx = CtxBuilder.param("paramName", "paramValue").get();
</pre>

<pre>
ctx.setParameterValues("paramName", "paramValue");
</pre>

</td>
</tr>
<tr>
<th colspan="1">Use from marshallers</th>
<td colspan="1">

<pre>
Object o = ctx.getParameter("paramName");
</pre>

<pre>
List&lt;Object&gt; list = ctx.getParameters("paramName");
</pre>

<pre>
boolean b = ctx.getBooleanParameter("paramName");
</pre>

</td>
</tr>
</tbody>
</table>
</div>

#### Loading Some Document Properties

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th colspan="1">Web context usage</th>
<td colspan="1">

URL:
<ul>
<li>`.../some-url?properties=*`</li>
<li>`.../some-url?properties=dublincore,file`</li>
<li>`.../some-url?properties=dublincore&properties=file`</li>
</ul>

HTTP Header:
<ul>
<li>`properties:*`</li>
<li>`properties:dublincore,file`</li>
</ul>
</td>
</tr>
<tr>
<th colspan="1">Server side usage</th>
<td colspan="1">

<pre>
ctx = CtxBuilder.properties("*").get();
</pre>

<pre>
ctx = CtxBuilder.properties("dublincore", "file").get();
</pre>

<pre>
ctx.setParameterValues("properties", "dublincore", "file");
</pre>

</td>
</tr>
<tr>
<th colspan="1">Use from marshallers</th>
<td colspan="1">

<pre>
Set&lt;String&gt; properties = ctx.getProperties();
</pre>

</td>
</tr>
</tbody>
</table>
</div>

#### Loading Additional Parts of an Object Whose entity-type Is 'objectType'

The corresponding behavior depends on the marshaller.

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th colspan="1">Web context usage</th>
<td colspan="1">

URL:

<ul>
<li>`.../some-url?fetch.objectType=part1,part2`</li>
<li>`.../some-url?fetch.objectType=part1&fetch.objectType=part2`</li>
</ul>

HTTP Header:

<ul>
<li>`X-NXfetch.objectType:part1,part2`</li>
</ul>

</td>
</tr>
<tr>
<th colspan="1">Server side usage</th>
<td colspan="1">**Only for documents**

<pre>
ctx = CtxBuilder.fetchInDoc("part1", "part2").get();
</pre>

<pre>
ctx = CtxBuilder.fetch("objectType", "part1", "part2").get();
</pre>

<pre>
ctx.setParameterValues("fetch.objectType", "part1", "part2");
</pre>

</td>
</tr>
<tr>
<th colspan="1">Use from marshallers</th>
<td colspan="1">

<pre>
Set&lt;String&gt; toLoad = ctx.getFetched("objectType");
</pre>

</td>
</tr>
</tbody>
</table>
</div>

#### Enabling Enricher for an objectType

The enricher will contribute to the object marshalling. The object marshaller must extend `ExtensibleEntityJsonWriter`. The given enricher name must match an existing enricher for this object type.

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th colspan="1">Web context usage</th>
<td colspan="1">

URL:
<ul>
<li>`.../some-url?enrichers.objectType=children,acl`</li>
<li>`.../some-url?enrichers.objectType=children&enrichers.objectType=acl`</li>
</ul>
HTTP Header:

<ul>
<li>`X-NXenrichers.objectType:children,acl`</li>
</ul>

</td>
</tr>
<tr>
<th colspan="1">Server side usage</th>
<td colspan="1">**Only for documents**

<pre>
ctx = CtxBuilder.enrichDoc("children", "acl").get();
</pre>

<pre>
ctx = CtxBuilder.enrich("objectType", "children", "acl").get();
</pre>

<pre>
ctx.setParameterValues("enrichers.objectType", "children", "acl");
</pre>

</td>
</tr>
<tr>
<th colspan="1">Use from marshallers</th>
<td colspan="1">

<pre>
Set&lt;String&gt; enricherToActivate = ctx.getEnrichers("objectType");
</pre>

</td>
</tr>
</tbody>
</table>
</div>

#### Translating Some Part of an Object Which May Contains Some l10n Key

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th colspan="1">Web context usage</th>
<td colspan="1">

URL:
<ul>
<li>`.../some-url?translate.objectType=elementToTranslate`</li>
</ul>

HTTP Header:
<ul>
<li>`X-NXtranslate.objectType:elementToTranslate`</li>
</ul>
</td>
</tr>
<tr>
<th colspan="1">Server side usage</th>
<td colspan="1">

<pre>
ctx = CtxBuilder.translate("objectType", "elementToTranslate").get();
</pre>

<pre>
ctx.setParameterValues("translate.objectType", "elementToTranslate");
</pre>

</td>
</tr>
<tr>
<th colspan="1">Use from marshallers</th>
<td colspan="1">

<pre>
Set&lt;String&gt; toTranslate = ctx.getTranslated("objectType");
</pre>

</td>
</tr>
</tbody>
</table>
</div>

#### {{> anchor 'renderingcontext-api-depth-aggregation'}}Controlling the Aggregation Depth

Available values are: root for no aggregation, children for 1 level, max for 2 levels. Default value is 'children'. See next chapter for more details

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th colspan="1">Web context usage</th>
<td colspan="1">

URL:
<ul>
<li>`.../some-url?depth=children`</li>
</ul>

HTTP Header:
<ul>
<li>`depth:children`</li>
</ul>

</td>
</tr>
<tr>
<th colspan="1">Server side usage</th>
<td colspan="1">

<pre>
ctx = CtxBuilder.depth(DepthValues.children).get();
</pre>

<pre>
ctx.setParameterValues("depth", "children");
</pre>

</td>
</tr>
<tr>
<th colspan="1">Use from marshallers</th>
<td colspan="1">

<pre>
try (Closeable resource = ctx.wrap().controlDepth().open()) {
 // call another marshaller
} catch (MaxDepthReachedException e) {
 // do not load properties
}
</pre>

</td>
</tr>
</tbody>
</table>
</div>

### {{> anchor 'aggregating-marshallers-infinite-loops'}}Aggregating Marshallers and Avoiding Infinite Loops

Let's take an example. We created two classes, `Product` and `Category`. And we'd like to marshall them as JSON.

![]({{file name='Marshalling example UML - New Page.png'}} ?w=500,h=122,border=true)

When loading a category, we'd like to be able to get the corresponding products.

{{#> panel type='code' heading='Custom JSON'}}

```java
@Setup(mode = Instantiations.SINGLETON, priority = Priorities.REFERENCE)
public class CategoryJsonWriter extends AbstractJsonWriter<Category> {
    public void write(Category category, JsonGenerator jg) throws IOException {
        jg.writeStartObject();
        jg.writeNumberField("ref", category.getReference());
        jg.writeStringField("desc", category.getDescription());
        if (ctx.getFetched("category").contains("products")) {
            jg.writeArrayFieldStart("products");
            for (Product product: product.getProducts()) {
                // delegates the marshalling to Nuxeo
                writeEntity(product);
            }
            jg.writeEndArray();
        }
        jg.writeEndObject();
    }
}
```

{{/panel}}{{#> panel type='code' heading='Curl calls'}}

```bash
$ curl -X GET 'http://NUXEO_SERVER/nuxeo/site/productApp/category/ref/12?fetch.category=products'
```

{{/panel}}

When loading a product, we'd like to be able to get the corresponding categories.

{{#> panel type='code' heading='Custom JSON'}}

```java
@Setup(mode = Instantiations.SINGLETON, priority = Priorities.REFERENCE)
public class ProductJsonWriter extends AbstractJsonWriter<Product> {
    public void write(Product product, JsonGenerator jg) throws IOException {
        jg.writeStartObject();
        jg.writeNumberField("ref", product.getReference());
        jg.writeStringField("desc", product.getDescription());
        if (ctx.getFetched("product").contains("categories")) {
            jg.writeArrayFieldStart("categories");
            for (Category category: product.getCategories()) {
                // delegates the marshalling to Nuxeo
                writeEntity(category);
            }
            jg.writeEndArray();
        }
        jg.writeEndObject();
    }
}
```

{{/panel}}{{#> panel type='code' heading='Curl calls'}}

```bash
$ curl -X GET 'http://NUXEO_SERVER/nuxeo/site/productApp/category/ref/12?fetch.product=categories'
```

{{/panel}}

This works fine. But if we want to get both product's categories and category's products, there's a real risk to get an infinite loop. Or at least to get a very huge amount of JSON (if the category-product graph has no cycle).

{{#> panel type='code' heading='Curl calls'}}

```bash
$ curl -X GET 'http://NUXEO_SERVER/nuxeo/site/productApp/category/ref/12?fetch.product=categories&fetch.category=products'
```

{{/panel}}

![]({{file name='Marshalling example loops - New Page 1.png'}} ?w=500,h=412,border=true)

To manage this case, we could use a counter put in the context but this will not work in most case because the counter will manage the first "line" of marshaller and disable the others: that's due to the processing which follows a "Depth First Search".

![]({{file name='Marshalling example loops - New Page 2.png'}} ?w=500,h=413,border=true)

The Nuxeo Platform provides a specific object to wrap the depth control in each "crossing line". Each time you call another marshaller, you should use it.

{{#> panel type='code' heading='Custom JSON'}}

```java
@Setup(mode = Instantiations.SINGLETON, priority = Priorities.REFERENCE)
public class CategoryJsonWriter extends AbstractJsonWriter<Category> {
    public void write(Category category, JsonGenerator jg) throws IOException {
        jg.writeStartObject();
        jg.writeNumberField("ref", category.getReference());
        jg.writeStringField("desc", category.getDescription());
        // control the graph depth
        try (Closeable resource = ctx.wrap().controlDepth().open()) {
            if (ctx.getFetched("category").contains("products")) {
                jg.writeArrayFieldStart("products");
                for (Product product: product.getProducts()) {
                    // delegates the marshalling to Nuxeo
                    writeEntity(product);
                }
                jg.writeEndArray();
            }
        } catch (MaxDepthReachedException e) {
            // do not load products
        }
        jg.writeEndObject();
    }
}
```

{{/panel}}

The max depth is controlled by the `depth` parameter in the rendering context. The default value for depth is `children`.

Depth values: If we get a product -> its categories -> their products ...

*   **root**: No category will be loaded, just the first product.
*   **children**: The product is loaded with its categories.
*   **max**: The product is loaded, its categories also, and their products.

The only way to load more data is to avoid the use of depth control (which is bad!).

{{#> callout type='note' }}

Each existing Nuxeo writer/enricher, which may use another marshaller, uses the depth's control.

{{/callout}}
