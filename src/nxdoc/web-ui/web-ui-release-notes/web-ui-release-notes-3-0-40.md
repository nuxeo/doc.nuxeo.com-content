---
title: Version 3.0.40
description: Discover what's new in Web UI 3.0.40.
review:
  comment: ''
  date: '2025-02-04'
  status: ok
toc: true
labels:
tree_item_index: 965
hidden: true
---

{{{multiexcerpt 'matching-notes' page='web-ui-release-notes'}}}

{{! multiexcerpt name='web-ui-updates'}}

## What’s New in Web UI for LTS 2021 (Version 3.0.40)

- `Added support for org.nuxeo.web.ui.expression.eval` : User can now toggle this variable, which affects how Nuxeo Filter expressions are evaluated. If set to true, the expression is evaluated using native javascript Function(). Otherwise, the expression is evaluated using a third-party tool that creates a safer isolated environment for evaluations - "js-interpreter". Note that this tool supports only ES5.

Note : If the value is set to the default value `true`, CSP headers (default or overridden) need to have `unsafe-eval` added as part of `script-src`.<br/>

- Added support in Web UI for right-to-left (RTL) language layouts, including Arabic and Hebrew.<br/>

- Fixed Safari Shadow DOM issues that made the Permissions button text invisible.<br/>

### Other Noteworthy Changes

- Fixed alignment and style issues in `nuxeo-picture-formats` and `nuxeo-video-conversions`, ensuring consistent metadata alignment and uniform download icon colors for better readability and UI consistency.<br/>

- Improved `nuxeo-document-tree` accessibility. Future improvements will focus on making the chevron icon focusable and interactive, ensuring better support for assistive technologies.<br/>

- Bumped upload/download artifact to v4 as v3 is deprecated since January 30, 2025.<br/>

- Sequence number and sort arrow in data table column headers have visible separation between them.<br/>

- As an improvement to `nuxeo-path-suggestion`, once user selects a folder, the pointer moves to the last input field, highlighting the current selected folder.<br/>

{{! /multiexcerpt}}
