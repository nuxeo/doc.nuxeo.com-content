---
title: NEV 2.2.0
description: Release notes for Nuxeo Enhanced Viewer 2.2.0
tree_item_index: 897
hidden: true
review:
  comment: ''
  date: '2022-07-19'
  status: ok
toc: true
---

{{! multiexcerpt name='nuxeo-enhanced-viewer-updates'}}
## What's new in NEV 2.2.0

### {{> anchor 'summary'}} Summary

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th colspan="1">NEV Version</th>
<td colspan="1">2.2.0</td>
</tr>
<tr>
<th colspan="1">Upgraded components</th>
<td colspan="1">ARender Rendition, ARender Previewer (Nuxeo ARender connector), Nuxeo ARender addon</td>
</tr>
<tr>
<th colspan="1">ARender Rendition version</th>
<td colspan="1">nuxeo-arender-document-service-broker 2.2.0, nuxeo-arender-document-renderer 2.2.0, nuxeo-arender-document-converter 2.2.0, nuxeo-arender-document-text-handler 2.2.0</td>
</tr>
<tr>
<th colspan="1">ARender Previewer (Nuxeo ARender connector) version</th>
<td colspan="1">nuxeo-arender-ui 2.2.0</td>
</tr>
<tr>
<th colspan="1">Nuxeo ARender addon version</th>
<td colspan="1">nuxeo-arender-10.8.0</td>
</tr>
</tbody>
</table>
</div>

## Content Redaction

{{{multiexcerpt 'redaction-introduction' page='how-to-use-content-redaction'}}}

This release introduces the capacity for Nuxeo Enhanced Viewer users to redact content. More information can be found in the dedicated [how to use content redaction page]({{page page='how-to-use-content-redaction'}}).

A couple of non-blocker known issues regarding this feature have been identified and will be tackled as soon as possible:
- Downloading / Printing the redacted version of a PNG file can fail:<br/>[[NEV-604](https://jira.nuxeo.com/browse/NEV-604)]
- When generating a permanently redacted file, the corresponding notification disappears too quickly:<br/>[[NEV-599](https://jira.nuxeo.com/browse/NEV-599)]

## Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/issues/?jql=project IN %28'NEV'%29 AND fixVersion IN %28'arender-2.2.0'%29 ORDER BY type DESC, priority DESC) is available in our bug tracking tool.

{{! /multiexcerpt}}
