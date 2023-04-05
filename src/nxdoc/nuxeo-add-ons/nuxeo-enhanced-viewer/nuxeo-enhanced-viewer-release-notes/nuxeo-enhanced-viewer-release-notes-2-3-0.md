---
title: NEV 2.3.0
description: Release notes for Nuxeo Enhanced Viewer 2.3.0
tree_item_index: 893
hidden: false
review:
  comment: ''
  date: '2023-02-13'
  status: ok
toc: true
---

{{! multiexcerpt name='nuxeo-enhanced-viewer-updates'}}
## What's new in NEV 2.3.0

{{#> callout type='warning' heading='Breaking Change'}}
If you deploy NEV in a self-managed way, the following breaking change applies:

Hazelcast was upgraded from 3.12.x to 4.x, which means that NEV prior to 2.3.x can not interact with NEV after 2.3.x.

If you have deployed NEV in High Availability mode with Hazelcast, you can not do the rolling upgrade when updating to this version. The previous UI stack has to be shutdown before deploying the new version.
{{/callout}}

### {{> anchor 'summary'}} Summary

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th colspan="1">NEV Version</th>
<td colspan="1">2.3.0</td>
</tr>
<tr>
<th colspan="1">Upgraded components</th>
<td colspan="1">ARender Rendition, ARender Previewer (Nuxeo ARender connector)</td>
</tr>
<tr>
<th colspan="1">ARender Rendition version</th>
<td colspan="1">nuxeo-arender-document-service-broker 2.3.0, nuxeo-arender-document-renderer 2.3.0, nuxeo-arender-document-converter 2.3.0, nuxeo-arender-document-text-handler 2.3.0</td>
</tr>
<tr>
<th colspan="1">ARender Previewer (Nuxeo ARender connector) version</th>
<td colspan="1">nuxeo-arender-ui 2.3.0</td>
</tr>
</tbody>
</table>
</div>

### Improved Compatibility With Microsoft Office Files

This release introduces a new rendering engine that provides better compatibility when viewing complex Microsoft Office Word, Excel and Powerpoint files.
<br/>[[NEV-646](https://jira.nuxeo.com/browse/NEV-646)]

## Noteworthy Changes

- When using content redaction, downloading any file format with redactions returns a redacted PDF file instead of showing an error.<br/>[[NEV-627](https://jira.nuxeo.com/browse/NEV-627)]

## Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/issues/?jql=project IN %28'NEV'%29 AND fixVersion IN %28'arender-2.3.0'%29 ORDER BY type DESC, priority DESC) is available in our bug tracking tool.

{{! /multiexcerpt}}
