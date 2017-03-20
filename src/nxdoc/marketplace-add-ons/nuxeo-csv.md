---
title: Nuxeo CSV
review:
    comment: ''
    date: ''
    status: ok
labels:
    - csv
    - nuxeo-csv
    - marketplace-package
    - import
toc: true
confluence:
    ajs-parent-page-id: '22380668'
    ajs-parent-page-title: Marketplace Add-Ons
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: Nuxeo+CSV
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC60/Nuxeo+CSV'
    page_id: '22380737'
    shortlink: wYBVAQ
    shortlink_source: 'https://doc.nuxeo.com/x/wYBVAQ'
    source_link: /display/NXDOC60/Nuxeo+CSV
history:
    -
        author: Solen Guitter
        date: '2015-05-04 09:54'
        message: itle capitalizatio
        version: '15'
    -
        author: Thomas Roger
        date: '2015-04-30 10:12'
        message: ''
        version: '14'
    -
        author: Solen Guitter
        date: '2014-12-04 15:10'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2014-11-28 00:54'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2014-11-28 00:46'
        message: Merging admin and user doc
        version: '11'
    -
        author: Thomas Roger
        date: '2014-08-21 11:30'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2013-12-17 16:33'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2013-12-12 11:06'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2013-11-12 18:30'
        message: Removed related pages from TOC
        version: '7'
    -
        author: Solen Guitter
        date: '2013-08-05 15:10'
        message: Added zip sample fro file import
        version: '6'
    -
        author: Solen Guitter
        date: '2013-08-05 15:08'
        message: 'Added sample 1. '
        version: '5'
    -
        author: Solen Guitter
        date: '2013-08-02 20:08'
        message: Added related pages
        version: '4'
    -
        author: Solen Guitter
        date: '2013-08-02 19:44'
        message: ''
        version: '3'
    -
        author: Solen Guitter
        date: '2013-08-02 19:40'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2013-06-19 16:02'
        message: ''
        version: '1'

---
{{! excerpt}}

The [Nuxeo CSV add-on](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-csv) enables users to proceed to a bulk import of documents in the Nuxeo Platform using a CSV file. This add-on enables to create documents with their metadata filled in, to import files with their main attachment, to create a tree structure.

{{! /excerpt}}

Installing this add-on adds a button "Import a CSV file" for all users that have at least the Write right on any document in which it is possible to import a file. By default, this means workspaces and folders. If you configured other documents types in which it is possible to import files, then the button "Import a CSV file" can also be available (see the page [How to Enable CSV Import on a Custom Document Type]({{page page='how-to-enable-csv-import-on-a-custom-document-type'}})).

## Installation

{{{multiexcerpt 'MP-installation-easy' page='Digital Asset Management (DAM)'}}}

After the package is installed, users have a **Import a CSV file** button available in workspaces, folders and in any document where they can import files.

![]({{file name='nuxeo-csv-button.png'}} ?w=350,border=true)

## Configuration

The Nuxeo CSV add-on enables users to create file documents and upload their main attachment at the same time. This requires to configure where the server will take the attachments. This is done adding the parameter `nuxeo.csv.blobs.folder` in the server [nuxeo.conf]({{page space='admindoc60' page='configuration-parameters-index-nuxeoconf'}}) and giving him a value that is the path to a folder that can be accessed by the server.

## {{> anchor 'nuxeo-csv-import-file-definition'}}CSV File Definition

The CSV file used to import documents in the Nuxeo Platform must respect the following rules:

*   1st line defines the properties that will be filled in,
*   other lines define the documents to be imported,
*   use a comma to separate properties,
*   values must be between quotes,
*   dates must use the format MM/dd/yyyy,
*   for multi-valued metadata, such as contributors, use a pipe character (|) to separate the different values,
*   for vocabularies values, use their id,
*   lines defining the documents to import must define all properties specified on the 1st line, even empty ones (by using empty values).

Here is a simple example of the structure of a CSV file:

```
"name","type","dc:title","dc:description"
"my-file","File","My file","This is my file's description"
```

In the example above:

*   `name` is the id of the document (used in the URL),
*   `type` is the id of document type (see the page [How to Override Existing Document Types]({{page page='how-to-override-existing-document-types'}}) for some default types properties),
*   `dc:title` and `dc:description` are the title and description fields of the document from the Dublin Core (dc) schema. They follow the `schema:field` formatting.

To have new lines in a field value (like `dc:description`), just write them as in the following CSV file example:

```
"name","type","dc:title","dc:description"
"a-file","File","A File","description with
some new
lines"
"another-file","File","Another File","description without new line"
```

{{#> callout type='note' }}

Nuxeo CSV doesn't support complex properties, such as blob definition.

{{/callout}}

## Using Nuxeo CSV

Importing documents using Nuxeo CSV always the same few steps. Some specific use cases are explained below.

**To import documents using Nuxeo CSV:**

1.  Prepare the CSV file that defines the documents to import, following the rules explained in the [CSV file definition section](#nuxeo-csv-import-file-definition).
    Some specific use cases are explained below.
2.  In the Nuxeo Platform, go on the workspace or folder you want to import documents into.
3.  Click on the **Import a CSV file** button in the workspace or folder you want to import documents into.
4.  Browse and select your CSV file.
    ![]({{file name='CSV Importer beginning.png'}} ?w=550,border=true)
5.  Optionally check the box **Send me the import report by email** if you want to receive an email when the import is done, that shows how the import went. This is useful in case of long import that will take some time.
6.  Click on the **Process** button.
    The import starts. You can either:

    *   wait for the import to be completed.
        You are then display a report of the import when it is completed;
        ![]({{file name='CSV Importer Imported.png'}} ?w=550,border=true)
    *   start a new import;
    *   browse the application.If you checked the box **Send me the import report by email** , you receive an email once the import is completed.
    ![]({{file name='CSVImporteremail.png'}} ?w=400,border=true)

### Importing a Document Tree Structure

It is possible to import a hierarchy of documents using Nuxeo CSV. To do that, the `name` property is used to determine where the document should be created in the hierarchy of documents you are importing: its `name` is composed of the names of its parents separated by /, forming a path.

Since the importer creates the documents in the order they are listed in the CSV file, you have to be careful about the order in which you declare the documents to import so as to be sure to create the workspace or folder before the documents it will hold.

Here is an example of a CSV import that creates documents at the root of the workspace from which the import is started and in a child folder:

```
"name","type","dc:title","dc:description"
"folder","Folder","Folder in the workspace","The description of the folder created by CSV import"
"folder/doc-created-in-folder","File","Document created in a folder","The description of a file imported in a folder created by the import"
"doc1","File","Document 0","A document created directly in the workspace in which the import is started"
"doc2","File","Doc 1","A file document description, created at the same location as doc1"
"doc3","Note","Doc 2","A note document, created at the same location as doc1 and doc2"
```

You can use the [attached file]({{file name='nuxeo-csv-import-sample1.csv'}}) to test Nuxeo CSV to import a tree structure.

### Importing Files

It is possible to create documents of type File and to upload their main attachment using Nuxeo CSV. This requires that your administrator enabled it in the server configuration and to put the binary files in a folder that can be accessed by the server.

On your CSV file, use the `file:content` property in the 1st line and the name of your file on the document definition line.

```
"name","type","dc:title","dc:description","file:content"
"my-file","File","My file with uploaded attachment","This is a file with its attachment, created using Nuxeo CSV","my-file.doc"
```

You can use the [attached ZIP sample]({{file name='Nuxeo-CSV-sample.zip'}}) to test the import of files.

### Setting Life Cycle State When Creating Documents

It is possible to set the life cycle state when the document is created through Nuxeo CSV, using the `ecm:currentLifeCycleState` property. This property is ignored when updating documents.

```
"name","type","dc:description","dc:title","ecm:currentLifeCycleState"
"myfile","File","a simple file","My File","obsolete"
```

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [How to Enable CSV Import on a Custom Document Type]({{page page='how-to-enable-csv-import-on-a-custom-document-type'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Other Import Documentation'}}

- [Choosing How to Import Data in the Nuxeo Platform]({{page page='choosing-how-to-import-data-in-the-nuxeo-platform'}})
- [Nuxeo Bulk Document Importer]({{page page='nuxeo-bulk-document-importer'}})
- [Nuxeo Core Import / Export API]({{page page='nuxeo-core-import-export-api'}})
- [How to Upload a File in Nuxeo Platform Using REST API Batch Processing Endpoint]({{page page='how-to-upload-a-file-in-nuxeo-platform-using-rest-api-batch-processing-endpoint'}})

{{/panel}}</div></div>
