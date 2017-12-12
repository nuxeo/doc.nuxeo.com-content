---
title: Nuxeo Connect Report Tools Web
review:
    comment: ''
    date: '2016-12-09'
    status: ok
toc: true
labels:
    - lts2016-ok
    - lts2017-ok
confluence:
    ajs-parent-page-id: '16089349'
    ajs-parent-page-title: Nuxeo Add-Ons
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Nuxeo+Connect+Report+Tools
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Nuxeo+Connect+Report+Tools'
    page_id: '31687410'
    shortlink: 8oLjAQ
    shortlink_source: 'https://doc.nuxeo.com/x/8oLjAQ'
    source_link: /display/NXDOC/Nuxeo+Connect+Report+Tools
tree_item_index: 3600
history:
    -
        author: Solen Guitter
        date: '2016-07-21 12:22'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2016-07-21 11:53'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2016-07-21 10:06'
        message: ''
        version: '3'
    -
        author: Solen Guitter
        date: '2016-07-21 09:46'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2016-07-21 09:46'
        message: ''
        version: '1'

---
[Nuxeo Connect Report Tools Web](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-connect-tools-report-web) is a Nuxeo addon that provides a graphical interface to use the [nuxeoctl command]({{page version='' space='nxdoc' page='nuxeoctl-and-control-panel-usage'}}) `connect-report`. This command is available by default in the Nuxeo Platform and enables you to gather information that can be useful to understand the environment in which a bug or a problem can be reproduced.

## Installation

{{{multiexcerpt 'MP-installation-easy' page='Generic Multi-Excerpts'}}}

## Functional Overview

The `nuxeoctl connect-report` command and the Nuxeo Command Report Tools Web user interface gather information about your Nuxeo Platform server in a JSON file, so that you can easily forward this information to the Nuxeo support team.

The concatenated information include:

*   Information about your server version
*   The list of Nuxeo Packages on your server
*   Environment information via JVM MBeans
*   Information about your server configuration (templates, etc.)
*   The list of contributions deployed on your server

As an administrator, go to `http://NUXEO_SERVER/nuxeo/site/connect-tools/` and follow the instructions displayed.
