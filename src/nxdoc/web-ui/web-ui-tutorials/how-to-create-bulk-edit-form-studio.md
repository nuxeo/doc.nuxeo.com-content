---
title: 'HOWTO: Create a Bulk Edit Form Using Nuxeo Studio'
review:
    comment: ''
    date: '2021-12-21'
    status: ok
toc: true
details:
    howto:
        excerpt: Learn how to create a bulk edit form using Nuxeo Studio Designer
        level: Intermediate
        tool: null
        topics: 'Web UI, Studio Designer, UIElements, Bulk'
labels:
    - tutorial
tree_item_index: 497
---

{{! excerpt}}
In this tutorial you will learn how to create a form to edit metadata on a large set of documents.
{{! /excerpt}}

## Requirements

{{#> callout type='info'}}
This capability is available since LTS 2021 with Web UI 3.0.9.
{{/callout}}

- Activate the `Select All and Bulk Actions` feature by adding the `nuxeo.selection.selectAllEnabled=true` property in your [nuxeo.conf]({{page page="configuration-parameters-index-nuxeoconf"}}) file.
{{{multiexcerpt 'requirements-bulk-action' page='how-to-insert-user-action'}}}

## Create Your Form

{{{multiexcerpt 'quick-switcher' page='generic-multi-excerpts'}}}

- Create folder and file name
  - follow naming convention
- Copy from edit layout
- Change name


## Bind the Form to a Button

Now that your form is ready, you will need to bind it to a button.

- Add contribution to the custom bundle
  - layout name just the center

## Testing the Result

From any [Folderish]({{page page="available-facets"}}#folderish) document (e.g. a `Folder`, a `Workspace`) or in the results of a search, select one or several documents you want to validate. Click on your brand new button in the toolbar on top of the screen to execute the logic. When finished, the listing is updated to reflect the result.

## Executing Multiple Bulk Actions

In the example above, we used the [refresh event]({{page page="how-to-use-events"}}). Its particularity is that Web UI will request an update to the server once the logic is processed. As a result, the listing is updated and the current selection is lost.

In some cases, you may want the selection to be kept so that a user can execute multiple actions on the same selection. To do that, replace the `refresh` event used above with the `refresh-display` event. This one will keep the selection after the logic is executed, but comes with the downside that the results listing will not be updated: as such it's best to use it with actions that won't have an impact with what is currently displayed on screen to the user.

More information about Web UI events can be found in the [How to Use Web UI Internal Events]({{page page="how-to-use-events"}}) page.
