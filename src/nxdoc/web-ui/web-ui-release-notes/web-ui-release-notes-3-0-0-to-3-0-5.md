---
title: Nuxeo Web UI for LTS 2021 Release Notes
description: Discover changes brought in our recent Nuxeo Web UI updates.
review:
    comment: ''
    date: '2021-09-02'
    status: ok
toc: true
labels:
tree_item_index: 999
hidden: true
---

{{{multiexcerpt 'matching-notes' page='web-ui-release-notes'}}}

## What's New in Web UI for LTS 2021 (versions 3.0.0 to 3.0.5)

{{! multiexcerpt name='web-ui-updates'}}
### Upload Experience for Large Files

Web UI provides a safe experience when uploading files, even for large files in the 75gb range and when the upload goes on for hours due to a slow connection.

If a network problem happens, guidance is provided so that you can decide what to do with the situation: e.g. create the document anyway and upload the attachment later.

- [[NXP-29189](https://jira.nuxeo.com/browse/NXP-29189)]
- [[NXP-28495](https://jira.nuxeo.com/browse/NXP-28495)]
- [[NXP-27346](https://jira.nuxeo.com/browse/NXP-27346)]
- [[NXP-27162](https://jira.nuxeo.com/browse/NXP-27162)]

### Configurable Header and Footer

Web UI allows you to [configure a custom header and footer]({{page page='how-to-add-a-header-and-a-footer'}}) to display static and / or dynamic information on every page.

[[WEBUI-306](https://jira.nuxeo.com/browse/WEBUI-306)]

### Rich Text Editor Can Reference Images

The rich text editor allows you to reference images stored in Nuxeo. This is useful to [leverage Nuxeo as a headless CMS]({{page page='how-to-use-rich-text-editor-rte-for-article-publishing'}}) for an article publishing use case typically. Additionally, most default buttons from QuillJS have been added to Web UI [[ELEMENTS-1379](https://jira.nuxeo.com/browse/ELEMENTS-1379)].

### Accessibility Improvements

An effort has been started to improve Nuxeo Web UI's accessibility, the goal being to reach full compliance with WCAG 2.1 level AA. This is a continuous effort, and many important issues have been fixed already.

[[Solved Accessibility Issues](https://jira.nuxeo.com/issues/?jql="Epic Link" in %28'WEBUI-190'%2C 'WEBUI-193'%29 and resolution !%3D unresolved ORDER BY priority DESC)]

### Advanced Validation Logic for Forms

Form validation offers advanced options:
- Logic can be executed asynchronously to call a third party service
- Server-side logic can also check the input and trigger an error that will be made visible to the user

[[NXP-28048](https://jira.nuxeo.com/browse/NXP-28048)]

### Atomic Permissions for UI components

Web UI checks for granular permissions in order to display components instead of high level permissions like "Read" or "Edit". This helps with keeping the UI accurate even if you reconfigured the permissions and how they should be made available to users.

[[WEBUI-5](https://jira.nuxeo.com/browse/WEBUI-5)]

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

- Document creation and edit popups size can be changed using theme variables<br/> [[NXP-26938](https://jira.nuxeo.com/browse/NXP-26938)]
- A configuration property can change navigation URLs to use the document ID instead of their path<br/> [[WEBUI-14](https://jira.nuxeo.com/browse/WEBUI-14)]
- Portrait dimensioned videos are better handled in conversions<br/> [[NXP-28856](https://jira.nuxeo.com/browse/NXP-28856)]
- When two people complete the same task, the second person is notified and taken to the document<br/> [[NXP-27462](https://jira.nuxeo.com/browse/NXP-27462)]
- A UI component lets you switch between available repositories<br/> [[NXP-28999](https://jira.nuxeo.com/browse/NXP-28999)]

## Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/issues/?jql=project IN %28'WEBUI', 'ELEMENTS'%29 AND fixVersion IN %28'3.0.0','3.0.1','3.0.2','3.0.3','3.0.4','3.0.5'%29 ORDER BY type DESC, priority DESC) is available in our bug tracking tool.
{{! /multiexcerpt}}
