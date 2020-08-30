---
title: Bootstrap Your Document Management Project
review:
    comment: ''
    date: '2016-02-01'
    status: ok
labels:
    - lts2016-ok
    - bootstrap
    - aescaffre
    - content-review-lts2017
toc: true
confluence:
    ajs-parent-page-id: '19235677'
    ajs-parent-page-title: Quick Start Series
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Bootstrap+Your+Document+Management+Project
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Bootstrap+Your+Document+Management+Project'
    page_id: '14256955'
    shortlink: O4vZ
    shortlink_source: 'https://doc.nuxeo.com/x/O4vZ'
    source_link: /display/NXDOC/Bootstrap+Your+Document+Management+Project
tree_item_index: 200
history:
    -
        author: Solen Guitter
        date: '2016-09-08 09:47'
        message: 'XDOC-857: remove nuxeo.i'
        version: '29'
    -
        author: Manon Lumeau
        date: '2016-07-19 12:19'
        message: Fix titles
        version: '28'
    -
        author: Manon Lumeau
        date: '2016-06-09 13:23'
        message: ''
        version: '27'
    -
        author: Manon Lumeau
        date: '2016-03-10 14:35'
        message: ''
        version: '26'
    -
        author: Solen Guitter
        date: '2015-12-08 14:49'
        message: ''
        version: '25'
    -
        author: Alain Escaffre
        date: '2015-12-08 11:13'
        message: ''
        version: '24'
    -
        author: Alain Escaffre
        date: '2015-12-08 11:01'
        message: ''
        version: '23'
    -
        author: Solen Guitter
        date: '2015-10-12 12:19'
        message: Remove link
        version: '22'
    -
        author: Alain Escaffre
        date: '2015-09-22 00:45'
        message: ''
        version: '21'
    -
        author: Alain Escaffre
        date: '2015-09-21 23:55'
        message: ''
        version: '20'
    -
        author: Manon Lumeau
        date: '2015-08-26 09:39'
        message: ''
        version: '19'
    -
        author: Ronan Daniellou
        date: '2015-07-10 09:41'
        message: typo
        version: '18'
    -
        author: Ronan Daniellou
        date: '2015-07-10 09:38'
        message: 'fixes double "you have" string'
        version: '17'
    -
        author: Solen Guitter
        date: '2015-02-25 13:42'
        message: ''
        version: '16'
    -
        author: Manon Lumeau
        date: '2014-09-16 15:58'
        message: ''
        version: '15'
    -
        author: Manon Lumeau
        date: '2014-09-16 15:49'
        message: ''
        version: '14'
    -
        author: Solen Guitter
        date: '2014-07-17 19:01'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2014-07-17 18:52'
        message: Formatting
        version: '12'
    -
        author: Alain Escaffre
        date: '2014-05-04 00:43'
        message: ''
        version: '11'
    -
        author: Solen Guitter
        date: '2013-10-30 12:04'
        message: ''
        version: '10'
    -
        author: Alain Escaffre
        date: '2013-10-29 15:19'
        message: ''
        version: '9'
    -
        author: Alain Escaffre
        date: '2013-08-23 15:43'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2013-07-31 16:14'
        message: Added TOC
        version: '7'
    -
        author: Solen Guitter
        date: '2013-07-31 16:11'
        message: Added links anf fixed typos
        version: '6'
    -
        author: Alain Escaffre
        date: '2013-07-24 21:34'
        message: ''
        version: '5'
    -
        author: Alain Escaffre
        date: '2013-07-24 21:34'
        message: ''
        version: '4'
    -
        author: Alain Escaffre
        date: '2013-07-24 21:32'
        message: ''
        version: '3'
    -
        author: Alain Escaffre
        date: '2013-07-24 21:30'
        message: ''
        version: '2'
    -
        author: Alain Escaffre
        date: '2013-07-24 21:15'
        message: ''
        version: '1'

---
{{! excerpt}}

Due to the business flavor of most of the projects made with Nuxeo Platform it is not possible to draw a general approach that would be the good one in 100% cases. We try to give a few hints here.
{{! /excerpt}}

## Get an Instance of Nuxeo Platform

[Download the Nuxeo Platform](http://www.nuxeo.com/downloads/) and [install it]({{page page='installation'}}) on site. You can also subscribe to the trial offer to get access to Nuxeo Studio and easily customize your Nuxeo Platform instance.

{{#> callout type='info' heading='Related Documentation'}}

*   [Installation]({{page page='installation'}})

{{/callout}}

## Branding

Once you have your Nuxeo Platform instance running, spend one hour customizing the look'n feel: change the logo, the colors, customize the login page to start making the Platform your own.

{{#> callout type='info' heading='Related Documentation'}}

*   [Branding]({{page space='studio' page='branding'}})
*   [Online UI Style Guide](http://showcase.nuxeo.com/nuxeo/styleGuide/)

{{/callout}}

## Hierarchy of the Repository

Organize the hierarchy of the repository so that it seems like a good base for some use cases. Folderish documents such as workspaces and folders can hold metadata like any other document. You should start thinking about your folders typology and if there is a hierarchy frequent pattern, it can be [adressed with structure templates.]({{page space='studio' page='structure-templates'}}) By default you have domains that contain workspaces, sections, etc... this behavior can be completely redefined and is for most of the deployments. For exemple Nuxeo repository can be used with just a hierarchy of "Folder" document types, from the root of the repository.

At this stage, you don't need to be extensive, just the initial folders and how the hierarchy will be evolving in the normal use of the product.

{{#> callout type='info' heading='Related Documentation'}}

*   [Document Types]({{page space='userdoc' page='document-types'}})
*   [Browsing Content]({{page space='userdoc' page='browsing-content'}})

{{/callout}}

## User Management

The Nuxeo Platform can be plugged to a wide range of directories and authentication systems natively (SAML, LDAP, AD, CAS) or through connectors (Shibboleth, Kerberos, etc.). You can then define what groups you'll be needing in your application and from which source.

{{#> callout type='info' heading='Related Documentation'}}

*   [Authentication and User Management]({{page page='authentication-and-user-management'}})
*   [HOWTO: Add Custom LDAP Fields to the UI]({{page page='how-to-add-custom-ldap-fields-to-the-ui'}})

{{/callout}}

## Security

Think of how you want to set up the security on your documents. The most standard way is to [base it on ACLs]({{page space='userdoc' page='managing-permissions'}}) (either on folders, or also on documents itself), but you can also go further using [Security policies]({{page page='security-policy-service'}}).

{{#> callout type='info' heading='Related Documentation'}}

*   [Nuxeo Security System]({{page page='nuxeo-security-system'}})
*   [Managing Permissions]({{page space='userdoc' page='managing-permissions'}})

{{/callout}}

## Document Capture

Standard ways are based on forms and drag and drop, but you may also have some third-party feeding, for instance by a digitization platform, or from an ERP. You need to clearly identify what will be the most frequent way for your use cases and pay specific attention to it. We provide tools like [watch folder importers]({{page page='nuxeo-bulk-document-importer'}}), [REST APIs]({{page page='rest-api'}}), standard APIs ([CMIS]({{page page='cmis'}})). If it comes from a third-party system, one of the questions will be "which metadata" are given right at the creation time.

{{#> callout type='info' heading='Related Documentation'}}

- [Choosing How to Import Data in the Nuxeo Platform]({{page page='choosing-how-to-import-data-in-the-nuxeo-platform'}})
- [JavaScript]({{page page='javascript-client'}}) Client & [Java]({{page version='3.2' space='client-java' page='index'}}) Client

{{/callout}}

## Document Metadata and Types

The Nuxeo Platform and Nuxeo Studio provide great facilities for defining your data model, with all sorts of data types, including complex ones, and various edition components. Don't worry about thinking of everything from the start. This is clearly not a blocker issue as the repository allows to add new metadata for existing document types.

For that reason, we strongly advise you to keep only the strict minimum when starting your project. You have to be tough on stepping back and refusing all that looks like not vital. That's the best way to guarantee you'll go live quick, and quickly get the precious feedback from your users. And you won't frighten them with an over engineered system.

Implement different document types if you have different sets of metadata to handle, and different lifecycle states.

For metadata, we can split them among the following categories:

*   **Search metadata**: The metadata that enable to search for the document in the repository. Focus on the taxonomies linked to the global business of your company/department and gather them in a common schema that you will use in the future when implementing other document management processes on your application. Don't focus too much on the specificities of the first process you choose to implement. You should not have more than two/three of those kind of metadata, usually edited via drop-down lists components.
*   **Lifecycle management metadata**: Those metadata help you control the lifecycle of your document: when it was created, validated, by who, the nature of the document. This may have a direct impact on how the DMS (via rules and workflow engine) should process it, the review dates, etc.
*   **Informational metadata**: This can be for instance all the authoring related metadata (who is the "real author" of the document, what are the constraints in the diffusion). As human nature is not metadata-filling friendly you need to be smart and try to leverage at best the context during the whole lifecycle of your document so as to fill metadata automatically. For instance you can use attributes of users who work on it, attributes of parent folders where the document was elaborated, etc.

Note that it is possible to extract some of the metadata automatically from a file using the [binary-metadata]({{page page='binary-metadata'}}) module.

{{#> callout type='info' heading='Related Documentation'}}
- [Data Modeling]({{page page='data-modeling'}})
- [HOWTO: Define a Document Type]({{page page='how-to-define-a-document-type'}})
- [Several Document Types vs One Document Type with a Nature Metadata]({{page page='several-document-types-vs-one-document-type-with-a-nature-metadata'}})
- [Binary Metadata]({{page page='binary-metadata'}})
{{/callout}}

## Finding the Documents

How will the user access documents? In the Nuxeo Platform you can configure some search screens (as many as you want) and also have some "presets" of searches.

You should definitely try to avoid letting the user have to configure himself the system. Think of how to use the dashboard, the faceted search capabilities, as well as the natural hierarchy, and the quick suggestion search.

You can go even deeper in tuning the search requests behavior, using Elasticsearch [hints]({{page page='elasticsearch-hints-cheat-sheet'}}).

{{#> callout type='info' heading='Related Documentation'}}

*   [Indexing and Query]({{page page='indexing-and-query'}})
*   [HOWTO: Configure a New Search Tab]({{page page='indexing-and-query'}})
*   [HOWTO: Configure a Search Filter With Facets and Other Aggregates]({{page page='how-to-configure-a-search-filter-with-facets-and-other-aggregates'}})

{{/callout}}

## Business Logic Implementation

You have now defined and chosen the document management mandatory elements. To make the application your own, you now need to implement your own business logic to take into account your processes by adding buttons, workflows, transitions in the documents lifecycle, etc. [Automation]({{page page='automation'}}) enables you to create complex business rules and logic from small operations and have them triggered by events and [user actions]({{page space='studio' page='user-actions-categories'}}), and workflows are built using a [visual graph]({{page space='studio' page='graph-tab'}}).

{{#> callout type='info' heading='Related Documentation'}}

*   [Workflow]({{page page='workflow'}})
*   [Automation]({{page page='automation'}})
*   [Simple Workflow Example]({{page page='simple-workflow-example'}})

{{/callout}}

## Architecture and Sizing

At some point in your project you need to decide about the architecture. Do you want to use a relational database (PostgreSQL, MySQL, etc.), a NoSQL database such as MongoDB, how are data persisted, do you need a cluster ?

{{#> callout type='info' heading='Related Documentation'}}

- [Persistence Architecture]({{page page='persistence-architecture'}})
- [Nuxeo Clustering Configuration]({{page page='nuxeo-clustering-configuration'}})
- [Elasticsearch Setup]({{page page='elasticsearch-setup'}})

{{/callout}}
