---
title: Nuxeo Connect Report Tools
review:
    comment: ''
    date: '2016-12-09'
    status: ok
toc: true
labels:
    - content-review-lts2016
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
Nuxeo Connect Report Tools is a set of Nuxeo addons that enable you to gather information that can be useful to understand the environment in which a bug or a problem can be reproduced. Two Nuxeo Packages are available:

*   [Nuxeo Connect Report Tools](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-connect-tools-report), that provide a new [`nuxeoctl`]({{page page='nuxeoctl-and-control-panel-usage'}}) command
*   [Nuxeo Connect Report Tools Web](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-connect-tools-report-web) that provides a graphical interface to use the `nuxeoctl` command

## Installation

{{{multiexcerpt 'MP-installation-easy' page='Generic Multi-Excerpts'}}}

## Functional Overview

Nuxeo Connect Report Tools packages gather information about your Nuxeo Platform server in a JSON file, so that you can easily forward this information to the Nuxeo support team.

The concatenated information include:

*   Information about your server version
*   The list of Nuxeo Packages on your server
*   Environment information via JVM MBeans
*   Information about your server configuration (templates, etc.)
*   The list of contributions deployed on your server

**Getting a Report Using nuxeoctl**

In a terminal run:

```
$ nuxeoctl connect-report
```

The report JSON file is generated. The location of the report is indicated in the terminal.

**Getting a Report Using the User Interface**

As an administrator, go to&nbsp;`http://NUXEO_SERVER/nuxeo/site/connect-tools/` and follow the instructions displayed.
