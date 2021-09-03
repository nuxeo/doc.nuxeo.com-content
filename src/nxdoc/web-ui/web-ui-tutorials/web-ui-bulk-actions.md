---
title: 'Bulk Actions in Web UI'
review:
    comment: ''
    date: '2021-09-03'
    status: ok
toc: true
labels:
    - nuxeo-web-ui
    - bulk
tree_item_index: 490
---

Prerequisites
  Uses BAF

How to enable the feature
  nuxeo.selection.selectAllEnabled=true on nuxeo.conf

Default actions available or not
  The following default actions are available once I select all:

      Add to collection
      Remove From Collection (when viewing a collection)
      Publish
      Send to trash
      Untrash (in trash view)
      Delete permanently (in trash view)

  The following actions are NOT available when I select all:

      Download all as zip
      Compare
      Add to clipboard
      Move Document Up and Down
  https://jira.nuxeo.com/browse/WEBUI-300

Usage and principles
  Selects everything, visible or not
  States: scheduled, running etc
  Abort
  Error mgt
  Notifications mgt

How to configure your own bulk action using studio => send to dedicated page
  refresh event to update the UI
  refresh-display event to keep selection

-------------
In userdoc, just mention for actions they can be done in bulk and send back here
