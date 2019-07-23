---
title: 'HOWTO: Configure the Creation Form'
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
tree_item_index: 1300
---

{{! excerpt}}
In this tutorial you will learn how to configure the creation form in Web UI so that your document type with long labels will be displayed correctly.
{{! /excerpt}}

## Prerequisites

- The Nuxeo [Web UI addon](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-web-ui) installed on your instance.
- In Studio Modeler > **Settings** > **Application Definition**, make sure that **Nuxeo Web UI** is in the **Packages to Install** list.

## Create a New Theme

1. Go to **UI** > **Themes**
1. Create a new Theme called `default` that will override the default one.
    SCREENSHOT
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

1. You can now deploy your changes using the hot reload function of the [browser extension]({{page version='' space='nxdoc' page='nuxeo-dev-tools-extension'}})
1. Click on the **Create** button on your instance, the new creation window is displayed.

  SCREENSHOT
