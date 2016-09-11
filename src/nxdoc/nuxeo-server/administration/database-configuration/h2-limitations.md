---
title: H2 Limitations
review:
    comment: ''
    date: '2015-12-01'
    status: ok
labels:
    - h2
    - database
    - limitations
confluence:
    ajs-parent-page-id: '3342340'
    ajs-parent-page-title: Database Configuration
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: H2+Limitations
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/H2+Limitations'
    page_id: '10387510'
    shortlink: NoCe
    shortlink_source: 'https://doc.nuxeo.com/x/NoCe'
    source_link: /display/NXDOC/H2+Limitations
history:
    - 
        author: Manon Lumeau
        date: '2016-03-25 16:30'
        message: ''
        version: '7'
    - 
        author: Solen Guitter
        date: '2014-11-26 14:03'
        message: ''
        version: '6'
    - 
        author: Florent Guillaume
        date: '2013-10-29 11:31'
        message: ''
        version: '5'
    - 
        author: Solen Guitter
        date: '2012-05-10 11:40'
        message: Migrated to Confluence 4.0
        version: '4'
    - 
        author: Solen Guitter
        date: '2012-05-10 11:40'
        message: Added related pages
        version: '3'
    - 
        author: Florent Guillaume
        date: '2012-04-03 15:39'
        message: ''
        version: '2'
    - 
        author: Florent Guillaume
        date: '2012-04-03 15:37'
        message: ''
        version: '1'

---
H2 is first and foremost designed to be an embedded database. We use it in Nuxeo to provide an easy-to-use downloadable demo platform, but it should **never** be used in production.

H2 limitations:

*   It has very bad concurrent behavior (writing a row locks the whole table, therefore deadlocks are much more frequent).
*   Its full-text embedding (using Apache Lucene) is not really transactional.
*   It has a poor query optimizer.

&nbsp;

* * *