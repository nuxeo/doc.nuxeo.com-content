---
title: Nuxeo Diff
review:
    comment: ''
    date: ''
    status: ok
labels:
    - screenshot-to-update
    - marketplace-package
    - worklist
    - history
    - nuxeo-diff
    - versioning
toc: true
confluence:
    ajs-parent-page-id: '16092550'
    ajs-parent-page-title: Marketplace Add-Ons
    ajs-space-key: USERDOC58
    ajs-space-name: Nuxeo Platform User Documentation - 5.8
    canonical: Nuxeo+Diff
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC58/Nuxeo+Diff'
    page_id: '16092682'
    shortlink: Co71
    shortlink_source: 'https://doc.nuxeo.com/x/Co71'
    source_link: /display/USERDOC58/Nuxeo+Diff
history:
    - 
        author: Solen Guitter
        date: '2016-08-30 16:06'
        message: ''
        version: '14'
    - 
        author: Solen Guitter
        date: '2014-02-24 15:35'
        message: ''
        version: '13'
    - 
        author: Solen Guitter
        date: '2014-02-24 15:34'
        message: ''
        version: '12'
    - 
        author: Solen Guitter
        date: '2014-02-24 15:27'
        message: ''
        version: '11'
    - 
        author: Solen Guitter
        date: '2013-12-11 12:02'
        message: Updated icon and screenshots
        version: '10'
    - 
        author: Solen Guitter
        date: '2013-09-13 11:06'
        message: Added other Diff pages
        version: '9'
    - 
        author: Solen Guitter
        date: '2013-06-19 16:45'
        message: ''
        version: '8'
    - 
        author: Solen Guitter
        date: '2013-06-19 16:44'
        message: ''
        version: '7'
    - 
        author: Solen Guitter
        date: '2012-07-31 15:11'
        message: Migrated to Confluence 4.0
        version: '6'
    - 
        author: Solen Guitter
        date: '2012-07-31 15:11'
        message: ''
        version: '5'
    - 
        author: Solen Guitter
        date: '2012-07-31 11:56'
        message: Updated content with 5.6RC1 improvements and added screenshots
        version: '4'
    - 
        author: Solen Guitter
        date: '2012-07-30 18:04'
        message: ''
        version: '3'
    - 
        author: Solen Guitter
        date: '2012-07-06 14:34'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2012-05-30 16:58'
        message: ''
        version: '1'

---
<div class="row"><div class="column medium-8">{{! excerpt}}

Nuxeo Diff enables to compare two documents or two versions of a document to see the differences between documents or versions.

{{! /excerpt}}{{! multiexcerpt name='comparison-possibilities'}}

When you compare two documents or versions of a document, the elements below are compared:

*   the metadata (title, coverage, modification date, etc),
*   the content (note or main attachment depending on the document involved),
*   the attached files.

{{! /multiexcerpt}}

You can compare documents in any space of the Nuxeo Platform: workspaces, sections...

{{#> callout type='info' }}

Since Nuxeo Platform 5.8, Nuxeo Diff is integrated in the Document Management module.

{{/callout}}</div><div class="column medium-4">{{#> panel heading='On this page'}} {{/panel}}</div></div>

## Comparing a document's versions

**To compare two versions of a document:**

1.  On the document's **History** tab, click on the **Archived versions** sub-tab.
2.  Select the two versions you want to compare by checking the corresponding boxes.
3.  Click on the **Compare** button.
    The fields for which there has been changes between the two versions are displayed in a table, with the first version's values on the left and the second version's values on the right.
    ![]({{file name='Diff-compare-screen.png'}} ?w=550,border=true)
4.  If you want to visualize the content changes, click on the icon ![]({{file name='action_diff.png'}}) on the right.
    A window pops up showing what's been added in green and what's been removed in red.
    ![]({{file name='Diff-content-detail.png'}} ?w=550,border=true)

## Comparing documents

It is also possible to compare two distinct documents.

**To compare two documents in the same workspace:**

1.  Select the documents to be compared using the checkboxes.
    ![]({{file name='Diff-compare-docs-1.png'}} ?w=550,border=true)
2.  Click on the **Compare** button below the list of documents.
    The fields that have different contents are displayed in a table, with the first document's values on the left and the second document's values on the right.
    ![]({{file name='Diff-compare-docs-view.png'}} ?w=550,border=true)
3.  If you want to visualize the content changes, click on the icon&nbsp;![]({{file name='action_diff_formatted.png'}}) on the right.
    A window pops up showing what's been added in green and what's been removed in red.

**To compare two documents in different workspaces:**

1.  Add the documents to compare to your worklist.
2.  Click on the **Compare** link in the worklist.
    The fields that have different contents are displayed in a table, with the first document's values on the left and the second document's values on the right.
3.  If you want to visualize the content changes, click on the **Detail** link on the right.
    A window pops up showing what's been added in green and what's been removed in red.

&nbsp;