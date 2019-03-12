---
title: 'HOWTO: Create Themes'
review:
  comment: ''
  date: '2019-03-01'
  status: ok
toc: true
details:
  howto:
    excerpt: Learn how to customize themes in Nuxeo Studio.
    level: Beginner
    tool: Nuxeo Studio
    topics: Themes
tree_item_index: 1100
---

Nuxeo Studio Designer enables you to create a new theme featuring your logo, background and colors, and to set it as the default theme of your application.

### Creating a Theme

1. In Studio Designer, go to **UI** > **Themes**.
1. Click on {{!--     ### nx_asset ###
       path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/HOWTO: Customize Theme/Create button
       name: create-button.png
       studio_designer#icon#up_to_date
   --}}
   ![Create button ](nx_asset://89bd65c2-a6ca-482f-8e35-abd94c098fee ?w=30) and enter a name for the new theme.
1. In **Start from**, select one of the four default themes of Web UI (default, dark, light or kawaii). The selected theme will be the base for the new theme.
1. Click **CREATE**.

You are now in the Theme Editor, where you can customize the new theme to fit your application.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/HOWTO: Customize Theme/Theme editor without resources
    name: theme-editor.png
    studio_designer#screenshot#up_to_date
--}}
![Theme editor without resources ](nx_asset://db4e33e2-8a6c-4097-8db4-e8402c33f875 ?w=600,border=true)

### Selecting Resources

On the right of the theme Editor, select resources that can be displayed in your application by clicking on {{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/HOWTO: Customize Theme/Upload Resources
    name: upload-resources.png
    studio_designer#icon#up_to_date
--}}
![Upload Resources ](nx_asset://593bc8b8-2f0c-41c2-abc8-9b3084b5710a ?w=30) for each element.

| Type       | &nbsp;                                                                                        | Format |
| ---------- | --------------------------------------------------------------------------------------------- | ------ |
| Logo       | Logo for the theme                                                                            | .png   |
| Background | Background image                                                                              | .png   |
| Screenshot | Preview of your theme displayed for users under **User Settings** > **Preferences** in Web UI | .jpg   |
| Resources  | Additional resources relevant to your theme                                                   | &nbsp; |

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/HOWTO: Customize Theme/Theme editor with resources
    name: theme-editor-resources.png
    studio_designer#screenshot#up_to_date
--}}
![Theme editor with resources](nx_asset://fc88a27a-da92-49b9-b41f-bad19f86f0d0 ?w=600)

Save your changes and go back to **UI** > **Themes**. The themes you created are noticeable by the badge **CUSTOM**. You can filter the themes you created by clicking **Only Custom** at the top-right of the screen.
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/HOWTO: Customize Theme/Custom Badge
    name: Custom-badge.png
    studio_designer#screenshot#up_to_date
--}}
![Custom Badge](nx_asset://f0769792-ea5a-4f70-ab23-4b8d30f6efc5 ?w=600)

### Setting a Theme as Default

You can set a theme you created as the default theme of your application. It will be loaded instead of the default preset theme in Web UI at the first login of users.

**From the Theme Editor:**

1. At the top-right of your screen, go to **Name**.
1. Check the box **Set this theme as default**.
1. Save your changes.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/HOWTO: Customize Theme/Set as default in Theme Editor
    name: theme-editor-set-as-default.png
    studio_designer#screenshot#up_to_date
--}}
![Set as default in Theme Editor](nx_asset://e3a6e577-ce03-4477-8c00-2300128e5ae8 ?w=600)

**From Themes:**

1. In **Studio Designer**, go to **UI** > **Themes**.
1. Hover over the theme and click on **Set as Default**.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/HOWTO: Customize Theme/Set as default theme editor
    name: theme-set-as-default.png
    studio_designer#screenshot#up_to_date
--}}
![Set as default theme list](nx_asset://945cc098-b43a-44b3-b83b-861dc8b8b291 ?w=600)

The Theme you set as Default is noticeable by the badge **DEFAULT**.

### Reusing a Custom Theme

You can use a custom theme as a base for another theme.

1. In **Studio Designer**, to go **UI** > **Themes**.
1. Hover over a theme and click on **Copy**.
   The copy of your theme is created.
1. Rename it and change it as needed.
1. Save your changes.
