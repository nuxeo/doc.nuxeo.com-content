---
title: Left Menu
review:
    comment: ''
    date: ''
    status: ok
description:
toc: true
tree_item_index: 100
---

{{#> callout type='info' heading='Availability'}}
This feature is available for target platforms Nuxeo Platform LTS 2016 and above.
{{/callout}}

The left menu displays three different tabs to give you the ability to design and customize your UI as you need:
- [Layouts](#layouts-tab)
- [UI](#ui-tab)
- [Resources](#resources-tab)

## Layouts Tab

![]({{file name='layouts_tab_view_designer.png'}} ?w=350,border=true)

- **Local Types**: Lists the document types that you have created.
- **Built-in Types**: Lists the document types available by default on the platform.
- **Workflows**: Lists the workflows that you have created.
- **Page Providers**: Lists the page providers that you have created.

On documents (local types and built-in types for example), 5 layouts are available to let you customize the creation, edition, import, metadata and the view of your documents.

Once customized, layouts are displayed with a bold font and an asterisk. (SCREENSHOT)


## UI Tab

![]({{file name='ui_tab_view_designer.png'}} ?w=350,border=true)

This tab let you customize your application per "UI areas"

- **Dashboard**: You can customize the default WebUI dashboard and edit the default HTML code to include your custom elements.
- **Document**: You can add, hide or edit the default document view.
- **Drawer**: You can modify and organize the menus and submenus displayed in the left panel.
- **Main Content**: You can integrate new custom pages if you need to display specific information, like access to your profile information, the configuration of cloud services or some kind of specific report.
- **Actions Slots**: This tab also allows you to create and edit document actions.
- **Translations**: Upload your messages.json file to add a new language to your platform.
- **Themes**: You can customize your own theme.

## Resources Tab

![]({{file name='resources_tab_view_designer.png'}} ?w=350,border=true)

The Resources tab represents the physical view of the package which is going to be deployed in the Nuxeo repository. It’s an alternative visualisation of all components created in the Layout and UI tab. Additionally, it gives you the possibility to create folders and upload files, such as pictures or custom scripts: for example, you can use it to display the document icons. You will also be able to create new element on this tab.

**To upload a new file**, select the folder where you want to upload it and then click on the upload button (ICON). A popup window let you select your document in your local files.

**To create a new file**: select the folder where you want to create it and then click on the create button (ICON). A popup window ask you if you want to create an Empty File, an Element or a folder.
If you select an Element, the architecture is already ready to use.

SCREENSHOT
