---
title: Adding an Antivirus
review:
    comment: ''
    date: ''
    status: ok
labels:
    - antivirus
toc: true
confluence:
    ajs-parent-page-id: '17334399'
    ajs-parent-page-title: Advanced topics
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Adding+an+Antivirus
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/Adding+an+Antivirus'
    page_id: '18448932'
    shortlink: JIIZAQ
    shortlink_source: 'https://doc.nuxeo.com/x/JIIZAQ'
    source_link: /display/NXDOC58/Adding+an+Antivirus
history:
    - 
        author: Solen Guitter
        date: '2016-08-31 15:30'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2014-01-08 13:29'
        message: ''
        version: '1'

---
<div class="row"><div class="column medium-8">{{! excerpt}}

This is a recurrent demand from our customers. So here is a quick guide to add an antivirus scanner when uploading blobs in Nuxeo documents.

{{! /excerpt}}</div><div class="column medium-4">{{#> panel heading='In this section'}}

{{/panel}}</div></div>

<div class="action-body flooded">

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
*   Do not disrupt too much any existing Nuxeo components (e.g. Nuxeo Drive <sup><span class="error">[1](#drive)</span></sup>) that usually expect any uploaded blob in a document to be immediately available.
*   Make it possible for the uploader to introspect the state of the virus analysis by making a custom blob widget.

The management of the dynamic facet, the ACL and the call to the `giveClearance` method should be wrapped in a single `AntivirusVirusAware` document adapter to abstract away all those operations in a simple and clean public API.

Implementing such extensions to the Nuxeo platform is possible but might not be easy for non-core Nuxeo developer.

<sub><span class="error">{{> anchor 'drive'}}1</span>: Such an ACL might still make updated document temporarily look as if deleted to other Nuxeo Drive users while the antivirus analysis is taking place.</sub>

&nbsp;

</div>