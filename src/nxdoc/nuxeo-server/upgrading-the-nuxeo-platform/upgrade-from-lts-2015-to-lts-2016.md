---
title: Upgrade from LTS 2015 to LTS 2016
review:
    comment: ''
    date: '2015-12-01'
    status: ok
toc: true
labels:
    - content-review-lts2016
confluence:
    ajs-parent-page-id: '3343538'
    ajs-parent-page-title: Upgrading the Nuxeo Platform
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Upgrade+from+LTS+2015+to+LTS+2016
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Upgrade+from+LTS+2015+to+LTS+2016'
    page_id: '29459028'
    shortlink: VILBAQ
    shortlink_source: 'https://doc.nuxeo.com/x/VILBAQ'
    source_link: /display/NXDOC/Upgrade+from+LTS+2015+to+LTS+2016
tree_item_index: 100
history:
    -
        author: Anahide Tchertchian
        date: '2016-07-08 16:23'
        message: ''
        version: '29'
    -
        author: Anahide Tchertchian
        date: '2016-07-08 16:22'
        message: 'NXDOC-840: insert slot for JSF optims'
        version: '28'
    -
        author: Anahide Tchertchian
        date: '2016-07-08 16:20'
        message: 'NXDOC-840: insert slot for JSF optims'
        version: '27'
    -
        author: Solen Guitter
        date: '2016-07-06 13:04'
        message: Add distribution changes section and jsf ui new package
        version: '26'
    -
        author: Solen Guitter
        date: '2016-07-04 16:22'
        message: ''
        version: '25'
    -
        author: Solen Guitter
        date: '2016-07-04 16:20'
        message: Add 8.3 upgrade items
        version: '24'
    -
        author: Arnaud Kervern
        date: '2016-07-04 15:26'
        message: ''
        version: '23'
    -
        author: Manon Lumeau
        date: '2016-06-09 14:09'
        message: ''
        version: '22'
    -
        author: Solen Guitter
        date: '2016-04-20 08:00'
        message: ''
        version: '21'
    -
        author: Manon Lumeau
        date: '2016-04-19 15:34'
        message: ''
        version: '20'
    -
        author: Solen Guitter
        date: '2016-04-13 08:54'
        message: ''
        version: '19'
    -
        author: Solen Guitter
        date: '2016-04-12 15:58'
        message: 'Add link to FT upgrade detailed instructions '
        version: '18'
    -
        author: Solen Guitter
        date: '2016-04-06 07:25'
        message: Fix link to page How to upgrade Nuxeo
        version: '17'
    -
        author: Solen Guitter
        date: '2016-04-04 12:34'
        message: 'Cleanup '
        version: '16'
    -
        author: Solen Guitter
        date: '2016-04-04 09:26'
        message: 'Update URL, fix title capitalization'
        version: '15'
    -
        author: Arnaud Kervern
        date: '2016-04-01 15:46'
        message: ''
        version: '14'
    -
        author: Arnaud Kervern
        date: '2016-04-01 15:46'
        message: ''
        version: '13'
    -
        author: Arnaud Kervern
        date: '2016-04-01 15:45'
        message: ''
        version: '12'
    -
        author: Arnaud Kervern
        date: '2016-04-01 15:19'
        message: ''
        version: '11'
    -
        author: Arnaud Kervern
        date: '2016-02-01 14:20'
        message: ''
        version: '10'
    -
        author: Alain Escaffre
        date: '2016-02-01 13:54'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2016-01-28 09:30'
        message: 'Fix typos, addons names, links'
        version: '8'
    -
        author: Manon Lumeau
        date: '2016-01-26 10:42'
        message: Formatting
        version: '7'
    -
        author: Manon Lumeau
        date: '2016-01-26 10:31'
        message: Formatting
        version: '6'
    -
        author: Manon Lumeau
        date: '2016-01-26 10:10'
        message: Formatting
        version: '5'
    -
        author: Arnaud Kervern
        date: '2016-01-25 16:41'
        message: ''
        version: '4'
    -
        author: Arnaud Kervern
        date: '2016-01-25 16:40'
        message: ''
        version: '3'
    -
        author: Solen Guitter
        date: '2016-01-15 13:55'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2016-01-15 13:52'
        message: ''
        version: '1'

---
For the general upgrade process, see the page [Upgrading the Nuxeo Platform]({{page page='upgrading-the-nuxeo-platform'}}).

{{! excerpt}}

This chapter highlights some major information about upgrade from Nuxeo Platform LTS 2015 (7.10) to Nuxeo Platform LTS 2016 (8.10). We strongly encourage you to also have a quick read of the [upgrade notes](https://jira.nuxeo.com/issues/?jql=project%20in%20%28NXP%29%20AND%20resolution%20%3D%20Fixed%20AND%20fixVersion%20%3D%20%228.10%22%20AND%20%28%22Impact%20type%22%20%3D%20%22API%20change%22%20OR%20%22Upgrade%20notes%22%20is%20not%20EMPTY%29%20ORDER%20BY%20component%20DESC%2C%20key%20DESC).

If you had already upgraded to previous 8.x Fast Track versions, check out the page [Upgrade from LTS 2015 following Fast Tracks]({{page page='upgrade-from-lts-2015-following-fast-tracks'}}) for upgrade instructions from 8.1 to 8.2, 8.2 to 8.3 or 8.3 to LTS 2016.

{{! /excerpt}}

## Distribution Changes

### Nuxeo Server as the Base Distribution and CAP Removal

{{{multiexcerpt 'upgrade-8.3-jsf-ui' page='Upgrade from LTS 2015 following Fast Tracks'}}}

Thus the following changes in [nuxeo-distribution](https://github.com/nuxeo/nuxeo/tree/master/nuxeo-distribution):

{{{multiexcerpt 'upgrade-8.10-distributionChanges' page='Upgrade from LTS 2015 following Fast Tracks'}}}

## Installation

{{{multiexcerpt 'upgrade-8.10-installation-requirements' page='Upgrade from LTS 2015 following Fast Tracks'}}}

{{{multiexcerpt 'upgrade-8.10-installation-elasticsearch-upgrade' page='Upgrade from LTS 2015 following Fast Tracks'}}}

## Configuration

### New Parameters

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">Parameter</th><th colspan="1">Description</th><th colspan="1">Reference</th></tr><tr><td colspan="1">

`nuxeo.automation.properties.value.trim`

</td><td colspan="1">

Force Automation properties value to be trimmed (default:`false`)

</td><td colspan="1">

[NXP-19170](https://jira.nuxeo.com/browse/NXP-19170)

</td></tr></tbody></table></div>

### Parameters to Update

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">Parameter</th><th colspan="1">Modification</th><th colspan="1">Reference</th></tr><tr><td colspan="1">

`nuxeo.s3storage.bucket.prefix`

</td><td colspan="1">

**Moved**&nbsp;to&nbsp;`nuxeo.s3storage.bucket_prefix`

</td><td colspan="1">

[NXP-18565](https://jira.nuxeo.com/browse/NXP-18565)

</td></tr><tr><td colspan="1">

`nuxeo.vcs.ddlmode`

</td><td colspan="1">

**New default value**&nbsp;to&nbsp;`execute`&nbsp;(previously:&nbsp;`compat`)

</td><td colspan="1">

[NXP-17396](https://jira.nuxeo.com/browse/NXP-17396)

</td></tr>
<tr>
<td colspan="1">`elastcisearch.reindex.onStartup`</td>
<td colspan="1">**Moved** to `elasticsearch.reindex.onStartup`</td>
<td colspan="1">[NXP-20867](https://jira.nuxeo.com/browse/NXP-20867)</td>
</tr>
</tbody></table></div>

### Notes

{{{multiexcerpt 'upgrade-8.2-hidden-stacktraces' page='Upgrade from LTS 2015 following Fast Tracks'}}}

## Code Changes&nbsp;

### Deleted APIs

{{{multiexcerpt 'upgrade-8.2-api-REST-group' page='Upgrade from LTS 2015 following Fast Tracks'}}}

### Deleted Features

{{{multiexcerpt 'upgrade-8.2-remove-annotations' page='Upgrade from LTS 2015 following Fast Tracks'}}}

### Deprecated APIs&nbsp;

{{{multiexcerpt 'upgrade-8.1-api-Environment.getHome' page='Upgrade from LTS 2015 following Fast Tracks'}}}

{{{multiexcerpt 'upgrade-8.3-api-coreSession_methods' page='Upgrade from LTS 2015 following Fast Tracks'}}}

{{{multiexcerpt 'upgrade-8.10-deprecated-apis' page='Upgrade from LTS 2015 following Fast Tracks'}}}


### Nuxeo and iframe

{{{multiexcerpt 'upgrade-8.3-code-iframe' page='Upgrade from LTS 2015 following Fast Tracks'}}}

### WorkManager

{{{multiexcerpt 'upgrade-8.3-code-workManager' page='Upgrade from LTS 2015 following Fast Tracks'}}}

### REST Workflow

{{{multiexcerpt 'upgrade-8.3-code-RESTWorkflow' page='Upgrade from LTS 2015 following Fast Tracks'}}}

## Optimizations

### Nuxeo Drive

{{{multiexcerpt 'upgrade-8.3-optims-drive' page='Upgrade from LTS 2015 following Fast Tracks'}}}

### JSF Pages Rendering and Processing

{{{multiexcerpt 'JSF-optimizations' page='Upgrade from LTS 2015 following Fast Tracks'}}}

## Nuxeo Packages

### Code Changes

#### Nuxeo Digital Signature

{{{multiexcerpt 'upgrade-8.10-NuxeoPackages-digital-signature' page='Upgrade from LTS 2015 following Fast Tracks'}}}

#### Nuxeo Live Connect

{{{multiexcerpt 'upgrade-8.1-live-connect' page='Upgrade from LTS 2015 following Fast Tracks'}}}

#### Nuxeo Multi Tenant

{{{multiexcerpt 'upgrade-8.1-multi-tenant' page='Upgrade from LTS 2015 following Fast Tracks'}}}

### New Packages

{{{multiexcerpt 'upgrade-8.3-NuxeoPackages-jsfui' page='Upgrade from LTS 2015 following Fast Tracks'}}}

### Deprecated Packages

{{{multiexcerpt 'upgrade-8.10-NuxeoPackages-deprecated' page='Upgrade from LTS 2015 following Fast Tracks'}}}

{{{multiexcerpt 'upgrade-8.3-NuxeoPackages-webMobile' page='Upgrade from LTS 2015 following Fast Tracks'}}}

## Complementary Information

Upgrade notes:

*   [Upgrade notes for LTS 2016](https://jira.nuxeo.com/issues/?jql=project%20in%20%28NXP%29%20AND%20resolution%20%3D%20Fixed%20AND%20fixVersion%20IN%20(%228.10%22%20%29%20AND%20%28%22Impact%20type%22%20%3D%20%22API%20change%22%20OR%20%22Upgrade%20notes%22%20is%20not%20EMPTY%29%20ORDER%20BY%20component%20DESC%2C%20key%20DESC)
*   [Upgrade notes for 8.3](https://jira.nuxeo.com/issues/?jql=project%20in%20%28NXP%29%20AND%20resolution%20%3D%20Fixed%20AND%20fixVersion%20IN%20%28%228.3%22%20%29%20AND%20%28%22Impact%20type%22%20%3D%20%22API%20change%22%20OR%20%22Upgrade%20notes%22%20is%20not%20EMPTY%29%20ORDER%20BY%20component%20DESC%2C%20key%20DESC)
*   [Upgrade notes for 8.2](https://jira.nuxeo.com/issues/?jql=project%20in%20%28NXP%29%20AND%20resolution%20%3D%20Fixed%20AND%20fixVersion%20IN%20%28%228.2%22%20%29%20AND%20%28%22Impact%20type%22%20%3D%20%22API%20change%22%20OR%20%22Upgrade%20notes%22%20is%20not%20EMPTY%29%20ORDER%20BY%20component%20DESC%2C%20key%20DESC)
*   [Upgrade notes for 8.1](https://jira.nuxeo.com/issues/?jql=project%20in%20%28NXP%29%20AND%20resolution%20%3D%20Fixed%20AND%20fixVersion%20IN%20%28%228.1%22%20%29%20AND%20%28%22Impact%20type%22%20%3D%20%22API%20change%22%20OR%20%22Upgrade%20notes%22%20is%20not%20EMPTY%29%20ORDER%20BY%20component%20DESC%2C%20key%20DESC)

Release notes:

*   [Release notes for LTS 2016](http://nuxeo.github.io/releasenotes/8.10/)
*   [Release notes for 8.3](http://nuxeo.github.io/releasenotes/8.3/)
*   [Release notes for 8.2](http://nuxeo.github.io/releasenotes/8.2/)
*   [Release notes for 8.1](http://nuxeo.github.io/releasenotes/8.1/)

&nbsp;

* * *
