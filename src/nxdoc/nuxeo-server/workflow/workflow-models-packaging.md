---
title: Workflow Models Packaging
review:
    comment: ''
    date: '2017-12-14'
    status: ok
labels:
    - lts2016-ok
    - workflow
    - grenard
    - excerpt
    - lts2017-ok
confluence:
    ajs-parent-page-id: '12913723'
    ajs-parent-page-title: Workflow
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Workflow+Models+Packaging
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Workflow+Models+Packaging'
    page_id: '16091256'
    shortlink: eIj1
    shortlink_source: 'https://doc.nuxeo.com/x/eIj1'
    source_link: /display/NXDOC/Workflow+Models+Packaging
tree_item_index: 200
history:
    -
        author: Alain Escaffre
        date: '2015-09-29 14:45'
        message: ''
        version: '12'
    -
        author: Manon Lumeau
        date: '2015-09-18 16:05'
        message: ''
        version: '11'
    -
        author: Solen Guitter
        date: '2013-10-31 10:24'
        message: ''
        version: '10'
    -
        author: Mariana Cedica
        date: '2013-10-30 16:26'
        message: ''
        version: '9'
    -
        author: Mariana Cedica
        date: '2013-10-30 15:09'
        message: ''
        version: '8'
    -
        author: Mariana Cedica
        date: '2013-10-30 12:37'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2013-10-21 10:27'
        message: ''
        version: '6'
    -
        author: Alain Escaffre
        date: '2013-10-19 12:39'
        message: ''
        version: '5'
    -
        author: Alain Escaffre
        date: '2013-10-18 15:04'
        message: ''
        version: '4'
    -
        author: Alain Escaffre
        date: '2013-10-18 15:04'
        message: ''
        version: '3'
    -
        author: Alain Escaffre
        date: '2013-10-18 15:01'
        message: ''
        version: '2'
    -
        author: Alain Escaffre
        date: '2013-10-18 15:00'
        message: ''
        version: '1'

---
{{! excerpt}}

This page deals with how a workflow model is created on a Nuxeo instance. Note that when using Nuxeo Studio, everything is done transparently. The goal of this page is to let you understand what Studio generates in the JAR when you use the [Studio feature]({{page space='studio' page='workflow'}}) and how the workflow is created and persisted when deploying the Studio project.

{{! /excerpt}}

Nuxeo workflows are declared via the following contribution:

```xml
<extension target="org.nuxeo.ecm.platform.routing.service" point="routeModelImporter">
<template-resource id="TimeOffRequest" path="data/TimeOffRequest.zip"/>
<template-resource id="TimeOffUpdateCancelRequest" path="data/TimeOffUpdateCancelRequest.zip"/>
</extension>
```

As you can see, the workflow definition is referenced in a zip "data/TimeOffRequest.zip" (that is in the JAR bundle). In this zip you find the serialization in [core-io format]({{page page='nuxeo-core-import-export-api'}}) of the workflow graph: the parent document corresponds to the workflow model, and you have as many children as there are nodes in your graph.

{{#> callout type='info' }}

Workflow and nodes, with their properties configured from Studio, are serialized as Nuxeo documents.

{{/callout}}

Once the runtime deploys the bundle that contains such a contribution, the workflows are created from the archive, under the path `/document-route-models-root`. The workflow model is persisted as a document of type "`DocumentRoute`" and children nodes as documents of type "`RouteNode`". You can see the list of workflow models in the Admin Center (see the [workflows deployed on the demo site](http://demo.nuxeo.com/nuxeo/nxadmin/default@view_admin?tabIds=MAIN_TABS%3Aadmin%2CNUXEO_ADMIN%3Atab.admin.workflow)).

Once deployed, depending on what has been set as the availability criteria for your workflow in Studio (stored on the DocumentRoute document, field `docri:availabilityFilter`) you will see the workflow in the ["start workflow" drop down list on the summary of the document]({{page space='userdoc' page='serial-document-workflow'}}). You can now start a new workflow.
