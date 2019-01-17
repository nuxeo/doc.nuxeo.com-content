---
title: 'HOWTO: Deploy Web UI Within a Nuxeo Server'
review:
    comment: ''
    date: '2017-12-13'
    status: ok
toc: true
details:
    howto:
        excerpt: Learn how to deploy Web UI within a Nuxeo server.
        level: Advanced
        tool: code
        topics: Web UI
labels:
    - lts2016-ok
    - nuxeo-web-ui
    - tcardoso
    - extension
    - marketplace
    - lts2017-ok
tree_item_index: 1100

---

This documentation explains the Web UI deployment within a Nuxeo server. The [Web UI marketplace](https://github.com/nuxeo/plugin-nuxeo-web-ui/tree/2.2_9.10) installs the needed resources in `$NUXEO_SERVER/nxserver/nuxeo.war/ui` to run the Web UI.

## Structure

```
$NUXEO_SERVER/nxserver/nuxeo.war/ui% tree
.
├── bower_components
│   ├── ...
├── document
│	│── ... (dynamically loaded document layout element according to document type)
│   ├── file
│   │   ├── nuxeo-file-create-layout.html
│   │   ├── nuxeo-file-edit-layout.html
│   │   ├── nuxeo-file-import-layout.html
│   │   ├── nuxeo-file-metadata-layout.html
│   │   └── nuxeo-file-view-layout.html
│   ├── folder
│   │   ├── nuxeo-folder-create-layout.html
│   │   └── nuxeo-folder-edit-layout.html
│   ├── note
│   │   ├── nuxeo-note-create-layout.html
│   │   ├── nuxeo-note-edit-layout.html
│   │   ├── nuxeo-note-import-layout.html
│   │   ├── nuxeo-note-metadata-layout.html
│   │   └── nuxeo-note-view-layout.html
├── elements.html (all structural Web UI resources vulcanized within this single file, cannot be overriden)
├── favicon.ico
├── i18n
│   ├── i18n.html
│   ├── messages-de.json
│   ├── messages-fr.json
│   ├── messages-ja.json
│   ├── messages.json
│   └── messages-pt-PT.json
├── images
│	└── ...
├── index.jsp
├── manifest.json
├── nuxeo-admin
│	└── (admin menu sub pages)
├── nuxeo-home.html
├── nuxeo-user-group-management
│	└── ...
├── search
│	└── ...
├── styles
│   ├── *-theme.html (theme resources, * is the theme name)
├── vendor
│	└── ...
├── webcomponentsjs
│   └── webcomponents-lite.min.js
└── workflow
	└── (dynamically loaded task layout element)
```

About the Web UI structure:
- the [index.jsp](https://github.com/nuxeo/nuxeo-web-ui/blob/9.10/src/main/resources/web/nuxeo.war/ui/index.jsp) serves the Web UI.
- the `elements.html` is a vulcanized file which groups the structural code of the Web UI.
- the `nuxeo-home.html` is the element that renders the home dashboard of the Web UI (see the [dashboard]({{page page='dashboard'}}) documentation to put your custom dashboard in place).
- the `document` directory provides the layout elements to create, view, edit, import etc. the data of a given document type. In the above snippet, we see elements to provide layouts for documents of type *File*, *Folder* and *Note*. The convention is `nuxeo-{documentType}-{mode}-layout.html` where:
  * {documentType} is the document type i.e. *Folder*, *Note*, *Note*, etc.
  * {mode} is the layout mode i.e. *Create*, *View* , *Edit*, *Import*, etc.
  See the [layout elements]({{page page='web-ui-layouts'}}) documentation for further details.
- the `i18n` directory provides internationalization files to translate Web UI labels (See the [managing translation]({{page version='' space='nxdoc' page='web-ui-managing-translations'}}) documentation).
- the `workflow` directory providers the layout elements to complete workflow tasks.  See the [workflow tasks]({{page version='' space='nxdoc' page='web-ui-workflow-tasks'}}) documentation for further details.

## How to Deploy Additional Web UI Resources{{> anchor 'deploy_or_override'}}

In order to extend the Web UI (outside Studio), you'll need to create your own marketplace which will deploy your own resources in `$NUXEO_SERVER/nxserver/nuxeo.war/ui`.

Let's have a look at the [Nuxeo Drive]({{page space='client-apps' page='nuxeo-drive'}}) addon. Nuxeo Drive defines among others a [nuxeo-drive-web-ui](https://github.com/nuxeo/nuxeo-drive-server/tree/9.10/nuxeo-drive-web-ui) bundle deployed in a server by its [marketplace](https://github.com/nuxeo/marketplace-drive/tree/1.7_9.10.

First important point is the [nuxeodrive-webresources-contrib.xml](https://github.com/nuxeo/nuxeo-drive-server/blob/9.10/nuxeo-drive-web-ui/src/main/resources/OSGI-INF/nuxeodrive-webresources-contrib.xml) file which provides the following contribution:

```xml
<component name="org.nuxeo.drive.web.ui.resources.contrib">

  <require>org.nuxeo.web.ui.resources</require>

  <extension target="org.nuxeo.ecm.platform.WebResources" point="resources">
    <resource name="nuxeo-drive.html" type="import" shrinkable="false">
      <uri>/ui/nuxeo-drive/nuxeo-drive.html</uri>
    </resource>
  </extension>

  <extension target="org.nuxeo.ecm.platform.WebResources" point="bundles">
    <bundle name="web-ui">
      <resources append="true">
        <resource>nuxeo-drive.html</resource>
      </resources>
    </bundle>
  </extension>

</component>
```

This makes [nuxeo-drive.html](https://github.com/nuxeo/nuxeo-drive-server/blob/9.10/nuxeo-drive-web-ui/src/main/resources/web/nuxeo.war/ui/nuxeo-drive/nuxeo-drive.html) accessible in the [index.jsp](https://github.com/nuxeo/nuxeo-web-ui/blob/9.10/src/main/resources/web/nuxeo.war/ui/index.jsp) (deployed in `$NUXEO_SERVER/nxserver/nuxeo.war/ui/` and is the access point of the Web UI). Of course, this extension is declared in the [nuxeo-drive-web-ui's OSGI bundle MANIFEST](https://github.com/nuxeo/nuxeo-drive-server/blob/9.10/nuxeo-drive-web-ui/src/main/resources/META-INF/MANIFEST.MF#L7) like any other Nuxeo extension.

{{#> callout type='warning' }}

The requirement on `org.nuxeo.web.ui.resources` is important as it ensures your extension is deployed after the [Web UI](https://github.com/nuxeo/nuxeo-web-ui/blob/9.10/src/main/resources/OSGI-INF/webresources-contrib.xml). This is how you'll be able to potentially override/redefine part of the default Web UI such as the [dashboard]({{page page='web-ui-dashboard'}}).

{{/callout}}

Note that [nuxeo-drive.html](https://github.com/nuxeo/nuxeo-drive-server/blob/9.10/nuxeo-drive-web-ui/src/main/resources/web/nuxeo.war/ui/nuxeo-drive/nuxeo-drive.html) defines mostly slot contents (see the [Web UI slot documentation]({{page page='web-ui-slots'}}) but it also includes [import of new elements](https://github.com/nuxeo/nuxeo-drive-server/blob/9.10/nuxeo-drive-web-ui/src/main/resources/web/nuxeo.war/ui/nuxeo-drive/nuxeo-drive.html#L15) used in declared slot contents and brought by the addon itself:

```
<link rel="import" href="nuxeo-drive-edit-button.html">
```

For the rest, all [other Drive Web UI resources](https://github.com/nuxeo/nuxeo-drive-server/tree/9.10/nuxeo-drive-web-ui/src/main/resources/web/nuxeo.war/ui/nuxeo-drive) will be deployed in the `$NUXEO_SERVER/nxserver/nuxeo.war/` directory thanks to the [deployment fragment](https://github.com/nuxeo/nuxeo-drive-server/blob/9.10/nuxeo-drive-web-ui/src/main/resources/OSGI-INF/deployment-fragment.xml#L6).

Finally, the [Nuxeo Drive Marketplace](https://github.com/nuxeo/marketplace-drive/tree/1.7_9.10) has the proper [assembly.xml](https://github.com/nuxeo/marketplace-drive/blob/1.7_9.10/marketplace/src/main/assemble/assembly.xml#L131) in order to deploy its Web UI resources.

{{#> callout type='warning' }}

This must be carefully setup in order to make sure that Nuxeo Drive contributions and extensions to Web UI are properly installed.

{{/callout}}
