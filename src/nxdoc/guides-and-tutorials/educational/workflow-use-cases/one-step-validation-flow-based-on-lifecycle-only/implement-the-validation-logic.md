---
title: Implement the validation logic
review:
    comment: ''
    date: ''
    status: ok
labels:
    - content-review-lts2015
    - tuto-automation
confluence:
    ajs-parent-page-id: '28475680'
    ajs-parent-page-title: One step validation flow based on lifecycle only
    ajs-space-key: NXDOC710
    ajs-space-name: Nuxeo Platform Developer Documentation — LTS 2015
    canonical: Implement+the+validation+logic
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC710/Implement+the+validation+logic'
    page_id: '28475686'
    shortlink: JoGyAQ
    shortlink_source: 'https://doc.nuxeo.com/x/JoGyAQ'
    source_link: /display/NXDOC710/Implement+the+validation+logic
tree_item_index: 200
history:
    -
        author: Benjamin Jalon
        date: '2012-08-30 17:47'
        message: ''
        version: '19'
    -
        author: Benjamin Jalon
        date: '2012-08-30 17:47'
        message: ''
        version: '18'
    -
        author: Arthur Gallouin
        date: '2011-06-01 17:07'
        message: ''
        version: '17'
    -
        author: Arthur Gallouin
        date: '2011-06-01 16:45'
        message: ''
        version: '16'
    -
        author: Arthur Gallouin
        date: '2011-06-01 16:28'
        message: ''
        version: '15'
    -
        author: Arthur Gallouin
        date: '2011-06-01 16:27'
        message: ''
        version: '14'
    -
        author: Arthur Gallouin
        date: '2011-06-01 16:26'
        message: ''
        version: '13'
    -
        author: Arthur Gallouin
        date: '2011-06-01 16:25'
        message: ''
        version: '12'
    -
        author: Arthur Gallouin
        date: '2011-06-01 16:23'
        message: ''
        version: '11'
    -
        author: Arthur Gallouin
        date: '2011-06-01 15:55'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2011-01-14 16:50'
        message: format
        version: '9'
    -
        author: Solen Guitter
        date: '2010-08-31 16:35'
        message: added refusal chain
        version: '8'
    -
        author: Solen Guitter
        date: '2010-08-30 13:57'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2010-08-18 11:02'
        message: ''
        version: '6'
    -
        author: Alain Escaffre
        date: '2010-07-28 00:34'
        message: ''
        version: '5'
    -
        author: Alain Escaffre
        date: '2010-07-28 00:33'
        message: ''
        version: '4'
    -
        author: Alain Escaffre
        date: '2010-07-28 00:32'
        message: ''
        version: '3'
    -
        author: Alain Escaffre
        date: '2010-07-28 00:31'
        message: ''
        version: '2'
    -
        author: Alain Escaffre
        date: '2010-07-28 00:13'
        message: ''
        version: '1'
previous_link: nxdoc/functional-tour
next_link: nxdoc/create-a-task-assignment-alert

---
The validation logic defines what happens when the user approves the document, and what happens when he rejects it. To do that, we will create 2 automation chains:

*   The validation automation chain,
*   The reject automation chain.

## Validation chain creation

The validation automation chain will be used by the users with validationWorkflow_validation permission, to approve the document. It will:

*   change the lifecycle state of the document,
*   update the validation date property on the document,
*   log a "Spelling review achieved" on the document audit trail.

In this step, we will just create this chain, not adding anything to call it, neither a user action nor an event handler. Actually, the chain will be called if the user "accepts" the document's approval.

{{#> panel heading='To implement the validation chain:'}}

1.  [Create the automation chain]({{page space='studio' page='use-content-automation'}}) whose operations and parameters are given below. Don't bind it to any button or event handler, just create the chain.

![]({{file name='Image 7.png'}} ?border=true,thumbnail=true)

{{/panel}}

**Validation chain parameters**

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

Fetch > Context Document

</td><td colspan="1">

_

</td><td colspan="1">

_

</td></tr><tr><td colspan="1">

2

</td><td colspan="1">

Document > Follow lifecycle transition

</td><td colspan="1">

value: `approve`

</td><td colspan="1">

_

</td></tr><tr><td colspan="1">

4

</td><td colspan="1">

Document > Update property

</td><td colspan="1">

value: `@{CurrentDate.days(7).date()`}

</td><td colspan="1">

xpath: `dc:valid`

</td></tr><tr><td colspan="1">

5

</td><td colspan="1">

Services > Log Event In Audit

</td><td colspan="1">

event: `Document_Validated`

</td><td colspan="1">

category: `automation`

</td></tr></tbody></table></div>

## Reject chain

Like the validation chain, the refusal automation chain will be used by the users with validationWorkflow_validation permission, but to reject the document.

{{#> panel heading='To implement the reject chain:'}}

1.  [Create the automation chain]({{page space='studio' page='use-content-automation'}}) whose operations and parameters are given below. Don't bind it to any button or event handler, just create the chain.

{{/panel}}

**Reject chain parameters**

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

Fetch > Context Document

</td><td colspan="1">

_

</td><td colspan="1">

_

</td></tr><tr><td colspan="1">

2

</td><td colspan="1">

Services > Log Event In Audit

</td><td colspan="1">

event: `Validation_rejected`

</td><td colspan="1">

category: `automation`

</td></tr></tbody></table></div>
