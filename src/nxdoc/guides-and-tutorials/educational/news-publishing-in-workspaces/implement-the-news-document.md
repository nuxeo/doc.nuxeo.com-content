---
title: Implement the News document
review:
    comment: ''
    date: ''
    status: ok
labels:
    - tuto-document-type
    - tuto-user-action
confluence:
    ajs-parent-page-id: '22380594'
    ajs-parent-page-title: News publishing in workspaces
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: Implement+the+News+document
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC60/Implement+the+News+document'
    page_id: '22380659'
    shortlink: c4BVAQ
    shortlink_source: 'https://doc.nuxeo.com/x/c4BVAQ'
    source_link: /display/NXDOC60/Implement+the+News+document
tree_item_index: 100
history:
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

*   create the News document type,
*   create the content template with News Folder,
*   add a button dedicated to news creation.

{{#> callout type='info' }}

For this section, it is recommended to take a look at the how-tos for a step-by-step approach:

*   [How to define a document type]({{page page='how-to-define-a-document-type'}}),
*   [Use Content Automation]({{page page='how-to-define-a-new-content-view'}})[.]({{page page='how-to-define-a-new-content-view'}})

{{/callout}}

## Create the News document type

1.  Create a new document type called `News` that extends the "Document" type.
2.  On the **Definition** tab:
    *   Container type: Document

        {{#> callout type='tip' }}

        A document type must have a container. However if you do not want your document type to be displayed in the available document list window, you can select Document type as the container.

        {{/callout}}
    *   Inherited schemas: add `files` schema (necessary so that pictures that are uploaded with HTML widget are stored).
3.  On the **Schema** tab, add a field `body` of type `String`.
4.  Create the layouts of the document:
    *   Creation form metadata: `dc:title` as text widget, `news:body` as HTML widget.
    *   Edit form metadata: import Creation layout (it is the same).
    *   View form metadata: import Creation layout and add `dc:valid` as DateTime widget on a third row.

The "News" document type is now created. However, there is no way to access the creation form for now.

## Create the structure template for News folder to be available automatically

1.  Create a new Structure Template:
    *   ID: Workspace
    *   Target Document Type: Workspace
2.  Add a new built-in type: Folder
    *   Node Name: NewsFolder
    *   Title= News Folder

Now, every time a workspace is created, a folder called "News Folder" will automatically be created in it by the system.

## Add the news creation button

Here are the steps to create the button to create news from a Workspace into the News Folder:

1.  Create a new User Action. Its properties:
    *   ID: `CreateNewsButton`
    *   Label: Create news
    *   Category: Folder toolbar
2.  Enablement conditions:
    *   User has permission : `Write`
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
