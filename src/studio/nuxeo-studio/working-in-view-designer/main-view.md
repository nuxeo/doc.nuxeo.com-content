---
title: Main View
review:
    comment: ''
    date: ''
    status: ok
description:
toc: true
tree_item_index: 200
---

{{#> callout type='info' heading='Availability'}}
This feature is available for target platforms Nuxeo Platform LTS 2016 and above.
{{/callout}}

On this main view two editors are available the Code Editor and the Visual Editor.

## Code Editor

The code editor mode is an HTML editor to let you inspect every elements and directly modify your layout. You can delete, modify, update, copy/paste, dragn'n'drop every elements that you want.

The HTML mode includes a few helpers such as auto-completion for document properties, tasks properties, and functions and polymer behaviours. The annotation `@doctype`, `@schema` or `@task` defined for each property defines the auto-completion for that property.

Don't forget to save your modifications, by clicking on the Save button ![]({{file name='save-action-vd.png'}} ?w=20,border=true) at the top right hand corner of your application.

![]({{file name='code-editor-vd.png'}} ?w=650,border=true)

## Visual Editor

On the Visual Editor you will be able to drag'n'drop elements from the catalog on the right and order them as you wish.

If you click on a particular element you will have the possibility to edit its default properties, the label, etc. on the [properties catalog]({{page page='properties-catalog'}}) on the right.

**To delete an element**, you can select it on the visual editor and click on the delete icon next to it.

Don't forget to save your modifications, by clicking on the Save button ![]({{file name='save-action-vd.png'}} ?w=20,border=true) at the top right hand corner of your application.

![]({{file name='visual-editor-vd.png'}} ?w=650,border=true)

## Revert to Default View

This action enables you to discard all the modifications that you have done on a layout and revert to the default view.

To do so, click on the revert to default view ![]({{file name='revert-action-vd.png'}} ?w=20,border=true) button and confirm your choice on the popup confirmation window. Your layout is back as its initial state, before you click on the CONFIGURE button.
