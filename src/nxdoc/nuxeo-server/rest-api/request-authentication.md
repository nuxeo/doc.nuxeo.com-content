---
title: Request Authentication
review:
    comment: ''
    date: '2017-01-11'
    status: ok
labels:
    - lts2016-ok
    - authentication
version_override:
    LTS 2015: 710/nxdoc/authenticating-the-requests/
    '6.0': 60/nxdoc/authenticating-the-requests/
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

See [Authentication and User Management]({{page page='authentication-and-user-management'}}) for a comprehensive view on authentication possibilities with Nuxeo Platform. You should note that by default, the authentication chain used for API calls is [contributed via a specific endpoint](http://explorer.nuxeo.com/nuxeo/site/distribution/latest/viewExtensionPoint/org.nuxeo.ecm.platform.ui.web.auth.service.PluggableAuthenticationService--specificChains) (and [one for command calls specifically](http://explorer.nuxeo.com/nuxeo/site/distribution/latest/viewContribution/org.nuxeo.ecm.automation.server.auth.config--specificChains)).
