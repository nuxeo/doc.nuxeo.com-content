---
title: Studio Overview and Concepts
review:
    comment: ''
    date: ''
    status: ok
toc: true
confluence:
    ajs-parent-page-id: '19793788'
    ajs-parent-page-title: Nuxeo Studio
    ajs-space-key: Studio
    ajs-space-name: Nuxeo Online Services
    canonical: Studio+Overview+and+Concepts
    canonical_source: 'https://doc.nuxeo.com/display/Studio/Studio+Overview+and+Concepts'
    page_id: '8192422'
    shortlink: pgF9
    shortlink_source: 'https://doc.nuxeo.com/x/pgF9'
    source_link: /display/Studio/Studio+Overview+and+Concepts
tree_item_index: 100
history:
    -
        author: Solen Guitter
        date: '2016-03-04 09:12'
        message: dd link to university cours
        version: '15'
    -
        author: Solen Guitter
        date: '2015-01-26 15:12'
        message: ''
        version: '14'
    -
        author: Solen Guitter
        date: '2014-11-27 11:59'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2014-09-23 10:31'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2014-03-11 18:01'
        message: ''
        version: '11'
    -
        author: jballina
        date: '2013-03-04 21:48'
        message: ''
        version: '10'
    -
        author: jballina
        date: '2013-03-04 21:48'
        message: ''
        version: '9'
    -
        author: Alain Escaffre
        date: '2012-12-31 00:55'
        message: ''
        version: '8'
    -
        author: Alain Escaffre
        date: '2012-12-31 00:55'
        message: ''
        version: '7'
    -
        author: Benjamin Jalon
        date: '2012-11-28 11:11'
        message: ''
        version: '6'
    -
        author: Benjamin Jalon
        date: '2012-11-28 11:11'
        message: ''
        version: '5'
    -
        author: Alain Escaffre
        date: '2011-09-06 01:42'
        message: Migrated to Confluence 4.0
        version: '4'
    -
        author: Alain Escaffre
        date: '2011-09-06 01:42'
        message: ''
        version: '3'
    -
        author: Solen Guitter
        date: '2011-08-05 18:36'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2011-08-05 18:15'
        message: ''
        version: '1'

---

## What is Nuxeo Studio

{{! excerpt}}

Nuxeo Studio is a SaaS (Software as a Service) application allowing you to customize Nuxeo products, from minor details to significant changes. With its graphical user interface, you can develop real new applications from the Nuxeo Platform without writing code.

{{! /excerpt}}

Nuxeo Studio enables you to configure and design your document types, forms, workflows and everything that builds your business logic.

Nuxeo Studio facilitates not only the customization but also the deployment of the applications you develop. As part of the Nuxeo Online Services offer, Nuxeo Studio is a part of the development cycle and tool offer. Customizations can be deployed in just one click, without even restarting the server. Technically, Studio generate a single JAR file that holds all your customizations.

![](https://www.lucidchart.com/publicSegments/view/54c64fa0-9150-4b14-b7e0-572f0a009cea/image.png ?w=600,border=true)

Finally, Nuxeo Studio makes it easier to upgrade your Nuxeo-based applications, as Nuxeo Studio guarantees forward compatibility with the next release of Nuxeo Platform.

Nuxeo Studio is composed of two parts:
* Studio Modeler, where you configure your content models, business workflows and JSF UI customizations
* Studio Designer, where you configure your forms and layouts designs for Web UI

{{{multiexcerpt 'Designer-restricted-access-note' page='generic-multi-excerpts' space='nxdoc'}}}


## Why Use Nuxeo Studio

Because Nuxeo Studio is a graphical tool, you can define all your document types, views, forms, workflows without writing code or XML configuration. You can then focus on your business logic what your users need instead of spending time on development issues.

Nuxeo Studio runs consistency checks to handle errors before deployment. This saves you time and makes your customizations safer.

Nuxeo Studio makes upgrades easy because it provides auto-migration tools. The step to new technologies, like JSF2 in Nuxeo Platform 6.0, is then transparent and safe. And your business application is forward compatible with the future versions of the Nuxeo Platform.

Since you can quickly adapt the platform and safely make it evolve, Nuxeo Studio lowers the maintenance cost of your business application and makes your application easy to scale.

## What Can Be Achieved with Nuxeo Studio

Nuxeo Studio enables you to adapt the Nuxeo Platform and make it your own: Customizations can encompass superficial changes like graphical modifications to the creation of new business workflows.

Using Nuxeo Studio you can:

*   Brand your application
*   Add new document types, with new metadata and lifecycle
*   Create forms adapted to your specific document types
*   Customize the screen listing documents (content views) to display relevant business information
*   Define your own search forms
*   Add new buttons, tabs, icons in the UI
*   Create Automation chains to automatically apply simple to complex actions on documents
*   Define business workflows with manual and automated transitions, a dedicated dashboard, specific forms

## How to Get Started

Here are a list of resources to start working with Nuxeo Studio:

*   [Getting Started With Nuxeo Studio videos](https://university.nuxeo.io/nuxeo/university/#!/course/getting-started-nuxeo-studio): Our Nuxeo University course dedicated to the discovery of Nuxeo Studio
*   [Working in Studio Modeler]({{page page='working-in-studio'}}): This section of the documentation provides screen by screen descriptions of the tool
*   [Essential Nuxeo Platform Terminology]({{page space='nxdoc' page='essential-nuxeo-platform-terminology'}}): Get familiar with the concepts and terms used in the Platform
*   [Quick Start Dev Guide]({{page space='nxdoc' page='start-customizing-the-nuxeo-platform'}}): Start a Nuxeo Platform customization project using Nuxeo Studio and Nuxeo Generator

## Browser Support

Nuxeo Studio Designer and parts of Modeler make use of the recent W3C standard Web Components and Google Polymer 2.0 framework (legacy mode). The [Google Polymer framework](https://www.polymer-project.org/) comes with [polyfills for Web Components](https://www.webcomponents.org/polyfills), a library that extends the support of web components standard to more browsers.
Nevertheless, due to browser support to some shadow DOM features and third-party libraries used in Nuxeo Studio, some browsers are not supported.

Supported browsers are:
{{! multiexcerpt name='webui-supported-browsers'}}
 - Google Chrome
 - Firefox
{{! /multiexcerpt}}

{{#> callout type='warning' heading='Exceptions on Firefox'}}

Firefox is not fully supported on Nuxeo Studio Designer. Currently, view editors - with widget preview on forms - are not supported.

{{/callout}}
