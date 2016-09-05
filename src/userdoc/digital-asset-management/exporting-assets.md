---
title: Exporting Assets
labels:
    - export
toc: true
confluence:
    ajs-parent-page-id: '16092547'
    ajs-parent-page-title: Digital Asset Management
    ajs-space-key: USERDOC58
    ajs-space-name: Nuxeo Platform User Documentation - 5.8
    canonical: Exporting+Assets
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC58/Exporting+Assets'
    page_id: '16092679'
    shortlink: B471
    shortlink_source: 'https://doc.nuxeo.com/x/B471'
    source_link: /display/USERDOC58/Exporting+Assets
history:
    - 
        author: Solen Guitter
        date: '2016-09-01 14:02'
        message: ''
        version: '11'
    - 
        author: Solen Guitter
        date: '2013-11-26 18:34'
        message: ''
        version: '10'
    - 
        author: Solen Guitter
        date: '2013-10-22 18:45'
        message: ''
        version: '9'
    - 
        author: Solen Guitter
        date: '2013-10-22 18:44'
        message: ''
        version: '8'
    - 
        author: Solen Guitter
        date: '2013-07-18 16:08'
        message: ''
        version: '7'
    - 
        author: Solen Guitter
        date: '2013-07-18 16:07'
        message: Added export result for each asset type and updated export steps
        version: '6'
    - 
        author: Solen Guitter
        date: '2012-03-13 09:27'
        message: Migrated to Confluence 4.0
        version: '5'
    - 
        author: Solen Guitter
        date: '2012-03-13 09:27'
        message: Added screenshot
        version: '4'
    - 
        author: Solen Guitter
        date: '2011-12-10 23:33'
        message: ''
        version: '3'
    - 
        author: Jane Zupan
        date: '2010-08-06 17:41'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2010-07-29 16:01'
        message: ''
        version: '1'

---
## Asset Exports

### Exporting Pictures

When you export pictures, you get a folder with four files:

*   Original image: original size and format of the imported picture;
*   Original Jpeg image: the picture is converted to JPG but the original size is kept. This export is done even if the original picture was a JPG file;
*   Medium size image: the picture is converted to JPG and resized to 550 px height or width;
*   Thumbnail: the picture is converted to JPG and resized to 100px height or width.

{{#> callout type='tip' }}

The original and medium pictures can be the same size when you download them if the original is smaller or equal to medium size.

{{/callout}}

### Exporting Videos

When your export a video asset, you get a folder with several files available:

*   The original video file,
*   One WEBM conversion,
*   One MP4 conversion,
*   One JPEG picture by storyboard chapter,
*   One JPG picture prefixed with "StaticPlayerView_video-screenshot-", which is the picture extracted from the video that is used for the player picture,
*   One JPG picture prefixed with "Thumbnail_video-screenshot-", which is the thumbnail used in folders proposing a thumbnail view (typically in the DAM view).

### Exporting Office Files

When you export an office file (PDF, DOC, ODT, etc), you download the original file only.

&nbsp;