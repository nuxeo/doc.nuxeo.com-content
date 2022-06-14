---
title: Version 3.0.12
description: Discover what's new in Web UI 3.0.12.
review:
    comment: ''
    date: '2022-05-10'
    status: ok
toc: true
labels:
tree_item_index: 992
hidden: false
---

{{{multiexcerpt 'matching-notes' page='web-ui-release-notes'}}}

{{! multiexcerpt name='web-ui-updates'}}
## What's New in Web UI for LTS 2021 (version 3.0.12)

This is a bugfix release.

### Noteworthy Changes

- A validation error is displayed when a document import fails.<br/>[[WEBUI-721](https://jira.nuxeo.com/browse/WEBUI-721)]
- `nuxeo-dialog` elements are correctly displayed with Chrome 100+.<br/>[[ELEMENTS-1481](https://jira.nuxeo.com/browse/ELEMENTS-1481)]
- An error is displayed when changing a password to something that does not match the expected pattern. The message can easily be overridden to provide a comprehensive error to the users.<br/>[[ELEMENTS-1480](https://jira.nuxeo.com/browse/ELEMENTS-1480)]


## Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/issues/?jql=project IN %28'WEBUI', 'ELEMENTS'%29 AND fixVersion IN %28'3.0.12'%29 ORDER BY type DESC, priority DESC) is available in our bug tracking tool.
{{! /multiexcerpt}}
