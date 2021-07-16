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
Nuxeo Platform supports a large number of file formats: Office documents, pictures, videos etc. This page provides a non-exhaustive list of the supported file format, and how they are, processed within Nuxeo Platform.
{{! /excerpt}}

## Introduction

The file support table is based on the standard set of engines typically deployed with Nuxeo Platform. We have noted where other engines could be used. The standard engines are ImageMagick, FFMPEG, OpenOffice and accessing various embedded previews (referenced in the [Installing and Setting Up Related Software]({{page version='' space='nxdoc' page='installing-and-setting-up-related-software'}}) page).

In case there are format limitations:
- It is always possible to manage the native files and supply Nuxeo a readable preview (e.g. export from native app before upload).
- Nuxeo can integrate [new converters]({{page version='' space='nxdoc' page='how-to-contribute-a-command-line-converter'}}) and generate a new format which can be correctly interpreted.

{{#> callout type='info' heading='Nuxeo University'}}
Watch the related courses on Nuxeo University: [DAM Concepts](https://university.nuxeo.com/learn/course/internal/view/elearning/97/NuxeoDigitalAssetManagementDAMConcepts)
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/UNIVERSITY/university_dam.png
    name: university_dam.png
    addins#screenshot#up_to_date
--}}
![university_dam.png](nx_asset://ed2467b9-4529-4cca-9843-0b46f8cd3d62 ?w=650,border=true)
{{/callout}}

## File Support Table

The support table contains the following columns:
- **Metadata extraction**: Nuxeo Platform can capture basic file information. As an example, Nuxeo Platform can extract the dimensions, format, color profile, bit depth by channel, EXIF / IPTC information from picture documents.
- **Preview**: Nuxeo Web UI can display a preview of the document without having to download it.
- **Encode / Transcode**: Nuxeo Platform can create different conversions / renditions of the file.
- **Mimetype recognition**: Nuxeo Platform can associate a specific file extension to a particular document type.
- **NEV Support**: The file can be previewed and annotated thanks to the [Nuxeo Enhanced Viewer]({{page version='' space='nxdoc' page='nuxeo-enhanced-viewer'}})

You can read the following extension point to understand the default DAM contributions, and extend it when needed:
- [Extension point for supported file mimetypes](https://explorer.nuxeo.com/nuxeo/site/distribution/latest/viewExtensionPoint/org.nuxeo.ecm.platform.mimetype.service.MimetypeRegistryService--mimetype)
- [Extension point related to the fileManager, and map file extensions with document types](https://explorer.nuxeo.com/nuxeo/site/distribution/latest/viewExtensionPoint/org.nuxeo.ecm.platform.filemanager.service.FileManagerService--plugins)

You can use this URL to access sample files: https://filesamples.com/.

### Picture Files

Most picture formats are supported via [ImageMagick](https://imagemagick.org/index.php).

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">
<th colspan="1">Metadata Extraction</th>
<th colspan="1">Preview</th>
<th colspan="1">Encode / Transcode</th>
<th colspan="1">Mimetype Recognition</th>
<th colspan="1">NEV Support</th>
<th colspan="1">Additional Notes</th>
</tr>
<tbody>
<tr>
<td colspan="1">.jpeg</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.jpg</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.png</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.ps</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">Image saved in the PostScript </td>
</tr>
<tr>
<td colspan="1">.psd</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">Photoshop file</td>
</tr>
<tr>
<td colspan="1">.raw</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1"></td>
</tr>
<tr>
<td colspan="1">.svg</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1"> </td>
</tr>

<tr>
<td colspan="1">.xmp</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">Metadata file used by Adobe programs such as Photoshop and Bridge</td>
</tr>
<tr>
<td colspan="1">.tif</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.tiff</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.eps</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">Graphics file saved in the Encapsulated PostScript (EPS) file format</td>
</tr>
<tr>
<td colspan="1">.gif</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.ai</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">Not tested</td>
<td colspan="1">Drawing created with Adobe Illustrator</td>
</tr>
<tr>
<td colspan="1">.bmp</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.jp2</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.emf</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">Not tested</td>
<td colspan="1">Vector graphic saved in the Enhanced Windows Metafile (EMF) format</td>
</tr>
<tr>
<td colspan="1">.cr2</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">Not tested</td>
<td colspan="1">Raw camera image created by various Canon digital cameras</td>
</tr>
<tr>
<td colspan="1">.crw</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">Not tested</td>
<td colspan="1">Uncompressed and unprocessed Camera RAW image file from a Canon digital camera</td>
</tr>
<tr>
<td colspan="1">.nef</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">Not tested</td>
<td colspan="1">Raw photo captured by a Nikon digital camera</td>
</tr>
<tr>
<td colspan="1">.dng</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">Not tested</td>
<td colspan="1">RAW camera image saved in the Digital Negative (DNG) format</td>
</tr>
<tr>
<td colspan="1">.heif</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
<td colspan="1"> </td>
<td colspan="1"> </td>
<td colspan="1">Not tested</td>
<td colspan="1">So far, encoding in this format is proprietary to Apple. Besides like camera RAW is seems a one-way conversions since data is lost when moving to raster format like TIFF etc.</td>
</tr>
<tr>
<td colspan="1">.cdr</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
<td colspan="1"> </td>
<td colspan="1"> </td>
<td colspan="1">Not tested</td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.dwg</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
<td colspan="1"> </td>
<td colspan="1"> </td>
<td colspan="1">Not tested</td>
<td colspan="1">AutoDesk has free player which can be integrated and used for UI display. Or as noted above save off another format to use for the preview like stl, fbx etc.</td>
</tr>
<tr>
<td colspan="1">.iff</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
<td colspan="1"> </td>
<td colspan="1"> </td>
<td colspan="1">Not tested</td>
<td colspan="1">Engines like LeadTools can support it</td>
</tr>

<tr>
<td colspan="1">.mos</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
<td colspan="1"> </td>
<td colspan="1"> </td>
<td colspan="1">Not tested</td>
<td colspan="1">Uncompressed digital images</td>
</tr>
<tr>
<td colspan="1">.wmf</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
<td colspan="1"> </td>
<td colspan="1"> </td>
<td colspan="1">Not tested</td>
<td colspan="1">ImageMagick renders WMF files using the dimensions specified by the metafile header.</td>
</tr>
<tr>
<td colspan="1">.tga</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
<td colspan="1"> </td>
<td colspan="1"> </td>
<td colspan="1">Not tested</td>
<td colspan="1"> </td>
</tr>
</tbody>
</table>
</div>

#### Image Profiles / Resolutions

The following picture profiles can be correctly interpreted by Nuxeo Platform (Metadata extraction, preview, encode / transcode and mimetype recognition):

- 72 RGB DPI
- 150 DPI (CMYK, 39L, RGB)
- 300 DPI (CMYK, 39L, SWOP, Gracol)
- 600 DPI (CMYK, 39L, SWOP, Gracol)

### Video Files

Most video formats are supported via [FFMPEG](https://www.ffmpeg.org/general.html).

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">
<th colspan="1">Metadata Extraction</th>
<th colspan="1">Preview</th>
<th colspan="1">Encode / Transcode</th>
<th colspan="1">Mimetype Recognition</th>
<th colspan="1">NEV Support</th>
<th colspan="1">Additional Notes</th>
</tr>
<tbody>
<tr>
<td colspan="1">.avi</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.flv</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.m4v</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.mov</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.mp4</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.mpeg</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.mpg</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.ogg</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">Not tested</td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.ogv</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">Not tested</td>
<td colspan="1">Part of OGG format, which is supported.</td>
</tr>
<tr>
<td colspan="1">.wmv</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">Not tested</td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.fla</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
<td colspan="1"> </td>
<td colspan="1"> </td>
<td colspan="1">Not tested</td>
<td colspan="1">This is native flash editable - not an output from Flash - but can render from flv or swf.</td>
</tr>
<tr>
<td colspan="1">.hdv</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
<td colspan="1"> </td>
<td colspan="1"> </td>
<td colspan="1">Not tested</td>
<td colspan="1">Recording of high-definition video on DV cassette tape. Not supported in FFMPEG. May be other engines - or if you use existing transcode software.</td>
</tr>
<tr>
<td colspan="1">.hevc</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
<td colspan="1"> </td>
<td colspan="1"> </td>
<td colspan="1">Not tested</td>
<td colspan="1">High Efficiency Video Coding, also known as H.265 and MPEG-H Part 2, is a video compression standard designed as part of the MPEG-H project as a successor to the widely used Advanced Video Coding</td>
</tr>
<tr>
<td colspan="1">.qt</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
<td colspan="1"> </td>
<td colspan="1"> </td>
<td colspan="1">Not tested</td>
<td colspan="1">QuickTime files</td>
</tr>
<tr>
<td colspan="1">.swf</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
<td colspan="1"> </td>
<td colspan="1"> </td>
<td colspan="1">Not tested</td>
<td colspan="1">SWF is an Adobe Flash file format used for multimedia, vector graphics and ActionScript</td>
</tr>
</tbody>
</table>
</div>

#### Video Profiles / Resolutions

The following video profiles can be correctly interpreted by Nuxeo Platform:

- 16:9
- 1200kbps or higher bit rate
- 4K, 1080p, 720p, or 480p largest frame size possible(frame size should support 1080p or 720p resolutions)
- original aspect ratio (ideally, no black bars)
- de-interlaced or progressive scan

### Audio Files

Most audio formats are supported via [FFMPEG](https://www.ffmpeg.org/general.html).

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">
<th colspan="1">Metadata Extraction</th>
<th colspan="1">Preview</th>
<th colspan="1">Encode / Transcode</th>
<th colspan="1">Mimetype Recognition</th>
<th colspan="1">NEV Support</th>
<th colspan="1">Additional Notes</th>
</tr>
<tbody>
<tr>
<td colspan="1">.mp3</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.mpga</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">Not tested</td>
<td colspan="1">Compressed audio file encoded with MPEG-1 Layer 3 compression</td>
</tr>
<tr>
<td colspan="1">.mp2</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">Not tested</td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.m3u</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">Not tested</td>
<td colspan="1">Media playlist file</td>
</tr>
<tr>
<td colspan="1">.wav</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.aif</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">Not tested</td>
<td colspan="1">Standard data format for Audio Interchange File format</td>
</tr>
<tr>
<td colspan="1">.aifc</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">Not tested</td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.aiff</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">Not tested</td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.ogg</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">Not tested</td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.oga</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">Not tested</td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.spx</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">Not tested</td>
<td colspan="1">CAM (computer-aided manufacturing) file that contains stitching instructions for creating embroideries with a Pfaff sewing machine</td>
</tr>
<tr>
<td colspan="1">.flac</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">Not tested</td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.ogm</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">Not tested</td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.ogx</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">Not tested</td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.aac</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">Not tested</td>
<td colspan="1"> </td>
</tr>
</tbody>
</table>
</div>

### Artworks Files / 3D Format

Nuxeo offers multiple approaches to 3D support. The [Nuxeo 3D addon]({{page version='' space='nxdoc' page='nuxeo-3d'}}) is available as well as an alternate approach that relies on a viewer that displays GLB files that serve as previews for any native formats. The Nuxeo 3D addon uses Blender as the render engine and three.js for the embedded viewer in Nuxeo Web UI. All formats are rendered into GTLF for display in the viewer and can natively read any of the  formats indicated below. Formats that can’t be natively rendered are supported using supplied GLB files that serve as the preview.

{{#> callout type='info' heading='Compound Asset Support'}}
Compound Asset Support refers to supporting a set of files as a single asset object while preserving the subcomponents as individual assets and recording the relationships among them all. This is especially important most 3D formats require a set of files.
{{/callout}}

{{#> callout type='warning' heading='NEV Support'}}
The NEV Support is not provided for 3D files for now.
{{/callout}}

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">
<th colspan="1">Metadata Extraction</th>
<th colspan="1">Preview</th>
<th colspan="1">Compound Relationship Support</th>
<th colspan="1">Encode / Transcode</th>
<th colspan="1">Mimetype Recognition</th>
<th colspan="1">Additional Notes</th>
</tr>
<tbody>
<tr>
<td colspan="1">.dae</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">Collada format</td>
</tr>
<tr>
<td colspan="1">.3ds</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">3D Studio format</td>
</tr>
<tr>
<td colspan="1">.fbx</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">FBX format</td>
</tr>
<tr>
<td colspan="1">.ply</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">Stanford format</td>
</tr>
<tr>
<td colspan="1">.obj</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">Wavefront format</td>
</tr>
<tr>
<td colspan="1">.x3d</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">X3D Extensible 3D format</td>
</tr>
<tr>
<td colspan="1">.stl</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.blend</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1"> </td>
<td colspan="1">Blender format. 3D Plug-in is Blender-based so naturally supported</td>
</tr>
<tr>
<td colspan="1">.bip</td>
<td colspan="1">with a GLB</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">Conversion requires proprietary engine</td>
<td colspan="1"> </td>
<td colspan="1">Keyshot format</td>
</tr>
<tr>
<td colspan="1">.ksp</td>
<td colspan="1">with a GLB</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">Conversion requires proprietary engine</td>
<td colspan="1"> </td>
<td colspan="1">Keyshot package format</td>
</tr>
<tr>
<td colspan="1">.mb</td>
<td colspan="1">with a GLB</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">Conversion requires proprietary engine</td>
<td colspan="1"> </td>
<td colspan="1">Maya format</td>
</tr>
<tr>
<td colspan="1">.ixo</td>
<td colspan="1">with a GLB</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">Conversion requires proprietary engine</td>
<td colspan="1"> </td>
<td colspan="1">Modo format. Note extant integration with Modo (described below)</td>
</tr>
<tr>
<td colspan="1">.glTF</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">GL Transmission format. 3D plug in renders GLTF format to display in UI. Stand-along viewer also uses GLB previews. Usually the common transmission format across company (gltf/glb). Conversions also allowed though ketchFab support</td>
</tr>
<tr>
<td colspan="1">.abc</td>
<td colspan="1">with a GLB</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">Via SketchFab support</td>
<td colspan="1"> </td>
<td colspan="1">Alembic format. 3D plug in renders GLTF format to display in UI. Stand-along viewer also uses GLB previews. Usually the common transmission format across company (gltf/glb)</td>
</tr>
<tr>
<td colspan="1">.dxf</td>
<td colspan="1">with a GLB</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">Via SketchFab support</td>
<td colspan="1"> </td>
<td colspan="1">Autodesk format</td>
</tr>
<tr>
<td colspan="1">.3dm</td>
<td colspan="1">with a GLB</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">Conversion requires proprietary engine</td>
<td colspan="1"> </td>
<td colspan="1">McNeel Rhino format</td>
</tr>
<tr>
<td colspan="1">.bw</td>
<td colspan="1">with a GLB</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">Conversion requires proprietary engine</td>
<td colspan="1"> </td>
<td colspan="1">Vstitcher format</td>
</tr>
<tr>
<td colspan="1">.zprj</td>
<td colspan="1">with a GLB</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">Conversion requires proprietary engine</td>
<td colspan="1"> </td>
<td colspan="1">Clo format</td>
</tr>
<tr>
<td colspan="1">.u3ma</td>
<td colspan="1">with a GLB</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">Conversion requires proprietary engine</td>
<td colspan="1"> </td>
<td colspan="1">Browzwear fabric format. Previews are done by default since they are supplied as image files and rendering not required</td>
</tr>
<tr>
<td colspan="1">.zfab</td>
<td colspan="1">with a GLB</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">Conversion requires proprietary engine</td>
<td colspan="1"> </td>
<td colspan="1">Clo3d fabric format</td>
</tr>
<tr>
<td colspan="1">.cway</td>
<td colspan="1">with a GLB</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">Conversion requires proprietary engine</td>
<td colspan="1"> </td>
<td colspan="1">Colorway format</td>
</tr>
<tr>
<td colspan="1">.dci</td>
<td colspan="1">with a GLB</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">Conversion requires proprietary engine</td>
<td colspan="1"> </td>
<td colspan="1">DCI (Deep Color Image) format</td>
</tr>
<tr>
<td colspan="1">.iges</td>
<td colspan="1">with a GLB</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">Conversion requires proprietary engine</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.step</td>
<td colspan="1">with a GLB</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">Conversion requires proprietary engine</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.indd</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">Also offer [Nuxeo Adobe CC Connector]({{page version='' space='nxdoc' page='nuxeo-for-adobe-cc'}}) and URL-based placed object linking</td>
</tr>
<tr>
<td colspan="1">.idml</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1"> </td>
<td colspan="1">Also offer [Nuxeo Adobe CC Connector]({{page version='' space='nxdoc' page='nuxeo-for-adobe-cc'}}) and URL-based placed object linking</td>
</tr>
<tr>
<td colspan="1">.prt</td>
<td colspan="1">with a GLB</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">Conversion requires proprietary engine</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.sldprt</td>
<td colspan="1">with a GLB</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">Conversion requires proprietary engine</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.f3d</td>
<td colspan="1">with a GLB</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">Conversion requires proprietary engine</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.axf</td>
<td colspan="1">with a GLB</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">Conversion requires proprietary engine</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.c4d</td>
<td colspan="1">with a GLB</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">Conversion requires proprietary engine</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
</tr>
</tbody>
</table>
</div>

## Office File Support Table

### Document Files

Most document file formats are supported via [LibreOffice](https://www.libreoffice.org/).

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">
<th colspan="1">Preview</th>
<th colspan="1">Encode / Transcode</th>
<th colspan="1">Mimetype Recognition</th>
<th colspan="1">NEV Support</th>
<th colspan="1">Additional Notes</th>
</tr>
<tbody>
<tr>
<td colspan="1">.doc</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.docx</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.odt</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.rtf</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.pdf</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.ppt</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.pptx</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.xls</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.xlsx</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.txt</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.key</td>
<td colspan="1"> </td>
<td colspan="1"> </td>
<td colspan="1">&#10003;</td>
<td colspan="1">Not tested</td>
<td colspan="1">Apple Keynote files (for presentations)</td>
</tr>
</tbody>
</table>
</div>

### Container Files

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">
<th colspan="1">Preview</th>
<th colspan="1">Mimetype Recognition</th>
<th colspan="1">NEV Support</th>
<th colspan="1">Additional Notes</th>
</tr>
<tbody>
<tr>
<td colspan="1">.rar</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">Not tested</td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.sit</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">Not tested</td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.zip</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">Not tested</td>
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
<th colspan="1">Mimetype Recognition</th>
<th colspan="1">NEV Support</th>
<th colspan="1">Additional Notes</th>
</tr>
<tbody>
<tr>
<td colspan="1">.eml</td>
<td colspan="1">Only with the [Nuxeo Outlook Connector]({{page version='' space='nxdoc' page='nuxeo-outlook-connector'}})</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">This format contains HTML which can be extracted and displayed.</td>
</tr>
<tr>
<td colspan="1">.msg</td>
<td colspan="1">Only with the [Nuxeo Outlook Connector]({{page version='' space='nxdoc' page='nuxeo-outlook-connector'}})</td>
<td colspan="1">Only with the [Nuxeo Outlook Connector]({{page version='' space='nxdoc' page='nuxeo-outlook-connector'}})</td>
<td colspan="1">&#10003;</td>
<td colspan="1"> </td>
<td colspan="1">&#10003;</td>
<td colspan="1">This format contains HTML which can be extracted and displayed.</td>
</tr>
</tbody>
</table>
</div>

### Internet Files

Web files can be managed and code viewed but that&#39;s different than rendering a web page based on all these web-code files. Direct preview of web code has been done but requires UI customization depending on how you want these pages to display.

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">
<th colspan="1">Preview</th>
<th colspan="1">Mimetype Recognition</th>
<th colspan="1">NEV Support</th>
<th colspan="1">Additional Notes</th>
</tr>
<tbody>
<tr>
<td colspan="1">.css</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.htm</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.html</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.xml</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1"> </td>
</tr>
<tr>
<td colspan="1">.js</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1">&#10003;</td>
<td colspan="1"> </td>
</tr>
</tbody>
</table>
</div>
