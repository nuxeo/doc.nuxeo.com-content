---
title: Choosing How to Import Data in the Nuxeo Platform
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
## Different Tools for Different Use Cases

The Nuxeo Platform provides several tools for managing imports. Choosing the right tool will depend on your exact use cases:

*   What amount of data do you need to import?
    Hundreds, thousands, millions?
*   Do you need to do the import while the application is running?
    Initial / one time import vs&nbsp;everyday import.
*   How complex is your import?
    How many business rules are integrated in your import?
*   What is the source you want to import from?
    Database, XML, files, ...
*   What are your skills?
    SQL, ETL/ESB, Java dev, ...

{{! excerpt}}

This page will walk you through the different import options and give you the pros and cons of each approach.

{{! /excerpt}}

## Possible Approaches

### User Imports

By default, the Nuxeo Platform allows users to import several documents at a time via:

*   The [ Import popup ]({{page space='userdoc' page='creating-content'}})
*   [ Drag & Drop ]({{page space='userdoc' page='creating-content#content-creation-dandd'}})
*   [WebDAV]({{page space='userdoc' page='working-with-webdav'}})
*   [Nuxeo Drive]({{page space='userdoc' page='nuxeo-drive'}}).

**Import criteria details**

<table><tbody><tr><th colspan="1">Criteria</th><th colspan="1">Value</th><th colspan="1">Comment</th></tr><tr><td colspan="1">Average import speed</td><td colspan="1">Low</td><td colspan="1">A few documents.</td></tr><tr><td colspan="1">Custom logic handling</td><td colspan="1">Built-in</td><td colspan="1">All custom logic will be called.</td></tr><tr><td colspan="1">Ability to handle huge volume</td><td colspan="1">No</td><td colspan="1">No transaction batch management.</td></tr><tr><td colspan="1">Production interruption</td><td colspan="1">No</td><td colspan="1">&nbsp;</td></tr><tr><td colspan="1">Blob upload</td><td colspan="1">In transaction</td><td colspan="1">The blob upload is part of the import transaction.</td></tr><tr><td colspan="1">Post import tasks</td><td colspan="1">None</td><td colspan="1">&nbsp;</td></tr></tbody></table>

The key point is that all these user import systems are designed to be easy to use, but are not designed for high performance and huge volume.

{{#> panel heading='For more information'}}

*   [ Content Creation User Documentation ]({{page space='userdoc' page='creating-content'}})
*   [WebDAV User Documentation]({{page space='userdoc' page='working-with-webdav'}})
*   [WebDAV Developer Documentation]({{page page='webdav'}})
*   [Nuxeo Drive User Documentation]({{page space='userdoc' page='nuxeo-drive'}})
*   [Nuxeo Drive Developer Documentation]({{page page='nuxeo-drive'}})

{{/panel}}

### HTTP API

Nuxeo HTTP Automation API can be used to run imports inside the Nuxeo Platform.

You can use Automation from custom code, custom scripting or from tools like:

*   ETL: see the [Talend Connector](https://github.com/tiry/nuxeo-talend-components/blob/master/doc/create_update.md)
*   ESB: see the [Mule Connector](https://github.com/tiry/nuxeo-mule-connector/blob/master/doc/sample.md)

Using the API allows you to easily define import custom logic on the client side, but:

*   blobs upload will be part of the process,
*   doing transaction batch is not easy since it requires to create custom chains.

**Import criteria details**

<table><tbody><tr><th colspan="1">Criteria</th><th colspan="1">Value</th><th colspan="1">Comment</th></tr><tr><td colspan="1">Average import speed</td><td colspan="1">Low / Medium</td><td colspan="1">Several documents (between 5 and 20 docs).</td></tr><tr><td colspan="1">Custom logic handling</td><td colspan="1">Built-in</td><td colspan="1">All custom logic will be called.</td></tr><tr><td colspan="1">Ability to handle huge volume</td><td colspan="1">No</td><td colspan="1">No easy transaction batch management.</td></tr><tr><td colspan="1">Production interruption</td><td colspan="1">No</td><td colspan="1">&nbsp;</td></tr><tr><td colspan="1">Blob upload</td><td colspan="1">In process</td><td colspan="1">

The blob upload is part of the import process.

</td></tr><tr><td colspan="1">Post import tasks</td><td colspan="1">None</td><td colspan="1">&nbsp;</td></tr></tbody></table>{{#> panel heading='For more information'}}

*   [REST API]({{page page='rest-api'}})
*   [Automation]({{page page='automation'}})

{{/panel}}

### Platform Importer

[The Platform importer ]({{page page='nuxeo-bulk-document-importer'}})is a framework that can be used to build custom importers that use the Java API.

Unlike the previous methods:

*   The Java API is directly used: no network and marshaling overhead.
*   Blobs are read from a local filesystem: no network cost.

The importer does handle several aspects that are important for managing performances:

*   transaction batch,
*   de-activating some listeners,
*   process event handles in bulk-mode.

**Import criteria details**

<table><tbody><tr><th colspan="1">Criteria</th><th colspan="1">Value</th><th colspan="1">Comment</th></tr><tr><td colspan="1">Average import speed</td><td colspan="1">High</td><td colspan="1">Several hundreds of documents (between 50 and 500 docs).</td></tr><tr><td colspan="1">Custom logic handling</td><td colspan="1">Built-in</td><td colspan="1">Most custom logic will be called: depending on which listeners are removed.</td></tr><tr><td colspan="1">Ability to handle huge volume</td><td colspan="1">Yes</td><td colspan="1">Native handling of transaction batch + bulk event handler mode.</td></tr><tr><td colspan="1">Production interruption</td><td colspan="1">Yes</td><td colspan="1">The bulk mode is not adapted for a normal usage: at least a dedicated Nuxeo node should be allocated.
High speed import is likely to saturate the database: this will slow down all interactive usages.</td></tr><tr><td colspan="1">Blob upload</td><td colspan="1">Separated</td><td colspan="1">

Blobs are directly read on the server side FileSystem.

</td></tr><tr><td colspan="1">Post import tasks</td><td colspan="1">May need to restart full text indexing.
May need to restart process for listeners that were by-passed .</td><td colspan="1">In a lot of cases, the full text indexing is deactivated during processing, as well as other slow processes like video conversation, thumbnails generation, etc. After import, these processes need to be restarted.</td></tr></tbody></table>{{#> panel heading='For more information'}}

*   [Nuxeo Bulk Document Importer Developer Documentation]({{page page='nuxeo-bulk-document-importer'}})

{{/panel}}

### SQL Import

Thanks to the VCS Repository [clear and clean SQL structure]({{page page='vcs-tables'}}), you can directly use SQL injection.

Of course, this is by far the fastest technique, but since you will bypass all the Java business layer, you will need to do some checks and post processing. In addition, if you want the SQL import to be really fast, you may want to deactivate some of the integrity constraints and triggers.

**Import criteria details**

<table><tbody><tr><th colspan="1">Criteria</th><th colspan="1">Value</th><th colspan="1">Comment</th></tr><tr><td colspan="1">Average import speed</td><td colspan="1">Very high</td><td colspan="1">Several thousands of Documents (between 500 and 5000 docs).</td></tr><tr><td colspan="1">Custom logic handling</td><td colspan="1">Bypass</td><td colspan="1">All Java Layer is by-passed.</td></tr><tr><td colspan="1">Ability to handle huge volume</td><td colspan="1">Yes</td><td colspan="1">Native handling of transaction batch + bulk event handler mode.</td></tr><tr><td colspan="1">Production interruption</td><td colspan="1">Yes</td><td colspan="1">Usually, the database server configuration is changed to make the bulk insert more efficient.</td></tr><tr><td colspan="1">Blob upload</td><td colspan="1">Not handled</td><td colspan="1">

Blobs needs to be managed by a separated process.

</td></tr><tr><td colspan="1">Post import tasks</td><td colspan="1">May need to restart full text indexing.
May need to restart some triggers.</td><td colspan="1">

*   Rebuild full text.
*   Rebuild ancestors cache.
*   Rebuild read-ACLs

</td></tr></tbody></table>{{#> panel heading='For more information'}}

*   [VCS]({{page page='vcs'}})
*   [Internal VCS Model]({{page space='NXDOC' page='Internal VCS+Model'}})
*   [VCS Tables]({{page space='NXDOC' page='VCS Tables'}})
*   [Examples of SQL Generated by VCS]({{page space='NXDOC' page='Examples of++SQL+Generated+by+VCS'}})
*   [Java Data Structures and Caching]({{page space='NXDOC' page='Java Data+Structures+and+Caching'}})
*   [Performance Recommendations]({{page space='NXDOC' page='Performance Recommendations'}})

{{/panel}}