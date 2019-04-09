---
title: Create a button that triggers the task assignment
review:
    comment: ''
    date: ''
    status: ok
labels:
    - content-review-lts2015
    - tuto-user-action
    - tuto-automation
confluence:
    ajs-parent-page-id: '28475680'
    ajs-parent-page-title: One step validation flow based on lifecycle only
    ajs-space-key: NXDOC710
    ajs-space-name: Nuxeo Platform Developer Documentation — LTS 2015
    canonical: Create+a+button+that+triggers+the+task+assignment
    canonical_source: >-
        https://doc.nuxeo.com/display/NXDOC710/Create+a+button+that+triggers+the+task+assignment
    page_id: '28475668'
    shortlink: FIGyAQ
    shortlink_source: 'https://doc.nuxeo.com/x/FIGyAQ'
    source_link: /display/NXDOC710/Create+a+button+that+triggers+the+task+assignment
tree_item_index: 400
history:
    -
        author: Manon Lumeau
        date: '2016-04-28 12:37'
        message: 'ix Studio menu label     '
        version: '30'
    -
        author: Manon Lumeau
        date: '2016-01-18 15:38'
        message: 'replace "Write" by "Edit"  '
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
previous_link: nxdoc/create-a-task-assignment-alert

---
Now that we have a new permission that can be used in workspaces, we will leverage it for our validation logic: we will create a button that will assign a task to people having the "spellingValidation" permission.
Only administrators of the workspace can modify the access rights. This means that it is the workspace administrator who decides of the assignments rules, which is more restrictive than the default behavior in Nuxeo DM (the user chooses himself all the participants).

To make this happen, we will leverage the `Create Task` operation.

**To add the "request" button:**

1.  Right-click on the **User actions** item of Studio tree, and click **New Action Feature**.
2.  Fill in :
    *   the ID of your new action: `ValidationDemandButton`,
    *   its label: `Request for validation`,
    *   [the area where you want the button to be displayed]({{page page='actions-display'}}): `Contextual Tools`.
3.  Click the button **OK**.
4.  In the "Action Activation" part of the action definition form, enable the button:
    *   only for documents of type `File`,
    *   and for users who have at least the `Edit` permission.
5.  Click on the `create` link at the bottom of the page, to create the corresponding automation chain.
6.  Give it a name, for instance `RequestForValidationChain`.
7.  Compose this automation chain, see below for the detail. Note the `Services > Create task` operation, whose goal is to assign the task, and to record what operation chain will be called when the task will be validated (and the one call if rejected too).
8.  Save your chain.

{{#> callout type='tip' }}

How to have the UI options in the automation chains panel.

First you have to define a user action, then, go to the bottom of the option page to the section &laquo; action execution &raquo; and click on the link Create. You will be redirected to the automation chains panel, but you will have the UI options available.

{{/callout}}

**The** `**RequestForValidationChain**` **chain parameters**

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">

N&deg;

</th><th colspan="1">

Operation

</th><th colspan="1">

Parameter 1

</th><th colspan="1">

parameter 2

</th><th colspan="1">

parameter 3

</th><th colspan="1">

parameter 4

</th><th colspan="1">

parameter 5

</th><th colspan="1">

parameter 6

</th><th colspan="1">

parameter 7

</th></tr><tr><td colspan="1">

1

</td><td colspan="1">

Fetch > Context Document

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td></tr><tr><td colspan="1">

2

</td><td colspan="1">

Users Interface > Add Info Message

</td><td colspan="1">

message: The workflow has been Started

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td></tr><tr><td colspan="1">

3

</td><td colspan="1">

Users and Groups > Get Users and Groups

</td><td colspan="1">

permission: validationWorkflow_validation

</td><td colspan="1">

variable name: assignees

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

Prefix Identifier: True

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td></tr><tr><td colspan="1">

4

</td><td colspan="1">

Users and Groups > Get Principal Emails

</td><td colspan="1">

permission: validationWorkflow_validation

</td><td colspan="1">

variable name: groupEmails

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td></tr><tr><td colspan="1">

5

</td><td colspan="1">

Execution Context > Set Context Variable

</td><td colspan="1">

name: UserLastName

</td><td colspan="1">

value: @{CurrentUser.LastName}

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td></tr><tr><td colspan="1">

6

</td><td colspan="1">

Execution Context > Set Context Variable

</td><td colspan="1">

name: UserFirstName

</td><td colspan="1">

value: @{CurrentUser.FirstName}

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td></tr><tr><td colspan="1">

7

</td><td colspan="1">

Users and Groups > Login As

</td><td colspan="1">

name: Administrator

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td></tr><tr><td colspan="1">

8

</td><td colspan="1">

Services > Create task

</td><td colspan="1">

Task name: `Validation: @{Document.name`}

</td><td colspan="1">

Due date: `@{CurrentDate.days(7).date()`}

</td><td colspan="1">

Directive: `Enter a Directive`

</td><td colspan="1">

Comment: `Enter a comment`

</td><td colspan="1">

accept operation chain: `validationWorkflow_validate`

</td><td colspan="1">

reject operation chain: `validationWorkflow_rejected`

</td><td colspan="1">

variable name for actors prefixed ids: `assignees`

</td></tr><tr><td colspan="1">

9

</td><td colspan="1">

Users and Groups > Logout

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

&nbsp;

</td></tr><tr><td colspan="1">

10

</td><td colspan="1">

Notification > Send E-Mail

</td><td colspan="1">

from: `@{CurrentUser.email`}

</td><td colspan="1">

message: Click on the icon ![]({{file name='STUDIO-explore-icon.png'}}) to select your mail template `validationWorkflow_mail`.

</td><td colspan="1">

Subject: Document Validation: @{Document.name}

</td><td colspan="1">

To: `@{groupEmails})`}

</td><td colspan="1">

As HTML: checked

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

viewID: `view_documents`

</td></tr></tbody></table></div>{{#> callout type='tip' }}

In this sample, when the user validates, we call the validation chain and everything stops. We could also have decided to run another "Create Task" in that `ValidationChain`, so as to create the task for next step validation, and continue all along the life cycle of the document if necessary.

{{/callout}} {{#> callout type='tip' }}

If you want to allow the user to launch a workflow without leaving him the rights to approve or reject the task, you can login as an Administrator using the &laquo; Users & Groups > Login As &raquo; block just before the &laquo; Services > Create task &raquo; block. Like that, the task will be created as an administrator and the current used won&rsquo;t have the basics approve / reject rights on the task. Don&rsquo;t forget to logout after that.

{{/callout}}
