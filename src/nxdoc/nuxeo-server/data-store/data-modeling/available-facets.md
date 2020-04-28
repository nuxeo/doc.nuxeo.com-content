---
title: Available Facets
review:
    comment: ''
    date: '2016-12-06'
    status: ok
labels:
    - lts2016-ok
    - facet
    - core-component
    - fguillaume
    - content-review-lts2017
toc: true
confluence:
    ajs-parent-page-id: '950287'
    ajs-parent-page-title: Content Repository
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Available+Facets
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Available+Facets'
    page_id: '3343533'
    shortlink: rQQz
    shortlink_source: 'https://doc.nuxeo.com/x/rQQz'
    source_link: /display/NXDOC/Available+Facets
tree_item_index: 500
history:
    -
        author: Estelle Giuly
        date: '2016-09-29 15:02'
        message: dd BigFolder in available facet
        version: '37'
    -
        author: Thomas Roger
        date: '2014-12-05 16:14'
        message: ''
        version: '36'
    -
        author: Solen Guitter
        date: '2014-11-27 11:40'
        message: ''
        version: '35'
    -
        author: Solen Guitter
        date: '2014-11-27 11:33'
        message: ''
        version: '34'
    -
        author: Solen Guitter
        date: '2014-09-04 16:53'
        message: ''
        version: '33'
    -
        author: Solen Guitter
        date: '2014-09-04 16:51'
        message: ''
        version: '32'
    -
        author: Solen Guitter
        date: '2013-09-04 15:55'
        message: Removed related topics from TOC
        version: '31'
    -
        author: Mariana Cedica
        date: '2013-07-18 15:01'
        message: ''
        version: '30'
    -
        author: Mariana Cedica
        date: '2013-07-18 15:00'
        message: ''
        version: '29'
    -
        author: Solen Guitter
        date: '2013-07-01 12:04'
        message: Added related topics
        version: '28'
    -
        author: Solen Guitter
        date: '2013-07-01 12:02'
        message: ''
        version: '27'
    -
        author: Solen Guitter
        date: '2013-07-01 12:02'
        message: Reordered facets in alphabetical order
        version: '26'
    -
        author: Thomas Roger
        date: '2013-06-28 12:11'
        message: ''
        version: '25'
    -
        author: Thomas Roger
        date: '2012-10-18 18:10'
        message: ''
        version: '24'
    -
        author: Florent Guillaume
        date: '2012-08-24 12:27'
        message: Migrated to Confluence 4.0
        version: '23'
    -
        author: Florent Guillaume
        date: '2012-08-24 12:27'
        message: ''
        version: '22'
    -
        author: Florent Guillaume
        date: '2012-08-24 12:27'
        message: ''
        version: '21'
    -
        author: Florent Guillaume
        date: '2012-08-24 12:26'
        message: added SystemDocument
        version: '20'
    -
        author: Florent Guillaume
        date: '2012-05-24 14:43'
        message: ''
        version: '19'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 16:53'
        message: ''
        version: '18'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 14:43'
        message: ''
        version: '17'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 10:27'
        message: ''
        version: '16'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 10:24'
        message: ''
        version: '15'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 10:14'
        message: ''
        version: '14'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 09:14'
        message: ''
        version: '13'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 09:09'
        message: ''
        version: '12'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 08:55'
        message: ''
        version: '11'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 08:51'
        message: ''
        version: '10'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 20:11'
        message: ''
        version: '9'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 20:05'
        message: ''
        version: '8'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 19:21'
        message: ''
        version: '7'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 19:01'
        message: ''
        version: '6'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 18:39'
        message: ''
        version: '5'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 18:23'
        message: ''
        version: '4'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 18:18'
        message: ''
        version: '3'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 18:11'
        message: ''
        version: '2'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 18:00'
        message: ''
        version: '1'

---
Facets are markers on document types that instruct the Nuxeo platform (and any part of the system that cares about them) to behave differently, or that are automatically set on some document instances. The following facets are currently in use by Nuxeo, but others can be defined.

## Audio

This facet should be set on any type in which you want to store audio. It comes with the `file` and `audio` schemas.

## BigFolder

This facet should be set on types that are to be considered as "big folders", for which the list of children is not displayed in the navigation tree, as opposed to the `Folderish` facet.

## Downloadable

## FacetedSearch

Marker facet to be set on types used as search document types for content views used in the Faceted search. Documents with this facet will be listed as faceted saved searches.

## Folderish

This should be set on types that are to be considered as "folders", and therefore for which a list of children may be displayed in the navigation tree and other user interface areas.

## HasRelatedText

This facet can be added dynamically to a document to store arbitrary related text that will be used in the fulltext index for the document. In this way, you can find the document with a fulltext search on more that just what's stored in the document.

It is used for instance to add the Annotations' fulltext to the document. It can be used by third-parties to add further text.

Of course this requires that the fulltext index includes the `relatedtext` schema. This is the default, but if you redefine the default index it's important to know.

## HasStoryboard

Marker facet to be set on types which you want to generate Storyboard, types on which you already added the [Video facet](#video).

## HasVideoPreview

Marker facet to be set on types which you want to generate a video preview (screenshot), and on which you already added the [Video facet](#video).

## HiddenInCreation

This should be set on types which you don't want to see in the documentation creation menus or screens. You can still create these types programmatically.

## HiddenInNavigation

This should be set on types which you don't want to see in regular listings of documents and folders.

## Immutable

This is automatically set by the system on document instances which correspond to immutable objects (archived versions and proxies to archived versions).

## MultiViewPicture

Marker facet to be set on types which handle a list of picture views. Deprecated since 7.1, the `Picture` facet is now sufficient to mark types handling picture views.

## NotFulltextIndexable

The document won't be full-text indexed.

## NXTag

Facet used by the Tag service to represent tags as a document property.

## Orderable

This should be set on `Folderish` types for which maintaining the order of children is important. (`CoreSession#orderBefore` can be used only on documents contained in `Orderable` folders.)

## Picture

This facet should be set on any type in which you want to store a picture. It comes with the `file` and `picture` schemas.

## Publishable

This should be set on document types for which you want to have publishing.

## SystemDocument

The document type corresponds to a system document, not a user-visible document. It is often `HiddenInNavigation` as well, but not always, as some system documents (like workflow route models) may need to be visible to administrators or selected users.

## Versionable

This should be set on document types for which you want to have versioning.

## Video

This facet should be set on any type in which you want to store a video. It comes with the `file`, `video` and `picture` schemas.

## Task

This facet should be set on any type if you want to use it as the task document created by a workflow. Note that along with the facet, the document type must also have the lifecycle "task".

## WebView

&nbsp;
