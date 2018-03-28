---
title: 'Enriching, Extending and Overriding Existing Marshallers'
review:
    comment: ''
    date: '2017-12-12'
    status: ok
labels:
    - content-review-lts2016
    - rest-api
    - troger
    - json
    - marshalling
    - lts2017-ok
toc: true
tree_item_index: 200

---

The Nuxeo Platform provides a flexible JSON marshalling. But sometimes, you'd like to add information from your Information System to the existing JSON or even override it to match your end-user needs.

There may be different needs:

*   Add information related to the marshalled object: Try to use built-in parameters, or else create an enricher.

*   Add existing informations to the JSON: Try to use built-in parameters, or else extend the existing marshaller.
*   Change the existing JSON: Override the existing marshaller.

### Enriching an Existing Marshaller

The enrichment mechanism is only enabled for the existing marshallers which extend [`ExtensibleEntityJsonWriter`](http://community.nuxeo.com/api/nuxeo/7.2/javadoc/org/nuxeo/ecm/core/io/marshallers/json/class-use/ExtensibleEntityJsonWriter.html) . That means, almost all of them support enrichment.

An enrichable JSON object provides a `contextParameters` field which contains all contributions. An enricher is activated if its name is specified in the parameters (for example: `enrichers.document=breadcrumb,children`). The enricher must write 0, 1 or many key-value in the current JsonGenerator and must let the JsonGenerator in the same state it got it.

{{#> panel type='code' heading='Enrichment\'s destination'}}

```js
{
    ... // the existing generated object
    contextParameters: {  // only present if at least one enricher is activated
        "theFirstEnricherKey": "theFirstEnricherValue",
        "theSecondEnricherKey": { ... },
        "theThirdEnricherKey-Entry1": { ... },
        "theThirdEnricherKey-Entry2": { ... }
    }
}
```

{{/panel}}

Let's take the `breadcrumb` enricher as an example. It contributes to the generated JSON for a document and adds all of the parent documents.

{{#> panel type='code' heading='ChildrenJsonEnricher'}}

```java
@Setup(mode = Instantiations.SINGLETON, priority = Priorities.REFERENCE)
public class BreadcrumbJsonEnricher extends AbstractJsonEnricher<DocumentModel> { // <= enrich DocumentModel Java type
    public BreadcrumbJsonEnricher() {
        super("breadcrumb"); // <= is activated if "children" is in "enrichers.document" parameter's values
    }
    public void write(JsonGenerator jg, DocumentModel document) throws IOException {
        List<DocumentModel> parentDocuments = null;
        try (SessionWrapper wrapper = ctx.getSession(document)) {
            parentDocuments = wrapper.getSession().getParentDocuments(document.getRef());
        }
        jg.writeFieldName("breadcrumb"); // <= write "breadcrumb" as key
        writeEntity(documentList, jg); // delegates the parent documents marshalling to Nuxeo
    }
}
```

{{/panel}}

Of course, like any JSON marshaller, you have to register it.

{{#> panel type='code' heading='marshallers-contrib.xml'}}

```xml
<?xml version="1.0"?>
<component name="org.nuxeo.example.marshallers" version="1.0.0">
    <extension target="org.nuxeo.ecm.core.io.MarshallerRegistry" point="marshallers">
        <register class="org.nuxeo.example.BreadcrumbJsonEnricher" enable="true" />
    </extension>
</component>
```

{{/panel}}

That's all, you can now use it!

{{#> panel type='code' heading='Curl calls'}}

```bash
$ curl -X GET 'http://localhost:8080/nuxeo/site/api/v1/path/to/my/document?enrichers.document=breadcrumb'
```

{{/panel}}

All existing endpoints which return a DocumentModel will handle the registered enricher.

### Extending an Existing JSON Marshaller

If you want to add information at the root level of the existing JSON (not in a `contextParameters` sub object), you can extend an existing marshaller.

The extending mechanism is only enabled for the existing marshallers which extend [`ExtensibleEntityJsonWriter`](http://community.nuxeo.com/api/nuxeo/7.2/javadoc/org/nuxeo/ecm/core/io/marshallers/json/class-use/ExtensibleEntityJsonWriter.html) . That means, almost all of them support it.

{{#> callout type='note' }}

That could be dangerous if you use some JSON attributes which name already exists is the inherited JSON. Double check it!

{{/callout}}

Let's take an example with the DocumentModel. The current marshaller class for DocumentModel is `DocumentModelJsonWriter`.

{{#> panel type='code' heading='Extended marshaller'}}

```java
@Setup(mode = Instantiations.SINGLETON, priority = Priorities.OVERRIDE_REFERENCE) // <= an higher priority is used
public class MyCustomDocumentModelJsonWriter extends DocumentModelJsonWriter { // <= override the class
    protected void extend(DocumentModel document, JsonGenerator jg) throws IOException { // <= just implement the inherited extend method
        super.extend(document, jg); // optionnal
        jg.writeStringField("additional", "information"); // feel free to write anything
    }
}
```

{{/panel}}

Don't forget to register the marshaller. The resulting object will contain the whole existing JSON with your additional data.

All existing endpoints which return a DocumentModel will return the extended JSON.

### Overriding an Existing JSON Marshaller

In this case, you want to completely rewrite an existing JSON.

{{#> callout type='note' }}

Be careful with this approach, the marshallers provided by Nuxeo are used in many provided tools and screens. If you change it, you may break some existing components.

{{/callout}}{{#> panel type='code' heading='Custom marshaller'}}

```java
@Setup(mode = Instantiations.SINGLETON, priority = Priorities.OVERRIDE_REFERENCE) // <= an higher priority is used
public class MyCustomDocumentModelJsonWriter extends AbstractJsonWriter<DocumentModel> {
    public void write(DocumentModel document, JsonGenerator jg) throws IOException {
        // generate what you want
    }
}
```

{{/panel}}
