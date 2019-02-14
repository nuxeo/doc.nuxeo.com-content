---
title: 'February 2019'
description: .
tree_item_index: 981
review:
  comment: ''
  date: '2019-02-14'
  status: ok
toc: true
hidden: true
---

## Released Changes

{{! multiexcerpt name='studio-updates-2019-02'}}
### New Layout Blocks Menu in Studio Designer
This menu lets you create reusable sets of properties, that can be used in your layouts afterwards.
<br>For example, you could define a form where you would change the elements configuration, then make sure these changes apply to all your document type layouts by reusing it.

At this stage forms can only be used when switching to code in a layout. A future update will allow them to be dragged and dropped from the catalog in the visual editor mode as well.

### Increased Scope for JSF UI to Web UI Migration Tool
JSF UI form layouts are migrated as forms in Studio Designer.

Content views containing parameters are supported, query parameters are mapped to page provider predicates.

### Noteworthy Improvements and Bugfixes

- Blob fields are properly handled in workflow tasks layouts ([NXS-5023](https://jira.nuxeo.com/browse/NXS-5023)).
- Workflows task drawing is correctly handled ([NXS-4682](https://jira.nuxeo.com/browse/NXS-4682)).
- Studio generates proper configuration when handling files in workflow tasks ([NXS-5023](https://jira.nuxeo.com/browse/NXS-5023)).
- UI items work correctly when used from a Studio Designer page provider configuration ([NXS-5092](https://jira.nuxeo.com/browse/NXS-5092)).

[More information about bugs fixed since last release notes](https://jira.nuxeo.com/issues/?jql=project %3D NXS AND fixVersion IN %28'3.5.0','3.5.1','3.5.2'%29) is available in our bug tracking tool.

{{! /multiexcerpt}}

{{{multiexcerpt 'studio-feedback' page='nuxeo-studio-release-notes'}}}
