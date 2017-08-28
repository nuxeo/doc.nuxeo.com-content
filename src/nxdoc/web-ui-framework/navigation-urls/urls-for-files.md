---
title: URLs for Files
review:
    comment: ''
    date: ''
    status: ok
labels:
    - url
confluence:
    ajs-parent-page-id: '22380693'
    ajs-parent-page-title: Navigation URLs
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: URLs+for+Files
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC60/URLs+for+Files'
    page_id: '22380680'
    shortlink: iIBVAQ
    shortlink_source: 'https://doc.nuxeo.com/x/iIBVAQ'
    source_link: /display/NXDOC60/URLs+for+Files
history:
    -
        author: Solen Guitter
        date: '2016-08-31 15:51'
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

The default URL pattern for downloading files from within the JSF environment is:

*   `http://NUXEO_SERVER/nuxeo/nxfile/{repository}/{uuid}/blobholder:{blobIndex}/{fileName}`

*   `http://NUXEO_SERVER/nuxeo/nxfile/{repository}/{uuid}/{propertyXPath}/{fileName}`


- `repository`&nbsp;is the identifier of the target repository,
- `uuid`&nbsp;is the uuid of the target document,
- `blobIndex`&nbsp;is the index of the Blob inside the&nbsp;`BlobHolder`&nbsp;adapter corresponding to the target Document Type (starting at 0),
- `propertyXPath`&nbsp;is the xPath of the target Blob property inside the target document,
- `fileName`&nbsp;is the name of the file as it should be downloaded (this information is actually not used to do the resolution).

Here are some examples :

- `http://NUXEO_SERVER/nuxeo/nxfile/default/776c8640-7f19-4cf3-b4ff-546ea1d3d496/file:content/rm.pdf`

- `http://NUXEO_SERVER/nuxeo/nxfile/default/776c8640-7f19-4cf3-b4ff-546ea1d3d496/blobholder:0/rm.pdf`

- `http://NUXEO_SERVER/nuxeo/nxfile/default/776c8640-7f19-4cf3-b4ff-546ea1d3d496/files:files/0/file/SC-DM-DAM.png`

- `http://NUXEO_SERVER/nuxeo/nxfile/default/776c8640-7f19-4cf3-b4ff-546ea1d3d496/blobholder:1/SC-DM-DAM.png`


For Picture document type, a similar system is available to be able to get the attachments depending on the view name:

- `http://NUXEO_SERVER/nuxeo/nxpicsfile/{repository}/{uuid}/{viewName}:content/{fileName}`

where, by default,&nbsp;`viewName`&nbsp;can be Original, OriginalJpeg, Medium, Thumbnail.

## Producing File URLs from JSF Templates

For a single file, in schema "file", where blob field is named "file" and file name field is named "filename":

```xml
<nxh:outputLink
  value="#{nxd:fileUrl('downloadFile', currentDocument, field.fullName, currentDocument.file.filename)}">
  <nxh:graphicImage
    value="#{nxd:fileIconPath(currentDocument[field.schemaName][field.fieldName])}"
    rendered="#{! empty nxd:fileIconPath(currentDocument[field.schemaName][field.fieldName])}" />
  <nxh:outputText value="#{currentDocument.file.filename}" />
</nxh:outputLink>

```

For a list of files, in schema "files", where list name is "files" and in each item, blob field is named "file" and file name field is named "filename":

```xml
<nxu:inputList value="#{currentDocument.files.files}" model="model"
rendered="#{not empty currentDocument.files.files}">
  <nxh:outputLink
    value="#{nxd:complexFileUrl('downloadFile', currentDocument, 'files:files', model.rowIndex, 'file', currentDocument.files.files[model.rowIndex].filename)}">
    <nxh:graphicImage
      value="#{nxd:fileIconPath(currentDocument.files.files[model.rowIndex].file)}"
      rendered="#{! empty nxd:fileIconPath(currentDocument.files.files[model.rowIndex].file)}" />
    <nxh:outputText value="#{currentDocument.files.files[model.rowIndex].filename}" />
  </nxh:outputLink>
  <t:htmlTag value="br" />
</nxu:inputList>

```

This gives you get URLs of the form:

```
http://NUXEO_SERVER/nuxeo/nxfile/default/8f5aca13-e9d9-4b7b-a1d9-a1dcd74cc709/blobholder:0/mainfile.jpg
http://NUXEO_SERVER/nuxeo/nxfile/default/47ad14f2-c7a6-4a3f-8e4b-6c2cf1458f5a/files:files/0/file/firstfile.jpg

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

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related topics in this documentation'}}

*   [Default URL Patterns]({{page page='default-url-patterns'}})
*   [Navigation URLs]({{page page='navigation-urls'}})

{{/panel}}</div><div class="column medium-6"></div></div>
