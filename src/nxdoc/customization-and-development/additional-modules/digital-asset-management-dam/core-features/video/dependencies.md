---
title: Dependencies
review:
    comment: ''
    date: ''
    status: ok
confluence:
    ajs-parent-page-id: '17334408'
    ajs-parent-page-title: Video
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Dependencies
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/Dependencies'
    page_id: '17334397'
    shortlink: fYAIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/fYAIAQ'
    source_link: /display/NXDOC58/Dependencies
history:
    - 
        author: Solen Guitter
        date: '2015-08-28 13:45'
        message: ''
        version: '4'
    - 
        author: Stéfane Fermigier
        date: '2010-08-02 15:23'
        message: Migrated to Confluence 4.0
        version: '3'
    - 
        author: Stéfane Fermigier
        date: '2010-08-02 15:22'
        message: ''
        version: '2'
    - 
        author: Thomas Roger
        date: '2010-07-29 16:26'
        message: ''
        version: '1'

---
&nbsp;

## Mandatory

*   [ffmpeg](http://ffmpeg.org) is needed to compute JPEG previews, storyboard, and duration extraction: mandatory.

## Mandatory if [DSS](http://dss.macosforge.org) mode enabled

*   [DSS](http://dss.macosforge.org): the streaming server itself.

*   [handbrake](http://handbrake.fr/) is used for encoding to h264/aac to compute the version streamable&nbsp;using darwin: only mandatory if the streaming server mode is enabled (disabled&nbsp;by default).

*   [MP4Box](http://gpac.sf.net) is used for track hinting for mp4 files: only mandatory if the streaming&nbsp;server mode is enabled (disabled by default).

## Might be used in the future

*   [mp4creator](http://mpeg4ip.sf.net) will be used to avoid building streamable version of videos that&nbsp;are already streamable in their original version.

*   [ffmpeg2theora](http://v2v.cc/~j/ffmpeg2theora/) is an optional dependency used by a converter that is not used&nbsp;by default in either Nuxeo DAM or Nuxeo DM.