---
title: Runtime and Component Model
review:
    comment: ''
    date: '2017-12-14'
    status: ok
excerpt: 'This page describes how the Nuxeo Platform is modular, and how bundles, components and extension points relate to each other to let you create a fully customized application.'
labels:
    - lts2016-ok
    - extension-point
    - link-update
    - bundle
    - runtime
    - runtimecomponent
    - kleturc
    - excerpt
    - lts2017-ok
toc: true
confluence:
    ajs-parent-page-id: '31033314'
    ajs-parent-page-title: Nuxeo Server
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Runtime+and+Component+Model
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Runtime+and+Component+Model'
    page_id: '950284'
    shortlink: DIAO
    shortlink_source: 'https://doc.nuxeo.com/x/DIAO'
    source_link: /display/NXDOC/Runtime+and+Component+Model
tree_item_index: 1700
history:
    -
        author: Solen Guitter
        date: '2016-09-05 12:13'
        message: ''
        version: '60'
    -
        author: Alain Escaffre
        date: '2015-09-24 21:23'
        message: ''
        version: '59'
    -
        author: Solen Guitter
        date: '2014-12-05 19:33'
        message: ''
        version: '58'
    -
        author: Solen Guitter
        date: '2014-10-03 15:21'
        message: ''
        version: '57'
    -
        author: Alain Escaffre
        date: '2014-09-22 23:55'
        message: ''
        version: '56'
    -
        author: Alain Escaffre
        date: '2014-09-22 23:54'
        message: ''
        version: '55'
    -
        author: Alain Escaffre
        date: '2014-09-22 23:52'
        message: ''
        version: '54'
    -
        author: Solen Guitter
        date: '2014-09-19 11:16'
        message: ''
        version: '53'
    -
        author: Solen Guitter
        date: '2013-11-13 15:20'
        message: Updated links
        version: '52'
    -
        author: Solen Guitter
        date: '2013-10-29 15:50'
        message: ''
        version: '51'
    -
        author: Solen Guitter
        date: '2013-10-21 16:49'
        message: ''
        version: '50'
    -
        author: Solen Guitter
        date: '2013-09-17 17:53'
        message: ''
        version: '49'
    -
        author: Solen Guitter
        date: '2013-09-17 17:36'
        message: ''
        version: '48'
    -
        author: Alain Escaffre
        date: '2013-09-16 23:36'
        message: ''
        version: '47'
    -
        author: Alain Escaffre
        date: '2013-09-16 23:25'
        message: ''
        version: '46'
    -
        author: Alain Escaffre
        date: '2013-09-16 23:16'
        message: ''
        version: '45'
    -
        author: Alain Escaffre
        date: '2013-09-16 23:12'
        message: Reverted from v. 41
        version: '44'
    -
        author: Alain Escaffre
        date: '2013-09-16 23:09'
        message: ''
        version: '43'
    -
        author: Alain Escaffre
        date: '2013-09-16 23:08'
        message: ''
        version: '42'
    -
        author: Alain Escaffre
        date: '2013-09-16 14:42'
        message: ''
        version: '41'
    -
        author: Alain Escaffre
        date: '2013-09-16 13:51'
        message: ''
        version: '40'
    -
        author: Alain Escaffre
        date: '2013-09-16 13:26'
        message: ''
        version: '39'
    -
        author: Alain Escaffre
        date: '2013-09-16 13:21'
        message: ''
        version: '38'
    -
        author: Alain Escaffre
        date: '2013-09-16 13:15'
        message: ''
        version: '37'
    -
        author: Alain Escaffre
        date: '2013-09-16 12:01'
        message: ''
        version: '36'
    -
        author: Alain Escaffre
        date: '2013-09-16 11:58'
        message: ''
        version: '35'
    -
        author: Alain Escaffre
        date: '2013-09-16 11:52'
        message: ''
        version: '34'
    -
        author: Alain Escaffre
        date: '2013-09-16 11:51'
        message: ''
        version: '33'
    -
        author: Alain Escaffre
        date: '2013-09-16 11:49'
        message: ''
        version: '32'
    -
        author: Alain Escaffre
        date: '2013-09-16 11:43'
        message: ''
        version: '31'
    -
        author: Solen Guitter
        date: '2013-09-04 14:35'
        message: ''
        version: '30'
    -
        author: Benjamin Jalon
        date: '2012-04-10 11:16'
        message: Migrated to Confluence 4.0
        version: '29'
    -
        author: Benjamin Jalon
        date: '2012-04-10 11:16'
        message: ''
        version: '28'
    -
        author: Benjamin Jalon
        date: '2012-04-10 11:15'
        message: ''
        version: '27'
    -
        author: Benjamin Jalon
        date: '2012-03-16 14:19'
        message: ''
        version: '26'
    -
        author: Benjamin Jalon
        date: '2012-03-16 14:02'
        message: ''
        version: '25'
    -
        author: Benjamin Jalon
        date: '2012-03-16 13:54'
        message: ''
        version: '24'
    -
        author: Stéphane Lacoin
        date: '2011-11-15 17:08'
        message: ''
        version: '23'
    -
        author: Solen Guitter
        date: '2011-01-19 11:29'
        message: ''
        version: '22'
    -
        author: Solen Guitter
        date: '2011-01-06 19:15'
        message: ''
        version: '21'
    -
        author: Solen Guitter
        date: '2011-01-06 19:08'
        message: formatting and typos
        version: '20'
    -
        author: Thierry Delprat
        date: '2010-06-02 01:46'
        message: ''
        version: '19'
    -
        author: Thierry Delprat
        date: '2010-06-02 01:45'
        message: ''
        version: '18'
    -
        author: Thierry Delprat
        date: '2010-06-02 01:44'
        message: ''
        version: '17'
    -
        author: Solen Guitter
        date: '2010-05-20 18:15'
        message: formatting and typos
        version: '16'
    -
        author: Thierry Delprat
        date: '2010-05-11 13:05'
        message: ''
        version: '15'
    -
        author: Thierry Delprat
        date: '2010-05-11 13:04'
        message: ''
        version: '14'
    -
        author: Thierry Delprat
        date: '2010-05-11 12:54'
        message: ''
        version: '13'
    -
        author: Thierry Delprat
        date: '2010-05-11 12:07'
        message: ''
        version: '12'
    -
        author: Thierry Delprat
        date: '2010-05-11 12:07'
        message: ''
        version: '11'
    -
        author: Thierry Delprat
        date: '2010-05-11 12:05'
        message: ''
        version: '10'
    -
        author: Thierry Delprat
        date: '2010-05-11 11:58'
        message: ''
        version: '9'
    -
        author: Thierry Delprat
        date: '2010-05-11 11:54'
        message: ''
        version: '8'
    -
        author: Thierry Delprat
        date: '2010-05-11 11:50'
        message: ''
        version: '7'
    -
        author: Thierry Delprat
        date: '2010-05-11 11:48'
        message: ''
        version: '6'
    -
        author: Thierry Delprat
        date: '2010-05-11 11:46'
        message: ''
        version: '5'
    -
        author: Thierry Delprat
        date: '2010-05-11 11:41'
        message: ''
        version: '4'
    -
        author: Thierry Delprat
        date: '2010-05-11 11:37'
        message: ''
        version: '3'
    -
        author: Thierry Delprat
        date: '2010-05-11 11:37'
        message: ''
        version: '2'
    -
        author: Admin name placeholder
        date: '2010-02-26 10:25'
        message: ''
        version: '1'

---
This page describes how the Nuxeo Platform is modular, and how bundles, components and extension points relate to each other to let you create a fully customized application.

## The Goal: Easy Customization and Integration

One of the main goals of the Nuxeo Platform is to provide an easy and clean way to customize the platform for your application needs. That way:

*   No need to hack the system to make it run
*   Your custom code will be based on maintained extension points and interfaces and will be able to be easily upgraded

For that, Nuxeo Platform provides the following patterns:

*   [Bundle](#bundles): A bundle is a "plugin". It is most of the time a ".jar" file with a specific structure that aims at deploying a new set of features on the Nuxeo server. Thanks to this "bundle" notion, developers can deliver their new features in a standalone JAR that the platform will know how to start. As a result, your customization is also delivered as a plug-in, like the tens of plug-ins that are part of the Nuxeo ecosystem, and that you can find on [GitHub](https://github.com/nuxeo) or the [Nuxeo Marketplace](https://connect.nuxeo.com/nuxeo/site/marketplace).
*   [Components and services](#components): A component is a software object declared via XML (and that may reference a Java class) that is used to expose some services in the framework. Thanks to this architecture, it is possible to expose a new service anywhere in the Java code executed in the platform. Services are auto-documented: you can see the list on [Nuxeo Platform Explorer](http://explorer.nuxeo.org/nuxeo/site/distribution/latest/listServices).
*   [Extensions](#extensions): An extension is a mechanism leveraged by the services to let platform users inject customization in the core of the implementation. It is a pattern used frequently on products such as Mozilla, Chrome, or Eclipse. Thanks to this architecture, it is possible to go very deep in product customization only with XML or using our [Nuxeo Studio]({{page space='studio' page='nuxeo-online-services-portal'}}) visual environment, without any coding. You can see the list of all extension points in [Nuxeo Platform Explorer](http://explorer.nuxeo.org/nuxeo/site/distribution/latest/listExtensionPoints). Contributions to extensions are delivered in a custom bundle.

Implementing your own _bundle_, you will be able to contribute to existing _extensions_ so as to customize things. For instance, you can:

*   Define custom schemas and Document types (supported by Nuxeo Studio),
*   Define custom forms (supported by Nuxeo Studio),
*   Define custom lifecycles (supported by Nuxeo Studio),
*   Enforce business policies:
    *   Use content automation (supported by Nuxeo Studio),
    *   Write custom listener scripts,
*   Customize the UI:
    *   Make your own branding (supported by Nuxeo Studio),
    *   Add buttons, tabs, links, views (supported by Nuxeo Studio),
    *   Build your own theme via the ThemeManager,
*   Add workflows.

When existing extensions are not enough, you can declare your own _services_ or leverage existing ones in Java code.

In Nuxeo, everything can be configured:

![]({{file name='EP-everywhere.png'}} ?w=500,h=201,border=true)

## Bundles, Component, Services and Extension Points

### {{> anchor 'bundles'}}Nuxeo Bundles

Inside Nuxeo Platform, software parts are packaged as Bundles. A bundle is a Java archive (JAR) packaged so that it works inside a Nuxeo Application.

It contains:

*   An OSGi-based manifest file,
*   Java classes,
*   XML components,
*   Resources,
*   A deployment descriptor.

The manifest file is used to:

*   Define an id for the bundle,
*   Define the dependencies of the bundles (i.e.: other bundles that should be present for this bundle to run),
*   List XML components that are part of the bundle.

Here is an example of a MANIFEST file:

```
Manifest-Version: 1.0
Bundle-ManifestVersion: 2
Bundle-Name: NXCoreConvert
Bundle-SymbolicName: org.nuxeo.ecm.core.convert
Bundle-Localization: plugin
Require-Bundle: org.nuxeo.ecm.core.api,
 org.nuxeo.ecm.core.convert.api
Bundle-Vendor: Nuxeo
Export-package: org.nuxeo.ecm.core.convert.cache,
 org.nuxeo.ecm.core.convert.extension,
 org.nuxeo.ecm.core.convert.service
Bundle-Category: runtime
Nuxeo-Component: OSGI-INF/convert-service-framework.xml

```

Here we can see that this bundle:

*   Is named `org.nuxeo.ecm.core.convert`.
*   Depends on two other bundles: `core.api` and `convert.api`.
*   Contains one XML component: `convert-service-framework.xml`.

Nuxeo bundles are deployed on the Nuxeo server via the Nuxeo runtime that behaves partially like an OSGi framework. An OSGi framework provides:

*   A lifecycle model for Java modules,
*   A service model.

When an OSGi framework starts it will try to load all bundles installed in the system. When all dependencies of a bundle are resolved, the framework starts the bundle. Starting a bundle means invoking a bundle activator if any is declared in the manifest file.

This way each bundle that registers an activator is notified that it was started - so the bundle activator can do any initialization code required for the bundle to be ready to work. In the same way when a bundle is removed the bundle activator will be notified to cleanup any held resources. OSGi frameworks provides listeners to notify all interested bundles on various framework events like starting a bundle, stopping another one, etc.

This mechanism provides a flexible way to build modular applications which are composed of components that need to take some actions when some resources are become available or are removed. This lifecycle mechanism helps bundles react when changes are made in the application. Thus, an OSGi bundle is notified when all its dependencies were resolved and it can start providing services to other bundles. OSGi is also proposing a service model - so that bundles can export services to other bundles in the platform.

There are two major differences between the default Nuxeo Runtime launcher and an OSGi framework:

*   Nuxeo is using single class loader for all bundles. It doesn't interpret OSGi dependencies in the manifest.
*   Nuxeo services are not exposed as OSGi services.

### {{> anchor 'components'}}Components and Services

A **component** is a piece of software defined by a **bundle** used as an entry point by other components that want to contribute some extensions or to ask for some service interface. A component is an abstract concept - it is not necessarily backed by a Java class and is usually made from several classes and XML configuration.

The XML components are XML files, usually placed in the `OSGI-INF` directory, that are used to declare configuration to Nuxeo Runtime.

Each XML component has a unique id and can:

*   Declare requirement on other components,
*   Declare a Java component implementation,
*   Contain a XML contribution,
*   Declare a Java contribution.

A Java component is a simple Java class that is declared as component via an XML file.

Components usually derive from a base class provided by Nuxeo Runtime and will be available as a singleton via a simple Nuxeo Runtime call:

```
Framework.getRuntime().getComponent(componentName)

```

Usually, components are not used directly, they are used via a service interface. For that, the XML components can declare which service interfaces are provided by a given component. The component can directly implement the service interface or can delegate service interface implementation to an other class. Components must be accessed using the interfaces they provide and not through real implementation classes. Once declared the service will be available via a simple Nuxeo Runtime call:

```
Framework.getService(ServiceInterface.class)

```

{{#> callout type='info' heading='List of services'}}

The list of existing services can be found on the [Nuxeo Platform Explorer](http://explorer.nuxeo.org/nuxeo/site/distribution/latest/listServices).

{{/callout}}

### {{> anchor 'extensions'}}Extension Points

One of the corner stones of the Nuxeo Platform is to provide components and services that can easily be configured or extended. For that, we use the extension point system from Nuxeo Runtime that was inspired from Equinox (Eclipse platform).

This extension point system allows you to:

*   Configure the behavior of components (i.e. contribute XML configuration),
*   Extend the behavior of components (i.e. contribute Java code or scripting).

Basically, inside the Nuxeo Platform, the pattern is always the same:

*   Services are provided by components,
*   Components expose extension points.

The same extension point system is used all over the platform:

*   Inside Nuxeo Runtime itself,
*   Inside Nuxeo Core (configure and extend document storage),
*   Inside the Nuxeo Service layer (configure and extend ECM services),
*   Inside the UI layer (assemble building blocks, contribute new buttons or views, configure navigation, ...).

Each Java component can declare one or several extension points.

These extension points can be used to provide:

*   Configuration,
*   Additional code (i.e. plug-in system).

So most Nuxeo services are configurable and pluggable via the underlying component.

![]({{file name='extension_points.png'}} ?border=true)

#### Declaring an Extension Point

Extension points are declared via the XML component that declares the Java component.

Here is a simple example:

```xml
<?xml version="1.0"?>
<component name="org.nuxeo.ecm.core.convert.service.ConversionServiceImpl">
  <documentation>
    Service to handle conversions
  </documentation>
  <implementation class="org.nuxeo.ecm.core.convert.service.ConversionServiceImpl"/>
  <service>
    <provide interface="org.nuxeo.ecm.core.convert.api.ConversionService"/>
  </service>
  <extension-point name="converter">
    <documentation>
      This extension can be used to register new converters
    </documentation>
    <object class="org.nuxeo.ecm.core.convert.extension.ConverterDescriptor"/>
  </extension-point>
  <extension-point name="configuration">
    <documentation>
      This extension can be used to configure conversion service
    </documentation>
    <object class="org.nuxeo.ecm.core.convert.extension.GlobalConfigDescriptor"/>
  </extension-point>
</component>
```

What we can read in this XML component is:

*   A Java component (via the `<component>` tag) with a unique id (into the `name` attribute) is declared;
*   This component declares a new service (via the `<implementation>` tag);
*   The declaration of the `ConvertService` interface (used to also fetch it) implemented by `ConvertServiceImpl` Java implementation,
*   This service expose two extension points:
    *   One to contribute configuration (`configuration`),
    *   One to contribute some Java code (new `converter` plugin).

Each extension point has his own XML structure descriptor, to specify the XML fragment he's waiting for into this extension point:

*   `org.nuxeo.ecm.core.convert.extension.ConverterDescriptor`
*   `org.nuxeo.ecm.core.convert.extension.GlobalConfigDescriptor`

This description is defined directly into these classes by annotations. Nuxeo Runtime instanced descriptors and delivers it to the service each time a new contribution of these extension points is detected.

**Each Nuxeo extension point uses this pattern to declare configuration possibilities, service integration, behavior extension, etc.**
You understand this pattern, you will understand all extension points in Nuxeo. And you can use this infrastructure to declare your own business services.

#### Contributing to an Extension Point

XML components can also be used to contribute to extension points.

For that, the XML component needs to:

*   Be referenced in a manifest bundle,
*   Specify a target extension point,
*   Provide the XML content expected by the target extension point.

Expected XML syntax is defined by the XMap object referenced in the extension point declaration.

Here is an example contribution to an extension point:

```xml
<?xml version="1.0"?>
<component name="org.nuxeo.ecm.platform.convert.plugins">
  <extension target="org.nuxeo.ecm.core.convert.service.ConversionServiceImpl"point="converter">
    <converter name="zip2html" class="org.nuxeo.ecm.platform.convert.plugins.Zip2HtmlConverter">
      <destinationMimeType>text/html</destinationMimeType>
      <sourceMimeType>application/zip</sourceMimeType>
    </converter>
  </extension>
</component>
```

#### Extension Points Everywhere

The Nuxeo Platform uses extension points extensively, to let you extend and configure most of the features provided by the platform (see [all extension points available in the platform](http://explorer.nuxeo.org/nuxeo/site/distribution/latest/listExtensionPoints) for instance).

### Nuxeo Runtime

All the bundles included in a Nuxeo Application are part of different plug-ins (from the core plug-ins to the high level ones). A minimal application is represented by a single plugin - the framework itself (which is itself packaged as a bundle).
This is what we are naming **Nuxeo Runtime**. Of course launching the Nuxeo Runtime without any plug-in installed is useless - except a welcome message in the console nothing happens. But, starting from **Nuxeo Runtime** you can build a complete application by installing different plug-ins (depending on the type of your application you may end up with tens of bundles).

A basic Nuxeo Application is composed at least of two layers of plug-ins: the Runtime layer and the core one.

### Packaging and Deployment

The layered architecture impacts the way we package features in the Nuxeo Platform.

In order to keep as much deployment options as possible and let you choose what you deploy and where, each feature (workflow, relations, conversions, preview ...) is packaged in several separated bundles.

Typically, this means that each feature will possibly be composed of:

*   An **API Bundle** that contains all interfaces and remotable objects needed to access the provided services;
*   A **Core Bundle** that contains the POJO implementation for the components and services;
*   A **Facade Bundle** that provides the JEE bindings for the services (JTA, Remoting, JAAS ...);
*   A **Core Contrib Bundle** that contains all the direct contributions to the Repository (Document types, listeners, security policies ...);
*   Client bundles.

![]({{file name='feature-layers.png'}} ?border=true)

All the bundles providing the different layers of the same feature are usually associated to the same Maven artifact group and share the same parent POM file.
This is basically a bundle group for a given feature.

Now you may want to understand [how those packages are deployed on a Nuxeo server]({{page page='understanding-bundles-deployment'}}).
