---
title: Nuxeo Platform Modules Overview
labels:
    - '571'
    - modules
    - concepts
toc: true
confluence:
    ajs-parent-page-id: '16092549'
    ajs-parent-page-title: Nuxeo Platform User Documentation
    ajs-space-key: USERDOC58
    ajs-space-name: Nuxeo Platform User Documentation - 5.8
    canonical: Nuxeo+Platform+Modules+Overview
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC58/Nuxeo+Platform+Modules+Overview'
    page_id: '16092683'
    shortlink: C471
    shortlink_source: 'https://doc.nuxeo.com/x/C471'
    source_link: /display/USERDOC58/Nuxeo+Platform+Modules+Overview
history:
    - 
        author: Solen Guitter
        date: '2015-08-28 08:10'
        message: ''
        version: '22'
    - 
        author: Solen Guitter
        date: '2013-11-05 17:50'
        message: ''
        version: '21'
    - 
        author: Solen Guitter
        date: '2013-10-30 17:11'
        message: 'Added Diff in the features brought by DM '
        version: '20'
    - 
        author: Solen Guitter
        date: '2013-10-14 15:12'
        message: ''
        version: '19'
    - 
        author: Solen Guitter
        date: '2013-06-18 13:59'
        message: ''
        version: '18'
    - 
        author: Solen Guitter
        date: '2013-06-18 13:59'
        message: Updated DAM requirements for 5.7.1
        version: '17'
    - 
        author: Solen Guitter
        date: '2013-01-11 14:37'
        message: ''
        version: '16'
    - 
        author: Solen Guitter
        date: '2012-10-11 16:35'
        message: Added link to the list of additional features on the Marketplace
        version: '15'
    - 
        author: Solen Guitter
        date: '2012-10-04 19:38'
        message: ''
        version: '14'
    - 
        author: Solen Guitter
        date: '2012-09-12 16:41'
        message: Migrated to Confluence 4.0
        version: '13'
    - 
        author: Solen Guitter
        date: '2012-09-12 16:41'
        message: ''
        version: '12'
    - 
        author: Solen Guitter
        date: '2012-08-09 17:21'
        message: ''
        version: '11'
    - 
        author: Solen Guitter
        date: '2012-06-18 17:48'
        message: ''
        version: '10'
    - 
        author: Solen Guitter
        date: '2012-06-18 17:41'
        message: ''
        version: '9'
    - 
        author: Solen Guitter
        date: '2012-06-13 11:45'
        message: ''
        version: '8'
    - 
        author: Solen Guitter
        date: '2012-06-13 11:45'
        message: ''
        version: '7'
    - 
        author: Solen Guitter
        date: '2012-06-13 11:44'
        message: ''
        version: '6'
    - 
        author: Solen Guitter
        date: '2012-06-13 11:44'
        message: ''
        version: '5'
    - 
        author: Solen Guitter
        date: '2012-06-13 10:32'
        message: ''
        version: '4'
    - 
        author: Solen Guitter
        date: '2012-06-05 16:32'
        message: Added screenshots
        version: '3'
    - 
        author: Solen Guitter
        date: '2012-06-05 12:32'
        message: Added modules descriptions
        version: '2'
    - 
        author: Solen Guitter
        date: '2012-05-31 18:20'
        message: ''
        version: '1'

---
&nbsp;

## Content Application Platform

The Nuxeo Platform includes a set of document management features by default, that are available even if you do not install any module. The naked Platform is called "Content Application Platform". The naked Platform includes core content management features such as fundamental document types ([file]({{page page='files'}}) and [note]({{page page='notes'}}) for instance), with a set of metadata, their lifecycle, and most common document management features. The Content Application Platform also defines a tree structure that is very often required for document management projects, with spaces dedicated to the collaborative work and document edition ([workspaces]({{page page='working-in-workspaces'}})) and spaces dedicated to the distribution of documents ([sections]({{page page='working-in-sections'}})).

The naked Platform can be extended easily by one of the modules below or a package available from the [Marketplace](https://connect.nuxeo.com/nuxeo/site/marketplace/product/all).

![]({{file name='CAP-user-interface.png'}} ?w=650,border=true)

## Document Management Module

The [Document Management module]({{page page='document-management'}}), also known as DM, brings more advanced and richer document management features to the Platform. Among these, of course, it adds new document types, like pictures. It also provides new ways to enrich and access documents. Users can tag documents with their own key words and find documents using these key words using the [tag cloud]({{page page='tag-cloud'}}). The [virtual navigation]({{page page='navigation-trees#virtual-navigation'}}) also allows them to browse documents from their metadata and the [faceted search]({{page page='searching-the-nuxeo-platform#faceted-search'}}) form enables them to save and share their searches to easily reuse them. The [OpenSocial dashboard]({{page page='dashboard'}}) also facilitates the access to documents by providing more gadgets and enabling users to customize their dashboard, choosing which gadgets are displayed and where. The Document Management module also comes with a document preview, the possibility to [annotate the document]({{page page='annotations-and-preview'}}) from the preview and to compare two documents or two versions of a document.

Document Management doesn't required any other module, and can be installed along side Social Collaboration and Digital Asset Management.

![]({{file name='DM-user-interface.png'}} ?w=650,border=true)

## Digital Asset Management Module

The [Digital Asset Management module]({{page page='digital-asset-management'}}), also known as DAM, adds an environment dedicated to multimedia content to the Platform, while benefiting from the features provided by the naked Platform and possible other modules installed. Pictures, Videos and Sound documents are supported, with their specific metadata, and automated processes are run upon import. EXIF and IPTC metadata are extracted and a series of thumbnails that segment the contents of video is generated.
Browsing is adapted to the assets, the content of the Asset Library being available in a dedicated environment that displays the documents as thumbnails by default. Features available by default on the Platform or from other modules are also available to manage assets.

Digital Asset Management&nbsp;can only be installed on top of Document Management. It can be run along side Social Collaboration.
![]({{file name='DAM_all_docs.png' page='browsing-and-searching-assets'}} ?w=650,h=337,border=true)

## Social Collaboration Module

The [Social Collaboration module]({{page page='social-collaboration'}}) is a user-centric module that adds social and extended collaborative features to the Document Management module. Content is created in social workspaces, which provide new user-friendly access to documents using dashboards and new gadgets. Users can share documents easily using only the notion of public and private documents, which enables them to create user communities on a project, an event, a theme. To make collaboration even easier, Social Collaboration enables users to create their [social network]({{page page='network-overview'}}). They can then see the [activity stream]({{page page='activity-stream-overview'}}) and [mini messages]({{page page='mini-messages-overview'}}) of users in their network, having a quick view from their dashboard of what people are working on.

Social Collaboration can only be installed on top of Document Management.

![]({{file name='article_created.png' page='adding-content-to-a-social-workspace'}} ?w=650,h=345,border=true)

## Nuxeo REST API Module

The Nuxeo REST API module is a technical module aimed at enabling developers to easily integrate with the Nuxeo Platform and access the Nuxeo repository.

See the [REST API documentation]({{page space='nxdoc58' page='rest-api'}}) in the [Developer Guide]({{page space='nxdoc58' page='developer-documentation-center'}}) for more details.