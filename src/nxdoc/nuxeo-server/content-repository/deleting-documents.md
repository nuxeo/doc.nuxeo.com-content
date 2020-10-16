---
title: Deleting Documents
review:
    comment: ''
    date: '2016-12-06'
    status: ok
labels:
    - lts2016-ok
    - delete
    - life-cycle
    - core-component
    - fguillaume
    - excerpt
    - multiexcerpt-include
    - content-review-lts2017
toc: true
confluence:
    ajs-parent-page-id: '950287'
    ajs-parent-page-title: Content Repository
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Deleting+Documents
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Deleting+Documents'
    page_id: '19234991'
    shortlink: r4AlAQ
    shortlink_source: 'https://doc.nuxeo.com/x/r4AlAQ'
    source_link: /display/NXDOC/Deleting+Documents
tree_item_index: 700
history:
    -
        author: Solen Guitter
        date: '2015-12-08 14:24'
        message: ''
        version: '12'
    -
        author: Manon Lumeau
        date: '2015-07-16 15:13'
        message: ''
        version: '11'
    -
        author: Manon Lumeau
        date: '2015-07-16 15:12'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2015-01-23 13:59'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2015-01-23 13:59'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2015-01-23 13:58'
        message: 'Update related pages, move Garbage-Collecting Orphaned Binaries in ADMINDOC, formatting'
        version: '7'
    -
        author: Julien Carsique
        date: '2015-01-22 09:42'
        message: ''
        version: '6'
    -
        author: Alain Escaffre
        date: '2014-09-19 16:15'
        message: ''
        version: '5'
    -
        author: Florent Guillaume
        date: '2014-04-25 12:30'
        message: soft-delete details
        version: '4'
    -
        author: Solen Guitter
        date: '2014-04-11 10:55'
        message: ''
        version: '3'
    -
        author: Florent Guillaume
        date: '2014-04-10 15:14'
        message: ''
        version: '2'
    -
        author: Florent Guillaume
        date: '2014-04-10 15:00'
        message: ''
        version: '1'

---
{{! excerpt}}

Deleting a document involves several steps before the full document is actually deleted from the database and disk. These steps are described below.

{{! /excerpt}}

## Functional Overview

{{{multiexcerpt 'functional-overview' page='USERDOC:Deleting Content'}}}

## Technical Overview

### Putting the Document in the Trash

Putting a document in the trash is done by changing is lifecycle state to **deleted**, by following the **delete** transition of the document's lifecycle. If no such lifecycle exists for the document, then it won't be put in the trash at all but will be immediately permanently deleted using the steps below.

When the trash is purged, all its documents are permanently deleted.

Besides the standard user interface, a document is put in the trash when using WebDAV, Nuxeo Drive, or using the [TrashService.trashDocuments](http://community.nuxeo.com/api/nuxeo/9.10/javadoc/org/nuxeo/ecm/core/trash/TrashService.html#trashDocuments-java.util.List-) API.

### Permanently Deleting the Document

A permanent delete is done by most Nuxeo APIs, typically [CoreSession.removeDocument](http://community.nuxeo.com/api/nuxeo/9.10/javadoc/org/nuxeo/ecm/core/api/CoreSession.html#removeDocument-org.nuxeo.ecm.core.api.DocumentRef-) or the higher-level APIs that use it like the CMIS bindings or the Automation [Document.Delete](http://explorer.nuxeo.org/nuxeo/site/distribution/9.10/viewOperation/Document.Delete) operation.

**Soft-Delete**

If soft-delete is enabled (this is not the case by default), then the document is marked as deleted in the database (using a simple boolean flag) but no rows are actually removed. A search will not be able to find any document marked deleted in this way. From the application's point of view, the document is already fully deleted.

A scheduled periodic process will then hard-delete the documents marked as deleted at a later time, for asynchronous cleanup in fixed-sized batches.

{{#> callout type='info' heading='Using Soft-Delete'}}

Soft-delete is available for VCS only.

Soft-delete can be enabled to relieve the database of expected heavy loads if many documents are deleted at the same time.

When Nuxeo has to hard-delete lots of documents, many rows in many tables, themselves related by foreign key constraints, have to be removed. On some databases this can use many resources (like undo segments for Oracle) and take a lot of time, so soft-delete is designed to spread these costly operations over time.

To activate soft-delete, you should change the repository configuration to add `<softDelete enabled="true" />` . See [Configuration Templates]({{page page='configuration-templates'}}) for more about updating the `default-repository-config.xml.nxftl` file.

Please consult [NXP-11335](https://jira.nuxeo.com/browse/NXP-11335) for more details about soft-delete and the configuration of the periodic cleanup.

{{/callout}}

**Hard-Delete**

If soft-delete is not enabled, or when the periodic cleanup process for soft-delete happens, the document's data is actually physically deleted from the database by using `DELETE` SQL statements (or equivalent calls for non-VCS storages).


* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related How-To'}}

- [How to Enable the Trash Feature]({{page page='how-to-enable-the-trash-feature'}})
- [Action How-To Index]({{page page='action-how-to-index'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Other Related Documentation'}}

- [Deleting Content]({{page space='userdoc' page='deleting-content'}}) (User documentation)
- [Garbage-Collecting Orphaned Binaries]({{page page='garbage-collecting-orphaned-binaries'}})

{{/panel}}</div></div>
