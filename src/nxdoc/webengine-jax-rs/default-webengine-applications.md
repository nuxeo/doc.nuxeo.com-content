---
title: Default WebEngine Applications
review:
    comment: ''
    date: ''
    status: ok
labels:
    - lts2015-ok
    - webengine-component
    - url
confluence:
    ajs-parent-page-id: '28475517'
    ajs-parent-page-title: WebEngine (JAX-RS)
    ajs-space-key: NXDOC710
    ajs-space-name: Nuxeo Platform Developer Documentation — LTS 2015
    canonical: Default+WebEngine+Applications
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC710/Default+WebEngine+Applications'
    page_id: '28475773'
    shortlink: fYGyAQ
    shortlink_source: 'https://doc.nuxeo.com/x/fYGyAQ'
    source_link: /display/NXDOC710/Default+WebEngine+Applications
history:
    - 
        author: Solen Guitter
        date: '2016-08-31 15:47'
        message: ''
        version: '11'
    - 
        author: Anahide Tchertchian
        date: '2015-12-08 11:13'
        message: remove deprecated wbengine sites and blogs mentions
        version: '10'
    - 
        author: Solen Guitter
        date: '2014-01-23 18:21'
        message: ''
        version: '9'
    - 
        author: Solen Guitter
        date: '2014-01-22 17:59'
        message: ''
        version: '8'
    - 
        author: Julien Carsique
        date: '2013-12-06 18:17'
        message: ''
        version: '7'
    - 
        author: Anahide Tchertchian
        date: '2013-12-06 18:04'
        message: remove mention of theme-banks
        version: '6'
    - 
        author: Julien Carsique
        date: '2013-12-05 12:11'
        message: ''
        version: '5'
    - 
        author: Anahide Tchertchian
        date: '2013-12-04 18:01'
        message: menton layout-manager webengine URL
        version: '4'
    - 
        author: Anahide Tchertchian
        date: '2013-12-04 17:41'
        message: add WIP info
        version: '3'
    - 
        author: Anahide Tchertchian
        date: '2013-12-04 17:39'
        message: adding list of default URLs for default webengine apps
        version: '2'
    - 
        author: Anahide Tchertchian
        date: '2013-12-03 15:59'
        message: ''
        version: '1'

---
{{#> callout type='info' }}

This page is a work in progress. See [NXDOC-229](https://jira.nuxeo.com/browse/NXDOC-229) for details.

{{/callout}}

URLs exposed by WebEngine module are of the form `/nuxeo/site/*` (where * is a service offered by a WebEngine module):

*   `/nuxeo/site`: root page listing the "available&nbsp;WebEngine applications"
*   `/nuxeo/site/admin`: simple WebEngine UI to access administrative features
*   `/nuxeo/site/automation`: base URL for Automation services, documentation is available at `/nuxeo/site/automation/doc`
*   `/nuxeo/site/gadgets`: base URL for gadgets Rest requests
*   `/nuxeo/site/dav`: WebDAV service
*   `/nuxeo/site/connectClient`: URL to request Nuxeo Connect services (packages lists, registration ...)
*   `/nuxeo/site/shell`: [Nuxeo Shell]({{page space='admindoc710' page='nuxeo-shell'}}) applet
*   `/nuxeo/site/layout-manager`: [Layouts and Widgets (Forms, Listings, Grids)]({{page page='layouts-and-widgets-forms-listings-grids'}}) services and documentation

Depending on the addons you've installed, you could also expose these URLs:

*   `/nuxeo/site/mobile`: URL for the mobile application

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related topics'}}

*   [WebEngine (JAX-RS)]({{page page='webengine-jax-rs'}})
*   [Navigation URLs]({{page page='navigation-urls'}})

{{/panel}}</div><div class="column medium-6">null</div></div>