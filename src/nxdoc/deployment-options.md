---
title: Deployment Options
review:
    comment: ''
    date: ''
    status: ok
labels:
    - deployment
    - clustering
toc: true
confluence:
    ajs-parent-page-id: '22380898'
    ajs-parent-page-title: Developer Documentation Center
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: Deployment+Options
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC60/Deployment+Options'
    page_id: '22380917'
    shortlink: dYFVAQ
    shortlink_source: 'https://doc.nuxeo.com/x/dYFVAQ'
    source_link: /display/NXDOC60/Deployment+Options
tree_item_index: 300
history:
    -
        author: Solen Guitter
        date: '2016-08-31 13:08'
        message: ''
        version: '37'
    -
        author: Anonymous
        date: '2014-11-20 10:21'
        message: ''
        version: '36'
    -
        author: Thierry Delprat
        date: '2014-11-19 23:38'
        message: ''
        version: '35'
    -
        author: Thierry Delprat
        date: '2014-11-19 23:37'
        message: ''
        version: '34'
    -
        author: Thierry Delprat
        date: '2014-11-19 23:29'
        message: ''
        version: '33'
    -
        author: Thierry Delprat
        date: '2014-11-19 21:23'
        message: ''
        version: '32'
    -
        author: Thierry Delprat
        date: '2014-11-19 21:03'
        message: ''
        version: '31'
    -
        author: Alain Escaffre
        date: '2014-11-02 15:21'
        message: ''
        version: '30'
    -
        author: Solen Guitter
        date: '2014-09-24 11:20'
        message: merging current page with Data segregation page
        version: '29'
    -
        author: Solen Guitter
        date: '2014-09-19 12:01'
        message: ''
        version: '28'
    -
        author: Solen Guitter
        date: '2014-01-21 18:48'
        message: ''
        version: '27'
    -
        author: Solen Guitter
        date: '2014-01-21 18:48'
        message: Added related topics
        version: '26'
    -
        author: Thierry Delprat
        date: '2014-01-20 19:04'
        message: ''
        version: '25'
    -
        author: Thierry Delprat
        date: '2014-01-20 18:40'
        message: ''
        version: '24'
    -
        author: Thierry Delprat
        date: '2014-01-20 18:09'
        message: ''
        version: '23'
    -
        author: Thierry Delprat
        date: '2014-01-20 16:46'
        message: ''
        version: '22'
    -
        author: Solen Guitter
        date: '2013-12-27 14:41'
        message: ''
        version: '21'
    -
        author: Thierry Delprat
        date: '2013-12-13 11:39'
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
{{! excerpt}}

In this section, the different deployment possibilities are described.

{{! /excerpt}}

Thanks to Nuxeo Runtime and to the bundle system, the Nuxeo Platform deployment can be adapted to your needs:

*   Deploy only the bundles you really need
*   Deploy on multiple servers if needed
*   Deploy on multiple infrastructures: Tomcat, Pojo, unit tests

## Simple Deployment

For a simple deployment you have to:

*   Define the target Nuxeo distribution (in most of the cases Nuxeo CAP + some extra plugins)
*   Define the target deployment platform:
    *   Prepackaged Tomcat Server (including Nuxeo + Transaction manager + JCA + Pooling)
    *   Static WAR (see [Understanding Bundles Deployment]({{page page='understanding-bundles-deployment'}}))
    *   Embedded mode (mainly for unit tests, but also used for some client side deployment)

The default Tomcat packaging is actually not a bare Tomcat. The Tomcat that is shipped with Nuxeo contains:

*   A JTA Transaction Manager
*   A JCA pool manager

In most of the case, the Nuxeo server is behind a reverse proxy that is used to provide:

*   HTTPS/SSL encryption
*   HTTP caching
*   URL rewritting

![]({{file name='reverse.png'}} ?w=500,h=349,border=true)

Additionally, when some clients use a WAN to access the server, the reverse proxy can also be used to protect the server against slow connections that may use server side resources during a long time.

## Storage alternatives

Nuxeo Platform is pluggable so that it can be adapted to different deployment environments and use cases.

This means you can define _"where you want to manage your data"_ and because the answer may depend on the type of data, Nuxeo Platform provides different types of backend for different types of storage.

### Document Storage

You can configure&nbsp;

*   where you store the Document meta-data and hierarchy
    *   SQL Database (PostgresSQL, Oracle, MSSQL, MySQL, Amazon RDS)
    *   MongoDB
*   where you store the binary streams (the files you attach to documents)
    *   simple FileSystem
    *   SQL Database
    *   S3

<div class="table-scroll"><table class="hover"><tbody><tr><td colspan="1">![]({{file name='VCS1.png'}} ?w=200,thumbnail=true)</td><td colspan="1">![]({{file name='VCS2.png'}} ?w=200,thumbnail=true)</td><td colspan="1">![]({{file name='DBS.png'}} ?w=200,h=317)</td></tr><tr><td colspan="1">**_PosgreSQL + FileSystem_**</td><td colspan="1">_**Oracle + S3**_</td><td colspan="1">_**MongoDB + S3**_</td></tr></tbody></table></div>

### <span style="color: rgb(0,0,0);">Indexes</span>

You can also select where you store the indexes (including the full-text)

*   *   SQL Database
    *   Elasticsearch

![]({{file name='ES-Single.png'}} ?w=300,h=213,border=true)

Since 6.0, the default configuration uses Elasticsearch.

### Others&nbsp;

In the same logic, you can choose :

*   where you store the caches and the transient data

    *   In Memory (per instance basis)
    *   Redis (shared memory)
*   where you store&nbsp;[Users and Groups]({{page page='data-lists-and-directories'}})
    *   SQL Database
    *   LDAP
    *   mix of both
    *   external system

## Scalability and High Availability

### Cluster HA

In order to manage scale out and HA, the Nuxeo Platform provides a simple clustering solution.

When cluster mode is enabled, you can have several Nuxeo Platform nodes connected to the same database server : you can then simply add more Nuxeo Server if you need to serve more requests.

Nuxeo Repository cluster mode manages the required cache invalidation between the nodes. There is no need to activate any application server level cluster mode: cluster mode works even without application server.

The default caching implementation uses simple JVM Memory, but we also have alternate implementation for specific use cases.

Depending on the UI framework used for presentation layer, the network load balancing may need to be stateful.

Typically:

*   JSF Backoffice UI is stateful,
*   WebEngine and HTML/JS based UI are mainly stateless.

Anyway, even with JSF:

*   Authentication can be transparent if you use a SSO system,
*   The Nuxeo Platform knows how to restore a JSF view from a URL (most Nuxeo JSF views are bound to REST URLs).

When running in Cluster mode, the usage of Redis is strongly recommended since it allows to :

*   Share caches between the nodes&nbsp;
    *   making the caches more efficient
    *   avoiding invalidation issues
*   Share the [Work]({{page page='work-and-workmanager'}}) queues (all the asynchronous jobs that have been scheduled)

![]({{file name='Cluster-Redis.png'}} ?w=500,h=317,border=true)

In this architecture the Database server is still a Single Point of Failure.

To correct that, the you have several options :

*   use Nuxeo Clustering + Database replication has described below
*   use Nuxeo Clustering + a Clusterized database (like Oracle RAC)
*   use Nuxeo Clustering + a distributed/failsafe Database like MongoDB

{{#> callout type='tip' }}

For more information, please see the page [Setting up a HA Configuration Using the Nuxeo Platform and PostgreSQL]({{page space='admindoc60' page='setting-up-a-ha-configuration-using-the-nuxeo-platform-and-postgresql'}}).

{{/callout}}

### Scaling out processing&nbsp;

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">&nbsp;</th><th colspan="1">&nbsp;</th></tr><tr><td colspan="1">![]({{file name='cluster.png'}} ?w=500)</td><td colspan="1">Nuxeo Cluster system by itself allows to scale out processing :
you can add new Nuxeo nodes as the number of requests increase.</td></tr></tbody></table></div>

### Dedicated Processing nodes

Starting with 5.8, the async tasks can be managed in a distributed way using the&nbsp;[WorkManager]({{page page='work-and-workmanager'}})&nbsp;and Redis.

This can be used to have some nodes of the Cluster dedicated to some heavy processing like Picture or Video conversions.

![]({{file name='dedicated.png'}} ?w=500,h=289,border=true)

Having such a demarcation between nodes is also a good way to be sure that async processing won't slow down Interactive processing.

<div>

### Scaling out the Storage

As seen before, it is easy to scale out processing on Nuxeo Platform.

![]({{file name='Cluster-Big.png'}} ?w=300,h=255,border=true)

However, at some point, you may also need to be able to scale out the Storage layer : we provide several options for that.

#### Scaling the queries&nbsp;

When correctly configured, most databases can handle a heavy load of Store and Retrieve operations : the first bottleneck is usually complex queries.

So, a first solution to Scale out the Storage Layer is to split the work between :

*   The DataBase&nbsp;
    *   focus on Store & Retrieve operation
    *   small technical queries
*   Elasticsearch index
    *   handle complex search used to build the screens

At the Nuxeo level, directing a query to the Repository Database or to Elasticsearch is just a matter of configuration : code and query remain the same.

This approach allows to leverage Elasticsearch capability :

*   very fast query engine
*   capability to scale out easily

![]({{file name='Cluster-ES.png'}} ?w=500,h=284,border=true)

#### Sharding on several Databases

Unlike Nuxeo Nodes, the Database server nodes can not be simply added to handle more load :

*   Multi-masters SQL DB architecture (like Oracle RAC) work but don't really provide scale out, only HA.
*   leveraging replicated ReadOnly SQL DB nodes is complex in terms of transaction management

However, the Nuxeo Platform does provide a way to scale out the data: <u>using several repositories</u>.
The idea is that a single Nuxeo application can be bound to several repositories, each repository being a DB instance and a BlobStore.&nbsp;So, if one application is connected to two repositories, the data will be partitioned between two couples (ex: (DB+FS) + (DB+S3) ).

The repositories are like mount points: The default configuration is to have only one repository named "Default Repository" and mounted under&nbsp;`/default/`. But you can add new repositories as needed. These new repositories will appear inside the application as several content roots. This typically means that when accessing a document, you have to know what is the host repository.

Typical use cases for data partitioning include:

**Selecting your storage type according to the needs**

*   Partitioning&nbsp;between Live and Archive documents:
    *   Archive&nbsp;

        *   Storage: slower but massive cheap storage that can scale
        *   Indexes: add indexes on the database to make search faster (few Write)
    *   Live
        *   Storage: fast storage to make work faster, lower volume
        *   Indexes: fast database with few index to maximize write speed
*   Partitioning between read-only and read-write repositories

    *   have a read-write repository
    *   have a read-only replicated repository

**Selecting the storage according to the isolation policy**

*   Data for "clientX" goes in "repositoryX"
*   Partitioning between types of documents or document status:
    *   published documents in a public repository
    *   working documents in a restricted repository

This data partitioning is visible to user, but thanks to Elasticsearch we can provide a unified Index&nbsp;

![]({{file name='multi.png'}} ?w=500,h=421,border=true)

<span style="color: rgb(0,0,0);">This type of sharing has recently been tested during a performance benchmark using 10 PostgreSQL databases to reach a total of [1 Billion documents](http://www.nuxeo.com/blog/one-billion-documents/).</span>

<span style="color: rgb(0,0,0);">![]({{file name='1B.png'}} ?w=500,h=372,border=true)
</span>

#### <span style="color: rgb(0,0,0);">Leveraging NoSQL and Distributed Storage</span>

</div>

One the key advantages of NoSQL Storage like MongoDB is that they allow to scale out by simply adding nodes to the cluster.

&nbsp;

## Cloud & PaaS and Deployment Automation

### Nuxeo & AWS

To be able to run efficiently on the Cloud, you need to be able to use as much as possible the infrastructure of the Cloud Provider : in the case of AWS, there are a lot of services that you want to be able to use.

Nuxeo Platform, makes it easy since :

*   we are standard based
*   the pluggable component model (Extension Point) allows to easily change backend implementation when needed

That's why leveraging AWS infrastructure was almost a natural fit for Nuxeo :

*   Meta-Data Store : Oracle RDS or PostgreSQL RDS
    *   native plug (nothing specific to AWS)
*   Binary Store : S3 Binary Store
    *   our BinaryManager is pluggable and we use it to leverage the S3 Storage capabilities
*   Cache : ElasticCache / Redis
    *   our cache infrastructure is pluggable to support Redis
    *   our distributed Job queuing was already Redis based

The same idea is true for all the Cloud Specific services like provisioning and monitoring.

We try to provide everything so that the deployment in the target IaaS is easy and painless :&nbsp;

*   Nuxeo is packaged as Debian packages (this is one of the available packaging

    *   We can easily setup Nuxeo on top of AMI

    *   We&nbsp;can&nbsp;use&nbsp;CloudFormation

*   Nuxeo exposes its metrics via JMX

    *   CloudWatch can monitor Nuxeo

    *   We&nbsp;can&nbsp;use&nbsp;AutoScaling

<div><span class="text plain"><span class="meta paragraph text">![]({{file name='aws.png'}} ?w=500,h=320,border=true)
</span></span></div>

### Platform as a Service and nuxeo.io

Cloud infrastructure pricing is a complex task : you just need to take a look at the AWS pricing rules to be convinced of that.

However, there are great optimizations opportunities :

*   Reserved instance are significantly cheaper if you can commit in long term
*   Sport instances can be a great solution if you can cope with their transient nature

Being able to leverage these opportunities implies to distribute the applications parts across enough VM so that :

*   you can use all the resources available
*   you can loose VMs without breaking the system

At Nuxeo, we use Docker to multiplex several Nuxeo Applications on top of a set of AWS VMs running CoreOS.

Using this architecture provide high resilience, fast scale out and a very efficient performance / cost ratio.

This was one of the starting point of the[ nuxeo.io ]({{page page='platform-as-a-service'}})architecture that uses&nbsp;[Docker](http://www.nuxeo.com/blog/development/2014/01/docker-containers-nuxeo-part-1/)&nbsp;to provide on demande Nuxeo Platform deployment.

## <span style="color: rgb(0,0,0);">Other deployment options</span>

### Hot Standby (DRP)

If you want to provide a Disaster Recovery Plan, you need to host two separated Nuxeo infrastructures and be sure you can switch from one to an another in case of problem.

The first step is to deploy two Nuxeo infrastructures on two hosting sites. These infrastructure can be mono-VM, cluster or multi-VM. The key point is to provide a way for each hosting site to have the same vision of the data:

*   SQL data stored in the SQL database server,
*   Filesystem data.

Because Nuxeo storage VCS+Filesystem is safe, you can use a replication system between the two sites. Basically, you can use the replication/standby solution provided by the database server you choose. This replication tool just has to be transactional.

For the filesystem, any replication system like RSync can be used.

Because the blobs are referenced by their digest in the database, you don't have to care about synchronization between the DB and FS: In the worst case, you will have blobs that are not referenced by the DB on the replicated site.

This kind of DRP solution has been successfully tested in production environment using:

*   PosgreSQL stand-by solution (WAL shipping),
*   RSync for the file system.

![]({{file name='HA.jpg'}} ?w=500,border=true)

{{#> callout type='note' }}

The Warm standby DB nodes are not used by Nuxeo active nodes.

{{/callout}}

### Read-Only Synchronization

The Nuxeo Platform being flexible, you can use several add-ons together to achieve a complex architecture:

*   Use&nbsp;`nuxeo-platform-sync` to create a read-only copy of a remote repository;
*   Use remote plublisher to push information between two distant Nuxeo instances;
*   Use multi-repository support to segregate Local vs Central data.

![]({{file name='distant.png'}} ?w=500,h=417,border=true)

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related documentation'}}

*   [Nuxeo and Redis]({{page page='nuxeo-and-redis'}})
*   [Nuxeo Clustering Configuration]({{page space='admindoc60' page='nuxeo-clustering-configuration'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

&nbsp;

</div></div>
