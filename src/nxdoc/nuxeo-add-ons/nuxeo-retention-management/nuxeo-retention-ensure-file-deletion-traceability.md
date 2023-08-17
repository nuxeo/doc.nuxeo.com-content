---
title: 'HOWTO: Ensure File Deletion Traceability'
description: Keeping Track of File Deletions to Ensure Compliance
review:
    comment: ''
    date: '2023-08-17'
    status: 'ok'
labels:
    - retention-management
toc: true
tree_item_index: 250
---

## Why Keep Track of File Deletions

Companies working in highly regulated industries like finance may want to prove compliance to an external auditor in multiple ways. Keeping track of file deletions through the audit allows an administrator to prove that the retention policies are effective and that the files contained in their documents are disposed of as needed.

Nuxeo Server will [automatically delete orphan files]({{page page='garbage-collecting-orphaned-blobs'}}) if possible, otherwise a cleanup may be launched on demand. Document deletion events will be kept by default in the audit trail, however traces of identified and deleted orphan files will only be kept by default in the application logs.

If you want to keep events related to orphan files being deleted in your audit trail, this option needs to be explicitly enabled.

## Enabling File Deletion Related Events in the Audit Trail

Two events can be added to the audit trail depending on your needs: 

- `blobCandidateForDeletion` keeps track of files identified as potential orphans
- `blobDeleted` keeps track of actually deleted files

To do so, you need to [add an XML extension]({{page page='how-to-contribute-to-an-extension'}}#contributing-using-nuxeo-studio) in your Nuxeo Studio configuration. Below is an example keeping track of both events that we will explain further:

```
<extension target="org.nuxeo.ecm.platform.audit.service.NXAuditEventsService" point="event">

    <!-- Keep track of potential orphan files 
      Document and file related information is available in this context
    -->
    <event name="blobCandidateForDeletion">
 		<extendedInfos>
          	<extendedInfo expression="${message.blob.digest}" key="fileDigest" />
          	<extendedInfo expression="${message.blob.key}" key="fileKey" />
          	<extendedInfo expression="${message.docId}" key="docID" />
			<extendedInfo expression="${message.xpath}" key="docProperty" />
		</extendedInfos>
	</event>

    <!-- Keep track of actually deleted files 
      Document information is NOT available in this context, 
      the file digest is used to do the mapping with the previous event.
      We recommend keeping keys consistent to facilitate future searches
    -->
	<event name="blobDeleted">
  		<extendedInfos>
          	<extendedInfo expression="${message.blob.digest}" key="fileDigest" />
		</extendedInfos>
	</event>
</extension>
```

Once this configuration is deployed, these events will be tracked automatically.

## Retrieving File Deletion Audit Events

Specific queries can be ran using the usual way to [query the audit]({{page page='audit'}}#querying-the-audit-data-store). Below is a sample entry for a `blobCandidateForDeletion` event using the configuration mentioned previously.

```
{
    "entity-type": "logEntry",
    "id": 118,
    "category": null,
    "principalName": "Administrator",
    "comment": null,
    "docLifeCycle": null,
    "docPath": null,
    "docType": null,
    "docUUID": null,
    "eventId": "blobCandidateForDeletion",
    "repositoryId": null,
    "eventDate": "2023-08-17T13:25:15.018Z",
    "logDate": "2023-08-17T13:25:15.349Z",
    "extended": {
        "docProperty": "content",
        "docID": "e00b6275-2360-42a7-99f5-80844205dc76",
        "fileDigest": "fac3f7076b25949daed669a3cd0fbdff"
    }
}
```

Note that Nuxeo Web UI: 
- Will display these events in the `Administration > Audit` menu, NOT in the document history. The reason is that file deletions are not linked to a document anymore and specific queries are required to do the mapping between the identification and the actual deletion.
- Will not display the extended information by default. This information is available through the REST API response.

## Fine-Tuning the Extended Information

If you wish to adapt the information stored with the event, your configuration can be adjusted by following the [extended audit info guidelines]({{page page='audit'}}#extended-info). The following variables are available:

For both events:

The `message` variable, containing:
- `message.repositoryName`
- `message.blob` (file)
- `message.blob.key`
- `message.blob.providerId`

For the `blobCandidateForDeletion` specifically:
- `message.principal` (username)
- `message.docId` (document id)
- `message.xpath` (document property, applies when a document is edited)
