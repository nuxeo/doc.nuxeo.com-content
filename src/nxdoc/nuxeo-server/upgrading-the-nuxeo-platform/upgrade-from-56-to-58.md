---
title: Upgrade from 5.6 to 5.8
review:
    comment: ''
    date: '2017-01-20'
    status: ok
labels:
    - lts2016-ok
    - multiexcerpt
toc: true
confluence:
    ajs-parent-page-id: '3343538'
    ajs-parent-page-title: Upgrading the Nuxeo Platform
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Upgrade+from+5.6+to+5.8
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Upgrade+from+5.6+to+5.8'
    page_id: '12288891'
    shortlink: e4O7
    shortlink_source: 'https://doc.nuxeo.com/x/e4O7'
    source_link: /display/NXDOC/Upgrade+from+5.6+to+5.8
tree_item_index: 500
version_override:
    'LTS 2015': 710/admindoc/upgrade-from-56-to-58
    '6.0': 60/admindoc/upgrade-from-56-to-58
    '5.8': 58/admindoc/upgrade-from-56-to-58
history:
    -
        author: Solen Guitter
        date: '2016-04-06 07:30'
        message: ''
        version: '26'
    -
        author: Solen Guitter
        date: '2016-04-06 07:30'
        message: Fix link to page How to upgrade Nuxeo
        version: '25'
    -
        author: Thierry Martins
        date: '2015-06-11 09:57'
        message: ''
        version: '24'
    -
        author: Solen Guitter
        date: '2015-04-14 14:28'
        message: ''
        version: '23'
    -
        author: Solen Guitter
        date: '2015-04-14 14:28'
        message: ''
        version: '22'
    -
        author: Anahide Tchertchian
        date: '2014-01-08 16:30'
        message: ''
        version: '21'
    -
        author: Solen Guitter
        date: '2013-11-07 14:57'
        message: ''
        version: '20'
    -
        author: Solen Guitter
        date: '2013-11-07 10:17'
        message: ''
        version: '19'
    -
        author: Florent Guillaume
        date: '2013-11-06 14:56'
        message: English
        version: '18'
    -
        author: Julien Carsique
        date: '2013-11-06 12:27'
        message: ''
        version: '17'
    -
        author: Florent Guillaume
        date: '2013-10-25 13:40'
        message: ''
        version: '16'
    -
        author: Solen Guitter
        date: '2013-10-25 13:28'
        message: ''
        version: '15'
    -
        author: Solen Guitter
        date: '2013-10-25 13:22'
        message: ''
        version: '14'
    -
        author: Solen Guitter
        date: '2013-10-14 17:31'
        message: ''
        version: '13'
    -
        author: Julien Carsique
        date: '2013-08-12 12:21'
        message: ''
        version: '12'
    -
        author: Julien Carsique
        date: '2013-08-12 12:21'
        message: ''
        version: '11'
    -
        author: Julien Carsique
        date: '2013-08-12 12:15'
        message: ''
        version: '10'
    -
        author: Anahide Tchertchian
        date: '2013-08-12 11:49'
        message: 'NXP-10566: mention changes about filter expressions '
        version: '9'
    -
        author: Solen Guitter
        date: '2013-08-05 12:03'
        message: Added 5.7.2 upgrade to Tomcat 7
        version: '8'
    -
        author: Solen Guitter
        date: '2013-07-02 10:08'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2013-07-02 09:58'
        message: Added section on Derby storage moved to H2
        version: '6'
    -
        author: Anahide Tchertchian
        date: '2013-06-26 11:14'
        message: mention java 7 requirement from 5.7.1
        version: '5'
    -
        author: Solen Guitter
        date: '2013-06-18 14:30'
        message: Changed since 5.7 for 5.7.1
        version: '4'
    -
        author: Anahide Tchertchian
        date: '2012-11-15 19:11'
        message: remove Studio migration...
        version: '3'
    -
        author: Thierry Martins
        date: '2012-11-15 16:16'
        message: ''
        version: '2'
    -
        author: Florent Guillaume
        date: '2012-10-19 17:40'
        message: ''
        version: '1'

---
<span style="color: rgb(51,51,51);">For the general upgrade process, see</span> [Upgrading the Nuxeo Platform]({{page page='upgrading-the-nuxeo-platform'}}).

{{! multiexcerpt name='5.6-to-5.8-upgrade-page'}}

This chapter highlights some major information about upgrade from Nuxeo Platform 5.6 to Nuxeo Platform 5.8\. Most of it is useful information you need to have to fully understand what has changed in this release.
If you need an exhaustive list, see the [5.6 -> 5.8 upgrade notes](https://jira.nuxeo.com/issues/?jql=project%20%3D%20%22NXP%22%20AND%20resolution%20%3D%20Fixed%20AND%20fixVersion%20IN%20%28%225.7.1%22%2C%225.7.2%22%2C%20%225.7.3%22%2C%20%225.8%22%29%20AND%20%28%22Impact%20type%22%20%3D%20%22API%20change%22%20OR%20%22Upgrade%20notes%22%20is%20not%20EMPTY%29%20ORDER%20BY%20component%20ASC%2C%20key%20ASC).

You may also want to have a look at the [5.8 release notes](http://nuxeo.github.io/releasenotes/5.8/).

If you have followed the Fast Track releases since Nuxeo Platform 5.6, you can refer to the [Upgrade from 5.7.x to 5.8](#57x-to-58) section.

## Installation & Configuration

Follow the [Installation instruction]({{page space='nxdoc' page='installation'}}).

### Java 7 Required

Since version 5.7.1, the Nuxeo Platform enforces the use of Java 7 because it's faster (better GC among other things) and because Java 6 is getting unsupported, see [NXP-11226](https://jira.nuxeo.com/browse/NXP-11226).

### Upgrade to Tomcat 7

Since version 5.7.2, the Nuxeo Platform was upgraded to Tomcat 7\. Please follow the upgrade notes of [NXP-10071](https://jira.nuxeo.com/browse/NXP-10071).

## Data migration

### Relations

Since Nuxeo Platform 5.7.1 all the relations (including comments and publication relations, but excluding annotations) are stored by default in the VCS database. If you upgrade from a previous configuration (before 5.6) where you created relations, comments or publications, then these relation objects were stored using Jena. To keep using this configuration, please follow the upgrade notes of [NXP-10350](https://jira.nuxeo.com/browse/NXP-10350).

### Derby Storage Moved to H2

For test and development instances that use the default configuration, audit logs storage has been moved from Derby to H2\. If you plan on upgrading your test data on H2 from 5.6 to 5.8, note that audit logs will be lost unless you migrate data from Derby to H2 or change database configuration to use the old Derby database for audit logs.

This also applies to vocabularies, annotations, activities, local configuration and sequences.

### SQL Server

The column type for ID columns has been changed from VARCHAR to NVARCHAR, for efficiency reasons. All new tables will be created with NVARCHAR, but existing tables must be migrated. Please follow the upgrade notes of [NXP-10862](https://jira.nuxeo.com/browse/NXP-10862).

### Oracle

The default path optimization has changed since [NXP-10210](https://jira.nuxeo.com/browse/NXP-10210): therefore you need to drop the ANCESTORS table. The data will be recomputed.
If a timeout occurs at startup, you'll have to recompute the data by hand with the procedure

```
BEGIN nx_init_ancestors; END;
/
```

## Code Migration

### EL expressions in Action Filters

From Nuxeo Platform 5.7.3, EL expressions in action filters are using a more generic context to allow better filtering expressions. Please follow the upgrade notes of [NXP-10566](https://jira.nuxeo.com/browse/NXP-10566).

### Document context used in Action Filters

From Nuxeo Platform 5.8, the document used to evaluate action filters using the category `CREATE_DOCUMENT_FORM` is the `changeableDocument` (document being created) instead of the `currentDocument` (parent of the document being created), see [NXP-12605](https://jira.nuxeo.com/browse/NXP-12605).

Permission checks will now fail because there are no security checks on the document until it is created in the repository - see details at [NXP-21465](https://jira.nuxeo.com/browse/NXP-21465).
As a workaround, you can define EL expressions, such as `#{documentManager.hasPermission(currentDocument.ref, 'Perm1')}`.

### Query Models and Result Provider Farms Removal

Content views and page providers have been in place since 5.4.2 to replace old query models and result provider farms, so old classes have been removed for 5.8.

Please follow [detailed upgrade notes]({{page space='nxdoc' page='query-models-and-result-providers-migration-to-content-views-and-page-providers'}}) for these features.

## Configuration Migration

### Actions on Content View Actions of Ordered Folders

Since [NXP-11845](https://jira.nuxeo.com/browse/NXP-11845), the default content view presenting ordering actions only presents actions with category `ORDERABLE_CURRENT_SELECTION_LIST` (labelled "Orderable Document List Toolbar" in Studio). It previously presented also actions available to non-orderable content views, `CURRENT_SELECTION_LIST` (labelled "Document List Toolbar" in Studio).

When upgrading to 5.7.2 or higher, actions using this category will need to use the `ORDERABLE_CURRENT_SELECTION_LIST` to be available on the default content view `orderable_document_content`.

## {{> anchor '573-to-58'}}Upgrade from 5.7.x to 5.8

Previous Fast Track upgrades notes:

*   [5.7.1 upgrade notes](https://jira.nuxeo.com/issues/?jql=project%20%3D%20%22NXP%22%20AND%20resolution%20%3D%20Fixed%20AND%20fixVersion%20%3D%20%225.7.1%22%20AND%20%28%22Impact%20type%22%20%3D%20%22API%20change%22%20OR%20%22Upgrade%20notes%22%20is%20not%20EMPTY%29%20ORDER%20BY%20component%20ASC%2C%20key%20ASC)
*   [5.7.2 upgrade notes](https://jira.nuxeo.com/issues/?jql=project%20%3D%20%22NXP%22%20AND%20resolution%20%3D%20Fixed%20AND%20fixVersion%20%3D%20%225.7.2%22%20AND%20%28%22Impact%20type%22%20%3D%20%22API%20change%22%20OR%20%22Upgrade%20notes%22%20is%20not%20EMPTY%29%20ORDER%20BY%20component%20ASC%2C%20key%20ASC)
*   [5.7.3 upgrade notes](https://jira.nuxeo.com/issues/?jql=project%20%3D%20%22NXP%22%20AND%20resolution%20%3D%20Fixed%20AND%20fixVersion%20%3D%20%225.7.3%22%20AND%20%28%22Impact%20type%22%20%3D%20%22API%20change%22%20OR%20%22Upgrade%20notes%22%20is%20not%20EMPTY%29%20ORDER%20BY%20component%20ASC%2C%20key%20ASC)
*   [5.8 upgrade notes](https://jira.nuxeo.com/issues/?jql=project%20%3D%20%22NXP%22%20AND%20resolution%20%3D%20Fixed%20AND%20fixVersion%20%3D%20%225.8%22%20AND%20%28%22Impact%20type%22%20%3D%20%22API%20change%22%20OR%20%22Upgrade%20notes%22%20is%20not%20EMPTY%29%20ORDER%20BY%20component%20ASC%2C%20key%20ASC)

{{! /multiexcerpt}}
