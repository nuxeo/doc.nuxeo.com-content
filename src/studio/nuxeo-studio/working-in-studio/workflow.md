---
title: Workflow
review:
    comment: ''
    date: ''
    status: ok
labels:
    - content-routing
    - workflow
is_overview: true
confluence:
    ajs-parent-page-id: '12911781'
    ajs-parent-page-title: Working in Studio
    ajs-space-key: Studio
    ajs-space-name: Nuxeo Online Services
    canonical: Workflow
    canonical_source: 'https://doc.nuxeo.com/display/Studio/Workflow'
    page_id: '11534627'
    shortlink: IwGw
    shortlink_source: 'https://doc.nuxeo.com/x/IwGw'
    source_link: /display/Studio/Workflow
tree_item_index: 400
history:
    -
        author: Manon Lumeau
        date: '2016-07-20 16:26'
        message: 'emove children display macro  '
        version: '13'
    -
        author: Alain Escaffre
        date: '2013-10-20 00:20'
        message: ''
        version: '12'
    -
        author: Alain Escaffre
        date: '2013-10-20 00:13'
        message: ''
        version: '11'
    -
        author: Solen Guitter
        date: '2013-05-22 16:20'
        message: ''
        version: '10'
    -
        author: Alain Escaffre
        date: '2013-05-06 01:32'
        message: ''
        version: '9'
    -
        author: Alain Escaffre
        date: '2013-05-06 01:31'
        message: ''
        version: '8'
    -
        author: Alain Escaffre
        date: '2013-05-06 01:31'
        message: ''
        version: '7'
    -
        author: Alain Escaffre
        date: '2012-12-31 02:42'
        message: ''
        version: '6'
    -
        author: Alain Escaffre
        date: '2012-12-31 02:38'
        message: ''
        version: '5'
    -
        author: Alain Escaffre
        date: '2012-12-31 02:37'
        message: ''
        version: '4'
    -
        author: Benjamin Jalon
        date: '2012-11-29 10:42'
        message: ''
        version: '3'
    -
        author: Alain Escaffre
        date: '2012-09-16 14:12'
        message: Migrated to Confluence 4.0
        version: '2'
    -
        author: Alain Escaffre
        date: '2012-09-16 14:12'
        message: ''
        version: '1'

---

{{#> callout type='info' heading='Nuxeo University'}}
Watch the related courses on Nuxeo University
- [Course on the Workflow Engine](https://university.nuxeo.com/learn/public/course/view/elearning/39/workflow-engine)
![]({{file version='' space='nxdoc' page='university' name='university-workflow.png'}} ?w=450,border=true)
{{/callout}}

The Nuxeo Enterprise Platform workflow engine, a.k.a. Content Routing, aims at providing a framework and tools for automatizing some content-based organizational processes in a maintainable way. It can be used as soon as you have a multi-steps process that involves various human actors and automated steps. It will accelerate the roll-out of your realization and make it easily understandable for future evolutions. Such multi-steps process can be complex documents authoring and validation (purchase order validation, product sheet, &hellip;), form flow (such as vacation request, training requests, expenses, travel authorization), and, of course, usual office document validation process.

{{{multiexcerpt 'disabling-feature' page='branding'}}}

You should first read the [Workflow pages of the Customization and Development section of the technical documentation]({{page space='nxdoc' page='workflow'}}) for knowing more about workflows. On the Studio documentation area, you will find details about the Studio screens and a tutorial to [start using the workflow engine]({{page space='nxdoc' page='simple-workflow-example'}}).
<div class="row" data-equalizer data-equalize-on="medium">
<div class="column medium-6">
{{#> panel type='secondary' match_height='true'}}
### Workflow Screens
- [Workflow creation form]({{page page='workflow-creation-form'}})
- [Definition tab]({{page page='definition-tab'}})
- [Variables tab]({{page page='variables-tab'}})
- [Activation tab]({{page page='activation-tab'}})
- [Graph tab]({{page page='graph-tab'}})
{{/panel}}
</div>

<div class="column medium-6">
{{#> panel type='secondary' match_height='true'}}
### Node Popup
- [General tab]({{page page='node-general-tab'}})
- [Form tab]({{page page='node-form-tab'}})
- [Transition tab]({{page page='node-transitions-tab'}})
- [Variables tab]({{page page='node-variables-tab'}})
- [Escalation rules tab]({{page page='node-escalation-rules-tab'}})
{{/panel}}
</div>
</div>
