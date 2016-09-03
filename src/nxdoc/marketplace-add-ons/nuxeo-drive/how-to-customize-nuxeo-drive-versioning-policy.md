---
title: How to Customize Nuxeo Drive Versioning Policy
details:
    howto:
        excerpt: >-
            This how-to explains how to change Nuxeo Drive's default versioning
            policy.
        level: Intermediate
        tool: XML Extention
        topics: 'Nuxeo Drive, Versioning'
labels:
    - nuxeo-drive
    - content-review-lts2015
    - nuxeo-drive-component
    - howto
    - link-update
toc: true
confluence:
    ajs-parent-page-id: '28475453'
    ajs-parent-page-title: Nuxeo Drive
    ajs-space-key: NXDOC710
    ajs-space-name: Nuxeo Platform Developer Documentation — LTS 2015
    canonical: How+to+Customize+Nuxeo+Drive+Versioning+Policy
    canonical_source: >-
        https://doc.nuxeo.com/display/NXDOC710/How+to+Customize+Nuxeo+Drive+Versioning+Policy
    page_id: '28475841'
    shortlink: wYGyAQ
    shortlink_source: 'https://doc.nuxeo.com/x/wYGyAQ'
    source_link: /display/NXDOC710/How+to+Customize+Nuxeo+Drive+Versioning+Policy
history:
    - 
        author: Manon Lumeau
        date: '2016-03-21 15:57'
        message: ''
        version: '7'
    - 
        author: Manon Lumeau
        date: '2016-01-04 16:44'
        message: ''
        version: '6'
    - 
        author: Manon Lumeau
        date: '2015-06-09 08:53'
        message: ''
        version: '5'
    - 
        author: Solen Guitter
        date: '2015-04-14 09:57'
        message: ''
        version: '4'
    - 
        author: Solen Guitter
        date: '2015-02-09 08:43'
        message: fix link
        version: '3'
    - 
        author: Solen Guitter
        date: '2015-02-09 08:42'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2015-02-06 16:32'
        message: ''
        version: '1'

---
{{! multiexcerpt name='drive_versioning_policy'}}

{{{multiexcerpt 'drive-versioning' page='USERDOC:Nuxeo Drive'}}}

## How to Configure the Versioning Delay or Version Increment

You can configure two parameters of Nuxeo Drive versioning policy thanks to the extension point&nbsp;[`fileSystemItemFactory`](http://explorer.nuxeo.com/nuxeo/site/distribution/Nuxeo%20Platform-7.10/viewContribution/org.nuxeo.drive.adapters--fileSystemItemFactory): the last edit delay until a new version is created and which version increment will occur (minor or major).

For example, to create a major version if the document is modified 30 minutes after the last change, use this contribution:

```xml
  <require>org.nuxeo.drive.adapters</require>

  <extension target="org.nuxeo.drive.service.FileSystemItemAdapterService"
    point="fileSystemItemFactory">

    <fileSystemItemFactory class="org.nuxeo.drive.service.impl.DefaultFileSystemItemFactory" name="defaultFileSystemItemFactory" order="40">
      <parameters>
        <parameter name="versioningDelay">1800</parameter>
        <parameter name="versioningOption">MAJOR</parameter>
      </parameters>
    </fileSystemItemFactory>

  </extension>
```

## How to Change Nuxeo Drive Versioning Policy

If you need to make more changes on the versioning mechanism in Nuxeo Drive:

1.  Write your own implementation of&nbsp;[`VersioningFileSystemItemFactory`](http://community.nuxeo.com/api/nuxeo/release-7.10/javadoc/org/nuxeo/drive/service/VersioningFileSystemItemFactory.html)&nbsp;interface, and in particular write the expected behavior in the&nbsp;[`needsVersioning`](http://community.nuxeo.com/api/nuxeo/release-7.10/javadoc/org/nuxeo/drive/service/VersioningFileSystemItemFactory.html#needsVersioning%28org.nuxeo.ecm.core.api.DocumentModel%29)&nbsp;method.
2.  Contribute to the&nbsp;`fileSystemItemFactory`&nbsp;extension point to use your new class:

```
  <extension target="org.nuxeo.drive.service.FileSystemItemAdapterService"
    point="fileSystemItemFactory">

    <fileSystemItemFactory class="com.sample.drive.CustomFileSystemItemFactory" name="customFileSystemItemFactory" order="20"/>

  </extension>
```

{{! /multiexcerpt}}

* * *