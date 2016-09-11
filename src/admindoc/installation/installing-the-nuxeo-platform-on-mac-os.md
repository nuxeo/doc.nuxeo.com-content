---
title: Installing the Nuxeo Platform on Mac OS
review:
    comment: ''
    date: ''
    status: ok
labels:
    - installation
    - lts2015-ok
toc: true
confluence:
    ajs-parent-page-id: '27604707'
    ajs-parent-page-title: Installation
    ajs-space-key: ADMINDOC710
    ajs-space-name: Nuxeo Installation and Administration — LTS 2015
    canonical: Installing+the+Nuxeo+Platform+on+Mac+OS
    canonical_source: >-
        https://doc.nuxeo.com/display/ADMINDOC710/Installing+the+Nuxeo+Platform+on+Mac+OS
    page_id: '27604677'
    shortlink: xTalAQ
    shortlink_source: 'https://doc.nuxeo.com/x/xTalAQ'
    source_link: /display/ADMINDOC710/Installing+the+Nuxeo+Platform+on+Mac+OS
history:
    - 
        author: Solen Guitter
        date: '2016-05-03 09:48'
        message: 'emove homebrew steps, which actually install 8.'
        version: '30'
    - 
        author: Manon Lumeau
        date: '2016-04-20 08:45'
        message: ''
        version: '29'
    - 
        author: Manon Lumeau
        date: '2016-04-20 08:44'
        message: ''
        version: '28'
    - 
        author: Manon Lumeau
        date: '2016-02-11 17:00'
        message: ''
        version: '27'
    - 
        author: Manon Lumeau
        date: '2016-02-11 16:43'
        message: ''
        version: '26'
    - 
        author: Manon Lumeau
        date: '2016-02-11 16:40'
        message: Update link
        version: '25'
    - 
        author: Manon Lumeau
        date: '2016-02-11 16:35'
        message: Add HomeBrew installation
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
On Mac OS, you can install the Nuxeo Platform using two different packages:

*   The .zip archive
*   The virtual machine image

## Checking Requirements

{{{multiexcerpt 'requirements-intro' page='Hardware and Software Requirements'}}}

Check out the [Hardware and Software Requirements]({{page page='hardware-and-software-requirements'}}) for detailed steps to check your Java version and install it.

## Installing the Nuxeo Platform From the .zip Archive

Installing the Nuxeo Platform using the .zip package installs the Nuxeo Platform only. External dependencies must be installed separately.

**To install the Nuxeo Platform zip archive:**
Unzip the .zip archive using your favorite tool.

**What's next?**
You want to evaluate the application? You can now [start the server]({{page page='server-start-and-stop'}}).
You want to do a complete installation, compatible for a production environment? You should now [prepare your environment]({{page page='recommended-configurations'}}).

## Installing a Nuxeo Virtual Machine Image

{{{multiexcerpt 'install-vm' page='Installing the Nuxeo Platform on Windows'}}}

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Next Steps'}}

*   [Setup]({{page page='setup'}})
*   [Recommended Configurations]({{page page='recommended-configurations'}})
*   [Server Start and Stop]({{page page='server-start-and-stop'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Getting Familiar with the Nuxeo Platform'}}

*   [From the Web UI to Nuxeo Studio]({{page space='nxdoc710' page='from-the-web-ui-to-nuxeo-studio'}})
*   [Essential Nuxeo Platform Terminology]({{page space='nxdoc710' page='essential-nuxeo-platform-terminology'}})
*   [Quick Start Dev Guide]({{page space='nxdoc710' page='quick-start-dev-guide'}})

{{/panel}}</div></div>