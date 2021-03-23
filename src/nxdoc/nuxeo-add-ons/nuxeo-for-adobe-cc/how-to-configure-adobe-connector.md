---
title: 'HOWTO: Customize Adobe Connector Default Tabs'
description: 'The Nuxeo for Adobe CC addon enables creative users to interact directly with Nuxeo repository assets from within InDesign, Photoshop or Illustrator.'
review:
    comment: ''
    date: '2019-10-21'
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

Make sure that these addons are installed on your instance:
  - Nuxeo Web UI
  - Nuxeo DAM (For Nuxeo 2019. Included by default in LTS 2021)
  - Nuxeo for Adobe CC

In your Studio project, go to **External Templates** and install **Default Adobe CC Connector Configuration**</br>
  Once the template installed, 5 new page providers appear on your Studio project:
  - `adobe-connector-all-images`
  - `adobe-connector-browse`
  - `adobe-connector-other_primary`
  - `adobe-connector-other_secondary`
  - `adobe-connector-search`

## Search Tab

By default the Search tab is configured to search all pictures. But it's possible to customize it to only search specific document, videos, etc.

Let's say that you want to customize it to only display your custom document type called `products`, to do so:

1. On Studio Modeler, go to **Page Providers** > **adobe-connector-all-images**
1. In **Query Filter**, replace the existing filter by:
  ```
  ecm:mixinType != 'HiddenInNavigation' AND ecm:isCheckedInVersion = 0 AND ecm:isTrashed=0 AND ecm:primaryType='products' AND ecm:currentLifeCycleState='project'
  ```

## Browse Tab

By default the Browse tab browse all the repository. You can customize it to browse only in a specific folder or workspace.</br>
Let's say that you have a custom folder named `contracts`.

1. On Studio Modeler, go to **Page Providers** > **adobe-connector-browse**
2. Replace the existing filter by:
```
ecm:parentId = '?' AND ecm:isProxy = 0 AND ecm:mixinType != 'HiddenInNavigation' AND ecm:isVersion = 0 AND ecm:isTrashed=0 AND (ecm:primaryType != 'Collection' AND ecm:primaryType= 'contracts'
```

## Other Tab

By default the Other tab is configured to work with the Collections within your repository.
Let's say that here we only want to display your favorites:

1. On Studio Modeler, go to **Page Providers** > **adobe-connector-other-primary**
2. Replace the existing filter by:
```
ecm:primaryType='Favorites'
```
