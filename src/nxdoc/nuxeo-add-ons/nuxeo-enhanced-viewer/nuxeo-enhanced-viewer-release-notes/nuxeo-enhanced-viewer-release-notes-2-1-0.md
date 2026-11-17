---
title: NEV 2.1.0
description: Release notes for Nuxeo Enhanced Viewer 2.1.0
tree_item_index: 899
hidden: true
review:
  comment: ''
  date: '2022-04-12'
  status: ok
toc: true
---

{{! multiexcerpt name='nuxeo-enhanced-viewer-updates'}}
## What's new in NEV 2.1.0

### {{> anchor 'summary'}} Summary

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th colspan="1">NEV Version</th>
<td colspan="1">2.1.0</td>
</tr>
<tr>
<th colspan="1">Release date</th>
<td colspan="1">March 25th 2021</td>
</tr>
<tr>
<th colspan="1">Upgraded components</th>
<td colspan="1">ARender Rendition, ARender Previewer (Nuxeo ARender connector)</td>
</tr>
<tr>
<th colspan="1">ARender Rendition version</th>
<td colspan="1">nuxeo-arender-document-service-broker 2.1.0, nuxeo-arender-document-renderer 2.1.0, nuxeo-arender-document-converter 2.1.0, nuxeo-arender-document-text-handler 2.1.0</td>
</tr>
<tr>
<th colspan="1">ARender Previewer (Nuxeo ARender connector) version</th>
<td colspan="1">nuxeo-arender-ui 2.1.0</td>
</tr>
<tr>
<th colspan="1">Nuxeo ARender addon version</th>
<td colspan="1">nuxeo-arender-2021.2.0</td>
</tr>
</tbody>
</table>
</div>

This release brings major observability improvements and bugfixes.

## Observability

Being able to preview your content is a mission critical capability. In order to better support our stack, we brought major improvements to the way we can monitor its performance.

See [NEV-198](https://hyland-sync.atlassian.net/browse/NEV-198).

## Other Noteworthy Changes

- WPG files are correctly rendered.<br/>[[NEV-368](https://hyland-sync.atlassian.net/browse/NEV-368)]

## Learn More

[More information about released changes and fixed bugs](https://hyland-sync.atlassian.net/jira/software/c/projects/NEV/list?jql=project%20%3D%20NEV%20AND%20%22text%20fix%20version%5Bshort%20text%5D%22%20~%20%22arender-2.1.0%22) is available in our bug tracking tool.

{{! /multiexcerpt}}
