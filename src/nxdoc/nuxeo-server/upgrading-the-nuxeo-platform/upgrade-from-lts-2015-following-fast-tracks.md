---
title: Upgrade from LTS 2015 following Fast Tracks
review:
    comment: ''
    date: '2016-12-06'
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
    canonical: Upgrade+from+LTS+2015+following+Fast+Tracks
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Upgrade+from+LTS+2015+following+Fast+Tracks'
    page_id: '31032752'
    shortlink: sIXZAQ
    shortlink_source: 'https://doc.nuxeo.com/x/sIXZAQ'
    source_link: /display/NXDOC/Upgrade+from+LTS+2015+following+Fast+Tracks
tree_item_index: 200
history:
    -
        author: Solen Guitter
        date: '2016-07-28 13:05'
        message: dd Server + JSF UI = equivalent of CA
        version: '31'
    -
        author: Solen Guitter
        date: '2016-07-19 09:12'
        message: ''
        version: '30'
    -
        author: Solen Guitter
        date: '2016-07-12 08:27'
        message: ''
        version: '29'
    -
        author: Anahide Tchertchian
        date: '2016-07-11 17:03'
        message: 'NXDOC-840: JSF optims'
        version: '28'
    -
        author: Anahide Tchertchian
        date: '2016-07-11 12:45'
        message: ''
        version: '27'
    -
        author: Anahide Tchertchian
        date: '2016-07-08 17:19'
        message: 'NXDOC-840: JSF optims doc'
        version: '26'
    -
        author: Anahide Tchertchian
        date: '2016-07-08 15:24'
        message: 'NXDOC-840: start documenting JSF perfs optims'
        version: '25'
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
{{! multiexcerpt name='7.10-to-8.10-following-FT-upgrade-page'}}

## From LTS 2015 to 8.1

### Installation and Configuration

#### Parameters to Update

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th colspan="1">Parameter</th>
<th colspan="1">Modification</th>
<th colspan="1">Reference</th>
</tr>
<tr>
<td colspan="1">`nuxeo.s3storage.bucket.prefix`</td>
<td colspan="1">**Moved** to `nuxeo.s3storage.bucket_prefix`</td>
<td colspan="1">[NXP-18565](https://jira.nuxeo.com/browse/NXP-18565)</td>
</tr>
<tr>
<td colspan="1">`nuxeo.vcs.ddlmode`</td>
<td colspan="1">**New default value** to `execute` (previously: `compat`)</td>
<td colspan="1">[NXP-17396](https://jira.nuxeo.com/browse/NXP-17396)</td>
</tr>
</tbody>
</table>
</div>

### Code Changes

#### Deprecated APIs

{{! multiexcerpt name='upgrade-8.1-api-Environment.getHome'}}

- Calls to `Environment.getHome()` might need to be replaced with `Environment.getRuntimeHome()` or `Environment.getServerHome()` to ensure that you are using the correct home path in your code. See [NXP-18667](https://jira.nuxeo.com/browse/NXP-18667).

{{! /multiexcerpt}}

#### Addons

** Nuxeo Live Connect **

{{! multiexcerpt name='upgrade-8.1-live-connect'}}

Several changes in `BatchUpdateBlobProvider` break compatibility with custom code created on LTS 2015 or before. We removed two public methods only used internally:

* `getPageProviderNameForUpdate()`
* `getBlobProviderId()`

The code of `BatchUpdateBlobProvider#processDocumentsUpdate()` was moved to an abstract class `AbstractLiveConnectBlobProvider` which provides a default implementation above interface.

To upgrade your code:

1. Make your classes to extend `AbstractLiveConnectBlobProvider` which provides implementation of `BatchUpdateBlobProvider`.
2. Remove call to `getBlobProvider()` or implement it in your custom code. See [NXP-18660](https://jira.nuxeo.com/browse/NXP-18660).

{{! /multiexcerpt}}

** Nuxeo Multi Tenant **

{{! multiexcerpt name='upgrade-8.1-multi-tenant'}}

We removed `multi_tenant_user.xsd` and `multi_tenant_group.xsd` schemas. The `tenantId` field is now part of default `user.xsd` and `group.xsd` schemas. See [NXP-18496](https://jira.nuxeo.com/browse/NXP-18496).

{{! /multiexcerpt}}

### Complementary Information

* [Upgrade notes for 8.1](https://jira.nuxeo.com/issues/?jql=project%20in%20%28NXP%29%20AND%20resolution%20%3D%20Fixed%20AND%20fixVersion%20IN%20%28%228.1%22%20%29%20AND%20%28%22Impact%20type%22%20%3D%20%22API%20change%22%20OR%20%22Upgrade%20notes%22%20is%20not%20EMPTY%29%20ORDER%20BY%20component%20DESC%2C%20key%20DESC)
* [Release notes for 8.1](http://nuxeo.github.io/releasenotes/8.1/)

## From 8.1 to 8.2

### Configuration

#### New Parameters

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th colspan="1">Parameter</th>
<th colspan="1">Description</th>
<th colspan="1">Reference</th>
</tr>
<tr>
<td colspan="1">`nuxeo.automation.properties.value.trim`</td>
<td colspan="1">Force Automation properties value to be trimmed (default:`false`)</td>
<td colspan="1">[NXP-19170](https://jira.nuxeo.com/browse/NXP-19170)</td>
</tr>
</tbody>
</table>
</div>

#### Notes

{{! multiexcerpt name='upgrade-8.2-hidden-stacktraces'}}

Stacktraces are now hidden per default in error pages. Activate the `dev mode` (`org.nuxeo.dev=true`) to get them back.

{{! /multiexcerpt}}

### Code Changes

#### Deleted APIs

{{! multiexcerpt name='upgrade-8.2-api-REST-group'}}

REST endpoint `/group/{groupname}` no longer marshall members (users and groups) per default. To keep them present in the response, use `fetch.group=memberUsers` and/or `fetch.group=memberGroups` properties in the request. See [NXP-19112](https://jira.nuxeo.com/browse/NXP-19112).

{{! /multiexcerpt}}

#### Deleted Features

{{! multiexcerpt name='upgrade-8.2-remove-annotations'}}

Annotations were removed from Nuxeo Platform 8.2.

{{! /multiexcerpt}}

#### JSF Performance Optimization Changes

{{! multiexcerpt name='JSF-optimizations'}}

Nuxeo 8.2 and Nuxeo 7.10-HF12 hold changes optimizing performance of JSF pages rendering and processing).

These improvements rely on:

1. Optimizations of variables exposure in the context
2. Optimizations of pluggable actions rendering
3. Optimizations of document listings rendering

Some helpers have also been defined to help analyzing what element is taking time when rendering a page, see [HOWTO: Debug Slow Page Rendering]({{page page='how-to-debug-slow-page-rendering'}}).

Optimizations 1 and 2 should not have any impact on existing templates, maybe except on edge cases. If the misbehavior is affecting a tag `nxu:set`, the boolean attribute `useAlias=true` can be used to get back the old behavior.

Optimization 3 can have an impact on custom widget templates when used inside document listings, as some variables may not be available in the same context: `c:set`, `c:if` tags are resolved at build time, they should be replaced by other JSF tags using the `rendered` attribute, resolved at render time.

{{#> callout type='info' }}

On 7.10-HF12, optimizations are disabled by default. You can add the following contribution to your application to enable them: [enable-jsf-optims-config.xml](https://jira.nuxeo.com/secure/attachment/53920/enable-jsf-optims-config.xml).

{{/callout}}

Reference JIRA issue: [NXP-17690](https://jira.nuxeo.com/browse/NXP-17690)

From Nuxeo versions 9.3, 8.10-HF18 and 7.10-HF34, additional optimizations were done on vocabulary pages, when showing lots of entries, similar to optimizations previously done for document listings rendering.

{{#> callout type='info' }}

These optimizations are not activated by default from 8.10-HF18 and 7.10-HF34. You can add the following contribution to your application to enable them: [enable-jsf-vocabularies-optims-config.xml](https://jira.nuxeo.com/secure/attachment/66096/enable-jsf-vocabularies-optims-config.xml).

{{/callout}}

Reference JIRA issue: [NXP-23394](https://jira.nuxeo.com/browse/NXP-23394)

{{! /multiexcerpt}}

### Complementary Information&nbsp;

* [Upgrade notes for 8.2](https://jira.nuxeo.com/issues/?jql=project%20in%20%28NXP%29%20AND%20resolution%20%3D%20Fixed%20AND%20fixVersion%20IN%20%28%228.2%22%20%29%20AND%20%28%22Impact%20type%22%20%3D%20%22API%20change%22%20OR%20%22Upgrade%20notes%22%20is%20not%20EMPTY%29%20ORDER%20BY%20component%20DESC%2C%20key%20DESC)
* [Release notes for 8.2](http://nuxeo.github.io/releasenotes/8.2/)

## From 8.2 to 8.3

### Distribution Changes

#### UI Dedicated Package

{{! multiexcerpt name='upgrade-8.3-jsf-ui'}}

The Nuxeo Platform distribution has been refactored to separate server-side features and the user interface. As a consequence the user interface is now available in a Nuxeo Package called [Nuxeo JSF UI](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-jsf-ui). This package should be installed on the new base distribution of the platform, called Nuxeo Server. Using Nuxeo Server with the Nuxeo JSF UI is the equivalent of the previous CAP distribution.

{{! /multiexcerpt}}

```bash
$ nuxeoctl mp-install nuxeo-jsf-ui
```

### Code Changes&nbsp;

#### Nuxeo and iframe

{{! multiexcerpt name='upgrade-8.3-code-iframe'}}

Nuxeo is now sending the `X-FRAME-OPTIONS` header with `SAMEORIGIN` value. It restricts Nuxeo to be embedded in an iframe from the same origin.

You can disable it using:

```xml
<require>org.nuxeo.ecm.platform.web.common.requestcontroller.service.RequestControllerService.defaultContrib</require>

<extension target="org.nuxeo.ecm.platform.web.common.requestcontroller.service.RequestControllerService"
    point="responseHeaders">
  <header name="X-Frame-Options" enabled="false"/>
</extension>
```

This is required for the addon [Nuxeo for Salesforce](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-salesforce).
See [NXP-19629](https://jira.nuxeo.com/browse/NXP-19629) for details.

{{! /multiexcerpt}}

#### Deprecated APIs

{{! multiexcerpt name='upgrade-8.3-api-coreSession_methods'}}

- The following methods are deprecated in order to introduce same methods with a `var args` argument `CopyOption`. See [NXP-19740](https://jira.nuxeo.com/browse/NXP-19740) for details.
    * `CoreSession#copy(DocumentRef, DocumentRef, String)`
    * `CoreSession#copy(List<DocumentRef>, DocumentRef)`
    * `CoreSession#copyProxyAsDocument(DocumentRef, DocumentRef, String)`
    * `CoreSession#copyProxyAsDocument(List<DocumentRef>, DocumentRef)`

{{! /multiexcerpt}}

#### WorkManager

{{! multiexcerpt name='upgrade-8.3-code-workManager'}}

The `canceled` and `completed` states are removed from the work's API. So you can't get results from completed works anymore. Instead you should store results by means of the `transient store`.
The previous way of querying for queue's counter has been deprecated by a the new API `org.nuxeo.ecm.core.work.api.WorkManager.getMetrics(String)` which provides you with the consistent set of counters.
See [NXP-19160](https://jira.nuxeo.com/browse/NXP-19160) for details.

{{! /multiexcerpt}}

#### REST Workflow

{{! multiexcerpt name='upgrade-8.3-code-RESTWorkflow'}}

The `url` property of a workflow blob has been moved to the `data` property. See [NXP-19640](https://jira.nuxeo.com/browse/NXP-19640) for details.

The `url` property of a blob is now following the correct pattern. Previously `../[thumbnail:thumb:thumbnail/retrievedFile.png](http://thumbnailthumbthumbnail)` is now `../[thumb:thumbnail/retrievedFile.png](http://thumbthumbnail)`. See [NXP-18239](http://jira.nuxeo.com/browse/NXP-18239) for details.

{{! /multiexcerpt}}

### Optimizations

#### Nuxeo Drive

{{! multiexcerpt name='upgrade-8.3-optims-drive'}}

The permission checks done when adapting a document to a `FileSystemItem` are optimized by default with the `org.nuxeo.drive.permissionCheckOptimized` property of the `ConfigurationService` set to `true`.

The previous behavior can be re-activated using:

```xml
<extension target="org.nuxeo.runtime.ConfigurationService" point="configuration">
  <property name="org.nuxeo.drive.permissionCheckOptimized">false</property>
</extension>
```

See [NXP-19441](https://jira.nuxeo.com/browse/NXP-19441) for details.

{{! /multiexcerpt}}

### Nuxeo Packages

#### Deprecated Packages

{{! multiexcerpt name='upgrade-8.3-NuxeoPackages-webMobile'}}

`nuxeo-web-mobile` has been deprecated in order to let some place to the new standalone Nuxeo Application, available on [iOS](https://itunes.apple.com/app/nuxeo/id1103802613) and [Android](https://play.google.com/store/apps/details?id=com.nuxeomobile).

{{! /multiexcerpt}}

#### New Packages

{{! multiexcerpt name='upgrade-8.3-NuxeoPackages-jsfui'}}

The [Nuxeo JSF UI](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-jsf-ui) package lets you install theNXP-19740 Nuxeo UI based on JSF technologies.

{{! /multiexcerpt}}

### Complementary Information&nbsp;

* [Upgrade notes for 8.3](https://jira.nuxeo.com/issues/?jql=project%20in%20%28NXP%29%20AND%20resolution%20%3D%20Fixed%20AND%20fixVersion%20IN%20%28%228.3%22%20%29%20AND%20%28%22Impact%20type%22%20%3D%20%22API%20change%22%20OR%20%22Upgrade%20notes%22%20is%20not%20EMPTY%29%20ORDER%20BY%20component%20DESC%2C%20key%20DESC)
* [Release notes for 8.3](http://nuxeo.github.io/releasenotes/8.3/)

## From 8.3 to LTS 2016

### Code Changes&nbsp;&nbsp;

#### Deprecated APIs

{{! multiexcerpt name='upgrade-8.10-deprecated-apis'}}

- Extension point `request-configuration` of `org.nuxeo.ecm.webengine.WebEngineComponent` is now obsolete: a transaction will always be started when calling a WebEngine endpoint. [NXP-20045](https://jira.nuxeo.com/browse/NXP-20045)

- `NuxeoAuthenticationFilter#DEFAULT_START_PAGE` has been removed, use `LoginScreenHelper.getStartupPagePath()` instead. See [NXP-19992](https://jira.nuxeo.com/browse/NXP-19992) for details.

- Compatibility `AssetLibrary` document type has been removed. You must update your database to change the type from `AssetLibrary` to `Domain`. See [NXP-20943](https://jira.nuxeo.com/browse/NXP-20943) for details.
    ```sql
    # PostgreSQL Update Query
    UPDATE hierarchy SET primarytype = 'Domain' WHERE primarytype = 'AssetLibrary';
    ```

- `Framework.getService(CoreSession.class)` has been removed. You must use `Framework.getService(CoreSessionService.class).createCoreSession(repositoryName, principal)` instead. See [NXP-20083](https://jira.nuxeo.com/browse/NXP-20083) for details.

- All DataModel and DocumentPart public APIs have been deprecated, and reserved for internal use:
    ```
    Deprecated:
    - DataModel
    - DataModelMap
    - DocumentModel.getDataModelsCollection
    - DocumentModel.getDataModels
    - DocumentModel.getDataModel

    Deprecated:
    - DocumentPart
    - DocumentModel.getPart(schema)
    - DocumentModel.getParts()
    New methods:
    - DocumentModel.getPropertyObject(schema, name)
    - DocumentModel.getPropertyObjects(schema)
    ```
{{! /multiexcerpt}}

### Installation and Configuration&nbsp;

{{! multiexcerpt name='upgrade-8.10-installation-requirements'}}

#### Requirements

** Java **
JDK 1.8.0_112 is required.

** OpenOffice **
OpenOffice is no longer supported.

** LibreOffice **
LibreOffice minimum version required is 5.x and the `soffice` program must be added to the `PATH` environment variable.

** ccextractor **
Nuxeo DAM now requires ccextractor for video closed captions extraction.

{{! /multiexcerpt}}

#### New Parameters

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th colspan="1">Parameter</th>
<th colspan="1">Description</th>
<th colspan="1">Reference</th>
</tr>
<tr>
<td colspan="1">`nuxeo.picture.migration.enabled`</td>
<td colspan="1">When set to `false` allows to disable the picture migration that is run on startup and that can be slow on big volume.</td>
<td colspan="1">[NXP-19812](https://jira.nuxeo.com/browse/NXP-19812)</td>
</tr>
</tbody>
</table>
</div>

#### Parameters to Update

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th colspan="1">Parameter</th>
<th colspan="1">Modification</th>
<th colspan="1">Reference</th>
</tr>
<tr>
<td colspan="1">`elastcisearch.reindex.onStartup`</td>
<td colspan="1">**Moved** to `elasticsearch.reindex.onStartup`</td>
<td colspan="1">[NXP-20867](https://jira.nuxeo.com/browse/NXP-20867)</td>
</tr>
</tbody>
</table>
</div>

{{! multiexcerpt name='upgrade-8.10-installation-elasticsearch-upgrade'}}

#### Elasticsearch Upgrade

** Upgrade Elasticsearch Version **

Upgrading Elasticsearch to 2.3.x is required. Please have a look at Elasticsearch breaking changes [here](https://www.elastic.co/guide/en/elasticsearch/reference/2.0/breaking-changes-2.0.html).

In order to upgrade your cluster to 2.3.x, please follow these [steps](https://www.elastic.co/guide/en/elasticsearch/reference/current/restart-upgrade.html).

** Update Properties with Dots **

As dots (`.`) are not longer accepted in a property name, we replaced properties like `ecm:path.depth` by this form `ecm:path@depth`. So you need to:
1. Drop your index containing properties with dot.
2. Upgrade Elasticsearch cluster + Nuxeo.
3. Re-index your repository. In Nuxeo case, only the index storing documents needs to be re-indexed.

** Use Scroll API to Fetch All Documents **

`NxQueryBuilder.limit(int)` won't accept `-1` soon due to Elasticsearch changes on `index.max_result_window`. This parameter is now 10000 by default, which prevent us to set `Integer.MAX_VALUE` in order to return all documents.

In order to fetch all documents, we recommend you to use the scroll API instead (`ElasticSearchComponent.scroll(NxQueryBuilder, long)`).
All queries made with a `-1` as limit will fail unless you update the `index.max_result_window` setting on ES cluster (highly unrecommended).

See [NXP-19194](https://jira.nuxeo.com/browse/NXP-19194) for details.

{{! /multiexcerpt}}

### Distribution Changes&nbsp;

#### Nuxeo Server as the Base Distribution and CAP Removal

As stated in the *From 8.2 to 8.3 > UI Dedicated Package* section, the new base distribution is Nuxeo Server, and Nuxeo CAP has been removed.
Thus the following changes in [nuxeo-distribution](https://github.com/nuxeo/nuxeo/tree/8.10/nuxeo-distribution):

{{! multiexcerpt name='upgrade-8.10-distributionChanges'}}
** Renamed Maven Modules **

- `nuxeo-distribution-server` => `nuxeo-nxr-server`
- `nuxeo-distribution-jsf-ui` => `nuxeo-nxr-jsf-ui`
- `nuxeo-distribution-tests` => `nuxeo-test-dependencies`
- `nuxeo-distribution-tomcat-wizard-tests` => `nuxeo-wizard-tests`
- `nuxeo-distribution-cap-cmis-tests` => `nuxeo-server-cmis-tests`
- `nuxeo-distribution-cap-funkload-tests` => `nuxeo-jsf-ui-funkload-tests`
- `nuxeo-distribution-cap-gatling-tests` => `nuxeo-jsf-ui-gatling-tests`
- `nuxeo-distribution-cap-webdriver-tests` => `nuxeo-jsf-ui-webdriver-tests`
- `nuxeo-distribution-tomcat` => `nuxeo-server-tomcat`, no more `-nuxeo-cap`
classifier

Since the CAP distribution has been removed, you also need to replace `nuxeo-distribution-cap` by `nuxeo-nxr-server`.

{{#> callout type='info' }}
These changes in the Maven artifact names must be applied to any `pom.xml` or `assembly.xml` file.
{{/callout}}

#### Functional Tests

The default distribution tested in functional tests is now a simple
`nuxeo-server-tomcat` without the `nuxeo-jsf-ui` package installed.

[tools-nuxeo-ftest](https://github.com/nuxeo/tools-nuxeo-ftest)
has been updated for this purpose, see [NXBT-1351](https://jira.nuxeo.com/browse/NXBT-1351).

Consequently, if you need to run functional tests against a distribution including the `nuxeo-jsf-ui` package, you need to specify it explicitly in the `itests.xml` file:

```xml
<property name="mp.install" value="file:${out.dir}/nuxeo-marketplace-jsf-ui-${maven.project.version}.zip" />
...
<target name="XXX">
  <copy todir="${out.dir}">
    <artifact:file key="org.nuxeo.ecm.distribution:nuxeo-marketplace-jsf-ui::zip" />
  </copy>
</target>
```

Having the following dependency in the `pom.xml`:

```xml
<dependency>
  <groupId>org.nuxeo.ecm.distribution</groupId>
  <artifactId>nuxeo-marketplace-jsf-ui</artifactId>
  <type>zip</type>
  <scope>provided</scope>
</dependency>
```

See [NXP-19790](https://jira.nuxeo.com/browse/NXP-19790) and [NXP-20938](https://jira.nuxeo.com/browse/NXP-20938) for details.

#### Impact on Nuxeo Packages

#### Maven Artifacts

The changes in the [Maven artifact names](#renamed-maven-modules) mentioned above must be applied to any `pom.xml` or `assembly.xml` file in a Nuxeo package:

- `nuxeo-distribution-cap` => `nuxeo-nxr-server`
- `nuxeo-distribution-server` => `nuxeo-nxr-server`
- `nuxeo-distribution-jsf-ui` => `nuxeo-nxr-jsf-ui`

#### Target Platform

The default target platform is now the `server` distribution, so the `package.xml` file of a Nuxeo package must contain:

```xml
<platforms>
  <platform>server-@DISTRIB_VERSION@</platform>
  <platform>server-@DISTRIB_VERSION@-*</platform>
</platforms>
```

** Dependency on nuxeo-jsf-ui **

If a Nuxeo package depends on the `nuxeo-jsf-ui` package at runtime then it needs to be added as a dependency in `package.xml`:

```xml
<dependencies>
  <package>nuxeo-jsf-ui</package>
</dependencies>
```

** Optional Dependencies **

If a Nuxeo package can be installed on a `server` distribution with or without the `nuxeo-jsf-ui` package, the `package.xml` file must contain an optional dependency instead:

```xml
<optional-dependencies>
  <package>nuxeo-jsf-ui</package>
</optional-dependencies>
```

In this case the package assembly needs to handle the split of the
bundles and libs into the `bundles`/`bundles-jsf-ui`/`bundles-web-ui` and `lib`/`lib-jsf-ui`/`lib-web-ui` directories of the package. See for example [marketplace-dam](https://github.com/nuxeo/marketplace-dam/blob/master/marketplace/src/main/assemble/assembly.xml), [marketplace-drive](https://github.com/nuxeo/marketplace-drive/blob/master/marketplace/src/main/assemble/assembly.xml), [marketplace-quota](https://github.com/nuxeo/marketplace-quota/blob/master/marketplace/src/main/assemble/assembly.xml).

Same thing about the `nuxeo-web-ui` package.

** Package Functional Tests **

As mentioned above in the [Functional Tests](#functional-tests) section, if the functional tests of a Nuxeo package need to be run against a distribution including the `nuxeo-jsf-ui` package, it needs to be specified explicitly in the `itests.xml` file.

See [NXP-20939](https://jira.nuxeo.com/browse/NXP-20939) for details.
{{! /multiexcerpt}}

** Moved Code **

Select2 Operations

{{! multiexcerpt name='upgrade-8.10-select2-operations-moved'}}

The operations used by select2 widgets have been extracted from the nuxeo-platform-ui-select2 bundle to the nuxeo-automation-features one:
 - [org.nuxeo.ecm.platform.ui.select2.automation.SuggestUserEntries](https://github.com/nuxeo/nuxeo/blob/7.10/nuxeo-features/nuxeo-platform-ui-select2/src/main/java/org/nuxeo/ecm/platform/ui/select2/automation/SuggestUserEntries.java) is now  [org.nuxeo.ecm.automation.core.operations.users.SuggestUserEntries](https://github.com/nuxeo/nuxeo/blob/8.10/nuxeo-features/nuxeo-automation/nuxeo-automation-features/src/main/java/org/nuxeo/ecm/automation/core/operations/users/SuggestUserEntries.java)
 - [org.nuxeo.ecm.platform.ui.select2.automation.SuggestDirectoryEntries](https://github.com/nuxeo/nuxeo/blob/7.10/nuxeo-features/nuxeo-platform-ui-select2/src/main/java/org/nuxeo/ecm/platform/ui/select2/automation/SuggestDirectoryEntries.java) is now  [org.nuxeo.ecm.automation.core.operations.services.directory.SuggestDirectoryEntries](https://github.com/nuxeo/nuxeo/blob/8.10/nuxeo-features/nuxeo-automation/nuxeo-automation-features/src/main/java/org/nuxeo/ecm/automation/core/operations/services/directory/SuggestDirectoryEntries.java)

 {{! /multiexcerpt}}

### Nuxeo Studio Application Definition

 {{! multiexcerpt name='upgrade-8.10-studio-deps'}}
 Make sure your Nuxeo Studio project depends on the **Nuxeo JSF UI** target package. See the pages [HOWTO: Update the Version of Your Target Platform in Studio]({{page page='studio/update-the-version-of-your-target-platform'}}) and [Specific Upgrade Instructions]({{page page='studio/specific-upgrade-instructions'}}) for more details.
 {{! /multiexcerpt}}

### Nuxeo Packages

#### Packages Updates

** Nuxeo Digital Signature **

{{! multiexcerpt name='upgrade-8.10-NuxeoPackages-digital-signature'}}

Only administrators can use `signPDF` and `signPDFDocument` Operations. Otherwise an `OperationException` is thrown. See [NXP-15990](https://jira.nuxeo.com/browse/NXP-15990) for details.

{{! /multiexcerpt}}

#### Deprecated Addons

{{! multiexcerpt name='upgrade-8.10-NuxeoPackages-deprecated'}}
The following addons are deprecated with the release of Nuxeo Platform LTS 2016:
- Nuxeo Review Workflows Dashboards
- Smart Search
- Nuxeo Virtual Navigation
- Nuxeo Forum

{{! /multiexcerpt}}

### Complementary Information&nbsp;

* [Upgrade notes for LTS 2016](https://jira.nuxeo.com/issues/?jql=project%20in%20%28NXP%29%20AND%20resolution%20%3D%20Fixed%20AND%20fixVersion%20IN%20%28%228.10%22%20%29%20AND%20%28%22Impact%20type%22%20%3D%20%22API%20change%22%20OR%20%22Upgrade%20notes%22%20is%20not%20EMPTY%29%20ORDER%20BY%20component%20DESC%2C%20key%20DESC)
* [Release notes for LTS 2016](http://nuxeo.github.io/releasenotes/8.10/)

{{! /multiexcerpt}}

* * *

<div class="row" data-equalizer data-equalize-on="medium">
<div class="column medium-6">
{{#> panel heading='Related Documentation'}}

- [Upgrade from LTS 2015 to LTS 2016]({{page page='upgrade-from-lts-2015-to-lts-2016'}})
- [Upgrading the Nuxeo Platform]({{page page='upgrading-the-nuxeo-platform'}})
- [HOWTO: Update the Version of Your Target Platform in Studio]({{page space='studio' page='update-the-version-of-your-target-platform'}})

{{/panel}}
</div>
<div class="column medium-6">
</div>
</div>
