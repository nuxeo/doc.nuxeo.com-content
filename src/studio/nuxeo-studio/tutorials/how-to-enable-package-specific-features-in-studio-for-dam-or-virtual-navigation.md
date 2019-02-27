---
title: 'How to Enable Package Specific Features in Studio for DAM or Virtual
    Navigation?'
review:
    comment: ''
    date: ''
    status: ok
details:
    howto:
      excerpt: >-
        Learn how to Enable Package Specific Features in Studio for DAM or Virtual Navigation.
      level: Beginner
      tool: Studio
      topics: 'Application Definition'
labels:
    - target-package
    - project-settings
toc: true
confluence:
    ajs-parent-page-id: '12912674'
    ajs-parent-page-title: Administering your project
    ajs-space-key: Studio
    ajs-space-name: Nuxeo Online Services
    canonical: viewpage.action?pageId=14255313
    canonical_source: viewpage.action?pageId=14255313
    page_id: '14255313'
    shortlink: 0YTZ
    shortlink_source: 'https://doc.nuxeo.com/x/0YTZ'
    source_link: /pages/viewpage.action?pageId=14255313
tree_item_index: 600
history:
    -
        author: Manon Lumeau
        date: '2016-04-27 13:38'
        message: ''
        version: '8'
    -
        author: Manon Lumeau
        date: '2016-04-27 13:38'
        message: ''
        version: '7'
    -
        author: Manon Lumeau
        date: '2016-04-26 14:30'
        message: ''
        version: '6'
    -
        author: Alain Escaffre
        date: '2016-03-23 13:33'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2015-09-07 09:26'
        message: ''
        version: '4'
    -
        author: Manon Lumeau
        date: '2014-09-16 14:26'
        message: ''
        version: '3'
    -
        author: Solen Guitter
        date: '2013-06-21 11:24'
        message: Fixed typos
        version: '2'
    -
        author: Frédéric Vadon
        date: '2013-06-20 17:32'
        message: ''
        version: '1'

---
Nuxeo Studio enables specific features for the packages you want to deploy on top of a Nuxeo Platform server. Studio will show those features only if they are selected in the settings so that you do not try to customize a feature that is not available on your server because you did not deployed the right module.

## How to Choose a Package in My Settings?

To choose a package in Studio, you should go to **Settings** > **Application Definition**> **Target Packages**.

![]({{file name='Screenshot_20_06_13_17_16.png'}} ?w=650,h=356,border=true)

This is where you should select the modules that you have deployed or plan to deploy on your Nuxeo Platform server. The modules can be chosen during the installation wizard as stated in the following page: [Configuration Wizard]({{page space='nxdoc' page='configuration-wizard'}}).

## What Packages Are Available for My Target Platform?

*   Virtual Navigation is available from Nuxeo Platform 6.0 and above.
*   DAM is available from Nuxeo Platform 5.8 and above.
