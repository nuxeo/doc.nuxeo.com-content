---
title: Implement the Validation Logic
review:
    comment: ''
    date: '2016-12-21'
    status: ok
labels:
    - lts2016-ok
    - tuto-automation
confluence:
    ajs-parent-page-id: '3345551'
    ajs-parent-page-title: One step validation flow based on lifecycle only
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Implement+the+validation+logic
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Implement+the+validation+logic'
    page_id: '3345787'
    shortlink: ew0z
    shortlink_source: 'https://doc.nuxeo.com/x/ew0z'
    source_link: /display/NXDOC/Implement+the+validation+logic
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

---
The validation logic defines what happens when the user approves the document, and what happens when he rejects it. To do that, we will create two automation chains:

*   The validation automation chain
*   The reject automation chain

## Validation Chain Creation

The validation automation chain will be used by the users with validationWorkflow_validation permission, to approve the document. It will:

*   Change the lifecycle state of the document
*   Update the validation date property on the document
*   Log a "Document_Validated" event on the document audit trail

In this step, we will just create this chain, not adding anything to call it, neither a user action nor an event handler. Actually, the chain will be called if the user "accepts" the document's approval.

To implement the validation chain, [create the automation chain]({{page space='studio' page='use-content-automation'}}) whose operations and parameters are given below. Don't bind it to any button or event handler, just create the chain.

**Automation chain ID**

ID will be `validationWorkflow_validate`.

**Automation chain parameters**

```
- Context.FetchDocument
- Document.FollowLifecycleTransition:
    value: approve
- Document.SetProperty:
    xpath: "dc:valid"
    save: "true"
    value: "@{CurrentDate.days(7).date}"
- Audit.LogEvent:
    event: Document_Validated
    category: Automation
```
## Reject Chain Creation

Like the validation chain, the refusal automation chain will be used by the users with Workflow_validation permission, but to reject the document. In addition, it will log a "Validation_rejected" on the document audit trail.

To implement the reject chain, [create the automation chain]({{page space='studio' page='use-content-automation'}}) whose operations and parameters are given below. Don't bind it to any button or event handler, just create the chain.

**Automation chain ID**

ID will be `validationWorkflow_rejected`.

**Automation chain parameters**

```
- Context.FetchDocument
- Audit.LogEvent:
    event: Validation_rejected
    category: Automation
```

<div class="row" data-equalizer data-equalize-on="medium">
<div class="column medium-6">&larr;&nbsp;[Functional Tour]({{page version='' space='nxdoc' page='functional-tour'}})</div>
<div class="column medium-6" style="text-align:right">[Create a Task Assignment Alert]({{page version='' space='nxdoc' page='create-a-task-assignment-alert'}})&nbsp;&rarr;</div>
</div>
