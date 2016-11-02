---
title: Choosing How to Import Data in the Nuxeo Platform
review:
    comment: ''
    date: '2015-12-01'
    status: ok
labels:
    - import
toc: true
confluence:
    ajs-parent-page-id: '19235677'
    ajs-parent-page-title: Quick Start Series
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Choosing+How+to+Import+Data+in+the+Nuxeo+Platform
    canonical_source: >-
        https://doc.nuxeo.com/display/NXDOC/Choosing+How+to+Import+Data+in+the+Nuxeo+Platform
    page_id: '17794912'
    shortlink: YIcPAQ
    shortlink_source: 'https://doc.nuxeo.com/x/YIcPAQ'
    source_link: /display/NXDOC/Choosing+How+to+Import+Data+in+the+Nuxeo+Platform
tree_item_index: 600
history:
    -
        author: Manon Lumeau
        date: '2016-07-20 13:26'
        message: emove children display macr
        version: '18'
    -
        author: Manon Lumeau
        date: '2016-06-09 13:14'
        message: ''
        version: '17'
    -
        author: Manon Lumeau
        date: '2016-03-10 14:56'
        message: ''
        version: '16'
    -
        author: Manon Lumeau
        date: '2016-03-10 14:55'
        message: ''
        version: '15'
    -
        author: Manon Lumeau
        date: '2016-03-09 14:47'
        message: ''
        version: '14'
    -
        author: Anne Jubert
        date: '2016-03-08 14:30'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2015-12-07 15:11'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2015-12-07 15:11'
        message: ''
        version: '11'
    -
        author: Solen Guitter
        date: '2015-07-17 09:10'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2014-10-06 11:34'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2014-09-19 10:46'
        message: ''
        version: '8'
    -
        author: Manon Lumeau
        date: '2014-09-16 15:50'
        message: ''
        version: '7'
    -
        author: Manon Lumeau
        date: '2014-07-21 10:55'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2014-07-18 11:27'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2014-07-18 11:03'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2013-12-16 15:44'
        message: Added links to related pages for each import approach
        version: '3'
    -
        author: Solen Guitter
        date: '2013-12-16 15:16'
        message: 'Typos, added TOC and related topics'
        version: '2'
    -
        author: Thierry Delprat
        date: '2013-12-16 14:48'
        message: ''
        version: '1'

---

## Importing Capabilities of The Nuxeo Platform
The Nuxeo Platform provides tools and apis for importing content:

 * from 10s of documents to billions of them, with import rates such as 10 000s of documents per second
 * with our without metadata
 * handling security, lifecycle and other sytem properties if necessary.
 
Those tools provide native handling of several formats for specifying document properties:

 * XLM (one XML file per document or one for all documents)
 * CSV (one line per document)
 * Properties file (one property file per file to import for instance, or per folder)


## Different Strategies

Importing content in Nuxeo Platform means:

 * Creating a document that will store the metadata and reference the binaries
 * Importing the binaries (when there are some, some projects do not handle files, just busines objects)
 
There can be several strategies for creating the documents:

   * Use the REST API 
     * +:The most simple. Can be done remotely as long as there is an http access.
     * -:The less peformant, although proven rates of thousands of documents per seconds can be reache
   * Use the Java API server side
     * +:Transactional, multi-theaded, Highly Performant, Ability to disable Events processing, ability to bundle event processing
     * -:A bit more complex to understand logics, requires a server-side plugin to deploy for any customisation.  
   * Fill-in the database directly (SQL Scripts, MongoDB collections, ...)
     * +: The most performant.
     * -: Requires knowledge of Nuxeo Platform internals. May break business logic as Listeners are not handled, no event is fired in the repository. For instance, there won't be any audit, unless you fill the table at the same time. You still have to perform some aditional tasks manually after that like rebuild full text, rebuild ancestors cache, rebuild read-ACLs



Similarily, there can be several strategies for uploading the binary content (the files):

 * Using the REST API. The REST API provides the batch endpoint for uploading content, with ability to upload by chunks and thus implement resume upload patterns.
  * +:Can upload file from anywhere, just need an HTTP access.
  * -:Network becomes a strong limitation to import rates
  
 * Uploading them on a file system accessible from the Nuxeo Server
  * +:No network limitation as files may then be just "moved" to the right place (unless they are then stored on an object store in the cloud)
  * -: it is not always easy to open access to the file system of the folder, so this solution cannot be seen as a generic strategy for central repository use case.
  
 * Moving the file right to the place it will then be stored by Nuxeo. May it be a file system binary store or an S3 or Azure Object store one, it is always possible to drop the files in the right place to limitate operations.
  * +:Most efficient way to do, especially when it is very large multi-tera bytes files.
  * -:Not easy to handle as a general integration pattern, requires to compute hash of the file first.
  
 
 
 
## Existing Import Tools

### Tools Diectory
<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">&nbsp;</th><th colspan="1">Features</th><th colspan="1">Customisation Language</th><th colspan="1">Customisation Logic</th><th colspan="1">Limitations</th></tr>

<tr><th colspan="1"><a href="https://github.com/nuxeo-sandbox/nuxeo-node-importer" target="_blank">node.js Importer</a></th>
<td colspan="1">
The node.js importer makes use of the REST API and provides you with additional services compared to the bare approach:<br>
- multi-threading<br>
<<<<<<< HEAD
- Client side browsing of a complete hierachy of content (folders,sub folders and files).</td><td>JavaScript</td><td>Fork and override a single object implementation. It is quite easy to add custom logic for stating a workflow on the document at the same time, or changing its lifecycle, or setting a custom ACL. A <a href="https://github.com/nuxeo-sandbox/nuxeo-node-custom-importer" target="_blank">sample fork with custom rules</a> is provided on github.</td><td>No out of the box format format for metadata values specification. Also not recommended if import rate is the critical factor, since data transits over HTTP.</td</tr>

<tr><th colspan="1"><a href="https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-platform-importer" target="_blank">Nuxeo Platform Importer</a></th>
<td colspan="1">
Nuxeo Platform importer is an importer framework provided as an addon that can be used to build custom importers. It relies on a standard crawler, tansformer, Writer scheme. Scan importer and csv importer are using that framework. It is the defacto choice when you want to reach hyperscale numbers with importing content (up to 10 000s of documents per second) All you need to do is write your own Document Factory that will be in charge of the document creation logic in the repository. You can then easily launch the import controlling how many documents re done in a batch, how many batch per transaction, etc ..</td><td>Java</td><td>The importer framework offers many customisation possibilties, you can read the <a href="{{page space='NXDOC' page='nuxeo-bulk-document-importer'}}target="_blank">Nuxeo Platform Importer documentation</a> to learn more.</td><td>Files must be available on a file system mounted on the Nuxeo server</td></tr>
=======
- Client side browsing of a complete hierachy of content (folders,sub folders and files).</td><td>JavaScript</td><td>Fork and override a single object implementation. It is quite easy to add custom logic for stating a workflow on the document at the same time, or changing its lifecycle, or setting a custom ACL. A <a href="https://github.com/nuxeo-sandbox/nuxeo-node-custom-importer" target="_blank">sample fork with custom rules</a> is provided on github.</td><td>No out of the box format format for metadata values specification. Also not recommended if import rate is the critical factor, since data transits over HTTP.</td></tr>

<tr><th colspan="1"><a href="https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-platform-importer" target="_blank">Nuxeo Platform Importer</a></th>
<td colspan="1">
Nuxeo Platform importer is an importer framework provided as an addon that can be used to build custom importers. It relies on a standard crawler, tansformer, Writer scheme. Scan importer and csv importer are using that framework. It is the defacto choice when you want to reach hyperscale numbers with importing content (up to 10 000s of documents per second) All you need to do is write your own Document Factory that will be in charge of the document creation logic in the repository. You can then easily launch the import controlling how many documents re done in a batch, how many batch per transaction, etc ..</td><td>Java</td><td>The importer framework offers many customisation possibilties, you can read the <a href="{{page space='NXDOC' page='nuxeo-bulk-document-importer'}}" target="_blank">Nuxeo Platform Importer documentation</a> to learn more.</td><td>Files must be available on a file system mounted on the Nuxeo server</td></tr>
>>>>>>> e5a067fbc4a70358146563ab7f9dfa3ad3e7e3f2

<tr><th colspan="1"><a href="https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-scan-importer" target="_blank">Nuxeo Platform Scan Importer</a></th>
<td colspan="1">
Nuxeo Platform Scan importer is a sub-module of the importer framework and is typically used for the output of a digitisation chain. Scan importer listens to a given folder and will import all content referenced via XML files, with their metadata, etc. Scan importer also offers very advanced XML <--> documents mapping possibilities, with ability to use some automation processing during the import phase. </td><td>Java</td><td>Scan Importer is configurable via XML extensions for the Metadata mapping. The documentation provides links to <a target="_blank" href="{{page space='NXDOC' page='scan-documents-importer'}}">simple and advanced use cases</a>.</td><td></td><td></td></tr>

<tr><th colspan="1"><a href="https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-csv" target="_blank"> Nuxeo CSV Importer</a></th>
<td colspan="1">
Nuxeo CSV Importer makes use of the importer framework and provides a UI for uploading a csv file whose content will be used to map columns values to properties of created documents. </td><td>Java</td><td>See <a target="_blank" href="{{page space="NXDOC" page="nuxeo-csv"}}">documentation</a>. It is possible to customize the creation logic with new Document factory classes. Yet it is in the roadmap to make this importer more configurable out of the box.</td><td></td></tr>
</tbody></table></div>

### Using the bare REST API
 You can straightly use the REST API and implement the importing logic you need from there.
 
### Using the bare Java API
<<<<<<< HEAD
You can use the CoreSession object in a server-side deployed custom java component and implement the importing logic you need from there. We also povide a default [import/export format]({{page page='nuxeo-core-import-export-api' space='NXDOC'}}) for the repository with piping logic.


=======
You can use the CoreSession object in a server-side deployed custom java component and implement the importing logic you need from there. We also provide a default [import/export format]({{page page="nuxeo-core-import-export-api" space="NXDOC"}}) for the repository with piping logic.
>>>>>>> e5a067fbc4a70358146563ab7f9dfa3ad3e7e3f2
