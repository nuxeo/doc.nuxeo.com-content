---
title: Full-Text Queries
review:
    comment: ''
    date: '2017-12-14'
    status: ok
labels:
    - content-review-lts2016
    - nxql
    - full-text
    - query-pageprovider-component
    - kleturc
    - lts2017-ok
toc: true
confluence:
    ajs-parent-page-id: '4687860'
    ajs-parent-page-title: Indexing and Query
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Full-Text+Queries
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Full-Text+Queries'
    page_id: '3868034'
    shortlink: ggU7
    shortlink_source: 'https://doc.nuxeo.com/x/ggU7'
    source_link: /display/NXDOC/Full-Text+Queries
tree_item_index: 200
history:
    -
        author: Solen Guitter
        date: '2016-09-01 09:39'
        message: ''
        version: '17'
    -
        author: Manon Lumeau
        date: '2016-06-09 13:39'
        message: ''
        version: '16'
    -
        author: Florent Guillaume
        date: '2016-04-05 13:17'
        message: No fulltext prefix matching on MongoDB
        version: '15'
    -
        author: Solen Guitter
        date: '2014-11-03 09:11'
        message: ''
        version: '14'
    -
        author: Alain Escaffre
        date: '2014-11-02 18:59'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2014-07-24 16:45'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2013-09-04 17:52'
        message: ''
        version: '11'
    -
        author: Florent Guillaume
        date: '2011-12-13 18:47'
        message: Migrated to Confluence 4.0
        version: '10'
    -
        author: Florent Guillaume
        date: '2011-12-13 18:47'
        message: typos
        version: '9'
    -
        author: Florent Guillaume
        date: '2011-12-13 18:46'
        message: ''
        version: '8'
    -
        author: Florent Guillaume
        date: '2011-12-13 16:14'
        message: ''
        version: '7'
    -
        author: Florent Guillaume
        date: '2011-12-13 16:08'
        message: ''
        version: '6'
    -
        author: Florent Guillaume
        date: '2011-12-13 16:05'
        message: Added prefix search and details on PostgreSQL phrase search.
        version: '5'
    -
        author: Florent Guillaume
        date: '2010-12-28 14:38'
        message: ''
        version: '4'
    -
        author: Florent Guillaume
        date: '2010-10-24 23:02'
        message: ''
        version: '3'
    -
        author: Florent Guillaume
        date: '2010-10-15 15:57'
        message: Adding doc on OR
        version: '2'
    -
        author: Florent Guillaume
        date: '2010-09-28 11:30'
        message: ''
        version: '1'

---
{{! excerpt}}

Nuxeo documents can be searched using full-text queries; the standard way to do so is to use the top-right "quick search" box in the Nuxeo Platform. Search queries are expressed in a Nuxeo-defined syntax, described below.

{{! /excerpt}}

## Nuxeo Full-Text Query Syntax

A full-text query is a sequence of space-separated words. In addition:

*   Words are implicitly `AND`-ed together.
*   A word can start with `-` to signify negation (the word must not be present).
*   A word can end with `*` to signify prefix search (the word must start with this prefix).
    Ending a word with `%` instead of `*` for prefix search is also supported for historical reasons
*   You can use `OR` between words (it has a lower precedence than the implicit `AND`).
*   You can enclose several words in double quotes `"` for a phrase search (the words must exactly follow each other).

### Examples

Documents containing both `hello` and `world` and which do not contain `smurf`:

```
hello world -smurf

```

Documents containing `hello` and a word starting with `worl`:

```
hello worl*

```

Documents containing both `hello` and `world`, or documents containing `smurf` but not containing `black`:

```
hello world OR smurf -black

```

Documents containing `hello` followed by `world` and also containing `smurf`:

```
"hello world" smurf

```

### Important Notes and Limitations

The following limitations apply:

*   A query term (sequence of `AND`-ed words without an `OR`) containing only negations will not match anything.
*   Depending on the back-end database and its configuration, different word stemming strategies may be used, which means that `universes` and `universal` (for instance) may or may not be considered the same word. Check your [database configuration]({{page page='database-configuration'}}) for more on this, and the [ "analyzer" parameter used in the Nuxeo configuration ]({{page page='repository-configuration#vcs-full-text-configuration'}}) for your database.
*   Phrase search using a PostgreSQL back-end database is supported and cannot use word stemming (i.e. a query of `"hello worlds"` will not match a document containing just `hello world` without a final `s`). This is due to way this feature is implemented, which is detailed at [NXP-6720](https://jira.nuxeo.com/browse/NXP-6720).
*   MongoDB does not support prefix matching, so a query for `hel*` will **not** match `hello`.

## Using Full-Text Queries in NXQL

In NXQL the full-text query is part of a WHERE clause that can contain other matches on metadata. Inside the WHERE clause, a full-text query for "something" (as described in the previous section) can be expressed in several ways:

*   `ecm:fulltext = 'something'`
*   `ecm:fulltext_someindex = 'something'` if an index called "someindex" is configured in the [Repository configuration]({{page page='repository-configuration'}}#full-text)
*   `ecm:fulltext.somefield = 'something'` to search a field called "somefield", using full-text if the VCS configuration contains a single index for it, or if not using fallback to a standard SQL ILIKE query: `somefield ILIKE '%something%'` (ILIKE is a case-independent LIKE). Note that this will have a serious performance impact if no full-text is used, and is provided only to help migrations from earlier versions.
*   `ecm:fulltext LIKE 'something'` is deprecated but identical to `ecm:fulltext = 'something'`.

## Elasticsearch Extension

With an Elasticsearch page provider, the full-text syntax used is the Elasticsearch simple query string syntax. It is recommended to use the prefix `es:` when making such use of the syntax, as in the future it might be mandatory. Further more, any full-text request made with an `es:` prefix will be doing an "OR" between each word (vs AND otherwise). You can refer to the [Elasticsearch documentation](http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-simple-query-string-query.html#_simple_query_string_syntax) page for more details on the syntax that can be used.

* * *

&nbsp;

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related topics'}}
- [Repository configuration]({{page page='repository-configuration'}})
- [DBS]({{page page='dbs'}})
- [VCS]({{page page='vcs'}})
- [Monitoring Slow NXQL Queries]({{page page='monitoring-slow-nxql-queries'}})
- [Elasticsearch Indexing Logic]({{page page='elasticsearch-indexing-logic'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
