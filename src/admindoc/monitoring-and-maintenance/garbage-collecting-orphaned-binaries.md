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
    ajs-parent-page-id: '16810080'
    ajs-parent-page-title: Monitoring and Maintenance
    ajs-space-key: ADMINDOC58
    ajs-space-name: Nuxeo Installation and Administration - 5.8
    canonical: Garbage-Collecting+Orphaned+Binaries
    canonical_source: >-
        https://doc.nuxeo.com/display/ADMINDOC58/Garbage-Collecting+Orphaned+Binaries
    page_id: '23365041'
    shortlink: sYVkAQ
    shortlink_source: 'https://doc.nuxeo.com/x/sYVkAQ'
    source_link: /display/ADMINDOC58/Garbage-Collecting+Orphaned+Binaries
history:
    - 
        author: Julien Carsique
        date: '2015-01-23 17:20'
        message: ''
        version: '3'
    - 
        author: Solen Guitter
        date: '2015-01-23 14:07'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2015-01-23 14:05'
        message: ''
        version: '1'

---
<div class="row"><div class="column medium-8">{{! excerpt}}

The binary files attached to documents are not stored in the database but using a specialized binary store (typically filesystem-based or S3), and are not removed like documents (see [Deleting Documents]({{page space='nxdoc58' page='deleting-documents'}})).

{{! /excerpt}}

Binary files are not immediately deleted when their containing document is deleted because the binary store uses a de-duplication strategy which means that the same binary file may be referenced by several documents. To avoid complex locking or reference counting strategies, they are simply garbage-collected when there remains no reference to them (they are orphaned).

## Manually (using the Web interface)

The garbage collection is done by an explicit administration step:

1.  Go to **Admin** > **System Information** > **Repository binaries**.
2.  Check the **Delete orphaned binaries** check box. If you just want to gather statistics about what it going to be deleted, don't check this box and go next step.
3.  Click on **Mark orphaned binaries**.

## Programmatically (Using the Nuxeo Shell or Java Code)

{{#> panel type='code' heading='https://github.com/nuxeo/nuxeo/blob/master/nuxeo-distribution/nuxeo-distribution-resources/src/main/resources/templates-tomcat/common-base/client/scripts/deleteOrphanBinaries.groovy'}}

```java
import org.nuxeo.ecm.core.storage.sql.management.RepositoryStatus;
RepositoryStatus status = new RepositoryStatus();
if (!status.isBinariesGCInProgress()) {
    status.gcBinaries(true);
}
```

{{/panel}}</div><div class="column medium-4">{{#> panel heading='In this section'}}

{{/panel}}</div></div>

&nbsp;

* * *