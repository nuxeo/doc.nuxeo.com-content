---
title: Request Authentication
review:
    comment: ''
    date: '2017-01-11'
    status: ok
labels:
    - lts2016-ok
    - authentication
    - dmetzler
    - content-review-lts2017
version_override:
    LTS 2015: 710/nxdoc/authenticating-the-requests/
    '6.0': 60/nxdoc/authenticating-the-requests/
confluence:
    ajs-parent-page-id: '13664833'
    ajs-parent-page-title: REST API
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Authenticating+the+Requests
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Authenticating+the+Requests'
    page_id: '18450397'
    shortlink: 3YcZAQ
    shortlink_source: 'https://doc.nuxeo.com/x/3YcZAQ'
    source_link: /display/NXDOC/Authenticating+the+Requests
tree_item_index: 700
history:
    -
        author: Solen Guitter
        date: '2016-08-30 12:46'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2015-10-12 10:22'
        message: ''
        version: '8'
    -
        author: Alain Escaffre
        date: '2015-09-22 00:26'
        message: ''
        version: '7'
    -
        author: Alain Escaffre
        date: '2015-09-22 00:25'
        message: ''
        version: '6'
    -
        author: Alain Escaffre
        date: '2015-09-22 00:24'
        message: ''
        version: '5'
    -
        author: Manon Lumeau
        date: '2015-07-01 08:46'
        message: ''
        version: '4'
    -
        author: Alain Escaffre
        date: '2014-07-03 02:37'
        message: ''
        version: '3'
    -
        author: Alain Escaffre
        date: '2014-02-10 18:25'
        message: ''
        version: '2'
    -
        author: Alain Escaffre
        date: '2014-02-10 16:46'
        message: ''
        version: '1'

---
Request authentication depends on the configured authentication chain. Default authentication mode for API calls is Basic Authentication.

See [Authentication and User Management]({{page page='authentication-and-user-management'}}) for a comprehensive view on authentication possibilities with Nuxeo Platform. You should note that by default, the authentication chain used for API calls is [contributed via a specific endpoint](http://explorer.nuxeo.com/nuxeo/site/distribution/10.10/viewExtensionPoint/org.nuxeo.ecm.platform.ui.web.auth.service.PluggableAuthenticationService--specificChains) (and [one for command calls specifically](http://explorer.nuxeo.com/nuxeo/site/distribution/10.10/viewContribution/org.nuxeo.ecm.automation.server.auth.config--specificChains)).
