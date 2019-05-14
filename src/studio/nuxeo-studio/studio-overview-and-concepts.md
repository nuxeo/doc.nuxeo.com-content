---
title: Studio Overview
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
Nuxeo Studio is a SaaS (Software as a Service) application to configure the Nuxeo Platform easily which enables to develop new applications without writing code.
{{! /excerpt}}

Since you can quickly configure the platform and safely make it evolve, Nuxeo Studio lowers the maintenance cost of your business applications and makes them easy to scale.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Studio Overview and Concepts/One-click Deployment
    name: one-click-deployment.png
    studio_modeler#screenshot#up_to_date
--}}
![One-click Deployment ](nx_asset://071fbee4-5994-4ac0-aac6-540656b7f269 ?w=650,border=true)
<!--![](https://www.lucidchart.com/publicSegments/view/54c64fa0-9150-4b14-b7e0-572f0a009cea/image.png ?w=600,border=true)-->

<div class="row" data-equalizer data-equalize-on="medium">
<div class="column medium-4" align="center">
{{#> panel type='primary' match_height='true'}}
**Configure**</br>
Configure and design everything that builds your business logic without code or XML configuration, preventing time-consuming development issues.
{{/panel}}
</div>
<div class="column medium-4" align="center">
{{#> panel type='primary' match_height='true'}}
**Deploy**</br>
Deploy your configurations in a click. You don't even need to restart your server. Studio generates a single JAR file that holds all your configurations.
{{/panel}}
</div>
<div class="column medium-4" align="center">
{{#> panel type='primary' match_height='true'}}
**Upgrade**</br>
Evolve safely. Configurations compatibility with future versions is guaranteed. Auto-migration process and consistency checks ensure a safe path to new technologies.
{{/panel}}
</div>
</div>

## Getting Started
&nbsp;
<div class="row" data-equalizer data-equalize-on="medium">
<div class="column medium-6" align="center">
{{#> panel type='secondary' match_height='true'}}
### [Nuxeo Studio Video](https://university.nuxeo.com/learn/public/course/view/elearning/142/nuxeo-platform-quickstart-nuxeo-studio-concepts)
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

- [Brand your application]({{page version='' space='studio' page='branding'}})
- [Add new document types, with new metadata and lifecycle]({{page version='' space='studio' page='content-model'}})
- [Create forms tailored to your document types]({{page version='' space='studio' page='form-layouts'}})
- [Define your own search forms]({{page version='' space='studio' page='search-advanced-search'}})
- [Add new buttons, tabs, icons in the UI]({{page version='' space='studio' page='user-actions'}})
- [Automatize simple to complex actions on documents]({{page version='' space='studio' page='automation'}})
- [Define business workflows with manual and automated transitions, a dedicated dashboard, specific forms]({{page version='' space='studio' page='workflows'}})

## Browser Support

Nuxeo Studio Designer and parts of Modeler use the recent W3C standard Web Components and Google Polymer framework (legacy mode). The [Google Polymer framework](https://www.polymer-project.org/) comes with [polyfills for Web Components](https://www.webcomponents.org/polyfills), a library that extends the support of web components standard to more browsers.
Nevertheless, due to browser support to some shadow DOM features and third-party libraries used in Nuxeo Studio, some browsers are not supported.

Supported browsers are:
{{! multiexcerpt name='webui-supported-browsers'}}
 - Google Chrome
 - Firefox
{{! /multiexcerpt}}

{{#> callout type='warning' heading='Exceptions on Firefox'}}
Firefox is not fully supported on Nuxeo Studio Designer. Currently, view editors - with widget preview on forms - are not supported.
{{/callout}}
