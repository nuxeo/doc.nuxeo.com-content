---
title: Metrics and Monitoring
review:
    comment: ''
    date: ''
    status: ok
labels:
    - metrics
    - performance
toc: true
confluence:
    ajs-parent-page-id: '21921914'
    ajs-parent-page-title: Monitoring and Maintenance
    ajs-space-key: ADMINDOC60
    ajs-space-name: Nuxeo Installation and Administration — 6.0
    canonical: Metrics+and+Monitoring
    canonical_source: 'https://doc.nuxeo.com/display/ADMINDOC60/Metrics+and+Monitoring'
    page_id: '21921871'
    shortlink: T4BOAQ
    shortlink_source: 'https://doc.nuxeo.com/x/T4BOAQ'
    source_link: /display/ADMINDOC60/Metrics+and+Monitoring
tree_item_index: 100
history:
    -
        author: Solen Guitter
        date: '2016-02-24 15:19'
        message: ''
        version: '27'
    -
        author: Solen Guitter
        date: '2016-02-24 15:17'
        message: Add information on Activity tab
        version: '26'
    -
        author: Benoit Delbosc
        date: '2015-10-13 16:15'
        message: ''
        version: '25'
    -
        author: Solen Guitter
        date: '2015-02-19 14:44'
        message: update related pages
        version: '24'
    -
        author: Solen Guitter
        date: '2014-12-26 12:49'
        message: Fix metrics.graphite.port to 2003 instead of 2030
        version: '23'
    -
        author: Manon Lumeau
        date: '2014-12-05 16:16'
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

The platform uses [Coda Hale Yammer Metrics](http://metrics.codahale.com/).

These metrics are exposed via JMX but can also be reported with CSV files or send to a [Graphite](http://graphite.wikidot.com/) server.

### Reporting Metrics

###### {{> anchor 'enabling-jmx'}}Enabling JMX Reporting

To enable JMX reporting add the following to the nuxeo.conf file:

```
JAVA_OPTS=$JAVA_OPTS -Dcom.sun.management.jmxremote=true
```

{{#> callout type='note' }}

You then have to manage security for this access, since there is no authentication by default.

{{/callout}}

![]({{file name='metric-jvisualvm.png'}} ?w=500)

###### Enabling CSV reporting

```
metrics.csv.enabled=true
metrics.csv.period=10
# This will create a sub directory metrics-TIMESTAMP
metrics.csv.dir=${nuxeo.log.dir}
```

###### Enabling Graphite reporting

```
metrics.graphite.enabled=true
metrics.graphite.host=localhost
metrics.graphite.port=2003
metrics.graphite.period=10
```

![]({{file name='graphite-reporting.png'}} ?w=500,h=398,border=true)

###### Reporting log4j stats

```
metrics.log4j.enabled=true
```

###### Reporting tomcat JMX info:

```
metrics.tomcat.enabled=true
```

Note that period to report metrics are in second.

### Nuxeo Metrics

Metrics are prefixed when exposed to graphite, the default prefix is `servers.${HOSTNAME}.nuxeo` to be compliant with Diamond prefix,
this can be changed by setting the `metrics.graphite.prefix` in `nuxeo.conf`.

For instance the counter for document creation named `nuxeo.repositories.default.documents.create` is exposed:

*   in graphite with the name `servers.myhostname.nuxeo.nuxeo.repositories.default.documents.create.count`
*   in JMX with a mbean named: [`metrics:name=nuxeo.repositories.default.documents.create`](http://metricsname=nuxeo.repositories.default.documents.create)

Here is a short list of Nuxeo metrics:

*   nuxeo.repositories.default.documents
    *   create: Counter of document created
    *   delete: Counter of document deleted
    *   update: Counter of document updated
*   [nuxeo.repositories.jdbc/nuxeo.connections](http://nuxeo.repositories.jdbc/nuxeo.connections)
    *   count: VCS connection count
    *   idle: VCS idle connection count
*   nuxeo.transactions.concurrents
    *   count: Counter for concurrent transaction
    *   max: Maximum value of the previous counter
*   nuxeo.transactions.duration: Timer for transactions
*   nuxeo.transactions.rollbacks: Counter for transactions in failure
*   nuxeo.works.<WORKER_POOL>:
    *   completed: Counter for completed jobs
    *   running: Counter of running jobs
    *   scheduled.count: Counter of job waiting to be processed
    *   scheduled.max: Maximum scheduled jobs
    *   total: Timer for the job duration
*   nuxeo.elasticsearch.service
    *   bulkIndex: Timer for bulk index operations
    *   index: Timer for index operations
    *   delete: Timer for deletion operations
    *   search: Timer on search operations
    *   fetch: Measure the time to retrieve documents

The Graphite reporter also include JVM metrics for GC, memory and thread pool.

See the [reporting problem JMX monitoring]({{page space='nxdoc' page='reporting-problems'}}) to list all of the available metrics.

You should also monitor the system and the database to have a complete monitoring, tools like [Diamond](https://github.com/BrightcoveOS/Diamond/wik/) can do this easily.

### Graphite Dashboard

You can find an example of Graphite dashboard on GitHub: [https://github.com/nuxeo/nuxeo-runtime/blob/release-6.0/nuxeo-runtime-metrics/graphite/dashboard.json](https://github.com/nuxeo/nuxeo-runtime/blob/release-6.0/nuxeo-runtime-metrics/graphite/dashboard.json).

You will have to edit the dashboard to replace the hostname (here it is `octopussy`).

Here is an extract of what this dashboard looks like when monitoring a daily bench.

![]({{file name='graphite-nuxeo.png'}} ?w=500,h=198,border=true)

![]({{file name='graphite-nuxeo2.png'}} ?w=500,h=195,border=true)

## Monitoring

The Nuxeo Platform also comes with a set of default probes and administrative statuses for monitoring, that are provided by the [component Nuxeo Core Management](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-6.0/viewComponent/org.nuxeo.ecm.core.management.CoreManagementComponent). Both can be seen and managed [from JMX](#enabling-jmx) and from [Admin Center]({{page page='admin-tab-overview'}}).

### Administrative Status

An administrative Status is a way to define cluster-wide or instance-wide named variables that can be used to manage the status of a running platform:

*   turn on/off a node of the cluster,
*   display a message to all users of the platform,
*   ...

By default only three statuses are defined:

*   `nuxeoInstance`: indicates if a Nuxeo instance (cluster node) is active of not,
*   `adminMessage`: message to be displayed to all users,
*   `smtpService`: defines if SMTP gateway can be used.

Administrative Status can be configured and declared via the [`serviceDefinition` extension point](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-6.0/viewExtensionPoint/org.nuxeo.ecm.core.management.CoreManagementComponent--serviceDefinition).

### Probes&nbsp;

Probes can be used to run a test on the target deployed platform. Probes can be used to check that all part of the architecture are actually running for real:

*   check LDAP access,
*   check instance availability,
*   check VCS access,
*   ...

Probes can be defined via the&nbsp; [`probes` extension point](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-6.0/viewExtensionPoint/org.nuxeo.ecm.core.management.CoreManagementComponent--probes).

By default four probes are defined:

*   `adminStatus`: checks local instance enable flag (checks `nuxeoInstance` adminsitrative status),
*   `activeRepositorySession`: returns the number of active sessions per repository,
*   `ldapDirectory`: check LDAP connectivity,
*   `remoteSQLStorageSession`: number of remove VCS client connected (only used in VCS client/server mode that is not enabled by default).

### Monitoring Using JMX Access

You can use JVisualVM or similar tool to access Nuxeo JMX interface. See the section [Enabling JMX Access](#enabling-jmx).

### Monitoring Using the Admin Center

Inside the Admin Center there are two sections that are related to monitoring: Activity and Monitoring

#### {{> anchor 'admin-activity-tab'}}Activity&nbsp;

The Activity section provides access to:

*   a **Users sessions** tab that displays counters for the web UI access:

    {{! multiexcerpt name='users-sessions-tab-details'}}
    *   Total number of active HTTP sessions: The number of user active user session on the UI
    *   Total number of HTTP requests: The number of requests for page and dynamic resources served by JSF/faces
    *   List active sessions within a duration{{! /multiexcerpt}}
*   A view that displays HTTP counters (requests and sessions)
*   A view on audit logs
*   Activity charts based on web and repository counters

#### {{> anchor 'admin-monitoring-tab'}}Monitoring

The Monitoring sections provides access to:

*   A view on Administrative Status (view / edit)
*   A view on probes (view/run)
*   A view that allows to enable Event Listener statistic gathering

### REST Access

#### Counters&nbsp;

Counter are exposed via Automation API [Counters.GET](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-6.0/viewOperation/Counters.GET)

This API is used inside the Admin Center to be able to generate the small graphs with an OpenSocial gadget.

![]({{file name='Counters.png'}} ?w=650,border=true)

Sample CURL call:

```
curl -H 'Content-Type:application/json+nxrequest' -X POST -d
'{"params":{"counterNames":"org.nuxeo.web.requests"}}' -u
Administrator:Administrator http://localhost:8080/nuxeo/site/automation/Counters.GET
```

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related topics'}}

*   [Remote Monitoring Through a SSH Tunnel]({{page page='remote-monitoring-through-a-ssh-tunnel'}})
*   [Transactions and Connections]({{page page='transactions-and-connections'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
