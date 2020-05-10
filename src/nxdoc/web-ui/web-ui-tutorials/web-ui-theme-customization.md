---
title: 'HOWTO: Customize Theme'
review:
    comment: ''
    date: '2017-12-14'
    status: ok
toc: true
details:
    howto:
        excerpt: Learn how to customize themes in Nuxeo Web UI.
        level: Advanced
        tool: code
        topics: Web UI
labels:
    - lts2016-ok
    - nuxeo-web-ui
    - tcardoso
    - extension
    - theme
    - appearance
    - lts2017-ok
tree_item_index: 1050

---
## Themes

Nuxeo Web UI provides several themes to change the look and feel of the UI. For the moment, they mostly provide color schemes applied to UI elements and a background image for some themes.

The available themes are:
- Nuxeo (default)
- Dark
- Light
- Kawaii

### Customization

All the resources for each theme are located on the `/themes/{name}` folder, where `name` is the name of the theme and have the following files:

- `/themes/{name}/theme.html` style definitions that allow customizing colors, fonts, or any other CSS properties for most elements used in the Web UI.

- `/themes/{name}/preview.jpg` preview image that is displayed on the themes chooser page.

- `/themes/{name}/logo.png` image used as application logo.

- `/themes/{name}/background.png` image used as background (optional, available for some themes only).

To add a new theme or customize one of the provided ones you can simply deploy and override theme resources as described in [HOWTO: deploy additional Web UI resources]({{page page='web-ui-deployment#deploy_or_override'}}).


### How to Create a Theme

This example provides an walk-through on how to create a new theme and add it as a contribution to the Web UI.
We will create our new theme called `new-light` theme, which is base on the provider `light` theme with some customizations.

{{#> panel type='code' heading='Without any customization the theme looks like this:'}}
![]({{file name='light-theme.png'}} ?w=800,border=true)
{{/panel}}

Make a copy of the `light` folder on `/themes` directory and name it `new-light`. Then make the following changes to it:

Edit the `theme.html`:

{{#> panel type='code' heading='Add the font import on top of the file'}}
```css
<link href="https://fonts.googleapis.com/css?family=Gabriela" rel="stylesheet">
```
{{/panel}}

{{#> panel type='code' heading='Then change the `--nuxeo-app-font` accordingly'}}
```css
<custom-style>
  <style is="custom-style">
    ...
    html {
      --nuxeo-app-font: 'Gabriela', Arial, sans-serif;
      ...
     }
     ...
  </style>
</custom-style>
```
{{/panel}}


{{#> panel type='code' heading='Change some colors'}}
```css
  html {
    ...
    --nuxeo-badge-background: Tomato;
    ...
    --nuxeo-app-header-background: #CFD8DC;
    ...
    --nuxeo-sidebar-background: #58597a;
    ...
    --nuxeo-button-primary: Tomato;
    ...
  }
```
{{/panel}}

{{#> panel type='code' heading='Change background to use a custom image'}}
```css
  html {
    --nuxeo-page-background: url(themes/new-light/background.png) repeat;
  }
```
{{/panel}}


And add a `background.png` image to `/themes/new-light` to use as background.


Now, to make the new theme avaliable, you need to add the new-light theme as a [slot]({{page page='web-ui-slots'}}) contribution, using the  [THEMES]({{page page='web-ui-slots#themes'}}) slot as follows:

```xml
<nuxeo-slot-content name="new-light-theme" slot="THEMES" order="50">
  <template>
    <nuxeo-theme name="new-light"></nuxeo-theme>
  </template>
</nuxeo-slot-content>
```

Where `properties
name="new-light"
`
must match the name of the directory we created for the theme.

Furthermore, the `name` property is used to define the `i18n` label for the theme name based on the following convention:
```json
"themes.{themeName}":"name of the theme"
```

For the current example, with `search-name="assets"`, add the following entry to the `messages.json` file:
```json
"themes.new-light":"New Light"
```

For more information about `i18n` translations, refer to [Managing Translations]({{page page='web-ui-managing-translations'}})


{{#> panel type='code' heading='After customization the `light` theme will look like this:'}}
![]({{file name='custom-theme.png'}} ?w=800,border=true)
{{/panel}}
