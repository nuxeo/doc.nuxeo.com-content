---
title: 'HOWTO: Make the New Button Appear on a Custom Folderish Document - JSF UI'
review:
    comment: ''
    date: '2019-10-21'
    status: ok
details:
    howto:
        excerpt: 'This page explains how to add the New button on the default Content tab and on a custom tab.  '
        level: Beginner
        tool: Studio
        topics: 'Document type, Tab, User action'
labels:
    - content-review-lts2016
    - howto
    - action
    - atchertchian
    - studio
    - excerpt
    - content-review-lts2017
    - jsf-ui
confluence:
    ajs-parent-page-id: '19235610'
    ajs-parent-page-title: Action How-To Index
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: How+to+Make+the+New+Button+Appear+on+a+Custom+Folderish+Document
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/How+to+Make+the+New+Button+Appear+on+a+Custom+Folderish+Document'
    page_id: '3345780'
    shortlink: dA0z
    shortlink_source: 'https://doc.nuxeo.com/x/dA0z'
    source_link: /display/NXDOC/How+to+Make+the+New+Button+Appear+on+a+Custom+Folderish+Document
tree_item_index: 100
history:
    -
        author: Manon Lumeau
        date: '2015-12-07 11:01'
        message: ''
        version: '22'
    -
        author: Solen Guitter
        date: '2014-12-01 22:32'
        message: ''
        version: '21'
    -
        author: Anahide Tchertchian
        date: '2014-12-01 12:12'
        message: ''
        version: '20'
    -
        author: Solen Guitter
        date: '2014-09-17 10:55'
        message: ''
        version: '19'
    -
        author: Solen Guitter
        date: '2014-09-16 17:58'
        message: ''
        version: '18'
    -
        author: Solen Guitter
        date: '2014-09-02 17:18'
        message: Renamed titles
        version: '17'
    -
        author: Manon Lumeau
        date: '2014-06-05 15:04'
        message: ''
        version: '16'
    -
        author: Manon Lumeau
        date: '2014-05-23 15:46'
        message: ''
        version: '15'
    -
        author: Manon Lumeau
        date: '2014-05-23 15:44'
        message: ''
        version: '14'
    -
        author: Anahide Tchertchian
        date: '2014-05-14 11:09'
        message: ''
        version: '13'
    -
        author: Anahide Tchertchian
        date: '2014-05-14 11:05'
        message: ''
        version: '12'
    -
        author: Anahide Tchertchian
        date: '2014-05-14 11:04'
        message: ''
        version: '11'
    -
        author: Solen Guitter
        date: '2013-09-02 14:49'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2013-09-02 14:49'
        message: ''
        version: '9'
    -
        author: Stéfane Fermigier
        date: '2010-10-06 08:08'
        message: Migrated to Confluence 4.0
        version: '8'
    -
        author: Stéfane Fermigier
        date: '2010-10-06 08:07'
        message: ''
        version: '7'
    -
        author: Stéfane Fermigier
        date: '2010-08-03 12:51'
        message: ''
        version: '6'
    -
        author: Stéfane Fermigier
        date: '2010-08-03 12:50'
        message: ''
        version: '5'
    -
        author: Stéfane Fermigier
        date: '2010-08-03 12:39'
        message: ''
        version: '4'
    -
        author: Alain Escaffre
        date: '2010-07-27 23:11'
        message: ''
        version: '3'
    -
        author: Alain Escaffre
        date: '2010-07-27 23:08'
        message: ''
        version: '2'
    -
        author: Alain Escaffre
        date: '2010-07-27 23:06'
        message: ''
        version: '1'

---
{{{multiexcerpt 'JSF-UI-required' page='generic-multi-excerpts'}}}

{{! excerpt}}
By default, if you create a folderish document type, the **New** button will not be displayed on the default summary view. This page explains how to add it, as well as how to add the **New** button to a custom tab.&nbsp;
{{! /excerpt}}

## Adding the New&nbsp;Button to the Content Tab

1.  In Studio go to your document type definition tab.
2.  In the **Accepted Children Types** section, check **Show Create Child Action**.
    ![]({{file name='Image 4.png'}} ?w=400,border=true)
3.  Click on the **Save** button.

## Adding the New Button to a Custom Tab

The steps below explain how to have the same **New** button as the one on the Content tab.

**To add the New button on a custom tab:**

1.  In Studio go to your custom tab.
2.  Drop the "Toolbar actions" widget in a cell.
3.  On the Layout widget editor:

    1.  Check the **Hide label** box.
    2.  Choose the category "[Folder Toolbar]({{page space='studio' page='user-actions-categories#subview_upper_list'}})".&nbsp;
    3.  In the **Action display** list, select "Button".
4.  Click on **Save**.
    The **New** button will be available in your custom tab.

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Popular How-Tos'}}

- [How to Add a New Action Category on a Document Tab]({{page page='how-to-add-a-new-action-category-on-a-document-tab'}})
- [How to Define a Document Type]({{page page='how-to-define-a-document-type'}})
- [How-To Index]({{page page='how-to-index'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [Actions Overview]({{page page='actions-overview'}})
- [Documents in Nuxeo Studio]({{page space='studio' page='documents'}})
- [Tabs in Nuxeo Studio]({{page space='studio' page='tabs'}})
- [User actions categories]({{page space='studio' page='user-actions-categories'}})

{{/panel}}</div></div>
