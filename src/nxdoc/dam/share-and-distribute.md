---
title: Share & Distribute
review:
    comment: ''
    date: '2019-09-18'
    status: ok
labels:
    - DAM
tree_item_index: 400
toc: true
---

## Collections

{{{multiexcerpt name='definition-collection' page='userdoc/collections-web-ui'}}}

![]({{file name='collections-tab-web-ui.png' version='1010' space='userdoc' page='collections-web-ui'}} ?w=250,border=true)

A collection can be shared with other users, it means [giving permissions]({{page space='userdoc' page='permissions'}}) to specific users on the collection. Collections created in the default domain in a shared workspace or folder are automatically shared to all the workspace or folder's users, following the [rights inheritance principle]({{page space='userdoc' page='permissions'}}#blocking-rights-inheritance).

Collections created in your personal workspace are private by default. You must grant the needed permissions on the collection if you want to share it. Granting permissions to a collection makes the collection available to users from their Home. The list of documents displayed inside the collection depends on the permissions of the user on each of the documents.

{{multiexcerpt 'collecting-rights' page='userdoc/collections-web-ui'}}

##  Renditions

Renditions are alternative representations of a document, or its content such as:

*   A PDF representation of office files
*   A watermarked image
*   A resized video
*   An XML export of the document
*   ...

In the Nuxeo Platform, renditions are used for exports. Users can export documents on their computer one at a time or an entire workspace, folder or section.

Read the [Renditions]({{page version='' space='nxdoc' page='renditions'}}) page for more information.

##  Watermarks

A watermark is an image, or a text, that is placed on an asset, so that the original file is not completely visible anymore. Watermarking are particularly useful in marking assets for review, ensuring that assets which aren’t approved or properly licensed don’t end up improperly distributed or incorporated into other works.

![]({{file name='watermark_video.png'}} ?w=550,border=true)

Nuxeo Platform gives access to a huge number of [watermarking operations]({{page version='' space='nxdoc' page='digital-asset-management-dam'}}#add-a-photo-watermark-to-a-video), which can be applied on office documents, images and even videos. These operations can be accessible either from the user interface or programmatically.

![]({{file name='dam_operation_watermark.png'}} ?w=300,border=true)

## Publish assets

 DAM platforms are designed to organize valuable media files such as logos, presentations or other brand assets. These assets are meant to be published in any web application. For example, a company may want to embed an image or a video stored in the DAM platform to stream it in an article. More generally, the goal is to deliver content into digital publication channels to improve the user experience.

 Nuxeo provides an extensive [REST API]({{page version='' space='nxdoc' page='rest-api'}}) to deliver any asset stored in the repository. Thanks to [document enrichers]({{page version='' space='nxdoc' page='content-enrichers'}}), you can access directly a thumbnail view of your high resolution picture in a single call. In addition, Nuxeo Platform can easily export any content on any storage unit, either on local servers or in the cloud (on S3 for example). Another alternative to publish assets (without authentication) would be to use our [Easyshare addon]({{page version='' space='nxdoc' page='easyshare'}}) so that anyone can view and download a list of assets in a minute.

## Security and access

Document security is a high concern for any company using a DAM application. Compliance requirements for certain assets can be quite complex depending on the type of documents and your business logic. Nuxeo provides a granular security model to ensure the assets follow the corporate security policy and track any event. Here is a list of the main security features available in the platform:

- [Instant share]({{page version='' space='userdoc' page='permissions'}}#granting-permissions-to-external-users-instant-share) allows you to share documents and folders with people that don't usually have access to the application, using their email.
- [The Nuxeo Security Policy Service]({{page version='' space='nxdoc' page='security-policy-service'}}) implements a custom security logic based on the asset properties: A document tagged as "Confidential" should be accessible only to a particular list of users for example.
- [Audits]({{page version='' space='nxdoc' page='audit'}}) list all the events linked to any content, from its creation. The Nuxeo Platform audits by default an important number of event (document creation, modification, updates on security access, deletion, authentication...). They are customizable and some particular events can be audit to the regular Nuxeo audit track.
- [Binary encryption]({{page version='' space='nxdoc' page='implementing-encryption'}}) can be implemented at a lower level with AES encryption or S3 encryption.

## Intellectual Property

DAM companies need to control their intellectual property (or IP) and run their document control function in a highly efficient manner. Nuxeo Platform handles IP thanks to its powerful workflow engine to control the review and approval. IP can also be managed by watermark operation, it is really useful in protecting copyright because they help to prove the origin of a digital asset, and discourage the creation of illegal digital asset copies. Finally, you can also create a specific schema to store copyrights or any IP information.

![]({{file name='dam_ip.png'}} ?w=600,border=true)
