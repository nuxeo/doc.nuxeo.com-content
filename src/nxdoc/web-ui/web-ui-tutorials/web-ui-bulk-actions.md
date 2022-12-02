---
title: 'Bulk Actions in Web UI'
review:
    comment: ''
    date: '2021-12-21'
    status: ok
toc: true
labels:
    - nuxeo-web-ui
    - bulk
    - edit
tree_item_index: 490
---

Bulk actions allow you to execute custom logic on large sets of documents. They can be triggered from all sorts of context (while browsing, on search results, during a workflow) and are meant to be used on tens of thousands of documents at once or even more. This includes offering Bulk Editing of Documents as a Bulk action.

## Enabling Bulk Actions

{{#> callout type='info'}}
Bulk actions leverage the [Bulk Action Framework]({{page page='bulk-action-framework'}}). Make sure your [architecture]({{page page='nuxeo-reference-architectures'}}) complies with it.
{{/callout}}

Bulk actions were introduced to LTS 2021 with Web UI 3.0.6. To prevent bringing any breaking change through an update, you need to enable this feature explicitly by adding the following property to your [nuxeo.conf]({{page page='configuration-parameters-index-nuxeoconf'}}) file:
```
nuxeo.selection.selectAllEnabled=true
```

Bulk edit was introduced to LTS 2021 with Web UI 3.0.9. No additional property is needed to enable it, as it relies on configuration done through Studio. See [how to create a bulk edit form]({{page page='how-to-create-bulk-edit-form-studio'}}) for additional information.

{{#> callout type='tip'}}
Bulk edit can work without enabling the select all option if you intend to select documents to edit individually or using a range only.
{{/callout}}

## Using Bulk Actions

Once enabled, users can select all documents in a result listing and execute an action on them. A selection can be done while browsing content and in the context of search results. It is possible to select all documents after using filters as well to fine-tune the results first. Note that adding filters, changing the display or the sort order for the results causes the current selection to be lost: this results in sending a different query to the server and we cannot keep track of the difference between the two without hurting performance.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/web-ui-bulk-actions/web-ui-default-bulk-actions
    name: web-ui-default-bulk-actions.png
    web_ui#screenshot#up_to_date
--}}
![web-ui-default-bulk-actions](nx_asset://144389fc-6b04-4ef7-a9d6-caffef0b3418 ?w=650,border=true)

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/web-ui-bulk-actions/web-ui-default-bulk-actions-after-filtering
    name: web-ui-default-bulk-actions-after-filtering.png
    web_ui#screenshot#up_to_date
--}}
![web-ui-default-bulk-actions-after-filtering](nx_asset://618329c7-2f7a-4eb8-a04d-da7112da1e13 ?w=650,border=true)

Clicking on the checkbox of the header selects all documents at once, both the visible ones and the ones that are not currently displayed on screen. Clicking it again deselects all documents.

Starting from `Web UI 3.0.15`, it is possible to deselect documents individually. These documents won't be processed when executing the bulk action.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Web UI Release Notes/unselect-some
    name: Screenshot from 2022-09-07 16-43-58.png
    web_ui#screenshot#up_to_date
--}}
![unselect-some](nx_asset://0ad82bfb-6969-48a7-8c61-c0a2365f1e2a ?w=393,border=true)

### Available Default Bulk Actions

Once the selection is made, the following default actions are available as bulk actions:

- Add to collection
- Remove From Collection (when viewing a collection)
- Bulk Edit (if enabled using Studio configuration, see below)
- Publish
- Delete (send to trash)
- Untrash (in trash view)
- Delete permanently (in trash view)

The following default actions are **NOT** available as bulk actions:

- Download all as zip. This action would not be scalable. To download files in large numbers, we recommend using [Nuxeo Drive]({{page page='nuxeo-drive'}}) instead.
- Compare. This action is handled on the client side and does not make use of the [bulk action framework]({{page page='bulk-action-framework'}}). Web UI and Nuxeo Server provide the capacity to [compare two documents]({{page space='userdoc' page='compare'}}) or versions at this stage.
- Add to clipboard. This action is handled on the client side and does not make use of the [bulk action framework]({{page page='bulk-action-framework'}}). If you want to integrate an action that allows you to do this at scale, you can take inspiration from our [copy / move cookbook](https://github.com/nuxeo/nuxeo-studio-community-cookbook/tree/master/modules/nuxeo/copy-move) entry and adapt it, knowing that you can [create your custom bulk actions using Nuxeo Studio]({{page page='how-to-create-bulk-actions-studio'}}).
- Move Document Up and Down (in the context of ordered folders). This would only cause useless processing since moving all documents up or down would yield the same result.

You can create additional bulk actions using Nuxeo Studio as well:
- [Create Bulk Actions Using Nuxeo Studio]({{page page='how-to-create-bulk-actions-studio'}})
- [Create Bulk Edit Forms Using Nuxeo Studio]({{page page='how-to-create-bulk-edit-form-studio'}})

### Bulk Actions Notifications Management

When launching a bulk action, a notification is updated regularly in Web UI, providing its current state and allowing the user to abort it.

A bulk action starts in the scheduled state, meaning that it is added to a queue, waiting to be executed. During that state, clicking the **abort** button in the notification will only remove the bulk action from the queue. No processing has happened yet.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/web-ui-bulk-actions/web-ui-bulk-action-scheduled
    name: web-ui-bulk-action-scheduled.png
    web_ui#screenshot#up_to_date
--}}
![web-ui-bulk-action-scheduled](nx_asset://7ea06676-5b87-44cd-ab87-73001ea4b038 ?border=true)

While the action is running, clicking the **abort** button in the notification will stop any processing currently occurring. No rollback will happen on documents that have been already processed.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/web-ui-bulk-actions/web-ui-bulk-action-running
    name: web-ui-bulk-action-running.png
    web_ui#screenshot#up_to_date
--}}
![web-ui-bulk-action-running](nx_asset://4bbf8e6b-e8da-4879-a03f-9f1bf15945fd ?border=true)

Once the action is completed, the notification will remain until the user decides to dismiss it. If an error happened, the user will be informed in the notification. Administrators can gather further information about the error from the application logs.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/web-ui-bulk-actions/web-ui-bulk-action-completed
    name: web-ui-bulk-action-completed.png
    web_ui#screenshot#up_to_date
--}}
![web-ui-bulk-action-completed](nx_asset://0464da0b-af30-4c3f-9de9-f59a017d2be1 ?border=true)

To avoid cluttering the UI when executing many bulk actions in parallel, three (3) notifications maximum will be displayed at a time. Each bulk action counts for one notification. If more notifications have to appear in the UI, the oldest notification will be removed.

## Enabling the Default Bulk Edit Form

The default bulk edit form is disabled by default as most of our customers tend to prefer configuring custom forms instead. To enable it and its related button, you can enable the `bulkEditResultsAction` in the `Buttons` menu of Nuxeo Studio Designer.
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/web-ui-bulk-actions/default-bulk-edit-button.png
    name: default-bulk-edit-button.png
    studio_designer#screenshot#up_to_date
--}}
![default-bulk-edit-button.png](nx_asset://2f3308f8-ae05-4500-ad57-33e47f661454 ?w=650,border=true)

## Configuring a Custom Bulk Action

Custom bulk actions and bulk edit forms can be configured using Nuxeo Studio. For more information, please refer to our tutorials:
- [Create Bulk Actions Using Nuxeo Studio]({{page page='how-to-create-bulk-actions-studio'}})
- [Create Bulk Edit Forms Using Nuxeo Studio]({{page page='how-to-create-bulk-edit-form-studio'}})

## Questions and Answers

### In Which Context Can Users Trigger Bulk Actions?

They can be launched from any results listing, e.g. when browsing a document or when doing a search.

### Can I Have Multiple Bulk Edit Forms / Multiple Bulk Actions?

You can configure as many bulk actions and bulk edit forms as you desire.

### On How Many Documents Can I Launch a Bulk Action?

Bulk actions were tested on sets of 150 000 documents; however there is no limit implemented in the software currently. We recommend being thoughtful when designing your bulk actions (how many documents can be impacted, how many of them could run in parallel) and considering your architecture needs.

### How Do I Deal With Errors?

When an error happens, the user receives a notification once the action completes. It is possible for them to copy the error message and the bulk command id in order to contact an administrator. An administrator can have a detailed look at the situation by looking at the information related to this bulk command id.

## Known Limitations

{{! multiexcerpt name='bulk-actions-known-limitations'}}
### Support for One Repository at a Time

Bulk actions are compatible with documents located inside a single repository at a time at this stage.

- Using the select all functionality and triggering a bulk action will result in this action being applied only on documents located in the current repository.
- Manually selecting a range and triggering a bulk action will result in a visible error.
{{! /multiexcerpt}}
