---
title: 'HOWTO: Make the Enhanced Viewer the Default Previewer'
description: 'Step by step instructions to replace the default document preview element by the enhanced viewer element'
review:
    comment: ''
    date: '2019-11-12'
    status: ok
labels:
    - addon
    - tutorial
    - howto
toc: true
tree_item_index: 100
---

This tutorial provides step by step instructions to replace the default Nuxeo previewer by the Enhanced Viewer. The instructions work for other use cases: it is possible to display the enhanced viewer in the task layout, or any other location where a document preview should be displayed.

## Prerequisites

Make sure that the [Nuxeo Enhanced Viewer](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-arender) addon is installed and configured on your Nuxeo instance.

## Enhanced Previewer Element

Nuxeo Web UI is built upon [Nuxeo Elements]({{page space='nxdoc' page='nuxeo-elements'}}). The Enhanced Viewer is displayed thanks to the `nuxeo-arender-page` element. It is composed of the following attributes:

- `visible`: Whether the element should be displayed or not.
- `name`: The component name.
- `document`: The document which should be displayed.

{{#> callout type='info' }}
The `document` attribute is linked to a property of type `Object` (as in the document layouts for example).
{{/callout}}

## Modify the Default Previewer

We can have two approaches:
- Update the previewer for [a specific document types](#for-a-specific-document-type)
- Update the previewer for [all document types](#for-all-document-types)

### For a Specific Document Type

1. Generate the layouts of the desired document in **Nuxeo Studio Designer** > **UI** > **Layouts**.
1. On the **View** layout, switch to code view and replace the line:</br>
  ```
  <nuxeo-document-viewer role="widget" document="[[document]]"></nuxeo-document-viewer>
  ```

  by

  ```
  <nuxeo-arender-page visible="true" name="enhanced-viewer" document="[[document]]"></nuxeo-arender-page>
  ```
1. Save and [deploy]({{page version='' space='nxdoc' page='nuxeo-dev-tools-extension'}}#hot-reload).

### For All Document Types

1. In **Resources** > **UI**, create a new folder `custom-elements`.
1. In it, create a new element and name it `nuxeo-document-page` and copy/paste the code from the [Nuxeo Web UI GitHub Page](https://github.com/nuxeo/nuxeo-web-ui/blob/10.10/elements/document/nuxeo-document-page.html).
1. Replace the line:</br>
  ```
  <nuxeo-document-view document="[[document]]"></nuxeo-document-view>
  ```
  by

  ```
  <nuxeo-arender-page visible="true" name="enhanced-viewer" document="[[document]]"></nuxeo-arender-page>
  ```
1. In **Resources** > **UI**, add the following contribution to the `-bundle.html` file:

  ```
  <nuxeo-slot-content name="documentViewPage" slot="DOCUMENT_VIEWS_PAGES" order="10">
      <template>
        <nuxeo-filter
          document="[[document]]"
          expression="document.facets.indexOf('Folderish') === -1
                      	&& document.facets.indexOf('Collection') === -1"
      	>
          <template>
            <nuxeo-arender-page visible="true" name="enhanced-viewer" document="[[document]]"></nuxeo-arender-page>
          </template>
        </nuxeo-filter>
      </template>
    </nuxeo-slot-content>
  ```
1. Save your changes and [deploy your changes]({{page version='' space='nxdoc' page='nuxeo-dev-tools-extension'}}#hot-reload).

## Going Further

It is possible to create custom logic to display a specific document version. All needed is:

1. Create an automation scripting / chain which returns a document, using the `Document.GetVersion` operation.
1. Navigate to your document type layout.
1. Add the following operation to retrieve the current document (adapt the variable to the context):
  ```
  <nuxeo-operation id="getFirstVersion" op="javascript.AS_GetFirstVersion" input="[[document]]"></nuxeo-operation>
  ```

1. Add the `_valueChanged` observer on the `document` to execute the operation.
  ```
  document: {
            type: Object,
            observer: '_valueChanged'
  },
  ```

1. Add the document which needs to be displayed in the properties: `myFirstVersion: Object`.
1. Add the `_valueChanged` method:
```
_valueChanged: function() {
        if (this.currentTaskDocument){
        this.$.getFirstVersion.input = this.currentTaskDocument;
        this.$.getFirstVersion.params = {};
        this.$.getFirstVersion.execute()
            .then(function(result) {
              this.myFirstVersion = result;
             }.bind(this))
            .catch(function (error) {
            }.bind(this));
      }
```
1. Save your changes and [deploy]({{page version='' space='nxdoc' page='nuxeo-dev-tools-extension'}}#hot-reload).
