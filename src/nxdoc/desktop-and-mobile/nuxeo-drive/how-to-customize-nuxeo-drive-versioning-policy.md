---
title: How to Customize Nuxeo Drive Versioning Policy
review:
    comment: ''
    date: '2016-12-07'
    status: ok
details:
    howto:
        excerpt: "This how-to explains how to change Nuxeo Drive's default versioning policy."
        level: Intermediate
        tool: XML Extention
        topics: 'Nuxeo Drive, Versioning'
labels:
    - lts2016-ok
    - link-update
    - howto
    - nuxeo-drive
    - nuxeo-drive-component
    - multiexcerpt-include
    - multiexcerpt
toc: true
tree_item_index: 400
history:
    -
        author: Solen Guitter
        date: '2016-08-08 15:19'
        message: ''
        version: '8'
    -
        author: Manon Lumeau
        date: '2016-04-21 09:58'
        message: 'javadoc links updated  '
        version: '7'
    -
        author: Manon Lumeau
        date: '2016-03-21 15:30'
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

You can configure two parameters of Nuxeo Drive versioning policy thanks to the extension point [fileSystemItemFactory](http://explorer.nuxeo.com/nuxeo/site/distribution/latest/viewContribution/org.nuxeo.drive.adapters--fileSystemItemFactory): the last edit delay until a new version is created and which version increment will occur (minor or major).

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

1.  Write your own implementation of [VersioningFileSystemItemFactory](http://community.nuxeo.com/api/nuxeo/8.2/javadoc/org/nuxeo/drive/service/VersioningFileSystemItemFactory.html) interface, and in particular write the expected behavior in the [needsVersioning](http://community.nuxeo.com/api/nuxeo/8.2/javadoc/org/nuxeo/drive/service/VersioningFileSystemItemFactory.html#needsVersioning%28org.nuxeo.ecm.core.api.DocumentModel%29) method.
2.  Contribute to the `fileSystemItemFactory` extension point to use your new class:

```xml
  <extension target="org.nuxeo.drive.service.FileSystemItemAdapterService"
    point="fileSystemItemFactory">

    <fileSystemItemFactory class="com.sample.drive.CustomFileSystemItemFactory" name="customFileSystemItemFactory" order="20"/>

  </extension>
```

{{! /multiexcerpt}}

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [Nuxeo Drive developer documentation]({{page page='nuxeo-drive'}})
- [Nuxeo Drive FAQ]({{page version='' space='nxdoc' page='nuxeo-drive-faq'}})
- [How to Manually Initialize or Deploy a Nuxeo Drive Instance]({{page page='how-to-manually-initialize-or-deploy-a-nuxeo-drive-instance'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
