---
title: How to Customize Document Validation
review:
    comment: ''
    date: '2016-12-06'
    status: ok
details:
    howto:
        excerpt: Leans how to customize the document validation error messages and how to add new references validation on document types.
        level: Advanced
        tool: Code Editor
        topics: 'Document Type, Validation'
labels:
    - lts2016-ok
    - howto
    - schema-component
    - fguillaume
    - content-review-lts2017
toc: true
confluence:
    ajs-parent-page-id: '950287'
    ajs-parent-page-title: Content Repository
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: How+to+Customize+Document+Validation
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/How+to+Customize+Document+Validation'
    page_id: '23364524'
    shortlink: rINkAQ
    shortlink_source: 'https://doc.nuxeo.com/x/rINkAQ'
    source_link: /display/NXDOC/How+to+Customize+Document+Validation
tree_item_index: 1500
history:
    -
        author: Vladimir Pasquier
        date: '2015-10-29 20:23'
        message: ''
        version: '10'
    -
        author: Vladimir Pasquier
        date: '2015-10-29 20:23'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2015-10-20 08:07'
        message: Fix field name formatting and typos
        version: '8'
    -
        author: Nicolas Chapurlat
        date: '2015-10-19 09:23'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2015-01-12 17:07'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2015-01-12 11:11'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2015-01-12 11:10'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2015-01-12 11:10'
        message: ''
        version: '3'
    -
        author: Solen Guitter
        date: '2015-01-12 11:06'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2015-01-12 11:04'
        message: ''
        version: '1'

---
## Customizing Validation Error Messages

Sometimes, the default localized messages are not satisfying. Especially when using patterns.

1.  For example, if we get back to our previous email example:

    ```xml
    <xs:element name="email">
      <xs:simpleType>
        <xs:restriction base="xs:string">
          <xs:pattern value="[^@]+@[^\.]+\..+" />
        </xs:restriction>
      </xs:simpleType>
    </xs:element>
    ```

    The default constraint violation message will look like:

    ```
    This value must match the format "[^@]+@[^\.]+\..+".
    ```

    Which is true but not very useful. You can customize the message to generate for a specific field.

2.  For the schema named `userdata` and the field named `email`, add the following entry in your message bundle:

    ```
    label.schema.constraint.violation.PatternConstraint.userdata.email=The value is not a valid email.
    ```

3.  If you want to change the message for a field which is a child of a complex property, you have to specify the field full path:

    ```
    label.schema.constraint.violation.PatternConstraint.schemaUser.user.firstname=The firstname must contain several regular characters.
    ```

    Here, it's a custom message for the field `firstname` which is a sub-field of the `user` complex type in the schema `schemaUser`.

4.  If you want to change the message for a field which is a child of a list property, you have to specify the field full path - including the item's field name:

    ```
    label.schema.constraint.violation.PatternConstraint.schema.users.user.firstname=The firstname must contain several regular characters.
    ```

    Here, it's a custom message for the field&nbsp;`firstname` which is a sub-field of the&nbsp;`user` complex type - contained in the list&nbsp;`users` in the schema `schemaUser`.

    Most of the time, the item has no explicit name (no named type used in the XSD declaration). In that case, use `item`.

    ```
    label.schema.constraint.violation.PatternConstraint.schema.users.item.firstname=The firstname must contain several regular characters.
    ```

## Creating ObjectResolver Related to Your Business Objects

If you want to make references to your own business objects. you can write your own `ObjectResolver`. You will thereby be able to validate, that a value is a reference to an object and you'll be able to easily play with affected properties.

To create a custom `ObjectResolver`, you have to create a class implementing `org.nuxeo.ecm.core.schema.types.resolver.ObjectResolver` and register that class in a contribution to the component named `org.nuxeo.ecm.core.schema.ObjectResolverService`.

Let's suppose you want to make reference to `Product` objects provided by a `ProductService`.

1.  You have to create an `ObjectResolver`:

    ```java
    public class ProductResolver implements ObjectResolver {
        public void configure(Map<String, String> parameters) { /* no configuration needed */ }
        public String getName() {
            return "productResolver";
        }
        public Map<String, Serializable> getParameters() {
            return Collections.EMPTY_MAP;
        }
        public boolean validate(Object value) {
            return fetch(value) != null;
        }
        public Object fetch(Object value) {
            if (value instanceof String) {
                return Framework.getService(ProductService.class).findByReference((String) value);
            }
            return null;
        }
        public <T> T fetch(Class<T> type, Object value) {
            Object product = fetch(value);
            if (product != null && type.isInstance(product)) {
                return (T) product;
            }
            return null;
        }
        public Serializable getReference(Object object) {
            if (object != null && object instanceof Product) {
                return ((Product) object).getReference();
            }
            return null;
        }
        public String getConstraintErrorMessage(Object invalidValue, Locale locale) {
            return ObjectResolver.Helper.getConstraintErrorMessage(this, invalidValue, locale);
        }
    }
    ```

2.  Add a message to manage validation error:

    ```
    label.schema.constraint.violation.resolver.productResolver="{0}" is not a valid product reference.
    ```

3.  And register it in a Nuxeo contribution:

    ```xml
    <?xml version="1.0"?>
    <component name="org.nuxeo.ecm.core.DocumentModel.resolver">
      <documentation>
        Resolver for document properties containing reference to Product.
      </documentation>
      <extension target="org.nuxeo.ecm.core.schema.ObjectResolverService" point="resolvers">
        <resolver type="productResolver" class="com.mycompany.nuxeo.ProductResolver" />
      </extension>
    </component>
    ```

4.  You can now define your own custom fields:

    ```xml
    <xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema"
               xmlns:ref="http://www.nuxeo.org/ecm/schemas/core/external-references/"
               xmlns:nxs="http://www.nuxeo.org/ecm/schemas/example"
               targetNamespace="http://www.nuxeo.org/ecm/schemas/example">
      <xs:element name="productReference">
        <xs:simpleType>
          <xs:restriction base="xs:string" ref:resolver="productResolver" />
        </xs:simpleType>
      </xs:element>
    </xs:schema>
    ```

    Validation will be activated. It will check if referenced Product exists.

5.  You'll be able to play with the Product class directly on the DocumentModel:

    ```java
    // get a referenced product
    Product product = document.getObjectResolver("pdt:productReference").fetch(Product.class);

    // set the product referenced
    Product product = ....;
    document.getProperty("pdt:productReference").getObjectResolver().setObject(product);
    ```

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related How-Tos'}}

- [How to Contribute to an Extension]({{page page='how-to-contribute-to-an-extension'}})
- [How-To Index]({{page page='how-to-index'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [Field Constraints and Validation]({{page page='field-constraints-and-validation'}})

{{/panel}}</div></div>
