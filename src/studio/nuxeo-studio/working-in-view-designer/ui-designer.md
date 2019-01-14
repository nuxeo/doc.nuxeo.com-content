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
Watch the related courses on Nuxeo University
- [Video on a simple Nuxeo Project Creation](https://university.nuxeo.com/learn/public/course/view/elearning/144/nuxeo-platform-quickstart-creation-of-a-simple-nuxeo-studio-project)
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

## Tabs

You can add new document tabs and also, hide and override default document tabs.
Each contribution creates a pill and a corresponding element in the main view. Can be activated for a user or document property such as group, type, permissions, etc.
Once activated, selecting the pill will display the corresponding view.

## Drawer

- **Left Menu Items**: From generic pages to new search forms or browse pages with determined root path. These will add a new left menu item.

- **Main Menu Pages**: You can integrate new custom pages if you need to display specific information, like access to your profile information, the configuration of cloud services or some kind of specific report. Items can be added to Administration or User Menu. Each contribution adds a menu entry to Administration or User menus and a corresponding element in the main view.

## Actions

Allows you to create and edit user actions and operations to every existing category/area in Web UI, such as buttons.

## Themes

Allows you to customize your own UI themes that users can select. It is based primarily on CSS custom properties, but can include any type of CSS.

## Translations

Create and/or Manage your `messages.json` files from this view to add a new language to your platform. </br>
This file is composed of the keys used in UI following by their value in the corresponding language. 

## Dashboard

You can customize the default Web UI dashboard and edit the default HTML code to include your custom elements.

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
