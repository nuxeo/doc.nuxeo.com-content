---
title: Garbage-Collecting Orphaned Binaries
review:
    comment: ''
    date: ''
    status: ok
labels:
    - delete
toc: true
confluence:
    ajs-parent-page-id: '21921914'
    ajs-parent-page-title: Monitoring and Maintenance
    ajs-space-key: ADMINDOC60
    ajs-space-name: Nuxeo Installation and Administration — 6.0
    canonical: Garbage-Collecting+Orphaned+Binaries
    canonical_source: >-
        https://doc.nuxeo.com/display/ADMINDOC60/Garbage-Collecting+Orphaned+Binaries
    page_id: '23365034'
    shortlink: qoVkAQ
    shortlink_source: 'https://doc.nuxeo.com/x/qoVkAQ'
    source_link: /display/ADMINDOC60/Garbage-Collecting+Orphaned+Binaries
tree_item_index: 1100
history:
    -
        author: Julien Carsique
        date: '2015-01-23 17:16'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2015-01-23 14:02'
        message: Remove 7.2 content
        version: '3'
    -
        author: Solen Guitter
        date: '2015-01-23 14:01'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2015-01-23 14:00'
        message: ''
        version: '1'

---
{{! excerpt}}

The binary files attached to documents are not stored in the database but using a specialized binary store (typically filesystem-based or S3), and are not removed like documents (see [Deleting Documents]({{page space='nxdoc60' page='deleting-documents'}})).

{{! /excerpt}}

Binary files are not immediately deleted when their containing document is deleted because the binary store uses a de-duplication strategy which means that the same binary file may be referenced by several documents. To avoid complex locking or reference counting strategies, they are simply garbage-collected when there remains no reference to them (they are orphaned).

## Manually (using the Web interface)

The garbage collection is done by an explicit administration step:

1.  Go to **Admin** > **System Information** > **Repository binaries**.
2.  Check the **Delete orphaned binaries** check box. If you just want to gather statistics about what it going to be deleted, don't check this box and go next step.
3.  Click on **Mark orphaned binaries**.

## Programmatically (Using the Nuxeo Shell or Java Code)

##### https://github.com/nuxeo/nuxeo/blob/master/nuxeo-distribution/nuxeo-distribution-resources/src/main/resources/templates-tomcat/common-base/client/scripts/deleteOrphanBinaries.groovy
```java
import org.nuxeo.ecm.core.storage.binary.BinaryManagerStatus;
import org.nuxeo.ecm.core.storage.sql.management.SQLRepositoryStatus;
import org.nuxeo.ecm.core.storage.sql.management.SQLRepositoryStatusMBean;
SQLRepositoryStatusMBean status = new SQLRepositoryStatus();
if (!status.isBinariesGCInProgress()) {
    BinaryManagerStatus binaryManagerStatus = status.gcBinaries(true);
    println("Orphaned binaries garbage collecting result: " + binaryManagerStatus.getNumBinariesGC());
} else {
    println("Orphaned binaries garbage collecting is already in progress.");
}
```

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

*   [Deleting Content]({{page space='userdoc60' page='deleting-content'}}) (User documentation)
*   [Managing Deleted Documents]({{page space='userdoc60' page='managing-deleted-documents'}}) (User documentation)
*   [Deleting Documents]({{page space='nxdoc60' page='deleting-documents'}}) (Developer documentation)
*   [How to Enable the Trash Feature]({{page space='nxdoc60' page='how-to-enable-the-trash-feature'}}) (Developer documentation)

{{/panel}}</div><div class="column medium-6">

</div></div>
