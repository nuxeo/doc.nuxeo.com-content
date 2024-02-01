---
title: Life Cycle
review:
    comment: ''
    date: ''
    status: ok
labels:
    - life-cycle
confluence:
    ajs-parent-page-id: '12911801'
    ajs-parent-page-title: Content Model
    ajs-space-key: Studio
    ajs-space-name: Nuxeo Online Services
    canonical: Life+cycle
    canonical_source: 'https://doc.nuxeo.com/display/Studio/Life+cycle'
    page_id: '12911983'
    shortlink: bwXF
    shortlink_source: 'https://doc.nuxeo.com/x/bwXF'
    source_link: /display/Studio/Life+cycle
tree_item_index: 300
history:
    -
        author: Manon Lumeau
        date: '2014-09-08 17:36'
        message: ''
        version: '5'
    -
        author: Frédéric Vadon
        date: '2014-06-12 17:18'
        message: typo
        version: '4'
    -
        author: Alain Escaffre
        date: '2013-01-03 11:50'
        message: ''
        version: '3'
    -
        author: Alain Escaffre
        date: '2013-01-02 00:45'
        message: ''
        version: '2'
    -
        author: Benjamin Jalon
        date: '2012-12-04 08:42'
        message: ''
        version: '1'
---

{{#> callout type='info' heading='Hyland University'}}
Watch the related content in Hyland University:</br>
[Course on Content Model Design in Nuxeo Studio](https://university.hyland.com/courses/e4024)</br>
[Expert Session on Content Modeling Options](https://university.hyland.com/courses/e4025)
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/UNIVERSITY/doctypes_university.png
    name: doctypes_university.png
    studio_modeler#screenshot#up_to_date
--}}
![doctypes_university.png](/nx_assets/27d822b7-7815-48e0-95ad-0ff102a284d2.png ?w=450,border=true)
{{/callout}}

## Concept

A lifecycle is a set of **states** and transitions that apply to a document. One of the states is marked as being the "initial state" and is the state of the document when it is created. States that the document can hold depend on the transitions that are set between the states. Default lifecycle in Nuxeo contains following states: project, approved, obsolete. One could see lifecycle just as yet another metadata with a controlled list of values, but actually the framework provides API around lifecycle management, such as ability to "reset" the lifecycle of a document, and ability to "[follow](http://explorer.nuxeo.org/nuxeo/site/distribution/latest/viewOperation/Document.SetLifeCycle)" a transition.

## Editing a Lifecycle

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Life-cycle/Lifecycle
    name: Lifecycle.png
    studio_modeler#screenshot#up_to_date
--}}
![Lifecycle](/nx_assets/006c0623-cfc0-4b2b-95b2-7d7f75343593.png ?w=600,border=true)

* You need to drop one and only one **initial state.**
* You can drop as many states as you want.
* From one state you can pull an arrow to another state and give a name to the transition by clicking on the edit icon that appear if you let the mouse over.
* Filling transitions name is not mandatory, the system will automatically name them with the rule : "to_"+state name.
* It is possible to have several arrows with the same transition name.

{{{multiexcerpt 'disabling-feature' page='branding'}}}

<div class="row" data-equalizer data-equalize-on="medium">
<div class="column medium-6">
{{#> panel heading='Related page'}}

- [Trash Service]({{page space='nxdoc' page='trash-service'}})

{{/panel}}</div></div>
