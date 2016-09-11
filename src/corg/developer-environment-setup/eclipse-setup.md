---
title: Eclipse setup
review:
    comment: ''
    date: ''
    status: ok
confluence:
    ajs-parent-page-id: '9275205'
    ajs-parent-page-title: Developer Environment Setup
    ajs-space-key: CORG
    ajs-space-name: Core Developer Guide
    canonical: Eclipse+setup
    canonical_source: 'https://doc.nuxeo.com/display/CORG/Eclipse+setup'
    page_id: '9275212'
    shortlink: TIeN
    shortlink_source: 'https://doc.nuxeo.com/x/TIeN'
    source_link: /display/CORG/Eclipse+setup
history:
    - 
        author: Julien Carsique
        date: '2015-02-16 10:13'
        message: ''
        version: '9'
    - 
        author: Julien Carsique
        date: '2014-12-01 11:54'
        message: ''
        version: '8'
    - 
        author: Anahide Tchertchian
        date: '2014-08-19 11:28'
        message: add reference to detailed code style pages
        version: '7'
    - 
        author: Julien Carsique
        date: '2013-04-22 14:57'
        message: ''
        version: '6'
    - 
        author: Olivier Grisel
        date: '2012-04-04 15:48'
        message: Migrated to Confluence 4.0
        version: '5'
    - 
        author: Olivier Grisel
        date: '2012-04-04 15:48'
        message: ''
        version: '4'
    - 
        author: Olivier Grisel
        date: '2012-04-04 15:48'
        message: ''
        version: '3'
    - 
        author: Mathieu Guillaume
        date: '2012-02-09 13:40'
        message: svn -> hg
        version: '2'
    - 
        author: Julien Carsique
        date: '2012-01-09 15:23'
        message: ''
        version: '1'

---
## Nuxeo IDE

Nuxeo IDE is an Eclipse plugin that provides many useful tools for extensions developers such as hot code reload, component wizards and automated dependency management.

More details are available in the [Nuxeo IDE Documentation]({{page space='idedoc' page='documentation-center-for-nuxeo-platform-ides'}}).

## Eclipse configuration files

### Automatically (requires Nuxeo IDE)

In Eclipse Preferences "Nuxeo / Coding Rules" click on "Set Nuxeo preferences" then **cancel** the window.

### Manually

You can find some XML configuration to import in the [tools folder of the top-level repository](https://github.com/nuxeo/nuxeo/tree/master/tools).

&nbsp;