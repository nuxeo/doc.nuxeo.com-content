---
title: NEV 10.6.11
description: Release notes for Nuxeo Enhanced Viewer 10.6.11.
tree_item_index: 910
review:
  comment: ''
  date: '2021-12-17'
  status: ok
toc: true
---

{{! multiexcerpt name='nuxeo-enhanced-viewer-updates'}}
## What's new in NEV 10.6.11

### Summary

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th colspan="1">NEV Version</th>
<td colspan="1">10.6.11</td>
</tr>
<tr>
<th colspan="1">ARender version</th>
<td colspan="1">4.4.2.NX1.8</td>
</tr>
<tr>
<th colspan="1">Release date</th>
<td colspan="1">December 17th 2021</td>
</tr>
<tr>
<th colspan="1">Upgraded components</th>
<td colspan="1">ARender software, Previewer (ARender connector)</td>
</tr>
</tbody>
</table>
</div>

This new version is dedicated to the Log4j vulnerabilities (CVE-2021-45046) remediation.

### Major Fixes

#### Log4j Vulnerabilities

Following the [Log4j vulnerabilities (CVE-2021-45046)](https://logging.apache.org/log4j/2.x/security.html), we have removed unsafe log4j dependencies on the rendition services.

See [NEV-514](https://jira.nuxeo.com/browse/NEV-514).


{{! /multiexcerpt}}
