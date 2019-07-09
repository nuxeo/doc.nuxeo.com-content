---
title: 'May / June 2019'
description: .
tree_item_index: 977
review:
  comment: ''
  date: '2019-07-08'
  status: ok
toc: true
hidden: true
---

## Released Changes

{{! multiexcerpt name='studio-updates-2019-05-and-06-changes'}}
### More Consistent Layouts

- When creating a **Create**, **Edit** or **Import** layout, the title field is automatically set as required to keep consistency with the default Web UI behavior.

- When creating a layout for a workflow task, fewer properties are generated to avoid information duplication with the one exposed in Web UI.

### New Options in Page Provider Screen

- `file:content` sub-fields are exposed when defining an aggregate: to configure searches on file size or file MIME type for instance.
- `ecm:ancestorId` is exposed in both predicates and aggregates: can be used as an alternative to `ecm:path` when you know the document id instead.
- `BETWEEN` operator is exposed in predicates for dates, float and integer numbers.
{{! /multiexcerpt}}


{{{multiexcerpt 'studio-feedback' page='nuxeo-studio-release-notes'}}}
