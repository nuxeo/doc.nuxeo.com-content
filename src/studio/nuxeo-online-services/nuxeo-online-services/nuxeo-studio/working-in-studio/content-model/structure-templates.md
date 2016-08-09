---
title: Structure Templates
labels:
    - structure-template
    - lts2015-ok
toc: true
confluence:
    ajs-parent-page-id: '12911801'
    ajs-parent-page-title: Content Model
    ajs-space-key: Studio
    ajs-space-name: Nuxeo Online Services
    canonical: Structure+Templates
    canonical_source: 'https://doc.nuxeo.com/display/Studio/Structure+Templates'
    page_id: '12911981'
    shortlink: bQXF
    shortlink_source: 'https://doc.nuxeo.com/x/bQXF'
    source_link: /display/Studio/Structure+Templates
history:
    - 
        author: Frantz Fischer
        date: '2016-06-03 12:16'
        message: ''
        version: '16'
    - 
        author: Manon Lumeau
        date: '2015-11-26 10:19'
        message: replace "access rights" by "permissions"
        version: '15'
    - 
        author: Bertrand Chauvin
        date: '2015-05-12 09:41'
        message: ''
        version: '14'
    - 
        author: Bertrand Chauvin
        date: '2015-05-12 09:40'
        message: Added explanations
        version: '13'
    - 
        author: Manon Lumeau
        date: '2014-12-12 11:36'
        message: ''
        version: '12'
    - 
        author: Manon Lumeau
        date: '2014-12-12 11:34'
        message: ''
        version: '11'
    - 
        author: Manon Lumeau
        date: '2014-12-12 11:29'
        message: ''
        version: '10'
    - 
        author: Manon Lumeau
        date: '2014-12-12 11:28'
        message: ''
        version: '9'
    - 
        author: Manon Lumeau
        date: '2014-12-12 11:27'
        message: ''
        version: '8'
    - 
        author: Karl Harris
        date: '2013-06-10 12:06'
        message: ''
        version: '7'
    - 
        author: Karl Harris
        date: '2013-06-10 12:03'
        message: ''
        version: '6'
    - 
        author: Karl Harris
        date: '2013-06-10 12:02'
        message: ''
        version: '5'
    - 
        author: Alain Escaffre
        date: '2013-01-03 14:00'
        message: ''
        version: '4'
    - 
        author: Alain Escaffre
        date: '2013-01-03 13:50'
        message: ''
        version: '3'
    - 
        author: Alain Escaffre
        date: '2013-01-03 13:46'
        message: ''
        version: '2'
    - 
        author: Benjamin Jalon
        date: '2012-12-04 08:41'
        message: ''
        version: '1'

---
## Concept

When thinking of the structure of your repository, you might identify block of structures that will always be the same. For instance, by default with Nuxeo DM, when you create a Domain, you get subfolders Workspaces, Sections and Templates. You might also want such behavior when doing case management, so as to organize the structure of your case, ... Structure templates are actually a way of defining an automated structure that is bound to a folderish content type.

In simple words: "**Each time I create a document of such type, I will also instantiate children documents of this type and this type... with this ACL (security) configuration**". With Studio, you can contribute several of such rules.

Please note that there can be only one structure template for each document type, since it is meant to create a structure without prompting the user for a choice.

## Creating a new Structure Template

To create a structure template, click on **New**.

![]({{file name='NewStructureTemplate.png'}} ?w=350,h=269,border=true)

*   **Feature ID**: Technical ID of the feature
*   **Target&nbsp;** **document type**: This drop down list identifies all the document types of the platform and the one(s) you have created (see [how to override an existing document type]({{page space='nxdoc60' page='how-to-override-existing-document-types'}})).

## Editing a Structure Template

Once you have selected the target document type and clicked on **Next**, you will see the following pre-built structure.

![]({{file name='StructureTemplate-Domain.png'}} ?w=650,h=195,border=true)

*   **Add**: Add another document type to the structure template.&nbsp;
*   **ACL**:
    *   **Add**: A pop-up window is displayed where you have to manage the permissions&nbsp;to this structure (see the documentation about [permissions]({{page space='userdoc' page='managing-permissions'}})).&nbsp;
    *   **Edit**: Edit an access control.
    *   **Block Inheritance**: Block the permissions inheritance.
    *   **Delete**: Delete an access control (you can select several lines at a time).

On every document type that you want to add to your structure, you will have to define the **node properties**.

![]({{file name='StructureTemplate-Workspace.png'}} ?w=650,h=315,border=true)

*   **Node Type**: The ID node.
*   **Node Name**: The name displayed in Studio.
*   **Title**: The name of the document type displayed on your Nuxeo Platform.
*   **Description**: The description of the document type. This description is here for information purposes.