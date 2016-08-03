---
title: URLs for Files
labels:
    - url
    - url-codec-component
    - blob-manager-component
    - multiexcerpt
confluence:
    ajs-parent-page-id: '7209351'
    ajs-parent-page-title: Navigation URLs
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: URLs+for+Files
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/URLs+for+Files'
    page_id: '3343546'
    shortlink: ugQz
    shortlink_source: 'https://doc.nuxeo.com/x/ugQz'
    source_link: /display/NXDOC/URLs+for+Files
history:
    - 
        author: Solen Guitter
        date: '2015-12-22 11:12'
        message: ''
        version: '26'
    - 
        author: Solen Guitter
        date: '2015-10-12 14:34'
        message: ''
        version: '25'
    - 
        author: Anahide Tchertchian
        date: '2014-12-03 14:19'
        message: 'NXDOC-228: move content about file URLs withn JF context'
        version: '24'
    - 
        author: Solen Guitter
        date: '2014-01-23 18:27'
        message: Formatting
        version: '23'
    - 
        author: Solen Guitter
        date: '2013-09-04 18:57'
        message: ''
        version: '22'
    - 
        author: Solen Guitter
        date: '2013-07-31 12:23'
        message: Added related topics
        version: '21'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 17:36'
        message: Migrated to Confluence 4.0
        version: '20'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 17:36'
        message: ''
        version: '19'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 17:35'
        message: ''
        version: '18'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 14:43'
        message: ''
        version: '17'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 10:27'
        message: ''
        version: '16'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 10:24'
        message: ''
        version: '15'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 10:14'
        message: ''
        version: '14'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 09:14'
        message: ''
        version: '13'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 09:10'
        message: ''
        version: '12'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 08:55'
        message: ''
        version: '11'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 08:51'
        message: ''
        version: '10'
    - 
        author: Stéfane Fermigier
        date: '2010-07-21 20:11'
        message: ''
        version: '9'
    - 
        author: Stéfane Fermigier
        date: '2010-07-21 20:06'
        message: ''
        version: '8'
    - 
        author: Stéfane Fermigier
        date: '2010-07-21 19:21'
        message: ''
        version: '7'
    - 
        author: Stéfane Fermigier
        date: '2010-07-21 19:01'
        message: ''
        version: '6'
    - 
        author: Stéfane Fermigier
        date: '2010-07-21 18:39'
        message: ''
        version: '5'
    - 
        author: Stéfane Fermigier
        date: '2010-07-21 18:23'
        message: ''
        version: '4'
    - 
        author: Stéfane Fermigier
        date: '2010-07-21 18:18'
        message: ''
        version: '3'
    - 
        author: Stéfane Fermigier
        date: '2010-07-21 18:12'
        message: ''
        version: '2'
    - 
        author: Stéfane Fermigier
        date: '2010-07-21 18:00'
        message: ''
        version: '1'

---
## File URLs within JSF Context Only

{{! multiexcerpt name='download_url_pattern'}}

The default URL patterns for downloading files from within the JSF environment are:

*   <pre>http://{server}:{port}/nuxeo/nxfile/{repository}/{uuid}/blobholder:{blobIndex}/{fileName}</pre>

*   <pre>http://{server}:{port}/nuxeo/nxfile/{repository}/{uuid}/{propertyXPath}/{fileName}</pre>

<div>Where :</div>

<div>

*   `nxfile` is the download servlet.
    Note that `nxbigfile`&nbsp;is also accepted for compatibility with older versions.
*   `repository`&nbsp;is the identifier of the target repository.
*   `uuid`&nbsp;is the uuid of the target document.
*   `blobIndex`&nbsp;is the index of the Blob inside the&nbsp;`BlobHolder`&nbsp;adapter corresponding to the target Document Type,starting at 0: `blobholder:0`,&nbsp;`blobholder:1`.
*   `propertyXPath`&nbsp;is the xPath of the target Blob property inside the target document. For instance: `file:content` ,&nbsp; `files:files/0/file`.
*   `fileName`&nbsp;is the name of the file as it should be downloaded.
    This information is optional and is actually not used to do the resolution.
*   `?inline=true` is an optional parameter to force the download to be made with&nbsp;`Content-Disposition: inline`. This means that the content will be displayed in the browser (if possible) instead of being downloaded.

Here are some examples:

*   The main file of the document:
    `<span class="nolink"><span class="nolink"><span class="nolink"><span class="nolink">http://127.0.0.1:8080/nuxeo/nxfile/default/776c8640-7f19-4cf3-b4ff-546ea1d3d496</span></span></span></span>`
*   The main file of the document with a different name:
    `<span class="nolink"><span class="nolink"><span class="nolink"><span class="nolink">http://127.0.0.1:8080/nuxeo/nxfile/default/776c8640-7f19-4cf3-b4ff-546ea1d3d496/blobholder:0/mydocument.pdf</span></span></span></span>`
*   An attached file of the document:
    `<span class="nolink"><span class="nolink"><span class="nolink"><span class="nolink">http://127.0.0.1:8080/nuxeo/nxfile/default/776c8640-7f19-4cf3-b4ff-546ea1d3d496/blobholder:1</span></span></span></span>`
*   A file stored in the given property:
    `<span class="nolink"><span class="nolink"><span class="nolink"><span class="nolink">http://127.0.0.1:8080/nuxeo/nxfile/default/776c8640-7f19-4cf3-b4ff-546ea1d3d496/myschema:content</span></span></span></span>`
*   A file stored in the given complex property, downloaded with a specific filename:
    `<span class="nolink"><span class="nolink"><span class="nolink"><span class="nolink">http://127.0.0.1:8080/nuxeo/nxfile/default/776c8640-7f19-4cf3-b4ff-546ea1d3d496/files:files/0/file/myimage.png</span></span></span></span>
    `
*   The main file of the document inside the browser instead of being downloaded:&nbsp;
    `<span class="nolink"><span class="nolink"><span class="nolink"><span class="nolink">http://127.0.0.1:8080/nuxeo/nxfile/default/776c8640-7f19-4cf3-b4ff-546ea1d3d496?inline=true</span></span></span></span>`

</div>

For Picture document type, a similar system is available to be able to get the attachments depending on the view name:

*   `http://{server}:{port}/nuxeo/nxpicsfile/{repository}/{uuid}/{viewName}:content/{fileName}`

where, by default,&nbsp;`viewName`&nbsp;can be Original, OriginalJpeg, Medium, Thumbnail.

{{! /multiexcerpt}}

## Producing File URLs from JSF Templates

For a single file, in schema "file", where blob field is named "file" and file name field is named "filename":

```

```

For a list of files, in schema "files", where list name is "files" and in each item, blob field is named "file" and file name field is named "filename":

```

```

This gives you get URLs of the form:

```
http://localhost:8080/nuxeo/nxfile/default/8f5aca13-e9d9-4b7b-a1d9-a1dcd74cc709/blobholder:0/mainfile.jpg
http://localhost:8080/nuxeo/nxfile/default/47ad14f2-c7a6-4a3f-8e4b-6c2cf1458f5a/files:files/0/file/firstfile.jpg

```

Namespaces:

```
xmlns:t="http://myfaces.apache.org/tomahawk"
xmlns:nxh="http://nuxeo.org/nxweb/html"
xmlns:nxl="http://nuxeo.org/nxforms/layout"
xmlns:nxu="http://nuxeo.org/nxweb/util"

```

&nbsp;

* * *