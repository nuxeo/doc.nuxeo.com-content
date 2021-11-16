---
title: NEV 10.6.9
description: Release notes for Nuxeo Enhanced Viewer 10.6.9.
tree_item_index: 930
hidden: true
review:
  comment: ''
  date: '2021-10-30'
  status: ok
toc: true
---

{{! multiexcerpt name='nuxeo-enhanced-viewer-updates'}}
## What's new in NEV 10.6.9

### Summary

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th colspan="1">NEV Version</th>
<td colspan="1">10.6.9</td>
</tr>
<tr>
<th colspan="1">ARender version</th>
<td colspan="1">4.4.2.NX1.6</td>
</tr>
<tr>
<th colspan="1">Release date</th>
<td colspan="1">October 29th 2021</td>
</tr>
<tr>
<th colspan="1">Upgraded components</th>
<td colspan="1">Previewer (ARender connector), Nuxeo addon (nuxeo-arender package)</td>
</tr>
</tbody>
</table>
</div>

### Improvements

#### Make Tomcat keepAliveTimeout setting configurable

In order to avoid 504 gateway timeout exceptions, we changed the default keepAliveTimeout setting and allow to configure it.

New parameters are available to configure the Tomcat Connector of the Previewer:
```
TOMCAT_HTTP_CONNECTOR_CONNECTION_TIMEOUT=20000
TOMCAT_HTTP_CONNECTOR_KEEP_ALIVE_TIMEOUT=65000
```

See [NEV-499](https://jira.nuxeo.com/browse/NEV-499).

#### Make Tomcat Access Log customizable

In order to improve customization and also allow the Previewer Tomcat Access logs to be available on DataDog, we made some changes:
 - The Tomcat AccessLog pattern has changed to include the thread name.
 - New environment variables are available to customize the Tomcat AccessLogValve:
 ```
 TOMCAT_ACCESS_LOG_DIRECTORY=logs
 TOMCAT_ACCESS_LOG_PATTERN=%h %l %u %t %I &quot;%r&quot; %s %b [%D]
 TOMCAT_ACCESS_LOG_MAX_DAYS=-1
 ```

See [NEV-494](https://jira.nuxeo.com/browse/NEV-494).

{{! /multiexcerpt}}
