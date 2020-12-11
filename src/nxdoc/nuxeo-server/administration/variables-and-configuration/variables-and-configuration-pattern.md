---
title: Variables and Configuration Pattern
review:
    comment: ''
    date: '2020-12-14'
    status: ok
tree_item_index: 90
toc: true
---

{{! excerpt}}
This page provides clarifies all options available in the current Nuxeo framework.
{{! /excerpt}}
Variable Options

## Glossary

Let's review first the main concepts:
- **Environment variables**: variables set in the OS that cannot be changed at runtime
- **System properties**: variables set on the Java command line using the `-Dpropertyname=value` syntax, that can be added at runtime using `System#setProperties` or `System.getProperties#load` method, retrieved through the various `System#getProperty` methods.
- **Nuxeo configuration properties**: variables set in the [nuxeo.conf]({{page version='' space='nxdoc' page='configuration-parameters-index-nuxeoconf'}}) file.
- **Nuxeo template properties**: variables set via Nuxeo configuration templates properties files loaded via Java properties utilities.


## Variables Retrieval

Variables are retrieved and set at different phases of the Nuxeo application startup, the rest of the document will focus on:

- **Application startup**: in this phase, [ConfigurationGenerator](https://github.com/nuxeo/nuxeo/blob/v11.4.31/modules/runtime/nuxeo-launcher-commons/src/main/java/org/nuxeo/launcher/config/ConfigurationGenerator.java) logics will retrieve and aggregate some variables from all variables and properties described in the glossary. These variables will be taken into account for the Nuxeo Runtime startup.
- **Nuxeo Runtime startup**: in this phase, the Nuxeo Runtime Framework will resolve XML configuration files for Nuxeo Runtime components: these files can reference variables that will be expanded, and can then be retrieved from Java code.

## Application Startup

Some subjects were dismissed for the purpose of this document:

- Properties that control where the nuxeo home is set, or where the templates directory is set, or where logs are set, for instance, as these are handled specifically,
- Specific logics around database choice and initialization,
- Cryptographic-related logics.

### Pre-processing Initialization

Java class [ConfigurationGenerator](https://github.com/nuxeo/nuxeo/blob/v11.4.31/modules/runtime/nuxeo-launcher-commons/src/main/java/org/nuxeo/launcher/config/ConfigurationGenerator.java) holds [pre-processing](https://github.com/nuxeo/nuxeo/blob/v11.4.31/modules/runtime/nuxeo-launcher-commons/src/main/java/org/nuxeo/launcher/config/ConfigurationGenerator.java#L572) logics that will impact the Runtime Properties Initialization. As a general rule, in case of duplicate keys for properties loaded during the different steps, the **last** loaded value will **override**  the previous one:

1. The map is initialized with properties held by file at `NUXEO_HOME/templates/nuxeo.defaults`.
1. If an environment variable `NUXEO_ENVIRONMENT` is set, for instance to value `prod`, the map is then filled with properties held by file at `NUXEO_HOME/templates/nuxeo.prod`.
1. The map is then filled with System properties via `System#getProperties`.
1. The map is then filled with `nuxeo.conf` variable properties.
1. Then templates are resolved thanks to the property `nuxeo.templates` (*).
This resolution supports “included templates” resolution thanks to the `nuxeo.template.includes` property resolution. Templates are ordered so that they follow the declaration order, and so that included templates are taken into account before the template including them.
1. If an environment variable `NUXEO_PROFILES` is set, the value is added to the list of templates previously resolved. Multiple profiles can be defined, separated by a comma.
1. For each template, following the order of the list of template names previously resolved, the map is then filled by properties held by file at `TEMPLATE_DIRECTORY/nuxeo.defaults`, and if an environment variable `NUXEO_ENVIRONMENT` is set, for instance to value `prod`, the map is then filled with properties held by file at `TEMPLATE_DIRECTORY/nuxeo.prod`.
Note that `TEMPLATE_DIRECTORY` can either stand for the template name (in which case the sub-directory with this name will be resolved inside the `NUXEO_HOME/templates/` directory), or an absolute directory path.

These steps are covered by environment variables expansion explained below.

### Pre-processing Environment Variables Expansion

During preprocessing, properties pushed to the main map can be [expanded](https://github.com/nuxeo/nuxeo/blob/v11.4.31/modules/runtime/nuxeo-launcher-commons/src/main/java/org/nuxeo/launcher/config/ConfigurationGenerator.java#L698) when they are declared with the pattern `${env:VARIABLE_NAME}` or `${env:VARIABLE_NAME:defaultValue}`, for `nuxeo.conf` templates and for properties held by templates.

Values are replaced according to environment variables: for the given property name, the value returned by System#getEnv will be used, and will default to the `defaultValue` if specified, or to an empty string.

Although all resolutions can follow this pattern, this is specifically useful to declare additional Nuxeo configuration templates:

```
nuxeo.templates=default,common,testinclude,${env:TEST_ENV:testenv}
```

Note that in the `nuxeo.conf` file, only properties referring to templates are covered by this expansion: all properties might need to be covered too, to be consistent with template properties resolution.

Template properties resolution was introduced to cover a deployment use case, so that a docker image can be run in a specific target environment, with a pre-constructed map of values that can/should be controlled by the environment, in the `docker run` command line:

```
docker run -e NUXEO_ENVIRONMENT=prod -e NUXEO_PROFILES=the-deploy-template-name image
```

This strategy is used for explorer deployment with a docker image on an infrastructure run by IT, exposing a template named `explorer-deploy`. Extract from the [nuxeo.prod](https://github.com/nuxeo/nuxeo-explorer/blob/master/packages/nuxeo-platform-explorer-package/src/main/resources/install/templates/explorer-deploy/nuxeo.prod) file:

```
## all templates to apply on target deployment env
nuxeo.template.includes=default,docker,s3binaries,postgresql,explorer-sitemode,explorer-virtualadmin

## explorer confs mapping

org.nuxeo.apidoc.apidocAdmin.password=${env:ORG_NUXEO_APIDOC_APIDOCADMIN_PASSWORD:apidocAdmin}

## default confs mapping

# publicly visible URL
nuxeo.url=${env:NUXEO_URL:http://localhost:8080/nuxeo}

org.nuxeo.ecm.product.name=Nuxeo Explorer

[...]
```

An alternative to this strategy would be to add to the map of properties, as a last step during pre-processing, all environment variables that would start with `nuxeo` (for instance). 

### Pre-processing Environment

The complete resulting map [is written in the file](https://github.com/nuxeo/nuxeo/blob/v11.4.31/modules/runtime/nuxeo-launcher-commons/src/main/java/org/nuxeo/launcher/config/ConfigurationGenerator.java#L811) at `NUXEO_HOME/nxserver/config/configuration.properties` at server startup, so that it can be processed at Nuxeo Runtime startup.

If the configuration is saved (behaviour controlled by specific property `nuxeo.force.generation`), new properties and properties which resolve to a new value will be written to the `nuxeo.conf` file (properties which value was expanded are not taken into account).

The method [ConfigurationGenerator#getEnv](https://github.com/nuxeo/nuxeo/blob/v11.4.31/modules/runtime/nuxeo-launcher-commons/src/main/java/org/nuxeo/launcher/config/ConfigurationGenerator.java#L1809) returns a java object holding the same map, except it is first initialized with the content of the `NUXEO_HOME/templates/common/config/distribution.properties` file.
This environment is retrieved by `nuxeo-launcher` and by `nuxeo-connect-standalone`, and is useful for Nuxeo Packages management logics.

### DeploymentPreprocessor Templates Variables Expansion

Java class [DeploymentPreprocessor](https://github.com/nuxeo/nuxeo/blob/v11.4.31/modules/runtime/nuxeo-runtime-deploy/src/main/java/org/nuxeo/runtime/deployment/preprocessor/DeploymentPreprocessor.java) logics are also covered by variable expansion using the following patterns:

``` 
${propertyName}
```

Or:

``` 
${propertyName:=defaultValue}
``` 

The map used for expansion is a bit different and includes the following:
1. A [default environment](https://github.com/nuxeo/nuxeo/blob/v11.4.31/modules/runtime/nuxeo-runtime-osgi/src/main/java/org/nuxeo/osgi/application/loader/FrameworkLoader.java#L141) is created, using a map filled with System properties, and some selected additional properties are [added to this map](https://github.com/nuxeo/nuxeo/blob/v11.4.31/modules/runtime/nuxeo-runtime-osgi/src/main/java/org/nuxeo/osgi/application/loader/FrameworkLoader.java#L316).
1. Then the map is filled with properties defined in the `NUXEO_HOME/nxserver/system.properties` files.
1. Then the properties computed during pre-processing are added.

These steps are covered by environment variables expansion explained below.

Variable expansion happens when running copy/append commands (and alike) declared in the deployment-fragment.xml file: content is processed to replace variables using the resulting properties map. The replacement is recursive in case the property references another property.

This is useful to control configuration added to the `web.xml`, or other preprocessor template files defined in `NUXEO_HOME/nxserver/META-INF` like `faces-config.xml`. Here’s an example from JSF:

```xml
<context-param>
  <param-name>javax.faces.FACELETS_REFRESH_PERIOD</param-name>
  <param-value>${javax.faces.FACELETS_REFRESH_PERIOD:=-1}</param-value>
</context-param>
``` 

{{#> callout type='note' heading='DeploymentPreprocessor logics'}}

`DeploymentPreprocessor` logics are even harder to decipher than others, so not sure that the files copied to the `nuxeo.war` go through variable expansion logics, for instance (useful for i18n messages or static CSS files management, typically).

{{/callout}}


## Nuxeo Runtime Startup

The properties map available to the runtime framework after startup differs from the one handled during pre-processing: let’s start by explaining how this property map is defined, and what kind of variable expansion is supported.

Then let’s summarize the various options to define and retrieve properties for the Nuxeo Runtime XML Components configurations (that have been documented [here]({{page version='' space='nxdoc' page='how-to-create-a-service/#defining-properties-on-the-service-component'}}).


### Runtime Properties Initialization

[RuntimeService](https://github.com/nuxeo/nuxeo/blob/v11.4.31/modules/runtime/nuxeo-runtime/src/main/java/org/nuxeo/runtime/RuntimeService.java) implementations holds API that will be used by [Framework#getProperty](https://github.com/nuxeo/nuxeo/blob/v11.4.31/modules/runtime/nuxeo-runtime/src/main/java/org/nuxeo/runtime/api/Framework.java#L459) and Framework#expandVars methods.

Although there are some differences between the different implementations, they seem minor for the purpose of this document (for instance [AbstractRuntimeService](https://github.com/nuxeo/nuxeo/blob/v11.4.31/modules/runtime/nuxeo-runtime/src/main/java/org/nuxeo/runtime/AbstractRuntimeService.java#L224) logics used in tests, and [OSGiRuntimeService.java](https://github.com/nuxeo/nuxeo/blob/v11.4.31/modules/runtime/nuxeo-runtime/src/main/java/org/nuxeo/runtime/osgi/OSGiRuntimeService.java#L402) logics, where the OSGI context properties are also taken into account).

As a general rule, in case of duplicate keys for properties loaded during the different steps, the **last** loaded value will **override** the previous one:

1. The map is initialized with [System properties](https://github.com/nuxeo/nuxeo/blob/v11.4.31/modules/runtime/nuxeo-runtime/src/main/java/org/nuxeo/runtime/AbstractRuntimeService.java#L75) (although those should also be included in the configuration.properties file, they might differ from them as the Java process is not the same, see [NuxeoLaucher#start](https://github.com/nuxeo/nuxeo/blob/v11.4.31/server/nuxeo-launcher/src/main/java/org/nuxeo/launcher/NuxeoLauncher.java#L1694-L1701) logics)
1. The map is then filled with properties [loaded from all files](https://github.com/nuxeo/nuxeo/blob/v11.4.31/modules/runtime/nuxeo-runtime/src/main/java/org/nuxeo/runtime/osgi/OSGiRuntimeService.java#L332) in the `NUXEO_HOME/nxserver/config` directory ending with `.config`, `.ini` or `.properties`,  sorted alphabetically, ignoring case. These files include the configuration.properties file that was written during pre-processing.

At this stage, properties are not expanded yet: variables expansion mechanism is explained below.

As a reference, here is the ordered list of configuration files (except from the `configuration.properties file`, these are setup by `common-base` and `common` templates).:

- `configuration.properties`
- `distribution.properties`
- `jms.properties`
- `nuxeo-tomcat.properties`
- `nuxeo-webapp-core.properties`
- `nuxeo.properties`
- `quartz.properties`
- `webengine.properties`

### Runtime Properties Variables Expansion

During Runtime startup, properties pushed to the main map can be expanded when they are declared with the pattern `${propertyName}` or `${propertyName:=defaultValue}`.

This expansion happen **on-the-fly** when calling the getter methods `Framework#getProperty` or `Framework#expandVars`.

Expansion happens within the map of properties described above, and can be recursive: it is possible to define a property and reference it in another property, for instance:

```
elasticsearch.indexName=nuxeo
audit.elasticsearch.indexName=${elasticsearch.indexName}-audit
seqgen.elasticsearch.indexName=${elasticsearch.indexName}-uidgen
```

### Runtime Components Variables Expansion

All Nuxeo [runtime registration files are parsed](https://github.com/nuxeo/nuxeo/blob/v11.4.31/modules/runtime/nuxeo-runtime/src/main/java/org/nuxeo/runtime/model/impl/DefaultRuntimeContext.java#L227) so that their variables are expanded, before the content is processed by the Runtime framework: this allows XML configurations to hold variables in any place of the XML content with the same pattern:

```
${propertyName}
```

Or:

```
${propertyName:=defaultValue}
```

If the Nuxeo Runtime properties hold the variable name, it will be resolved, otherwise the defaultValue will be used, or an empty string if not defined.

XML content is parsed as a single string: variables can be placed anywhere in the content.

### Component properties

Java components accept “simple” properties configuration, the drawback is that these properties cannot be overridden via XML contributions:

```xml
<?xml version="1.0"?>
<component name="org.mycompany.myproject.MyService">

  <implementation class="org.mycompany.myproject.MyComponent" />
  <property name="myProp" value="myValue" />

</component>
```

Of course the value can also hold a mapping to resolve the value from a Nuxeo Runtime property:

```xml
<?xml version="1.0"?>
<component name="org.mycompany.myproject.MyService">

  <implementation class="org.mycompany.myproject.MyComponent" />
  <property name="myProp" value="${propertyName:=defaultValue}" />

</component>
``` 

This property [can then be resolved](https://github.com/nuxeo/nuxeo/blob/v11.4.31/modules/runtime/nuxeo-runtime/src/main/java/org/nuxeo/runtime/model/impl/ComponentInstanceImpl.java#L285) from the component code when activating the component:

```java
public class MyComponent extends DefaultComponent {

    @Override
    public void activate(ComponentContext context) {
        String myPropValue = (String) context.getPropertyValue("myProp");
    }

}
``` 

### ConfigurationService Properties

The [ConfigurationService](https://github.com/nuxeo/nuxeo/blob/v11.4.31/modules/runtime/nuxeo-runtime/src/main/java/org/nuxeo/runtime/services/config/ConfigurationService.java) runtime component was designed to declare simple configurations, so that they can be documented and overridden via XML contributions:

```xml
<?xml version="1.0"?>
<component name="org.mycompany.myproject.MyService">

  <implementation class="org.mycompany.myproject.MyComponent" />

  <extension target="org.nuxeo.runtime.ConfigurationService" point="configuration">
    <documentation>
      This configuration property can be documented here. HTML tags are accepted.
    </documentation>
    <property name="org.mycompany.myproject.myprop">myDefaultValue</property>
  </extension>

</component>
```

From the component code, that property can be retrieved from the Runtime framework, after starting the component, for instance (to make sure ConfigurationService is available):

```java
import org.nuxeo.runtime.services.config.ConfigurationService;

public class MyComponent extends DefaultComponent {

    protected static final String MY_PROP_NAME = "org.mycompany.myproject.myprop";

    @Override
    public void start(ComponentContext context) {
        super.start(context);
        String myPropValue = Framework.getService(ConfigurationService.class).getString(MY_PROP_NAME);
    }

}
```

### ConfigurationService Properties mixed with Properties

Using the ConfigurationService and a Runtime property can be combined, by referencing a variable expression in the ConfigurationService contribution:

```xml
<extension target="org.nuxeo.runtime.ConfigurationService" point="configuration">
  <property name="org.mycompany.myproject.myprop">
    ${propertyName:=myDefaultValue}
  </property>
</extension>
```

These properties can be retrieved from the JAVA API in the same way as in the previous case, through the ConfigurationService API.

Note that if a ConfigurationService contribution uses the same property name than a Runtime property, a warning will be issued at startup, to avoid confusions and ease up migrations, as a number of properties were moved out of nuxeo.conf files to be declared to the ConfigurationService when it was introduced. Variable expansion still applies, if it can help with migrations: if the code looks for this value on the ConfigurationService and a static value is used for it instead of an expression, the property with the same name declared in the nuxeo.conf file, for instance, will not be taken into account.
