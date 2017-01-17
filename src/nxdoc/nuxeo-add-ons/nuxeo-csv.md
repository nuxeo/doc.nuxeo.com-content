---
title: Nuxeo CSV
review:
    comment: ''
    date: '2015-12-01'
    status: ok
labels:
    - content-review-lts2016
    - csv
    - import
    - marketplace-package
    - nuxeo-csv
    - csv-importer-component
toc: true
confluence:
    ajs-parent-page-id: '16089349'
    ajs-parent-page-title: Nuxeo Add-Ons
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Nuxeo+CSV
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Nuxeo+CSV'
    page_id: '14255163'
    shortlink: O4TZ
    shortlink_source: 'https://doc.nuxeo.com/x/O4TZ'
    source_link: /display/NXDOC/Nuxeo+CSV
tree_item_index: 1200
history:
    -
        author: Karin Touchie
        date: '2016-10-07 12:19'
        message: dd Import Mode option to CSV importe
        version: '34'
    -
        author: Frantz Fischer
        date: '2016-07-29 10:32'
        message: ''
        version: '33'
    -
        author: Frantz Fischer
        date: '2016-07-29 10:23'
        message: ''
        version: '32'
    -
        author: Solen Guitter
        date: '2016-06-23 08:34'
        message: ''
        version: '31'
    -
        author: Solen Guitter
        date: '2016-06-10 09:06'
        message: Update installation excerpt
        version: '30'
    -
        author: Manon Lumeau
        date: '2016-06-09 12:32'
        message: ''
        version: '29'
    -
        author: Solen Guitter
        date: '2016-05-30 08:21'
        message: ''
        version: '28'
    -
        author: Karin Touchie
        date: '2016-05-27 14:46'
        message: ''
        version: '27'
    -
        author: Karin Touchie
        date: '2016-05-27 14:39'
        message: ''
        version: '26'
    -
        author: Solen Guitter
        date: '2016-01-15 08:35'
        message: ''
        version: '25'
    -
        author: Ronan Daniellou
        date: '2015-11-30 08:55'
        message: 'Added event section: creation event, not import event'
        version: '24'
    -
        author: Manon Lumeau
        date: '2015-11-25 17:25'
        message: new Edit permission
        version: '23'
    -
        author: Ronan Daniellou
        date: '2015-11-18 15:25'
        message: Fixes layout by extracting text from multiexcerpt macro.
        version: '22'
    -
        author: Ronan Daniellou
        date: '2015-10-13 13:54'
        message: Basic import now heading3 => appears in TOC
        version: '21'
    -
        author: Ronan Daniellou
        date: '2015-10-13 13:46'
        message: phrasing
        version: '20'
    -
        author: Ronan Daniellou
        date: '2015-10-13 13:39'
        message: 1st -> first
        version: '19'
    -
        author: Ronan Daniellou
        date: '2015-10-13 13:38'
        message: 1st -> first
        version: '18'
    -
        author: Solen Guitter
        date: '2015-08-05 13:56'
        message: ''
        version: '17'
    -
        author: Solen Guitter
        date: '2015-07-29 12:55'
        message: Add link to configuration section
        version: '16'
    -
        author: Solen Guitter
        date: '2015-05-04 09:53'
        message: Title capitalization
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

The [Nuxeo CSV add-on](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-csv) enables users to proceed to a bulk import of documents in the Nuxeo Platform using a CSV file. This add-on enables users to create documents with their metadata filled in, to import files with their main attachment or to create a tree structure.

{{! /excerpt}} {{! multiexcerpt name='nuxeo_csv_functional_introduction'}}

Installing this add-on adds a button "Import a CSV file" for all users that have at least the Edit permission on any document in which it is possible to import a file. By default, this means workspaces and folders. If you configured other documents types in which it is possible to import files, then the button "Import a CSV file" can also be available (see the page [How to Enable CSV Import on a Custom Document Type]({{page page='how-to-enable-csv-import-on-a-custom-document-type'}})).

{{! /multiexcerpt}}

## Installation

{{{multiexcerpt 'MP-installation-easy' page='Generic Multi-Excerpts'}}}

After the package is installed, users have a **Import a CSV file** button available in workspaces, folders and in any document where they can import files.

![]({{file name='nuxeo-csv-button.png'}} ?w=350,border=true)

## {{> anchor 'configuration'}}Configuration

The Nuxeo CSV add-on enables users to create file documents and upload their main attachment at the same time. This requires to configure where the server will take the attachments. This is done adding the parameter `nuxeo.csv.blobs.folder` in the server [nuxeo.conf]({{page page='configuration-parameters-index-nuxeoconf'}}) and giving it a value that is a local path to a folder that can be accessed by the server.

## {{> anchor 'nuxeo-csv-import-file-definition'}}CSV File Definition

The CSV file used to import documents in the Nuxeo Platform must respect the following rules:

*   First line defines the properties that will be filled in
*   Other lines define the documents to be imported
*   Use a comma to separate properties
*   Values must be between quotes
*   Dates must use the format MM/dd/yyyy
*   For multi-valued metadata, such as contributors, use a pipe character (`|`) to separate the different values
*   For vocabularies values, use their id
*   Lines defining the documents to import must define all properties specified on the first line, even empty ones (by using empty values)

Here is a simple example of the structure of a CSV file:

```csv
"name","type","dc:title","dc:description"
"my-file","File","My file","This is my file's description"
```

In the example above:

*   `name` is the id of the document (used in the URL)
*   `type` is the id of document type (see the page [How to Override Existing Document Types]({{page page='how-to-override-existing-document-types'}}) for some default types properties)
*   `dc:title` and `dc:description` are the title and description fields of the document from the Dublin Core (dc) schema. They follow the `schema:field` formatting.

To have new lines in a field value (like `dc:description`), just write them as in the following CSV file example:

```csv
"name","type","dc:title","dc:description"
"a-file","File","A File","description with
some new
lines"
"another-file","File","Another File","description without new line"
```

{{#> callout type='note' }}

Nuxeo CSV does support complex properties but not blob definition.

{{/callout}}

## Using Nuxeo CSV

### Basic Import

To import documents using Nuxeo CSV:

1.  Prepare the CSV file that defines the documents to import, following the rules explained in the [CSV file definition section](#nuxeo-csv-import-file-definition).
    Some specific use cases are explained below.
2.  In the Nuxeo Platform, go on the workspace or folder you want to import documents into.
3.  Click on the **Import a CSV file** button in the workspace or folder you want to import documents into.
4.  Browse and select your CSV file.
    ![]({{file name='CSV Importer beginning.png'}} ?w=550)
5.  Optionally check the box **<span style="color: rgb(68,68,68);">Send me the import report by email</span>** if you want to receive an email when the import is done which shows how the import went. This is useful in case of imports that take a long time.
6.  Optionally check the box **Enable document import mode** if you want to import documents while maintaining original UUID, creation date, modification date, author and contributors.
7.  Click on the **Process** button.
    The import starts. You can either:

    *   wait for the import to be completed.
        When it is completed, a report of the import is displayed ;
        ![]({{file name='CSV Importer Imported.png'}} ?w=550,border=true)
    *   start a new import;
    *   browse the application.If you checked the box ** Send me the import report by email >** , you receive an email once the import is completed.
    ![]({{file name='CSVImporteremail.png'}} ?w=400,border=true)

### Importing a Document Tree Structure

It is possible to import a hierarchy of documents using Nuxeo CSV. To do that, the `name` property is used to determine where the document should be created in the hierarchy of documents you are importing: its `name` is composed of the names of its parents separated by `/`, forming a path.

Since the importer creates the documents in the order they are listed in the CSV file, you have to be careful about the order in which you declare the documents to import so as to be sure to create the workspace or folder before the documents it will hold.

Here is an example of a CSV import that creates documents at the root of the workspace from which the import is started and in a child folder:

```csv
"name","type","dc:title","dc:description"
"folder","Folder","Folder in the workspace","The description of the folder created by CSV import"
"folder/doc-created-in-folder","File","Document created in a folder","The description of a file imported in a folder created by the import"
"doc1","File","Document 0","A document created directly in the workspace in which the import is started"
"doc2","File","Doc 1","A file document description, created at the same location as doc1"
"doc3","Note","Doc 2","A note document, created at the same location as doc1 and doc2"
```

You can use the attached file []({{file name='nuxeo-csv-import-sample1.csv'}}) to test Nuxeo CSV to import a tree structure.

### Importing Files

It is possible to create documents of type File and to upload their main attachment using Nuxeo CSV. This requires that your administrator [enabled it in the server configuration](#configuration) and to put the binary files in a folder that can be accessed by the server.

On your CSV file, use the `file:content` property in the first line and the name of your file on the document definition line.

```csv
"name","type","dc:title","dc:description","file:content"
"my-file","File","My file with uploaded attachment","This is a file with its attachment, created using Nuxeo CSV","my-file.doc"
```

You can use the attached zip sample []({{file name='Nuxeo-CSV-sample.zip'}}) to test the import of files.

Complex properties (mono and multi-valued) need to be JSON formatted like (see the example below):

```csv
"name","type","dc:description","dc:title","dc:contributors","dc:issued","note:note","complexTest:complexItem","complexTest:listItem"
"myfile","File","a simple file","My File","contributor1|contributor2|contributor3","10/01/2010","","",""
"mynote","Note","a simple note","My Note","bender|leela|fry","12/12/2012","note content","",""
"mycomplexfile","ComplexFile","a complex file","My Complex File","joe","12/21/2013","","{\"arrayProp\":[\"1\"],\"boolProp\":true,\"stringProp\":\"testString1\    "}","[{\"arrayProp\":[\"1\"],\"boolProp\":true,\"stringProp\":\"testString1\"},{\"arrayProp\":[\"1\"],\"boolProp\":true,\"stringProp\":\"testString2\"}]"
```

You can use the attached file []({{file name='docs_ok.csv'}}) to better understand the syntax.

{{#> callout type='note'}}
Dates inside a complex type use W3C format and not MM/dd/yyyy as for simple type dates.
More information on the [W3C documentation](https://www.w3.org/TR/NOTE-datetime).
{{/callout}}

### Setting Lifecycle State When Creating Documents

It is possible to set the lifecycle state when the document is created through Nuxeo CSV, using the `ecm:currentLifeCycleState` property. This property is ignored when updating documents.

```csv
"name","type","dc:description","dc:title","ecm:currentLifeCycleState"
"myfile","File","a simple file","My File","obsolete"
```

### Events

Note that the event raised by this CSV import is a **creation event**, not an import one. An import event means that for the Nuxeo Platform, a full and ready Nuxeo document is imported. Here based on some data, a new Nuxeo document is created.

<div class="row" data-equalizer data-equalize-on="medium">
<div class="column medium-6">
{{#> panel heading='Related Documentation'}}

- [How to Enable CSV Import on a Custom Document Type]({{page page='how-to-enable-csv-import-on-a-custom-document-type'}})

{{/panel}}
</div>
<div class="column medium-6">
{{#> panel heading='Other Import Documentation'}}

- [Choosing How to Import Data in the Nuxeo Platform]({{page page='choosing-how-to-import-data-in-the-nuxeo-platform'}})
- [Nuxeo Bulk Document Importer]({{page page='nuxeo-bulk-document-importer'}})
- [Nuxeo Core Import / Export API]({{page page='nuxeo-core-import-export-api'}})
- [How to Upload a File in Nuxeo Platform Using REST API Batch Processing Endpoint]({{page page='how-to-upload-a-file-in-nuxeo-platform-using-rest-api-batch-processing-endpoint'}})

{{/panel}}
</div>
</div>
