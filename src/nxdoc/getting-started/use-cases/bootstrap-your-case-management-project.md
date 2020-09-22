---
title: Bootstrap Your Case Management Project
review:
    comment: ''
    date: '2020-09-15'
    status: ok
notes: Documentation page used by the Marketing team. Check with Marketing before deleting or moving.
labels:
    - lts2016-ok
    - bootstrap
    - aescaffre
    - excerpt
    - content-review-lts2017
toc: true
confluence:
    ajs-parent-page-id: '19235677'
    ajs-parent-page-title: Quick Start Series
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Bootstrap+Your+Case+Management+Project
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Bootstrap+Your+Case+Management+Project'
    page_id: '16091979'
    shortlink: S4v1
    shortlink_source: 'https://doc.nuxeo.com/x/S4v1'
    source_link: /display/NXDOC/Bootstrap+Your+Case+Management+Project
tree_item_index: 300
history:
    -
        author: Alain Escaffre
        date: '2015-12-08 13:57'
        message: ''
        version: '14'
    -
        author: Alain Escaffre
        date: '2015-12-08 13:55'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2015-11-09 16:27'
        message: Removing links to BIRT integration
        version: '12'
    -
        author: Ronan Daniellou
        date: '2015-07-10 10:17'
        message: 'Superfluous "we"'
        version: '11'
    -
        author: Alain Escaffre
        date: '2015-04-07 23:24'
        message: ''
        version: '10'
    -
        author: Manon Lumeau
        date: '2014-09-16 15:50'
        message: ''
        version: '9'
    -
        author: Manon Lumeau
        date: '2014-07-21 11:27'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2014-07-18 10:50'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2014-07-18 10:48'
        message: formatting
        version: '6'
    -
        author: Alain Escaffre
        date: '2014-05-04 00:44'
        message: ''
        version: '5'
    -
        author: Alain Escaffre
        date: '2013-10-29 14:09'
        message: ''
        version: '4'
    -
        author: Alain Escaffre
        date: '2013-10-29 14:03'
        message: ''
        version: '3'
    -
        author: Alain Escaffre
        date: '2013-10-29 13:30'
        message: ''
        version: '2'
    -
        author: Alain Escaffre
        date: '2013-10-29 13:18'
        message: ''
        version: '1'
---

{{! excerpt}}
The Nuxeo Platform is a perfect choice for implementing a [case management project](https://www.nuxeo.com/products/case-management/). The platform provides all the necessary elements: strong information typing, rich form management, structure and document templating tools, event bus for plugging custom rules, powerful workflow engine, cases lists mechanisms. Nuxeo Studio allows semi-technical people to inject business requirements in the application while powerful API and great Java framework provide practically no limit in integrating with external applications or adding custom features.
{{! /excerpt}}

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Bootstrap Your Case Management Project/claim4.png
    name: claim4.png
    addins#screenshot#up_to_date
--}}
![claim4.png](nx_asset://c369fec6-12b9-45bf-9207-51486cf38a8f ?w=650,border=true)

Let's go through the important steps when implementing a case management project.

## Defining Your Case Model

1.  From Nuxeo Studio, design your data model and structure, using document type, schemas and content-template features. A case has a specific type, and specific substructure.
2.  Also define a default form for your case and the sub documents. At the beginning, just consider filling all the information at once. You will refine later the various forms and views you need depending on the role of the user.
3.  If you have some data that should come from remote systems, you should define your integration mode:
    *   Store a foreign key on the case and display the information by doing live queries;
    *   Fetch the data at creation of your case, and provide a way to synchronize it all the way long.

## Defining the Case Lifecycle

1.  Define a base lifecycle for your case and implement it using the [lifecycle editor in Studio]({{page space='studio' page='life-cycle'}}).
    ![]({{file name='case-lifecycle.png'}} ?w=600,border=true)
2.  List the roles of your case management project, make the analysis of who should work when on your case and on which data. Each main phase of your case processing may be the object of a dedicated workflow model design. Or a simple task. You must define how you want to orchestrate all of the phases:
    *   Either by a global workflow that may call sub-workflows
    {{!--     ### nx_asset ###
path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Bootstrap Your Case Management Project/claim2.png
name: claim2.png
addins#screenshot#up_to_date
--}}
![claim2.png](nx_asset://6a560c72-de63-47cc-827e-40c4449072c8 ?w=400,border=true)
    *   or, in a more adaptive style, launching small workflows depending on some pre-defined event-based conditions (click on a given button, change of state of the case, change of the value of a metadata). You may also want to integrate Nuxeo with an external rules engine that would provide even more induction capabilities.

## Refining Your Users Views

Now that you start having a pretty good idea of which user should fill which information, you can refine the user experience:

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Bootstrap Your Case Management Project/claim3.png
    name: claim3.png
    addins#screenshot#up_to_date
--}}
![claim3.png](nx_asset://dc33a301-7db4-4960-b582-08394fa39945 ?w=650,border=true)

*   By spreading all your business data among different tabs for making them simpler, and by organizing the main case view in a nice way. You can use for this the forms and content views features, as well as the tab designer feature, in Studio.
{{!--     ### nx_asset ###
path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Bootstrap Your Case Management Project/claim1.png
name: claim1.png
addins#screenshot#up_to_date
--}}
![claim1.png](nx_asset://6926c0c8-3005-454d-9729-5bb7d5361c57 ?w=450,border=true)
*   By providing working queues, that help organize the case worker job. A working queue is a mechanism for displaying cases depending on some of their criteria (nature, lifecycle, customer id, ...)

## Adding Automation on Content Processing

It is very frequent in case management projects that the systems generate automatically some documents using the data that was already stored in the system. You may want to use [the template rendering module]({{page page='template-rendering-addon'}}) for generating professional-class documents, either in Office format or PDF, that you can then send via emails or distribute to external partners via FTP or using a dedicated folder in the system, etc.

## Reporting

Case management applications are very strategical for managers as they are most of the time at the heart of the activity of the department. Thus it is a great source for tracking potential optimizations regarding internal process. Computing some mindful statistics around tasks closing, case life length, etc. may be very meaningful. You can leverage the Elasticsearch index capabilities with [our data visualisation module]({{page page='data-visualization'}}).
