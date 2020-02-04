---
title: Nuxeo CSV
review:
    comment: ''
    date: '2019-04-16'
    status: ok
labels:
    - lts2016-ok
    - csv
    - import
    - marketplace-package
    - nuxeo-csv
    - troger
    - csv-importer-component
    - lts2017-ok
    - university
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
        message: 'Basic import now heading3 => appears in TOC'
        version: '21'
    -
        author: Ronan Daniellou
        date: '2015-10-13 13:46'
        message: phrasing
        version: '20'
    -
        author: Ronan Daniellou
        date: '2015-10-13 13:39'
        message: '1st -> first'
        version: '19'
    -
        author: Ronan Daniellou
        date: '2015-10-13 13:38'
        message: '1st -> first'
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

{{#> callout type='info'}}
Watch the related courses on Nuxeo University
- [Nuxeo CSV Importer](https://university.nuxeo.com/learn/public/course/view/elearning/89/nuxeo-csv-importer) on Nuxeo University.
![]({{file name='university-csv.png' page='nxdoc/university'}} ?w=450,border=true)
{{/callout}}

{{! excerpt}}
The [Nuxeo CSV addon](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-csv) enables users to proceed to a bulk import of documents in the Nuxeo Platform using a CSV file. This addon enables users to create documents with their metadata filled in, to import files with their main attachment or to create a tree structure.
{{! /excerpt}}

{{! multiexcerpt name='nuxeo_csv_functional_introduction'}}
Installing this addon adds a button **Import a CSV file** for all users that have at least the Edit permission on any document in which it is possible to import a file. By default, this means workspaces and folders. If you configured other documents types in which it is possible to import files, then the button **Import a CSV file** can also be available (see the page [How to Enable CSV Import on a Custom Document Type]({{page page='how-to-enable-csv-import-on-a-custom-document-type'}})).
{{! /multiexcerpt}}

{{#> callout type='info' heading='Web UI and JSF UI' }}
This page gives all the necessary steps to import content with the CSV addon from JSF UI and Web UI.
{{/callout}}

## Installation

{{{multiexcerpt 'MP-installation-easy' page='Generic Multi-Excerpts'}}}

### With Web UI
After the package is installed, a new tab called **CSV** is available on the default creation form.

![]({{file name='nuxeo-csv-button-webui.png'}} ?w=450,border=true)

### With JSF UI
Users have an **Import a CSV file** button available in the folder toolbar of the workspaces, folders and in any document where they can import files.

![]({{file name='nuxeo-csv-button.png'}} ?w=450,border=true)

## {{> anchor 'configuration'}}Configuration

The Nuxeo CSV addon enables users to create file documents and upload their main attachment at the same time. This requires to configure where the server will take the attachments. This is done adding the parameter `nuxeo.csv.blobs.folder` in the server [nuxeo.conf]({{page page='configuration-parameters-index-nuxeoconf'}}) and giving it a value that is a local path to a folder that can be accessed by the server.

## {{> anchor 'nuxeo-csv-import-file-definition'}}CSV File Definition

The CSV file used to import documents in the Nuxeo Platform must respect the following rules:

- First line defines the properties that will be filled in
- Other lines define the documents to be imported
- Use a comma to separate properties
- Values must be between quotes
- Dates must be formatted using the W3C format. More information on the [W3C documentation](https://www.w3.org/TR/NOTE-datetime).

{{#> callout type='note'}}
It is possible to use the old legacy date format (without time information) `MM/dd/yyyy` by setting the configuration property `nuxeo.csv.import.legacyDateFormat` to `true`:

```xml
<require>org.nuxeo.ecm.csv.core.properties</require>

<extension point="configuration" target="org.nuxeo.runtime.ConfigurationService">
  <property name="nuxeo.csv.import.legacyDateFormat">true</property>
</extension>
```
{{/callout}}

- For multi-valued metadata, such as contributors, use a pipe character (`|`) to separate the different values
- For vocabularies values, use their id
- Lines defining the documents to import must define all properties specified on the first line, even empty ones (by using empty values)

Here is a simple example of the structure of a CSV file:

```csv
"name","type","dc:title","dc:description","dc:issued"
"my-file","File","My file","This is my file's description","2020-10-01T00:00:00"
```

In the example above:

- `name` is the id of the document (used in the URL)
- `type` is the id of document type (see the page [How to Override Existing Document Types]({{page page='how-to-override-existing-document-types'}}) for some default types properties)
- `dc:title` and `dc:description` are the title and description fields of the document from the Dublin Core (dc) schema. They follow the `schema:field` formatting.

To have new lines in a field value (like `dc:description`), just write them as in the following CSV file example:

```csv
"name","type","dc:title","dc:description"
"a-file","File","A File","description with
some new
lines"
"another-file","File","Another File","description without new line"
```

In the example above:

- `name` must be a unique value. If a CSV file contains more than one line with the same `name` only a single document with that name will be imported.

## Using Nuxeo CSV

### Basic Import

To import documents using Nuxeo CSV:

1.  Prepare the CSV file that defines the documents to import, following the rules explained in the [CSV file definition section](#nuxeo-csv-import-file-definition).
    Some specific use cases are explained below.
2.  In the Nuxeo Platform, go on the workspace or folder you want to import documents into.
3.  To select the CSV file:
   * With Web UI, click on the **Create** displayed on the bottom right side, and open the CSV tab. Then you can either drag n drop your CSV file of select it manually.
   ![]({{file name='nuxeo-csv-plus.png'}} ?w=450)
   * With JSF UI, click on the **Import a CSV file** button in the workspace or folder you want to import documents into.
4.  Browse and select your CSV file.

|Web UI|JSF UI|
|------|------|
|![]({{file name='nuxeo-csv-file-selected.png'}} ?w=450,border=true)|![]({{file name='CSV Importer beginning.png'}} ?w=450,border=true)|


5.  Optionally check the box **Receive the import report by email** if you want to receive an email when the import is done which shows how the import went. This is useful in case of imports that take a long time.
6.  Optionally check the box **Apply Date, Author and Dublin Core metadata** if you want to import documents while maintaining original UUID, creation date, modification date, author and contributors.
7.  Click on the **Process** button.
    The import starts. You can either:

    - Wait for the import to be completed. When it is completed, a report of the import is displayed;
<table style="width:100%">
  <tr>
    <th>Web UI</th>
    <th>JSF UI</th>
  </tr>
  <tr>
    <td>![]({{file name='nuxeo-csv-results-webui.png'}} ?w=550,border=true)</td>
    <td>![]({{file name='CSV Importer Imported.png'}} ?w=550,border=true)</td>
  </tr>
</table>

    - Start a new import;
    - Browse the application. If you checked the box **Receive the import report by email**, you receive an email once the import is completed.
    ![]({{file name='CSVImporteremail.png'}} ?w=400,border=true)

    {{#> callout type='warning' }}
    If you get an error with the CSV import, Web UI doesn't currently display the detailed report table in the CSV import result interface. This feature is currently being developed by the Nuxeo development team in order to homogenize the interface between Web UI and JSF UI.
    {{/callout}}

### Import a Document Tree Structure

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

You can use the [attached file]({{file name='nuxeo-csv-import-sample1.csv'}}) to test Nuxeo CSV to import a tree structure.

### Import Complex Property Values

Complex properties (mono and multi-valued) need to be JSON formatted. To do so, we advise you to use the JSON Export action from the [Nuxeo Dev Tools Extension]({{page page='nuxeo-dev-tools-extension'}}).

Let's illustrate it with a multivalued complex property called `product:composition` with two items (`material` and `percentage` as string fields). Then the CSV file should be structured like:

```
"name","type","dc:title","product:price","product:reference","product:year","product:season","product:colors","file:content","product:composition"
"shoes/shoes-428608_640","product","Shoes #1","67$","DTYIUUB","2013","spring","black|green","Shoes/shoes-428608_640.jpg","[{\"material\":\"coton\",\"percentage\":\"89\"},{\"material\":\"jean\",\"percentage\":\"11\"}]"
```

{{#> callout type='note'}}
Quotes should be escaped with `\` when using JSON format with complex properties
{{/callout}}

In this case, the JSON export of the imported document is:

```
 (...)
 "product:composition": [
     {
       "material": "coton",
       "percentage": "89"
     },
     {
       "material": "jean",
       "percentage": "11"
     }
   ],
   "product:year": "2013",
   "product:colors": [
     "black",
     "green"
   ],
   "product:season": "spring",
(...)
```

### Import Files

Importing files through Nuxeo CSV requires that your administrator [enabled it in the server configuration](#configuration)
and to put the binary files in a folder that can be accessed by the server.

#### Main Attachment

It is possible to create documents of type File and to upload their main attachment using Nuxeo CSV.

On your CSV file, use the `file.content` property in the first line and the name of your file on the document definition line.

```csv
"name","type","dc:title","dc:description","file.content"
"my-file","File","My file with uploaded attachment","This is a file with its attachment, created using Nuxeo CSV","my-file.doc"
```

You can use the [attached ZIP sample]({{file name='Nuxeo-CSV-sample.zip'}}) to test the import of files.

#### Files Attachment

Since 9.3, it is also possible to create documents and set their files attachment using Nuxeo CSV.

Setting the files attachement requires you to write a JSON formatted complex property. The JSON format is the following:

```json
[
    {
        "file": {
            "mime-type": "text/plain",
            "content": "first_file.txt"
        }
    },
    {
        "file": {
            "mime-type": "application/pdf",
            "content": "my_pdf.pdf"
        }
    },
    {
        "file": {
            "name": "custom_name.pdf",
            "content": "another_pdf.pdf"
        }
    }
]
```

In the JSON above:

* `content` is the relative path of the File to import, located in the configured folder.
* `name` overrides the name of the Blob, by default the name of the imported File. Optional.
* `mime-type` set the mime type of the Blob. Optional.

On your CSV file, use the `file:files` property in the first line and the JSON formatted complex property, such as:

```csv
"name","type","dc:title","file:files"
"my-file","File","My file with files attachment","[{ \"file\": { \"mime-type\": \"text/plain\", \"content\": \"first_file.txt\" }}, { \"file\": { \"mime-type\": \"application/pdf\", \"content\": \"my_pdf.pdf\" }}, { \"file\": { \"name\": \"custom_name.pdf\", \"content\": \"another_pdf.pdf\" }}]"
```

#### Complex Property

Since 9.3, it is also possible to create documents and import a File in a complex property.

For instance, assuming you have a schema named `foo` with a complex property named `complex` containing a string property `str` and a content property `file`:

```xml
<?xml version="1.0"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema"
  targetNamespace="http://nuxeo.ecm.csv.test/schemas/foo/"
  xmlns:foo="http://nuxeo.ecm.csv.test/schemas/foo/">

  <xs:include schemaLocation="core-types.xsd" />

  <xs:complexType name="complexType">
    <xs:sequence>
      <xs:element name="str" type="xs:string"/>
      <xs:element name="file" type="foo:content"/>
    </xs:sequence>
  </xs:complexType>

  <xs:element name="complex" type="foo:complexType"/>

</xs:schema>
```

The JSON formatted property will be:

```json
{
    "str": "a string",
    "file": {
        "mime-type": "text/plain",
        "content": "first_file.txt"
    }
}
```

On your CSV file, use the `foo:complex` property in the first line and the JSON formatted complex property, such as:

```csv
"name","type","dc:title","foo:complex"
"my-foo-file","FooFile","My file with complex property","{ \"str\": \"a string\", \"file\": { \"mime-type\": \"text/plain\", \"content\": \"first_file.txt\" }}"
```

### Set Lifecycle State When Creating Documents

It is possible to set the lifecycle state when the document is created through Nuxeo CSV, using the `ecm:currentLifeCycleState` property. This property is ignored when updating documents.

```csv
"name","type","dc:description","dc:title","ecm:currentLifeCycleState"
"myfile","File","a simple file","My File","obsolete"
```

### Events


By default, performing a CSV import raises a **document created event**.

If you want to import documents while maintaining original UUID, creation date, modification date, author and contributors, check the "Apply Date, Author and Dublin Core metadata" checkbox. In this case, a **document imported event** is triggered.

{{#> callout type='info'}}
This last option can only be used by members of the administrators group.
{{/callout}}

* * *

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
- [HOWTO: Upload a File in Nuxeo Using REST API]({{page page='howto-upload-file-nuxeo-using-rest-api'}})

{{/panel}}
</div>
</div>
