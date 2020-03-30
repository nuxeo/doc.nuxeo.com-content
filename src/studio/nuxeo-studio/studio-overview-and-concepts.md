---
title: Studio Overview
review:
  comment: ''
  date: '2019-05-15'
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
  - author: Solen Guitter
    date: '2016-03-04 09:12'
    message: dd link to university cours
    version: '15'
  - author: Solen Guitter
    date: '2015-01-26 15:12'
    message: ''
    version: '14'
  - author: Solen Guitter
    date: '2014-11-27 11:59'
    message: ''
    version: '13'
  - author: Solen Guitter
    date: '2014-09-23 10:31'
    message: ''
    version: '12'
  - author: Solen Guitter
    date: '2014-03-11 18:01'
    message: ''
    version: '11'
  - author: jballina
    date: '2013-03-04 21:48'
    message: ''
    version: '10'
  - author: jballina
    date: '2013-03-04 21:48'
    message: ''
    version: '9'
  - author: Alain Escaffre
    date: '2012-12-31 00:55'
    message: ''
    version: '8'
  - author: Alain Escaffre
    date: '2012-12-31 00:55'
    message: ''
    version: '7'
  - author: Benjamin Jalon
    date: '2012-11-28 11:11'
    message: ''
    version: '6'
  - author: Benjamin Jalon
    date: '2012-11-28 11:11'
    message: ''
    version: '5'
  - author: Alain Escaffre
    date: '2011-09-06 01:42'
    message: Migrated to Confluence 4.0
    version: '4'
  - author: Alain Escaffre
    date: '2011-09-06 01:42'
    message: ''
    version: '3'
  - author: Solen Guitter
    date: '2011-08-05 18:36'
    message: ''
    version: '2'
  - author: Solen Guitter
    date: '2011-08-05 18:15'
    message: ''
    version: '1'
---

{{! excerpt}}
Nuxeo Studio allows you to configure the Nuxeo Platform easily. It's part of Nuxeo Online Services, hosted on the Cloud and maintained by Nuxeo.
{{! /excerpt}}

It allows application builders to get an easy-to-use, wizard based, graphical interface where they can define business objects, types of content, workflows, taxonomy, and user interfaces. Users with more technical knowledge can add even more advanced configurations with XML extensions, Javascript code, or custom HTML pages.

Solution designers are able to create a consistent configuration thanks to real-time checks warning of any errors or missing configuration points and uses an auto-completion system to guide you through your implementation work.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Studio Overview and Concepts/nuxeo-studio-overview.png
    name: nuxeo-studio-overview.png
    studio_modeler#screenshot#up_to_date
--}}
![nuxeo-studio-overview.png](nx_asset://be6530f5-6a98-460a-99f8-637eaa546a3b ?w=650,border=true)

<div class="row" data-equalizer data-equalize-on="medium">
<div class="column medium-4" align="center">
{{#> panel type='primary' match_height='true'}}
**Configure**</br>
Configure and design the core logic and user interface of your application.
{{/panel}}
</div>
<div class="column medium-4" align="center">
{{#> panel type='primary' match_height='true'}}
**Deploy**</br>
Deploy your configurations in a click with our hot reload mechanism.
{{/panel}}
</div>
<div class="column medium-4" align="center">
{{#> panel type='primary' match_height='true'}}
**Upgrade**</br>
Evolve safely, configurations compatibility with future versions is guaranteed.
{{/panel}}
</div>
</div>

## Getting Started
&nbsp;
<div class="row" data-equalizer data-equalize-on="medium">
<div class="column medium-6" align="center">
{{#> panel type='secondary' match_height='true'}}
### [Nuxeo Studio Quickstart](https://university.nuxeo.com/learn/course/external/view/elearning/143/NuxeoPlatformQuickstart)
Our Nuxeo University video dedicated to the discovery of Nuxeo Studio.
{{/panel}}
</div>
<div class="column medium-6" align="center">
{{#> panel type='secondary' match_height='true'}}
### [Configure Nuxeo Platform]({{page space='nxdoc' page='configure-nuxeo-platform'}})
Start configuring a Nuxeo Platform project with this tutorial.
{{/panel}}
</div>
<div class="column medium-6" align="center">
{{#> panel type='secondary' match_height='true'}}
### [Studio Modeler]({{page page='working-in-studio'}})
Configure your content models and business workflows.
{{/panel}}
</div>
<div class="column medium-6" align="center">
{{#> panel type='secondary' match_height='true'}}
### [Studio Designer]({{page page='working-in-view-designer'}})
Configure your forms and layouts designs for Web UI.
{{/panel}}
</div>
</div>

## Making Nuxeo Platform Your Own

When creating a new application, the usual configuration steps are:
1. [Brand your application]({{page version='' space='studio' page='branding'}})
1. [Add new document types, with new metadata and lifecycle]({{page version='' space='studio' page='content-model'}})
1. [Create forms tailored to your document types]({{page version='' space='studio' page='form-layouts'}})
1. [Define your own search forms]({{page version='' space='studio' page='search-advanced-search'}})
1. [Add new buttons, tabs, icons in the UI]({{page version='' space='studio' page='user-actions'}})
1. [Automatize simple to complex actions on documents]({{page version='' space='studio' page='automation'}})
1. [Define business workflows with manual and automated transitions, a dedicated dashboard, specific forms]({{page version='' space='studio' page='workflows'}})

## Browser Support

<!--Nuxeo Studio Designer and parts of Modeler use the recent W3C standard Web Components and Google Polymer framework (legacy mode). The [Google Polymer framework](https://www.polymer-project.org/) comes with [polyfills for Web Components](https://www.webcomponents.org/polyfills), a library that extends the support of web components standard to more browsers.
Nevertheless, due to browser support to some shadow DOM features and third-party libraries used in Nuxeo Studio, some browsers are not supported.-->

Nuxeo Studio supports the latest stable version of the following browsers:
{{! multiexcerpt name='webui-supported-browsers'}}
 - Google Chrome
 - Firefox
 - <a href="https://www.mozilla.org/en-US/firefox/enterprise/" target="_blank">Firefox ESR</a>
{{! /multiexcerpt}}
<!--
{{#> callout type='warning' heading='Exceptions on Firefox'}}
Firefox is not fully supported on Nuxeo Studio Designer. Currently, view editors - with widget preview on forms - are not supported.
{{/callout}}
-->
