---
title: Properties Catalog
review:
    comment: ''
    date: ''
    status: ok
description:
toc: true
tree_item_index: 400
---

{{#> callout type='info' heading='Availability'}}
This feature is available for target platforms Nuxeo Platform LTS 2016 and above.
{{/callout}}

The right panel displays the element catalog which can be integrated in the document form. You can find the document type fields, in edit or view template, search within the nuxeo element catalog, or even from within your custom elements, and drag n drop them.

## Catalog

### Elements by fields

The Elements section lists all the elements depending on the annotation defined for the element property that you are currently working on. If using a `@doctype` annotation this will present all:
- Herited schemas
- Custom properties
- Custom external schemas

In every schemas you will find the associated properties and the field format. Three modes are available by now: View, Edit and Column that you can drag'n'drop in the main view to use it.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Properties Catalog/Elements Catalog
    name: elements-catalog.png
    studio_designer#screenshot#up_to_date
--}}
![Elements Catalog](nx_asset://da605a07-ae9d-4bb8-a24e-d25e691b8528 ?w=250,border=true)

### Search

The Search will let you search in all the elements catalogs.

Under the search you have the list of all the elements libraries that you have access to.
Nuxeo Elements has of 3 sets of libraries :

- **Nuxeo Core Elements** represents the core elements to interact with the Nuxeo repository for  the connection, searches, operations, etc.
- **Nuxeo UI Elements** gather all the interface elements used in the different layouts: the document previewer, user / group permission tab among others.
- **Nuxeo Dataviz Elements** allows you to integrate reports as different charts and histograms, used, for example, to create custom dashboards.

You also have access to Iron and Paper catalogs and the ones that you have created.

## Properties

This tab display the properties of the field selected on the editor. Depending of the field selected the properties will not be the same.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Properties Catalog/Properties Catalog
    name: properties-catalog.png
    studio_designer#screenshot#up_to_date
--}}
![Properties Catalog ](nx_asset://8f796075-b609-4b13-8748-0002341775d5 ?w=250,border=true)

## Configuring Multivalued Fields
When drag and dropping a multivalued field or a complex multivalued field into a layout, the corresponding element is automatically set to `nuxeo-data-table`. Clicking on the element, then on the pencil icon will allow you to edit it.


{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Layouts/Data Table Element
    name: nuxeo-data-table-element.png
    studio_modeler#screenshot#up_to_date
--}}
![Data Table Element](nx_asset://3b5cf8b2-5463-4a0c-9df7-c988a7c8cbbd ?w=340,border=true)


From there, the field (or each sub field in the case of a complex multivalued field) is shown as a table with a column containing the element. Clicking on an element will display its properties on the right side of the screen so that you can configure it.


{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Layouts/Table Editor Element Properties
    name: table-editor-element-properties.png
    studio_modeler#screenshot#up_to_date
--}}
![Table Editor Element Properties](nx_asset://babb1664-1dbc-40fd-bd32-984d41f1e583 ?w=350,border=true)


You may edit the field's label directly in the column title. Labels can be translated by entering the `[[i18n('your.translation.key')]]` pattern.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Layouts/Table Editor Layout Complex Multivalued
    name: table-editor-layout-complex-multivalued.png
    studio_modeler#screenshot#up_to_date
--}}
![Table Editor Layout Complex Multivalued](nx_asset://bc936282-416d-40fb-986b-9f978f067a70 ?w=480,border=true)


{{#> callout type='warning' heading="Don't Add More Fields"}}
Although the editor allows you to drag and drop additional fields in this context at the moment, you should only edit the existing fields to keep your layout working properly.
{{/callout}}

Finally, when dealing with complex multivalued fields:
- Sub fields can be reordered by drag and dropping them around in the layout.
- A sub field can be deleted by hovering on it and clicking the trash icon.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Layouts/Table Editor Deleter
    name: table-editor-delete.png
    studio_modeler#screenshot#up_to_date
--}}
![Table Editor Delete](nx_asset://fec4fb39-8053-48e6-8f25-6c135b40948e ?w=380,border=true)

{{#> callout type='warning' heading='Only Use the Trash Icon'}}
When hovering on an element in a document or workflow task layout, only the trash icon should be used at the moment. Using the sortable toggle (arrows icon) or the visibility toggle (eye icon) may prevent your layout from working properly.
{{/callout}}
