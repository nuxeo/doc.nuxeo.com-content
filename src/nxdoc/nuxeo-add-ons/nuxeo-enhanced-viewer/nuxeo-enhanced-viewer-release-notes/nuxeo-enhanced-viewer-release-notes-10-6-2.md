---
title: NEV 10.6.2
description: Release notes for Nuxeo Enhanced Viewer 10.6.2.
tree_item_index: 1000
review:
  comment: ''
  date: '2021-06-18'
  status: ok
toc: true
---

{{! multiexcerpt name='nuxeo-enhanced-viewer-updates'}}
## What's new in NEV 10.6.2

### Summary

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th colspan="1">NEV Version</th>
<td colspan="1">10.6.2</td>
</tr>
<tr>
<th colspan="1">ARender version</th>
<td colspan="1">4.4.2.NX1.1</td>
</tr>
<tr>
<th colspan="1">Release date</th>
<td colspan="1">June 18th 2021</td>
</tr>
<tr>
<th colspan="1">Upgraded components</th>
<td colspan="1">ARender software, Previewer (ARender connector), Nuxeo addon (nuxeo-arender package)</td>
</tr>
</tbody>
</table>
</div>

### New Features

#### Keep User Preferences

Nuxeo Enhanced Viewer provides a way to customize the annotations by changing the type of arrows, font, size, line thickness, highlight, fit to page, etc.

Previously, the user needed to change the annotation style for each new annotation.
Starting from NEV 10.6, annotations style changes are now saved per user and per type of annotation. So that, for a given user, each new annotation is created with the same type as the previous one of the same kind.

See [NEV-274](https://jira.nuxeo.com/browse/NEV-274).

### Improvements

#### Optimizations on the Temporary Files Management

The ARender file storage micro-service (Document File Storage service) has been merged with the broker service to reduce the exchanges between services and improve the renditions performances.

#### Submit and Reply Actions New Design

The submit and reply link actions have been replaced by buttons to improve the user experience. It also allows to quickly view the action available whatever the size of the sticky note.

### Major Fixes

#### Improve Download PDF/FDF Action Speed

The new version of NEV introduces improvement on the download PDF with FDF annotations to accelerate file download action.  

See [NEV-358](https://jira.nuxeo.com/browse/NEV-358).

{{! /multiexcerpt}}
