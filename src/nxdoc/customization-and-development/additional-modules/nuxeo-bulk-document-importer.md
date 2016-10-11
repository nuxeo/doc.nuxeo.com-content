---
title: Nuxeo Bulk Document Importer
review:
    comment: ''
    date: ''
    status: ok
labels:
    - bulk-document-importer
toc: true
confluence:
    ajs-parent-page-id: '17334336'
    ajs-parent-page-title: Additional Modules
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Nuxeo+Bulk+Document+Importer
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/Nuxeo+Bulk+Document+Importer'
    page_id: '17334523'
    shortlink: _4AIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/_4AIAQ'
    source_link: /display/NXDOC58/Nuxeo+Bulk+Document+Importer
history:
    - 
        author: Solen Guitter
        date: '2016-08-31 14:10'
        message: ''
        version: '30'
    - 
        author: Manon Lumeau
        date: '2016-03-10 14:30'
        message: 'Merge ADMINDOC with NXDOC  '
        version: '29'
    - 
        author: Solen Guitter
        date: '2013-10-07 14:18'
        message: ''
        version: '28'
    - 
        author: Solen Guitter
        date: '2013-10-07 14:17'
        message: ''
        version: '27'
    - 
        author: Solen Guitter
        date: '2013-10-07 14:16'
        message: ''
        version: '26'
    - 
        author: Solen Guitter
        date: '2013-09-13 16:38'
        message: ''
        version: '25'
    - 
        author: Julien Carsique
        date: '2012-01-25 19:32'
        message: Migrated to Confluence 4.0
        version: '24'
    - 
        author: Julien Carsique
        date: '2012-01-25 19:32'
        message: ''
        version: '23'
    - 
        author: Florent Guillaume
        date: '2011-08-30 13:49'
        message: ''
        version: '22'
    - 
        author: Florent Guillaume
        date: '2011-06-17 17:42'
        message: ''
        version: '21'
    - 
        author: Julien Carsique
        date: '2011-05-18 11:15'
        message: update links
        version: '20'
    - 
        author: Stéfane Fermigier
        date: '2010-12-21 20:02'
        message: ''
        version: '19'
    - 
        author: Stéfane Fermigier
        date: '2010-08-03 12:38'
        message: ''
        version: '18'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 14:43'
        message: ''
        version: '17'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 10:28'
        message: ''
        version: '16'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 10:24'
        message: ''
        version: '15'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 10:16'
        message: ''
        version: '14'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 09:15'
        message: ''
        version: '13'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 09:10'
        message: ''
        version: '12'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 08:55'
        message: ''
        version: '11'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 08:51'
        message: ''
        version: '10'
    - 
        author: Stéfane Fermigier
        date: '2010-07-21 20:11'
        message: ''
        version: '9'
    - 
        author: Stéfane Fermigier
        date: '2010-07-21 20:06'
        message: ''
        version: '8'
    - 
        author: Stéfane Fermigier
        date: '2010-07-21 19:21'
        message: ''
        version: '7'
    - 
        author: Stéfane Fermigier
        date: '2010-07-21 19:02'
        message: ''
        version: '6'
    - 
        author: Stéfane Fermigier
        date: '2010-07-21 18:39'
        message: ''
        version: '5'
    - 
        author: Stéfane Fermigier
        date: '2010-07-21 18:24'
        message: ''
        version: '4'
    - 
        author: Stéfane Fermigier
        date: '2010-07-21 18:18'
        message: ''
        version: '3'
    - 
        author: Stéfane Fermigier
        date: '2010-07-21 18:12'
        message: ''
        version: '2'
    - 
        author: Stéfane Fermigier
        date: '2010-07-21 18:01'
        message: ''
        version: '1'

---
<div class="row"><div class="column medium-8">

&nbsp;

{{{excerpt 'ADMINDOC:Bulk document importer'}}}

{{! excerpt}}

The `nuxeo-importer-core` module is designed to offer support for multi-threaded import on a Nuxeo repository.

{{! /excerpt}}

## Usage

The file importer comes as a Java library (with the Nuxeo Runtime Service) and a sample JAX-RS interface to launch, monitor and abort import jobs.

### Quick Start

To import the folder '/path/to/import' into the workspace '/default-domain/workspaces/some-workspace' while monitoring the import logs from a REST client, use the following HTTP GET queries:

*   `GET&nbsp;<span class="nolink">[http://localhost:8080/nuxeo/site/fileImporter/logActivate](http://localhost:8080/nuxeo/site/fileImporter/logActivate)</span>`
*   `GET&nbsp;<span class="nolink">[http://localhost:8080/nuxeo/site/fileImporter/run?targetPath=/default-domain/workspaces/some-workspace&inputPath=/path/to/import&batchSize=10&interactive=false&nbThreads=](http://localhost:8080/nuxeo/site/fileImporter/run?targetPath=/default-domain/workspaces/some-workspace&inputPath=/path/to/import&batchSize=10&interactive=false&nbThreads=)</span>`
*   `GET&nbsp;<span class="nolink">[http://localhost:8080/nuxeo/site/fileImporter/log](http://localhost:8080/nuxeo/site/fileImporter/log)</span>&nbsp;`

To execute these HTTP queries you can either use a browser with an active Nuxeo session (JSESSIONID cookie) or use a third party stateless HTTP client with HTTP Basic Authentication, eg: with the curl command line client:

```
$ curl --basic -u 'Administrator:Administrator' "http://localhost:8080/nuxeo/site/fileImporter/log"
```

Don't forget put the URL in quotes if it includes special shell characters such as '&'. You can also use the generic HTTP GUI client from the rest-client Java project:&nbsp;[http://code.google.com/p/rest-client/](http://code.google.com/p/rest-client/)
Be sure to fill in the 'Auth' tab with your user credentials.

### Memory

The importer requires a lot of memory. Make sure your maximum heap size is set as high as possible for your environment. Maximum heap size can be set in nuxeo.conf in the JAVA_OPTS variable; for example, argument&nbsp;**-Xmx4g**&nbsp;will set maximum heap size to 4 gigabytes. &nbsp;See&nbsp;[Configuration Parameters Index (nuxeo.conf)]({{page space='admindoc58' page='configuration-parameters-index-nuxeoconf'}})&nbsp;for more details.

### REST API

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">Resource URL</th><th colspan="1">Description</th><th colspan="1">Output</th></tr><tr><td colspan="1">`GET nuxeo/site/randomImporter/run`</td><td colspan="1">Random text generator for load testing</td><td colspan="1">text/plain; charset=UTF-8</td></tr><tr><td colspan="1">`GET nuxeo/site/fileImporter/run`</td><td colspan="1">Default file importer</td><td colspan="1">text/plain; charset=UTF-8</td></tr><tr><td colspan="1">`GET nuxeo/site/fileImporter/log`</td><td colspan="1">Get current log buffer content</td><td colspan="1">text/plain; charset=UTF-8</td></tr><tr><td colspan="1">`GET nuxeo/site/fileImporter/logActivate`</td><td colspan="1">Activate logging</td><td colspan="1">text/plain; charset=UTF-8</td></tr><tr><td colspan="1">`GET nuxeo/site/fileImporter/logDesactivate`</td><td colspan="1">Deactivate logging</td><td colspan="1">text/plain; charset=UTF-8</td></tr><tr><td colspan="1">`GET nuxeo/site/fileImporter/status`</td><td colspan="1">Get importer thread status</td><td colspan="1">

text/plain; charset=UTF-8

"Running" or "Not Running"

</td></tr><tr><td colspan="1">`GET nuxeo/site/fileImporter/kill`</td><td colspan="1">Stop the importer thread if running</td><td colspan="1">text/plain; charset=UTF-8</td></tr></tbody></table></div>

#### fileImporter/run

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">Parameter</th><th colspan="1">Default value</th><th colspan="1">Description</th></tr><tr><td colspan="1">`leafType`</td><td colspan="1">null</td><td colspan="1">Leaf type used by the&nbsp;`documentModelFactory` for the import.</td></tr><tr><td colspan="1">`folderishType`</td><td colspan="1">null</td><td colspan="1">Folderish type used by the&nbsp;`documentModelFactory` for the import.</td></tr><tr><td colspan="1">`inputPath`</td><td colspan="1">N/A</td><td colspan="1">Root path to import (local to the server).</td></tr><tr><td colspan="1">`targetPath`</td><td colspan="1">N/A</td><td colspan="1">Target path in Nuxeo</td></tr><tr><td colspan="1">`skipRootContainerCreation`</td><td colspan="1">false</td><td colspan="1">If true the root container won't be created</td></tr><tr><td colspan="1">`batchSize`</td><td colspan="1">5</td><td colspan="1">Number of documents that will be created before doing a commit</td></tr><tr><td colspan="1">`nbThreads`</td><td colspan="1">5</td><td colspan="1">Maximum number of importer threads that can be allocated</td></tr><tr><td colspan="1">`interactive`</td><td colspan="1">false</td><td colspan="1">&nbsp;</td></tr></tbody></table></div>

N/A: no default value, the parameter is required.

#### randomImporter/run

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">Parameter</th><th colspan="1">Default value</th><th colspan="1">Description</th></tr><tr><td colspan="1">`targetPath`</td><td colspan="1">N/A</td><td colspan="1">Target path in Nuxeo</td></tr><tr><td colspan="1">`skipRootContainerCreation`</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td></tr><tr><td colspan="1">`batchSize`</td><td colspan="1">&nbsp;</td><td colspan="1">Number of documents that will be created before doing a commit</td></tr><tr><td colspan="1">`nbThreads`</td><td colspan="1">&nbsp;</td><td colspan="1">Maximum number of importer threads that can be allocated</td></tr><tr><td colspan="1">`interactive`</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td></tr><tr><td colspan="1">`nbNodes`</td><td colspan="1">N/A</td><td colspan="1">Number of nodes to create</td></tr><tr><td colspan="1">`fileSizeKB`</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td></tr><tr><td colspan="1">`onlyText`</td><td colspan="1">true</td><td colspan="1">&nbsp;</td></tr><tr><td colspan="1">`blockSyncPostCommitProcessing`</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td></tr><tr><td colspan="1">`blockAsyncProcessing`</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td></tr><tr><td colspan="1">`bulkMode`</td><td colspan="1">true</td><td colspan="1">&nbsp;</td></tr></tbody></table></div>

N/A: no default value, the parameter is required.

## Extend

You can easily write your own importer, extending the&nbsp;`org.nuxeo.ecm.platform.importer.base.GenericMultiThreadedImporter`&nbsp;class.

Using XML extension points you can also define the different building blocks of the importer:

*   class for reading source nodes,
*   docType used for leaf Documents,
*   docType used for folderish Documents,
*   `documentModelFactoryClass`.

See&nbsp;[the developer documentation of Nuxeo Bulk Document Importer]()&nbsp;for details.

See&nbsp;[nuxeo-platform-importer Javadoc](http://community.nuxeo.com/api/addons/nuxeo-platform-importer/).

## Directory Tree and Threading

The default importer is targeting a simple use case: import a complete filesystem tree inside a Nuxeo repository.

On most computers you have several CPUs and several cores: this means you can import more documents per second by using several threads. However, when importing a tree, threading must be considered carefully:

*   Each thread will be associated with a Transaction (remember we import several documents before doing a commit),
*   Each transaction is isolated from others (MVCC mode).

This means that a new thread must be created only when a new branch will be accessible inside the source filesystem. At least, the default&nbsp;`ImporterThreadingPolicy`&nbsp;(`DefaultMultiThreadingPolicy`) does that.

As a result, if you import a big folder with a flat structure, you will only have one importer thread, even if you configure to allow more.

To be sure to be able to leverage multi-threading, you can either:

*   Ensure the source filesystem is a tree with at least two levels,
*   Change the importer threading policy.

## Importer and Metadata&nbsp;

The default importer provides two classes to read the source files as well as metadata:

`**FileWithMetadataSourceNode**`

This is the default implementation, that was mainly targeting at importing a filesystem where file are stored by folders.

The idea is to associate a set of metadata on a per folder basis: the&nbsp;`metadata.properties`&nbsp;will be used for defining the metadata for all files inside the same folder. By default, metadata will be inherited from parent folder, but may be completed or overridden by a local&nbsp;`metadata.properties.`

Here is a structure:

<pre>├── TopicA
│&nbsp;&nbsp; ├── file1.pdf
│&nbsp;&nbsp; ├── file2.pdf
│&nbsp;&nbsp; ├── metadata.properties
│&nbsp;&nbsp; ├── TopicA1
│&nbsp;&nbsp; │&nbsp;&nbsp; ├── file1.pdf
│&nbsp;&nbsp; │&nbsp;&nbsp; ├── file2.pdf
│&nbsp;&nbsp; │&nbsp;&nbsp; └── metadata.properties
│&nbsp;&nbsp; ├── TopicA2
│&nbsp;&nbsp; │&nbsp;&nbsp; ├── file1.pdf
│&nbsp;&nbsp; │&nbsp;&nbsp; ├── file2.pdf
│&nbsp;&nbsp; │&nbsp;&nbsp; └── metadata.properties
│&nbsp;&nbsp; └── TopicA3
│&nbsp;&nbsp;    ├── file1.pdf
│&nbsp;&nbsp;    ├── file2.pdf
│&nbsp;&nbsp;    └── metadata.properties
└── TopicB
 ├── file1.pdf
 ├── metadata.properties
 ├── TopicB1
 │&nbsp;&nbsp; ├── file1.pdf
 │&nbsp;&nbsp; ├── file2.pdf
 │&nbsp;&nbsp; └── metadata.properties
 └── TopicB12
    ├── file1.pdf
    ├── file2.pdf
    └── metadata.properties</pre>

The&nbsp;`metadata.properties`&nbsp;file is a simple property file in the format&nbsp;`xpath`&nbsp;=&nbsp;`value`. Typically:

```
dc\:description=some description
dc\:source=some source
dc\:subjects=subject4|subject5
dc\:issued=2015-30-04T09:39:43.00Z
```

&nbsp;

<div class="line number4 index3 alt1">Please note that:</div>

&nbsp;

*   Date properties must be formatted using the ISO 8601 standard
*   multi-valued property syntax is&nbsp;`dc\:subjects=subject4|subject5`, the default separator being&nbsp;`|`
*   complex properties are not supported currently.

`**FileWithIndividualMetadasSourceNode**`

This second implementation will try to file a property file for each imported file. This allows to have a per file metadata set.

A sample structure would be:

<pre>├── branch1
│&nbsp;&nbsp; ├── branch11
│&nbsp;&nbsp; │&nbsp;&nbsp; ├── hello11.pdf
│&nbsp;&nbsp; │&nbsp;&nbsp; └── hello11.properties
│&nbsp;&nbsp; ├── hello1.pdf
│&nbsp;&nbsp; └── hello1.properties
├── hello.pdf
└── hello.properties</pre>

To use this node type you need to redefine the importer. For that create a&nbsp;`importer-config.xml`&nbsp;in&nbsp;`nxserver/config`.

```xml
<?xml version="1.0"?>
<component name="customImporter">
<require>org.nuxeo.ecm.platform.importer.service.jaxrs.contrib</require>

<extension target="org.nuxeo.ecm.platform.importer.service.DefaultImporterComponent" point="importerConfiguration">
   <importerConfig sourceNodeClass ="org.nuxeo.ecm.platform.importer.source.FileWithIndividualMetadasSourceNode" >
      <documentModelFactory leafType="File" folderishType="Folder" documentModelFactoryClass="org.nuxeo.ecm.platform.importer.factories.DefaultDocumentModelFactory" />
    </importerConfig>
</extension>
</component>
```

## Instanciating the importer

It has a configurable framework which has as the main part, the `org.nuxeo.ecm.platform.importer.base.GenericMultiThreadedImporter` class. This 'importer' is responsible, depending on the way it is configured, for performing the import. The configuration of an 'importer' can be established starting with the instantiation of such an 'importer'.

You need to provide a source node of the import, which should contain:

*   the entry point of what will be imported,
*   a path to where the import should be made on the current repository,
*   parameters that will control the maximum number of threads that will be created during the import,
*   a logger that will be used during the import (a default one, which is provided by the module, can be used).

In case you need to have an audit support for the import, you can obtain one by providing a 'jobName', which will be used to represent the workflow of the import that will be started in audit. The audit support can be used to avoid later imports (in case the import finished with success).

</div><div class="column medium-4">{{#> panel heading='In this section'}}

{{/panel}}</div></div>

Here is an example of how such an importer can be instantiated:

```
TestSourceNode sourceNode = new TestSourceNode(...);
GenericMultiThreadedImporter importer = new GenericMultiThreadedImporter(
    sourceNode, "/", 10, 5, super.getLogger());

```

## Configuring the importer

Next, an 'importer' can be configured after instantiation, by providing it 'tools' that are used during the import.

### factory

One of these 'tools' is so called the 'factory', and it is used when performing the import of a document. Usually such a 'factory' is supposed to treat both cases, when importing a folderish or a leaf document (an interface is provided for this scope `org.nuxeo.ecm.platform.importer.factories.ImporterDocumentModelFactory`).

### filter

Another 'tool' that is used is the 'filter'. More than one 'filter' can be provided to a 'factory' and their scope is to handle the events that are raised during the import. Usually it is better to block all the events that are raised during and after the import of a document (the import of a document can be translated in creating a Nuxeo document model and saving properties on it, which often causes the raise of events), in order to increase the performance of the import.

### Thread policy

The last 'tool' that can be provided to an 'importer' is the thread policy that should be used. In case no thread policy is specified, then the default multi thread one is used (this is provided by `org.nuxeo.ecm.platform.importer.threading.DefaultMultiThreadingPolicy` class).

Here is an example of how such tools can be provided to an instantiated importer.

```
TestDocumentModelFactory documentModelFactory = new TestDocumentModelFactory(...);
importer.setFactory(documentModelFactory);
if (useMultiThread) {
    importer.setThreadPolicy(super.getThreadPolicy());
} else {
    importer.setThreadPolicy(new MonoThreadPolicy());
}
ImporterFilter filter = new TestImporterFilter(true,
    true, true, false);
importer.addFilter(filter);

```

Usually such an 'importer' should be instantiated and configured in an instance method of a class that extends the `org.nuxeo.ecm.platform.importer.executor.AbstractImporterExecutor` class. In this instance method, after the importer is instantiated and configured, a call to a superclass method should be made, which will start the import.

```
super.doRun(importer, Boolean.TRUE);

```

The second parameter specifies whether the import should start synchronous or asynchronous.

This class will be the base class for the import and the method that instantiates, configure and start the import, should be called.

## Download

To download `nuxeo-importer-core`, check the [Nuxeo Marketplace](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-platform-importer) or, if needed, download a more recent version of the JAR (to be installed by hand) from [the Nuxeo Maven repository](https://maven-eu.nuxeo.org/nexus/index.html#nexus-search;quick~nuxeo-importer-core).

## Other import tools

You can also have a look at the [https://github.com/nuxeo/nuxeo-platform-replication](https://github.com/nuxeo/nuxeo-platform-replication) which is a Nuxeo replication tool that uses internally the `nuxeo-importer-core` module. For more details about Nuxeo replication have a look at [How to replicate the Nuxeo repository]({{page space='KB' page='How to+replicate+the+Nuxeo+repository'}}) and [http://doc.nuxeo.org/5.1/books/nuxeo-book/html/admin-replication.html](http://doc.nuxeo.org/5.1/books/nuxeo-book/html/admin-replication.html).

&nbsp;