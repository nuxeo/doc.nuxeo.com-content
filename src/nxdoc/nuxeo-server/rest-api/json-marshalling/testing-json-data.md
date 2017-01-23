---
title: Testing JSON Data
review:
    comment: ''
    date: '2017-01-04'
    status: ok
labels:
    - content-review-lts2016
    - rest-api
    - json
    - marshalling
toc: true
tree_item_index: 600

---

The Nuxeo Platform offers a utility object to test JSON data: `org.nuxeo.ecm.core.io.marshallers.json.JsonAssert`. It is provided by nuxeo-core-io test-jar.

{{#> panel type='code' heading='Maven dependency'}}

```xml
<!-- JSON marshallers tests -->
<dependency>
  <groupId>org.nuxeo.ecm.core</groupId>
  <artifactId>nuxeo-core-io</artifactId>
  <type>test-jar</type>
  <scope>test</scope>
</dependency>
```

{{/panel}}

### Testing a Simple Marshaller

Let's test the following marshaller:

{{#> panel type='code' heading='Product Java-to-JSON marshaller'}}

```java
@Setup(mode = Instantiations.SINGLETON, priority = Priorities.REFERENCE)
public class ProductJsonWriter extends AbstractJsonWriter<Product> {
    public void write(Product product, JsonGenerator jg) throws IOException {
        jg.writeStartObject();
        jg.writeNumberField("ref", product.getReference());
        jg.writeStringField("desc", product.getDescription());
        jg.writeEndObject();
    }
}
```

{{/panel}}

The test looks like:

{{#> panel type='code' heading='ProductJsonWriter test'}}

```java
public class ProductJsonWriterTest extends AbstractJsonWriterTest.Local<ProductJsonWriter, Product> {

    public ProductJsonWriterTest() {
        super(ProductJsonWriter.class, Product.class);
    }

    @Test
    public void test() throws Exception {
        Product product = new Product(123, "a description");
        JsonAssert json = jsonAssert(product);
        json.isObject().properties(2);
        json.has("ref").isEquals(product.getReference());
        json.has("desc").isEquals(product.getDescription());
    }

}
```

{{/panel}}

Each line makes an assertion on the provided JSON. Each assertion returns either the current JsonAssert (`json.isObject().properties(2)`) or a new JsonAssert based on the referenced data (`json.**has("reference")**.isEquals(product.getReference())`).

If your marshaller uses other marshallers, don't forget to load the corresponding contribution using `@Deploy` or `@LocalDeploy`.

### Testing an Enricher

If you wrote an enricher for DocumentModel, the tested object should be DocumentModel. In that case, don't forget to load the contribution which contains your enricher registering.

```java
public class SomeEnricherTest extends AbstractJsonWriterTest.Local<DocumentModelJsonWriter, DocumentModel> {

    public ProductJsonWriterTest() {
        super(DocumentModelJsonWriter.class, DocumentModel.class);
    }

    @Test
    public void test() throws Exception {
        DocumentModel doc = ...;
        RenderingContext ctx = CtxBuilder.enrichDoc("someEnricher").get();
        JsonAssert json = jsonAssert(doc, ctx);
        json = json.has("contextParameters.someEnricher");
        // make assertion on the enricher here
    }

}
```

### Testing Any JSON Data

You can also use `JsonAssert` to test the result of your services.

```java
public class SomeJsonTest {

    @Test
    public void test() throws Exception {
        String jsonString = ...; // get JSON from somewhere
        JsonAssert json = JsonAssert.on(jsonString);
        // make assertion on the json here
    }

}
```

### Tips and Tricks

#### Getting the JSON

`JsonAssert` provides the ability to get the json at any level.

{{#> panel type='code' heading='JSON to test'}}

```js
{
  "field1": { "field2": "hi!" },
  "field3": "hello"
}
```

{{/panel}}

```java
JsonAssert json = ...;
System.out.println( json.toString() );
// will print the whole JSON
System.out.println( json.has("field1.field2").toString() );
// will print "hi!" - be careful, the quotes are keeped, that's the real JSON
```

#### Quickly Testing Deep Data

`JsonAssert` provides the ability to use JSON path.

{{#> panel type='code' heading='JSON to test'}}

```js
{
  "field1": {
    "field2": [ {
        "field3": "myDataShouldBeHere"
    } ]
  }
}
```

{{/panel}}

```java
json.has("field1.field2[0].field3").isEquals("myDataShouldBeHere");
```

#### Quickly Testing Array Values

`JsonAssert` provides the ability to test array values.

{{#> panel type='code' heading='JSON to test'}}

```js
{
  "field1": [ "A should be here", "B should be here", "C should be here twice", "C should be here twice" ]
}
```

{{/panel}}

```java
json.has("field1").contains("A should be here", "B should be here", "C should be here twice", "C should be here twice");
```

#### Quickly Testing Complex Structure

`JsonAssert` provides the ability to test the value of a field for multiple object in an array.

{{#> panel type='code' heading='JSON to test'}}

```js
{
  "field1": [
    { "field2": "A is here" },
    { "field2": "B is here twice" },
    { "field2": "B is here twice" }
  ]
}
```

{{/panel}}

```java
json.childrenContains("field1.field2", "A is here", "B is here twice", "B is here twice");
```

`JsonAssert.childrenContains` can cross over multiple arrays and objects.

targetDocuments
