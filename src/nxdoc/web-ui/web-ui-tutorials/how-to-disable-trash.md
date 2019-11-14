---
title: 'HOWTO: Disable Trash Actions, Tab and Search'
review:
    comment: ''
    date: '2019-11-14'
    status: ok
toc: false
details:
    howto:
        excerpt: Learn how to disable trash and set up hard delete
        level: Intermediate
        tool: code
        topics: Web UI
labels:
    - tutorial
    - polymer
    - lts2019-ok
tree_item_index: 1150

---

Since LTS 2019 (10.10), Web UI leverages the [Trash Service]({{page version='' space='nxdoc' page='trash-service'}}) by default. It comes with:
 - a soft delete action when browsing documents (move to trash)
 - a trash tab to view trashed documents of a `Folderish` document
 - a trash search to retrieve all the trashed documents of the repository
 - when browsing a trashed document:
   - a hard delete action to permanently delete it
   - a restore action

If you wish to disable these trash widgets and recover a simple hard delete action when browsing documents, you will need to add the following slot contribution:

```xml
<!-- Disable trash -->
<nuxeo-slot-content name="trashMenuButton" slot="DRAWER_ITEMS" disabled>
</nuxeo-slot-content>

<nuxeo-slot-content name="trashMenuPage" slot="DRAWER_PAGES" disabled>
</nuxeo-slot-content>

<nuxeo-slot-content name="documentTrashItem" slot="DOCUMENT_VIEWS_ITEMS" disabled>
</nuxeo-slot-content>

<nuxeo-slot-content name="documentTrashPage" slot="DOCUMENT_VIEWS_PAGES" disabled>
</nuxeo-slot-content>

<nuxeo-slot-content name="deleteDocumentAction" slot="DOCUMENT_ACTIONS" order="15">
  <template>
    <nuxeo-delete-document-button document="[[document]]" hard>
    </nuxeo-delete-document-button>
  </template>
</nuxeo-slot-content>

<nuxeo-slot-content name="deleteSelectionAction" slot="RESULTS_SELECTION_ACTIONS" order="30">
  <template>
    <nuxeo-delete-documents-button documents="[[selectedItems]]" hard>
    </nuxeo-delete-documents-button>
  </template>
</nuxeo-slot-content>
```