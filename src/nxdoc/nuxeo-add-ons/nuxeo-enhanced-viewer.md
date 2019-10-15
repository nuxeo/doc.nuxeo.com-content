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

ARender software comprises two parts:
- previewer
- rendition

ARender rendition server needs to be installed on a dedicated host.

ARender previewer is extended by Nuxeo to integrate the ARender previewer with the Nuxeo REST API, it corresponds to [nuxeo-arender-connector-hmi](https://github.com/nuxeo/nuxeo-arender-connector/tree/master/nuxeo-arender-connector-hmi) in ARender Connector. It is built as a war file to deploy.

Here's a chart illustrating the actions during the first connection to ARender:
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Annotations with ARender/arender-flow.png
    name: arender-flow.png
    addins#diagram#up_to_date
--}}
![arender-flow.png](nx_asset://3dfb1d20-3bb0-4124-819f-d6ad274630cb ?w=650,border=true)

## Functional Overview

Once the Nuxeo Enhanced Viewer is properly [installed and configured](#installation) a new **Annotations** tab is available on each document with the picture or video facet:

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Annotations with ARender/annotation-tab.png
    name: annotation-tab.png
    addins#screenshot#up_to_date
--}}
![annotation-tab.png](nx_asset://17173c2a-48b6-47d0-8b16-f47b0b76c220 ?w=350,border=true)

### Annotations

You can access the different types of annotations available by default directly from the top bar:

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<td colspan="1">![annotations-draw-arrows.png](nx_asset://7749f97c-548e-446c-8542-97fd35bfb6ff ?w=40)</td>
<td colspan="1"> Add an arrow.</br> Repeat mode available. </td>
</tr>
<tr>
<td colspan="1">![annotations-add-freehand.png](nx_asset://275b858a-e1e6-4d6d-9d70-cc505bb120e9 ?w=40)</td>
<td colspan="1"> Draw different shapes with the Freehand.</br>
Repeat mode available. </td>
</tr>
<tr>
<td colspan="1">
![annotations-sticky-note.png](nx_asset://63ec2953-c04a-4eb3-87fe-b2bbfac763ef ?w=40)</td>
<td colspan="1"> Add a sticky note. </td>
</tr>
<tr>
<td colspan="1">
![annotations-free-text-box.png](nx_asset://2a874c02-8282-459f-a511-80d524f05ad5 ?w=40)</td>
<td colspan="1"> Add a text box. </td>
</tr>
<tr>
<td colspan="1">
![annotations-highlight-rectangle.png](nx_asset://eef983e3-10bd-4d9f-be66-982990bf7aa8 ?w=40)</td>
<td colspan="1"> Add a highlighted rectangle.</br> Once your rectangle is created you can modify the color and opacity of the highlight.</br> Repeat mode available.</td>
</tr>
<tr>
<td colspan="1">
![annotations-draw-circle.png](nx_asset://a12f0162-1971-4a00-8f60-cf71df4c7199 ?w=40)</td>
<td colspan="1"> Add a circle.</br> Repeat mode available.</td>
</tr>
<tr>
<td colspan="1">
![annotations-highlight-text.png](nx_asset://bad65cf1-4779-459c-9bd6-74283ef88cbd ?w=40)</td>
<td colspan="1"> Highlight text.</br> Once your text is selected you can modify the color and opacity of the highlight.</td>
</tr>
<tr>
<td colspan="1">
![annotations-strikethrough-text.png](nx_asset://463ebd3a-e506-4f3b-b52a-7f122aa48456 ?w=40)</td>
<td colspan="1"> Add strikethrough text. </td>
</tr>
<tr>
<td colspan="1">
![annotations-redact.png](nx_asset://421137dc-2c9f-4c01-88b3-690d12a9fff4 ?w=40)</td>
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
![annotations-repeat-mode.png](nx_asset://e1db7421-d37e-4e97-be25-cdfdc3483b66 ?w=20) meaning that you can add several annotations in a row. To disable the repeat mode, click on the annotation icon again.

Other buttons are available on the top bar to optimize the visualization of the document: zoom, rotation, full screen, pagination, height and width adjustment, etc.

**To add an annotation:**

1. On the top bar, click on an annotation type, like the sticky note.</br>
    An empty box is displayed on your document.
    {{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Annotations with ARender/annotation-sticky-note-empty.png
    name: annotation-sticky-note-empty.png
    addins#screenshot#up_to_date
    --}}
    ![annotation-sticky-note-empty.png](nx_asset://f5c28202-b89c-424a-af48-503602b2a8a4 ?w=150,border=true)
1. Write your annotation and press **Enter**</br>
    Your annotation is directly displayed, the autosave is enabled by default.
    {{!--     ### nx_asset ###
        path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Arender Connector/annotation-sticky-note-displayed
        name: annotation-sticky-note-displayed.png
        addins#screenshot#up_to_date
    --}}
    ![annotation-sticky-note-displayed](nx_asset://9800ba81-ea6f-469d-8861-48ec1a216e2b ?w=450,border=true)

**To access annotations:**

Three views are available on the left panel:
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Arender Connector/annotation-views.png
    name: annotation-views.png
    addins#screenshot#up_to_date
--}}
![annotation-views.png](nx_asset://ecddf886-5f7d-4a24-8fa1-66a1e1819d58 ?w=150,border=true)
- {{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Arender Connector/annotation-document-pages-thumbs.png
    name: annotation-document-pages-thumbs.png
    addins#screenshot#up_to_date
--}}
![annotation-document-pages-thumbs.png](nx_asset://b397f86b-bae4-4d55-bb49-2b7ea8893a3b ?w=20): Document page thumbnails, opened by default
- {{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Arender Connector/annotation-browser-navigation.png.1561393988095
    name: annotation-browser-navigation.png
    addins#icon#up_to_date
--}}
![annotation-browser-navigation.png](nx_asset://e819376d-cc8d-490b-b10b-b12e58b8ca00 ?w=20): Annotations Browser
- {{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Arender Connector/annotation-browser-navigation.png
    name: annotation-browser-navigation.png
    addins#icon#up_to_date
--}}
![annotation-browser-navigation.png](nx_asset://d1f71ecc-0afb-4bbf-92d7-e721518e66c3 ?w=20): Advanced Search

From the annotations browser, you can see the list of all the annotations made on the document you are viewing, grouped by document pages.</br>
From this view, you can **delete annotations** by clicking on the delete icon ![delete-icon-arender.png](nx_asset://927311de-2cdc-497c-9efc-5beb09750968 ?w=15) next to it.

Still from the annotations browser view, 2 icons are available on each annotation:
- {{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Arender Connector/annotations-target-annotation.png
    name: annotations-target-annotation.png
    addins#icon#up_to_date
--}}
![annotations-target-annotation.png](nx_asset://56a7f5df-93f1-4423-b12f-4e5a0cc06178 ?w=20): This action will localize the annotation, for example, if you have a PDF of several pages, it will directly lead you to the annotation but won't hide the other annotations.
- {{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Arender Connector/annotations-show-one-annotation.png
    name: annotations-show-one-annotation.png
    addins#icon#up_to_date
--}}
![annotations-show-one-annotation.png](nx_asset://4271cd6f-9b4f-4082-94fb-046c879348c6 ?w=20): This action will only display the annotation concerned and hide the others.

Different filters are available, you can search for and **filter any annotation by metadata** (status, document, annotation type, etc.), and also **filter annotation by the current user**, that means that only the annotations that the current user created will be displayed on the left panel.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Arender Connector/annotation-search.png
    name: annotation-search.png
    addins#popup#up_to_date
--}}
![annotation-search.png](nx_asset://24fd947d-4c73-47fa-b13b-e714c8466f33 ?w=350,border=true)

You can also **manage annotations** by:
- Adding a comment
- Replying to a comment
- Deleting a comment

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Arender Connector/annotation-comment-replied.png
    name: annotation-comment-replied.png
    addins#screenshot#up_to_date
--}}
![annotation-comment-replied.png](nx_asset://13a08f40-f5c6-4bba-afbf-2c377c0839ab ?w=350,border=true)

Once added, these comments are available from the view tab of your document.

### Arrow

1. To **create an arrow**, click on the **Add arrow** button {{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Arender Connector/annotations-draw-arrows.png
    name: annotations-draw-arrows.png
    addins#icon#up_to_date
--}}
![annotations-draw-arrows.png](nx_asset://7749f97c-548e-446c-8542-97fd35bfb6ff ?w=20) then click and drag to draw an arrow.
1. Once your arrow is drawn, you can customize its direction, color, opacity, style, etc.

    {{!--     ### nx_asset ###
      path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Arender Connector/annotations-arrow-options.png
      name: annotations-arrow-options.png
      addins#icon#up_to_date
    --}}
    ![annotations-arrow-options.png](nx_asset://0facae06-cc18-44ad-b7d6-e1686e87c112 ?w=650, border=true)

Arrows can also be used to take measurements on a document. To do so, once an arrow is drawn, click on **Show measurement** on the customization top bar and the measurement will be displayed in your preferred unit (inches, centimeters or pixels).

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Arender Connector/annotations-jacket-measure.png
    name: annotations-jacket-CD-measure.png
    addins#screenshot#up_to_date
--}}
![annotations-jacket-measure.png](nx_asset://2a574eee-9949-4050-a8b6-651257e41aa8 ?w=650,border=true)

### Watermark

To watermark a document, two solutions are available: Add a watermark to each page before printing, as explained in [the section below](#print) or use a stamp annotation.

To **add a stamp annotation**, click on the stamp button {{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Arender Connector/annotations-stamps.png
    name: annotations-stamps.png
    addins#icon#up_to_date
--}}
![annotations-stamps.png](nx_asset://409a9ec4-2d9c-401b-bb3a-3be8036ad6ae ?w=20).</br>
    A popup window is displayed:
    {{!--     ### nx_asset ###
        path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Arender Connector/annotations-popup-stamps.png
        name: annotations-popup-stamps.png
        addins#screenshot#up_to_date
    --}}
    ![annotations-popup-stamps.png](nx_asset://d62c56eb-5f8b-4980-93d9-45c5c2364a90 ?w=450,border=true)

Different options are available: "Urgent", approved on the current date, "Insert signature here:", "draft", or a signature.

### Download

Hover over the download icon {{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Arender Connector/annotations-download-button.png
    name: annotations-download-button.png
    addins#icon#up_to_date
--}}
![annotations-download-button.png](nx_asset://f08c3d19-0da2-43b8-a023-622aa785f8db ?w=20) to display the file menu with several available actions:

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Arender Connector/annotations-submenu-download.png
    name: annotations-submenu-download.png
    addins#icon#up_to_date
--}}
![annotations-submenu-download.png](nx_asset://51b7e81b-e7d6-4ea0-9322-d31c04f05faa ?w=150,border=true)
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
![annotation-print-button.png](nx_asset://3b7d1e22-e007-4b92-bac0-0be6ca81bc9b ?w=20) at the top right of the screen.

1. A popup window appears with several print options:
    - Print the current document
    - Print all documents
    {{!--     ### nx_asset ###
      path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Arender Connector/annotation-popup-print.png
      name: annotation-popup-print.png
      addons#icon#up_to_date
    --}}
    ![annotation-popup-print.png](nx_asset://e8393e2c-ba21-4c98-a8ce-c0ec40f7a5c2 ?w=350,border=true)

You can select “Include annotations” to print all annotations on a document, or select "Include watermark" to display the selected watermark on all pages of the document.

Once your choice is made, click on “Ok” button, and the page(s) will be printed.

### Document Comparison

{{#> callout type='note' heading='Limitations'}}
This feature only allows you to compare the **text** of two files.
{{/callout}}

With the Nuxeo Enhanced Viewer, you can compare the text of two different versions of a file. By default, the addon compares the binary stored in the `file:content` property corresponding to the main file. You can access this feature from the [Compare Versions Screen]({{page version='' space='userdoc' page='compare'}}) by clicking on the **eye icon**.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Arender Connector/compare-arender
    name: compare_arender.png
    addins#screenshot#up_to_date
--}}
![compare-arender](nx_asset://fb24e3d8-b22d-45ca-820e-f8b1bb8b17a4 ?w=650,border=true)

A new window is opened with the two documents side-by-side, highlighting text which has been deleted, modified or added.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Arender Connector/compare_arender_2
    name: compare_arender_2.png
    addins#screenshot#up_to_date
--}}
![compare_arender_2](nx_asset://7be7595f-3e11-468a-a004-1700e45e3ab3 ?w=650,border=true)

You can see the annotations linked to each version on the same screen, and even annotate one file from this view.

## Installation

There are several ways to install ARender software.

For easy deployment, Nuxeo provides two Docker images, one for each part of the ARender software: `arender-previewer` and `arender-rendition`.

{{#> callout type='warning' heading='Private addon'}}
You should contact your Nuxeo Administrator or your Nuxeo sales representative to get access to these images.
{{/callout}}

{{#> callout type='info' heading='Docker Images Version'}}
Docker images have the same versions as marketplace packages.
You should always use the same version for Docker images and marketplace packages.
{{/callout}}

You can also install both parts directly on dedicated hosts by following [ARender Documentation](https://arender.io/doc/current4/documentation/setup/index-setup.html).

All communication is done over HTTP; we recommend using HTTPS for production. Below are the ports for each part:
- previewer is reachable on port `8080` when exposed directly by Tomcat; we recommend to setup an Apache or Nginx in front of it.
- rendition is reachable on port `8761`.

Below are the requirements for firewall rules / Docker network setup:
- Nuxeo needs to reach ARender previewer,
- ARender previewer needs to reach ARender rendition,
- ARender previewer needs to reach Nuxeo.

### Embedded Installation - Development

For development purposes, run the rendition Docker image and bind its port to localhost:
```
docker run -p 8761:8761 -it ARENDER_DOCKER_IMAGE_ID
```

Then install the [nuxeo-arender-connector](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-arender-connector) marketplace package.

It installs the ARender integration inside Nuxeo and the ARender previewer inside Nuxeo's Tomcat.

### Docker Installation - Production

For production, we recommend that each part of ARender software is deployed as a Docker container.

You can deploy several ARender renditions. Their URL needs to be given to ARender previewer. ARender previewer is responsible for renditions loading. ARender renditions don't need to communicate with each other.

Rendition URLs can be passed to ARender previewer with the `renditionHostEnv` environment variable.

{{#> callout type='info' heading='ARender previewer behavior'}}
ARender previewer owns in its cache a session corresponding to the t-uple user, document and blob.</br>
You'll need to ask for a new session if the previewer crashes (action 1. on the chart above).
{{/callout}}

{{#> callout type='warning' heading='ARender previewer clustering'}}
You can't have a cluster of ARender previewers because previewers don't share sessions.
{{/callout}}

If you need to change these settings while ARender previewer is running, there is a REST API on ARender previewer.

To get current settings:
```
GET /arendergwt/weather?format=json
```
To update settings:
```
POST /arendergwt/weather?format=json
["https://rendition1:8761", "https://rendition2:8761"]
```

## Configuration

### Nuxeo Configuration

The Nuxeo Enhanced Viewer relies on a [JWT](https://jwt.io/) to request an OAuth 2 token for authentication (See [OAuth 2]({{page page='using-oauth2'}}) documentation page for more information).
You need to define a secret, `nuxeo.jwt.secret` in your `nuxeo.conf`, to enable it.

Authentication from ARender to Nuxeo relies on a shared secret between the two applications. This secret is defined with the property `nuxeo.arender.secret` in your `nuxeo.conf`.

{{#> callout type='info' heading='Shared secret environment variable'}}
If using the Docker image for the ARender previewer, you can also define this shared secret through an environment variable `nuxeoArenderSecretEnv`.
{{/callout}}

If your ARender rendition server doesn't run on same host as Nuxeo's Tomcat, you can change the ARender rendition URL by setting `arender.server.rendition.hosts` in your `nuxeo.conf` (default value is `http://localhost:8761`).

You can change the ARender previewer URL used by Nuxeo to open ARender sessions by setting `arender.server.previewer.host` in your `nuxeo.conf` (default value if `http://localhost:8080`).

### ARender Previewer Configuration

- For an on-host installation, you can follow the [ARender Documentation](https://arender.io/doc/current4/documentation/setup/presentation/configuration.html).

- For an embedded installation, you can modify the `arender-hmi.properties` files under `NUXEO_HOME/nxserver/config/ARenderConfiguration` folder.

- For a Docker installation, you can extend our image and copy your properties file to `/docker-entrypoint-init.d/arender.properties`:

  ```
  FROM dockerin-arender.nuxeo.com:443/arender-previewer:MP_VERSION

  COPY arender.properties /docker-entrypoint-init.d/arender.properties
  ```

You can also modify the `arender-hmi.properties` which is deployed inside the `/ARenderConfiguration` in the previewer Docker container.

These configuration files let you customize the ARender interface to fit specific UI and UX needs. Please follow the [ARender configuration guide](https://arender.io/doc/current4/documentation/hmi/index-hmi.html) for more information.

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
![arender-customized.png](nx_asset://a26f7eaf-e268-443f-be33-2c88542e2a13 ?w=600,border=true)

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

<iframe src='https://ext.prodpad.com/ext/roadmap/2be5150d3c6c4f6e5adfcb3c4cd19c6121542326' height='900' width='100%' frameborder='0'></iframe>

## Going Further

The connector can be customized in many different ways, such as adding new watermark stamps, displaying different actions/tools etc.
