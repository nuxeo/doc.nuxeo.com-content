---
title: Tags
review:
    comment: ''
    date: '2017-12-15'
    status: ok
labels:
    - tag
    - multiexcerpt
    - lts2017-ok
toc: true
confluence:
    ajs-parent-page-id: '2392400'
    ajs-parent-page-title: Browsing Content
    ajs-space-key: USERDOC
    ajs-space-name: Nuxeo Platform User Documentation
    canonical: Tags
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC/Tags'
    page_id: '2392380'
    shortlink: PIEk
    shortlink_source: 'https://doc.nuxeo.com/x/PIEk'
    source_link: /display/USERDOC/Tags
tree_item_index: 200
history:
    -
        author: Manon Lumeau
        date: '2015-11-23 14:27'
        message: ew Edit permissio
        version: '31'
    -
        author: Manon Lumeau
        date: '2015-08-27 13:14'
        message: ''
        version: '30'
    -
        author: Solen Guitter
        date: '2015-07-10 08:05'
        message: ''
        version: '29'
    -
        author: Manon Lumeau
        date: '2015-07-09 16:09'
        message: ''
        version: '28'
    -
        author: Solen Guitter
        date: '2015-07-09 15:53'
        message: ''
        version: '27'
    -
        author: Manon Lumeau
        date: '2015-07-09 15:44'
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
{{! multiexcerpt name='functional-overview'}}

Unlike subjects in the metadata of the document, you don't have to choose tags in a closed list. You are free to apply the tags that describe the document best. However, tags are proposed as you type them, to enable you to use the same tags as the other users and have a consistent tagging of documents. You can add as many tags on documents as you want.

![]({{file name='tags-summary-tab.png'}} ?w=650,border=true)

You can then use the tag cloud to find all documents that have the same tags.

![]({{file name='tag-cloud.png'}} ?border=true)

Documents can be tagged in workspaces and in sections. When a document is published, the tags applied in the workspaces are published with the document. Users can add a tag on a document as soon as they can access the document, i.e. as soon as they have reading permissions.

To tag a document, go on the **Summary** tab of the document and click on ![]({{file name='add.gif' space='studio' page='studio-icons-index'}}) and type the label you want to add. Click on the suggested label to add an existing tag or on the tag in green to create and add a new one. The tag is immediately added on the document and available in the tag cloud.

![]({{file name='tags-add.png'}} ?w=350,border=true)

To remove a tag from a document, you need to be the user who added the tag on the document or have at least Edit permission on the document. Click on the icon ![]({{file space='userdoc' name='delete.png' page='icons-index'}}). The tag is immediately removed.

### Tags, Versions and Publication

When you [save a document as a new version]({{page page='editing-content'}}#versioning-overview), the tags that user have put on the document are saved with the version. This means that the archived versions of a document and the document in its current version can have different tags. If you restore a previous version of the document, tags are restored with it and replace the tags from the replaced version.

When you [publish a document]({{page page='publishing-content'}}), the tags are copied from the work document to the published document. You can then remove useless tags from either version of the document (work version or published version) without affecting the other one. In case of republication of the document, the tags from the last and previous version are merged so you don't loose any previous or preparatory categorization.

{{! /multiexcerpt}}


<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='More documentation about tags'}}

- [Tags developer documentation]({{page space='nxdoc' page='tagging'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
