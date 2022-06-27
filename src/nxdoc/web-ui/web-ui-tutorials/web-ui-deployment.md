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
        topics: Deployment
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

In order to extend the Web UI (outside Studio), you'll need to create your own marketplace which will deploy your own resources in `$NUXEO_SERVER/nxserver/nuxeo.war/ui`. In order to instruct these resources to override their original counterparts, we must add the following require to `deployment-fragment.xml` in `resources/OSGI-INF`:

```xml
<require>org.nuxeo.web.ui</require>
```

For more information on the `deployment-fragment` structure, see the **Building and Deployment** section of [Web UI Customization Tutorial]({{page space='nxdoc' page='web-ui-customization-tutorial'}}) documentation.

A proper `assembly.xml` is also needed in order to deploy its Web UI resources. Examples of both can be found in the [Nuxeo Cold Storage addon](https://github.com/nuxeo/nuxeo-coldstorage):
- [resources/OSGI-INF/deployment-fragment.xml](https://github.com/nuxeo/nuxeo-coldstorage/blob/lts-2021/nuxeo-coldstorage-web/src/main/resources/OSGI-INF/deployment-fragment.xml)
- [assemble/assembly.xml](https://github.com/nuxeo/nuxeo-coldstorage/blob/lts-2021/nuxeo-coldstorage-package/src/main/assemble/assembly.xml)
