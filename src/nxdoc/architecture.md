---
title: Architecture
labels:
    - todo
confluence:
    ajs-parent-page-id: '17334400'
    ajs-parent-page-title: Developer Documentation Center
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Architecture
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/Architecture'
    page_id: '17334300'
    shortlink: HIAIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/HIAIAQ'
    source_link: /display/NXDOC58/Architecture
history:
    - 
        author: Manon Lumeau
        date: '2016-07-20 14:49'
        message: 'emove children display macro '
        version: '20'
    - 
        author: Anonymous
        date: '2013-10-28 13:01'
        message: ''
        version: '19'
    - 
        author: Alain Escaffre
        date: '2013-10-27 20:58'
        message: ''
        version: '18'
    - 
        author: Alain Escaffre
        date: '2013-10-27 20:55'
        message: ''
        version: '17'
    - 
        author: Alain Escaffre
        date: '2013-10-20 00:51'
        message: ''
        version: '16'
    - 
        author: Alain Escaffre
        date: '2013-10-16 01:34'
        message: ''
        version: '15'
    - 
        author: Solen Guitter
        date: '2013-09-17 11:33'
        message: ''
        version: '14'
    - 
        author: Alain Escaffre
        date: '2013-09-17 00:24'
        message: ''
        version: '13'
    - 
        author: Alain Escaffre
        date: '2013-09-16 18:38'
        message: ''
        version: '12'
    - 
        author: Alain Escaffre
        date: '2013-09-16 18:38'
        message: ''
        version: '11'
    - 
        author: Alain Escaffre
        date: '2013-09-16 18:33'
        message: ''
        version: '10'
    - 
        author: Alain Escaffre
        date: '2013-09-16 18:33'
        message: ''
        version: '9'
    - 
        author: Alain Escaffre
        date: '2013-09-16 18:32'
        message: ''
        version: '8'
    - 
        author: Alain Escaffre
        date: '2013-09-16 11:40'
        message: ''
        version: '7'
    - 
        author: Alain Escaffre
        date: '2013-09-16 11:38'
        message: ''
        version: '6'
    - 
        author: Alain Escaffre
        date: '2013-09-16 11:37'
        message: ''
        version: '5'
    - 
        author: Alain Escaffre
        date: '2013-09-16 11:31'
        message: ''
        version: '4'
    - 
        author: Solen Guitter
        date: '2013-09-04 12:09'
        message: Added excerpts
        version: '3'
    - 
        author: Solen Guitter
        date: '2011-03-04 16:57'
        message: Migrated to Confluence 4.0
        version: '2'
    - 
        author: Solen Guitter
        date: '2011-03-04 16:57'
        message: ''
        version: '1'

---
<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">

The Nuxeo Platform is a mature platform for building modern content apps: Applications managing a lot of semi-structured and structured data and with strong security, life cycle, traceability&nbsp;and transformations dimensions, such as document management, assets management, product life cycle management (PLM), product information management (PIM), Case Management. The Nuxeo Platform is technically highly modular &mdash; features and capabilities are spread upon more than 150 modules. On a 10,000 feet overview, you will find the elements below.
&nbsp;

*   [The runtime Java framework]({{page page='component-model'}}), based on OSGi, brings the necessary modularity, flexibility and extensibility that you will like on our platform. This framework exposes the notions of Components, Services and Extension Points.

*   The [repository]({{page page='content-repository'}}) transparently&nbsp;translates the document semantics and capabilities (documents, metadata, document query language (NXQL), versioning, audit etc. ) into standard SQL and blob storage instructions. The repository works on PostgreSQL, Oracle and SQL servers (and has also been adapted on some other targets such as MySQL and DB2) and stores binary content either on simple file system, on the cloud (S3 connector), or on long term storage devices. The repository has been load-tested against more than 100 millions documents and is continuously improved. The repository is also shipped with high performance multi-threaded injectors and natively implements the standard interface of content repositories: "CMIS".

*   The [workflow engine]({{page page='workflow'}}) allows to run complex processes defined via a graph, with support of many features: parallel node, merge node, n-tasks nodes, sub workflow, escalation, etc.

*   The **modular and extensible web application** offers tens of Document Management, Digital Asset Management and Case Management features out-of-the-box. This web application is very easily customizable via [Studio]({{page space='studio'}}) (data model, forms, business views, user actions, workflows, &hellip;) so that you can transform the stock app into a 100 % business app that will fit your users expectations mostly by configuration. Furthermore, this web application can be completed by many plugins that bring additional features (ex: polls, permissions export, advanced audit, &hellip;).

*   The [REST API]({{page page='rest-api'}})&nbsp;and its client SDKs (Java, JavaScript, PHP, Python, iOS, Android) exposes more than 100 functions, from basic CRUD &nbsp;operations to more advanced repository features such as versioning, document locking, workflow, audit, etc. You can use those clients for implementing connectors (portals, external workflow engines, search engines, &hellip;) or for re-implementing a complete new UI on top of the repository in the language and technology of your choice. For example, we provide great accelerators for developing with AngularJS.

*   **&nbsp;Connectors, additional plugins and Enterprise world**. The Nuxeo Platform is an "Enterprise" platform: 7 years of integration in many different IT ecosystems made it robust and resilient to many different situations: It supports all the [main authentication schemes]({{page page='authentication-and-identity-service'}}) (form based, OAuth, CAS, Kerberos, SAML2, &hellip;), multiple users provisioning strategies, &nbsp;provides different [HA deployment options]({{page page='deployment-options'}}), etc. You will also find some connectors to other enterprise tools such as search engines, mails, etc.

In addition to provide a high quality open source software that is permanently and intensively tested, Nuxeo proposes to the community many tools and means for guarantying your project will be successful:

*   [Nuxeo Studio]({{page space='studio' page='nuxeo-online-services'}}), an online tool for configuring the repository, the workflow engine and the web app;
*   [Nuxeo IDE]({{page page='installing-nuxeo-ide'}}), an Eclipse plugin offering hot reload, services catalogs, implementation wizards and integration with Nuxeo Studio;
*   [Funkload](http://funkload.nuxeo.com/), a benchmark framework to streamline the process of load-testing your business application implemented on top of Nuxeo;
*   A complete knowledge and set of open source tools for benefiting from a great Continuous Integration chain, [the same as Nuxeo's](http://qa.nuxeo.com);
*   [Monitoring tools]({{page space='admindoc58' page='monitoring-and-maintenance'}}) for going to production safely and quietly.

</div><div class="column medium-6">

**Section's content:**

*   [Component Model]({{page space='NXDOC58' page='Component Model'}})&nbsp;&mdash;&nbsp;<span class="smalltext">This page describes how the Nuxeo Platform is modular, and how bundles, components and extension points relate to each other to let you create a fully customized application.</span>
*   [Content Repository]({{page space='NXDOC58' page='Content Repository'}})&nbsp;&mdash;&nbsp;<span class="smalltext">This page summarizes all the main concepts about documents, access to documents and document storage.</span>
*   [Workflow Engine]({{page space='NXDOC58' page='Workflow Engine'}})
*   [Authentication and Identity Service]({{page space='NXDOC58' page='Authentication and+Identity+Service'}})&nbsp;&mdash;&nbsp;<span class="smalltext">This page gives a general idea on how authentication is plugged into the platform.</span>
*   [Platform APIs]({{page space='NXDOC58' page='Platform APIs'}})&nbsp;&mdash;&nbsp;<span class="smalltext">This page presents the main APIs and protocols available to integrate the Nuxeo Platform with the IT environment.</span>
*   [Event Bus]({{page space='NXDOC58' page='Event Bus'}})&nbsp;&mdash;&nbsp;<span class="smalltext">When you need to integrate some features of an external application into Nuxeo, or want Nuxeo to push data into an external application, using the Nuxeo event system is usually a good solution.</span>
*   [Data Lists and Directories]({{page space='NXDOC58' page='Data Lists+and+Directories'}})&nbsp;&mdash;&nbsp;<span class="smalltext">&nbsp;We explain here the philosophy of the directories: A mean to expose to your app some external data.</span>
*   [Content Automation]({{page space='NXDOC58' page='Content Automation'}})&nbsp;&mdash;&nbsp;<span class="smalltext">The main goal of automation is to enable end users to rapidly build complex business logic without writing any Java code &mdash; just by assembling the built-in set of atomic operations into complex chains and then plugging these chains inside Nuxeo as UI actions, event handlers, REST bindings, etc.</span>
*   [UI Frameworks]({{page space='NXDOC58' page='UI Frameworks'}})&nbsp;&mdash;&nbsp;<span class="smalltext">The Nuxeo Platform proposes different technologies for the client side of the application. The choice of one technology vs. another depends on both the project's stakes and its context.</span>
*   [Deployment Options]({{page space='NXDOC58' page='Deployment Options'}})&nbsp;&mdash;&nbsp;<span class="smalltext">In this section, the different deployment possibilities are described.</span>
*   [Licenses]({{page space='NXDOC58' page='Licenses'}})&nbsp;&mdash;&nbsp;<span class="smalltext">The Nuxeo source code is licensed under various open source licenses, all compatible with each other,&nbsp;non viral and not limiting redistribution.&nbsp;Nuxeo also uses a number of third-party libraries that come with their own licenses.</span>
*   [Importing Data in Nuxeo]({{page space='NXDOC58' page='Importing Data+in+Nuxeo'}})&nbsp;&mdash;&nbsp;<span class="smalltext">This page will walk you though the different import options and tries to gives you the pros and cons of each approach.</span>

</div></div>