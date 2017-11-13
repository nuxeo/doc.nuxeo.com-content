---
title: Basic HTTP Authentication
review:
    comment: ''
    date: '2016-12-14'
    status: ok
toc: true
tree_item_index: 110
labels:
    - content-review-lts2017

---
This plugin supports standard HTTP Basic Authentication. By default, this plugin only generates the authentication prompt on configured URLs.

Basic authentication is part of the default authentication chain which is defined by the contribution accessible [on the explorer](http://explorer.nuxeo.com/nuxeo/site/distribution/Nuxeo%20Platform%20LTS%202016-8.10/viewExtensionPoint/org.nuxeo.ecm.platform.ui.web.auth.service.PluggableAuthenticationService--chain).
