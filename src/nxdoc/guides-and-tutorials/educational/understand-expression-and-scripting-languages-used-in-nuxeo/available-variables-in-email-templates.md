---
title: Available Variables in Email Templates
review:
    comment: ''
    date: ''
    status: ok
labels:
    - variable
    - email
    - content-review-6-0
toc: true
confluence:
    ajs-parent-page-id: '22380731'
    ajs-parent-page-title: Understand Expression and Scripting Languages Used in Nuxeo
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: Available+Variables+in+Email+Templates
    canonical_source: >-
        https://doc.nuxeo.com/display/NXDOC60/Available+Variables+in+Email+Templates
    page_id: '23365298'
    shortlink: soZkAQ
    shortlink_source: 'https://doc.nuxeo.com/x/soZkAQ'
    source_link: /display/NXDOC60/Available+Variables+in+Email+Templates
history:
    - 
        author: Solen Guitter
        date: '2015-10-08 09:51'
        message: 'ix typo in ${workflowDocuments} exampl'
        version: '3'
    - 
        author: Solen Guitter
        date: '2015-01-29 14:08'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2015-01-29 14:07'
        message: ''
        version: '1'

---
{{#> callout type='info' }}

For a broader look about variables available in different contexts, have a look at the [Understand Expression and Scripting Languages Used in Nuxeo]({{page page='understand-expression-and-scripting-languages-used-in-nuxeo'}}) page.

{{/callout}}{{! excerpt}}

In your email templates, you have access to different variables depending if you are in an automation chain or in a workflow notification context. This page references them.

{{! /excerpt}}

## Automation Chain "Notification > Send Email" Operation Context

Variables that can be used to set up an email in an automation chain.

*   `${Document}` **-** The context document. This is the document on which some action was done and the [send mail operation](http://explorer.nuxeo.com/nuxeo/site/distribution/server-9.1/viewOperation/Notification.SendMail) was triggered. See [Use of MVEL in Automation chains (document wrapper)]({{page page='use-of-mvel-in-automation-chains'}}) for details.
*   `${docUrl}` - The document URL.
*   `${viewId}` **-** The view of the document which will be displayed by the document URL.
*   `${subject}` - The mail subject.
*   `${to}` - The mail recipients.
*   `${from}` - The mail sender.
*   `${CurrentDate}` - The current date. See [Use of MVEL in Automation chains (date wrapper)]({{page page='use-of-mvel-in-automation-chains'}}) for details.
*   `${CurrentUser}` - The current user.

    {{#> callout type='note' }}

    `${CurrentUser}` is not correctly working for now in FTL templates.

    {{/callout}}
*   `${Fn}`- A collection of useful functions. See [Use of MVEL in Automation chains (fn object)]({{page page='use-of-mvel-in-automation-chains'}}) for details.
*   `${Env}` - A hashmap containing Nuxeo environment variables. Example: `Env["org.nuxeo.ecm.product.name"]`.

## Workflow Task Notification Context

Variables that can be used when a notification is set up from a workflow node's configuration.

*   `${recipients}` - The email recipients. Provided as a usernames list. Example: `${recipients[0]}`.
*   `${userUrl}` - The URL to access the profile of the user running the task. Note that this might not be the current user. See the [workflow engine FAQ]({{page page='workflow-engine-faq'}}) for details.
*   `${docMainFileUrl}` - The URL of the document's main file (assuming the document contains one).
*   `${docState}` - The document's current life cycle state.
*   `${documentLifeCycle}` - The document's current life cycle state.
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

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

*   [Understand Expression and Scripting Languages Used in Nuxeo]({{page page='understand-expression-and-scripting-languages-used-in-nuxeo'}})
*   [Variables Available in the Automation Context]({{page page='variables-available-in-the-automation-context'}})
*   [How to Customize Email Templates]({{page page='how-to-customize-email-templates'}})
*   [Alerts]({{page space='userdoc60' page='alerts'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
