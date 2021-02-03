---
title: How to Estimate Volume Usage
review:
    comment: ''
    date: '2021-02-03'
    status: ok
details:
    howto:
        excerpt: Get some guidelines to estimate the required size for disk and database.
        level: Intermediate
        tool: ''
        topics: Database
labels:
    - lts2021-ok
    - database
    - kleturc
    - howto
    - excerpt
toc: true
confluence:
    ajs-parent-page-id: '3866685'
    ajs-parent-page-title: Installation
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: How+to+Estimate+Volume+Usage
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/How+to+Estimate+Volume+Usage'
    page_id: '7536973'
    shortlink: TQFz
    shortlink_source: 'https://doc.nuxeo.com/x/TQFz'
    source_link: /display/NXDOC/How+to+Estimate+Volume+Usage
tree_item_index: 1400
version_override:
    LTS 2015: 710/admindoc/how-to-estimate-disk-database-and-elasticsearch-usage
    '6.0': 60/admindoc/how-to-estimate-disk-database-and-elasticsearch-usage
    '5.8': 58/admindoc/how-to-estimate-disk-database-and-elasticsearch-usage
history:
    -
        author: Alain Escaffre
        date: '2016-07-22 13:10'
        message: ''
        version: '15'
    -
        author: Manon Lumeau
        date: '2016-03-25 10:32'
        message: ''
        version: '14'
    -
        author: Manon Lumeau
        date: '2016-03-23 14:01'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2015-11-27 15:31'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2015-04-07 14:12'
        message: 'Add titles, reorganize some content, fix typos'
        version: '11'
    -
        author: Julien Carsique
        date: '2015-04-02 14:29'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2014-12-16 10:25'
        message: Typos
        version: '9'
    -
        author: Benoit Delbosc
        date: '2014-12-15 14:42'
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
Documents in the Nuxeo Platform are more than simple files. In the context of the Nuxeo Platform files are called binaries or blobs (even if they are text files).

To get an estimation of the volume usage (including filesystem and database), you need to number and qualify the content nature. For each kind of content, you must estimate the average:

*   Number of documents
*   File size
*   Text volume
*   Size of renditions or transformations (thumbnails, PDF, video conversions...)
*   Metadata size
*   Indexes

Given how hard it is sometimes to guess those values, the easiest way is still to monitor the application in effective use for some duration, then get statistics on documents and deduce the required size over time. Here are some guidelines that should help you get some estimation.

## Estimating Volume Usage

### Media

To get an estimate of the volume usage for pictures and videos, you should take into account the following three criteria:

*   File volume: typically 1MB-5MB per file except if you mostly manage video
*   Generated thumbnails: Depending on the original image size, the thumbnail will be between 10% to 100% of the original file size.
*   Text volume: 1% of the file volume

### Structure Content

Structured Content is mostly composed of properties and has few attached files. Here are the elements to consider to estimate the volume they'll represent:

*   Property content (metadata): Consider typically 1-10 KB / object
*   File volume
*   Text volume: text content + 20% of the file volume

### Office Files

For typical office files, you should consider:

*   Property content: Less than 1KB / object
*   File volume: 100 KB - 2 MB per object
*   Text volume: property content + 30% of the file volume

## Storage Distribution

There are various configurations and addons providing alternative storage solutions (see the page [Persistence Architecture]({{page page='persistence-architecture'}})), but here is a generic solution for storage distribution:

### Filesystem

Disk usage by the Nuxeo Platform is stable and about 1&nbsp;GB.

It is possible to spread the filesystem resources over multiple disks or partitions: binaries, Nuxeo data, cache data, temporary files. See the page [Configuration Parameters Index (nuxeo.conf)]({{page page='configuration-parameters-index-nuxeoconf'}}) for their configuration.

*   **Binaries:** By default, they are stored under a sub-directory of the `data` directory, without compression but with no duplication.
*   **Cache files:** < 1&nbsp;GB (including cache of Nuxeo Packages and hotfixes).
*   **Temporary files** (when uploading for instance): Reserve some space which depends on the maximum size of imported files.
    The temporary directory can be configured using `nuxeo.tmp.dir` for instance.
    Usually: 1&nbsp;GB + the maximum size of imported documents.
*   **Logs**: Based on [Log4J](http://logging.apache.org/log4j/index.html), the log files can be easily configured (size limit, rolling rules, ...).
    The logs directory can be configured using `nuxeo.log.dir`.
    Usually: 50&nbsp;MB~5&nbsp;GB depending on the Log4J rules and the log level (error/warn/info/debug/trace).

### Database

The database will store:

*   Extracted text volume x2
*   Metadata
*   The audit will grow over time depending on the activity (depending on your configuration).

Note that the volume depends a lot on the backend, some database will not compress data
other will compress big fields and MongoDB will compress everything.

### Elasticsearch

*   About 30% of the extracted text volume.
*   Size will vary according to the number of populated fields and full-text fields.
    Note that the `_source` field that stores the JSON representation of a document is lightly compressed.
*   The audit index will grow over time depending on the activity (depending on your configuration).
*   Each replica needs the same amount of disk space.

### Backup

Based on the above estimations, you must reserve dedicated place(s) to store the backup locally or remotely. Depending on your infrastructure choices, you can use compression, streaming, hot backup, rsync...

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [Database Configuration]({{page page='database-configuration'}})
- [Logs Analysis]({{page page='logs-analysis'}})
- [Where Are the Log and Configuration Files in Windows?](https://answers.nuxeo.com/general/q/8cf97d8734af40beb5b219c58e9311e4/Logs-and-Configuration-files-in-Windows)

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
