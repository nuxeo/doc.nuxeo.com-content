---
title: 'HOWTO: Use Nuxeo Renditions on Nuxeo Enhanced Viewer'
description: 'Step by step instructions to use the Nuxeo renditions into Nuxeo Enhanced Viewer instead of the original file'
review:
    comment: ''
    date: '2021-07-20'
    status: ok
labels:
    - addon
    - tutorial
    - howto
toc: true
tree_item_index: 100
---

This tutorial provides guidelines on how to use Nuxeo renditions instead of the original file on the advanced viewer. The main use case is for large files (around 500 MB and higher) that involve preview unavailability or slowness in Nuxeo Enhanced Viewer.

## Use Case

In order to reduce the time to display content into Nuxeo Enhanced Viewer, we implemented a mechanism that provides to ARender a rendition of the file instead of the original file. By using a low size version of the original file, it reduces time on file transfer, conversion and rendering.

## General Process

This feature is based on:
 - An [Automation script]({{page space='nxdoc' page='automation-scripting'}}) to define the expected behavior: criteria to use rendition instead of the original file (document type, file format, file size, ...), expected behavior in case of missing rendition, etc.
 - An [XML contribution]({{page space='nxdoc' page='how-to-contribute-to-an-extension'}}) to turn on the feature.

## Automation Script for Rendition in NEV

The automation script requires the following attributes:
 - Input type: "document"
 - Output type: "blob"

Below is an example of an automation script with the following behavior:
 - NEV to use 'OriginalJpeg' rendition for pictures,
 - NEV to use 'MP4 480p' rendition for videos,
 - NEV to use the original file for other document types,
 - NEV to use the original file for pictures without the 'OriginalJpeg' rendition,
 - NEV to use the original file for videos without the 'MP4 480p' rendition.

```
function run(doc, params) {
  var blobXPath = params.blobXPath;
  if (!blobXPath) {
    Console.warn(params);
    Console.warn('No blobXPath parameter');
    return doc['file:content'];
  }
  // change the blob returned by the adapter only if we request the default blob
  if (blobXPath === 'file:content') {
    // change the blob returned by the adapter if we request blob of a Picture document
    if (doc.hasFacet('Picture')) {
      Console.warn('Document + blob are candidate for rendition');
      var pictureViews = doc['picture:views'];
      for (var index = 0; index < pictureViews.length; index++) {
        var view = pictureViews[index];
        if (view.title === 'OriginalJpeg' && view.content.filename !== 'empty_picture.png') {
          Console.warn('Found a picture view');
          return view.content;
        }
      }
      Console.warn('Blob is not ready');

    // change the blob returned by the adapter if we request blob of a Video document  
    } else if (doc.hasFacet('Video')) {
      Console.warn('Document + blob are candidate for rendition');
      var transcodedVideos = doc['vid:transcodedVideos'];
      for (var index = 0; index < transcodedVideos.length; index++) {
        var vid = transcodedVideos[index];
        if (vid.name === 'MP4 480p') {
          Console.warn('Found a transcoded video');
          return vid.content;
        }
      }
      Console.warn('Blob is not ready');

    }
  }
  Console.warn('Normal return');

  // return the original file if it's not a picture or a video, nor if the expected rendition is missing
  return doc[blobXPath];
```

## XML Extension for Renditions in NEV

The XML extension needs to reference the related automation script as described [above]({{page page='how-to-use-renditions-on-nev'}}#automation-script-for-rendition-in-nev).

Below is an example of the expected XML extension for the automation script 'ARenderGetBlob':

```
<?xml version="1.0"?>
<component name="com.nuxeo.ecm.arender.low.resolution.override" version="1.0">
  <require>com.nuxeo.ecm.arender.low.resolution</require>

  <extension target="org.nuxeo.runtime.ConfigurationService" point="configuration">
    <property name="nuxeo.arender.low.resolution.chain">javascript.ARenderGetBlob</property>
  </extension>

</component>
```
