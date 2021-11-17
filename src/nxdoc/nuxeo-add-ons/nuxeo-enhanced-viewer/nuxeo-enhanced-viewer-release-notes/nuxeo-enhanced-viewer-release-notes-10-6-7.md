---
title: NEV 10.6.7
description: Release notes for Nuxeo Enhanced Viewer 10.6.7.
tree_item_index: 950
review:
  comment: ''
  date: '2021-10-08'
  status: ok
toc: true
---

{{! multiexcerpt name='nuxeo-enhanced-viewer-updates'}}
## What's new in NEV 10.6.7

### Summary

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th colspan="1">NEV Version</th>
<td colspan="1">10.6.7</td>
</tr>
<tr>
<th colspan="1">ARender version</th>
<td colspan="1">4.4.2.NX1.6</td>
</tr>
<tr>
<th colspan="1">Release date</th>
<td colspan="1">October 8th 2021</td>
</tr>
<tr>
<th colspan="1">Upgraded components</th>
<td colspan="1">ARender software, Previewer (ARender connector), Nuxeo addon (nuxeo-arender package)</td>
</tr>
</tbody>
</table>
</div>

### Improvements

#### Create a Pool for The `image-servlet-pool` Thread

We have added a threadpool for the `image-servlet-pool` thread created by the previewer.

New properties in the rendition server side to configure the image servlet thread pool are:
```
image.servlet.thread.pool.size=200
image.servlet.thread.pool.isDaemon=false
image.servlet.thread.pool.threadPrefix=image-servlet-pool-%d
#Timeout in millisecond for idle thread expiration. If value <= 0, no thread timeout is defined.
image.servlet.thread.pool.keepAliveTime=0
```

This will result in environment variables:
```
ARENDERSRV_IMAGE_SERVLET_THREAD_POOL_SIZE=200
ARENDERSRV_IMAGE_SERVLET_THREAD_POOL_ISDAEMON=false
ARENDERSRV_IMAGE_SERVLET_THREAD_POOL_THREADPREFIX=image-servlet-pool-%d
ARENDERSRV_IMAGE_SERVLET_THREAD_POOL_KEEPALIVETIME=0
```

See [NEV-476](https://jira.nuxeo.com/browse/NEV-476).

#### Make Tomcat Access Log Filename Configurable

You can now configure the access log filename prefix with the environment variable below:
```
TOMCAT_ACCESS_LOG_FILENAME_PREFIX
```

If not present it fallbacks on:
```
${POD_NAME}_access_log
```

If not present it fallbacks on:
```
localhost_access_log
```

See [NEV-479](https://jira.nuxeo.com/browse/NEV-479).

#### Make Tomcat HTTP Connector Pool Configurable

You can now configure the maxThreads number on the HTTP connector with the environment variable below:
```
TOMCAT_HTTP_CONNECTOR_MAX_THREADS
```

Its default is 800.

See [NEV-480](https://jira.nuxeo.com/browse/NEV-480).

#### Add Keep Alive in Connection Pools on Rendition Side

The idle connections lifespan is now configurable in each of the micro-services on the rendition side.

Here is the property and its default value:
```
rest-template.max-keep-alive=60000
```

For example, in the Broker side the property is translated in variable environment like this :
```
DSB_REST-TEMPLATE_MAX-KEEP-ALIVE=60000
```

See [NEV-483](https://jira.nuxeo.com/browse/NEV-483).

#### Improve Upload Mechanism

The upload mechanism has been optimized in this version to improve global performances.

See [NEV-477](https://jira.nuxeo.com/browse/NEV-477).

#### Improve Image Generations When Document-Renderer Is Overloaded

The document-renderer has been redesign to better manage memory and makes it more available to generate a larger number of images in parallel.

See [NEV-485](https://jira.nuxeo.com/browse/NEV-485).

#### Add the Possibility to Turn on Java Flight Record

The new version of ARender supports a Java JDF compliant with the Java Flight Record (JFR) tool.

See [NEV-484](https://jira.nuxeo.com/browse/NEV-484).

#### Add Micrometer-Metrics to Improve Metrics Scope and Visibility at Java Level

We have added [Micrometer](https://micrometer.io/) and configure a JMX reporter for the OkHttp client and others.

See [NEV-488](https://jira.nuxeo.com/browse/NEV-488).

#### Make Configurable the OkHttp Connection Pool

We have added the capability to configure the connection pool by using the environment variables below:
```
ARENDERSRV_NUXEO_CLIENT_POOL_MAX_IDLE_CONNECTIONS=200
ARENDERSRV_NUXEO_CLIENT_POOL_KEEP_ALIVE_DURATION=900
```

See [NEV-489](https://jira.nuxeo.com/browse/NEV-489).

### Major Fixes

#### ARender Server Application Properties May Conflict

We have fixed the ARender properties mechanism to avoid any conflict when overriding the standard properties.

See [NEV-473](https://jira.nuxeo.com/browse/NEV-473).

#### Videos and Audio Sporadically Not Displayed

Video (non mp4) and audio files could be not correctly displayed on ARender and required a manual refresh to be viewed.

See [NEV-473](https://jira.nuxeo.com/browse/NEV-487).

#### Extension Added When Downloading the Original File From ARender

The expected behavior (adding an extension or not) is now configurable.

A new property has been added in the rendition server side to manage extension :
```
#If true, when downloading the source file, its name may have an extension that is determined according to the mime type.
arender.server.servlet.config.downloadServlet.addExtension=true
```

Environment variable:
```
ARENDERSRV_ARENDER_SERVER_SERVLET_CONFIG_DOWNLOADSERVLET_ADDEXTENSION=true
```

See [NEV-486](https://jira.nuxeo.com/browse/NEV-486).

#### Signature Is Missing in Some PDF Documents

PDF documents with signature were previously displayed without the signature.

See [NEV-453](https://jira.nuxeo.com/browse/NEV-453).

{{! /multiexcerpt}}
