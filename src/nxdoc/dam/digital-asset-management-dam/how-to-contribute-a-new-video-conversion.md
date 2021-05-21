---
title: 'HOWTO: Contribute Video Conversion'
review:
    comment: ''
    date: '2021-05-12'
    status: ok
details:
    howto:
        excerpt: Learn how to contribute a new video conversion to convert a video to WebM format.
        level: Advanced
        tool: 'XML extension, Code'
        topics: 'Conversion, DAM'
notes: Documentation page used by the Marketing team. Check with Marketing before deleting or moving.
labels:
    - lts2016-ok
    - howto
    - dam
    - conversion
    - troger
    - video
    - convert-component
    - excerpt
    - lts2017-ok
toc: true
confluence:
    ajs-parent-page-id: '3866704'
    ajs-parent-page-title: Digital Asset Management (DAM)
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: How+to+Contribute+a+New+Video+Conversion
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/How+to+Contribute+a+New+Video+Conversion'
    page_id: '20517029'
    shortlink: pRA5AQ
    shortlink_source: 'https://doc.nuxeo.com/x/pRA5AQ'
    source_link: /display/NXDOC/How+to+Contribute+a+New+Video+Conversion
history:
    -
        author: Manon Lumeau
        date: '2016-09-08 13:03'
        message: ''
        version: '7'
    -
        author: Thomas Roger
        date: '2015-10-13 09:28'
        message: ''
        version: '6'
    -
        author: Thomas Roger
        date: '2015-10-13 09:25'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2014-12-01 22:20'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2014-10-21 12:10'
        message: 'Fix typos and formatting, categorize howto'
        version: '3'
    -
        author: Thomas Roger
        date: '2014-10-21 11:59'
        message: ''
        version: '2'
    -
        author: Thomas Roger
        date: '2014-10-21 11:58'
        message: ''
        version: '1'

---
{{! excerpt}}
This page explains how video conversions are structured, and provide instructions to perform the standard video conversion operations.
{{! /excerpt}}

## Video conversion concepts

Video conversions are used to fill the video conversions (stored in the `vid:transcodedVideos` field of a document having the `Video` facet). The default ones are `MP4 480p`, `Ogg 480p` and `WebM 480p`. The video storyboard info are stored in the `vid:storyboard` property.

Video conversions are simple XML contributions done on the [`videoConversions`](https://explorer.nuxeo.com/nuxeo/site/distribution/latest/viewExtensionPoint/org.nuxeo.ecm.platform.video.service.VideoService--videoConversions) extension point of the [`org.nuxeo.ecm.platform.video.service.VideoService`](https://explorer.nuxeo.com/nuxeo/site/distribution/latest/viewComponent/org.nuxeo.ecm.platform.video.service.VideoService) component. The default video conversions launched after the creation of a Video document are declared in the [`automaticVideoConversions`](https://explorer.nuxeo.com/nuxeo/site/distribution/latest/viewExtensionPoint/org.nuxeo.ecm.platform.video.service.VideoService--automaticVideoConversions) extension point.

{{#> callout type='info' heading='Nuxeo University'}}
Watch the related courses on Nuxeo University: [DAM Concepts](https://university.nuxeo.com/learn/course/internal/view/elearning/97/NuxeoDigitalAssetManagementDAMConcepts)
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/UNIVERSITY/university_dam.png
    name: university_dam.png
    addins#screenshot#up_to_date
--}}
![university_dam.png](nx_asset://ed2467b9-4529-4cca-9843-0b46f8cd3d62 ?w=650,border=true)
{{/callout}}

A video conversion depends of a `command`, a `converter` and a `videoConversion` contributions.

Video conversions are working only on documents having the `Video` facet.

## Common conversion contributions

### Register a new converter

- Contribute an XML extension to register a new command line converter called `ffmpeg-towebm`:

```xml
<extension target="org.nuxeo.ecm.platform.commandline.executor.service.CommandLineExecutorComponent"
  point="command">
  <command name="ffmpeg-towebm" enabled="true">
    <commandLine>ffmpeg</commandLine>
    <parameterString> -i #{inFilePath} -s #{width}x#{height} -acodec libvorbis -v 0 #{outFilePath}</parameterString>
    <installationDirective>
      You need to install FFmpeg from http://ffmpeg.org (apt-get install ffmpeg)
    </installationDirective>
  </command>
</extension>
```

**Parameters**:

*   `inFilePath` and `outFilePath` will be filled by Nuxeo,
*   `width` and `height` can be used in your command, they will be passed by the generic `VideoConversionConverter`.

- Contribute an XML extension to register a converter that uses our new `ffmpeg-towebm` command line.

```xml
<extension target="org.nuxeo.ecm.core.convert.service.ConversionServiceImpl"
  point="converter">
  <converter name="convertToWebM" class="org.nuxeo.ecm.platform.video.convert.VideoConversionConverter">
    <sourceMimeType>video/mpeg</sourceMimeType>
    <sourceMimeType>video/mp4</sourceMimeType>
    <sourceMimeType>video/quicktime</sourceMimeType>
    <sourceMimeType>video/ogg</sourceMimeType>
    <sourceMimeType>video/x-ms-asf</sourceMimeType>
    <sourceMimeType>video/x-msvideo</sourceMimeType>
    <sourceMimeType>video/flv</sourceMimeType>
    <destinationMimeType>video/webm</destinationMimeType>
    <parameters>
      <parameter name="CommandLineName">ffmpeg-towebm</parameter>
      <parameter name="videoMimeType">video/webm</parameter>
      <parameter name="videoExtension">webm</parameter>
      <parameter name="tmpDirectoryPrefix">convertToWebM</parameter>
    </parameters>
  </converter>
</extension>
```

The converter contribution depends of an already defined `command`.

Here we use the generic `VideoConversionConverter` converter, only the `sourceMimeType`s and `parameters` need to be filled.

**Parameters**:

*   `CommandLineName`: the command to use when running this converter (the one defined earlier)
*   `videoMimeType`: the mime-type of the converted video
*   `videoExtension`: the extension of the converted video
*   `tmpDirectoryPrefix`: the tmp directory where the conversion will be done

For instance, the converter to convert to MP4 looks like:

```xml
<converter name="convertToMP4" class="org.nuxeo.ecm.platform.video.convert.VideoConversionConverter">
  <sourceMimeType>video/mpeg</sourceMimeType>
  <sourceMimeType>video/webm</sourceMimeType>
  <sourceMimeType>video/quicktime</sourceMimeType>
  <sourceMimeType>video/ogg</sourceMimeType>
  <sourceMimeType>video/x-ms-asf</sourceMimeType>
  <sourceMimeType>video/x-msvideo</sourceMimeType>
  <sourceMimeType>video/flv</sourceMimeType>
  <destinationMimeType>video/mp4</destinationMimeType>
  <parameters>
    <parameter name="CommandLineName">ffmpeg-tomp4</parameter>
    <parameter name="videoMimeType">video/mp4</parameter>
    <parameter name="videoExtension">mp4</parameter>
    <parameter name="tmpDirectoryPrefix">convertToMP4</parameter>
  </parameters>
</converter>
```

### Add a new video conversion

The video conversion contribution depends on an already defined converter. The same converter could be used for more than one video conversion if you wanted different sizes.

```xml
<extension target="org.nuxeo.ecm.platform.video.service.VideoService"
  point="videoConversions">
  <videoConversion name="WebM 480p" converter="convertToWebM" height="480"/>
</extension>
```

**Parameters**:

*   `converter`: the already defined converter to use when running this video conversion
*   `height`: the max height of the video. The width and height of the new video will be computed and passed through the command, where we reference `#{width}` and `#{height}`.

### Running the video conversion manually

Assuming `videoDocument` is a Document with the `Video` facet, to launch the "WebM 480p" video conversion on it:

```java
DocumentModel videoDocument = ...
VideoService videoService = Framework.getService(VideoService.class);
videoService.launchConversion(videoDocument, "WebM 480p");
```

### Running the video conversion automatically

When importing Video, you can configure which video conversions will be run (asynchronously) automatically.

To run the "WebM 480p" video conversion automatically:

```
<extension target="org.nuxeo.ecm.platform.video.service.VideoService"
  point="automaticVideoConversions">
  <automaticVideoConversion name="WebM 480p" order="10" />
</extension>
```

### Filter video conversions

You can filter the video conversion execution the same way [picture conversions are filtered]({{page version='' space='nxdoc' page='how-to-contribute-picture-conversions'}}#filter-picture-conversions).

### Disable or update a default conversion 

If you need to disable a default conversion, just override the [`videoConversions`](https://explorer.nuxeo.com/nuxeo/site/distribution/latest/viewExtensionPoint/org.nuxeo.ecm.platform.video.service.VideoService--videoConversions) extension point, and add the `enabled=false` attribute:

```xml
<extension point="videoConversions" target="org.nuxeo.ecm.platform.video.service.VideoService">
    <videoConversion enabled=false converter="convertToMP4" height="480" name="MP4 480p" rendition="true"/>
</extension>
```

In this scenario, the MP4 480p conversion won't be automated anymore and won't be displayed as available conversion in Nuxeo Web UI.

### Display a custom conversion in the preview section

The default document view layout of Nuxeo Web UI displays the main file preview (i.e. the binary stored in `file:content`). To display a specific conversion, you need to edit the view layout by

- Commenting the default previewer

```html
<!-- comment this section -->
<nuxeo-document-viewer role="widget" document="[[document]]"></nuxeo-document-viewer>
```

- Add the `nuxeo-document-preview` element to fetch a specific rendition. 

```html
<nuxeo-card>
  <nuxeo-document-preview document="[[document]]" 
  xpath="vid:transcodedVideos/1/content">
  </nuxeo-document-preview>
</nuxeo-card>
```

The `1` value in the `xpath` attribute corresponds to the order of the picture conversion in the list of video conversions.

### Set security on a specific conversion  

Use the same procedure as for [picture conversions]({{page version='' space='nxdoc' page='how-to-contribute-picture-conversions'}}#set-security-on-a-specific-conversion).

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related How-Tos'}}

- [Contribute a Command Line Converter]({{page space='NXDOC' page='How to+Contribute+a+Command+Line+Converter'}})
- [Contribute Picture Conversions]({{page space='NXDOC' page='How to+Contribute+Picture+Conversions'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Other Related Documentation'}}

- [Digital Asset Management (DAM) Section]({{page page='digital-asset-management-dam'}})
- [Conversion]({{page page='conversion'}})
- [Supported File Formats]({{page space='NXDOC' page='Supported File+Formats'}})

{{/panel}}</div></div>
