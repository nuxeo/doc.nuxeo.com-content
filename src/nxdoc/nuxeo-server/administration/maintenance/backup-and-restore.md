---
title: Backup and Restore
description: Nuxeo Platform supports the backup of your data.
review:
    comment: ''
    date: '2017-12-14'
    status: ok
labels:
    - content-review-lts2016
    - backup
    - bdelbosc
    - nxdoc-742
    - lts2017-ok
confluence:
    ajs-parent-page-id: '950318'
    ajs-parent-page-title: Monitoring and Maintenance
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Backup+and+Restore
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Backup+and+Restore'
    page_id: '950306'
    shortlink: IoAO
    shortlink_source: 'https://doc.nuxeo.com/x/IoAO'
    source_link: /display/NXDOC/Backup+and+Restore
tree_item_index: 200
version_override:
    LTS 2015: 710/admindoc/backup-and-restore
    '6.0': 60/admindoc/backup-and-restore
    '5.8': 58/admindoc/backup-and-restore
history:
    -
        author: Alain Escaffre
        date: '2016-03-23 13:41'
        message: ''
        version: '21'
    -
        author: Antoine Taillefer
        date: '2015-10-05 08:18'
        message: ''
        version: '20'
    -
        author: Antoine Taillefer
        date: '2015-10-05 08:08'
        message: ''
        version: '19'
    -
        author: Antoine Taillefer
        date: '2015-07-01 13:00'
        message: ''
        version: '18'
    -
        author: Antoine Taillefer
        date: '2015-06-30 10:16'
        message: ''
        version: '17'
    -
        author: Antoine Taillefer
        date: '2015-06-24 15:35'
        message: ''
        version: '16'
    -
        author: Antoine Taillefer
        date: '2015-06-24 13:13'
        message: ''
        version: '15'
    -
        author: Florent Guillaume
        date: '2014-06-26 16:00'
        message: ''
        version: '14'
    -
        author: Solen Guitter
        date: '2013-10-30 10:22'
        message: Added links
        version: '13'
    -
        author: Julien Carsique
        date: '2013-10-28 00:32'
        message: ''
        version: '12'
    -
        author: Alain Escaffre
        date: '2013-10-27 22:34'
        message: ''
        version: '11'
    -
        author: Alain Escaffre
        date: '2013-10-27 22:34'
        message: ''
        version: '10'
    -
        author: Alain Escaffre
        date: '2013-10-27 22:33'
        message: ''
        version: '9'
    -
        author: Alain Escaffre
        date: '2013-10-27 22:09'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2013-10-14 17:29'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2011-12-10 19:02'
        message: Migrated to Confluence 4.0
        version: '6'
    -
        author: Solen Guitter
        date: '2011-12-10 19:02'
        message: ''
        version: '5'
    -
        author: Julien Carsique
        date: '2011-06-06 15:52'
        message: ''
        version: '4'
    -
        author: Julien Carsique
        date: '2011-06-06 15:49'
        message: ''
        version: '3'
    -
        author: Florent Guillaume
        date: '2010-06-17 16:52'
        message: ''
        version: '2'
    -
        author: Admin name placeholder
        date: '2010-03-01 00:58'
        message: ''
        version: '1'

---
## Backing Up

Nuxeo supports hot backup of your data.

If you have followed the [recommendations]({{page page='setup-best-practices'}}), then you have configured Nuxeo to use a production-safe database (instead of the default embedded H2) and have set a path for `nuxeo.data.dir` in your `nuxeo.conf`. In that case:

1.  Simply first backup your database (make a SQL dump),
2.  Then backup your data on filesystem.

Performing the backup in that order (the database first, then the filesystem) will ensure backup consistency.

If you didn't configure Nuxeo to use a database, then the default database is embedded in the data directory: Stop the server before backup.

If you didn't configure Nuxeo data directory (`nuxeo.data.dir` in `nuxeo.conf`), then&nbsp;the default path is&nbsp;`$TOMCAT/nxserver/data`.&nbsp;If you're not sure, look at the data&nbsp;directory value in the [Admin Center]({{page page='admin-tab-overview'}}).

## Restoring

1.  Restore the database and data filesystem you had previously backed up.
2.  Configure Nuxeo to use this database and data directory.
3.  Start Nuxeo.

## {{> anchor 'backingupandrestoringtheauditelasticsearchindex'}}Backing Up and Restoring the Audit Elasticsearch Index

If Elasticsearch is used as a backend for audit logs, meaning the following properties are set in&nbsp;`nuxeo.conf`:

```
elasticsearch.enabled=true
audit.elasticsearch.enabled=true
```

you need to backup / restore `${audit.elasticsearch.indexName}` Elasticsearch index [defined in nuxeo.conf]({{page page='elasticsearch-setup#configuringnuxeotoaccessthecluster'}}), following the Elasticsearch&nbsp;[Snapshot And Restore](https://www.elastic.co/guide/en/elasticsearch/reference/current/modules-snapshots.html) documentation.

Note that since Nuxeo 9.10, the sequence index `${seqgen.elasticsearch.indexName}` can be regenerated quickly at startup, so it is not mandatory to backup this index.

{{#> callout type='warning' }}

This is really important if as if you decide to use Elasticsearch as a backend for audit logs it will become the reference (no more SQL backend), so backuping a Nuxeo instance implies backuping the audit Elasticsearch index.

{{/callout}} {{#> callout type='info' }}

Reminder: as stated in&nbsp;[Setting up an Elasticsearch Cluster]({{page page='elasticsearch-setup#settingupanelasticsearchcluster'}}), the embedded Elasticsearch mode&nbsp;**is only for testing purpose**&nbsp;and should not be used in production.

Yet if you decide to use it for development or tests, to perform the backup / restore operations you will need to make the embedded Elasticsearch server accept HTTP request on port 9200 by setting `elasticsearch.httpEnabled=true` in `nuxeo.conf`.

Make sure you set back `elasticsearch.httpEnabled=false` when the backup / restore operations are over.

{{/callout}}

## Additional Information

Two elements allow saving the filesystem once the database has been dumped:

*   When you add a document in the repository, [VCS]({{page space='glos' page='vcs'}}) computes the digest of the blob: it is this digest which is used as the filename of the document stored in the filesystem. That way, if a user uploads a different document but which has the same filename, the blob stored on filesystem won't be changed: a new blob with a different digest will be put in the blobstore.
*   Blobs are not deleted as soon as the document is removed from the repository.

These two points ensures that no data will be modified (or deleted) after dumping your database. Only creation could happen. So the backup of the filesystem will be consistent with the backup of the database.

**Some remarks about VCS**:

*   As VCS uses the digest of the blob, this ensures a document will be stored only once in the blobstore, even if it is uploaded several times.
*   As VCS doesn't delete blobs once a document is removed from the repository, you should run a clean-up regularly from the [Admin Center]({{page page='admin-tab-overview'}}) in the menu **System Information** / **Repository binaries**.

**Some remarks about Nuxeo Stream**:

Nuxeo 9.10 introduced [Nuxeo Stream]({{page page='nuxeo-stream'}}), it makes sense to backup streams so a restored instance can continue the stream processing.

When the underlying streams are stored using Chronicle Queues files, they are located inside `${nuxeo.data.dir}` and they are already taken in account by the procedure described above,

When the underlying streams are stored using Kafka the case is more complex because records older than backup date need to be discard.
So restoring means replicate existing topics until the backup date and reconfigure Nuxeo kafka access to use the new topics.
