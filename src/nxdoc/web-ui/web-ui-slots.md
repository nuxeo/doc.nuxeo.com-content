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

Nuxeo slots are mechanisms to extend part of the nuxeo Web UI.

TODO

## Web UI default slots

Here are the `nuxeo-slots` available in the Nuxeo Web UI.

### Main Application Menu slots

The Web UI browsing is articulated around a left drawer menu allowing to navigate to documents, searches, application administration, etc. The following slots shows how to extend this menu.

#### PAGES and DRAWER_PAGES

#### SEARCH_MENU_BUTTONS

This slot allows to define additional searches accessible from the left menu.

![]({{file name='SEARCH_MENU_BUTTONS.png'}} ?w=400,border=true)

#### ADMINISTRATION_MENU and ADMINISTRATION_PAGES

This ADMINISTRATION_MENU slot allows to add additional Administration sub menus.

![]({{file name='ADMINISTRATION_MENU.png'}} ?w=400,border=true)

#### USER_MENU

This USER_MENU slot allows to add additional User sub menus.

![]({{file name='USER_MENU.png'}} ?w=400,border=true)

### Document Browsing slots

The following slots allows to extend available pages and actions when browsing a given document. They are located in [nuxeo-browser.html](https://github.com/nuxeo/nuxeo-web-ui/blob/0.8/elements/nuxeo-browser/nuxeo-browser.html).

#### DOCUMENT_VIEWS_ITEMS and DOCUMENT_VIEWS_PAGES

The **DOCUMENT_VIEWS_ITEMS** slot allows to define the available items to navigate on current document views such as *View*, *Permissions* and *History*.

![]({{file name='DOCUMENT_VIEWS_ITEMS.png'}} ?w=400,border=true)


The **DOCUMENT_VIEWS_PAGES** slot must define the pages introduced by the **DOCUMENT_VIEWS_ITEMS** slot. Each new item of **DOCUMENT_VIEWS_ITEMS** slot triggers a navigation to a page defined in this slot.

TODO: give example

#### DOCUMENT_ACTIONS

This slot allows to define the available top right actions to be performed on the current document such as *Ass to collection*, *Share*, *Export*, etc.

![]({{file name='DOCUMENT_ACTIONS.png'}} ?w=400,border=true)

#### BROWSE_ACTIONS{{> anchor 'BROWSE_ACTIONS'}}

This slot is displayed when selecting one ore more children documents of a Folderish current document. It provides bulked actions on the selection such as *Add to collection*, *Delete selected items*, etc.

![]({{file name='BROWSE_ACTIONS.png'}} ?w=400,border=true)

### Search and Collection browsing slots

The screen displayed to browse Search result and Collection content are very similar. When selecting items in the search results or the collection content, some bulk actions are displayed in a top menu bar (like [BROWSE_ACTIONS](#browse_actions-anchor-browse_actions-)). These actions can be extended with the following slots.

#### SEARCH_ACTIONS

![]({{file name='SEARCH_ACTIONS.png'}} ?w=400,border=true)

#### COLLECTION_ACTIONS

![]({{file name='COLLECTION_ACTIONS.png'}} ?w=400,border=true)

### Other slots

#### ANALYTICS_ITEMS and ANALYTICS_PAGES

The **DOCUMENT_VIEWS_ITEMS** slot allows to define the available items in the analytics dashboard (accessible from the Admin menu) such as  *Document distribution*, *Repository content*, *Workflow*, etc.

![]({{file name='ANALYTICS_ITEMS.png'}} ?w=400,border=true)
