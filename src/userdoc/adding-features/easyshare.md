---
title: EasyShare
review:
    comment: ''
    date: '2017-12-12'
    status: ok
labels:
    - easyshare
    - excerpt
    - multiexcerpt-include
    - lts2017-ok
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
tree_item_index: 200
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
{{! excerpt}}
The [EasyShare package](https://connect.nuxeo.com/nuxeo/site/marketplace/package/easyshare) is an addon for the Nuxeo platform which enables sharing files from the repository with external users not requiring a login.
{{! /excerpt}}

It allows you to create EasyShare folders in which you can either create documents or make them available from the folder for public sharing. Anyone having the public URL to the EasyShare folder can then download its content without having to log in to the Nuxeo Platform.

## Creating an EasyShare Folder

1.  Navigate to a Workspace and click on the **New** button, then click on EasyShare Folder in the pop-up.
2.  Fill in the Folder's creation form and click on the **Create** button.

    **EasyShare Folder creation parameters**

    <div class="table-scroll">
      <table class="hover">
        <tbody>
          <tr>
            <th colspan="1">Field</th>
            <th colspan="1">Description</th>
          </tr>
          <tr>
            <td colspan="1">Title</td>
            <td colspan="1">It will be visible to your recipients in the EasyShare folder public view.</td>
          </tr>
          <tr>
            <td colspan="1">Expiration Date</td>
            <td colspan="1">Determines until which day the EasyShare folder in the will be available. After this date, the folder will still exist in Nuxeo but will show as expired when attempting external access.</td>
          </tr>
          <tr>
            <td colspan="1"><span class="widgetLabel tipsyShow tipsyGravityNW  ">Active notification</span></td>
            <td colspan="1">If this option is checked, a notification is sent to the contact email when a document is downloaded from the EasyShare folder.</td>
          </tr>
          <tr>
            <td colspan="1">Share Comment</td>
            <td colspan="1">The message displayed on the EasyShare folder public view.</td>
          </tr>
          <tr>
            <td colspan="1">Contact Email</td>
            <td colspan="1">The email address to which an email will be sent each time a document is downloaded. People who can access the EasyShare folder can also use it to contact someone from the organization.</td>
          </tr>
        </tbody>
      </table>
    </div>

    The EasyShare folder is created. You can now create new documents in it or share existing documents in it.


## Adding Documents to an EasyShare Folder

The EasyShare folder is a specific type of [collection]({{page page='collections'}}). To add documents to an EasyShare folder, follow the same steps as if you were adding a document to a collection, by clicking the icon ![]({{file name='add_to_collection.png' page='icons-index'}}) on the document or the EasyShare folder or by clicking the **Add to Collection** button from the workspace Content tab.

Depending on the modules you have enabled on your Nuxeo Platform, you can create the following documents in an EasyShare folder:

*   Files
*   Pictures
*   Audio
*   Videos

## Sharing an EasyShare Folder

You can share your EasyShare folder by sending the **Public URL** available from the icon **![]({{file name='share.png' page='icons-index'}})**. Anyone with the URL can access the EasyShare folder and download the documents that are in it.

An email alert is sent to the Contact email of the folder each time a file is downloaded.

## Accessing an EasyShare Folder

By clicking on the link to the EasyShare Folder, you access a particular EasyShare folder without having to login to the Nuxeo Platform.


{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/USERDOC/Adding features/Easyshare shared folder
    name: easyshare-shared-folder.png
    addins#screenshot#up_to_date
--}}
![Easyshare shared folder](nx_asset://4d496c06-a31b-4f65-b93b-0798fe968727 ?w=650,border=true)

## Future Improvements

If you want more information about the future evolutions and improvements, see [this JIRA filter](https://jira.nuxeo.com/issues/?jql=project%20%3D%20NXP%20AND%20resolution%20%3D%20Unresolved%20AND%20component%20%3D%20%22Easy%20Share%22).

* * *

<div class="row" data-equalizer data-equalize-on="medium">
<div class="column medium-6">
{{#> panel heading='Related Documentation'}}

- [EasyShare Admin Documentation]({{page space='nxdoc' page='easyshare'}})
- [Collections]({{page page='collections'}})

{{/panel}}
</div>
<div class="column medium-6">

&nbsp;

</div>
</div>
