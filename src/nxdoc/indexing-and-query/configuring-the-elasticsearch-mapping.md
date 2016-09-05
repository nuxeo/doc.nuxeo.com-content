---
title: Configuring the Elasticsearch Mapping
labels:
    - elasticsearch
    - full-text
    - last-review-20141201
toc: true
confluence:
    ajs-parent-page-id: '22380787'
    ajs-parent-page-title: Indexing and Query
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: Configuring+the+Elasticsearch+Mapping
    canonical_source: >-
        https://doc.nuxeo.com/display/NXDOC60/Configuring+the+Elasticsearch+Mapping
    page_id: '22380858'
    shortlink: OoFVAQ
    shortlink_source: 'https://doc.nuxeo.com/x/OoFVAQ'
    source_link: /display/NXDOC60/Configuring+the+Elasticsearch+Mapping
history:
    - 
        author: Benoit Delbosc
        date: '2015-03-05 16:32'
        message: ''
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

This documentation page talks about the many aspects you can tune for improving the search experience for your users when it comes to full-text search. This page is limited to full-text searches querying the Elasticsearch index, which is the recommended index for performing full-text searches.

{{! /excerpt}}

Here are some examples of common changes of the Elasticsearch mapping.

All examples below should be done in a [custom template that redefines the Elasticsearch mapping]({{page space='admindoc60' page='elasticsearch-setup#changingelasticsearchmapping'}}).

## Customizing the Language

The Nuxeo code uses a full-text analyzer named&nbsp;`fulltext`. This is an alias that points to the&nbsp;`en_fulltext`&nbsp;analyzer by default.

To change it to the French analyzer for instance, move the following line into the&nbsp;`fr_fulltext`:

```
 "alias" : "fulltext"
```

{{#> callout type='warning' }}

If you dump the mapping from the Elasticsearch HTTP API (or using an Elasticsearch plug-in like head or kopf), you will see that alias are replaced by the target.

{{/callout}}

## Making ILIKE Works (Case Insensitive Search)

If you want to do case insensitive search using an&nbsp;`ILIKE`&nbsp;operation:

1.  Make sure that the `lowercase_analyzer` is defined in your settings (available since 6.0-HF01).
2.  Declare your field as a `multi_field` with a `lowercase` index:

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

Then you can disable the default index on the field by adding after the second `"[my:text](http://mytext)" : {`

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

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">

{{! Please update the label in the Content by Label macro below. }}

{{#> panel heading='Other Elasticsearch Documentation'}}

*   [Elasticsearch Indexing Logic]({{page page='elasticsearch-indexing-logic'}})
*   [Elasticsearch Setup]({{page space='admindoc60' page='elasticsearch-setup'}})
*   [How to Make a Page Provider or Content View Query Elasticsearch Index]({{page page='how-to-make-a-page-provider-or-content-view-query-elasticsearch-index'}})

{{/panel}}</div><div class="column medium-6">

{{! Please update the label and target spaces in the Content by Label macro below. }}

{{#> panel heading='Other Related Documentation '}}

*   [Full-Text Queries]({{page page='full-text-queries'}})
*   [Indexing and Query]({{page page='indexing-and-query'}})
*   [Indexing and Querying How-To Index]({{page page='indexing-and-querying-how-to-index'}})

{{/panel}}</div></div>