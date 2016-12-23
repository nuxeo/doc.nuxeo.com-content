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
- the `index.jsp` which serves the Web UI.
- the `elements.html` is a vulcanized files which groups the structural code of the Web UI.
- the `nuxeo-home.html` is the element that renders the home dashboard of the Web UI (see the [dashboard]({{page page='dashboard'}}) documentation to put in place your custom dashboard).
- the `document` directory provides the layout elements to create, view, edit, import etc. the data of a given document type. In the above snippet, we see elements to provide layouts for document of type *File*, *Folder* and *Note*. The convention is `nuxeo-{documentType}-{mode}-layout.html` where:
  * {documentType} is the document type i.e. *Folder*, *Note*, *Note*, etc.
  * {mode} is the layout mode i.e. *Create*, *View* , *Edit*, *Import*, etc.
  See the [document type]({{page page='document-types'}}) documentation for further details.
- the `i18n` directory provides internationalization files to translate Web UI labels (See the [managing translation]({{page page='managing-translation'}})).
- the `workflow` directory providers the layout elements to complete workflow tasks.  See the [workflow tasks]({{page page='workflow-tasks'}}) documentation for further details.

TODO keep explaining and tell how to create a marketplace/bundle requiring web ui one in order to add/override resources in `$NUXEO_SERVER/nxserver/nuxeo.war/ui`. Refer to DAM/Drive addon.
