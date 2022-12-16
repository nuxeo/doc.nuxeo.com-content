---
title: NEV 2.1.3
description: Release notes for Nuxeo Enhanced Viewer 2.1.3
tree_item_index: 897
review:
  comment: ''
  date: '2022-12-09'
  status: ok
toc: true
---

{{! multiexcerpt name='nuxeo-enhanced-viewer-updates'}}
## What's new in NEV 2.1.3

### {{> anchor 'summary'}} Summary

This release brings the ability to authenticate to NEV from a third-party system without having to authenticate against Web UI.

## Noteworthy Changes

- Ability to redirect user against a 3rd party system for OAuth2 challenge.<br/>[[NEV-614](https://jira.nuxeo.com/browse/NEV-614)]
- Defunct processess are cleaned up regularly to improve overall stability.<br/>[[NEV-610](https://jira.nuxeo.com/browse/NEV-610)]

## Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/issues/?jql=project IN %28'NEV'%29 AND fixVersion IN %28'arender-2.1.3'%29 ORDER BY type DESC, priority DESC) is available in our bug tracking tool.

{{! /multiexcerpt}}
