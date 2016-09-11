---
title: Where Are the Log and Configuration Files in Windows?
review:
    comment: ''
    date: ''
    status: ok
labels:
    - log
    - lts2015-ok
confluence:
    ajs-parent-page-id: '27604657'
    ajs-parent-page-title: Recommended Configurations
    ajs-space-key: ADMINDOC710
    ajs-space-name: Nuxeo Installation and Administration — LTS 2015
    canonical: viewpage.action?pageId=27604637
    canonical_source: viewpage.action?pageId=27604637
    page_id: '27604637'
    shortlink: nTalAQ
    shortlink_source: 'https://doc.nuxeo.com/x/nTalAQ'
    source_link: /pages/viewpage.action?pageId=27604637
history:
    - 
        author: Solen Guitter
        date: '2015-12-01 16:22'
        message: emove Win XP and Vist
        version: '11'
    - 
        author: Solen Guitter
        date: '2014-07-22 10:51'
        message: ''
        version: '10'
    - 
        author: Thibaud Arguillere
        date: '2014-04-21 16:47'
        message: ''
        version: '9'
    - 
        author: Solen Guitter
        date: '2012-02-27 11:52'
        message: Migrated to Confluence 4.0
        version: '8'
    - 
        author: Solen Guitter
        date: '2012-02-27 11:52'
        message: ''
        version: '7'
    - 
        author: Mathieu Guillaume
        date: '2011-01-05 15:17'
        message: ''
        version: '6'
    - 
        author: Mathieu Guillaume
        date: '2011-01-05 15:16'
        message: ''
        version: '5'
    - 
        author: Florent Guillaume
        date: '2010-07-27 17:00'
        message: ''
        version: '4'
    - 
        author: Mathieu Guillaume
        date: '2010-07-27 16:25'
        message: ''
        version: '3'
    - 
        author: Mathieu Guillaume
        date: '2010-07-27 16:24'
        message: ''
        version: '2'
    - 
        author: Mathieu Guillaume
        date: '2010-07-27 16:21'
        message: ''
        version: '1'

---
When you install Nuxeo with the Windows installer, &nbsp;a "Nuxeo" folder is created in&nbsp;`%APPDATA%` (see below). This folder contains the configuration, the logs, the binaries.

{{#> callout type='info' }}

On older versions, the folder can be named "Nuxeo DM"

{{/callout}}

The location of the&nbsp;`%APPDATA%` directory varies depending on whether you chose to install for all users or not:

*   All users:&nbsp;&nbsp;`C:\ProgramData`
*   One user:&nbsp;&nbsp;`C:\Users\TheUser\AppData\Roaming`

&nbsp;

{{#> callout type='tip' }}

The locations of your logs and data are displayed on the Control Panel Summary tab.
![]({{file name='Nuxeo_control_panel_summary_locations.png'}} ?border=true)

{{/callout}}