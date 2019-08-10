---
title: 'HOWTO: Execute UI Functions After Business Logic Execution'
review:
    comment: ''
    date: '2019-08-10'
    status: ok
toc: true
details:
    howto:
        excerpt: Learn how to execute UI functions after business logic execution
        level: Advanced
        tool: code
        topics: Web UI
labels:
    - lts2017-ok
    - webui
    - designer
tree_item_index: 1250
---

<!-- Introduction -->

In this tutorial, you will learn how to execute UI functions after business logic execution. For example, when you create a custom button which triggers an automation chain, it is helpful to add a notification displayed upon successful (or unsuccessful) call of the operation.

Let's say we want to copy a document to another folder and automatically navigate to this new document, integrating notifications.

## Prerequisites

- Create **two folders** in your Nuxeo instance, under "/Domain/Workspaces" called
  - `source_folder` where we create the original document
  - `target_folder` where the copy will be created
- Generate the **metadata layout of the File** document type in Nuxeo Studio Designer (**UI** > **Built-in Document Types** > **File** > **metadata**)

## Paper toast

The Polymer [paper-toast](https://www.webcomponents.org/element/@polymer/paper-toast) element offers an easy way to display user notifications. This element needs a specific id. For instance, let's call it "copyToast".

- Using Javascript, you can modify the text to display, using such syntax: `this.$.copyToast.text = 'Document copied';`.
- When you need your toast to be displayed, just call the `open()` method on it: `this.$.copyToast.open();`
- No need to "close" the toast, it will be automatically done for you (you can set `duration` to 0, a negative number or Infinity to persist the toast on screen).

## Practical Case

### Create your operation

Add the `nuxeo-operation` element within your the File metadata layout to execute the `Document.Copy` operation (Documentation available on [Nuxeo Explorer](http://explorer.nuxeo.com/nuxeo/site/distribution/Nuxeo%20Platform%20LTS%202019-10.10/viewOperation/Document.Copy)).

```
<nuxeo-operation  id="copyOp"
                     op="Document.Copy"
                     input="[[document]]"
                     params='{"target": "/default-domain/workspaces/target_folder","name":"target-document"}'>
</nuxeo-operation>
```

### Add your notification element

Simply create a `paper-toast` element within the page:

```
<paper-toast id="toast"></paper-toast>
```

### Add a button

Create a button to execute the `_copy` function.

```
Copy this document: <paper-icon-button  id="btn"
                                        icon="icons:content-copy"
                                        on-tap="_copy">
</paper-icon-button>
```

This function will call our operation. We also add a `paper-tooltip` element to display an helper message while hovering the icon button.

```
<paper-tooltip for="btn">Execute copy</paper-tooltip>
```

### Define the copy function

In the Polymer section, add the function which will execute the operation:

```
Polymer({
    is: 'nuxeo-file-metadata-layout',
    behaviors: [Nuxeo.LayoutBehavior],
    properties: {
      /**
         * @doctype File
         */
      document: Object
    },
_copy: function() {
        // We retrieve the operation we have created previously
        let op = this.$.copyOp;
        op.input = this.document;
        // The operation is executed
        op.execute()
          .then(function(result) {
            // This line will display a notification to the user
            this._toast("Document copied!");
          }.bind(this))
          .catch(function(error) {
            // A notification is sent in case of error
						this._toast("Error: The document wasn't copied");
          }.bind(this))}
```

In this case, we're using a function to raise a notification so that we don't have to create multiple `paper-toast` element for each message:

```
_toast: function(text) {
        this.$.toast.hide();
        this.$.toast.text = text;
        this.$.toast.open();
      },
```

### Deploy your project

Hot reload your Nuxeo instance, and see the results.

### Going further

#### Navigating to the new document

If we need to navigate to the new copy, then we need to add `window.location.href = this.urlFor('browse', result.path);` line. However, it implies that the notification message won't be seen as it will appear between the moment when the user clicks and when the new document will be opened. This is why using `nuxeo-dialog` element would provide a better user experience in this case.

#### Opening a dialog

[nuxeo-dialog](https://www.webcomponents.org/element/nuxeo/nuxeo-ui-elements/elements/nuxeo-dialog) element is used to display a new window to the user, asking for a confirmation, or a choice.

We would like the user to:

1. Click on the copy button
2. Select the destination folder where the document should be copied. This way, the destination path won't be static.
3. Click on the confirmation button to execute the copy and navigate to it. In case of error, we will raise the problem in the `paper-toast` element.

We need to adapt our layout:

- First create the `nuxeo-dialog`

```
<nuxeo-dialog reparent id="popupRight" modal no-auto-focus>
      <h2>Choose your target folder</h2>
      <div>
        <nuxeo-document-suggestion label="Target folder" value="{{destination}}" page-provider="folderish-suggestions" min-chars="0" class="input"></nuxeo-document-suggestion>
      </div>
      <div class="buttons">
        <paper-button dialog-dismiss>Cancel</paper-button>
        <paper-button dialog-confirm class="primary" on-tap="doChange">Copy and Navigate to the new document</paper-button>
      </div>
    </nuxeo-dialog>
```

- Then, in Nuxeo Studio Modeler, create a page provider called `folderish-suggestions` to list the element where can be copied the source document:

```
ecm:primaryType IN ('Folder','Workspace') AND ecm:isTrashed = 0 AND  ecm:isProxy = 0 AND ecm:isCheckedInVersion = 0 AND ecm:fulltext = ?
```

- Create the `doChange` function:

```
doChange: function () {
      // We retrieve the destination folder selected by the user
      this.destination = this.document.parentRef;
      this.$.copyOp.execute().then(function(result) {
        this._toast("Document copied!");
        // We navigate to the new document
        window.location.href = this.urlFor('browse', result.path);

      }.bind(this))
        .catch(function(error) {
        alert("Error when creating the copy:\n" + error);
      }.bind(this))}
```

- Deploy your changes
