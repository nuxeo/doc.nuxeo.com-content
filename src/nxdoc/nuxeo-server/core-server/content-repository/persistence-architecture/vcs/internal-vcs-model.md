---
title: Internal VCS Model
review:
    comment: ''
    date: '2016-12-07'
    status: ok
labels:
    - lts2016-ok
    - vcs
    - fguillaume
    - vcs-component
    - content-review-lts2017
toc: true
confluence:
    ajs-parent-page-id: '3342350'
    ajs-parent-page-title: VCS
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Internal+VCS+Model
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Internal+VCS+Model'
    page_id: '12915227'
    shortlink: GxLF
    shortlink_source: 'https://doc.nuxeo.com/x/GxLF'
    source_link: /display/NXDOC/Internal+VCS+Model
tree_item_index: 100
history:
    -
        author: Solen Guitter
        date: '2016-08-30 15:12'
        message: ''
        version: '14'
    -
        author: Solen Guitter
        date: '2016-08-30 15:11'
        message: ''
        version: '13'
    -
        author: Manon Lumeau
        date: '2016-06-09 13:41'
        message: ''
        version: '12'
    -
        author: Manon Lumeau
        date: '2016-03-29 12:51'
        message: ''
        version: '11'
    -
        author: Manon Lumeau
        date: '2014-12-10 17:04'
        message: TOC
        version: '10'
    -
        author: Solen Guitter
        date: '2014-03-11 17:53'
        message: ''
        version: '9'
    -
        author: Florent Guillaume
        date: '2013-10-31 13:55'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2013-09-19 14:52'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2013-09-04 15:52'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2013-09-04 15:46'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2013-09-04 15:45'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2013-04-08 17:17'
        message: ''
        version: '3'
    -
        author: Solen Guitter
        date: '2013-04-08 17:03'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2013-04-08 16:04'
        message: ''
        version: '1'

---
{{! excerpt}}

The Nuxeo model of folders, documents and properties (sometimes complex ones) is mapped internally to a simpler model based on a hierarchy of nodes and simple properties.

{{! /excerpt}}

## Nodes, Properties, Children

A node represents a complex value having several properties. The properties of a node can be either simple (scalars, including binaries), or collections of scalars (lists usually). A node can also have children which are other nodes.

## Children

The parent-child information for nodes is stored in the `hierarchy` table.

The normal children of a document are mapped to child nodes of the document node. If a document contains complex types, they are also mapped to child nodes of the document mode. There are therefore two kinds of children: child documents and complex types. They have to be quickly distinguished in order to:

*   Find all child documents and only them.
*   Find all complex properties of a document and only them.
*   Resolve name collisions.

To distinguish the two, the hierarchy table has a column holding a `isproperty` flag to decide if it's a complex property or not.

## Fragment Tables

A fragment table is a table holding information corresponding to the scalar properties of one schema (simple fragment), or a table corresponding to one multi-valued property of one schema (collection fragment).

For a simple fragment, each of the table's columns correspond to a simple property of the represented schema. One row corresponds to one document (or one instance of a complex type) using that schema.

For a collection fragment, the set of values for the multi-valued property is represented using as many rows as needed. An additional `pos` column provides ordering of the values.

A node is the set of fragments corresponding to the schemas of that node.

See the [VCS Tables]({{page page='vcs-tables'}}) page for more details.

## Properties Mapping

Nuxeo properties are mapped to properties or to child nodes:

*   A simple type (scalar or array of scalars) is mapped to a property (simple or collection) of the document node,
*   A complex type is mapped to a child node of the document node. There are two kinds of complex types to consider:
    *   Lists of complex types are mapped to an ordered list of complex property children,
    *   Non-list complex types are mapped to a node whose node type corresponds to the internal schema of the complex type.

## Security

Security information is stored as an ACL (Access Control List) which is a collection of simple ACEs (Access Control Entries) holding basic rights information. This collection is stored in a dedicated table in a similar way to lists of scalars, except that the value is split over several column to represent the rich ACE values.

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related pages in this documentation'}}

- [VCS]({{page page='vcs'}})
- [Performance Recommendations]({{page page='performance-recommendations'}})
- [Security]({{page page='security'}})

{{/panel}}</div><div class="column medium-6">

</div></div>
