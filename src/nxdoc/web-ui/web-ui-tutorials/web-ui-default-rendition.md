---
title: 'HOWTO: Customize Default Rendition in Web UI'
description: Learn how to customize the default rendition used in Web UI.
review:
    comment: ''
    date: '2019-03-28'
    status: ok
toc: false
details:
    howto:
        excerpt: Learn how to customize the default rendition used in Web UI.
        level: Advanced
        tool: code
        topics: Web UI
labels:
    - tutorial
    - rendition
    - lts2019-ok
tree_item_index: 1040
---

Web UI leverages the [Default Rendition]({{page page='renditions'}}#default_rendition) service for two Web UI features.

## Bulk Download{{> anchor 'bulk_download'}}

![]({{file name='BULK_DOWNLOAD.png'}} ?w=500,border=true)

The rendition used for bulk downloading documents is defined by [rendition-download-contrib.xml](https://github.com/nuxeo/nuxeo/blob/10.10/nuxeo-features/nuxeo-platform-rendition/nuxeo-platform-rendition-core/src/main/resources/OSGI-INF/rendition-download-contrib.xml). You can override this contribution to change the behavior. For example, the following contribution will use the main blob (from the `file:file` property) only if the user is `bob`, the `xmlExport` otherwise.  

```xml
<component name="my.org.rendition.download.contrib">

  <require>org.nuxeo.ecm.platform.rendition.download.contrib</require>

  <extension target="org.nuxeo.ecm.platform.rendition.service.RenditionService"
    point="defaultRendition">
    <defaultRendition reason="download">
      <script language="JavaScript">
        function run() {
          if (CurrentUser.getName() != "bob") {
            if (Document.hasSchema("file")) {
              return 'mainBlob';
            }
          }
          return 'xmlExport';
        }
      </script>
    </defaultRendition>
  </extension>

</component>
```

## Publishing{{> anchor 'publishing'}}

![]({{file name='PUBLISHING.png'}} ?w=500,border=true)

The rendition used when publishing the default rendition is defined by [rendition-publish-contrib.xml](https://github.com/nuxeo/nuxeo/blob/10.10/nuxeo-features/nuxeo-platform-rendition/nuxeo-platform-rendition-core/src/main/resources/OSGI-INF/rendition-publish-contrib.xml). In the same way than the above bulk download, you can change the default behavior by overriding this contribution:

```xml
<component name="my.org.rendition.publish.contrib">

  <require>org.nuxeo.ecm.platform.rendition.publish.contrib</require>

  <extension target="org.nuxeo.ecm.platform.rendition.service.RenditionService"
    point="defaultRendition">
    <defaultRendition reason="publish">
      <script language="JavaScript">
        function run() {
          if (CurrentUser.getName() != "bob") {
            if (Document.hasSchema("file")) {
              return 'mainBlob';
            }
          }
          return 'xmlExport';
        }
      </script>
    </defaultRendition>
  </extension>

</component>
```
