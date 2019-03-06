---
title: Content View - Results
review:
  comment: ''
  date: ''
  status: ok
labels:
  - content-view
toc: true
confluence:
  ajs-parent-page-id: '12912765'
  ajs-parent-page-title: Content Views
  ajs-space-key: Studio
  ajs-space-name: Nuxeo Online Services
  canonical: Content+View+-+Results
  canonical_source: 'https://doc.nuxeo.com/display/Studio/Content+View+-+Results'
  page_id: '12913150'
  shortlink: '-gnF'
  shortlink_source: 'https://doc.nuxeo.com/x/-gnF'
  source_link: /display/Studio/Content+View+-+Results
tree_item_index: 200
history:
  - author: Solen Guitter
    date: '2015-09-07 09:19'
    message: ''
    version: '7'
  - author: Anahide Tchertchian
    date: '2014-12-01 19:34'
    message: ''
    version: '6'
  - author: Solen Guitter
    date: '2014-11-03 18:58'
    message: ''
    version: '5'
  - author: Solen Guitter
    date: '2014-10-21 18:37'
    message: ''
    version: '4'
  - author: Benjamin Jalon
    date: '2013-03-07 18:10'
    message: ''
    version: '3'
  - author: Benjamin Jalon
    date: '2013-01-15 18:32'
    message: ''
    version: '2'
  - author: Benjamin Jalon
    date: '2013-01-15 18:31'
    message: ''
    version: '1'
---

{{{multiexcerpt 'JSF-UI-required' page='nxdoc/generic-multi-excerpts'}}}

Once you've [defined the query and form]({{page page='content-view-query-and-form-tab'}}) of your content view, you can define how to display the list of documents that match the query.

Search results, and so content listings, are presented in a table. You can configure the columns, i.e. the information on the documents that should be displayed in your content view. This is done in the **Results** tab of the content view.

## Pre-Requisites

{{{multiexcerpt 'jsf-ui-target-package-requirement-in-content-view' page='content-view-query-and-form-tab'}}}

## General Configuration

The first section of the Results tab enables you to define some general configuration on the content view results.

- **Number of results per page**: The default numbers of documents displayed by page
- **Enable the user to edit displayed column**: Enables the user to edit the search results displayed
- **Enable spreadsheet action**: Enables the user to use the Nuxeo Spreadsheet features from the content view results.
- **Enable common actions (copy, paste, delete...)**: Makes the generic bulk actions available when user selects one or several documents
- **Enable additional actions**: Makes it possible to use custom actions on documents displayed in the content view. Click on **Create a new action** to [create the action]({{page page='user-actions'}}) to use.

## Results Columns

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Content View - Results/Results Grid
    name: Studio-content-view-results-grid.png
    studio_modeler#screenshot#up_to_date
--}}
![Results Grid](nx_asset://63d46dc0-e96e-4dd6-acec-7ae11aed3ab0 ?w=600,border=true)

To define the results layout:

1.  Select a widget in the right panel.
2.  Drag it on the results grid and drop it on a Drop widget it here cell.
3.  If necessary change the widget type and properties and click on **Save**.
4.  If necessary click on the icon ![]({{file name='editor_area.gif' page='studio-icons-index'}})of the blue header cell to edit the Column title properties:
    - **Label**: The column title
    - **Label for column selection**: The label of the column in the Edit available data pop-up
    - **Translated**: Check the box if the labels are internationalized
    - **Style class**: Indicate the custom CSS class if any
    - **Sort property**: Select how content should be sorted when user clicks on the column title

Other options in the Result columns section are:

- **Reference an existing table layout**: Check the box to use a layout defined in the Table layout section. This hides the results grid.
- **Display layout mode selection**: Makes the views available on the content so users can [change the way the document list is displayed]({{page space='userdoc58' page='changing-workspace-content-presentation'}}).
- **Additional result column**: Select the columns that should be displayed in the Edit available data pop-up.

## Advanced Configuration

You can set some advanced configuration on the content results. Click on the icon ![]({{file name='help-icon.png' page='studio-icons-index'}}) of each field to know how to use it. You can also have a look at the [technical documentation about Content Views](http://doc.nuxeo.com/x/FQ4z).
