---
title: Workflow Instance Properties
review:
    comment: ''
    date: '2017-12-14'
    status: ok
labels:
    - lts2016-ok
    - link-update
    - workflow
    - grenard
    - excerpt
    -  lts2017-ok
toc: true
confluence:
    ajs-parent-page-id: '12913723'
    ajs-parent-page-title: Workflow
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Workflow+Instance+Properties
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Workflow+Instance+Properties'
    page_id: '16091289'
    shortlink: mYj1
    shortlink_source: 'https://doc.nuxeo.com/x/mYj1'
    source_link: /display/NXDOC/Workflow+Instance+Properties
tree_item_index: 400
history:
    -
        author: Alain Escaffre
        date: '2015-09-29 14:45'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2015-08-31 13:58'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2013-10-31 09:40'
        message: ''
        version: '7'
    -
        author: Mariana Cedica
        date: '2013-10-30 18:57'
        message: ''
        version: '6'
    -
        author: Mariana Cedica
        date: '2013-10-30 18:28'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2013-10-21 11:03'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2013-10-21 10:13'
        message: Formatting and added link to the explorer
        version: '3'
    -
        author: Alain Escaffre
        date: '2013-10-19 12:39'
        message: ''
        version: '2'
    -
        author: Alain Escaffre
        date: '2013-10-18 16:25'
        message: ''
        version: '1'

---
{{! excerpt}}

This page describes information that is persisted on a workflow instance.

{{! /excerpt}}

## Workflow Variables

A workflow instance can persist some custom variables that can be used all along the workflow life.

These are properties of the document of type 'DocumentRoute' stored on a dynamic [facet]({{page page='available-facets'}}), in a schema named as following:

*   the name of the schema (and its prefix too): `var_$WorkflowModelName`,

Usual property types are available beside complex properties that are currently disabled.

Workflow variables can be accessed from the automation context during the execution of the process using the context variable `WorkflowVariables["my_variable"]`. They can be updated using the Automation operation [Set Workflow Variable](http://explorer.nuxeo.org/nuxeo/site/distribution/current/viewOperation/Context.SetWorkflowVar).

## Availability

The workflow availability information is stored on the workflow instance. This filter is actually an [action filter]({{page page='actions-links-buttons-icons-tabs-and-more'}}) used to control the visibility of workflow models in the list of workflows displayed by the widget type "Workflow Process" (the widget that displays the list of workflows that can be started). Note that it is not currently used at low level for controlling the right for a user to execute a workflow.
