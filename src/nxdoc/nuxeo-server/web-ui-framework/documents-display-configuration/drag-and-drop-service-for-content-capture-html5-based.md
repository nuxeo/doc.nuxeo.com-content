---
title: Drag and Drop Service for Content Capture (HTML5-Based)
labels:
    - drag-and-drop
    - import
    - automation
    - file-upload-component
    - lts2015-ok
toc: true
confluence:
    ajs-parent-page-id: '6029663'
    ajs-parent-page-title: Documents Display Configuration
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: viewpage.action?pageId=7209476
    canonical_source: viewpage.action?pageId=7209476
    page_id: '7209476'
    shortlink: BAJu
    shortlink_source: 'https://doc.nuxeo.com/x/BAJu'
    source_link: /pages/viewpage.action?pageId=7209476
history:
    - 
        author: Manon Lumeau
        date: '2016-06-09 13:39'
        message: ''
        version: '30'
    - 
        author: Solen Guitter
        date: '2016-03-30 09:34'
        message: Add link to how-to
        version: '29'
    - 
        author: Solen Guitter
        date: '2015-12-08 11:11'
        message: ''
        version: '28'
    - 
        author: Solen Guitter
        date: '2015-12-08 11:09'
        message: ''
        version: '27'
    - 
        author: Solen Guitter
        date: '2015-12-07 15:22'
        message: link update
        version: '26'
    - 
        author: Antoine Taillefer
        date: '2015-10-15 12:39'
        message: ''
        version: '25'
    - 
        author: Antoine Taillefer
        date: '2015-10-13 11:10'
        message: ''
        version: '24'
    - 
        author: Solen Guitter
        date: '2015-01-22 15:13'
        message: Format and reduce related pages
        version: '23'
    - 
        author: Solen Guitter
        date: '2014-01-17 17:50'
        message: ''
        version: '22'
    - 
        author: Solen Guitter
        date: '2014-01-17 17:46'
        message: Updated screenshots
        version: '21'
    - 
        author: Solen Guitter
        date: '2014-01-13 17:53'
        message: ''
        version: '20'
    - 
        author: Solen Guitter
        date: '2014-01-13 17:52'
        message: Formatting
        version: '19'
    - 
        author: Solen Guitter
        date: '2013-09-04 18:27'
        message: ''
        version: '18'
    - 
        author: Solen Guitter
        date: '2013-07-18 10:53'
        message: Added links to explorer
        version: '17'
    - 
        author: Solen Guitter
        date: '2013-07-17 15:02'
        message: ''
        version: '16'
    - 
        author: Solen Guitter
        date: '2013-07-11 15:58'
        message: ''
        version: '15'
    - 
        author: Solen Guitter
        date: '2013-06-18 17:44'
        message: Added related topics
        version: '14'
    - 
        author: Solen Guitter
        date: '2013-06-18 15:07'
        message: ''
        version: '13'
    - 
        author: Solen Guitter
        date: '2013-06-18 15:02'
        message: ''
        version: '12'
    - 
        author: Solen Guitter
        date: '2013-06-18 15:01'
        message: Fixed typos and format
        version: '11'
    - 
        author: Thomas Roger
        date: '2013-06-18 14:43'
        message: ''
        version: '10'
    - 
        author: Solen Guitter
        date: '2012-09-17 09:19'
        message: Migrated to Confluence 4.0
        version: '9'
    - 
        author: Solen Guitter
        date: '2012-09-17 09:19'
        message: added toc
        version: '8'
    - 
        author: Julien Carsique
        date: '2011-08-09 17:13'
        message: ''
        version: '7'
    - 
        author: Florent Guillaume
        date: '2011-05-10 12:12'
        message: ''
        version: '6'
    - 
        author: Eric Barroca
        date: '2011-05-06 20:59'
        message: ''
        version: '5'
    - 
        author: Eric Barroca
        date: '2011-05-06 20:59'
        message: ''
        version: '4'
    - 
        author: Thierry Delprat
        date: '2011-05-06 10:32'
        message: ''
        version: '3'
    - 
        author: Thierry Delprat
        date: '2011-05-06 10:29'
        message: ''
        version: '2'
    - 
        author: Thierry Delprat
        date: '2011-05-06 10:27'
        message: ''
        version: '1'

---
Drag and Drop from the Desktop to Nuxeo HTML UI has been available for a long time using a browser plugin.

&nbsp;

{{! excerpt}}

You can use the native HTML5 Drag and Drop features on recent browsers (Firefox 3.6+, Google Chrome 9+, Safari 5+). This new Drag and Drop import model is pluggable so you can adapt the import behavior to your custom needs.

{{! /excerpt}}

## How to Use it

### Selecting the DropZone

If you drag some files from the Desktop to the Nuxeo WebUI, the possible DropZones will be highlighted.

In Nuxeo there are 5 different DropZones (depending on the page):

*   `ContentView`: the content listing for a folderish Document;

    ![]({{file name='HTML5-DnD.png' space='userdoc' page='creating-content'}} ?w=650,h=260,border=true)

*   `Clipboard_CLIPBOARD`: the user's Clipboard;
*   `Clipboard_DEFAULT`: the user's Worklist;
*   `mainBlob`: the main attachment of the current Document;

    ![]({{file name='DndDocument.png'}} ?w=450,border=true)

*   `otherBlobs`: additional attachments of the current Document.

Depending on the DropZone you select, the import action will be different:

*   Content view: create documents from files in the current container;
*   Clipboard: create documents from files in the user's personal workspaces and add them to the clipboard;
*   Worklist: create documents from files in the user's personal workspaces and add them to the worklist;
*   main blob: attach a file to the document;
*   other blobs: attach file(s) as additional files in the document.

### Default Mode vs Advanced Mode

In the default mode the file you drop will be automatically uploaded and imported into the document repository.

By using the advanced mode you can have more control over the import process:

*   you can do several file imports but still keep all files part of the same batch,
*   you can select the automation chain&nbsp;that will be executed.

To trigger the extended mode, just maintain the drag over the DropZone for more than 2.5 seconds: the drop zone will be highlighted in green indicating you are now in extended mode.

![]({{file name='smartDnD_import_selection.png' space='userdoc' page='creating-content'}} ?w=650,border=true)

## How to Customize it

### Defining a New DropZone

You can very simply define a new DropZone in your pages; you simply need to add an HTML element (like a `div`) which has:

*   a unique id,
*   the '`dropzone`' CSS class,
*   a context attribute.

```

 ... 

```

### Associating Automation Chains

Each dropzone context is associated with a set of content automation operations or automation chains. This association is configured via the action service:

```

  ContentView
  create

    FileManager.ImportInSeam

```

Where:

*   the operation or automation chain is configured through the action properties (since 5.7.1). The `chainId&nbsp;`property is used to configure the automation chain to execute. If not present, the `operationId` property is tried.
    For backward compatibility, if both properties are not present, we fallback using the action `id` to get the automation chain or operation to execute&nbsp;(for automation chains, append `chain.` as a prefix for id).
*   `category` represents the dropzone context;
*   `filter` / `filter-id` are the filter used to define if operation should be available in a given context;
*   `link` points to a page that can be used to collect parameters for the automation chain.

The operation or chain that will be called for the import will receive:

*   as input: a BlobList representing the files that have been uploaded;
*   as context: the current page context.

    ```
    typically : { currentDocument : '#{currentDocument.id}',
    currentDomain : '#{currentDomain.id}',
    currentWorkspace : '#{currentWorkspace.id}',
    conversationId : '#{org.jboss.seam.core.manager.currentConversationId}',
    lang : '#{localeSelector.localeString}',
    repository : '#{currentDocument.repositoryName}'};

    ```

*   as parameters: what has been collected by the form if any.

The output of the chains does not really matter.

At some point, inside your automation chain you may need to access Seam Context. For that, new operations were introduced:

*   [`Seam.RunOperation`](http://explorer.nuxeo.org/nuxeo/site/distribution/current/viewOperation/RunOperation) : that can run an operation or a chain in the Seam context.
    For example, if you want to get available actions via the "Actions.GET" operation, but want to leverage Seam context for actions filters:

    ```

        Actions.GET

    ```

*   [`Seam.InitContext`](http://explorer.nuxeo.org/nuxeo/site/distribution/current/viewOperation/WebUI.InitSeamContext) / [`Seam.DestroyContext`](http://explorer.nuxeo.org/nuxeo/site/distribution/current/viewOperation/WebUI.DestroySeamContext) : that can be used to initialize / destroy seam context:

    ```

    ```

### Parameters Management

In some cases, you may want user to provide some parameters via a form associated to the import operation he wants to run. For that, you can use the `link` attribute of the action used to bind your automation chain to a dropzone. This URL will be used to display your form within an iframe inside the default import UI.

In order to send the collected parameters to the import wizard, you should call a JavaScript function inside the parent frame:

```
window.parent.dndFormFunctionCB(collectedData);

```

where `collectedData` is a JavaScript object that will then be sent (via JSON) as parameter of the operation call.

In the default JSF WebApp you can have a look at `DndFormActionBean` and `dndFormCollector.xhtml`.

&nbsp;

* * *

<div class="row" data-equalizer="" data-equalize-on="medium">

<div class="column medium-6">{{#> panel heading="Related Pages in This Documentation"}}

*   [How to Customize the HTML5 Drag and Drop Import with Metadata Form]({{page page='how-to-customize-the-html5-drag-and-drop-import-with-metadata-form'}})
*   [Choosing How to Import Data in the Nuxeo Platform]({{page page='choosing-how-to-import-data-in-the-nuxeo-platform'}})
*   [How to Change the Default Document Type When Importing a File in the Nuxeo Platform?]({{page page='how-to-change-the-default-document-type-when-importing-a-file-in-the-nuxeo-platform'}})
*   [Nuxeo Core Import / Export API]({{page page='nuxeo-core-import-export-api'}})
*   [Nuxeo Bulk Document Importer]({{page page='nuxeo-bulk-document-importer'}})

{{/panel}}</div>

<div class="column medium-6">{{#> panel heading="More about drag and drop in the user documentation"}}

*   [Creating Content]({{page space='userdoc' page='creating-content'}})
*   [Publishing Content]({{page space='userdoc' page='publishing-content'}})
*   [Editing Content]({{page space='userdoc' page='editing-content'}})

{{/panel}}</div>

</div>