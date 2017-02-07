---
title: Monitoring and Maintenance
review:
    comment: ''
    date: ''
    status: ok
labels:
    - monitoring
    - datasource
    - monitoring-component
    - lts2015-ok
toc: true
confluence:
    ajs-parent-page-id: '27604624'
    ajs-parent-page-title: Installation and Administration
    ajs-space-key: ADMINDOC710
    ajs-space-name: Nuxeo Installation and Administration — LTS 2015
    canonical: Monitoring+and+Maintenance
    canonical_source: 'https://doc.nuxeo.com/display/ADMINDOC710/Monitoring+and+Maintenance'
    page_id: '27604627'
    shortlink: kzalAQ
    shortlink_source: 'https://doc.nuxeo.com/x/kzalAQ'
    source_link: /display/ADMINDOC710/Monitoring+and+Maintenance
tree_item_index: 500
version_override:
    'FT': '/nxdoc/monitoring-and-maintenance'
    'LTS 2016': 810/nxdoc/monitoring-and-maintenance
    '6.0': 60/admindoc/monitoring-and-maintenance
    '5.8': 58/admindoc/monitoring-and-maintenance
history:
    -
        author: Mathieu Guillaume
        date: '2015-12-08 12:02'
        message: ''
        version: '25'
    -
        author: Solen Guitter
        date: '2015-02-05 13:25'
        message: ''
        version: '24'
    -
        author: Benoit Delbosc
        date: '2015-02-04 10:40'
        message: 'remove deprecated info, add new page reporting problem'
        version: '23'
    -
        author: Benoit Delbosc
        date: '2015-02-04 10:37'
        message: Reverted from v. 18
        version: '22'
    -
        author: Benoit Delbosc
        date: '2015-02-04 10:21'
        message: ''
        version: '21'
    -
        author: Benoit Delbosc
        date: '2015-02-04 09:54'
        message: ''
        version: '20'
    -
        author: Benoit Delbosc
        date: '2015-02-03 14:35'
        message: Add jvm command useful for support
        version: '19'
    -
        author: Manon Lumeau
        date: '2014-12-10 16:06'
        message: ''
        version: '18'
    -
        author: Solen Guitter
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

The Nuxeo Platform exposes a lot of metrics, either through JMX or through the Coda Hale Metrics library. See the&nbsp;[Metrics and Monitoring]({{page page='metrics-and-monitoring'}}) page for more details.

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
