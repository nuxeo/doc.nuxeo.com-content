---
title: Importing Data in Nuxeo
review:
    comment: ''
    date: ''
    status: ok
labels:
    - import
toc: true
confluence:
    ajs-parent-page-id: '17334300'
    ajs-parent-page-title: Architecture
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Importing+Data+in+Nuxeo
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/Importing+Data+in+Nuxeo'
    page_id: '17794920'
    shortlink: aIcPAQ
    shortlink_source: 'https://doc.nuxeo.com/x/aIcPAQ'
    source_link: /display/NXDOC58/Importing+Data+in+Nuxeo
history:
    - 
        author: Manon Lumeau
        date: '2016-07-20 15:26'
        message: 'emove children display macro  '
        version: '4'
    - 
        author: Manon Lumeau
        date: '2016-03-10 15:20'
        message: ''
        version: '3'
    - 
        author: Solen Guitter
        date: '2013-12-16 15:46'
        message: Updated links to point to 5.8 version
        version: '2'
    - 
        author: Solen Guitter
        date: '2013-12-16 15:44'
        message: ''
        version: '1'

---
<div class="row"><div class="column medium-8">

## Different Tools for Different Use Cases

The Nuxeo Platform provides several tools for managing imports. Choosing the right tool will depend on you exact use cases:

*   What amount of data do you need to import?
    Hundreds, thousands, millions?
*   Do you need to do the import while the application is running?
    Initial / on time import vs&nbsp;everyday import.
*   How complex is your import?
    How many business rules are integrated in your import?
*   What is the source you want to import from?
    Database, XML, files, ...
*   What are your skills?
    SQL, ETL/ESB, Java dev, ...

{{! excerpt}}

This page will walk you though the different import options and tries to gives you the pros and cons of each approach.

{{! /excerpt}}</div><div class="column medium-4">{{#> panel heading='In this section'}}

{{/panel}}</div></div>

## Possible Approaches&nbsp;

### User Imports&nbsp;

By default, the Nuxeo Platform allows users to import several documents at a time via:

*   [Drag & Drop]({{page space='userdoc58' page='working-using-drag-and-drop'}}),
*   [WebDAV]({{page space='userdoc58' page='working-with-webdav-and-wss'}}),
*   the [DAM web importer]({{page space='userdoc58' page='importing-assets-in-dam'}}),
*   [Nuxeo Drive]({{page space='userdoc58' page='nuxeo-drive'}}).

**Import criteria details**

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">Criteria</th><th colspan="1">Value</th><th colspan="1">Comment</th></tr><tr><td colspan="1">Average import speed</td><td colspan="1">Low</td><td colspan="1">A few documents/s.</td></tr><tr><td colspan="1">Custom logic handling</td><td colspan="1">Built-in</td><td colspan="1">All custom logic will be called.</td></tr><tr><td colspan="1">Ability to handle huge volume</td><td colspan="1">No</td><td colspan="1">No transaction batch management.</td></tr><tr><td colspan="1">Production interruption</td><td colspan="1">No</td><td colspan="1">&nbsp;</td></tr><tr><td colspan="1">Blob upload</td><td colspan="1">In transaction</td><td colspan="1">The blob upload is part of the import transaction.</td></tr><tr><td colspan="1">Post import tasks</td><td colspan="1">None</td><td colspan="1">&nbsp;</td></tr></tbody></table></div>

The key point is that all these user import systems are designed to be easy to use, but are not designed for high performance and huge volume.

{{#> panel heading='For more information'}}

*   [Drag and Drop user documentation]({{page space='userdoc58' page='working-using-drag-and-drop'}})
*   [WebDAV and WSS user documentation]({{page space='userdoc58' page='working-with-webdav-and-wss'}})
*   [WebDAV developer documentation]({{page page='webdav'}})
*   [DAM import user documentation]({{page space='userdoc58' page='importing-assets-in-dam'}})
*   [Nuxeo Drive user documentation]({{page space='userdoc58' page='nuxeo-drive'}})
*   [Nuxeo Drive developer documentation]({{page page='nuxeo-drive'}})

{{/panel}}

### HTTP API&nbsp;

Nuxeo HTTP Automation API can be used to run imports inside the Nuxeo Platform.

You can use Automation from custom code, custom scripting or from tools like:

*   ETL : see the [Talend Connector](https://github.com/tiry/nuxeo-talend-components/blob/master/doc/create_update.md)
*   ESB : see the [Mule Connector](https://github.com/tiry/nuxeo-mule-connector/blob/master/doc/sample.md)

Using the API allows you to easily define import custom logic on the client side, but:

*   blobs upload will be part of the process,
*   doing transaction batch is not easy since it requires to create custom chains.

**Import criteria details**

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">Criteria</th><th colspan="1">Value</th><th colspan="1">Comment</th></tr><tr><td colspan="1">Average import speed</td><td colspan="1">Low / Medium</td><td colspan="1">Several document/s (between 5 and 20 docs/s).</td></tr><tr><td colspan="1">Custom logic handling</td><td colspan="1">Built-in</td><td colspan="1">All custom logic will be called.</td></tr><tr><td colspan="1">Ability to handle huge volume</td><td colspan="1">No</td><td colspan="1">No easy transaction batch management.</td></tr><tr><td colspan="1">Production interruption</td><td colspan="1">No</td><td colspan="1">&nbsp;</td></tr><tr><td colspan="1">Blob upload</td><td colspan="1">In process</td><td colspan="1">

The blob upload is part of the import process.

</td></tr><tr><td colspan="1">Post import tasks</td><td colspan="1">None</td><td colspan="1">&nbsp;</td></tr></tbody></table></div>{{#> panel heading='For more information'}}

*   [REST API]({{page page='rest-api'}})

*   [Automation]({{page page='automation'}})

{{/panel}}

### Platform Importer&nbsp;

[The Platform importer ]({{page page='nuxeo-bulk-document-importer'}})is a framework that can be used to build custom importers that use the Java API.

Unlike the previous methods:

*   The Java API is directly used: no network and marshaling overhead.
*   Blobs are read from a local filesystem: no network cost.

The importer does handle several aspects that are important for managing performances:

*   transaction batch,
*   de-activating some listeners,
*   process event handles in bulk-mode.

**Import criteria details**

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">Criteria</th><th colspan="1">Value</th><th colspan="1">Comment</th></tr><tr><td colspan="1">Average import speed</td><td colspan="1">High</td><td colspan="1">Several hundreds of documents/s (between 50 and 500 docs/s).</td></tr><tr><td colspan="1">Custom logic handling</td><td colspan="1">Built-in</td><td colspan="1">Most custom logic will be called: depending on which listeners are removed.</td></tr><tr><td colspan="1">Ability to handle huge volume</td><td colspan="1">Yes</td><td colspan="1">Native handling of transaction batch + bulk event handler mode.</td></tr><tr><td colspan="1">Production interruption</td><td colspan="1">Yes</td><td colspan="1">The bulk mode is not adapted for a normal usage: at least a dedicated Nuxeo node should be allocated.
High speed import is likely to saturate the database: this will slow down all interactive usages.&nbsp;</td></tr><tr><td colspan="1">Blob upload</td><td colspan="1">Separated</td><td colspan="1">

Blobs are directly read on the server side FileSystem.

</td></tr><tr><td colspan="1">Post import tasks</td><td colspan="1">May need to restart full text indexing.
May need to restart process for listeners that were by-passed .</td><td colspan="1">In a lot of cases, the full text indexing is deactivated during processing, as well as other slow processes like video conversation, thumbnails generation, etc. After import, these processes need to be restarted.</td></tr></tbody></table></div>{{#> panel heading='For more information'}}

*   [Nuxeo Bulk Document Importer developer documentation]({{page page='nuxeo-bulk-document-importer'}})

{{/panel}}

### SQL Import&nbsp;

Thanks to the VCS Repository [clear and clean SQL structure]({{page page='vcs-tables'}}), you can directly use SQL injection.

Of course, this is by far the fastest technique, but since you will bypass all the Java business layer, you will need to do some checks and post processing. In addition, if you want the SQL import to be really fast, you may want to deactivate some of the integrity constraints and triggers.

**Import criteria details**

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">Criteria</th><th colspan="1">Value</th><th colspan="1">Comment</th></tr><tr><td colspan="1">Average import speed</td><td colspan="1">Very high</td><td colspan="1">Several thousands of Documents/s (between 500 and 5000 docs/s).</td></tr><tr><td colspan="1">Custom logic handling</td><td colspan="1">Bypass</td><td colspan="1">All Java Layer is by-passed.</td></tr><tr><td colspan="1">Ability to handle huge volume</td><td colspan="1">Yes</td><td colspan="1">Native handling of transaction batch + bulk event handler mode.</td></tr><tr><td colspan="1">Production interruption</td><td colspan="1">Yes</td><td colspan="1">Usually, the database server configuration is changed to make the bulk insert more efficient.</td></tr><tr><td colspan="1">Blob upload</td><td colspan="1">Not handled</td><td colspan="1">

Blobs needs to be managed by a separated process.

</td></tr><tr><td colspan="1">Post import tasks</td><td colspan="1">May need to restart full text indexing.
May need to restart some triggers.</td><td colspan="1">

*   Rebuild full text.
*   Rebuild ancestors cache.
*   Rebuild read-ACLs

</td></tr></tbody></table></div>{{#> panel heading='For more information'}}

*   [VCS Architecture]({{page page='vcs-architecture'}})
*   [Internal VCS Model]({{page space='NXDOC58' page='Internal VCS+Model'}})
*   [VCS Tables]({{page space='NXDOC58' page='VCS Tables'}})
*   [Examples of SQL Generated by VCS]({{page space='NXDOC58' page='Examples of++SQL+Generated+by+VCS'}})
*   [Java Data Structures and Caching]({{page space='NXDOC58' page='Java Data+Structures+and+Caching'}})
*   [Performance Recommendations]({{page space='NXDOC58' page='Performance Recommendations'}})

{{/panel}}