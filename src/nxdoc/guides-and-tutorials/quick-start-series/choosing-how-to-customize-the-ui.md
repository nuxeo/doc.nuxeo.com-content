---
title: Choosing How to Customize the UI
labels:
    - content-review-lts2015
toc: true
confluence:
    ajs-parent-page-id: '28475558'
    ajs-parent-page-title: Quick Start Series
    ajs-space-key: NXDOC710
    ajs-space-name: Nuxeo Platform Developer Documentation — LTS 2015
    canonical: Choosing+How+to+Customize+the+UI
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC710/Choosing+How+to+Customize+the+UI'
    page_id: '28475516'
    shortlink: fICyAQ
    shortlink_source: 'https://doc.nuxeo.com/x/fICyAQ'
    source_link: /display/NXDOC710/Choosing+How+to+Customize+the+UI
history:
    - 
        author: Solen Guitter
        date: '2014-09-19 14:45'
        message: ''
        version: '26'
    - 
        author: Solen Guitter
        date: '2013-12-10 15:31'
        message: ''
        version: '25'
    - 
        author: Solen Guitter
        date: '2013-09-19 18:31'
        message: ''
        version: '24'
    - 
        author: Alain Escaffre
        date: '2013-09-17 18:30'
        message: ''
        version: '23'
    - 
        author: Alain Escaffre
        date: '2013-09-16 18:26'
        message: ''
        version: '22'
    - 
        author: Alain Escaffre
        date: '2013-09-16 18:26'
        message: ''
        version: '21'
    - 
        author: Alain Escaffre
        date: '2013-09-16 18:24'
        message: ''
        version: '20'
    - 
        author: Alain Escaffre
        date: '2013-09-16 18:20'
        message: ''
        version: '19'
    - 
        author: Alain Escaffre
        date: '2013-09-16 18:19'
        message: ''
        version: '18'
    - 
        author: Alain Escaffre
        date: '2013-09-16 18:17'
        message: ''
        version: '17'
    - 
        author: Alain Escaffre
        date: '2013-09-16 15:53'
        message: ''
        version: '16'
    - 
        author: Solen Guitter
        date: '2013-09-04 14:53'
        message: ''
        version: '15'
    - 
        author: Solen Guitter
        date: '2013-09-04 14:52'
        message: Formatting
        version: '14'
    - 
        author: Solen Guitter
        date: '2013-04-08 18:24'
        message: Updated JBoss RichFaces version
        version: '13'
    - 
        author: Solen Guitter
        date: '2012-05-16 11:25'
        message: Migrated to Confluence 4.0
        version: '12'
    - 
        author: Solen Guitter
        date: '2012-05-16 11:25'
        message: Fixed link
        version: '11'
    - 
        author: Solen Guitter
        date: '2011-03-04 19:20'
        message: ''
        version: '10'
    - 
        author: Solen Guitter
        date: '2011-01-06 18:29'
        message: ''
        version: '9'
    - 
        author: Stéfane Fermigier
        date: '2010-12-30 11:52'
        message: ''
        version: '8'
    - 
        author: Stéfane Fermigier
        date: '2010-12-30 11:52'
        message: ''
        version: '7'
    - 
        author: Stéfane Fermigier
        date: '2010-06-28 08:19'
        message: ''
        version: '6'
    - 
        author: Solen Guitter
        date: '2010-05-20 17:49'
        message: formatting and typos
        version: '5'
    - 
        author: Thierry Delprat
        date: '2010-04-27 11:16'
        message: ''
        version: '4'
    - 
        author: Thierry Delprat
        date: '2010-04-27 11:13'
        message: ''
        version: '3'
    - 
        author: Thierry Delprat
        date: '2010-04-27 11:10'
        message: ''
        version: '2'
    - 
        author: Admin name placeholder
        date: '2010-02-26 10:25'
        message: ''
        version: '1'

---
{{! excerpt}}

The Nuxeo Platform proposes different technologies for the client side of the application. The choice of one technology vs. another depends on both the project's stakes and its context.

{{! /excerpt}}

You mainly have two strategies for the UI you will propose to your users:

*   Either [customize the existing web application](#seam-jsf), which is JSF/SEAM based. You'll be able to reach a great customization point by just using [Studio]({{page space='studio'}}), and you will also be able to extend it writing your own facelets (XHTML) templates and Seam components. In this approach, you can keep the standard layout and just add your "business" flavor from Studio, but you can also completely redesign the layout, as some of the Nuxeo Platform users did.
*   Or [write your own application](#own-application) UI with the technology of your choice, using our APIs and client SDKs.

## {{> anchor 'seam-jsf'}}Customizing the Back Office

The Nuxeo Platform's default web UI is based on JSF (a Java EE standard) for the UI component model, and Seam for the navigation and context management. This application is designed to be extended, at every corner: theme, layout, forms, tabs, URLs using our extension point system, and extended using the web app core technologies.

**Key points:**
The Nuxeo Platform's JSF interface is fully modular and very easy to customize:

*   Highly configurable via Nuxeo Studio,
*   Resilient: this application is the result of 7 years of continuous development and improvements. It has been tested on thousands of projects, each one bringing its own constraints.
*   Great forms framework, configurable document listings, etc.

**Typical use case:**

*   Business application,
*   Document management back office.

More information on the&nbsp;[Studio]({{page space='studio' page='nuxeo-online-services'}})&nbsp;space and on the "[Web UI Framework]({{page page='web-ui-framework'}})" section.

## {{> anchor 'own-application'}}Front Apps

The Nuxeo Platform can be seen as a complete remote repository exposing all its features via APIs. In that case, you are the one who chooses your UI framework. Indeed, you can wrap the repository behind:

*   An HTML5/JavaScript based application using for instance AngularJS , or any other JavaScript framework (AmberJS, node.js, ...), using our [JavaScript client]({{page page='javascript-client'}});
*   A Java portal, such as Liferay, JBoss Portal, Jahia, uPortal, ... You can use Nuxeo Java client for implementing portlets that will have interactions with the repository;
*   Any other technology, such as PHP, Ruby on Rails, ... using our [REST API]({{page page='rest-api'}}) directly.

With this approach you will of course have more developments to do on the UI, but you will be free to use the technology of your choice, and to be as crazy as you want in terms of UI layout.

## {{> anchor 'webengine'}}Nuxeo WebEngine

Nuxeo WebEngine is a light web framework provided by the Nuxeo Platform. You can use it for implementing new UIs. For that reasons, we could have put it in the "Write your own application" category, but since the framework is edited by Nuxeo, let's have a dedicated section :smile:

**Technologies:**

*   JAX-RS style
*   FreeMarker,
*   Java scripting (Groovy or other).

**Key points:**
Nuxeo WebEngine enables web developers to easily create a customized web interface on top of the Nuxeo Platform. Nuxeo WebEngine consumes URLs and for each segment of the URL instantiates a Java object that is in charge of consuming the remaining part of the URL and also return the web page at some point.

*   Simple template engine based on FreeMarker
*   Direct and easy access to HTML,
*   Java scripting support

**Typical use case:**
Nuxeo WebEngine is designed to expose the Nuxeo Platform's managed content in a web experience. In many cases, the JSF interface is used for the back office management while Nuxeo WebEngine provides the front office interface. Furthermore, with the JAX-RS support, Nuxeo WebEngine allows rapid creation of REST applications on top of the Nuxeo Platform.&nbsp;

{{#> callout type='info' heading='WebEngine is a light framework'}} Nuxeo WebEngine is a web-framework because it provides you with a way to structure how you implement the standard "MVC" pattern. But it is light because it doesn't provide any widgets library, any collection of ready to use templates, etc. Nuxeo aims at letting this framework as light as it is now and encourage users to leverage popular web framework when requiring many UI components. Actually, Nuxeo WebEngine is light enough to be easily used in parallel of those JavaScript framework. {{/callout}}

&nbsp;

* * *