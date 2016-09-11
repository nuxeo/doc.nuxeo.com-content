---
title: Core module
review:
    comment: ''
    date: ''
    status: ok
confluence:
    ajs-parent-page-id: '17334408'
    ajs-parent-page-title: Video
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Core+module
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/Core+module'
    page_id: '17334417'
    shortlink: kYAIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/kYAIAQ'
    source_link: /display/NXDOC58/Core+module
history:
    - 
        author: Solen Guitter
        date: '2015-08-28 13:43'
        message: ''
        version: '6'
    - 
        author: Jane Zupan
        date: '2010-08-06 18:04'
        message: Migrated to Confluence 4.0
        version: '5'
    - 
        author: Jane Zupan
        date: '2010-08-06 18:04'
        message: ''
        version: '4'
    - 
        author: Thomas Roger
        date: '2010-07-29 16:18'
        message: ''
        version: '3'
    - 
        author: Thomas Roger
        date: '2010-07-29 16:05'
        message: ''
        version: '2'
    - 
        author: Thomas Roger
        date: '2010-07-29 15:54'
        message: ''
        version: '1'

---
&nbsp;

## Video type definition

### Schemas

*   `video`: store the storyboarding items
*   `streamable_media`: store the streamable version of a video file

### Document Type

This module defined one document type `Video` which used the `video` and `streamable_media` schemas.

## Core event listeners

### VideoStoryboardListener

Compute the storyboard for document type that holds the `HasStoryboard` facet. The video storyboard is stored in the `vid:storyboard` field. Also update the `strm:duration` duration field.

### VideoPreviewListener

Compute the a 2 thumbnails previews (same sizes as the picture previews) for documents that have the `HasVideoPreview` facet. The results is stored in the `picture` schema using the same picture adapter as the `Picture` documents. If the format is not supported by ffmpeg, a black thumbnail is generated. Also updates the `strm:duration` field.

### MediaStreamingUpdaterListener

Asynchronous event listener to build the hinted streamable version of video to be used by the DSS_ integration. The results is stored in the `strm:streamable` field.

## FileManagerService contribution

`VideoImporter` is contributed to the `FileManagerService` to create documents of type `Video` if the mimetype is matching when using the drag and drop plugin
or the DAM import button.