---
title: Nuxeo Media Manipulation
description: 'Nuxeo Media Manipulation documentation'
review:
    comment: ''
    date: '2023-09-11'
    status: ok
labels:
    - lts2021-ok
    - media-manipulation
    - dam
toc: true
tree_item_index: 1120
---

The Nuxeo Media Manipulation connector allows users to transform media on the fly. 

Transformations can be applied on the media content that is present as the main file, xpath - file:content of the document 

## Installation

The connector is available as a single add-on package in nuxeo marketplace.  

Customers can install this just like any other add-on onto the nuxeo server instance. 

## Prerequisites
Nuxeo Platform – LTS-2023 

Nuxeo Web UI – dependent package which will be installed if not present. 

Picture View generations for OriginalJpeg and FullHD are enabled. 

## Current Scope
Supported Media Facets: Picture 

Supported Functionalities: Cropping and Resizing, Addition of custom aspect ratio options, Output format selection, Download, Share – Public link, Save Manipulation as rendition, Save Manipulation as Derivative document. 

## Functional Overview
After installation of the package, on a given picture faceted document, for the users that have write permission, a document action - Edit Media - is enabled. 
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Media Manipulation/Icon
    name: Screenshot 2023-09-11 at 15.29.36.png
    addins#screenshot#up_to_date
--}}
![Icon](nx_asset://bf16a07e-e355-4ecf-90d3-21e72c42278f ?w=650,border=true)

Upon clicking this icon, users will be presented with the dialog where they can perform all the transform activities on top of the images. 
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Media Manipulation/Dialog1
    name: Screenshot 2023-09-11 at 15.29.51.png
    addins#screenshot#up_to_date
--}}
![Dialog1](nx_asset://88fb74e9-eb29-477c-bd7c-b8bbd8ab99d2 ?w=650,border=true)

Keeping UI performance under consideration please note that the image that is loaded in the crop area is OriginalJPEG view of the actual image.  

In case of large files, it is loaded with FullHD view. 

All the transformations done on the FullHD view will be scaled accordingly and applied as would be for originalJPEG, resulting in the expected result. 

The threshold at which this should happen is configurable and this would happen when the size of the originalJPEG rendition in MB > nuxeo.media.image.maxsize. 

### Cropping, Resizing and Aspect Ratios

The crop panel displays the picture and the crop box. Crop box can be operated freely when the Aspect ratio is selected as free, which is default. 
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Media Manipulation/Cropping
    name: Screenshot 2023-09-11 at 15.29.58.png
    addins#screenshot#up_to_date
--}}
![Cropping](nx_asset://2a9d4ee4-608b-4927-96d4-0d5dc70fdf7c ?w=650,border=true)

The add-on offers some out of the box aspect ratios. 

As these options sourced to the vocabulary: aspectRatio, admin can configure them as desired. 

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Media Manipulation/vocabulary: aspectRatio
    name: Screenshot 2023-09-11 at 15.30.06.png
    addins#screenshot#up_to_date
--}}
![vocabulary: aspectRatio](nx_asset://b148f3df-544d-4240-92da-58e985609f9c ?w=650,border=true)

### Sharing

Public URLs can be generated for the desired/existing transformation(s). These URLs won't need any authentication and can be simply used to get the transformed image. 
 
To generate URL for desired/current transformation, the option of Custom must be selected in the drop down – Select a Value and clicking on create public url button. 
 
The generated URL can be timeboxed by selecting from and to dates. 

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Media Manipulation/Share
    name: Screenshot 2023-09-11 at 15.30.13.png
    addins#screenshot#up_to_date
--}}
![Share ](nx_asset://881e3c4e-5791-406c-a281-e3cdf9d08f49 ?w=650,border=true)

### Download as

Allows to download the image applying the desired transformations in the selected output format. The following formats are supported for now: JPEG, PNG and WEBP 
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Media Manipulation/Download as
    name: Screenshot 2023-09-11 at 15.30.19.png
    addins#screenshot#up_to_date
--}}
![Download as](nx_asset://fb6fe2ff-b05b-4d93-8e6b-e9281df34ef1 ?w=650,border=true)

For both the download and public link use cases, please make sure to add the  
`nuxeo.url` config key with appropriate nuxeo host value: 

`Eg: nuxeo.url=https://<your domain name here>/nuxeo`

### Saving

The desired transformation can be saved as a custom rendition in the current document or as a new derivative document. 
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Media Manipulation/Save
    name: Screenshot 2023-09-11 at 15.30.27.png
    addins#screenshot#up_to_date
--}}
![Save](nx_asset://503a0012-b25f-41b9-b859-24fbd594c845 ?w=650,border=true)

Upon using Save as rendition, the desired transformation will be saved as a new picture view of the current document. This can be seen in the additional formats section of the document details page in Web UI. User can download the same from here.
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Media Manipulation/Save as rendition
    name: Screenshot 2023-09-11 at 15.30.34.png
    addins#screenshot#up_to_date
--}}
![Save as rendition](nx_asset://74a911a1-273b-46fd-89e2-f71a20616943 ?w=650,border=true)

Custom rendition is seen in additional formats section.

Upon save as derivative, a new document will be created, copying from the current document but containing the main file as the desired transformed image. The derivative document name can be specified in the derivative name field in the media manipulation dialog. 

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Media Manipulation/new rendition
    name: Screenshot 2023-09-11 at 15.30.40.png
    addins#screenshot#up_to_date
--}}
![new rendition](nx_asset://48265045-06ee-4e1d-87b1-00225811e3a3 ?w=650,border=true)

A new document can been seen with name: Derivative – City

## Known Limitations 

Large Images could cause significant user wait time when trying to invoke dynamic transformation. 

Possible timeouts during the transformation of large sized images.  

The transaction timeout needs to be increased explicitly in such cases using the config key: 
`nuxeo.media.transform.transaction.timeout.seconds`

## Future Scope

Support of additional media and functionalities. 

Asynchronous handling of invoked transformation requests with a dashboard to check the status.

Delivery through CDN.
 
