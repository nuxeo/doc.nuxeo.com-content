---
title: Structure Templates
review:
    comment: ''
    date: ''
    status: ok
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
tree_item_index: 400
history:
    -
        author: Solen Guitter
        date: '2016-08-30 14:34'
        message: ''
        version: '17'
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

{{#> callout type='info' heading='Nuxeo University'}}
Watch the related content in Nuxeo University:
- [Course on Content Model Design in Nuxeo Studio](https://university.nuxeo.com/learn/course/external/view/elearning/12/ContentModelDesigninNuxeoStudio)
- [Expert Session on Content Modeling Options](https://university.nuxeo.com/learn/course/external/view/elearning/203/ExpertSession-ContentModelingOptions)
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/UNIVERSITY/doctypes_university.png
    name: doctypes_university.png
    studio_modeler#screenshot#up_to_date
--}}
![doctypes_university.png](nx_asset://27d822b7-7815-48e0-95ad-0ff102a284d2 ?w=450,border=true)
{{/callout}}

## Concept

When thinking of the structure of your repository, you might identify block of structures that will always be the same. For instance, when you create a Domain, you get subfolders Workspaces, Sections and Templates. You might also want such behavior when doing case management, so as to organize the structure of your case, ... Structure templates are actually a way of defining an automated structure that is bound to a folderish content type.

In simple words: "**Each time I create a document of such type, I will also instantiate children documents of this type and this type... with this ACL (security) configuration**". With Studio, you can contribute several of such rules.

Please note that there can be only one structure template for each document type, since it is meant to create a structure without prompting the user for a choice.

{{{multiexcerpt 'disabling-feature' page='branding'}}}

## Creating a new Structure Template

To create a structure template, click on **New**.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Structure Templates/New Structure Template
    name: NewStructureTemplate.png
    studio_modeler#popup#up_to_date
--}}
![New Structure Template](nx_asset://e196a381-b06c-40de-a554-a7dc479531ca ?w=350,border=true)

* **Feature ID**: Technical ID of the feature
* **Target document type**: This drop down list identifies all the document types of the platform and the one(s) you have created (see [how to override an existing document type]({{page space='nxdoc60' page='how-to-override-existing-document-types'}})).

## Editing a Structure Template

Once you have selected the target document type and clicked on **Next**, you will see the following pre-built structure.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Structure Templates/Structure Template Domain
    name: StructureTemplate-Domain.png
    studio_modeler#screenshot#up_to_date
--}}
![Structure Template Domain](nx_asset://e26ccb42-7726-4d69-b498-8057bf109416 ?w=650,border=true)

- **Add**: Add another document type to the structure template.
- **ACL**:
    - **Add**: A pop-up window is displayed where you have to manage the permissions to this structure (see the documentation about [permissions]({{page space='userdoc' page='permissions'}})).
    - **Edit**: Edit an access control.
    - **Block Inheritance**: Block the permissions inheritance.
    - **Delete**: Delete an access control (you can select several lines at a time).

On every document type that you want to add to your structure, you will have to define the **node properties**.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Structure Templates/Structure Template Workspace
    name: StructureTemplate-Workspace.png
    studio_modeler#screenshot#up_to_date
--}}
![Structure Template Workspace](nx_asset://f3ee6e60-c1da-40e8-b067-5928ae04f3db ?w=650,border=true)

- **Node Type**: The ID node.
- **Node Name**: The name displayed in Studio.
- **Title**: The name of the document type displayed on your Nuxeo Platform.
- **Description**: The description of the document type. This description is here for information purposes.
