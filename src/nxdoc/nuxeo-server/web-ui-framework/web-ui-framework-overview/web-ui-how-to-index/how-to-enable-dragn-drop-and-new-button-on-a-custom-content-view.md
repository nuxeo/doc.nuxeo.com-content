---
title: How to Enable Drag'n Drop and New Button on a Custom Content View
details:
    howto:
        excerpt: Make a custom content view look like the default Content tab.
        level: Beginner
        tool: Studio
        topics: 'Content view, Tab, Web UI'
labels:
    - howto
    - content-view
toc: true
confluence:
    ajs-parent-page-id: '20517820'
    ajs-parent-page-title: Web UI How-To Index
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
history:
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
*   A [content view]({{page page='how-to-define-a-new-content-view'}}), obviously.

## Setting up Your Custom Tab

To set a content view with Drag&Drop and the **New** button:

1.  In Studio, go to **Listings & Views** > **Tabs**.
2.  Click the **New** button and enter a name for the Feature ID:&nbsp;`ContentViewWithDnDandNewButton`. And click **Next** to validate.
3.  Set a value for **Order** if you don't want the new tab to be displayed as the first tab.
4.  Drag the widget **Drop zone** from Featured widgets > Built-in widgets and drop it in the first cell of the tab grid.
5.  In the Widget Layout Editor that pops up, set the properties as follow:

    *   **Hide label**: checked
    *   **Add surrounding form**: unchecked
    *   **Custom configuration properties**: `dropContext`: `ContentView`
6.  Click on **Save**.
7.  Click on the icon&nbsp;![]({{file name='edit_subwidgets.png' space='studio' page='studio-icons-index'}}) of the Drop zone widget.
8.  In the first line, drop a **Generic widget** from More widgets > Advanced widgets.
9.  In the Widget Layout Editor, set the properties as follow:

    *   **Hide label**: checked
    *   **Widget type**: documentActionsWithForms
    *   **Category**: Folder Toolbar
    *   **Actions Display**: Buttons
    *   **Overall display**: Horizontal bloc
10.  Click on **Save**.
11.  In the second line, drop a **Content View** widget from&nbsp;<span>Featured widgets > Tab widgets.</span>
12.  <span><span><span>In the Widget Layout Editor, set the properties as follow:</span></span></span>

    *   <span><span><span>**Content View name**: Select the content view you want to display.
        </span></span></span>
13.  <span>Click on **Save**.
    </span>
14.  <span>Cick on **Go back to previous page** to go back on the tab definition screen.</span>
15.  <span>Go to your tab's **Activation** tab and set the conditions (permissions, document types, etc) to make the new tab visible. Save.</span>

<span>Now you just need to [hot-reload your Studio project]({{page space='studio' page='deploying-your-project-in-dev-mode'}}). And a new tab will be visible for the selected document types.</span>

<span>
</span>

* * *