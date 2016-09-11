---
title: Nuxeo Clustering Configuration
review:
    comment: ''
    date: ''
    status: ok
labels:
    - vcs
    - configuration
    - quartz
    - load-balancer
    - clustering
toc: true
confluence:
    ajs-parent-page-id: '16809993'
    ajs-parent-page-title: Advanced Configuration
    ajs-space-key: ADMINDOC58
    ajs-space-name: Nuxeo Installation and Administration - 5.8
    canonical: Nuxeo+Clustering+Configuration
    canonical_source: 'https://doc.nuxeo.com/display/ADMINDOC58/Nuxeo+Clustering+Configuration'
    page_id: '16810082'
    shortlink: YoAAAQ
    shortlink_source: 'https://doc.nuxeo.com/x/YoAAAQ'
    source_link: /display/ADMINDOC58/Nuxeo+Clustering+Configuration
history:
    - 
        author: Solen Guitter
        date: '2016-09-02 08:07'
        message: ''
        version: '14'
    - 
        author: Solen Guitter
        date: '2016-05-09 12:17'
        message: Typos
        version: '13'
    - 
        author: Solen Guitter
        date: '2015-11-27 15:37'
        message: 'NXDOC-658: Marketplace packages are now called Nuxeo Packages'
        version: '12'
    - 
        author: Solen Guitter
        date: '2014-09-05 10:02'
        message: typo
        version: '11'
    - 
        author: Solen Guitter
        date: '2013-12-04 11:12'
        message: ''
        version: '10'
    - 
        author: Solen Guitter
        date: '2013-12-04 11:10'
        message: shared tmp dir explanations
        version: '9'
    - 
        author: Solen Guitter
        date: '2013-11-07 16:55'
        message: Additional info about the data in cluster env
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
## Shared Filesystem Configuration

The complete Nuxeo instance hierarchy **must not** be shared between all instances. However a few things must or should be shared.

### Binaries

The `repository.binary.store` (`nxserver/data/binaries`&nbsp;by default) directory **must** be shared by all Nuxeo instances in order for VCS to function correctly.

### Temporary Directory

The temporary directory configured through `nuxeo.tmp.dir` **must not** be shared by all instances, because there are still a few name collision issues that may occur, especially during startup.

However, in order for various no-copy optimizations to be effective, the temporary directory should be on the same filesystem as the binaries directory. To do this, the recommended way is to have each instance's&nbsp;`nuxeo.tmp.dir` point to a different subdirectory of the shared filesystem.

## VCS Cluster Configuration

### Setup

To set up clustering, please update the `repository.clustering.enabled`, `repository.clustering.delay` and `repository.binary.store` in the [`nuxeo.conf` parameters]({{page page='configuration-parameters-index-nuxeoconf'}}). On all Nuxeo instances, the `repository.binary.store` should point to a shared filesystem unless you use an external binary store like S3.

<span style="color: rgb(0,0,0);">The cluster nodes must only share the&nbsp;</span>`<span style="color: rgb(0,0,0);">binaries</span>` <span style="color: rgb(0,0,0);">folder (configured with</span> `<span style="color: rgb(0,0,0);">repository.</span><span style="color: rgb(0,0,0);">binary.store</span>`<span style="color: rgb(0,0,0);">), not the entire data directory (configured with</span> `<span style="color: rgb(0,0,0);">nuxeo.data.dir</span>`<span style="color: rgb(0,0,0);">): the reason is the data directory contains data related to features that are not working in a cluster environment, in particular everything related to the Nuxeo Package management.</span>

<span style="color: rgb(0,0,0);">The cluster setup parameters are:</span>

*   `**repository.clustering.enabled**` must be `true` to enable clustering.
*   **`repository.clustering.delay`**&nbsp;is expressed in milliseconds, and specifies a delay during which invalidations don't need to be processed. Using a non-0 value is an important optimization as otherwise every single transaction, even a read-only one, would have to hit the database to check invalidations between several nodes. However this means that one node may not see immediately the changes made on another node, which is a problem if you don't use sticky session on the load balancer.
*   **`repository.binary.store`** must point to a shared storage.&nbsp;Under Windows, the&nbsp;path value can be UNC formatted, for instance&nbsp;`\\servername\sharename`.
*   `**nuxeo.db.validationQuery**` must contain a SELECT clause for validating connections in the pool according to your database type. For instance `SELECT 1` used on PostgreSQL or `SELECT 1 FROM dual` on Oracle.

There is a dedicated page detailing all the [VCS configuration options]({{page space='nxdoc58' page='vcs-architecture'}}).

### Checking the SQL Tables Initialization

Start the SQL server, all Nuxeo nodes (the first alone and the other afterwards to avoid concurrent initialization of the SQL tables) and the load balancer and login on the HTTP user interface on each cluster node, then check that on the database that the `cluster_nodes` table is initialized with one line per node:

```
nuxeo-db=# select * from cluster_nodes;
 nodeid |          created
--------+----------------------------
  25767 | 2009-07-29 14:36:08.769657
  32546 | 2009-07-29 14:39:18.437264
(2 lines)

```

### Checking VCS Cache Invalidations

Create a document and browse it from two different nodes. Edit the title from one node and navigate back to the document from second node to check that the change is visible. You can also monitor what's happening in the `cluster_invals` table to see cache invalidation information.

## Quartz Scheduler Cluster Configuration

The Quartz scheduler should be configured to run in a cluster. This is needed in order for scheduled events, like periodic cleanups or periodic imports, to be executed only on one node and not on all nodes at the same time, which could cause problems.

Standard configuration is available from Nuxeo templates for Tomcat&nbsp;for&nbsp;PostgreSQL, Oracle and SQL Server.

First, you should populate the database with the tables needed by quartz (names `QRTZ_*`). The DDL scripts come from the standard Quartz distribution and are available in the Nuxeo templates in `$``NUXEO_HOME/templates/_<database>_-quartz-cluster/bin/create-quartz-tables.sql`.

Second, you should enable the quartz-specific cluster templates by adding the template&nbsp;`_<database>_-quartz-cluster`.

{{#> callout type='note' }}

In cluster mode the schedule contributions (deployed from plugins or configuration files) **must** be the same on all nodes.

{{/callout}}

## HTTP Load Balancer Configuration

Set up an HTTP or AJP load balancer such as Apache with `mod_proxy&nbsp;or&nbsp;``mod_proxy_ajp` or Pound, and configure it to keep session affinity by tracking the value of the `JSESSIONID` cookie and the "`;jsessionid`" URL parameter.

If you use a stateless load balancer such as apache modules such as `mod_jk` and `mod_proxy_balancer`, you need to make the HTTP server generate `JSESSIONID` cookies with values that end with `.nxworker_n_`, where `nxworker_n_` is a string suffix specific to each node (you can use any string).

To do so, in `nuxeo.conf` specify a different&nbsp;`nuxeo.server.jvmRoute` for each node, for instance `nuxeo.server.jvmRoute=nxworker1`. This will instruct the Nuxeo preprocessing phase to correctly fill the `jvmRoute` attribute of the `Engine` element in the generated `server.xml`.

Then configure you stateless balancer to follow these routes, for instance here is the relevant configuration fragment when using `mod_proxy_balancer`:

```html/xml
ProxyPass /nuxeo balancer://sticky-balancer stickysession=JSESSIONID|jsessionid  nofailover=On

<Proxy balancer://sticky-balancer>
  BalancerMember http://192.168.2.101:8080/nuxeo route=nxworker1
  BalancerMember http://192.168.2.102:8080/nuxeo route=nxworker2
</Proxy>

```

### Troubleshooting Session Affinity Problems

To test that the load balancer forwards the HTTP requests of a given session to the same node you can add a new file on each node (after Tomcat started), `$NUXEO_HOME/nxserver/nuxeo.war/clusterinfo.html`, with on the first node:

```html/xml
<html><body>Node 1</body></html>

```

and on the second node:

```html/xml
<html><body>Node 2</body></html>

```

Using a browser with an active Nuxeo session (an already logged-in user), then go to `<span class="nolink">http://yourloadbalancer/nuxeo/clusterinfo.html</span>` and check that you always return to the same node when hitting the refresh button of the browser.

&nbsp;