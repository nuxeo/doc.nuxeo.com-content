---
title: Querying and Searching
review:
    comment: ''
    date: ''
    status: ok
confluence:
    ajs-parent-page-id: '17334376'
    ajs-parent-page-title: Repository features
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Querying+and+Searching
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/Querying+and+Searching'
    page_id: '17334424'
    shortlink: mIAIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/mIAIAQ'
    source_link: /display/NXDOC58/Querying+and+Searching
history:
    - 
        author: Manon Lumeau
        date: '2016-07-20 15:22'
        message: 'emove children display macro  '
        version: '12'
    - 
        author: Solen Guitter
        date: '2015-08-28 10:05'
        message: ''
        version: '11'
    - 
        author: Anonymous
        date: '2013-09-04 18:25'
        message: Added children pages and excerpts
        version: '10'
    - 
        author: Solen Guitter
        date: '2013-09-04 17:46'
        message: ''
        version: '9'
    - 
        author: Solen Guitter
        date: '2011-03-03 19:19'
        message: Migrated to Confluence 4.0
        version: '8'
    - 
        author: Solen Guitter
        date: '2011-03-03 19:19'
        message: ''
        version: '7'
    - 
        author: Solen Guitter
        date: '2011-03-02 18:16'
        message: ''
        version: '6'
    - 
        author: Florent Guillaume
        date: '2010-12-24 17:22'
        message: ''
        version: '5'
    - 
        author: Florent Guillaume
        date: '2010-12-24 14:50'
        message: ''
        version: '4'
    - 
        author: Florent Guillaume
        date: '2010-11-29 10:42'
        message: ''
        version: '3'
    - 
        author: Florent Guillaume
        date: '2010-11-29 10:35'
        message: ''
        version: '2'
    - 
        author: Florent Guillaume
        date: '2010-11-29 10:32'
        message: ''
        version: '1'

---
&nbsp;

{{! excerpt}}

In Nuxeo the main way to do searches is through NXQL, the Nuxeo Query Language, a SQL-like query language.

{{! /excerpt}}

You can read a full description of the [NXQL syntax]({{page page='nxql'}}).

The fulltext aspects of the searches are described on a [separate page]({{page page='full-text-queries'}}).

**In this section:**

*   [NXQL]({{page space='NXDOC58' page='NXQL'}})
*   [Full-Text Queries]({{page space='NXDOC58' page='Full-Text Queries'}})&nbsp;&mdash;&nbsp;<span class="smalltext">Nuxeo documents can be searched using fulltext queries; the standard way to do so is to use the top-right "quick search" box in Nuxeo DM. Search queries are expressed in a Nuxeo-defined syntax, described below.</span>
*   [Search Results Optimizations]({{page space='NXDOC58' page='Search Results+Optimizations'}})&nbsp;&mdash;&nbsp;<span class="smalltext">When there are a lot of search results, search becomes slow, which results in very slow response times when users browse the application, which can even be unresponsive. When monitoring the server, memory is overused.</span>