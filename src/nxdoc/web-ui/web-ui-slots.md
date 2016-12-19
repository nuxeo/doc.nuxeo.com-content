---
title: Web UI slots
review:
    comment: ''
    date: '2016-12-16'
    status: ok
toc: true
labels:
    - lts2016-ok
    - nuxeo-web-ui
    - extension
    - nuxeo-slot
    - nuxeo-slot-content
tree_item_index: 350
---

## What are nuxeo slots?

Nuxeo slots are mechanisms to extend part of the nuxeo Web UI. A couple of `nuxeo-slots` are hardcoded in the web-ui source code in order to insert your own html elements and therefore extend the Web UI to meet your specific needs.

The concept is simple. Let's assume we introduced somewhere in the Web UI the following slot:

```xml
<nuxeo-slot slot="MY_SLOT_NAME" model="[[mySlotModel]]"></nuxeo-slot>
```
then you can easily define your own content with:

```xml
<nuxeo-slot-content name="defaultMY_SLOT_NAME" slot="MY_SLOT_NAME">
  <template>
      <my-element my-element-property=[[aPropertyFromTheSlotModel]]></my-element>
  </template>
</nuxeo-slot-content>
```
and this content will be inserted in the dom right before where the `nuxeo-slot` is located.

Moreover, you can see that `my-element` has its `my-element-property` bound to `aPropertyFromTheSlotModel` which is made available by the `nuxeo-slot` model. Indeed, the `[[mySlotModel]]` is an object which has a `aPropertyFromTheSlotModel` property.

For a better understanding, please refer to the [DOCUMENT_ACTIONS](#document_actions) and where we concretely detail how additional document actions are added by the [Nuxeo Drive]({{page version='' space='nxdoc' page='nuxeo-drive'}}) addon.

## Web UI slots

Here are the `nuxeo-slots` available in the Nuxeo Web UI.

### Document Browsing slots

The following slots allows to extend available pages and actions when browsing a given document. They are located in [nuxeo-browser.html](https://github.com/nuxeo/nuxeo-web-ui/blob/0.8/elements/nuxeo-browser/nuxeo-browser.html).

#### DOCUMENT_ACTIONS{{> anchor 'document_actions'}}

This slot defines the available top right actions to be performed on the current document such as *Add to collection*, *Share*, *Export*, etc.

![]({{file name='DOCUMENT_ACTIONS.png'}} ?w=400,border=true)

A typical use case for extending the Web UI is you'd like to add new document actions. Let's have a look on how it is done by the [Nuxeo Drive]({{page version='' space='nxdoc' page='nuxeo-drive'}}) addon which adds a new action to synchronize a document with local file system.

First, the DOCUMENT_ACTIONS `nuxeo-slot` is defined in the [nuxeo-browser.html](https://github.com/nuxeo/nuxeo-web-ui/blob/0.8/elements/nuxeo-browser/nuxeo-browser.html#L181) element like this:
```xml
<div class="document-actions">
  <nuxeo-slot slot="DOCUMENT_ACTIONS" model="[[actionContext]]"></nuxeo-slot>
</div>
```
and the web UI defines the default slot content in [nuxeo-document-actions.html](https://github.com/nuxeo/nuxeo-web-ui/blob/0.8/elements/nuxeo-document-actions/nuxeo-document-actions.html#L31)
```xml
<nuxeo-slot-content name="defaultDocumentActions" slot="DOCUMENT_ACTIONS">
  <template>
    <nuxeo-add-to-collection-button document="[[document]]"></nuxeo-add-to-collection-button>
    <nuxeo-favorites-toggle-button document="[[document]]"></nuxeo-favorites-toggle-button>
    <nuxeo-share-button document="[[document]]"></nuxeo-share-button>
    <nuxeo-notifications-toggle-button document="[[document]]"></nuxeo-notifications-toggle-button>
    <nuxeo-clipboard-toggle-button document="[[document]]" clipboard="[[clipboard]]"></nuxeo-clipboard-toggle-button>
    <nuxeo-lock-toggle-button document="[[document]]"></nuxeo-lock-toggle-button>
    <nuxeo-preview-button document="[[document]]"></nuxeo-preview-button>
    <nuxeo-export-button document="[[document]]"></nuxeo-export-button>
    <nuxeo-download-button document="[[document]]"></nuxeo-download-button>
  </template>
</nuxeo-slot-content>
```
Now, the Nuxeo Drive addon is able to add its own actions there too with [nuxeo-drive.html](https://github.com/nuxeo/nuxeo-drive-server/blob/8.10/nuxeo-drive-web-ui/src/main/resources/web/nuxeo.war/ui/nuxeo-drive/nuxeo-drive.html#L8):
```xml
<nuxeo-slot-content name="driveSyncToggleButton" slot="DOCUMENT_ACTIONS">
  <template>
    <nuxeo-drive-sync-toggle-button document="[[document]]"></nuxeo-drive-sync-toggle-button>
  </template>
</nuxeo-slot-content>
```
Next, in the above snippet, how the bound `document` property is resolved? The answer is found in [nuxeo-browser.html](https://github.com/nuxeo/nuxeo-web-ui/blob/0.8/elements/nuxeo-browser/nuxeo-browser.html#L129) which defines the model of the `DOCUMENT_ACTIONS` slot through the computed `actionContext` property defined [here](https://github.com/nuxeo/nuxeo-web-ui/blob/0.8/elements/nuxeo-browser/nuxeo-browser.html#L258):
```xml
_actionContext: function() {
  return {document: this.document, clipboard: this.clipboard};
},
```
The `DOCUMENT_ACTIONS` has therefore the following:

**Slot Model Properties**

| Property    | Description                        |
|:------------|:-----------------------------------|
| `document`  | The current document.              |
| `clipboard` | The application clipboard content. |

#### DOCUMENT_VIEWS_ITEMS and DOCUMENT_VIEWS_PAGES

The **DOCUMENT_VIEWS_ITEMS** slot allows to define the available items to navigate on current document views such as *View*, *Permissions* and *History*.

![]({{file name='DOCUMENT_VIEWS_ITEMS.png'}} ?w=400,border=true)

The **DOCUMENT_VIEWS_PAGES** slot must define the pages introduced by the **DOCUMENT_VIEWS_ITEMS** slot. Each new item of **DOCUMENT_VIEWS_ITEMS** slot triggers a navigation to a page defined in this slot.

Example coming soon.

**Slot Model Properties**

| Property   | Description           |
|:-----------|:----------------------|
| `document` | The current document. |

#### BLOB_ACTIONS

This slot is available on current document that has attached blobs. Default actions are *Preview*, *Delete* and *Open with Nuxeo Drive* (when the [Nuxeo Drive]({{page version='' space='nxdoc' page='nuxeo-drive'}}) addon is installed).

![]({{file name='BLOB_ACTIONS.png'}} ?w=400,border=true)

**Slot Model Properties**

| Property   | Description                                                                                                                        |
|:-----------|:-----------------------------------------------------------------------------------------------------------------------------------|
| `document` | The current document.                                                                                                              |
| `blob`     | The blob description (i.e. `{name: "nuxeo_fact sheet_0.1.png", mime-type: "image/png", encoding: null, digestAlgorithm: "MD5",…}`) |
| `xpath`    | The blob property xpath                                                                                                            |

#### BROWSE_ACTIONS{{> anchor 'browse_actions'}}

This slot is displayed when selecting one ore more children documents of a Folderish current document. It provides bulked actions on the selection such as *Add to collection*, *Delete selected items*, etc.

![]({{file name='BROWSE_ACTIONS.png'}} ?w=400,border=true)

**Slot Model Properties**

| Property        | Description                            |
|:----------------|:---------------------------------------|
| `document`      | The current document.                  |
| `selectedItems` | An array of selected content document. |

### Main Application Menu slots

The Web UI revolves around a left drawer menu allowing to navigate to documents, searches, application administration, etc. The following slots shows how to extend this menu.

#### SEARCH_MENU_BUTTONS

This slot allows to define additional searches accessible from the left menu.

![]({{file name='SEARCH_MENU_BUTTONS.png'}} ?w=400,border=true)

The [Nuxeo DAM](https://github.com/nuxeo/nuxeo-dam/blob/8.10/nuxeo-dam-web-ui/src/main/resources/web/nuxeo.war/ui/nuxeo-dam/nuxeo-dam.html) addon defines its own `Asset Search` with the following:
```xml
<nuxeo-slot-content name="damSearchMenuButtons" slot="SEARCH_MENU_BUTTONS">
  <template>
    <nuxeo-menu-icon id="assetsSearchButton" name="assetsSearch" route="search:assets" icon="icons:perm-media" label="dam.assets.heading">
    </nuxeo-menu-icon>
  </template>
</nuxeo-slot-content>
```

**Slot Model Properties**

| Property      | Description           |
|:--------------|:----------------------|
| `document`    | The current document. |
| `currentUser` | The current user.     |

#### ADMINISTRATION_MENU and ADMINISTRATION_PAGES

This ADMINISTRATION_MENU slot allows to add additional Administration sub menus.

![]({{file name='ADMINISTRATION_MENU.png'}} ?w=400,border=true)

**Slot Model Properties**

| Property      | Description           |
|:--------------|:----------------------|
| `document`    | The current document. |
| `currentUser` | The current user.     |

#### USER_MENU

This USER_MENU slot allows to add additional User sub menus.

![]({{file name='USER_MENU.png'}} ?w=400,border=true)

**Slot Model Properties**

| Property      | Description           |
|:--------------|:----------------------|
| `document`    | The current document. |
| `currentUser` | The current user.     |

#### PAGES and DRAWER_PAGES

Documentation coming soon.

**Slot Model Properties**

| Property      | Description           |
|:--------------|:----------------------|
| `document`    | The current document. |
| `currentUser` | The current user.     |

### Document creation

#### DOCUMENT_CREATE_ACTIONS

This slot provides actions displayed when hovering the bottom right Floating Action Button to create new documents. By default, it inserts [nuxeo-document-create-shortcuts.html](https://github.com/nuxeo/nuxeo-web-ui/blob/0.8/elements/nuxeo-document-create-actions/nuxeo-document-create-shortcuts.html) which shows shortcuts to latest created document types wizard.

![]({{file name='DOCUMENT_CREATE_ACTIONS.png'}} ?w=400,border=true)

**Slot Model Properties**

| Property      | Description                                                              |
|:--------------|:-------------------------------------------------------------------------|
| `hostVisible` | Boolean which is true if the FAB is hovered.                             |
| `subtypes`    | Array of the document types that can be created in the current location. |


#### FILE_UPLOAD_ACTIONS

This slot is for instance used the [Nuxeo Live Connect]({{page version='' space='nxdoc' page='nuxeo-liveconnect'}}) addon which inserts additional import wizard to upload Files to cloud services.

![]({{file name='FILE_UPLOAD_ACTIONS.png'}} ?w=400,border=true)

**Slot Model Properties**

| Property | Description |
|:---------|:------------|

### Search and Collection browsing slots

The screen displayed to browse Search result and Collection content are very similar. When selecting items in the search results or the collection content, some bulk actions are displayed in a top menu bar (like [BROWSE_ACTIONS](#browse_actions)). These actions can be extended with the following slots.

#### SEARCH_ACTIONS

![]({{file name='SEARCH_ACTIONS.png'}} ?w=400,border=true)

**Slot Model Properties**

| Property        | Description                                                                                                                                     |
|:----------------|:------------------------------------------------------------------------------------------------------------------------------------------------|
| `items`         | Array of displayed result items returned by the search, selected or not. (Note: more results could be loaded if you keep scrolling for results) |
| `selectedItems` | Array of selected results.                                                                                                                      |

#### COLLECTION_ACTIONS

![]({{file name='COLLECTION_ACTIONS.png'}} ?w=400,border=true)

**Slot Model Properties**

| Property        | Description                                                                                                                    |
|:----------------|:-------------------------------------------------------------------------------------------------------------------------------|
| `items`         | Array of displayed collection members, selected or not. (Note: more members could be loaded if you keep scrolling for results) |
| `selectedItems` | Array of selected collection members.                                                                                          |

### Other slots

#### ANALYTICS_ITEMS and ANALYTICS_PAGES

The **DOCUMENT_VIEWS_ITEMS** slot allows to define the available items in the analytics dashboard (accessible from the Admin menu) such as  *Document distribution*, *Repository content*, *Workflow*, etc.

![]({{file name='ANALYTICS_ITEMS.png'}} ?w=400,border=true)

**Slot Model Properties**

| Property | Description |
|:---------|:------------|
