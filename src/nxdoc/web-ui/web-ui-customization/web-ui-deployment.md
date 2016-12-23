---
title: Deployment
review:
    comment: ''
    date: '2016-12-23'
    status: ok
toc: true
labels:
    - lts2016-ok
    - nuxeo-web-ui
    - extension
    - marketplace
    - deployment
tree_item_index: 50

---

This documentation explains the Web UI deployment within a Nuxeo server. The [Web UI marketplace](https://github.com/nuxeo/plugin-nuxeo-web-ui/tree/0.8.0) installs in `$NUXEO_SERVER/nxserver/nuxeo.war/ui` the needed resources to run the Web UI.

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

Explanations about the Web UI structure:
- the [index.jsp](https://github.com/nuxeo/plugin-nuxeo-web-ui/blob/8.10/nuxeo-web-ui/src/main/resources/web/nuxeo.war/ui/index.jsp) which serves the Web UI.
- the `elements.html` is a vulcanized files which groups the structural code of the Web UI.
- the `nuxeo-home.html` is the element that renders the home dashboard of the Web UI (see the [dashboard]({{page page='dashboard'}}) documentation to put in place your custom dashboard).
- the `document` directory provides the layout elements to create, view, edit, import etc. the data of a given document type. In the above snippet, we see elements to provide layouts for documents of type *File*, *Folder* and *Note*. The convention is `nuxeo-{documentType}-{mode}-layout.html` where:
  * {documentType} is the document type i.e. *Folder*, *Note*, *Note*, etc.
  * {mode} is the layout mode i.e. *Create*, *View* , *Edit*, *Import*, etc.
  See the [document type]({{page page='document-types'}}) documentation for further details.
- the `i18n` directory provides internationalization files to translate Web UI labels (See the [managing translation]({{page page='managing-translation'}}) documentation).
- the `workflow` directory providers the layout elements to complete workflow tasks.  See the [workflow tasks]({{page page='workflow-tasks'}}) documentation for further details.

## How to deploy additional Web UI resources{{> anchor 'deploy_or_override'}}

In order to extend the Web UI (outside Studio), you'll need to create your own marketplace which will deploy your own resources in `$NUXEO_SERVER/nxserver/nuxeo.war/ui`.

Let's have a look to the [Nuxeo Drive]({{page version='' space='nxdoc' page='nuxeo-drive'}}) addon. Nuxeo Drive defines among other a [nuxeo-drive-web-ui](https://github.com/nuxeo/nuxeo-drive-server/tree/8.10/nuxeo-drive-web-ui) bundle deployed in a server by its [marketplace](https://github.com/nuxeo/marketplace-drive/tree/1.6.3).

First important point is the [nuxeodrive-webresources-contrib.xml](https://github.com/nuxeo/nuxeo-drive-server/blob/8.10/nuxeo-drive-web-ui/src/main/resources/OSGI-INF/nuxeodrive-webresources-contrib.xml#L16) file which provides the following contribution:

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

which makes [nuxeo-drive.html](https://github.com/nuxeo/nuxeo-drive-server/blob/8.10/nuxeo-drive-web-ui/src/main/resources/web/nuxeo.war/ui/nuxeo-drive/nuxeo-drive.html) accessible in the [index.jsp](https://github.com/nuxeo/plugin-nuxeo-web-ui/blob/8.10/nuxeo-web-ui/src/main/resources/web/nuxeo.war/ui/index.jsp#L80) (deployed in `$NUXEO_SERVER/nxserver/nuxeo.war/ui/` and is the access point of the Web UI). Of course, this extension is declared in the [nuxeo-drive-web-ui's OSGI bundle MANIFEST](https://github.com/nuxeo/nuxeo-drive-server/blob/8.10/nuxeo-drive-web-ui/src/main/resources/META-INF/MANIFEST.MF#L7) like any other Nuxeo extension.

{{#> callout type='warning' }}

The requirement on `org.nuxeo.web.ui.resources` is important as it makes sure your extension is deployed after the [Web UI](https://github.com/nuxeo/plugin-nuxeo-web-ui/blob/master/nuxeo-web-ui/src/main/resources/OSGI-INF/webresources-contrib.xml#L3) one. This is how you'll be able to potentially override/redefine part of the default Web UI such as the [dashboard]({{page page='web-ui-dashboard'}}).

{{/callout}}

Note that [nuxeo-drive.html](https://github.com/nuxeo/nuxeo-drive-server/blob/8.10/nuxeo-drive-web-ui/src/main/resources/web/nuxeo.war/ui/nuxeo-drive/nuxeo-drive.html) defines mostly slots contents (see the [Web UI slot documentation](https://github.com/nuxeo/nuxeo-drive-server/blob/8.10/nuxeo-drive-web-ui/src/main/resources/web/nuxeo.war/ui/nuxeo-drive/nuxeo-drive.html)) but it also includes [import of new elements](https://github.com/nuxeo/nuxeo-drive-server/blob/8.10/nuxeo-drive-web-ui/src/main/resources/web/nuxeo.war/ui/nuxeo-drive/nuxeo-drive.html#L15) used in declared slot contents and brought by the addon itself:

```
<link rel="import" href="nuxeo-drive-edit-button.html">
```

For the rest, all [other Drive Web UI resources](https://github.com/nuxeo/nuxeo-drive-server/tree/8.10/nuxeo-drive-web-ui/src/main/resources/web/nuxeo.war/ui/nuxeo-drive) will be deployed in the `$NUXEO_SERVER/nxserver/nuxeo.war/` directory thanks to the [deployment fragment](https://github.com/nuxeo/nuxeo-drive-server/blob/8.10/nuxeo-drive-web-ui/src/main/resources/OSGI-INF/deployment-fragment.xml#L6).

Finally, the [Nuxeo Drive Marketplace](https://github.com/nuxeo/marketplace-drive/tree/1.6.3) has the proper [assembly.xml](https://github.com/nuxeo/marketplace-drive/blob/1.6.3/marketplace/src/main/assemble/assembly.xml#L131) in order to deploy its Web UI resources.

{{#> callout type='warning' }}

This must be carefully setup in order to make sure that Nuxeo Drive contributions and extensions to Web UI are properly installed.

{{/callout}}
