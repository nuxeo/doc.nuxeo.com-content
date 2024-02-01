---
title: Nuxeo Enhanced Viewer
description: 'Nuxeo Enhanced Viewer addon allows users to preview and annotate any content stored in the Nuxeo repository: Office documents, PDF, images, videos with the ARender previewer, from Arondor.'
review:
    comment: ''
    date: '2019-10-08'
    status: ok
labels:
    - arender-connector
toc: true
tree_item_index: 1505
---

The more people involved on a document, the more difficult it becomes to collaborate and communicate because every participant has their own device (PC, mobile, tablet, etc.) and their own tools, which means different formats to preview.

{{! excerpt}}
The Nuxeo Enhanced Viewer addon allows users to preview and annotate any document stored in the Nuxeo repository: Office documents, PDF, images, videos, etc., on any device with the ARender previewer from [Arondor](https://www.arondor.com/en/).
{{! /excerpt}}

{{#> callout type='info' heading='University'}}
Watch the related course on Hyland University:</br>
[Nuxeo Enhanced Viewer - Product News](https://university.hyland.com/courses/e4044)
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/UNIVERSITY/university-nev.png
    name: Screenshot 2020-01-30 at 16.41.13.png
    addins#screenshot#up_to_date
--}}
![university-nev.png](/nx_assets/1f9785fd-83b6-4a98-9579-0871b3c15f04.png ?w=450,border=true)
{{/callout}}

ARender software comprises two parts:

- previewer
- rendition

ARender previewer is extended by Nuxeo to integrate the ARender Previewer with the Nuxeo REST API, it corresponds to [code/arender-nuxeo-connector](https://github.com/nuxeo/nuxeo-arender-connector) in ARender Connector.

Since Nuxeo Enhanced Viewer 10.1, the rendition part is now divided into 5 micro-services:
 - arender-document-service-broker
 - arender-document-file-storage
 - arender-document-converter
 - arender-document-renderer
 - arender-document-text-handler

Here's a chart illustrating the ARender micro-services:
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Arender Connector/arender-architecture
    name: ARender-Architecture-2.png
    addins#schema#up_to_date
--}}
![arender-architecture](/nx_assets/afc51692-c4eb-4e3d-a644-2a60795d9521.png ?border=true)


## Functional Overview

Once the Nuxeo Enhanced Viewer is properly [installed and configured](#installation-configuration) a new **Annotations** tab is available on each document with the picture or video facet:

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Annotations with ARender/annotation-tab.png
    name: annotation-tab.png
    addins#screenshot#up_to_date
--}}
![annotation-tab.png](/nx_assets/17173c2a-48b6-47d0-8b16-f47b0b76c220.png ?w=350,border=true)

### Annotations

You can access the different types of annotations available by default directly from the top bar:

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<td colspan="1">![annotations-draw-arrows.png](/nx_assets/7749f97c-548e-446c-8542-97fd35bfb6ff.png ?w=40)</td>
<td colspan="1"> Add an arrow.</br> Repeat mode available. </td>
</tr>
<tr>
<td colspan="1">![annotations-add-freehand.png](/nx_assets/275b858a-e1e6-4d6d-9d70-cc505bb120e9.png ?w=40)</td>
<td colspan="1"> Draw different shapes with the Freehand.</br>
Repeat mode available. </td>
</tr>
<tr>
<td colspan="1">
![annotations-sticky-note.png](/nx_assets/63ec2953-c04a-4eb3-87fe-b2bbfac763ef.png ?w=40)</td>
<td colspan="1"> Add a sticky note. </td>
</tr>
<tr>
<td colspan="1">
![annotations-free-text-box.png](/nx_assets/2a874c02-8282-459f-a511-80d524f05ad5.png ?w=40)</td>
<td colspan="1"> Add a text box. </td>
</tr>
<tr>
<td colspan="1">
![annotations-highlight-rectangle.png](/nx_assets/eef983e3-10bd-4d9f-be66-982990bf7aa8.png ?w=40)</td>
<td colspan="1"> Add a highlighted rectangle.</br> Once your rectangle is created you can modify the color and opacity of the highlight.</br> Repeat mode available.</td>
</tr>
<tr>
<td colspan="1">
![annotations-draw-circle.png](/nx_assets/a12f0162-1971-4a00-8f60-cf71df4c7199.png ?w=40)</td>
<td colspan="1"> Add a circle.</br> Repeat mode available.</td>
</tr>
<tr>
<td colspan="1">
![annotations-highlight-text.png](/nx_assets/bad65cf1-4779-459c-9bd6-74283ef88cbd.png ?w=40)</td>
<td colspan="1"> Highlight text.</br> Once your text is selected you can modify the color and opacity of the highlight.</td>
</tr>
<tr>
<td colspan="1">
![annotations-strikethrough-text.png](/nx_assets/463ebd3a-e506-4f3b-b52a-7f122aa48456.png ?w=40)</td>
<td colspan="1"> Add strikethrough text. </td>
</tr>
<tr>
<td colspan="1">
![annotations-redact.png](/nx_assets/421137dc-2c9f-4c01-88b3-690d12a9fff4.png ?w=40)</td>
<td colspan="1"> Annotate over text, hiding its contents.</br> This annotation is only available on text documents.</td>
</tr>
</tbody>
</table>
</div>

**Repeat mode**: Once the annotation is selected, 2 blue arrows are displayed {{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Arender Connector/annotations-repeat-mode.png
    name: annotations-repeat-mode.png
    addins#icon#up_to_date
--}}
![annotations-repeat-mode.png](/nx_assets/e1db7421-d37e-4e97-be25-cdfdc3483b66.png ?w=20) meaning that you can add several annotations in a row. To disable the repeat mode, click on the annotation icon again.

Other buttons are available on the top bar to optimize the visualization of the document: zoom, rotation, full screen, pagination, height and width adjustment, etc.

**To add an annotation:**

1. On the top bar, click on an annotation type, like the sticky note.</br>
    An empty box is displayed on your document.
    {{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Annotations with ARender/annotation-sticky-note-empty.png
    name: annotation-sticky-note-empty.png
    addins#screenshot#up_to_date
    --}}
    ![annotation-sticky-note-empty.png](/nx_assets/f5c28202-b89c-424a-af48-503602b2a8a4.png ?w=150,border=true)
1. Write your annotation and press **Enter**</br>
    Your annotation is directly displayed, the autosave is enabled by default.
    {{!--     ### nx_asset ###
        path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Arender Connector/annotation-sticky-note-displayed
        name: annotation-sticky-note-displayed.png
        addins#screenshot#up_to_date
    --}}
    ![annotation-sticky-note-displayed](/nx_assets/9800ba81-ea6f-469d-8861-48ec1a216e2b.png ?w=450,border=true)

**To access annotations:**

Three views are available on the left panel:
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Arender Connector/annotation-views.png
    name: annotation-views.png
    addins#screenshot#up_to_date
--}}
![annotation-views.png](/nx_assets/ecddf886-5f7d-4a24-8fa1-66a1e1819d58.png ?w=150,border=true)
- {{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Arender Connector/annotation-document-pages-thumbs.png
    name: annotation-document-pages-thumbs.png
    addins#screenshot#up_to_date
--}}
![annotation-document-pages-thumbs.png](/nx_assets/b397f86b-bae4-4d55-bb49-2b7ea8893a3b.png ?w=20): Document page thumbnails, opened by default
- {{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Arender Connector/annotation-browser-navigation.png.1561393988095
    name: annotation-browser-navigation.png
    addins#icon#up_to_date
--}}
![annotation-browser-navigation.png](/nx_assets/e819376d-cc8d-490b-b10b-b12e58b8ca00.png ?w=20): Annotations Browser
- {{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Arender Connector/annotation-browser-navigation.png
    name: annotation-browser-navigation.png
    addins#icon#up_to_date
--}}
![annotation-browser-navigation.png](/nx_assets/d1f71ecc-0afb-4bbf-92d7-e721518e66c3.png ?w=20): Advanced Search

From the annotations browser, you can see the list of all the annotations made on the document you are viewing, grouped by document pages.</br>
From this view, you can **delete annotations** by clicking on the delete icon ![delete-icon-arender.png](/nx_assets/927311de-2cdc-497c-9efc-5beb09750968.png ?w=15) next to it.

Still from the annotations browser view, 2 icons are available on each annotation:
- {{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Arender Connector/annotations-target-annotation.png
    name: annotations-target-annotation.png
    addins#icon#up_to_date
--}}
![annotations-target-annotation.png](/nx_assets/56a7f5df-93f1-4423-b12f-4e5a0cc06178.png ?w=20): This action will localize the annotation, for example, if you have a PDF of several pages, it will directly lead you to the annotation but won't hide the other annotations.
- {{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Arender Connector/annotations-show-one-annotation.png
    name: annotations-show-one-annotation.png
    addins#icon#up_to_date
--}}
![annotations-show-one-annotation.png](/nx_assets/4271cd6f-9b4f-4082-94fb-046c879348c6.png ?w=20): This action will only display the annotation concerned and hide the others.

Different filters are available, you can search for and **filter any annotation by metadata** (status, document, annotation type, etc.), and also **filter annotation by the current user**, that means that only the annotations that the current user created will be displayed on the left panel.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Arender Connector/annotation-search.png
    name: annotation-search.png
    addins#popup#up_to_date
--}}
![annotation-search.png](/nx_assets/24fd947d-4c73-47fa-b13b-e714c8466f33.png ?w=350,border=true)

You can also **manage annotations** by:
- Adding a comment
- Replying to a comment
- Deleting a comment

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Arender Connector/annotation-comment-replied.png
    name: annotation-comment-replied.png
    addins#screenshot#up_to_date
--}}
![annotation-comment-replied.png](/nx_assets/13a08f40-f5c6-4bba-afbf-2c377c0839ab.png ?w=350,border=true)

Once added, these comments are available from the view tab of your document.

### Arrow

1. To **create an arrow**, click on the **Add arrow** button {{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Arender Connector/annotations-draw-arrows.png
    name: annotations-draw-arrows.png
    addins#icon#up_to_date
--}}
![annotations-draw-arrows.png](/nx_assets/7749f97c-548e-446c-8542-97fd35bfb6ff.png ?w=20) then click and drag to draw an arrow.
1. Once your arrow is drawn, you can customize its direction, color, opacity, style, etc.

    {{!--     ### nx_asset ###
      path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Arender Connector/annotations-arrow-options.png
      name: annotations-arrow-options.png
      addins#icon#up_to_date
    --}}
    ![annotations-arrow-options.png](/nx_assets/0facae06-cc18-44ad-b7d6-e1686e87c112.png ?w=650, border=true)

Arrows can also be used to take measurements on a document. To do so, once an arrow is drawn, click on **Show measurement** on the customization top bar and the measurement will be displayed in your preferred unit (inches, centimeters or pixels).

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Arender Connector/annotations-jacket-measure.png
    name: annotations-jacket-CD-measure.png
    addins#screenshot#up_to_date
--}}
![annotations-jacket-measure.png](/nx_assets/2a574eee-9949-4050-a8b6-651257e41aa8.png ?w=650,border=true)

### Watermark

To watermark a document, two solutions are available: Add a watermark to each page before printing, as explained in [the section below](#print) or use a stamp annotation.

To **add a stamp annotation**, click on the stamp button {{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Arender Connector/annotations-stamps.png
    name: annotations-stamps.png
    addins#icon#up_to_date
--}}
![annotations-stamps.png](/nx_assets/409a9ec4-2d9c-401b-bb3a-3be8036ad6ae.png ?w=20).</br>
    A popup window is displayed:
    {{!--     ### nx_asset ###
        path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Arender Connector/annotations-popup-stamps.png
        name: annotations-popup-stamps.png
        addins#screenshot#up_to_date
    --}}
    ![annotations-popup-stamps.png](/nx_assets/d62c56eb-5f8b-4980-93d9-45c5c2364a90.png ?w=450,border=true)

Different options are available: "Urgent", approved on the current date, "Insert signature here:", "draft", or a signature.

### Download

Hover over the download icon {{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Arender Connector/annotations-download-button.png
    name: annotations-download-button.png
    addins#icon#up_to_date
--}}
![annotations-download-button.png](/nx_assets/f08c3d19-0da2-43b8-a023-622aa785f8db.png ?w=20) to display the file menu with several available actions:

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Arender Connector/annotations-submenu-download.png
    name: annotations-submenu-download.png
    addins#icon#up_to_date
--}}
![annotations-submenu-download.png](/nx_assets/51b7e81b-e7d6-4ea0-9322-d31c04f05faa.png ?w=150,border=true)
- Download current file
- Download current file as PDF
- Download current file with annotations
- Download CSV annotations
- Open a local file
- Open an URL

### Print

1. Click on the Print button {{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Arender Connector/annotation-print-button.png
    name: annotation-print-button.png
    addins#icon#up_to_date
--}}
![annotation-print-button.png](/nx_assets/3b7d1e22-e007-4b92-bac0-0be6ca81bc9b.png ?w=20) at the top right of the screen.

1. A popup window appears with several print options:
    - Print the current document
    - Print all documents
    {{!--     ### nx_asset ###
      path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Arender Connector/annotation-popup-print.png
      name: annotation-popup-print.png
      addons#icon#up_to_date
    --}}
    ![annotation-popup-print.png](/nx_assets/e8393e2c-ba21-4c98-a8ce-c0ec40f7a5c2.png ?w=350,border=true)

You can select “Include annotations” to print all annotations on a document, or select "Include watermark" to display the selected watermark on all pages of the document.

Once your choice is made, click on “Ok” button, and the page(s) will be printed.

### Document Comparison

With the Nuxeo Enhanced Viewer, you can compare the text of two different versions of a file. By default, the addon compares the binary stored in the `file:content` property corresponding to the main file. You can access this feature from the [Compare Versions Screen]({{page version='' space='userdoc' page='compare'}}) by clicking on the **eye icon**.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Arender Connector/compare-arender
    name: compare_arender.png
    addins#screenshot#up_to_date
--}}
![compare-arender](/nx_assets/fb24e3d8-b22d-45ca-820e-f8b1bb8b17a4.png ?w=650,border=true)

A new window is opened with the two documents side-by-side, highlighting text which has been deleted, modified or added.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Arender Connector/compare_arender_2
    name: compare_arender_2.png
    addins#screenshot#up_to_date
--}}
![compare_arender_2](/nx_assets/7be7595f-3e11-468a-a004-1700e45e3ab3.png ?w=650,border=true)

You can see the annotations linked to each version on the same screen, and even annotate one file from this view.

## Installation / Configuration

We assume you have a working Nuxeo on which you have installed the [Nuxeo Enhanced Viewer Connector](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-arender) package.

{{#> callout type='warning' heading='Private packages'}}
You should contact your Nuxeo Administrator or Nuxeo sales representative to get access to these packages.
{{/callout}}

### Nuxeo Configuration

The package requires you to define several properties in your `nuxeo.conf`.

#### Before 10.3

The Nuxeo Enhanced Viewer relies on a [JWT](https://jwt.io/) token to request an OAuth 2.0 token for authentication (See [OAuth 2.0]({{page page='using-oauth2'}}) documentation page for more information). Thus, you need to define a JWT secret in your `nuxeo.conf`, which will be used to generate a JWT token.

You also need to configure an OAuth 2.0 shared secret, between the two applications, with the property `nuxeo.arender.secret` in your `nuxeo.conf`.

In the end, you should have the following properties in your `nuxeo.conf`:

```properties
arender.server.previewer.host=https://arender-previewer-url
nuxeo.jwt.secret=JWT_SECRET
nuxeo.arender.secret=OAUTH2_SECRET
```

#### Since 10.3

The Nuxeo Enhanced Viewer relies on a complete OAuth 2.0 challenge for authentication (See [OAuth 2.0]({{page page='using-oauth2'}}) documentation page for more information). Thus, you need to define an OAuth 2.0 client, with a shared secret and a redirect URI, under the `nuxeo.arender.oauth2.client.` prefix.

In the end, you should have the following properties in your `nuxeo.conf`:

```properties
arender.server.previewer.host=https://arender-previewer-url
nuxeo.arender.oauth2.client.create=true
nuxeo.arender.oauth2.client.id=arender
nuxeo.arender.oauth2.client.secret=OAUTH2_SECRET
nuxeo.arender.oauth2.client.redirectURI=/login/oauth2/code/nuxeo
```

{{#> callout type='warning' heading='10.3 deployment'}}
In order to make the integration work on modern browsers, Nuxeo and NEV 10.3.x should be deployed under sibling domains, for instance `nuxeo.domain.org` and `nev.domain.org`.
{{/callout}}

### ARender Configuration

Nuxeo Enhanced Viewer involves installing the ARender services. You can install the ARender services using Kubernetes and Helm 3 by following the [ARender Documentation](https://docs.arender.io/install/kubernetes/).

{{#> callout type='warning' heading='Private services'}}
You should contact your Nuxeo Administrator or your Nuxeo sales representative to get access to these services.
{{/callout}}

#### Common

After getting the ARender Helm Chart, you need to customize some parts in order to deploy the Nuxeo connector and add configuration. You can find below an example of _values.yaml_:

```yaml
web-ui:
  image:
    repository: docker-arender.packages.nuxeo.com/nuxeo/arender-previewer
    tag: [NEV_VERSION]
  environment:
    # required values
    ARENDERSRV_NUXEO_SERVER_URL: http://nuxeo-host:8080
    ARENDERSRV_NUXEO_SERVER_ARENDER_SECRET: OAUTH2_SECRET # Same than the one in nuxeo.conf
    # optional values with their defaults
    ARENDERSRV_NUXEO_CLIENT_TIMEOUT: 30
    ARENDERSRV_NUXEO_SERVER_CONTEXT_PATH: /nuxeo
rendition:
  broker:
    image:
      repository: docker-arender.packages.nuxeo.com/arender-document-service-broker
      tag: [ARENDER_VERSION]
  converter:
    image:
      repository: docker-arender.packages.nuxeo.com/arender-document-converter
      tag: [ARENDER_VERSION]
    environment:
      TKC_TOOLS_IMAGEMAGICK_OPTIONS: "-quality,100,-density,72x72,-units,PixelsPerInch,-auto-orient,+repage"
      TKC_IMAGE_CONVERSION_TIMEOUT: "120"
  dfs:
    image:
      repository: docker-arender.packages.nuxeo.com/arender-document-file-storage
      tag: [ARENDER_VERSION]
  renderer:
    image:
      repository: docker-arender.packages.nuxeo.com/arender-document-renderer
      tag: [ARENDER_VERSION]
  handler:
    image:
      repository: docker-arender.packages.nuxeo.com/arender-document-text-handler
      tag: [ARENDER_VERSION]
```

{{#> callout type='warning' heading='Renaming in 10.3'}}
**Before 10.3:**</br>
`ARENDERSRV_NUXEO_SERVER_URL` was named `ARENDERSRV_NUXEO_URL`</br>
</br>
`ARENDERSRV_NUXEO_SERVER_ARENDER_SECRET` was named `ARENDERSRV_NUXEO_ARENDER_SECRET`
{{/callout}}

You can find a release matrix in the repository's [wiki](https://github.com/nuxeo/nuxeo-arender-connector/wiki/Release-Matrix).

#### Ingress

The Helm Chart doesn't deploy an _Ingress_ by default, you can enable it and customize it regarding your setup with the following values:

```yaml
web-ui:
  ingress:
    enabled: true
    annotations: {}
      # kubernetes.io/ingress.class: nginx
      # kubernetes.io/tls-acme: "true"
    hosts:
      - host: chart-example.local
        paths: []
   tls: []
    #  - secretName: chart-example-tls
    #    hosts:
    #      - chart-example.local
```

#### High-Availability

You can configure the ARender stack to make it highly available, for that, a couple of settings needs to be added and a database backend is required in order to store OAuth 2.0 tokens and HTTP sessions.

Currently, the only available backend is MongoDB, the HTTP sessions and OAuth 2.0 access and refresh tokens are stored in the `sessions` and `oauth2Authorized` collections.

See below the possible values to configure HA:

```yaml
web-ui:
  replicaCount: 2
  autoscale:
    enabled: true
    cpuLimit: 80
    maxReplicas: 4
  environment:
    # required values
    ARENDERSRV_NUXEO_OAUTH2_STORAGE_BACKEND: mongodb
    ARENDERSRV_NUXEO_OAUTH2_STORAGE_MONGODB_SERVER: mongodb://mongodb-host:27017
    # optional values
    ARENDERSRV_NUXEO_OAUTH2_STORAGE_MONGODB_DBNAME: arender
    ARENDERSRV_NUXEO_OAUTH2_STORAGE_MONGODB_SSL: false
rendition:
  broker:
    replicaCount: 2
    autoscale:
      enabled: true
      cpuLimit: 80
      maxReplicas: 4
  converter:
    replicaCount: 2
    autoscale:
      enabled: true
      cpuLimit: 80
      maxReplicas: 4
  renderer:
    replicaCount: 2
    autoscale:
      enabled: true
      cpuLimit: 80
      maxReplicas: 4
  handler:
    replicaCount: 2
    autoscale:
      enabled: true
      cpuLimit: 80
      maxReplicas: 4
```

The MongoDB server setting supports the [connection string](https://docs.mongodb.com/manual/reference/connection-string/).

## Customization

### ARender Previewer Customization

You can customize the ARender Previewer interface to fit specific UI and UX needs.

Examples of possible configurations:

- Add or remove buttons from the ARender interface,
- Modify ARender behaviors on specific user actions (like entering a comment when the user clicks on "Enter"),
- Reference a new theme (by creating your custom CSS file),
- etc.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Annotations with ARender/arender-customized.png
    name: arender-customized.png
    addins#screenshot#up_to_date
--}}
![arender-customized.png](/nx_assets/a26f7eaf-e268-443f-be33-2c88542e2a13.png ?w=600,border=true)

The UI customization is done through two files to be put in the `/docker-entrypoint-init.d` directory inside the Previewer container.

- `arender.css` to customize the style
- `arender.properties` to customize the behavior

Please follow the [ARender configuration guide](https://arender.io/documentation/configuration/) for more information about available properties and style.

{{#> callout type='info' heading='Properties as environment variables'}}
UI properties can also be customized through environment variables. You need to capitalize all letters in the key, and to replace `.` by `_`, and prefix it with `ARENDER_`.</br>
For instance, `topPanel.widgets.beanNames` will become `ARENDER_TOPPANEL_WIDGETS_BEANNAMES`.
{{/callout}}

## Supported File Formats

The annotations module supports a large number of file formats.

- **PDF** - all versions, XFA not supported
- **Images**: JPEG, PNG, TIFF, GIF, BMP, JNG, PBM, PSD, EPS, PS, DCM (Format DICOM) and all formats supported by ImageMagick
- **Microsoft Office (97-2013)**: Word (.doc, .docx) , PowerPoint (.ppt, .pptx), Excel (.xls, .xlsx), WordML (.xml), Visio (.vsd)
- **Composite files**: ZIP, EML, MSG
- **Others**: TXT, OpenDocument (LibreOffice or OpenOffice)

## Roadmap

The Nuxeo Enhanced Viewer is constantly improved. You can monitor its roadmap below. </br>
You can also submit your feedback on the [Nuxeo Server feedback portal](https://portal.prodpad.com/7cdff94a-f166-11e7-93bc-06df22ffaf6f).

<iframe src='https://roadmap.prodpad.com/fa6f47de-d314-11ea-8254-0abbec7104a5' height='900' width='100%' frameborder='0'></iframe>

## Going Further

The connector can be customized in many different ways, such as adding new watermark stamps, displaying different actions/tools etc.
