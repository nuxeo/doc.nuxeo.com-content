---
title: Quick Overview
labels:
    - video
    - architecture
    - overview
    - lts2015-not-ok
toc: true
confluence:
    ajs-parent-page-id: '7209076'
    ajs-parent-page-title: Tutorials
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Quick+Overview
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Quick+Overview'
    page_id: '18451470'
    shortlink: DowZAQ
    shortlink_source: 'https://doc.nuxeo.com/x/DowZAQ'
    source_link: /display/NXDOC/Quick+Overview
history:
    - 
        author: Alain Escaffre
        date: '2015-10-13 14:46'
        message: ''
        version: '17'
    - 
        author: Solen Guitter
        date: '2015-04-09 08:06'
        message: make video responsive
        version: '16'
    - 
        author: Solen Guitter
        date: '2014-12-03 14:20'
        message: ''
        version: '15'
    - 
        author: Alain Escaffre
        date: '2014-09-29 14:47'
        message: ''
        version: '14'
    - 
        author: Bob Canaway
        date: '2014-09-24 03:53'
        message: ''
        version: '13'
    - 
        author: Bob Canaway
        date: '2014-09-24 03:53'
        message: ''
        version: '12'
    - 
        author: Solen Guitter
        date: '2014-09-19 14:58'
        message: ''
        version: '11'
    - 
        author: Thibaud Arguillere
        date: '2014-03-25 16:32'
        message: ''
        version: '10'
    - 
        author: Solen Guitter
        date: '2014-03-21 13:51'
        message: ''
        version: '9'
    - 
        author: Thierry Delprat
        date: '2014-03-21 12:41'
        message: ''
        version: '8'
    - 
        author: Thierry Delprat
        date: '2014-03-21 12:40'
        message: ''
        version: '7'
    - 
        author: Solen Guitter
        date: '2014-03-21 12:05'
        message: ''
        version: '6'
    - 
        author: Solen Guitter
        date: '2014-03-21 12:05'
        message: ''
        version: '5'
    - 
        author: Thierry Delprat
        date: '2014-03-21 11:52'
        message: ''
        version: '4'
    - 
        author: Thierry Delprat
        date: '2014-03-21 11:27'
        message: ''
        version: '3'
    - 
        author: Thierry Delprat
        date: '2014-03-21 11:17'
        message: ''
        version: '2'
    - 
        author: Thierry Delprat
        date: '2014-03-21 11:02'
        message: ''
        version: '1'

---
## 5 min tour of the Nuxeo Platform

{{> wistia_video id='2pe4188x7r'}}

## Running the Nuxeo Platform

The Nuxeo Platform runs on top of the Java Virtual Machine.

There are several deployment options.

### Bare Java Deployment

The Nuxeo Platform can be deployed directly on the JVM (i.e. without an application server).

The main use case for this deployment model is for testing, i.e. to deploy the Nuxeo Platform inside a JUnit test. But this solution can also be used to embed Nuxeo inside an existing Java application. In this case, the Nuxeo Runtime deployment may include JDBC DataSources, JTA transaction manager and a JCA Connector. The Nuxeo Runtime can also deploy an HTTP server if needed.

### Application Server Deployment

The Nuxeo Platform can be packaged to run with Apache Tomcat. In that deployment scenario, Apache Tomcat provides:

*   The deployment system (i.e. Tomcat triggers the Nuxeo deployment)
*   The HTTP service and the servlet container
*   The JDBC DataSources

The Nuxeo Platform will add a JTA Transaction Manager and a JCA Connector to Tomcat.

For more details about the Nuxeo deployment system, please refer to [pages on deployment options]({{page page='deployment-options'}}).

![]({{file name='deployment-options.png'}} ?w=650,border=true)

## About Nuxeo Platform Data

Data managed by the Nuxeo Platform includes:

*   Documents:
    *   Metadata
    *   Binary Streams
*   Users, Groups
*   References data
*   Indexes

### Document Repository

The Nuxeo Document repository only focuses on managing Document persistence.

It covers:

*   Hierarchy definition
*   Security descriptors
*   Metadata
*   Binaries
*   Indexes

The default configuration for Nuxeo Repository is to use a SQL Database and a Filesystem storage, as well as an Elasticsearch index (that can be removed from the architecture if necessary):

*   Structured data are stored in a SQL Database:
    *   Hierarchy
    *   Security
    *   Metadata
*   Binaries streams are stored in a _"Filesystem like"_&nbsp;storage called "BinaryStore".

The SQL Database can be:

*   PostgreSQL
*   Oracle
*   MS SQL Server
*   MySQL

For more details about Nuxeo Repository architecture, please see the&nbsp;[VCS Pages]({{page space='nxdoc58' page='vcs-architecture'}}).

![]({{file name='VCS-mapping.png'}} ?w=650,border=true)

When the Nuxeo Repository access the database:

1.  It first goes through a cache.
2.  It uses a JDBC connection in the context of a Transaction.
3.  It can use a XA 2 phases commit transaction model.

The BinaryStore can be:

*   A simple Filesystem
*   A shared Filesystem (ex: NFS share or a NAS)
*   A S3 bucket (with or without encryption)

For more details about Nuxeo Repository and BlobStore, please see the page [File Storage]({{page page='file-storage'}}).

### Indexes

By default the Nuxeo Repository does handle keyword and full text indexing via the database.

However, external indexers can be plugged and in the 5.9.x Fast Track releases will come with an integration with Elasticsearch.

### Non Document Data

For data that is more _record oriented_ than _document oriented_, Nuxeo uses an abstraction called Directory system that allows to address Data in SQL, LDAP (or WebService).

The Directories are typically used for storing:

*   Users
*   Groups
*   Lists of controlled values

By default, everything is bound to the same SQL database as the repository, but you can choose:

*   To bind some directories to LDAP
*   To bind some directories to an external database (use of XA mode is then required)

![]({{file name='DirectoryAbstraction.png'}} ?w=650,border=true)

## Integrating Nuxeo&nbsp;

### Calling Nuxeo Services&nbsp;

Nuxeo services&nbsp;are exposed via an HTTP API called [Nuxeo Content Automation.]({{page page='content-automation-concepts'}})

Nuxeo resources (Documents, Users ...) are exposed via a [REST API]({{page page='rest-api'}}).

So, if your external application needs to call the Nuxeo Server you can use plain HTTP/JSon API to do the calls, or you can use one of the[ client libraries]({{page page='client-sdks'}}) we provide.

![]({{file name='EndPoints.png'}} ?w=650,border=true)

### Calling External Services from the Nuxeo&nbsp; Platform

You can extend the Nuxeo Platform to deploy your own Java Services.

A classical approach is to wrap your calls to external applications inside a [Nuxeo Automation Operation]({{page page='contributing-an-operation'}}).

Once you have this operation,&nbsp;you can use Nuxeo Studio to integrate for example SAP inside your Nuxeo application:

*   Use your external service operations inside a Workflow.
*   Bind your external service operation on new buttons in the UI.
*   Associate your external service operation with events.

An interesting integration point is that you can hook operations or custom code on Nuxeo event bus.

![]({{file name='EventBus.png'}} ?w=500,border=true)

### Data Integration

In addition of the native HTTP API, the Nuxeo Platform also provides solutions to [import data inside the Nuxeo Platform]({{page page='choosing-how-to-import-data-in-the-nuxeo-platform'}}).

&nbsp;