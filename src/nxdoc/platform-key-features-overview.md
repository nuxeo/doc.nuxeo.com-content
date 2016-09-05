---
title: Platform Key Features Overview
labels:
    - reviewed
toc: true
confluence:
    ajs-parent-page-id: '17334400'
    ajs-parent-page-title: Developer Documentation Center
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Platform+Key+Features+Overview
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/Platform+Key+Features+Overview'
    page_id: '17334380'
    shortlink: bIAIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/bIAIAQ'
    source_link: /display/NXDOC58/Platform+Key+Features+Overview
history:
    - 
        author: Solen Guitter
        date: '2013-10-30 11:19'
        message: ''
        version: '38'
    - 
        author: Solen Guitter
        date: '2013-10-30 11:18'
        message: Added links
        version: '37'
    - 
        author: Alain Escaffre
        date: '2013-10-30 01:22'
        message: ''
        version: '36'
    - 
        author: Alain Escaffre
        date: '2013-10-28 01:13'
        message: ''
        version: '35'
    - 
        author: Alain Escaffre
        date: '2013-10-27 20:50'
        message: ''
        version: '34'
    - 
        author: Alain Escaffre
        date: '2013-10-23 10:33'
        message: ''
        version: '33'
    - 
        author: Alain Escaffre
        date: '2013-10-23 10:33'
        message: ''
        version: '32'
    - 
        author: Alain Escaffre
        date: '2013-10-23 10:32'
        message: ''
        version: '31'
    - 
        author: Alain Escaffre
        date: '2013-10-23 10:29'
        message: ''
        version: '30'
    - 
        author: Alain Escaffre
        date: '2013-10-23 10:28'
        message: ''
        version: '29'
    - 
        author: Alain Escaffre
        date: '2013-10-23 10:27'
        message: ''
        version: '28'
    - 
        author: Alain Escaffre
        date: '2013-10-23 10:25'
        message: ''
        version: '27'
    - 
        author: Alain Escaffre
        date: '2013-10-23 10:23'
        message: ''
        version: '26'
    - 
        author: Solen Guitter
        date: '2013-09-18 17:43'
        message: Fixed typos
        version: '25'
    - 
        author: Solen Guitter
        date: '2013-09-04 12:09'
        message: ''
        version: '24'
    - 
        author: Solen Guitter
        date: '2013-09-04 12:09'
        message: ''
        version: '23'
    - 
        author: Solen Guitter
        date: '2012-05-16 11:22'
        message: ''
        version: '22'
    - 
        author: Solen Guitter
        date: '2012-05-16 11:22'
        message: Fixed link format
        version: '21'
    - 
        author: Florent Guillaume
        date: '2011-09-13 23:15'
        message: added links and toc
        version: '20'
    - 
        author: Solen Guitter
        date: '2011-01-04 16:12'
        message: added links and toc
        version: '19'
    - 
        author: Stéfane Fermigier
        date: '2010-10-26 11:41'
        message: ''
        version: '18'
    - 
        author: Stéfane Fermigier
        date: '2010-10-26 11:40'
        message: ''
        version: '17'
    - 
        author: Solen Guitter
        date: '2010-10-26 09:52'
        message: ''
        version: '16'
    - 
        author: Solen Guitter
        date: '2010-10-25 15:59'
        message: ''
        version: '15'
    - 
        author: Solen Guitter
        date: '2010-10-14 18:03'
        message: ''
        version: '14'
    - 
        author: Stéfane Fermigier
        date: '2010-06-27 19:26'
        message: ''
        version: '13'
    - 
        author: Thierry Delprat
        date: '2010-06-02 01:37'
        message: ''
        version: '12'
    - 
        author: Thierry Delprat
        date: '2010-06-02 00:31'
        message: ''
        version: '11'
    - 
        author: Thierry Delprat
        date: '2010-06-01 20:26'
        message: ''
        version: '10'
    - 
        author: Thierry Delprat
        date: '2010-06-01 20:24'
        message: ''
        version: '9'
    - 
        author: Thierry Delprat
        date: '2010-06-01 20:14'
        message: ''
        version: '8'
    - 
        author: Thierry Delprat
        date: '2010-06-01 20:14'
        message: ''
        version: '7'
    - 
        author: Thierry Delprat
        date: '2010-06-01 20:07'
        message: ''
        version: '6'
    - 
        author: Solen Guitter
        date: '2010-05-20 09:31'
        message: formatting and typos
        version: '5'
    - 
        author: Thierry Delprat
        date: '2010-05-11 19:38'
        message: ''
        version: '4'
    - 
        author: Thierry Delprat
        date: '2010-05-11 19:32'
        message: ''
        version: '3'
    - 
        author: Thierry Delprat
        date: '2010-05-11 17:26'
        message: ''
        version: '2'
    - 
        author: Admin name placeholder
        date: '2010-03-01 00:36'
        message: ''
        version: '1'

---
<div class="row"><div class="column medium-8">{{! excerpt}}

This page aims at providing an overview of the features you will (or may, depending on&nbsp;the modules you deploy and the features you choose to use) get out-of-the-box by building your application on top of the Nuxeo Platform. This page is not an overview of the technical features from a software engineering point of view, this is addressed in the [architecture overview]({{page page='architecture'}}).

{{! /excerpt}}

## A Powerful And Robust Persistence Layer

The Nuxeo repository allows to store structured objects with multiple metadata from simple to complex. It is designed for handling cases as well as documents or media.&nbsp;&nbsp;A document can be present in several places of the repository at the same time: That's what we call proxies. The repository will manage the [versioning]({{page page='versioning'}}), the security (with [ACLs]({{page space='userdoc58' page='managing-access-rights'}}) and [custom security policies]({{page page='security-policy-service'}})) the traceability and the indexation: You can leverage the NXQL for [querying the repository]({{page page='querying-and-searching'}}), including some specific full text search instructions, queries on complex metadata, versions, etc&hellip; It is easy to manage, with [quota management]({{page space='userdoc58' page='nuxeo-quota'}}), possibility to schedule some retention rules, support of [multi-tenant]({{page space='userdoc58' page='nuxeo-multi-tenant'}}).

## With Fine Traceability

Ability to search in the audit, to export security and ACLs information regularly, to log custom (project-defined) events in that audit.

## Great Authoring Features

WYSIWYG HMTL editing, Markdown support, plugin for integration with live collaborative editing open source platform "Etherpad", complex form management, safe edit (HTML 5 based form backup), ability to [revert a previous version of the document]({{page space='userdoc58' page='documents-history'}}). [Live Edit]({{page space='userdoc58' page='working-with-live-edit'}}) provides the ability to edit the content launching automatically the local native editor depending on the file mime-type, without the burden of downloading and re-uploading manually the file. Content preview. Multi-tab editing: Separate all the metadata of your project on various tabs displayed depending on the profile of the connected users. Let some users be able to view &nbsp;or edit a given metadata, or hide that from him, depending on his role. Ability to [bulk edit metadata]({{page space='userdoc58' page='editing-content#bulk'}}). [Tagging]({{page space='userdoc58' page='tags'}}) support. Support of taxonomies. Support of [publishing processes]({{page space='userdoc58' page='working-in-sections'}}).&nbsp;

</div><div class="column medium-4">{{#> panel heading='In this section'}}

{{/panel}}</div></div>

## Some Collaborative Features

Document locking, user [comments]({{page space='userdoc58' page='comments'}}), [activity feed]({{page space='userdoc58' page='activity-stream-overview'}}), user [annotations]({{page space='userdoc58' page='annotations-and-preview'}}), versions comparison, [user notifications]({{page space='userdoc58' page='alerts'}}), [network based subscriptions]({{page space='userdoc58' page='network-overview'}}), external users registrations, [serial review, parallel reviews]({{page space='userdoc58' page='workflows'}}), [polls]({{page space='userdoc58' page='nuxeo-poll'}})<span style="color: rgb(0,0,0);">.</span>

## Media Management

Thumbnail extraction, metadata extraction (EXIF, IPTC, XMP), pictures and video conversions, video story boarding, &nbsp;picture watermarking, collections browsing, [PDF export of a selection of assets]({{page space='userdoc58' page='nuxeo-dam-pdf-export'}}).

## Conversions Features

Not only limited to media management field, the platform provides great piping logics for transforming easily your content. It is simple to integrate a third party converter if you don't find what you need in the platform, for example for previewing an AutoCAD document using a proprietary server side module.

## Workflow

Human and services tasks, [escalation]({{page page='escalation-service'}}), merge, fork, exclusive branches, parallel branch, tasks listings, task delegation, task re-assignation. Workflow on several documents at the same time.

## Document Synchronization

With [Nuxeo Drive]({{page space='userdoc58' page='nuxeo-drive'}}), a standalone multi-OS desktop app, users can synchronize the repository as a local file system, with support of off-line modifications, conflict management and versioning policy. The Nuxeo Platform also provides a repository to&nbsp;repository&nbsp;synchronization based on an XML serialization service that can be used for a one-way documents replication.

## Email Capture

Either by [fetching mails]({{page space='userdoc58' page='email-folders'}}) directly from mailboxes to the repository, or by using the [Outlook plugins](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-outlookaddin), it is very easy to capture data coming from mails, archiving both body, attachment, and mail metadata.

## Document Rendering

There are several options offered for [document rendering]({{page space='userdoc58' page='template-rendering-addon'}}), so as to produce Open Office Document, Word & Excel documents, PDF, HTML, CSV files where the content comes from the repository, being replaced via a templating logic. You will be able to produce renditions of your data with professional L&F<span style="color: rgb(0,0,0);">.</span>

## Mobile Application

A mobile webapp, touch screen optimized, with additional features on iOS and Android platforms.

## Reporting

Ability to produce simple to complex report using the [BIRT plugin]({{page space='userdoc58' page='nuxeo-birt-integration'}}), or by plugging your BI tools directly to the repository database. Ability to save custom tables of data, choosing which columns to display.

## Import/export

[CSV import]({{page space='userdoc58' page='nuxeo-csv'}}), XML import from scanners and digitization chains, XML export.

## User Authentication

[Standard LDAP /AD authentication]({{page space='admindoc58' page='using-a-ldap-directory'}}) support, [OAuth / Open ID compatibility]({{page space='admindoc58' page='using-oauth'}}), login with Facebook or GMail account, [Shibboleth]({{page space='admindoc58' page='using-shibboleth'}}), [Kerberos]({{page space='admindoc58' page='using-kerberos'}}).

&nbsp;
&nbsp;