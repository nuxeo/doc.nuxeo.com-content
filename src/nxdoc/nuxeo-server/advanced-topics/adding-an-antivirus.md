---
title: Adding an Antivirus
labels:
    - antivirus
    - architecture
    - nxdoc-744
    - excerpt
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
history:
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
<div class="action-body flooded">{{! excerpt}}

This is a recurrent demand from our customers. So here is a quick guide to add an antivirus scanner when uploading blobs in Nuxeo documents.

{{! /excerpt}}

## Main Guidelines

One way to implement an antivirus scan for uploaded documents without any significant performance hit at creation time would be to:

1.  implement a new `QuarantineBinaryManager` that would wrap a two instances of `BinaryManager` configured to use two distinct repositories, e.g. `repo-cleared` and r`epo-quarantine;`
2.  introduce a new dynamic facet with a schema that can store antivirus status and metadata of all the blobs stored on the document.

Whenever a new blob is uploaded and attached to a Nuxeo document the `QuarantineBinaryManager` would first delegate the insertion to the `repo-quarantine` instance of `BinaryManager`.

A new Nuxeo synchronous core [event listener]({{page page='events-and-listeners'}}) would also react to the `aboutToCreate` or `beforeDocumentModification` event and introspect whether one of the blob fields is dirty. If so, the dynamic facet of the document would be updated to mark the new blob as being quarantined for antivirus analysis and a new asynchronous task would be scheduled using the `WorkManager` that would delegate a call to the antivirus service out of transaction and then collect the outcome of the antivirus as follows:

*   If the antivirus outcome is negative (no virus detected): the `WorkManager` task would call a new public method of `QuarantineBinaryManager`, for instance named `QuarantineBinaryManager#giveClearance(String blobDigest)`. This method would physically move the blob from the `repo-quarantine` bucket to the `repo-cleared`. The `WorkManager` task would also update the document dynamic facet to inform the user (e.g. with a dedicated blob widget) that the document does not contain a suspect blob.

*   If the antivirus outcome is positive (a virus is detected in the attached file): the `WorkManager` task would not call the `giveClearance` method and instead just update the metadata fields of the dynamic facet schema to inform the user of the outcome of the analysis. The user could then decide to delete the contaminated blob attachment (or the system could be configured to do it automatically).

## Permissions

Furthermore it would be very useful to make the event listener manage a new local ACL that would render documents with blobs in quarantine only visible to the user who uploaded the last blob until it is moved out of quarantine or deleted. This feature would have the following purposes:

*   Never propagate a contaminated blob to other users by denying access to the documents that contain contaminated files.
*   Do not disrupt too much any existing Nuxeo components (e.g. Nuxeo Drive<sup><span class="error">[1](#drive)</span></sup>) that usually expect any uploaded blob in a document to be immediately available.
*   Make it possible for the uploader to introspect the state of the virus analysis by making a custom blob widget.

The management of the dynamic facet, the ACL and the call to the `giveClearance` method should be wrapped in a single `AntivirusVirusAware` document adapter to abstract away all those operations in a simple and clean public API.

Implementing such extensions to the Nuxeo platform is possible but might not be easy for non-core Nuxeo developer.

{{#> callout type='note' }}

The software architecture of binary management has slightly changed. Instead of a binary manager, one should think of a custom Blob Dispatcher. Furthermore, it would make sense in this new architecture to introduce this as a feature of the Blob Manager service.

{{/callout}}

&nbsp;

<sub><span class="error">1</span>: Such an ACL might still make updated document temporarily look as if deleted to other Nuxeo Drive users while the antivirus analysis is taking place.</sub>

* * *

&nbsp;

</div>