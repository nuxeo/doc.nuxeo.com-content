---
title: JSF UI Framework Overview
review:
    comment: ''
    date: '2016-12-14'
    status: ok
tree_item_index: 50

---
The Nuxeo Platform provides a web framework to build business applications for thin clients. This framework is based on the standard JEE view technology: Java Server Faces (JSF).

## Nuxeo JSF Technical Stack

Nuxeo JSF framework integrates several technologies in order to make the development of web applications fast and efficient.

The Nuxeo JSF stack includes:

*   Mojarra JSF (2.2.6) as MVC and UI component model, including, as of JSF 2 specifications, facelets as rendering engine and templating system,
*   RichFaces (4.5.0) for high level UI components, including the a4j library for Ajax behaviors support
*   JBoss Seam (2.3.1) as Web Framework

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
*   [Nuxeo Tag Libraries]({{page page='how-to-register-a-jsf-tag-library'}}): extend existing tags and provides new Document Oriented tags.
*   [Theme engine]({{page page='theme'}}).

## Nuxeo JSF Approach

We built Nuxeo JSF framework with two main ideas in mind:

*   Make the UI simple,
*   Make the UI pluggable.

For the first point, we choose to have an "File Explorer" like navigation. So you have tools (tree, breadcrumb, search, tags) to navigate in a document repository and when on a document you can see several views on this document (Summary, Relations, Workflows, Rights, History ...).

We also choose to make the UI very pluggable, because each project needs to have a slightly different UI. In order to achieve that, each page/view is in fact made of several fragments that are assembled based on the context. This means you can easily add, remove or change a button, a link, a tab or a HTML/JSF block. You don't need to change or override the Nuxeo Platform code for that, neither do you need to change the default Nuxeo Platform templates. The assembly of the fragments is governed by "Actions", so you can change the filters and conditions for each fragment. Of course each project also needs to define it's own views on Document, for that we use the Layout and Content View system.

All this means that you can start from a standard Nuxeo Platform, and with simple configuration have a custom UI.

## Pages Index

*   [JSF Page Layout System Overview]({{page space='NXDOC' page='JSF Page+Layout+System+Overview'}})
*   [Web UI Limitations]({{page space='NXDOC' page='Web UI+Limitations'}})&nbsp;&mdash;&nbsp;<span class="smalltext">This chapter presents the limitations to the Seam/JSF web application.</span>
*   [Web UI How-To Index]({{page space='NXDOC' page='Web UI+How-To+Index'}})
*   [Upgrade to JSF2]({{page space='NXDOC' page='Upgrade to+JSF2'}})&nbsp;&mdash;&nbsp;<span class="smalltext">The Nuxeo Platform has been upgraded to JSF 2 for the 6.0 version. This page provides tools and notes to help you migrate your custom Nuxeo projects to this version.</span>
*   [JSF and Ajax Tips and How-To Index]({{page space='NXDOC' page='JSF and+Ajax+Tips+and+How-To+Index'}})
