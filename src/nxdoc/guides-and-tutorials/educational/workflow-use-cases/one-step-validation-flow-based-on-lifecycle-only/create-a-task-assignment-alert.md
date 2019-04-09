---
title: Create a task assignment alert
review:
    comment: ''
    date: ''
    status: ok
labels:
    - tuto-automation
    - studio-20
    - tuto-template
confluence:
    ajs-parent-page-id: '22380643'
    ajs-parent-page-title: One step validation flow based on lifecycle only
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: Create+a+task+assignment+alert
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC60/Create+a+task+assignment+alert'
    page_id: '22380592'
    shortlink: MIBVAQ
    shortlink_source: 'https://doc.nuxeo.com/x/MIBVAQ'
    source_link: /display/NXDOC60/Create+a+task+assignment+alert
tree_item_index: 300
history:
    -
        author: Solen Guitter
        date: '2015-01-29 14:10'
        message: ormat and UR
        version: '20'
    -
        author: Thibaud Arguillere
        date: '2013-01-22 12:31'
        message: ''
        version: '19'
    -
        author: Arthur Gallouin
        date: '2011-06-01 18:27'
        message: Migrated to Confluence 4.0
        version: '18'
    -
        author: Arthur Gallouin
        date: '2011-06-01 18:27'
        message: ''
        version: '17'
    -
        author: Arthur Gallouin
        date: '2011-06-01 18:24'
        message: ''
        version: '16'
    -
        author: Arthur Gallouin
        date: '2011-06-01 16:49'
        message: ''
        version: '15'
    -
        author: Arthur Gallouin
        date: '2011-06-01 16:47'
        message: ''
        version: '14'
    -
        author: Arthur Gallouin
        date: '2011-06-01 16:44'
        message: ''
        version: '13'
    -
        author: Arthur Gallouin
        date: '2011-06-01 16:43'
        message: ''
        version: '12'
    -
        author: Arthur Gallouin
        date: '2011-06-01 16:43'
        message: ''
        version: '11'
    -
        author: Arthur Gallouin
        date: '2011-06-01 16:42'
        message: ''
        version: '10'
    -
        author: Arthur Gallouin
        date: '2011-06-01 16:41'
        message: ''
        version: '9'
    -
        author: Arthur Gallouin
        date: '2011-06-01 16:41'
        message: ''
        version: '8'
    -
        author: Arthur Gallouin
        date: '2011-06-01 16:40'
        message: ''
        version: '7'
    -
        author: Arthur Gallouin
        date: '2011-06-01 16:38'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2011-01-27 19:12'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2011-01-26 15:16'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2011-01-17 15:40'
        message: ''
        version: '3'
    -
        author: Solen Guitter
        date: '2011-01-17 15:38'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2011-01-17 15:37'
        message: ''
        version: '1'
previous_link: nxdoc/implement-the-validation-logic
next_link: nxdoc/create-a-button-that-triggers-the-task-assignment

---
Here, we want to create the template of the email that will be sent to the users with "Document Validation" permission to notify them that they have a document to review. This template will be used in the operation chain used to assign the validation task to users, using the "Send E-Mail" operation (see next step: [Create a button that triggers the task assignment]({{page space='studio' page='create-a-button-that-triggers-the-task-assignment'}})).

Create the mail template as described on the how-to [Create a mail template]({{page page='how-to-customize-email-templates'}}), with the parameters below.

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">

Field

</th><th colspan="1">

Content

</th></tr><tr><td colspan="1">

ID

</td><td colspan="1">

`validationWorkflow_mail`

</td></tr><tr><td colspan="1">

Content

</td><td colspan="1">

```
Hello,<br />
 <br />
 The user ${Context['UserFirstName']} ${Context['UserLastName']} needs your approval for the following document :<br />
 <br />
 Title : ${Document['dc:title']}<br />
 <br />
 Description : ${Document['dc:description']}<br />
 <br />
 Creation date : ${Document['dc:created']}<br />
 <br />
 Link to the document : <a href="${docUrl}">${Document['dc:title']}</a><br />\
```

</td></tr></tbody></table></div>

The context Variables UserFirstName and UserLastName are here to pass into a mail template the values of CurrentUser.FirstName and CurrentUser.LastName. To load these variables, you just need to put into the chain the blocks &laquo; Execution Context > Set Context Variable &raquo;.

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">

N&deg;

</th><th colspan="1">

Operation

</th><th colspan="1">

Parameter 1

</th><th colspan="1">

parameter 2

</th></tr><tr><td colspan="1">

1

</td><td colspan="1">

Execution Context > Set Context Variable

</td><td colspan="1">

name: UserLastName

</td><td colspan="1">

value: `@{CurrentUser.LastName}`

</td></tr><tr><td colspan="1">

2

</td><td colspan="1">

Execution Context > Set Context Variable

</td><td colspan="1">

name: UserFirstName

</td><td colspan="1">

value: `@{CurrentUser.FirstName}`

</td></tr></tbody></table></div>{{#> callout type='tip' }}

Sending an email to a group of users

You can use the block &laquo; Users & Groups > Get Principal Emails &raquo; in order to load the list of users sharing the same permission (field permission) into the variable chosen into the variable name field.

{{/callout}}
