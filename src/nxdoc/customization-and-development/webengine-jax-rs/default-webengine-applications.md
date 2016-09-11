---
title: Default WebEngine Applications
review:
    comment: ''
    date: ''
    status: ok
labels:
    - url
confluence:
    ajs-parent-page-id: '17334372'
    ajs-parent-page-title: WebEngine (JAX-RS)
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Default+WebEngine+Applications
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/Default+WebEngine+Applications'
    page_id: '18449714'
    shortlink: MoUZAQ
    shortlink_source: 'https://doc.nuxeo.com/x/MoUZAQ'
    source_link: /display/NXDOC58/Default+WebEngine+Applications
history:
    - 
        author: Solen Guitter
        date: '2016-08-31 15:47'
        message: ''
        version: '6'
    - 
        author: Solen Guitter
        date: '2014-01-23 18:21'
        message: ''
        version: '5'
    - 
        author: Solen Guitter
        date: '2014-01-23 18:20'
        message: ''
        version: '4'
    - 
        author: Solen Guitter
        date: '2014-01-23 18:19'
        message: ''
        version: '3'
    - 
        author: Solen Guitter
        date: '2014-01-22 17:58'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2014-01-22 17:57'
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
*   `/nuxeo/site/shell`: [Nuxeo Shell]({{page space='admindoc58' page='nuxeo-shell'}}) applet
*   `/nuxeo/site/layout-manager`: [Layouts and Widgets (Forms, Listings, Grids)]({{page page='layouts-and-widgets-forms-listings-grids'}}) services and documentation

Depending on the addons you've installed, you could also expose these URLs:

*   /`nuxeo/site/mobile`: URL for the mobile application
*   `/nuxeo/site/sites`: WebEngine front-end for Site (mini-site) documents
*   `/nuxeo/site/blogs`: WebEngine front-end for Blog documents

&nbsp;

* * *