---
title: Trash Service
description: Deleting a document involves several steps before the full document is actually deleted from the database and disk.
review:
    comment: ''
    date: '2018-04-24'
    status: ok
labels:
    - lts2016-ok
    - delete
    - life-cycle
    - core-component
    - fguillaume
    - excerpt
    - multiexcerpt-include
    - lts2017-ok
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
On user interface provided by Nuxeo, deleting a document involves several steps before the entire document is actually deleted from the database and disk. It implies to first trash it and then delete it permanently. The second action is only possible if document is in the trash.
{{! /excerpt}}

## Trash Management

Trash feature is managed by [TrashService](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/ecm/core/trash/TrashService.html).

### Trash / Untrash / Purge Document

When you trash or untrash a document, the TrashService renames it (to avoid any further collision), changes the `isTrashed` property and then fires the `documentTrashed` or `documentUntrashed` event.
Once your document is in trashed state, you can untrash it or purge it (remove it permanently).

In order to perform these actions, trash management is exposed as Java API, Automation and REST API.

To use the Java API, as usual you can retrieve the service with `Framework.getService(TrashService.class)` and then access to the following APIs:
- isTrashed
- trashDocument / trashDocuments
- untrashDocument / untrashDocuments
- canPurgeOrUntrash
- getAboveDocument - retrieve the first non trashed ancestor
- purgeDocumentsUnder
- getDocuments - retrieve all documents from the trash of the current document

To use the trash feature through the REST API, you need to use Automation. Several operations are available to perform trash actions:
- TrashDocument / `Document.Trash`
- UntrashDocument / `Document.Untrash`
- EmptyTrash / `Document.EmptyTrash`

The enricher FirstAccessibleAncestorJsonEnricher / `firstAccessibleAncestor` allows you to get the the first non trashed ancestor of returned document during a REST call. This is useful when you trashed a document and want to know on which document you might redirect your user for instance.

### Checking the State

When you're handling `DocumentModel` you can call `isTrashed` method to check the state. `CoreSession` also has this API for convenience.

When you're using the REST API, the return JSON document will have a `isTrashed` property, for instance:
```json
{
  "entity-type":"document",
  "repository": "REPOSITORY_NAME",
  "uid": "DOCUMENT_UID",
  "path": "DOCUMENT_PATH",
  "type": "DOCUMENT_TYPE",
  "state": "DOCUMENT_STATE",
  "parentRef": "PARENT_DOCUMENT_UID",
  "isCheckedOut": true|false,
  "changeToken": null|"CHANGE_TOKEN",
  "isCheckedOut": true|false,
  "isTrashed": true|false,
  ...
  "properties": {
    ...
  },
  ...
}
```

You can also filter trashed document when running NXQL by using the `ecm:isTrashed` property. For instance, in order to get direct children not trashed:
```
SELECT * FROM Document
  WHERE ecm:parentId = 'DOCUMENT_UID'
  AND ecm:isProxy = 0
  AND ecm:mixinType != 'HiddenInNavigation'
  AND ecm:isVersion = 0
  AND ecm:isTrashed = 0
```

## Permanently Deleting Document

A permanent delete is done by most Nuxeo APIs, typically [CoreSession.removeDocument](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/ecm/core/api/CoreSession.html#removeDocument-org.nuxeo.ecm.core.api.DocumentRef-) or the higher-level APIs that use it like the CMIS bindings or the Automation [Document.Delete](http://explorer.nuxeo.org/nuxeo/site/distribution/latest/viewOperation/Document.Delete) operation.

### Soft-Delete

If soft-delete is enabled (this is not the case by default), then the document is marked as deleted in the database (using a simple boolean flag) but no rows are actually removed. A search will not be able to find any document marked deleted in this way. From the application's point of view, the document is already fully deleted.

A scheduled periodic process will then hard-delete the documents marked as deleted at a later time, for asynchronous cleanup in fixed-sized batches.

{{#> callout type='info' heading='Using Soft-Delete'}}
Soft-delete is available for VCS only.

Soft-delete can be enabled to relieve the database of expected heavy loads if many documents are deleted at the same time.

When Nuxeo has to hard-delete lots of documents, many rows in many tables, themselves related by foreign key constraints, have to be removed. On some databases this can use many resources (like undo segments for Oracle) and take a lot of time, so soft-delete is designed to spread these costly operations over time.

To activate soft-delete, you should change the repository configuration to add `<softDelete enabled="true" />`. See [Configuration Templates]({{page page='configuration-templates'}}) for more about updating the `default-repository-config.xml.nxftl` file.

Please consult [NXP-11335](https://jira.nuxeo.com/browse/NXP-11335) for more details about soft-delete and the configuration of the periodic cleanup.
{{/callout}}

### Hard-Delete

If soft-delete is not enabled, or when the periodic cleanup process for soft-delete happens, the document's data is actually physically deleted from the database by using `DELETE` SQL statements (or equivalent calls for non-VCS storages).

## Trash Migration

{{! multiexcerpt name='trash-migration'}}
As TrashService now leverages the system property `ecm:isTrashed` by default, you need to migrate your instance.

1. You need to replace all occurrences of `ecm:currentLifeCycleState` with `deleted` state by `ecm:isTrashed` in your NXQL/Page Provider/Content View, etc.</br>
   For instance `ecm:currentLifeCycleState = 'deleted'` is to replace by `ecm:isTrashed = 1`.
2. Add the contribution from section [Keeping old trash implementation](#keeping-old-trash-implementation).
3. In JSF UI, go to **Admin** > **System Information** > **Migration**, click the button next to **Migration of in the trash storage model** field and wait until the migration is completed.
4. Then perform an Elasticsearch re-indexation of all repository. In JSF UI, go to **Admin** > **Elasticsearch** > **Admin**, click the button **Re-index repository** and wait until the re-indexation is completed.
5. Remove the contribution added at step 2.
6. You now need to remove `deleted` lifecycle state from your lifecycle policies as it is deprecated and not used anymore.

{{> anchor 'keeping-old-trash-implementation'}}**Keeping Old Trash Implementation**

The trash implementation has changed in 10.2. If you want to keep previous implementation relying on lifecycle state, add the following contribution:
```xml
  <require>org.nuxeo.ecm.core.trash.service.migrator</require>
  <extension target="org.nuxeo.runtime.migration.MigrationService" point="configuration">

    <migration id="trash-storage">
      <defaultState>lifecycle</defaultState>
    </migration>

  </extension>
```
{{! /multiexcerpt}}

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-4">{{#> panel heading='Related How-To'}}

- [HOWTO: Use Trash Feature]({{page page='how-to-use-trash-feature'}})

{{/panel}}</div><div class="column medium-4">{{#> panel heading='Other Related Documentation'}}

- [Deleting Content]({{page space='userdoc' page='content-delete'}}) (User documentation)
- [Garbage-Collecting Orphaned Binaries]({{page page='garbage-collecting-orphaned-binaries'}})

{{/panel}}</div>
<div class="column medium-4">{{#> panel heading='Nuxeo Studio Community Cookbook'}}

- [Delete All Trashed Documents](https://github.com/nuxeo/nuxeo-studio-community-cookbook/blob/master/modules/nuxeo/delete-all-trashed-documents)

{{/panel}}</div>
</div>
