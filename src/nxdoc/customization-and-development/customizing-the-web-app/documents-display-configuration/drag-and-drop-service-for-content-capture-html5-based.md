---
title: Drag and Drop Service for Content Capture (HTML5-Based)
review:
    comment: ''
    date: ''
    status: ok
labels:
    - 5-7-1
    - automation
    - import
    - drag-and-drop
toc: true
confluence:
    ajs-parent-page-id: '17334303'
    ajs-parent-page-title: Documents Display Configuration
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: viewpage.action?pageId=17334337
    canonical_source: viewpage.action?pageId=17334337
    page_id: '17334337'
    shortlink: QYAIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/QYAIAQ'
    source_link: /pages/viewpage.action?pageId=17334337
history:
    - 
        author: Solen Guitter
        date: '2016-08-30 12:51'
        message: ''
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

![]({{file name='DndForm.png'}} ?w=500,border=true)

## How to Customize it

### Defining a New DropZone

You can very simply define a new DropZone in your pages; you simply need to add an HTML element (like a `div`) which has:

*   a unique id,
*   the '`dropzone`' CSS class,
*   a context attribute.

{{#> panel type='code' heading='Drop zone declaration'}}

```

<div id="myDropZone" class="dropzone" context="myDropZone"> ... </div>

```

{{/panel}}

### Associating Automation Chains

Each dropzone context is associated with a set of content automation operations or automation chains. This association is configured via the action service:

{{#> panel type='code' heading='Binding an operation chain to a drop zone'}}

```
<action id="Chain.FileManager.ImportInSeam"
        link="" order="10" label="label.smart.import"
        help="desc.smart.import.file">
  <category>ContentView</category>
  <filter-id>create</filter-id>
  <properties>
    <property name="chainId">FileManager.ImportInSeam</property>
  </properties>
</action>

```

{{/panel}}

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

*   [`Seam.RunOperation`](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-5.8/viewOperation/Seam.RunOperation): that can run an operation or a chain in the Seam context.
    For example, if you want to get available actions via the "Actions.GET" operation, but want to leverage Seam context for actions filters:

    {{#> panel type='code' heading='Running an operation in Seam Context'}}

    ```
    <chain id="SeamActions.GET">
      <operation id="Seam.RunOperation">
        <param type="string" name="id">Actions.GET</param>
      </operation>
    </chain>

    ```

    {{/panel}}
*   [`Seam.InitContext`](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-5.8/viewOperation/Seam.InitContext) / [`Seam.DestroyContext`](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-5.8/viewOperation/Seam.DestroyContext): that can be used to initialize / destroy seam context:

    {{#> panel type='code' heading='Manual Seam context management'}}

    ```
    <chain id="ImportClipboard">
      <operation id="Seam.InitContext" />
      <operation id="UserWorkspace.CreateDocumentFromBlob" />
      <operation id="Document.Save"/>
      <operation id="Seam.AddToClipboard"/>
      <operation id="Seam.DestroyContext" />
    </chain>

    ```

    {{/panel}}

### Parameters Management

In some cases, you may want user to provide some parameters via a form associated to the import operation he wants to run. For that, you can use the `link` attribute of the action used to bind your automation chain to a dropzone. This URL will be used to display your form within an iframe inside the default import UI.

In order to send the collected parameters to the import wizard, you should call a JavaScript function inside the parent frame:

{{#> panel type='code' heading='Calling back the import wizard'}}

```
window.parent.dndFormFunctionCB(collectedData);

```

{{/panel}}

where `collectedData` is a JavaScript object that will then be sent (via JSON) as parameter of the operation call.

In the default JSF WebApp you can have a look at `DndFormActionBean` and `dndFormCollector.xhtml`.

&nbsp;

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

*   [Enabling Drag and Drop for Internet Explorer]({{page space='admindoc58' page='enabling-drag-and-drop-for-internet-explorer'}})
*   [Working Using Drag and Drop]({{page space='userdoc58' page='working-using-drag-and-drop'}})
*   [Drag and Drop Compatibility Table]({{page space='userdoc58' page='drag-and-drop-compatibility-table'}})
*   [How to Change the Default Document Type When Importing a File in the Nuxeo Platform?]({{page page='how-to-change-the-default-document-type-when-importing-a-file-in-the-nuxeo-platform'}})
*   [Blob Upload for Batch Processing]({{page page='blob-upload-for-batch-processing'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>