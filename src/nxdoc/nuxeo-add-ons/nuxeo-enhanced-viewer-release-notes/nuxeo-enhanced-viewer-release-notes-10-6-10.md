---
title: NEV 10.6.10
description: Release notes for Nuxeo Enhanced Viewer 10.6.10.
tree_item_index: 920
review:
  comment: ''
  date: '2021-11-17'
  status: ok
toc: true
---

{{! multiexcerpt name='nuxeo-enhanced-viewer-updates'}}
## What's new in NEV 10.6.10

### Summary

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th colspan="1">NEV Version</th>
<td colspan="1">10.6.10</td>
</tr>
<tr>
<th colspan="1">ARender version</th>
<td colspan="1">4.4.2.NX1.7</td>
</tr>
<tr>
<th colspan="1">Release date</th>
<td colspan="1">November 17th 2021</td>
</tr>
<tr>
<th colspan="1">Upgraded components</th>
<td colspan="1">ARender software, Previewer (ARender connector), Nuxeo addon (nuxeo-arender package)</td>
</tr>
</tbody>
</table>
</div>

### Major Fixes

#### Rendering Quality for Some TIFF Files

We have fixed the display quality which was blurry for some specific TIFF files (black and white with low resolution).

See [NEV-481](https://jira.nuxeo.com/browse/NEV-481).

#### Issues With Open Several Documents Functionality

We have fixed the Open several documents feature, as it was not working correctly on some cases (result list, inconsistent number of documents, authentication error message).

See [NEV-495](https://jira.nuxeo.com/browse/NEV-495).

{{! /multiexcerpt}}
