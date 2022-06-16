---
title: Cold Storage FAQ
description: Frequently Asked Questions about the Nuxeo Cold Storage addon.
review:
    comment: ''
    date: ''
    status: ''
labels:
    - storage
    - glacier
    - coldstorage
toc: true
tree_item_index: 350
---

{{#> callout type='tip'}}
This page covers detailed questions about how the cold storage addon works to help you integrating it in your application. It assumes you already read and understood its [installation and general configuration options](({{page page='nuxeo-coldstorage-installation'}})).
{{/callout}}

## Compatibility

### What Cloud Platforms can Nuxeo Cold Storage be used with?

{{{multiexcerpt 'cloud-platform-compatibility' page='nuxeo-coldstorage-installation'}}}

## Principles

### What are the Cost Principles for Cold Storage?

Nuxeo Cold Storage is based on [AWS S3 Glacier Flexible Retrieval with standard retrieval option](https://aws.amazon.com/s3/storage-classes/#Flexible_Retrieval)

The general cost principles of cold storage are:
- Storage is cheap
- Retrieval is expensive
- Anything sent to cold storage will be charged a minimum of 90 days of storage

### What is Moved to Cold Storage and what Remains in Regular Storage when Moving Content?

When moving content to cold storage, the main file attached to the document is sent to cold storage.

All the rest remains in regular storage, including:
- Other attachments in the document (e.g. anything stored in `file:files`).
- Renditions for the main file. A default rendition is necessary to provide a preview for the main file (see [preview file configuration]({{page page='nuxeo-coldstorage-installation'}}#preview-file-configuration)), other renditions can be removed using logic when you move the content to save on storage space if you want to.
- Elasticsearch index for the document (including fulltext index for the main file) so that you can keep finding the document in search results.
- Annotations made on the main file if you are using Nuxeo Enhanced Viewer.

### How can I Evaluate what Content I Should Move or not?

The main reasons for sending content to cold storage are:
- When you are storing large files (e.g. high resolution videos) and you do not need the original high resolution file to get the work done
- Archiving content

You should consider a minimum file size for the main file to be moved as well:
- For each file moved, Amazon charges 8kb of metadata at regular storage price (S3), and 32kb at glacier price

//TODO sample calculation? what's the minimum file size that makes it valid?



## Content Ingestion

### Can I Bulk Import Content Into Cold Storage Directly?

Documents can be moved in bulk to cold storage once they are stored on the platform. It is not possible to import content directly into cold storage. Reason is once the file is moved to cold storage, we cannot access it anymore unless a retrieval is requested. Nuxeo needs to execute some actions first like generating the preview rendition and indexing the content of the main file to provide a good user experience while content is under cold storage before the content can be moved.

### Can I Configure the Blob Dispatcher to send Content into Cold Storage Directly?

//TODO explain if it's possible to do. Can mention same reasons as above if not.

## User Experience

### What is the Preview like for a Microsoft Office file, a PDF, an Image, a Video?

{{{multiexcerpt 'preview-file-configuration' page='nuxeo-coldstorage-installation'}}}

## How Long does it Take to Retrieve Content from Cold Storage?

Retrieval takes 3 to 5 hours. Time for restore should be consistent no matter the content type or file size as S3 Glacier is [designed for 35 random restore requests per pebibyte (PiB) stored per day](https://docs.aws.amazon.com/amazonglacier/latest/dev/downloading-an-archive-two-steps.html), which should prove quite sufficient.

//TODO check if there is a retrieval policy in place https://docs.aws.amazon.com/amazonglacier/latest/dev/data-retrieval-policy.html

## Can I Disable Email Notifications when Restoring Large Volumes of Content?

The architecture of the cold storage addon relies on the standard Nuxeo Platform principles, which makes the cold storage service customizable using code. It is possible to disable email
notifications when content is retrieved or to apply a different behavior by overriding the [cold storage service](https://github.com/nuxeo/nuxeo-coldstorage/blob/lts-2021/nuxeo-coldstorage/src/main/java/org/nuxeo/coldstorage/service/ColdStorageServiceImpl.java).

{{#> callout type='tip'}}
If you are not familiar with Nuxeo services yet, see [how to create a service]({{page page='how-to-create-a-service'}}) documentation and the [getting started with Nuxeo development](https://university.hyland.com/learning-paths/l4182) learning path on Hyland University.
{{/callout}}

## Can I Prevent Back and Forth Between Cold Storage and Regular Storage?

Yes, any kind of logic around the process and rules to archive or to restore your content can be achieved using configuration or customization. How to achieve it will derive from the business rules you want to define in your application.

## Is there an Audit Trail for Cold Storage Related Actions?

Yes, an audit trail is added by default for cold storage related actions.

//TODO add content of https://jira.nuxeo.com/browse/NXP-30779 here as a nice table

## Permissions

### What Permissions are Needed to Send Content into Cold Storage / Retrieve Content from Cold Storage?

| Action                                                         | Related permission              |
| -------------------------------------------------------------- | ------------------------------- |
| Sending content into cold storage                              | `WriteColdStorage`              |
| Retrieving content temporarily from cold storage               | `Read`                          |
| Restoring content permanently from cold storage                | `WriteColdStorage`              |

The `WriteColdStorage` permission is a new permission brought by the addon, that needs to be granted manually by default and includes the `Read` and `Write` permissions.

Should you wish to adapt the permissions displayed in Web UI or configure them in a more suitable / granular manner for your project, you can take our [HOWTO: Grant the Edit Permission without the Remove Permission]({{page page='how-to-grant-the-edit-permission-without-the-remove-permission'}}) documentation as a basis and adapt it to your needs.

### Can I Implement Safeguards to Avoid too Frequent / too Large Retrievals?

Yes. All operations to send content to cold storage or retrieve it are available as [automation operations]({{page page='content-automation-concepts'}}#operation) and there are multiple ways to adapt the behavior to your needs. Some options are disabling the default buttons in the UI, [restricting the usage of these operations to specific user groups]({{page page='advanced-settings' space='studio'}}#web-services-filtering), creating new buttons to handle these operations and associating them to an approval workflow, or a combination of these.

//TODO we should add a generic how-to mentioning how to disable UI actions using Designer and link to it in the answer above (the one we have is very specific), then just mention which buttons are brought by the addon
nuxeo-move-content-to-coldstorage-button
nuxeo-move-contents-to-coldstorage-button
nuxeo-retrieve-content-from-coldstorage-button
nuxeo-restore-content-from-coldstorage-button

## How Can I Move Content in Bulk?

Multiple options are available and can be combined.

- Using a bulk action //TODO link to something or explain
- Using a scheduler (e.g., every night, send all documents that have been modified more than 2 years ago and that are not under legal hold to cold storage)
- Triggered manually or using the REST API //TODO mention which endpoints are recommended. Maybe we don't want people to use the Bulk.Run operation for that
- Using an event listener //TODO link to documentation

//TODO provide our recommendations, especially for bulk (need guidance from devs)

## Are there Events Associated to Cold Storage?

Yes. These are the main events you can bind logic to:

//TODO format as a nice table

- coldStorageContentMoved: content has been moved to cold storage
- coldStorageContentRestored: content has been retrieved or restored from cold storage (can be used to execute background logic on the content being restored)
- coldStorageContentAvailable: content has been retrieve or restored from cold storage (contains properties to send the information email in the context, can be used to fine tune the notification logic)

[More specific events](https://github.com/nuxeo/nuxeo-coldstorage/blob/cf92ad15b1f89c7e35f41d52e3034c978645b71c/nuxeo-coldstorage/src/main/java/org/nuxeo/coldstorage/ColdStorageConstants.java) are available as well if needed.

## How does Cold Storage Behave in Combination with Other Addons?

### Nuxeo Enhanced Viewer

Annotations made on the main file are kept while the content is under cold storage (they are technically stored as separate documents). If you retrieve the file, they will be visible again when the file is restored.

### Nuxeo Retention

### Is it Possible to Move Content Under Retention to Cold Storage?

Yes, and any content you send to cold storage using automated actions applies to content under retention as well unless you specifically exclude it. From Web UI, the actions to move content to cold storage are disabled by default when content is under retention however; this can easily be changed using Nuxeo Studio.

//TODO we should change that now that we are only changing the storage class and disable send to cold sto only if content is under legal hold: in that case you need the content at the ready. Restore should still be available in that case.

### Can I Send Content to Cold Storage after its Retention Period?

Yes, if both addons are installed you can configure a post-retention action to send content automatically to cold storage after its retention period.

### Nuxeo Drive

//TODO Manon? Help please!

What we want to know:
- what happens when my content is in sync and it's moved to cold sto: should be replaced with the preview (should be standard behavior, just like if the file was replaced)
- any other consequence you could think of that's worth mentioning
