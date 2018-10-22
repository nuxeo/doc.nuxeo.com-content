---
title: 'HOWTO: Customize Slots'
review:
    comment: ''
    date: '2017-12-15'
    status: ok
toc: true
details:
    howto:
        excerpt: Learn how to use Nuxeo Slots with Web UI.
        level: Advanced
        tool: code
        topics: Web UI
labels:
    - lts2016-ok
    - nuxeo-web-ui
    - gbarata
    - extension
    - nuxeo-slot
    - nuxeo-slot-content
    - lts2017-ok
tree_item_index: 900

---
## Concept

Nuxeo slots are mechanisms which extend part of the Nuxeo Web UI. A couple of `nuxeo-slots` are hardcoded in the web-ui source code in order to insert your own HTML elements and extend the Web UI to meet your specific needs.

{{#> callout type='info' heading='Nuxeo University'}}
Watch the related courses on Nuxeo University
- [WebUI Customization and Nuxeo Frontend Development](https://university.nuxeo.com/learn/course/external/view/elearning/164/webui-customization-and-nuxeo-frontend-development).
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/UNIVERSITY/WEBUI_CUSTOMIZATION_FRONTEND_DEV
    name: Screenshot 2018-10-22 at 14.58.21.png
    1.1.3#screenshot#up_to_date
--}}
![WEBUI_CUSTOMIZATION_FRONTEND_DEV](nx_asset://233ef043-0939-4ff6-88a6-13dcb92660b0 ?w=450,border=true)

{{/callout}}

The concept is simple. Let's assume we introduced the following slot somewhere in the Web UI:

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
and this content will be inserted in the DOM right before where the `nuxeo-slot` is located.

You can see that `my-element` has its `my-element-property` bound to `aPropertyFromTheSlotModel` which is made available by the `nuxeo-slot` model. The `[[mySlotModel]]` is an object which has a `aPropertyFromTheSlotModel` property.

{{#> callout type='info' }}

*   Note that every slot on Web UI exposes a property named `user` by default, which contains the current user object.

{{/callout}}

For a better understanding, please refer to the [DOCUMENT_ACTIONS](#document_actions) and where we concretely detail how additional document actions are added by the [Nuxeo Drive]({{page version='' space='nxdoc' page='nuxeo-drive'}}) addon.

## Summary
Here are the `nuxeo-slots` available in the Nuxeo Web UI.

<div class="table-scroll"><table class="hover">
  <tbody>
    <tr>
      <td colspan="1">**Slot name**</td>
      <td colspan="1">**Extension purpose**</td>
      <td colspan="1">**Where**</td>
   </tr>
   <tr>
     <td colspan="1">[DOCUMENT_ACTIONS](#document_actions)</td>
     <td colspan="1">Additional Current document actions</td>
     <td colspan="1">![]({{file name='DOCUMENT_ACTIONS.png'}} ?w=100,border=true)</td>
  </tr>
  <tr>
    <td colspan="1">[DOCUMENT_VIEWS_ITEMS](#document_view_items)</td>
    <td colspan="1">Additional Current document views</td>
    <td colspan="1">![]({{file name='DOCUMENT_VIEWS_ITEMS.png'}} ?w=100,border=true)</td>
 </tr>
 <tr>
   <td colspan="1">[DOCUMENT_VIEWS_PAGES](#document_view_pages)</td>
   <td colspan="1">Additional Current content of the "View" pill</td>
   <td colspan="1">
     {{!--     ### nx_asset ###
      path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/HOWTO: Customize Slots/DOCUMENT_VIEWS_PAGES.png
      name: DOCUMENT_VIEWS_PAGES.png
      1.1.3#screenshot#up_to_date
    --}}
    ![DOCUMENT_VIEWS_PAGES.png](nx_asset://b4ddfb6a-f5df-4e9c-9353-31fd2ddb28df ?w=100,border=true)
    </td>
  </tr>
  <tr>
    <td colspan="1">[BLOB_ACTIONS](#blob_actions)</td>
    <td colspan="1">Additional Current document blobs actions</td>
    <td colspan="1">![]({{file name='BLOB_ACTIONS.png'}} ?w=100,border=true)</td>
  </tr>
  <tr>
    <td colspan="1">[RESULTS_SELECTION_ACTIONS](#results_selection_actions)</td>
    <td colspan="1">Additional actions for selected items</td>
    <td colspan="1">![]({{file name='RESULTS_SELECTION_ACTIONS.png'}} ?w=100,border=true)</td>
  </tr>
  <tr>
    <td colspan="1">[RESULTS_ACTIONS](#results_actions)</td>
    <td colspan="1">Additional actions/views for results</td>
    <td colspan="1">![]({{file name='RESULTS_ACTIONS.png'}} ?w=100,border=true)</td>
  </tr>
  <tr>
    <td colspan="1">[ADMINISTRATION_MENU](#administration_menu) <br/> [ADMINISTRATION_PAGES](#administration_menu)</td>
    <td colspan="1">Additional Administration menu</td>
    <td colspan="1">![]({{file name='ADMINISTRATION_MENU.png'}} ?w=100,border=true)</td>
  </tr>
  <tr>
    <td colspan="1">[USER_MENU](#user_menu)</td>
    <td colspan="1">Additional User menu</td>
    <td colspan="1">![]({{file name='USER_MENU.png'}} ?w=100,border=true)</td>
  </tr>
  <tr>
    <td colspan="1">[DRAWER_PAGES](#drawer_pages) <br/> [DRAWER_ITEMS](#drawer_pages) <br/> [PAGES](#drawer_pages)</td>
    <td colspan="1">Additional main menu items</td>
    <td colspan="1">![]({{file name='DRAWER_PAGES.png'}} ?w=100,border=true)</td>
  </tr>
  <tr>
    <td colspan="1">[DOCUMENT_CREATE_ACTIONS](#document_create_actions)</td>
    <td colspan="1">Additional document creation actions</td>
    <td colspan="1">![]({{file name='DOCUMENT_CREATE_ACTIONS.png'}} ?w=100,border=true)</td>
  </tr>
  <tr>
    <td colspan="1">[CREATE_POPUP_ITEMS](#create_popup_items)   <br/> [CREATE_POPUP_PAGES](#create_popup_items)</td>
    <td colspan="1">Additional items on the creation pop-up</td>
    <td colspan="1">![]({{file name='CREATE_POPUP_ITEMS.png'}} ?w=100,border=true)</td>
  </tr>
  <tr>
    <td colspan="1">[FILE_UPLOAD_ACTIONS](#file_upload_actions)</td>
    <td colspan="1">Additional document import wizards</td>
    <td colspan="1">![]({{file name='FILE_UPLOAD_ACTIONS.png'}} ?w=100,border=true)</td>
  </tr>
  <tr>
    <td colspan="1">[COLLECTION_ACTIONS](#collection_actions)</td>
    <td colspan="1">Additional collection members selection actions</td>
    <td colspan="1">![]({{file name='COLLECTION_ACTIONS.png'}} ?w=100,border=true)</td>
  </tr>
  <tr>
    <td colspan="1">[ANALYTICS_ITEMS](#analytics_pages) <br/> [ANALYTICS_PAGES](#analytics_pages)</td>
    <td colspan="1">Additional analytics pages</td>
    <td colspan="1">![]({{file name='ANALYTICS_ITEMS.png'}} ?w=100,border=true)</td>
  </tr>
  <tr>
    <td colspan="1">[THEMES](#themes)</td>
    <td colspan="1">Additional UI themes</td>
    <td colspan="1">![]({{file name='THEMES.png'}} ?w=100,border=true)</td>
  </tr>
</tbody></table></div>

## Details

### Document Browsing Slots

The following slots allow you to extend available pages and actions when browsing a given document. They are located in [nuxeo-browser.html](https://github.com/nuxeo/nuxeo-web-ui/blob/9.10/elements/nuxeo-browser.html).

#### DOCUMENT_ACTIONS{{> anchor 'document_actions'}}

This slot defines the available top right actions to be performed on the current document such as *Add to collection*, *Share*, *Export*, etc.

![]({{file name='DOCUMENT_ACTIONS.png'}} ?w=400,border=true)

A typical use case for extending the Web UI is you'd like to add new document actions. Let's have a look on how it is done with the [Nuxeo Drive]({{page version='' space='nxdoc' page='nuxeo-drive'}}) addon which adds a new action to synchronize a document with the local file system.

First, the DOCUMENT_ACTIONS `nuxeo-slot` is defined in the [nuxeo-browser.html](https://github.com/nuxeo/nuxeo-web-ui/blob/9.10/elements/nuxeo-browser.html) element like this:
```xml
<div class="document-actions">
  <nuxeo-slot slot="DOCUMENT_ACTIONS" model="[[actionContext]]"></nuxeo-slot>
</div>
```
and the web UI defines the default slot content in [nuxeo-web-ui-bundle.html](https://github.com/nuxeo/nuxeo-web-ui/blob/9.10/elements/nuxeo-web-ui-bundle.html)
```xml
<nuxeo-slot-content name="addToColDocumentAction" slot="DOCUMENT_ACTIONS" order="20">
  <template>
    <nuxeo-add-to-collection-button document="[[document]]"></nuxeo-add-to-collection-button>
  </template>
</nuxeo-slot-content>

<nuxeo-slot-content name="favoriteToggleDocumentAction" slot="DOCUMENT_ACTIONS" order="30">
  <template>
    <nuxeo-favorites-toggle-button document="[[document]]"></nuxeo-favorites-toggle-button>
  </template>
</nuxeo-slot-content>

...

<nuxeo-slot-content name="workflowDocumentAction" slot="DOCUMENT_ACTIONS" order="110">
  <template>
    <nuxeo-workflow-button document="[[document]]"></nuxeo-workflow-button>
  </template>
</nuxeo-slot-content>
```
Now, the Nuxeo Drive addon is able to add its own actions there with [nuxeo-drive.html](https://github.com/nuxeo/nuxeo-drive-server/blob/9.10/nuxeo-drive-web-ui/src/main/resources/web/nuxeo.war/ui/nuxeo-drive/nuxeo-drive.html):
```xml
<nuxeo-slot-content name="driveSyncToggleButton" slot="DOCUMENT_ACTIONS">
  <template>
    <nuxeo-drive-sync-toggle-button document="[[document]]"></nuxeo-drive-sync-toggle-button>
  </template>
</nuxeo-slot-content>
```
Next, in the above snippet, how is the bound `document` property resolved? The answer is found in [nuxeo-browser.html](https://github.com/nuxeo/nuxeo-web-ui/blob/9.10/elements/nuxeo-browser.html) which defines the model of the `DOCUMENT_ACTIONS` slot through the computed `actionContext` property as follows:
```javascript
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

{{#> callout type='info' }}
  Discover how to [insert a new user action on Web UI with Studio Designer]({{page version='' space='nxdoc' page='how-to-insert-user-action'}}).
{{/callout}}

{{#> callout type='tip' }}
  The model of every slot exposed by Web UI as the current user available under the `user` property.
{{/callout}}

#### DOCUMENT_VIEWS_ITEMS{{> anchor 'document_view_items'}}

The **DOCUMENT_VIEWS_ITEMS** slot allows you to define the available items to navigate the current document views such as *View*, *Permissions* and *History*.

![]({{file name='DOCUMENT_VIEWS_ITEMS.png'}} ?w=400,border=true)

Each new item of **DOCUMENT_VIEWS_ITEMS** slot triggers a navigation to a page defined in this slot.

**Slot Model Properties**

| Property   | Description           |
|:-----------|:----------------------|
| `document` | The current document. |


#### DOCUMENT_VIEWS_PAGES{{> anchor 'document_view_pages'}}

The **DOCUMENT_VIEWS_PAGES** slot displays the content of the default "View" Pill.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/HOWTO: Customize Slots/DOCUMENT_VIEWS_PAGES.png
    name: DOCUMENT_VIEWS_PAGES.png
    1.1.3#screenshot#up_to_date
--}}
![DOCUMENT_VIEWS_PAGES.png](nx_asset://b4ddfb6a-f5df-4e9c-9353-31fd2ddb28df ?w=400,border=true)

The **DOCUMENT_VIEWS_PAGES** slot define the pages introduced by the **DOCUMENT_VIEWS_ITEMS** slot.

**Slot Model Properties**

| Property   | Description           |
|:-----------|:----------------------|
| `document` | The current document. |

#### BLOB_ACTIONS{{> anchor 'blob_actions'}}

This slot is available on a current document that has attached blobs. Default actions are *Preview*, *Delete* and *Open with Nuxeo Drive* (when the [Nuxeo Drive]({{page version='' space='nxdoc' page='nuxeo-drive'}}) addon is installed).

![]({{file name='BLOB_ACTIONS.png'}} ?w=400,border=true)

**Slot Model Properties**

| Property   | Description                                                                                                                        |
|:-----------|:-----------------------------------------------------------------------------------------------------------------------------------|
| `document` | The current document.                                                                                                              |
| `blob`     | The blob description (i.e. `{name: "nuxeo_fact sheet_0.1.png", mime-type: "image/png", encoding: null, digestAlgorithm: "MD5",…}`) |
| `user`     | The current user                                                                                                                   |
| `xpath`    | The blob property xpath                                                                                                            |

#### RESULTS_SELECTION_ACTIONS {{> anchor 'results_selection_actions'}}

{{#> callout type='note' }}

*   Until Web-UI version `0.9`, this slot was called `BROWSE_ACTIONS` and its properties may have changed.

{{/callout}}

This slot is displayed when selecting one or more children documents of a folderish current document. It provides bulked actions on the selection such as *Add to collection*, *Delete selected items*, etc.

![]({{file name='RESULTS_SELECTION_ACTIONS.png'}} ?w=400,border=true)

**Slot Model Properties**

| Property        | Description                                  |
|:----------------|:---------------------------------------------|
| `baseUrl`       | The base URL of the Nuxeo server             |
| `nxProvider`    | The name of the page provider                |
| `displayMode`   | The current display mode (e.g., grid, table) |
| `selectedItems` | Array of selected documents.                 |
| `items`         | Array of all loaded documents.               |
| `columns`       | Array with the available table columns       |
| `document`      | The current document                         |

#### RESULTS_ACTIONS {{> anchor 'results_actions'}}

{{#> callout type='note' }}

*    Until Web-UI version `0.9`, this slot was called `DOCUMENT_LISTING_ACTIONS` and its properties may have changed.

{{/callout}}

This slot allows to provide additional action buttons on folderish documents or results page such as *grid view*, *table view*, etc.

![]({{file name='RESULTS_ACTIONS.png'}} ?w=400,border=true)

**Slot Model Properties**

| Property        | Description                                                                                                              |
|:----------------|:-------------------------------------------------------------------------------------------------------------------------|
| `baseUrl`       | The base URL of the Nuxeo server.                                                                                        |
| `nxProvider`    | The name of the page provider.                                                                                           |
| `displayMode`   | The current display mode (e.g., grid, table).                                                                            |
| `selectedItems` | Array of selected documents.                                                                                             |
| `items`         | Array of displayed documents, selected or not. (Note: more documents could be loaded if you keep scrolling for results). |
| `columns`       | Array with the available table columns.                                                                                  |
| `document`      | The current document.                                                                                                    |

### Main Application Menu Slots

The Web UI revolves around a left drawer menu allowing to navigate to documents, searches, application administration, collections, etc. The following slots show how to extend this menu.

#### ADMINISTRATION_MENU and ADMINISTRATION_PAGES{{> anchor 'administration_menu'}}

The `ADMINISTRATION_MENU` and `ADMINISTRATION_PAGES` slot allow you to add additional Administration sub menus (see screenshot below) and works exactly the same as the [USER_MENU](#user_menu).

![]({{file name='ADMINISTRATION_MENU.png'}} ?w=400,border=true)

**Slot Model Properties**

| Property            | Description                                              |
|:--------------------|:---------------------------------------------------------|
| `document`          | The current document.                                    |
| `tasks`             | Pending tasks assigned to the current user.              |
| `taskCount`         | Number of pending tasks assigned to the current user.    |
| `currentTask`       | Current task being processed by the current user if any. |
| `clipboardDocCount` | Number of documents in the clipboard.                    |
| `clipboard`         | The clipboard element.                                   |
| `userWorkspace`     | The user workspace path.                                 |

#### USER_MENU{{> anchor 'user_menu'}}

This USER_MENU slot allows you to add additional User sub menu items.

![]({{file name='USER_MENU.png'}} ?w=400,border=true)

On the above screenshot, you can see there's a Nuxeo Drive User menu item which is not part of the default Web UI. It is extended by the [Nuxeo Drive]({{page version='' space='nxdoc' page='nuxeo-drive'}}) addon which contributes the `USER_MENU` slot with [nuxeo-drive.html](https://github.com/nuxeo/nuxeo-drive-server/blob/9.10/nuxeo-drive-web-ui/src/main/resources/web/nuxeo.war/ui/nuxeo-drive/nuxeo-drive.html):

```xml
<nuxeo-slot-content name="drivePageLink" slot="USER_MENU">
  <template>
    <nuxeo-menu-item route="page:drive" label="app.user.drive"></nuxeo-menu-item>
  </template>
</nuxeo-slot-content>
```
Note the:
```properties
route="page:drive"
```
Thanks to this property, clicking on this menu item will navigate to a page named `drive`. This page is also contributed to the Web UI with the [PAGES](#drawer_pages) slot extension also from [nuxeo-drive.html](https://github.com/nuxeo/nuxeo-drive-server/blob/9.10/nuxeo-drive-web-ui/src/main/resources/web/nuxeo.war/ui/nuxeo-drive/nuxeo-drive.html):

```xml
<nuxeo-slot-content name="drivePage" slot="PAGES">
  <template>
    <nuxeo-drive-page class="flex" name="drive"></nuxeo-drive-page>
  </template>
</nuxeo-slot-content>
```
which will be inserted in [nuxeo-app.html](https://github.com/nuxeo/nuxeo-web-ui/blob/9.10/elements/nuxeo-app.html).

**Slot Model Properties**

| Property            | Description                                              |
|:--------------------|:---------------------------------------------------------|
| `document`          | The current document.                                    |
| `tasks`             | Pending tasks assigned to the current user.              |
| `taskCount`         | Number of pending tasks assigned to the current user.    |
| `currentTask`       | Current task being processed by the current user if any. |
| `clipboardDocCount` | Number of documents in the clipboard.                    |
| `clipboard`         | The clipboard element.                                   |
| `userWorkspace`     | The user workspace path.                                 |

#### DRAWER_PAGES and PAGES {{> anchor 'drawer_pages'}}

The `DRAWER_PAGES` allows you to add new items to the main left drawer menu (see screenshot below) and works exactly the same as the [USER_MENU](#user_menu).

![]({{file name='DRAWER_PAGES.png'}} ?w=400,border=true)

**Slot Model Properties**

| Property            | Description                                              |
|:--------------------|:---------------------------------------------------------|
| `document`          | The current document.                                    |
| `tasks`             | Pending tasks assigned to the current user.              |
| `taskCount`         | Number of pending tasks assigned to the current user.    |
| `currentTask`       | Current task being processed by the current user if any. |
| `clipboardDocCount` | Number of documents in the clipboard.                    |
| `clipboard`         | The clipboard element.                                   |
| `userWorkspace`     | The user workspace path.                                 |

### Document Creation

#### DOCUMENT_CREATE_ACTIONS{{> anchor 'document_create_actions'}}

This slot displays actions when hovering over the bottom right **Floating Action Button** to create new documents. By default, it inserts [nuxeo-document-create-shortcuts.html](https://github.com/nuxeo/nuxeo-web-ui/blob/9.10/elements/nuxeo-document-create-actions/nuxeo-document-create-shortcuts.html) which shows shortcuts to the latest created document types wizard.

![]({{file name='DOCUMENT_CREATE_ACTIONS.png'}} ?w=400,border=true)

**Slot Model Properties**

| Property      | Description                                                              |
|:--------------|:-------------------------------------------------------------------------|
| `hostVisible` | Boolean which is true if hovering over the FAB.                          |
| `subtypes`    | Array of the document types that can be created in the current location. |

#### CREATE_POPUP_ITEMS and CREATE_POPUP_PAGES{{> anchor 'create_popup_items'}}

The **CREATE_POPUP_ITEMS** slot allows you to define the additional items on the document creation pop-up, such as *CSV Import*.

![]({{file name='CREATE_POPUP_ITEMS.png'}} ?w=400,border=true)

The **CREATE_POPUP_PAGES** slot must define the pages introduced by the **CREATE_POPUP_ITEMS** slot.
Each new item of **CREATE_POPUP_ITEMS** slot triggers a navigation to a page defined in this slot.

| Property | Description                                                                                                 |
|:---------|:------------------------------------------------------------------------------------------------------------|
| `parent` | The document that was opened when the pop-up was triggered or the folderish document where it is contained. |
| `i18n`   | The i18n function helper to localize labels.                                                                |

#### FILE_UPLOAD_ACTIONS{{> anchor 'file_upload_actions'}}

This slot is used in the [Nuxeo Live Connect]({{page version='' space='nxdoc' page='nuxeo-live-connect'}}) addon which inserts additional import wizards to upload Files to cloud services.

![]({{file name='FILE_UPLOAD_ACTIONS.png'}} ?w=400,border=true)

**Slot Model Properties**

There are no properties for this slot.

### Search and Collection Browsing Slots

The screen to browse Search results and Collection contents are very similar. When selecting items in the search results or the collection contents, some bulk actions are displayed in a top menu bar (like [RESULTS_SELECTION_ACTIONS](#results_selection_actions)). These actions can be extended with the following slots.

#### COLLECTION_ACTIONS{{> anchor 'collection_actions'}}

![]({{file name='COLLECTION_ACTIONS.png'}} ?w=400,border=true)

**Slot Model Properties**

| Property        | Description                                                                                                                    |
|:----------------|:-------------------------------------------------------------------------------------------------------------------------------|
| `collection`    | The current document, corresponding to the current opened collection                                                           |
| `items`         | Array of displayed collection members, selected or not. (Note: more members could be loaded if you keep scrolling for results) |
| `selectedItems` | Array of selected collection members.                                                                                          |

### Other Slots

#### ANALYTICS_ITEMS and ANALYTICS_PAGES {{> anchor 'analytics_pages'}}

The **ANALYTICS_ITEMS** slot allows to define the available items in the analytics dashboard (accessible from the Admin menu) such as  *Document distribution*, *Repository content*, *Workflow*, etc.

![]({{file name='ANALYTICS_ITEMS.png'}} ?w=400,border=true)

**Slot Model Properties**

There are no properties for this slot.

#### THEMES {{> anchor 'themes'}}

The **THEMES** slot allows to define additional themes for the user interface, selectable in the themes page (accessible from the user menu).

![]({{file name='THEMES.png'}} ?w=400,border=true)

**Slot Model Properties**

There are no properties for this slot.
