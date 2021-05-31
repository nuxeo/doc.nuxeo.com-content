---
title: Nuxeo Scalability Options
description: This page describes how your Nuxeo cluster can scale depending on your needs.
labels:
    - deployment
    - bchauvin
    - architecture
    - cluster
    - content-review-lts2017
    - lts2019-ok
review:
    status: ok
    comment: ''
    date: '2021-03-12'
toc: true
tree_item_index: 400
---

{{! excerpt}}
This page describes how your Nuxeo cluster can scale depending on your needs.
{{! /excerpt}}

## Processing

Nuxeo Server by itself allows you to scale out processing: you can add new nodes as the number of requests increase.

### Typology of Nuxeo Nodes

Nuxeo nodes need to be adapted **depending on the workloads**:
- If more users are going to access the Nuxeo repository, then it would be necessary to add **Nuxeo interactive nodes**. Those Nuxeo nodes are used to serve the Nuxeo API and manage interactive workload.
- If the repository has to handle a lot of asynchronous processes (like video conversions, full text indexation etc.), then it makes sense to use **Nuxeo worker nodes**.
- If the repository has to handle an important data import to do the initial migration more ingestion, then it would be relevant to scale out **Nuxeo importer nodes**: Nuxeo importer nodes do not serve interactive workload, do not run any asynchronous workload and are configured specifically to speed up import. Additionally, they are configured to remove some processing that is not needed for bulk import.

### Dedicated Processing Nodes

Applications requiring heavy processing like picture or video conversions can take benefit from having some Nuxeo Server nodes dedicated to these asynchronous tasks. Having such a demarcation between nodes is a good way to be sure that async processing won't slow down interactive processing.

**Nuxeo worker nodes** allow you to manage batch processing nodes and to execute asynchronous work, such as conversions, Nuxeo Drive synchronization processes, full-text extraction etc. The number of necessary nodes will vary based on your needs, such as the use of the processing of large volumes of rich media files, the use of Nuxeo addons like Nuxeo Drive etc.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Scalability Options/worker-nodes-intro.png
    name: worker-nodes-intro.png
    server#schema#up_to_date
--}}
![worker-nodes-intro.png](nx_asset://8a582734-8832-48dc-a700-090c6ed6bae3 ?w=650,border=true)

The async tasks can be managed in a distributed way using the [WorkManager]({{page page='work-and-workmanager'}}) with Kafka (or Redis).

<!-- Source: https://lucid.app/lucidchart/8db3f1df-ea81-4796-ae42-d7f77ab3a9fd/edit?beaconFlowId=CD3C7B1BC539200B&page=~qwjwKgIGl8j# -->

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Scalability Options/worker-nodes.png
    name: worker-nodes.png
    server#schema#up_to_date
--}}
![worker-nodes.png](nx_asset://1afeca9e-063d-4bd9-9961-19fdbe1d9b59 ?w=650,border=true)

### WorkManager and Kafka

The WorkManager defines pools of workers, the size of a pool defines the maximum number of threads that can run concurrently on this node.

When using Kafka, each worker thread is a consumer of a Kafka topic containing works for the pool.

The maximum concurrency for Kafka consumers is limited by the number of partitions in the topic.

This means that if the video conversion pool size is set to 4 threads in Nuxeo, the maximum number of threads (cluster wide) that can run concurrently is limited by the number of partitions in the video conversion topic.

By default, we over-provision the number of partition with a factor 3, so there are 12 partitions when defining a work pool of 4.

This is very handy to limit the processing throughput per pool at the cluster level, adding nodes will scale up to an expected limit but adding more nodes will not make the cluster collapse.

## Queries

When correctly configured, most databases can handle a heavy load of store and retrieve operations: the first bottleneck is usually complex queries.

So, a first solution to scale out the storage layer is to split the work between:

- The database
    - Focus on Store & Retrieve operations
    - Small technical queries
- Elasticsearch index
    - Handle complex search used to build the screens
    - Can also be used to retrieve the document that is fully stored in the index.

At the Nuxeo level, directing a query to the repository database or to Elasticsearch is just a matter of configuration: code and query remain the same. You can refer to the [moving load from database to Elasticsearch]({{page page='moving-load-from-database-to-elasticsearch'}}) page for details.

This approach allows you to leverage Elasticsearch capabilities to its fullest:

- Very fast query engine with advanced querying options
- Capability to scale out easily

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Scalability Options/query-scale-out.png
    name: query-scale-out.png
    server#schema#up_to_date
--}}
![query-scale-out.png](nx_asset://ea94a8dd-f3fb-4158-b0ca-d13b2d6dc8f2 ?w=650,border=true)

## Storage

As seen before, it is easy to scale out processing on Nuxeo Platform, you only need to add more Nuxeo Server nodes. However, at some point, you may also need to be able to scale out the storage layer: we provide several options for that.

### Scaling File Storage

Nuxeo natively deduplicates files attached to your documents, which makes the necessary disk space to operate your applications lower. Still, there are a few details you might wish to know.

When storing files in the cloud using for instance the native Amazon S3 connector we provide, you don't need to worry about how files will be distributed on the filesystem.

When storing files on premise, Nuxeo arranges to maximize performances by distributing files in subfolders. A md5 checksum of the file is calculated, and the file is stored in a two-level folder structure named after the first characters of the checksum.

For example, a file having the following checksum: `38c8a503c45169a0668c4ef0c2dc12ec` would be stored in a `38`/`c8` folder structure. The number of characters used for the folder naming is easily configurable, although it's unlikely you will need more than the two characters used by default:
- Each folder level is made of 256 combinations (16 * 16 characters),
- That means we reach a total of 65536 folder combinations in total (16^4),
- If we store 1000 files per folder, we are over 65 million files stored (65 536 000).

Even older filesystems have no performance problem until 10 000 files per folder, which gives you a lot of latitude. Past a certain point, you may wish however to lower costs by distributing files between different hardware solutions. This can easily be achieved by adding repositories in your application, and we describe this solution in the [scaling database storage](#scaling-database-storage) below.

### Data Partitioning

In the case of an **archive repository**, not all documents need to be accessed regularly, and data access is mainly for read-only operations. Nuxeo Platform offers a way to optimize storage for cost consideration, by partitioning data between “live/fresh” and “archive”. In most cases, you do not have multiple billions of documents you need to work with regularly. However, you can have billions of documents that you rarely access, but still need to be accessible and searchable in case you need them.

The partitioning of the data impacts:
- What kind of MongoDB cluster we use: typically, we want to downscale the “Archive” MongoDB cluster to support mainly read-only.
- What type of indexing we apply: we probably don’t need to index all attributes and the full-text of the archived statements.
- What kind of binary storage we use, we could use AWS S3 infrequent access for the blobs associated with the archive repository.

Thanks to the [multi-repositories approach]({{page version='' space='nxdoc' page='multiple-repositories-configuration'}}), you are able:
- To partition your data,
- To use multiple indexes,
- To adjust the configuration according to each repository so that the target hardware configuration was less than double (16 data nodes), whereas we multiplied the data volume by 11.

Here is an example of what has been accomplish for the [11B Benchmark](https://benchmarks.nuxeo.com/11-billion-benchmark-story/), where storage was divided between live documents and archive documents:

<img src="https://benchmarks.nuxeo.com/images/11b/24-phase2-sharding.png"/>

#### Multi-Repository Approach

The Nuxeo Platform does provide a way to scale out the data: using several repositories.

The idea is that a single Nuxeo application can be bound to several repositories, each repository being a database instance and a file storage solution. So if one application is connected to two repositories, the data will be partitioned between two couples (ex: (DB+FS) + (DB+S3)).

The repositories are like mount points: The default configuration is to have only one repository named "Default Repository" and mounted under `/default/`. But you can add new repositories as needed. These new repositories will appear inside the application as several content roots. This typically means that when accessing a document, you have to know what the host repository is.

Typical use cases for data partitioning include:

**Selecting your storage type according to the needs**

- Partitioning between live and archived documents:
    - Archive
        - Storage: slower but massive cheap storage that can scale
        - Indexes: add indexes on the database to make search faster (few writes)
    - Live
        - Storage: fast storage to make work faster, lower volume
        - Indexes: fast database with few indexes to maximize write speed

- Partitioning between read-only and read-write repositories
    - Have a read-write repository
    - Have a read-only replicated repository

**Selecting the storage according to the isolation policy**

- Data for "clientX" goes in "repositoryX"
- Partitioning between types of documents or document status:
    - Published documents in a public repository
    - Working documents in a restricted repository

This data partitioning is visible to end-users, but thanks to Elasticsearch we can provide a unified index. It means searches can be executed in all repositories seamlessly, and any document query or listing can take advantage of this unified index too when necessary.

<!-- Source: https://www.lucidchart.com/documents/edit/0eb7242e-9a34-4d1f-8568-9682f8ab26a8 -->
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Scalability Options/unified-index.png
    name: unified-index.png
    server#schema#up_to_date
--}}
![unified-index.png](nx_asset://cfbad3a1-3584-4a38-88b1-feca6ce92847 ?w=650,border=true)

This type of sharding has been tested during the [11B benchmark](https://benchmarks.nuxeo.com/11-billion-benchmark-story/), leveraging the MongoDB Sharding to maximize write-throughput to speed-up the import of archives, and allowing us to reach 25,000 documents/s.

### Scaling Database Storage

#### NoSQL Databases

One of the key advantages of NoSQL databases, like MongoDB, is that they allow to scale out by simply adding nodes to the cluster and natively offer sharding on the nodes.

#### Relational Databases

Unlike NoSQL databases, relational database nodes can't simply be added to handle more load:

- Multi-masters SQL DB architecture (like Oracle RAC) work but don't really provide scale out, only HA.
- Leveraging replicated ReadOnly SQL DB nodes is complex in terms of transaction management

* * *

<div class="row" data-equalizer data-equalize-on="medium">
<div class="column medium-6">
{{#> panel heading='Related Documentation'}}

- [Nuxeo Importer Node Configuration](https://github.com/nuxeo-sandbox/nuxeo-jit-blobstore/tree/master/package/src/main/resources/install/templates/importer-node)
- [Multi-repository Concept]({{page version='' space='nxdoc' page='multiple-repositories-configuration'}})

{{/panel}}
</div>
<div class="column medium-6">
</div></div>
