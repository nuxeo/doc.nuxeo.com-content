---
title: Writing a Bundle Manifest
review:
    comment: ''
    date: '2017-12-14'
    status: ok
labels:
    - lts2016-ok
    - runtimecomponent
    - kleturc
    - excerpt
    - lts2017-ok
confluence:
    ajs-parent-page-id: '950284'
    ajs-parent-page-title: Runtime and Component Model
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Writing+a+Bundle+Manifest
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Writing+a+Bundle+Manifest'
    page_id: '4686402'
    shortlink: QoJH
    shortlink_source: 'https://doc.nuxeo.com/x/QoJH'
    source_link: /display/NXDOC/Writing+a+Bundle+Manifest
tree_item_index: 300
history:
    -
        author: Arnaud Kervern
        date: '2016-08-16 09:41'
        message: ''
        version: '31'
    -
        author: Solen Guitter
        date: '2014-09-23 11:06'
        message: ''
        version: '30'
    -
        author: Solen Guitter
        date: '2013-09-20 15:08'
        message: ''
        version: '29'
    -
        author: Alain Escaffre
        date: '2013-09-17 00:13'
        message: ''
        version: '28'
    -
        author: Alain Escaffre
        date: '2013-09-16 23:44'
        message: ''
        version: '27'
    -
        author: Alain Escaffre
        date: '2013-09-16 23:24'
        message: ''
        version: '26'
    -
        author: Florent Guillaume
        date: '2010-11-29 10:36'
        message: Migrated to Confluence 4.0
        version: '25'
    -
        author: Florent Guillaume
        date: '2010-11-29 10:36'
        message: ''
        version: '24'
    -
        author: Bogdan Stefanescu
        date: '2010-11-10 01:03'
        message: ''
        version: '23'
    -
        author: Bogdan Stefanescu
        date: '2010-11-10 01:00'
        message: ''
        version: '22'
    -
        author: Bogdan Stefanescu
        date: '2010-11-10 00:59'
        message: ''
        version: '21'
    -
        author: Bogdan Stefanescu
        date: '2010-11-10 00:57'
        message: ''
        version: '20'
    -
        author: Bogdan Stefanescu
        date: '2010-11-10 00:56'
        message: ''
        version: '19'
    -
        author: Bogdan Stefanescu
        date: '2010-11-10 00:55'
        message: ''
        version: '18'
    -
        author: Bogdan Stefanescu
        date: '2010-11-10 00:51'
        message: ''
        version: '17'
    -
        author: Bogdan Stefanescu
        date: '2010-11-10 00:42'
        message: ''
        version: '16'
    -
        author: Bogdan Stefanescu
        date: '2010-11-10 00:36'
        message: ''
        version: '15'
    -
        author: Bogdan Stefanescu
        date: '2010-11-10 00:30'
        message: ''
        version: '14'
    -
        author: Bogdan Stefanescu
        date: '2010-11-10 00:29'
        message: ''
        version: '13'
    -
        author: Bogdan Stefanescu
        date: '2010-11-10 00:29'
        message: ''
        version: '12'
    -
        author: Bogdan Stefanescu
        date: '2010-11-09 23:53'
        message: ''
        version: '11'
    -
        author: Bogdan Stefanescu
        date: '2010-11-09 18:27'
        message: ''
        version: '10'
    -
        author: Bogdan Stefanescu
        date: '2010-11-09 17:34'
        message: ''
        version: '9'
    -
        author: Bogdan Stefanescu
        date: '2010-11-09 17:33'
        message: ''
        version: '8'
    -
        author: Bogdan Stefanescu
        date: '2010-11-09 17:31'
        message: ''
        version: '7'
    -
        author: Bogdan Stefanescu
        date: '2010-11-09 17:28'
        message: ''
        version: '6'
    -
        author: Bogdan Stefanescu
        date: '2010-11-09 17:25'
        message: ''
        version: '5'
    -
        author: Bogdan Stefanescu
        date: '2010-11-09 16:38'
        message: ''
        version: '4'
    -
        author: Bogdan Stefanescu
        date: '2010-11-09 16:38'
        message: ''
        version: '3'
    -
        author: Bogdan Stefanescu
        date: '2010-11-09 16:37'
        message: ''
        version: '2'
    -
        author: Bogdan Stefanescu
        date: '2010-11-09 12:55'
        message: ''
        version: '1'

---
{{! excerpt}}

This page gives some rules for writing a bundle's manifest.

{{! /excerpt}}
{{#> callout type='info' }}

Check [Nuxeo CLI]({{page page='nuxeo-cli'}}) to bootstrap your Bundle.

{{/callout}}

You should first refer to the [Component Model page]({{page page='runtime-and-component-model'}}) for a better understanding of Nuxeo Runtime, Bundles, Components and services concepts.

Here is some practical information:

*   Using the manifest you can define an unique name for your bundle (i.e. the Bundle-SymbolicName). This name is helping the framework to identify the bundle.
*   Using the manifest you can define an activator class.
*   Using the manifest you can declare bundle dependencies (so that the bundle can be started only when dependencies are resolved). Also, these dependencies are used to determine the visible class path of your bundle. Classes not specified in dependencies will not be visible to your bundle. Bundle dependencies **are ignored** by Nuxeo Runtime launcher.

In the Nuxeo Platform, the best way to initialize your components (without worrying about dependencies) is to use a lazy loading model - so that a service is initialized at the first call. This method also speed the startup time.

Here is an example of a minimal manifest as required by Nuxeo.

```
Manifest-Version: 1.0
Bundle-SymbolicName: org.nuxeo.ecm.core.api
Nuxeo-Component: OSGI-INF/DocumentAdapterService.xml,
  OSGI-INF/RepositoryManager.xml,
  OSGI-INF/blob-holder-service-framework.xml,
  OSGI-INF/blob-holder-adapters-contrib.xml,
  OSGI-INF/pathsegment-service.xml

```

Here is the same manifest but OSGI valid (and works in Eclipse):

```
Export-Package: org.nuxeo.ecm.core;api=split;mandatory:=api,
 org.nuxeo.ecm.core.api;api=split;mandatory:=api,
 org.nuxeo.ecm.core.api.security,
 org.nuxeo.ecm.core.api.repository,
 org.nuxeo.ecm.core.api.model.impl.primitives,
 org.nuxeo.ecm.core.api.event.impl,
 org.nuxeo.ecm.core.api.impl.converter,
 org.nuxeo.ecm.core.utils,
 org.nuxeo.ecm.core.api.security.impl,
 org.nuxeo.ecm.core.api.model.impl.osm,
 org.nuxeo.ecm.core.url,
 org.nuxeo.ecm.core.api.impl,
 org.nuxeo.ecm.core.api.operation,
 org.nuxeo.ecm.core.api.model.impl.osm.util,
 org.nuxeo.ecm.core.api.externalblob,
 org.nuxeo.ecm.core.url.nxobj,
 org.nuxeo.ecm.core.api.model,
 org.nuxeo.ecm.core.api.repository.cache,
 org.nuxeo.ecm.core.api.impl.blob,
 org.nuxeo.ecm.core.api.model.impl,
 org.nuxeo.ecm.core.api.blobholder,
 org.nuxeo.ecm.core.api.tree,
 org.nuxeo.ecm.core.api.adapter,
 org.nuxeo.ecm.core.api.local,
 org.nuxeo.ecm.core.url.nxdoc,
 org.nuxeo.ecm.core.api.facet,
 org.nuxeo.ecm.core.api.event
Bundle-ActivationPolicy: lazy
Bundle-ClassPath: .
Manifest-Version: 1.0
Bundle-Name: org.nuxeo.ecm.core.api
Created-By: 1.6.0_20 (Sun Microsystems Inc.)
Bundle-RequiredExecutionEnvironment: JavaSE-1.6
Bundle-Version: 0.0.0.SNAPSHOT
Bundle-ManifestVersion: 2
Nuxeo-Component: OSGI-INF/DocumentAdapterService.xml,
  OSGI-INF/RepositoryManager.xml,
  OSGI-INF/blob-holder-service-framework.xml,
  OSGI-INF/blob-holder-adapters-contrib.xml,
  OSGI-INF/pathsegment-service.xml
Import-Package: javax.security.auth,
 javax.security.auth.callback,
 javax.security.auth.login,
 javax.security.auth.spi,
 org.apache.commons.collections.bidimap,
 org.apache.commons.collections.map,
 org.apache.commons.logging,
 org.nuxeo.common,
 org.nuxeo.common.collections,
 org.nuxeo.common.utils,
 org.nuxeo.common.xmap.annotation,
 org.nuxeo.ecm.core.schema,
 org.nuxeo.ecm.core.schema.types,
 org.nuxeo.ecm.core.schema.types.primitives,
 org.nuxeo.runtime,
 org.nuxeo.runtime.api,
 org.nuxeo.runtime.api.login,
 org.nuxeo.runtime.model,
 org.nuxeo.runtime.services.streaming
Bundle-SymbolicName: org.nuxeo.ecm.core.api;singleton=true
Eclipse-RegisterBuddy: org.nuxeo.runtime
Eclipse-ExtensibleAPI: true

```

Nuxeo is also using two specific manifest headers:

*   **Nuxeo-Component**: Which specify components declared by a bundle (as XML descriptor file paths relative to JAR root);
*   **Nuxeo-WebModule**: Which specify the class name of a JAX-RS application declared by a Nuxeo bundle.

Of course these two headers are optional and should be used only when needed.

# Bundle Preprocessing

Nuxeo is a very dynamic platform. When building a Nuxeo Application you will get an application template. At each startup, the application files are dynamically updated by each bundle in the application that need to modify a global configuration setting or to provide a global resource. We call this mechanism **preprocessing**.
