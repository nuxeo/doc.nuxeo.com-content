---
title: NEV 2.2.1
description: Release notes for Nuxeo Enhanced Viewer 2.2.1
tree_item_index: 894
hidden: false
review:
  comment: ''
  date: '2023-02-13'
  status: ok
toc: true
---

{{! multiexcerpt name='nuxeo-enhanced-viewer-updates'}}
## What's new in NEV 2.2.1

### {{> anchor 'summary'}} Summary

This release is a security and bugfix update.

## Noteworthy Changes

- Fixed a potential security problem where using two different accounts in the same browser one after another could lead to the wrong session information being used.<br/>[[NEV-353](https://jira.nuxeo.com/browse/NEV-353)]
- Fixed a security issue.<br/>[[NEV-629](https://jira.nuxeo.com/browse/NEV-629)]
- Ability to redirect user against a 3rd party system for OAuth2 challenge.<br/>[[NEV-614](https://jira.nuxeo.com/browse/NEV-614)]
- Defunct processes are cleaned up regularly to improve overall stability.<br/>[[NEV-610](https://jira.nuxeo.com/browse/NEV-610)]
- When using content redaction, downloading png files with redactions returns a redacted PDF file instead of showing an error.<br/>[[NEV-604](https://jira.nuxeo.com/browse/NEV-604)]
- Viewing documents using NEV is now shown as a view instead of a download in the audit trail for more accuracy. This change requires [Nuxeo Web UI 3.0.18]({{page space='nxdoc' page='web-ui-release-notes-3-0-18'}}) or above to be visible in the UI.<br/>[[NEV-625](https://jira.nuxeo.com/browse/NEV-625)]

## Upgrade Notes

If you are deploying NEV in a self-managed way, note that observability options have changed in this release.

The `arender.notify.opening.times` metric doesn't exist anymore and has been split into two metrics:
- `arender.application.opening.time`
- `arender.document.opening.time`

If you are using NEV in Nuxeo cloud, this change is transparent and does not affect you.<br/>[[NEV-623](https://jira.nuxeo.com/browse/NEV-623)]

## Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/issues/?jql=project IN %28'NEV'%29 AND fixVersion IN %28'arender-2.2.1'%29 ORDER BY type DESC, priority DESC) is available in our bug tracking tool.

{{! /multiexcerpt}}
