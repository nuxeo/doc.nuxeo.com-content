---
title: 'HOWTO: Create a Service'
description: 'Learn how to create a service and define your own extension points'
review:
  comment: ''
  date: '2020-10-22'
  status: ok
details:
  howto:
    excerpt: 'Learn how to create a service and define your own extension points'
    level: Intermediate
    tool: 'Nuxeo CLI, Studio'
    topics: Extension point
toc: true
tree_item_index: 600
---

{{#> callout type='info'}}
Watch the related courses on Hyland University:</br>
[Course on Handling Service Extension Points](https://university.hyland.com/courses/e4150)
![]({{file name='university-extension-points.png' page='university'}} ?w=450,border=true)
{{/callout}}

## {{> anchor 'declaring-service'}}Declaring the Service

Declaring a component to define a service is similar to [declaring a component to contribute to an existing extension point]({{page page='how-to-contribute-to-an-extension-point'}}).

The first step is to create a dedicate XML file, named for instance, `myproject-service-framework.xml`:
```
<?xml version="1.0"?>
<component name="org.mycompany.myproject.MyService">

</component>
```

This file should be [declared in the bundle MANIFEST]({{page page='how-to-contribute-to-an-extension-point'}}#declare-bundle-contribution).

The second step is to create corresponding Java objects:
1.  Create a Java interface for this component service, `MyService.java`.
1.  Create a Java class for this component implementation, `MyComponent.java`, and make it extend
    `org.nuxeo.runtime.model.DefaultComponent`.

    ```
    package org.mycompany.myproject.api;

    public class MyComponent extends DefaultComponent implements MyService {

    }
    ```

    **NB:** Most of the time, it is convenient to make the component instance also implement the service interface, but this is not strictly necessary.</br>
    It is possible to separate concerns, especially if you'd like to define several services for this component: in this case, the service implementation will need to be kept as a field on the component instance, and returned by the `#getAdapter` method.</br>
    Keep in mind that a given component implementation (and corresponding service implementation) are singletons inside the Nuxeo application.
    ```
    package org.mycompany.myproject;

    public class MyComponent extends DefaultComponent {

        protected final MyService service = new MyServiceImpl();

        @Override
        public <T> T getAdapter(Class<T> adapter) {
            if (adapter.isAssignableFrom(MyService.class)) {
                return (T) this;
            }
            return null;
        }

    }
    ```

The service interface and the component implementation should then be referenced in the component declaration:
```
<?xml version="1.0"?>
<component name="org.mycompany.myproject.MyService">

  <documentation>
    This component can be documented here, HTML tags are accepted.
  </documentation>
  <implementation class="org.mycompany.myproject.MyComponent" />
  <service>
    <provide interface="org.mycompany.myproject.api.MyService" />
  </service>

</component>
```

Only one component implementation can be given here. But multiple `<provide>` elements can be added inside the `<service>` element: the logic inside the `#getAdapter` method just need to be changed to return the right Java object depending on the target interface:
```
<?xml version="1.0"?>
<component name="org.mycompany.myproject.MyService">

  <implementation class="org.mycompany.myproject.MyComponent" />
  <service>
    <provide interface="org.mycompany.myproject.api.MyService" />
    <provide interface="org.mycompany.myproject.api.MyOtherService" />
  </service>

</component>
```

with:
```
public class MyComponent extends DefaultComponent {

    protected final MyService service = new MyServiceImpl();

    protected final MyOtherService otherService = new MyOtherServiceImpl();

    @Override
    public <T> T getAdapter(Class<T> adapter) {
        if (adapter.isAssignableFrom(MyService.class)) {
            return (T) service;
        }
        if (adapter.isAssignableFrom(MyOtherService.class)) {
            return (T) otherService;
        }
        return null;
    }

}
```

or:
```
public class MyComponent extends DefaultComponent implements MyService {

    protected final MyOtherService otherService = new MyOtherServiceImpl();

    @Override
    public <T> T getAdapter(Class<T> adapter) {
        if (adapter.isAssignableFrom(MyService.class)) {
            return (T) this;
        }
        if (adapter.isAssignableFrom(MyOtherService.class)) {
            return (T) otherService;
        }
        return null;
    }

}
```

{{> anchor 'xmap-annotated-object'}}Now let's define an extension point for this component, to accept configurable objects, and maybe use them in the service API.

This involves [creating a XMap object]({{page page='how-to-define-a-runtime-xmap-object'}}), here is a sample:
```
package org.mycompany.myproject.api;

@XObject("sample")
@XRegistry
public class SampleDescriptor {

    @XNode("@id")
    @XRegistryId
    protected String id;

    @XNode("@class")
    protected String klass;

    @XNode("title")
    protected String title;

    @XNodeList(value = "display/on", type = ArrayList.class, componentType = String.class)
    protected List<String> displays;

    @XNodeMap(value = "properties/property", key = "@name", type = HashMap.class, componentType = String.class)
    protected Map<String, String> properties;

    // add convenient getters here

}
```

This will allow parsing a contribution with a format similar to:
```
<sample id="myId" class="org.mycompany.myproject.contrib.MySampleImpl">
  <title>My title</title>
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

This class needs to be referenced in the component declaration for the target extension point:
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

The `@XRegistry` annotation on this class will automatically create a [registry to handle contributions]({{page page='how-to-define-a-runtime-xmap-object'}}#defining-registry). If the `@XRegistryId` annotation is present, contributions will be identified by the corresponding String identifier field. Otherwise, the registry will assume that only one single contribution should be handled.

Default registries will handle merge, enablement, removal and hot-reload behaviors on contributions. Note that multiple descriptors can be defined on the same extension point, but a custom registry class will be needed in this case.

Now let's see how to access contributions in the Java code, and implement corresponding service logic.

When the component is started, all registries for their extension points are initialized: XML content is parsed and Java contributions can be retrieved thanks to helper methods:

```
public class MyComponent extends DefaultComponent {

    protected static final XP_NAME = "myPoint";

    @Override
    public void start(ComponentContext context) {
        super.start(context);
        List<SampleDescriptor> descriptors = getRegistryContributions(XP_NAME);
        // implement custom logic here
    }

}
```

Calls to this registry can also be done directly when implementing the component service API (assuming these methods are not called during deployment, when registries might not have registered all contributions yet):

```
public class MyComponent extends DefaultComponent implements MyService {

    protected static final XP_NAME = "myPoint";

    @Override
    public void myServiceMethod() {
        List<SampleDescriptor> descriptors = getRegistryContributions(XP_NAME);
        // implement custom logic here
    }

    @Override
    public void myServiceMethodWithParam(String id) {
        Optional<SampleDescriptor> descriptor = getRegistryContribution(XP_NAME, id);
        // implement custom logic here
    }

}
```

Existing API to retrieve contributions depends on the registry implementation, typically `org.nuxeo.common.xmap.registry.MapRegistry` for contributions declaring an identifier, and `org.nuxeo.common.xmap.registry.SingleRegistry` otherwise.

It is also possible to retrieve a registry outside of the component declaring the related extension point, by using the `ComponentManager` API:

```
MapRegistry sampleReg = Framework.getRuntime()
                                 .getComponentManager()
                                 .getExtensionPointRegistry("org.mycompany.myproject.MyService", "myPoint")
                                 .orElseThrow(() -> new IllegalArgumentException("Missing myPoint"));
```

At this point, the component is ready to receive contributions, and [corresponding unit tests]({{page space='corg' page='unit-testing'}}) can pass.

Here is a full sample contribution to the target extension point:
```
<?xml version="1.0"?>
<component name="org.mycompany.myproject.MyService.testContrib">
  <extension target="org.mycompany.myproject.MyService" point="myPoint">
    <sample id="myId" class="org.mycompany.myproject.contrib.MySampleImpl">
      <title>My title</title>
      <display>
        <on>MyDisplay1</on>
        <on>MyDisplay2</on>
      </display>
      <properties>
        <property name="MyPropName1">MyPropValue1</property>
        <property name="MyPropName2">MyPropValue2</property>
      </properties>
    </exporter>
    </extension>
</component>
```

## {{> anchor 'defining-properties'}}Defining Properties on the Service Component

Defining an extension point is not strictly necessary if you just want to expose a service and do not need configurable elements. If some simple elements need to be configurable, there are several options:
1.  Define a property on the service. Note that this property value **will not be able to be overridden** by another contribution, but it might be useful to keep that value in the XML component declaration:
    ```
    <?xml version="1.0"?>
    <component name="org.mycompany.myproject.MyService">

      <implementation class="org.mycompany.myproject.MyComponent" />
      <property name="myProp" value="myValue" />
      <!-- previous configuration here... -->

    </component>
    ```

    From the component code, that property can be retrieved from the Runtime context, when activating the component:
    ```
    public class MyComponent extends DefaultComponent {

        @Override
        public void activate(ComponentContext context) {
            String myPropValue = (String) context.getPropertyValue("myProp");
        }

    }
    ```
1.  Contribute a property to the default service `ConfigurationService`. This property can be defined alongside the component and service declarations. Note that this property value **will be able to be overridden** by another contribution, and will be able to be documented specifically:
    ```
    <?xml version="1.0"?>
    <component name="org.mycompany.myproject.MyService">

      <implementation class="org.mycompany.myproject.MyComponent" />
      <!-- previous configuration here... -->

      <extension target="org.nuxeo.runtime.ConfigurationService" point="configuration">
        <documentation>
          This configuration property can be documented here. HTML tags are accepted.
        </documentation>
        <property name="org.mycompany.myproject.myprop">myDefaultValue</property>
      </extension>

    </component>
    ```

    From the component code, that property can be retrieved from the Runtime framework, after starting the component, for instance (to make sure ConfigurationService is available):
    ```
    import org.nuxeo.runtime.services.config.ConfigurationService;

    public class MyComponent extends DefaultComponent {

        protected static final String MY_PROP_NAME = "org.mycompany.myproject.myprop";

        protected static final String DEFAULT_VALUE = "defaultValue";

        @Override
        public void start(ComponentContext context) {
            super.start(context);
            String myPropValue = Framework.getService(ConfigurationService.class).getString(MY_PROP_NAME, DEFAULT_VALUE);
        }

    }
    ```
    It can also be retrieved from other Java classes in the code, outside the component implementation.
1.  Yet another alternative is possible if this configuration property needs to be changed easily depending on the infrastructure, from `nuxeo.conf` properties or [Configuration Templates]({{page page='configuration-templates'}}):
    ```
    public class MyComponent extends DefaultComponent {

        protected static final String MY_PROP_NAME = "org.mycompany.myproject.myprop";

        protected static final String DEFAULT_VALUE = "defaultValue";

        @Override
        public void start(ComponentContext context) {
            super.start(context);
            String myPropValue = Framework.getProperty(MY_PROP_NAME, DEFAULT_VALUE);
        }

    }
    ```
1.  Last but not least, using the `ConfigurationService` and the Nuxeo property can be combined, by using a variable in the ConfigurationService contribution:
    ```
    <extension target="org.nuxeo.runtime.ConfigurationService" point="configuration">
      <property name="org.mycompany.myproject.myprop">
        ${org.mycompany.myproject.mypropFromNuxeoConf:=myDefaultValue}
      </property>
    </extension>
    ```
    Retrieving this property from the code can be done through the same previous lookup
    `Framework.getService(ConfigurationService.class).getString(MY_PROP_NAME, DEFAULT_VALUE)`: during the deployment, if the Nuxeo property `org.mycompany.myproject.mypropFromNuxeoConf` is defined in the `nuxeo.conf` or in configuration templates, this value will be used. </br>
    Otherwise, the default value (after the `:=` marker) will be resolved.

    Note that, using the same property name, a warning will be issued at startup, to avoid confusions, but the
    Nuxeo property value will still be taken into account.

## {{> anchor 'handling-dependencies'}}Handling Dependencies

Sometimes, a component or service will interact with another. The `Framework#getService` lookup will allow references from the Java code, but the [Deployment Flow]({{page page='understanding-bundles-deployment'}}) needs to be taken into account.

To make sure your component is **resolved** after another one, the `<require>` tag can be used in the component declaration:
```
  <?xml version="1.0"?>
  <component name="org.mycompany.myproject.MyService">

    <!-- multiple requirements can be added -->
    <require>org.nuxeo.ecm.core.operation.OperationServiceComponent</require>
    <require>org.mycompany.myproject.MyBaseService</require>

  </component>
```

Note that, you do not need to require another component if you contribute to it: this dependency is implicit. In the previous example where a contribution was made to the `org.nuxeo.runtime.ConfigurationService` extension point `configuration`, no requirement is needed.

To make sure your component is **started** after another one, the `#getApplicationStartedOrder` method should be implemented on the component:
```
public class MyComponent extends DefaultComponent {

    @Override
    public int getApplicationStartedOrder() {
        return 700;
    }

}
```
Components are sorted according to this reference value, in *increasing* order, before starting all components.

For "pure XML" components, only holding contributions, the default start value is `0`.
Otherwise, the default value is `1000`, and the repository initialization uses number `100`. Negative values can also be used.

If you'd like this start order to be relative to another one, the following lookup can also be done (for instance):
```
public class MyComponent extends DefaultComponent {

    @Override
    public int getApplicationStartedOrder() {
        ComponentInstance requiredComponent = Framework.getRuntime().getComponentInstance("the.component.name");
        if (requiredComponent == null || requiredComponent.getInstance() == null) {
            return super.getApplicationStartedOrder();
        }
        return ((DefaultComponent) requiredComponent.getInstance()).getApplicationStartedOrder() + 1;
    }

    @Override
    public void start(ComponentContext context) {
        super.start(context);
        // at this point, the required component #start method has already been called
    }

}
```

As a reference, this declared start order is visible on the [Explorer Component Listing](ttps://explorer.nuxeo.com/nuxeo/site/distribution/latest/listComponents).
