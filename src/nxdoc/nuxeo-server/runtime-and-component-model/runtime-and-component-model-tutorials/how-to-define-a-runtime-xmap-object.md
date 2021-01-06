---
title: 'HOWTO: Define a Runtime XMap Object'
description: 'Learn how to annotate a POJO class as a Runtime Contribution'
review:
  comment: ''
  date: '2020-12-02'
  status: ok
toc: true
tree_item_index: 700
---

{{#> callout type='info'}}
Watch the related courses on Nuxeo University:</br>
[Course on Handling Service Extension Points](https://university.nuxeo.com/learn/public/course/view/elearning/70/HandlingServiceExtensionPoints)
![]({{file name='university-extension-points.png' page='university'}} ?w=300,border=true)
{{/callout}}

## {{> anchor 'defining-descriptor'}}Defining the Descriptor

Runtime contributions follow a XML format defined by a Java POJO, sometimes referred to as a "descriptor".
This Java class is referenced on the extension point declaration, using specific Java annotations that will allow performing deserialization when parsing XML contributions.

Here is a sample XML fragment to be resolved:

```
<sample id="myid">
  <title>My title</title>
  <order>5</order>
  <displayed>true</displayed>
</sample>
```

If this fragment should be contributed to the extension point name `myPoint` for component
`org.mycompany.myproject.MyService`, the extension point declaration will need to reference a Java class using the `<object>` element:

```
<?xml version="1.0"?>
<component name="org.mycompany.myproject.MyService">
  <!-- previous configuration here... -->

  <extension-point name="myPoint">
    <documentation>
      This extension point can be documented here. HTML tags are accepted.
    </documentation>
    <object class="org.mycompany.myproject.api.SampleDescriptor" />
  </extension-point>

</component>
```

The corresponding class needs to be annotated with the `@XObject` annotation. Additional `@XNode` annotations are needed to specify node or attribute retrieval.

Here is the sample annotated class for the given XML format:

```
package org.mycompany.myproject.api;

@XObject("sample")
@XRegistry
public class SampleDescriptor {

    @XNode("@id")
    @XRegistryId
    protected String id;

    @XNode("title")
    protected String title;

    @XNode("order")
    protected Integer order;

    @XNode("displayed")
    protected Boolean displayed;

}
```

Note the usage of the `@` character for the `id` attribute retrieval, compared to the `title` node content retrieval.

Java reflection is used to convert the value to the desired type.
Specific factories can also be added to the XMap resolution class for custom conversions.

Here is a reference of supported built-in types:
- String
- Integer
- Long
- Double
- Float
- Boolean
- Date
- File
- URL
- Duration
- Enum

Note that primitive types can also be used (boolean instead of Boolean for instance) but a default value will automatically be resolved in that case, and it will not be possible to check whether the XML held the corresponding mapping or not.

The `@Node` also accepts additional configuration to define a fallback (another element or attribute in the XML) for a field retrieval:

```
@XObject("sample")
@XRegistry
public class SampleDescriptor {

    // [...]

    @XNode(value = "title", fallback = "label", defaultAssignment = "No title")
    protected String title;

}
```

Using the fallback feature is useful to seamlessly rename an attribute.

```
<sample id="myid">
  <title>My label</title>
</sample>
```

Above definition will be equivalent to this "old-style" definition:
```
<sample id="myid">
  <label>My label</label>
</sample>
```

The `@Node` also accepts a default assignment. Here a default title will be the title field if it is not present in the XML definition:

```
@XObject("sample")
@XRegistry
public class SampleDescriptor {

    // [...]

    @XNode(value = "title", fallback = "label", defaultAssignment = "No title")
    protected String title;

}
```

The default assignement should be a string, but a conversion is applied when handling other field types like integers or booleans.


More complex structure like lists and maps are also supported:

```
<sample id="myid">
  <display>
    <on>MyDisplay1</on>
    <on>MyDisplay2</on>
  </display>
  <properties>
    <property name="MyPropName1">MyPropValue1</property>
    <property name="MyPropName2">MyPropValue2</property>
  </properties>
</sample>
```

These can be mapped using the `XNodeMap` and `XNodeList` annotations:

```
@XObject("sample")
@XRegistry
public class SampleDescriptor {

    // ...

    @XNodeList(value = "display/on", type = ArrayList.class, componentType = String.class)
    protected List<String> displays; // will resolve to ["MyDisplay1", "MyDisplay2"]

    @XNodeMap(value = "properties/property", key = "@name", type = HashMap.class, componentType = String.class)
    protected Map<String, String> properties; // will resolve to {"MyPropName1": "MyPropValue1", "MyPropName2": "MyPropValue2"}

    @XNodeList(value = "properties/property@name", type = ArrayList.class, componentType = String.class)
    protected List<String> propertyKeys; // will resolve to ["MyPropName1", "MyPropName2"]

}
```

Note that the resulting lists and maps will not be null by default, unless the annotation attribute `nullByDefault` is set to `true`.

It is also possible to define sub objects, also annotated, to be referenced within the original object.
Here is a sample map of annotated objects:

```
@XObject("sample")
@XRegistry
public class SampleDescriptor {

    // ...

    @XNodeMap(value = "persons/person", key = "firstName", type = HashMap.class, componentType = Name.class)
    protected Map<String, Name> persons;

}
```

```
@XObject
public class Name {

    @XNode("firstName")
    protected String firstName;

    @XNode("lastName")
    protected String lastName;

}
```

This will resolve the corresponding sample format:

```
<sample id="myid">
  <persons>
    <person>
      <firstName>First Name 1</firstName>
      <lastName>Last Name 1</lastName>
    </person>
    <person>
      <firstName>First Name 2</firstName>
      <lastName>Last Name 2</lastName>
    </person>
  </persons>
</sample>
```

Another kind of annotation can also be used to join several attributes into one, `@XNodes`. Here is a sample usage:

```
@XObject("sample")
@XRegistry
public class SampleDescriptor {

    @XNode("@id")
    @XRegistryId
    protected String id;

    @XNodes(values = { "@id", "@type" }, separator = "/")
    String combinedString;

}
```

With this definition, the `combinedString` field on the resulting descriptor instance will resolve to `myid/mytype` for the following contribution:

```
<sample id="myid" type="mytype">
  <title>My title</title>
</sample>
```

Such a field can also be declared as a registry identifier by adding the `@XRegistryId` annotation on the same field:

```
@XObject("sample")
@XRegistry
public class SampleDescriptor {

    @XNodes(values = { "@id", "@type" }, separator = "/")
    @XRegistryId
    String combinedString;

}
```


## {{> anchor 'defining-registry'}}Defining the Registry

### Common Usage

The registry for a descriptor class is built automatically when adding the `@XRegistry` annotation next to the `@XObject` annotation:

```
@XObject("sample")
@XRegistry
public class SampleDescriptor {

   // ...

}
```

If multiple contributions to the registry are expected, the `@XRegistryId` annotation can be used to indicate what element or attribute, in the XML definition, will hold that unique identifier for the contribution:

```
@XObject("sample")
@XRegistry
@XRegistryId("@id")
public class SampleDescriptor {

   // ...

}
```

In the above definition, the id attribute is specified as holding the identifier and placed on the class, but the annotation value could be omitted at it is the default value for this annotation.

When the `@XRegistryId` annotation is used on a field, its value will be ignored and taken on the `@XNode` annotation instead:

```
@XObject("sample")
@XRegistry
public class SampleDescriptor {

    @XNode("@id")
    @XRegistryId
    protected String id;

   // ...

}
```

When the `@XRegistry` annotation is present, an instance of `org.nuxeo.common.xmap.registry.MapRegistry` will be created to receive the contributions.
They will then be available to the component declaring the extension point using the following helper API:

```
public class MyComponent extends DefaultComponent {

    protected static final XP_NAME = "myPoint";

    @Override
    public void myServiceMethod() {
        // retrieve the registry
        MapRegistry myPointRegistry = getExtensionPointRegistry(XP_NAME);
        List<SampleDescriptor> descriptors = myPointRegistry.getContributionValues();
        // or use other helper method
        // List<SampleDescriptor> descriptors = getRegistryContributions(XP_NAME);

        // implement custom logic here
    }

}
```

When the `@XRegistryId` annotation is omitted, an instance of `org.nuxeo.common.xmap.registry.SingleRegistry` will be created to receive the contributions.
They will then be available to the component declaring the extension point using the following helper API:

```
public class MyComponent extends DefaultComponent {

    protected static final XP_NAME = "myPoint";

    @Override
    public void myServiceMethod() {
        // retrieve the registry
        SingleRegistry myPointRegistry = getExtensionPointRegistry(XP_NAME);
        Optional<SampleDescriptor> descriptor = myPointRegistry.getContribution();
        // or use other helper method
        // Optional<SampleDescriptor> descriptor = getRegistryContribution(XP_NAME);

        // implement custom logic here
    }

}
```

It is also possible to retrieve a registry outside of the component declaring the related extension point, by using the `ComponentManager` API:

```
MapRegistry sampleReg = Framework.getRuntime()
                                 .getComponentManager()
                                 .getExtensionPointRegistry("org.mycompany.myproject.MyService", "myPoint")
                                 .orElseThrow(() -> new IllegalArgumentException("Missing myPoint"));
```

Using these registries will allow benefitting from default merge, enablement and removal features, as the boolean attributes `merge`, `enable` and `remove` will be handled automatically when resolving contributions:

If a sample contribution with id "myid" was previously resolved on the target extension point, the following contributions will result in the following behavior:

1. The final sample contribution will hold all previous configuration, as well as the updated title value:
```
<sample id="myid" merge="true">
  <title>My updated title</title>
</sample>
```
1. The final sample contribution will not hold previous configuration and will be completely re-defined:
```
<sample id="myid" merge="false">
  <title>My updated title</title>
  <order>10</order>
</sample>
```
1. The final sample contribution will be filtered from the registry API and a following re-enablement will show previous configuration:
```
<sample id="myid" enable="false" />
```
1. The final sample contribution will be removed from the registry API and a following re-definition will not show previous configuration:
```
<sample id="myid" remove="true" />
```

Removing a contribution and then re-defining it is equivalent to re-defining a contribution with `merge="false"`.

Similar behaviors are also implemented for registries handling a single final contribution.

### Advanced Usage

#### Lists and Maps

List and map fields are also merged by default according to the contribution merge behavior.
It is possible to define specific merge and removal behaviors on lists and maps content using the `@XMerge` and `@XRemove` annotation next to the `@XNodeList` or `@XNodeMap` annotation.
For instance, the following configuration will allow emptying explicitly the list of persons on merge, while merging the rest of the definition:

```
@XObject("sample")
@XRegistry
public class SampleDescriptor {

    // ...

    @XNodeMap(value = "persons/person", key = "firstName", type = HashMap.class, componentType = Name.class)
    @XMerge("persons@merge")
    @XRemove("persons@remove")
    protected Map<String, Name> persons;

}
```

The following XML syntax would then be used to empty the list and update the title:
```
<sample id="myid">
  <title>My updated title</title>
  <persons remove="true" />
</sample>
```

The following XML syntax would be used to re-define the list content and update the title:
```
<sample id="myid">
  <title>My updated title</title>
  <persons merge="false">
    <person>
      <firstName>New First Name 1</firstName>
      <lastName>New Last Name 1</lastName>
    </person>
    <person>
      <firstName>New First Name 2</firstName>
      <lastName>New Last Name 2</lastName>
    </person>
  </persons>
</sample>
```

#### Custom Registries

If the default registries provided are not enough to control the contributions resolution and retrieval, custom registries can also be defined on the extension point. This can be useful when declaring multiple descriptor classes to the same extension point, for instance.

The registry class can be declared on the extension point:
```
<?xml version="1.0"?>
<component name="org.mycompany.myproject.MyService">
  <!-- previous configuration here... -->

  <extension-point name="myPoint">
    <documentation>
      This extension point can be documented here. HTML tags are accepted.
    </documentation>
    <object class="org.mycompany.myproject.api.SampleDescriptor" />
    <registry class="org.mycompany.myproject.api.SampleDescriptorRegistry" />
  </extension-point>

</component>
```

It is recommended to extend existing registry implementations, or at least the `org.nuxeo.common.xmap.registry.AbstractRegistry` class:

```
package org.mycompany.myproject.api;

public class SampleDescriptorRegistry extends AbstractRegistry {

    @Override
    protected void register(Context ctx, XAnnotatedObject xObject, Element element) {
      // custom logic
    }

}
```

#### Custom Merge, Enablement and Removal

When migrating previous descriptors that implemented different behaviors, there is a number of options available.

Disabling default behavior can be achieved with the `@XRegistry` annotation:

```
@XObject("sample")
@XRegistry(merge = false, remove = false, enable = false)
public class SampleDescriptor {

}
```

Disabling the default behavior is not recommended, but is also necessary when re-defining custom behaviors thanks to `@XMerge`, `@XEnable` or `@XRemove` field annotations. Here is an example for compatibility management for the enablement behavior:

```
@XObject("sample")
@XRegistry(enable = false)
public class SampleDescriptor {

    @XNode("@id")
    @XRegistryId
    protected String id;

    @XNode(value = XEnable.ENABLE, fallback = "@isEnabled")
    @XEnable
    protected boolean isEnabled = true;

}
```

The default enablement behavior has been disabled in the `@XRegistry` annotation so that the custom enablement behavior is taken into account. It consists of mapping the existing `isEnabled` attribute so that it is taken into account, as well as the "fallback" default behavior linked to the `enable` attribute.

Both following contributions will result in standard enablement behavior when re-defining the contribution:

```
<sample id="myid" isEnabled="false" />
```
```
<sample id="myid" enable="false" />
```

If additional logic is needed, declaring a custom registry as described above will help achieving any custom behavior.
