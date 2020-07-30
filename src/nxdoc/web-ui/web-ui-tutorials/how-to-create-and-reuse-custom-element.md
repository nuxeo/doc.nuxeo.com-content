---
title: 'HOWTO: Create Elements with Layout Blocks'
review:
    comment: ''
    date: '2020-07-28'
    status: ok
toc: true
details:
    howto:
        excerpt: Learn how to create and reuse a custom element with Layout Blocks in Studio Designer.
        level: Advanced
        tool: code
        topics: Web UI
labels:
    - lts2017-ok
    - tutorial
    - nuxeo-ui-elements
    - university
    - polymer
tree_item_index: 500
---

{{! excerpt}}
In this tutorial, you will learn how to create and reuse custom elements in Studio Designer thanks to Layout Blocks.
{{! /excerpt}}

{{#> callout type='info' heading='Nuxeo University'}}
Watch the course on [Nuxeo Web UI Development](https://university.nuxeo.com/learn/course/external/view/elearning/164/web-ui-development)
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/UNIVERSITY/UNIVERSITY_SLOTS
    name: Screenshot 2020-07-16 at 12.06.01.png
    1.1.3#screenshot#up_to_date
--}}
![WEBUI_CUSTOMIZATION_FRONTEND_DEV](nx_asset://1840dd84-67fa-48ae-b849-7296ca1386ae ?w=450,border=true)
{{/callout}}

## Use Case

We will create an element to display all the properties of a document type, in **Edit** mode, so that it can be shared with the `Create`, `Edit` and `Import` layouts (as they aim at modifying property values).

## Requirements

Create a custom **document type** in Nuxeo Studio Modeler with different property types (`String`, `Directory`, `Boolean`...). Here is an example with an `Invoice` document type with specific properties:

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/HOWTO: Create elements with Block Layouts/layout_block_1.png
    name: layout_block_1.png
    studio_modeler#screenshot#up_to_date
--}}
![layout_block_1.png](nx_asset://cf43c150-0703-4b67-8210-de8284b43926 ?w=650,border=true)

## Instructions

### Generate a Layout Block

1. Go to **Nuxeo Studio Designer** > **UI** > **Layout Blocks**.
1. Create a new Layout Block called `nuxeo-<document_type_name>-edit`.
    {{!--     ### nx_asset ###
      path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/HOWTO: Create elements with Block Layouts/layout_block_2.png
      name: layout_block_2.png
      studio_designer#screenshot#up_to_date
    --}}
    ![layout_block_2.png](nx_asset://8f7525f7-b7e2-457e-8393-ad41cfc6c857 ?w=650,border=true)

1. Drag and drop the complete schema from the catalog panel.

    {{!--     ### nx_asset ###
      path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/HOWTO: Create elements with Block Layouts/layout_block_3.png
      name: layout_block_3.png
      studio_designer#screenshot#up_to_date
    --}}
    ![layout_block_3.png](nx_asset://e93db667-72f9-4b34-bdc9-bd4e990f4561 ?w=650,border=true)

1. Select **Edit** mode, and choose the suitable elements to be displayed in the document layout.

    {{!--     ### nx_asset ###
      path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/HOWTO: Create elements with Block Layouts/layout_block_4.png
      name: layout_block_4.png
      studio_designer#screenshot#up_to_date
    --}}
    ![layout_block_4.png](nx_asset://709d1df2-db47-4d0f-87f8-f9d12652a0c1 ?w=650,border=true)

1. Remove the Description property from the layout.

The final result should be something similar:
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/HOWTO: Create elements with Block Layouts/layout_block_5.png
    name: Screenshot 2020-07-29 at 17.14.14.png
    studio_designer#screenshot#up_to_date
--}}
![layout_block_5.png](nx_asset://6070025d-2655-4ef3-9671-bce1a8adaa80 ?w=650,border=true)

### Reuse a Layout Block

1. Navigate to the **Layout** > **Local Document Types** > **<Document type** > **Create**.
1. Click on **Configure**.
1. Remove all the properties scaffolded by default.
1. Drag and drop from the **Element Catalog** (in the left Panel) the layout block you've just created.</br>
    It should be listed under the "Layout Blocks" header bar.
    {{!--     ### nx_asset ###
      path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/HOWTO: Create elements with Block Layouts/layout_block_6.png
      name: layout_block_6.png
    studio_designer#screenshot#up_to_date
    --}}
    ![layout_block_6.png](nx_asset://88b23f8b-f166-446c-b1d5-c8491fe17367 ?w=650,border=true)

    {{!--     ### nx_asset ###
      path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/HOWTO: Create elements with Block Layouts/layout_block_7.png
      name: layout_block_7.png
      studio_designer#screenshot#up_to_date
    --}}
    ![layout_block_7.png](nx_asset://1ff5c7ea-a364-4f05-b412-8c679974ffc0 ?w=650,border=true)

1. Do the same with the `Edit` and `Import`.
