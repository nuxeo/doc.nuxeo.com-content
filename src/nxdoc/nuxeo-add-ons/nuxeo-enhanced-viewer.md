---
title: Nuxeo Enhanced Viewer
description: 'Nuxeo Enhanced Viewer addon allows users to preview and annotate content stored in the Nuxeo repository: documents, PDF, images, and videos with the ARender previewer.'
review:
    comment: ''
    date: '2021-12-23'
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

## Functional Overview

Once the Nuxeo Enhanced Viewer is properly [installed and configured]({{page page='nuxeo-enhanced-viewer-installation'}}) a new **Annotations** tab is available on each document:

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
<td colspan="1"> Add an arrow.</br> Repeat mode enabled by default. </td>
</tr>
<tr>
<td colspan="1">![annotations-add-freehand.png](/nx_assets/275b858a-e1e6-4d6d-9d70-cc505bb120e9.png ?w=40)</td>
<td colspan="1"> Draw different shapes with the Freehand.</br>
Repeat mode enabled by default. </td>
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
<td colspan="1"> Add a highlighted rectangle.</br> Once your rectangle is created you can modify the color and opacity of the highlight.</br> Repeat mode enabled by default.</td>
</tr>
<tr>
<td colspan="1">
![annotations-draw-circle.png](/nx_assets/a12f0162-1971-4a00-8f60-cf71df4c7199.png ?w=40)</td>
<td colspan="1"> Add a circle.</br> Repeat mode enabled by default.</td>
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
  {{!--     ### nx_asset ###
  path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Nuxeo Enhanced Viewer/nuxeo-enhanced-viewer/redact-text.png
  name: redact-text.png
  addins#icon#up_to_date
--}}
![redact-text.png](/nx_assets/171fa367-db1a-4376-aed8-d56d0acaacf2.png ?border=true)
  </td>
<td colspan="1"> Redact text (since NEV 2.2.0, [requires the Redact permission]({{page page='how-to-use-content-redaction'}})). </br> Repeat mode enabled by default.</td>
</tr>
<tr>
  <td colspan="1">
  {{!--     ### nx_asset ###
  path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Nuxeo Enhanced Viewer/nuxeo-enhanced-viewer/redact-area.png
  name: redact-area.png
  addins#icon#up_to_date
--}}
![redact-area.png](/nx_assets/042a0a3a-e921-4eb5-919f-cdbbc8deaf60.png ?border=true)
  </td>
<td colspan="1"> Redact a zone (since NEV 2.2.0, [requires the Redact permission]({{page page='how-to-use-content-redaction'}})). </br> Repeat mode enabled by default.</td>
</tr>
<tr>
  <td colspan="1">
  {{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Nuxeo Enhanced Viewer/nuxeo-enhanced-viewer/generate-permanently-redacted-version.png
    name: generate-permanently-redacted-version.png
    addins#icon#up_to_date
--}}
![generate-permanently-redacted-version.png](/nx_assets/efee161c-ab85-4f44-a90f-0527d37b0c2b.png ?border=true)
  </td>
<td colspan="1"> Generate a permanently redacted version (since NEV 2.2.0, [requires the Redact permission]({{page page='how-to-use-content-redaction'}})).</td>
</tr>
</tbody>
</table>
</div>

**Repeat mode**: For annotations with repeat mode enabled, once the annotation is selected, you can add several annotations in a row. To disable the repeat mode, click on the annotation icon again.

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

Click on the download menu button {{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Arender Connector/annotations-download-button.png
    name: download-menu.png
    addins#icon#up_to_date
--}}
![annotations-download-button.png](/nx_assets/f08c3d19-0da2-43b8-a023-622aa785f8db.png ?border=true) to display the download menu with several available actions:

- Download current file
- Download current file as PDF
- Download current file with annotations
- Download with redactions (since NEV 2.2.0, [requires the Redact permission]({{page page='how-to-use-content-redaction'}}))
- Download CSV annotations
- Download current file with FDF annotations

### Print

Click on the Print menu button {{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Arender Connector/annotation-print-button.png
    name: print-menu.png
    addins#icon#up_to_date
--}}
![annotation-print-button.png](/nx_assets/3b7d1e22-e007-4b92-bac0-0be6ca81bc9b.png ?border=true) to display the print menu with several available actions:

- Print with options will open a popup window with several print options:
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

- Print with redactions (available since NEV 2.2.0) only appears if you have the [Redact permission]({{page page='how-to-use-content-redaction'}})). It allows you to print the document with the redactions (and only them, no other kind of annotations), as choosing a print option without the annotations would not include the redactions otherwise. If you do not have the Redact permission, printing will always include the redactions.

- Print all pages.

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

### Content Redaction

Nuxeo Enhanced Viewer can also be used to redact content, for example to remove personal identifying information (PII) from your documents. This use case is described in a dedicated [How to Use Content Redaction]({{page page='how-to-use-content-redaction'}}) page.

### Open Several Documents Within the Same Viewer

With the Nuxeo Enhanced Viewer, you can open several documents within the same viewer and so view all your documents at the same time. And you can scroll from one to the other and view/edit the annotations of each of them:

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Arender Connector/nev-open-several-view
    name: nev-open-several-view.png
    addins#screenshot#up_to_date
--}}
![nev-open-several-view](/nx_assets/035e295f-88a1-4060-b764-ed315e340794.png ?w=650,border=true)

This feature is available in all results views of Nuxeo Web UI. Once you have selected at least 2 documents, the action is available into the action list:

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Arender Connector/nev-open-several-action
    name: nev-open-several-action-2.png
    addins#screenshot#up_to_date
--}}
![nev-open-several-action](/nx_assets/849311f1-68fe-485e-946f-93d4295e199b.png ?w=650,border=true)

### Dynamic Selection of the Layers

With the Nuxeo Enhanced Viewer, you can select which layers to be displayed into the viewer and change it anytime.

This is available into a dedicated menu of the left section which appears only for documents with layers:

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Arender Connector/nev-layers-menu
    name: nev-layers-menu.png
    addins#screenshot#up_to_date
--}}
![nev-layers-menu](/nx_assets/bd328034-ffcc-4f77-8021-674f533c0058.png ?w=650,border=true)

This menu displays all the layers of the document and allow to select / unselect all of them, and update in real time the document view regarding the select layers.

## Supported File Formats

The annotations module supports a large number of file formats.

- **PDF** - all versions, XFA not supported
- **Images**: JPEG, PNG, TIFF, GIF, BMP, JNG, PBM, PSD, EPS, PS, DCM (Format DICOM) and all formats supported by ImageMagick
- **Microsoft Office (97-2013)**: Word (.doc, .docx) , PowerPoint (.ppt, .pptx), Excel (.xls, .xlsx), WordML (.xml), Visio (.vsd)
- **Composite files**: ZIP, EML, MSG
- **Others**: TXT, OpenDocument (LibreOffice or OpenOffice)

## Going Further

The connector can be customized in many different ways, such as adding new watermark stamps, displaying different actions/tools etc.
