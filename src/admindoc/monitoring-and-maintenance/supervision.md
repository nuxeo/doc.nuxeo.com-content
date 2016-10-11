---
title: Supervision
review:
    comment: ''
    date: ''
    status: ok
labels:
    - counters
    - probes
    - administrative-status
    - stopwatch
toc: true
confluence:
    ajs-parent-page-id: '16810080'
    ajs-parent-page-title: Monitoring and Maintenance
    ajs-space-key: ADMINDOC58
    ajs-space-name: Nuxeo Installation and Administration - 5.8
    canonical: Supervision
    canonical_source: 'https://doc.nuxeo.com/display/ADMINDOC58/Supervision'
    page_id: '16810023'
    shortlink: J4AAAQ
    shortlink_source: 'https://doc.nuxeo.com/x/J4AAAQ'
    source_link: /display/ADMINDOC58/Supervision
history:
    - 
        author: Solen Guitter
        date: '2013-10-15 12:00'
        message: ''
        version: '13'
    - 
        author: Solen Guitter
        date: '2013-10-03 14:35'
        message: Fixed typo
        version: '12'
    - 
        author: Solen Guitter
        date: '2013-08-06 11:25'
        message: ''
        version: '11'
    - 
        author: Solen Guitter
        date: '2013-05-22 11:37'
        message: ''
        version: '10'
    - 
        author: Solen Guitter
        date: '2013-05-22 11:37'
        message: Renamed page
        version: '9'
    - 
        author: Solen Guitter
        date: '2013-01-14 12:24'
        message: Fixed typo and added links
        version: '8'
    - 
        author: Thierry Delprat
        date: '2013-01-11 17:27'
        message: ''
        version: '7'
    - 
        author: Thierry Delprat
        date: '2012-10-01 18:23'
        message: ''
        version: '6'
    - 
        author: Thierry Delprat
        date: '2012-10-01 18:18'
        message: ''
        version: '5'
    - 
        author: Thierry Delprat
        date: '2012-10-01 14:22'
        message: ''
        version: '4'
    - 
        author: Thierry Delprat
        date: '2012-10-01 14:16'
        message: ''
        version: '3'
    - 
        author: Thierry Delprat
        date: '2012-10-01 12:41'
        message: ''
        version: '2'
    - 
        author: Thierry Delprat
        date: '2012-10-01 11:49'
        message: ''
        version: '1'

---
## Existing Metrics and Counters

By default, Nuxeo Platform comes with a set of counters, StopWatches and probes.

### Event System

All operations executed against the repository will trigger events. For this reason, monitoring events is a good way to have an idea about the activity of the platform.

There are by default three defined counters:

*   `event.create`: counts the number of created Document/Version,
*   `event.update`: counts the number of updated Documents,
*   `event.remove`: counts the number of removed Documents/Version.

A `EventMonitoring` service is also exposed via JMX (and as a Java Nuxeo Service). This `EventMonitoring` service allows to:

*   enable/disable all synchronous event listeners,
*   enable/disable all asynchronous event listeners,
*   enable/disable tracking of listeners execution,
*   enable/disable bulk mode,
*   retrieve statistics about event handler execution.

This `EventMonitoring` service can be used:

*   for tuning the platform during mass import,
*   for profiling execution of listeners,
*   for monitoring.

### Repository

**Counters and Metrics&nbsp;**

The repository exposed by default three counters about cache usage:

*   `cache.access`,
*   `cache.hits`,
*   `cache.size`.

These counters are updates every 200 access to avoid having bad performance impacts.

If&nbsp;<span style="color: rgb(0,0,0);">`org.nuxeo.vcs.cache.statistics` is set to true (via the [System information]({{page page='admin-center-overview#system-information'}}) tab of the Admin Center or via [nuxeo.conf]({{page page='configuration-parameters-index-nuxeoconf'}})), there are also two StopWatch that are defined:</span>

*   `cache.gets`:&nbsp;<span style="color: rgb(0,0,0);">time to get an entry from cache,</span>
*   `sor.gets`:&nbsp;<span style="color: rgb(0,0,0);">time to bulk get entries from DB.</span>

**<span style="color: rgb(0,0,0);">Services</span>**

**<span style="color: rgb(0,0,0);">`SQLStorage`&nbsp;</span>**<span style="color: rgb(0,0,0);">service provides a JMX API to:</span>

*   <span style="color: rgb(0,0,0);">gather information about the repository (active sessions, ...),</span>
*   <span style="color: rgb(0,0,0);">do administration operations (Flush caches, Start Binaries GC ...)</span><span style="color: rgb(0,0,0);">.
    </span>

### <span style="color: rgb(0,0,0);">Transactions Management</span>

<span style="color: rgb(0,0,0);">To have more information about the repository and transaction management, you can also deploy the additional bundle [`nuxeo-core-management-jtajca`](https://maven-eu.nuxeo.org/nexus/index.html#view-repositories;public-releases~browsestorage~/org/nuxeo/ecm/core/nuxeo-core-management-jtajca/5.6/nuxeo-core-management-jtajca-5.6.jar).</span>

<span style="color: rgb(0,0,0);">This bundle provides:</span>

*   StopWatch for transactions,
*   TransactionMonitoring Service,
*   JCA Connectionpool Service<span style="color: rgb(0,0,0);">.</span>

### Web Layer

Two counters are published by default in JMX:

*   `web.requests`: number of HTTP requests served,
*   `web.sessions`: number of HTTP sessions.

## Probes and Administrative Status&nbsp;

Nuxeo comes with a set of default probes and administrative status. Both can be seen and managed [from JMX](#jmx-access) and [from ](#using-the-admin-center)[Admin Center]({{page page='admin-center-overview'}}).

### Administrative Status

By default only three status are defined :

*   `nuxeoInstance`: indicates if a Nuxeo instance (cluster node) is active of not,
*   `adminMessage`: message to be displayed to all users,
*   `smtpService`: defines if SMTP gateway can be used.

### Probes&nbsp;

By default four probes are defined:

*   `adminStatus`: checks local instance enable flag (checks `nuxeoInstance` adminsitrative status),
*   `activeRepositorySession`: returns the number of active sessions per repository,
*   `ldapDirectory`: check LDAP connectivity,
*   `remoteSQLStorageSession`: number of remove VCS client connected (only used in VCS client/server mode that is not enabled by default).

## JMX Access

You can use JVisualVM or similar tool to access Nuxeo JMX interface.

![]({{file name='NX-JMX.png'}} ?w=650,border=true)

JMX Remote access is by default disabled. You can activate it by adding the required option (for example in [nuxeo.conf]({{page page='configuration-parameters-index-nuxeoconf'}}))

<div class="table-scroll"><table class="hover"><tbody><tr><td colspan="1">

<div class="container" title="Hint: double-click to select code">

<div class="line number1 index0 alt2">`-Dcom.sun.management.jmxremote`</div>

</div>

</td></tr></tbody></table></div>

However, you will then have to manage security for this access, since there is no authentication by default.

## Using the Admin Center&nbsp;

Inside the Admin Center there are two sections that are related to monitoring: Activity and Monitoring

### Activity&nbsp;

The Activity section provides access to:

*   a view that displays HTTP counters (requests and sessions),
*   a view on audit logs,
*   activity charts based on web and repository counters.

### Monitoring

The Monitoring sections provides access to:

*   a view on Administrative Status (view / edit),
*   a view on probes (view/run),
*   a view that allows to enable Event Listener statistic gathering.

## Rest Access

### Counters&nbsp;

Counter are exposed via Automation API [Counters.GET](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-5.8/viewOperation/Counters.GET)

This API is used inside the Admin Center to be able to generate the small graphs with an OpenSocial gadget.

![]({{file name='Counters.png'}} ?w=650,border=true)

Sample CURL call:

<pre>curl -H 'Content-Type:application/json+nxrequest' -X POST -d 
'{"params":{"counterNames":"org.nuxeo.web.requests"}}' -u 
Administrator:Administrator http://localhost:8080/nuxeo/site/automation/Counters.GET</pre>