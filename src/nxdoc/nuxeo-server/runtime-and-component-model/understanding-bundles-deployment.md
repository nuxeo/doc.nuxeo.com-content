---
title: Understanding Bundles Deployment
review:
    comment: ''
    date: '2020-10-20'
    status: ok
labels:
    - lts2016-ok
    - deployment
    - mcedica
    - nuxeoctl
    - runtimecomponent
    - content-review-lts2017
toc: true
confluence:
    ajs-parent-page-id: '950284'
    ajs-parent-page-title: Runtime and Component Model
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Understanding+Bundles+Deployment
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Understanding+Bundles+Deployment'
    page_id: '11534735'
    shortlink: jwGw
    shortlink_source: 'https://doc.nuxeo.com/x/jwGw'
    source_link: /display/NXDOC/Understanding+Bundles+Deployment
tree_item_index: 100
history:
    -
        author: Solen Guitter
        date: '2016-08-31 13:20'
        message: ''
        version: '12'
    -
        author: Manon Lumeau
        date: '2016-06-09 13:44'
        message: ''
        version: '11'
    -
        author: Manon Lumeau
        date: '2016-03-29 12:05'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2015-11-30 09:53'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2014-09-23 11:06'
        message: ''
        version: '8'
    -
        author: Alain Escaffre
        date: '2014-09-23 00:35'
        message: ''
        version: '7'
    -
        author: Alain Escaffre
        date: '2014-09-23 00:03'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2013-09-04 15:54'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2013-09-04 14:55'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2012-09-21 14:37'
        message: Migrated to Confluence 4.0
        version: '3'
    -
        author: Solen Guitter
        date: '2012-09-21 14:37'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2012-09-21 14:37'
        message: ''
        version: '1'
---

## Deployment Phases

{{! excerpt}}
The Nuxeo Platform deployment is incremental: the startup process involves different phases.
{{! /excerpt}}

1.  Process [Configuration Templates]({{page page='configuration-templates'}})
1.  Process Deployment Fragment Resources
1.  Deploy Nuxeo Runtime Configurations and [Bundles]({{page page='runtime-and-component-model'}})
1.  Initialize the Servlet Container

### Configuration Templates Processing

The [Configuration Template System]({{page page='configuration-templates'}}) is used to generate configuration files:

- data source declaration
- SMTP Gateway
- monitoring extensions
- misc extension point contributions
    (LDAP, SMTP, OpenOffice.org)

This is useful to define profile-like configurations, so that a given server can quickly be reconfigured for a given target environment:

- Dev profile
- Integration profile
- Production profile
- &hellip;

A template can be activated by creating a directory in the `$NUXEO_HOME/templates` directory: the corresponding directory name can then be used as an identifier and be listed in the `nuxeo.templates` variable, inside the `$NUXEO_HOME/bin/nuxeo.conf` file.

Some Nuxeo packages hold pre-computed templates, ready for activation.

The template directory usually holds Java property files with corresponding configuration variables and values. This variable can then be:

- looked up in the application code

    ```
    import org.nuxeo.runtime.api.Framework;

    [...]

    if (Framework.isBooleanPropertyTrue("my.service.enabled")) {
       // ...
    }
    String myProfileValue = Framework.getProperty("my.service.custom.variable");
    ```
- referenced by Nuxeo configurations

    ```
    <component name="my.contrib">
      <require>org.nuxeo.runtime.datasource.server.contrib</require>
      <extension target="org.nuxeo.runtime.datasource" point="datasources">
        <datasource name="${nuxeo.db.commonds}" xaDataSource="${nuxeo.db.xadatasource}"
          maxTotal="${nuxeo.db["max-pool-size"]}"
          minTotal="${nuxeo.db["min-pool-size"]}"
          maxWaitMillis="${nuxeo.db["blocking-timeout-millis"]}"
          validationQuery="${nuxeo.db.validationQuery}"
          accessToUnderlyingConnectionAllowed="true" >
        </datasource>
      </extension>
    </component>
    ```

    The variable declaration can also hold a default value after the `:=` marker:
    ```
    maxTotal="${nuxeo.db["max-pool-size"]}:=10"
    ```

The template directory can also hold XML configurations that represent Nuxeo Components.
When the template is activated, these configurations will be deployed by the
[Runtime Framework](#runtime), see below.

The template system can also use Freemarker to handle simple conditional processing:
```
...
<extension target="org.nuxeo.ecm.core.repository.RepositoryService"
   point="repository">
    <repository name="default"
    factory="org.nuxeo.ecm.core.storage.sql.ra.PoolingRepositoryFactory">
      <repository name="default">
        <pool minPoolSize="${nuxeo.vcs["min-pool-size"]}" maxPoolSize="${nuxeo.vcs["max-pool-size"]}"
          blockingTimeoutMillis="100" idleTimeoutMinutes="10" />
<#if "${nuxeo.core.binarymanager}" != "" >
        <binaryManager class="${nuxeo.core.binarymanager}" />
</#if>
        <clustering enabled="${repository.clustering.enabled}" delay="${repository.clustering.delay}" />
        <binaryStore path="${repository.binary.store}" />
...
```

The file holding this configuration should be suffixed by `.nxftl`. This suffix will be removed when the Freemarker processing has been applied. For instance the file `datasources-config.xml.nxftl` will be renamed to `datasources-config.xml`.

### Deployment Fragment Resources Processing

In Nuxeo, the target web application is generated from a group of separated bundles. Each bundle can contribute:

- resources to the WAR directory (JSP files, images, etc),
- contributions to the corresponding `web.xml` servlet file,
- Java property files for i18n messages (translation files),
- &hellip;

To do that, you can place a file named `deployment-fragment.xml` in your jar inside the `OSGI-INF` directory.

This file can contain ANT-LIKE commands and XML contributions to the target templating file.

Sample contribution to the `$NUXEO_HOME/nxserver/nuxeo.war/WEB-INF/web.xml` file, using slot `STD-AUTH-FILTER` (check the file at `$NUXEO_HOME/nxserver/META-INF/templates/web.xml` for the complete list of slots)
```
<?xml version="1.0"?>
<fragment version="1">

  <extension target="web#STD-AUTH-FILTER">
    <filter-mapping>
      <filter-name>NuxeoAuthenticationFilter</filter-name>
      <url-pattern>/nxadmin/*</url-pattern>
      <dispatcher>REQUEST</dispatcher>
      <dispatcher>FORWARD</dispatcher>
    </filter-mapping>
  </extension>

</fragment>
```

Sample copy of the bundle `web/nuxeo.war` resources to the final `$NUXEO_HOME/nxserver/nuxeo.war/` directory:
```
<?xml version="1.0"?>
<fragment version="1">

  <install>
    <unzip from="${bundle.fileName}" to="/" prefix="web">
      <include>web/nuxeo.war/**</include>
    </unzip>
  </install>

</fragment>
```

Note that if you'd like to control the order in which this pre-processing is done, you can add a `require` tag in the fragment, naming the bundle that should be deployed before yours:

```
<?xml version="1.0"?>
<fragment version="1">
  <require>org.nuxeo.ecm.platform.lang</require>
  <install>
    <delete path="${bundle.fileName}.tmp" />
    <mkdir path="${bundle.fileName}.tmp" />
    <unzip from="${bundle.fileName}" to="${bundle.fileName}.tmp" />

    <append from="${bundle.fileName}.tmp/OSGI-INF/l10n/messages_en_US.properties"
      to="nuxeo.war/WEB-INF/classes/messages.properties" addNewLine="true" />
    <append from="${bundle.fileName}.tmp/OSGI-INF/l10n/messages_en_US.properties"
      to="nuxeo.war/WEB-INF/classes/messages_en.properties" addNewLine="true" />
    <append from="${bundle.fileName}.tmp/OSGI-INF/l10n/messages_en_US.properties"
      to="nuxeo.war/WEB-INF/classes/messages_en_US.properties" addNewLine="true" />

    <delete path="${bundle.fileName}.tmp" />
  </install>
</fragment>
```

### {{> anchor 'runtime'}}Nuxeo Runtime Configurations and Bundles Deployment

This phase deploys Nuxeo Runtime Components, registering Nuxeo Services, Extension Points and Contributions.

First, component XML files detected in the `$NUXEO_HOME/nxserver/config/` directory are registered. These files might have been generated there thanks to the previous configuration templates processing.

**NB**: only files with a name ending with **`-config.xml`** will be taken into account.
Sometimes other resources are also present: they will be available in the classpath but will not be considered as component files.

After that, bundles are processed for components, following the Runtime Framework lifecycle:

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Runtime/Runtime Flow
    name: Runtime Flow.png
    server#diagram#up_to_date
--}}
![Runtime Flow](nx_asset://731b5efa-6e69-4998-b3d1-89be397e6e79)

In case of problems during the runtime deployment, the application startup might be aborted
(see [`--lenient` option]({{page page ='nuxeoctl-and-control-panel-usage'}}#lenient) to control
that).

Sample startup log without errors:
```
INFO  [OSGiRuntimeService] Nuxeo Platform Started
======================================================================
= Component Loading Status: Pending: 0 / Missing: 0 / Unstarted: 0 / Total: 548
======================================================================
```

Sample startup log with errors:
```
INFO  [OSGiRuntimeService] Nuxeo Platform Started
======================================================================
= Component Loading Errors:
  * Failed to load contributions for component service:OverridingXPoint-witherror
======================================================================
= Component Loading Status: Pending: 0 / Missing: 0 / Unstarted: 0 / Total: 12
======================================================================
```

To control the order in which components are deployed, you can ass a `<require>` element at the start of a component definition: this component will be deployed after the required component has been deployed too.
This is useful to ensure proper override/merging behaviors on the final configuration held by the service.

Here are a few notes about it:
- a contribution does not need to require its target component: this requirement is implicit, and the contribution will only be registered when the target extension point has been registered.
- Studio bundles are deployed last: they require the `org.nuxeo.runtime.started` pseudo component, which is registered after all components have been resolved.
- a failed requirement (requirement to a missing component) will prevent the server startup.

### Servlet Container Initialization

Next, the Servlet Container is initialized, this is managed by Tomcat.

Servlets, filters, filter mappings are taken into account thanks to the previously-generated `web.xml` configuration.

Additional frameworks are also initialized (like the legacy JSF and Seam frameworks initializations, for instance).

At this point, the application is fully deployed and should be ready to serve external requests.

## NuxeoCtl

[NuxeoCtl]({{page page='nuxeoctl-and-control-panel-usage'}}) is not really part of the deployment, but it's a central tool that helps managing Nuxeo startup and configuration.

NuxeoCtl provides:

- a Nuxeo Bootstrap
    - runs the Configuration Template system
    - starts the target Application Server
- some administration tools
    - Nuxeo Package administration and installation
    - start/stop/restart/configure/&hellip;
- a simple command GUI

* * *
<div class="row" data-equalizer data-equalize-on="medium">
  <div class="column">

{{#> panel heading='Related Documentation'}}

- [Standard High Availability Nuxeo Cluster Architecture]({{page page='standard-high-availability-nuxeo-cluster-architecture'}})
- [nuxeoctl and Control Panel Usage]({{page page='nuxeoctl-and-control-panel-usage'}})
- [Configuration Templates]({{page page='configuration-templates'}})

{{/panel}}

  </div>
</div>
