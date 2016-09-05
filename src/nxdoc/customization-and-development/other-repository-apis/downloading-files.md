---
title: Downloading Files
labels:
    - url
confluence:
    ajs-parent-page-id: '17334379'
    ajs-parent-page-title: Other Repository APIs
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Downloading+Files
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/Downloading+Files'
    page_id: '17334283'
    shortlink: C4AIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/C4AIAQ'
    source_link: /display/NXDOC58/Downloading+Files
history:
    - 
        author: Solen Guitter
        date: '2016-08-31 15:32'
        message: ''
        version: '6'
    - 
        author: Solen Guitter
        date: '2014-02-13 09:50'
        message: Added missing OriginalJpeg format
        version: '5'
    - 
        author: Solen Guitter
        date: '2013-10-21 14:17'
        message: ''
        version: '4'
    - 
        author: Alain Escaffre
        date: '2013-10-18 01:04'
        message: ''
        version: '3'
    - 
        author: Solen Guitter
        date: '2013-10-17 11:38'
        message: ''
        version: '2'
    - 
        author: Alain Escaffre
        date: '2013-10-16 17:08'
        message: ''
        version: '1'

---
{{! excerpt}}

This page provide the logic for building the correct URL for downloading a file stored on a Nuxeo Document, provided we know the document ID.

{{! /excerpt}}

&nbsp;

You can use the&nbsp;`nxbigfile`&nbsp;pattern that is executed by a standalone servlet:

*   <pre>http://127.0.0.1:8080/nuxeo/nxbigfile/default/776c8640-7f19-4cf3-b4ff-546ea1d3d496/file:content/rm.pdf</pre>

*   <pre>http://127.0.0.1:8080/nuxeo/nxbigfile/default/776c8640-7f19-4cf3-b4ff-546ea1d3d496/blobholder:0/rm.pdf</pre>

*   <pre>http://127.0.0.1:8080/nuxeo/nxbigfile/default/776c8640-7f19-4cf3-b4ff-546ea1d3d496/files:files/0/file/SC-DM-DAM.png</pre>

*   <pre>http://127.0.0.1:8080/nuxeo/nxbigfile/default/776c8640-7f19-4cf3-b4ff-546ea1d3d496/blobholder:1/SC-DM-DAM.png</pre>

## Within JSF Context Only

The default URL pattern for downloading files from within the JSF environment is:

*   <pre>http://{server}:{port}/nuxeo/nxfile/{repository}/{uuid}/blobholder:{blobIndex}/{fileName}</pre>

*   <pre>http://{server}:{port}/nuxeo/nxfile/{repository}/{uuid}/{propertyXPath}/{fileName}</pre>

<div>Where :</div>

<div>

*   `repository`&nbsp;is the identifier of the target repository,
*   `uuid`&nbsp;is the uuid of the target document,
*   `blobIndex`&nbsp;is the index of the Blob inside the&nbsp;`BlobHolder`&nbsp;adapter corresponding to the target Document Type (starting at 0),
*   `propertyXPath`&nbsp;is the xPath of the target Blob property inside the target document,
*   `fileName`&nbsp;is the name of the file as it should be downloaded (this information is actually not used to do the resolution).

Here are some examples :

*   <pre>http://127.0.0.1:8080/nuxeo/nxfile/default/776c8640-7f19-4cf3-b4ff-546ea1d3d496/file:content/rm.pdf</pre>

*   <pre>http://127.0.0.1:8080/nuxeo/nxfile/default/776c8640-7f19-4cf3-b4ff-546ea1d3d496/blobholder:0/rm.pdf</pre>

*   <pre>http://127.0.0.1:8080/nuxeo/nxfile/default/776c8640-7f19-4cf3-b4ff-546ea1d3d496/files:files/0/file/SC-DM-DAM.png</pre>

*   <pre>http://127.0.0.1:8080/nuxeo/nxfile/default/776c8640-7f19-4cf3-b4ff-546ea1d3d496/blobholder:1/SC-DM-DAM.png</pre>

</div>

For Picture document type, a similar system is available to be able to get the attachments depending on the view name:

*   `http://{server}:{port}/nuxeo/nxpicsfile/{repository}/{uuid}/{viewName}:content/{fileName}`

where, by default,&nbsp;`viewName`&nbsp;can be Original, OriginalJpeg, Medium, Thumbnail.

&nbsp;