---
title: How to Enable Drag and Drop and New Button on a Custom Content View
review:
    comment: ''
    date: '2016-12-19'
    status: ok
details:
    howto:
        excerpt: Make a custom content view look like the default Content tab.
        level: Beginner
        tool: Studio
        topics: 'Content view, Tab, JSF UI, UI'
labels:
    - lts2016-ok
    - howto
    - content-view
toc: true
confluence:
    ajs-parent-page-id: '20517820'
    ajs-parent-page-title: JSF UI How-To Index
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: How+to+Enable+Drag%27n+Drop+and+New+Button+on+a+Custom+Content+View
    canonical_source: >-
        https://doc.nuxeo.com/display/NXDOC/How+to+Enable+Drag%27n+Drop+and+New+Button+on+a+Custom+Content+View
    page_id: '26313229'
    shortlink: DYKRAQ
    shortlink_source: 'https://doc.nuxeo.com/x/DYKRAQ'
    source_link: >-
        /display/NXDOC/How+to+Enable+Drag%27n+Drop+and+New+Button+on+a+Custom+Content+View
tree_item_index: 1600
history:
    -
        author: Solen Guitter
        date: '2016-09-05 09:42'
        message: pdate how-to topic
        version: '6'
    -
        author: Manon Lumeau
        date: '2016-08-03 09:58'
        message: ''
        version: '5'
    -
        author: Manon Lumeau
        date: '2016-03-21 10:07'
        message: ''
        version: '4'
    -
        author: Thierry Martins
        date: '2015-07-21 16:15'
        message: ''
        version: '3'
    -
        author: Solen Guitter
        date: '2015-07-21 16:06'
        message: ''
        version: '2'
    -
        author: Thierry Martins
        date: '2015-07-20 09:17'
        message: ''
        version: '1'

---
You should follow this how-to if you want to either:

*   Replace the default Content tab of a folderish document type
*   Or add a new tab from which users should be able to create children documents.

To do so, you basically need to create a new tab with some specific properties.

## Before You Start

Before you follow the steps below, you should already have configured the items below:

*   A [document type]({{page page='how-to-define-a-document-type'}}) with the following properties:
    *   Folderish facet
    *   Accepts children document types (File or extending file)
*   A [custom content view]({{page page='how-to-define-a-new-content-view'}}), obviously.

## Setting up Your Custom Tab

To set a content view with Drag and Drop and the **New** button:

1.  In Studio, go to **Listings & Views** > **Tabs**.
2.  Click the **New** button and enter a name for the Feature ID: `ContentViewWithDnDandNewButton`. And click **Next** to validate.
3.  Set a value for **Order** if you don't want the new tab to be displayed as the first tab.
4.  Drag the widget **Drop zone** from **Featured widgets** > **Built-in widgets** and drop it in the first cell of the tab grid.
5.  In the **Widget Layout Editor** that pops up, set the properties as follows and save:

    *   **Hide label**: checked
    *   **Add surrounding form**: unchecked
    *   **Custom configuration properties**: `dropContext`: `ContentView`
7.  Click on the icon ![]({{file name='edit_subwidgets.png' space='studio' page='studio-icons-index'}}) of the Drop zone widget.
8.  In the first line, drop a **Generic widget** from **More widgets** > **Advanced widgets**.
9.  In the Widget Layout Editor, set the properties as follows and save:

    *   **Hide label**: checked
    *   **Widget type**: documentActionsWithForms
    *   **Category**: Folder Toolbar
    *   **Actions Display**: Buttons
    *   **Overall display**: Horizontal bloc
11.  In the second line, drop a **Content View** widget from **Featured widgets** > **Tab widgets**.
12.  In the Widget Layout Editor, set the properties as follows and save:

    *   **Content View name**: Select the content view you want to display.

14.  Click on **Go back to previous page** to go back on the tab definition screen.
15.  Go to your tab's **Activation** tab and set the conditions (permissions, document types, etc) to make the new tab visible. Save.

Now you just need to [hot-reload your Studio project]({{page space='studio' page='deploying-your-project-in-dev-mode'}}). And a new tab will be visible for the selected document types.

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [How to Define a New Content View]({{page page='how-to-define-a-new-content-view'}})
- [Tabs defintion screen in Nuxeo Studio]({{page space='studio' page='tabs'}})
- [Content View How-To Index]({{page page='content-view-how-to-index'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
