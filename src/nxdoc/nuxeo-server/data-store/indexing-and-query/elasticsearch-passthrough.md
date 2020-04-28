---
title: Elasticsearch Passthrough
review:
    comment: ''
    date: '2017-12-14'
    status: ok
labels:
    - lts2016-ok
    - elasticsearch
    - elasticsearch-component
    - bdelbosc
    - excerpt
    - link-update
    - lts2017-ok
toc: true
confluence:
    ajs-parent-page-id: '4687860'
    ajs-parent-page-title: Indexing and Query
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Elasticsearch+Passthrough
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Elasticsearch+Passthrough'
    page_id: '26316773'
    shortlink: 5Y_RAQ
    shortlink_source: 'https://doc.nuxeo.com/x/5Y_RAQ'
    source_link: /display/NXDOC/Elasticsearch+Passthrough
tree_item_index: 800
history:
    -
        author: Guillaume Renard
        date: '2016-06-20 12:58'
        message: ix typ
        version: '14'
    -
        author: Benoit Delbosc
        date: '2015-12-08 11:17'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2015-11-05 09:04'
        message: Add link to nuxeo.conf and fix typos
        version: '12'
    -
        author: Guillaume Renard
        date: '2015-11-04 13:00'
        message: ''
        version: '11'
    -
        author: Bertrand Chauvin
        date: '2015-11-03 15:22'
        message: Fixed typo
        version: '10'
    -
        author: Solen Guitter
        date: '2015-10-21 15:47'
        message: Fix request filters names and links in Contributing a Custom Index View with a SearchRequestFilter
        version: '9'
    -
        author: Solen Guitter
        date: '2015-10-16 12:09'
        message: ''
        version: '8'
    -
        author: Guillaume Renard
        date: '2015-10-02 16:08'
        message: ''
        version: '7'
    -
        author: Guillaume Renard
        date: '2015-10-02 15:51'
        message: ''
        version: '6'
    -
        author: Alain Escaffre
        date: '2015-10-02 12:01'
        message: ''
        version: '5'
    -
        author: Guillaume Renard
        date: '2015-09-29 16:02'
        message: ''
        version: '4'
    -
        author: Guillaume Renard
        date: '2015-09-29 15:34'
        message: ''
        version: '3'
    -
        author: Guillaume Renard
        date: '2015-09-29 11:55'
        message: ''
        version: '2'
    -
        author: Guillaume Renard
        date: '2015-09-29 08:47'
        message: ''
        version: '1'

---
{{! excerpt}}

The platform allows to use the HTTP REST API provided by the Elasticsearch back end.

{{! /excerpt}}

## Principle

Elasticsearch exposes a search API to request indexes with HTTP requests (see [Elasticsearch documentation](https://www.elastic.co/guide/en/elasticsearch/reference/current/search-search.html)). Elasticsearch does not perform authentication or authorization. The purpose of the [Nuxeo Elasticsearch Passthrough](https://github.com/nuxeo/nuxeo/tree/master/nuxeo-features/nuxeo-elasticsearch/nuxeo-elasticsearch-http-read-only) is to expose a limited set of Read Only Elasticsearch HTTP REST API, taking in account the Nuxeo authentication and authorization.

Concretely, HTTP requests are not sent to the Elasticsearch back end but addressed to the Nuxeo Platform which will rework the query to add a filter according to a Principal and forward them to the Elasticsearch cluster.

The Nuxeo Elasticsearch passthrough is available at **http://my-nuxeo-server:8080/nuxeo/site/es**.

## Requirement

When your Elasticsearch instance is embedded is the same JVM than your Nuxeo instance (not recommended for production), the passthrough works out of the box.

When using a standalone Elasticsearch instance, make sure the following property is correctly set in your [nuxeo.conf]({{page page='configuration-parameters-index-nuxeoconf'}}):

```
elasticsearch.httpReadOnly.baseUrl=http://your_es_instance:9200
```

## Querying Indexes

### Repository Index

The Elasticsearch index name for the default repository is `nuxeo`. To query the `nuxeo` repository, you can issue the following request:

```bash
curl -XGET -u jdoe:jdoe  'http://localhost:8080/nuxeo/site/es/nuxeo/_search' -d '{ "query": { "match_all":{}}}'
```

The platform will use the [DefaultSearchRequestFilter](https://github.com/nuxeo/nuxeo/blob/master/nuxeo-features/nuxeo-elasticsearch/nuxeo-elasticsearch-http-read-only/src/main/java/org/nuxeo/elasticsearch/http/readonly/filter/SearchRequestFilter.java) to rework the query applying ACL filtering as follow:

```js
{
    "query": {
        "bool": {
            "filter": {
                "terms": {
                    "ecm:acl": [
                        "members",
                        "jdoe",
                        "Everyone"
                    ]
                }
            },
            "must": {
                "match_all": {}
            }
        }
    }
}
```

{{#> callout type='warning' }}

The security filtering takes in account only the ACL security and security policy that is expressible in NXQL.
If you use a custom security policy that is not expressible in NXQL you should not enable the Nuxeo Elasticsearch passthrough.

{{/callout}}


### Audit Index

The platform only allows Administrator users to query the audit index.

```bash
curl -XGET -u Administrator:Administrator  'http://localhost:8080/nuxeo/site/es/audit/_search' -d '{ "query": { "match_all":{}}}'
```

In the same way the [AuditRequestFilter](https://github.com/nuxeo/nuxeo/blob/master/nuxeo-features/nuxeo-elasticsearch/nuxeo-elasticsearch-http-read-only/src/main/java/org/nuxeo/elasticsearch/http/readonly/filter/AuditRequestFilter.java) search request filter to only Administrators request the audit index.

## Contributing a Custom Index View with a SearchRequestFilter

As detailed above, you can directly query Elasticsearch index with the following URL:

```
http://localhost:8080/nuxeo/site/es/{es_index_name}/_search
```

The repository index and the audit index use by default respectively the [DefaultSearchRequestFilter](https://github.com/nuxeo/nuxeo/blob/master/nuxeo-features/nuxeo-elasticsearch/nuxeo-elasticsearch-http-read-only/src/main/java/org/nuxeo/elasticsearch/http/readonly/filter/DefaultSearchRequestFilter.java) and [AuditRequestFilter](https://github.com/nuxeo/nuxeo/blob/master/nuxeo-features/nuxeo-elasticsearch/nuxeo-elasticsearch-http-read-only/src/main/java/org/nuxeo/elasticsearch/http/readonly/filter/AuditRequestFilter.java) to make sure the current user only accesses authorized data.

[DefaultSearchRequestFilter](https://github.com/nuxeo/nuxeo/blob/master/nuxeo-features/nuxeo-elasticsearch/nuxeo-elasticsearch-http-read-only/src/main/java/org/nuxeo/elasticsearch/http/readonly/filter/DefaultSearchRequestFilter.java) and [AuditRequestFilter](https://github.com/nuxeo/nuxeo/blob/master/nuxeo-features/nuxeo-elasticsearch/nuxeo-elasticsearch-http-read-only/src/main/java/org/nuxeo/elasticsearch/http/readonly/filter/AuditRequestFilter.java) are [SearchRequestFilter](https://github.com/nuxeo/nuxeo/blob/master/nuxeo-features/nuxeo-elasticsearch/nuxeo-elasticsearch-http-read-only/src/main/java/org/nuxeo/elasticsearch/http/readonly/filter/SearchRequestFilter.java) and you can contribute your own [SearchRequestFilter](https://github.com/nuxeo/nuxeo/blob/master/nuxeo-features/nuxeo-elasticsearch/nuxeo-elasticsearch-http-read-only/src/main/java/org/nuxeo/elasticsearch/http/readonly/filter/SearchRequestFilter.java) with the extension point [ `filters`](http://explorer.nuxeo.com/nuxeo/site/distribution/Nuxeo%20DM-8.3/viewExtensionPoint/org.nuxeo.elasticsearch.http.readonly.RequestFilterService--filters).

### Worfklow Audit Index Example{{> anchor 'audif_wf'}}

The following contribution:

```xml
<?xml version="1.0"?>
<component name="org.nuxeo.ecm.platform.routing.es" version="1.0">
  <require>org.nuxeo.elasticsearch.http.readonly.RequestFilterService</require>
  <extension target="org.nuxeo.elasticsearch.http.readonly.RequestFilterService"
    point="filters">
    <requestFilter filterClass="org.nuxeo.ecm.platform.routing.core.audit.es.RoutingAuditRequestFilter"
      index="audit_wf" />
  </extension>
</component>
```

will tell to apply the [RoutingAuditRequestFilter](https://github.com/nuxeo/nuxeo-platform-document-routing/blob/master/nuxeo-routing-core/src/main/java/org/nuxeo/ecm/platform/routing/core/audit/es/RoutingAuditRequestFilter.java) on each Elasticsearch query addressed to the `audit_wf`. The `audit_wf` index does not really exist, it is somehow a view of the audit index.

The [RoutingAuditRequestFilter](https://github.com/nuxeo/nuxeo-platform-document-routing/blob/master/nuxeo-routing-core/src/main/java/org/nuxeo/ecm/platform/routing/core/audit/es/RoutingAuditRequestFilter.java) basically

1.  Adds filters on the query to:
    *   Restrict to **Routing** audit event only
    *   Restrict to the event related to workflow model name on which the current user&nbsp;has the **Data Visualization**&nbsp;permission.
2.  Redirects the reworked query to the audit index.

{{! Don't put anything here. }}

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [Workflow Audit Log]({{page page='workflow-audit-log'}})
- [Elasticsearch Setup]({{page page='elasticsearch-setup'}})
- [Elasticsearch Indexing Logic]({{page page='elasticsearch-indexing-logic'}})
- [Configuring the Elasticsearch Mapping]({{page page='configuring-the-elasticsearch-mapping'}})
- [Security Policy Service]({{page page='security-policy-service'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

&nbsp;

</div></div>
