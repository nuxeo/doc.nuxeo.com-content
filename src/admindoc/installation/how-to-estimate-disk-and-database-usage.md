---
title: How to Estimate Disk and Database Usage
confluence:
    ajs-parent-page-id: '16810055'
    ajs-parent-page-title: Installation
    ajs-space-key: ADMINDOC58
    ajs-space-name: Nuxeo Installation and Administration - 5.8
    canonical: How+to+Estimate+Disk+and+Database+Usage
    canonical_source: >-
        https://doc.nuxeo.com/display/ADMINDOC58/How+to+Estimate+Disk+and+Database+Usage
    page_id: '16810020'
    shortlink: JIAAAQ
    shortlink_source: 'https://doc.nuxeo.com/x/JIAAAQ'
    source_link: /display/ADMINDOC58/How+to+Estimate+Disk+and+Database+Usage
history:
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
Documents in Nuxeo are more than "simple files". The files are called "binaries" or "blobs" (even if they are text files).

Volume usage depends on the type of documents but it is possible to estimate the required space on filesystem and database:

*   Filesystem
    *   Base unit will be the size of the binaries.
    *   If there are images, then you must take in account the generated thumbnails: depending on the original image size, the thumbnail will be about 10% to 100% of the original size. Let's consider an average of 50%.
    *   Backup: it's possible to perform remote backup (rsync for instance) but if you plan to use a local backup, then the required size must be doubled.
    *   Software
        *   Disk usage by Nuxeo is stable and about 300MB.
        *   Temporary files (when uploading for instance): reserve some space which depends on the maximum size of imported files (the temporary directory can be configured).
        *   Logs: based on [Log4J](http://logging.apache.org/log4j/index.html), the log files can be easily configured (size limit, rolling rules, ...).
*   Database
    *   Binaries x2: if binaries are text files, then you can estimate to twice of the binaries size in database for storing their "fulltext" indexes.
    *   +10% of binaries: other metadata usually consumes about 10% of the binaries total size.
    *   Backup: unless using backup streaming (not available for all databases and complex to setup), you will need a local backup so you must double the available size versus the estimated usage.

The easiest way is still to use the application for some duration, get usage statistics and deduce the required size.

So, based on the above information, if you have X GB of documents of which Y GB of images,

*   Filesystem
    *   data = X + 50% Y (x2 for backup).
    *   /tmp = 1GB + maximum size of imported documents
    *   /var/log = 50MB~5GB depending on the Log4J rules and the log level (error/warn/info/debug/trace).
    *   application = ~1GB
*   Database = 210% X (x2 for backup).