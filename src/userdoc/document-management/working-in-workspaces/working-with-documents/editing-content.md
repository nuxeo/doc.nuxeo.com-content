---
title: Editing Content
review:
    comment: ''
    date: ''
    status: ok
labels:
    - editing
    - metadata
    - versioning
    - bulk-edit
    - 5-7-1
toc: true
confluence:
    ajs-parent-page-id: '16092634'
    ajs-parent-page-title: Working with Documents
    ajs-space-key: USERDOC58
    ajs-space-name: Nuxeo Platform User Documentation - 5.8
    canonical: Editing+Content
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC58/Editing+Content'
    page_id: '16092620'
    shortlink: zI31
    shortlink_source: 'https://doc.nuxeo.com/x/zI31'
    source_link: /display/USERDOC58/Editing+Content
history:
    - 
        author: Solen Guitter
        date: '2016-09-01 15:16'
        message: ''
        version: '38'
    - 
        author: Solen Guitter
        date: '2014-02-21 09:26'
        message: ''
        version: '37'
    - 
        author: Solen Guitter
        date: '2014-01-16 14:29'
        message: Added note about draft version 0.0
        version: '36'
    - 
        author: Solen Guitter
        date: '2013-11-26 15:47'
        message: ''
        version: '35'
    - 
        author: Solen Guitter
        date: '2013-11-26 15:47'
        message: Added notes about bulk edit and related docs
        version: '34'
    - 
        author: Solen Guitter
        date: '2013-10-31 15:05'
        message: Updated bulk edit screenshot for 5.8
        version: '33'
    - 
        author: Solen Guitter
        date: '2013-10-31 15:02'
        message: Added details on safe edit
        version: '32'
    - 
        author: Solen Guitter
        date: '2013-10-30 11:06'
        message: ''
        version: '31'
    - 
        author: Solen Guitter
        date: '2013-10-22 17:53'
        message: ''
        version: '30'
    - 
        author: Solen Guitter
        date: '2013-10-21 17:05'
        message: ''
        version: '29'
    - 
        author: Solen Guitter
        date: '2013-08-01 14:25'
        message: ''
        version: '28'
    - 
        author: Solen Guitter
        date: '2013-07-30 11:48'
        message: Added new 5.7.1 bulk edit feature
        version: '27'
    - 
        author: Solen Guitter
        date: '2013-06-27 16:05'
        message: Added safe edit feature
        version: '26'
    - 
        author: Solen Guitter
        date: '2013-02-06 17:41'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '25'
    - 
        author: Solen Guitter
        date: '2013-02-06 17:41'
        message: ''
        version: '24'
    - 
        author: Solen Guitter
        date: '2012-06-19 15:09'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '23'
    - 
        author: Solen Guitter
        date: '2012-06-19 15:09'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '22'
    - 
        author: Solen Guitter
        date: '2012-06-19 15:09'
        message: Migrated to Confluence 4.0
        version: '21'
    - 
        author: Solen Guitter
        date: '2012-06-19 15:09'
        message: Fixed broken link
        version: '20'
    - 
        author: Solen Guitter
        date: '2012-01-18 14:34'
        message: ''
        version: '19'
    - 
        author: Solen Guitter
        date: '2011-12-22 17:58'
        message: Fixed broken link
        version: '18'
    - 
        author: Solen Guitter
        date: '2011-12-22 17:49'
        message: Updated screenshot
        version: '17'
    - 
        author: Solen Guitter
        date: '2011-11-23 11:23'
        message: ''
        version: '16'
    - 
        author: Solen Guitter
        date: '2011-11-23 10:28'
        message: 'Corrected wrong label '
        version: '15'
    - 
        author: Solen Guitter
        date: '2011-11-23 10:26'
        message: ''
        version: '14'
    - 
        author: Solen Guitter
        date: '2011-11-22 16:05'
        message: Added last contributor metadata
        version: '13'
    - 
        author: Solen Guitter
        date: '2011-11-08 19:09'
        message: Added link to virtual navitation
        version: '12'
    - 
        author: Solen Guitter
        date: '2011-11-08 19:06'
        message: Added toc and related pages
        version: '11'
    - 
        author: Solen Guitter
        date: '2011-10-28 15:02'
        message: ''
        version: '10'
    - 
        author: Solen Guitter
        date: '2011-06-06 16:02'
        message: fixed brocken link
        version: '9'
    - 
        author: Solen Guitter
        date: '2011-06-06 14:41'
        message: ''
        version: '8'
    - 
        author: Solen Guitter
        date: '2011-06-06 11:33'
        message: ''
        version: '7'
    - 
        author: Benoit Delbosc
        date: '2011-06-01 10:27'
        message: ''
        version: '6'
    - 
        author: Solen Guitter
        date: '2010-12-01 11:13'
        message: ''
        version: '5'
    - 
        author: Solen Guitter
        date: '2010-11-08 10:58'
        message: update new default version number
        version: '4'
    - 
        author: Solen Guitter
        date: '2010-11-08 10:56'
        message: added new "nature" metadata
        version: '3'
    - 
        author: Solen Guitter
        date: '2010-05-10 18:37'
        message: fixed broken links
        version: '2'
    - 
        author: Solen Guitter
        date: '2010-04-26 17:59'
        message: ''
        version: '1'

---
## {{> anchor 'versioning-overview'}}Versioning Overview

Every time you modify a document, you can define if the changes should be saved as a new version of the document.

Every document holds a version number, which is a piece of information about the evolution of the document. A version number (V.v) is composed of a major version number (V) and a minor version number (v). When a document is created, its version number is 0.0\. Minor version increment are used for secondary changes. Major version increment is usually reserved to significant modifications.

![]({{file name='version-update.png'}} ?border=true)

{{! multiexcerpt name='versioning'}}

When you edit a document and save your modifications, you have several options regarding the versioning of your document.

Let's say that your current document version is 0.1.

*   You can save modifications without creating a new version of the document, as it is not yet ready. The 0.1 version of the document has been modified, so its version number becomes 0.1+ (the + indicates to other users that version 0.1 has been modified).
*   You can save the modifications in a new version of the document. The version number will then be 0.2 if you increment minor version or 1.0 if you save modifications in a major version. The newly created version is automatically archived in the **History** tab so it's not lost when users will edit it.

{{#> callout type='info' heading='Version number 0.0'}}

When a document is created, its version number is 0.0\. This is considered as a draft of the document, which will need to be saved into a first version, either minor or major. Draft version 0.0 is not archived and the + behavior described above does not apply to 0.0 draft.

{{/callout}}{{! /multiexcerpt}}

## Metadata Overview

Metadata are information describing some properties of the workspace, so that they are more accurately referenced. Some metadata are automatically filled in by the system, but most of them need to be filled in by users. When you create a document (file, note, workspace, section, or any other document type), its metadata are empty.

The Nuxeo Platform uses Dublin Core metadata by default. They are listed below:

{{! multiexcerpt name='metadata'}}<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">Field</th><th colspan="1">Description</th></tr><tr><td colspan="1">

Nature

</td><td colspan="1">

Nature of the document

</td></tr><tr><td colspan="1">

Subjects

</td><td colspan="1">

Topic(s) of the document.

</td></tr><tr><td colspan="1">

Rights

</td><td colspan="1">

Information about the reproduction rights of the document. Rights informations often encompass Intellectual Property Rights and Copyright.

</td></tr><tr><td colspan="1">

Source

</td><td colspan="1">

The references of the resource from which the document's content is derived (totally or partially).

</td></tr><tr><td colspan="1">

Coverage

</td><td colspan="1">

Information about the geographic reach of the document.

</td></tr><tr><td colspan="1">

Created at

</td><td colspan="1">

Date automatically filled in by the system when the document is created.

</td></tr><tr><td colspan="1">

Last modified at

</td><td colspan="1">

Date automatically filled in by the system when the document is modified.

</td></tr><tr><td colspan="1">

Format

</td><td colspan="1">

Format of the document, if any is preferred.

</td></tr><tr><td colspan="1">

Language

</td><td colspan="1">

Language used in the document.

</td></tr><tr><td colspan="1">

Expire on

</td><td colspan="1">

Date on which the document stops being valid. Click on the calendar icon to select a date.
This date is not indexed in the system. It is just in indication for users but it is not processed by the application.

</td></tr><tr><td colspan="1">

Author

</td><td colspan="1">

User who created the document. This field is automatically filled in by the system.

</td></tr><tr><td colspan="1">

Contributors

</td><td colspan="1">

Users who modified the document. This field is automatically filled in by the system.

</td></tr><tr><td colspan="1">

Last contributor

</td><td colspan="1">

Last user who modified the document. This field is automatically filled in by the system.

</td></tr></tbody></table></div>{{! /multiexcerpt}}

Although metadata are not mandatory, filling them in will make your documents easier to find using [Nuxeo search engine]({{page page='searching-the-nuxeo-platform'}}) or [virtual navigation]({{page page='navigation-trees#virtual-navigation'}}).

{{#> callout type='info' heading='Virtual navigation'}}

Coverage and subjects are used for [virtual navigation]({{page page='navigation-trees#virtual-navigation'}}).

{{/callout}}

To fill in or change the metadata of the document, just edit the document.

## Editing a Document

{{! multiexcerpt name='edit-document'}}

**To edit a document:**

1.  Click on the **Edit** tab of the document.

    {{#> callout type='tip' heading='Quick access to modification'}}

    You can also access the **Edit** tab directly from the folder's content using right click on the document and clicking on **Modify**.

    {{/callout}}

    ![]({{file name='right-click-menu.png'}} ?w=350,border=true)

    &nbsp;

2.  In the modification form displayed, type your modifications.

3.  Indicate if you want to update the document's version.
    ![]({{file name='version-update.png'}} ?border=true)
4.  Type a comment if you want to indicate why you modified the document.
    This comment is logged in the document's history and helps other users know what has been changed on the document.
5.  Click on the **Save** button.
    The document's **Summary** tab is displayed.

{{! /multiexcerpt}} {{#> callout type='tip' heading='Office document modification'}}

MS Office and OpenOffice.org documents can be edited directly in their native application using [Live Edit]({{page page='working-with-live-edit'}}) or [WSS/WebDav]({{page page='working-with-webdav-and-wss'}}).

{{/callout}}

## {{> anchor 'bulk-edit'}}Bulk Editing

It is possible to edit several documents at the same time. When you bulk edit documents, you can edit a set of their metadata. You can bulk edit documents from:

*   a folder **Content** tab,
*   search results, whatever the search you are using,
*   a virtual navigation list of documents.

{{#> callout type='note' heading='Bulk edit overwrites previously filled in values'}}

If you edit metadata for which the document(s) already had a value, the previous value will be replaced by the one you select on the bulk edit form.

{{/callout}}

**To edit several documents at the same time:**

1.  Select the documents to edit using the checkboxes on the documents list.

    {{#> callout type='note' heading='Document selected in other pages remain selected'}}

    When you navigate from page to page, you selection is not lost and you can bulk-edit documents that are not on the same page.

    **There is a drawback:** You must make sure to bulk-edit only the correct documents (i.e. there are no checked documents in other pages that, in fact, you don't want to edit.).

    {{/callout}}
2.  Click on the **Edit** button displayed at the bottom of the list of documents.
    The bulk edit form is displayed in a popup window.
    All values are empty by default.
3.  Fill in the relevant metadata and leave other values empty by default.
    The box corresponding to the edited metadata is automatically checked.
    ![]({{file name='DM-bulk-edit.png'}} ?w=650)

    {{#> callout type='note' heading='Bulk edit overwrites previously filled in values'}}

    If you edit metadata for which the document(s) already had a value, the previous value will be replaced by the one you select on the bulk edit form.

    {{/callout}}
4.  Click on the Save button.
    The selected documents are all modified with the selected values, after a new minor version has been saved for each document. Other values are left as they were.

    {{#> callout type='tip' }}

    It is possible to change the default bulk edit versioning policy. See the page [Bulk Edit]({{page space='nxdoc58' page='bulk-edit'}}) in the developer documentation.

    {{/callout}}