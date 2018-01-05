---
title: Understanding Bundles Deployment
review:
    comment: ''
    date: '2016-12-20'
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

&nbsp;

{{! excerpt}}

The Nuxeo Platform deployment is incremental: the startup process involves different processors for different phases.

{{! /excerpt}}

1.  Template processor for configuration
2.  Deployment-fragment pre-processor
3.  Bundle activation and deployment
4.  WAR/EAR deployment

![]({{file name='Nx-deploy.png'}} ?w=600,h=472,border=true)

### Template Processor

The template system allows to use template for generating configuration files:

*   data source declaration
*   JCA connector declaration
*   SMTP Gateway
*   monitoring extensions
*   misc extension point contributions
    (LDAP, SMTP, OpenOffice.org)

The template processor system uses Java property files to read the variable and do the replacement in the template to generate the actual configuration files.

The template processor system contains a profile system so that a given server can quickly be reconfigured for a target environment:

*   Dev profile
*   Integration profile
*   Production profile
*   &hellip;

The template system uses Freemarker so that template can contain simple conditional processing.

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

### Deployment Fragment Preprocessor

In Nuxeo, the target web application is in fact created from a lot of separated bundles.

For that each bundle can contribute :

*   resources to the WAR
*   declaration in the web.xml
*   declaration in the faces-config.xml
*   Java property files for i18n
*   &hellip;

Because in JEE5 there is no standard way to do that, we use a pre-deployment processor that will process the bundles for deployment-fragment.xml files.

The deployment fragment contains ANT like commands that will be executed in order to contribute bundle resources to the JEE WAR Archive.

```
<extension target="pages#PAGES">
    <!-- Bind url to start the download -->
    <page view-id="/nxconnectDownload.xhtml"
      action="#{externalLinkManager.startDownload()}" />
  </extension>

  <extension target="faces-config#NAVIGATION">
    <navigation-case>
      <from-outcome>view_admin</from-outcome>
      <to-view-id>/view_admin.xhtml</to-view-id>
      <redirect />
    </navigation-case>
  </extension>

  <extension target="web#STD-AUTH-FILTER">
    <filter-mapping>
      <filter-name>NuxeoAuthenticationFilter</filter-name>
      <url-pattern>/nxadmin/*</url-pattern>
      <dispatcher>REQUEST</dispatcher>
      <dispatcher>FORWARD</dispatcher>
    </filter-mapping>
  </extension>

```

### Bundle Deployment

This phase is the real deployment &ldquo;&agrave; la OSGi&rdquo; :

*   activate bundles
*   declare components, services and extension points
*   resolve Extension Point contributions

### Standard WAR/EAR Deployment

The standard WAR deployment is managed by the host application server that will handle:

*   Web resource declaration
    (using the aggregated descriptor generated by the pre-deployment)
*   JSF initialization
*   Seam Init

## NuxeoCtl

[NuxeoCtl]({{page page='nuxeoctl-and-control-panel-usage'}}) is not really part of the deployment, but it's a central tool that helps managing Nuxeo Startup.

NuxeoCtl provides

*   a Nuxeo Bootstrap
    *   runs template system
    *   starts the target Application Server
*   some administration tools
    *   Nuxeo Package administration and installation
    *   start/stop/restart/configure &hellip;
*   a simple command GUI

NuxeoCtl, like the Templating System, is not really needed to be able to run Nuxeo. It just helps having a simple and efficient configuration.

It will be more and more true as we continue integrating features inside NuxeoCtl :

*   multi-node commands (like update package on each node)
*   cloud commands

In a sense, NuxeoCtl is close to what is provided in several &ldquo;Cloud packaged tomcats&rdquo; (TcServer, CloudFoundry &hellip;).

## Existing Deployment Targets

Nuxeo Platform currently supports several deployment targets.

<div class="table-scroll"><table class="hover"><tbody><tr><td colspan="1">

&nbsp;

</td><td colspan="1">

**Testing**
**(Junit)**

</td><td colspan="1">

**Custom Tomcat/JBoss**
**(dynamic mode)**

</td><td colspan="1">

**Tomcat WAR**
**(static mode)**

</td><td colspan="1">

**Jboss EAR**
**(static mode)**

</td></tr><tr><td colspan="1">

**_NuxeoCtl_**

</td><td colspan="1">

<span style="color: rgb(153,153,153);">Not used</span>

</td><td colspan="1">

Yes

</td><td colspan="1">

<span style="color: rgb(204,204,204);">No</span>

</td><td colspan="1">

<span style="color: rgb(204,204,204);">No</span>

</td></tr><tr><td colspan="1">

**_Config templating_**

</td><td colspan="1">

<span style="color: rgb(153,153,153);">Not used</span>

</td><td colspan="1">

Yes

</td><td colspan="1">

<span style="color: rgb(153,153,153);">Run once</span>
<span style="color: rgb(153,153,153);">(before creating the WAR)</span>

</td><td colspan="1">

<span style="color: rgb(153,153,153);">Run once</span>
<span style="color: rgb(153,153,153);">(before creating the EAR)</span>

</td></tr><tr><td colspan="1">

**_Pre-deployment_**

</td><td colspan="1">

<span style="color: rgb(153,153,153);">Not used</span>

</td><td colspan="1">

Started by custom deployer

</td><td colspan="1">

<span style="color: rgb(153,153,153);">Run once</span>
<span style="color: rgb(153,153,153);">(before creating the WAR)</span>

</td><td colspan="1">

<span style="color: rgb(153,153,153);">Run once</span>
<span style="color: rgb(153,153,153);">(before creating the EAR)</span>

</td></tr><tr><td colspan="1">

**_Bundle activation_**

</td><td colspan="1">

Yes via Junit

</td><td colspan="1">

Started by custom deployer

</td><td colspan="1">

Started by Servlet listener

</td><td colspan="1">

Started by Jboss EAR listener

</td></tr><tr><td colspan="1">

**_Standard deployment_**

</td><td colspan="1">

<span style="color: rgb(179,179,179);">Not used</span>

</td><td colspan="1">

Yes

</td><td colspan="1">

Yes

</td><td colspan="1">

Yes

</td></tr><tr><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td></tr><tr><td colspan="1">

**_Full deployment_**

</td><td colspan="1">

No JSF / WAR

</td><td colspan="1">

Yes

</td><td colspan="1">

Yes

</td><td colspan="1">

Yes

</td></tr><tr><td colspan="1">

**_Marketplace feature_**

</td><td colspan="1">

N/A

</td><td colspan="1">

Yes

</td><td colspan="1">

No

</td><td colspan="1">

No

</td></tr></tbody></table></div>

Depending on the target platform:

*   all deployment phases may not be run
*   platform features may change

The static deployment model was added initially for JBoss and was then extended to Tomcat too.

In the static deployment model NuxeoCtl pack command is run to:

*   run the template system
*   run the pre-processing
*   reorganize the WAR/EAR structure
*   add a activator to start the Bundle deployment
*   zip everything&nbsp;
    ![]({{file name='Nx-static-deploy.png'}} ?w=600,h=313,border=true)

&nbsp;

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related sections in this documentation'}}

- [Standard High Availability Nuxeo Cluster Architecture]({{page page='standard-high-availability-nuxeo-cluster-architecture'}})
- [nuxeoctl and Control Panel Usage]({{page page='nuxeoctl-and-control-panel-usage'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
