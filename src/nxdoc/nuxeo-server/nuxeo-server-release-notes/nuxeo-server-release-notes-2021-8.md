---
title: LTS 2021.8 / LTS 2021-HF08
description: Discover what's new in LTS 2021.8 / LTS 2021-HF08
review:
   comment: ''
   date: '2021-09-06'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 6500
---

{{! multiexcerpt name='nuxeo-server-updates-2021-8'}}
# What's New in LTS 2021.8 / LTS 2021-HF08

## Nuxeo Server

### Core Storage

#### Prevent Garbage Collector From Deleting Extra Blobs When Several Blob Providers Share Storage

Garbage Collector can deal with extra blobs when several blob providers share storage.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30547](https://jira.nuxeo.com/browse/NXP-30547)

#### S3 Blob Storage: Adding Depth-Based Prefixes to Object Names

It is now possible, using the `subDirsDepth` configuration property for the blob store, to store objects in S3 using nested subdirectories to avoid having all objects in a flat hierarchy. For instance with a depth of 2 the object `d41d8cd98f00b204e9800998ecf8427e` will be stored as `d4/1d/d41d8cd98f00b204e9800998ecf8427e`.

Example XML configuration:
```
    <blobprovider name="...">
      <class>org.nuxeo.ecm.blob.s3.S3BlobProvider</class>
      ...
      <property name="subDirsDepth">2</property>
    </blobprovider>
```

If XML configuration is not used, and if all S3 blob providers can have the same value for this configuration property, a `nuxeo.conf` property may be used:
```
nuxeo.s3storage.subDirsDepth=2
```

Using a depth of 0 gives the standard behavior of storing everything flat.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30366](https://jira.nuxeo.com/browse/NXP-30366)

#### Allow Configuration of Repository/Directory Indexes to Add, Even After Initial Creation

It is now possible to add MongoDB indexes using a contribution.

You can contribute indexes to be created at Nuxeo startup. Nuxeo supports these types of index: `ascending`, `descending`, and `none` to disable the index.

Contribute the XML below to make a property indexed:
```
<component name="my.component.name">
  <extension target="org.nuxeo.ecm.core.schema.TypeService" point="schema">
    <property schema="SCHEMA" name="PROPERTY" indexOrder="ascending" />
    <property schema="SCHEMA" name="PROPERTY" indexOrder="descending" />
  </extension>
</component>
```

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-29261](https://jira.nuxeo.com/browse/NXP-29261)

### Packaging / Distribution / Installation

#### Tomcat 9.0.52 {{> tag 'dev'}} {{> tag 'admin'}}

The Nuxeo Platform now relies on Tomcat 9.0.52.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30547](https://jira.nuxeo.com/browse/NXP-30547)

### Miscellaneous

#### Log Nuxeo Version and HF on Startup {{> tag 'dev'}} {{> tag 'admin'}}

The Nuxeo distribution version and date are now displayed in the startup log:
```
2021-08-09T08:10:24,676 INFO  [FrameworkLoader]
======================================================================
= Starting Nuxeo Framework
======================================================================
  * Distribution Version = 11.5-SNAPSHOT
  * Distribution Date = 202108091006
  * Server home = /opt/nuxeo/server
  * Runtime home = /opt/nuxeo/server/nxserver
  * Data Directory = /var/lib/nuxeo
  * Log Directory = /var/log/nuxeo
  * Configuration Directory = /opt/nuxeo/server/nxserver/config
  * Temp Directory = /tmp
======================================================================
```

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30521](https://jira.nuxeo.com/browse/NXP-30521)

## Major Bug Fixes

### Set Filename on Audio File Thumbnail Blob

Previously, the audio file thumbnail blobs were set without a filename which could break the UI if the CloudFront integration is enabled.

As we now set a filename to the audio thumbnail blob, the CloudFront integration doesn't break with audio thumbnails.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30557](https://jira.nuxeo.com/browse/NXP-30557)

### Return JSON With Error Message Instead of HTML Response for Generic HTTP 500 Error

The error message is returned as a JSON and not anymore as an HTML response.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30513](https://jira.nuxeo.com/browse/NXP-30513)

### Bulk Command Scroller Should Be Aligned on the Underlying Page Provider

Bulk command scroller is aligned on the underlying page provider configuration, meaning that if the page provider relies on Elasticsearch, the bulk command will use an Elasticsearch scroller.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30570](https://jira.nuxeo.com/browse/NXP-30570)

### Display an Error When Trying to Create a User Which Already Exists

User creation returns an HTTP 409 when the user already exists.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-29793](https://jira.nuxeo.com/browse/NXP-29793)

### Nuxeo WOPI Addon Prevents Nuxeo Dev Tools to Connect to Nuxeo Server

Nuxeo Dev Tools works when the addon "Nuxeo WOPI" is installed.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30460](https://jira.nuxeo.com/browse/NXP-30460)

### Web Engine Module 'EasyShare' Should Be Overridable

Previously, it was not possible to override resources of the Web Engine module EasyShare. So customizing the EasyShare download page was not possible.

The EasyShare web engine module now allows override.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-27596](https://jira.nuxeo.com/browse/NXP-27596)

## Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/secure/ReleaseNote.jspa?projectId=10011&version=21470) is available in our bug tracking tool.


{{! /multiexcerpt}}
