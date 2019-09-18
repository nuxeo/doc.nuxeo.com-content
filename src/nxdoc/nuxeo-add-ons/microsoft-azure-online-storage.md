---
title: Microsoft Azure Online Storage
review:
    comment: ''
    date: '2016-12-20'
    status: ok
labels:
    - lts2016-ok
    - excerpt
    - content-review-lts2017
    - notassigned
toc: true
confluence:
    ajs-parent-page-id: '16089349'
    ajs-parent-page-title: Nuxeo Add-Ons
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Microsoft+Azure+Online+Storage
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Microsoft+Azure+Online+Storage'
    page_id: '27590744'
    shortlink: WAClAQ
    shortlink_source: 'https://doc.nuxeo.com/x/WAClAQ'
    source_link: /display/NXDOC/Microsoft+Azure+Online+Storage
tree_item_index: 800
history:
    -
        author: Solen Guitter
        date: '2015-11-30 13:46'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2015-11-23 11:06'
        message: Put parameters in table (like nuxeo.conf page)
        version: '4'
    -
        author: Manon Lumeau
        date: '2015-11-18 09:44'
        message: ''
        version: '3'
    -
        author: Arnaud Kervern
        date: '2015-11-17 13:34'
        message: ''
        version: '2'
    -
        author: Arnaud Kervern
        date: '2015-11-17 13:33'
        message: ''
        version: '1'
---

{{! excerpt}}
The&nbsp;[Microsoft Azure Online Storage](https://connect.nuxeo.com/nuxeo/site/marketplace/package/microsoft-azure-online-storage) addon is a Nuxeo Binary Manager that stores binaries in an Azure Storage container.
{{! /excerpt}}

## Prerequisites

- You should be familiar with [Azure](https://azure.microsoft.com/en-us/) and their Management Portal.
- You have to create a dedicated Azure blob Container.
- You must be in possession of your Storage access keys.

## Configuration

Be sure to protect your access keys using the [Configuration Data Encryption]({{page page='sensitive-configuration-data-encryption'}}).

Configuration properties you have to set in your [`nuxeo.conf` file]({{page page='configuration-parameters-index-nuxeoconf'}}).

## Enabling Azure Binary Manager

Set up the default BinaryManager that stores all your blobs in Azure:

`nuxeo.core.binarymanager=org.nuxeo.ecm.blob.azure.AzureBinaryManager`

### Enabling CDN Azure Binary Manager

If you want to use Azure CDN as a front instead of Azure Storage:

1.  Read the&nbsp;[Microsoft Azure documentation](https://azure.microsoft.com/en-us/documentation/articles/cdn-overview/)&nbsp;page and create a CDN bound to your container.
2.  Set the corresponding BinaryManager:
    `nuxeo.core.binarymanager=org.nuxeo.ecm.blob.azure.AzureCDNBinaryManager`

### Mandatory Parameters

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">Parameter</th><th colspan="1">Default Value</th><th colspan="1">Description</th></tr><tr><td colspan="1">`nuxeo.storage.azure.container`</td><td colspan="1">&nbsp;</td><td colspan="1">The name of the Azure container</td></tr><tr><td colspan="1">`nuxeo.storage.azure.account.name`</td><td colspan="1">&nbsp;</td><td colspan="1">Your Azure storage account name</td></tr><tr><td colspan="1">`nuxeo.storage.azure.account.key`</td><td colspan="1">&nbsp;</td><td colspan="1">Your Azure storage access key.
Do not forget to use [data encryption]({{page page='sensitive-configuration-data-encryption'}})</td></tr></tbody></table></div>

### Optional Parameters

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">Parameter</th><th colspan="1">Default value ("|" separates possible values)</th><th colspan="1">Description</th></tr><tr><td colspan="1">`nuxeo.storage.azure.endpointProtocol`</td><td colspan="1">HTTPS</td><td colspan="1">The URL protocol</td></tr><tr><td colspan="1">`nuxeo.storage.azure.cachesize`</td><td colspan="1">100MB</td><td colspan="1">The size of the local cache</td></tr><tr><td colspan="1">`nuxeo.storage.azure.directdownload`</td><td colspan="1">false</td><td colspan="1">Enables direct download from Azure servers</td></tr><tr><td colspan="1">

`nuxeo.storage.azure.cdn.host`

</td><td colspan="1">&nbsp;</td><td colspan="1">

Your Azure CDN host where your blobs are available.

**Note:** Only if you enable direct download and use the Azure CDN.

</td></tr></tbody></table></div>

{{! Don't put anything here. }}

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [File Storage]({{page page='file-storage'}})
- [Amazon S3 Online Storage]({{page page='amazon-s3-online-storage'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
