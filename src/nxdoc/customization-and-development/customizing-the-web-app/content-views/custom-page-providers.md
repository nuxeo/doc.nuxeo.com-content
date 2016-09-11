---
title: Custom Page Providers
review:
    comment: ''
    date: ''
    status: ok
labels:
    - page-provider
    - content-views
confluence:
    ajs-parent-page-id: '17334338'
    ajs-parent-page-title: Content Views
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Custom+Page+Providers
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/Custom+Page+Providers'
    page_id: '17334427'
    shortlink: m4AIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/m4AIAQ'
    source_link: /display/NXDOC58/Custom+Page+Providers
history:
    - 
        author: Solen Guitter
        date: '2016-09-01 15:38'
        message: ''
        version: '13'
    - 
        author: Solen Guitter
        date: '2014-01-23 17:55'
        message: Formatting
        version: '12'
    - 
        author: Solen Guitter
        date: '2014-01-22 16:07'
        message: 'formatting, added related topics'
        version: '11'
    - 
        author: Solen Guitter
        date: '2013-09-04 16:33'
        message: Added related topics
        version: '10'
    - 
        author: Solen Guitter
        date: '2013-09-04 16:28'
        message: ''
        version: '9'
    - 
        author: Anahide Tchertchian
        date: '2011-04-26 17:28'
        message: ''
        version: '8'
    - 
        author: Anahide Tchertchian
        date: '2011-04-26 17:28'
        message: ''
        version: '7'
    - 
        author: Florent Guillaume
        date: '2011-02-01 21:49'
        message: ''
        version: '6'
    - 
        author: Stéfane Fermigier
        date: '2011-02-01 15:14'
        message: ''
        version: '5'
    - 
        author: Anahide Tchertchian
        date: '2011-02-01 15:09'
        message: ''
        version: '4'
    - 
        author: Anahide Tchertchian
        date: '2011-02-01 15:07'
        message: ''
        version: '3'
    - 
        author: Anahide Tchertchian
        date: '2011-02-01 15:06'
        message: ''
        version: '2'
    - 
        author: Anahide Tchertchian
        date: '2011-02-01 15:05'
        message: ''
        version: '1'

---
{{! excerpt}}

This chapter focuses on writing custom page providers, for instance when you'd like to use content views to query and display results from an external system.

{{! /excerpt}}

For an introduction to content views, please refer to the [Content Views]({{page page='content-views'}}) chapter.

## Page Providers Configuration

The `<coreQueryPageProvider>` element makes it possible to answer to most common use cases. If you would like to use another kind of query, you can use an alternate element and specify the `PageProvider` class to use.

Here is a sample example of a custom page provider configuration:

```xml
<extension target="org.nuxeo.ecm.platform.ui.web.ContentViewService"
  point="contentViews">

  <contentView name="CURRENT_DOCUMENT_CHILDREN_FETCH">
    <genericPageProvider
      class="org.nuxeo.ecm.platform.query.nxql.CoreQueryAndFetchPageProvider">
      <property name="coreSession">#{documentManager}</property>
      <pattern>
        SELECT dc:title FROM Document WHERE ecm:parentId = ? AND
        ecm:isCheckedInVersion = 0 AND ecm:mixinType != 'HiddenInNavigation'
        AND ecm:currentLifeCycleState != 'deleted'
      </pattern>
      <parameter>#{currentDocument.id}</parameter>
      <sort column="dc:title" ascending="true" />
      <pageSize>2</pageSize>
    </genericPageProvider>

    ...
  </contentView>

</extension>

```

The `<genericPageProvider>` element takes an additional `class` attribute stating the page provider class. This class has to follow the `org.nuxeo.ecm.core.api.PageProvider` interface and does not need to list document models: content views do not force the item type to a given interface. The abstract class `org.nuxeo.ecm.core.api.AbstractPageProvider` makes it easier to define a new page provider as it implements most of the interface methods in a generic way.

As result layouts can apply to other objects than document models, their definition can be adapted to fit to the kind of results provided by the custom page provider.

In the given example, another kind of query will be performed on a core session, and will return a list of maps, each map holding the "dc:title" key and corresponding value on the matching documents.

The `<genericPageProvider>` element accepts all the other configurations present on the `<coreQueryPageProvider>` element: it is up to the `PageProvider` implementation to use them to build its query or not. It can also perform its own caching.

The properties can be defined as EL expressions and make it possible for the query provider to have access to contextual information. In the above example, the core session to the Nuxeo repository is taken from the Seam context and passed as the property with name `coreSession`.

&nbsp;