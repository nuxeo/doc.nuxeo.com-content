---
title: Setting up a HA Configuration Using the Nuxeo Platform and PostgreSQL
labels:
    - ha
    - clustering
    - vcs
    - replication
toc: true
confluence:
    ajs-parent-page-id: '16810056'
    ajs-parent-page-title: Setup
    ajs-space-key: ADMINDOC58
    ajs-space-name: Nuxeo Installation and Administration - 5.8
    canonical: Setting+up+a+HA+Configuration+Using+the+Nuxeo+Platform+and+PostgreSQL
    canonical_source: >-
        https://doc.nuxeo.com/display/ADMINDOC58/Setting+up+a+HA+Configuration+Using+the+Nuxeo+Platform+and+PostgreSQL
    page_id: '18449554'
    shortlink: koQZAQ
    shortlink_source: 'https://doc.nuxeo.com/x/koQZAQ'
    source_link: >-
        /display/ADMINDOC58/Setting+up+a+HA+Configuration+Using+the+Nuxeo+Platform+and+PostgreSQL
history:
    - 
        author: Solen Guitter
        date: '2016-09-01 12:16'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2014-01-22 12:20'
        message: ''
        version: '1'

---
<div class="row"><div class="column medium-8">

## Target Architecture

The target architecture is to:

*   Use the Nuxeo Platform built-in clustering mode to ensure HA at Application level;
*   Configure PostgreSQL Master/Slave replication mode &nbsp;to ensure HA at Database level.

![]({{file name='HAPG.png'}} ?w=500,h=263,border=true)

</div><div class="column medium-4">{{#> panel heading='On this page'}}

{{/panel}}</div></div>

## Nuxeo Clustering and Network Load-Balancing

See the [Nuxeo Clustering Configuration]({{page page='nuxeo-clustering-configuration'}}) page.

## Setting up PosgreSQL Streaming Replication

<span style="font-size: 13.0px;">Streaming replication allows a standby server to stay more up-to-date than is possible with file-based log shipping.</span>

We provide [ansible scripts](https://github.com/nuxeo/nuxeo-tools-pgcluster) to deploy a cluster of two PostgreSQL servers as an example. Please refer to the PostgreSQL [streaming replication](http://www.postgresql.org/docs/current/static/warm-standby.html) page for more information.

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

When the master database is down, the slave must be promoted to master. This means changing changing the `recovery.conf` and&nbsp;`postgresql.conf` files and restart. This can be easily scripted.

If your infrastructure provides a virtual IP for the database, the VCS pool (used for the document repository access) is able to reconnect automatically to the database ([NXP-7528](http://NXP-7528)). In addition you need to a define a `validationQuery` for the default db datasource (used for directory or audit access).

## Backup and Restore

Please refer to the [Nuxeo backup procedure]({{page page='backup-and-restore'}}).

&nbsp;

* * *