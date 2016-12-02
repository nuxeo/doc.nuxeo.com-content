---
title: How to Enable the Trash Feature
review:
    comment: ''
    date: '2015-12-01'
    status: ok
details:
    howto:
        excerpt: >-
            Learn how to enable the trash feature on your document type using
            Nuxeo Studio.
        level: Beginner
        tool: Studio
        topics: 'Document type, Life cycle'
labels:
    - content-review-lts2016
    - document-type
    - delete
    - life-cycle
    - howto
    - excerpt
confluence:
    ajs-parent-page-id: '950287'
    ajs-parent-page-title: Content Repository
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: How+to+Enable+the+Trash+Feature
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/How+to+Enable+the+Trash+Feature'
    page_id: '6030187'
    shortlink: awNc
    shortlink_source: 'https://doc.nuxeo.com/x/awNc'
    source_link: /display/NXDOC/How+to+Enable+the+Trash+Feature
tree_item_index: 1300
history:
    -
        author: Solen Guitter
        date: '2015-12-08 14:23'
        message: ink updat
        version: '25'
    -
        author: Manon Lumeau
        date: '2015-10-29 15:54'
        message: ''
        version: '24'
    -
        author: Solen Guitter
        date: '2014-12-01 22:21'
        message: ''
        version: '23'
    -
        author: Michaël Vachette
        date: '2014-11-13 14:39'
        message: ''
        version: '22'
    -
        author: Michaël Vachette
        date: '2014-11-13 14:34'
        message: ''
        version: '21'
    -
        author: Michaël Vachette
        date: '2014-11-13 14:33'
        message: ''
        version: '20'
    -
        author: Alain Escaffre
        date: '2014-09-19 16:15'
        message: ''
        version: '19'
    -
        author: Manon Lumeau
        date: '2014-09-09 11:17'
        message: ''
        version: '18'
    -
        author: Manon Lumeau
        date: '2014-09-08 17:56'
        message: ''
        version: '17'
    -
        author: Manon Lumeau
        date: '2014-09-08 17:49'
        message: ''
        version: '16'
    -
        author: Solen Guitter
        date: '2014-07-03 16:12'
        message: ''
        version: '15'
    -
        author: Manon Lumeau
        date: '2014-07-02 15:36'
        message: ''
        version: '14'
    -
        author: Manon Lumeau
        date: '2014-07-02 15:35'
        message: ''
        version: '13'
    -
        author: Manon Lumeau
        date: '2014-07-02 15:08'
        message: ''
        version: '12'
    -
        author: Manon Lumeau
        date: '2014-07-02 15:08'
        message: ''
        version: '11'
    -
        author: Manon Lumeau
        date: '2014-07-02 14:57'
        message: ''
        version: '10'
    -
        author: Manon Lumeau
        date: '2014-07-02 14:56'
        message: ''
        version: '9'
    -
        author: Manon Lumeau
        date: '2014-07-02 14:55'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2013-09-02 14:45'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2011-11-09 09:48'
        message: Migrated to Confluence 4.0
        version: '6'
    -
        author: Solen Guitter
        date: '2011-11-09 09:48'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2011-09-12 12:44'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2011-07-19 16:20'
        message: ''
        version: '3'
    -
        author: Alain Escaffre
        date: '2011-03-15 14:23'
        message: ''
        version: '2'
    -
        author: Alain Escaffre
        date: '2011-03-15 14:23'
        message: ''
        version: '1'

---
The Nuxeo Platform has a trash feature: deleted document are actually not deleted but moved "in the trash", before being really deleted. See [more information about this feature]({{page space='userdoc' page='deleting-content'}}) in the user guide.

{{! excerpt}}

To enable the trash on your document type, you need either to assign him the default life cycle (which is the case if you don't configure it) or, if you created a custom life cycle, to provide `delete` transitions to the `deleted` state, from each other state. Moreover, in order to be able to restore documents, you must provide a `undelete` transition from the `deleted` state to another state in the lifecycle.

{{! /excerpt}}

See the sample below:

![]({{file name='default_lifecycle.png'}} ?w=600,border=true)

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Popular How-Tos'}}

*   [undefined]()&nbsp;
*   [How to Override Existing Document Types]({{page page='how-to-override-existing-document-types'}}) &nbsp;
*   [How to Add Complex Fields on Your Document Type]({{page page='how-to-add-complex-fields-on-your-document-type'}})
*   [How-To Index]({{page page='how-to-index'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related Documentation'}}

*   [Documents in Nuxeo Studio]({{page space='studio' page='documents'}})
*   [Content Repository]({{page page='content-repository'}})
*   [Available Facets]({{page page='available-facets'}})
*   [Life cycle]({{page space='studio' page='life-cycle'}})
*   [Schemas]({{page space='studio' page='schemas'}})

{{/panel}}</div></div>
