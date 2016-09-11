---
title: Elasticsearch Hints Cheat Sheet
review:
    comment: ''
    date: '2015-12-01'
    status: ok
labels:
    - elasticsearch
    - elasticsearch-component
    - excerpt
    - multiexcerpt-include
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
    *   Index: `_all`
    *   Analyzer: `fulltext`
    *   Operator: `fuzzy`

### Test case

*   Create a new document that contains a text file which itself contains the string "Nuxeo rocks"
*   Search for "Nuxo", the document created previously appears in the results

## Using the Common Operator on the Main Attachment Content

{{{multiexcerpt 'common-operator-main-attachment' page='Configuring the Elasticsearch Mapping'}}}

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