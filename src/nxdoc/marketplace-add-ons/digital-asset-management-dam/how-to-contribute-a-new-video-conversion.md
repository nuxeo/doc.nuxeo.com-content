---
title: How to Contribute a New Video Conversion
details:
    howto:
        excerpt: >-
            Learn how to contribute a new video conversion to convert a video to
            WebM format.
        level: Advanced
        tool: 'XML extension, Code'
        topics: 'Conversion, DAM'
labels:
    - howto
    - dam
    - conversion
    - video
    - convert-component
    - lts2015-ok
    - excerpt
toc: true
confluence:
    ajs-parent-page-id: '3866704'
    ajs-parent-page-title: Digital Asset Management (DAM)
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: How+to+Contribute+a+New+Video+Conversion
    canonical_source: >-
        https://doc.nuxeo.com/display/NXDOC/How+to+Contribute+a+New+Video+Conversion
    page_id: '20517029'
    shortlink: pRA5AQ
    shortlink_source: 'https://doc.nuxeo.com/x/pRA5AQ'
    source_link: /display/NXDOC/How+to+Contribute+a+New+Video+Conversion
history:
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

A video conversion depends of a `command`, a `converter`&nbsp;and a `videoConversion`&nbsp;contributions.

## Contributing the Command

```

    ffmpeg
     -i #{inFilePath} -s #{width}x#{height} -acodec libvorbis -v 0 #{outFilePath}

      You need to install FFmpeg from http://ffmpeg.org (apt-get install ffmpeg)

```

**Parameters**:

*   `inFilePath`&nbsp;and `outFilePath` will be filled by Nuxeo,
*   `width` and `height` can be used in your command, they will be passed by the generic `VideoConversionConverter`.

## Contributing the Converter

The converter contribution depends of an already defined `command`.

```

    video/mpeg
    video/mp4
    video/quicktime
    video/ogg
    video/x-ms-asf
    video/x-msvideo
    video/flv
    video/webm

      ffmpeg-towebm
      video/webm
      webm
      convertToWebM

```

Here we use the generic `VideoConversionConverter`&nbsp;converter, only the `sourceMimeType`s and `parameters` need to be filled.

**Parameters**:

*   `CommandLineName`: the command to use when running this converter (the one defined earlier)
*   `videoMimeType`: the mime-type of the converted video
*   `videoExtension`: the extension of the converted video
*   `tmpDirectoryPrefix`: the tmp directory where the conversion will be done

For instance, the converter to convert to MP4 looks like:

```

  video/mpeg
  video/webm
  video/quicktime
  video/ogg
  video/x-ms-asf
  video/x-msvideo
  video/flv
  video/mp4

    ffmpeg-tomp4
    video/mp4
    mp4
    convertToMP4

```

## Contributing the Video Conversion

The video conversion contribution depends on an already defined converter. The same converter could be used for more than one video conversion if you wanted different sizes.

**Parameters**:

*   `converter`: the already defined converter to use when running this video conversion
*   `height`: the max height of the video. The width and height of the new video will be computed and passed through the command, where we reference `#{width}`&nbsp;and `#{height}`.

## Running the Video Conversion Manually

Assuming `videoDocument`&nbsp;is a Document with the `Video` facet, to launch the "WebM 480p" video conversion on it:

```
DocumentModel videoDocument = ...
VideoService videoService = Framework.getLocalService(VideoService.class);
videoService.launchConversion(videoDocument, "WebM 480p");
```

## Running the Video Conversion Automatically

When importing Video, you can configure which video conversions will be run (asynchronously) automatically.

To run the "WebM 480p" video conversion automatically:

```

```

&nbsp;

* * *

<div class="row" data-equalizer="" data-equalize-on="medium">

<div class="column medium-6">

{{! Please update the label in the Content by Label macro below. }}

</div>

<div class="column medium-6">

{{! Please update the label and target spaces in the Content by Label macro below. }}

</div>

</div>