---
title: Search Setup for OpenSearch 1.x and Elasticsearch 7.x–8.x
description: Install the OpenSearch 1.x / Elasticsearch 7–8 search client packages, optional embedded mode, and external Elasticsearch or OpenSearch clusters for Nuxeo LTS 2025.
review:
    comment: ''
    date: '2026-04-07'
    status: ok
labels:
    - elasticsearch
    - elasticsearch-component
toc: true
confluence:
    ajs-parent-page-id: '20518480'
    ajs-parent-page-title: Search Setup
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
tree_item_index: 1002
---

{{! excerpt}}
Use the `nuxeo-search-client-opensearch1` stack for OpenSearch 1.x, Elasticsearch 7.x or 8.x: packages, optional embedded server, and cluster installation guidance.
{{! /excerpt}}

## Setting up an OpenSearch 1.x, Elasticsearch 7.x or 8x Cluster{{> anchor 'setting-up-opensearch1'}}

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

### Installing an Elasticsearch Cluster{{> anchor 'installing-the-elasticsearch-cluster'}}

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

## See also

- [Search setup]({{page page='search-setup'}}) — [Configuring Nuxeo to Access the Search Cluster]({{page page='search-setup'}}#configuring-nuxeo-to-access-the-search-cluster), reindex, mappings, multi-repository, and troubleshooting (all illustrated with the `opensearch1` property namespace).
- [Search setup for OpenSearch 2.x]({{page page='search-setup-opensearch2'}}) — OpenSearch 2.x client (`opensearch2` namespace).
- [Search setup for Elasticsearch 9.x]({{page page='search-setup-elasticsearch9'}}) — Elasticsearch 9.x client (`elasticsearch9` namespace).
- [Nuxeo Search Client OpenSearch]({{page page='nuxeo-search-client-opensearch'}}) / [Nuxeo Search Client Elasticsearch]({{page page='nuxeo-search-client-elasticsearch'}}) — Marketplace packages.
