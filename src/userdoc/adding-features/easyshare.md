---
title: EasyShare
labels:
    - easyshare
    - excerpt
    - multiexcerpt-include
toc: true
confluence:
    ajs-parent-page-id: '11043055'
    ajs-parent-page-title: Adding Features
    ajs-space-key: USERDOC
    ajs-space-name: Nuxeo Platform User Documentation
    canonical: EasyShare
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC/EasyShare'
    page_id: '18451118'
    shortlink: rooZAQ
    shortlink_source: 'https://doc.nuxeo.com/x/rooZAQ'
    source_link: /display/USERDOC/EasyShare
history:
    - 
        author: Solen Guitter
        date: '2015-12-08 17:17'
        message: ''
        version: '20'
    - 
        author: Solen Guitter
        date: '2015-12-08 16:29'
        message: ''
        version: '19'
    - 
        author: Solen Guitter
        date: '2015-12-08 16:27'
        message: 'Easy Share folder now use the collection system '
        version: '18'
    - 
        author: Solen Guitter
        date: '2015-11-26 10:24'
        message: 'NXDOC-658: Marketplace packages are now called Nuxeo Packages'
        version: '17'
    - 
        author: Manon Lumeau
        date: '2015-09-24 09:04'
        message: ''
        version: '16'
    - 
        author: Manon Lumeau
        date: '2014-12-18 13:53'
        message: Formatting
        version: '15'
    - 
        author: Manon Lumeau
        date: '2014-11-03 17:56'
        message: ''
        version: '14'
    - 
        author: Solen Guitter
        date: '2014-06-30 18:00'
        message: ''
        version: '13'
    - 
        author: Solen Guitter
        date: '2014-06-30 17:59'
        message: ''
        version: '12'
    - 
        author: Manon Lumeau
        date: '2014-06-23 10:40'
        message: ''
        version: '11'
    - 
        author: Manon Lumeau
        date: '2014-06-23 10:32'
        message: ''
        version: '10'
    - 
        author: Manon Lumeau
        date: '2014-06-11 15:29'
        message: ''
        version: '9'
    - 
        author: Manon Lumeau
        date: '2014-06-10 18:02'
        message: ''
        version: '8'
    - 
        author: Julien Carsique
        date: '2014-05-22 16:06'
        message: ''
        version: '7'
    - 
        author: Manon Lumeau
        date: '2014-05-22 12:18'
        message: ''
        version: '6'
    - 
        author: Julien Carsique
        date: '2014-05-06 14:26'
        message: ''
        version: '5'
    - 
        author: Alain Escaffre
        date: '2014-05-06 13:31'
        message: ''
        version: '4'
    - 
        author: Mike Obrebski
        date: '2014-03-06 21:55'
        message: ''
        version: '3'
    - 
        author: Mike Obrebski
        date: '2014-03-06 18:15'
        message: ''
        version: '2'
    - 
        author: Mike Obrebski
        date: '2014-03-06 17:40'
        message: ''
        version: '1'

---
{{! excerpt}}The&nbsp; [EasyShare package](https://connect.nuxeo.com/nuxeo/site/marketplace/package/easyshare) is an add-on for the Nuxeo platform to enable sharing files from the repository with external users not requiring a login.{{! /excerpt}}

It enables you to create Easy Share folders in which you can either create document or make them available from the folder for public sharing. Anyone having the public URL to the Easy Share folder can then download its content without having to log in to the Nuxeo Platform.

{{#> callout type='info' }}

The EasyShare plugin is not part of the supported list of Nuxeo Packages. It's been developed for internal use and has been made public for the interest of the Nuxeo community. The reason why it is not supported as is, is that it's highly probable that we add the "share via link" feature to the Collection module. Yet you can safely use it for your own sharing use cases.

{{/callout}}

## Creating an Easy Share Folder

{{{multiexcerpt 'create-document' page='USERDOC:Creating Content'}}}

The Easy Share folder is created. You can now create new documents in it or share existing documents in it.

**Easy Share Folder creation parameters**

<table><tbody><tr><th colspan="1">Field</th><th colspan="1">Description</th></tr><tr><td colspan="1">Title</td><td colspan="1">It will be visible to your recipients in the Easy Share folder public view.</td></tr><tr><td colspan="1">Expiration Date</td><td colspan="1">Determines until which day the Easy Share folder in the&nbsp; will be available.
After this date, the folder will still exist in Nuxeo but will show as expired when attempting external access.</td></tr><tr><td colspan="1"><span class="widgetLabel tipsyShow tipsyGravityNW  ">Active notification</span></td><td colspan="1">If this option is checked, a notification is sent to the contact email when a document is downloaded from the Easy Share folder.</td></tr><tr><td colspan="1">Share Comment</td><td colspan="1">The message displayed on the Easy Share folder public view.</td></tr><tr><td colspan="1">

Contact Email

</td><td colspan="1">

The email address to which an email will be sent each time a document is downloaded.

People who can access the Easy Share folder can also use it to contact someone from the organization.

</td></tr></tbody></table>

## Adding Documents to an Easy Share Folder

The Easy Share folder is a specific type of [collection]({{page page='collections'}}). To add documents to an Easy Share folder, follow the same steps as if to add a document to a collection, by clicking the icon ![]({{file name='add_to_collection.png' page='icons-index'}}) on the document or the Easy Share folder or by clicking the **Add to Collection** button from the workspace Content tab.

Depending on the modules you have enabled on your Nuxeo Platform, you can create the following documents in an Easy Share folder:

*   Files,
*   Pictures,
*   Audio,
*   Videos.

## Sharing an Easy Share Folder

You can share your Easy Share folder by sending the&nbsp;**Public URL** available from theicon **![]({{file name='share.png' page='icons-index'}})**. Anyone with the URL can access the Easy Share folder and download the documents that are in it.

An email alert is sent to the Contact email of the folder each time a file is downloaded.&nbsp;

## Accessing an Easy Share Folder

By clicking on the link to the Easy Share Folder, you access&nbsp;a particular Easy Share folder without having to login to the Nuxeo Platform.

![]({{file name='EasyShare_public_view.png'}} ?w=650,border=true)

## Future Improvements

If you want more information about the future evolutions and improvements, see [this JIRA filter](https://jira.nuxeo.com/issues/?jql=project%20%3D%20NXP%20AND%20resolution%20%3D%20Unresolved%20AND%20component%20%3D%20%22Easy%20Share%22).&nbsp;

* * *

&nbsp;