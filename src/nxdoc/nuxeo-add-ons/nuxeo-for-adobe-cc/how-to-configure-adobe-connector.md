---
title: 'HOWTO: Configure Adobe Connector Default Tabs'
description: 'The Nuxeo for Adobe CC addon enables creative users to interact directly with Nuxeo repository assets from within InDesign, Photoshop or Illustrator.'
review:
    comment: ''
    date: '2019-06-20'
    status: ok
labels:
    - adobe-cc
    - lmcintyre
    - addon
    - tutorial
    - howto
toc: true
tree_item_index: 100
---

The Nuxeo for Adobe CC connector comes with 3 tabs: Search, Browse and Other. Those tabs can be configured to better fit your needs, let's discover how to do it!

## Prerequisites

- Nuxeo Web UI
- Nuxeo DAM
- Nuxeo for Adobe CC
- **External Templates** > **Default Adobe CC Connector Configuration**</br>
  Once the template installed, 5 new page providers appear on your Studio project:
    - `adobe-connector-all-images`
    - `adobe-connector-browse`
    - `adobe-connector-other_primary`
    - `adobe-connector-other_secondary`
    - `adobe-connector-search`

## Search Tab

By default the Search tab is configured to search all pictures. But it's possible to customize it to only search specific document, videos, etc.

Let's say that you only want to customize it to display only your custom document type, to do so:

1. On Studio Modeler, go to **Page Providers** > **adobe-connector-all-images**
1. In "Query Filter":
  ```
  ecm:mixinType != 'HiddenInNavigation' AND ecm:isCheckedInVersion = 0 AND ecm:isTrashed=0 AND ecm:primaryType='FILE' AND ecm:currentLifeCycleState='project'
  ```

SCREENSHOT


## Browse Tab

Browse all repostiory

1. On Studio Modeler, go to **Page Providers** > **adobe-connector-browse**
```
ecm:parentId = '?' AND ecm:isProxy = 0 AND ecm:mixinType != 'HiddenInNavigation' AND ecm:isVersion = 0 AND ecm:isTrashed=0 AND (ecm:primaryType != 'Collection' AND ecm:primaryType= 'FOLDER'
```

SCREENSHOT

## Other Tab

By default the Other Tab is configured to work with the Collections within your repository.

1. On Studio Modeler, go to **Page Providers** > **adobe-connector-other-primary**
```

```



SCREENSHOT
