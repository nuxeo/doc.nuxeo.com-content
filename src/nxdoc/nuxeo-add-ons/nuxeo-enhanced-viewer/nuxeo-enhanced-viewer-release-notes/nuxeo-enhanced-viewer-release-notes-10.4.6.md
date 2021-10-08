---
title: NEV 10.4.6
description: Release notes for Nuxeo Enhanced Viewer 10.4.6.
tree_item_index: 7000
review:
  comment: ''
  date: '2021-04-02'
  status: ok
toc: true
---

{{! multiexcerpt name='nuxeo-enhanced-viewer-updates'}}
## What's new in NEV 10.4.6

### Summary

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th colspan="1">NEV Version</th>
<td colspan="1">10.4.6</td>
</tr>
<tr>
<th colspan="1">ARender version</th>
<td colspan="1">4.2.0.NX1.7</td>
</tr>
<tr>
<th colspan="1">Release date</th>
<td colspan="1">April 2nd 2021</td>
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

#### Thread deadlock on the Document File Storage service

Additional Deadlocks have been fixed following the initial fix [NEV-399](https://jira.nuxeo.com/browse/NEV-399)

See [NEV-418](https://jira.nuxeo.com/browse/NEV-418).

#### Fix the DFS oldStyleJPG error

Clean logs by removing irrelevant exception error in the logs of the Document File Storage service.

See [NEV-404](https://jira.nuxeo.com/browse/NEV-404).

#### Fix group permission on files copied to previewer image

Since the NEV 10.3.x release, the files copied inside the docker image don't have the group write permissions which is an issue when mounting additional configuration inside /docker-entrypoint-init.d because the entrypoint can't append to destination file.

See [NEV-345](https://jira.nuxeo.com/browse/NEV-345).

{{! /multiexcerpt}}
