---
title: 'HOWTO: Add New Relation Types'
review:
    comment: ''
    date: '2018-03-08'
    status: ok
details:
    howto:
        excerpt: Learn how to customize the relations predicates and add new types of relations.
        level: Beginner
        tool: Nuxeo Platform
        topics: Vocabulary
labels:
    - howto
    - relation
    - vocabulary
    - excerpt
    - lts2017-ok
confluence:
    ajs-parent-page-id: '2392405'
    ajs-parent-page-title: Managing Vocabularies
    ajs-space-key: USERDOC
    ajs-space-name: Nuxeo Platform User Documentation
    canonical: How+to+Add+New+Relation+Types
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC/How+to+Add+New+Relation+Types'
    page_id: '20519318'
    shortlink: lhk5AQ
    shortlink_source: 'https://doc.nuxeo.com/x/lhk5AQ'
    source_link: /display/USERDOC/How+to+Add+New+Relation+Types
history:
    -
        author: Solen Guitter
        date: '2015-08-31 12:41'
        message: 'ser doc reorganization: fix link to relation'
        version: '5'
    -
        author: Thierry Martins
        date: '2014-11-24 19:14'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2014-11-24 19:05'
        message: ''
        version: '3'
    -
        author: Solen Guitter
        date: '2014-11-24 18:57'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2014-11-24 18:57'
        message: ''
        version: '1'

---
The [relations]({{page page='editing-content'}}#relations) displayed by default in the Nuxeo Platform use two vocabularies to provide the predicates:

*   **predicates**: Provides the values of outgoing relations, which are also the values displayed in the drop down list when the user creates a new relation.
*   **inverse_predicates**: Provides the incoming relation values.

The link between both vocabularies is done using the ID of the vocabulary entries: both must have the same ID.

**To add a new relation type:**

1.  [Add a new vocabulary entry]({{page page='managing-vocabularies'}}) in the `predicates` vocabulary.
    ![]({{file name='custom-relation-type-predicate.png'}} ?w=600,border=true)
2.  Add a new entry in the `inverse_predicates` vocabulary, using the same ID as the entry in the `predicates` vocabulary.
    ![]({{file name='custom-relation-type-inverse-predicate.png'}} ?w=600,border=true)
    Your new relation type is immediately available.
    ![]({{file name='custom-relation-type.png'}} ?w=600,border=true)


<div class="row" data-equalizer data-equalize-on="medium">
<div class="column medium-6">
{{#> panel heading='Related Documentation'}}

- [Editing Content]({{page page='editing-content'}})
- [Managing Vocabularies]({{page page='managing-vocabularies'}})
- [How-To Index]({{page space='nxdoc' page='how-to-index'}})

{{/panel}}
</div>
<div class="column medium-6">

&nbsp;

</div>
</div>
