---
title: Nuxeo CSV
labels:
    - marketplace-package
    - import
    - nuxeo-csv
    - csv
toc: true
confluence:
    ajs-parent-page-id: '16092550'
    ajs-parent-page-title: Marketplace Add-Ons
    ajs-space-key: USERDOC58
    ajs-space-name: Nuxeo Platform User Documentation - 5.8
    canonical: Nuxeo+CSV
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC58/Nuxeo+CSV'
    page_id: '16092603'
    shortlink: u431
    shortlink_source: 'https://doc.nuxeo.com/x/u431'
    source_link: /display/USERDOC58/Nuxeo+CSV
history:
    - 
        author: Solen Guitter
        date: '2016-09-01 15:45'
        message: ''
        version: '13'
    - 
        author: Manon Lumeau
        date: '2016-03-11 10:39'
        message: 'Merge ADMINDOC with NXDOC    '
        version: '12'
    - 
        author: Thomas Roger
        date: '2015-04-30 10:12'
        message: ''
        version: '11'
    - 
        author: Thomas Roger
        date: '2015-04-30 10:11'
        message: ''
        version: '10'
    - 
        author: Solen Guitter
        date: '2013-12-13 18:05'
        message: ''
        version: '9'
    - 
        author: Solen Guitter
        date: '2013-12-12 11:07'
        message: ''
        version: '8'
    - 
        author: Solen Guitter
        date: '2013-11-12 18:23'
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
<div class="row"><div class="column medium-8">{{! excerpt}}

The [Nuxeo CSV addon](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-csv) enables users to proceed to a bulk import of documents in the Nuxeo Platform using a CSV file. This addons enables to create documents with their metadata filled in, to import files with their main attachment, to create a tree structure.

{{! /excerpt}}

Installing this addon adds a button "Import a CSV file" for all users that have at least the Write right on any document in which it is possible to import a file. By default, this means workspaces and folders. If you configured other documents types in which it is possible to import files, then the button "Import a CSV file" can also be available (see the page [Nuxeo CSV]({{page space='nxdoc58' page='nuxeo-csv'}}) ).

&nbsp;

## {{> anchor 'nuxeo-csv-import-file-definition'}}CSV file definition

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

<pre>"name","type","dc:title","dc:description"
"my-file","File","My file","This is my file's description"</pre>

In the example above:

*   `name` is the id of the document (used in the URL),
*   `type` is the id of document type (see the page&nbsp;[How to Override Existing Document Types]({{page space='nxdoc' page='how-to-override-existing-document-types'}}) for some default types properties),
*   `dc:title` and&nbsp;`dc:description` are the title and description fields of the document from the Dublin Core (dc) schema. They follow the `schema:field` formatting.

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
5.  Optionally check the box **<span style="color: rgb(68,68,68);">Send me the import report by email</span>** if you want to receive an email when the import is done, that shows how the import went. This is useful in case of long import that will take some time.
6.  Click on the **Process** button.
    The import starts. You can either:

    *   wait for the import to be completed.
        You are then display a report of the import when it is completed;
        ![]({{file name='CSV Importer Imported.png'}} ?w=550,border=true)
    *   start a new import;
    *   browse the application.If you checked the box **<span style="color: rgb(68,68,68);">Send me the import report by email</span>** , you receive an email once the import is completed.
    ![]({{file name='CSVImporteremail.png'}} ?w=400,border=true)

### Importing a document tree structure

It is possible to import a hierarchy of documents using Nuxeo CSV. To do that, the&nbsp;`name` property is used to determine where the document should be created in the hierarchy of documents you are importing: its `name` is composed of the names of its parents separated by /, forming a path.

Since the importer creates the documents in the order they are listed in the CSV file, you have to be careful about the order in which you declare the documents to import so as to be sure to create the workspace or folder before the documents it will hold.

Here is an example of a CSV import that creates documents at the root of the workspace from which the import is started and in a child folder:

<pre>"name","type","dc:title","dc:description"
"folder","Folder","Folder in the workspace","The description of the folder created by CSV import"
"folder/doc-created-in-folder","File","Document created in a folder","The description of a file imported in a folder created by the import"
"doc1","File","Document 0","A document created directly in the workspace in which the import is started"
"doc2","File","Doc 1","A file document description, created at the same location as doc1"
"doc3","Note","Doc 2","A note document, created at the same location as doc1 and doc2"</pre>

You can use the attached file []({{file name='nuxeo-csv-import-sample1.csv'}}) to test Nuxeo CSV to import a tree structure.

### Importing files

It is possible to create documents of type File and to upload their main attachment using Nuxeo CSV. This requires that [your administrator enabled it in the server configuration]({{page space='nxdoc58' page='nuxeo-csv'}}) and to put the binary files in a folder that can be accessed by the server.

On your CSV file, use the&nbsp;`file:content` property in the 1st line and the name of your file on the document definition line.

<pre>"name","type","dc:title","dc:description","file:content"
"my-file","File","My file with uploaded attachment","This is a file with its attachment, created using Nuxeo CSV","my-file.doc"</pre>

You can use the attached zip sample []({{file name='Nuxeo-CSV-sample.zip'}}) to test the import of files.

### Setting life cycle state when creating documents

It is possible to set the life cycle state when the document is created through Nuxeo CSV, using the&nbsp;`ecm:currentLifeCycleState` property. This property is ignored when updating documents.

<pre>"name","type","dc:description","dc:title","ecm:currentLifeCycleState"
"myfile","File","a simple file","My File","obsolete"</pre>

&nbsp;

&nbsp;

&nbsp;

</div><div class="column medium-4">{{#> panel heading='In this section'}}

{{/panel}}</div></div>