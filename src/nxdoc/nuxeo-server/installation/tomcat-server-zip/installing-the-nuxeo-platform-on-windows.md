---
title: Installing the Nuxeo Platform on Windows
description: Discover how to install Nuxeo Platform on Windows.
review:
    comment: ''
    date: '2021-01-11'
    status: ok
labels:
    - lts2016-ok
    - install-windows
    - pabgrall
    - multiexcerpt
    - lts2017-ok
toc: true
confluence:
    ajs-parent-page-id: '3866685'
    ajs-parent-page-title: Installation
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Installing+the+Nuxeo+Platform+on+Windows
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Installing+the+Nuxeo+Platform+on+Windows'
    page_id: '9274329'
    shortlink: 2YON
    shortlink_source: 'https://doc.nuxeo.com/x/2YON'
    source_link: /display/NXDOC/Installing+the+Nuxeo+Platform+on+Windows
tree_item_index: 400
version_override:
    LTS 2015: 710/admindoc/installing-the-nuxeo-platform-on-windows
    '6.0': 60/admindoc/installing-the-nuxeo-platform-on-windows
    '5.8': 58/admindoc/installing-the-nuxeo-platform-on-windows
history:
    -
        author: Manon Lumeau
        date: '2016-07-22 15:52'
        message: ''
        version: '38'
    -
        author: Alain Escaffre
        date: '2016-03-23 13:41'
        message: ''
        version: '37'
    -
        author: Manon Lumeau
        date: '2016-03-23 10:34'
        message: ''
        version: '36'
    -
        author: Julien Carsique
        date: '2015-11-17 15:51'
        message: ''
        version: '35'
    -
        author: Solen Guitter
        date: '2015-02-23 14:29'
        message: ''
        version: '34'
    -
        author: Solen Guitter
        date: '2015-02-23 14:29'
        message: ''
        version: '33'
    -
        author: Solen Guitter
        date: '2015-02-23 14:16'
        message: ''
        version: '32'
    -
        author: Solen Guitter
        date: '2014-11-26 14:06'
        message: ''
        version: '31'
    -
        author: Solen Guitter
        date: '2014-11-26 10:59'
        message: ''
        version: '30'
    -
        author: Solen Guitter
        date: '2014-10-31 15:28'
        message: Only 1 ovf file remains
        version: '29'
    -
        author: Solen Guitter
        date: '2014-10-31 15:01'
        message: Added limitations on VM installation
        version: '28'
    -
        author: Solen Guitter
        date: '2014-10-31 14:53'
        message: ''
        version: '27'
    -
        author: Solen Guitter
        date: '2014-09-05 11:23'
        message: Add Checking requirements section
        version: '26'
    -
        author: Solen Guitter
        date: '2013-10-15 11:14'
        message: ''
        version: '25'
    -
        author: Harlan Brown
        date: '2013-10-14 16:27'
        message: ''
        version: '24'
    -
        author: Harlan Brown
        date: '2013-10-14 16:13'
        message: ''
        version: '23'
    -
        author: Solen Guitter
        date: '2013-10-14 16:00'
        message: ''
        version: '22'
    -
        author: Harlan Brown
        date: '2013-10-14 15:52'
        message: ''
        version: '21'
    -
        author: Solen Guitter
        date: '2013-10-10 16:23'
        message: ''
        version: '20'
    -
        author: Mathieu Guillaume
        date: '2013-08-23 16:31'
        message: ''
        version: '19'
    -
        author: Thibaud Arguillere
        date: '2013-07-03 14:37'
        message: ''
        version: '18'
    -
        author: Solen Guitter
        date: '2013-07-03 11:19'
        message: "Changed recommended path installation from root of C:\\ to root of any disk"
        version: '17'
    -
        author: Solen Guitter
        date: '2013-05-28 14:31'
        message: ''
        version: '16'
    -
        author: Solen Guitter
        date: '2013-05-28 14:31'
        message: ''
        version: '15'
    -
        author: Solen Guitter
        date: '2013-05-28 14:30'
        message: ''
        version: '14'
    -
        author: Solen Guitter
        date: '2013-05-28 11:45'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2012-11-28 09:12'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '12'
    -
        author: Solen Guitter
        date: '2012-11-28 09:12'
        message: ''
        version: '11'
    -
        author: Solen Guitter
        date: '2011-12-14 11:45'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '10'
    -
        author: Solen Guitter
        date: '2011-12-14 11:45'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '9'
    -
        author: Solen Guitter
        date: '2011-12-14 11:45'
        message: Migrated to Confluence 4.0
        version: '8'
    -
        author: Solen Guitter
        date: '2011-12-14 11:45'
        message: Added details on VM installation
        version: '7'
    -
        author: Solen Guitter
        date: '2011-12-12 23:59'
        message: Added toc
        version: '6'
    -
        author: Solen Guitter
        date: '2011-12-07 11:59'
        message: Added related content
        version: '5'
    -
        author: Solen Guitter
        date: '2011-12-07 11:10'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2011-12-07 10:54'
        message: ''
        version: '3'
    -
        author: Solen Guitter
        date: '2011-12-07 10:53'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2011-12-07 10:53'
        message: ''
        version: '1'

---

## Checking Requirements

First, have a look at the detailed steps to [check your Java version]({{page page='tomcat-server-zip'}}#java-check) and install it.

## Installing the Nuxeo Platform From the ZIP Archive

### Install the Nuxeo Platform

Download the [ZIP](https://packages.nuxeo.com/repository/maven-public/org/nuxeo/ecm/distribution/nuxeo-server-tomcat/11.4.42/nuxeo-server-tomcat-11.4.42.zip) archive and unzip it using your favorite tool.

{{#> callout type='warning' }}

Do not use the Windows built-in ZIP functionality (aka "zipfldr.dll" or "Compressed Folders Module"), it reports incorrect uncompressed size.
Recommended: [7-Zip](http://www.7-zip.org/).

{{/callout}}

### Installation Path

On Windows in general, and especially on Windows 7 or later versions, it is highly recommended to install your Nuxeo application at the root of a disk (`C:\Nuxeo` for instance),&nbsp;because of rights issues, limitations on paths length, 32/64 bits conflicts,...

### What's Next?

Do you want to evaluate the platform? You can now [start the server]({{page page='server-start-and-stop'}}).
You want to do a complete installation, that is compatible for a production environment? You should [prepare your environment]({{page page='setup-best-practices'}}) now.

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Next Steps'}}

- [Setup Best Practices]({{page page='setup-best-practices'}})
- [Server Start and Stop]({{page page='server-start-and-stop'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Getting Familiar with the Nuxeo Platform'}}

- [Essential Nuxeo Platform Terminology]({{page page='essential-nuxeo-platform-terminology'}})
- [Discover Nuxeo Platform APIs]({{page page='discover-nuxeo-platform-apis'}})

{{/panel}}</div></div>
