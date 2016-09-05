---
title: Page Providers without Content Views
labels:
    - page-provider
confluence:
    ajs-parent-page-id: '17334338'
    ajs-parent-page-title: Content Views
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Page+Providers+without+Content+Views
    canonical_source: >-
        https://doc.nuxeo.com/display/NXDOC58/Page+Providers+without+Content+Views
    page_id: '17334421'
    shortlink: lYAIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/lYAIAQ'
    source_link: /display/NXDOC58/Page+Providers+without+Content+Views
history:
    - 
        author: Solen Guitter
        date: '2016-09-01 16:11'
        message: ''
        version: '9'
    - 
        author: Solen Guitter
        date: '2014-01-23 17:57'
        message: ''
        version: '8'
    - 
        author: Solen Guitter
        date: '2014-01-23 17:57'
        message: ''
        version: '7'
    - 
        author: Solen Guitter
        date: '2014-01-22 16:10'
        message: Removed 5.4 mention
        version: '6'
    - 
        author: Solen Guitter
        date: '2013-09-04 16:30'
        message: Added related topics
        version: '5'
    - 
        author: Anahide Tchertchian
        date: '2011-04-26 18:05'
        message: Migrated to Confluence 4.0
        version: '4'
    - 
        author: Anahide Tchertchian
        date: '2011-04-26 18:05'
        message: ''
        version: '3'
    - 
        author: Anahide Tchertchian
        date: '2011-04-26 17:28'
        message: ''
        version: '2'
    - 
        author: Anahide Tchertchian
        date: '2011-04-26 17:28'
        message: ''
        version: '1'

---
{{! excerpt}}

Content views are very linked to the UI rendering as they hold pure UI configuration and need the JSF context to resolve variables. Sometimes it is interesting to retrieve items using page providers, but in a non-UI context (event listener), or in a non-JSF UI context (WebEngine).

{{! /excerpt}}

Page providers can be registered on their own service, and queried outside of a JSF context. These page providers can also be referenced from content views, to keep a common definition of the provider.

Here is a sample page provider definition:

```xml
<extension target="org.nuxeo.ecm.platform.query.api.PageProviderService"
  point="providers">

  <coreQueryPageProvider name="TREE_CHILDREN_PP">
    <pattern>
      SELECT * FROM Document WHERE ecm:parentId = ? AND ecm:isProxy = 0 AND
      ecm:mixinType = 'Folderish' AND ecm:mixinType != 'HiddenInNavigation'
      AND ecm:isCheckedInVersion = 0 AND ecm:currentLifeCycleState !=
      'deleted'
    </pattern>
    <sort column="dc:title" ascending="true" />
    <pageSize>50</pageSize>
  </coreQueryPageProvider>

</extension>

```

This definition is identical to the one within a content view, except it cannot use EL expressions for variables resolution. A typical usage of this page provider would be:

```xml
PageProviderService ppService = Framework.getService(PageProviderService.class);
Map<String, Serializable> props = new HashMap<String, Serializable>();
props.put(CoreQueryDocumentPageProvider.CORE_SESSION_PROPERTY,
        (Serializable) coreSession);
PageProvider<DocumentModel> pp = (PageProvider<DocumentModel>) ppService.getPageProvider(
        "TREE_CHILDREN_PP", null, null, null, props,
        new Object[] { myDoc.getId() });
List<DocumentModel> documents = pp.getCurrentPage();

```

Here you can see that the page provider properties (needed for the query to be executed) and its parameters (needed for the query to be built) cannot be resolved from EL expressions: they need to be given explicitly to the page provider service.

A typical usage of this page provider, referenced in a content view, would be:

```xml
<extension target="org.nuxeo.ecm.platform.ui.web.ContentViewService"
  point="contentViews">

  <contentView name="TREE_CHILDREN_CV">
    <title>tree children</title>

    <pageProvider name="TREE_CHILDREN_PP">
      <property name="coreSession">#{documentManager}</property>
      <property name="checkQueryCache">true</property>
      <parameter>#{currentDocument.id}</parameter>
    </pageProvider>      

  </contentView>

</extension>

```

Here you can see that properties and parameters can be put on the referenced page provider as content views all have a JSF context.

&nbsp;