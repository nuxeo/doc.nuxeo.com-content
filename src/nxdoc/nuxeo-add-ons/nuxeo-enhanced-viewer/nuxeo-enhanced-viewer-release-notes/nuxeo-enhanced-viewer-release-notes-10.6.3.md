---
title: NEV 10.6.3
description: Release notes for Nuxeo Enhanced Viewer 10.6.3.
tree_item_index: 990
review:
  comment: ''
  date: '2021-06-22'
  status: ok
toc: true
---

{{! multiexcerpt name='nuxeo-enhanced-viewer-updates'}}
## What's new in NEV 10.6.3

### Summary

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th colspan="1">NEV Version</th>
<td colspan="1">10.6.3</td>
</tr>
<tr>
<th colspan="1">ARender version</th>
<td colspan="1">4.4.2.NX1.1</td>
</tr>
<tr>
<th colspan="1">Release date</th>
<td colspan="1">June 22nd 2021</td>
</tr>
<tr>
<th colspan="1">Upgraded components</th>
<td colspan="1">Previewer (ARender connector)</td>
</tr>
</tbody>
</table>
</div>


### Improvements

#### Increase the number of Tomcat threads on Previewer

In order to support more traffic and to serve more requests, we have increased the maximum number of Tomcat threads on the Previewer.

The default setting is now set to 800 (compared to 200 previously).

See [NEV-451](https://jira.nuxeo.com/browse/NEV-451).

{{! /multiexcerpt}}
