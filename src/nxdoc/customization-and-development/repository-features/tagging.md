---
title: Tagging
review:
    comment: ''
    date: ''
    status: ok
labels:
    - tags
toc: true
confluence:
    ajs-parent-page-id: '17334376'
    ajs-parent-page-title: Repository features
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Tagging
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/Tagging'
    page_id: '17334479'
    shortlink: z4AIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/z4AIAQ'
    source_link: /display/NXDOC58/Tagging
history:
    - 
        author: Solen Guitter
        date: '2016-08-31 08:58'
        message: ''
        version: '6'
    - 
        author: Solen Guitter
        date: '2014-01-30 14:02'
        message: >-
            Added section Tags, versions and Proxies, added TOC and related
            topics
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
<div class="row"><div class="column medium-8">

The tag service provides the backbone of the tagging feature. Tags are keywords applied as metadata on documents reflecting (for instance) the user opinion about that document. The tags are either categorizing the content of the document (labels like "document management", "ECM", "complex Web application", etc. can be thought as tags for Nuxeo), or they reflect the user feeling ("great", "user friendly", "versatile", etc.).

{{! excerpt}}

The tag service uses two important concepts: a _tag_ object, and a _tagging_ action. Both are represented as Nuxeo documents.

{{! /excerpt}}

A **tag** holds a label that does not contain any space ("documentmanagement", "webapplication", etc.). A **tagging** action is a link between a given document and a tag, and belongs to a given user.

</div><div class="column medium-4">{{#> panel heading='On this page'}}

{{/panel}}</div></div>

## Tag Service Architecture

The following document types are defined by the tag service.

A **Tag** is a document type representing the tag itself (but not its association to specific documents). It contains the usual `dublincore` schema, and in addition has a specific **tag** schema containing a **tag:label** string field.

A **Tagging** is a relation type representing the action of tagging a given document with a tag. (A relation type is a document type extending the default Relation document type; it works like a normal document type except that it's not found by NXQL queries on `Document`). The important fields of a Tagging document are **relation:source** which is the document id, **relation:target** which is the tag id, and **dc:creator** which is the user doing the tagging action.

Both Tag and Tagging documents managed by the tag service are _unfiled_, which means that they don't have a parent folder. They are therefore not visible in the normal tree of documents, only queries can find them. In addition they don't have any ACLs set on them, which means that only a superuser (and the tag service internal code) can access them.

## Tag Service Features

The tag service is accessed through the [ `org.nuxeo.ecm.platform.tag.TagService` ]() interface.

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

Everything is done in the&nbsp; [`org.nuxeo.ecm.platform.tag.TaggedVersionListener`](http://community.nuxeo.com/api/nuxeo/5.8/javadoc/org/nuxeo/ecm/platform/tag/TaggedVersionListener.html) listener.

### Disabling Tags on Versions and Proxies

To disable the duplication of tags on versions and proxies, the&nbsp; [`org.nuxeo.ecm.platform.tag.TaggedVersionListener`](http://community.nuxeo.com/api/nuxeo/5.8/javadoc/org/nuxeo/ecm/platform/tag/TaggedVersionListener.html) listener needs to be disabled with the following contribution:

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

*   [Publisher service]({{page page='publisher-service'}})
*   [Versioning]({{page page='versioning'}})
*   [Events and Listeners]({{page page='events-and-listeners'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related pages in other documentation'}}

*   [Tags]({{page space='userdoc58' page='tags'}})
*   [Publishing Documents]({{page space='userdoc58' page='publishing-documents'}})

{{/panel}}</div></div>