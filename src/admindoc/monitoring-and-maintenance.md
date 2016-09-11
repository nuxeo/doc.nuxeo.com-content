---
title: Monitoring and Maintenance
review:
    comment: ''
    date: ''
    status: ok
labels:
    - monitoring
    - datasource
toc: true
confluence:
    ajs-parent-page-id: '21921916'
    ajs-parent-page-title: Installation and Administration
    ajs-space-key: ADMINDOC60
    ajs-space-name: Nuxeo Installation and Administration — 6.0
    canonical: Monitoring+and+Maintenance
    canonical_source: 'https://doc.nuxeo.com/display/ADMINDOC60/Monitoring+and+Maintenance'
    page_id: '21921914'
    shortlink: eoBOAQ
    shortlink_source: 'https://doc.nuxeo.com/x/eoBOAQ'
    source_link: /display/ADMINDOC60/Monitoring+and+Maintenance
history:
    - 
        author: Solen Guitter
        date: '2015-02-05 15:53'
        message: ''
        version: '19'
    - 
        author: Manon Lumeau
        date: '2014-12-10 16:04'
        message: ''
        version: '18'
    - 
        author: Anonymous
        date: '2013-10-14 17:25'
        message: ''
        version: '17'
    - 
        author: Solen Guitter
        date: '2013-08-06 11:25'
        message: ''
        version: '16'
    - 
        author: Solen Guitter
        date: '2013-05-22 11:37'
        message: ''
        version: '15'
    - 
        author: Solen Guitter
        date: '2013-05-22 11:36'
        message: ''
        version: '14'
    - 
        author: Solen Guitter
        date: '2013-05-22 11:36'
        message: ''
        version: '13'
    - 
        author: Thierry Delprat
        date: '2012-10-01 18:27'
        message: ''
        version: '12'
    - 
        author: Thierry Delprat
        date: '2012-10-01 11:20'
        message: ''
        version: '11'
    - 
        author: Mathieu Guillaume
        date: '2012-02-09 13:50'
        message: Migrated to Confluence 4.0
        version: '10'
    - 
        author: Mathieu Guillaume
        date: '2012-02-09 13:50'
        message: svn -> hg
        version: '9'
    - 
        author: Mathieu Guillaume
        date: '2011-11-29 13:17'
        message: replaced 5.4.3 with 5.5
        version: '8'
    - 
        author: Solen Guitter
        date: '2011-11-14 15:27'
        message: replaced 5.4.3 with 5.5
        version: '7'
    - 
        author: Benoit Delbosc
        date: '2011-08-22 15:20'
        message: ''
        version: '6'
    - 
        author: Julien Carsique
        date: '2011-08-11 18:23'
        message: ''
        version: '5'
    - 
        author: Julien Carsique
        date: '2011-08-11 18:16'
        message: ''
        version: '4'
    - 
        author: Solen Guitter
        date: '2011-03-04 17:32'
        message: ''
        version: '3'
    - 
        author: Solen Guitter
        date: '2011-03-03 17:22'
        message: ''
        version: '2'
    - 
        author: Admin name placeholder
        date: '2010-03-01 00:58'
        message: ''
        version: '1'

---
## Monitoring Nuxeo

### Nuxeo JMX Monitoring

The Nuxeo Platform exposes counters, probes and stopwatch via [nuxeo-runtime-management]({{page page='supervision'}}).

### Nuxeo Server Running and Components Loading Statuses

The Nuxeo Platform provides an URL for monitoring the server status. This method is actually also used by the Launcher to follow the server startup status, after checking the Java process status.

*   [http://localhost:8080/nuxeo/runningstatus](http://localhost:8080/nuxeo/runningstatus) will be available at last. While it isn't reachable, the server is stopped or still starting.
*   [http://localhost:8080/nuxeo/runningstatus?info=started](http://localhost:8080/nuxeo/runningstatus?info=started) returns `true` if the server finished starting and the Nuxeo runtime is fine with its components.
*   [http://localhost:8080/nuxeo/runningstatus?info=summary&key=xxx](http://localhost:8080/nuxeo/runningstatus?info=summary&key=xxx) returns `true` or `false` (see "info=started") and a detailed summary about components. Access to this URL is restricted by an access key configurable in `nuxeo.conf` (see `"server.status.key"` in [Configuration Parameters Index (nuxeo.conf)]({{page page='configuration-parameters-index-nuxeoconf'}})).

{{#> panel type='code' heading='Sample output if something was wrong at startup (for instance, missing RelationService)'}}

```
false
======================================================================
= Nuxeo EP Started
======================================================================
= Component Loading Status: Pending: 7 / Unstarted: 0 / Total: 462
  * service:org.nuxeo.ecm.webengine.sites.wiki.relation requires [service:org.nuxeo.ecm.platform.relations.services.RelationService]
  * service:org.nuxeo.ecm.annotations.graph requires [service:org.nuxeo.ecm.platform.relations.services.RelationService]
  * service:org.nuxeo.ecm.platform.relations.jena requires [service:org.nuxeo.ecm.platform.relations.services.RelationService]
  * service:org.nuxeo.ecm.annotations.repository.graph requires [service:org.nuxeo.ecm.platform.relations.services.RelationService]
  * service:org.nuxeo.ecm.platform.publisher.relations.contrib requires [service:org.nuxeo.ecm.platform.relations.services.RelationService]
  * service:org.nuxeo.ecm.platform.relations.services.DefaultJenaGraph requires [service:org.nuxeo.ecm.platform.relations.services.RelationService]
  * service:org.nuxeo.ecm.platform.comment.service.CommentServiceConfig requires [service:org.nuxeo.ecm.platform.relations.services.RelationService]
======================================================================

```

{{/panel}}

You can get that information with `./bin/nuxeoctl status` (see [nuxeoctl and Control Panel Usage]({{page page='nuxeoctl-and-control-panel-usage'}})).

&nbsp;