---
title: Create a Button That Triggers the Task Assignment
review:
    comment: ''
    date: '2016-12-21'
    status: ok
labels:
    - lts2016-ok
    - tuto-automation
    - tuto-user-action
confluence:
    ajs-parent-page-id: '3345551'
    ajs-parent-page-title: One step validation flow based on lifecycle only
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Create+a+button+that+triggers+the+task+assignment
    canonical_source: >-
        https://doc.nuxeo.com/display/NXDOC/Create+a+button+that+triggers+the+task+assignment
    page_id: '3345645'
    shortlink: 7Qwz
    shortlink_source: 'https://doc.nuxeo.com/x/7Qwz'
    source_link: /display/NXDOC/Create+a+button+that+triggers+the+task+assignment
tree_item_index: 400
history:
    -
        author: Manon Lumeau
        date: '2016-04-28 12:36'
        message: 'ix Studio menu label'
        version: '30'
    -
        author: Manon Lumeau
        date: '2016-01-18 15:38'
        message: 'replace Write by Edit'
        version: '29'
    -
        author: Solen Guitter
        date: '2015-01-26 16:51'
        message: link update
        version: '28'
    -
        author: Thibaud Arguillere
        date: '2013-01-22 12:32'
        message: ''
        version: '27'
    -
        author: Benjamin Jalon
        date: '2012-08-30 17:46'
        message: Migrated to Confluence 4.0
        version: '26'
    -
        author: Benjamin Jalon
        date: '2012-08-30 17:46'
        message: ''
        version: '25'
    -
        author: Solen Guitter
        date: '2011-08-06 00:56'
        message: ''
        version: '24'
    -
        author: Arthur Gallouin
        date: '2011-06-01 18:28'
        message: ''
        version: '23'
    -
        author: Arthur Gallouin
        date: '2011-06-01 18:25'
        message: ''
        version: '22'
    -
        author: Arthur Gallouin
        date: '2011-06-01 17:24'
        message: ''
        version: '21'
    -
        author: Arthur Gallouin
        date: '2011-06-01 17:23'
        message: ''
        version: '20'
    -
        author: Arthur Gallouin
        date: '2011-06-01 17:05'
        message: ''
        version: '19'
    -
        author: Solen Guitter
        date: '2011-01-27 19:15'
        message: Added "send email" step in operation chain
        version: '18'
    -
        author: Solen Guitter
        date: '2010-08-30 15:25'
        message: ''
        version: '17'
    -
        author: Solen Guitter
        date: '2010-08-30 15:25'
        message: ''
        version: '16'
    -
        author: Solen Guitter
        date: '2010-08-30 15:22'
        message: ''
        version: '15'
    -
        author: Solen Guitter
        date: '2010-08-30 14:44'
        message: ''
        version: '14'
    -
        author: Solen Guitter
        date: '2010-08-18 11:36'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2010-08-18 11:35'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2010-08-18 11:34'
        message: ''
        version: '11'
    -
        author: Solen Guitter
        date: '2010-08-18 11:17'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2010-08-18 11:08'
        message: ''
        version: '9'
    -
        author: Alain Escaffre
        date: '2010-07-28 01:45'
        message: ''
        version: '8'
    -
        author: Alain Escaffre
        date: '2010-07-28 00:40'
        message: ''
        version: '7'
    -
        author: Alain Escaffre
        date: '2010-07-28 00:34'
        message: ''
        version: '6'
    -
        author: Alain Escaffre
        date: '2010-07-28 00:11'
        message: ''
        version: '5'
    -
        author: Alain Escaffre
        date: '2010-07-27 09:03'
        message: ''
        version: '4'
    -
        author: Alain Escaffre
        date: '2010-07-27 09:02'
        message: ''
        version: '3'
    -
        author: Alain Escaffre
        date: '2010-07-27 09:02'
        message: ''
        version: '2'
    -
        author: Alain Escaffre
        date: '2010-07-27 08:46'
        message: ''
        version: '1'

---
We have a new permission that can be used in workspaces, we will leverage it for our validation logic: we will create a button that will assign a task to people having the `Workflow_validation` permission.
Only administrators of the workspace can modify the access rights. This means that it is the workspace administrator who decides of the assignments rules.

To make this happen, we will leverage the `Create Task` operation.

**To add the "request" button:**

1.  In Studio, create a new **User Action**.
2.  Fill in :
    *   the ID of your new action: `ValidationDemandButton`
    *   its label: `Request for validation`
    *   the area where you want the button to be displayed: `Contextual Tools`. More information on the page [Actions Display]({{page page='actions-display'}}).
    * In the "Action Activation" part of the action definition form, enable the button:
      - only for documents of type `File`
      - and for users who have at least the "Edit" permission
    * In the "Action Execution" part, click on the `create` link to create the corresponding automation chain.
3.  Give it a name, for instance `RequestForValidationChain`.
4.  Compose this automation chain, see below for the detail. Note the `Services > Task Create` operation, whose goal is to assign the task, and to record what operation chain will be called when the task will be validated (and the one call if rejected too).
5.  Save your chain.

{{#> callout type='tip' }}

How to have the UI options in the automation chains panel.

First you have to define a user action, then, go to the bottom of the option page to the section action execution  and click on the link **Create**. You will be redirected to the automation chains panel, but you will have the UI options available.

{{/callout}}

**The chain parameters**

```
- Context.FetchDocument
- WebUI.AddInfoMessage:
    message: The workflow has been started.
- Context.GetUsersGroupIdsWithPermissionOnDoc:
    permission: Workflow_validation
    variable name: assignees
    ignore groups: "false"
    prefix identifiers: "true"
    resolve groups: "false"
- Context.GetEmailsWithPermissionOnDoc:
    permission: Workflow_validation
    variable name: groupEmails
    ignore groups: "false"
- Context.SetVar:
    name: UserLastName
    value: " @{CurrentUser.LastName}"
- Context.SetVar:
    name: UserFirstName
    value: "@{CurrentUser.FirstName}"
- Auth.LoginAs:
    name: Administrator
- Task.Create:
    task name: "Validation: @{Document.name}"
    due date: "@{CurrentDate.days(7).date}"
    directive: Enter a Directive
    comment: Enter a comment
    accept operation chain: validationWorkflow_validate
    reject operation chain: validationWorkflow_rejected
    variable name for actors prefixed ids: assignees
    create one task per actor: "true"
- Auth.Logout
- Document.Mail:
    from: "@{CurrentUser.email}"
    message: "template:validationWorkflow_mail"
    subject: "Document Validation: @{Document.name}"
    to: "@{groupEmails}"
    HTML: "true"
    Strict User Resolution: "false"
    rollbackOnError: "true"
    viewId: view_documents
```

**Tips**

- In this sample, when the user validates, we call the validation chain and everything stops. We could also have decided to run another "Create Task" in that `ValidationChain`, so as to create the task for next step validation, and continue all along the lifecycle of the document if necessary.

- If you want to allow the user to launch a workflow without leaving him the rights to approve or reject the task, you can login as an Administrator using the Users & Groups > Login As block just before the Services > Create task block. Like that, the task will be created as an administrator and the current used won't have the basics approve / reject rights on the task. Don't forget to logout after that.

<div class="row" data-equalizer data-equalize-on="medium">
<div class="column medium-6">&larr;&nbsp;[Create a Task Assignment Alert]({{page version='' space='nxdoc' page='create-a-task-assignment-alert'}})</div>
<div class="column medium-6" style="text-align:right">&nbsp;</div>
</div>
