---
title: Common Events
review:
    comment: ''
    date: '2017-12-14'
    status: ok
labels:
    - lts2016-ok
    - event
    - core-component
    - fguillaume
    - excerpt
    - lts2017-ok
toc: true
confluence:
    ajs-parent-page-id: '950283'
    ajs-parent-page-title: Events and Listeners
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Common+Events
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Common+Events'
    page_id: '16089442'
    shortlink: YoH1
    shortlink_source: 'https://doc.nuxeo.com/x/YoH1'
    source_link: /display/NXDOC/Common+Events
tree_item_index: 100
history:
    -
        author: Solen Guitter
        date: '2016-08-31 15:19'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2016-02-25 13:39'
        message: Fix anchors in TOC
        version: '5'
    -
        author: Manon Lumeau
        date: '2015-09-16 11:50'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2015-08-31 14:04'
        message: Update table of contents look
        version: '3'
    -
        author: Solen Guitter
        date: '2014-02-27 12:03'
        message: Added about to create
        version: '2'
    -
        author: Solen Guitter
        date: '2013-09-09 11:40'
        message: ''
        version: '1'

---
{{! excerpt}}

Any Nuxeo code can define its own events, but it's useful to know some of the standard ones that Nuxeo sends by default.

{{! /excerpt}}

## Basic Events

### aboutToCreate

A document is about to be created. Since it is not yet created, it is still time to cancel its creation (for instance in the case of duplicates).

### aboutToRemove - aboutToRemoveVersion

A document or a version are about to be removed.

### beforeDocumentModification

A document is about to be saved after a modification. A synchronous listener may update the DocumentModel but must not save it (this will be done automatically).

### beforeDocumentSecurityModification

A document's ACLs are about to change.

### documentCreated

A document has been created (this implies that a write to the database has occurred). Be careful, this event is sent for all creations, including for new versions and new proxies.

### documentLocked - documentUnlocked

A document has been locked or unlocked.

### documentModified

A document has been saved after a modification.

### documentRemoved - versionRemoved

A document or a version have been removed.

### documentSecurityUpdated

A document's ACLs have changed.

### emptyDocumentModelCreated

The data structure for a document has been created, but nothing is saved yet. This is useful to provide default values in document creation forms.

### lifecycle_transition_event

A transition has been followed on a document.

### sessionSaved

The session has been saved (all saved documents are written to database).

## Copy and Move Events

### aboutToCopy - aboutToMove

A document is about to be copied or moved.

### documentCreatedByCopy

A document has been copied, the passed document is the new copy.

### documentDuplicated

A document has been copied, the passed document is the original.

### documentMoved

A document has been moved.

## Versioning Events

### beforeRestoringDocument

A document is about to be restored.

### documentRestored

A document has been restored.

### incrementBeforeUpdate

A document is about to be snapshotted as a new version. The changes made to the passed DocumentModel will be saved in the archived version but will not be seen by the main document being versioned. This is useful to update version numbers and version-related information.

## Publishing Events

### Low-Level Events

#### documentProxyPublished

A proxy has been published (or updated).

#### documentProxyUpdated

A proxy has been updated.

#### sectionContentPublished

New content has been published in this section.

### High-Level Events

#### documentPublicationApproved

A document waiting for approval has been approved.

#### documentPublicationRejected

A document waiting for approval has been rejected.

#### documentPublished

A document has been published (event sent for the base document being published and for the published document).

#### documentWaitingPublication

A document has been published but is not approved yet (event sent for the base document being published and for the published document)

&nbsp;
