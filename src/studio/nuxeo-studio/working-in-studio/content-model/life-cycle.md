---
title: Life cycle
review:
    comment: ''
    date: ''
    status: ok
labels:
    - life-cycle
    - content-review-6-0
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
## Concept

A life cycle is a set of states and transitions that apply to a document. One of the states is marked as being the "initial state" and is the state of the document when it is created. States that the document can hold depend on the transitions that are set between the states. Default life cycle in Nuxeo contains following states: project, approved, obsolete. One could see life cycle just as yet another metadata with a controlled list of values, but actually the framework provides API around life cycle management, such as ability to "reset" the life cycle of a document, and ability to "[follow](http://explorer.nuxeo.org/nuxeo/site/distribution/current/viewOperation/Document.SetLifeCycle)" a transition..

## Editing a life cycle

![]({{file name='Lifecycle.png'}} ?w=600,border=true)

*   You need to drop one and only one&nbsp;**initial state.**
*   You can drop as many states as you want.
*   From one state you can pull an arrow to another state and give a name to the transition by clicking on the edit icon that appear if you let the mouse over.
*   Filling transitions name is not mandatory, the system will automatically name them with the rule : "to_"+state name.
*   It is possible to have several arrows with the same transition name.
