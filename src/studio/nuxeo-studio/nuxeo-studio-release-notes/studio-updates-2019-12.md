---
title: 'December 2019'
description: .
tree_item_index: 973
review:
  comment: ''
  date: '2019-12-19'
  status: ok
toc: true
---

## Released Changes

{{! multiexcerpt name='studio-updates-2019-12-changes'}}

### Layout Inheritance

In Studio Designer, layouts mimic the document type you inherit from:
- When your document type inherits from a default document type like File for instance, layouts look just like a Web UI file instead of a generic one.
- When it inherits from a custom document type, we copy what you configured for it whenever possible in order for you to start from the basis you expect.

Default document types are handled too: for instance when overriding a folderish document, the view layout now provides configuration you can easily tweak.

{{! /multiexcerpt}}

### Other Noteworthy Mentions

{{! multiexcerpt name='studio-updates-2019-12-bugfix'}}
- Studio shows a popup to re authenticate whenever your session has ended to prevent any configuration loss ([NXS-5485](https://jira.nuxeo.com/browse/NXS-5485)).
- Workflow node variable constraints are correctly saved ([NXS-5583](https://jira.nuxeo.com/browse/NXS-5583)).

{{! /multiexcerpt}}

{{{multiexcerpt 'studio-feedback' page='nuxeo-studio-release-notes'}}}
