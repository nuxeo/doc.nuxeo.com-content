---
title: Hotfixes Installation Notes for Nuxeo Platform LTS 2015
review:
    comment: ''
    date: ''
    status: ok
toc: true
confluence:
    ajs-parent-page-id: '27604627'
    ajs-parent-page-title: Monitoring and Maintenance
    ajs-space-key: ADMINDOC710
    ajs-space-name: Nuxeo Installation and Administration — LTS 2015
    canonical: Hotfixes+Installation+Notes+for+Nuxeo+Platform+LTS+2015
    canonical_source: >-
        https://doc.nuxeo.com/display/ADMINDOC710/Hotfixes+Installation+Notes+for+Nuxeo+Platform+LTS+2015
    page_id: '27604675'
    shortlink: wzalAQ
    shortlink_source: 'https://doc.nuxeo.com/x/wzalAQ'
    source_link: >-
        /display/ADMINDOC710/Hotfixes+Installation+Notes+for+Nuxeo+Platform+LTS+2015
tree_item_index: 1300
version_override:
    LTS 2016: 810/nxdoc/hotfixes-installation-notes-for-nuxeo-platform-lts-2016
    '6.0': 60/admindoc/hotfixes-installation-notes-for-nuxeo-platform-60
history:
    -
        author: Manon Lumeau
        date: '2016-07-22 13:30'
        message: ''
        version: '25'
    -
        author: Thierry Martins
        date: '2016-07-22 13:24'
        message: ''
        version: '24'
    -
        author: Anahide Tchertchian
        date: '2016-07-11 15:48'
        message: 'NXDOC-840: insert slot for JSF optims'
        version: '23'
    -
        author: Anahide Tchertchian
        date: '2016-07-11 15:46'
        message: 'NXDOC-840: insert slot for JSF optims'
        version: '22'
    -
        author: Solen Guitter
        date: '2016-07-05 08:06'
        message: ''
        version: '21'
    -
        author: Thierry Martins
        date: '2016-07-04 09:08'
        message: ''
        version: '20'
    -
        author: Thierry Martins
        date: '2016-07-04 08:54'
        message: ''
        version: '19'
    -
        author: Thierry Martins
        date: '2016-07-04 08:53'
        message: ''
        version: '18'
    -
        author: Thierry Martins
        date: '2016-05-25 09:38'
        message: ''
        version: '17'
    -
        author: Manon Lumeau
        date: '2016-05-04 09:03'
        message: ''
        version: '16'
    -
        author: Ronan Daniellou
        date: '2016-04-19 10:49'
        message: format
        version: '15'
    -
        author: Ronan Daniellou
        date: '2016-04-19 10:46'
        message: Capitalization
        version: '14'
    -
        author: Ronan Daniellou
        date: '2016-04-19 10:45'
        message: 'Upgrade note for HF09: blob URL fixed'
        version: '13'
    -
        author: Thierry Martins
        date: '2016-03-24 09:52'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2016-03-03 13:58'
        message: Fix typos
        version: '11'
    -
        author: Thierry Martins
        date: '2016-03-02 08:15'
        message: ''
        version: '10'
    -
        author: Manon Lumeau
        date: '2016-02-19 14:05'
        message: ''
        version: '9'
    -
        author: Thierry Martins
        date: '2016-02-18 10:10'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2016-01-29 13:23'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2016-01-29 13:18'
        message: Add HF03
        version: '6'
    -
        author: Solen Guitter
        date: '2015-12-22 14:39'
        message: ''
        version: '5'
    -
        author: Manon Lumeau
        date: '2015-12-21 09:45'
        message: Formatting
        version: '4'
    -
        author: Thierry Martins
        date: '2015-12-17 10:06'
        message: ''
        version: '3'
    -
        author: Thierry Martins
        date: '2015-12-09 17:25'
        message: ''
        version: '2'
    -
        author: Thierry Martins
        date: '2015-12-09 17:24'
        message: ''
        version: '1'

---
{{! multiexcerpt name='main_content'}}

{{! excerpt}}
The purpose of this page is to describe the additional actions that need to be done when installing the hotfixes on Nuxeo Platform and that cannot be done automatically. The page provides an exhaustive list of manipulations for the installation of Nuxeo Platform LTS 2015 hotfixes, but you need only to apply those relevant for your own instance.

{{! multiexcerpt name='intro_hotfix'}}
When you are installing/configuring a new Nuxeo instance, the very first thing to do is to install the hotfixes. Because it will provide fixes on the Nuxeo launcher, on the startup wizard and on the templates, installing them immediately will prevent from encountering known issues.

{{! /excerpt}}

## How to Keep Your Instance up-to-Date

{{#> callout type='tip' }}
Hotfixes always have dependencies on the previous hotfix. So if you need to install several hotfixes, you can download only the latest one: when you install it, it will trigger the installation of the previous hotfixes.
{{/callout}}

### Installing Hotfixes from the Command Line

The Nuxeo Platform provides a command to automatically install all the available hotfixes. From the command line, run the following command:

*   For Linux and Mac OS users:

    ```bash
    $ ./nuxeoctl mp-hotfix --accept=true
    ```

*   For Windows users:

    ```bash
    > nuxeoctl.bat mp-hotfix --accept=true
    ```

The parameter `--accept=true` automatically replies `yes` to any prompt, which makes the hotfix installation smoother.

{{#> callout type='warning' }}
While installing hotfixes, you will see the following message, but you can ignore it and continue.  
```
Use of the <copy /> command on JAR files is not recommended, prefer using <update /> command to ensure a safe rollback. (nuxeo-launcher-8.10-HF01-jar-with-dependencies.jar)
```
{{/callout}}

### Installing Hotfixes from the Update Center

You can also download and install hotfixes from the **Update Center** in the **Admin** tab.The installation of hotfixes requires the server to be restarted to complete the installation: follow the manual installation and configuration steps required by the installed hotfixes before you restart your server.
{{! /multiexcerpt}}

## Hotfix 31

### Deactivation of Emergency User

The activation by default of the emergency user has been considered as a security issue. Therefore the hotfix 31 has disabled it by changing the property `nuxeo.user.emergency.enable`. To recover the previous behavior, add the following line in your `nuxeo.conf` file:
```
nuxeo.user.emergency.enable=true
```


## Hotfix 20

### Rebuilding READ ACL Cache

In case you previously [disabled the ACL optimization]({{page version='' space='admindoc' page='vcs-configuration'}}#optimizations), and even if you reactivated it, you need to manually rebuild the READ ACL cache. [NXP-20862](https://jira.nuxeo.com/browse/NXP-20862) addresses this issue but cannot fix existing inconsistencies in the database.

Run the following SQL query directly against your database:
* PostgreSQL
```sql
SELECT nx_rebuild_read_acls();
```
* Oracle
```sql
CALL nx_rebuild_read_acls;
```
* SQL Server
```sql
EXEC nx_rebuild_read_acls;
```

## Hotfix 19

### Elasticsearch Configuration

Following backport of [NXP-19283](https://jira.nuxeo.com/browse/NXP-19283), optimistic concurrency control is now enabled by default. Should you want to disable it you would have to edit the Elasticsearch template and add the following to the `elasticSearchRemote` or `elasticSearchLocal` tags.

```
useExternalVersion="false"
```

## Hotfix 18

### Package Cleanup

If you have downloaded revision 1.0.0 of HF18 package, you need to manually remove it to be able to install the latest revision (i.e. 1.0.1):

```
./nuxeoctl mp-remove nuxeo-7.10-HF18-1.0.0 --nodeps
```

## Hotfix 13

### Package Cleanup

If you have downloaded the version 1.0.0 of HF12 package, you need to manually remove it to be able to install the hotfix 13:

```
./nuxeoctl mp-remove nuxeo-7.10-HF12-1.0.0 --nodeps
```

## Hotfix 12

### Quartz Upgrade

The script to upgrade from Quartz 1.8.6 to Quartz 2.2.2 is broken. [NXP-19725](https://jira.nuxeo.com/browse/NXP-19725) fixed the issue and you now have to use this [script](https://raw.githubusercontent.com/nuxeo/nuxeo/9f6f65b367830022b43a14eee8f3cad90b96853b/nuxeo-distribution/nuxeo-distribution-resources/src/main/resources/bin/upgrade-6.0-7.10/7.3-quartz-1.8.6-2.2.2.sql).

### JSF Improvements

The work done to improve [JSF performances](https://jira.nuxeo.com/browse/NXP-17690) for Nuxeo 8.x have been backported to the maintenance branch of Nuxeo LTS 2015\. But they are disabled by default, not to introduce changes in your applications. Use the following contribution to enable them:

```xml
<?xml version="1.0"?>
<component name="org.nuxeo.ecm.platform.enable.jsf.optims.config">
  <require>org.nuxeo.ecm.platform.actions.actionwidgettypes</require>
  <require>org.nuxeo.ecm.platform.forms.layout.properties</require>
  <require>org.nuxeo.ecm.platform.ui.web.configuration.default</require>
  <require>org.nuxeo.ecm.platform.webapp.base.properties</require>
  <extension target="org.nuxeo.runtime.ConfigurationService"
    point="configuration">
    <property name="nuxeo.jsf.actions.removeActionOptims">false</property>
    <property name="nuxeo.jsf.layout.removeAliasOptims">false</property>
    <property name="nuxeo.jsf.removeAliasOptimsReloaded">false</property>
    <property name="nuxeo.jsf.listings.useRepeatRenderTime">true</property>
  </extension>
</component>
```

Upgrade instructions are given below.

{{{multiexcerpt 'JSF-optimizations' page='NXDOC:Upgrade from LTS 2015 following Fast Tracks'}}}

## Hotfix 10

### Nuxeo Automation Client

If you're using the Automation Client library, you have to get the [latest version](https://maven-eu.nuxeo.org/nexus/service/local/repositories/public-releases/content/org/nuxeo/ecm/automation/nuxeo-automation-client/7.10-HF10/nuxeo-automation-client-7.10-HF10.jar) that includes the fix from [NXP-19539](https://jira.nuxeo.com/browse/NXP-19539).

### Login Digest Configuration

[NXP-19584](https://jira.nuxeo.com/browse/NXP-19584) introduces a default cache in the configuration of the Login Digest directory. The template `templates/common/config/login-digest-config.xml` has been updated with this new value. If you have overridden it, you need to update your template.

## Hotfix 09

### Download URL in JSON Export

[NXP-18239](https://jira.nuxeo.com/browse/NXP-18239) introduces a fix regarding the prefix of the property of the URL of blobs as found in JSON output when querying `nuxeo/api/v1/id/myDocumentId`. For example for a thumbnail it was ending with `/**thumbnail:thumb:thumbnail**/retrievedFile.png` now it has been fixed to `/**thumb:thumbnail**/retrievedFile.png`. You should upgrade your code if it was parsing that kind of URL.

## Hotfix 07

### Elasticsearch Configuration

[NXP-19121](https://jira.nuxeo.com/browse/NXP-19121) introduces some changes in the Elasticsearch configuration file to add a default mapping for the audit index. The template `templates/common-base/nxserver/config/elasticsearch-audit-index-config.xml.nxftl` has been updated to take them into account. If you have overridden it, you need to update your template.

### Subscription Migration for Oracle

A SQL script for Oracle Database to migrate the notification subscriptions is available since the hotfix 7: you can get it from this [link](https://raw.githubusercontent.com/nuxeo/nuxeo/release-7.10-HF07/nuxeo-distribution/nuxeo-distribution-resources/src/main/resources/bin/upgrade-6.0-7.10/notification-subscriptions-migration.oracle.sql).

## Hotfix 06

### Nuxeo Shell

A new Nuxeo Shell has been released to provide a fix for [NXP-19066](https://jira.nuxeo.com/browse/NXP-19066): you can download it with this attachment []({{file name='nuxeo-shell-7.10-HF06.jar'}}).

## Hotfix 05

### Redis Configuration

[NXP-18588](https://jira.nuxeo.com/browse/NXP-18588) introduces two new configuration parameters to set up Redis pool size. The template `templates/common-base/nxserver/config/redis-config.xml.nxftl` has been updated to take them into account. If you have overridden it, you need to update your template.

Here are these parameters names and their default values:

```
nuxeo.redis.maxTotal=16
nuxeo.redis.maxIdle=8
```

## Hotfix 04

### Access to the Admin Tab

Some JavaScript resources have been changed in the hotfix 4\. If your browser cache is too aggressive, you could be redirected to the default page when trying to access to the Admin tab.

You'll need to clear your browser cache to recover a normal behavior.

## Hotfix 03

### Database Configuration

New DDL statements are included with the fix for [NXP-18683](https://jira.nuxeo.com/browse/NXP-18683). If your application is started with `nuxeo.vcs.noddl` set to `true` in your `nuxeo.conf`, you must start your Nuxeo instance once with `nuxeo.vcs.noddl` set to `false` to update the database procedures and functions.

## Hotfix 02

### Redis Configuration

Since [NXP-14923](https://jira.nuxeo.com/browse/NXP-14923), it is possible to use Redis to process cluster invalidation. With this hotfix, instead of modifying the repository contribution, you can add the following line in your `nuxeo.conf`:

```
repository.clustering.invalidation=redis
```

### User and Group Schemas

[NXP-18496](https://jira.nuxeo.com/browse/NXP-18496) changes the schemas `user.xsd` and `group.xsd` to add the `tenantId` attribute.

## Hotfix 01

### VCS Configuration

This hotfix provides a new template for VCS configuration to manage the activation of database optimizations from nuxeo.conf thanks to [NXP-18335](https://jira.nuxeo.com/browse/NXP-18335). Please look at the new file at `templates/common-base/nxserver/config/default-repository-config.xml.nxftl` if you need to adapt this configuration.

Two new default parameters has been added to `nuxeo.defaults`:

```
nuxeo.vcs.optimizations.acl.enabled=true
nuxeo.vcs.optimizations.path.enabled=true
```

### Preview on MacOS

[NXP-17001](https://jira.nuxeo.com/browse/NXP-17001) has introduced a regression when Nuxeo Platform is run under MacOS. This is tracked by [NXP-18883](https://jira.nuxeo.com/browse/NXP-18883).

Until this bug is fixed, you will need to use the following contribution as a workaround:

```
<require>org.nuxeo.ecm.platform.commandline.executor.service.testContrib.magic2</require>
<extension target="org.nuxeo.ecm.platform.commandline.executor.service.CommandLineExecutorComponent"
    point="command">

    <command name="pdftohtml" enabled="true">
      <commandLine>pdftohtml</commandLine>
      <parameterString> -c -enc UTF-8 -noframes #{inFilePath} #{outDirPath}/index.html</parameterString>
      <winParameterString> -c -enc UTF-8 -noframes #{inFilePath} #{outDirPath}\index.html</winParameterString>
      <installationDirective>You need to install pdftohtml</installationDirective>
    </command>

</extension>
```

{{! /multiexcerpt}}

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [nuxeoctl and Control Panel Usage]({{page page='nuxeoctl-and-control-panel-usage'}})
- [Configuration Parameters Index (nuxeo.conf)]({{page page='configuration-parameters-index-nuxeoconf'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Other Related Documentation'}}

- [List of hotfixes for Nuxeo Platform LTS 2015](https://connect.nuxeo.com/nuxeo/site/marketplace/hotfixes/cap-7.10)

{{/panel}}</div></div>
