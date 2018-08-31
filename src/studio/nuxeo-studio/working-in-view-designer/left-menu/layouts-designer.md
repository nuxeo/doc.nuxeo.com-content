---
title: Layouts
review:
    comment: ''
    date: ''
    status: ok
description:
toc: true
tree_item_index: 100
---
<!---
Initial Excerpt missing
-->

{{#> callout type='info' heading='Nuxeo University'}}
Watch the related courses on Nuxeo University
- [Video on a simple Nuxeo Project Creation](https://university.nuxeo.com/learn/public/course/view/elearning/144/nuxeo-platform-quickstart-creation-of-a-simple-nuxeo-studio-project)
![]({{file name='university-quickstart-studio-project.png' page='nxdoc/university'}} ?w=450,border=true)
{{/callout}}

![]({{file name='layouts_tab_view_designer.png' page='left-menu'}} ?w=350,border=true)

- **Local Types**: Lists the document types that you have created.
- **Built-in Types**: Lists the document types available by default on the platform.
- **Workflows**: Lists the workflows that you have created.
- **Page Providers**: Lists the page providers that you have created.

On documents (local types and built-in types for example), 5 layouts are available to let you customize the creation, edition, import, metadata and the view of your documents.

Once customized, layouts are displayed with a bold font.![]({{file name='edited-layout-vd.png' page='left-menu'}} ?w=80,border=true)

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
![Table Editor Element Properties](nx_asset://babb1664-1dbc-40fd-bd32-984d41f1e583 ?w=624,border=true)

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

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [HOWTO: Define a New Document Type Layout in Studio Designer]({{page space='nxdoc' page='web-ui-document-layouts'}})
- [HOWTO: Create a New Search Screen in Studio Designer]({{page space='nxdoc' page='web-ui-search'}})
- [HOWTO: Create a New Workflow in Studio Designer]({{page version='' space='nxdoc' page='web-ui-workflow-tasks'}})
- [HOWTO: Create and Reuse a Custom Element]({{page version='' space='nxdoc' page='how-to-create-and-reuse-custom-element'}})
- [HOWTO: Insert a User Action]({{page version='' space='nxdoc' page='how-to-insert-user-action'}})
- [HOWTO: Insert a New Pill]({{page version='' space='nxdoc' page='how-to-new-pill'}})

{{/panel}}
</div>
<div class="column medium-6">

</div>
</div>
