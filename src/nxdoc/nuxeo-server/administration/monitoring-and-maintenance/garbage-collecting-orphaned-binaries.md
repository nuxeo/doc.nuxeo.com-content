---
title: Garbage-Collecting Orphaned Binaries
review:
    comment: ''
    date: '2019-03-14'
    status: ok
labels:
    - lts2016-ok
    - delete
    - fguillaume
    - lts2017-ok
    - lts2019-ok
toc: true
confluence:
    ajs-parent-page-id: '950318'
    ajs-parent-page-title: Monitoring and Maintenance
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Garbage-Collecting+Orphaned+Binaries
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Garbage-Collecting+Orphaned+Binaries'
    page_id: '23365028'
    shortlink: pIVkAQ
    shortlink_source: 'https://doc.nuxeo.com/x/pIVkAQ'
    source_link: /display/NXDOC/Garbage-Collecting+Orphaned+Binaries
tree_item_index: 1000
version_override:
    LTS 2015: 710/admindoc/garbage-collecting-orphaned-binaries
    '6.0': 60/admindoc/garbage-collecting-orphaned-binaries
    '5.8': 58/admindoc/garbage-collecting-orphaned-binaries
history:
    -
        author: Manon Lumeau
        date: '2016-06-09 14:00'
        message: ''
        version: '6'
    -
        author: Manon Lumeau
        date: '2016-03-29 09:47'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2015-12-08 14:24'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2015-08-31 15:02'
        message: Fix broken anchors
        version: '3'
    -
        author: Julien Carsique
        date: '2015-02-16 13:33'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2015-01-23 13:58'
        message: ''
        version: '1'
---

{{! excerpt}}
The binary files attached to documents are not stored in the database but using a specialized binary store (typically filesystem-based or S3), and are not removed like documents (see [Trash Service]({{page page='trash-service'}})).
{{! /excerpt}}

Binary files are not immediately deleted when their containing document is deleted because the binary store uses a de-duplication strategy which means that the same binary file may be referenced by several documents. To avoid complex locking or reference counting strategies, they are simply garbage-collected when there remains no reference to them (they are orphaned).

## Usage with the Nuxeo Shell or Java Code

```java
import org.nuxeo.ecm.core.blob.DocumentBlobManager;
import org.nuxeo.ecm.core.blob.binary.BinaryManagerStatus;

DocumentBlobManager docBlobManager = Framework.getService(DocumentBlobManager.class);
if (!docBlobManager.isBinariesGarbageCollectionInProgress()) {
    BinaryManagerStatus binaryManagerStatus = docBlobManager.garbageCollectBinaries(true);
    println("Orphaned binaries garbage collecting result: " + binaryManagerStatus);
} else {
    println("Orphaned binaries garbage collecting is already in progress.");
}

```

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [Deleting Content]({{page space='userdoc' page='content-delete'}}) (User documentation)
- [Trash Service]({{page page='trash-service'}})
- [How to use Trash Feature]({{page page='how-to-use-trash-feature'}})

{{/panel}}</div><div class="column medium-6">
</div></div>
