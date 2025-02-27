---
title: Nuxeo 3D Viewer
review:
    comment: ''
    date: '2025-01-09'
    status: ok
labels:
    - lts2023-ok
    - 3d
    - connectors
toc: true
tree_item_index: 3700
---

The Nuxeo 3D Viewer connector adds the capabilities of preview and annotation of the 3D model files to the Nuxeo Platform. 

## Installation 

{{{multiexcerpt 'MP-installation-easy' page='Generic Multi-Excerpts'}}}

## Prerequisites

1. Nuxeo Platform: LTS-2023
2. Nuxeo Web UI: dependent package which will be installed if not present.
3. CLI Tools: [gltf-pipeline](https://github.com/CesiumGS/gltf-pipeline), [gltf-transform](https://gltf-transform.dev/cli) and [obj2gltf](https://github.com/CesiumGS/obj2gltf)  

## Current Scope 

- Supported 3D Model Files: OBJ and GLB
- Supported Functionalities:
  - Ability to create 3D Model files under new document type – 3D
  - Preview of 3D Model files
  - Conversion generation (Optimized GLB and OBJ to GLB )
  - Annotation of 3D Model Files

## Functional Overview

After installation of the package, upon trying to create a new document in web UI, a new option of 3D Model would appear as shown in the image below:

![]({{file name='3d-doc-creation.png'}} ?w=600,border=true) 

Upon clicking this button, users can create a document of this type.</br>
The 3D Model files can be selected as primary blobs of this document.

![]({{file name='3D-doc-listview.png'}} ?w=600,border=true)

### 3D Model File Preview and Conversion

The document preview is now capable to giving a 3D experience.

![]({{file name='3D-doc-view.png'}} ?w=600,border=true)

If a pure GLB file is uploaded, the conversions section could contain an optimized GLB version.

In case when an OBJ file is uploaded, the conversions section could contain the above optimized and an equivalent GLB version of the same file.

![]({{file name='3D-doc-sneakerview.png'}} ?w=600,border=true)

Considering the performance aspects, optimized conversions, if available, would be used for the preview.

The preview and conversions/rendition views are available as standalone web components and can be included in any custom document layout views using:

```
<nuxeo-3d-viewer-model-preview document="[[document]]"></nuxeo-3d-viewer-model-preview>
```
```
<nuxeo-3d-viewer-renditions document="[[document]]"></nuxeo-3d-viewer-renditions>
```

### Annotating Files

A new tab named 3D Annotations is available in the document preview page. 
![]({{file name='3D-doc-view-tab.png'}} ?w=600,border=true)

Upon clicking it, the page that allows to annotate current 3D Model file shows up. A new annotation button shows up in the right panel clicking which, the annotate mode is activated and a point click on the specific area of 3D Model to annotate can be achieved.

![]({{file name='3D-doc-new-annotation.png'}} ?w=600,border=true)

The annotation section is also available as standalone web component and can be included in any custom document layout using: 
```
<nuxeo-3d-viewer-annotation document="[[document]]"></nuxeo-3d-viewer-annotation> 
```

## Known Limitations

- Only 3D Model files of types: GLB and OBJ are supported for now.
- Dependency on several CLI tools demands a pre-requisite for deployment. 
 
## Future Scope

- Support for thumbnail and multi angle views of the 3D Model file.
- Support for additional Model file types. 
