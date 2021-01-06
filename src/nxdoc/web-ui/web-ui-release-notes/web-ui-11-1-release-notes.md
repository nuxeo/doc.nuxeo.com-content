---
title: Nuxeo Web UI 11.1 Release Notes
description: Discover changes brought in our recent Nuxeo Web UI updates.
review:
    comment: ''
    date: '2020-06-24'
    status: ok
toc: true
labels:
tree_item_index: 999
hidden: true
---

{{! multiexcerpt name='release-notes'}}

{{! multiexcerpt name='matching-notes'}}
{{#> callout type='info' heading='Upgrade Notes'}}
This page mentions what's new. Refer to the [upgrade notes]({{page page='nxdoc/next/web-ui-11-1-upgrade-notes'}}) to transition to this version.
{{/callout}}
{{! /multiexcerpt}}

## What's New in Web UI 11.1

### Upload Experience for Large Files

Web UI provides a safe experience when uploading files, even for large files in the 75gb range and when the upload goes on for hours due to a slow connection.

If a network problem happens, guidance is provided so that you can decide what to do with the situation: e.g. create the document anyway and upload the attachment later.

- [NXP-29189](https://jira.nuxeo.com/browse/NXP-29189)
- [NXP-28495](https://jira.nuxeo.com/browse/NXP-28495)
- [NXP-27346](https://jira.nuxeo.com/browse/NXP-27346)
- [NXP-27162](https://jira.nuxeo.com/browse/NXP-27162)

### Advanced Validation Logic for Forms

Form validation offers advanced options:
- Logic can be executed asynchronously to call a third party service
- Server-side logic can also check the input and trigger an error that will be made visible to the user

[[NXP-28048](https://jira.nuxeo.com/browse/NXP-28048)]

### Easier to Find and Read Audit Entries

The document history tab displays the time for each entry along with the date. Advanced filtering options are also available to filter actions per user, action or category.

[[NXP-29042](https://jira.nuxeo.com/browse/NXP-29042)]

### Workflow Task Endpoint is Paginated

All requests made to the workflow `task` endpoint paginate results instead of retrieving all tasks. This leads to better performance for the home dashboard, the tasks list and the tasks dashboard.

Users can still scroll through the list of tasks as usual in order to retrieve more of them.

[[NXP-28008](https://jira.nuxeo.com/browse/NXP-28008)]

### Polymer 3 Migration

Web UI uses Polymer 3 instead of Polymer 2.

This is a technical change that happens under the hood, and backwards compatibility is ensured for applications built on top of Nuxeo Web UI. For the technical details, refer to the [upgrade notes]({{page page='web-ui-11-1-upgrade-notes'}}).

### Styling Improvements

Layouts generated using Nuxeo Studio include a `nuxeo-styles` module in order to provide a consistent look and feel to your configuration. A new CSS option (mixin) can be added to your themes to override the default styling of any widget included in a layout, for instance to change the spacing rules.[[NXP-27652](https://jira.nuxeo.com/browse/NXP-27652)]

Labels are more consistent when viewing a picture. [[ELEMENTS-1186](https://jira.nuxeo.com/browse/ELEMENTS-1186)]

The background color of suggestion elements is configurable. [[NXP-27077](https://jira.nuxeo.com/browse/NXP-27077)]

### Standalone Elements

The following elements were moved to the Nuxeo Elements library, improving their consistency and making them available to standalone applications:

* `nuxeo-document-layout`
* `nuxeo-video-conversions`
* `nuxeo-video-info`
* `nuxeo-document-comment`
* `nuxeo-document-comment-thread`

[[ELEMENTS-1024](https://jira.nuxeo.com/browse/ELEMENTS-1024)]

### Other Noteworthy Items

- Document creation and edit popups size can be changed using theme variables</br> [[NXP-26938](https://jira.nuxeo.com/browse/NXP-26938)]
- When doing a bulk download, a notification is displayed until the download starts</br> [[NXP-28478](https://jira.nuxeo.com/browse/NXP-28478)]
- Workflow analytics are clearer by showing a label for buttons pressed instead of an id</br> [[NXP-28338](https://jira.nuxeo.com/browse/NXP-28338)]
- Portrait dimensioned videos are better handled in conversions</br> [[NXP-28856](https://jira.nuxeo.com/browse/NXP-28856)]
- Document type name in the creation notification confirmation is translated</br> [[NXP-28533](https://jira.nuxeo.com/browse/NXP-28533)]
- A default HTML page is shown when no preview is available in Web UI</br> [[NXP-27648](https://jira.nuxeo.com/browse/NXP-27648)]
- When two people complete the same task, the second person is notified and taken to the document</br> [[NXP-27462](https://jira.nuxeo.com/browse/NXP-27462)]

This release also comes with over 160 bugs fixed, making Web UI more solid than ever.
{{! /multiexcerpt}}
