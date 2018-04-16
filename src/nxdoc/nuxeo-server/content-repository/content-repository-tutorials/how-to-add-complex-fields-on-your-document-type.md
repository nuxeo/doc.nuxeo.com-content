---
title: How to Add Complex Fields on Your Document Type
review:
    comment: ''
    date: '2015-12-01'
    status: ok
details:
    howto:
        excerpt: Learn how to add complex fields on a document type.
        level: Beginner
        tool: Studio
        topics: 'Document type, Schema'
labels:
    - content-review-lts2016
    - schema-component
    - fguillaume
    - howto
    - document-type
    - studio
    - excerpt
    - content-review-lts2017
toc: true
confluence:
    ajs-parent-page-id: '950287'
    ajs-parent-page-title: Content Repository
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: How+to+Add+Complex+Fields+on+Your+Document+Type
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/How+to+Add+Complex+Fields+on+Your+Document+Type'
    page_id: '8684439'
    shortlink: l4OE
    shortlink_source: 'https://doc.nuxeo.com/x/l4OE'
    source_link: /display/NXDOC/How+to+Add+Complex+Fields+on+Your+Document+Type
tree_item_index: 1200
history:
    -
        author: Solen Guitter
        date: '2016-03-02 08:52'
        message: pdate schema sectio
        version: '19'
    -
        author: Manon Lumeau
        date: '2015-10-29 15:42'
        message: ''
        version: '18'
    -
        author: Manon Lumeau
        date: '2015-10-29 15:38'
        message: ''
        version: '17'
    -
        author: Solen Guitter
        date: '2014-12-01 21:47'
        message: ''
        version: '16'
    -
        author: Manon Lumeau
        date: '2014-09-09 11:15'
        message: ''
        version: '15'
    -
        author: Manon Lumeau
        date: '2014-09-08 18:07'
        message: ''
        version: '14'
    -
        author: Solen Guitter
        date: '2014-09-08 18:06'
        message: Formatting
        version: '13'
    -
        author: Manon Lumeau
        date: '2014-09-08 17:56'
        message: ''
        version: '12'
    -
        author: Manon Lumeau
        date: '2014-09-08 16:45'
        message: ''
        version: '11'
    -
        author: Solen Guitter
        date: '2014-07-04 11:11'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2014-07-04 11:04'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2014-07-04 11:04'
        message: Formatting
        version: '8'
    -
        author: Manon Lumeau
        date: '2014-07-02 16:02'
        message: ''
        version: '7'
    -
        author: Manon Lumeau
        date: '2014-07-01 18:06'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2014-06-12 11:54'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2013-09-02 14:50'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2011-10-05 12:05'
        message: Migrated to Confluence 4.0
        version: '3'
    -
        author: Solen Guitter
        date: '2011-10-05 12:05'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2011-10-05 11:30'
        message: ''
        version: '1'

---
{{! excerpt}}

Nuxeo Studio enables you to create your own document types, with their associated metadata. Metadata can be simple text fields, dates, text areas, etc. They can also be more complex with several related informations. A typical example would be a "Sender" metadata, that would be composed of four pieces of information: The sender's last name, his/her first name, the company and the company's logo.

{{! /excerpt}}

Let's see how this metadata is defined.

## Step 1: Defining a Complex Field in Your Document Type Schema

1.  On your document type **Schema** tab, add a field and select the type **Complex**.
    ![]({{file name='schema_complex_field.png'}} ?w=600,border=true)
    An **Edit** link is displayed next to the Type drop-down list.
2.  Click on the **Edit** link to define the subfields that compose the complex metadata.
3.  Add the different subfields and select their type.
    ![]({{file name='complex_field_editor.png'}} ?w=600,border=true)
4.  Click on **Save**.
    The **Schema** is displayed. You can see a summary of your complex type definition below its name.
    ![]({{file name='complex_field_saved.png'}} ?w=600,border=true)

## Step 2: Using the Complex Field on the Document Type Layouts

1.  [Compose your layout]({{page space='studio' page='form-layouts'}}).
    The cell in which you dropped the complex field has an additional icon ![]({{file name='layout_table_subwidgets_edit.png' space='userdoc' page='icons-index'}}).
2.  Click on the icon ![]({{file name='editor_area.gif' space='studio' page='studio-icons-index'}}) to edit the complex field presentation and parameters. Typically, you can choose between two presentations:
    *   table: subfields are presented on top of each other,
    *   inline: subfields are displayed one after the other on the same line.
3.  Click on the icon ![]({{file name='layout_table_subwidgets_edit.png' space='userdoc' page='icons-index'}}) to edit the subfields widgets.
4.  Edit each sub-field widget and click on **Save**.
    ![]({{file name='edit_subwidget.png' space='studio' page='form-layouts'}} ?w=600,h=230,border=true)
    Modifications are saved.

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Popular How-Tos'}}

- [How to Override Existing Document Types]({{page page='how-to-override-existing-document-types'}})
- [How to use Trash Feature]({{page page='how-to-use-trash-feature'}})
- [How-To Index]({{page page='how-to-index'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [Documents in Nuxeo Studio]({{page space='studio' page='documents'}})
- [Content Repository]({{page page='content-repository'}})
- [Available Facets]({{page page='available-facets'}})
- [Lifecycle]({{page space='studio' page='life-cycle'}})
- [Schemas]({{page space='studio' page='schemas'}})

{{/panel}}</div></div>
