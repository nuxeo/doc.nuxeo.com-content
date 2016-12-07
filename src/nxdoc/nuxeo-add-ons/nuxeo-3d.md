---
title: Nuxeo 3D
review:
    comment: ''
    date: '2016-12-07'
    status: ok
labels:
    - lts2016-ok
    - 3d
    - threed
toc: true
confluence:
    ajs-parent-page-id: '16089349'
    ajs-parent-page-title: Nuxeo Add-Ons
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Nuxeo+3D
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Nuxeo+3D'
    page_id: '31690918'
    shortlink: ppDjAQ
    shortlink_source: 'https://doc.nuxeo.com/x/ppDjAQ'
    source_link: /display/NXDOC/Nuxeo+3D
tree_item_index: 3700
history:
    -
        author: Solen Guitter
        date: '2016-10-10 07:46'
        message: 'ix excerpts, typos and add lin'
        version: '15'
    -
        author: Tiago Cardoso
        date: '2016-10-09 20:20'
        message: ''
        version: '14'
    -
        author: Miguel Nixo
        date: '2016-10-08 13:33'
        message: ''
        version: '13'
    -
        author: Miguel Nixo
        date: '2016-10-08 13:24'
        message: ''
        version: '12'
    -
        author: Miguel Nixo
        date: '2016-10-08 12:16'
        message: ''
        version: '11'
    -
        author: Miguel Nixo
        date: '2016-10-08 12:14'
        message: ''
        version: '10'
    -
        author: Miguel Nixo
        date: '2016-10-08 12:00'
        message: ''
        version: '9'
    -
        author: Miguel Nixo
        date: '2016-10-08 11:58'
        message: ''
        version: '8'
    -
        author: Miguel Nixo
        date: '2016-10-08 10:48'
        message: ''
        version: '7'
    -
        author: Miguel Nixo
        date: '2016-10-08 10:44'
        message: ''
        version: '6'
    -
        author: Miguel Nixo
        date: '2016-10-08 10:41'
        message: ''
        version: '5'
    -
        author: Miguel Nixo
        date: '2016-10-07 17:58'
        message: ''
        version: '4'
    -
        author: Miguel Nixo
        date: '2016-10-07 17:55'
        message: ''
        version: '3'
    -
        author: Miguel Nixo
        date: '2016-10-07 17:31'
        message: ''
        version: '2'
    -
        author: Miguel Nixo
        date: '2016-10-07 16:29'
        message: ''
        version: '1'

---
The Nuxeo 3D addon of the Nuxeo Platform provides support for 3D file types.

## Installation

{{{multiexcerpt 'mp-installation-easy' page='Generic Multi-Excerpts'}}}

However this addon depends on external software - Docker - for conversion and rendering. See the page&nbsp;[Installing and Setting Up Related Software]({{page page='installing-and-setting-up-related-software'}}).

After the Nuxeo 3D addon is&nbsp;installed, the new 3D document type is available.

![]({{file name='Screen Shot 2016-10-07 at 16.17.44.png'}} ?w=600)

The supported 3D file formats are:

*   Collada (.dae)
*   3D Studio (.3ds)
*   FBX (.fbx)
*   Stanford (.ply)
*   Wavefront (.obj)
*   X3D Extensible 3D (.x3d)
*   Stl (.stl)

## Functional Overview

The 3D document type is fully integrated in the Nuxeo Platform and is available alongside the other document types. It can be created the same way as the platform default document types, getting the same metadata, the same workflows, etc.

3D documents can be [created]({{page space='userdoc' page='creating-content'}}) and [edited]({{page space='userdoc' page='editing-content'}}) in workspaces and folders like any other document type. You can also classify and organize them in [collections]({{page page='collections'}}).

When a main 3D model file is assigned to a 3D document, a processing routine is initiated to extract metadata from the model, create 2D renditions and build the model's transmission formats. When this processing is completed, the 3D document view should show a 3D preview of the document, the configured render views, the 'transmission formats' details and the files that make up the content of the 3D document.
Attachments work as 3D format assets like textures. A standalone ZIP file with the 3D document can also be uploaded, allowing a directory structure inside the ZIP.&nbsp;

Replacing the main file or the attachments of a 3D document also triggers the processing routine, so that the render views and transmission formats can be updated.

![]({{file name='full.png'}} ?w=600,border=true)

#### 3D Preview

The 3D preview allows a complete visualization of the 3D document in real-time through a WebGL rendering. The available manipulation controls include rotating, panning and zooming on the 3D model.

![]({{file name='preview.png'}} ?w=600,border=true)

#### Render Views

The configured render views are presented as a set of 2D orthographic renderings of the original 3D model. These renders provide an exact representation of the model in the parametrized views. The render views can be downloaded in full resolution. Clicking on a render view changes the camera position of the currently loaded model in the 3D Preview to match the rotation of the render view.

![]({{file name='renders.png'}} ?w=300,h=251,border=true)

#### Transmission Formats

Transmission formats are useful to represent the original 3D model as compact (if configured to restrict the level of detail) and fast loading assets. Various options are available to restrict the level of detail of a model:

*   Geometry: A transmission format can be configured to limit the number of polygons of a model by setting a percentage and/or a maximum number of polygons. If both options are set, the transmission format geometry will be limited by the stricter limit.
*   Textures: A transmission format can be configured to limit the size of each texture file (2D image) by setting a percentage and/or a maximum resolution. If both options are set, each transmission format texture will be limited by the stricter limit.

In order to prevent destructive effects of level of detail reductions on model geometry and textures, heuristics are used to evaluate whether or not a level of detail reduction can be applied to a model. If a level of detail reduction is successful, a check-mark symbol is shown. Symbols are displayed if a reduction in level of detail could be applied or not (check-mark and warning symbols, respectively). When a level of detail ratio cannot be applied to a model, the lowest non-destructive ratio is used.

Details for each transmission format include the number of polygons and combined file size of all textures (if any are used).

Each transmission format can be loaded and viewed directly on the 3D Preview and can be downloaded as a glTF file.

![]({{file name='transmissions.png'}} ?w=600,h=209,border=true)

## Technical Overview

#### Schema

*   `transmissionFormats`: Fast loading format created from the original model. These can configured to represent lower levels of detail of the original model. Stored as glTF files.
*   `renderViews`: renditions of the model (2D renderings).
*   `info`: Geometric properties and metadata of the 3D model.

#### Facets

*   `ThreeD`: The facet to put on document types that should be considered as 3D. This facet comes with the following schemas:&nbsp;
    *   `file`: Main model file.
    *   `files`: Resources that are referenced by the main model file (i.e. textures, materials, etc.).
    *   `threed`:&nbsp;Metadata, transmission formats and renditions of the 3D model.

#### Document Type

*   `ThreeD`: default type in Nuxeo that handle 3D model files. It comes with the&nbsp;`ThreeD`, `Commentable`, &nbsp;`Versionable`&nbsp;and&nbsp;`Publishable`&nbsp;facets.

#### Listeners

*   `ThreeDBatchGenerationListener`: Updates the transmission formats and render views of the 3D document if the main model file or attachment is changed.
*   `ThreeDBatchCleanerListener`: Checks if 3D information has changed and cleans the 3D document data when a the transmission formats and render views are scheduled to be updated.

#### File Manager Plugin

The plugin&nbsp;`ThreeDPlugin`&nbsp;is contributed to the [File Manager]({{page page='file-manager'}}) to create&nbsp;`ThreeD`&nbsp;documents when the imported file mime type matches one of the following:

*   `model/vnd.collada+xml`&nbsp;(Collada)
*   `application/x-3ds`&nbsp;(3D Studio)
*   `application/octet-stream`&nbsp;(FBX)
*   `text/x-c`&nbsp;(Stanford)
*   `text/wavefront-obj`&nbsp;(Wavefront)
*   `model/x3d+xml`&nbsp;(X3D Extensible 3D)
*   `application/sla`&nbsp;(STL)
*   `model/gltf+json`&nbsp;(glTF)
*   `application/zip`&nbsp;(Zip Archive)

#### Exposed Extension Points

The&nbsp;`ThreeDService`&nbsp;exposes three extension points:

*   `renderViews`: Configurations of the available render views. It uses Spherical Coordinate System for camera position.

    ```xml
    <extension target="org.nuxeo.ecm.platform.threed.service.ThreeDService" point="renderViews">
      <renderView name="isometric" azimuth="225" zenith="45" width="1920" height="1080"
        enabled="true" rendition="true" renditionVisible="true"/>
    </extension>
    ```

*   `automaticRenderViews`: Default render views to be generated when a 3D document is created or updated.

    ```xml
    <extension target="org.nuxeo.ecm.platform.threed.service.ThreeDService" point="automaticRenderViews">
      <automaticRenderView order="0" name="isometric" enabled="true"/>
    </extension>
    ```

*   `automaticLOD`: Default transmission formats to be generated when a 3D document is created or updated. Ideally, these represent different levels of detail of the same original 3D model.

    ```xml
    <extension target="org.nuxeo.ecm.platform.threed.service.ThreeDService" point="automaticLOD">
      <automaticRenderLOD order="0" name="Full" percPoly="100" percTex="100"
        enabled="true" rendition="true" renditionVisible="true"/>
      <automaticRenderLOD order="1" name="Half" percPoly="50" percTex="50"
        enabled="true" rendition="true" renditionVisible="true"/>
      <automaticRenderLOD order="2" name="ThousandPolysMax" percPoly="100" maxPoly="1000"
        percTex="100" enabled="true" rendition="true" renditionVisible="true"/>
      <automaticRenderLOD order="3" name="HDTexturesMax" percPoly="100" percTex="100"
        maxTex="1280x720" enabled="true" rendition="true" renditionVisible="true"/>
    </extension>
    ```

{{! Don't put anything here. }}

* * *
