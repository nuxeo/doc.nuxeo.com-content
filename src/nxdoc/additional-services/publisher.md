---
title: Publisher
labels:
    - publishing
    - link-update
    - proxies
toc: true
confluence:
    ajs-parent-page-id: '22380662'
    ajs-parent-page-title: Additional Services
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: Publisher
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC60/Publisher'
    page_id: '22380631'
    shortlink: V4BVAQ
    shortlink_source: 'https://doc.nuxeo.com/x/V4BVAQ'
    source_link: /display/NXDOC60/Publisher
history:
    - 
        author: Solen Guitter
        date: '2014-12-05 18:18'
        message: ix links to point to 6.0 release tag
        version: '11'
    - 
        author: Alain Escaffre
        date: '2014-05-02 16:03'
        message: ''
        version: '10'
    - 
        author: Solen Guitter
        date: '2013-11-13 14:07'
        message: ''
        version: '9'
    - 
        author: Solen Guitter
        date: '2013-10-18 18:30'
        message: Added how to enable duplication of relations on published doc
        version: '8'
    - 
        author: Solen Guitter
        date: '2013-09-04 17:44'
        message: Formatting
        version: '7'
    - 
        author: Solen Guitter
        date: '2013-09-04 17:44'
        message: ''
        version: '6'
    - 
        author: Solen Guitter
        date: '2012-05-21 14:36'
        message: Migrated to Confluence 4.0
        version: '5'
    - 
        author: Solen Guitter
        date: '2012-05-21 14:36'
        message: Updated link to 5.5
        version: '4'
    - 
        author: Solen Guitter
        date: '2011-09-15 17:38'
        message: Fixed typos and formatting
        version: '3'
    - 
        author: Thomas Roger
        date: '2011-09-15 16:00'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2011-09-15 14:56'
        message: ''
        version: '1'

---
There are three ways to publish a document:

*   on local sections, i.e. the sections created in your Nuxeo DM instance,
*   on remote sections, i.e. the sections of a remote Nuxeo server,
*   on the file system.

Publication is configured using the `PublisherService`.

## About the `PublisherService`

When using the `PublisherService`, you only need to care about three interfaces:

*   **`PublishedDocument`**: represents the published document. It can be created from a DocumentModel, a proxy or a file on the file system.
*   **`PublicationNode`**: represents a Node where you can publish a DocumentModel. It can be another DocumentModel (mainly Folder / Section) or a directory on the file system.
*   **`PublicationTree`**: the tree which is used to publish / unpublish documents, to approve / reject publication, list the already published documents in a PublicationNode, ... See the [javadoc of the PublicationTree](http://community.nuxeo.com/api/nuxeo/release-6.0/javadoc/org/nuxeo/ecm/platform/publisher/api/PublicationTree.html).

The PublisherService mainly works with three concepts:

*   **`factory`**: the class which is used to actually create the published document. It also manages the approval / rejection workflow on published documents.
*   **`tree`**: a `PublicationTree` instance associated to a name: for instance, we have a `SectionPublicationTree` which will publish in Sections, a `LocalFSTree` to publish on the file system, ...
*   **`tree instance`**: an actual publication tree where we define the factory to use, the underlying tree to use, its name / title, and some parameters we will see later.

## Configuring Local Sections Publishing

Publishing in local sections was the only way to publish on versions < 5.3GA. From Nuxeo DM 5.3GA, it is the default way to publish documents.

Here is the default contribution you can find in Nuxeo `publisher-jbpm-contrib.xml` in `nuxeo-platform-publisher-jbpm`. This contribution overrides the one in `publisher-contrib.xml` located in the `nuxeo-platform-publisher-core` project:

```
<extension target="org.nuxeo.ecm.platform.publisher.impl.service.PublisherServiceImpl"
  point="treeInstance">

  <publicationTreeConfig name="DefaultSectionsTree" tree="RootSectionsCoreTree"
    factory="CoreProxyWithWorkflow" localSectionTree="true"
    title="label.publication.tree.local.sections">
    <parameters>
      <!-- <parameter name="RootPath">/default-domain/sections</parameter> -->
      <parameter name="RelativeRootPath">/sections</parameter>
      <parameter name="enableSnapshot">true</parameter>
      <parameter name="iconExpanded">/icons/folder_open.gif</parameter>
      <parameter name="iconCollapsed">/icons/folder.gif</parameter>
    </parameters>
  </publicationTreeConfig>

</extension>

```

In this contribution, we define an instance using the `RootSectionsCoreTree` tree and the `CoreProxyWithWorkflow` factory. We give it a name, a title and configure it to be a `localSectionTree` (which means we will publish the documents in the Sections of the Nuxeo application the documents are created in).

The available parameters are:

*   `RootPath`: it's used when you want to define the root publication node of your `PublicationTree`. You can't use both `RootPath` AND `RelativeRoothPath` parameters.
*   `RelativeRootPath`: used when you just want to define a relative path (without specifying the domain path). A `PublicationTree` instance will be created automatically for each domain, appending the `RelativeRootPath` value to each domain.
    For instance, let's assume we have two domains, domain-1 and domain-2, and the `RelativeRootPath` is set to "/sections".
    Then, two `PublicationTree` instances will be created: the first one with a `RootPath` set to "/domain-1/sections", and the second one with a `RootPath` set to "/domain-2/sections",
    In the UI, when publishing, you can chose the `PublicationTree` you want. The list of trees will automatically be updated when creating and deleting domains.
*   `iconExpanded` and `iconCollapsed`: specify which icons to use when displaying the `PublicationTree` on the user interface.

## Configuring Remote Sections Publishing

To make the remote publication work, both the Nuxeo server instance and Nuxeo client instance need to be configured.

### Server Configuration

You should create a new configuration file, `publisher-server-config.xml` for instance, in the `nuxeo.ear/config` folder of your Nuxeo acting as a server (ie the Nuxeo application on which the documents will be published).

Here is a sample configuration:

```
<?xml version="1.0"?>
<component name="org.nuxeo.ecm.platform.publisher.contrib.server">

  <extension target="org.nuxeo.ecm.platform.publisher.impl.service.PublisherServiceImpl"
    point="treeInstance">

    <publicationTreeConfig name="ServerRemoteTree" tree="CoreTreeWithExternalDocs" factory="RemoteDocModel" >
      <parameters>
        <parameter name="RootPath">/default-domain/sections</parameter>
      </parameters>
    </publicationTreeConfig>

  </extension>

</component>

```

The available parameters are:

*   `RootPath`: its value must be the path to the document which is the root of your `PublicationTree`. Here, it will be the document `/default-domain/sections`, the default Sections root in Nuxeo.
    This parameter can be modified to suit your needs.

    {{#> callout type='note' }}

    Don't forget to put the whole path to the document.

    {{/callout}}

### Client Configuration

You should create a new configuration file, `publisher-client-config.xml` for instance, in the `nuxeo.ear/config` folder of your Nuxeo acting as a client (ie the Nuxeo application from which documents are published).

Here is a sample configuration:

```
<?xml version="1.0"?>
<component name="org.nuxeo.ecm.platform.publisher.contrib.client">

  <extension target="org.nuxeo.ecm.platform.publisher.impl.service.PublisherServiceImpl"
    point="treeInstance">

    <publicationTreeConfig name="ClientRemoteTree" tree="ClientForRemoteTree"
      factory="ClientProxyFactory">
      <parameters>
        <parameter name="title">label.publication.tree.remote.sections</parameter>
        <parameter name="userName">Administrator</parameter>
        <parameter name="password">Administrator</parameter>
        <parameter name="baseURL">
          http://myserver:8080/nuxeo/site/remotepublisher/
        </parameter>
        <parameter name="targetTree">ServerRemoteTree</parameter>
        <parameter name="originalServer">localserver</parameter>
        <parameter name="enableSnapshot">true</parameter>
      </parameters>
    </publicationTreeConfig>

  </extension>

</component>

```

The available parameters:

*   `targetTree`: this parameter corresponds to the name of the tree defined on the server Nuxeo application, here `ServerRemoteTree`.
*   `username`, `password`: the user account defined by those parameters will be the one used to connect to the remote Nuxeo and so to create documents in the `PublicationTree`. This account MUST exist on the server.
*   `baseURL`: the URL used by the PublisherService on the client side to communicate with the server Nuxeo application.
*   `originalServer`: identifies the Nuxeo application used as client.

## Configuring File System Publishing

To publish on the file system, you just need to define a new `TreeInstance` using the `LocalFSTree` and the `RootPath` of your tree.

Here is a sample configuration:

```
<extension  target="org.nuxeo.ecm.platform.publisher.impl.service.PublisherServiceImpl"
  point="treeInstance">

  <publicationTreeConfig name="FSTree" tree="LocalFSTree"
    factory="LocalFile" localSectionTree="false"
    title="label.publication.tree.fileSystem">
    <parameters>
      <parameter name="RootPath">/opt/publishing-folder</parameter>
      <parameter name="enableSnapshot">true</parameter>
      <parameter name="iconExpanded">/icons/folder_open.gif</parameter>
      <parameter name="iconCollapsed">/icons/folder.gif</parameter>
    </parameters>
  </publicationTreeConfig>

</extension>

```

The available parameters are:

*   `RootPath`: the root folder on the file system to be used as the root of the publication tree.
*   `iconExpanded` and `iconCollapsed`: specify which icons to use when displaying the `PublicationTree` on the user interface.
*   `enableSnapshot`: defines if a new version of the document is created when the document is published.

## {{> anchor 'publication-relations-duplication'}}Enabling Duplication of Relations upon Publication

By default, the relations on the document in the workspace are not duplicated on the published document. But it is possible to have them duplicated.

To enable this duplication of relations, you need to add the following contribution to the Platform:

```xml
<extension target="org.nuxeo.ecm.core.event.EventServiceComponent"
    point="listener">
  <listener name="publishRelationsListener" async="false" postCommit="false"
    class="org.nuxeo.ecm.platform.relations.core.listener.PublishRelationsListener"
    priority="-50">
    <event>documentProxyPublished</event>
  </listener>
</extension>
```

See the [How to Contribute to an Extension]({{page page='how-to-contribute-to-an-extension'}}) page to add the contribution in Nuxeo Studio.