---
title: Elasticsearch Hints Cheat Sheet
review:
    comment: ''
    date: '2017-12-14'
    status: ok
labels:
    - content-review-lts2016
    - elasticsearch
    - elasticsearch-component
    - bdelbosc
    - excerpt
    - lts2017-ok
    - university
toc: true
confluence:
    ajs-parent-page-id: '4687860'
    ajs-parent-page-title: Indexing and Query
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Elasticsearch+Hints+Cheat+Sheet
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Elasticsearch+Hints+Cheat+Sheet'
    page_id: '26313934'
    shortlink: zoSRAQ
    shortlink_source: 'https://doc.nuxeo.com/x/zoSRAQ'
    source_link: /display/NXDOC/Elasticsearch+Hints+Cheat+Sheet
tree_item_index: 900
history:
    -
        author: Bertrand Chauvin
        date: '2015-12-16 10:07'
        message: ormattin
        version: '10'
    -
        author: Bertrand Chauvin
        date: '2015-12-16 10:06'
        message: Add note about common operator
        version: '9'
    -
        author: Bertrand Chauvin
        date: '2015-12-15 10:33'
        message: Improve explanations
        version: '8'
    -
        author: Bertrand Chauvin
        date: '2015-12-14 17:10'
        message: fix analyzer name
        version: '7'
    -
        author: Manon Lumeau
        date: '2015-12-14 10:32'
        message: ''
        version: '6'
    -
        author: Bertrand Chauvin
        date: '2015-12-11 16:16'
        message: fix anchor
        version: '5'
    -
        author: Bertrand Chauvin
        date: '2015-12-11 16:14'
        message: Added common operator on main attachment config
        version: '4'
    -
        author: Michaël Vachette
        date: '2015-08-04 12:28'
        message: ''
        version: '3'
    -
        author: Michaël Vachette
        date: '2015-08-04 11:49'
        message: ''
        version: '2'
    -
        author: Alain Escaffre
        date: '2015-08-04 10:08'
        message: ''
        version: '1'

---
{{! excerpt}}

This page lists interesting use cases of Elasticsearch Hints.

{{! /excerpt}}

&nbsp;

## Fuzzy Search on Full Text Index

### Configuration

*   Drop any string field on your content view
*   Use the following values for the ES hints configuration:
    *   Index: `all_field`
    *   Analyzer: `fulltext`
    *   Operator: `fuzzy`

### Test case

*   Create a new document that contains a text file which itself contains the string "Nuxeo rocks"
*   Search for "Nuxo", the document created previously appears in the results

## Using the Common Operator on the Main Attachment Content

Extract from the course [What's New in Nuxeo Platform LTS 2015?](https://university.nuxeo.com/learn/public/course/view/elearning/55/WhatsnewinNuxeoPlatformLTS2015%3F) in [Nuxeo University](https://university.nuxeo.com)

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
*   In the `properties` configuration, update the `ecm:binarytext` field mapping configuration to the following:

```js
"ecm:binarytext" : {
  "type" : "text",
  "analyzer": "fulltext",
  "copy_to": "all_field",
  "fields":
    "common" : {
      "type": "text",
      "analyzer" : "my_attachment_analyzer",
      "include_in_all" : false
    }
  }
}
```

You can now configure hints in Nuxeo Studio using the common operator when querying on the `ecm:binarytext.common` index.



### Nuxeo Studio Configuration

*   Drop any string field in the search layout of your content view
*   Use the following values for the ES hints configuration:
    *   Index: `ecm:binarytext.common`
    *   Analyzer: `my_attachment_analyzer`
    *   Operator: `common`

### Test case

*   Create a new document that contains an attachment which itself contains the string "Not Beyond Space Travel Agency"
*   Search for "Not", the document created previously appears in the results

Please note this is a basic test case. The common operator is best used on very large indexes.

{{! Don't put anything here. }}

* * *
