---
title: Tagging
labels:
    - tags
    - tagging-component
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
The tags are either categorizing the content of the document (labels like "document management", "ECM", "complex Web application", etc. can be thought as tags for Nuxeo), or they reflect the user feeling ("great", "user friendly", "versatile", etc.).

{{! excerpt}}

The tag service uses two important concepts: a **tag** object, and a **tagging** action. Both are represented as Nuxeo documents.

{{! /excerpt}}

A tag holds a label that does not contain any space ("documentmanagement", "webapplication", etc.). A tagging action is a link between a given document and a tag, and belongs to a given user.

## Functional Overview

{{{multiexcerpt 'functional-overview' page='USERDOC:Tags'}}}

## Tag Service Architecture

The following document types are defined by the tag service.

A&nbsp;Tag&nbsp;is a document type representing the tag itself (but not its association to specific documents). It contains the usual&nbsp;`dublincore`&nbsp;schema, and in addition has a specific&nbsp;tag&nbsp;schema containing a&nbsp;`tag:label`&nbsp;string field.

A&nbsp;Tagging&nbsp;is a relation type representing the action of tagging a given document with a tag. (A relation type is a document type extending the default Relation document type; it works like a normal document type except that it's not found by NXQL queries on&nbsp;Document). The important fields of a Tagging document are&nbsp;`relation:source`&nbsp;which is the document id,&nbsp;`relation:target`&nbsp;which is the tag id, and&nbsp;`dc:creator`&nbsp;which is the user doing the tagging action.

Both Tag and Tagging documents managed by the tag service are&nbsp;_unfiled_, which means that they don't have a parent folder. They are therefore not visible in the normal tree of documents, only queries can find them. In addition they don't have any ACLs set on them, which means that only a superuser (and the tag service internal code) can access them.

## Tag Service Features

The tag service is accessed through the&nbsp; [`org.nuxeo.ecm.platform.tag.TagService`](http://community.nuxeo.com/api/nuxeo/8.2/javadoc/org/nuxeo/ecm/platform/tag/TagService.html) &nbsp;interface.

The tag service allows you to:

*   Tag and untag a document
*   Get all the tags for a document
*   Get all the documents for a tag
*   Get the tag cloud for a set of documents
*   Get suggested tags for a given tag prefix

## Tags, Versions and Proxies

The tags are duplicated:

*   From the live document when creating a version
*   From a version when creating a proxy

When restoring a version, the tags on the live document are also restored from the ones on the version.

Tags can be added and removed independently on live documents, versions and proxies: a tag added on a live document won't be added on all its versions, but only on the versions that will be created after. The same behavior is applied for proxies.

The logic for the above is in the&nbsp; [`org.nuxeo.ecm.platform.tag.TaggedVersionListener`](http://community.nuxeo.com/api/nuxeo/8.2/javadoc/org/nuxeo/ecm/platform/tag/TagService.html) &nbsp;listener.

### Disabling Tags on Versions and Proxies

To disable the duplication of tags on versions and proxies, the&nbsp; [`org.nuxeo.ecm.platform.tag.TaggedVersionListener`](http://community.nuxeo.com/api/nuxeo/8.2/javadoc/org/nuxeo/ecm/platform/tag/TaggedVersionListener.html) &nbsp;listener may be disabled with the following contribution:

```xml
<require>org.nuxeo.ecm.platform.tag.service.listener</require>
<extension target="org.nuxeo.ecm.core.event.EventServiceComponent" point="listener">
  <listener name="taggedVersionListener" enabled="false" />
</extension>
```

* * *

&nbsp;

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related pages in current documentation'}}

*   [Publisher]({{page page='publisher'}})
*   [Versioning]({{page page='versioning'}})
*   [Events and Listeners]({{page page='events-and-listeners'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related pages in other documentation'}}

*   [Tags]({{page space='userdoc' page='tags'}})
*   [Publishing Content]({{page space='userdoc' page='publishing-content'}})

{{/panel}}</div></div>