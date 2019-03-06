---
title: How to Add a New Action Category on a Document Tab
review:
    comment: ''
    date: '2015-12-01'
    status: ok
details:
    howto:
        excerpt: 'This page explains how to create new actions categories to add links or buttons on the custom tab of documents, using Nuxeo Studio.'
        level: Beginner
        tool: Studio
        topics: 'Document type, Tab, User action, Widget'
labels:
    - content-review-lts2016
    - howto
    - layout
    - action
    - atchertchian
    - studio
    - content-review-lts2017
    - jsf-ui
confluence:
    ajs-parent-page-id: '19235610'
    ajs-parent-page-title: Action How-To Index
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: How+to+Add+a+New+Action+Category+on+a+Document+Tab
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/How+to+Add+a+New+Action+Category+on+a+Document+Tab'
    page_id: '8192068'
    shortlink: RAB9
    shortlink_source: 'https://doc.nuxeo.com/x/RAB9'
    source_link: /display/NXDOC/How+to+Add+a+New+Action+Category+on+a+Document+Tab
tree_item_index: 200
history:
    -
        author: Manon Lumeau
        date: '2016-06-09 13:40'
        message: ''
        version: '18'
    -
        author: Solen Guitter
        date: '2016-04-14 16:02'
        message: Fix Studio menu label
        version: '17'
    -
        author: Manon Lumeau
        date: '2015-12-07 11:01'
        message: ''
        version: '16'
    -
        author: Solen Guitter
        date: '2014-12-01 22:33'
        message: ''
        version: '15'
    -
        author: Anahide Tchertchian
        date: '2014-12-01 12:12'
        message: ''
        version: '14'
    -
        author: Solen Guitter
        date: '2014-09-17 17:03'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2014-09-17 17:01'
        message: ''
        version: '12'
    -
        author: Anahide Tchertchian
        date: '2014-05-14 11:05'
        message: ''
        version: '11'
    -
        author: Solen Guitter
        date: '2014-03-10 17:51'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2014-01-20 15:58'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2013-07-17 17:31'
        message: 'Added excerpt, formatting'
        version: '8'
    -
        author: Solen Guitter
        date: '2011-09-06 15:16'
        message: Migrated to Confluence 4.0
        version: '7'
    -
        author: Solen Guitter
        date: '2011-09-06 15:16'
        message: Added related tutorials
        version: '6'
    -
        author: Solen Guitter
        date: '2011-09-02 16:49'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2011-09-02 12:19'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2011-07-12 12:31'
        message: ''
        version: '3'
    -
        author: Solen Guitter
        date: '2011-07-12 12:25'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2011-07-11 19:06'
        message: ''
        version: '1'

---
{{{multiexcerpt 'JSF-UI-required' page='generic-multi-excerpts'}}}

Nuxeo Studio enables you to add new buttons and links, called actions, when you implement new features. These actions are located in predefined places on the page, that we call action categories.

{{! excerpt}}
It is possible to define new action categories on the custom tab of documents, that is to say new places on that tab where you can add new links, icons or buttons.
{{! /excerpt}}

## Creating a New Category

**To create a new action category:**

1.  In the **Settings** menu, click on **Registries** to unfold it, and click on the **Action categories** item.
    ![]({{file name='registries_action_categories.png'}} ?w=200,border=true,thumbnail=true)
2.  Click on **See Example** to display the example and click on the **Insert** link to use the example as a basis.
    The example is copied in the text area below.
3.  Keep only the section `MyActionCat`.
4.  Edit the `MyActionCat` definition:

    *   replace `MyActionCat` by the ID of your new action category,
    *   replace `My First Action Category` by the name of you new action category label that will be displayed in the Studio user interface. Be sure not to remove the double quotes.
5.  Click on the **Save** button.
    You new category is now created. It is immediately available in the **Category** drop down list when you create or edit an action.
    But you haven't yet defined on which tab it should be available.

## Use Your New Category on the Custom Tab of a Document

To use your new category on a custom tab:

1.  Create a new tab (**Listing & Views** > **Tabs**).
2.  Define the structure of your tab, and, in the appropriate cell, drag and drop the **Toolbar actions** widget.
3.  Click on the icon&nbsp;![]({{file name='editor_area.gif' space='studio' page='studio-icons-index'}}) of the widget to edit it.
4.  In the **Category** list, select your new category.
    ![]({{file name='toolbar-action-widget-custom-category.png'}} ?w=400,border=true)
5.  Click on the **Save** button.
    The new action location is saved and you can now create links and buttons to be displayed there.

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Popular How-Tos'}}

- [How to Add a Button in the JSF UI]({{page page='how-to-add-a-button-in-the-jsf-ui'}})
- [How to Make the New Button Appear on a Custom Folderish Document]({{page page='how-to-make-the-new-button-appear-on-a-custom-folderish-document'}})
- [How-To Index]({{page page='how-to-index'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [Custom Action Types]({{page page='custom-action-types'}})
- [Standard Action Types]({{page page='standard-action-types'}})
- [Tabs in Nuxeo Studio]({{page space='studio' page='tabs'}})
- [User actions categories]({{page space='studio' page='user-actions-categories'}})

{{/panel}}</div></div>
