---
title: Tagging
review:
    comment: ''
    date: '2017-12-15'
    status: ok
labels:
    - lts2016-ok
    - tags
    - tagging-component
    - fdavid
    - lts2017-ok
toc: true
confluence:
    ajs-parent-page-id: '16089319'
    ajs-parent-page-title: Additional Services
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Tagging
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Tagging'
    page_id: '4688925'
    shortlink: HYxH
    shortlink_source: 'https://doc.nuxeo.com/x/HYxH'
    source_link: /display/NXDOC/Tagging
tree_item_index: 600
history:
    -
        author: Solen Guitter
        date: '2016-08-31 08:57'
        message: ''
        version: '18'
    -
        author: Manon Lumeau
        date: '2016-06-09 14:21'
        message: ''
        version: '17'
    -
        author: Manon Lumeau
        date: '2016-04-20 14:10'
        message: javadoc links updated
        version: '16'
    -
        author: Florent Guillaume
        date: '2015-12-09 15:02'
        message: details
        version: '15'
    -
        author: Solen Guitter
        date: '2015-10-15 09:26'
        message: 'Remove tag weight, as all tags have the same size now'
        version: '14'
    -
        author: Solen Guitter
        date: '2015-10-14 15:33'
        message: Update related pages
        version: '13'
    -
        author: Florent Guillaume
        date: '2015-10-13 15:38'
        message: ''
        version: '12'
    -
        author: Florent Guillaume
        date: '2015-10-13 15:36'
        message: ''
        version: '11'
    -
        author: Florent Guillaume
        date: '2015-10-13 15:34'
        message: ''
        version: '10'
    -
        author: Florent Guillaume
        date: '2015-10-13 15:30'
        message: ''
        version: '9'
    -
        author: Manon Lumeau
        date: '2015-07-09 15:49'
        message: ''
        version: '8'
    -
        author: Manon Lumeau
        date: '2015-07-09 15:49'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2014-01-30 13:58'
        message: 'Typos, added TOC and related topics'
        version: '6'
    -
        author: Thomas Roger
        date: '2014-01-30 12:43'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2013-09-04 16:52'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2011-03-04 09:18'
        message: Migrated to Confluence 4.0
        version: '3'
    -
        author: Solen Guitter
        date: '2011-03-04 09:18'
        message: ''
        version: '2'
    -
        author: Florent Guillaume
        date: '2010-12-28 17:44'
        message: ''
        version: '1'
---

The tags are either categorizing the content of the document (labels like `document_management`, `ECM`, `complex_Web_application`, etc., can be thought as tags for Nuxeo), or they reflect the user feeling (`great`, `user_friendly`, `versatile`, etc.).

{{! excerpt}}
The tag service uses a [facet]({{page page='available-facets'}}) to represent tags as a document property.
{{! /excerpt}}

A tagging action is a link between a given document and a tag, and belongs to a given user.
A tag holds a label that does not contain any:
- space
- slash
- backslash
- percent
- quote

{{#> callout type='info' }}
Since 10.3, if using the service based on the `NXTag` facet, it is possible to use these characters except the percent when creating tags.</br>
This can be enabled or disabled with the following configuration property: `nuxeo.tag.sanitization.enabled`.
By default they are not usable (`nuxeo.tag.sanitization.enabled=true`).
{{/callout}}

Characters will be removed by service.

## Functional Overview

{{{multiexcerpt 'functional-overview' space='userdoc' page='tags'}}}

## Tag Service Features

The tag service is accessed through the  [`TagService`](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/ecm/platform/tag/TagService.html)  interface.

The tag service allows you to:

- Tag and untag a document
- Get all the tags for a document
- Get all the documents for a tag
- Get suggested tags for a given tag prefix

## Tags, Versions and Proxies

The tags are duplicated:

- From the live document when creating a version
- From a version when creating a proxy

When restoring a version, the tags on the live document are also restored from the ones on the version.

Tags can be added and removed independently on live documents and versions: a tag added on a live document won't be added on all its versions, but only on the versions that will be created after.

The logic for the above is in the  [`TaggedVersionListener`](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/ecm/platform/tag/TaggedVersionListener.html) listener.

### Disabling Tags on Versions

To disable the duplication of tags on versions and proxies, the `TaggedVersionListener` may be disabled with the following contribution:

```xml
<require>org.nuxeo.ecm.platform.tag.service.listener</require>
<extension target="org.nuxeo.ecm.core.event.EventServiceComponent" point="listener">
  <listener name="taggedVersionListener" enabled="false" />
</extension>
```
## Tag Service Architecture

{{#> callout type='warning' }}
Since 9.3, the tag service uses the `NXTag` facet. The following paragraph describes the previous tag service architecture that is deprecated since 9.3.
{{/callout}}

The following document types are defined by the tag service.

A `Tag` is a document type representing the tag itself (but not its association to specific documents). It contains the usual `dublincore` schema, and in addition has a specific `tag` schema containing a `tag:label` string field.

A `Tagging` is a relation type representing the action of tagging a given document with a tag. (A relation type is a document type extending the default `Relation` document type; it works like a normal document type except that it's not found by NXQL queries on `Document`). The important fields of a `Tagging` document are `relation:source` which is the document id, `relation:target` which is the tag id, and `dc:creator` which is the user doing the tagging action.

Both `Tag` and `Tagging` documents managed by the tag service are _unfiled_, which means that they don't have a parent folder. They are therefore not visible in the normal tree of documents; only queries can find them. In addition they don't have any ACLs set on them, which means that only a superuser (and the tag service internal code) can access them.

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related pages in current documentation'}}

- [Publisher]({{page page='publisher'}})
- [Versioning]({{page page='versioning'}})
- [Events and Messages]({{page page='events-and-messages'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related pages in other documentation'}}

- [Tags]({{page space='userdoc' page='tags'}})
- [Publishing Content]({{page space='userdoc' page='share'}}#publishing)

{{/panel}}</div></div>
