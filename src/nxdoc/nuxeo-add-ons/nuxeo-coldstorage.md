---
title: Nuxeo Cold Storage
description: 'Nuxeo Cold Storage enables users to store large files and/or less frequently accessed content.'
review:
    comment: ''
    date: '2022-02-11'
    status: ok
labels:
    - lts2021-ok
    - mlumeau
    - coldstorage
    - glacier
    - storage
toc: true
tree_item_index: 1100
---

The Nuxeo Cold Storage addon allows you to optimize your costs by storing your archived content into a long-term storage solution that leverages AWS's Glacier service. See [frequently asked questions - principles]({{page page='nuxeo-coldstorage-faq'}}#principles) for additional information around cost principles. Content can be sent individually or in bulk and while under cold storage, content can still be previewed and searched for.

The addon is based on the usage of [Amazon S3 Glacier Flexible Retrieval (formerly Glacier)](https://aws.amazon.com/s3/storage-classes/glacier/) to store cold content.

## Functional Overview

### Send to Cold Storage

Once the Nuxeo rendition of the document is available, the user can trigger the flow by clicking on **Send to cold storage** button.

{{#> callout type='note'}}
Sending content to cold storage requires the dedicated `WriteColdStorage` [permission]({{page page='nuxeo-coldstorage-faq'}}#permissions).
{{/callout}}

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Nuxeo Coldstorage/Send to Coldstorage button
    name: SendToCS1.png
    addins#screenshot#up_to_date
--}}

This will immediately turn the storage class of the document's main file into the Glacier class.

While the file is under cold storage, a low-resolution preview is provided to the users instead of the original file so that users can keep accessing, viewing the content (or a sample of it by default for files with multiple pages) and working with the document. The document remains searchable as well.

For additional details on the rendition used depending on the file type, refer to the [preview file configuration]({{page page='nuxeo-coldstorage-installation'}}#preview-file-configuration) section of the addon installation documentation.

### Send Multiple Documents to Cold Storage

There's an option to send multiple documents to cold storage as long as all of them satisfy the requirements:
- They are not yet in cold storage
- The user has the correct permission

Select the files that you want to upload and there will be an action button to move them to cold storage.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Nuxeo Coldstorage/Send Multiple To Coldstorage
    name: SendMultipleToCS1.png
    addins#screenshot#up_to_date
--}}
![Send Multiple To Coldstorage](nx_asset://d6f239bd-b830-4b3e-a041-bc23ec2d985c)

For moving content in bulk, refer to [frequently asked questions - content ingestion]({{page page='nuxeo-coldstorage-faq'}}#content-ingestion).

### Retrieve from Cold Storage

When the user wants to have temporary access to the full file for download, he/she can trigger the retrieve flow.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Nuxeo Coldstorage/Restore from coldstorage button
    name: RestoreFromCS1.png
    addins#screenshot#up_to_date
--}}
![Restore from coldstorage button](nx_asset://bd6ceed7-004f-4d78-a0e7-2740b4871ce0)

The user can then trigger the flow by clicking on the restore button. As an asynchronous process, it is expected that it takes some time (between 3 and 5 hours). An email is sent to the user when the retrieve process is done and a banner is displayed on the document stating that the retrieve is in process.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Nuxeo Coldstorage/Retrieve from Coldstorage
    name: RetrieveFromCS2.png
    addins#screenshot#up_to_date
--}}
![Retrieve from Coldstorage](nx_asset://d606f54c-7113-4ce6-a319-be5486c40159)

Once the retrieve is completed, the banner will display information about the preview availability and the option to download the content.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Nuxeo Coldstorage/Retrieved from Coldstorage
    name: RetrieveFromCS3.png
    addins#screenshot#up_to_date
--}}
![Retrieved from Coldstorage ](nx_asset://514f7467-bce2-404c-9d76-0864c1869b57)

By default, the file will be available for download for 24h. For now, that value can be changed for all files by adding a configuration to the `nuxeo.conf` file. So, for example, if we want the file available for 48 hours, we can add:

```
nuxeo.coldstorage.numberOfDaysOfAvailability.value.default= 2
```

### Restore from Cold Storage

When you no longer want the file to be stored in cold storage, you can request a restore by clicking on the restore button. The operation is also asynchronous, and the user will be notified via email once it's completed and the banner will disappear. The send to cold storage button will be available again.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Nuxeo Coldstorage/Restore from Coldstorage button
    name: RestoreFromCS1.png
    addins#screenshot#up_to_date
--}}
![Restore from Coldstorage button](nx_asset://d81515d8-b0b4-451f-be8b-62832f35862d)

### Delete from Cold Storage

You can delete a document moved to cold storage as any other document.

## Technical Overview

### Flowchart

**Move to Nuxeo Cold Storage**

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Nuxeo Coldstorage/moveToColdstorageFlowChart
    name: moveToColdstorageFlowChart.jpeg
    addins#screenshot#up_to_date
--}}
![moveToColdstorageFlowChart](nx_asset://4156ced3-b091-4abc-879f-256b4d13825c)


**Retrieve from Nuxeo Cold Storage**

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Nuxeo Coldstorage/retrieveFromColdstorageFlowChart
    name: retrieveFromColdstorageFlowChart.jpeg
    addins#screenshot#up_to_date
--}}
![retrieveFromColdstorageFlowChart](nx_asset://c46c67b6-8cff-4bd6-8c82-0a20a37cc136)

**Restore from Nuxeo Cold Storage**

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Nuxeo Coldstorage/restoreFromColdstorageFlowChart
    name: restoreFromColdstorageFlowChart.jpeg
    addins#screenshot#up_to_date
--}}
![restoreFromColdstorageFlowChart](nx_asset://654c9821-9d0a-4055-8d89-d56aacc50858)

## Learn More

For a deeper look into the specifics of the addon, feel free to take a look at our [frequently asked questions about the cold storage addon]({{page page='nuxeo-coldstorage-faq'}}).
