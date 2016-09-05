---
title: Adding a "Type" Property to File Document Type
labels:
    - tuto-override-doc-type
    - tuto-document-type
    - file
    - tuto-layout
    - content-review-6-0
toc: true
confluence:
    ajs-parent-page-id: '3867540'
    ajs-parent-page-title: Custom Doc ID Generation
    ajs-space-key: Studio
    ajs-space-name: Nuxeo Online Services
    canonical: viewpage.action?pageId=3867547
    canonical_source: viewpage.action?pageId=3867547
    page_id: '3867547'
    shortlink: mwM7
    shortlink_source: 'https://doc.nuxeo.com/x/mwM7'
    source_link: /pages/viewpage.action?pageId=3867547
history:
    - 
        author: Manon Lumeau
        date: '2016-04-26 14:02'
        message: ix Studio menu label
        version: '28'
    - 
        author: Solen Guitter
        date: '2016-02-10 13:55'
        message: Schemas are now selected in Schema tab instead of Definition tab
        version: '27'
    - 
        author: Solen Guitter
        date: '2015-09-07 09:28'
        message: Add TCO
        version: '26'
    - 
        author: Solen Guitter
        date: '2014-03-07 16:43'
        message: ''
        version: '25'
    - 
        author: Solen Guitter
        date: '2014-03-07 16:19'
        message: ''
        version: '24'
    - 
        author: Solen Guitter
        date: '2011-01-10 15:57'
        message: Migrated to Confluence 4.0
        version: '23'
    - 
        author: Solen Guitter
        date: '2011-01-10 15:57'
        message: ''
        version: '22'
    - 
        author: whajeri
        date: '2010-12-06 16:13'
        message: ''
        version: '21'
    - 
        author: whajeri
        date: '2010-12-06 15:52'
        message: ''
        version: '20'
    - 
        author: Solen Guitter
        date: '2010-09-24 14:51'
        message: ''
        version: '19'
    - 
        author: Solen Guitter
        date: '2010-09-24 14:16'
        message: ''
        version: '18'
    - 
        author: Solen Guitter
        date: '2010-09-24 11:10'
        message: ''
        version: '17'
    - 
        author: Solen Guitter
        date: '2010-09-23 18:55'
        message: ''
        version: '16'
    - 
        author: Solen Guitter
        date: '2010-09-15 15:41'
        message: ''
        version: '15'
    - 
        author: Solen Guitter
        date: '2010-09-15 15:39'
        message: ''
        version: '14'
    - 
        author: Solen Guitter
        date: '2010-09-15 15:28'
        message: ''
        version: '13'
    - 
        author: Solen Guitter
        date: '2010-09-15 15:27'
        message: ''
        version: '12'
    - 
        author: Solen Guitter
        date: '2010-09-15 15:25'
        message: ''
        version: '11'
    - 
        author: Alain Escaffre
        date: '2010-09-15 01:46'
        message: ''
        version: '10'
    - 
        author: Alain Escaffre
        date: '2010-09-15 01:45'
        message: ''
        version: '9'
    - 
        author: Alain Escaffre
        date: '2010-09-15 01:45'
        message: ''
        version: '8'
    - 
        author: Alain Escaffre
        date: '2010-09-12 10:12'
        message: ''
        version: '7'
    - 
        author: Wojciech Sulejman
        date: '2010-09-09 17:38'
        message: ''
        version: '6'
    - 
        author: Alain Escaffre
        date: '2010-09-06 19:45'
        message: ''
        version: '5'
    - 
        author: Alain Escaffre
        date: '2010-09-06 19:12'
        message: ''
        version: '4'
    - 
        author: Alain Escaffre
        date: '2010-09-06 18:31'
        message: ''
        version: '3'
    - 
        author: Alain Escaffre
        date: '2010-09-06 18:20'
        message: ''
        version: '2'
    - 
        author: Alain Escaffre
        date: '2010-09-06 18:20'
        message: ''
        version: '1'

---
In this tutorial, we need the "file" document type to specifically have two metadata:

*   The "type" metadata, for which the user selects values among "Proposal", "Order", "Letter",... The selected type will determine the document's ID composition. This metadata doesn't exist in any of the built-in schemas, so it needs to be added.
*   The "uid" metadata, that will store the generated business ID. This metadata exists already in any document type inheriting from "Document" type.

To respect those two constraints, we will create a new document type that inherits from File (which itself inherit from Document) and will add the "type" file. This will take 3 steps :

1.  [create a schema with the new "type" metadata](#step1),
2.  [create the new "File" document type](#step2) that will override the default "file" document type,

    {{#> callout type='tip' }}

    Overriding a type definition is as simple as creating a new document type with the same name as the one being overridden.

    {{/callout}}
3.  [create the File's forms](#step3).

## {{> anchor 'step1'}}Step 1: Creating a Schema with the New "Type" Metadata

1.  Click on the **Content Model&nbsp;**>&nbsp;**Schemas** item in the Studio tree, and click on **New**.
2.  Fill-in the required information and click on the **Next** button.
    *   Feature ID: `additionalInfo`
    *   Schema prefix: `additionalInfo`
3.  Click on the **Add field** button to add a line and fill it in:
    *   Name: type
    *   Type: string
    *   Multi-Valued: not checked.
        If a document is an instance of a type that holds this schema, to get the type property, you will have to use the following XPath expression: `additionalInfo:type`.
4.  Click on the **Save**&nbsp;button.
    The schema is saved.

## {{> anchor 'step2'}}Step 2: Creating the New "File" Document Type

1.  Click on the **Document Types**&nbsp;item of Studio tree, and click **New**.
2.  On the creation pop up window, fill in the informations below and click on the button **Next**:
    *   ID: `File`
    *   Extends: `Nothing`
    *   Label: `File`
    *   Description: a description of the document type
3.  Fill the the **Definition** tab.
    *   For containment rules implemented in our use case: a `File` is created in a `Workspace` or a `Folder`.
    *   We don't need to filter any tabs.
    *   We select the facets that are contributed for File type in the original contribution: Commentable, Publishable, Versionable.
4.  In the **Schema** tab, choose the following existing schemas: `file` (for the document's main content), `files` (for the attachment) and don't forget the one you have just declared: `additionalInfo`.
5.  Click on **Save**.
    We will now build the associated forms.

    {{#> callout type='note' heading='Be Careful'}}

    In the **Schema** tab, do not try to define already used schemas' names such as "file", it will lead to errors.

    {{/callout}}

## {{> anchor 'step3'}}Step 3: Creating the File's Forms

1.  Click on the **Creation layout** tab.
2.  Drag'n drop, and edit the associated widget of the following properties:
    *   `dc:title`: title field in dublincore schema,
    *   `dc:description`: description field in dublincore schema,
    *   `file:content`: content field (property that stores the real file) in file schema,
    *   `uid:uid`: Uid field in uid schema
    *   `additionalInfo:type`: type field in additionalInfo schema.

    Double click on each of the widget you drop and choose a consistent title, etc...
    ![]({{file name='file-creation-layout.png'}} ?w=650,h=322,border=true)

    {{#> callout type='tip' }}

    For step by step guidance on how to edit forms, check the how-to [How to Define a Document Type]({{page space='nxdoc' page='how-to-define-a-document-type'}}).

    {{/callout}}

Now, we need to [create the vocabularies]({{page page='declaring-vocabularies'}}) used to populate the type list and to compose the ID.