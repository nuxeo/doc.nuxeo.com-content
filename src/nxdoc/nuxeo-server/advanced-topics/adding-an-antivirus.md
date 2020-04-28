---
title: Adding an Antivirus
review:
    comment: ''
    date: '2017-12-14'
    status: ok
labels:
    - content-review-lts2016
    - antivirus
    - architecture
    - fguillaume
    - nxdoc-744
    - excerpt
    - lts2017-ok
toc: true
confluence:
    ajs-parent-page-id: '950333'
    ajs-parent-page-title: Advanced topics
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Adding+an+Antivirus
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Adding+an+Antivirus'
    page_id: '18448920'
    shortlink: GIIZAQ
    shortlink_source: 'https://doc.nuxeo.com/x/GIIZAQ'
    source_link: /display/NXDOC/Adding+an+Antivirus
tree_item_index: 200
history:
    -
        author: Solen Guitter
        date: '2016-08-31 15:31'
        message: ''
        version: '10'
    -
        author: Alain Escaffre
        date: '2015-12-08 14:29'
        message: ''
        version: '9'
    -
        author: Alain Escaffre
        date: '2015-12-08 14:23'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2015-08-31 14:36'
        message: Update table of contents look
        version: '7'
    -
        author: Solen Guitter
        date: '2014-01-08 13:27'
        message: typo
        version: '6'
    -
        author: Solen Guitter
        date: '2014-01-08 12:32'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2014-01-08 12:30'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2014-01-08 12:29'
        message: Added related topics
        version: '3'
    -
        author: Solen Guitter
        date: '2014-01-08 12:00'
        message: Formatting
        version: '2'
    -
        author: Thierry Martins
        date: '2014-01-08 11:40'
        message: ''
        version: '1'

---
{{! excerpt}}

This is a recurrent demand from our customers. So here is a quick guide to add an antivirus scanner when uploading blobs in Nuxeo documents.

{{! /excerpt}}

## Main Guidelines

One way to implement an antivirus scan for uploaded documents without any significant performance hit at creation time would be to:

1.  configure two `BinaryManager` stores, e.g. `repo-cleared` and `repo-quarantine`,
2.  define an aspect of each blob that specifies whether it is quarantined or not, for instance the MIME type could contain `";quarantined=true"` if the blob is to be quarantined,
3.  configure a `BlobDispatcher` to dispatch blobs to the appropriate `BinaryManager` depending on the value of the MIME type.
4.  optionally define a new facet for documents to contain general information about the quarantine status of the document's blobs, to be reported to the user.

Whenever a new blob is uploaded and attached to a Nuxeo document the `BlobDispatcher` would first delegate the insertion to the `repo-quarantine` instance of `BinaryManager`.

A new Nuxeo synchronous core [event listener]({{page page='events-and-messages'}}) would also react to the `aboutToCreate` or `beforeDocumentModification` event and introspect whether one of the blob fields is dirty. If so, the MIME type of the blob would be updated to add `";quarantined=true"` to mark the new blob as being quarantined for antivirus analysis and a new asynchronous task would be scheduled using the `WorkManager` that would delegate a call to the antivirus service out of transaction and then collect the outcome of the antivirus as follows:

*   If the antivirus outcome is negative (no virus detected): the `WorkManager` task would update the blob's MIME type to remove the `";quarantined=true"`, which would instruct the `BlobDipatcher` to move the blob to the `repo-cleared` `BinaryManager`. The `WorkManager` task could also update the document's specific facet to inform the user (e.g. with a dedicated blob widget) that the document does not contain a suspect blob.

*   If the antivirus outcome is positive (a virus is detected in the attached file), the `WorkManager` task would just update the document facet to inform the user of the outcome of the analysis. The user could then decide to delete the contaminated blob attachment (or the system could be configured to do it automatically).

## Permissions

Furthermore it would be very useful to make the event listener manage a new local ACL that would render documents with blobs in quarantine only visible to the user who uploaded the last blob until it is moved out of quarantine or deleted. This feature would have the following purposes:

*   Never propagate a contaminated blob to other users by denying access to the documents that contain contaminated files.
*   Do not disrupt too much any existing Nuxeo components (e.g. Nuxeo Drive <sup><span class="error">[1](#drive)</span></sup>) that usually expect any uploaded blob in a document to be immediately available.
*   Make it possible for the uploader to introspect the state of the virus analysis by making a custom blob widget.

Implementing such extensions to the Nuxeo platform is possible but might not be easy for non-core Nuxeo developer.

&nbsp;

<sub><span class="error">{{> anchor 'drive'}}1</span>: Such an ACL might still make updated document temporarily look as if deleted to other Nuxeo Drive users while the antivirus analysis is taking place.</sub>

&nbsp;
