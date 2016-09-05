---
title: Configuring MySQL
labels:
    - database
    - mysql
confluence:
    ajs-parent-page-id: '16810053'
    ajs-parent-page-title: Database
    ajs-space-key: ADMINDOC58
    ajs-space-name: Nuxeo Installation and Administration - 5.8
    canonical: Configuring+MySQL
    canonical_source: 'https://doc.nuxeo.com/display/ADMINDOC58/Configuring+MySQL'
    page_id: '19793057'
    shortlink: oQQuAQ
    shortlink_source: 'https://doc.nuxeo.com/x/oQQuAQ'
    source_link: /display/ADMINDOC58/Configuring+MySQL
history:
    - 
        author: Solen Guitter
        date: '2016-08-30 15:38'
        message: ''
        version: '3'
    - 
        author: Solen Guitter
        date: '2014-06-27 11:02'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2014-06-27 11:02'
        message: ''
        version: '1'

---
The Nuxeo Platform supports the following MySQL versions:

{{! multiexcerpt name='supported-MySQL'}}

MySQL 5.1 to 5.5.

{{! /multiexcerpt}}

We always recommend that you use the latest stable version, which is MySQL 5.5 at the time of this writing.

## Configuration

Because MySQL by default likes to drop connections after a short idle time, if you don't use a datasource pool configuration that always checks for valid connections Nuxeo Platform may unexpectedly use a closed connection and this can cause various errors.

Therefore we strongly suggest that you configure MySQL to never drop idle connections, by using a huge value for [wait_timeout](http://dev.mysql.com/doc/refman/5.5/en/server-system-variables.html#sysvar_wait_timeout).

## Recent versions

MySQL 5.6 and MySQL 5.7 compatibility needs an update in the ROW_FORMAT used for the tables that my have large row sizes (see [this](http://dev.mysql.com/doc/refman/5.6/en/innodb-row-format-dynamic.html) for more). This is not yet automatically done by Nuxeo.

&nbsp;

* * *