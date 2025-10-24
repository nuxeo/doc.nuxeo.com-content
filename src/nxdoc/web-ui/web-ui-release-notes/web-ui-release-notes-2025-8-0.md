---
title: Version 2025.8.0
description: Discover what's new in Web UI 2025.8.0.
review:
  comment: ''
  date: '2025-10-27'
  status: ok
toc: true
labels:
tree_item_index: 993
hidden: true
---

{{{multiexcerpt 'matching-notes' page='web-ui-release-notes'}}}

{{! multiexcerpt name='web-ui-updates'}}

## What’s New in Web UI for LTS 2025 (Version 2025.8.0)

**Enhancements** 

- **Customizable Document Type Display Order**
Users can now configure the display order of document types in the document creation popup, improving selection efficiency. In order to do so, it would be required to add the following property in the configuration (nuxeo.conf) with comma separated list of document type IDs. The ones that are left out would follow the default order.
`org.nuxeo.web.ui.document_type.order=file,note,workspace`

 Grouping support is deferred to a future release.

- **Configurable Rendition Selection**
The rendition selection in the publication popup is now optional, allowing projects to streamline publishing workflows by hiding this option when unnecessary. Additionally, For the Rendition dropdown, “**Default Rendition**” will be pre-selected by default.

- **Hide "Permissions to external users" block in Permissions tab**
The permission to external users block is now not visible to the customers who have the following property and value set in the configuration
`nuxeo.permissions.externalUsers.allowed=false`


**Security Improvements** 

- **Moment.js Library Upgrade**
Addressed vulnerabilities in Moment.js (v2.24.0) by upgrading to a secure version across WebUI and Elements. This mitigates risks such as ReDoS and locale injection.

**Bug Fixes** 

- **Focus Outline Behavior**
Fixed an issue where a blue focus outline appeared after mouse clicks. Now, outlines only appear during keyboard navigation, enhancing UI consistency.

- **Comment Submission Duplication**
Resolved a bug that allowed multiple comment submissions via rapid clicks. The submit button is now disabled after the first click.

- **PDF Filename Escaping**
Fixed a double escaping/unescaping issue in PDF filename handling identified during GitHub code scans.

<br/>

{{! /multiexcerpt}}
