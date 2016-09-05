---
title: Where Are the Log and Configuration Files in Windows?
labels:
    - last-review-20141126
    - log
confluence:
    ajs-parent-page-id: '21921858'
    ajs-parent-page-title: Recommended Configurations
    ajs-space-key: ADMINDOC60
    ajs-space-name: Nuxeo Installation and Administration — 6.0
    canonical: viewpage.action?pageId=21921842
    canonical_source: viewpage.action?pageId=21921842
    page_id: '21921842'
    shortlink: MoBOAQ
    shortlink_source: 'https://doc.nuxeo.com/x/MoBOAQ'
    source_link: /pages/viewpage.action?pageId=21921842
history:
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

The location of the&nbsp;`%APPDATA%` directory varies depending on the version of Windows you are using and whether you chose to install for all users or not. Here are the various locations:

*   Windows Server 2008
    *   All users:&nbsp;&nbsp;`C:\ProgramData`
    *   One user:&nbsp;&nbsp;`C:\Users\TheUser\AppData\Roaming
        `
*   Vista / 7
    *   All users:&nbsp;`C:\ProgramData`
    *   One user:&nbsp;`C:\Users\MyUser\AppData\Roaming`
*   Windows XP (_deprecated and no more supported by Microsoft_)
    *   All users: `C:\Documents and Settings\All Users\Application Data`
    *   One user:&nbsp;`C:\Document and Settings\MyUser\Application Data`

{{#> callout type='tip' }}

The locations of your logs and data are displayed on the Control Panel Summary tab.
![]({{file name='Nuxeo_control_panel_summary_locations.png'}} ?border=true)

{{/callout}}