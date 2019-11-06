---
title: Nuxeo Tree Snapshot
review:
    comment: ''
    date: '2019-09-18'
    status: ok
labels:
    - jsf-ui-required
    - tree-snapshot
    - lts2019-ok
    - lts2018-ok
    - lts2016-ok
toc: true
tree_item_index: 2750
---

{{! excerpt}}
[Nuxeo Tree Snapshot](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-tree-snapshot) enables to snapshot and version a whole folder and its content in a single step. You can then recover the state of a folder for a given version.
{{! /excerpt}}

{{#> callout type='info' heading='Nuxeo Tree Snapshot with Nuxeo Web UI'}}
The default button to perform a tree snapshot is exposed in Nuxeo JSF UI. You can perfectly use it in Nuxeo Web UI too, by creating a button in **Nuxeo Studio Designer**, linked to the `Document.CreateTreeSnapshot` operation.
{{/callout}}

## Installation

{{{multiexcerpt 'MP-installation-easy' page='Generic Multi-Excerpts'}}}

## Using Nuxeo Tree Snapshot

The addons adds a new document type, Versionable folder, which can be created in Workspaces.

Versionable folders can be published, using the regular **Publish** tab. When it is published a new version of the folder is automatically created and available in archived versions. The content of the versionable folder is published at the same time, and if needed versioned.

In the versionable folder **History**&nbsp;> **Archived versions** tab you can use the regular archived versions actions (**View archived version** and **Restore**).

## Customization and Configuration

Although the addon adds by default a versionable folder, most of the time you will want to integrate the feature with your own data model, in **Nuxeo Studio**.

To adapt the default addon behaviour, make sure that you have selected **Nuxeo Tree Snapshot** as target package in **Application Definition** menu. This will automatically expose in Nuxeo Studio:

- The **Snapshotable** and **Snapshot** facets.
- The `Document.CreateTreeSnapshot` in your automation chain/scripting, in the `Document` category.
  - The `versioning option` parameter of the operation is expecting either `MINOR` or `MAJOR` depending on the version that should be applied on all components of the snapshot.
