---
title: Bootstrap Your Document Management Project
labels:
    - todo
toc: true
confluence:
    ajs-parent-page-id: '22380617'
    ajs-parent-page-title: Quick Start Series
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: Bootstrap+Your+Document+Management+Project
    canonical_source: >-
        https://doc.nuxeo.com/display/NXDOC60/Bootstrap+Your+Document+Management+Project
    page_id: '22380800'
    shortlink: AIFVAQ
    shortlink_source: 'https://doc.nuxeo.com/x/AIFVAQ'
    source_link: /display/NXDOC60/Bootstrap+Your+Document+Management+Project
history:
    - 
        author: Manon Lumeau
        date: '2016-03-10 15:17'
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

The Nuxeo Platform is a platform designed for many different use cases that can be very specific (for instance it is used to manage news on press systems, game builds distribution, &hellip;). It is not possible to draw a general approach that would be the good one in 100% cases. But when it comes to usual document management, there are several questions you can ask yourself when starting a deployment using the Document Management module for instance. We try to give a few hints here, do not hesitate to let comments on the page, so as to make it lively and so that we improve this page with the time.

{{! /excerpt}}

&nbsp;

There is no unique way of doing things, what follows is more a helper in case you don't know where to start from. We advise you the following path.

## Bare Install of the Nuxeo Platform

Do a bare and [stable install ]({{page space='admindoc60' page='installation'}})of the Nuxeo Platform and spend two hours customizing the look'n feel, so that you feel home. Make sure the instance is accessible by all the project team, so that people quickly get friendly with the product.

## Main Document Management Processes Listing

Think of all the reasons why you wanted to set up a DMS. Output should be a list of document management processes, from business point of view. For instance, making it easier to exchange documents between actors of a project, tracking documentation of your developed software, better controlling and formalizing exchanges with sub-contractors, managing your contracts at the juridical service, etc

### Focus One or Two Processes

First choose one or two of those processes and only work on those ones. Stay focus, and work with little groups only. The criteria to choose these groups could be that the group of concerned people is prone to changes.**&nbsp;**Before you select them, each group should have a clear idea of their requirements and&nbsp;even more important, their expectations.

### Define Your "Roles" and User Stories for the Considered Processes

I.e. try to identify what actions will be available to which category of users in the application.

Identify their main user stories and write them down. Once again, stay very high level, without any User interface details. The user story is something like:

> As the quality manager, I am notified when someone wants to publish a document. I can review the document, accept or reject. If I accept, the document state changes to "Validated", the audit trail of the document contains a trace of my validation, and the document can now be searched and read by the engineers group.

## Product Training

At this stage a quick introduction to the Nuxeo Platform (one day is good, two days is perfect) is required for the whole project team. The goal is to become more familiar with the product logic, and to understand its customization capabilities. You can also identify your technical guru that should start a more complete [5 days training](http://www.nuxeo.com/services/training).

## Hierarchy of the Repository

Organize the hierarchy of the repository so that it seems like a good base for the expressed user stories. You don't need to be extensive here, just the initial folders and how the hierarchy will be evolving in the normal use of the product.

## Security

Think of how you want to set up the security on your documents. Most standard way is to [base it on ACLs]({{page space='userdoc60' page='managing-access-rights'}}) (either on folders, or also on documents itself), but you can also go further using [Security policies]({{page page='security-policy-service'}}).

## Document Capture

Standard ways are based on forms and drag'n drop, but you may also have some third-party feeding, for instance by a digitalization platform, or from an ERP. You need to clearly identify what will be the most frequent way for your chosen process and pay specific attention to it. We provide tools like [watch folder importers]({{page page='nuxeo-bulk-document-importer'}}), [REST APIs]({{page page='rest-api'}}), standard APIs ([CMIS]({{page page='cmis'}})). If it comes from a third-party system, one of the questions will be "what metadata" are given right at the creation time.

## Document Metadata and Types

The Nuxeo Platform and Nuxeo Studio provide great facilities for defining your data model, with all sorts of data types, including complex ones, and various edition components. Don't worry about thinking of everything from the start. This is clearly not a blocker issue as the repository allows to add new metadata for existing document types.

For that reason, we strongly advise you to keep only the strict minimum when starting your project. You have to be tough on stepping back and refusing all that looks like not vital. That's the best way to guarantee you'll go live quick, and quickly get the precious feedback from your users. And you won't frighten them with an over engineered system.

For document types, do a different document type if you have different sets of metadata to handle, and different life cycle states.

For metadata, we can split them among the following categories:

*   **Search metadata**: The metadata that enable to search for the document in the repository. Focus on the taxonomies linked to the global business of your company/department and gather them in a common schema that you will use in the future when implementing other document management processes on your application. Don't focus too much on the specificities of the first process you choose to implement. You should not have more than two of those kind of metadata, usually edited via drop-down lists components.
*   **Life cycle management metadata**: Those metadata help you control the life cycle of your document: when it was created, validated, by who, the nature of the document. This may have a direct impact on how the DMS (via rules and workflow engine) should process it, the review dates, etc.
*   **Informational metadata**: This can be for instance all the authoring related metadata (who is the "real author" of the document, what are the constraints in the diffusion, &hellip;). As human nature is not metadata-filling friendly you need to be smart and try to leverage at best the context during the whole life cycle of your document so as to fill metadata automatically. For instance you can use attributes of users who work on it, attributes of parent folders where the document was elaborated, etc.

{{#> callout type='info' }} &nbsp;The best way to make sure you didn't put too much metadata is to put none of them, and only add it if the user story you are implementing makes use of it. {{/callout}}

## Finding the Documents

How will the user access documents? In the Nuxeo Platform you can configure some search screens (as many as you want) and also have some "presets" of searches.

You should definitely try to avoid letting the user have to configure himself the system. Think of how to use the dashboard, the faceted search capabilities, as well as the natural hierarchy, and the quick suggestion search.

## Document Life Cycle and User Stories

When you come to document management, whatever business you are in, your document life cycle turns out to be, more or less, something like: authoring phase, validation phase, publishing phase, applicability phase, archiving phase.

Even if, as a mature ECM platform, we provide modules and features for all the phases (todo: create a page that explains the features provided by the platform for each phases), you don't necessarily want to use Nuxeo for all those steps. Try to identify clearly for which one you want to use Nuxeo, this will help you focusing your workshops attendees, and your debates.

Then, you can start going into more details on the user stories that really imply Nuxeo.

As a reminder, at the beginning of your project limit your workflows&nbsp;simple and short use cases. Add more steps when users really asked for it and asked for it twice (some of them will, don't worry ! ;-))

Focus on making sure that the correct users have access to the documents at the good time, and can easily access them.

## Iterate

Have short implementation cycles at the beginning. 2-3 days is good. Re-play the user stories in front of the product owners, get their feedback, don't take it into account immediately when it is costly, make sure they express it several times. Then when the data model is stabilized, as well as the main life cycle, start doing the integration with other systems, and the UI improvements, and the functional tests.