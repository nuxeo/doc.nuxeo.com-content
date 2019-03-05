---
title: UI
review:
    comment: ''
    date: ''
    status: ok
description:
toc: true
tree_item_index: 100
---
{{#> callout type='info' heading='Nuxeo University'}}
Watch the related course on Nuxeo University:</br>
[Video on a simple Nuxeo Project Creation](https://university.nuxeo.com/learn/public/course/view/elearning/144/nuxeo-platform-quickstart-creation-of-a-simple-nuxeo-studio-project)
![]({{file name='university-quickstart-studio-project.png' page='nxdoc/university'}} ?w=450,border=true)
{{/callout}}

The UI tab gives you access to several elements to customize the UI section that you want, dashboard, menus, themes, default document view, integrate new custom pages, add new actions, add translations, etc.

![]({{file name='ui-designer.png'}} ?w=300,border=true)

## Layouts

Five layouts are available on documents such as local and built-in types to let you customize the creation, edition, import, metadata and the view of your documents. Once customized, layouts are displayed with a bold font.![]({{file name='edited-layout-vd.png'}} ?w=80,border=true)

- **Local Types**: Lists the document types that you have created.
- **Built-in Types**: Lists the document types available by default on the platform.
- **Workflows**: Lists the workflows that you have created.
- **Page Providers**: Lists the page providers that you have created.

### Configuring Multivalued Fields

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

## Layout Blocks

Allows you to create reusable components and share them between different documents layouts.
Layout blocks are elements of a layout that can be reused in other layouts configuration.
In each layout block, you can insert properties along with their configuration.

Nuxeo Studio provides a variety of Layout Blocks templates:

- **Title/description element template**: To create a single document layout block that contains, by default, the title and description properties. Properties can be added to the block.
- **Document Page template**: To configure your own document tabs.
- **Drawer Page template**: To customize your drawer menu.
- **Main Page template**: To display specific information in custom pages.
- **Dialog Action template**: To add a button opening a dialog box.
- **Script Action template**: To add a button running an automation script.

When creating or editing a form, you can drag and drop properties from any schema. Then, you can configure them individually.

In any of your **Layouts**, you can drag and drop your Layout Blocks from the catalog.

## Tabs

You can add new document tabs and also hide and override default document to display specific information relevant to your users.

A tab is created along with a corresponding element at the top of the main view. A tab can be activated under a set of conditions (for a specific user or document property such as group, type, permissions, etc.)
Once activated, selecting the tab will display the corresponding view.

- **Page**: Uses the document page template to create a tab displaying information that you want and that are related to documents.
- **Listing**: Uses the element `nuxeo-result-view` in the main view. You can use it to display custom document listings using a page provider.

## Drawer

Allows you to create drawer items and drawer menus to customize your drawer menu.

- **Drawer Items**: From generic pages to new search forms or browse pages with determined root path. These will add a new drawer item.

- **Drawer Menus**: You can integrate new custom pages if you need to display specific information, like access to your profile information, the configuration of cloud services or some kind of specific report. Items can be added to Administration or User Menu. Each contribution adds a menu entry to the Administration or User menus and a corresponding element in the main view.

## Actions

Allows you to create and edit buttons and links as elements and display them to any existing category/area, called slots, in Web UI.

- **Actions**: Can display any element whether it is provided by Nuxeo or a custom element you wrote.
- **Operations**: Use the element `nuxeo-operation-button` for quick and easy access.

## Themes

Allows you to customize your own UI themes that users can select. It is based primarily on CSS custom properties, but can include any type of CSS.

For more information, see [Creating Themes with Studio]({{page version='' space='nxdoc' page='how-to-customize-theme-studio'}}#creating-themes-with-nuxeo-studio).

## Translations

Create and/or Manage your `messages.json` files from this view to add a new language to your platform. </br>
This file is composed of the keys used in UI following by their value in the corresponding language.

## Dashboard

Customize the default Web UI dashboard and edit the default HTML code to include your custom elements.

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [HOWTO: Define a New Document Type Layout in Studio Designer]({{page space='nxdoc' page='web-ui-document-layouts'}})
- [HOWTO: Create a New Search Screen in Studio Designer]({{page space='nxdoc' page='web-ui-search'}})
- [HOWTO: Create a New Workflow in Studio Designer]({{page version='' space='nxdoc' page='web-ui-workflow-tasks'}})
- [HOWTO: Create and Reuse a Custom Element]({{page version='' space='nxdoc' page='how-to-create-and-reuse-custom-element'}})
- [HOWTO: Insert a User Action]({{page version='' space='nxdoc' page='how-to-insert-user-action'}})
- [HOWTO: Insert a New Tab]({{page version='' space='nxdoc' page='how-to-new-tab'}})

{{/panel}}
</div>
<div class="column medium-6">

</div>
</div>
