---
title: WebEngine Tutorials
review:
    comment: Installation of samples is broken and has to be reviewed NXDOC-1022.
    date: '2016-12-20'
    status: requiresUpdates
labels:
    - lts2016-ok
    - webengine
    - webengine-component
    - home
    - mlumeau
    - nxDocTeam
    - nxProduct
    - content-review-lts2017
confluence:
    ajs-parent-page-id: '950281'
    ajs-parent-page-title: WebEngine (JAX-RS)
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: WebEngine+Tutorials
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/WebEngine+Tutorials'
    page_id: '3343141'
    shortlink: JQMz
    shortlink_source: 'https://doc.nuxeo.com/x/JQMz'
    source_link: /display/NXDOC/WebEngine+Tutorials
tree_item_index: 300
history:
    -
        author: Solen Guitter
        date: '2016-01-12 09:49'
        message: dd link to atatched sample
        version: '22'
    -
        author: Damien Metzler
        date: '2015-10-20 14:32'
        message: ''
        version: '21'
    -
        author: Solen Guitter
        date: '2014-08-25 14:02'
        message: Remove 5.4 reference
        version: '20'
    -
        author: Solen Guitter
        date: '2011-11-07 17:06'
        message: Migrated to Confluence 4.0
        version: '19'
    -
        author: Solen Guitter
        date: '2011-11-07 17:06'
        message: ''
        version: '18'
    -
        author: Stéphane Lacoin
        date: '2011-05-17 10:13'
        message: ''
        version: '17'
    -
        author: Stéphane Lacoin
        date: '2011-05-16 17:53'
        message: ''
        version: '16'
    -
        author: Stéphane Lacoin
        date: '2011-05-16 17:51'
        message: ''
        version: '15'
    -
        author: Stéphane Lacoin
        date: '2011-05-16 17:40'
        message: ''
        version: '14'
    -
        author: Stéfane Fermigier
        date: '2011-01-08 12:39'
        message: ''
        version: '13'
    -
        author: Julien Carsique
        date: '2010-11-16 16:44'
        message: 'Updating the WebEngine sample paths '
        version: '12'
    -
        author: Wojciech Sulejman
        date: '2010-10-22 19:00'
        message: 'Updating the WebEngine sample paths '
        version: '11'
    -
        author: Bogdan Stefanescu
        date: '2010-07-21 12:22'
        message: ''
        version: '10'
    -
        author: Bogdan Stefanescu
        date: '2010-07-21 12:21'
        message: ''
        version: '9'
    -
        author: Bogdan Stefanescu
        date: '2010-07-21 12:19'
        message: ''
        version: '8'
    -
        author: Bogdan Stefanescu
        date: '2010-07-21 12:18'
        message: ''
        version: '7'
    -
        author: Bogdan Stefanescu
        date: '2010-07-20 16:40'
        message: ''
        version: '6'
    -
        author: Bogdan Stefanescu
        date: '2010-07-20 16:35'
        message: ''
        version: '5'
    -
        author: Bogdan Stefanescu
        date: '2010-07-20 16:32'
        message: ''
        version: '4'
    -
        author: Bogdan Stefanescu
        date: '2010-07-20 16:31'
        message: ''
        version: '3'
    -
        author: Bogdan Stefanescu
        date: '2010-07-20 16:29'
        message: ''
        version: '2'
    -
        author: Bogdan Stefanescu
        date: '2010-07-20 15:35'
        message: ''
        version: '1'

---
In this section we will go deeper into WebEngine model by proposing 5 samples on how to use common WebEngine concepts.

To install the sample modules you need to download the compiled [JAR from our Maven repository](https://maven.nuxeo.org/nexus/index.html#nexus-search;gav~~nuxeo-webengine-samples) and copy them to the `$NUXEO_HOME/nxserver/bundles` directory.

To correctly understand the tutorials you need to look into all .groovy, .xml, and .ftl files you find in the corresponding [sample modules]({{file name='examples.zip'}}).


##### [Tutorial 1]({{page page='hello-world'}}) - Hello World.

This tutorial demonstrates how to handle requests. This is the simplest object. It requires only one java class which represents the Resource (the entry point).

You can access the tutorial sample at:  [http://localhost:8080/nuxeo/site/samples/hello](http://localhost:8080/nuxeo/site/samples/hello)

##### [Tutorial 2]({{page page='using-freemarker-template-language-ftl'}}) - Using Templates

This tutorial demonstrates how to use templates to render dynamic content.

You can access the tutorial sample at: [http://localhost:8080/nuxeo/site/samples/templating](http://localhost:8080/nuxeo/site/samples/templating)

##### [Tutorial 3]({{page page='web-object-model'}}) - Web Object Model

This tutorial demonstrates the basics of the WebEngine Object Model. You can see how to create new Module Resources, Object Resources, Adapter Resources and views.

You can access the tutorial sample at: [http://localhost:8080/nuxeo/site/samples/basics](http://localhost:8080/nuxeo/site/samples/basics)

##### [Tutorial 4]({{page page='working-with-documents'}}) - Working with Documents

This tutorial demonstrates how to access Nuxeo Platform Documents through WebEngine.
You can access the tutorial sample at: [http://localhost:8080/nuxeo/site/samples/documents](http://localhost:8080/nuxeo/site/samples/documents)

##### [Tutorial 5]({{page page='module-extensibility'}}) - Module Extensibility

This tutorial demonstrates how modules can be extended and how the links you are using in your templates can
be managed to create easy to maintain and modular applications.

You can access the tutorial sample at: [http://localhost:8080/nuxeo/site/samples/extended](http://localhost:8080/nuxeo/site/samples/extended)
