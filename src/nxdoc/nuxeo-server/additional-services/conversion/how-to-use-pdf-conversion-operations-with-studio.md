---
title: How to Use PDF conversion operations with Nuxeo Studio
review:
    comment: ''
    date: '2016-11-24'
    status: ok
details:
    howto:
        excerpt: >-
            Learn how to use all operations that offers PDF tools operations from Nuxeo Studio : Watermarks, page numbers, document merging...
        level: Intermediate
        tool: Studio
        topics: 'Document type, Automation, Conversion'
labels:
    - howto
    - conversion
    - pdf
toc: true
tree_item_index: 150
---

{{! excerpt}}

If the main document format stored in Nuxeo repository is PDF, it should be convenient to manipulate them without having to use a desktop software. Nuxeo gives the opportunity to execute safely and automatically PDF operations from the Nuxeo interface. For instance, your corporate document management security politic may require to control each downloaded files with a "confidential" watermark, or ask for a password in order to open the document.  

Nuxeo integrates PDF tools operations, under the &nbsp;**Conversion**&nbsp; section so that all this could be done easily from automation chains.

![]({{file name='nuxeo-studio-pdf-conversion-operations.png'}} ?w=500,border=true)

{{! /excerpt}}

{{#> callout type='info' }}

This how to requires knowledge about:

*   [Document Types Definition]({{page page='how-to-define-a-document-type'}}),
*   [User Actions]({{page space='studio' page='user-actions'}}),
*   [Automation chains]({{page page='content-automation-concepts'}}).

{{/callout}}

## Studio Preparation

The PDF conversion operations are not available in Nuxeo Studio "out-of-the-box". You need to import them following these steps :

1. Connect to your Nuxeo instance

2. Go to the automation operation description page (/site/automation/doc). If you run Nuxeo in a local environment, the classic URL is http://localhost:8080/nuxeo/site/automation/doc

3. Navigate to the  Conversion part, and clic on the operation you want to use. In our example, we are interested by the &nbsp;**PDF: EncryptReadOnly**&nbsp; and &nbsp;**PDF: Watermark with Image**&nbsp; operations
![]({{file name='conversion-operation-automation-doc.png'}} ?w=200,border=true)

4. On each operation pages, clic on the JSON definition link, and import each definition in Studio in &nbsp;**Settings > Registries > Automation Operations**&nbsp;. Your contribution should be :


```json
{
  "operations": [
           {
  "id" : "PDF.EncryptReadOnly",
  "label" : "PDF: Encrypt Read Only",
  "category" : "Conversion",
  "requires" : null,
  "description" : "Encrypts the PDF, returning a copy. User can read, print and copy but cannot modify. originalOwnerPwd is used if the PDF was originally encrypted. If ownerPwd is empty, use originalOwnerPwd to encrypt. If no keyLength is provided, use 128. If the operation is ran on Document(s), xpath lets you specificy where to get the blob from (default: file:content).",
  "url" : "PDF.EncryptReadOnly",
  "signature" : [ "bloblist", "bloblist", "blob", "blob", "document", "blob", "documents", "bloblist" ],
  "params" : [ {
    "name" : "keyLength",
    "description" : "",
    "type" : "string",
    "required" : false,
    "widget" : "Option",
    "order" : 0,
    "values" : [ "40", "128" ]
  }, {
    "name" : "originalOwnerPwd",
    "description" : "",
    "type" : "string",
    "required" : false,
    "widget" : null,
    "order" : 0,
    "values" : [ ]
  }, {
    "name" : "ownerPwd",
    "description" : "",
    "type" : "string",
    "required" : false,
    "widget" : null,
    "order" : 0,
    "values" : [ ]
  }, {
    "name" : "userPwd",
    "description" : "",
    "type" : "string",
    "required" : false,
    "widget" : null,
    "order" : 0,
    "values" : [ ]
  }, {
    "name" : "xpath",
    "description" : "",
    "type" : "string",
    "required" : false,
    "widget" : null,
    "order" : 0,
    "values" : [ "file:content" ]   
                } ]
},
 {
  "id" : "PDF.WatermarkWithImage",
  "label" : "PDF: Watermark with Image",
  "category" : "Conversion",
  "requires" : null,
  "description" : "Return a new blob combining the input PDF and the image blob.",
  "url" : "PDF.WatermarkWithImage",
  "signature" : [ "blob", "blob", "bloblist", "bloblist" ],
  "params" : [ {
    "name" : "image",
    "description" : "The image blob to use for the watermark",
    "type" : "blob",
    "required" : true,
    "widget" : null,
    "order" : 0,
    "values" : [ ]
  }, {
    "name" : "properties",
    "description" : "The watermark properties",
    "type" : "properties",
    "required" : false,
    "widget" : null,
    "order" : 0,
    "values" : [ ]} ]
}   
    ]
}
```
5. Save your Nuxeo Studio project

## Automation chain creation

To implement the business logic, we need an automation chain which retrieves the blob from the File document, encrypts and watermarks with a picture previously uploaded in the Nuxeo instance.

{{#> panel type='info' heading='Info' match_height=true no_markdown=true}}
To use watermark with picture, we recommand to use pictures with transparency.
{{/panel}}

The automation chain should be :

```
- Context.FetchDocument
- Document.GetBlob:
    xpath: "file:content"
- Context.SetInputAsVar:
    name: pdfToWatermark
- Repository.GetDocument:
    value: /default-domain/workspaces/Test/confidential.png
- Document.GetBlob:
    xpath: "file:content"
- Context.SetInputAsVar:
    name: watermark
- Context.RestoreBlobInput:
    name: pdfToWatermark
- PDF.WatermarkWithImage:
    image: "@{watermark}"
- PDF.EncryptReadOnly:
    keyLength: "128"
    ownerPwd: Adm1nPassw0rd
    userPwd: Us3rPassw0rd
    xpath: "file:content"
- WebUI.DownloadFile
```

Now, we need to plug the automation chain to a button called safeDownloadButton. It will be activated only for File document type and users that have Read permission.

![]({{file name='safe-download-button.png'}} ?w=300,border=true)

## Result

With this configuration, a new icon is created on the Contextual Tool bar. The PDF is secured by a password :

![]({{file name='password-protected-document.png'}} ?w=300,border=true)

... and with the "Confidential" watermark in each page :

![]({{file name='result-pdf-conversion.png'}} ?w=300,border=true)


{{#> panel type='tip' heading='Going further' match_height=true no_markdown=true}}
To complete the configuration, it should be a good idea to filter the classic download option and the document versionning to an authorized group by editing the File tab for example (with EL expression like ``#{currentUser.isMemberOf('security_department'))}``{{/panel}}

## Other PDF conversion operations

Here is the list of the PDF conversion operations :

*  &nbsp;**Add Page Numbers**&nbsp;
*  &nbsp;**Convert to Pictures**&nbsp; : Generates PNG pictures of each PDF page
*  &nbsp;**Encrypt**&nbsp; : Full version of encryption. Admin can grant permissions on the PDF as print, modify, copy...
*  &nbsp;**Extract Links**&nbsp; : Returns a JSON string of an array of objects with page, subType, text and link fields
*  &nbsp;**Extract Pages**&nbsp; : Generates a PDF from a range of PDF pages
*  &nbsp;**Merge with Blob(s) / Documents (s)**&nbsp; : Document concatenation
*  &nbsp;**Watermark with Text / PDF**&nbsp; : Watermarked PDF with text editor options (rotation, transparency, font...) 
