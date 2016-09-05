---
title: One step validation flow based on lifecycle only
confluence:
    ajs-parent-page-id: '22380606'
    ajs-parent-page-title: Workflow Use Cases
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: One+step+validation+flow+based+on+lifecycle+only
    canonical_source: >-
        https://doc.nuxeo.com/display/NXDOC60/One+step+validation+flow+based+on+lifecycle+only
    page_id: '22380643'
    shortlink: Y4BVAQ
    shortlink_source: 'https://doc.nuxeo.com/x/Y4BVAQ'
    source_link: /display/NXDOC60/One+step+validation+flow+based+on+lifecycle+only
history:
    - 
        author: Manon Lumeau
        date: '2016-07-20 14:24'
        message: 'emove children display macro '
        version: '18'
    - 
        author: Solen Guitter
        date: '2013-09-02 17:11'
        message: ''
        version: '17'
    - 
        author: Bertrand Chauvin (perso)
        date: '2013-05-10 18:31'
        message: Added info about workflow tutorial
        version: '16'
    - 
        author: Alain Escaffre
        date: '2013-04-04 18:37'
        message: ''
        version: '15'
    - 
        author: Alain Escaffre
        date: '2013-04-04 18:37'
        message: ''
        version: '14'
    - 
        author: Solen Guitter
        date: '2010-08-31 15:59'
        message: Migrated to Confluence 4.0
        version: '13'
    - 
        author: Solen Guitter
        date: '2010-08-31 15:59'
        message: ''
        version: '12'
    - 
        author: Solen Guitter
        date: '2010-08-25 17:22'
        message: ''
        version: '11'
    - 
        author: Solen Guitter
        date: '2010-08-18 10:57'
        message: ''
        version: '10'
    - 
        author: Alain Escaffre
        date: '2010-07-28 01:41'
        message: ''
        version: '9'
    - 
        author: Alain Escaffre
        date: '2010-07-28 01:41'
        message: ''
        version: '8'
    - 
        author: Alain Escaffre
        date: '2010-07-28 00:35'
        message: ''
        version: '7'
    - 
        author: Alain Escaffre
        date: '2010-07-27 02:59'
        message: ''
        version: '6'
    - 
        author: Alain Escaffre
        date: '2010-07-26 01:58'
        message: ''
        version: '5'
    - 
        author: Alain Escaffre
        date: '2010-07-26 01:58'
        message: ''
        version: '4'
    - 
        author: Alain Escaffre
        date: '2010-07-26 01:55'
        message: ''
        version: '3'
    - 
        author: Alain Escaffre
        date: '2010-07-26 01:45'
        message: ''
        version: '2'
    - 
        author: Alain Escaffre
        date: '2010-07-26 01:41'
        message: ''
        version: '1'

---
{{#> callout type='info' }}

This tutorial refers to the use of the lifecycle functionality only. If you are using Nuxeo DM 5.6 or higher, you might wish to learn about the workflow functionality by following the [simple workflow example tutorial]({{page page='simple-workflow-example'}}).

{{/callout}}

Nuxeo DM provides out of the box validation workflows that can do the job in many cases. Using the default user interface features, you, as the process launcher, select some participants and then start the workflow. Yet, it happens sometimes that you don't want to let to people the choice of who the participants will be, i.e. who the validator(s) will be. To implement that case in a nice way, you can use Nuxeo Studio.

{{! excerpt}}

In this tutorial we will implement a chained workflow, that enables to validate a document in one step. We will make sure to store a few important dates on the document and we will log important steps into the document's history. Also, we will make sure that during this workflow, people receive consistent email notifications.

{{! /excerpt}}

Technically, in this tutorial, you will learn how to:

*   Declare a new permission (using an XML extension)
*   Declare a new button
*   Bind that button to a chain that assigns a validation task
*   Create the validation logic
*   Define what happens in case the document is rejected.

Start the tutorial:

*   [Functional tour]({{page space='NXDOC60' page='Functional tour'}})
*   [Implement the validation logic]({{page space='NXDOC60' page='Implement the+validation+logic'}})
*   [Create a task assignment alert]({{page space='NXDOC60' page='Create a+task+assignment+alert'}})
*   [Create a button that triggers the task assignment]({{page space='NXDOC60' page='Create a+button+that+triggers+the+task+assignment'}})