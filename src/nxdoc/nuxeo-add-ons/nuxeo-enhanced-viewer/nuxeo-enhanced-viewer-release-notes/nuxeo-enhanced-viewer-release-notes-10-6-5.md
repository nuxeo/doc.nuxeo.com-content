---
title: NEV 10.6.5
description: Release notes for Nuxeo Enhanced Viewer 10.6.5.
tree_item_index: 970
review:
  comment: ''
  date: '2021-09-17'
  status: ok
toc: true
---

{{! multiexcerpt name='nuxeo-enhanced-viewer-updates'}}
## What's new in NEV 10.6.5

### Summary

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th colspan="1">NEV Version</th>
<td colspan="1">10.6.5</td>
</tr>
<tr>
<th colspan="1">ARender version</th>
<td colspan="1">4.4.2.NX1.4</td>
</tr>
<tr>
<th colspan="1">Release date</th>
<td colspan="1">September 17th 2021</td>
</tr>
<tr>
<th colspan="1">Upgraded components</th>
<td colspan="1">ARender software, Previewer (ARender connector), Nuxeo addon (nuxeo-arender package)</td>
</tr>
</tbody>
</table>
</div>

### Major Fixes

#### Synchronization of the Logs Into Elasticsearch Highly Degrades the Application Performances

The optional push of the logs into Elasticsearch was highly degrading the application performances.

We replaced the previous behavior by an asynchronous mechanism which remove this operation from the critical path.

#### Delete Authorized Client Based on a TTL

In order to better manage the user session expiration, we added a TTL to handle the authorized client deletion.

See [NEV-466](https://jira.nuxeo.com/browse/NEV-466)

{{! /multiexcerpt}}
