---
title: 'HOWTO: Expose Elasticsearch Hint as Extension Point'
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
        topics: 'Elasticsearch'
labels:
    - addon
    - tutorial
    - howto
toc: true
tree_item_index: 100
---

## Concept

Elasticsearch hints can be exposed as extension points: it is possible to create a **custom hint** to use all the possible options offered by the Elasticsearch operators. It provides a way to not be restricted to the Nuxeo default exposed operators (listed in the [Nuxeo NXQL Hints page]({{page space='nxdoc' page='nxql'}}#elasticsearch-nxql-hints)).
The idea is to replace the hardcoded NXQL hint with a contribution system.

## Elasticsearch Hint Contribution

To contribute or override an existing Elasticsearch hint, you should provide a name for your Elasticsearch hint and an implementation of:
`org.nuxeo.elasticsearch.api.ESHintQueryBuilder`

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
public interface ESHintQueryBuilder {
 QueryBuilder make(EsHint hint, String fieldName, Object value);
}

public class FuzzyESHintQueryBuilder implements ESHintQueryBuilder {

 @Override
 public QueryBuilder make(EsHint hint, String fieldName, Object value) {
 return QueryBuilders.fuzzyQuery(fieldName, (String) value);
 }
}
```

The new way to expose the ES hints is by creating a contribution as below:

- We add new Extension Point to our exiting ESComponent: `org.nuxeo.elasticsearch.ElasticSearchComponent`
- The name of XP is elasticSearchHints
- At the end our "fuzzy" switch case, will be done like below :

```
<component name="org.nuxeo.elasticsearch.hint.contrib">
  <require>org.nuxeo.elasticsearch.ElasticSearchComponent</require>

  <extension point="elasticSearchHints" target="org.nuxeo.elasticsearch.ElasticSearchComponent">
    <hint name="match" class="org.nuxeo.elasticsearch.hint.MatchESHintQueryBuilder" />
    <hint name="match_phrase" class="org.nuxeo.elasticsearch.hint.MatchPhraseESHintQueryBuilder" />
    <hint name="match_phrase_prefix" class="org.nuxeo.elasticsearch.hint.MatchPhrasePrefixESHintQueryBuilder" />
    <hint name="multi_match" class="org.nuxeo.elasticsearch.hint.MultiMatchESHintQueryBuilder" />
    <hint name="regex" class="org.nuxeo.elasticsearch.hint.RegexESHintQueryBuilder" />
    <hint name="fuzzy" class="org.nuxeo.elasticsearch.hint.FuzzyESHintQueryBuilder" />
  </extension>
</component>
```

The way to get the ESHint Query is done using: `org.nuxeo.elasticsearch.api.ElasticSearchAdmin#getHintByOperator`.

{{#> callout type='info'}}
The Elasticsearch hint class is passed as a parameter, because in some cases we need the analyzer and/or the index on which we want our query.
{{/callout}}

### Nested Search

Nuxeo Platform support nested queries, but they cannot be used by default in NXQL queries, and in search forms. A custom Elasticsearch hint has to be defined to answer this need so that it is possible to build.
