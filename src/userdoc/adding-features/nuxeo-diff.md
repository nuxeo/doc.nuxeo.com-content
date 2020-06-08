---
title: Nuxeo Diff
review:
    comment: ''
    date: '2020-06-08'
    status: ok
labels:
    - history
    - worklist
    - versioning
    - screenshot-to-update
    - nuxeo-diff
    - excerpt
    - multiexcerpt
    - lts2017-ok
toc: true
confluence:
    ajs-parent-page-id: '11043055'
    ajs-parent-page-title: Adding Features
    ajs-space-key: USERDOC
    ajs-space-name: Nuxeo Platform User Documentation
    canonical: Nuxeo+Diff
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC/Nuxeo+Diff'
    page_id: '11042953'
    shortlink: iYCo
    shortlink_source: 'https://doc.nuxeo.com/x/iYCo'
    source_link: /display/USERDOC/Nuxeo+Diff
tree_item_index: 400
history:
    -
        author: Solen Guitter
        date: '2016-08-30 16:04'
        message: ''
        version: '16'
    -
        author: Solen Guitter
        date: '2015-07-09 14:28'
        message: Add requirement for file comparison
        version: '15'
    -
        author: Solen Guitter
        date: '2015-07-09 13:51'
        message: ''
        version: '14'
    -
        author: Manon Lumeau
        date: '2014-12-08 11:44'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2014-02-24 15:35'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2014-02-24 15:09'
        message: ''
        version: '11'
    -
        author: Solen Guitter
        date: '2013-12-11 12:00'
        message: Added detail icon and update screenshots
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

{{multiexcerpt 'JSF-UI-required' space='nxdoc' page='generic-multi-excerpts'}}

{{! multiexcerpt name='nuxeo-diff-functional-overview'}}
{{! excerpt}}

[Nuxeo Diff](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-diff) enables to compare two documents or two versions of a document to see the differences between documents or versions.

{{! /excerpt}}

{{! multiexcerpt name='comparison-possibilities'}}

When you compare two documents or versions of a document, the elements below are compared:

*   The metadata (title, coverage, modification date, etc).
*   The content (note or main attachment depending on the document involved).
*   The attached files.

The only requirements for Nuxeo Diff to compare files is that their content can be converted into TXT or HTML format, which is the case for PDF and Office files using the default converters of the Nuxeo Platform.

{{! /multiexcerpt}}

You can compare documents in any space of the Nuxeo Platform: workspaces, sections...

### Comparing a Document's Versions

**To compare two versions of a document:**

1.  On the document's **History** tab, click on the **Archived Versions** sub-tab.
2.  Select the two versions you want to compare by checking the corresponding boxes.
3.  Click on the **Compare** button.
    The fields for which there has been changes between the two versions are displayed in a table, with the first version's values on the left and the second version's values on the right.
    ![]({{file name='Diff-compare-screen.png'}} ?w=550,border=true)
4.  If you want to visualize the content changes, click on the icon ![]({{file name='action_diff.png'}}) on the right.
    A window pops up showing what's been added in green and what's been removed in red.
    ![]({{file name='Diff-content-detail.png'}} ?w=550,border=true)

### Comparing Documents

It is also possible to compare two distinct documents.

**To compare two documents in the same workspace:**

1.  Select the documents to be compared using the checkboxes.
    ![]({{file name='Diff-compare-docs-1.png'}} ?w=550,border=true)
2.  Click on the **Compare** button below the list of documents.
    The fields that have different contents are displayed in a table, with the first document's values on the left and the second document's values on the right.
    ![]({{file name='Diff-compare-docs-view.png'}} ?w=550,border=true)
3.  If you want to visualize the content changes, click on the icon ![]({{file name='action_diff_formatted.png'}}) on the right.
    A window pops up showing what's been added in green and what's been removed in red.

**To compare two documents in different workspaces:**

1.  Add the documents to compare to your worklist.
2.  Click on the **Compare** link in the worklist.
    The fields that have different contents are displayed in a table, with the first document's values on the left and the second document's values on the right.
3.  If you want to visualize the content changes, click on the **Detail** link on the right.
    A window pops up showing what's been added in green and what's been removed in red.

{{! /multiexcerpt}}

<div class="row" data-equalizer data-equalize-on="medium">
<div class="column medium-6">
{{#> panel heading='Related documentation'}}

- [Nuxeo Diff developer documentation]({{page space='nxdoc' page='nuxeo-diff'}})
- [Traceability]({{page page='nxdoc/traceability'}})

{{/panel}}
</div>

<div class="column medium-6">

&nbsp;

</div>
</div>
