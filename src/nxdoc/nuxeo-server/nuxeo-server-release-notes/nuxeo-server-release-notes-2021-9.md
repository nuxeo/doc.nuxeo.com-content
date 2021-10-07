---
title: Nuxeo Server LTS 2021.9 / LTS 2021-HF09 Release Notes
description: Discover what's new in LTS 2021.9 / LTS 2021-HF09
review:
   comment: ''
   date: '2021-09-28'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 10000
---

{{! multiexcerpt name='nuxeo-server-updates-2021'}}
# What's New in LTS 2021.9 / LTS 2021-HF09

## Nuxeo Server

### Core Storage

#### Add a configurable TTL to control how long a blob remains in the storage after async key generation {{> tag 'dev'}} {{> tag 'admin'}}

After the asynchronous blob digest computation, the blob's key is changed to its digest by creating a new blob and deleting the old one. It could be a problem if a process is started as soon as the original blob is saved to the final S3 storage.

We can now control with a TTL parameter how long the binary will remain in the storage before being removed by the async digest computation. It can be configured through:
```
  <require>org.nuxeo.ecm.core.blob.BlobManager</require>
  <extension target="org.nuxeo.runtime.ConfigurationService" point="configuration">
    <property name="nuxeo.blobmanager.delete.delay">2h</property>
  </extension>
```
The default is one hour.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30551](https://jira.nuxeo.com/browse/NXP-30551)

#### More reliable bulk action to set blob length into S3 {{> tag 'dev'}} {{> tag 'admin'}}

A new bulk action `s3SetBlobLength` is provided to asynchronously set the blob length into S3.
This new bulk action supersedes the one previously introduced (`s3SetContentLength`).

The `s3SetBlobLength` bulk action is not activated by default this needs to be done explicitly from nuxeo.conf with:
```
binarymanager.bulk.s3SetBlobLength.enabled=true
```

The number of partitions (maximum concurrency at culster level) and the concurrency (per worker node) can be tuned with:
```
binarymanager.bulk.s3SetBlobLength.partitions=4
binarymanager.bulk.s3SetBlobLength.concurrency=2
```

The action will process all blobs of a document unless an XPath filter is provided.
The force flag will always fetch the length from s3 and the document will be updated if the length is different.

Here an example of invocation only on the main blob (file:content) with the force flag and for all document of type File:
```
curl -v -X POST -H "Content-Type: application/json" "localhost:8080/nuxeo/api/v1/search/bulk/s3SetBlobLength?query=SELECT%20*%20FROM%20File" -u Administrator:Administrator -d '{"force": true, "xpath": "content"}'
```

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30624](https://jira.nuxeo.com/browse/NXP-30624)

### Packaging / Distribution / Installation

#### Tomcat 9.0.53 {{> tag 'dev'}} {{> tag 'admin'}}

The Nuxeo Platform now relies on Tomcat 9.0.53.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30605](https://jira.nuxeo.com/browse/NXP-30605)

### Miscellaneous

#### Cleanup temporary folder at startup {{> tag 'admin'}}

It is now possible to automatically clean the temporary folder at Nuxeo Server startup (to reduce storage space and avoid folder saturation).

To enable this feature and so delete the temporary folder at startup, you have to add this property to your nuxeo.conf:
```
nuxeo.startup.clean.tmp.dir=true
```

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-17098](https://jira.nuxeo.com/browse/NXP-17098)

## Major bug fixes

### Document properties override {{> tag 'dev'}}

The merge of document property definition is fixed

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30617](https://jira.nuxeo.com/browse/NXP-30617)

### Update or delete document with multi-valued properties {{> tag 'dev'}}

Concurrent updates and deletes for multi-valued properties is better managed with MongoDB.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30542](https://jira.nuxeo.com/browse/NXP-30542)

### Only 1 email notification sent per comment

With some specific configuration on Nuxeo Server, clients received multiple notifications (3 mails) per comment created.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30131](https://jira.nuxeo.com/browse/NXP-30131)

### Download a list of documents as a Zip file creates a Zip of Zip

The download all as a Zip feature action used to create a double Zip.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30493](https://jira.nuxeo.com/browse/NXP-30493)

### Retention addon - Edit and delete a record after retention period or legal hold

Due to the versioning issue, only the creator of a record could edit or delete the document after expiration or legal hold. All granted users can do it now.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30453](https://jira.nuxeo.com/browse/NXP-30453)

### JSF addon - Different upload paths in JSF lead to different mime-types for XML binaries

XML binaries are now always created with the same MIME type, whatever the way it has been uploaded into JSF.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30494](https://jira.nuxeo.com/browse/NXP-30494)

### WOPI addon - Fix WOPI version when blob is updated

The WOPI version (user change token) is now updated accordingly to the blob file, even if the document blob is updated directly into Nuxeo.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30585](https://jira.nuxeo.com/browse/NXP-30585)

### IMAP Connector addon - Fix PDF preview and rendition of Mail document

HTML preview (based on the PDF rendition) and PDF rendition of Mail documents previoulsy always produced the same PDF, the first one that got generated since the Nuxeo Platform startup.

PDF preview and rendition of Mail document is now fixed and provide the accurate PDF rendition.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30598](https://jira.nuxeo.com/browse/NXP-30598)

# Learn more

[More information about released changes and fixed bugs](https://jira.nuxeo.com/secure/ReleaseNote.jspa?projectId=10011&version=21481) is available in our bug tracking tool.

{{#> callout type='info' heading='Upgrade Notes'}}
Refer to the [LTS 2021.1 upgrade notes]({{page page='upgrade-from-lts-2019-to-lts-2021'}}) to transition to this version.
{{/callout}}

{{! /multiexcerpt}}
