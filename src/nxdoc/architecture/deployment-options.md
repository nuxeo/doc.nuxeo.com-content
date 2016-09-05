---
title: Deployment Options
labels:
    - deployment
    - todo
toc: true
confluence:
    ajs-parent-page-id: '17334300'
    ajs-parent-page-title: Architecture
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Deployment+Options
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/Deployment+Options'
    page_id: '17334385'
    shortlink: cYAIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/cYAIAQ'
    source_link: /display/NXDOC58/Deployment+Options
history:
    - 
        author: Solen Guitter
        date: '2016-08-31 13:08'
        message: ''
        version: '23'
    - 
        author: Solen Guitter
        date: '2014-01-22 12:21'
        message: ''
        version: '22'
    - 
        author: Solen Guitter
        date: '2014-01-22 10:57'
        message: Updated content and schemas
        version: '21'
    - 
        author: Solen Guitter
        date: '2013-12-27 14:42'
        message: ''
        version: '20'
    - 
        author: Solen Guitter
        date: '2013-10-17 11:17'
        message: ''
        version: '19'
    - 
        author: Alain Escaffre
        date: '2013-10-16 01:45'
        message: ''
        version: '18'
    - 
        author: Solen Guitter
        date: '2013-09-20 09:51'
        message: Fixed typos
        version: '17'
    - 
        author: Alain Escaffre
        date: '2013-09-17 04:06'
        message: ''
        version: '16'
    - 
        author: Solen Guitter
        date: '2013-09-04 14:57'
        message: ''
        version: '15'
    - 
        author: Solen Guitter
        date: '2013-04-08 14:42'
        message: ''
        version: '14'
    - 
        author: Florent Guillaume
        date: '2013-03-30 00:28'
        message: ''
        version: '13'
    - 
        author: Solen Guitter
        date: '2012-09-06 15:39'
        message: Migrated to Confluence 4.0
        version: '12'
    - 
        author: Solen Guitter
        date: '2012-09-06 15:39'
        message: ''
        version: '11'
    - 
        author: Solen Guitter
        date: '2011-01-07 11:19'
        message: added toc
        version: '10'
    - 
        author: Solen Guitter
        date: '2011-01-07 11:18'
        message: ''
        version: '9'
    - 
        author: Thierry Delprat
        date: '2010-10-19 13:54'
        message: ''
        version: '8'
    - 
        author: Thierry Delprat
        date: '2010-10-19 13:49'
        message: ''
        version: '7'
    - 
        author: Thierry Delprat
        date: '2010-06-14 12:02'
        message: ''
        version: '6'
    - 
        author: Thierry Delprat
        date: '2010-06-14 02:41'
        message: ''
        version: '5'
    - 
        author: Thierry Delprat
        date: '2010-06-14 02:38'
        message: ''
        version: '4'
    - 
        author: Thierry Delprat
        date: '2010-05-25 12:12'
        message: ''
        version: '3'
    - 
        author: Thierry Delprat
        date: '2010-05-24 19:23'
        message: ''
        version: '2'
    - 
        author: Admin name placeholder
        date: '2010-03-01 00:55'
        message: ''
        version: '1'

---
The default Tomcat packaging is actually not a bare Tomcat. The Tomcat that is shipped with Nuxeo contains:

*   A JTA Transaction Manager,
*   A JCA pool manager.

In most of the case, the Nuxeo server is behind a reverse proxy that is used to provide:

*   HTTPS/SSL encryption,
*   HTTP caching,
*   URL rewritting.

![]({{file name='reverse.png'}} ?w=500,border=true)

Additionally, when some clients use a WAN to access the server, the reverse proxy can also be used to protect the server against slow connections that may use server side resources during a long time.

## Cluster HA

In order to manage scale out and HA, the Nuxeo Platform provides a simple clustering solution.

When cluster mode is enabled, you can have several Nuxeo Platform nodes connected to the same database server. VCS cluster mode manages the required cache invalidation between the nodes. There is no need to activate any application server level cluster mode: VCS cluster mode works even without application server.

The default caching implementation uses simple JVM Memory, but we also have alternate implementation for specific use cases.

Depending on the UI framework used for presentation layer, the network load balancing may need to&nbsp; be stateful (JSF webapp) or stateless (WebEngine).

Typically:

*   JSF Backoffice UI is stateful,
*   WebEngine and HTML/JS based UI are mainly stateless.

Anyway, even with JSF:

*   Authentication can be transparent if you use a SSO system,
*   The Nuxeo Platform knows how to restore a JSF view from a URL (most Nuxeo JSF views are bound to REST URLs).

![]({{file name='cluster2.png'}} ?w=500,border=true)

NB : In this architecture the Database server is still a Single Point of Failure. To correct that, the best option is to use Clustering + Database replication has described in the next paragraph.

{{#> callout type='tip' }}

For more information, please see the page [Setting up a HA Configuration Using the Nuxeo Platform and PostgreSQL]({{page space='admindoc58' page='setting-up-a-ha-configuration-using-the-nuxeo-platform-and-postgresql'}}).

{{/callout}}

## Hot Standby (DRP)

If you want to provide a Disaster Recovery Plan, you will need to host two separated Nuxeo infrastructures and be sure you can switch from one to an another in case of problem.

The first step is to deploy two Nuxeo infrastructures on two hosting sites. These infrastructure can be mono-VM, cluster or multi-VM. The key point is to provide a way for each hosting site to have the same vision of the data:

*   SQL data stored in the SQL database server,
*   Filesystem data.

Because Nuxeo storage VCS+Filesystem is safe, you can use a replication system between the two sites. Basically, you can use the replication/standby solution provided by the database server you choose. This replication tool just has to be transactional.

For the filesystem, any replication system like RSync can be used.

Because the blobs are referenced by their digest in the database, you don't have to care about synchronization between the DB and FS. In the worst case, you will have blobs that are not referenced by the DB on the replicated site.

This kind of DRP solution has been successfully tested in production environment using:

*   PosgreSQL stand-by solution (WAL shipping),
*   RSync for the file system.

![]({{file name='HA.jpg'}} ?w=500,border=true)

{{#> callout type='note' }}

The Warm standby DB nodes are not used by Nuxeo active nodes.

{{/callout}}

## Deploy Dedicated Processing Nodes

Starting with 5.8, the async tasks can be managed in a distributed way using the&nbsp;[WorkManager]({{page page='work-and-workmanager'}}) and Redis. This can be used to have some nodes of the Cluster dedicated to some heavy processing like Picture or Video conversions.

Having such a demarcation between nodes is also a good way to be sure that async processing won't slow down Interactive processing.

![]({{file name='Redis.png'}} ?w=500,border=true)

## Multi-Repository

Unlike Nuxeo Nodes, the Database server nodes can not be simply added to handle more load :

*   Multi-masters DB architecture (like Oracle RAC) work but don't really provide scale out, only HA.
*   For now, the Nuxeo Platform can not leverage the ReadOnly nodes because the Platform is too pluggable to be sure when we start a transaction if we will need to write or not.

However, the Nuxeo Platform does provide a way to scale out the data: using several repositories. The idea is that a single Nuxeo Application can be bound to several repositories: Each repository being a DB instance and a BlobStore.

The repositories are like mount points:

*   Default configuration is to have only one repository named "Default Repository" and mounted under /default/.
*   But you can add new repositories as needed.

Using the approach allows you:

*   To select your storage type according to the needs:
    *   Archive:
        *   Massive cheap storage for the Blob Store
        *   Add indexes on the Database to make Search faster (few Write)
    *   Live
        *   Fast storage to make work faster
        *   Fast database will few index to maximize write speed
*   To select the storage according to the isolation policy:
    *   Data for "clientX" goes in "repositoryX"

![]({{file name='multi-repo.png'}} ?w=300,border=true,thumbnail=true)

However, the multi-repository approach is not magical:

*   There is no aggregated index,
*   Data segregation is visible to users.

## Read-Only Synchronization

The Nuxeo Platform being flexible, you can use several addons together to achieve a complex architecture:

*   Use `nuxeo-platform-sync` to create a read-only copy of a remote repository;
*   Use remote plublisher to push information between two distant Nuxeo instances;
*   Use multi-repository support to segregate Local vs Central data.

![]({{file name='distant.png'}} ?w=500,border=true)

## Cloud

Nuxeo can be hosted on various Clouds and virtualization systems:

*   Amazon AWS
*   MS Azure
*   Docker

&nbsp;

&nbsp;