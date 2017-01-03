---
title: Theme Customization
review:
    comment: ''
    date: '2015-12-01'
    status: ok
toc: true
labels:
tree_item_index: 600

---
## Themes

Nuxeo Web UI provides several themes to allow changing the look and feel of the UI. Currently they mostly provide colors schemes applied to UI elements and also a background image for some themes.

The available themes are:
- default
- dark
- light
- garden
- kawaii

### Customization

In the current version it's not possible to contribute new themes, however the existing ones can be overriden with a contribution.

To customize one of the provided themes you can simply deploy and override theme resources as described in [How to deploy additional Web UI resources]({{page page='web-ui-deployment#deploy_or_override'}})

Taking `resources/web/nuxeo.war/ui/` as our base path, these are the available resources for each theme:

- `/styles/{name}-theme.html` style definitions that allow customizing colors, fonts, or any other CSS properties for most elements used in the Web UI.
- `/images/themes/{name}-theme.jpg` preview image that is displayed on the themes chooser page.
- `/images/themes/{name}.png` image used as background (available for some themes only).

{{#> callout type='note'}}
Besides the background images `/images/themes/{name}.png` you can also add any images to `/images/themes/` and reference them in your `/styles/{name}-theme.html` styles resources.
{{/callout}}


### How to customize a theme

This example provides an walk-through on how to override `light` theme in Web UI.

{{#> panel type='code' heading='Without any customization the theme looks like this:'}}
![]({{file name='light-theme.png'}} ?w=800,border=true)
{{/panel}}

Make a local copy of the theme `/styles/light-theme.html` then make the following changes to it:

{{#> panel type='code' heading='Change default font import from `Roboto` to `Gabriela`'}}
```css
<link href="https://fonts.googleapis.com/css?family=Gabriela" rel="stylesheet">
```
{{/panel}}

{{#> panel type='code' heading='Then change the `--nuxeo-app-font` accordingly'}}
```css
<style is="custom-style">
  ...
  :root {
    --nuxeo-app-font: 'Gabriela', Arial, sans-serif;
    ...
   }
   ...
</style>

```
{{/panel}}


{{#> panel type='code' heading='Change background to use a custom image'}}
```css
  html, body {
    ...
    background: url(../images/themes/custom-background.jpg) repeat;
    ...
  }
```
{{/panel}}


{{#> callout type='note'}}
The image `custom-background.jpg` needs to be contributed to `/images/themes/` in your bundle so it can be referenced in styles.
{{/callout}}


{{#> panel type='code' heading='Change some colors'}}
```css
  :root {
    ...
    --nuxeo-badge-background: Tomato;
    ...
    --nuxeo-header-background: #CFD8DC;
    ...
    --nuxeo-sidebar-background: #58597a;
    ...
    --nuxeo-button-primary: Tomato;
    ...
  }
```
{{/panel}}

{{#> panel type='code' heading='After customization the `light` theme will look like this:'}}
![]({{file name='custom-theme.png'}} ?w=800,border=true)
{{/panel}}

Finally you just need to contribute the preview image (that appears in the `Themes` page in the Web UI) with the same name as the theme being overridden, in this case `/images/themes/light-theme.jpg`.

{{#> callout type='warning'}}

Note that we are making some improvements in themes and styling in general.
The process to make contributions related to themes customization are subject to change until the release of the Web UI final version.

{{/callout}}
