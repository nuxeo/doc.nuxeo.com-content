---
title: Debugging Automation Chains
review:
    comment: ''
    date: '2016-12-19'
    status: ok
labels:
    - lts2016-ok
    - automation
    - fdavid
    - trace
    - excerpt
    - content-review-lts2017
confluence:
    ajs-parent-page-id: '18451738'
    ajs-parent-page-title: Automation
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Debugging+Automation+Chains
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Debugging+Automation+Chains'
    page_id: '17794011'
    shortlink: 24MPAQ
    shortlink_source: 'https://doc.nuxeo.com/x/24MPAQ'
    source_link: /display/NXDOC/Debugging+Automation+Chains
tree_item_index: 900
history:
    -
        author: Solen Guitter
        date: '2016-03-07 09:19'
        message: ix typ
        version: '9'
    -
        author: Solen Guitter
        date: '2013-11-26 15:16'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2013-11-26 14:45'
        message: 'Fixed typos and links, reorganized steps'
        version: '7'
    -
        author: Solen Guitter
        date: '2013-11-26 10:37'
        message: ''
        version: '6'
    -
        author: Alain Escaffre
        date: '2013-11-26 00:39'
        message: ''
        version: '5'
    -
        author: Alain Escaffre
        date: '2013-11-26 00:29'
        message: ''
        version: '4'
    -
        author: Alain Escaffre
        date: '2013-11-26 00:15'
        message: ''
        version: '3'
    -
        author: Alain Escaffre
        date: '2013-11-26 00:07'
        message: ''
        version: '2'
    -
        author: Alain Escaffre
        date: '2013-11-25 23:56'
        message: ''
        version: '1'

---
{{! excerpt}}

Since Nuxeo Platform 5.8, the framework provides an easy way to get the trace of the latest execution of an automation chain, the stack of execution and the values of parameters.

{{! /excerpt}}

Although this feature is always usable, even out of Nuxeo Studio context, it is particularly useful when implementing automation chains using Nuxeo Studio.

You can go to the automation documentation on your server: `http://NUXEO_SERVER/nuxeo/site/automation/doc`

You see the list of all operations, and all chains that are declared on your server. Any chain that you have designed using Studio should be declared there. For each chain, you see a  "trace" section. From there, you can enable the trace (actually it enables it globally), and you can download traces, either light (if not enable) or full.

![]({{file name='Screen Shot 2013-11-26 at 00.27.20.png'}} ?w=250,border=true,thumbnail=true)

To test it simply:

1.  Go to your Nuxeo Platform.
2.  Go the documentation of the chain `FileManager.ImportInSeam`: `http://NUXEO_SERVER/nuxeo/nuxeo/site/automation/doc/?id=FileManager.ImportInSeam`.
3.  Enable the traces for this chain, if they are disabled. If they're already enabled, skip to next step.
4.  On the user interface of the Nuxeo Platform, drop one or a few files in a workspace via the HTML 5 drag and drop feature and create them directly (smart import).
    This action uses in background the chain `FileManager.ImportInSeam`.
5.  Go to the chain documentation page again: `http://NUXEO_SERVER/nuxeo/site/automation/doc/traces?opId=FileManager.ImportInSeam`.
6.  Click on the **Get traces** link.
    The latest execution of the chain, with all the parameters values, is displayed in your browser (or downloaded on your computer, depending on your browser's settings).

This is very useful to understand what happens when you execute an action or whatever. It is a great debugging tool. You can use it with the chains you design in Studio as well, of course.

Here is an example of output.

```
****** chain ******
Name: FileManager.ImportInSeam
Produced output type: DocumentModelListImpl
****** Hierarchy calls ******
	org.nuxeo.ecm.automation.core.operations.services.FileManagerImport
		org.nuxeo.ecm.automation.seam.operations.RunOperationInSeam

****** FileManager.Import ******
Chain ID: FileManager.ImportInSeam
Class: FileManagerImport
Method: 'run' | Input Type: class org.nuxeo.ecm.automation.core.util.BlobList | Output Type: interface org.nuxeo.ecm.core.api.DocumentModelList
Input: [org.nuxeo.ecm.core.api.impl.blob.FileBlob@7bd412f8]
Parameters  | Name: overwite, Value: true
Context Variables | Key: repository, Value: default | Key: currentDomain, Value: 82b1583a-70be-43cc-b838-b775f689b2d8 | Key: currentDocument, Value: 844a2a7a-60bb-4bd5-be9a-cf18f9e90b00 | Key: request, Value: org.nuxeo.ecm.webengine.app.jersey.WebEngineServlet$DefaultContentTypeRequestWrapper@ca92e18 | Key: conversationId, Value: 0NXMAIN1 | Key: currentWorkspace, Value: 844a2a7a-60bb-4bd5-be9a-cf18f9e90b00 | Key: ChainParameters, Value: {} | Key: lang, Value: fr

****** Seam.RunOperation ******
Chain ID: FileManager.ImportInSeam
Class: RunOperationInSeam
Method: 'run' | Input Type: void | Output Type: class java.lang.Object
Input: [DocumentModelImpl(1afdcb6e-4215-405a-a6b9-f8fdca849ef5, path=/default-domain/workspaces/test/document.xml, title=1afdcb6e-4215-405a-a6b9-f8fdca849ef5)]
Parameters  | Name: id, Value: Seam.Refresh
Context Variables | Key: repository, Value: default | Key: currentDomain, Value: 82b1583a-70be-43cc-b838-b775f689b2d8 | Key: currentDocument, Value: 844a2a7a-60bb-4bd5-be9a-cf18f9e90b00 | Key: request, Value: org.nuxeo.ecm.webengine.app.jersey.WebEngineServlet$DefaultContentTypeRequestWrapper@ca92e18 | Key: conversationId, Value: 0NXMAIN1 | Key: currentWorkspace, Value: 844a2a7a-60bb-4bd5-be9a-cf18f9e90b00 | Key: ChainParameters, Value: {} | Key: lang, Value: fr
```
