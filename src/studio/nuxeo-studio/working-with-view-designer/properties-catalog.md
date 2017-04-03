---
title: Properties Catalog
review:
    comment: ''
    date: ''
    status: ok
description:
toc: true
tree_item_index: 300
---

{{#> callout type='info' heading='Availability'}}
This feature is available for target platforms Nuxeo Platform LTS 2016 and above.
{{/callout}}

The right panel displays the element catalog which can be integrated in the document form. You can find the document type fields, in edit or view template, search within the nuxeo element catalog, or even from within your custom elements, and drag n drop them.

## Catalog

### Elements by fields

The Elements section lists all the elements depending on the document type that you are currently working on, with its:
- Herited schemas
- Custom properties
- Custom external schemas

In every schemas you will find the associated properties and the field format. Two modes are available: View and Edit that you can drag'n'drop in the main view to use it.

![]({{file name='elements-catalog.png'}} ?w=250,border=true)

### Search

The Search will let you search in all the elements libraries.

Under the search you have the list of all the elements libraries that you have access to.
Nuxeo Elements has of 3 sets of libraries :

- **Nuxeo Core Elements** represents the core elements to interact with the Nuxeo repository for  the connection, searches, operations, etc.
- **Nuxeo UI Elements** gather all the interface elements used in the different layouts: the document previewer, datepicker, user / group permission tab among others.
- **Nuxeo Dataviz Elements** allows you to integrate reports as different charts and histograms, used, for example, to create custom dashboards.

You also have access to Polymer elements and the ones that you have created.

## Properties

This tab display the properties of the field selected on the editor. Depending of the field selected the properties will not be the same.

![]({{file name='properties-catalog.png'}} ?w=250,border=true)
