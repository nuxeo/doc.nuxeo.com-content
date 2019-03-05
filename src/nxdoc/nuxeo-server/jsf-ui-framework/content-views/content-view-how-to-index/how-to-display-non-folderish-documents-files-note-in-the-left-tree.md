---
title: 'How to Display Non-Folderish Documents (Files, Note, ...) in the Left Tree'
review:
    comment: ''
    date: '2019-02-13'
    status: ok
details:
    howto:
        excerpt: Learn how to display non-folderish documents in the left tree with Nuxeo Studio.
        level: Advanced
        tool: 'Studio, XML extensions'
        topics: Content View
labels:
    - content-review-lts2016
    - navigation-tree
    - howto
    - content-view
    - atchertchian
    - page-provider-component
    - excerpt
    - content-review-lts2017
    - jsf-ui
confluence:
    ajs-parent-page-id: '19235663'
    ajs-parent-page-title: Content View How-To Index
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: 'How+to+Display+Non-Folderish+Documents+%28Files%2C+Note%2C+...%29+in+the+Left+Tree'
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/How+to+Display+Non-Folderish+Documents+%28Files%2C+Note%2C+...%29+in+the+Left+Tree'
    page_id: '12914311'
    shortlink: hw7F
    shortlink_source: 'https://doc.nuxeo.com/x/hw7F'
    source_link: '/display/NXDOC/How+to+Display+Non-Folderish+Documents+%28Files%2C+Note%2C+...%29+in+the+Left+Tree'
tree_item_index: 300
history:
    -
        author: Solen Guitter
        date: '2014-12-01 21:56'
        message: ''
        version: '7'
    -
        author: Manon Lumeau
        date: '2014-09-15 16:01'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2014-09-02 16:47'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2014-06-12 11:51'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2013-09-02 15:15'
        message: ''
        version: '3'
    -
        author: Alain Escaffre
        date: '2013-02-25 14:58'
        message: ''
        version: '2'
    -
        author: Alain Escaffre
        date: '2013-02-25 14:26'
        message: ''
        version: '1'

---
{{{multiexcerpt 'JSF-UI-required' page='generic-multi-excerpts'}}}

{{! excerpt}}
The left tree is built using a query that is ran recursively. One of the clauses of the query makes sure that only folderish documents are displayed (`AND&nbsp;ecm:mixinType = 'Folderish'`). The query is defined in the "tree_children" page provider. See below a sample override of this query without the "Folderish" clause. You can contribute to the "providers" extension using the[ XML Extensions]({{page page='how-to-contribute-to-an-extension'}}) feature.
{{! /excerpt}}

```html/xml
<require>org.nuxeo.ecm.webapp.pageproviders.contrib</require>

  <extension target="org.nuxeo.ecm.platform.query.api.PageProviderService"
    point="providers">

    <coreQueryPageProvider name="tree_children">
      <property name="maxResults">PAGE_SIZE</property>
      <pattern>
        SELECT * FROM Document WHERE ecm:parentId = ? AND ecm:isProxy = 0 AND
        ecm:mixinType != 'HiddenInNavigation'
        AND ecm:isVersion = 0 AND ecm:isTrashed = 0
      </pattern>
      <sort column="dc:title" ascending="true" />
      <pageSize>50</pageSize>
    </coreQueryPageProvider>
</extension>
```

You can adapt this sample so as to filter anything you would like to see or not in the left tree.
