---
title: Metrics and Monitoring
description: The Nuxeo Platform exposes a lot of metrics, either through JMX or through the Coda Hale Metrics library.
review:
    comment: ''
    date: '2017-12-14'
    status: ok
labels:
    - lts2016-ok
    - metrics
    - performance
    - monitoring-component
    - bdelbosc
    - multiexcerpt
    - lts2017-ok
toc: true
confluence:
    ajs-parent-page-id: '950318'
    ajs-parent-page-title: Monitoring and Maintenance
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Metrics+and+Monitoring
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Metrics+and+Monitoring'
    page_id: '12914816'
    shortlink: gBDF
    shortlink_source: 'https://doc.nuxeo.com/x/gBDF'
    source_link: /display/NXDOC/Metrics+and+Monitoring
tree_item_index: 100
version_override:
    LTS 2015: 710/admindoc/metrics-and-monitoring
    '6.0': 60/admindoc/metrics-and-monitoring
    '5.8': 58/admindoc/metrics-and-monitoring
history:
    -
        author: Anahide Tchertchian
        date: '2016-07-08 16:17'
        message: 'XDOC-840: document action service metric'
        version: '39'
    -
        author: Manon Lumeau
        date: '2016-03-25 16:45'
        message: ''
        version: '38'
    -
        author: Manon Lumeau
        date: '2016-02-25 10:31'
        message: ''
        version: '37'
    -
        author: Manon Lumeau
        date: '2016-02-25 10:29'
        message: ''
        version: '36'
    -
        author: Manon Lumeau
        date: '2016-02-25 10:29'
        message: ''
        version: '35'
    -
        author: Solen Guitter
        date: '2016-02-24 15:23'
        message: ''
        version: '34'
    -
        author: Benoit Delbosc
        date: '2016-02-24 11:28'
        message: Update admin center activity view
        version: '33'
    -
        author: Benoit Delbosc
        date: '2016-01-27 12:41'
        message: Move list of metrics before how to report them
        version: '32'
    -
        author: Manon Lumeau
        date: '2016-01-27 11:23'
        message: ''
        version: '31'
    -
        author: Manon Lumeau
        date: '2015-10-14 09:33'
        message: ''
        version: '30'
    -
        author: Manon Lumeau
        date: '2015-10-14 09:33'
        message: ''
        version: '29'
    -
        author: Manon Lumeau
        date: '2015-10-14 09:26'
        message: ''
        version: '28'
    -
        author: Benoit Delbosc
        date: '2015-10-13 14:37'
        message: ''
        version: '27'
    -
        author: Benoit Delbosc
        date: '2015-10-13 14:35'
        message: ''
        version: '26'
    -
        author: Benoit Delbosc
        date: '2015-10-13 14:34'
        message: Update metrics list for 7.10
        version: '25'
    -
        author: Solen Guitter
        date: '2015-02-19 14:37'
        message: Update related pages
        version: '24'
    -
        author: Solen Guitter
        date: '2014-12-26 12:49'
        message: Fix metrics.graphite.port to 2003 instead of 2030
        version: '23'
    -
        author: Manon Lumeau
        date: '2014-12-05 16:15'
        message: ''
        version: '22'
    -
        author: Solen Guitter
        date: '2014-08-29 15:31'
        message: ''
        version: '21'
    -
        author: Solen Guitter
        date: '2014-08-29 15:29'
        message: ''
        version: '20'
    -
        author: Solen Guitter
        date: '2014-08-29 15:28'
        message: ''
        version: '19'
    -
        author: Solen Guitter
        date: '2014-08-29 15:13'
        message: ''
        version: '18'
    -
        author: Solen Guitter
        date: '2013-12-18 17:07'
        message: ''
        version: '17'
    -
        author: Solen Guitter
        date: '2013-10-14 17:28'
        message: Added TOC
        version: '16'
    -
        author: Solen Guitter
        date: '2013-07-15 15:56'
        message: Fixed broken link to Diamond and added related topics
        version: '15'
    -
        author: Benoit Delbosc
        date: '2013-06-27 17:31'
        message: ''
        version: '14'
    -
        author: Benoit Delbosc
        date: '2013-06-27 17:31'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2013-06-18 14:35'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2013-03-26 22:31'
        message: ''
        version: '11'
    -
        author: Benoit Delbosc
        date: '2013-03-25 14:58'
        message: ''
        version: '10'
    -
        author: Benoit Delbosc
        date: '2013-03-25 14:46'
        message: ''
        version: '9'
    -
        author: Benoit Delbosc
        date: '2013-03-21 11:27'
        message: ''
        version: '8'
    -
        author: Benoit Delbosc
        date: '2013-03-21 11:26'
        message: ''
        version: '7'
    -
        author: Benoit Delbosc
        date: '2013-03-19 15:55'
        message: ''
        version: '6'
    -
        author: Benoit Delbosc
        date: '2013-03-19 15:53'
        message: ''
        version: '5'
    -
        author: Benoit Delbosc
        date: '2013-03-19 15:46'
        message: ''
        version: '4'
    -
        author: Benoit Delbosc
        date: '2013-03-19 15:33'
        message: ''
        version: '3'
    -
        author: Benoit Delbosc
        date: '2013-03-19 15:24'
        message: ''
        version: '2'
    -
        author: Benoit Delbosc
        date: '2013-03-19 15:16'
        message: ''
        version: '1'

---
## Metrics

The platform uses [Coda Hale Yammer Metrics](http://metrics.dropwizard.io/).

These metrics are exposed via JMX but can also be reported with CSV files or send to a [Graphite](http://graphite.wikidot.com/) server.

### List of Metrics

Here is a short list of Nuxeo metrics:

*   `nuxeo.repositories.default.documents`
    *   `create` Counter of document created
    *   `delete` Counter of document deleted
    *   `update` Counter of document updated
*   `nuxeo.repositories.jdbc/nuxeo.connections`
    *   `count` VCS connection count
    *   `idle` VCS idle connection count
*   `nuxeo.transactions.concurrents`
    *   `count` Counter for concurrent transaction
    *   `max` Maximum value of the previous counter
*   `nuxeo.transactions.duration` Timer for transactions
*   `nuxeo.transactions.rollbacks` Counter for transactions in failure
*   `nuxeo.works.<WORKER_POOL>`:
    *   `completed` Counter for completed jobs
    *   `running` Counter of running jobs
    *   `scheduled.count` Counter of job waiting to be processed
    *   `scheduled.max` Maximum scheduled jobs
    *   `total` Timer for the job duration
*   `nuxeo.elasticsearch.service`
    *   `bulkIndex` Timer for bulk index operations
    *   `index` Timer for index operations
    *   `delete` Timer for deletion operations
    *   `search` Timer on search operations
    *   `fetch` Measure the time to retrieve documents
*   `nuxeo.ActionService`
    *   `ations` or `actions` (typo fixed for versions 7.10-HF13 and 8.4) Timer for actions retrieval given a category (including filters evaluation)
    *   `action` Timer for action retrieval given the action id (including filters evaluation)
    *   `filters` Timer for filters evaluation for a given action
    *   `filter` Timer for filter evaluation for a given filter id

See this [JMX monitoring]({{page page='reporting-problems'}}) page to get a list of all available metrics.

Note that metrics are prefixed depending on how they are exposed, for instance a counter like `nuxeo.repositories.default.documents.create` will be accessible:

*   in graphite with the name`servers.myhostname.nuxeo.nuxeo.repositories.default.documents.create.count`
*   in JMX with a mbean named:  [`metrics:name=nuxeo.repositories.default.documents.create`](http://metricsname=nuxeo.repositories.default.documents.create)

{{#> callout type='info' }}

To have a complete monitoring you should also monitor the system, the database and the Elasticsearch cluster, a tool like [Diamond](https://github.com/BrightcoveOS/Diamond/wik/) can do this easily.
The default prefix (`servers.${HOSTNAME}.nuxeo`) used by the Graphite reporter is compatible with Diamond but it can be changed by the setting `metrics.graphite.prefix` in`nuxeo.conf`.

{{/callout}}

### Publishing Metrics

###### {{> anchor 'enabling-jmx'}}Enabling JMX Reporting

To enable JMX reporting add the following to the nuxeo.conf file:

```
JAVA_OPTS=$JAVA_OPTS -Dcom.sun.management.jmxremote=true
```

{{#> callout type='note' }}

You then have to manage security for this access, since there is no authentication by default.

{{/callout}}

![]({{file name='metric-jvisualvm.png'}} ?w=500)

###### Enabling CSV Reporting

```
metrics.csv.enabled=true
# The amount of time in second between metrics publication
metrics.csv.period=30
# This will create a sub directory metrics-TIMESTAMP
metrics.csv.dir=${nuxeo.log.dir}
```

###### Enabling Graphite Reporting

```
metrics.graphite.enabled=true
metrics.graphite.host=localhost
metrics.graphite.port=2003
# The amount of time in second between metrics publication
metrics.graphite.period=30
```

![]({{file name='graphite-reporting.png'}} ?w=500,h=398,border=true)

###### Reporting Tomcat JMX Info

```
metrics.tomcat.enabled=true
```

###### Reporting Log4j Info

```
metrics.log4j.enabled=true
```
This is very handy to report total number of `ERROR` or `WARN` in the `server.log`.

###### Reporting to Datadog

You can report Nuxeo metrics to Datadog using the package: https://github.com/nuxeo/marketplace-datadog

### Metrics rendering

#### Graphite Dashboard

You can find an example of Graphite dashboard on GitHub: [https://github.com/nuxeo/nuxeo-runtime/blob/master/nuxeo-runtime-metrics/graphite/dashboard.json](https://github.com/nuxeo/nuxeo-runtime/blob/master/nuxeo-runtime-metrics/graphite/dashboard.json).

You will have to edit the dashboard to replace the hostname (here it is `octopussy`).

Here is an extract of what this dashboard looks like when monitoring a daily bench.

![]({{file name='graphite-nuxeo.png'}} ?w=500,h=198,border=true)

![]({{file name='graphite-nuxeo2.png'}} ?w=500,h=195,border=true)

#### Grafana

Metrics published to Graphite can also be rendered with [Grafana](https://grafana.com/).


## Monitoring

The Nuxeo Platform also comes with a set of default probes and administrative statuses for monitoring, that are provided by the [component Nuxeo Core Management](http://explorer.nuxeo.org/nuxeo/site/distribution/current/viewComponent/org.nuxeo.ecm.core.management.CoreManagementComponent). Both can be seen and managed [from JMX](#enabling-jmx) and from [Admin Center]({{page page='admin-tab-overview'}}).

### Administrative Status

An administrative Status is a way to define cluster-wide or instance-wide named variables that can be used to manage the status of a running platform:

*   turn on/off a node of the cluster,
*   display a message to all users of the platform,
*   ...

By default only three statuses are defined:

*   `nuxeoInstance`: indicates if a Nuxeo instance (cluster node) is active of not,
*   `adminMessage`: message to be displayed to all users,
*   `smtpService`: defines if SMTP gateway can be used.

Administrative Status can be configured and declared via the [`serviceDefinition` extension point](http://explorer.nuxeo.org/nuxeo/site/distribution/current/viewExtensionPoint/org.nuxeo.ecm.core.management.CoreManagementComponent--serviceDefinition).

### Probes

Probes can be used to run a test on the target deployed platform. Probes can be used to check that all part of the architecture are actually running for real:

*   check LDAP access,
*   check instance availability,
*   check VCS access,
*   ...

Probes can be defined via the[ `probes` extension point](http://explorer.nuxeo.org/nuxeo/site/distribution/current/viewExtensionPoint/org.nuxeo.ecm.core.management.CoreManagementComponent--probes).

By default four probes are defined:

*   `adminStatus`: checks local instance enable flag (checks `nuxeoInstance` adminsitrative status),
*   `activeRepositorySession`: returns the number of active sessions per repository,
*   `ldapDirectory`: check LDAP connectivity,
*   `remoteSQLStorageSession`: number of remove VCS client connected (only used in VCS client/server mode that is not enabled by default).

Probes can also be run as part of the healthCheck when invoking the Status servlet.
By default the following probes are enabled for the check:
* `s3BinaryManagerStatus`
*   `runtimeStatus`
*   `elasticSearchStatus`
*   `ldapDirectories`
*   `repositoryStatus`

Probes can be enabled/disabled for the healthCheck using the [`healthCheck` extension point](http://explorer.nuxeo.org/nuxeo/site/distribution/current/viewExtensionPoint/org.nuxeo.ecm.core.management.CoreManagementComponent--healthCheck).   


### Monitoring Using JMX Access

You can use JVisualVM or similar tool to access Nuxeo JMX interface. See the section [Enabling JMX Access](#enabling-jmx).

### Monitoring Using the Admin Center

Inside the Admin Center there are two sections that are related to monitoring: Activity and Monitoring.

#### Activity

The Activity section provides access to:

*   A **Users sessions** tab that displays counters for the web UI access:

    {{! multiexcerpt name='users-sessions-tab-details'}}
    *   Total number of active HTTP sessions: The number of user active user session on the UI.
    *   Total number of HTTP requests: The number of requests for page and dynamic resources served by JSF/faces.
    *   List active sessions within a duration.{{! /multiexcerpt}}
*   A view on audit event logs
*   The background jobs
*   Repository analytics

The Activity section provides access to:

*   A view that displays HTTP counters (requests and sessions)
*   A view on audit logs
*   Activity charts based on web and repository counters

#### Monitoring

The Monitoring sections provides access to:

*   A view on Administrative Status (view/edit)
*   A view on probes (view/run)
*   A view that allows to enable Event Listener statistic gathering

### REST Access

#### Counters

Counter are exposed via Automation API [Counters.GET](http://explorer.nuxeo.org/nuxeo/site/distribution/current/viewOperation/Counters.GET)

Sample CURL call:

```
curl -H 'Content-Type:application/json+nxrequest' -X POST -d
'{"params":{"counterNames":"org.nuxeo.web.requests"}}' -u
Administrator:Administrator http://localhost:8080/nuxeo/site/automation/Counters.GET
```

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [Remote Monitoring Through a SSH Tunnel]({{page page='remote-monitoring-through-a-ssh-tunnel'}})
- [Transactions and Connections]({{page page='transactions-and-connections'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
