---
title: Case Management with the Nuxeo Platform
review:
    comment: ''
    date: '2019-10-21'
    status: ok
labels:
    - case-management
    - workflow
    - content-review-lts2017
confluence:
    ajs-parent-page-id: '11043048'
    ajs-parent-page-title: Nuxeo Platform User Documentation
    ajs-space-key: USERDOC
    ajs-space-name: Nuxeo Platform User Documentation
    canonical: Case+Management+with+the+Nuxeo+Platform
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC/Case+Management+with+the+Nuxeo+Platform'
    page_id: '11534447'
    shortlink: bwCw
    shortlink_source: 'https://doc.nuxeo.com/x/bwCw'
    source_link: /display/USERDOC/Case+Management+with+the+Nuxeo+Platform
tree_item_index: 1900
history:
    -
        author: Solen Guitter
        date: '2016-07-22 09:58'
        message: dd border to screensho
        version: '8'
    -
        author: Manon Lumeau
        date: '2015-09-18 16:06'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2013-12-02 17:08'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2013-01-04 12:20'
        message: ''
        version: '5'
    -
        author: Alain Escaffre
        date: '2012-12-31 02:37'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2012-10-11 10:15'
        message: ''
        version: '3'
    -
        author: Solen Guitter
        date: '2012-09-13 16:05'
        message: Migrated to Confluence 4.0
        version: '2'
    -
        author: Solen Guitter
        date: '2012-09-13 16:05'
        message: ''
        version: '1'
---

{{{multiexcerpt 'DeprecatedAddon_10.10' page='generic-multi-excerpts'}}}

The Nuxeo Platform used to feature a module dedicated to case management, called Case Management Framework. From the version 5.6 of the platform, the technology on which CMF was based, called Content Routing, has been integrated in the Platform by default to enable users to create their own routes without installing a specific module and leaving their regular content management environment.

So how to do case management with the Nuxeo Platform?
It takes two steps:

1.  Developers design the different workflows you need in [Studio]({{page space='studio'}}).
2.  End users select the workflow they want to start and which users participate.

On the Studio side, developers can define the different steps of the workflow, how to go from a step to another, the different branches of the workflow, the actions available to users, their tasks etc. Their can also choose what information the Workflow tab of document should present, and how.<br/>
**Documentation: [Workflows in Studio]({{page space='studio' page='workflow'}})**

![]({{file name='Workflow-in-studio.png'}} ?w=650,border=true)

After the Studio customizations have been deployed, users can make the documents go through the workflows from their usual Nuxeo Platform environment. An example of workflow is available by default on the Nuxeo Platform<br/>
**Documentation: [Default Nuxeo Platform Workflows]({{page page='workflow'}})**

![]({{file name='workflow-choose-reviewers-task-workflow-tab.png' page='serial-document-workflow'}} ?w=650,h=445,border=true)
