---
title: Choosing How to Import Data in the Nuxeo Platform
description: Discover the tools and APIs that Nuxeo Platform provides to import content.
review:
  comment: ''
  date: '2019-09-02'
  status: ok
labels:
  - lts2016-ok
  - import
  - gcarlin
  - lts2017-ok
  - university
toc: true
confluence:
  ajs-parent-page-id: '19235677'
  ajs-parent-page-title: Quick Start Series
  ajs-space-key: NXDOC
  ajs-space-name: Nuxeo Platform Developer Documentation
  canonical: Choosing+How+to+Import+Data+in+the+Nuxeo+Platform
  canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Choosing+How+to+Import+Data+in+the+Nuxeo+Platform'
  page_id: '17794912'
  shortlink: YIcPAQ
  shortlink_source: 'https://doc.nuxeo.com/x/YIcPAQ'
  source_link: /display/NXDOC/Choosing+How+to+Import+Data+in+the+Nuxeo+Platform
tree_item_index: 700
history:
  - author: Manon Lumeau
    date: '2016-07-20 13:26'
    message: emove children display macr
    version: '18'
  - author: Manon Lumeau
    date: '2016-06-09 13:14'
    message: ''
    version: '17'
  - author: Manon Lumeau
    date: '2016-03-10 14:56'
    message: ''
    version: '16'
  - author: Manon Lumeau
    date: '2016-03-10 14:55'
    message: ''
    version: '15'
  - author: Manon Lumeau
    date: '2016-03-09 14:47'
    message: ''
    version: '14'
  - author: Anne Jubert
    date: '2016-03-08 14:30'
    message: ''
    version: '13'
  - author: Solen Guitter
    date: '2015-12-07 15:11'
    message: ''
    version: '12'
  - author: Solen Guitter
    date: '2015-12-07 15:11'
    message: ''
    version: '11'
  - author: Solen Guitter
    date: '2015-07-17 09:10'
    message: ''
    version: '10'
  - author: Solen Guitter
    date: '2014-10-06 11:34'
    message: ''
    version: '9'
  - author: Solen Guitter
    date: '2014-09-19 10:46'
    message: ''
    version: '8'
  - author: Manon Lumeau
    date: '2014-09-16 15:50'
    message: ''
    version: '7'
  - author: Manon Lumeau
    date: '2014-07-21 10:55'
    message: ''
    version: '6'
  - author: Solen Guitter
    date: '2014-07-18 11:27'
    message: ''
    version: '5'
  - author: Solen Guitter
    date: '2014-07-18 11:03'
    message: ''
    version: '4'
  - author: Solen Guitter
    date: '2013-12-16 15:44'
    message: Added links to related pages for each import approach
    version: '3'
  - author: Solen Guitter
    date: '2013-12-16 15:16'
    message: 'Typos, added TOC and related topics'
    version: '2'
  - author: Thierry Delprat
    date: '2013-12-16 14:48'
    message: ''
    version: '1'
---

{{#> callout type='info' heading='Nuxeo University'}}
Watch the related courses: [Data Capture - Import Strategies](https://university.nuxeo.com/learn/public/course/view/elearning/86/DataCapture).
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Choosing How to Import Data in the Nuxeo Platform/university_import_strategies.png
    name: university_import_strategies.png
    server#schema#up_to_date
--}}
![university_import_strategies.png](nx_asset://cd2f468f-c2d2-49d5-a46f-02eb0b1f0dab ?w=450,border=true)
{{/callout}}

The Nuxeo Platform provides tools and APIs to import content:

- From 10s of documents to billions of them, with import rates such as 10,000s of documents per second
- With or without metadata
- Handling security, lifecycle and other system properties if necessary.

Those tools natively handle several formats to specify document properties:

- XML (one XML file per document or one for all documents)
- CSV (one line per document)
- Properties file (one property file per file to import for instance, or per folder)

## Import Strategies

Importing content in the Nuxeo Platform means:

- Creating a document that will store the metadata and reference the binaries
- Importing the binaries (when there are some; some projects do not handle files, just business objects)

### Creating Documents

There can be several strategies to create documents:

**Use the REST API**

- **Pros**: The most straightforward strategy. Can be done remotely as long as there is an HTTP access.
- **Cons**: The less performant, although proven rates of thousands of documents per seconds can be reached.

**Use the Java API server-side**

- **Pros**: Transactional, multi-threaded and highly performant. It provides the ability to disable events processing and to bundle event processing.
- **Cons**: A bit more complex to understand logics, requires to deploy a server-side plugin for any customization.

**Fill in the database directly** (SQL Scripts, MongoDB collections, ...)

- **Pros**: The most performant.
- **Cons**: Requires knowledge of Nuxeo Platform internals. May break business logic as listeners are not handled, no event is fired in the repository. For instance, there won't be any audit unless you fill the table at the same time. You still have to perform some additional tasks manually after that like rebuild full text, rebuild ancestors cache, rebuild read-ACLs.

### Importing Files

Similarly, there can be several strategies to upload binary content (the files):

**Using the REST API**

The REST API provides the batch endpoint to upload content, with the ability to upload binaries by chunks and thus implement resume upload patterns.

- **Pros**: Can upload files from anywhere, only need an HTTP access.
- **Cons**: Network becomes a strong limitation to import rates.

**Uploading them on a file system accessible from the Nuxeo server**

- **Pros**: No network limitation as files may then be just "moved" to the right place (unless they are then stored on an object store in the cloud).
- **Cons**: It is not always easy to open access to the folder file system. This solution can't be a generic strategy for a central repository use case.

**Moving the file right to the place it will then be stored by Nuxeo**

May it be a file system binary store, an S3 binary store or an Azure Object store, it is always possible to drop the files at the right place to restrict operations.

- **Pros**: Most efficient way to do, especially when the import is about very large multi-terabytes files.
- **Cons**: Not easy to handle as a general integration pattern, requires to compute the hash of the file first.

## Existing Import Tools

### Nuxeo Platform Importer

The Nuxeo Platform Importer comes with several implementations:
- **Nuxeo Bulk importer**: the generic mass document import addon (full, multi-threaded import from the server file system).
- **Nuxeo Scan importer**: to create documents from XML files.
- **Nuxeo Stream importer**: to create documents with a producer/consumer pattern logic, and uses the Log features provided by [Nuxeo Stream]({{page space='nxdoc' page='nuxeo-stream'}}).

#### Nuxeo Bulk Importer

**Features**

The [Nuxeo Bulk Document Importer](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-platform-importer) is an importer framework provided as an addon that can be used to build custom importers. It relies on a standard crawler, transformer, writer schema. The Scan importer and CSV importer addons are using this framework (see next sections). This is a solution for mass import that can handle thousands of documents per second. You need to write your own Document Factory that will be in charge of the document creation logic in the repository. You can then quickly launch the import controlling how many documents are done in a batch, how many batches per transaction, etc.

**Customization Language**

Java

**Customization Logic**

The importer framework offers many customization possibilities. You can read the [Nuxeo Platform Importer documentation]({{page page='nuxeo-bulk-document-importer'}}) for more information.

**Limitations**

Files must be available on a file system installed on the Nuxeo server.

#### Nuxeo Scan Importer

**Features**

The [Nuxeo Platform Scan Importer](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-scan-importer) is a submodule of the importer framework and is used for the output of a digitalization chain. Nuxeo Platform Scan Importer listens to a given folder and will import all content referenced via XML files, with their metadata, etc. Scan importer also offers very advanced XML <--> documents mapping possibilities, with ability to use some automation processing during the import phase.

**Customization Language**

Java

**Customization Logic**

Scan Importer is configurable via XML extensions for the metadata mapping. The documentation provides links to [simple and advanced use cases]({{page page='scan-documents-importer'}})

#### Nuxeo Stream Importer

**Features**

The [Nuxeo Stream Importer](https://github.com/nuxeo/nuxeo/tree/master/modules/platform/nuxeo-platform-importer/nuxeo-importer-stream) defines a producer/consumer pattern and uses the Log features provided by Nuxeo Stream. The Log is used to perform mass import. It decouples the Extraction/Transformation from the Load (using the ETL terminology). A document message producer does the extraction and transformation with custom logic. This module comes with a random document and a random blob generator, that does the same job as the random importer of the `nuxeo-importer-core` module. The load into Nuxeo is done with a generic consumer.
Automation operations are exposed to run producers and consumers.

Two options are offered to perform the import:
- **Two steps import**: Extract the document metadata and blobs then load documents into Nuxeo.
- **Four steps import**: Extract the blobs, load the blobs into Nuxeo, extract the document metadata then load documents into Nuxeo.

{{#> callout type='info' heading='Recommended mechanism for big volumes'}}
The Nuxeo Stream Importer is the recommended way of performing mass import with a decoupled extraction and load phases, the import is fault-tolerant, any Nuxeo nodes can be restarted during the import, it is also possible to re-execute an import from the beginning.
{{/callout}}

**Customization Language**

Java

**Customization Logic**

The importer framework offers many customization possibilities. You can read the [Nuxeo Stream Importer README](https://github.com/nuxeo/nuxeo/tree/master/addons/nuxeo-platform-importer/nuxeo-importer-stream) to learn more.

**Limitations**

Files must be available on a file system mounted on the Nuxeo server.

### Nuxeo CSV Importer

**Features**

[Nuxeo CSV](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-csv) uses the importer framework and provides a UI to upload a CSV file. The content of this file will be used to map columns values to properties of created documents.

**Customization Language**

Java

**Customization Logic**

See [documentation]({{page page='nuxeo-csv'}}).

### Using the Bare REST API

You can straightly use the REST API and implement the importing logic you need from there.

### Using the Bare Java API

You can use the CoreSession object in a server-side deployed custom Java component and implement the importing logic you need from there. We also provide a default [import/export format]({{page page='nuxeo-core-import-export-api'}}) for the repository with piping logic.

### node.js Importer

**Features**

The [node.js importer](https://github.com/nuxeo-sandbox/nuxeo-node-importer) makes use of the REST API and provides you with additional services compared to the bare approach:

- Multi-threading
- Client-side browsing of a complete hierarchy of content (folders, subfolders and files)

**Customization Language**

JavaScript

**Customization Logic**

Fork and override a specific object implementation. It is easy to add a custom logic to start a workflow on the document at the same time, changing its lifecycle, or setting a custom ACL. A [sample fork with custom rules](https://github.com/nuxeo-sandbox/nuxeo-node-custom-importer) is provided on GitHub.

**Limitations**

No out-of-the-box format for metadata values specification. Also not recommended if the import rate is the critical factor, since data transit over HTTP/S.
