---
title: Nuxeo Clustering Configuration
description: Nuxeo can be clustered between several nodes (a.k.a. instances or machines) with the appropriate configuration.
review:
    comment: ''
    date: '2017-12-14'
    status: ok
labels:
    - lts2016-ok
    - clustering
    - fguillaume
    - quartz
    - load-balancer
    - vcs
    - configuration
    - nxdoc-752
    - lts2017-ok
toc: true
confluence:
    ajs-parent-page-id: '3866685'
    ajs-parent-page-title: Installation
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Nuxeo+Clustering+Configuration
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Nuxeo+Clustering+Configuration'
    page_id: '14254559'
    shortlink: 34HZ
    shortlink_source: 'https://doc.nuxeo.com/x/34HZ'
    source_link: /display/NXDOC/Nuxeo+Clustering+Configuration
tree_item_index: 1300
version_override:
    LTS 2015: 710/admindoc/nuxeo-clustering-configuration
    '6.0': 60/admindoc/nuxeo-clustering-configuration
    '5.8': 58/admindoc/nuxeo-clustering-configuration
history:
    -
        author: Solen Guitter
        date: '2016-09-05 12:05'
        message: ''
        version: '31'
    -
        author: Solen Guitter
        date: '2016-07-05 08:17'
        message: ''
        version: '30'
    -
        author: Frantz Fischer
        date: '2016-07-04 13:21'
        message: ''
        version: '29'
    -
        author: Frantz Fischer
        date: '2016-07-04 13:18'
        message: ''
        version: '28'
    -
        author: Solen Guitter
        date: '2016-05-17 09:14'
        message: ''
        version: '27'
    -
        author: Solen Guitter
        date: '2016-05-17 09:13'
        message: Remove duplicated content
        version: '26'
    -
        author: Harlan Brown
        date: '2016-05-16 17:08'
        message: Clarification for Quartz usage
        version: '25'
    -
        author: Solen Guitter
        date: '2016-05-09 12:16'
        message: Typos
        version: '24'
    -
        author: Manon Lumeau
        date: '2016-03-25 10:30'
        message: ''
        version: '23'
    -
        author: Solen Guitter
        date: '2016-02-01 16:31'
        message: ''
        version: '22'
    -
        author: Antoine Taillefer
        date: '2015-12-09 13:45'
        message: ''
        version: '21'
    -
        author: Solen Guitter
        date: '2015-11-27 15:35'
        message: 'NXDOC-658: Marketplace packages are now called Nuxeo Packages'
        version: '20'
    -
        author: Solen Guitter
        date: '2015-11-10 16:02'
        message: Add Redis server in requirements + links
        version: '19'
    -
        author: Antoine Taillefer
        date: '2015-09-28 14:12'
        message: ''
        version: '18'
    -
        author: Antoine Taillefer
        date: '2015-09-28 14:10'
        message: ''
        version: '17'
    -
        author: Florent Guillaume
        date: '2014-12-04 11:34'
        message: ''
        version: '16'
    -
        author: Benoit Delbosc
        date: '2014-11-28 17:21'
        message: Add requirement for Elasticsearch
        version: '15'
    -
        author: Solen Guitter
        date: '2014-11-28 14:48'
        message: Formatting
        version: '14'
    -
        author: Bertrand Chauvin
        date: '2014-09-03 11:35'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2014-04-29 09:50'
        message: ''
        version: '12'
    -
        author: Brendan Coveney
        date: '2014-04-25 21:45'
        message: ''
        version: '11'
    -
        author: Thierry Delprat
        date: '2014-04-25 21:39'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2013-12-04 11:11'
        message: ' shared tmp dir explanations'
        version: '9'
    -
        author: Thierry Martins
        date: '2013-11-07 16:53'
        message: additional info about the data in cluster env
        version: '8'
    -
        author: Solen Guitter
        date: '2013-10-14 17:17'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2013-08-06 11:25'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2013-07-15 15:58'
        message: Fixed typo
        version: '5'
    -
        author: Stéphane Lacoin
        date: '2013-06-27 16:12'
        message: ''
        version: '4'
    -
        author: Stéphane Lacoin
        date: '2013-06-27 15:59'
        message: ''
        version: '3'
    -
        author: Guillaume Renard
        date: '2013-05-31 16:45'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2013-05-30 11:41'
        message: ''
        version: '1'
---
Nuxeo can be clustered between several nodes (a.k.a. instances or machines) with the appropriate configuration. In addition, an HTTP load balancer with session affinity must be used in front of the nodes.

{{#> callout type='info' heading='Nuxeo University'}}
Watch the related courses on Nuxeo University
- [Nuxeo Reference Architecture](https://university.nuxeo.com/learn/course/external/view/elearning/201/NuxeoReferenceArchitecture).
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/UNIVERSITY/university_reference_architecture.png
    name: university_reference_architecture.png
    server#screenshot#up_to_date
--}}
![university_reference_architecture.png](nx_asset://2a075e0b-c150-4eeb-b248-b92650771b5a ?w=450,border=true)
{{/callout}}

## Requirements

To enable clustering, you must have at least two nodes with:

- A shared database
- A shared filesystem (unless you use an external binary store like S3)
- A dedicated [Elasticsearch cluster]({{page page='elasticsearch-setup'}}), if using Elasticsearch
- A [Kafka cluster]({{page page='kafka'}}) or a [Redis server]({{page page='redis-configuration'}})
- A load-balancer with sticky sessions

You can head to the [Nuxeo cluster architecture introduction]({{page page='nuxeo-cluster-architecture-introduction'}}) for more information on these components.

The shared filesystem is usually an NFS mount. You **must not** share the whole Nuxeo installation tree (see below).

## Cluster Node Identity

To set up clustering, please update the following parameters in [`nuxeo.conf`]({{page page='configuration-parameters-index-nuxeoconf'}}):

- **`nuxeo.cluster.enabled`** must be `true` to enable clustering.
- **`nuxeo.cluster.nodeid`**: must be set to a cluster node id. The id should be a string specific to this instance (and therefore all instances must have different cluster node ids).

## Shared Filesystem Configuration

The complete Nuxeo instance hierarchy **must not** be shared between all instances. However the following things must be shared.

### Binaries

All the binary stores **must** be shared by all Nuxeo instances in order for the document repository and transient stores to function correctly.

In addition to the default repository binary store used for documents, Nuxeo uses dynamically-named binary stores for the various transient stores it needs. These dynamic binary stores are created as siblings of the default one.

The default `repository.binary.store` is `$NUXEO/nxserver/data/binaries` and therefore by default Nuxeo would create:
- `$NUXEO/nxserver/data/binaries`
- `$NUXEO/nxserver/data/binaries_transient_authorizationRequestStore`
- `$NUXEO/nxserver/data/binaries_transient_BatchManagerCache`
- `$NUXEO/nxserver/data/binaries_transient_default`
- etc.

However the rest of the `$NUXEO/nxserver/data` directory **must not** be shared by several Nuxeo instances, as it contains instance-specific data.

Therefore in a cluster setting you should point `repository.binary.store` to a folder like `/var/lib/nuxeo/binaries/binaries` and mount/share `/var/lib/nuxeo/binaries`. This way the default binary store and all the dynamic binary stores will be created under the mount point:
- `/var/lib/nuxeo/binaries/binaries`
- `/var/lib/nuxeo/binaries/binaries_transient_authorizationRequestStore`
- `/var/lib/nuxeo/binaries/binaries_transient_BatchManagerCache`
- `/var/lib/nuxeo/binaries/binaries_transient_default`
- etc.

You can of course use a different path than `/var/lib/nuxeo/binaries`.

The above does not apply if binaries are stored in a network-based location, like S3.

### Temporary Directory

The temporary directory configured through `nuxeo.tmp.dir` **must not** be shared by all instances, because there are still a few name collision issues that may occur, especially during startup.

However, in order for various no-copy optimizations to be effective, the temporary directory should be on the same filesystem as the binaries directory. To do this, the recommended way is to have each instance's `nuxeo.tmp.dir` point to a different subdirectory of the shared filesystem.

Using the above suggestions for the binaries directory, you could set `nuxeo.tmp.dir` to `/var/lib/nuxeo/binaries/tmp/node1` for example, for a node with id `node1`.

## Quartz Scheduler Cluster Configuration

A clustered Nuxeo environment should be configured to use Quartz scheduling. The Quartz scheduling component allows nodes to coordinate scheduled tasks between themselves - a single task will be routed to a single node for execution on that one node. This ensures that scheduled events, like periodic cleanups or periodic imports, are executed only on one node and not on all nodes at the same time.

For DBS (MongoDB) everything is done automatically, you don't have to use any specific configuration or template. You can skip the rest of this section.

For VCS (SQL databases) the standard configuration is available from Nuxeo templates; each node in the cluster should be configured to include the relevant `<database>-quartz-cluster` template.

1.  Populate the database with the tables needed by Quartz (names `QRTZ_*`).
    The DDL scripts come from the standard Quartz distribution and are available in the Nuxeo templates in `$NUXEO_HOME/templates/<database>-quartz-cluster/bin/create-quartz-tables.sql`.
2.  Enable the Quartz-specific cluster templates by adding the template `<database>-quartz-cluster`.

{{#> callout type='note' }}

In cluster mode the schedule contributions (deployed from plugins or configuration files) **must** be the same on all nodes.

{{/callout}}

Any instance using a clustered Quartz configuration tries to get a lock on the next scheduled job execution. Those locks are managed and shared through the database.
The time must be synchronized on all instances. You should use NTP for that.

While performing a rolling upgrade on Nuxeo servers, the lock may be swapped between the instances. In which case, you may encounter a warning on startup:
```
This scheduler instance (host-nuxeo.example.com1478524375548) is still active but was recovered by another instance in the cluster.  This may cause inconsistent behavior.
```
This message is not a problem if the NTP configuration is fine.

## About Session Affinity

We advise to use a session affinity mechanism: when a user is connected to a node, they should always be redirected to that node.

There are several reasons why we advise this configuration, described below.

### Invalidations

The Nuxeo Cluster system takes care about propagating invalidations between all nodes of the clusters.

However, for performances reasons, there is a small delay by default: this means that without affinity you could have one call creating a document and the second one not seeing the document. Of course this state is transient, and after a few milliseconds it will be ok. However in the context of a "multi-page transaction" this could be an issue.

Having session affinity does solve the visible issues. If the session affinity can not be restored, for example because the target server has been shutdown, in 99,99% of the case, this won't be an issue.

### Authentication

The Nuxeo Platform requires all calls to be authenticated. Depending on your architecture, authentication can be stateless (ex: Basic Auth) or stateful (ex: Form + Cookie). Either way, you probably don't want to replay authentication during all calls.

That's why having a session based authentication + session affinity can make sense: you don't have to re-authenticate each time you call the server.

If the session affinity can not be restored, for example because the target server has been shut down:

*   stateless authentication will be automatically replayed (ex: Basic Auth)
*   for stateful authentication:

    *   if you have a SSO this will be transparent
    *   if you don't have a SSO, user will have to authenticate again.

### State Management and UI Rendering

The UI can be stateful or stateless:

*   The default Web UI is stateless,
*   JSF is stateful.

If the UI layer you use is stateful, you have to use stateful load balancing for session affinity.

## HTTP Load Balancer Configuration

Set up an HTTP or AJP load balancer such as Apache with `mod_proxy` or `mod_proxy_ajp` or Pound, and configure it to keep session affinity by tracking the value of the `JSESSIONID` cookie and the `;jsessionid` URL parameter.

If you use a stateless load balancer such as Apache modules such as `mod_jk` and `mod_proxy_balancer`, you need to make the HTTP server generate `JSESSIONID` cookies with values that end with `.nxworker_n_` , where `nxworker_n_` is a string suffix specific to each node (you can use any string).

1.  In `nuxeo.conf` specify a different `nuxeo.server.jvmRoute` for each node, for instance `nuxeo.server.jvmRoute=nxworker1`.
    This will instruct the Nuxeo preprocessing phase to correctly fill the `jvmRoute` attribute of the `Engine` element in the generated `server.xml`.
2.  Configure you stateless balancer to follow these routes, for instance here is the relevant configuration fragment when using `mod_proxy_balancer`:

```xml
ProxyPass /nuxeo balancer://sticky-balancer stickysession=JSESSIONID|jsessionid  nofailover=On

<Proxy balancer://sticky-balancer>
  BalancerMember http://192.168.2.101:8080/nuxeo route=nxworker1
  BalancerMember http://192.168.2.102:8080/nuxeo route=nxworker2
</Proxy>

```

To enable automatic unhealthy instance eviction on your balancer, you may require an health check.
The following ensures Nuxeo runtime is initialized and up: `HTTP:200:/nuxeo/running_status?info=reload`.

### Troubleshooting Session Affinity Problems

To test that the load balancer forwards the HTTP requests of a given session to the same node:

1.  Add a new file on each node (after Tomcat started), `$NUXEO_HOME/nxserver/nuxeo.war/clusterinfo.html`,

    *   On the first node:

        ```xml
        <html><body>Node 1</body></html>

        ```

    *   and on the second node:

        ```xml
        <html><body>Node 2</body></html>

        ```

2.  Using a browser with an active Nuxeo session (an already logged-in user), go to `http://yourloadbalancer/nuxeo/clusterinfo.html` and check that you always return to the same node when hitting the refresh button of the browser.

* * *

<div class="row" data-equalizer data-equalize-on="medium">
<div class="column medium-6">
{{#> panel heading='Related Documentation'}}

- [Nuxeo Cluster Architecture Introduction]({{page page='nuxeo-cluster-architecture-introduction'}})
- [Standard high availability nuxeo cluster architecture examples]({{page page='standard-high-availability-nuxeo-cluster-architecture'}})
- [Scale your Nuxeo cluster]({{page page='nuxeo-cluster-scalability-options'}})
- [VCS]({{page page='vcs'}})
- [Redis Configuration]({{page page='redis-configuration'}})
- [HTTP and HTTPS Reverse-Proxy Configuration]({{page page='http-and-https-reverse-proxy-configuration'}})

{{/panel}}
</div>
<div class="column medium-6">

</div></div>
