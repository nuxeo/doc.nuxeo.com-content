---
title: Available Variables in Email Templates
review:
    comment: ''
    date: '2017-12-14'
    status: ok
labels:
    - lts2016-ok
    - variable
    - mail-template
    - bchauvin
    - lts2017-ok
toc: true
confluence:
    ajs-parent-page-id: '14254895'
    ajs-parent-page-title: Understand Expression and Scripting Languages Used in Nuxeo
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Available+Variables+in+Email+Templates
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Available+Variables+in+Email+Templates'
    page_id: '14256091'
    shortlink: 24fZ
    shortlink_source: 'https://doc.nuxeo.com/x/24fZ'
    source_link: /display/NXDOC/Available+Variables+in+Email+Templates
history:
    -
        author: Manon Lumeau
        date: '2016-06-09 15:42'
        message: ''
        version: '19'
    -
        author: Gildas Lefevre
        date: '2016-05-02 19:04'
        message: ''
        version: '18'
    -
        author: Solen Guitter
        date: '2015-10-08 09:42'
        message: Fix typo in workflowDocuments example
        version: '17'
    -
        author: Solen Guitter
        date: '2015-08-27 13:45'
        message: 'User doc reorganization: fix link to alerts'
        version: '16'
    -
        author: Solen Guitter
        date: '2015-01-29 14:00'
        message: ''
        version: '15'
    -
        author: Solen Guitter
        date: '2015-01-29 13:57'
        message: ''
        version: '14'
    -
        author: Solen Guitter
        date: '2015-01-29 13:37'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2015-01-29 13:37'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2014-03-25 12:37'
        message: ''
        version: '11'
    -
        author: Solen Guitter
        date: '2013-09-02 15:57'
        message: ''
        version: '10'
    -
        author: Alain Escaffre
        date: '2013-07-11 01:34'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2013-07-09 12:07'
        message: Format
        version: '8'
    -
        author: Bertrand Chauvin
        date: '2013-07-08 16:50'
        message: ''
        version: '7'
    -
        author: Bertrand Chauvin
        date: '2013-07-08 16:48'
        message: ''
        version: '6'
    -
        author: Bertrand Chauvin
        date: '2013-07-08 16:48'
        message: ''
        version: '5'
    -
        author: Bertrand Chauvin
        date: '2013-07-08 16:47'
        message: ''
        version: '4'
    -
        author: Bertrand Chauvin
        date: '2013-07-08 15:22'
        message: ''
        version: '3'
    -
        author: Bertrand Chauvin
        date: '2013-07-08 15:22'
        message: ''
        version: '2'
    -
        author: Bertrand Chauvin
        date: '2013-07-08 15:21'
        message: ''
        version: '1'

---
{{#> callout type='info' }}

For a broader look about variables available in different contexts, have a look at the [Understand Expression and Scripting Languages Used in Nuxeo]({{page page='understand-expression-and-scripting-languages-used-in-nuxeo'}}) page.

{{/callout}}{{! excerpt}}

In your email templates, you have access to different variables depending if you are in an automation chain or in a workflow notification context. This page references them.

{{! /excerpt}}

## Automation Chain "Notification > Document.Mail" Operation Context

Variables that can be used to set up an email in an automation chain.

*   `${Document}` **-** The context document. This is the document on which some action was done and the [send mail operation](http://explorer.nuxeo.org/nuxeo/site/distribution/current/viewOperation/Document.Mail) was triggered. See [Use of MVEL in Automation chains (document wrapper)]({{page page='use-of-mvel-in-automation-chains'}}#-anchor-doc-wrapper-document-wrapper) for details.
*   `${docUrl}` - The document URL.
*   `${viewId}` **-** The view of the document which will be displayed by the document URL.
*   `${subject}` - The mail subject.
*   `${to}` - The mail recipients.
*   `${from}` - The mail sender.
*   `${CurrentDate}` - The current date. See [Use of MVEL in Automation chains (date wrapper)]({{page page='use-of-mvel-in-automation-chains'}}#-anchor-date-wrapper-date-wrapper) for details.
*   `${Fn}`- A collection of useful functions. See [Use of MVEL in Automation chains (fn object)]({{page page='use-of-mvel-in-automation-chains'}}#-anchor-fn-object-functions) for details.
*   `${Env}` - A hashmap containing Nuxeo environment variables. Example: `Env["org.nuxeo.ecm.product.name"]`.
*   `${CurrentUser}` - The current user.

    {{#> callout type='note' }}

    `${CurrentUser}` is not correctly working for now in FTL templates. However, if your email template is sent in the context of an automation chain or script, it is possible to use a workaround by defining its value in a context variable:
    1. Use the Context.SetVar operation in your chain with the following parameters:
    <br/>name: currentUserId
    <br/>value: @{CurrentUser.name}
    1. Then use it in your email template:
    <br />User ${Context['currentUserId']} sent you this email.

    <!-- Related Studio ticket: https://jira.nuxeo.com/browse/NXS-4429 -->

    {{/callout}}

## Workflow Task Notification Context

Variables that can be used when a notification is set up from a workflow node's configuration.

*   `${recipients}` - The email recipients. Provided as a usernames list. Example: `${recipients[0]}`.
*   `${userUrl}` - The URL to access the profile of the user running the task. Note that this might not be the current user. See the [workflow engine FAQ]({{page page='workflow-engine-faq'}}) for details.
*   `${docMainFileUrl}` - The URL of the document's main file (assuming the document contains one).
*   `${docState}` - The document's current lifecycle state.
*   `${documentLifeCycle}` - The document's current lifecycle state.
*   `${docTitle}` - The document title.
*   `${docUrl}` - The permanent link to the document.
*   `${docId}` - The document id.
*   `${taskInstance}` - The task instance id.
*   `${workflowStartTime}` - The workflow start time, sent as a `java.util.GregorianCalendar` object.
*   `${workflowInitiator}` - The workflow initiator username.
*   `${WorkflowVariables}` - Hashmap containing the workflow variables. Example: `${WorkflowVariables['myVariableName']}`.
*   `${NodeVariables}` - Hashmap containing the node variables. Example: `${NodeVariables['myVariableName']}`.
*   `${workflowDocuments}` - Hashmap containing the workflow documents. Example: `${workflowDocuments[0].dublincore.title}`.
*   `${nodeId}` - The node id.
*   `${button}` - The button id that was clicked for processing the task, if the current node is a task node.
*   `${nodeState}` - The node's state.
*   `${state}` - The workflow's state.
*   `${nodeStartTime}` - The time when the node was started, useful for example when computing a due date (Due date expression: `nodeStartTime.days(8)`). Sent as a `java.util.GregorianCalendar` object.
*   `${nodeEndTime}` - The time when the node was ended. Sent as a `java.util.GregorianCalendar` object.
*   `${nodeLastActor}` - The last actor on the node. Useful for instance to know who closed a task when the task was assigned to a group.

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [Understand Expression and Scripting Languages Used in Nuxeo]({{page page='understand-expression-and-scripting-languages-used-in-nuxeo'}})
- [Variables Available in the Automation Context]({{page page='variables-available-in-the-automation-context'}})
- [HOWTO: Customize Email Templates]({{page page='how-to-customize-email-templates'}})
- [Alerts]({{page space='userdoc' page='collaborative-features'}}#alerts)

{{/panel}}</div><div class="column medium-6">

</div></div>
