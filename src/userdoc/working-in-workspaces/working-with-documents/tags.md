---
title: Tags
review:
    comment: ''
    date: ''
    status: ok
labels:
    - last-review-20141201
    - tag
toc: true
confluence:
    ajs-parent-page-id: '21299491'
    ajs-parent-page-title: Working with Documents
    ajs-space-key: USERDOC60
    ajs-space-name: Nuxeo Platform User Documentation — 6.0
    canonical: Tags
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC60/Tags'
    page_id: '21299476'
    shortlink: FAFFAQ
    shortlink_source: 'https://doc.nuxeo.com/x/FAFFAQ'
    source_link: /display/USERDOC60/Tags
tree_item_index: 600
history:
    -
        author: Solen Guitter
        date: '2016-09-01 14:13'
        message: ''
        version: '26'
    -
        author: Manon Lumeau
        date: '2014-12-05 17:28'
        message: ''
        version: '25'
    -
        author: Manon Lumeau
        date: '2014-12-01 17:26'
        message: ''
        version: '24'
    -
        author: Solen Guitter
        date: '2014-11-04 00:58'
        message: ''
        version: '23'
    -
        author: Solen Guitter
        date: '2014-10-30 00:20'
        message: ''
        version: '22'
    -
        author: Solen Guitter
        date: '2014-03-10 18:18'
        message: ''
        version: '21'
    -
        author: Solen Guitter
        date: '2014-02-24 10:43'
        message: ''
        version: '20'
    -
        author: Solen Guitter
        date: '2014-02-12 10:38'
        message: ''
        version: '19'
    -
        author: Solen Guitter
        date: '2013-11-25 14:46'
        message: ''
        version: '18'
    -
        author: Solen Guitter
        date: '2013-11-03 14:48'
        message: ''
        version: '17'
    -
        author: Solen Guitter
        date: '2013-10-21 17:17'
        message: ''
        version: '16'
    -
        author: Solen Guitter
        date: '2013-10-21 17:15'
        message: Added 5.8 tagging behavior regarding versioning and publication
        version: '15'
    -
        author: Solen Guitter
        date: '2013-09-30 17:08'
        message: ''
        version: '14'
    -
        author: Solen Guitter
        date: '2013-07-01 14:57'
        message: Updated Add a tab steps with 5.7.1 new UI
        version: '13'
    -
        author: Solen Guitter
        date: '2013-01-17 17:40'
        message: Updated Add tags steps
        version: '12'
    -
        author: Solen Guitter
        date: '2012-06-27 17:52'
        message: Migrated to Confluence 4.0
        version: '11'
    -
        author: Solen Guitter
        date: '2012-06-27 17:52'
        message: Added TOC and fixed broken link to image
        version: '10'
    -
        author: Solen Guitter
        date: '2012-01-18 12:15'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2011-11-24 10:06'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2011-06-06 11:44'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2011-05-31 18:00'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2010-12-01 11:20'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2010-10-20 10:41'
        message: ''
        version: '4'
    -
        author: Stéfane Fermigier
        date: '2010-08-03 17:55'
        message: ''
        version: '3'
    -
        author: Solen Guitter
        date: '2010-05-28 15:25'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2010-04-14 11:27'
        message: ''
        version: '1'

---
Tags are labels that you can add on documents to help you describe them.

Unlike subjects in the metadata of the document, you don't have to choose tags in a closed list. You are free to apply the labels that describe the document best. However, tags are proposed as you type them, to enable you to use the same tags as the other users and have a consistent tagging of documents.

You can add as many tags on documents as you want.

![]({{file name='tags-summary-tab.png'}} ?w=650,border=true)

You can then use the tag cloud to find all documents that have the same tags.
![]({{file name='tag-cloud.png' page='browsing-content'}} ?w=350,border=true)

## Tags, Versions and Publication

When you [save a document as a new version]({{page page='editing-content#versioning-verview'}}), the tags that user have put on the document are saved with the version. This means that the archived versions of a document and the document in its current version can have different tags. If you restore a previous version of the document, tags are restored with it and replace the tags from the replaced version.

When you [publish a document]({{page page='publishing-documents'}}), the tags are copied from the work document to the published document. You can then remove useless tags from either version of the document (work version or published version) without affecting the other one. In case of republication of the document, the tags from the previously published version and the newly published version are merged so you don't loose any previous or preparatory categorization.

## Tagging Documents

Users can add a tag on a document as soon as they can access the document, ie as soon as they have reading rights.

Documents can be tagged in workspaces and in sections. When a document is published, the tags applied in the workspaces are published with the document.

**To tag a document:**

1.  Go on the **Summary** tab of the document.

    {{#> callout type='tip' }}

    Tags already used are proposed from 3 letters typed.

    {{/callout}}
2.  Click on&nbsp;![]({{file name='add.gif' space='studio' page='studio-icons-index'}}) and type the label you want to add.
    ![]({{file name='tags-add.png'}} ?w=350,border=true)

3.  Click on the suggested label to add an existing tag or on the tag in green to create and add a new one.
    The tag is immediately added on the document and available in the tag cloud.

## Removing Tags

You need to be the user who added the tag on the document or have at least _write_ right on the document to be able to remove a tag from a document.

To remove a tag from a document, click on the icon ![]({{file name='delete.png' page='icons-index'}}).
The tag is immediately removed.

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='More documentation about tags'}}

- [Tagging]({{page space='nxdoc60' page='tagging'}})

{{/panel}}</div><div class="column medium-6">

</div></div>
