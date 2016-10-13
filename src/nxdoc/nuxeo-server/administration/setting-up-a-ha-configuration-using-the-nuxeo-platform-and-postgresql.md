---
title: Setting up a HA Configuration Using the Nuxeo Platform and PostgreSQL
review:
    comment: ''
    date: '2015-12-01'
    status: ok
labels:
    - ha
    - clustering
    - vcs
    - replication
    - postgresql
toc: true
confluence:
    ajs-parent-page-id: '31032113'
    ajs-parent-page-title: Administration
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Setting+up+a+HA+Configuration+Using+the+Nuxeo+Platform+and+PostgreSQL
    canonical_source: >-
        https://doc.nuxeo.com/display/NXDOC/Setting+up+a+HA+Configuration+Using+the+Nuxeo+Platform+and+PostgreSQL
    page_id: '18449437'
    shortlink: HYQZAQ
    shortlink_source: 'https://doc.nuxeo.com/x/HYQZAQ'
    source_link: >-
        https://doc.nuxeo.com/display/NXDOC/Setting+up+a+HA+Configuration+Using+the+Nuxeo+Platform+and+PostgreSQL
tree_item_index: 1600
version_override:
    'LTS 2015': 710/admindoc/setting-up-a-ha-configuration-using-the-nuxeo-platform-and-postgresql
    '6.0': 60/admindoc/setting-up-a-ha-configuration-using-the-nuxeo-platform-and-postgresql
    '5.8': 58/admindoc/setting-up-a-ha-configuration-using-the-nuxeo-platform-and-postgresql
history:
    -
        author: Solen Guitter
        date: '2016-09-01 09:58'
        message: ''
        version: '14'
    -
        author: Thierry Martins
        date: '2016-05-04 09:39'
        message: Remove the reference to the validationQuery attribute
        version: '13'
    -
        author: Manon Lumeau
        date: '2016-03-29 09:52'
        message: ''
        version: '12'
    -
        author: Manon Lumeau
        date: '2014-12-05 15:24'
        message: ''
        version: '11'
    -
        author: Solen Guitter
        date: '2014-01-22 12:00'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2014-01-22 11:58'
        message: ''
        version: '9'
    -
        author: Thierry Delprat
        date: '2014-01-21 19:06'
        message: ''
        version: '8'
    -
        author: Thierry Delprat
        date: '2014-01-21 19:06'
        message: ''
        version: '7'
    -
        author: Thierry Delprat
        date: '2014-01-21 18:16'
        message: ''
        version: '6'
    -
        author: Benoit Delbosc
        date: '2014-01-21 17:53'
        message: ''
        version: '5'
    -
        author: Benoit Delbosc
        date: '2014-01-21 16:00'
        message: ''
        version: '4'
    -
        author: Benoit Delbosc
        date: '2014-01-21 15:59'
        message: ''
        version: '3'
    -
        author: Thierry Delprat
        date: '2014-01-20 19:14'
        message: ''
        version: '2'
    -
        author: Thierry Delprat
        date: '2014-01-20 19:04'
        message: ''
        version: '1'

---
## Target Architecture

The target architecture is to:

*   Use the Nuxeo Platform built-in clustering mode to ensure HA at Application level;
*   Configure PostgreSQL Master/Slave replication mode &nbsp;to ensure HA at Database level.

![]({{file name='HAPG.png'}} ?w=500,h=263,border=true)

## Nuxeo Clustering and Network Load-Balancing

See the&nbsp;[Nuxeo Clustering Configuration]({{page page='nuxeo-clustering-configuration'}})&nbsp;page.

## Setting up PosgreSQL Streaming Replication

Streaming replication allows a standby server to stay more up-to-date than is possible with file-based log shipping.

We provide&nbsp;[ansible scripts](https://github.com/nuxeo/nuxeo-tools-pgcluster)&nbsp;to deploy a cluster of two PostgreSQL servers as an example. Please refer to the PostgreSQL&nbsp;[streaming replication](http://www.postgresql.org/docs/current/static/warm-standby.html)&nbsp;page for more information.

{{#> callout type='info' }}

There are several ways to achieve PGSQL replication: we are just presenting one of the possible option.

{{/callout}}

## BinaryStore Replication

Technically, you don't need to replicate the BinaryStore if you use a reliable backend like:

*   a NAS that already handles redundancy;
*   Amazon S3.

However, if you want to have the full storage replicated in two separated data center, you will want to replicate the BinaryStore too.

Because of the way the BinaryStore is handled (no update, move) , you don't have a lot of constraints:

*   Rsync
*   DRBD
*   ...

## PostgreSQL Fail over Procedure

When the master database is down, the slave must be promoted to master. This means changing changing the&nbsp;`recovery.conf`&nbsp;and&nbsp;`postgresql.conf`&nbsp;files and restart. This can be easily scripted.

If your infrastructure provides a virtual IP for the database, the VCS pool (used for the document repository access) is able to reconnect automatically to the database.

## Backup and Restore

Please refer to the&nbsp;[Nuxeo backup procedure]({{page page='backup-and-restore'}}).

&nbsp;
