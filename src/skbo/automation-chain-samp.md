---
title: Automation chain sample to group several Office files in 1 PDF file
description: Automation chain sample to group several Office files in 1 PDF file
review: 
    date: '2019-06-01'
    status: ok
    comment: 'public version'
labels:
    - studio-automation
    - automation
    - pdf

---
# Automation chain sample to group several Office files in 1 PDF file
## Problem
One wants to group the content of several .DOCX files into 1 PDF as a result
## Solution
Let’s assume you have a document of type DocumentSchema deriving from File and having a schema documentschema and having
1. 1 principal PDF file in file:content
2. 2 attached files in files:files
3. 1 BLOB property of type documentschema:pdffile  

The automation then reads
    - Context.FetchDocument
    - Context.PushDocument
    - Context.PushDocument
    - Document.GetBlobsByProperty:
        xpath: "files:files"
    - Context.SetInputAsVar:
        name: ffiles
    - Context.PopDocument
    - Blob.ToPDF
    - PDF.MergeWithBlobs:
        fileName: MyPDFResult.pdf
        pdfAuthor: myself
        pdfSubject: PDF Result
        pdfTitle: PDF Result Sample
        toAppendListVarName: ffiles
    - Context.SetInputAsVar:
        name: pdfblob
    - Context.PopDocument
    - Document.SetBlob:
        file: "@{Context[\"pdfblob\"]}"
        save: "true"
        xpath: "documentschema:pdffile"

Let’s assume you now have several documents containing as main file a .DOCX file. These documents are returned by a NXQL query. (Adapt the NXQL query to tailor it to your needs)

The result as a DOCX file will be attached to the files schema of the main document input of the automation chain.
    - Context.FetchDocument
    - Context.SetInputAsVar:
        name: mydoc
    - Repository.Query:
        query: "SELECT * FROM Document WHERE ecm:mixinType != 'HiddenInNavigation' AND ecm:currentLifeCycleState = 'project' and ecm:primaryType='File'"
        language: NXQL
        sortBy: "dc:title"
        sortOrder: ASC
    - Document.GetBlob:
        xpath: "file:content"
    - Blob.AttachOnDocument:
        document: "@{Context[\"mydoc\"]}"
        save: "false"
        xpath: "files:files"
    - Context.RestoreDocumentInput:
        name: mydoc
    - Document.Save


2019-06-01T17:37:22.187Z
## (c) Nuxeo Support Knowledge Base Outline 2019
