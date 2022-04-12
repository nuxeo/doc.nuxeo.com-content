---
title: NEV 10.6.6
description: Release notes for Nuxeo Enhanced Viewer 10.6.6.
tree_item_index: 960
review:
  comment: ''
  date: '2021-09-22'
  status: ok
toc: true
---

{{! multiexcerpt name='nuxeo-enhanced-viewer-updates'}}
## What's new in NEV 10.6.6

### Summary

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th colspan="1">NEV Version</th>
<td colspan="1">10.6.6</td>
</tr>
<tr>
<th colspan="1">ARender version</th>
<td colspan="1">4.4.2.NX1.5</td>
</tr>
<tr>
<th colspan="1">Release date</th>
<td colspan="1">September 22nd 2021</td>
</tr>
<tr>
<th colspan="1">Upgraded components</th>
<td colspan="1">ARender software, Previewer (ARender connector), Nuxeo addon (nuxeo-arender package)</td>
</tr>
</tbody>
</table>
</div>

### Improvements

#### Introduce Pool Management for the HTTP Connections

In order to improve performances and support more simultaneous requests, we implemented a pool mechanism for the HTTP connections.

New properties have been added to configure connection pool in the rendition server side :
```
#By default the connection pool is disabled
arender.rest.connection.pool.use=false
#The following properties are taken into account if the connection pool is enabled
arender.rest.connection.pool.max.total=100
arender.rest.connection.pool.max.per.route=20
```

The environment variables would be:
```
ARENDERSRV_ARENDER_REST_CONNECTION_POOL_USE=false
ARENDERSRV_ARENDER_REST_CONNECTION_POOL_MAX_TOTAL=100
ARENDERSRV_ARENDER_REST_CONNECTION_POOL_MAX_PER_ROUTE=20
```

### Major Fixes

#### Opening Not Supported and Corrupted Files Should Stop Immediately

Previously, unsupported and corrupted files were included in the default workflow, meaning the application tried and retried to open the file until the timeout. This was occurring a poor user experience (failure after waiting until the timeout) and resources used for nothing.

We now detect those cases and go directly to an error message.

{{! /multiexcerpt}}
