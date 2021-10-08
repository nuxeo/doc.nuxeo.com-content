---
title: NEV 10.4.5
description: Release notes for Nuxeo Enhanced Viewer 10.4.5.
tree_item_index: 8000
review:
  comment: ''
  date: '2021-03-19'
  status: ok
toc: true
---

{{! multiexcerpt name='nuxeo-enhanced-viewer-updates'}}
## What's new in NEV 10.4.5

### Summary

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th colspan="1">NEV Version</th>
<td colspan="1">10.4.5</td>
</tr>
<tr>
<th colspan="1">ARender version</th>
<td colspan="1">4.2.0.NX1.6</td>
</tr>
<tr>
<th colspan="1">Release date</th>
<td colspan="1">March 19th 2021</td>
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

#### Slowness and preview failures with high volume of users

Deadlocks on the Document File Storage micro-service involved slowness and rendering failures.

See [NEV-399](https://jira.nuxeo.com/browse/NEV-399).

#### Share the OkHttp ConnectionPool to avoid thread leak

We improved the OkHttp ConnectionPool management to avoid threak leak and so slowness for the users.

See [NEV-401](https://jira.nuxeo.com/browse/NEV-401).

#### Upgrade Java from 12-ea+29 to at least 12+33

We upgraded the java version on ARender containers as the previous version has a bug for some Intel CPUs, see https://bugs.openjdk.java.net/browse/JDK-8219151.

See [NEV-395](https://jira.nuxeo.com/browse/NEV-395).

{{! /multiexcerpt}}
