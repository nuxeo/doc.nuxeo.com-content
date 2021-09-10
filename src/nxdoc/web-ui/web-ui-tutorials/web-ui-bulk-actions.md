---
title: 'Bulk Actions in Web UI'
review:
    comment: ''
    date: '2021-09-07'
    status: ok
toc: true
labels:
    - nuxeo-web-ui
    - bulk
tree_item_index: 490
---

## Enabling Bulk Actions

{{#> callout type='info'}}
Bulk actions leverage the [Bulk Action Framework]({{page page='bulk-action-framework'}}). Make sure your [architecture]({{page page='nuxeo-reference-architectures'}}) complies with it.
{{/callout}}

Bulk actions were introduced to LTS 2021 with Web UI 3.0.6. To prevent bringing any breaking change through an update, you need to enable this feature explicitly by adding the following property to your [nuxeo.conf]({{page page='configuration-parameters-index-nuxeoconf'}}) file:
```
nuxeo.selection.selectAllEnabled=true
```

## Using Bulk Actions

Once enabled, users can select all documents in a results listing and execute an action on them. A selection can be done while browsing content and in the context of search results. It is possible to select all documents after using filters as well to fine tune the results first. Note that adding filters, changing the display or the sort order for the results causes the current selection to be lost: this results in sending a different query to the server and we cannot keep track of the difference between the two without hurting performance.

//TODO image select all and default bulk actions

//TODO image select all after filtering

Clicking on the checkbox of the header selects all documents at once, both the ones that are visible and the ones that are not currently displayed on screen. Clicking it again deselects all documents. Note that it is not possible to deselect documents individually at this stage.

### Available Default Bulk Actions

Once the selection is made, the following default actions are available as bulk actions:

* Add to collection
* Remove From Collection (when viewing a collection)
* Publish
* Delete (send to trash)
* Untrash (in trash view)
* Delete permanently (in trash view)

The following default actions are NOT available as bulk actions:

* Download all as zip. This action would not be scalable. To download files in large numbers, we recommend using [Nuxeo Drive]({{page page='nuxeo-drive'}}) instead.
* Compare. Web UI and Nuxeo Server provide the capacity to [compare two documents]({{page space='userdoc' page='compare'}}) or versions at this stage.
* Add to clipboard. This action is handled on the client side and does not make use of the [bulk action framework]({{page page='bulk-action-framework'}}). If you want to integrate an action that allows you to do this at scale, you can take inspiration from our <a href="https://github.com/nuxeo/nuxeo-studio-community-cookbook/tree/master/modules/nuxeo/copy-move" target="_blank">copy / move cookbook</a> entry and adapt it, knowing that you can [create your custom bulk actions using Nuxeo Studio]({{page page='howto-create-bulk-actions-studio' space='studio'}}).
* Move Document Up and Down (in the context of ordered folders). This would only cause useless processing since moving all documents up or down would yield the same result.

### Bulk Actions Notifications Management

When launching a bulk action, a notification is updated regularly in Web UI, providing its current state and allowing the user to abort it.

A bulk action starts in the scheduled state, meaning that it is added to a queue, waiting to be executed. During that state, clicking the `abort` button in the notification will only remove the bulk action from the queue. No processing has happened yet.

//TODO image

While the action is running, clicking the `abort` button in the notification will stop any processing currently occurring. No rollback will happen on documents that have been already processed.

//TODO image

Once the action is completed, the notification will remain until the user decides to dismiss it. If an error happened, the user will be informed in the notification. Administrators can gather further information about the error from the application logs.

//TODO image

To avoid cluttering the UI when executing many bulk actions in parallel, three (3) notifications maximum will be displayed at a time. Each bulk action counts for one notification. If more notifications have to appear in the UI, the oldest notification will be removed.

## Configuring a Custom Bulk Action

Custom bulk actions can be configured using Nuxeo Studio. For more information, please refer to our tutorial: [create your custom bulk actions using Nuxeo Studio]({{page page='howto-create-bulk-actions-studio' space='studio'}}).
