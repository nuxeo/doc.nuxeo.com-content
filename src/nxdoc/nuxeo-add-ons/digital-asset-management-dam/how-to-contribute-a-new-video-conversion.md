---
title: How to Contribute a New Video Conversion
review:
    comment: ''
    date: '2018-01-15'
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
Let's see how to contribute a new video conversion to convert a video to WebM format (assuming all the needed codecs are installed with FFmpeg).
{{! /excerpt}}

{{#> callout type='info' heading='Nuxeo University'}}
Watch the related courses on Nuxeo University
- [DAM Configuration](https://university.nuxeo.com/learn/public/course/view/elearning/100/dam-configuration).
![]({{file name='university-dam-configuration.png' page='nxdoc/university'}} ?w=450,border=true)
{{/callout}}

A video conversion depends of a `command`, a `converter`&nbsp;and a `videoConversion`&nbsp;contributions.

## Contributing the Command

{{#> panel type='code' heading='Command contribution'}}
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
{{/panel}}

**Parameters**:

*   `inFilePath`&nbsp;and `outFilePath` will be filled by Nuxeo,
*   `width` and `height` can be used in your command, they will be passed by the generic `VideoConversionConverter`.

## Contributing the Converter

The converter contribution depends of an already defined `command`.

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

Here we use the generic `VideoConversionConverter`&nbsp;converter, only the `sourceMimeType`s and `parameters` need to be filled.

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

## Contributing the Video Conversion

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

## Running the Video Conversion Manually

Assuming `videoDocument`&nbsp;is a Document with the `Video` facet, to launch the "WebM 480p" video conversion on it:

```java
DocumentModel videoDocument = ...
VideoService videoService = Framework.getService(VideoService.class);
videoService.launchConversion(videoDocument, "WebM 480p");
```

## Running the Video Conversion Automatically

When importing Video, you can configure which video conversions will be run (asynchronously) automatically.

To run the "WebM 480p" video conversion automatically:

```
<extension target="org.nuxeo.ecm.platform.video.service.VideoService"
  point="automaticVideoConversions">
  <automaticVideoConversion name="WebM 480p" order="10" />
</extension>
```

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related pages in current documentation'}}
- [How to Contribute a New Video Conversion]({{page space='NXDOC' page='How to+Contribute+a+New+Video+Conversion'}})
- [Conversion]({{page space='NXDOC' page='Conversion'}})
- [Supported File Formats]({{page space='NXDOC' page='Supported File+Formats'}})
- [How to Automatically Convert a Document to PDF]({{page space='NXDOC' page='How to+Automatically+Convert+a+Document+to+PDF'}})
- [How to Contribute a Command Line Converter]({{page space='NXDOC' page='How to+Contribute+a+Command+Line+Converter'}})
- [How to Contribute Picture Conversions]({{page space='NXDOC' page='How to+Contribute+Picture+Conversions'}})
- [How to Quickly Generate a PDF Using Document Template]({{page space='NXDOC' page='How to+Quickly+Generate+a+PDF+Using+Document+Template'}})
- [Digital Asset Management (DAM)](/pages/viewpage.action?pageId=3866704)
{{/panel}}</div><div class="column medium-6">
{{#> panel heading='Related pages in other documentation'}}
- [User actions categories]({{page space='Studio' page='User actions+categories'}})<span class="smalltext">(Nuxeo Online Services)</span>

{{/panel}}</div></div>
