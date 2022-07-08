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

{{#> callout type='info' heading='What to Expect'}}
This page covers detailed questions about how the cold storage addon works to help you integrating it in your application. It assumes you already read and understood its [installation and general configuration options]({{page page='nuxeo-coldstorage-installation'}}) and its [usage]({{page page='nuxeo-coldstorage'}}).
{{/callout}}

## Compatibility

### What Cloud Platforms can Nuxeo Cold Storage be used with?

{{{multiexcerpt 'cloud-platform-compatibility' page='nuxeo-coldstorage-installation'}}}

## Principles

### What are the Cost Principles for Cold Storage?

Nuxeo Cold Storage is based on [AWS S3 Glacier Flexible Retrieval with standard retrieval option](https://aws.amazon.com/s3/storage-classes/#Flexible_Retrieval).

The general cost principles of cold storage are:
- Storage is cheap
- Retrieval is expensive
- Anything sent to cold storage will be charged a minimum of 90 days of storage

### What is Moved to Cold Storage and what Remains in Regular Storage when Moving Content?

When moving content to cold storage, only the main file attached to the document is sent to cold storage.

All the rest remains in regular storage, including:
- Other attachments in the document (e.g. anything stored in `file:files`).
- Renditions for the main file. [Unless you disabled that option]({{page page='nuxeo-coldstorage-installation'}}#configuration), a default rendition is necessary to provide a preview for the main file (see [preview file configuration]({{page page='nuxeo-coldstorage-installation'}}#preview-file-configuration)), other renditions can be removed using logic when you move the content to save on storage space if you want to.
- Elasticsearch index for the document (including fulltext index for the main file) so that you can keep finding the document in search results.
- Annotations made on the main file if you are using Nuxeo Enhanced Viewer.

### How to Evaluate what Content Should Move or not?

Overall, you should consider that content sent to Cold Storage is meant for archival, because retrieving the content is costly and takes time. It should be seen as an efficient way to save on storage costs for content you want to keep around but that you are unlikely to need anytime soon.

You should also consider that Amazon will charge a minimum file size of 40kb, so you should not send files lower than that size to cold storage. The rule of thumb is that the larger the file is, the more you can save.

## Content Ingestion

### Can I Bulk Import Content Into Cold Storage Directly?

Documents can be moved in bulk to cold storage once they are stored on the platform. It is not possible to import content directly into cold storage. Reason is once the file is moved to cold storage, we cannot access it anymore unless a retrieval is requested. Nuxeo needs to execute some actions first like generating the preview rendition and indexing the content of the main file to provide a good user experience while content is under cold storage before the content can be moved.

### How Can I Move Content in Bulk?

Multiple options are available and can be combined, depending on your situation.

#### Launching a Bulk Action Through the REST API

This option is the best solution if you have large volumes of existing content that need to be migrated to cold storage. It is easy to use at any time, versatile, provides interesting performance and is designed to handle large volumes of documents since it leverages the [bulk action framework]({{page page='bulk-action-framework'}}#bulk-rest-api).

Let's say we want to move documents that are >1MB and, obviously, not already under cold storage (i.e. `SELECT * FROM File WHERE ecm:mixinType <> 'ColdStorage' AND file:content/length > 1048576`), you could use the query below after replacing credentials and the Nuxeo server URL with your own:

    ```
    curl -u Administrator:Administrator \
     -H 'Content-Type: application/json'
     -X POST 'http://localhost:8080/nuxeo/api/v1/search/bulk/moveToColdStorage?query=SELECT%20*%20FROM%20File%20WHERE%20ecm%3AmixinType%20%3C%3E%20%27ColdStorage%27%20AND%20file%3Acontent%2Flength%20%3E%201048576&queryLimit=10000'
    ```

Notice that we are using the `queryLimit` parameter in the example above to limit the number of documents impacted to 10k; it is a good practice to test your changes at a smaller scale first.

#### Using a Scheduler

Once your initial content has been moved to cold storage, you will likely have a need to move smaller batches of documents regularly, and you will want to have this process automated. A typical use case could be "every night, send all documents that are in an archived status, have been last modified more than 2 years ago and that are not under legal hold to cold storage".

Using a scheduled task is a perfect fit for that need. You will first [contribute your event to be scheduled]({{page space='studio' page='scheduling-periodic-events'}}), then either:

##### Use Nuxeo Studio and Automation Logic
- Declare it in the [Nuxeo Studio registries]({{page space='studio' page='registries'}})
- And bind that event to an [event handler]({{page space='studio' page='event-handlers'}})

if you want to leverage automation.

##### Use Java Code
- Write an [event listener]({{page space='nxdoc' page='events-and-messages'}}) using Java code.

Below are some code examples taken from the [Nuxeo Retention addon]({{page page='nuxeo-retention-management'}}) that apply a similar logic: checking regularly for documents that are not under retention anymore and executing a bulk action on them:

- [Scheduled task](https://github.com/nuxeo/nuxeo/blob/10.10/addons/nuxeo-retention/nuxeo-retention-core/src/main/resources/OSGI-INF/retention-schedulers.xml)
- [Listener](https://github.com/nuxeo/nuxeo/blob/10.10/nuxeo-core/nuxeo-core/src/main/java/org/nuxeo/ecm/core/security/RetentionExpiredFinderListener.java)

You can take these examples as a basis to adapt to your own needs, knowing that the bulk action for sending content to cold storage is named `MoveToColdStorageContentAction.ACTION_NAME`.

{{#> callout type='tip' heading='Java VS Automation'}}
Our recommendation is to leverage a bulk action through Java code if you are looking for optimal performance and finer control. Automation provides an easier way to get started using low code tooling.
{{/callout}}

#### Using an Event Listener

Content can also be moved to cold storage gradually on a per event basis, for example when a document reaches a particular state. In that case, you can simply configure an [event handler]({{page space='studio' page='event-handlers'}}) using Nuxeo Studio.

### Can I Configure the Blob Dispatcher to send Content into Cold Storage Directly?

It is not possible to dispatch content into cold storage directly.

Related question: [Can I Bulk Import Content Into Cold Storage Directly](#can-i-bulk-import-content-into-cold-storage-directly)?

### What Happens if I Reindex Content Under Cold Storage?

It is still possible to find the document using a fulltext search after the file has been sent to cold storage. We keep the result of the fulltext extraction in the database, meaning that even if we don't have immediate access to the file anymore, we can rebuild the Elasticsearch index anyway.

## User Experience

### What is the Preview like for a Microsoft Office file, a PDF, an Image, a Video?

{{{multiexcerpt 'preview-file-configuration' page='nuxeo-coldstorage-installation'}}}

### How Long does it Take to Retrieve Content from Cold Storage?

Retrieval takes 3 to 5 hours. Time for restore should be consistent no matter the content type or file size as S3 Glacier is [designed for 35 random restore requests per pebibyte (PiB) stored per day](https://docs.aws.amazon.com/amazonglacier/latest/dev/downloading-an-archive-two-steps.html), which should prove quite sufficient.

### Can I Disable Email Notifications when Restoring Large Volumes of Content?

The architecture of the Nuxeo Cold Storage addon relies on the standard Nuxeo Platform principles, which makes the cold storage service customizable using code. It is possible to disable email
notifications when content is retrieved or to apply a different behavior by overriding the [cold storage service](https://github.com/nuxeo/nuxeo-coldstorage/blob/lts-2021/nuxeo-coldstorage/src/main/java/org/nuxeo/coldstorage/service/ColdStorageServiceImpl.java).

{{#> callout type='tip'}}
If you are not familiar with Nuxeo services yet, see [how to create a service]({{page page='how-to-create-a-service'}}) documentation and the [getting started with Nuxeo development](https://university.hyland.com/learning-paths/l4182) learning path on Hyland University.
{{/callout}}

### Can I Prevent Back and Forth Between Cold Storage and Regular Storage?

Yes, any kind of logic around the process and rules to archive or to restore your content can be achieved using configuration or customization. How to achieve it will derive from the business rules you want to define in your application.

### Can Users Still Find Content in Cold Storage?

Yes. When moving the file to cold storage, we keep the current Elasticsearch index, meaning that anyone can still find the document using a fulltext search for example.

Related question: <a href="#what-happens-if-i-reindex-content-under-cold-storage">What Happens if I Reindex Content Under Cold Storage?</a>

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

<!--
//TODO we should add a generic how-to mentioning how to disable UI actions using Designer and link to it in the answer above (the one we have is very specific), then just mention which buttons are brought by the addon
nuxeo-move-content-to-coldstorage-button
nuxeo-move-contents-to-coldstorage-button
nuxeo-retrieve-content-from-coldstorage-button
nuxeo-restore-content-from-coldstorage-button

Actions are defined [here](https://github.com/nuxeo/nuxeo-coldstorage/blob/lts-2021/nuxeo-coldstorage-web/nuxeo-coldstorage.html#L19)
See how to disable actions: https://doc.nuxeo.com/nxdoc/how-to-disable-trash/
-->

## Audit / Event

### Are there Events Associated to Cold Storage?

Yes. These are the main events you can bind logic to:

| Event                      | Description                                                                                                                      |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `coldStorageContentMoved`    | content has been moved to Cold Storage                                                                                           |
| `coldStorageContentRestored` | content has been retrieved or restored from Cold Storage (can be used to execute background logic on the content being restored) |
| `coldStorageContentAvailable` | content has been retrieve or restored from cold storage (contains properties to send the information email in the context, can be used to fine tune the notification logic) |

[More specific events](https://github.com/nuxeo/nuxeo-coldstorage/blob/cf92ad15b1f89c7e35f41d52e3034c978645b71c/nuxeo-coldstorage/src/main/java/org/nuxeo/coldstorage/ColdStorageConstants.java) are available as well if needed.

### Is there an Audit Trail for Cold Storage Related Actions?

Yes, an audit trail is added by default for Cold Storage related actions.

| Event                         | Action triggering the event                                                           | Additional information                                           |
| ----------------------------- | ------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| Document sent to cold storage | Send document to cold storage                                                         |                                                                 |
| Retrieve requested            | User requests a retrieve                                                              | when a user does the request, not when the retrieve is available |
| Restore requested             | User requests a restore                                                               | when a user does the request, not when the restore is complete   |
| Download cold document        | User downloads the original file (`coldstorage:coldcontent`)                            |                                                                  |
| Download                      | User downloads the preview file (`file:filecontent` of a document sent to cold storage) |                                                                  |

## Compatibility with Other Addons

### Nuxeo Enhanced Viewer

Annotations made on the main file are kept while the content is under cold storage (they are technically stored as separate documents). If you retrieve the file, they will be visible again when the file is restored.

### Nuxeo Retention

{{#> callout type='warning'}}
Nuxeo Cold Storage and Nuxeo Retention currently have limited compatibility. If you intend to send content under retention to cold storage or to put content sent into cold storage under retention, it is recommended to start with the Nuxeo Retention addon and to wait for [NXP-31081](https://jira.nuxeo.com/browse/NXP-31081) in order to leverage cold storage.
{{/callout}}

#### Can I Send Content to Cold Storage after its Retention Period?

Yes, if both addons are installed you can configure a post-retention action to send content automatically to cold storage after its retention period.

#### Is it Possible to Move Content Under Retention to Cold Storage?

Content can only be moved to cold storage after its retention period.

#### Is it Possible to Put Under Retention Content Stored in Cold Storage?

Content that is under cold storage can't be put under retention.

### Nuxeo Drive

#### Synchronization

- **Synchronize documents that are already under Cold Storage**: it will synchronize the "compressed" rendition of it. Restore and/or retrieve actions are available on sychronized document.

- **Send to Cold Storage documents that are already synchronized**: the format and rendition of your document will be updated in your local Nuxeo Drive folder. And if you perform a restore of your document, format and size will go back to original in your local Nuxeo Drive folder.

#### Direct Transfer

You will be able to upload documents to your instance using Direct transfer and then send them to Cold Storage.
