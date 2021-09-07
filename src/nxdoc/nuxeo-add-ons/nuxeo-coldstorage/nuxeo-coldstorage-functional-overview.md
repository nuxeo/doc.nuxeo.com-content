---
title: Functional Overview
description: Discover Nuxeo coldstorage capabilities.
review:
    comment: ''
    date: ''
    status: ''
labels:
    - coldstorage
    - glacier
    - storage
toc: true
tree_item_index: 100
---

## Coldstorage
The Nuxeo Cold Storage (Glacier) connector is a long term storage solution that allows Nuxeo clients to take advantage of cost savings by using AWS's cold storage tier known as Glacier to store large files and/or less frequently accessed content. 

## Send to Cold Storage
Once the nuxeo rendition of the document is available, the user can trigger the flow by clicking on "send to cold storage" button.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Nuxeo Coldstorage/Send to Coldstorage button
    name: SendToCS1.png
    addins#screenshot#up_to_date
--}}

This will trigger an AWS workflow that will change the class to Glacier class. You can check the details at the [AWS documentation here](https://docs.aws.amazon.com/AmazonS3/latest/userguide/lifecycle-transition-general-considerations.html).

A confirmation toast will be briefly displayed and a banner will be visible on the document stating that the document is processed by Nuxeo Cold Storage.


{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Nuxeo Coldstorage/Send to Coldstorage Confirmation
    name: SendToCS2.png
    addins#screenshot#up_to_date
--}}
![Send to Coldstorage Confirmation](nx_asset://2970838e-c5d6-4438-a0cf-eb2fcf4671f9)

## Send multiple documents to Cold Storage
There's an option to send multiple documents to Cold Storage as long as all of them satisfy the requirements (they are not yet in Cold Storage) and if the user has the rights. Select the files that you want to upload and there will be an action button to move them to Cold Storage.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Nuxeo Coldstorage/Send Multiple To Coldstorage
    name: SendMultipleToCS1.png
    addins#screenshot#up_to_date
--}}
![Send Multiple To Coldstorage](nx_asset://d6f239bd-b830-4b3e-a041-bc23ec2d985c)

## Retrieve from Cold Storage
When the user wants to have temporary access to the full file for download, she can trigger the retrieve flow. It is required that the file is already fully stored in Nuxeo Cold Storage - in other words, the document AWS storage class transitioned to Glacier.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Nuxeo Coldstorage/Restore from coldstorage button
    name: RestoreFromCS1.png
    addins#screenshot#up_to_date
--}}
![Restore from coldstorage button](nx_asset://bd6ceed7-004f-4d78-a0e7-2740b4871ce0)

The user can then trigger the flow by clicking on the restore button. As an asyncronous process, it is expected that it takes some time. An email is sent to the user when the retrieve process is done and also the document will display a banner stating that the retrieve is in process.

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


By default, the file will be available for download for 24h. For now, that value can be changed for all files by adding a configuration to the `nuxeo.conf` file. So, for example, if we want the file available for 48hs, we can add:

```
nuxeo.coldstorage.numberOfDaysOfAvailability.value.default= 2
```

## Restore from Cold Storage
When the user no longer wants the file to be stored in Cold Storage, she can request a restore by clicking on the restore button. The operation is also asynchronous, and the user will be notified via email once it's completed and the banner will disappear. The send to Cold Storage button will be available again.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Nuxeo Coldstorage/Restore from Coldstorage button
    name: RestoreFromCS1.png
    addins#screenshot#up_to_date
--}}
![Restore from Coldstorage button](nx_asset://d81515d8-b0b4-451f-be8b-62832f35862d)

## Delete from Coldstorage
For now, documents under Cold Storage cannot be modified or deleted. If you wish to delete a nuxeo document under Cold Storage, first, restore it, then you'll be able to delete it.