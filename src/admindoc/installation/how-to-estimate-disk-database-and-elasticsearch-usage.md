---
title: 'How to Estimate Disk, Database and Elasticsearch Usage'
review:
    comment: ''
    date: ''
    status: ok
details:
    howto:
        excerpt: >-
            Learn how to estimate the required size for disk and database.
        level: Intermediate
        tool: '&nbsp;'
        topics: Database
labels:
    - howto
    - database
    - logs
confluence:
    ajs-parent-page-id: '21921867'
    ajs-parent-page-title: Installation
    ajs-space-key: ADMINDOC60
    ajs-space-name: Nuxeo Installation and Administration — 6.0
    canonical: How+to+Estimate+Disk%2C+Database+and+Elasticsearch+Usage
    canonical_source: >-
        https://doc.nuxeo.com/display/ADMINDOC60/How+to+Estimate+Disk%2C+Database+and+Elasticsearch+Usage
    page_id: '21921905'
    shortlink: cYBOAQ
    shortlink_source: 'https://doc.nuxeo.com/x/cYBOAQ'
    source_link: >-
        /display/ADMINDOC60/How+to+Estimate+Disk%2C+Database+and+Elasticsearch+Usage
tree_item_index: 600
version_override:
    'FT': 'nxdoc/how-to-estimate-volume-usage'
    'LTS 2015': 710/admindoc/how-to-estimate-disk-database-and-elasticsearch-usage
history:
    -
        author: Solen Guitter
        date: '2014-12-16 10:29'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2014-11-26 17:13'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2014-11-26 17:12'
        message: Add links
        version: '6'
    -
        author: Solen Guitter
        date: '2013-11-05 12:03'
        message: ''
        version: '5'
    -
        author: Julien Carsique
        date: '2012-03-17 01:23'
        message: ''
        version: '4'
    -
        author: Julien Carsique
        date: '2012-03-17 01:23'
        message: ''
        version: '3'
    -
        author: Julien Carsique
        date: '2011-07-15 19:02'
        message: ''
        version: '2'
    -
        author: Julien Carsique
        date: '2011-06-14 15:29'
        message: ''
        version: '1'

---
Documents in the Nuxeo Platform are more than "simple files". The files are called "binaries" or "blobs" (even if they are text files).

Volume usage depends on the type of documents but it is possible to estimate the required space on filesystem and database:

*   Filesystem
    *   Base unit will be the size of the binaries.
    *   If there are images, then you must take in account the generated thumbnails: depending on the original image size, the thumbnail will be about 10% to 100% of the original size. Let's consider an average of 50%.
    *   Backup: It's possible to perform remote backup (rsync for instance) but if you plan to use a local backup, then the required size must be doubled.
    *   Software
        *   Disk usage by the Nuxeo Platform is stable and about 300MB.
        *   Temporary files (when uploading for instance): Reserve some space which depends on the maximum size of imported files (the temporary directory can be configured).
        *   Logs: Based on [Log4J](http://logging.apache.org/log4j/index.html), the log files can be easily configured (size limit, rolling rules, ...).
*   Database
    *   Binaries x2: If binaries are text files, then you can estimate to twice of the binaries size in database for storing their "full-text" indexes.
    *   +10% of binaries: Other metadata usually consumes about 10% of the binaries total size.
    *   Backup: Unless using backup streaming (not available for all databases and complex to setup), you will need a local backup so you must double the available size versus the estimated usage.
*   Elasticsearch
    *   30% of the binaries, if binaries are text files. This will vary according to the number of populated fields and full-text fields, note that the `_source` field that stores the JSON representation of a document is compressed.
    *   Each replicas need the same amount of disk space.
    *   Backup: same as database, double the available size versus the estimated usage. You can also choose to not do any backup when using replicas or if you can wait for a reindexing in case of problem.

The easiest way is still to use the application for some duration, get usage statistics and deduce the required size.

So, based on the above information, if you have X GB of documents of which Y GB of images:

*   Filesystem
    *   data = X + 50% Y (x2 for backup).
    *   /tmp = 1GB + maximum size of imported documents
    *   /var/log = 50MB~5GB depending on the Log4J rules and the log level (error/warn/info/debug/trace).
    *   application = ~1GB
*   Database = 210% X (x2 for backup).
*   Elasticsearch = (30% X) x number of replicas, + 30%X for backup.

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

*   [Database]({{page page='database'}})
*   [Logs Analysis]({{page page='logs-analysis'}})
*   [Where Are the Log and Configuration Files in Windows?]({{page page='where-are-the-log-and-configuration-files-in-windows'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
