---
title: Upgrade from 5.8 to 6.0
review:
    comment: ''
    date: '2017-01-20'
    status: ok
labels:
    - lts2016-ok
    - multiexcerpt
    - content-review-lts2017
toc: true
confluence:
    ajs-parent-page-id: '3343538'
    ajs-parent-page-title: Upgrading the Nuxeo Platform
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Upgrade+from+5.8+to+6.0
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Upgrade+from+5.8+to+6.0'
    page_id: '17794754'
    shortlink: woYPAQ
    shortlink_source: 'https://doc.nuxeo.com/x/woYPAQ'
    source_link: /display/NXDOC/Upgrade+from+5.8+to+6.0
tree_item_index: 400
version_override:
    LTS 2015: 710/admindoc/upgrade-from-58-to-60
    '6.0': 60/admindoc/upgrade-from-58-to-60
history:
    -
        author: Manon Lumeau
        date: '2016-06-10 15:36'
        message: ''
        version: '33'
    -
        author: Solen Guitter
        date: '2016-04-06 07:25'
        message: Fix link to page How to upgrade Nuxeo
        version: '32'
    -
        author: Solen Guitter
        date: '2015-12-16 17:01'
        message: ''
        version: '31'
    -
        author: Solen Guitter
        date: '2015-12-16 15:47'
        message: 'NXDOC-747: Add section Setting up Caches for Directories'
        version: '30'
    -
        author: Solen Guitter
        date: '2015-11-27 15:33'
        message: 'NXDOC-658: Marketplace packages are now called Nuxeo Packages'
        version: '29'
    -
        author: Benoit Delbosc
        date: '2015-09-07 07:41'
        message: ''
        version: '28'
    -
        author: Florent Guillaume
        date: '2015-05-12 13:57'
        message: Added Document interface change
        version: '27'
    -
        author: Solen Guitter
        date: '2015-04-14 14:20'
        message: ''
        version: '26'
    -
        author: Manon Lumeau
        date: '2014-12-05 15:55'
        message: ''
        version: '25'
    -
        author: Manon Lumeau
        date: '2014-12-05 15:54'
        message: ''
        version: '24'
    -
        author: Solen Guitter
        date: '2014-11-25 15:07'
        message: ''
        version: '23'
    -
        author: Solen Guitter
        date: '2014-11-25 14:34'
        message: 'fix typos, add links, cap titles'
        version: '22'
    -
        author: Julien Carsique
        date: '2014-11-25 11:08'
        message: ''
        version: '21'
    -
        author: Julien Carsique
        date: '2014-11-25 11:06'
        message: ''
        version: '20'
    -
        author: Alain Escaffre
        date: '2014-11-25 00:34'
        message: ''
        version: '19'
    -
        author: Alain Escaffre
        date: '2014-11-25 00:33'
        message: ''
        version: '18'
    -
        author: Alain Escaffre
        date: '2014-11-25 00:31'
        message: ''
        version: '17'
    -
        author: Alain Escaffre
        date: '2014-11-25 00:31'
        message: ''
        version: '16'
    -
        author: Alain Escaffre
        date: '2014-11-25 00:30'
        message: ''
        version: '15'
    -
        author: Alain Escaffre
        date: '2014-11-24 16:22'
        message: ''
        version: '14'
    -
        author: Solen Guitter
        date: '2014-11-18 16:09'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2014-10-24 10:43'
        message: Add PDF export of upgrades note
        version: '12'
    -
        author: Solen Guitter
        date: '2014-10-23 17:16'
        message: ''
        version: '11'
    -
        author: Julien Carsique
        date: '2014-08-08 17:29'
        message: Fix issues filter links
        version: '10'
    -
        author: Manon Lumeau
        date: '2014-08-08 17:12'
        message: ''
        version: '9'
    -
        author: Manon Lumeau
        date: '2014-08-08 17:12'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2014-07-23 11:57'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2014-07-23 11:57'
        message: Added missing 5.9.3 and 5.9.4 upgrade and release notes
        version: '6'
    -
        author: Solen Guitter
        date: '2014-03-18 11:19'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2014-03-18 09:25'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2013-12-12 11:22'
        message: ''
        version: '3'
    -
        author: Solen Guitter
        date: '2013-12-12 11:20'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2013-12-12 11:20'
        message: ''
        version: '1'

---
For the general upgrade process, see the [How to Upgrade Nuxeo]({{page page='upgrading-the-nuxeo-platform'}}) page.

{{! multiexcerpt name='from-5.8-to-6.0'}}

You may also be interested in the [6.0 Release Notes](http://nuxeo.github.io/releasenotes/6.0/).

This chapter highlights some major information about upgrade from Nuxeo Platform 5.8 LTS to Nuxeo Platform 6.0 LTS. We strongly encourage you to also have a quick read of the detailed list of[upgrade notes for 6.0](https://jira.nuxeo.com/issues/?jql=project%20in%20%28NXP%2C%20NXCM%29%20AND%20resolution%20%3D%20Fixed%20AND%20fixVersion%20IN%20%28%225.9.1%22%2C%20%225.9.2%22%2C%20%225.9.3%22%2C%20%225.9.4%22%2C%20%225.9.5%22%2C%20%226.0%22%20%29%20AND%20%28%22Impact%20type%22%20%3D%20%22API%20change%22%20OR%20%22Upgrade%20notes%22%20is%20not%20EMPTY%29%20ORDER%20BY%20component%20DESC%2C%20key%20DESC).

## 1. Updating Your Target Platform in Studio to Nuxeo Platform 6.0

<div>

You can read [how to Update the Version of Your Target Platform in Studio]({{page space='studio' page='update-the-version-of-your-target-platform'}}).

Due to some feature moves, you should also report to the page [Specific Upgrade Instructions]({{page space='studio' page='specific-upgrade-instructions'}}#upgrading-to-60) to migrate your project.

</div>

## 2. Defining Your Base Application

Upgrade your Nuxeo Packages dependency list. Several feature moves have been done between 5.8 LTS and 6.0 LTS, with some features being moved in separate packages, some deprecated, some "migrated". You should read the page [packages changes and deprecation]({{page space='admindoc60' page='packaging-changes-and-deprecations'}}).

## 3. Deciding How You Would like to Use Elasticsearch

Nuxeo Platform 6.0 comes with Elasticsearch, which brings you more scalability and new features in terms of search experience ([more accurate full text search]({{page space='nxdoc60' page='configuring-the-elasticsearch-mapping'}})&nbsp;+ [facets and aggregates]({{page space='nxdoc60' page='page-provider-aggregates'}})).

### Page Providers and Content Views

It is easy to override existing queries of your application to [define the ones that should hit the Elasticsearch index]({{page space='nxdoc60' page='how-to-make-a-page-provider-or-content-view-query-elasticsearch-index'}}).

You can also read the page [How to Configure a Search Filter With Facets and Other Aggregates]({{page space='nxdoc60' page='how-to-configure-a-search-filter-with-facets-and-other-aggregates'}}) for configuring facets (aka aggregates) on a given content view.

### Migrating Negative Permissions

In Nuxeo Platform 6.0, negative permissions (i.e. Deny Read to John) are disabled by default.

Elasticsearch is not compliant with negative permissions. If some code or Nuxeo Studio configuration sets such negative permissions, you should remove those part of code/configuration. More generally, if you were using negative ACLs in your previous version of the Nuxeo Platform, you will need to reorganize your security policy.

If you don&rsquo;t use Elasticsearch, you can re-enable negative ACL (deny permissions) in the UI by adding the following line to your [nuxeo.conf]({{page space='admindoc60' page='configuration-parameters-index-nuxeoconf'}}):

```
nuxeo.security.allowNegativeACL=true
```

### Upgrading Your Production Architecture

Elasticsearch is not mandatory: you can [keep on querying VCS (the database)]({{page page='elasticsearch-setup'}}#disabling-elasticsearch) and use the database full-text index.

{{#> callout type='warning' }}

If you want to benefit from the Elasticsearch Indexing Service in production, which is enabled by default, you should setup[ an Elasticsearch cluster]({{page space='admindoc60' page='elasticsearch-setup'}}) and you need to [index the existing content]({{page space='ADMINDOC60' page='Elasticsearch Setup'}}#rebuilding-the-repository-index).

{{/callout}}

## 4. Migrating Your Custom Java Code

### Migrating to Maven 3

Nuxeo Platform now uses Maven 3 for building.

### Migrating Your Custom Code and Templates

Nuxeo Platform has been migrated to JSF2\. If you have implemented some custom UI templates, you should migrate them to JSF2 too. [A tool is provided]({{page space='nxdoc60' page='upgrade-to-jsf2'}}) to help you auditing what has been done.

More information on the page [Upgrade to JSF2]({{page space='nxdoc60' page='upgrade-to-jsf2'}}).

#### Tooltip Library Change

Tooltip library has been changed from jQuery tooltip to tipsy, see [NXP-13842](https://jira.nuxeo.com/browse/NXP-13842).

If you were using this library, you should remove calls similar too:

```
<script>
  jQuery(document).ready(function() {
    jQuery(".widgetHelpLabel").tooltip({relative: true, position: 'bottom center'});
  });
</script>
```

To enable a tooltip on any HTML element, specify the tooltip content in the 'title' attribute and add 'tipsyShow' css style class, for example:

```
<h:outputText value="#{myLabel}"
  styleClass="tipsyShow tipsyGravityNW" />
```

### Migrating your Security Policy or Versioning Service

If you have Java code implementing a [SecurityPolicy](http://community.nuxeo.com/api/nuxeo/release-6.0/javadoc/org/nuxeo/ecm/core/security/SecurityPolicy.html) (defined using the [policies](http://explorer.nuxeo.com/nuxeo/site/distribution/Nuxeo%20Platform-6.0/viewExtensionPoint/org.nuxeo.ecm.core.security.SecurityService--policies) extension point), or a [VersioningService](http://community.nuxeo.com/api/nuxeo/release-6.0/javadoc/org/nuxeo/ecm/core/versioning/VersioningService.html) (defined using the [versioningService](http://explorer.nuxeo.com/nuxeo/site/distribution/Nuxeo%20Platform-6.0/viewExtensionPoint/org.nuxeo.ecm.core.versioning.VersioningService--versioningService) extension point), your code uses the low-level [Document](http://community.nuxeo.com/api/nuxeo/release-6.0/javadoc/org/nuxeo/ecm/core/model/Document.html) interface which changed a bit in Nuxeo Platform 6.0\. In particular, to get a property's value you need to use the [getPropertyValue](http://community.nuxeo.com/api/nuxeo/release-6.0/javadoc/org/nuxeo/ecm/core/model/Document.html#getPropertyValue(java.lang.String)) method directly, as the getProperty method doesn't exist anymore. This does not impact functionality.

## 5. Setting up Caches for Directories

If your directories, wether for vocabularies, users or groups, were already using a cache, you must update them to use new caches.

1.  [Define two new core caches]({{page space='nxdoc60' page='how-to-configure-a-new-directory-cache'}}) (one for entry with references, another for entry without references) contributed to `org.nuxeo.ecm.core.cache.CacheServiceImpl`.
2.  In these caches define your implementation `class`, `maxSize`, `ttl` and `concurrencyLevel`.
3.  Remove the deprecated tags from the directory config file:
    *   `cacheMaxSize`
    *   `cacheTimeOut`
4.  Add new tags with your cache name in the directory config file:
    *   `cacheEntryName`
    *   `cacheEntryWithoutReferencesName`

## 6. If You Were Using the REST API in 5.8

*   "Rest Contributors" have been renamed "Content Enrichers&rdquo;, and the extension points has been modified. See the [Content Enricher page]({{page space='nxdoc60' page='content-enricher'}}).
*   The Nuxeo Platform now returns all the properties by default on the Rest API. if you want to limit the schemas you want to get client side, you should specify them explicitly using the `X-NXDocumentProperties` header.
*   URL of the binary that is given in the &ldquo;data&rdquo; property of the JSON object has changed: see [https://jira.nuxeo.com/browse/NXP-13616](https://jira.nuxeo.com/browse/NXP-13616).

## Noteworthy

### CMIS Join

If you use CMIS Join operator in CMISQL queries, you need to switch the way CMIS queries are transformed. To re-enable the previous mode allowing JOINs and using VCS, set the following property in nuxeo.conf:

```
org.nuxeo.cmis.joins=true
```

### Multi-Tenant

If you use multi-tenant, you should pay attention to [https://jira.nuxeo.com/browse/NXP-13724](https://jira.nuxeo.com/browse/NXP-13724)

### Virtual Navigation

<div>

The Multi-navigation view that came with Virtual Navigation (to add new tabs beside the tree) has been moved to CAP. See [https://jira.nuxeo.com/browse/NXP-15242](https://jira.nuxeo.com/browse/NXP-15242) for details.

## Fast Track Versions Upgrade Notes

</div>

The Fast Track per Fast Track upgrade notes path is still available below:

*   5.8 -> 5.9.1: [JIRA](https://jira.nuxeo.com/issues/?jql=project%20in%20%28NXP%29%20AND%20resolution%20%3D%20Fixed%20AND%20fixVersion%20%3D%20%225.9.1%22%20AND%20%28%22Impact%20type%22%20%3D%20%22API%20change%22%20OR%20%22Upgrade%20notes%22%20is%20not%20EMPTY%29%20ORDER%20BY%20component%20DESC%2C%20key%20DESC) - [PDF]({{file name='UpgradeNotes-NuxeoPlatform5.9.1.pdf' space='admindoc60' page='upgrade-from-58-to-60'}})
*   5.9.1 -> 5.9.2: [JIRA](https://jira.nuxeo.com/issues/?jql=project%20in%20%28NXP%29%20AND%20resolution%20%3D%20Fixed%20AND%20fixVersion%20%3D%20%225.9.2%20%22%20AND%20%28%22Impact%20type%22%20%3D%20%22API%20change%22%20OR%20%22Upgrade%20notes%22%20is%20not%20EMPTY%29%20ORDER%20BY%20component%20DESC%2C%20key%20DESC) - [PDF]({{file name='UpgradeNotes-NuxeoPlatform5.9.2.pdf' space='admindoc60' page='upgrade-from-58-to-60'}})
*   5.9.2 -> 5.9.3: [JIRA](https://jira.nuxeo.com/issues/?jql=project%20in%20%28NXP%29%20AND%20resolution%20%3D%20Fixed%20AND%20fixVersion%20%3D%20%225.9.3%22%20AND%20%28%22Impact%20type%22%20%3D%20%22API%20change%22%20OR%20%22Upgrade%20notes%22%20is%20not%20EMPTY%29%20ORDER%20BY%20component%20DESC%2C%20key%20DESC)&nbsp;- [PDF]({{file name='UpgradeNotes-NuxeoPlatform5.9.3.pdf' space='admindoc60' page='upgrade-from-58-to-60'}})
*   5.9.3 -> 5.9.4: [JIRA](https://jira.nuxeo.com/issues/?jql=project%20in%20%28NXP%29%20AND%20resolution%20%3D%20Fixed%20AND%20fixVersion%20%3D%20%225.9.4%22%20AND%20%28%22Impact%20type%22%20%3D%20%22API%20change%22%20OR%20%22Upgrade%20notes%22%20is%20not%20EMPTY%29%20ORDER%20BY%20component%20DESC%2C%20key%20DESC)&nbsp;- [PDF]({{file name='UpgradeNotes-NuxeoPlatform5.9.4.pdf' space='admindoc60' page='upgrade-from-58-to-60'}})
*   5.9.4 -> 5.9.5: [JIRA](https://jira.nuxeo.com/issues/?jql=project%20in%20%28NXP%29%20AND%20resolution%20%3D%20Fixed%20AND%20fixVersion%20%3D%20%225.9.5%22%20AND%20%28%22Impact%20type%22%20%3D%20%22API%20change%22%20OR%20%22Upgrade%20notes%22%20is%20not%20EMPTY%29%20ORDER%20BY%20component%20DESC%2C%20key%20DESC)&nbsp;- [PDF]({{file name='UpgradeNotes-NuxeoPlatform5.9.5.pdf' space='admindoc60' page='upgrade-from-58-to-60'}})
*   5.9.5 -> 6.0: [JIRA](https://jira.nuxeo.com/issues/?jql=project%20in%20%28NXP%29%20AND%20resolution%20%3D%20Fixed%20AND%20fixVersion%20%3D%20%226.0%22%20AND%20%28%22Impact%20type%22%20%3D%20%22API%20change%22%20OR%20%22Upgrade%20notes%22%20is%20not%20EMPTY%29%20ORDER%20BY%20component%20DESC%2C%20key%20DESC)

You may also want to have a look at the <span class="external-link">release notes</span>:

*   [5.9.1 release notes](http://nuxeo.github.io/releasenotes/5.9.1/index.html)
*   [5.9.2 release notes](http://nuxeo.github.io/releasenotes/5.9.2/index.html)
*   [5.9.3 release notes](http://nuxeo.github.io/releasenotes/5.9.3/index.html)
*   [5.9.4 release notes](http://nuxeo.github.io/releasenotes/5.9.4/index.html)
*   [5.9.5 release notes](http://nuxeo.github.io/releasenotes/5.9.5/)

{{! /multiexcerpt}}
<div class="row" data-equalizer data-equalize-on="medium">
<div class="column medium-6">
{{#> panel heading='Related Documentation'}}

- [Nuxeo Platform 6.0 Packaging Changes and Deprecations]({{page page='nuxeo-platform-60-packaging-changes-and-deprecations'}})
- [Upgrade to JSF2]({{page page='upgrade-to-jsf2'}})
- [Upgrading the Nuxeo Platform]({{page page='upgrading-the-nuxeo-platform'}})
- [Studio Project Specific Upgrade Instructions]({{page space='studio' page='specific-upgrade-instructions'}})

{{/panel}}
</div>
<div class="column medium-6">

&nbsp;

</div>
</div>
