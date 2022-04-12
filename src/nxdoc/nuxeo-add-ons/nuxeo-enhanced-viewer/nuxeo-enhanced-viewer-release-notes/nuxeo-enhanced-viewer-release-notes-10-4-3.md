---
title: NEV 10.4.3
description: Release notes for Nuxeo Enhanced Viewer 10.4.3.
tree_item_index: 9000
review:
  comment: ''
  date: '2021-02-11'
  status: ok
toc: true
---

{{! multiexcerpt name='nuxeo-enhanced-viewer-updates'}}
## What's new in NEV 10.4.3

### Summary

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th colspan="1">NEV Version</th>
<td colspan="1">10.4.3</td>
</tr>
<tr>
<th colspan="1">ARender version</th>
<td colspan="1">4.2.0.NX1.3</td>
</tr>
<tr>
<th colspan="1">Release date</th>
<td colspan="1">February 11th 2021</td>
</tr>
<tr>
<th colspan="1">Upgraded components</th>
<td colspan="1">ARender software, Previewer (ARender connector), Nuxeo addon (nuxeo-arender package)</td>
</tr>
</tbody>
</table>
</div>

This new version is dedicated to bug fixing.

### Major Fixes

#### ARender Broker and Renderer stability improvement

ARender Broker and Renderer services were crashing and restart at the same time due to healthcheck probes instability.

See [NEV-381](https://jira.nuxeo.com/browse/NEV-381).

{{! /multiexcerpt}}
