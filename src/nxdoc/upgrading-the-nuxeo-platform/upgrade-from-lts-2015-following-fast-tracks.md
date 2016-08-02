---
title: Upgrade from LTS 2015 following Fast Tracks
labels:
    - multiexcerpt
tabbed_page: true
confluence:
    ajs-parent-page-id: '3343538'
    ajs-parent-page-title: Upgrading the Nuxeo Platform
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Upgrade+from+LTS+2015+following+Fast+Tracks
    canonical_source: >-
        https://doc.nuxeo.com/display/NXDOC/Upgrade+from+LTS+2015+following+Fast+Tracks
    page_id: '31032752'
    shortlink: sIXZAQ
    shortlink_source: 'https://doc.nuxeo.com/x/sIXZAQ'
    source_link: /display/NXDOC/Upgrade+from+LTS+2015+following+Fast+Tracks
history:
    - 
        author: Solen Guitter
        date: '2016-07-06 13:04'
        message: ''
        version: '24'
    - 
        author: Solen Guitter
        date: '2016-07-06 13:00'
        message: ''
        version: '23'
    - 
        author: Arnaud Kervern
        date: '2016-07-06 09:48'
        message: ''
        version: '22'
    - 
        author: Arnaud Kervern
        date: '2016-07-06 09:45'
        message: ''
        version: '21'
    - 
        author: Solen Guitter
        date: '2016-07-04 16:20'
        message: ''
        version: '20'
    - 
        author: Arnaud Kervern
        date: '2016-07-04 15:12'
        message: ''
        version: '19'
    - 
        author: Solen Guitter
        date: '2016-07-04 14:51'
        message: ''
        version: '18'
    - 
        author: Arnaud Kervern
        date: '2016-07-04 14:45'
        message: ''
        version: '17'
    - 
        author: Solen Guitter
        date: '2016-04-20 08:00'
        message: ''
        version: '16'
    - 
        author: Manon Lumeau
        date: '2016-04-19 15:33'
        message: ''
        version: '15'
    - 
        author: Antoine Taillefer
        date: '2016-04-18 09:06'
        message: ''
        version: '14'
    - 
        author: Solen Guitter
        date: '2016-04-13 08:50'
        message: ''
        version: '13'
    - 
        author: Solen Guitter
        date: '2016-04-13 08:15'
        message: ''
        version: '12'
    - 
        author: Solen Guitter
        date: '2016-04-04 10:06'
        message: ''
        version: '11'
    - 
        author: Solen Guitter
        date: '2016-04-04 10:06'
        message: Add related documentation links
        version: '10'
    - 
        author: Solen Guitter
        date: '2016-04-04 09:54'
        message: ''
        version: '9'
    - 
        author: Solen Guitter
        date: '2016-04-04 09:43'
        message: ''
        version: '8'
    - 
        author: Solen Guitter
        date: '2016-04-04 09:41'
        message: ''
        version: '7'
    - 
        author: Solen Guitter
        date: '2016-04-04 09:40'
        message: ''
        version: '6'
    - 
        author: Solen Guitter
        date: '2016-04-04 09:39'
        message: ''
        version: '5'
    - 
        author: Solen Guitter
        date: '2016-04-04 09:38'
        message: ''
        version: '4'
    - 
        author: Solen Guitter
        date: '2016-04-04 09:26'
        message: ''
        version: '3'
    - 
        author: Arnaud Kervern
        date: '2016-04-01 15:50'
        message: ''
        version: '2'
    - 
        author: Arnaud Kervern
        date: '2016-04-01 15:47'
        message: ''
        version: '1'

---
# From LTS 2015 to 8.1

## Installation and Configuration

### Parameters to Update

<table><tbody><tr><th colspan="1">Parameter</th><th colspan="1">Modification</th><th colspan="1">Reference</th></tr><tr><td colspan="1">`nuxeo.s3storage.bucket.prefix`</td><td colspan="1">**Moved** to `nuxeo.s3storage.bucket_prefix`</td><td colspan="1">[NXP-18565](https://jira.nuxeo.com/browse/NXP-18565)</td></tr><tr><td colspan="1">`nuxeo.vcs.ddlmode`</td><td colspan="1">**New default value** to `execute` (previously: `compat`)</td><td colspan="1">[NXP-17396](https://jira.nuxeo.com/browse/NXP-17396)</td></tr></tbody></table>

## Code Changes

### Deprecated APIs

{{! multiexcerpt name='upgrade-8.1-api-Environment.getHome'}}

Calls to `Environment.getHome()` might need to be replaced with `Environment.getRuntimeHome()` or `Environment.getServerHome()` to ensure that you are using the correct home path in your code. See [NXP-18667](https://jira.nuxeo.com/browse/NXP-18667).

{{! /multiexcerpt}}

### Addons

#### Nuxeo Live Connect

{{! multiexcerpt name='upgrade-8.1-live-connect'}}

Several changes in `BatchUpdateBlobProvider` break compatibility with custom code created on LTS 2015 or before. We removed two public methods only used internally:

*   `getPageProviderNameForUpdate()`
*   `getBlobProviderId()`

The code of `BatchUpdateBlobProvider#processDocumentsUpdate()` was moved to an abstract class `AbstractLiveConnectBlobProvider` which provides a default implementation above interface.

To upgrade your code:

1.  Make your classes to extend `AbstractLiveConnectBlobProvider` which provides implementation of `BatchUpdateBlobProvider`.
2.  Remove call to `getBlobProvider()` or implement it in your custom code. See [NXP-18660](https://jira.nuxeo.com/browse/NXP-18660).

{{! /multiexcerpt}}

&nbsp;

#### Nuxeo Multi Tenant

{{! multiexcerpt name='upgrade-8.1-multi-tenant'}}

&nbsp;We removed `multi_tenant_user.xsd` and `multi_tenant_group.xsd` schemas. The `tenantId` field is now part of default `user.xsd` and `group.xsd` schemas. See&nbsp;[NXP-18496](https://jira.nuxeo.com/browse/NXP-18496).

{{! /multiexcerpt}}

## Complementary Information

*   [Upgrade notes for 8.1](https://jira.nuxeo.com/issues/?jql=project%20in%20%28NXP%2C%20NXCM%29%20AND%20resolution%20%3D%20Fixed%20AND%20fixVersion%20IN%20%28%228.1%22%20%29%20AND%20%28%22Impact%20type%22%20%3D%20%22API%20change%22%20OR%20%22Upgrade%20notes%22%20is%20not%20EMPTY%29%20ORDER%20BY%20component%20DESC%2C%20key%20DESC)
*   [Release notes for 8.1](http://nuxeo.github.io/releasenotes/8.1/)

# From 8.1 to 8.2

## Configuration

<div>

### New Parameters

</div>

<table><tbody><tr><th colspan="1">Parameter</th><th colspan="1">Description</th><th colspan="1">Reference</th></tr><tr><td colspan="1">

`nuxeo.automation.properties.value.trim`

</td><td colspan="1">

Force Automation properties value to be trimmed (default:`false`)

</td><td colspan="1">

[NXP-19170](https://jira.nuxeo.com/browse/NXP-19170)

</td></tr></tbody></table>

<div>

### 
Notes

</div>

{{! multiexcerpt name='upgrade-8.2-hidden-stacktraces'}}

Stacktraces are now hidden per default in error pages. Activate the `dev mode` (`org.nuxeo.dev=true`) to get them back.

{{! /multiexcerpt}}

## Code Changes&nbsp;

### Deleted APIs

{{! multiexcerpt name='upgrade-8.2-api-REST-group'}}

REST endpoint `/group/{groupname}` no longer marshall members (users and groups) per default. To keep them present in the response, use `fetch.group=memberUsers` and/or `fetch.group=memberGroups` properties in the request. See: [NXP-19112](https://jira.nuxeo.com/browse/NXP-19112).

{{! /multiexcerpt}}

### <span style="color: rgb(0,0,0);">Deleted Features</span>

{{! multiexcerpt name='upgrade-8.2-remove-annotations'}}

<span>Annotations were removed from Nuxeo Platform 8.2\. A new integration of annotations will be implemented for the pdf.js previewer before Nuxeo Platform LTS 2016.</span>

{{! /multiexcerpt}}

### <span style="color: rgb(0,0,0);">Complementary Information</span>

*   [Upgrade notes for 8.2](https://jira.nuxeo.com/issues/?jql=project%20in%20%28NXP%2C%20NXCM%29%20AND%20resolution%20%3D%20Fixed%20AND%20fixVersion%20IN%20%28%228.2%22%20%29%20AND%20%28%22Impact%20type%22%20%3D%20%22API%20change%22%20OR%20%22Upgrade%20notes%22%20is%20not%20EMPTY%29%20ORDER%20BY%20component%20DESC%2C%20key%20DESC)
*   [Release notes for 8.2](http://nuxeo.github.io/releasenotes/8.2/)

# From 8.2 to 8.3

## Distribution Changes

### <span style="color: rgb(0,0,0);font-size: 16.0px;line-height: 1.5625;">UI Dedicated Package
</span>

{{! multiexcerpt name='upgrade-8.3-jsf-ui'}}

The Nuxeo Platform distribution has been refactored to separate server-side features and the user interface. As a consequence the user interface is now available in a Nuxeo Package called Nuxeo JSF UI. This package should be installed on the new base distribution of the platform, called Nuxeo Server.

```
$ nuxeoctl mp-install nuxeo-jsf-ui
```

{{! /multiexcerpt}}

## <span style="color: rgb(0,0,0);">Code Changes</span>

### Nuxeo and iframe

{{! multiexcerpt name='upgrade-8.3-code-iframe'}}

Nuxeo is now sending the `X-FRAME-OPTIONS` header with `SAMEORIGIN` value. It restricts Nuxeo to be embedded in an iframe from the same origin.

You can disable it using:

```
org.nuxeo.ecm.platform.web.common.requestcontroller.service.RequestControllerService.defaultContrib

```