---
title: Version 3.0.14
description: Discover what's new in Web UI 3.0.14.
review:
    comment: ''
    date: '2022-09-05'
    status: ok
toc: true
labels:
tree_item_index: 990
hidden: false
---

{{{multiexcerpt 'matching-notes' page='web-ui-release-notes'}}}

{{! multiexcerpt name='web-ui-updates'}}
## What's New in Web UI for LTS 2021 (version 3.0.14)

This is a bugfix release.

### Noteworthy Changes

- Fixed a bug that prevented removing documents from easyshare folders.<br/>[[WEBUI-723](https://jira.nuxeo.com/browse/WEBUI-723)]
- Filters are correctly reset when changing to Grid view.<br/>[[ELEMENTS-1495](https://jira.nuxeo.com/browse/ELEMENTS-1495)]
- The User Creation form is cleared when adding a new user.<br/>[[ELEMENTS-1359](https://jira.nuxeo.com/browse/ELEMENTS-1359)]
- The Close button is displayed in the Share Saved Search popup window.<br/>[[WEBUI-397](https://jira.nuxeo.com/browse/WEBUI-397)]
- When viewing a note, no more empty space is left at the bottom of the screen to make it more consistent with other document types.<br/>[[WEBUI-782](https://jira.nuxeo.com/browse/WEBUI-782)]
- Standard users won't see any HTTP 404 when calling Audit.QueryWithPageProvider on the first loading of WebUI.<br/>[[WEBUI-811](https://jira.nuxeo.com/browse/WEBUI-811)]
- Title of the dialog when adding a new cloud service provider entry mentions adding instead of editing.<br/>[[WEBUI-457](https://jira.nuxeo.com/browse/WEBUI-457)]
- Title of the popup when creating a new vocabulary entry mentions adding instead of editing.<br/>[[WEBUI-429](https://jira.nuxeo.com/browse/WEBUI-429)]

## Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/issues/?jql=project IN %28'WEBUI', 'ELEMENTS'%29 AND fixVersion IN %28'3.0.14'%29 ORDER BY type DESC, priority DESC) is available in our bug tracking tool.
{{! /multiexcerpt}}
