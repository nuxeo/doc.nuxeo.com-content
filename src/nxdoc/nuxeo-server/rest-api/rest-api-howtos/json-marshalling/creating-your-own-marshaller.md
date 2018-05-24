---
title: Creating Your Own Marshaller
review:
    comment: ''
    date: '2017-12-11'
    status: ok
labels:
    - content-review-lts2016
    - rest-api
    - troger
    - json
    - marshalling
    - lts2017-ok
toc: true
tree_item_index: 300

---

The marshalling service allows you to create JSON-to-Java and Java-to-JSON marshallers.&nbsp;To create a marshaller, you have to write a Java class that manages the marshalling and registers it using a contribution.

Let's suppose we'd like to create marshallers for the following Java object:

```java
 public class Product {

    private String reference;
    public int getReference() { return reference; }
    public void setReference(int reference) { this.reference = reference; }

    private String description;
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

}
```

### Creating a Java-to-JSON Marshaller

A Java-to-JSON marshaller must implement the&nbsp;`org.nuxeo.ecm.core.io.registry.Writer<EntityType>` class. It must have a&nbsp;`@Setup` annotation to register it as a marshaller and a `@Supports` annotation to specify the supported mimetype (JSON in our example).&nbsp;The `Product` class is a POJO, we can either use Jackson POJO marshalling capabilities or create a custom JSON marshalling.

{{#> panel type='code' heading='Jackson POJO'}}

```java
 @Setup(mode = Instantiations.SINGLETON, priority = Priorities.REFERENCE)
public class ProductJsonWriter extends AbstractJsonWriter<Product> {
    public void write(Product product, JsonGenerator jg) throws IOException {
        jg.writeObject(product);
    }
}
```

{{/panel}}{{#> panel type='code' heading='Custom JSON'}}

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

*   The `@Setup` annotation is here to define our object as a marshaller.
*   The `mode = Instanciations.SINGLETON`&nbsp;parameter defines that the marshaller must be instanciated once.
*   The `priority = Priorities.REFERENCE`&nbsp;parameter defines it as the default one for the Product class.
*   The&nbsp;`AbstractJsonWriter` super-class is the Java-to-JSON Marshaller's base class (it has the `@Supports("application/json")` annotation).&nbsp;It helps to write the marshaller and to reuse the existing JSON marshalling.

### Creating a JSON-to-Java Marshaller

A JSON-to-Java marshaller must implement the&nbsp;`org.nuxeo.ecm.core.io.registry.Reader<EntityType>` class. It must have a&nbsp;`@Setup` annotation to register it as a marshaller and a `@Supports` annotation to specify the supported mimetype (JSON in our example).&nbsp;The Product class is a POJO, we can either use Jackson POJO marshalling capabilities or create a custom JSON marshalling.

{{#> panel type='code' heading='Jackson POJO'}}

```java
@Setup(mode = Instantiations.SINGLETON, priority = Priorities.REFERENCE)
public class ProductJsonReader extends AbstractJsonReader<Product> {
    public Product read(JsonNode jn) throws IOException {
        return new ObjectMapper().readValue(jn, Product.class);
    }
}
```

{{/panel}}{{#> panel type='code' heading='Custom JSON'}}

```java
@Setup(mode = Instantiations.SINGLETON, priority = Priorities.REFERENCE)
public class ProductJsonReader extends AbstractJsonReader<Product> {
    public Product read(JsonNode jn) throws IOException {
        Product product = new Product();
        product.setReference(jn.get("reference").getIntValue());
        product.setDescription(jn.get("description").getTextValue());
        return product;
    }
}
```

{{/panel}}

&nbsp;

*   The `@Setup` annotation is here to define our object as a marshaller.
*   The `mode = Instanciations.SINGLETON` parameter defines that the marshaller must be instanciated once.
*   The `priority = Priorities.REFERENCE` parameter defines it as the default one for the `Product` class.
*   The `AbstractJsonReader` super-class is the JSON-to-Java Marshaller's base class (it has the `@Supports("application/json")` annotation). It helps to write the marshaller and to reuse the existing JSON marshalling.

Each marshaller supports injection of the `RenderingContext` or any Nuxeo service using the `@java.inject.Inject` annotation. The injected objects are inherited while extending an existing class. The `AbstractJsonWriter` and the `AbstractJsonReader` provide the RenderingContext ("ctx" attribute) and the `MarshallingRegistry` ("registry" attribute).

### Managing Lists

The Nuxeo Platform provides built-in abstract classes to manage lists.

{{#> panel type='code' heading='Java-to-JSON'}}

```
@Setup(mode = Instantiations.SINGLETON, priority = Priorities.REFERENCE)
public class ProductListJsonWriter extends DefaultListJsonWriter<Product> {
    public ProductListJsonWriter() {
        super("products", Product.class);
    }
}
```

{{/panel}}{{#> panel type='code' heading='JSON-to-Java'}}

```
@Setup(mode = Instantiations.SINGLETON, priority = Priorities.REFERENCE)
public class ProductListJsonReader extends DefaultListJsonReader<Product> {
    public ProductListJsonReader() {
        super("products", Product.class);
    }
}
```

{{/panel}}

### Registering Your Marshallers

The marshalling service provides an extension point : [`org.nuxeo.ecm.core.io.MarshallerRegistry/marshallers`](http://explorer.nuxeo.com/nuxeo/site/distribution/latest/viewExtensionPoint/org.nuxeo.ecm.core.io.MarshallerRegistry--marshallers) . It allows to add new marshallers, override existing ones or unregister some.

{{#> panel type='code' heading='marshallers-contrib.xml'}}

```xml
<?xml version="1.0"?>
<component name="org.nuxeo.example.marshallers" version="1.0.0">
  <extension target="org.nuxeo.ecm.core.io.MarshallerRegistry" point="marshallers">
    <register class="org.nuxeo.example.ProductJsonWriter" enable="true" />
    <register class="org.nuxeo.example.ProductJsonReader" enable="true" />
    <register class="org.nuxeo.example.ProductListJsonWriter" enable="true" />
    <register class="org.nuxeo.example.ProductListJsonReader" enable="true" />
  </extension>
</component>
```

{{/panel}}

### Using Your Marshallers

*   From a JAX-RS endpoint

    1.  Make sure your WebEngine application provides the nuxeo-core-io marshalling.

        If it extends automation server or REST API v1, it's ok.

        Otherwise, you have to register a single JAX-RS object in your application.

        ```java
        public class ProductApplication extends WebEngineModule {
            public Set<Object> getSingletons() {
                return Sets.newHashSet(new JsonCoreIODelegate());
            }
        }
        ```

    2.  From your REST endpoints, just consume or return Product as usual.

        {{#> panel type='code' heading='Using marshallers'}}

        ```java
        @GET
        @Produces(MediaType.APPLICATION_JSON)
        public Product doGet() {
            Product product;
            // get the product
            return product;
        }

        @POST
        @Consumes(MediaType.APPLICATION_JSON)
        public Response doPost(Product product) {
            // do something with the product
            return Response.ok().build();
        }
        ```

        {{/panel}}
*   Outside JAX-RS

    You can use the Nuxeo Platform marshalling service outside the web context. The simplest way is to use `org.nuxeo.ecm.core.io.registry.MarshallerHelper`.

    {{#> panel type='code' heading='MarshallerHelper - Java-to-JSON'}}

    ```java
    Product product = ...;
    String json = MarshallerHelper.objectToJson(product, CtxBuilder.get());
    ```

    {{/panel}}

    The `MarshallerHelper` class is a helper to use the `MarshallingRegistry` service. This service provides multiple ways to get marshallers depending on your needs.

    {{#> panel type='code' heading='MarshallingRegistry - Java-to-JSON'}}

    ```java
    Product product = ...;
    OutputStream target = ...;

    MarshallerRegistry registry = Framework.getService(MarshallerRegistry.class);

    // get the most priorized JSON Writer for Product
    Writer<Product> writer = registry.getWriter(CtxBuilder.get(), Product.class, MediaType.APPLICATION_JSON_TYPE);
    writer.write(object, Product.class, Product.class, APPLICATION_JSON_TYPE, target);

    // get a specific JSON Writer instance
    ProductJsonWriter writer = registry.getInstance(CtxBuilder.get(), ProductJsonWriter.class);
    writer.write(object, Product.class, Product.class, APPLICATION_JSON_TYPE, target);

    // get the most priorized JSON Writer for Product
    // associated with the given context and available for use in multiple threads (usefull for use in listeners or schedulers)
    Writer<Product> writer = registry.getUniqueWriter(CtxBuilder.get(), Product.class, Product.class, MediaType.APPLICATION_JSON_TYPE);
    writer.write(object, Product.class, Product.class, APPLICATION_JSON_TYPE, target);

    // get a specific JSON Writer instance
    // associated with the given context and available for use in multiple threads (usefull for use in listeners or schedulers)
    ProductJsonWriter writer = registry.getUniqueInstance(CtxBuilder.get(), ProductJsonWriter.class);
    writer.write(object, Product.class, Product.class, APPLICATION_JSON_TYPE, target);

    // advanced use for Java class based on generic type
    List<Product> products = ...;
    // use TypeUtils from commons-lang3 to get the generic type
    Type productListType = TypeUtils.parametrize(List.class, Product.class)
    Writer<List<Product>> writer = registry.getWriter(CtxBuilder.get(), List.class, productListType, MediaType.APPLICATION_JSON_TYPE);
    writer.write(object, List.class, productListType, APPLICATION_JSON_TYPE, target);
    ```

    {{/panel}}
*   From another marshaller: The easiest way to do that is to extends `AbstractJsonWriter` or `AbstractJsonReader`.

    {{#> panel type='code' heading='Java-to-JSON Aggregation'}}

    ```java
    @Setup(mode = Instantiations.SINGLETON, priority = Priorities.REFERENCE)
    public class AnObjectJsonWriter extends AbstractJsonWriter<AnObject> {
        public void write(AnObject anObject, JsonGenerator jg) throws IOException {
            jg.writeStartObject();
            jg.writeStringField("someField", anObject.getSomeField());

            Product product = anObject.getProduct();

            // this will generates the product json using the provided Java-to-JSON marshaller
            writeEntityField("product", product, jg);
            // same things with 2 calls
            jg.writeFieldName("product");
            writeEntity(product, jg);

            // or even, use the inherited "registry" attribute to get your marshaller and do what you want

            jg.writeEndObject();
        }
    }
    ```

    {{/panel}}
