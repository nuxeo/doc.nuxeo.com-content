---
title: NEV 10.5
description: Release notes for Nuxeo Enhanced Viewer 10.5.
tree_item_index: 5000
review:
  comment: ''
  date: '2021-04-20'
  status: ok
toc: true
---

{{! multiexcerpt name='nuxeo-enhanced-viewer-updates'}}
## What's new in NEV 10.5

### Summary

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th colspan="1">NEV version</th>
<td colspan="1">10.5</td>
</tr>
<tr>
<th colspan="1">ARender version</th>
<td colspan="1">4.2.0.NX2.0</td>
</tr>
<tr>
<th colspan="1">Release date</th>
<td colspan="1">April 20th 2021</td>
</tr>
<tr>
<th colspan="1">Upgraded components</th>
<td colspan="1">ARender software, Previewer (ARender connector), Nuxeo addon (nuxeo-arender package)</td>
</tr>
</tbody>
</table>
</div>

### Improvements

#### Make the Rendition Service "Document File Storage" HA

The rendition service "Document File Storage" is now HA (High Availability) to support a high level of charge and prevent service degradation in case of an instance crash.

See [NEV-425](https://jira.nuxeo.com/browse/NEV-425).

### Major Fixes

#### Infinite Loop When Opening TIFF Files

An infinite loop occurred when opening some TIFF files on the rendition service, producing slowness in the preview of the files.

See [NEV-429](https://jira.nuxeo.com/browse/NEV-429).

{{! /multiexcerpt}}
