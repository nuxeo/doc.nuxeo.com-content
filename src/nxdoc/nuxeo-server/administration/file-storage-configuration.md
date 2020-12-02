---
title: File Storage Configuration
review:
    comment: ''
    date: '2017-12-14'
    status: ok
labels:
    - content-review-lts2016
    - blob-storage
    - binary-manager
    - blob-manager-component
    - fguillaume
    - multiexcerpt-include
    - lts2017-ok
toc: true
confluence:
    ajs-parent-page-id: '31032113'
    ajs-parent-page-title: Administration
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: File+Storage+Configuration
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/File+Storage+Configuration'
    page_id: '25691018'
    shortlink: igOIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/igOIAQ'
    source_link: /display/NXDOC/File+Storage+Configuration
tree_item_index: 800
version_override:
    LTS 2015: 710/admindoc/blob-storage-configuration
history:
    -
        author: Alain Escaffre
        date: '2016-03-23 14:35'
        message: ''
        version: '21'
    -
        author: Alain Escaffre
        date: '2016-03-23 14:35'
        message: ''
        version: '20'
    -
        author: Alain Escaffre
        date: '2016-03-23 14:34'
        message: ''
        version: '19'
    -
        author: Alain Escaffre
        date: '2016-03-23 14:30'
        message: ''
        version: '18'
    -
        author: Alain Escaffre
        date: '2016-03-23 14:28'
        message: ''
        version: '17'
    -
        author: Alain Escaffre
        date: '2016-03-23 14:28'
        message: ''
        version: '16'
    -
        author: Alain Escaffre
        date: '2015-12-13 22:59'
        message: ''
        version: '15'
    -
        author: Alain Escaffre
        date: '2015-12-13 22:54'
        message: ''
        version: '14'
    -
        author: Alain Escaffre
        date: '2015-12-13 22:51'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2015-11-10 08:11'
        message: Fix typo and formatting
        version: '12'
    -
        author: Alain Escaffre
        date: '2015-11-09 15:48'
        message: ''
        version: '11'
    -
        author: Alain Escaffre
        date: '2015-11-09 15:41'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2015-07-01 12:07'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2015-07-01 09:58'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2015-07-01 09:56'
        message: ''
        version: '7'
    -
        author: Manon Lumeau
        date: '2015-06-29 12:34'
        message: ''
        version: '6'
    -
        author: Manon Lumeau
        date: '2015-06-29 09:35'
        message: ''
        version: '5'
    -
        author: Florent Guillaume
        date: '2015-06-23 13:04'
        message: link to aes
        version: '4'
    -
        author: Florent Guillaume
        date: '2015-06-23 13:03'
        message: link to S3
        version: '3'
    -
        author: Florent Guillaume
        date: '2015-06-23 13:01'
        message: link to DefaultBinaryManager﻿ page
        version: '2'
    -
        author: Florent Guillaume
        date: '2015-06-23 12:43'
        message: ''
        version: '1'

---
The files attached to a document in Nuxeo are usually stored separately from the main document database. The way in which they are stored is configurable using the concepts of a Binary Manager, Blob Provider and Blob Dispatcher.

{{#> callout type='info' }}

This page gives operational information on targeted configurations. For a full understanding on how Nuxeo Platform stores binaries and what possibilities are available, please read the [dedicated documentation page]({{page page='file-storage'}}) in the main documentation section.

{{/callout}}

## Configuring the Default BlobProvider

The default blob provider for Nuxeo Platform stores files on the local filesystem at a configurable location and with filenames based on their hash (digest).

{{#> panel type='code' heading='Standard DefaultBinaryManager Configuration'}}
```xml
<extension target="org.nuxeo.ecm.core.blob.BlobManager" point="configuration">
  <blobprovider name="default">
    <class>org.nuxeo.ecm.core.blob.binary.DefaultBinaryManager</class>
    <property name="path">binaries</property>
  </blobprovider>
</extension>
```
{{/panel}}

The `path` property is used to specify the filesystem path at which the binaries will be stored. A relative path will be resolved under `$NUXEO_HOME/nxserver/data`, but an absolute path can be used as well if needed.

The format of the `binaries`&nbsp;(or other configured path) directory is:

*   `config.xml` a file containing the configuration used.
*   `data/`&nbsp;the hierarchy with the actual binaries dispatched in subdirectories.
*   `tmp/`&nbsp;a temporary storage location during creation (this must be on the same filesystem as `data/`).

The `config.xml`&nbsp;file looks like this:

```xml
<?xml version="1.0"?>
<binary-store>
  <digest>MD5</digest>
  <depth>2</depth>
</binary-store>
```

It is automatically generated by Nuxeo when initializing an empty binary storage, but you can put it manually and change the configuration:

*   `digest`&nbsp;is a Java [MessageDigest](https://docs.oracle.com/javase/8/docs/technotes/guides/security/StandardNames.html#MessageDigest) name, for example MD5 or SHA-256.&nbsp;
*   `depth` is the depth with which the files are nested in subdirectories to avoid having too many in a single directory.

## Registering Another BlobProvider

To register a new blob provider, use the [`blobprovider`](http://explorer.nuxeo.com/nuxeo/site/distribution/10.10/viewExtensionPoint/org.nuxeo.ecm.core.blob.BlobManager--configuration) extension point and with the class for your binary manager:

```xml
<extension target="org.nuxeo.ecm.core.blob.BlobManager" point="configuration">
  <blobprovider name="default">
    <class>org.nuxeo.ecm.core.blob.binary.DefaultBinaryManager</class>
    <property name="path">binaries</property>
  </blobprovider>
</extension>
```

You will find existing implementations in the binary store main documentation page, with links to specific configuration instructions:

*   [the ones that can be configured without additional addon]({{page page='file-storage#filestorage-defaultblobproviders'}})
*   [the ones that require installation of an addon]({{page page='file-storage#filestorage-additionalblobproviders'}}).

Usually, if you don't use the advanced Blob Dispatcher capabilities, you will need one binary manager per Nuxeo repository. By default Nuxeo uses a binary manager with the same name as each repository, for instance the "default" repository will use the "default" binary manager. For a standard Nuxeo instance with a single repository, this is all taken care of for you by the default template.

## Blob Dispatcher

{{{multiexcerpt 'BlobDispatch' page='NXDOC:File Storage'}}}

&nbsp;

&nbsp;

---

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}
- [DefaultBinaryManager Configuration]({{page space='admindoc' page='defaultbinarymanager-configuration'}})
- [Implementing Encryption]({{page space='admindoc' page='implementing-encryption'}})
- [Amazon S3 Online Storage]({{page space='admindoc' page='amazon-s3-online-storage'}})
- [Nuxeo Live Connect]({{page space='admindoc' page='nuxeo-live-connect'}})
{{/panel}}</div><div class="column medium-6">
</div></div>
