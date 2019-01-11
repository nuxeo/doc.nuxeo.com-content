---
title: How to Use PDF conversion operations with Nuxeo Studio
review:
    comment: ''
    date: '2018-01-15'
    status: ok
details:
    howto:
        excerpt: 'Learn how to use all operations that offers PDF tools operations from Nuxeo Studio: Watermarks, page numbers, document merging...'
        level: Intermediate
        tool: Studio
        topics: 'Document type, Automation, Conversion'
labels:
    - content-review-lts2016
    - howto
    - conversion
    - troger
    - pdf
    - lts2017-ok
    - jsf-ui
toc: true
tree_item_index: 150

---

{{! excerpt}}
If the main document format stored in the Nuxeo repository is PDF, it should be convenient to manipulate it without having to use a desktop software. Nuxeo gives the opportunity to safely and automatically execute PDF operations from the Nuxeo interface.

In this tutorial we will implement a document management security politic that requires to control each downloaded PDF files with a "confidential" watermark and ask for a password in order to open the document.

Nuxeo integrates PDF tools operations, under the **Conversion** category so that all this can be done easily from automation chains.

![]({{file name='nuxeo-studio-pdf-conversion-operations.png'}} ?w=500,border=true)
{{! /excerpt}}

{{#> callout type='info' }}
This how to requires knowledge about:
- [Document Types Definition]({{page page='how-to-define-a-document-type'}})
- [User Actions]({{page space='studio' page='user-actions'}})
- [Automation chains]({{page page='content-automation-concepts'}})
{{/callout}}

## Importing PDF Operations in Nuxeo Studio

The PDF conversion operations are not available in Nuxeo Studio "out-of-the-box". You need to import them following these steps:

1. Connect to your Nuxeo instance.
2. Go to your instance's automation documentation (/site/automation/doc). If you run Nuxeo in a local environment, the classic URL is `http://NUXEO_SERVER/nuxeo/site/automation/doc`.
3. In the Conversion part, and click on the operation you want to use, here the operations **PDF: Encrypt Read Only** and **PDF: Watermark with Image**.
![]({{file name='conversion-operation-automation-doc.png'}} ?w=200,border=true)
4. On each operation page, click on the **JSON definition** link and copy the operation definition.
5. In Nuxeo Studio go to **Settings**&nbsp;> **Registries**&nbsp;> **Automation Operations** and paste the operation definitions in an operation definition `"operations": []`:

    Your contribution should be:
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
6. Save your Nuxeo Studio project.

The operations are now available in the Automation Chain editor, in the Conversion category.

## Setting Up the Automation Chain

To implement the behavior defined in the introduction, [create an automation chain]({{page page='how-to-create-an-automation-chain'}}) which retrieves the blob from the File document, encrypts and watermarks with a picture previously uploaded in the Nuxeo instance (in a "Test" workspace under the and called `confidential.png`).

{{#> callout type='info'}}
To use watermark with picture, we recommend to use pictures with transparency.
Note that although the files are picture files, you do not need to create Picture document types in Nuxeo and so do not need to use the Nuxeo DAM addon.
{{/callout}}

The automation chain should be:

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

{{{multiexcerpt 'JSF-UI-required' page='generic-multi-excerpts'}}}

Now, plug the automation chain to a button called `safeDownloadButton` available:
- in the contextual tools
- only for File document type
- to users with Read permission

## Result

After you [deploy the Studio customization]({{page page='deploying-your-project-in-dev-mode'}}), a new icon is created on the Contextual Toolbar.

![]({{file name='safe-download-button.png'}} ?w=300,border=true)

The PDF is secured by a password:

![]({{file name='password-protected-document.png'}} ?w=300,border=true)

And the "Confidential" watermark is printed on each page:

![]({{file name='result-pdf-conversion.png'}} ?w=300,border=true)


{{#> callout type='tip' heading='Going further' match_height=true no_markdown=true}}

To complete the configuration, it should be a good idea to filter the classic download option and the document versioning to an authorized group by editing the File tab for example (with an EL expression like `#{currentUser.isMemberOf('security_department')}`.
{{/callout}}

## Other PDF Conversion Operations

Here is the list of the PDF conversion operations:

*  **PDF: Add Page Numbers**
*  **PDF: Convert to Pictures**: Generates PNG pictures of each PDF page
*  **PDF: Encrypt**: Full version of encryption. Admin can grant permissions on the PDF as print, modify, copy...
*  **PDF: Extract Links**: Returns a JSON string of an array of objects with page, subType, text and link fields
*  **PDF: Extract Pages**: Generates a PDF from a range of PDF pages
*  **PDF: Merge with Blob(s)** and **PDF: Merge with Documents (s)**: Document concatenation
* **PDF: Remove Encryption**: Secures the PDF opening with a password
*  **PDF: Watermark with Text** and **PDF: Watermark with PDF**: Watermarked PDF with text editor options (rotation, transparency, font...)
