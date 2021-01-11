---
title: Installing the Nuxeo Platform on macOS
description: Discover how to install Nuxeo Platform on macOS.
review:
    comment: ''
    date: '2021-01-11'
    status: ok
labels:
    - lts2016-ok
    - installation
    - pabgrall
    - multiexcerpt-include
    - lts2017-ok
toc: true
confluence:
    ajs-parent-page-id: '3866685'
    ajs-parent-page-title: Installation
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Installing+the+Nuxeo+Platform+on+Mac+OS
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Installing+the+Nuxeo+Platform+on+Mac+OS'
    page_id: '9274338'
    shortlink: 4oON
    shortlink_source: 'https://doc.nuxeo.com/x/4oON'
    source_link: /display/NXDOC/Installing+the+Nuxeo+Platform+on+Mac+OS
tree_item_index: 300
version_override:
    LTS 2015: 710/admindoc/installing-the-nuxeo-platform-on-mac-os
    '6.0': 60/admindoc/installing-the-nuxeo-platform-on-mac-os
    '5.8': 58/admindoc/installing-the-nuxeo-platform-on-mac-os
history:
    -
        author: Manon Lumeau
        date: '2016-04-20 08:45'
        message: ''
        version: '28'
    -
        author: Manon Lumeau
        date: '2016-04-20 08:43'
        message: Add homebrew step
        version: '27'
    -
        author: Manon Lumeau
        date: '2016-03-23 16:36'
        message: ''
        version: '26'
    -
        author: Alain Escaffre
        date: '2016-03-23 13:39'
        message: ''
        version: '25'
    -
        author: Manon Lumeau
        date: '2016-03-23 10:34'
        message: ''
        version: '24'
    -
        author: Solen Guitter
        date: '2015-12-01 15:57'
        message: ''
        version: '23'
    -
        author: Solen Guitter
        date: '2015-03-25 15:44'
        message: Fix broken excerpt of vm installation
        version: '22'
    -
        author: Solen Guitter
        date: '2015-02-23 14:13'
        message: ''
        version: '21'
    -
        author: Solen Guitter
        date: '2015-02-23 14:12'
        message: ''
        version: '20'
    -
        author: Solen Guitter
        date: '2014-11-26 10:51'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '19'
    -
        author: Solen Guitter
        date: '2014-11-26 10:51'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '18'
    -
        author: Solen Guitter
        date: '2014-11-26 10:51'
        message: ''
        version: '17'
    -
        author: Solen Guitter
        date: '2014-09-05 11:14'
        message: ''
        version: '16'
    -
        author: Solen Guitter
        date: '2014-09-05 11:13'
        message: Add Checking requirements section
        version: '15'
    -
        author: Solen Guitter
        date: '2013-10-14 15:59'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '14'
    -
        author: Solen Guitter
        date: '2013-10-14 15:59'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '13'
    -
        author: Solen Guitter
        date: '2013-10-14 15:59'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '12'
    -
        author: Solen Guitter
        date: '2013-10-14 15:59'
        message: ''
        version: '11'
    -
        author: Solen Guitter
        date: '2013-05-28 14:33'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2013-05-28 14:33'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2013-05-28 11:47'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2012-03-28 17:24'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '7'
    -
        author: Solen Guitter
        date: '2012-03-28 17:24'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '6'
    -
        author: Solen Guitter
        date: '2012-03-28 17:24'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '5'
    -
        author: Solen Guitter
        date: '2012-03-28 17:24'
        message: Migrated to Confluence 4.0
        version: '4'
    -
        author: Solen Guitter
        date: '2012-03-28 17:24'
        message: ''
        version: '3'
    -
        author: Solen Guitter
        date: '2011-12-12 23:56'
        message: Added links to next steps
        version: '2'
    -
        author: Solen Guitter
        date: '2011-12-07 11:39'
        message: ''
        version: '1'

---

## Checking Requirements

First, have a look at the detailed steps to [check your Java version]({{page page='tomcat-server-zip'}}#java-check) and install it.

## Installing the Nuxeo Platform From the ZIP Archive

**To install the Nuxeo Platform:**

Download the [ZIP](https://packages.nuxeo.com/repository/maven-public/org/nuxeo/ecm/distribution/nuxeo-server-tomcat/11.4.42/nuxeo-server-tomcat-11.4.42.zip) archive and unzip it using your favorite tool.

**What's next?**
Do you want to evaluate the platform? You can now [start the server]({{page page='server-start-and-stop'}}).
You want to do a complete installation, that is compatible for a production environment? You should [prepare your environment]({{page page='setup-best-practices'}}) now.

* * *

<div class="row" data-equalizer data-equalize-on="medium">
<div class="column medium-6">
{{#> panel heading='Next Steps'}}

- [Setup Best Practices]({{page page='setup-best-practices'}})
- [Server Start and Stop]({{page page='server-start-and-stop'}})

{{/panel}}
</div>
<div class="column medium-6">
{{#> panel heading='Getting Familiar with the Nuxeo Platform'}}

- [Essential Nuxeo Platform Terminology]({{page page='essential-nuxeo-platform-terminology'}})
- [Discover Nuxeo Platform APIs]({{page page='discover-nuxeo-platform-apis'}})

{{/panel}}
</div>
</div>
