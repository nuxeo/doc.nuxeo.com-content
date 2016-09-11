---
title: Convert module
review:
    comment: ''
    date: ''
    status: ok
confluence:
    ajs-parent-page-id: '17334408'
    ajs-parent-page-title: Video
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Convert+module
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/Convert+module'
    page_id: '17334395'
    shortlink: e4AIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/e4AIAQ'
    source_link: /display/NXDOC58/Convert+module
history:
    - 
        author: Solen Guitter
        date: '2015-08-28 13:44'
        message: ''
        version: '6'
    - 
        author: Stéfane Fermigier
        date: '2010-08-02 15:22'
        message: Migrated to Confluence 4.0
        version: '5'
    - 
        author: Stéfane Fermigier
        date: '2010-08-02 15:22'
        message: ''
        version: '4'
    - 
        author: Stéfane Fermigier
        date: '2010-08-02 15:21'
        message: ''
        version: '3'
    - 
        author: Thomas Roger
        date: '2010-07-29 16:18'
        message: ''
        version: '2'
    - 
        author: Thomas Roger
        date: '2010-07-29 16:10'
        message: ''
        version: '1'

---
&nbsp;

This package holds the backend converters to compute JPEG thumbnails (preview&nbsp;and storyboard) and streamable version of videos for the DSS integration.

Provides contributions to the `CommandlineExecutorService`:

*   get the [ffmpeg](http://ffmpeg.org) output info (e.g. the duration in seconds) of a video file

*   generating a single screenshot of a video file at a given time offset in seconds with [ffmpeg](http://ffmpeg.org)

*   generating a sequence of regularly spaces screenshots to compute the storyboard of a video file with [ffmpeg](http://ffmpeg.org)

*   converting a video from any format to mp4 (container format) H264 (video codec) + aac (audio codec) using [handbrake](http://handbrake.fr/) (used for streaming)

*   hinting mp4 files to make them suitable for streaming using [DSS](http://dss.macosforge.org) by using the [MP4Box](http://gpac.sf.net) command.

*   checking the presence of hinting tracks in a mp4 file using [mp4creator](http://mpeg4ip.sf.net) to&nbsp;avoid recomputing them when not necessary (optim, not used yet).

*   converting a video from any format to ogg (container format) theora (video&nbsp;codec) + vorbis (audio codec) using [ffmpeg2theora](http://v2v.cc/~j/ffmpeg2theora/) (not used by default but&nbsp;could be use as a base for Icecast integration in the future as an&nbsp;alternative to [DSS](http://dss.macosforge.org) for instance).

All those `CommandlineExecutorService` contributions are wrapped into 3 higher level java classes that are contributed to the `ConversionService`:

*   `ScreenshotConverter`: extract a single JPEG preview of the video

*   `StoryboardConverter`: extract a list of JPEG files with time offset info

*   `StreamableMediaConverter`: compute a streamable version of the video&nbsp;suitable for DSS_ integration.