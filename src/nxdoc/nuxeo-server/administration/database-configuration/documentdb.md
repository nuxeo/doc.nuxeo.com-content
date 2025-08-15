---
title: Amazon DocumentDB
labels:
    - database
    - documentdb
tree_item_index: 700

---
`DocumentDB` is compatible with `MongoDB`, therefore, it can be used by `Nuxeo` like a `MongoDB` backend,
but there are limitations.

{{#> callout type='warning'}}
Only DocumentDB "instance cluster" has been successfully tested with Nuxeo.
The DocumentDB  [elastic cluster](https://docs.aws.amazon.com/documentdb/latest/developerguide/docdb-using-elastic-clusters.html) behaves differently from MongoDB regarding index initialization. At the moment it cannot be used by Nuxeo.
{{/callout}}

## Limitations

- Fulltext search at repository level is not supported due to `DocumentDB` limitations. Use `Elasticsearch` or `OpenSearch` for fulltext search. This requires you to disable repository fulltext search. For additional information, see the [configuration]({{page space='nxdoc' page='documentdb#configuration'}}) section.
- Retryable writes are not supported. You must disable this. For additional information, see the [configuration]({{page space='nxdoc' page='documentdb#configuration'}}) section.
- The chosen `DocumentDB` instance type affects the number of open cursor at any given time.

Note: There are also other differences that should not affect Nuxeo. Please refer to `DocumentDB`:
- [Differences With MongoDB](https://docs.aws.amazon.com/documentdb/latest/developerguide/text-search.html#text-index-mongo-diff)
- [Functional Differences](https://docs.aws.amazon.com/documentdb/latest/developerguide/functional-differences.html#functional-differences.with-mongodb)

## Configuration

To use `DocumentDB`, you need the following options:

```properties
nuxeo.templates=<MY_TEMPLATES>,mongodb
nuxeo.vcs.fulltext.search.disabled=true
nuxeo.mongodb.server=<MONGO_URL>?retryWrites=false
```

For all other configuration information, please refer to the [MongoDB configuration page]({{page page='mongodb'}}).

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related topics'}}

- [Connecting Nuxeo to the Database]({{page page='connecting-nuxeo-to-the-database'}})
- [How to Estimate Volume Usage]({{page page='how-to-estimate-volume-usage'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
