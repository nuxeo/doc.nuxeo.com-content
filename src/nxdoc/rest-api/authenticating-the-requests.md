---
title: Authenticating the Requests
review:
    comment: ''
    date: ''
    status: ok
labels:
    - lts2015-ok
version_override:
    'FT': '/nxdoc/request-authentication'
    'LTS 2016': 810/nxdoc/request-authentication
confluence:
    ajs-parent-page-id: '28475677'
    ajs-parent-page-title: REST API
    ajs-space-key: NXDOC710
    ajs-space-name: Nuxeo Platform Developer Documentation — LTS 2015
    canonical: Authenticating+the+Requests
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC710/Authenticating+the+Requests'
    page_id: '28475512'
    shortlink: eICyAQ
    shortlink_source: 'https://doc.nuxeo.com/x/eICyAQ'
    source_link: /display/NXDOC710/Authenticating+the+Requests
tree_item_index: 100
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
Authenticating the request will be dependent of the configured authentication chain. Default authentication mode for API calls is Basic authentication.

See [Authentication and User Management]({{page page='authentication-and-user-management'}}) for a comprehensive view of authentication possibilities with Nuxeo Platform. Also, you should pay attention that by default, the authentication chain used for API calls is [contributed via a specific endpoint](http://explorer.nuxeo.com/nuxeo/site/distribution/7.10/viewExtensionPoint/org.nuxeo.ecm.platform.ui.web.auth.service.PluggableAuthenticationService--specificChains) (and even [another one](http://explorer.nuxeo.com/nuxeo/site/distribution/7.10/viewContribution/org.nuxeo.ecm.automation.server.auth.config--specificChains) for command calls specifically).
