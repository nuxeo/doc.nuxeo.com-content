---
title: Full-Text Queries
labels:
    - search
    - full-text
    - nxql
toc: true
confluence:
    ajs-parent-page-id: '17334424'
    ajs-parent-page-title: Querying and Searching
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Full-Text+Queries
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/Full-Text+Queries'
    page_id: '17334413'
    shortlink: jYAIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/jYAIAQ'
    source_link: /display/NXDOC58/Full-Text+Queries
history:
    - 
        author: Solen Guitter
        date: '2016-09-01 09:36'
        message: ''
        version: '14'
    - 
        author: Solen Guitter
        date: '2015-08-28 10:06'
        message: ''
        version: '13'
    - 
        author: Solen Guitter
        date: '2015-08-28 10:06'
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
<div class="row"><div class="column medium-8">{{! excerpt}}

Nuxeo documents can be searched using fulltext queries; the standard way to do so is to use the top-right "quick search" box in Nuxeo DM. Search queries are expressed in a Nuxeo-defined syntax, described below.

{{! /excerpt}}</div><div class="column medium-4">{{#> panel heading='In this section'}}

{{/panel}}</div></div>

## Nuxeo Fulltext Query Syntax

A fulltext query is a sequence of space-separated words, in addition:

*   Words are implicitly `AND`-ed together.
*   A word can start with `-` to signify negation (the word must not be present).
*   A word can end with `*` to signify prefix search (the word must start with this prefix).
*   You can use `OR` between words (it has a lower precedence than the implicit `AND`).
*   You can enclose several words in double quotes `"` for a phrase search (the words must exactly follow each other).

Examples:

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

Important notes:

1.  A query term (sequence of `AND`-ed words without an `OR`) containing only negations will not match anything.
2.  Depending on the backend database and its configuration, different word stemming strategies may be used, which means that `universes` and `universal` (for instance) may or may not be considered the same word. Please check your [database configuration]({{page space='kb' page='administration-database-related'}}) for more on this, and the "analyzer" parameter used in the Nuxeo configuration for your database.
3.  Phrase search using a PostgreSQL backend database is supported only since Nuxeo 5.5 and cannot use word stemming (_i.e._, a query of `"hello worlds"` will not match a document containing just `hello world` without a final `s`). This is due to way this feature is implemented, which is detailed at [NXP-6720](https://jira.nuxeo.com/browse/NXP-6720).

Also of interest:

1.  In Nuxeo 5.3, searches using an `OR` and phrase searches are not supported, these features are only available since Nuxeo 5.4.
2.  Prefix search is supported in all databases only since Nuxeo 5.5.
3.  Ending a word with `%` instead of `*` for prefix search is also supported for historical reasons.

## Using Fulltext Queries in NXQL

In NXQL the fulltext query is part of a WHERE clause that can contain other matches on metadata. Inside the WHERE clause, a fulltext query for "something" (as described in the previous section) can be expressed in several ways:

*   `ecm:fulltext = 'something'`
*   `ecm:fulltext_someindex = 'something'` if an index called "someindex" is configured in the [VCS configuration]({{page space='admindoc58' page='vcs-configuration'}})
*   `ecm:fulltext.somefield = 'something'` to search a field called "somefield", using fulltext if the VCS configuration contains a single index for it, or if not using fallback to a standard SQL ILIKE query: `somefield ILIKE '%something%'` (ILIKE is a case-independent LIKE). Note that this will have a serious performance impact if no fulltext is used, and is provided only to help migrations from earlier versions.
*   `ecm:fulltext LIKE 'something'` is deprecated but identical to `ecm:fulltext = 'something'`.

&nbsp;