---
title: Version 3.1.17
description: Discover what's new in Web UI 3.1.17.
review:
  comment: ''
  date: '2025-03-17'
  status: ok
toc: true
labels:
tree_item_index: 984
hidden: false
---

{{{multiexcerpt 'matching-notes' page='web-ui-release-notes'}}}

{{! multiexcerpt name='web-ui-updates'}}

## What’s New in Web UI for LTS 2023 (Version 3.1.17)

- Improved RTL support in Quill editor for proper text alignment, list formatting, and overall direction handling.

### Other Noteworthy Changes

- Fixed an issue where the restore operation incorrectly used the current document's ID instead of the previous version's ID. Now, the correct previous version ID is passed and the document is restored without unnecessary checkout.<br/>

- Resolved an issue where the arrow key navigation caused two documents to be highlighted simultaneously. Now, only the currently selected document is highlighted correctly.<br/>

- Fixed issue for date picker where dates were not getting applied on first click.<br/>

- Fixed error in saved searches when the author was deleted.<br/>

- The contrast of data table headers has been improved to comply with AA accessibility standards, ensuring better readability and visibility.<br/>

{{! /multiexcerpt}}
