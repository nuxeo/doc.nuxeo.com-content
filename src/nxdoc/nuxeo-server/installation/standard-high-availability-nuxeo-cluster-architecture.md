---
title: Standard High Availability Nuxeo Cluster Architecture
description: This page details standard architecture options to deploy a Nuxeo cluster.
review:
    status: ok
    comment: ''
    date: '2019-04-17'
labels:
    - lts2016-ok
    - deployment
    - bchauvin
    - cluster
    - architecture
    - lts2017-ok
    - university
    - lts2019-ok
toc: true
confluence:
    ajs-parent-page-id: '3866685'
    ajs-parent-page-title: Installation
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Deployment+Options
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Deployment+Options'
    page_id: '950298'
    shortlink: GoAO
    shortlink_source: 'https://doc.nuxeo.com/x/GoAO'
    source_link: /display/NXDOC/Deployment+Options
tree_item_index: 1240
version_override:
    LTS 2016: 810/nxdoc/deployment-options
    LTS 2015: 710/nxdoc/deployment-options
    '6.0': 60/nxdoc/deployment-options
history:
    -
        author: Manon Lumeau
        date: '2016-06-09 12:29'
        message: ''
        version: '42'
    -
        author: Thibaud Arguillere
        date: '2016-05-27 19:39'
        message: ''
        version: '41'
    -
        author: Solen Guitter
        date: '2016-03-29 14:15'
        message: Fix title capitalization and typos
        version: '40'
    -
        author: Thibaud Arguillere
        date: '2016-03-22 16:01'
        message: ''
        version: '39'
    -
        author: Solen Guitter
        date: '2015-10-15 13:33'
        message: Update related pages
        version: '38'
    -
        author: Alain Escaffre
        date: '2015-10-13 14:03'
        message: ''
        version: '37'
    -
        author: Solen Guitter
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
This page details standard architecture options to deploy a Nuxeo cluster.
{{! /excerpt}}

{{#> callout type='info' heading='Before Reading'}}
This page assumes you already are familiar with the different components of a Nuxeo cluster. If not, you should have a look at our [Nuxeo architecture introduction]({{page page='nuxeo-cluster-architecture-introduction'}}) page first.
{{/callout}}

{{#> callout type='info' heading='Nuxeo University'}}
Watch the related courses on Nuxeo University:</br>
[Nuxeo Reference Architecture](https://university.nuxeo.com/learn/course/external/view/elearning/201/NuxeoReferenceArchitecture)</br>
[Expert Session on Disaster Recovery](https://university.nuxeo.com/learn/public/course/view/elearning/137/expert-session-disaster-recovery)
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/UNIVERSITY/university_reference_architecture.png
    name: university_reference_architecture.png
    server#screenshot#up_to_date
--}}
![university_reference_architecture.png](nx_asset://2a075e0b-c150-4eeb-b248-b92650771b5a ?w=450,border=true)
{{/callout}}

## High Availability Production Architecture

![]({{file name='nuxeo-cluster-logical-architecture.png'}} ?border=true)

The standard Nuxeo cluster architecture providing high availability is composed of:
1. Two load balancers in front with sticky sessions handling incoming requests and directing them to the appropriate Nuxeo server nodes.
1. A reverse proxy to protect each Nuxeo server node (usually Apache or Nginx).
1. At least two Nuxeo server nodes. You can add any number of nodes to scale out performances.
1. At least three nodes for the Elasticsearch cluster, same for Kafka and Redis if used. Contrarily to Nuxeo server nodes, these components always require an odd number of nodes to avoid the split-brain problem, which means you need to add nodes by batches of two minimum when wishing to scale out performances.
1. A database system providing high availability. Each solution has its own options for this, therefore we can't go into further details here.
1. A shared file system that is used to store binary files.

### Deploying in Cloud or Container Based Deployment

This diagram translates perfectly to an on-premise deployment using a container-based technology like docker and we provide a ready-to-use [docker image]({{page version='' space='nxdoc' page='setting-up-your-nuxeo-environment'}}#docker) for Nuxeo Server.

Nuxeo Platform also makes it easy to deploy in the cloud since:
- We are standard-based
- The pluggable component model (extension points) allows you to easily change backend implementation when needed.

For example, considering Amazon AWS as a possible cloud infrastructure provider:

![]({{file name='aws-deployment.png'}} ?border=true)
<!-- Source: https://www.lucidchart.com/documents/edit/0eb7242e-9a34-4d1f-8568-9682f8ab26a8 -->

- The AWS ELB would be used for load balancing.
- EC2 instances can be used for Elasticsearch cluster nodes too. The Amazon ElasticCache service does not provide the required APIs at this point to allow us to have a completely managed cluster.
- Amazon ElasticCache can be used for a managed Redis cluster. Another option is to have a cluster hosted and managed by RedisLabs.
- Amazon Managed Streaming for Kafka ([MSK](https://aws.amazon.com/msk/)) is an option for Kafka if it is available in your AWS region.
- Database can be handled through Amazon RDS, this is a native plug as there is nothing specific to Amazon in this case. MongoDB Atlas is also an option for a hosted MongoDB cluster.
- An Amazon S3 bucket can be used for replicated file storage. Our BinaryManager is pluggable and we use it to leverage the S3 Storage capabilities.

The same idea is true for all the cloud specific services like provisioning and monitoring. We try to provide everything so that the deployment in the target IaaS is easy and painless:

- Nuxeo is packaged (among other options) as Debian packages or a docker image
    - We can easily setup Nuxeo on top of Amazon Machine Images
    - We can use CloudFormation and we provide a template for it
- Nuxeo exposes its metrics via JMX
    - CloudWatch can monitor Nuxeo
    - We can use autoscaling

## Compacting Deployment

### Compact Deployment With High Availability

A frequently asked question is whether some applications can be merged on the same machine or not. The answer is yes! We will show such an option here and explain the design choices.

![]({{file name='nuxeo-cluster-compact-architecture.png'}} ?border=true)
<!-- Source: https://www.lucidchart.com/documents/edit/0eb7242e-9a34-4d1f-8568-9682f8ab26a8 -->

We see here how applications can be merged.
1. The load balancers are usually deployed on separate machines from where the Nuxeo server nodes will be, as otherwise stopping a Nuxeo node could have consequences on serving the requests.
2. On the machines where Nuxeo server nodes will be installed, a reverse proxy can be installed as well. It is lightweight, and having a reverse proxy for each Nuxeo node makes sense: if it fails for some reason, only the Nuxeo node behind it will be affected.
3. Redis, if used, can be installed on the same machine as Nuxeo server: our Redis usage is usually low enough for that.
4. Elasticsearch nodes have to be installed on dedicated machines for performance reasons. Elasticsearch uses half of the machine's memory for its heap and half for the system, and is not designed to share memory with another application using the JVM.
5. Kafka cluster is better on dedicated machines for isolation purpose.

### Compact Deployment With Limited Failover

Providing transparent upgrades without service interruption using a very limited number of machines is also possible, at the cost of some limitations. The following architecture example demonstrates this option.

![]({{file name='nuxeo-cluster-ha-limited-machines-architecture.png'}} ?border=true)
<!-- Source: https://www.lucidchart.com/documents/edit/0eb7242e-9a34-4d1f-8568-9682f8ab26a8 -->

In this architecture:
1. A load balancer with sticky sessions is used.
1. A total of two machines are prepared for the application cluster. Each machine holds a Nuxeo server node, a Redis node, and a reverse proxy. More machines can be added later for scalability purpose.
1. Since we have two Redis nodes, we take advantage from it to configure Redis in [master / slave mode](https://redis.io/topics/replication).
1. A single Elasticsearch node is used.
1. A single Kafka node is used.

#### Limitations

##### Potential Single Point of Failures

Two potential single points of failure exist in this architecture: the Elasticsearch server and the database server.

###### Database Server

The database server is the most impacting of the two; if it fails, you won't able to store or retrieve documents anymore. To prevent the database server from becoming a single point of failure, you have several options:

- Use database replication
- Use a clusterized database (like Oracle RAC)
- Use a distributed / failsafe database like MongoDB

###### Elasticsearch Server

Some features won't be available in your application during an Elasticsearch downtime: search screens and views that depend on the Elasticsearch index mainly. But even in a hard failure situation leading to complete data loss, it will not be that impacting as long as you configure your Nuxeo Server to store audit and sequences in the database: after reinstalling Elasticsearch the document index can be rebuilt easily using Nuxeo Server.

#### Redis in Master / Slave Mode
Redis server is known to be very resilient, and is less impacting when failing; this is why we considered deploying it in master / slave mode in our architecture schema. If it ever fails, consequences will be rather low as it mainly stores transient data, but you would still lose pending asynchronous jobs in the process. Losing these jobs will result in a loss of features in the application, but will not prevent it from working overall.

Depending on the importance of these jobs in your application (for instance they could be considered mission critical in a DAM application), you have options to provide high availability using Redis. You can refer to our [Nuxeo architecture introduction]({{page page='nuxeo-cluster-architecture-introduction'}}#redis) page for details. Remember that if choosing sentinel you will need at least 3 Redis nodes to prevent the split-brain problem.

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Next Steps'}}

- [Scale your Nuxeo cluster]({{page page='nuxeo-cluster-scalability-options'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [Nuxeo Clustering Configuration]({{page page='nuxeo-clustering-configuration'}})
- [Elasticsearch setup]({{page page='elasticsearch-setup'}})
- [Redis Configuration]({{page page='redis-configuration'}})
- [HTTP and HTTPS Reverse-Proxy Configuration]({{page page='http-and-https-reverse-proxy-configuration'}})

{{/panel}}</div></div>
