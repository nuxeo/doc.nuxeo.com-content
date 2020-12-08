---
title: 'HOWTO: Define a Runtime XMap Object'
description: 'Learn how to annotate a POJO class as a Runtime Contribution'
review:
  comment: ''
  date: '2020-12-02'
  status: ok
tree_item_index: 700
---

{{#> callout type='info'}}
Watch the related courses on Nuxeo University:</br>
[Course on Handling Service Extension Points](https://university.nuxeo.com/learn/public/course/view/elearning/70/HandlingServiceExtensionPoints)
![]({{file name='university-extension-points.png' page='university'}} ?w=300,border=true)
{{/callout}}

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
public class SampleDescriptor {

    @XNode("@id")
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

Note that primitive types can also be used (boolean instead of Boolean for instance) but a default value will automatically be resolved in that case, and it will not be possible to check whether the XML held the corresponding mapping or not (and this can be important for contribution merging logics).

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
package org.mycompany.myproject.api;

@XObject("sample")
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

Note that the resulting lists and maps will not be null by default, unless the annotation attribute "nullByDefault" is set to "true".

It is also possible to define sub objects, also annotated, to be referenced within the original object.
Here is a sample map of annotated objects:

```
package org.mycompany.myproject.api;

@XObject("sample")
public class SampleDescriptor {

    // ...

    @XNodeMap(value = "persons/person", key = "firstName", type = HashMap.class, componentType = Name.class)
    protected Map<String, Name> persons;

}
```

```
package org.mycompany.myproject.api;

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

If you'd like to properly handle hot-reload on the target component, or handle merging of descriptors, it can be useful to make the descriptor implement the `org.nuxeo.runtime.model.Descriptor` interface, that comes with needed `#getId` and `#merge` methods.

The string marker `Descriptor#UNIQUE_DESCRIPTOR_ID` can be used as an id, when handling only one single instance of the contribution on the component, instead of multiple contributions (to hold simple configuration for instance).
