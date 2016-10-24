---
title: Garbage-Collecting Orphaned Binaries
review:
    comment: ''
    date: '2015-12-01'
    status: ok
labels:
    - delete
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
    'LTS 2015': 710/admindoc/garbage-collecting-orphaned-binaries
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

The binary files attached to documents are not stored in the database but using a specialized binary store (typically filesystem-based or S3), and are not removed like documents (see [Deleting Documents]({{page page='deleting-documents'}})).

{{! /excerpt}}

&nbsp;

Binary files are not immediately deleted when their containing document is deleted because the binary store uses a de-duplication strategy which means that the same binary file may be referenced by several documents. To avoid complex locking or reference counting strategies, they are simply garbage-collected when there remains no reference to them (they are orphaned).

## Manually - Using the Web interface

The garbage collection is done by an explicit administration step:

1.  Go to **Admin** > **System Information** > **Repository binaries**.
2.  Check the <span style="color: rgb(68,68,68);">**Delete orphaned binaries** check box. If you just want to gather statistics about what it going to be deleted, don't check this box and go next step.
    </span>
3.  Click on **Mark orphaned binaries**.

## Programmatically - Using the Nuxeo Shell or Java Code

##### https://github.com/nuxeo/nuxeo/blob/master/nuxeo-distribution/nuxeo-distribution-resources/src/main/resources/templates-tomcat/common-base/client/scripts/deleteOrphanBinaries.groovy
```java
import org.nuxeo.ecm.core.storage.binary.BinaryManagerStatus;
import org.nuxeo.ecm.core.storage.sql.management.SQLRepositoryStatus;
import org.nuxeo.ecm.core.storage.sql.management.SQLRepositoryStatusMBean;
SQLRepositoryStatusMBean status = new SQLRepositoryStatus();
if (!status.isBinariesGCInProgress()) {
    BinaryManagerStatus binaryManagerStatus = status.gcBinaries(true);
    println("Orphaned binaries garbage collecting result: " + binaryManagerStatus);
} else {
    println("Orphaned binaries garbage collecting is already in progress.");
}
```

Since Nuxeo 7.2, the script file is available in&nbsp;`$NUXEO_HOME/client/scripts/deleteOrphanBinaries.groovy`.


* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [Deleting Content]({{page space='userdoc' page='deleting-content'}}) (User documentation)
- [Deleting Documents]({{page page='deleting-documents'}})
- [How to Enable the Trash Feature]({{page page='how-to-enable-the-trash-feature'}})

{{/panel}}</div><div class="column medium-6">
</div></div>
