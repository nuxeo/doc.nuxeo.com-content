---
title: LTS 2021.38 / LTS 2021-HF38
description: Discover what's new in LTS 2021.38 / LTS 2021-HF38
review:
   comment: ''
   date: '2023-05-25'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 1950
---

{{! multiexcerpt name='nuxeo-server-updates-2021-38'}}
# What's New in LTS 2021.38 / LTS 2021-HF38

## Fix Deletion of Sub-Documents Where Permissions Are Blocked


Documents with sub-documents where permissions are blocked cannot be deleted.

For a scalable document remove check, new indexes are required for MongoDB backend:
```Java
db.default.createIndex(
   { ecm:acp.acl.grant: 1 }
);
db.default.createIndex(
   { ecm:hasLegalHold: 1 }
);
```
Otherwise, the nuxeo server will attempt to create these indexes if not present at start-up. In the case of an existing instance with large amounts of documents, this process may time out and/or affect performance.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31836](https://jira.nuxeo.com/browse/NXP-31836)

## Make Orphan Binaries GC Scalable


A new Full Garbage Collector is available to clean up orphaned document blobs and is exposed in the management Rest API.

This Full GC implementation leverages the work done for [NXP-31594](https://jira.nuxeo.com/browse/NXP-31594) which contains detailed release notes about limitations.

See [documentation](https://doc.nuxeo.com/rest-api/1/blobs-endpoint/) for more details

Note that, this process is only available on instances working with: 
- repositories having the **ecm:blobKeys** capability (introduced by NXP-29516) 
  and
- blob providers extending BlobStoreBlobProvider such as S3BlobProvider and LocalBlobProvider (in 2021, the default blob provider is **org.nuxeo.ecm.core.blob.binary.DefaultBinaryManager** and is not supported see NXP-31876)


<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28565](https://jira.nuxeo.com/browse/NXP-28565)


# Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/secure/ReleaseNote.jspa?projectId=10011&version=22282) is available in our bug tracking tool.

{{! /multiexcerpt}}
