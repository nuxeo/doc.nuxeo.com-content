---
title: 'HOWTO: Create an Actions Menu'
review:
    comment: ''
    date: '2020-03-25'
    status: ok
toc: true
details:
    howto:
        excerpt: Learn how to create an actions menu.
        level: Advanced
        tool: code
        topics: Web UI
labels:
    - lts2017-ok
    - lts2019-ok
    - tutorial
    - nuxeo-elements
    - nuxeo-ui-elements
    - polymer
tree_item_index: 500
---

{{! excerpt}}
In this tutorial, you will learn how to create and customize an actions menu on your code. The actions menu is a responsive menu that can hold actions (e.g. buttons), which hides behind a dropdown according to the available (or predefined) space.
{{! /excerpt}}

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/HOWTO: Create a Nuxeo actions menu/nuxeo actions menu screenshot
    name: nuxeo-action-menu.png
    1.1.3#screenshot#up_to_date
--}}
![nuxeo actions menu screenshot](nx_asset://9c147cdc-311a-4190-b7d1-7d2a255216f2 ?w=300,border=true)

## Create an Actions Menu

1. Add a `nuxeo-actions-menu` element to the custom element/page.
  ```
  <nuxeo-actions-menu>
  </nuxeo-actions-menu>
  ```

1. Add the menu items, which should consist of actions - such as an already existing action, for example:
  ```
  <nuxeo-actions-menu>
    <nuxeo-add-to-collection-button document="[[document]]">
    </nuxeo-add-to-collection-button>
  </nuxeo-actions-menu>
  ```

Or adapt your actions, to make them work with `nuxeo-actions-menu`.

## Create and Adapt Actions

1. Import the `nuxeo-action-button-styles` module, to make sure the action is styled correctly:
  ```
  import '@nuxeo/nuxeo-ui-elements/actions/nuxeo-action-button-styles.js';
  ```

1. Include the `nuxeo-action-button-styles` module in the style element:
  ```
  <style include="nuxeo-action-button-styles">
    ...
  </style>
  ```

1. Add a `showLabel` boolean property (with `false` as initial value):

  ```
  showLabel: {
      type: Boolean,
      value: false,
  },
  ```

1. On the action's DOM, we need to add a span element with class `label`, with your label bound to it, right next to your button. </br>
  The span should be hidden when `showLabel` is `false`, so that it is only displayed when the action is in the dropdown.
  ```
  <paper-icon-button id="myAction" icon="nuxeo:someicon" on-tap=”_doSomething”>
  </paper-icon-button>
  <span class="label" hidden$="[[!showLabel]]">
    [[_label]]
  </span>
  ```

1. Wrap the two elements above (the button and the label) in a new div with class `action`, and move your `on-tap` or `on-click` event listener to it:

  ```
  <div class="action" on-tap="_doSomething">
      <paper-icon-button noink id="myAction" icon="nuxeo:someicon">
      </paper-icon-button>
      <span class="label" hidden$="[[!showLabel]]">
        [[_label]]
      </span>
  </div>
  ```

For more examples, you can check the [Web UI’s migration commit](https://github.com/nuxeo/nuxeo-web-ui/commit/60d5b637ef093d8279447d550391e686771ba115).

## Styling

Nuxeo-actions-menu dropdown can be styled by targeting the classes `--nuxeo-action-button-label` and `--nuxeo-actions-menu-dropdown`.

For example, to add some padding to each item in the dropdown, we can do:

```
--nuxeo-action-button-label: {
  padding-right: 8px;
}
--nuxeo-actions-menu-dropdown: {
  padding: 0 8px;
}
```

## Customizing Number of Actions in Action Menu

Following [NXP-25146](https://jira.nuxeo.com/browse/NXP-25146), the max-width of these three menus can be customized in your themes with three css variables:

- `--nuxeo-browser-actions-menu-max-width`: for the document actions menu
- `--nuxeo-results-selection-actions-menu-max-width`: for the result selection actions menu
- `--nuxeo-document-blob-actions-menu-max-width`: for the blob actions menu

These variables support all the values valid for the max-width property, so you’ll have to set them to fit the desired number of actions.
