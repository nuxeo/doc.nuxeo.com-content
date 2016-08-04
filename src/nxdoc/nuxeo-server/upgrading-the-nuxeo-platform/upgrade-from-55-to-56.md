---
title: Upgrade from 5.5 to 5.6
labels:
    - multiexcerpt
toc: true
confluence:
    ajs-parent-page-id: '3343538'
    ajs-parent-page-title: Upgrading the Nuxeo Platform
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Upgrade+from+5.5+to+5.6
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Upgrade+from+5.5+to+5.6'
    page_id: '11044306'
    shortlink: 0oWo
    shortlink_source: 'https://doc.nuxeo.com/x/0oWo'
    source_link: /display/NXDOC/Upgrade+from+5.5+to+5.6
history:
    - 
        author: Solen Guitter
        date: '2015-04-14 14:56'
        message: ''
        version: '11'
    - 
        author: Solen Guitter
        date: '2015-04-14 14:54'
        message: ''
        version: '10'
    - 
        author: Solen Guitter
        date: '2013-07-02 10:23'
        message: ''
        version: '9'
    - 
        author: Solen Guitter
        date: '2013-07-02 10:23'
        message: ''
        version: '8'
    - 
        author: Solen Guitter
        date: '2013-07-02 10:22'
        message: ''
        version: '7'
    - 
        author: Solen Guitter
        date: '2013-07-02 10:02'
        message: ''
        version: '6'
    - 
        author: Solen Guitter
        date: '2013-02-25 16:37'
        message: ''
        version: '5'
    - 
        author: Solen Guitter
        date: '2013-02-25 16:36'
        message: ''
        version: '4'
    - 
        author: Solen Guitter
        date: '2012-09-05 23:31'
        message: Migrated to Confluence 4.0
        version: '3'
    - 
        author: Solen Guitter
        date: '2012-09-05 23:31'
        message: ''
        version: '2'
    - 
        author: Thierry Martins
        date: '2012-09-04 10:53'
        message: ''
        version: '1'

---
{{! multiexcerpt name='5.5-to-5.6-upgrade-page'}}

This chapter presents the detailed process to upgrade from Nuxeo 5.5 to Nuxeo 5.6\. Most of it is useful information you need to have to fully understand what has changed in this release.

## Installation & Configuration

Follow the [Installation instruction]({{page space='admindoc56' page='installation'}}).

The following lists known upgrade issues.

### Database

Even if your custom template defines an inclusion of 'database' template,

```
nuxeo.template.includes=postgresql
```

you must set it in nuxeo.conf for `nuxeo.template` property

```
nuxeo.templates=postgresql,custom
```

Moreover, the 'database' template does not depend on 'default' template any more, but on 'common' template. So you may have to update your nuxeo.defaults if you previously included 'default'.

### HTTPS

If you're getting the following error at startup: "Expression nuxeo.server.https.keystoreFile is undefined on line 101, column 32 in server.xml.nxftl" (complete stack trace available at [NXP-9874](https://jira.nuxeo.com/browse/NXP-9874)), you should change the nuxeo.conf file properties as more properties are now require for HTTPS configuration. If you do not need HTTPS, do not fill any of the https properties. Otherwise, make sure you fill all the properties the startup complains about.

The HTTPS properties to define are:

*   `nuxeo.server.https.port=443`
*   `nuxeo.server.https.keystoreFile=/path/to/keystore`
*   `nuxeo.server.https.keystorePass=password`
*   `nuxeo.url=`<span class="nolink"><span class="nolink">https://localhost/nuxeo</span></span> (use your public HTTPS URL here)

The keystore is a file where the JVM will store certificates used and trusted by the HTTPS protocol. It has to be set up using Java's [keytool](http://docs.oracle.com/javase/6/docs/technotes/tools/solaris/keytool.html) command.

### Workflow

The workflow system previously used (based on jBPM) has been moved to an addon ([Nuxeo jBPM](http://github.com/nuxeo/nuxeo-platform-jbpm)) and is not present anymore in the default Nuxeo distribution. This old workflow system has been replaced by a new, improved one that includes Nuxeo Studio support to design new workflows using a graphical user interface.

### Third party libraries upgrades (informative)

*   **OpenCMIS** - Nuxeo Platform is now aligned on OpenCMIS 0.7 that comes with support for the CMIS Browser binding (JavaScript compliant API).

## Data Migration

### Oracle and Clustering

When using Oracle and Nuxeo clustering, you will have to upgrade your cluster tables. See the [NXP-9541](https://jira.nuxeo.com/browse/NXP-9541) Upgrade notes for details.

### Custom repository definition

If you have a custom repository descriptor or if you have overridden the default file comming with Nuxeo ( `default-repository-config.xml` ), be aware that this file now contains 2 contributions :

*   `<extension target="org.nuxeo.ecm.core.api.repository.RepositoryManager" point="repositories">`
*   `<extension target="org.nuxeo.ecm.core.repository.RepositoryService" point="repository">`

If you have a customized file comming from an earlier version of Nuxeo, the first contribution will be missing (it was previously in nxserver/config/platform-config.xml).

So you will need to add the repository declaration : either in a separated file or directly inside the `default-repository-config.xml`

```
<extension target="org.nuxeo.ecm.core.api.repository.RepositoryManager" point="repositories">
  <repository name="default" label="Default Repository" />
</extension>

```

NB : If this contribution is missing, the Repository initialization will fail with

```
Caused by: org.nuxeo.ecm.core.api.ClientException: Cannot get repository: default
	at org.nuxeo.ecm.core.api.UnrestrictedSessionRunner.runUnrestricted(UnrestrictedSessionRunner.java:137)
	at org.nuxeo.ecm.core.repository.RepositoryService.initializeRepository(RepositoryService.java:166)

```

## Code migration

### Scheduler service

The name of the Scheduler service component has changed from `org.nuxeo.ecm.platform.scheduler.core.service.SchedulerRegistryService` to `org.nuxeo.ecm.core.scheduler.SchedulerService.`

The descriptor format has not changed so migrating should be as easy as changing extension point usages :

```
<?xml version="1.0"?>
<component name="com.example.nuxeo.schedule.monthly_stuff">
  <extension target="org.nuxeo.ecm.core.scheduler.SchedulerService"
      point="schedule">
    ...
  </extension>
</component>
```

{{! /multiexcerpt}}