---
title: Nuxeo Clustering Configuration
labels:
    - quartz
    - load-balancer
    - vcs
    - configuration
    - clustering
toc: true
confluence:
    ajs-parent-page-id: '21921850'
    ajs-parent-page-title: Advanced Configuration
    ajs-space-key: ADMINDOC60
    ajs-space-name: Nuxeo Installation and Administration — 6.0
    canonical: Nuxeo+Clustering+Configuration
    canonical_source: 'https://doc.nuxeo.com/display/ADMINDOC60/Nuxeo+Clustering+Configuration'
    page_id: '21921878'
    shortlink: VoBOAQ
    shortlink_source: 'https://doc.nuxeo.com/x/VoBOAQ'
    source_link: /display/ADMINDOC60/Nuxeo+Clustering+Configuration
history:
    - 
        author: Solen Guitter
        date: '2016-07-05 08:14'
        message: dd repository.clustering.id (since HF13
        version: '19'
    - 
        author: Solen Guitter
        date: '2016-05-09 12:17'
        message: Typos
        version: '18'
    - 
        author: Solen Guitter
        date: '2015-11-27 15:36'
        message: 'NXDOC-658: Marketplace packages are now called Nuxeo Packages'
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

## Requirements

To enable clustering, you must have at least two nodes with:

*   a shared database,
*   a shared filesystem (unless you use an external binary store like S3),
*   a dedicated Elasticsearch cluster, if using Elasticsearch,
*   a load-balancer with sticky sessions.

The shared filesystem is usually an NFS mount. You **must not**&nbsp;share the whole Nuxeo installation tree (see below).

The load balancer **must** use sticky sessions if the clustering delay is not 0\. Having a non-0 clustering delay is recommended for performance reasons. See below for more.

## Shared Filesystem Configuration

The complete Nuxeo instance hierarchy **must not** be shared between all instances. However a few things must or should be shared.

### Binaries

The `repository.binary.store` (`nxserver/data/binaries`&nbsp;by default) directory **must** be shared by all Nuxeo instances in order for VCS to function correctly.

### Temporary Directory

The temporary directory configured through `nuxeo.tmp.dir` **must not** be shared by all instances, because there are still a few name collision issues that may occur, especially during startup.

However, in order for various no-copy optimizations to be effective, the temporary directory should be on the same filesystem as the binaries directory. To do this, the recommended way is to have each instance's `nuxeo.tmp.dir` point to a different subdirectory of the shared filesystem.

## VCS Cluster Configuration

### Setup

The cluster nodes must only share the `binaries` folder (configured with `repository.binary.store`), not the entire data directory (configured with `nuxeo.data.dir`): the reason is the data directory contains data related to features that are not working in a cluster environment, in particular everything related to the Nuxeo Package management.

To set up clustering, please update the following parameters in [ `nuxeo.conf` ]({{page page='configuration-parameters-index-nuxeoconf'}}):

*   `**repository.clustering.enabled**` must be `true` to enable clustering.
*   `**repository.clustering.id**`: Since hotfix 13, it is highly <span style="color: rgb(51,51,51);">recommended</span> t<span style="color: rgb(51,51,51);">o set an explicit cluster node id. The id must be an <span style="color: rgb(51,51,51);">integer</span> for all databases, unless you are using Oracle which accepts a string. Please see&nbsp;[NXP-17180](https://jira.nuxeo.com/browse/NXP-17180) for more explanations.</span>
*   **`repository.clustering.delay`** is expressed in milliseconds, and specifies a delay during which invalidations don't need to be processed. Using a non-0 value is an important optimization as otherwise every single transaction, even a read-only one, would have to hit the database to check invalidations between several nodes. However this means that one node may not see immediately the changes made on another node, which is a problem if you don't use sticky session on the load balancer.
*   **`repository.binary.store`** must point to a shared storage unless you use an external binary store like S3\. Under Windows, the path value can be UNC formatted, for instance `\\servername\sharename`.
*   `**nuxeo.db.validationQuery**` must contain a SELECT clause for validating connections in the pool according to your database type. For instance `SELECT 1` used on PostgreSQL or `SELECT 1 FROM dual` on Oracle.

There is a dedicated page detailing all the [VCS configuration options]({{page space='nxdoc60' page='vcs'}}).

### Checking the SQL Tables Initialization

1.  Start the SQL server, all Nuxeo nodes (the first alone and the other afterwards to avoid concurrent initialization of the SQL tables) and the load balancer.
2.  Log in on the HTTP user interface on each cluster node.
3.  Check on the database that the `cluster_nodes` table is initialized with one line per node:

```
nuxeo-db=# select * from cluster_nodes;
 nodeid |          created
--------+----------------------------
  25767 | 2009-07-29 14:36:08.769657
  32546 | 2009-07-29 14:39:18.437264
(2 lines)

```

### Checking VCS Cache Invalidations

1.  Create a document and browse it from two different nodes.
2.  Edit the title from one node.
3.  Navigate back to the document from second node to check that the change is visible.
4.  You can also monitor what's happening in the `cluster_invals` table to see cache invalidation information.

## Quartz Scheduler Cluster Configuration

The Quartz scheduler should be configured to run in a cluster. This is needed for scheduled events, like periodic cleanups or periodic imports, to be executed only on one node and not on all nodes at the same time, which could cause problems.

Standard configuration is available from Nuxeo templates for Tomcat for PostgreSQL, Oracle and SQL Server.

1.  Populate the database with the tables needed by Quartz (names `QRTZ_*`).
    The DDL scripts come from the standard Quartz distribution and are available in the Nuxeo templates in `$NUXEO_HOME/templates/_<database>_-quartz-cluster/bin/create-quartz-tables.sql`.
2.  Enable the Quartz-specific cluster templates by adding the template `_<database>_-quartz-cluster`.

{{#> callout type='note' }}

In cluster mode the schedule contributions (deployed from plug-ins or configuration files) **must** be the same on all nodes.

{{/callout}}

## About Session Affinity

We advise to use a session affinity mechanism: when a user is connected to a node, they should always be redirected to that node.

There are several reasons why we advise this configuration.

### Invalidations

The Nuxeo Cluster system takes care about propagating invalidations between all nodes of the clusters.

However, for performances reasons, there is a small delay by default: this means that without affinity you could have one call creating a document and the second one not seeing the document. Of course this state is transient, and after a few milliseconds it will be ok. However in the context of a "multi-page transaction" this could be an issue.

Having session affinity does solve the visible issues. If the session affinity can not be restored, for example because the target server has been shutdown, in 99,99% of the case, this won't be an issue.

### Authentication

The Nuxeo Platform requires all calls to be authenticated. Depending on your architecture, authentication can be stateless (ex: Basic Auth) or stateful (ex: Form + Cookie). Either way, you probably don't want to replay authentication during all calls.

That's why having a session based authentication + session affinity can make sense: you don't have to re-authenticate each time you call the server.

If the session affinity can not be restored, for example because the target server has been shutdown:

*   stateless authentication will be automatically replayed (ex: Basic Auth)
*   for stateful authentication:

    *   if you have a SSO this will be transparent
    *   if you don't have a SSO, user will have to authenticate again.

### State Management and UI Rendering

The Web UI can be stateful or stateless:

*   Default back office is based on JSF that is stateful
*   The Nuxeo Platform also provides Stateless UI like WebEngine/Freemarker and AngularJS.

If the UI layer you use is stateful, you have to use stateful load balancing.

However, in the case of Nuxeo JSF, since most of the navigation links are Restful, switching server won't be an issue. But of course for real JSF POST, since the server side state is not shared, session affinity is required.

{{#> callout type='info' }}

Technically, we don't push for using shared server side state: JSF state is complex and changes a lot, replicating this state between servers is too costly.

{{/callout}}

## HTTP Load Balancer Configuration

Set up an HTTP or AJP load balancer such as Apache with `mod_proxy` or `mod_proxy_ajp` or Pound, and configure it to keep session affinity by tracking the value of the `JSESSIONID` cookie and the `;jsessionid` URL parameter.

If you use a stateless load balancer such as Apache modules such as `mod_jk` and `mod_proxy_balancer`, you need to make the HTTP server generate `JSESSIONID` cookies with values that end with `.nxworker_n_` , where `nxworker_n_` is a string suffix specific to each node (you can use any string).

1.  In `nuxeo.conf` specify a different `nuxeo.server.jvmRoute` for each node, for instance `nuxeo.server.jvmRoute=nxworker1`.
    This will instruct the Nuxeo preprocessing phase to correctly fill the `jvmRoute` attribute of the `Engine` element in the generated `server.xml`.
2.  Configure you stateless balancer to follow these routes, for instance here is the relevant configuration fragment when using `mod_proxy_balancer`:

```html/xml
ProxyPass /nuxeo balancer://sticky-balancer stickysession=JSESSIONID|jsessionid  nofailover=On

<Proxy balancer://sticky-balancer>
  BalancerMember http://192.168.2.101:8080/nuxeo route=nxworker1
  BalancerMember http://192.168.2.102:8080/nuxeo route=nxworker2
</Proxy>

```

### Troubleshooting Session Affinity Problems

To test that the load balancer forwards the HTTP requests of a given session to the same node:

1.  Add a new file on each node (after Tomcat started), `$NUXEO_HOME/nxserver/nuxeo.war/clusterinfo.html`,

    *   On the first node:

        ```html/xml
        <html><body>Node 1</body></html>

        ```

    *   and on the second node:

        ```html/xml
        <html><body>Node 2</body></html>

        ```

2.  Using a browser with an active Nuxeo session (an already logged-in user), go to `http://yourloadbalancer/nuxeo/clusterinfo.html` and check that you always return to the same node when hitting the refresh button of the browser.

* * *

&nbsp;