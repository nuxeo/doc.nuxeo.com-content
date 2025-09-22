---
title: Search Setup
description: This page provides several configuration use cases for Elasticsearch and Opensearch.
review:
    comment: ''
    date: '2020-11-03'
    status: ok
labels:
    - lts2016-ok
    - elasticsearch
    - elasticsearch-component
    - bdelbosc
    - lts2017-ok
toc: true
confluence:
    ajs-parent-page-id: '31032113'
    ajs-parent-page-title: Administration
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Elasticsearch+Setup
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Elasticsearch+Setup'
    page_id: '20518480'
    shortlink: UBY5AQ
    shortlink_source: 'https://doc.nuxeo.com/x/UBY5AQ'
    source_link: /display/NXDOC/Elasticsearch+Setup
tree_item_index: 1000
version_override:
    LTS 2015: 710/admindoc/elasticsearch-setup
    '6.0': 60/admindoc/elasticsearch-setup
history:
    -
        author: Solen Guitter
        date: '2016-10-10 07:34'
        message: ''
        version: '87'
    -
        author: Frédéric Vadon
        date: '2016-08-24 09:47'
        message: typo
        version: '86'
    -
        author: Manon Lumeau
        date: '2016-08-02 16:03'
        message: 'remove <span>'
        version: '85'
    -
        author: Vincent Dutat
        date: '2016-07-28 19:20'
        message: ''
        version: '84'
    -
        author: Manon Lumeau
        date: '2016-06-27 12:41'
        message: 'Fix link to Elasticsearch mapping '
        version: '83'
    -
        author: Manon Lumeau
        date: '2016-06-09 12:20'
        message: ''
        version: '82'
    -
        author: Thierry Martins
        date: '2016-05-19 12:21'
        message: "Add size to 'indexed terms' query"
        version: '81'
    -
        author: Solen Guitter
        date: '2016-05-13 15:14'
        message: Use excerpt for compatibility e
        version: '80'
    -
        author: Solen Guitter
        date: '2016-05-09 10:03'
        message: Add anchor
        version: '79'
    -
        author: Benoit Delbosc
        date: '2016-04-14 09:55'
        message: Add a note about swap and reduce bulk queue size
        version: '78'
    -
        author: Manon Lumeau
        date: '2016-03-25 16:38'
        message: ''
        version: '77'
    -
        author: Antoine Taillefer
        date: '2016-03-18 10:10'
        message: ''
        version: '76'
    -
        author: Manon Lumeau
        date: '2016-03-15 14:33'
        message: ''
        version: '75'
    -
        author: Benoit Delbosc
        date: '2016-03-14 10:57'
        message: ''
        version: '74'
    -
        author: Benoit Delbosc
        date: '2016-03-14 10:55'
        message: ''
        version: '73'
    -
        author: Benoit Delbosc
        date: '2016-03-14 10:15'
        message: how to change mapping for audit index
        version: '72'
    -
        author: Benoit Delbosc
        date: '2016-02-03 16:36'
        message: ''
        version: '71'
    -
        author: Solen Guitter
        date: '2015-11-23 10:03'
        message: ''
        version: '70'
    -
        author: Benoit Delbosc
        date: '2015-11-20 15:36'
        message: ''
        version: '69'
    -
        author: Benoit Delbosc
        date: '2015-11-20 15:35'
        message: ''
        version: '68'
    -
        author: Benoit Delbosc
        date: '2015-11-20 08:54'
        message: ''
        version: '67'
    -
        author: Benoit Delbosc
        date: '2015-11-20 08:47'
        message: Better explanation on how to create a new template to override the ES mapping
        version: '66'
    -
        author: Manon Lumeau
        date: '2015-10-14 10:02'
        message: ''
        version: '65'
    -
        author: Benoit Delbosc
        date: '2015-10-13 11:23'
        message: ''
        version: '64'
    -
        author: Joshua Fletcher
        date: '2015-10-05 18:32'
        message: Grammar.
        version: '63'
    -
        author: Antoine Taillefer
        date: '2015-10-05 08:15'
        message: ''
        version: '62'
    -
        author: Antoine Taillefer
        date: '2015-10-05 08:12'
        message: ''
        version: '61'
    -
        author: Antoine Taillefer
        date: '2015-10-05 08:10'
        message: ''
        version: '60'
    -
        author: Antoine Taillefer
        date: '2015-10-05 08:04'
        message: ''
        version: '59'
    -
        author: Antoine Taillefer
        date: '2015-10-05 07:40'
        message: ''
        version: '58'
    -
        author: Antoine Taillefer
        date: '2015-10-05 07:18'
        message: ''
        version: '57'
    -
        author: Antoine Taillefer
        date: '2015-09-24 12:36'
        message: ''
        version: '56'
    -
        author: Benoit Delbosc
        date: '2015-09-14 07:13'
        message: Use same JVM for Nuxeo and Es
        version: '55'
    -
        author: Solen Guitter
        date: '2015-08-25 07:52'
        message: ''
        version: '54'
    -
        author: Benoit Delbosc
        date: '2015-08-24 10:48'
        message: ''
        version: '53'
    -
        author: Benoit Delbosc
        date: '2015-08-13 14:13'
        message: ''
        version: '52'
    -
        author: Benoit Delbosc
        date: '2015-08-13 14:12'
        message: ''
        version: '51'
    -
        author: Benoit Delbosc
        date: '2015-08-10 07:51'
        message: ''
        version: '50'
    -
        author: Benoit Delbosc
        date: '2015-08-10 07:48'
        message: 'Add some ES tuning '
        version: '49'
    -
        author: Antoine Taillefer
        date: '2015-07-01 13:00'
        message: ''
        version: '48'
    -
        author: Antoine Taillefer
        date: '2015-07-01 11:58'
        message: ''
        version: '47'
    -
        author: Antoine Taillefer
        date: '2015-07-01 11:39'
        message: ''
        version: '46'
    -
        author: Antoine Taillefer
        date: '2015-07-01 11:37'
        message: ''
        version: '45'
    -
        author: Antoine Taillefer
        date: '2015-07-01 09:20'
        message: ''
        version: '44'
    -
        author: Antoine Taillefer
        date: '2015-07-01 09:09'
        message: ''
        version: '43'
    -
        author: Antoine Taillefer
        date: '2015-07-01 08:28'
        message: ''
        version: '42'
    -
        author: Antoine Taillefer
        date: '2015-06-30 12:57'
        message: ''
        version: '41'
    -
        author: Antoine Taillefer
        date: '2015-06-30 10:21'
        message: ''
        version: '40'
    -
        author: Antoine Taillefer
        date: '2015-06-24 12:41'
        message: ''
        version: '39'
    -
        author: Solen Guitter
        date: '2015-06-23 09:19'
        message: Title cap
        version: '38'
    -
        author: Antoine Taillefer
        date: '2015-06-22 16:06'
        message: ''
        version: '37'
    -
        author: Benoit Delbosc
        date: '2015-06-17 15:25'
        message: ''
        version: '36'
    -
        author: Solen Guitter
        date: '2015-05-18 08:11'
        message: Move supported versions in a dedicated section
        version: '35'
    -
        author: Benoit Delbosc
        date: '2015-05-12 08:17'
        message: ''
        version: '34'
    -
        author: Benoit Delbosc
        date: '2015-05-12 08:17'
        message: Update on ES version supported
        version: '33'
    -
        author: Benoit Delbosc
        date: '2015-03-26 17:18'
        message: Adding esync ref
        version: '32'
    -
        author: Solen Guitter
        date: '2015-03-25 10:13'
        message: ''
        version: '31'
    -
        author: Benoit Delbosc
        date: '2015-03-24 09:52'
        message: ''
        version: '30'
    -
        author: Solen Guitter
        date: '2015-03-18 08:54'
        message: ''
        version: '29'
    -
        author: Benoit Delbosc
        date: '2015-03-17 09:10'
        message: ''
        version: '28'
    -
        author: Benoit Delbosc
        date: '2015-02-20 11:04'
        message: ''
        version: '27'
    -
        author: Solen Guitter
        date: '2015-02-05 14:24'
        message: ''
        version: '26'
    -
        author: Benoit Delbosc
        date: '2015-02-03 08:48'
        message: ''
        version: '25'
    -
        author: Benoit Delbosc
        date: '2015-02-03 08:44'
        message: ''
        version: '24'
    -
        author: Benoit Delbosc
        date: '2014-12-15 13:53'
        message: ''
        version: '23'
    -
        author: Solen Guitter
        date: '2014-12-01 17:22'
        message: ''
        version: '22'
    -
        author: Benoit Delbosc
        date: '2014-12-01 17:12'
        message: ''
        version: '21'
    -
        author: Solen Guitter
        date: '2014-12-01 16:24'
        message: ''
        version: '20'
    -
        author: Solen Guitter
        date: '2014-12-01 15:50'
        message: ''
        version: '19'
    -
        author: Solen Guitter
        date: '2014-12-01 15:28'
        message: ''
        version: '18'
    -
        author: Solen Guitter
        date: '2014-12-01 15:24'
        message: ''
        version: '17'
    -
        author: Solen Guitter
        date: '2014-12-01 14:47'
        message: format
        version: '16'
    -
        author: Solen Guitter
        date: '2014-12-01 14:44'
        message: ''
        version: '15'
    -
        author: Benoit Delbosc
        date: '2014-11-25 14:57'
        message: ''
        version: '14'
    -
        author: Benoit Delbosc
        date: '2014-11-25 12:34'
        message: ''
        version: '13'
    -
        author: Benoit Delbosc
        date: '2014-11-25 12:33'
        message: ''
        version: '12'
    -
        author: Benoit Delbosc
        date: '2014-11-25 12:32'
        message: ''
        version: '11'
    -
        author: Benoit Delbosc
        date: '2014-11-25 12:10'
        message: ''
        version: '10'
    -
        author: Benoit Delbosc
        date: '2014-11-25 10:44'
        message: ''
        version: '9'
    -
        author: Benoit Delbosc
        date: '2014-11-12 14:14'
        message: ''
        version: '8'
    -
        author: Benoit Delbosc
        date: '2014-11-10 16:49'
        message: ''
        version: '7'
    -
        author: Benoit Delbosc
        date: '2014-11-10 16:33'
        message: ''
        version: '6'
    -
        author: Benoit Delbosc
        date: '2014-11-10 14:39'
        message: ''
        version: '5'
    -
        author: Benoit Delbosc
        date: '2014-11-10 14:34'
        message: ''
        version: '4'
    -
        author: Benoit Delbosc
        date: '2014-11-10 14:32'
        message: ''
        version: '3'
    -
        author: Benoit Delbosc
        date: '2014-11-10 14:13'
        message: ''
        version: '2'
    -
        author: Benoit Delbosc
        date: '2014-11-10 12:34'
        message: ''
        version: '1'
---

{{! excerpt}}
This page provides several configuration use cases for [Elasticsearch](https://www.nuxeo.com/partners/technology/elasticsearch/) and [Opensearch](https://opensearch.org/docs/1.3/install-and-configure/install-opensearch/index/).
{{! /excerpt}}

## Setting up an OpenSearch 1.x, Elasticsearch 7.x or 8x Cluster

To support OpenSearch 1.x, Elasticsearch 7x or 8x clusters, you need to install `nuxeo-search-client-opensearch1` package.

OpenSearch 1 is a fork of Elasticsearch 7, except some advanced features (not used by Nuxeo) they are fully compatible.

The `nuxeo-search-client-opensearch1` package defines index settings, mappings and uses the Rest API according to Elasticsearch 7 version (equivalent to OpenSearch 1 version). 
It relies on OpenSearch 1.x client library to access the search cluster.

Note that for historical reasons you may find some "Elasticsearch" occurrences in configuration properties.
Because they are compatible for these versions, Elasticsearch and OpenSearch could be used interchangeably in the documentation.

In addition to OpenSearch 1 and Elasticsearch 7, Nuxeo also works with Elasticsearch 8 cluster, as Elasticsearch 8 being backward compatible and able to honor Elasticsearch 7 API.

Please refer to [Compatibility Matrix]({{page page='compatibility-matrix'}}#elasticsearch) page for more information on the exact supported versions.

### Embedded Mode

Unlike previous versions, there is no default embedded mode in Nuxeo LTS 2025. If you want to set up an OpenSearch server that runs in the same JVM as the Nuxeo Platform's, you have to install explicitly the `nuxeo-opensearch1-embed` package.

{{#> callout type='warning' }}
This embedded mode **is only for testing purpose** and should not be used in production, neither OpenSearch nor Nuxeo can support an embedded installation.
{{/callout}}

For production you need to setup a Search cluster.

### Installing an Elasticsearch Cluster

Refer to the [Elasticsearch documentation](https://www.elastic.co/guide/en/elasticsearch/reference/current/install-elasticsearch.html) to install and secure your cluster. Basically:

- Don't run Elasticsearch open to the public.
- Don't run Elasticsearch as root.
- Secure the connection between Nuxeo and Elasticsearch:
  - Elasticsearch 7 requires [the X-Pack extension](https://www.elastic.co/guide/en/elasticsearch/reference/7.17/setup-xpack.html) to enable secured communication between Nuxeo and Elasticsearch.
    Please follow this guide to [Securing Elasticsearch](https://www.elastic.co/guide/en/elasticsearch/reference/7.17/security-settings.html).
  - Elasticsearch 8 security is enabled by default. Follow this guide for [further security configuration](https://www.elastic.co/guide/en/elasticsearch/reference/8.7/security-settings.html).
- Follow the [Elasticsearch REST Security APIs documentation](https://www.elastic.co/guide/en/elasticsearch/reference/7.17/security-api.html) for configuring a [user](https://www.elastic.co/guide/en/elasticsearch/reference/7.17/security-api-put-user.html) and [role](https://www.elastic.co/guide/en/elasticsearch/reference/7.17/security-api-put-role.html).

{{#> callout type='tip' }}
An example on how to create a role:
```bash
curl -XPOST -u elastic 'localhost:9200/_security/role/nuxeo_role' -H "Content-Type: application/json" -d '{
  "cluster" : [
    "all"
  ],
 "indices" : [
   {
     "names" : [ "nuxeo*" ],
     "privileges" : [ "all" ]
   }
 ]
}'
```
An example on how to create a user for that role:
```bash
curl -XPOST -u elastic 'localhost:9200/_security/user/nuxeo_user' -H "Content-Type: application/json" -d '{
  "password" : "nuxeo_secret_password",
  "full_name" : "Nuxeo User",
  "roles" : [ "nuxeo_role" ]
}'
```
{{/callout}}


#### Recommended Tuning

If you have a large number of documents or if you use Nuxeo in cluster you may reach the default configuration limitation, here are some recommended tuning:

Consider disabling the OS swapping or using other [Elasticsearch option](https://www.elastic.co/guide/en/elasticsearch/guide/current/heap-sizing.html#_swapping_is_the_death_of_performance) to prevent the heap to be swapped.

In `/etc/default/elasticsearch` file you can increase the JVM heap to half of the available OS memory:

```
# For a dedicated node with 12g of RAM
ES_JAVA_OPTS="-Xms6g -Xmx6g"
```

### Installing an OpenSearch Cluster

Refer to the [OpenSearch documentation](https://opensearch.org/docs/1.3/install-and-configure/install-opensearch/index/) to install OpenSearch. Basically:

- Don't run OpenSearch open to the public.
- Don't run OpenSearch as root.
- Secure the connection between Nuxeo and OpenSearch, the security plugin is enabled by default with demo values which need to be replaced. See [OpenSearch Security Configuration](https://opensearch.org/docs/latest/security/configuration/index/) for guidance.
- Follow the OpenSearch [Access Control API documentation](https://opensearch.org/docs/1.3/security/access-control/api) for configuring a [user](https://opensearch.org/docs/1.3/security/access-control/api/#create-user) and [role](https://opensearch.org/docs/1.3/security/access-control/api/#create-role).

{{#> callout type='tip' }}
An example on how to create a role:
```bash
curl -XPUT -u admin http://localhost:9200/_plugins/_security/api/roles/nuxeo_role -H "Content-Type: application/json" -d '{
  "cluster_permissions" : [
    "all"
  ],
 "index_permissions" : [
   {
     "index_patterns" : [ "nuxeo*" ],
     "allowed_actions" : [ "all" ]
   }
 ]
}'
```
An example on how to create a user for that role:
```bash
curl -XPUT -u admin http://localhost:9200/_plugins/_security/api/internalusers/nuxeo_user -H "Content-Type: application/json" -d '{
  "password" : "nuxeo_secret_password",
  "description" : "Nuxeo User",
  "backend_roles" : [ "nuxeo_role" ]
}'
```
{{/callout}}

#### Recommended Tuning

If you have a large number of documents or if you use Nuxeo in cluster you may reach the default configuration limitation, here are some [recommended tuning OpenSearch options](https://opensearch.org/docs/1.3/install-and-configure/install-opensearch/index/#important-settings)

You can increase the JVM heap to half of the available OS memory:
```
# For a dedicated node with 12g of RAM
OPENSEARCH_JAVA_OPTS=-Xms6g -Xmx6g
```

## Configuring Nuxeo to Access the Search Cluster

Nuxeo uses the Rest client protocol, you have to configure the access:
```
nuxeo.opensearch1.client.server=http://somenode:9200,https://anothernode:443
```
Where:
- `nuxeo.opensearch1.client.server`  is a comma separated list of URLs.

This property supersedes `elasticsearch.addressList`.

### Basic Authentication

If you have chosen to configure Basic Authentication then you can setup Nuxeo using `nuxeo.conf` with the follow properties:

```
nuxeo.opensearch1.client.username=your_username
nuxeo.opensearch1.client.password=your_password
```

These properties supersede `elasticsearch.restClient.username` and `elasticsearch.restClient.password`.

### TLS/SSL Configuration

If you have chosen to configure [Elasticsearch TLS/SSL](https://www.elastic.co/guide/en/elasticsearch/reference/7.17/security-basic-setup.html#security-basic-setup) or [OpenSearch TLS/SSL](https://opensearch.org/docs/1.3/security/configuration/tls/) then you can set up Nuxeo using `nuxeo.conf` with the following properties:

```
nuxeo.opensearch1.client.trustStore.path
nuxeo.opensearch1.client.truststore.path
nuxeo.opensearch1.client.truststore.password
nuxeo.opensearch1.client.truststore.type
nuxeo.opensearch1.client.keystore.path
nuxeo.opensearch1.client.keystore.password
nuxeo.opensearch1.client.keystore.type
```

These properties supersede all `elasticsearch.restClient.*` properties.

{{#> callout type='warning' }}
If you are using TLS/SSL then the `nuxeo.opensearch1.client.server` will need to be updated to include `https`.
{{/callout}}

See the [Trust Store and Key Store Configuration]({{page page='trust-store-and-key-store-configuration'}}) page for more.

### Index Names

Nuxeo manages 3 Elasticsearch indexes:

- The repository index used to index document content, this index can be rebuild from scratch by extracting content from the repository.
- The audit logs index to store audit entries, this index is a primary storage and can not be rebuild.
- A sequence index used to serve unique value that can be used as primary keys, this index is also a primary storage.

To make the connection between the Nuxeo Platform instance and the Search cluster, check the following options in the `nuxeo.conf` file and edit if you need to change the default value:

```
nuxeo.search.client.default.opensearch1.index.name=nuxeo
nuxeo.search.client.default.opensearch1.settings.numberOfReplicas=0
nuxeo.audit.backend.default.opensearch1.index.name=nuxeo-audit
nuxeo.audit.backend.default.opensearch1.settings.numberOfReplicas=0
nuxeo.uidsequencer.default.opensearch1.index.name=nuxeo-uidgen
```

Where

- `nuxeo.search.client.default.opensearch1.index.name` is the name of the OpenSearch index for the default document repository.
- `nuxeo.search.client.default.opensearch1.settings.numberOfReplicas` is the number of replicas. By default [you have 1 shard and 1 replica](https://www.elastic.co/guide/en/elasticsearch/reference/7.17/index-modules.html). If you have a single node in your cluster you should set the `indexNumberOfReplicas`to `0`. Visit the [Elasticsearch Scalability documentation](https://www.elastic.co/guide/en/elasticsearch/reference/current/scalability.html) for more information on shards and replicas.
- `nuxeo.audit.backend.default.opensearch1.index.name` is the name of the OpenSearch index for audit logs.
- `nuxeo.uidsequencer.default.opensearch1.index.name` is the name of the OpenSearch index for the uid sequencer, extensively used for audit logs.

You can find all the available options in the [nuxeo.defaults](https://github.com/nuxeo/nuxeo/blob/master/server/nuxeo-nxr-server/src/main/resources/templates/common-base/nuxeo.defaults).

These properties supersede: `elasticsearch.indexName`, `elasticsearch.indexNumberOfReplicas`, `audit.elasticsearch.indexName`, `seqgen.elasticsearch.indexName`.

#### Index Aliases and Reindexing without Service Interruption

This feature is planned but not available in the first release of Nuxeo LTS 2025.0.

### Translog Tuning

To reduce disk IO you should consider changing the default [translog](https://www.elastic.co/guide/en/elasticsearch/reference/7.17/index-modules-translog.html) durability from `request` to `async`.
This can be done from `nuxeo.conf`:
```
nuxeo.search.client.default.opensearch1.settings.indexTranslogDurability=async
nuxeo.audit.backend.default.opensearch1.settings.indexTranslogDurability=async
nuxeo.uidsequencer.default.opensearch1.settings.indexTranslogDurability=async
```

These properties supersede the `elasticsearch.index.translog.durability`.

If your indexes are already created you need some manual operation to change the translog:
```bash
curl -H "Content-Type: application/json" -XPUT "http://localhost:9200/nuxeo-uidgen/_settings" -d '{
  "index.translog.durability" : "async"
}'

curl -H "Content-Type: application/json" -XPUT "http://localhost:9200/nuxeo-audit/_settings" -d '{
  "index.translog.durability" : "async"
}'

curl -H "Content-Type: application/json" -XPUT "http://localhost:9200/nuxeo/_settings" -d '{
  "index.translog.durability" : "async"
}'

```

## Disabling OpenSearch

Simply don't install the `nuxeo-search-client-opensearch1` package.

### Disabling OpenSearch for Audit Logs{{> anchor 'disabling-es-for-audit-logs'}}

Simply, don't install the `nuxeo-audit-opensearch1` package.

## Rebuilding the Repository Index{{> anchor 'reindex'}}

If you need to reindex the whole repository, you have different possibilities:

### Re-index Repository Using Bulk Service{{> anchor 'reindexing-bulk'}}

Use the management API to re-index the repository, the command id is returned:

```bash
curl -X POST -u Administrator:<PASSWORD> "<SERVER_URL>/nuxeo/api/v1/management/search/reindex"

{"commandId": "21aeaea1-0ef0-4a89-a92d-fa8f679361de"}
```

At any time, you can request the status of the re-indexing using the previous command id:
```bash
curl -X GET -u Administrator:<PASSWORD> "<SERVER_URL>/nuxeo/api/v1/management/bulk/21aeaea1-0ef0-4a89-a92d-fa8f679361de"
{
  "entity-type": "bulkStatus",
  "commandId": "21aeaea1-0ef0-4a89-a92d-fa8f679361de",
  "state": "RUNNING",
  "processed": 200,
  "error": false,
  "errorCount": 0,
  "total": 42932,
  "action": "index",
  "username": "Administrator",
  "submitted": "2020-11-16T15:26:50.346Z",
  "scrollStart": "2020-11-16T15:26:50.432Z",
  "scrollEnd": "2020-11-16T15:26:50.446Z",
  "processingStart": null,
  "processingEnd": null,
  "completed": null,
  "processingMillis": 0
}
```

## Changing Mappings and Settings of Indexes

### Updating Repository Index Configuration

Nuxeo comes with a default mapping that sets the locale for full-text and declares some fields as being date or numeric.

{{#> callout type='note' }}
For fields that are not explicitly defined in the mapping, Elasticsearch will try to guess the type the first time it indexes the field. If the field is empty it will be treated as a String field. This is why most of the time you need to explicitly set the mapping for your custom fields that are of type date, numeric or full-text. Also fields that are used to sort and that could be empty need to be defined to prevent an unmapped field error.
{{/callout}}

The default mapping is located in the `${NUXEO_HOME}/templates/opensearch1-search-client/nxserver/config/opensearch1-search-client-config.xml.nxftl`.

**To override and tune the default mapping:**

Instead of overriding the extension point you can simply override the default mapping or settings JSON files:

1. [Create a custom template]({{page page='configuration-templates'}}) like `myapp` with a `nuxeo.defaults` file that contains:

    ```
    myapp.target=.
    ```

1. In this custom template create a file named `{NUXEO_HOME}/templates/myapp/nxserver/config/opensearch1-doc-mapping.json` to override the mapping. You can create a file named `{NUXEO_HOME}/templates/myapp/nxserver/config/opensearch1-doc-settings.json.nxftl` to override the settings.<br/>
**Important**: You must add your custom mapping/settings to the existing one. You cannot just set your custom mapping in the file as Nuxeo does not merge your mapping with the default one. So, you must _duplicate_ the original file and modify the copy.

1. Update the `nuxeo.conf` to use your custom template.

    ```
    nuxeo.templates=default,opensearch1-search-client,myapp
    ```

1. Restart and re-index the entire repository (see previous section). A re-indexing is needed to apply the new settings and mapping.

For mapping customization examples, see the page [Configuring the Elasticsearch Mapping]({{page page='configuring-the-elasticsearch-mapping'}}).

### Updating the Audit Logs Index Configuration

Here the index is a primary storage and you cannot rebuild it. So we need a tool that will extract the `_source` of documents from one index and submit it to a new index that have been setup with the new configuration.

1. Update the mappings or settings configuration by overriding the `{NUXEO_HOME}/templates/opensearch1-audit/nxserver/config/opensearch1-audit-config.xml.nxftl`(follow the same procedure as the section above for the repository index)
1. Use a new name for the `nuxeo.audit.backend.default.opensearch1.index.name` (like `nuxeo-audit2`)
1. Start the Nuxeo Platform.</br>
    The new index is created with the new mapping.
1. Stop the Nuxeo Platform
1. Copy the audit logs entries in the new index using the `_reindex` endpoint. Here we copy `nuxeo-audit` to `nuxeo-audit2`.

    ```bash
    curl -X POST http://localhost:9200/_reindex -H 'Content-Type: application/json' -d '{
    "source": {
    "index": "nuxeo-audit"
    },
    "dest": {
    "index": "nuxeo-audit2"
    }
    }'
    ```

## Configuration for Multi Repositories

You need to define an index for each repository. This is done by adding an `elasticSearchIndex` contribution.

1. Create a custom template as described in the above section "Changing the mapping of the index".
1. Add the following contribution:

    ```xml
    <extension target="org.nuxeo.ecm.core.search" point="searchIndex">
      <searchIndex name="enhanced-repo2" searchClient="opensearch" repository="repo2" default="true" />
    </extension>
  
    <extension target="org.nuxeo.ecm.core.search.client.opensearch1" point="searchClient">
      <searchClient name="opensearch">
        <searchIndex name="enhanced-repo2" technicalName="nuxeo-repo2" />
      </searchClient>
    </extension>
  
    <extension target="org.nuxeo.runtime.opensearch1.OpenSearchComponent" point="index">
      <index name="nuxeo-repo2">
        <client id="search/default" />
      </index>
    </extension>
    ```

    Where `repo2` is the name of the second repository and `nuxeo-repo2` the OpenSearch index name.

{#> callout type='warning' }}
It is not possible to disable contribution to an `searchIndex` for a specific repository. Each repository requires a dedicated index. You can still use a custom `writerClass` to remove fields or schemas depending on repository.
{{/callout}}

## Setting up an OpenSearch 2.x Cluster{{> anchor 'setting-up-opensearch2'}}

In order to use an OpenSearch 2.x cluster, you need to install `nuxeo-search-client-opensearch2` package.

If you want to set up an OpenSearch server that runs in the same JVM as the Nuxeo Platform's, you have to install explicitly the `nuxeo-opensearch2-embed` package. For production, you need to set up a Search cluster.

Currently, the configuration is identical to OpenSearch 1, with a single change: all OpenSearch 1 options must be updated to OpenSearch 2.

For instance, you will have to use:
```
nuxeo.opensearch2.client.server=http://somenode:9200,https://anothernode:443
nuxeo.opensearch2.client.username=your_username
...
nuxeo.search.client.default.opensearch2.index.name=nuxeo
...
```

## Investigating and Reporting Problems

### Activate Traces

To understand why a document is not present in search results or not indexed, you can activate a debug trace.

Look at the `lib/log4j2.xml` you will find commented configuration to trace OpenSearch requests and responses.

### Reporting Settings and Mapping

It is also important to report the current settings and mapping of an Elasticsearch index (here called `nuxeo`)

```bash
curl localhost:9200/nuxeo/_settings?pretty > /tmp/nuxeo-settings.json
curl localhost:9200/nuxeo/_mapping?pretty > /tmp/nuxeo-mapping.json
# misc info and stats on Elasticsearch
curl localhost:9200 > /tmp/es-info.txt
curl localhost:9200/_cluster/stats?pretty >> /tmp/es-info.txt
curl localhost:9200/_nodes/stats?pretty >> /tmp/es-info.txt
curl localhost:9200/_cat/health?v >> /tmp/es-info.txt
curl localhost:9200/_cat/nodes?v >> /tmp/es-info.txt
curl localhost:9200/_cat/indices?v >> /tmp/es-info.txt
```

### Testing an Analyzer

To test the full-text analyzer:

```bash
curl -s -X GET "localhost:9200/nuxeo/_analyze" -H 'Content-Type: application/json' -d' {
  "analyzer" : "fulltext",
  "text" : "This is a text for testing, file_name/1-foos-BAR.jpg"
}'
```

To test an analyzer derived from the mapping:

```bash
curl -s -X GET "localhost:9200/nuxeo/_analyze" -H 'Content-Type: application/json' -d' {
  "field" : "ecm:path.children",
  "text" : "workspaces/main folder/sub-folder"
}'
```

### Viewing Indexed Terms for Document Field

This can be done using tool like [Luke](https://github.com/DmitryKey/luke) to analyze at the Lucene index level.
It is also possible to use aggregate on fields that are not text or text with `fielddata` option:

```bash
# view indexed tokens for dc:title.fulltext of document 3d50118c-7472-4e99-9cc9-321deb4fe053
curl -XGET 'localhost:9200/nuxeo/doc/_search?pretty' -H 'Content-Type: application/json' -d'{
 "query" : {"ids" : { "values" : ["3d50118c-7472-4e99-9cc9-321deb4fe053"] }},
 "aggs": {"my_aggs": {"terms": {"field": "dc:title", "order" : { "_count" : "desc" }, "size": 1000}}}}'
```

You may need to change the `size` parameter to get more or less indexed terms.

### Explain and Profile Elasticsearch Queries

When trace level logs are active, Elasticsearch curl command will be present in the server log file. Getting more details on what is happening during the query execution, can either be done using [explain](https://www.elastic.co/guide/en/elasticsearch/reference/current/search-explain.html) or [profile](https://www.elastic.co/guide/en/elasticsearch/reference/current/search-profile.html#search-profile-api-example).
Those two approaches will help to understand the mapping and the field scoring, it can also gives inputs about unmapped fields for example.


* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Other Elasticsearch Documentation'}}

- [Configuring the Elasticsearch Mapping]({{page space='NXDOC' page='Configuring the+Elasticsearch+Mapping'}})
- [Search Indexing Logic]({{page page='elasticsearch-indexing-logic'}})
- [How to Make a Page Provider or Content View Query Elasticsearch Index]({{page page='how-to-make-a-page-provider-or-content-view-query-elasticsearch-index'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Other Related Documentation '}}

- [Full-Text Queries]({{page page='full-text-queries'}})
- [Indexing and Query]({{page page='indexing-and-query'}})
- [Nuxeo Architecture Components - Configuration]({{page page='nuxeo-architecture-components'}})

{{/panel}}</div></div>
