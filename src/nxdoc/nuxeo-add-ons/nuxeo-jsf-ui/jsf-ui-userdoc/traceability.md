---
title: Traceability
review:
    comment: ''
    date: '2019-10-18'
    status: ok
labels:
    - editing
    - history
    - versioning
    - multiexcerpt
    - lts2017-ok
toc: true
confluence:
    ajs-parent-page-id: '11043048'
    ajs-parent-page-title: Nuxeo Platform User Documentation
    ajs-space-key: USERDOC
    ajs-space-name: Nuxeo Platform User Documentation
    canonical: Traceability
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC/Traceability'
    page_id: '2392375'
    shortlink: N4Ek
    shortlink_source: 'https://doc.nuxeo.com/x/N4Ek'
    source_link: /display/USERDOC/Traceability
tree_item_index: 800
history:
    -
        author: Manon Lumeau
        date: '2015-11-25 10:20'
        message: ew Edit permissio
        version: '31'
    -
        author: Solen Guitter
        date: '2015-08-31 12:42'
        message: 'User doc reorganization: fix link to relations'
        version: '30'
    -
        author: Solen Guitter
        date: '2015-08-27 13:42'
        message: 'User doc reorganization: fix link to alerts'
        version: '29'
    -
        author: Manon Lumeau
        date: '2015-08-05 12:56'
        message: ''
        version: '28'
    -
        author: Manon Lumeau
        date: '2015-08-05 12:55'
        message: ''
        version: '27'
    -
        author: Solen Guitter
        date: '2015-07-10 14:37'
        message: ''
        version: '26'
    -
        author: Solen Guitter
        date: '2015-07-10 14:35'
        message: 'NXDOC-637: Review content and make it shorter'
        version: '25'
    -
        author: Manon Lumeau
        date: '2014-12-02 23:35'
        message: ''
        version: '24'
    -
        author: Manon Lumeau
        date: '2014-12-02 23:34'
        message: ''
        version: '23'
    -
        author: Solen Guitter
        date: '2014-02-12 11:54'
        message: ''
        version: '22'
    -
        author: Solen Guitter
        date: '2014-01-16 15:07'
        message: ''
        version: '21'
    -
        author: Solen Guitter
        date: '2014-01-16 15:07'
        message: ''
        version: '20'
    -
        author: Solen Guitter
        date: '2014-01-16 15:06'
        message: Added related content
        version: '19'
    -
        author: Solen Guitter
        date: '2013-11-25 14:47'
        message: ''
        version: '18'
    -
        author: Solen Guitter
        date: '2013-10-22 18:13'
        message: ''
        version: '17'
    -
        author: Solen Guitter
        date: '2013-02-01 17:05'
        message: ''
        version: '16'
    -
        author: Solen Guitter
        date: '2013-01-17 18:32'
        message: ''
        version: '15'
    -
        author: Solen Guitter
        date: '2012-10-02 15:47'
        message: ''
        version: '14'
    -
        author: Solen Guitter
        date: '2012-06-27 17:59'
        message: Migrated to Confluence 4.0
        version: '13'
    -
        author: Solen Guitter
        date: '2012-06-27 17:59'
        message: Added TOC and fixed broken link
        version: '12'
    -
        author: Solen Guitter
        date: '2012-04-03 16:06'
        message: Upated required rights to restore or delete a version
        version: '11'
    -
        author: Solen Guitter
        date: '2012-01-18 16:38'
        message: Updated screenshots and added details on restoring archived versions
        version: '10'
    -
        author: Solen Guitter
        date: '2011-11-24 10:06'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2011-06-06 11:46'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2011-05-31 18:04'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2010-12-01 11:21'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2010-10-20 10:39'
        message: link update
        version: '5'
    -
        author: Solen Guitter
        date: '2010-10-20 10:38'
        message: link update
        version: '4'
    -
        author: Solen Guitter
        date: '2010-09-14 15:44'
        message: fixed broken links
        version: '3'
    -
        author: Solen Guitter
        date: '2010-05-10 18:39'
        message: fixed broken links
        version: '2'
    -
        author: Solen Guitter
        date: '2010-04-23 18:11'
        message: ''
        version: '1'
---

{{{multiexcerpt 'DeprecatedAddon_10.10' page='generic-multi-excerpts'}}}

{{! multiexcerpt name='functional_overview'}}

The **History** tab of a document gives you access to the audit trail of the document and its versions, thus ensuring the traceability of documents.

## Audit Trail

All the actions that are done on documents are registered in the document's audit trail available from **Event log** sub tab, with several information, such as the date and time, the user, the comment, etc.

![]({{file name='history-event-log.png'}} ?w=650,border=true)

## Archived Versions

The **History** tab also displays the previous versions of the document that were archived when the document was edited and its version increased. All previous versions can be consulted. You can also restore or delete archived versions. If you installed [Nuxeo Diff]({{page page='nuxeo-diff'}}) you cal also compare two versions of the document.

{{#> callout type='info' heading='Version number 0.0'}}

Draft version 0.0 is not archived. See the page [Editing Content]({{page page='editing-content'}}) for more information about versioning.

{{/callout}}

Archived versions have few actions available: you can only [create relations]({{page page='editing-content#relations'}}) from it to another document and subscribe to [notifications]({{page page='collaborative-features#alerts'}}).

![]({{file name='archived-versions.png'}} ?w=650,border=true)

All users can consult the previous versions of a document.

**Restoring versions**

You need to have "version", "edit" or "manage everything" permissions to restore a previous version of a document. Restoring an archived version means making it the current version of the document. The modifications done since that old version are thus not taken into account anymore.

When you restore a version by clicking the **Restore** button, the document is displayed as it was for the chosen version and has the same archived version's number. The next time it will be modified, its version number will automatically be increased.

![]({{file name='archived-versions.png'}} ?w=650,border=true)

For instance, your document's version is currently 0.3\. When you click on the **Restore** button of the version 0.1, the **Summary** tab of the document is displayed: the content and metadata are the one of version 0.1, and the version number is 0.1\. When the document is modified, the version number is automatically increased to 0.3+.

{{! /multiexcerpt}}

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='More about versioning and history in this documentation'}}

- [Editing Content]({{page page='editing-content'}})
- [Nuxeo Diff]({{page page='nuxeo-diff'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Developer documentation about versioning and history'}}

- [Versioning developer documentation]({{page space='nxdoc' page='versioning'}})
- [HOWTO: Customize the Versioning and Comment Widget on Document Edit Form]({{page space='nxdoc' page='how-to-customize-the-versioning-and-comment-widget-on-document-edit-form'}})

{{/panel}}</div></div>
