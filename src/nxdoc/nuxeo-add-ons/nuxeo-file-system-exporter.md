---
title: Nuxeo File System Exporter
review:
    comment: ''
    date: '2019-11-29'
    status: ok
labels:
    - content-review-lts2016
    - multiexcerpt-include
    - lts2016-ok
    - content-review-lts2017
toc: true
confluence:
    ajs-parent-page-id: '16089349'
    ajs-parent-page-title: Nuxeo Add-Ons
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Nuxeo+File+System+Exporter
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Nuxeo+File+System+Exporter'
    page_id: '27099585'
    shortlink: wYGdAQ
    shortlink_source: 'https://doc.nuxeo.com/x/wYGdAQ'
    source_link: /display/NXDOC/Nuxeo+File+System+Exporter
tree_item_index: 1700
history:
    -
        author: Solen Guitter
        date: '2016-04-15 11:45'
        message: ix Studio menu labe
        version: '11'
    -
        author: Solen Guitter
        date: '2015-12-14 16:50'
        message: ''
        version: '10'
    -
        author: Manon Lumeau
        date: '2015-12-08 17:34'
        message: ''
        version: '9'
    -
        author: Manon Lumeau
        date: '2015-12-08 17:20'
        message: ''
        version: '8'
    -
        author: Anne Jubert
        date: '2015-11-18 13:38'
        message: ''
        version: '7'
    -
        author: Anne Jubert
        date: '2015-11-18 13:37'
        message: ''
        version: '6'
    -
        author: Anne Jubert
        date: '2015-11-10 16:07'
        message: ''
        version: '5'
    -
        author: Anne Jubert
        date: '2015-11-10 16:05'
        message: ''
        version: '4'
    -
        author: Anne Jubert
        date: '2015-11-10 16:04'
        message: ''
        version: '3'
    -
        author: Anne Jubert
        date: '2015-11-10 15:57'
        message: ''
        version: '2'
    -
        author: Anne Jubert
        date: '2015-11-10 15:54'
        message: ''
        version: '1'
---

{{#> callout type='info' heading='Nuxeo FS Exporter with Nuxeo Web UI'}}
The default button to perform an export to a File System is exposed in **Nuxeo JSF UI**. You can perfectly use it in Nuxeo **Web UI** too, by creating a button in **Nuxeo Studio Modeler**, using the operation **Services** > **ExportStructureToFS**.
{{/callout}}

## Functional Overview

The File System Exporter package is an addon for the Nuxeo platform to enable users exporting one chosen root structure of documents from their Nuxeo Platform to a specified File System directory.

The installation of the plugin will add a new operation in "Services" called "ExportStructureToFS". This operation must be added to the registries in Studio and then can be used in an automation chain.

In the user interface, users will now see a new action button that allows them to export the structure with the following parameters defined in Studio:

- Root Path = `/default-domain/`
- File System target = `/tmp`

![]({{file name='Screen Shot 2015-11-18 at 14.27.50.png'}} ?w=650,border=true)

After clicking on the export action, a connected user has now access to the entire structure directly on his tmp folder.

![]({{file name='Screen Shot 2015-11-18 at 14.29.55.png'}} ?w=650,border=true)

The following rules are implemented by default:

- All the documents are exported&nbsp;
- When an exported document already exists in your File System directory, it will be prefixed with a timestamp. In this way, no document will be deleted&nbsp;
- The attached files to a document are exported in the same directory than the document. They are prefixed with the name of the document parent.

## Installation

{{{multiexcerpt 'MP-installation-easy' page='Generic Multi-Excerpts'}}}

## Technical Overview

### Enabling the New Operation

In Studio go to **Settings** > **Registries**, to create a new&nbsp;**Automation Operations** with the following JSON path: &nbsp;&nbsp;

```
{
  "operations": [
    {
  "id" : "ExportStructureToFS",
  "label" : "ExportStructureToFS",
  "category" : "Services",
  "requires" : null,
  "description" : "This operation enables to export the structure contained in the Root name path to the File System Target path. You can declare your own query to choose the document being exported.",
  "url" : "ExportStructureToFS",
  "signature" : [ "void", "void" ],
  "params" : [ {
    "name" : "File System Target",
    "description" : "",
    "type" : "string",
    "required" : true,
    "widget" : null,
    "order" : 0,
    "values" : [ ]
  }, {
    "name" : "Root Path",
    "description" : "",
    "type" : "string",
    "required" : true,
    "widget" : null,
    "order" : 0,
    "values" : [ ]
  }, {
    "name" : "Query",
    "description" : "",
    "type" : "string",
    "required" : false,
    "widget" : null,
    "order" : 0,
    "values" : [ ]
  } ]
}
]
}
```

If you don't know how to add an external operation, you will find all the information that you need on the page [Referencing an Externally Defined Operation]({{page space='studio' page='referencing-an-externally-defined-operation'}}).

### Creating the Automation Chain

This operation can be called in an automation chain called &ldquo;ExportFS&rdquo; in our example, and linked to a user action.

![]({{file name='Screen Shot 2015-11-10 at 16.41.35.png'}} ?w=650,border=true)

This operation has the following parameters:

*   **File System Target**: where the export will be done on the File System
*   **Root&nbsp;** **Path**: the path of the top document in the hierarchy to be exported.
*   **Query**: optional parameter. By default the query called by the exporter is:

    ```sql
    SELECT * FROM Document ecm:mixinType !='HiddenInNavigation' AND ecm:isVersion = 0 AND ecm:isTrashed = 0
    ```

    You can define your own query and put it the in the Query parameter.

For example if you want to export all the documents even the ones in &ldquo;deleted&rdquo; state you can define this query in the field of the `Query` parameter.

```sql
SELECT * FROM Document WHERE ecm:mixinType !='HiddenInNavigation' AND ecm:isVersion = 0
```

## Customization

If you want to go further you can decide to contribute to the extension point &ldquo;exportLogic&rdquo; with a custom class to have a new way of export:

*   Export only documents of type &ldquo;File&rdquo;
*   Override existing documents (not using the timestamp prefix anymore)
*   Create an XML export of each document (done as an example)&nbsp;

The following contribution has already been written:&nbsp;`CustomExporterPlugin`. It launches the default export (export all the documents under root path) and in addition, for each exported document, creates the XML version.

You can use it with the following XML extension in Studio : &nbsp;

```
<extension
target="org.nuxeo.io.fsexporter.FSExporter"
point="exportLogic">

		<exportLogic
class="org.nuxeo.io.fsexporter.CustomExporterPlugin" />

</extension>
```

{{! Don't put anything here. }}

* * *
