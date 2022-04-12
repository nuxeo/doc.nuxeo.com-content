---
title: NEV 10.6.4
description: Release notes for Nuxeo Enhanced Viewer 10.6.4.
tree_item_index: 980
review:
  comment: ''
  date: '2021-09-09'
  status: ok
toc: true
---

{{! multiexcerpt name='nuxeo-enhanced-viewer-updates'}}
## What's new in NEV 10.6.4

### Summary

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th colspan="1">NEV Version</th>
<td colspan="1">10.6.4</td>
</tr>
<tr>
<th colspan="1">ARender version</th>
<td colspan="1">4.4.2.NX1.3</td>
</tr>
<tr>
<th colspan="1">Release date</th>
<td colspan="1">September 9th 2021</td>
</tr>
<tr>
<th colspan="1">Upgraded components</th>
<td colspan="1">ARender software, Previewer (ARender connector), Nuxeo addon (nuxeo-arender package)</td>
</tr>
</tbody>
</table>
</div>

### New Features

#### High Availability for the Previewer

The Previewer component is now scalable to guarantee service continuity and also support more user traffic by having several previewers for one application.

New properties have been introduced on ARender Previewer side in order to control the High-Availability deployment. A MongoDB backend is required to store sessions and OAuth 2 data.

You can find below the properties controlling this part:
<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th colspan="1">Environment Key</th>
<td colspan="1">ARENDERSRV_NUXEO_OAUTH2_STORAGE_BACKEND</td>
<td colspan="1">ARENDERSRV_NUXEO_OAUTH2_STORAGE_MONGODB_SERVER</td>
<td colspan="1">ARENDERSRV_NUXEO_OAUTH2_STORAGE_MONGODB_DBNAME</td>
<td colspan="1">ARENDERSRV_NUXEO_OAUTH2_STORAGE_MONGODB_SSL</td>
</tr>
<tr>
<th colspan="1">Description</th>
<td colspan="1">Backend to use to store sessions and OAuth2 data. Possible values are local and mongodb</td>
<td colspan="1">MongoDB server URL to use (mongodb://server:27017 for instance)</td>
<td colspan="1">MongoDB database name to use for OAuth2 storage, default to arender</td>
<td colspan="1">Use SSL for MongoDB connection, default to false</td>
</tr>
</tbody>
</table>
</div>

See [NEV-427](https://jira.nuxeo.com/browse/NEV-427), [NEV-261](https://jira.nuxeo.com/browse/NEV-261) and [NEV-449](https://jira.nuxeo.com/browse/NEV-449).

### Improvements

#### Allow Disabling Content Redaction and Watermark to Improve Performances

The Content Redaction (not supported on NEV by default) and the watermark features require time consuming operations that are not needed when not used. So, we added a configuration to disable those features and so increase overall performances, for customers not using both Content redaction and watermark features.

This can be done by adding the following environment variable:
```
ARENDERSRV_ARENDER_SERVER_DOCUMENT_RENDITIONS_ACTIVE=false
```

See [NEV-461](https://jira.nuxeo.com/browse/NEV-461).

#### Exclude Static Resources From Authentication

In order to save resources and so to improve performances, we excluded the static resources from the authentication path.

See [NEV-465](https://jira.nuxeo.com/browse/NEV-465).

### Major Fixes

#### Unexpected Rendered Document Eviction Causes Services Outage

We fixed a specific behavior occurring an eviction of the renderer version of the document although it was still needed. This behavior involved slowness and service crash.

{{! /multiexcerpt}}
