---
title: Workflow Use Cases
review:
    comment: ''
    date: ''
    status: ok
labels:
    - content-review-lts2015
is_overview: true
confluence:
    ajs-parent-page-id: '28475557'
    ajs-parent-page-title: Educational
    ajs-space-key: NXDOC710
    ajs-space-name: Nuxeo Platform Developer Documentation — LTS 2015
    canonical: Workflow+Use+Cases
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC710/Workflow+Use+Cases'
    page_id: '28475546'
    shortlink: moCyAQ
    shortlink_source: 'https://doc.nuxeo.com/x/moCyAQ'
    source_link: /display/NXDOC710/Workflow+Use+Cases
tree_item_index: 400
history:
    -
        author: Manon Lumeau
        date: '2016-07-20 13:45'
        message: emove children display macro
        version: '2'
    -
        author: Alain Escaffre
        date: '2014-05-06 01:08'
        message: ''
        version: '1'

---
<div class="row" data-equalizer data-equalize-on="medium">

<div class="column medium-6">
{{#> panel type='secondary' match_height='true'}}
### Simple Workflow Example

Company C has decided to be more rigorous on proposals sent by the sales team. A workflow has to be set up so that each proposal is reviewed by the head of operations, this one being able to decide of an additional juridical control.

[Learn more&nbsp;<i class="fa fa-long-arrow-right" aria-hidden="true"></i>]({{page version='' space='nxdoc' page='simple-workflow-example'}})
{{/panel}}

{{#> panel type='secondary' match_height='true'}}
### Sub Workflow Example

The subworkflow functionality is the ability to call a workflow from another workflow (creating inception-like workflows), and to pass it variables along the way. The main workflow is suspended while the subworkflow runs, and resumes when the subworkflow ends.

[Learn more&nbsp;<i class="fa fa-long-arrow-right" aria-hidden="true"></i>]({{page version='' space='nxdoc' page='sub-workflow-example'}})
{{/panel}}
</div>

<div class="column medium-6">
{{#> panel type='secondary' match_height='true'}}
### Workflow Escalation Rules Example

The company OhMyDoc has decided to set up a validation workflow for its press releases, with due dates and automatic escalation to the next step of the workflow after a defined period.

[Learn more&nbsp;<i class="fa fa-long-arrow-right" aria-hidden="true"></i>]({{page version='' space='nxdoc' page='workflow-escalation-rules-example'}})
{{/panel}}
</div>

<div class="column medium-6">
{{#> panel type='secondary' match_height='true'}}
### One step validation flow based on lifecycle only

In this tutorial we will implement a chained workflow, that enables to validate a document in one step. We will make sure to store a few important dates on the document and we will log important steps into the document's history. Also, we will make sure that during this workflow, people receive consistent email notifications.

[Learn more&nbsp;<i class="fa fa-long-arrow-right" aria-hidden="true"></i>]({{page version='' space='nxdoc' page='one-step-validation-flow-based-on-lifecycle-only'}})
{{/panel}}
</div>
</div>
