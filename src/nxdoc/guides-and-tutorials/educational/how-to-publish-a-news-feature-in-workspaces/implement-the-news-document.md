---
title: Implement the News Document
review:
    comment: ''
    date: ''
    status: ok
labels:
    - lts2015-ok
    - tuto-user-action
    - tuto-document-type
toc: true
confluence:
    ajs-parent-page-id: '28475728'
    ajs-parent-page-title: How to Publish a News Feature in Workspaces
    ajs-space-key: NXDOC710
    ajs-space-name: Nuxeo Platform Developer Documentation — LTS 2015
    canonical: Implement+the+News+Document
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC710/Implement+the+News+Document'
    page_id: '28475797'
    shortlink: lYGyAQ
    shortlink_source: 'https://doc.nuxeo.com/x/lYGyAQ'
    source_link: /display/NXDOC710/Implement+the+News+Document
tree_item_index: 100
history:
    -
        author: Manon Lumeau
        date: '2016-04-28 12:56'
        message: 'ix Studio menu label     '
        version: '17'
    -
        author: Solen Guitter
        date: '2016-02-10 09:01'
        message: Update Schema tab step
        version: '16'
    -
        author: Manon Lumeau
        date: '2016-01-18 16:56'
        message: 'replace "Write" by "Edit"    '
        version: '15'
    -
        author: Manon Lumeau
        date: '2015-11-17 14:21'
        message: ''
        version: '14'
    -
        author: Manon Lumeau
        date: '2015-11-16 17:26'
        message: ''
        version: '13'
    -
        author: Manon Lumeau
        date: '2015-11-16 17:25'
        message: ''
        version: '12'
    -
        author: Manon Lumeau
        date: '2015-11-16 16:56'
        message: ''
        version: '11'
    -
        author: Alain Escaffre
        date: '2014-05-06 00:53'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2011-01-28 16:29'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2011-01-28 16:29'
        message: updated reference howtos
        version: '8'
    -
        author: Solen Guitter
        date: '2011-01-28 16:23'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2011-01-28 16:21'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2011-01-28 16:17'
        message: moving workspace content view section
        version: '5'
    -
        author: Solen Guitter
        date: '2011-01-28 11:22'
        message: added all content type and structure instructions
        version: '4'
    -
        author: Alain Escaffre
        date: '2011-01-27 00:25'
        message: ''
        version: '3'
    -
        author: Alain Escaffre
        date: '2011-01-27 00:25'
        message: ''
        version: '2'
    -
        author: Alain Escaffre
        date: '2011-01-27 00:09'
        message: ''
        version: '1'
next_link: nxdoc/add-a-news-content-view-on-workspaces

---
In this section, we will:

*   Create the News document type,
*   Create the content template with News Folder,
*   Add a button dedicated to news creation.

{{#> callout type='info' }}

For this section, it is recommended to take a look at the how-tos for a step-by-step approach:

*   [How to define a document type]({{page page='how-to-define-a-document-type'}})
*   [Use Content Automation]({{page page='how-to-define-a-new-content-view'}})

{{/callout}}

## Create the News Document Type

1.  Create a new document type called `News` that extends the "Document" type.
2.  On the **Definition** tab, set Document as the Container Type.

    {{#> callout type='tip' }}

    A document type must have a container. However if you do not want your document type to be displayed in the available document list window, you can select Document type as the container.

    {{/callout}}
3.  On the **Schema** tab:
    *   Add the `files` schema (necessary so that pictures that are uploaded with HTML widget are stored)
    *   Add a field `body` of type `String`
4.  Create the layouts of the document:
    *   Creation form metadata: `dc:title` as text widget, `news:body` as HTML widget.
    *   Edit form metadata: import Creation layout (it is the same).
    *   View form metadata: import Creation layout and add `dc:valid` as DateTime widget on a third row.

The `News`&nbsp;document type is now created. However, there is no way to access the creation form for now.

## Create the Structure Template for News Folder to Be Available Automatically

1.  Create a new Structure Template:
    *   ID: Workspace
    *   Target Document Type: Workspace
2.  Add a new built-in type: Folder
    *   Node Name: NewsFolder
    *   Title: News Folder

![]({{file name='structuretemplate_workspace.png'}} ?w=650,border=true)

Now, every time a workspace is created, a folder called "News Folder" will automatically be created in it by the system.

## Add the News Creation Button

Here are the steps to create the button to create news from a Workspace into the News Folder:

1.  Create a new User Action. Its properties:
    *   ID: `CreateNewsButton`
    *   Label: Create news
    *   Category: Folder toolbar
2.  Activation conditions:
    *   User has permission : `<span style="font-family: monospace;"><span style="font-size: 14.0px;line-height: 12.6px;background-color: rgb(248,248,248);">Edit</span></span>`
    *   Current document has type : `Workspace`
3.  Create new operation chain `CreateNewsChain`:

    <div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">

    Step

    </th><th colspan="1">

    Operation

    </th><th colspan="1">

    Parameter

    </th></tr><tr><td colspan="1">

    1

    </td><td colspan="1">

    Fetch > Document

    </td><td colspan="1">

    Value: `./NewsFolder`

    </td></tr><tr><td colspan="1">

    2

    </td><td colspan="1">

    User Interface > Navigate to Document

    </td><td colspan="1">

    &nbsp;

    </td></tr><tr><td colspan="1">

    3

    </td><td colspan="1">

    User Interface > Show Create Document Page

    </td><td colspan="1">

    Value: `News`

    </td></tr></tbody></table></div>

    You should end up with something like this:
    ![]({{file name='CreateNewsChain.png'}} ?w=600,border=true)
