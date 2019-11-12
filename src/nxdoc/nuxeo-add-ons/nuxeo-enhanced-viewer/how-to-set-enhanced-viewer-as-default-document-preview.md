---
title: 'HOWTO: Set the Enhanced Viewer addon as the default document preview'
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

This tutorial provides step by step instructions to replace the default Nuxeo previewer by the Enhanced Viewer. The instructions will be also valid for other use cases: It is possible to display the enhanced viewer in the task layout, or any other location where a document preview should be displayed.

## Prerequisites

Make sure that the Nuxeo Enhanced Viewer addon is installed and configured on the Nuxeo instance.

## Enhanced Previewer Element

Nuxeo Web UI is built upon [Nuxeo Elements](page page='nuxeo-elements' space='nxdoc'). The Enhanced Viewer is displayed thanks to the **`nuxeo-arender-page`** element. It is composed of the following attributes:

- `visible`: Whether the element should be displayed or not.
- `name`: The component name.
- `document`: The document which should be displayed.

{{#> callout type='info' }}
The `document` attribute is linked to a property of type `Object` (as in the document layouts for example).
{{/callout}}



## Practical Case: Change the default previewer

We can have two approaches:
- To update the previewer for specific document types
- To update the previewer for all document types

### For specific document types

- Generate the document type layouts in **Nuxeo Studio Designer** > **UI** > **Layouts**
- On the **view** layout, switch to code view and replace the line

```
<nuxeo-document-viewer role="widget" document="[[document]]"></nuxeo-document-viewer>
```

by

```
<nuxeo-arender-page visible="true" name="enhanced-viewer" document="[[document]]"></nuxeo-arender-page>
```

- Save and deploy

### For all document types

- Copy the `nuxeo-document-page` code in the [Nuxeo Web UI Github Page](https://github.com/nuxeo/nuxeo-web-ui/blob/10.10/elements/document/nuxeo-document-page.html)
- Create a copy of this element within your Nuxeo Studio Designer Project (from the **Resources** tab), in any folder location (`/UI/custom-elements/custom-nuxeo-document-page.html`)
- Replace the line
```
<nuxeo-document-view document="[[document]]"></nuxeo-document-view>
```
by

```
<nuxeo-arender-page visible="true" name="enhanced-viewer" document="[[document]]"></nuxeo-arender-page>
```
- Save and deploy

## Going further

It is possible to create custom logic to display a specific document version. All needed is:

1. Create an automation scripting / chain which return a document (Using the `Document.GetVersion` operation)
2. Navigate to your document type layout
3. Add you operation with `<nuxeo-operation id="getFirstVersion" op="javascript.AS_GetFirstVersion" input="[[document]]"></nuxeo-operation>` to retrieve the current document (Adapt the variable to the context)
4. Add the `_valueChanged` observer on the `document` to execute the operation

```
document: {
          type: Object,
          observer: '_valueChanged'
},
```

5. Add the document which needs to be displayed in the properties: `myFirstVersion: Object`
6. Add the `_valueChanged` method

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
