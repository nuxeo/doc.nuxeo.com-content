---
title: NEV 2021.1.1
description: Release notes for Nuxeo Enhanced Viewer 2021.1.1.
tree_item_index: 8000
review:
  comment: ''
  date: '2021-03-19'
  status: ok
toc: true
---

{{! multiexcerpt name='nuxeo-enhanced-viewer-updates'}}
## What's new in NEV 2021.1.1

### Summary

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th colspan="1">NEV Version</th>
<td colspan="1">2021.1.1</td>
</tr>
<tr>
<th colspan="1">ARender version</th>
<td colspan="1">4.2.0.NX1.4</td>
</tr>
<tr>
<th colspan="1">Release date</th>
<td colspan="1">February 25th 2021</td>
</tr>
<tr>
<th colspan="1">Upgraded components</th>
<td colspan="1">ARender software, Previewer (ARender connector), Nuxeo addon (nuxeo-arender package)</td>
</tr>
</tbody>
</table>
</div>

### Improvements

#### Download with FDF Annotations

The "Download with FDF annotations" action allows downloading a document as a PDF with annotations in the Forms Data Format (FDF). Then, you can for instance open the document in Adobe Reader and see the annotations as if you have created them into Adobe Reader.

See [NEV-323](https://jira.nuxeo.com/browse/NEV-323).

### Major Fixes

#### ARender Broker and Renderer stability improvement

ARender Broker and Renderer services were crashing and restart at the same time due to healthcheck probes instability.

See [NEV-381](https://jira.nuxeo.com/browse/NEV-381).

#### Slowness and Preview Failures With High Volume of Users

Deadlocks on the Document File Storage micro-service involved slowness and rendering failures.

See [NEV-399](https://jira.nuxeo.com/browse/NEV-399).

#### Share the OkHttp ConnectionPool to Avoid Thread Leak

We improved the OkHttp ConnectionPool management to avoid thread leak and slowness for the users.

See [NEV-401](https://jira.nuxeo.com/browse/NEV-401).

#### Upgrade Java From 12-ea+29 to at Least 12+33

We upgraded the Java version on ARender containers as the previous version has a bug for some Intel CPUs, see https://bugs.openjdk.java.net/browse/JDK-8219151.

See [NEV-395](https://jira.nuxeo.com/browse/NEV-395).

{{! /multiexcerpt}}
