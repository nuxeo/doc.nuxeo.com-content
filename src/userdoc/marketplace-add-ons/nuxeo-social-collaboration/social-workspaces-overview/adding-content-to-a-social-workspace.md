---
title: Adding Content to a Social Workspace
review:
    comment: ''
    date: ''
    status: ok
labels:
    - articles
confluence:
    ajs-parent-page-id: '21299519'
    ajs-parent-page-title: Social Workspaces Overview
    ajs-space-key: USERDOC60
    ajs-space-name: Nuxeo Platform User Documentation — 6.0
    canonical: Adding+Content+to+a+Social+Workspace
    canonical_source: >-
        https://doc.nuxeo.com/display/USERDOC60/Adding+Content+to+a+Social+Workspace
    page_id: '21299544'
    shortlink: WAFFAQ
    shortlink_source: 'https://doc.nuxeo.com/x/WAFFAQ'
    source_link: /display/USERDOC60/Adding+Content+to+a+Social+Workspace
history:
    - 
        author: Solen Guitter
        date: '2016-09-01 15:23'
        message: ''
        version: '28'
    - 
        author: Solen Guitter
        date: '2016-01-18 13:52'
        message: ''
        version: '27'
    - 
        author: Manon Lumeau
        date: '2014-12-05 18:16'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '26'
    - 
        author: Manon Lumeau
        date: '2014-12-05 18:16'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '25'
    - 
        author: Manon Lumeau
        date: '2014-12-05 18:16'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '24'
    - 
        author: Manon Lumeau
        date: '2014-12-05 18:16'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '23'
    - 
        author: Manon Lumeau
        date: '2014-12-05 18:16'
        message: ''
        version: '22'
    - 
        author: Solen Guitter
        date: '2013-12-02 15:48'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '21'
    - 
        author: Solen Guitter
        date: '2013-12-02 15:48'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '20'
    - 
        author: Solen Guitter
        date: '2013-12-02 15:48'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '19'
    - 
        author: Solen Guitter
        date: '2013-12-02 15:48'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '18'
    - 
        author: Solen Guitter
        date: '2013-12-02 15:48'
        message: ''
        version: '17'
    - 
        author: Solen Guitter
        date: '2013-11-04 19:00'
        message: ''
        version: '16'
    - 
        author: Solen Guitter
        date: '2013-10-22 18:26'
        message: ''
        version: '15'
    - 
        author: Solen Guitter
        date: '2012-10-10 11:08'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '14'
    - 
        author: Solen Guitter
        date: '2012-10-10 11:08'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '13'
    - 
        author: Solen Guitter
        date: '2012-10-10 11:08'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '12'
    - 
        author: Solen Guitter
        date: '2012-10-10 11:08'
        message: ''
        version: '11'
    - 
        author: Solen Guitter
        date: '2012-10-09 18:31'
        message: ''
        version: '10'
    - 
        author: Solen Guitter
        date: '2012-06-13 16:52'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '9'
    - 
        author: Solen Guitter
        date: '2012-06-13 16:52'
        message: Migrated to Confluence 4.0
        version: '8'
    - 
        author: Solen Guitter
        date: '2012-06-13 16:52'
        message: Fixed links
        version: '7'
    - 
        author: Solen Guitter
        date: '2011-12-21 16:54'
        message: ''
        version: '6'
    - 
        author: Solen Guitter
        date: '2011-12-20 18:07'
        message: Added link to News creation
        version: '5'
    - 
        author: Solen Guitter
        date: '2011-12-20 18:06'
        message: Added screenshots
        version: '4'
    - 
        author: Solen Guitter
        date: '2011-11-21 18:03'
        message: Added steps from Document Management View
        version: '3'
    - 
        author: Solen Guitter
        date: '2011-11-17 16:26'
        message: Added creation steps from document library gadget
        version: '2'
    - 
        author: Solen Guitter
        date: '2011-11-17 15:33'
        message: ''
        version: '1'

---
{{{multiexcerpt 'nuxeo_social_collaboration_deprecated' page='Nuxeo Social Collaboration'}}}

The members of a social workspace can create and edit content in the workspace.

The documents that can be create in a social workspaces are:

*   Files,
*   Articles,
*   Events,
*   Folders.

{{#> callout type='info' }}

The administrators of the social workspace can also create [News]({{page page='working-with-news'}}).

{{/callout}}

Articles are the main document type in social workspaces. All documents can be created either from the collaboration view or the document management view.

There are several ways to create articles:

*   [Using the complete creation form](#complete-article-creation),
*   [Using the quick creation form the workspace's dashboard](#quick-article-creation),
*   [Using the regular document management interface](#article-creation-from-dm-view).

{{#> callout type='tip' heading='Initial versioning of documents in public social workspaces'}}

In public social workspaces, documents created as public automatically go into version 0.1, since they are automatically published. Private documents are created in version 0.0.

{{/callout}}

{{> anchor 'complete-article-creation'}} **To create an article using the complete form:**

1.  From the dashboard of the social workspace or an article, click on the **Actions** button.
2.  Click on **Create an article**.
3.  Fill in the article creation form (see below for article's properties).
    ![]({{file name='article_creation.png'}} ?w=650,border=true)
4.  Click on **Create**.
    The article's collaboration view is displayed.
    ![]({{file name='article_created.png'}} ?w=650,border=true)

    {{#> callout type='tip' }}

    The same steps can be followed to create a file, by clicking **Create a file** from the **Actions** button

    {{/callout}}

{{! multiexcerpt name='articles-properties'}}

&nbsp;**Article properties**

<table><tbody><tr><th colspan="1">Field</th><th colspan="1">Field</th></tr><tr><td colspan="1">Title</td><td colspan="1">Name of the article</td></tr><tr><td colspan="1">Description</td><td colspan="1">Summary of the article. This description is displayed in the gadgets.</td></tr><tr><td colspan="1">Publication</td><td colspan="1">For public workspaces. Select who should see the article : only the space members (Restricted to the Social Workspace) or all users (public).</td></tr><tr><td colspan="1">Picture</td><td colspan="1">Upload an image to illustrate your article.</td></tr><tr><td colspan="1">Content</td><td colspan="1">Type the content of your article.</td></tr><tr><td colspan="1">Format</td><td colspan="1">Select which format should be used for the article.</td></tr></tbody></table>{{! /multiexcerpt}}

{{> anchor 'quick-article-creation'}} **To create a new document quickly from the dashboard:**

{{#> callout type='info' heading='Pre-requisite'}}

The dashboard must display the **Document library** gadget.

{{/callout}}

This view is intended to facilitate the creation of files. However, you can follow the same steps to create Articles, Files or Folders.

1.  On the dashboard's Document library gadget, click on the icon ![]({{file name='add_document.gif' page='icons-index'}}).
2.  Click on **File**
    The file creation form is displayed in the gadget.
    ![]({{file name='File_creation_from_doc_library.png'}} ?w=350,border=true)
3.  Fill in the title, description and content.
4.  Click on the **Create** button.
    The file is created and displayed in the Document library gadget.
    By default, the file is private. You can edit the article to add a picture.

{{> anchor 'article-creation-from-dm-view'}} **To create a new document in a social workspace, from the Document Management view:**
From this view you can create all the social workspace authorized document types.

1.  In the Document Management view, click on the **Collaboration** domain.
2.  Click on the social workspace you want to create a new document in.
3.  In the **Content** tab of the workspace, click on the **New** button.
4.  On the window **Available document types**, click on the desired document.
5.  Fill in the document's creation form.
6.  Click on the **Create** button.
    The **Summary** tab of the document is displayed.

&nbsp;