---
title: Workflow Tutorials
description: Browse the list of tutorials available on workflows.
review:
    comment: ''
    date: '2018-01-02'
    status: ok
labels:
    - lts2016-ok
    - lts2017-ok
    - home
    - mlumeau
is_overview: true
confluence:
    ajs-parent-page-id: '19235679'
    ajs-parent-page-title: Educational
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Workflow+Use+Cases
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Workflow+Use+Cases'
    page_id: '19235786'
    shortlink: yoMlAQ
    shortlink_source: 'https://doc.nuxeo.com/x/yoMlAQ'
    source_link: /display/NXDOC/Workflow+Use+Cases
tree_item_index: 600
history:
    -
        author: Manon Lumeau
        date: '2016-07-20 12:22'
        message: emove children display macr
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

</div>

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Nuxeo Studio Community Cookbook'}}

- [Bulk Workflow Reassignment](https://github.com/nuxeo/nuxeo-studio-community-cookbook/tree/master/modules/nuxeo/bulk-workflow-reassignment)

{{/panel}}</div><div class="column medium-6">
</div></div>
