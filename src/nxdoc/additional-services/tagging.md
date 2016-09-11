---
title: Tagging
review:
    comment: ''
    date: ''
    status: ok
labels:
    - tags
    - link-update
toc: true
confluence:
    ajs-parent-page-id: '22380662'
    ajs-parent-page-title: Additional Services
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: Tagging
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC60/Tagging'
    page_id: '22380647'
    shortlink: Z4BVAQ
    shortlink_source: 'https://doc.nuxeo.com/x/Z4BVAQ'
    source_link: /display/NXDOC60/Tagging
history:
    - 
        author: Solen Guitter
        date: '2016-08-31 08:49'
        message: ''
        version: '8'
    - 
        author: Manon Lumeau
        date: '2015-09-16 11:59'
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
The tag service provides the backbone of the tagging feature. Tags are keywords applied as metadata on documents reflecting (for instance) the user opinion about that document. The tags are either categorizing the content of the document (labels like "document management", "ECM", "complex Web application", etc. can be thought as tags for Nuxeo), or they reflect the user feeling ("great", "user friendly", "versatile", etc.).

{{! excerpt}}

The tag service uses two important concepts: a `tag` object, and a `tagging` action. Both are represented as Nuxeo documents.

{{! /excerpt}}

A **tag** holds a label that does not contain any space ("documentmanagement", "webapplication", etc.). A **tagging** action is a link between a given document and a tag, and belongs to a given user.

## Tag Service Architecture

The following document types are defined by the tag service.

A **Tag** is a document type representing the tag itself (but not its association to specific documents). It contains the usual `dublincore` schema, and in addition has a specific **tag** schema containing a **tag:label** string field.

A **Tagging** is a relation type representing the action of tagging a given document with a tag. (A relation type is a document type extending the default Relation document type; it works like a normal document type except that it's not found by NXQL queries on `Document`). The important fields of a Tagging document are **relation:source** which is the document id, **relation:target** which is the tag id, and **dc:creator** which is the user doing the tagging action.

Both Tag and Tagging documents managed by the tag service are _unfiled_, which means that they don't have a parent folder. They are therefore not visible in the normal tree of documents, only queries can find them. In addition they don't have any ACLs set on them, which means that only a superuser (and the tag service internal code) can access them.

## Tag Service Features

The tag service is accessed through the [`org.nuxeo.ecm.platform.tag.TagService`]() interface.

The tag service allows you to:

*   tag and untag a document,
*   get all the tags for a document,
*   get all the documents for a tag,
*   get the tag cloud for a set of documents,
*   get suggested tags for a given tag prefix.

A tag cloud is a set of weighted tags, the weights being integers representing the frequency of the tag.
The weights can be just a count of occurrences, or can be normalized to the 0-100 range for easier display.

## Tags, Versions and Proxies

Since 5.7.3, the tags are duplicated:

*   from the live document when creating a version

*   from a version when creating a proxy

When restoring a version, the tags on the live document are also restored from the ones on the version.

Tags can be added and removed independently on live documents, versions and proxies: a tag added on a live document won't be added on all its versions, but only on the versions that will be created after. The same behavior is applied for proxies.

Everything is done in the&nbsp;[`org.nuxeo.ecm.platform.tag.TaggedVersionListener`](http://community.nuxeo.com/api/nuxeo/5.9.1/javadoc/org/nuxeo/ecm/platform/tag/TaggedVersionListener.html) listener.

### Disabling Tags on Versions and Proxies

To disable the duplication of tags on versions and proxies, the&nbsp;[`org.nuxeo.ecm.platform.tag.TaggedVersionListener`](http://community.nuxeo.com/api/nuxeo/5.9.1/javadoc/org/nuxeo/ecm/platform/tag/TaggedVersionListener.html) listener needs to be disabled with the following contribution:

```xml
<require>org.nuxeo.ecm.platform.tag.service.listener</require>
<extension target="org.nuxeo.ecm.core.event.EventServiceComponent"
  point="listener">
  <listener name="taggedVersionListener" enabled="false" />
</extension>
```

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related pages in current documentation'}}

*   [Publisher]({{page page='publisher'}})
*   [Versioning]({{page page='versioning'}})
*   [Events and Listeners]({{page page='events-and-listeners'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related pages in other documentation'}}

*   [Tags]({{page space='userdoc60' page='tags'}})
*   [Publishing Documents]({{page space='userdoc60' page='publishing-documents'}})

{{/panel}}</div></div>