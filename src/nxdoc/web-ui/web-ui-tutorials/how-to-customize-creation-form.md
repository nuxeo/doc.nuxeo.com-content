---
title: 'HOWTO: Customize the Creation Form'
review:
    comment: ''
    date: '2019-07-22'
    status: ok
toc: true
details:
    howto:
        excerpt: Learn how to configure the creation form to display long document type titles
        level: Intermediate
        tool: null
        topics: 'Web UI, Studio Designer'
labels:
    - tutorial
    - lts2019-ok
tree_item_index: 1000
---

{{! excerpt}}
In this tutorial you will learn how to configure the creation form in Web UI so that your document type with long labels will be displayed correctly.
{{! /excerpt}}

<script src="https://fast.wistia.com/embed/medias/18sk3v2r7i.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><div class="wistia_embed wistia_async_18sk3v2r7i" style="height:360px;position:relative;width:640px"><div class="wistia_swatch" style="height:100%;left:0;opacity:0;overflow:hidden;position:absolute;top:0;transition:opacity 200ms;width:100%;"><img src="https://fast.wistia.com/embed/medias/18sk3v2r7i/swatch" style="filter:blur(5px);height:100%;object-fit:contain;width:100%;" alt="" aria-hidden="true" onload="this.parentNode.style.opacity=1;" /></div></div>

## Prerequisites

- The Nuxeo [Web UI addon](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-web-ui) installed on your instance.
- In Studio Modeler > **Settings** > **Application Definition**, make sure that **Nuxeo Web UI** is in the **Packages to Install** list.

## Create a New Theme

1. In Studio Designer, go to the **UI** > **Themes** menu.
1. Create a new Theme called `default` that will override the default one.
    {{!--     ### nx_asset ###
      path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/HOWTO: Customize the Creation Form/new-default-theme.png
      name: new-default-theme.png
      studio_designer#screenshot#up_to_date
    --}}
    ![new-default-theme.png](nx_asset://05392556-54e9-4eab-acf9-04fe919b36d1 ?w=350,border=true)
1. Add a new section called `/* Document Creation Window */`.</br>
    It should look like this:
    ```
    /* Document Creation Form */
    --nuxeo-document-create-selection-button: {
    @apply --layout-horizontal;
    min-width: calc(49% - 8px);
    height: 60px;
    padding: 10px;
    };
    --nuxeo-document-create-selection-icon: {
    height: 40px;
    };
    --nuxeo-document-create-selection-label: {
    margin: 0 10px;
    text-align: left;
    }
    ```
1. Click on **Save** at the top of the screen.

## Deploy Your Changes

1. You can now deploy your changes using the hot reload function of the [browser extension]({{page version='' space='nxdoc' page='nuxeo-dev-tools-extension'}}).
1. Click on the **Create** button on your instance, the new creation window is displayed.
