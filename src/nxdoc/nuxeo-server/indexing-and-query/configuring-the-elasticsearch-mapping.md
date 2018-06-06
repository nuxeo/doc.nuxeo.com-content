---
title: Configuring the Elasticsearch Mapping
review:
    comment: ''
    date: '2017-12-13'
    status: ok
labels:
    - lts2016-ok
    - elasticsearch
    - full-text
    - elasticsearch-component
    - bdelbosc
    - university
    - excerpt
    - multiexcerpt
    - lts2017-ok
toc: true
confluence:
    ajs-parent-page-id: '4687860'
    ajs-parent-page-title: Indexing and Query
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Configuring+the+Elasticsearch+Mapping
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Configuring+the+Elasticsearch+Mapping'
    page_id: '20517467'
    shortlink: WxI5AQ
    shortlink_source: 'https://doc.nuxeo.com/x/WxI5AQ'
    source_link: /display/NXDOC/Configuring+the+Elasticsearch+Mapping
tree_item_index: 500
history:
    -
        author: Manon Lumeau
        date: '2016-07-19 09:13'
        message: ''
        version: '31'
    -
        author: Benoit Delbosc
        date: '2016-07-18 12:37'
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
        message: "don't disable default index for fulltext field unless you know how the field is used"
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

{{#> callout type='info' heading='Nuxeo University'}}
Watch the related courses on Nuxeo University
- [Configuring Searches in Nuxeo Studio Modeler & Designer](https://university.nuxeo.com/learn/public/course/view/elearning/134/configuring-searches-in-nuxeo-studio-modeler-designer).
![]({{file name='university-search.png' page='nxdoc/university'}} ?w=450,border=true)
{{/callout}}

{{#> callout type='warning' }}

This documentation page apply only to Nuxeo Platform version greater or equal to **9.3** with Elasticsearch version greater or equal to **5.6**.

{{/callout}}

Nuxeo comes with a default mapping that can work with custom fields of your schemas, but in a limited way. To leverage the search capabilities of Elasticsearch you need to define your own mapping, for instance in the following cases:

*   use of a non English or a custom analyzer
*   use a specific NXQL operators on a custom field: `LIKE`, `ILIKE`, `ecm:fulltext.custom`, `STARTSWITH`
*   exclude field from the full-text search

To do this you need to create your own [custom template that redefines the Elasticsearch mapping]({{page page='elasticsearch-setup'}}#changingelasticsearchmapping).
This way the mapping reference stay on the Nuxeo configuration side and you should not update the mapping directly on the Elasticsearch side.

Nuxeo updates the mapping and setting on Elasticsearch only when:
*  The Elasticsearch index does not exist
*  A full repository re-indexing is performed

## Customizing the Language

The Nuxeo code and mapping use a full-text analyzer named `fulltext`, this analyzer is defined in the settings file as an English analyzer.

You can reconfigure the `fulltext` analyzer to match your language and requirements. Note that a `fulltext_fr` is provided as a French analyzer example.


## Include/Excluding a Field from the Full-Text Search

Since Nuxeo 9.3 and the switch to Elasticsearch 5.6, there is no more default `_all` field. This field is going to be deprecated in Elasticsearch 6.0.

The default fulltext field now relies on a custom field named `all_field`.

The default mapping contains a dynamic template that copies any text fields into this `all_field`.

This means that:

* if you don't set an explicit mapping for a text field it will be part of the `all_field`.

* if you set an explicit mapping for a text field you need to choose:

  - To include the field to the default fulltext using the `copy_to` option:
  ```
  "my:field" : {
    "type" : "keyword",
    "copy_to" : "all_field"
  }
  ```
  - To not include the field to the default fulltext by omitting the copy option:
  ```
   "my:unsearchable_field" : {
      "type" : "keyword"
   }
  ```

## Making LIKE Work

The `LIKE` query can be translated to `match_phrase_prefix` for right truncation, this requires a text field defined as:
```
"my:field" : {
  "type" : "text",
  "copy_to" : "all_field"
}
```

If the field is also used for sorting results, it needs to have a special `fielddata`  option:
```
"my:field" : {
  "type" : "text",
  "copy_to" : "all_field",
  "fielddata" : true
}

```

## Making ILIKE Work - Case Insensitive Search

To do case insensitive search using an `ILIKE` operation you need to declare your field as a multi field with a `lowercase` field like this:

```
"my:field" : {
  "type" : "keyword",
  "copy_to" : "all_field",
  "fields" : {
    "lowercase" : {
      "type": "text",
      "analyzer" : "lowercase_analyzer"
    }
  }
}
```

## Making STARTSWITH Work with a Custom Field

To use a `STARTSWITH` operator on a field with a path pattern like a hierarchical vocabulary. Turn your field into a multi field with a `children` subfield:

```
"my:field" : {
  "type" : "keyword",
  "fields" : {
    "children" : {
      "type" : "text",
      "search_analyzer" : "keyword",
      "analyzer" : "path_analyzer"
    }
  }
}
```

## Adding a New Full-Text Field

To use the full-text search syntax on a custom field you need to create a multi field with a `fulltext` index like this:

```
"my:text" : {
  "type" : "keyword",
  "copy_to" : "all_field",
  "fields" : {
      "fulltext" : {
      "type": "text",
      "analyzer" : "fulltext"
    }
  }
}

```

## Use a NGram Index for Efficient Left Truncature Search

When you need to search with left truncature (or left and right truncatures) the NXQL syntax to use is `LIKE '%foo%'`. This kind of query use an Elasticsearch wildcard search but the cost of the left truncature is high because the term index can not be used efficiently. Using an [NGram index](https://www.elastic.co/guide/en/elasticsearch/reference/current/analysis-ngram-tokenizer.html) is a good alternative for such a case.

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
         "type" : "text",
         "fields" : {
           "fulltext" : {
             "type": "text",
             "analyzer" : "fulltext",
             "boost": 2
           },
           "ngram": {
             "type": "text",
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


* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">

{{! Please update the label in the Content by Label macro below. }}

{{#> panel heading='Other Elasticsearch Documentation'}}

- [Elasticsearch Indexing Logic]({{page page='elasticsearch-indexing-logic'}})
- [Elasticsearch Setup]({{page page='elasticsearch-setup'}})
- [How to Make a Page Provider or Content View Query Elasticsearch Index]({{page page='how-to-make-a-page-provider-or-content-view-query-elasticsearch-index'}})

{{/panel}}</div><div class="column medium-6">

{{! Please update the label and target spaces in the Content by Label macro below. }}

{{#> panel heading='Other Related Documentation '}}

- [Full-Text Queries]({{page page='full-text-queries'}})
- [Indexing and Query]({{page page='indexing-and-query'}})
- [Indexing and Querying How-To Index]({{page page='indexing-and-querying-how-to-index'}})

{{/panel}}</div></div>
