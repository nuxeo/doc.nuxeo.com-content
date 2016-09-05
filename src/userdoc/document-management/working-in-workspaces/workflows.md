---
title: Workflows
labels:
    - workflow
confluence:
    ajs-parent-page-id: '16092666'
    ajs-parent-page-title: Working in Workspaces
    ajs-space-key: USERDOC58
    ajs-space-name: Nuxeo Platform User Documentation - 5.8
    canonical: Workflows
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC58/Workflows'
    page_id: '16092618'
    shortlink: yo31
    shortlink_source: 'https://doc.nuxeo.com/x/yo31'
    source_link: /display/USERDOC58/Workflows
history:
    - 
        author: Anonymous
        date: '2013-11-03 15:14'
        message: ''
        version: '17'
    - 
        author: Solen Guitter
        date: '2013-10-25 13:56'
        message: ''
        version: '16'
    - 
        author: Solen Guitter
        date: '2013-10-24 15:03'
        message: ''
        version: '15'
    - 
        author: Solen Guitter
        date: '2013-10-24 14:41'
        message: ''
        version: '14'
    - 
        author: Solen Guitter
        date: '2013-01-04 12:21'
        message: ''
        version: '13'
    - 
        author: Alain Escaffre
        date: '2012-12-31 02:37'
        message: ''
        version: '12'
    - 
        author: Solen Guitter
        date: '2012-09-12 16:19'
        message: Migrated to Confluence 4.0
        version: '11'
    - 
        author: Solen Guitter
        date: '2012-09-12 16:19'
        message: Updated content with last version changes (5.6 workflow)
        version: '10'
    - 
        author: Solen Guitter
        date: '2012-06-18 17:41'
        message: ''
        version: '9'
    - 
        author: Solen Guitter
        date: '2011-11-23 10:00'
        message: ''
        version: '8'
    - 
        author: Solen Guitter
        date: '2011-06-06 11:47'
        message: ''
        version: '7'
    - 
        author: Solen Guitter
        date: '2010-10-20 10:41'
        message: ''
        version: '6'
    - 
        author: Wojciech Sulejman
        date: '2010-08-30 15:50'
        message: ''
        version: '5'
    - 
        author: Stéfane Fermigier
        date: '2010-08-03 17:55'
        message: added brief description of workflows
        version: '4'
    - 
        author: Solen Guitter
        date: '2010-05-26 18:15'
        message: added brief description of workflows
        version: '3'
    - 
        author: Solen Guitter
        date: '2010-05-26 17:55'
        message: added schema
        version: '2'
    - 
        author: Solen Guitter
        date: '2010-04-14 17:17'
        message: ''
        version: '1'

---
All the documents evolve according to a defined life cycle. The default life cycle is composed of the following states: Project, Approved, Obsolete and Deleted. There are different ways to make documents evolve through this life cycle. One of the ways is to use a workflow.

![]({{file name='default-lifecycle-diagram.png'}} ?w=350,border=true)

A workflow is a process in which a chain of users is defined to review, approve or reject the document. Workflows are traditionally used to validate documents (make them go to "Approved" state), but they can also be used to have the document reviewed, without life cycle state change.

The Nuxeo Platform includes two default workflows: one [serial workflow]({{page page='serial-document-workflow'}}) and one [parallel workflow]({{page page='parallel-document-workflow'}}). Other workflows can be [configured with Nuxeo Studio]({{page space='studio' page='workflow'}}), which will then be available in the application.

{{{excerpt 'Serial Document Workflow'}}}

{{{excerpt 'Parallel Document Workflow'}}}

Users who are involved in workflows are alerted by email and can have a synthetic view of all the tasks they have to do on documents in their [dashboard]({{page page='navigation-trees#dashboard'}}). The documents they have to review are listed there.