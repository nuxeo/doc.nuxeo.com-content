---
title: Nuxeo Diff Pictures
review:
    comment: ''
    date: '2019-09-18'
    status: ok
toc: true
labels:
    - lts2016-ok
    - lts2017-ok
confluence:
    ajs-parent-page-id: '16089349'
    ajs-parent-page-title: Nuxeo Add-Ons
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Nuxeo+Diff+Pictures
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Nuxeo+Diff+Pictures'
    page_id: '26318218'
    shortlink: ipWRAQ
    shortlink_source: 'https://doc.nuxeo.com/x/ipWRAQ'
    source_link: /display/NXDOC/Nuxeo+Diff+Pictures
tree_item_index: 1500
history:
    -
        author: Solen Guitter
        date: '2016-05-04 14:09'
        message: ''
        version: '8'
    -
        author: Thibaud Arguillere
        date: '2015-12-23 09:41'
        message: ''
        version: '7'
    -
        author: Manon Lumeau
        date: '2015-12-02 15:33'
        message: ''
        version: '6'
    -
        author: Manon Lumeau
        date: '2015-12-02 15:18'
        message: ''
        version: '5'
    -
        author: Manon Lumeau
        date: '2015-10-16 15:10'
        message: ''
        version: '4'
    -
        author: Manon Lumeau
        date: '2015-10-16 15:07'
        message: ''
        version: '3'
    -
        author: Manon Lumeau
        date: '2015-10-16 15:05'
        message: ''
        version: '2'
    -
        author: Manon Lumeau
        date: '2015-10-16 15:03'
        message: ''
        version: '1'
---

{{{multiexcerpt 'JSF-UI-required' page='generic-multi-excerpts'}}}

The diff capabilities of the Nuxeo Platform now include picture comparison thanks to&nbsp;[Nuxeo Diff Pictures](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-diff-pictures).&nbsp;This addon displays a dialog where the user can spot the differences between two pictures. The compared pictures can be of different formats (JPEG, PNG, ...) or dimensions,&nbsp;leveraging ImageMagick capabilities in this area. When the two pictures have the same format and the same dimensions, the user can also set-up a "Fuzzy" comparison parameter (to remove noise when comparing JPEGs for example), and to choose the colors used for to highlight the differences.

When you compare two documents or versions of a document, the elements below are compared:

- The metadata (title, coverage, modification date, etc),
- The content.

You can compare documents in any space of the Nuxeo Platform: workspaces, sections...&nbsp;

## Comparing a Picture's Versions

**To compare two versions of a picture document:**

1.  On the picture document's&nbsp;**History**&nbsp;tab, click on the&nbsp;**Archived versions**&nbsp;sub-tab.
2.  Select the two versions you want to compare by checking the corresponding boxes.
3.  Click on the&nbsp;**Compare**&nbsp;button.
    The fields for which there has been changes between the two versions are displayed in a table, with the first version's values on the left and the second version's values on the right.
    ![]({{file name='picture-diff-changes.png'}} ?w=600,border=true)
4.  To visualize the changes on the picture, click on&nbsp;![]({{file name='action_diff.png' space='userdoc' page='nuxeo-diff'}})&nbsp;on the right.
    A window pops up showing what's been changed between the two versions.&nbsp;
    ![]({{file name='PictureDiff.png'}} ?w=600,border=true)

## Comparing Pictures

It is also possible to compare two distinct documents.

Select the documents:&nbsp;

- If the pictures are in the same workspace, use the checkboxes and click on&nbsp;**Compare**.&nbsp;
- If the pictures are in two different workspaces, add them to the worklist and click on&nbsp;**Compare**.

If you want to visualize the content changes, click on the icon&nbsp;![]({{file name='action_diff.png' space='userdoc' page='nuxeo-diff'}})&nbsp;on the right.&nbsp;A window pops up showing the differences between the two documents.

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [Nuxeo Diff]({{page space='userdoc' page='nuxeo-diff'}})
- [Traceability]({{page space='nxdoc' page='traceability'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

&nbsp;

</div></div>
