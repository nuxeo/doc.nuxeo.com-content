---
title: Start Customizing the Nuxeo Platform
review:
    comment: ''
    date: '2017-05-29'
    status: ok
notes: >-
    Documentation page used by the Marketing team. Check with Marketing before deleting or moving.
labels:
    - lts2016-ok
    - home
version_override:
    'LTS 2015': 710/nxdoc/quick-start-dev-guide
    '6.0': 60/nxdoc/quick-start-dev-guide
    '5.8': 58/nxdoc/quick-start-dev-guide
confluence:
    ajs-parent-page-id: '7209076'
    ajs-parent-page-title: Tutorials
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Quick+Start+Dev+Guide
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Quick+Start+Dev+Guide'
    page_id: '14256538'
    shortlink: monZ
    shortlink_source: 'https://doc.nuxeo.com/x/monZ'
    source_link: /display/NXDOC/Quick+Start+Dev+Guide
tree_item_index: 200
history:
    -
        author: Manon Lumeau
        date: '2015-11-06 13:35'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2015-01-26 17:01'
        message: fix broken link
        version: '4'
    -
        author: Manon Lumeau
        date: '2014-11-06 12:08'
        message: ''
        version: '3'
    -
        author: Solen Guitter
        date: '2013-07-16 10:30'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2013-07-15 13:57'
        message: ''
        version: '1'

---
Welcome to the Nuxeo Developer Quick Start Guide!

This guide will show you how to start a Nuxeo project with a simple example using our tools, Nuxeo Studio and Nuxeo CLI. When people want to customize the Nuxeo Platform they usually start by doing the configuration and implementing the business model in Nuxeo Studio. Then they might use a Java development environment to implement new features server side. This Java development can be done with any Java editor. We will be using Nuxeo CLI, a command line interface tool dedicated to help developers with Nuxeo Platform, in this Quick Start Guide. It will guide you through the different steps of the process.

*   Starting your project in Nuxeo Studio by changing the logo and creating a Contract document type on your brand new Nuxeo Platform instance
*   Creating a new operation using Nuxeo CLI to calculate the contract renegotiation date and leverage it in Nuxeo Studio
*   Modifying custom document types, and creating custom searches and workflows using Nuxeo Studio and View Designer.

The purpose of this guide is not to provide an overview of all the features of Nuxeo Studio or Nuxeo CLI but to show you how to use these two tools to make your own Nuxeo project, so that you become operational quickly. However, you can take a look at the [Studio documentation]({{page space='studio'}}) or [Nuxeo CLI documentation]({{page page='nuxeo-cli'}}) at any time if you want more information about a feature of those environments.
