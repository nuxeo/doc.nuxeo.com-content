---
title: Seam JSF Webapp Overview
labels:
    - todo
    - jsf
toc: true
confluence:
    ajs-parent-page-id: '17334377'
    ajs-parent-page-title: Customizing the web app
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Seam+JSF+Webapp+Overview
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/Seam+JSF+Webapp+Overview'
    page_id: '17334348'
    shortlink: TIAIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/TIAIAQ'
    source_link: /display/NXDOC58/Seam+JSF+Webapp+Overview
history:
    - 
        author: Solen Guitter
        date: '2014-01-24 11:13'
        message: ''
        version: '11'
    - 
        author: Solen Guitter
        date: '2014-01-23 16:09'
        message: ''
        version: '10'
    - 
        author: Solen Guitter
        date: '2014-01-23 16:08'
        message: ''
        version: '9'
    - 
        author: Solen Guitter
        date: '2014-01-13 16:04'
        message: ''
        version: '8'
    - 
        author: Solen Guitter
        date: '2014-01-13 16:04'
        message: Reporting changes from Fast Track documentation
        version: '7'
    - 
        author: Solen Guitter
        date: '2013-09-05 15:44'
        message: Added TOC
        version: '6'
    - 
        author: Solen Guitter
        date: '2011-03-04 10:46'
        message: Migrated to Confluence 4.0
        version: '5'
    - 
        author: Solen Guitter
        date: '2011-03-04 10:46'
        message: ''
        version: '4'
    - 
        author: Solen Guitter
        date: '2011-03-04 10:46'
        message: formatting and typos
        version: '3'
    - 
        author: Thierry Delprat
        date: '2010-10-15 01:01'
        message: ''
        version: '2'
    - 
        author: Admin name placeholder
        date: '2010-03-01 01:35'
        message: ''
        version: '1'

---
<div class="row"><div class="column medium-8"> {{#> callout type='warning' }}

Work is still in progress!

{{/callout}}{{! excerpt}}

The Nuxeo Platform provides a web framework to build business applications for thin clients. This framework is based on the standard JEE view technology: Java Server Faces (JSF).

{{! /excerpt}}

## Nuxeo JSF Technical Stack

Nuxeo JSF framework integrates several technologies in order to make the development of web applications fast and efficient.

The Nuxeo JSF stack includes:

*   JSF 1.2 (SUN RI) as MVC and UI component model,
*   Facelets as rendering engine and templating system,
*   Ajax4JSF to add support for Ajax behaviors,
*   RichFaces (3.3) for high level UI components,
*   Seam (2.1) as Web Framework

</div><div class="column medium-4">{{#> panel heading='In this section'}}

{{/panel}}</div></div>

Inside the Nuxeo Platform, Seam Framework is used only for the JSF (client) layer.

The usage of Seam has several benefits:

*   usage of JSF is simpler,
*   powerful context management,
*   dependency injection and Nuxeo Service lookup via injection,
*   Nuxeo Web Component are easily overridable,
*   decoupling of Web Components (that can communicate via Seam event bus).

The Nuxeo JSF framework also comes with additional concepts and tools:

*   [Action service]({{page page='actions-links-buttons-icons-tabs-and-more'}}) is used to make buttons, tabs and views configurable.
*   [Layout]({{page page='layouts-and-widgets-forms-listings-grids'}}) and [Content View]({{page page='content-views'}}) allow to define how you want to see documents and listings.
*   [URL Service]({{page page='navigation-urls'}}): the Nuxeo Platform provides REST URLs for all pages so that you can bookmark pages or send via email a link to a specific view on a specific document.
*   [Nuxeo Tag Libraries]({{page page='jsf-tag-library-registration'}}): extend existing tags and provides new Document Oriented tags.
*   [Theme engine]({{page page='theme'}}).

## Nuxeo JSF Approach

We built Nuxeo JSF framework with two main ideas in mind:

*   Make the UI simple,
*   Make the UI pluggable.

For the first point, we choose to have an "File Explorer" like navigation. So you have tools (tree, breadcrumb, search, tags) to navigate in a document repository and when on a document you can see several views on this document (Summary, Relations, Workflows, Rights, History ...).

We also choose to make the UI very pluggable, because each project needs to have a slightly different UI. In order to achieve that, each page/view is in fact made of several fragments that are assembled based on the context. This means you can easily add, remove or change a button, a link, a tab or a HTML/JSF block. You don't need to change or override the Nuxeo Platform code for that, neither do you need to change the default Nuxeo Platform templates. The assembly of the fragments is governed by "Actions", so you can change the filters and conditions for each fragment. Of course each project also needs to define it's own views on Document, for that we use the Layout and Content View system.

All this means that you can start from a standard Nuxeo Platform, and with simple configuration have a custom UI.

## Nuxeo JSF Key Concepts