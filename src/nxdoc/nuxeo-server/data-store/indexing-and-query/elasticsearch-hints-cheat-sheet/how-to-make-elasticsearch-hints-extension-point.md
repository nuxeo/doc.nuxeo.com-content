---
title: 'HOWTO: Expose OpenSearch/Elasticsearch Hint as Extension Point'
description: 'Learn how to contribute or override an existing Elasticsearch Hint'
review:
    comment: ''
    date: '2019-12-09'
    status: ok
details:
    howto:
        excerpt: 'Learn how to expose Elasticsearch hints as extention points.'
        level: Advanced
        tool: Code
        topics: 'ElasticsearchConfiguration'
labels:
    - addon
    - tutorial
    - howto
toc: true
tree_item_index: 100
---

## Concept

NXQL hints can be exposed as extension points: it is possible to create a **custom hint** to use all the possible options offered by the Elasticsearch operators. It provides a way to not be restricted to the Nuxeo default exposed operators (listed in the [Nuxeo NXQL Hints page]({{page space='nxdoc' page='nxql'}}#elasticsearch-nxql-hints)).
The idea is to replace the hardcoded NXQL hint with a contribution system.

## OpenSearch Hint Contribution

To contribute or override an existing OpenSearch/Elasticsearch hint, you should provide a name for your hint and an implementation of:
`org.nuxeo.ecm.core.search.client.opensearch1.OpenSearchHintQueryBuilder` (or `org.nuxeo.ecm.core.search.client.opensearch2.OpenSearchHintQueryBuilder` depending on your OpenSearch version)

Each hint would have **a name and a class** that implement the same Java interface with one method that takes the three parameters (field, analyzer and value) and returns the resulting ES query object. This doesn't impact the parsing process of a query, but the connection between the ES hint (NXQL operator) and the ES query.

## Use Cases

### Fuzzy Search

The [Elasticsearch fuzzy search operator](https://www.elastic.co/guide/en/elasticsearch/reference/6.5/query-dsl-fuzzy-query.html) contains a list of [parameters](https://www.elastic.co/guide/en/elasticsearch/reference/6.5/query-dsl-fuzzy-query.html#_parameters_7). By default, Nuxeo doesn't expose them directly in NXQL queries, only the default ones are taken into account. For example, it only works on a single term (not analyzed), which is a limited use case; a match operator with fuzziness will be more interesting.

It can be solved by creating a custom hint, called, for example, **myFuzzy** which adapts the parameters to our needs. Then, it can be used in any NXQL queries like:

```
SELECT * FROM Document WHERE /*+ES: OPERATOR(myFuzzy) */ dc:title = 'foo'
```

"fuzzy" is our case and a class which must implement the interface below:  

```
public interface OpenSearchHintQueryBuilder {
  QueryBuilder make(EsHint hint, String fieldName, Object value);
}

public class FuzzyOpenSearchHintQueryBuilder implements OpenSearchHintQueryBuilder {

  @Override
  public QueryBuilder make(EsHint hint, String fieldName, Object value) {
    return QueryBuilders.fuzzyQuery(fieldName, (String) value);
  }
}
```

The way to expose the hints is by creating a contribution as below:

- We use the Extension Point : `org.nuxeo.ecm.core.search.client.opensearch1` if you are using the `nuxeo-search-client-opensearch1` package, if you are on Opensearch 2.x you need to use the `org.nuxeo.ecm.core.search.client.opensearch2` enpoint, and if you are on Elasticsearch 9.x you need to use `org.nuxeo.ecm.core.search.client.elasticsearch9` endpoint.
- The name of XP is `hint`
- Our "fuzzy" switch case, will be done like below :

```
<component name="org.nuxeo.ecm.core.search.client.opensearch1.hint.contrib" version="1.0">
  <extension target="org.nuxeo.ecm.core.search.client.opensearch1" point="hint">
...
    <hint name="fuzzy" class="org.nuxeo.ecm.core.search.client.opensearch1.hint.FuzzyOpenSearchHintQueryBuilder" />
  </extension>
</component>
```

{{#> callout type='info'}}
The hint class is passed as a parameter, because in some cases we need the analyzer and/or the index on which we want our query.
{{/callout}}

### Nested Search

Nuxeo Platform support nested queries, but they cannot be used by default in NXQL queries, and in search forms. A custom Elasticsearch hint has to be defined to answer this need so that it is possible to build.
