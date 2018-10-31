---
title: How to Publish a News Feature in Workspaces
review:
    comment: ''
    date: '2018-10-31'
    status: ok
labels:
    - content-review-lts2016
    - tutorial
    - mlumeau
    - studio
    - excerpt
    - content-review-lts2017
toc: true
notes: Documentation page used by the Marketing team. Check with Marketing before deleting or moving.
confluence:
    ajs-parent-page-id: '19235679'
    ajs-parent-page-title: Educational
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: How+to+Publish+a+News+Feature+in+Workspaces
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/How+to+Publish+a+News+Feature+in+Workspaces'
    page_id: '4689520'
    shortlink: cI5H
    shortlink_source: 'https://doc.nuxeo.com/x/cI5H'
    source_link: /display/NXDOC/How+to+Publish+a+News+Feature+in+Workspaces
tree_item_index: 500
history:
    -
        author: Manon Lumeau
        date: '2015-11-17 14:19'
        message: ''
        version: '19'
    -
        author: Bertrand Chauvin
        date: '2015-11-16 15:53'
        message: Remove DM mention
        version: '18'
    -
        author: Manon Lumeau
        date: '2015-11-16 10:21'
        message: ''
        version: '17'
    -
        author: Solen Guitter
        date: '2013-09-02 17:12'
        message: ''
        version: '16'
    -
        author: Solen Guitter
        date: '2011-01-28 16:27'
        message: Migrated to Confluence 4.0
        version: '15'
    -
        author: Solen Guitter
        date: '2011-01-28 16:27'
        message: ''
        version: '14'
    -
        author: Solen Guitter
        date: '2011-01-28 14:44'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2011-01-28 14:43'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2011-01-28 14:43'
        message: ''
        version: '11'
    -
        author: Solen Guitter
        date: '2011-01-27 19:18'
        message: ''
        version: '10'
    -
        author: Alain Escaffre
        date: '2011-01-27 00:37'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2011-01-26 17:53'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2011-01-26 17:51'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2011-01-26 17:16'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2011-01-26 16:50'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2011-01-19 08:38'
        message: formatting and typos
        version: '4'
    -
        author: Solen Guitter
        date: '2011-01-18 18:32'
        message: fixed typoes
        version: '3'
    -
        author: Alain Escaffre
        date: '2011-01-18 08:37'
        message: ''
        version: '2'
    -
        author: Alain Escaffre
        date: '2011-01-18 08:34'
        message: ''
        version: '1'

---
{{{multiexcerpt 'JSF-UI-required' page='generic-multi-excerpts'}}}

## Concept

{{! excerpt}}

This how-to explains how to add a small "News" feature to your Nuxeo Platform for enabling News content publishing at workspace level, using only Nuxeo Studio.

{{! /excerpt}}

*   A `News` is a simple document with a title and a Rich content body, where it is possible to set HTML and pictures.
*   `News` are stored in a dedicated folder inside the workspace.
*   People having the "Edit" permission inside a workspace can create draft `News` directly from the workspace, by clicking one single button.
*   `News` will be displayed on a front tab at workspace level.
*   The publishing process will be based on the default Nuxeo lifecycle: if a `News` is in "approved" state (vs initial "draft" state), then it is automatically displayed in the front tab (the title and the HTML body). To do this publishing action, users having "NewsManagement" role will click on a contextual button, on the News' upper right corner, to approve the `News`.
*   `News` will be ordered by descending date of publishing, and we want to see only the first three news.

## Technical Analysis

### News document type

It is composed of a title that can be edited using a HTML Widget. The HTML widget in Nuxeo applications has the ability to upload pictures for the rich content, providing the target type has the "files" schema: this one will be added to our `News` type.

When they are published, `News` must be sorted by their publishing date. Considering what "publishing" means here, the publishing date is the time when it was approved. We will store that information on the default Dublin Core field `dc:valid` , which accepts a date.

**News tab**

To display the published news, we will use a "content view" on a front tab at workspace level. It means that the list of "published news" will be the result of a query. This query looks like "_select all news which are inside this workspace and which are published, ordered by their publishing date_", which can be translated by:

```
ecm:isVersion = 0 AND ecm:currentLifeCycleState = 'approved' AND ecm:primaryType ='News' AND ecm:path STARTSWITH ?
```

where `?` will be replaced by the dynamical expression `#{currentDocument.path}`.

### NewsManagement permission

To implement the "NewsManagement" role, we will create a new permission called NewsManagement. It will be bound to the Workspace type, so that it is assignable only on workspaces. This NewsManagement permission will be used to "filter" the two buttons that will have to be created: the button to create the news, and the button to publish the content.

The **Create News** button will be displayed on the Folder toolbar category of Workspace type, next to the **New** button. But we want the news to be created in a specific subfolder of the workspace, the "news" folder. To achieve this, we will be using the following operation combo set:

1.  Fetch > Document `./news`: note the use of relative path, as we are on the workspace.
2.  Navigate to document: that changes the current document to "news" folder.
3.  Show Create Document page, with type `News`, that displays the content form.

And to make sure that there is always a News folder inside the workspace, we will configure a "content-template", that says that each time a workspace is created, a folder called "News Folder" is created inside it.
Also, as the news are created through this button, we don't want the News type to appear in the list of document types that are displayed when clicking on the **New** button in Nuxeo Platform.

The **Publish News** button is quite simple, just operating a `follow transition` on the document and updating the `dc:valid` date with the current date.
