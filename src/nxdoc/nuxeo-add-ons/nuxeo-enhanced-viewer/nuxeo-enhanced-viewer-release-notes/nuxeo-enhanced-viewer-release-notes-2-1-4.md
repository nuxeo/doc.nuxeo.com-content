---
title: NEV 2.1.4
description: Release notes for Nuxeo Enhanced Viewer 2.1.4
tree_item_index: 896
hidden: true
review:
  comment: ''
  date: '2023-02-13'
  status: ok
toc: true
---

{{! multiexcerpt name='nuxeo-enhanced-viewer-updates'}}
## What's new in NEV 2.1.4

### {{> anchor 'summary'}} Summary

This is a security update.

A vulnerability has been reported in Nuxeo Enhanced Viewer where a possible server-side request forgery (SSRF) issue could occur. The Hyland Security team has deployed a mitigation in our cloud instance. We strongly advise self-managed customers to likewise apply the following configuration change to mitigate the risk of this vulnerability while they undergo the deployment process of this release:

Declare or update the UI previewer service environment variable below as follows:

```
ARENDERSRV_ARENDER_SERVER_URL_PARSERS_BEANNAMES=blobNuxeoURLParser,DocumentIdURLParser
```

Restart your Nuxeo Enhanced Viewer instance.

This version fixes the issue, and upgrading to this version can be applied in lieu of performing the mitigation steps above (i.e., mitigation can be removed after the update is deployed).  

## Noteworthy Changes

- Fixed a security issue.<br/>
{{!-- [NEV-629](https://hyland.atlassian.net/browse/NEV-629) link removed: the ticket is no longer publicly visible. --}}

## Learn More

[More information about released changes and fixed bugs]https://hyland-sync.atlassian.net/issues?jql=project%20%3D%20NEV) is available in our bug tracking tool.

{{! /multiexcerpt}}
