---
title: Supported File Formats
review:
    comment: ''
    date: '2021-05-17'
    status: ok
labels:
    - lts2016-ok
    - dam-component
    - dam
    - lmcintyre
    - lts2017-ok
toc: true 
confluence:
    ajs-parent-page-id: '3866704'
    ajs-parent-page-title: Digital Asset Management (DAM)
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Supported+File+Formats
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Supported+File+Formats'
    page_id: '3343319'
    shortlink: 1wMz
    shortlink_source: 'https://doc.nuxeo.com/x/1wMz'
    source_link: /display/NXDOC/Supported+File+Formats
history:
    -
        author: Solen Guitter
        date: '2014-10-31 14:59'
        message: ''
        version: '22'
    -
        author: Thibaud Arguillere
        date: '2014-10-24 20:25'
        message: 'Tested .ai and .psd files => have thumbnails and previews ok'
        version: '21'
    -
        author: Solen Guitter
        date: '2013-06-05 11:04'
        message: Reported changes from 5.6 documentation
        version: '20'
    -
        author: Solen Guitter
        date: '2012-02-08 12:01'
        message: Migrated to Confluence 4.0
        version: '19'
    -
        author: Solen Guitter
        date: '2012-02-08 12:01'
        message: ''
        version: '18'
    -
        author: Solen Guitter
        date: '2012-02-07 18:07'
        message: ''
        version: '17'
    -
        author: Solen Guitter
        date: '2011-12-10 19:26'
        message: ''
        version: '16'
    -
        author: Solen Guitter
        date: '2010-07-28 15:01'
        message: format
        version: '15'
    -
        author: Delphine Renevey
        date: '2010-07-20 19:40'
        message: ''
        version: '14'
    -
        author: Delphine Renevey
        date: '2010-07-20 19:39'
        message: ''
        version: '13'
    -
        author: Delphine Renevey
        date: '2010-07-20 19:39'
        message: ''
        version: '12'
    -
        author: Delphine Renevey
        date: '2010-07-20 19:38'
        message: ''
        version: '11'
    -
        author: Delphine Renevey
        date: '2010-07-20 19:34'
        message: ''
        version: '10'
    -
        author: Delphine Renevey
        date: '2010-07-20 19:33'
        message: ''
        version: '9'
    -
        author: Delphine Renevey
        date: '2010-07-20 19:33'
        message: ''
        version: '8'
    -
        author: Delphine Renevey
        date: '2010-07-20 19:31'
        message: ''
        version: '7'
    -
        author: Delphine Renevey
        date: '2010-07-20 19:31'
        message: ''
        version: '6'
    -
        author: Delphine Renevey
        date: '2010-07-20 19:30'
        message: ''
        version: '5'
    -
        author: Delphine Renevey
        date: '2010-07-20 19:30'
        message: ''
        version: '4'
    -
        author: Delphine Renevey
        date: '2010-07-20 19:30'
        message: ''
        version: '3'
    -
        author: Delphine Renevey
        date: '2010-07-20 19:29'
        message: ''
        version: '2'
    -
        author: Delphine Renevey
        date: '2010-07-20 19:29'
        message: ''
        version: '1'
---

{{! excerpt}}
The Platform Digital Asset Management module supports a large number of file formats.
{{! /excerpt}}

!!! LINK UNIVERSITY !!!

## Introduction

we responded based on the standard set of engines typically deployed with Nuxeo (and many other formats are supported besides what are listed here). This is by no means a limit since other engines can be used. We have noted where other engines could be used. The standard engines are ImageMagick, FFMPEG, Blender, OpenOffice and accessing various embedded previews. Likewise where there are format limitations one can always manage the native files and supply Nuxeo a readable preview (e.g. export from native app before upload). Where there are support limitations teams should evaluate the effort/cost to implement other engines/customization vs. the frequency and volume of any "extra work" needed to generate previews manually. We often find that under-supported formats represent a very small portion of content that may not worth dedicating implementation resources over more important capabilities.


!!! HOW TO HANDLE NEW FILE FORMAT !!!

## Multimedia File Support Table

!!! EXPLAIN DIFFERENT COLUMNS !!! 

- [Extension point with supported mimetype](https://explorer.nuxeo.com/nuxeo/site/distribution/latest/viewExtensionPoint/org.nuxeo.ecm.platform.mimetype.service.MimetypeRegistryService--mimetype)
- [Extension point fileManager for document type and extension mapping](https://explorer.nuxeo.com/nuxeo/site/distribution/latest/viewExtensionPoint/org.nuxeo.ecm.platform.filemanager.service.FileManagerService--plugins)

### Picture Files

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">
<th colspan="1">Metadata extraction</th>
<th colspan="1">Preview</th>
<th colspan="1">Encode / Transcode</th>
<th colspan="1">Mimetype recognition</th>
<th colspan="1">Additional Notes</th>
</tr>
<tbody>
<tr>
<td colspan="1">.jpeg</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.jpg</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.png</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.ps</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.psd</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.raw</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1">With rendering parameters supplied (e.g. dimensions)</td>
<td colspan="1">X</td>
<td colspan="1">This is just a bitstream so to render must provide engine dimensions etc - but ImageMagick can render the data if provided inputs.</td>
</tr>
<tr>
<td colspan="1">.svg</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.xml</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.xmp</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.tga</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.tif</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.tiff</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.eps</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.eps</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.gif</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.ai</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1"> </td>
<td colspan="1">Note most image format support via ImageMagick - format list here: https://imagemagick.org/script/formats.php</td>
</tr>
<tr>
<td colspan="1">.bmp</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.jp2</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
</tr>

<tr>
<td colspan="1">.exif</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1"> </td>
<td colspan="1">Nuxeo can also extract from embedded (IPTC and XMP also) or read from sidecar file and apply to asset metadata. Likewise Nuxeo can write embedded metadata into files when being saved or downloaded (however embedding relational metadata is not feasible - 100% portability is not a viable model).</td>
</tr>
<tr>
<td colspan="1">.heif</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
<td colspan="1">So far, encoding in this format is proprietary to Apple. Besides like camera RAW is seems a one-way conversions since data is lost when moving to raster format like TIFF etc.</td>
</tr>
<tr>
<td colspan="1">.cdr</td>
<td colspan="1">X</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
<td colspan="1"> </td>
<td colspan="1">Not with standard engines but possible via others - e.g. found this service https://cloudconvert.com/api/convert/cdr-to-pdf - OR just save another format to use as preview (can be automated).</td>
</tr>
<tr>
<td colspan="1">.cr2</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
<td colspan="1">Like all RAW formats one way conversion to raster</td>
</tr>
<tr>
<td colspan="1">.crw</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
<td colspan="1">Like all RAW formats one way conversion to raster</td>
</tr>
<tr>
<td colspan="1">.dwg</td>
<td colspan="1">X</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
<td colspan="1"> </td>
<td colspan="1">AutoDesk has free player which can be integrated and used for UI display. Or as noted above save off another format to use for the preview like stl, fbx or whatever.</td>
</tr>
<tr>
<td colspan="1">.emf</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
<td colspan="1">Like all RAW formats one way conversion to raster</td>
</tr>

<tr>
<td colspan="1">.iff</td>
<td colspan="1">X</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
<td colspan="1"> </td>
<td colspan="1">Not with standard engines but possible via others - OR just save another format to use as preview (can be automated). Engines like LeadTools can support it, if important enough for effort/cost.</td>
</tr>

<tr>
<td colspan="1">.mos</td>
<td colspan="1">X</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
<td colspan="1"> </td>
<td colspan="1">Not with standard engines but possible via others - e.g. found this service https://cloudconvert.com/mos-to-jpg - OR just save another format to use as preview (can be automated).</td>
</tr>
<tr>
<td colspan="1">.nef</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
<td colspan="1">Like all RAW formats one way conversion to raster</td>
</tr>

<tr>
<td colspan="1">.wmf</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
<td colspan="1">ImageMagick renders WMF files using the dimensions specified by the metafile header.</td>
</tr>

</tbody>
</table>
</div>

#### Image Resolution

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">
<th colspan="1">Store</th>
<th colspan="1">Preview</th>
<th colspan="1">Render</th>
<th colspan="1">Transcode</th>
<th colspan="1">Additional Notes</th>
</tr>
<tbody>
<tr>
<td colspan="1">72 RGB</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">150 (CMYK, 39L, RGB)</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">300 (CMYK, 39L, SWOP, Gracol)</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">600 (CMYK, 39L, SWOP, Gracol)</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1"> </td>
<td colspan="1"> </td>
<td colspan="1"> </td>
<td colspan="1"> </td>
<td colspan="1"> </td>
<td colspan="1"> </td>
</tr>
</tbody>
</table>
</div>

### Video Files

Most video supported via FFMPEG - format list here: https://www.ffmpeg.org/general.html - but cloud services like AWS transcoding can be used as well (pay as you go vs. dedicated compute resources).

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">
<th colspan="1">Metadata extraction</th>
<th colspan="1">Preview</th>
<th colspan="1">Encode / Transcode</th>
<th colspan="1">Mimetype recognition</th>
<th colspan="1">Additional Notes</th>
</tr>
<tbody>
<tr>
<td colspan="1">.aif</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1"> </td>
<td colspan="1">X</td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.avi</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1"> </td>
<td colspan="1">X</td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.fla</td>
<td colspan="1">X</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
<td colspan="1"> </td>
<td colspan="1">This is native flash editable - not an output from Flash - but can render from flv or swf.</td>
</tr>
<tr>
<td colspan="1">.flv</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1"> </td>
<td colspan="1">X</td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.hdv</td>
<td colspan="1">X</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
<td colspan="1"> </td>
<td colspan="1">Not supported in FFMPEG. May be other engines - or if you use existing transcode software.</td>
</tr>
<tr>
<td colspan="1">.hevc</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1"> </td>
<td colspan="1">X</td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.m4v</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1"> </td>
<td colspan="1">X</td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.mov</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1"> </td>
<td colspan="1">X</td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.mp4</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1"> </td>
<td colspan="1">X</td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.mpeg</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1"> </td>
<td colspan="1">X</td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.mpg</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1"> </td>
<td colspan="1">X</td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.ogg</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1"> </td>
<td colspan="1">X</td>
<td colspan="1"></td>
</tr>
<tr>
<td colspan="1">.ogv</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1"> </td>
<td colspan="1">X</td>
<td colspan="1">Part of OGG format, which is supported.</td>
</tr>
<tr>
<td colspan="1">.qt</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1"> </td>
<td colspan="1">X</td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.swf</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1"> </td>
<td colspan="1">X</td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.wmv</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1"> </td>
<td colspan="1">X</td>
<td colspan="1"> </td>
</tr>
</tbody>
</table>
</div>

#### Video Resolutions

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">
<th colspan="1">Metadata extraction</th>
<th colspan="1">Preview</th>
<th colspan="1">Encode / Transcode</th>
<th colspan="1">Mimetype recognition</th>
<th colspan="1">Additional Notes</th>
</tr>
<tbody>
<tr>
<td colspan="1"> 16:9</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1"> H.264 and H.265 codec</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1"> 1200kbps or higher bit rate</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">4K, 1080p, 720p, or 480p largest frame size possible(frame size should support 1080p or 720p resolutions)</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">original aspect ratio (ideally, no black bars)</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">de-interlaced or progressive scan</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
</tr>
</tbody>
</table>
</div>

### Audio Files

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">
<th colspan="1">Metadata extraction</th>
<th colspan="1">Preview</th>
<th colspan="1">Encode / Transcode</th>
<th colspan="1">Mimetype recognition</th>
<th colspan="1">Additional Notes</th>
</tr>
<tbody>
<tr>
<td colspan="1">Audio Files</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
<td colspan="1"> </td>
<td colspan="1"> </td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.mp3</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.wav</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
</tr>
</tbody>
</table>
</div>

### Artworks files

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">
<th colspan="1">Metadata extraction</th>
<th colspan="1">Preview</th>
<th colspan="1">Encode / Transcode</th>
<th colspan="1">Mimetype recognition</th>
<th colspan="1">Additional Notes</th>
</tr>
<tbody>
<tr>
<td colspan="1">.indd</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1">Requires INDD Server</td>
<td colspan="1"> </td>
<td colspan="1">Nuxeo can also manage complete INDD packages as compound documents via config. Converting from INDD requires InDesign server engine, but most forms simply save a PDF with the INDD file which Nuzeo uses as preview.</td>
</tr>
<tr>
<td colspan="1">3D</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
<td colspan="1"> </td>
<td colspan="1"> </td>
<td colspan="1">Responses based on Blender for rendering. If integrating other rendering systems then other formats may be directly supported.</td>
</tr>
<tr>
<td colspan="1">.3dm</td>
<td colspan="1">X</td>
<td colspan="1">Generate preview in advance</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
<td colspan="1">No direct import to Blender. Save in alternate format to use as preview (e.g. stl, fbx, obj, 3ds etc). Nuxeo can store native 3dm file but the saved rendition is used for the preview only. This could be scripted/automated. How-to save preview instructions from Rhino: http://www.studiorola.com/tutorials/miscellaneous/bringing-rhino-files-into-blender-3d/</td>
</tr>
<tr>
<td colspan="1">.3ds</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.aep</td>
<td colspan="1">X</td>
<td colspan="1">Generate preview in advance</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.dfx</td>
<td colspan="1">X</td>
<td colspan="1">Possible via Blender Plug-in</td>
<td colspan="1">Possible via Blender Plug-in</td>
<td colspan="1"> </td>
<td colspan="1">Both import and export plug-in to blender are available (Possible via Blender Plug-in)</td>
</tr>
<tr>
<td colspan="1">.dwg</td>
<td colspan="1">X</td>
<td colspan="1">Possible w/UI customization</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
<td colspan="1">AutoDesk has free player which can be integrated and used for UI display (like we use Blender for 3D). Or as noted above save off another format to use for the preview like stl, fbx or whatever.</td>
</tr>
<tr>
<td colspan="1">.fbx</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.obj</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.skp</td>
<td colspan="1">X</td>
<td colspan="1">Generate preview in advance</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
<td colspan="1">No direct import to Blender. Save in alternate format to use as preview (e.g. stl, fbx, obj, 3ds etc). Nuxeo can store native SKP file but the saved rendition is used for the preview only. This could be scripted/automated.</td>
</tr>
<tr>
<td colspan="1">Cinema4D</td>
<td colspan="1">X</td>
<td colspan="1">Generate preview in advance</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
<td colspan="1">C4D format is proprietary and only opens in Cinema4D. So as above can save in alternate format to use as preview (e.g. stl, fbx, obj, 3ds etc). Nuxeo can store native 3dm file but the saved rendition is used for the preview only. This could be scripted/automated.</td>
</tr>
</tbody>
</table>
</div>

## Office file support table

### Document files

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">
<th colspan="1">Metadata extraction</th>
<th colspan="1">Preview</th>
<th colspan="1">Encode / Transcode</th>
<th colspan="1">Mimetype recognition</th>
<th colspan="1">Additional Notes</th>
</tr>
<tbody>
<tr>
<td colspan="1">Documents/Reports</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
<td colspan="1"> </td>
<td colspan="1"> </td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.doc</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.docx</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.key</td>
<td colspan="1">X</td>
<td colspan="1">Possible w/customization</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
<td colspan="1">We have done it before using the embedded preview Jpegs as the page previews, but Apple is notorious for changing the format specs. It&#39;s a proprietary format so there is no published spec or comittment consistency. So can be done but may need periodic updates. If any of the media engines supported it we&#39;d certainly leverage them but they are in same position thanks to Apple. Or just save off a PDF for viewing in Nuxeo and let people download and edit the Key files as needed.</td>
</tr>
<tr>
<td colspan="1">.pdf</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.ppt</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.pptm</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.pptx</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.rtf</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.xls</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.xlsx</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
</tr>
</tbody>
</table>
</div>

### Container files

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">
<th colspan="1">Metadata extraction</th>
<th colspan="1">Preview</th>
<th colspan="1">Encode / Transcode</th>
<th colspan="1">Mimetype recognition</th>
<th colspan="1">Additional Notes</th>
</tr>
<tbody>
<tr>
<td colspan="1">.rar</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1"> </td>
<td colspan="1">Meaning we can extract and compress any files into these formats. Of course no preview (unless an image or video is provided to use as preview)</td>
</tr>
<tr>
<td colspan="1">.sit</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1"> </td>
<td colspan="1">Meaning we can extract and compress any files into these formats. Of course no preview (unless an image or video is provided to use as preview)</td>
</tr>
<tr>
<td colspan="1">.zip</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1"> </td>
<td colspan="1">Meaning we can extract and compress any files into these formats. Of course no preview (unless an image or video is provided to use as preview)</td>
</tr>
</tbody>
</table>
</div>

### System files

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">
<th colspan="1">Metadata extraction</th>
<th colspan="1">Preview</th>
<th colspan="1">Encode / Transcode</th>
<th colspan="1">Mimetype recognition</th>
<th colspan="1">Additional Notes</th>
</tr>
<tbody>
<tr>
<td colspan="1">.afm</td>
<td colspan="1">X</td>
<td colspan="1">n/a</td>
<td colspan="1">n/a</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.ds_store</td>
<td colspan="1">X</td>
<td colspan="1">n/a</td>
<td colspan="1">n/a</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.otf</td>
<td colspan="1">X</td>
<td colspan="1">n/a</td>
<td colspan="1">n/a</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.ttf</td>
<td colspan="1">X</td>
<td colspan="1">n/a</td>
<td colspan="1">n/a</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
</tr>
</tbody>
</table>
</div>

### Database Files

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">
<th colspan="1">Metadata extraction</th>
<th colspan="1">Preview</th>
<th colspan="1">Encode / Transcode</th>
<th colspan="1">Mimetype recognition</th>
<th colspan="1">Additional Notes</th>
</tr>
<tbody>
<tr>
<td colspan="1">.db</td>
<td colspan="1">X</td>
<td colspan="1">n/a</td>
<td colspan="1">n/a</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.mdb</td>
<td colspan="1">X</td>
<td colspan="1">n/a</td>
<td colspan="1">n/a</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
</tr>
</tbody>
</table>
</div>

### Mail Files

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">
<th colspan="1">Metadata extraction</th>
<th colspan="1">Preview</th>
<th colspan="1">Encode / Transcode</th>
<th colspan="1">Mimetype recognition</th>
<th colspan="1">Additional Notes</th>
</tr>
<tbody>
<tr>
<td colspan="1">.eml</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1">N/A</td>
<td colspan="1"> </td>
<td colspan="1">This format contains HTML which can be extracted and displayed.</td>
</tr>
<tr>
<td colspan="1">.msg</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1">N/A</td>
<td colspan="1"> </td>
<td colspan="1">This format contains HTML which can be extracted and displayed.</td>
</tr>
</tbody>
</table>
</div>

### Internet Files

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">
<th colspan="1">Metadata extraction</th>
<th colspan="1">Preview</th>
<th colspan="1">Encode / Transcode</th>
<th colspan="1">Mimetype recognition</th>
<th colspan="1">Additional Notes</th>
</tr>
<tbody>
<tr>
<td colspan="1">.css</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1">N/A</td>
<td colspan="1"> </td>
<td colspan="1">Web files can be managed and code viewed but that&#39;s different than rendering a web page based on all these web-code files. Direct preview of web code has been done but requires UI customization depending on how you want these pages to display. Nuxeo is not a WebCMS so need to define exact requirements for previewing web code files in the DAM (e.g. edit, review &amp; approve...). The annotation environment does support commenting/markup on HTML/web code.</td>
</tr>
<tr>
<td colspan="1">.htm</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1">N/A</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.html</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1">N/A</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.js</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1">N/A</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.mht</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1">N/A</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.url</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1">N/A</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.xhtml</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1">N/A</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
</tr>
</tbody>
</table>
</div>

### Temporary and Backup Files

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">
<th colspan="1">Metadata extraction</th>
<th colspan="1">Preview</th>
<th colspan="1">Encode / Transcode</th>
<th colspan="1">Mimetype recognition</th>
<th colspan="1">Additional Notes</th>
</tr>
<tbody>
<tr>
<td colspan="1">.old</td>
<td colspan="1">X</td>
<td colspan="1">n/a</td>
<td colspan="1">n/a</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.tmp</td>
<td colspan="1">X</td>
<td colspan="1">n/a</td>
<td colspan="1">n/a</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
</tr>
</tbody>
</table>
</div>


### Program Files

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">
<th colspan="1">Metadata extraction</th>
<th colspan="1">Preview</th>
<th colspan="1">Encode / Transcode</th>
<th colspan="1">Mimetype recognition</th>
<th colspan="1">Additional Notes</th>
</tr>
<tbody>
<tr>
<td colspan="1">.exe</td>
<td colspan="1">X</td>
<td colspan="1">n/a</td>
<td colspan="1">n/a</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.com</td>
<td colspan="1">X</td>
<td colspan="1">n/a</td>
<td colspan="1">n/a</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.scr</td>
<td colspan="1">X</td>
<td colspan="1">n/a</td>
<td colspan="1">n/a</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.lnk</td>
<td colspan="1">X</td>
<td colspan="1">n/a</td>
<td colspan="1">n/a</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
</tr>
</tr>
</tbody>
</table>
</div>

### Text Files

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">
<th colspan="1">Metadata extraction</th>
<th colspan="1">Preview</th>
<th colspan="1">Encode / Transcode</th>
<th colspan="1">Mimetype recognition</th>
<th colspan="1">Additional Notes</th>
</tr>
<tbody>
<tr>
<td colspan="1">.txt</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1">X</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
</tr>
</tbody>
</table>
</div>

### Software Development Files

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">
<th colspan="1">Metadata extraction</th>
<th colspan="1">Preview</th>
<th colspan="1">Encode / Transcode</th>
<th colspan="1">Mimetype recognition</th>
<th colspan="1">Additional Notes</th>
</tr>
<tbody>
<tr>
<td colspan="1">.swd</td>
<td colspan="1">X</td>
<td colspan="1">n/a</td>
<td colspan="1">n/a</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.src</td>
<td colspan="1">X</td>
<td colspan="1">n/a</td>
<td colspan="1">n/a</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.tt</td>
<td colspan="1">X</td>
<td colspan="1">n/a</td>
<td colspan="1">n/a</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
</tr>
</tbody>
</table>
</div>