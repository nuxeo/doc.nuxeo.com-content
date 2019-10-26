---
title: Nuxeo Tree Snapshot
review:
    comment: ''
    date: '2019-09-18'
    status: ok
labels:

toc: true
tree_item_index: 2750
---

{{{multiexcerpt 'JSF-UI-required' page='generic-multi-excerpts'}}}

{{! excerpt}}
[Nuxeo Tree Snapshot](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-tree-snapshot) enables to snapshot and version a whole folder and its content in a single step. You can then recover the state of a folder for a given version.
{{! /excerpt}}

{{#> callout type='info' heading='Nuxeo Tree Snapshot with Nuxeo Web UI'}}
The default button to perform a tree snapshot is exposed in Nuxeo JSF UI. You can perfectly use it in Nuxeo Web UI by creating a button in **Nuxeo Studio Designer**, linked to the `Document.CreateTreeSnapshot` operation.
{{/callout}}

## Installation

{{{multiexcerpt 'MP-installation-easy' page='Generic Multi-Excerpts'}}}

## Using Nuxeo Tree Snapshot

The addons adds a new document type, Versionable folder, which can be created in Workspaces.

Versionable folders can be published, using the regular **Publish** tab. When it is published a new version of the folder is automatically created and available in archived versions. The content of the versionable folder is published at the same time, and if needed versioned.

In the versionable folder **History**&nbsp;> **Archived versions** tab you can use the regular archived versions actions (**View archived version** and **Restore**).

## Customization and Configuration

Although the addon by default adds a versionable folder, most of the time you will want to integrate the feature with your own data model, in **Nuxeo Studio**.

To adapt the default addon behaviour, ensure you have selected **Nuxeo Tree Snapshot** as target package in **Application Definition** menu. This will expose automatically in Nuxeo Studio:

- The **Snapshotable** and **Snapshot** facets.
- The **`Document.CreateTreeSnapshot`** in your automation chain / scripting, in the `Document` category.
  - The `versioning option` parameter of the operation is expecting either `MINOR` or `MAJOR` depending on the version which should be applied on all components of the snapshot.
