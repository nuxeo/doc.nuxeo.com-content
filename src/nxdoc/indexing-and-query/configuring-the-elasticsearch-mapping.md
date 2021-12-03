---
title: Configuring the Elasticsearch Mapping
review:
    comment: ''
    date: ''
    status: ok
labels:
    - elasticsearch
    - lts2015-ok
    - elasticsearch-component
    - full-text
    - university
toc: true
confluence:
    ajs-parent-page-id: '28475656'
    ajs-parent-page-title: Indexing and Query
    ajs-space-key: NXDOC710
    ajs-space-name: Nuxeo Platform Developer Documentation — LTS 2015
    canonical: Configuring+the+Elasticsearch+Mapping
    canonical_source: >-
        https://doc.nuxeo.com/display/NXDOC710/Configuring+the+Elasticsearch+Mapping
    page_id: '28475593'
    shortlink: yYCyAQ
    shortlink_source: 'https://doc.nuxeo.com/x/yYCyAQ'
    source_link: /display/NXDOC710/Configuring+the+Elasticsearch+Mapping
tree_item_index: 500
history:
    -
        author: Manon Lumeau
        date: '2016-10-04 16:00'
        message: ''
        version: '34'
    -
        author: Manon Lumeau
        date: '2016-07-19 09:16'
        message: ''
        version: '33'
    -
        author: Benoit Delbosc
        date: '2016-07-18 12:36'
        message: ''
        version: '32'
    -
        author: Benoit Delbosc
        date: '2016-07-18 12:36'
        message: ''
        version: '31'
    -
        author: Benoit Delbosc
        date: '2016-07-18 12:35'
        message: Add a note about ngram search
        version: '30'
    -
        author: Solen Guitter
        date: '2015-12-22 14:26'
        message: ''
        version: '29'
    -
        author: Bertrand Chauvin
        date: '2015-12-17 14:18'
        message: Fix typo
        version: '28'
    -
        author: Bertrand Chauvin
        date: '2015-12-17 14:13'
        message: Added video
        version: '27'
    -
        author: Bertrand Chauvin
        date: '2015-12-15 13:04'
        message: Update explanations
        version: '26'
    -
        author: Manon Lumeau
        date: '2015-12-14 10:33'
        message: ''
        version: '25'
    -
        author: Bertrand Chauvin
        date: '2015-12-11 16:16'
        message: fix anchor
        version: '24'
    -
        author: Bertrand Chauvin
        date: '2015-12-11 16:11'
        message: ''
        version: '23'
    -
        author: Bertrand Chauvin
        date: '2015-12-11 16:05'
        message: ''
        version: '22'
    -
        author: Bertrand Chauvin
        date: '2015-12-11 16:04'
        message: Added common operator mapping conf
        version: '21'
    -
        author: Benoit Delbosc
        date: '2015-12-08 11:30'
        message: ''
        version: '20'
    -
        author: Bertrand Chauvin
        date: '2015-12-08 08:04'
        message: Typo and anchor
        version: '19'
    -
        author: Benoit Delbosc
        date: '2015-10-30 14:31'
        message: Add new mapping for STARTSWITH needed since 7.10
        version: '18'
    -
        author: Bertrand Chauvin
        date: '2015-06-26 12:48'
        message: Removed reference to 6.0
        version: '17'
    -
        author: Benoit Delbosc
        date: '2015-03-05 16:30'
        message: >-
            don't disable default index for fulltext field unless you know how
            the field is used
        version: '16'
    -
        author: Solen Guitter
        date: '2014-12-04 15:33'
        message: fix brocken link
        version: '15'
    -
        author: Solen Guitter
        date: '2014-12-01 16:31'
        message: ''
        version: '14'
    -
        author: Benoit Delbosc
        date: '2014-11-25 14:34'
        message: ''
        version: '13'
    -
        author: Benoit Delbosc
        date: '2014-11-25 14:33'
        message: ''
        version: '12'
    -
        author: Benoit Delbosc
        date: '2014-11-10 17:01'
        message: ''
        version: '11'
    -
        author: Michaël Vachette
        date: '2014-11-10 11:25'
        message: ''
        version: '10'
    -
        author: Michaël Vachette
        date: '2014-11-10 11:19'
        message: ''
        version: '9'
    -
        author: Michaël Vachette
        date: '2014-11-05 11:01'
        message: ''
        version: '8'
    -
        author: Michaël Vachette
        date: '2014-11-05 10:56'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2014-11-03 09:23'
        message: Formatting
        version: '6'
    -
        author: Manon Lumeau
        date: '2014-11-02 22:57'
        message: ''
        version: '5'
    -
        author: Alain Escaffre
        date: '2014-11-02 22:39'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2014-10-31 09:55'
        message: ''
        version: '3'
    -
        author: Alain Escaffre
        date: '2014-10-30 17:39'
        message: ''
        version: '2'
    -
        author: Alain Escaffre
        date: '2014-10-30 17:12'
        message: ''
        version: '1'

---
{{! excerpt}}

This documentation page talks about the many aspects you can tune for improving the search experience for your users when it comes to search the document repository index.

{{! /excerpt}}

Here are some examples of common changes of the Elasticsearch mapping.

All examples below should be done in a [custom template that redefines the Elasticsearch mapping]({{page space='admindoc710' page='elasticsearch-setup#changingelasticsearchmapping'}}). This way the mapping reference stay on the Nuxeo configuration side. If you update the mapping directly on the Elasticsearch side your changes will be lost when Nuxeo is performing a full repository reindexing.

## Customizing the Language

The Nuxeo code uses a full-text analyzer named&nbsp;`fulltext`. This is an alias that points to the&nbsp;`en_fulltext`&nbsp;analyzer by default.

To change it to the French analyzer for instance, move the following line into the&nbsp;`fr_fulltext`:

```
 "alias" : "fulltext"
```

{{#> callout type='warning' }}

If you dump the mapping from the Elasticsearch HTTP API (or using an Elasticsearch plug-in like head or kopf), you will see that alias are replaced by the target.

{{/callout}}

## Making ILIKE Work - Case Insensitive Search

To do case insensitive search using an&nbsp;`ILIKE`&nbsp;operation you need to declare your field as a `multi_field` with a `lowercase` index like this:

```
"my:field" : {
  "type" : "multi_field",
  "fields" : {
    "my:field" : {
      "include_in_all" : "true",
      "type" : "string"
    },
    "lowercase" : {
      "type": "string",
      "analyzer" : "lowercase_analyzer"
    }
  }
}
```

&nbsp;

## Making STARTSWITH Work with a Custom Field

To use a `STARTSWITH` operator on a field with a path pattern like a hierarchical vocabulary. Turn your field into a `multi_field` and a `children` sub field:

&nbsp;

```
"my:field" : {
  "type" : "multi_field",
  "fields" : {
    "my:field" : {
      "index" : "not_analyzed",
      "type" : "string"
    },
    "children" : {
      "search_analyzer" : "keyword",
      "index_analyzer" : "path_analyzer",
      "type" : "string"
    }
  }
}
```

&nbsp;

## Adding a New Full-Text Field

To use the full-text search syntax on a custom field you need to create a `multi_field` with a `fulltext` index like this:

```
"my:text" : {
  "type" : "multi_field",
  "fields" : {
    "my:text" : {
      "include_in_all" : "true",
      "type" : "string"
    },
    "fulltext" : {
      "type": "string",
      "analyzer" : "fulltext"
    }
  }
}

```

{{#> callout type='tip' }}

Note that if you:

*   don't perform non fulltext search on this field
*   don't use this field with a `IS NULL` or `IS NOT NULL`operation
*   don't sort on this field

Then you can disable the default index on the field by adding after the second `"my:text" : {`

&nbsp; `"index" : "no",`

{{/callout}}

## Excluding a Field from the Full-Text Search

Suppose you want to exclude&nbsp;`my:secret`&nbsp;field from the&nbsp;`ecm:fulltext`&nbsp;search:

```
 "my:secret" : {
    "type" : "string",
    "include_in_all" : false
 }
```

## Use a NGram Index for Efficient Left Truncature Search

When you need to search with left truncature (or left and right truncatures) the NXQL syntax to use is&nbsp;`LIKE '%foo%'`. This kind of query use an Elasticsearch wildcard search but the cost of the left truncature is high because the term index can not be used efficiently. Using an [NGram index](https://www.elastic.co/guide/en/elasticsearch/reference/current/analysis-ngram-tokenizer.html) is a good alternative for such a case.

First you need to define an `nGram` analyzer in your settings:

```
   "analysis" : {
...
      "tokenizer" : {
...
         "ngram_tokenizer": {
           "type": "nGram",
           "min_gram": 3,
           "max_gram": 12
          },
...
      "analyzer" : {
...
        "ngram_analyzer": {
          "type": "custom",
          "filter": [
            "lowercase"
          ],
          "tokenizer": "ngram_tokenizer"
        },
...

```

Then use it in the mapping:

```
   "properties" : {
...
      "dc:title" : {
         "type" : "multi_field",
         "fields" : {
           "dc:title" : {
             "index" : "not_analyzed",
             "type" : "string"
           },
           "fulltext" : {
             "boost": 2,
             "type": "string",
             "analyzer" : "fulltext"
           },
           "ngram": {
             "type": "string",
             "analyzer": "ngram_analyzer"
           }
         }
      },
```

Now you can do an efficient version of:

```
SELECT * FROM Document WHERE dc:title ILIKE '%Foo%'
```

Using:

```
SELECT * FROM Document WHERE /*+ES: INDEX(dc:title.ngram) ANALYZER(lowercase_analyzer) OPERATOR(match) */ dc:title = 'Foo'"));
```

&nbsp;

## Index the Main Attachment Content for Use with the Common Operator

{{! multiexcerpt name='common-operator-main-attachment'}}{{> wistia_video id='nvdt4nzdq9'}}

Extract from the course [What's New in Nuxeo Platform LTS 2015?](https://university.hyland.com/courses/e4071) in [Hyland University](https://university.hyland.com)

Suppose you want to be able to search using the [common operator](https://www.elastic.co/guide/en/elasticsearch/reference/1.5/query-dsl-common-terms-query.html) on your documents' main attachment content. This Elasticsearch operator is interesting for two reasons:

*   The common operator can be seen as an alternative to the full-text search.
    One notable difference is that it allows to search on terms that would have been removed by the full-text analyzer. If I absolutely want to search for the &ldquo;Not Beyond Space Travel Agencies&rdquo;, I&rsquo;d like to be able to search for the &ldquo;Not&rdquo; keyword.
*   The common operator is smart. It divides query terms between those which are rare into the index, and those which are commonly found into it.
    Rare terms will get a boost, common terms will be lowered. Let's say you have lots of contracts in your repository, and you search for "confidentiality clause". If both query terms were considered of same importance, most relevant results might be drowned. The common operator will understand that the term "confidentiality" is rare and boost it, while lowering the importance of the "clause" term, that is common. This will help you getting the most relevant results first.

To implement this use case:

*   In the `analyzer` configuration, add an analyzer that will be used to index the main attachment's content:

```js
"my_attachment_analyzer" : {
  "type" : "custom",
    "filter" : [
      "word_delimiter_filter",
      "lowercase",
      "asciifolding"
    ],
  "tokenizer" : "standard"
}
```

&nbsp;

*   In the `properties` configuration, update the `ecm:binarytext` field mapping configuration to the following:

```js
"ecm:binarytext" : {
  "type" : "multi_field",
  "fields" : {
    "ecm:binarytext" : {
      "type" : "string",
      "index" : "no",
      "include_in_all" : true
    },
    "common" : {
      "type": "string",
      "analyzer" : "my_attachment_analyzer",
      "include_in_all" : false
    }
  }
}
```

You can now configure hints in Nuxeo Studio using the common operator when querying on the `ecm:binarytext.common` index.

{{! /multiexcerpt}}

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">

{{! Please update the label in the Content by Label macro below. }}

{{#> panel heading='Other Elasticsearch Documentation'}}

*   [Elasticsearch Indexing Logic]({{page page='elasticsearch-indexing-logic'}})
*   [Elasticsearch Setup]({{page space='admindoc710' page='elasticsearch-setup'}})
*   [How to Make a Page Provider or Content View Query Elasticsearch Index]({{page page='how-to-make-a-page-provider-or-content-view-query-elasticsearch-index'}})

{{/panel}}</div><div class="column medium-6">

{{! Please update the label and target spaces in the Content by Label macro below. }}

{{#> panel heading='Other Related Documentation '}}

*   [Full-Text Queries]({{page page='full-text-queries'}})
*   [Indexing and Query]({{page page='indexing-and-query'}})
*   [Indexing and Querying How-To Index]({{page page='indexing-and-querying-how-to-index'}})

{{/panel}}</div></div>
