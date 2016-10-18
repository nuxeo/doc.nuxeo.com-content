---
title: Creating Content
review:
    comment: ''
    date: ''
    status: ok
labels:
    - creation
    - last-review-20141128
toc: true
confluence:
    ajs-parent-page-id: '21299520'
    ajs-parent-page-title: 'Creating, Editing and Deleting Content'
    ajs-space-key: USERDOC60
    ajs-space-name: Nuxeo Platform User Documentation — 6.0
    canonical: Creating+Content
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC60/Creating+Content'
    page_id: '21299493'
    shortlink: JQFFAQ
    shortlink_source: 'https://doc.nuxeo.com/x/JQFFAQ'
    source_link: /display/USERDOC60/Creating+Content
tree_item_index: 100
history:
    -
        author: Solen Guitter
        date: '2016-09-01 14:36'
        message: ''
        version: '30'
    -
        author: Manon Lumeau
        date: '2014-11-19 18:10'
        message: ''
        version: '29'
    -
        author: Manon Lumeau
        date: '2014-11-19 18:08'
        message: ''
        version: '28'
    -
        author: Manon Lumeau
        date: '2014-11-19 18:05'
        message: ''
        version: '27'
    -
        author: Manon Lumeau
        date: '2014-11-19 18:01'
        message: ''
        version: '26'
    -
        author: Manon Lumeau
        date: '2014-11-19 18:01'
        message: ''
        version: '25'
    -
        author: Manon Lumeau
        date: '2014-11-19 17:59'
        message: ''
        version: '24'
    -
        author: Manon Lumeau
        date: '2014-11-19 17:59'
        message: ''
        version: '23'
    -
        author: Manon Lumeau
        date: '2014-11-19 17:27'
        message: ''
        version: '22'
    -
        author: Manon Lumeau
        date: '2014-11-19 17:27'
        message: ''
        version: '21'
    -
        author: Solen Guitter
        date: '2014-06-19 16:36'
        message: ''
        version: '20'
    -
        author: Solen Guitter
        date: '2014-03-26 12:24'
        message: ''
        version: '19'
    -
        author: Solen Guitter
        date: '2014-02-24 14:48'
        message: ''
        version: '18'
    -
        author: Solen Guitter
        date: '2014-02-03 15:19'
        message: Formatting
        version: '17'
    -
        author: Solen Guitter
        date: '2013-10-31 14:06'
        message: ''
        version: '16'
    -
        author: Solen Guitter
        date: '2013-10-31 14:06'
        message: ''
        version: '15'
    -
        author: Solen Guitter
        date: '2013-10-22 17:53'
        message: ''
        version: '14'
    -
        author: Solen Guitter
        date: '2012-06-19 15:04'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2012-06-19 15:04'
        message: Added link
        version: '12'
    -
        author: Solen Guitter
        date: '2011-11-23 10:26'
        message: Added related content
        version: '11'
    -
        author: Solen Guitter
        date: '2011-11-23 10:22'
        message: Added related content
        version: '10'
    -
        author: Solen Guitter
        date: '2011-11-23 10:18'
        message: Added toc
        version: '9'
    -
        author: Solen Guitter
        date: '2011-06-06 11:32'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2011-06-06 11:32'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2010-12-01 11:17'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2010-09-30 17:45'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2010-09-30 11:50'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2010-09-30 11:49'
        message: ''
        version: '3'
    -
        author: Solen Guitter
        date: '2010-05-10 18:36'
        message: fixed broken links
        version: '2'
    -
        author: Solen Guitter
        date: '2010-04-27 11:05'
        message: ''
        version: '1'

---
{{! excerpt}}

Documents can be created in workspaces, templates and folders only. There are several ways to create documents in the Nuxeo Platform, either from the UI using forms, using [drag and drop import]({{page page='working-using-drag-and-drop'}}) from your desktop, or [creating them directly from MS Office or OpenOffice]({{page page='desktop-and-office-suites-integration'}}). This page focuses on the creation of documents through the Nuxeo Platform forms.

{{! /excerpt}}

You need to have "write" or "manage everything" rights to create documents.

## Creating a Document Using the New Button&nbsp;{{> anchor 'new-button'}}

Creating a document using the **New** button enables you to select the type of document you want to create among all Nuxeo Platform's document types.

![]({{file name='available-documents-workspace.png'}} ?w=500,border=true)

**To create a document using the New button:**

{{! multiexcerpt name='create-document'}}

1.  In the **Content** tab of the workspace, click on the **New** button.
2.  On the window **Available document types**, click on the desired document.
3.  Fill in the document's creation form.
4.  Click on the **Create** button.

{{! /multiexcerpt}}

The **Summary** tab of the document is displayed.

## Creating a Document Using the Import Button&nbsp;{{> anchor 'import-button'}}

You can use the **Import&nbsp;**button&nbsp;to create a document in a faster way.
Depending on the uploaded file type, the system will create a note, a file or a picture.

![]({{file name='import.png'}} ?w=200,border=true,thumbnail=true)

**To create a document using the Import button:**

1.  In the Workspace tab, click on the **Import**&nbsp;button.
2.  Fill in the **Import**&nbsp;window and drop the file(s) you want to upload,&nbsp;
    ![]({{file name='default_bulk_import.png'}} ?w=500,h=302,border=true)
3.  Click on **Import**.
    The **Content**&nbsp;tab of the document is displayed. The document automatically takes the name of the uploaded file as its title. The document has no description. You need to [modify the document]({{page page='editing-content'}}) to fill in this field.

&nbsp;
