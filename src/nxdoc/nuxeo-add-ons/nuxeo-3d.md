---
title: Nuxeo 3D
review:
    comment: ''
    date: '2017-12-14'
    status: ok
labels:
    - lts2016-ok
    - 3d
    - mnixo
    - threed
    - lts2017-ok
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

[Nuxeo Platform 3D](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-platform-3d) provides support for 3D file types.

## Installation and Configuration

{{{multiexcerpt 'mp-installation-easy' page='Generic Multi-Excerpts'}}}

However this addon depends on external software - [Docker](https://www.docker.com/) - for conversion and rendering.

After the Nuxeo 3D addon is installed, the new 3D document type is available.

![]({{file name='available-doc-types.png'}} ?w=600)

### Docker usage

Nuxeo Platform 3D requires Docker to perform content conversion and rendering. Using Docker makes the installation process simpler, freeing from installing and configuring specific versions of several third party software.

To install Docker:
1. Follow the instructions at [Get Docker](https://www.docker.com/products/overview) on Docker's official site.

    To check if Docker is properly installed, run `docker -v` anywhere on the command line console. As result, Docker version and build information should be shown.
2. In Docker settings, make sure that Docker can access the repository where the Nuxeo server is installed. If that's not the case, add it to the repositories.

Nuxeo Platform 3D relies on two Docker images that are available on [Nuxeo's Docker Hub account](https://hub.docker.com/u/nuxeo/). The Nuxeo server will trigger the download and installation of these two images, so you don't need to set them up in Docker.

The required Docker images are:

* [Blender image](https://hub.docker.com/r/nuxeo/blender/) - This image installs the correct version of Blender with the needed plugins on it.

    [Blender](https://www.blender.org/) is a free and open source 3D content suite. In Nuxeo Platform 3D, it is used to convert several 3D formats to Collada - as an intermediate format - to be later processed.
    It is also used to render canonical views that can be defined. These renderings are generated with [Cycles Render Engine](https://www.blender.org/manual/render/cycles/). It allows for a ray-tracing rendering which produces high quality results. In order to convert Blender materials to Cycles materials, a plugin is activated and set up.
    3D content support is therefore limited to Blender support which is best-in-class on the open source landscape.

* [Collada2glTF](https://hub.docker.com/r/nuxeo/collada2gltf/) - This image installs v1.0-draft2 of [Collada2glTF](https://github.com/KhronosGroup/COLLADA2GLTF/wiki).

    Collada2glTF is the official converter from Collada format to glTF - transmission format - developed by the Khronos Group to allow a broad adoption of glTF 3D format.
    It converts from the intermediate format to the final transmission format made available with level of detail on the content's view.

## Functional Overview

The 3D document type is fully integrated in the Nuxeo Platform and is available alongside the other document types. It can be created the same way as the platform default document types, getting the same metadata and collaborative features (see details below).

The supported 3D file formats are:

- Collada (.dae)
- 3D Studio (.3ds)
- FBX (.fbx)
- Stanford (.ply)
- Wavefront (.obj)
- X3D Extensible 3D (.x3d)
- Stl (.stl)

A 3D document is typically composed of a 3D main file and attachments for the 3D assets, such as textures.
When a main 3D model file is assigned to a 3D document, a processing routine is initiated to extract metadata from the model, create 2D renditions (render views) and build the model's transmission formats. When this processing is completed, the 3D document view shows a 3D preview of the document, the configured render views, the transmission formats' details and the files that make up the content of the 3D document. Replacing the main file or the attachments of a 3D document also triggers the processing routine, so that the render views and transmission formats can be updated.

To create a 3D document, you can either attach the 3D file as main content of the document and then attach the textures files, or you can directly attach a standalone ZIP file as main content of the 3D document, that holds all the 3D resources for the document. This second way to proceed allows a directory structure inside the ZIP.

Available features on 3D document type:
- [Edit metadata]({{page version='' space='userdoc' page='content-edit'}})
- [Versioning of document]({{page version='' space='userdoc' page='version'}})
- [Tagging]({{page version='' space='nxdoc' page='tagging'}})
- [Add to collections]({{page version='' space='userdoc' page='collections-web-ui'}})
- [Relations]({{page version='' space='nxdoc' page='editing-content'}}#relations)
- [Publishing]({{page version='' space='userdoc' page='share'}})

Features not available on 3D document type:
- Default workflows

![]({{file name='full.png'}} ?w=600,border=true)

#### 3D Preview

The 3D preview allows a complete visualization of the 3D document in real-time: you can rotate, pan and zoom on the 3D model.

![]({{file name='preview.png'}} ?w=600,border=true)

Preview is done through a WebGL rendering.

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

### Schema

*   `transmissionFormats`: Fast loading format created from the original model. These can configured to represent lower levels of detail of the original model. Stored as glTF files.
*   `renderViews`: Renditions of the model (2D renderings).
*   `info`: Geometric properties and metadata of the 3D model.

### Facets

*   `ThreeD`: The facet to put on document types that should be considered as 3D. This facet comes with the following schemas:
    *   `file`: Main model file.
    *   `files`: Resources that are referenced by the main model file (i.e. textures, materials, etc.).
    *   `threed`: Metadata, transmission formats and renditions of the 3D model.

### Document Type

*   `ThreeD`: Default type in Nuxeo that handles 3D model files. It comes with the `ThreeD`, `Commentable`,  `Versionable` and `Publishable` facets.

#### Listeners

*   `ThreeDBatchGenerationListener`: Updates the transmission formats and render views of the 3D document if the main model file or attachment is changed.
*   `ThreeDBatchCleanerListener`: Checks if 3D information has changed and cleans the 3D document data when a the transmission formats and render views are scheduled to be updated.

#### File Manager Plugin

The plugin `ThreeDPlugin` is contributed to the [File Manager]({{page page='file-manager'}}) to create `ThreeD` documents when the imported file mime type matches one of the following:

*   `model/vnd.collada+xml` (Collada)
*   `application/x-3ds` (3D Studio)
*   `application/octet-stream` (FBX)
*   `text/x-c` (Stanford)
*   `text/wavefront-obj` (Wavefront)
*   `model/x3d+xml` (X3D Extensible 3D)
*   `application/sla` (STL)
*   `model/gltf+json` (glTF)
*   `application/zip` (Zip Archive)

#### Exposed Extension Points

The `ThreeDService` exposes three extension points:

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
* * *

<div class="row" data-equalizer data-equalize-on="medium">
<div class="column medium-6">
{{#> panel heading='Related Documentation'}}

- [DAM documentation]({{page version='' space='nxdoc' page='digital-asset-management-dam'}})

{{/panel}}
</div>

<div class="column medium-6">

&nbsp;

</div>
</div>
