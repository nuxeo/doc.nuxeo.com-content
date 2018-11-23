---
title: Implement the News Document
review:
    comment: ''
    date: '2018-10-31'
    status: ok
labels:
    - lts2016-ok
    - tuto-document-type
    - tuto-user-action
    - content-review-lts2017
toc: true
confluence:
    ajs-parent-page-id: '4689520'
    ajs-parent-page-title: How to Publish a News Feature in Workspaces
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Implement+the+News+Document
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Implement+the+News+Document'
    page_id: '5570669'
    shortlink: bQBV
    shortlink_source: 'https://doc.nuxeo.com/x/bQBV'
    source_link: /display/NXDOC/Implement+the+News+Document
tree_item_index: 100
history:
    -
        author: Manon Lumeau
        date: '2016-04-28 12:57'
        message: 'ix Studio menu label     '
        version: '17'
    -
        author: Solen Guitter
        date: '2016-02-10 09:03'
        message: Update Schema tab step
        version: '16'
    -
        author: Manon Lumeau
        date: '2016-01-18 16:55'
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
next_link: /nxdoc/add-a-news-content-view-on-workspaces

---
{{{multiexcerpt 'JSF-UI-required' page='generic-multi-excerpts'}}}

In this section, we will:

- Create the News document type,
- Create the content template with News Folder,
- Add a button dedicated to News creation.

{{#> callout type='info' }}

For this section, it is recommended to take a look at the following guides for a step-by-step approach:

- [How to define a document type]({{page page='how-to-define-a-document-type'}})
- [Use Content Automation]({{page page='how-to-define-a-new-content-view'}})

{{/callout}}

## Before You Start

{{multiexcerpt 'check-jsf-ui-dependency' page='how-to-define-a-new-content-view'}}

## Create the News Document Type

1.  Create a new document type called `News`.

    {{#> callout type='tip' }}

    A document type must have a container. However if you do not want your document type to be displayed in the available document list window, you can select Document type as the container.

    {{/callout}}
2.  On the **Definition** tab, ensure that the our News document extends the **Document** type.    
3.  On the **Schema** tab:
    - Add the `files` schema (necessary so that pictures that are uploaded with a HTML widget are stored).
    - Under **Add a custom schema** a field `body` of type `String`.
4.  Create the layouts of the document:
    - **Creation layout** metadata: `dc:title` as text widget, `news:body` as a HTML text widget.
    - **Edit layout** metadata: import Creation layout (it is the same).
    - **View layout** metadata: import Creation layout and add `dc:valid` as DateTime widget on a third row.

    The `News` document type is now created. However, there is no way to access the creation form for now.

## Create the Structure Template for News Folder to Be Available Automatically

1.  Create a new Structure Template:
    - **ID**: Workspace
    - **Target Document Type**: Workspace
2.  Add a new built-in type: Folder
    - **Node Name**: NewsFolder
    - **Title**: News Folder
    ![]({{file name='structuretemplate_workspace.png'}} ?w=650,border=true)

    Now, every time a workspace is created, a folder called "News Folder" will automatically be created in it by the system.

## Add the News Creation Button

Here are the steps to create the button to create news from a Workspace into the News Folder:

1.  Create a new User Action. Its properties:
    - **ID**: `CreateNewsButton`
    - **Label**: Create news
    - **Category**: Folder toolbar
2.  Activation conditions:
    - **User has permission**: `Edit`
    - **Current document has type**: `Workspace`
3.  Create new operation chain `CreateNewsChain`:
    ```yaml
    - Repository.GetDocument:
        value: ./NewsFolder
    - Seam.NavigateTo
    - Seam.ShowCreateForm:
        type: News
    ```
    Now when you click on the **Create News** button, a News document will be created for the Workspace and stored directly in the News folder.
