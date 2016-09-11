---
title: How to Make a Simple Task Assignment to One or Many Users
review:
    comment: ''
    date: ''
    status: ok
details:
    howto:
        excerpt: Learn how to create a task and assign it to one or many users.
        level: Intermediate
        tool: Studio
        topics: 'Workflow, Automation, Task'
labels:
    - workflow
    - lts2015-ok
    - automation
    - create-task-operation
    - howto
    - studio
confluence:
    ajs-parent-page-id: '28475570'
    ajs-parent-page-title: Workflow How-To Index
    ajs-space-key: NXDOC710
    ajs-space-name: Nuxeo Platform Developer Documentation — LTS 2015
    canonical: How+to+Make+a+Simple+Task+Assignment+to+One+or+Many+Users
    canonical_source: >-
        https://doc.nuxeo.com/display/NXDOC710/How+to+Make+a+Simple+Task+Assignment+to+One+or+Many+Users
    page_id: '28475679'
    shortlink: H4GyAQ
    shortlink_source: 'https://doc.nuxeo.com/x/H4GyAQ'
    source_link: >-
        /display/NXDOC710/How+to+Make+a+Simple+Task+Assignment+to+One+or+Many+Users
history:
    - 
        author: Manon Lumeau
        date: '2015-12-15 17:12'
        message: ''
        version: '19'
    - 
        author: Solen Guitter
        date: '2015-02-03 09:15'
        message: ''
        version: '18'
    - 
        author: Solen Guitter
        date: '2014-12-01 21:50'
        message: ''
        version: '17'
    - 
        author: Manon Lumeau
        date: '2014-09-09 18:18'
        message: ''
        version: '16'
    - 
        author: Solen Guitter
        date: '2014-06-12 16:34'
        message: ''
        version: '15'
    - 
        author: Alain Escaffre
        date: '2014-05-02 16:59'
        message: ''
        version: '14'
    - 
        author: Solen Guitter
        date: '2014-01-20 16:25'
        message: ''
        version: '13'
    - 
        author: Solen Guitter
        date: '2013-07-17 17:16'
        message: Added excerpt
        version: '12'
    - 
        author: Solen Guitter
        date: '2013-07-01 10:37'
        message: 'Updated operations links to use Explorer '
        version: '11'
    - 
        author: Alain Escaffre
        date: '2013-04-04 18:37'
        message: ''
        version: '10'
    - 
        author: Solen Guitter
        date: '2011-09-02 12:05'
        message: Migrated to Confluence 4.0
        version: '9'
    - 
        author: Solen Guitter
        date: '2011-09-02 12:05'
        message: added links to operations
        version: '8'
    - 
        author: whajeri
        date: '2010-11-24 23:11'
        message: ''
        version: '7'
    - 
        author: Alain Escaffre
        date: '2010-09-02 19:31'
        message: added link to tutorial
        version: '6'
    - 
        author: Alain Escaffre
        date: '2010-07-26 11:49'
        message: ''
        version: '5'
    - 
        author: Alain Escaffre
        date: '2010-07-26 01:40'
        message: ''
        version: '4'
    - 
        author: Alain Escaffre
        date: '2010-07-26 01:39'
        message: ''
        version: '3'
    - 
        author: Alain Escaffre
        date: '2010-07-26 01:37'
        message: ''
        version: '2'
    - 
        author: Alain Escaffre
        date: '2010-07-26 01:37'
        message: ''
        version: '1'

---
{{! excerpt}}

Sometimes you want to assign a task to one or many users, without requiring a dedicated process model. You can [create a button, link or icon and bind it to an automation chain]({{page page='how-to-create-an-automation-chain'}}), that will use the&nbsp;"Create task" operation, in the "Services" category.

{{! /excerpt}}

This operation will assign a task to users or groups of users, which are defined by the parameter "variable name for actors prefixed ids". This parameter either accepts:

*   the user name,
*   the group name (the syntax for groups is `group:groupname`),
*   a context variable referring to them. This context variable can typically be defined in the "Get Users and Groups" operation that must be in the same automation chain. That operation stores a variable with some users and groups given the rights they have on an input document.
    See the [One step validation flow tutorial]({{page page='one-step-validation-flow-based-on-lifecycle-only'}}) for a complete sample.

Once a user that is assigned the task accepts or rejects the task, the automation chain given in parameters of the `Create task` operation is executed.

* * *

&nbsp;

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related How-Tos'}}

*   [How to Modify a Workflow Variable outside of Workflow Context]({{page page='how-to-modify-a-workflow-variable-outside-of-workflow-context'}})

*   [How-To Index]({{page page='how-to-index'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related Documentation'}}

*   [Workflow in Nuxeo Studio]({{page space='studio' page='workflow'}})
*   [Full-Text Queries]({{page page='full-text-queries'}})
*   [NXQL]({{page page='nxql'}})
*   [Variables Available in the Automation Context]({{page page='variables-available-in-the-automation-context'}})
*   [Workflow]({{page page='workflow'}})

{{/panel}}</div></div>