---
title: Hotfixes Installation Notes for Nuxeo Platform LTS 2016
review:
    comment: ''
    date: '2017-02-07'
    status: ok
labels:
    - lts2016-ok
    - multiexcerpt-include
toc: true
tree_item_index: 1200
version_override:
    LTS 2015: 710/admindoc/hotfixes-installation-notes-for-nuxeo-platform-lts-2015
    '6.0': 60/admindoc/hotfixes-installation-notes-for-nuxeo-platform-60
history:
    -
        author: Manon Lumeau
        date: '2016-05-04 09:05'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2016-01-29 13:24'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2016-01-13 09:08'
        message: Fix typo
        version: '7'
    -
        author: Thierry Martins
        date: '2016-01-12 13:55'
        message: ''
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
{{{multiexcerpt 'intro_hotfix' page='ADMINDOC710:Hotfixes Installation Notes for Nuxeo Platform LTS 2015'}}}

{{#> callout type='warning' }}
While installing hotfixes, you will see the following message, but you can ignore it and continue.  
```
Use of the <copy /> command on JAR files is not recommended, prefer using <update /> command to ensure a safe rollback. (nuxeo-launcher-8.10-HF01-jar-with-dependencies.jar)
```
{{/callout}}

## Instance Registration
Hotfixes released for LTS 2016 can only be used on valid, registered Nuxeo instances.

**Why?** </br>
If you are using an *unregistered LTS 2016 Nuxeo instance with hotfixes installed*, you may encounter the following behavior:
- A warning will be displayed in the logs during startup,

```
ERROR [RuntimeService] NUXEO INSTANCE NOT REGISTERED

***** This Nuxeo instance is not registered *****
It can only be used for development and will be stopped if used in production
```
- Over a certain level of use the server will be stopped automatically. When this happens, a message is displayed in the logs to inform you as well.

```
ERROR [RuntimeService] NUXEO INSTANCE STOPPING

***** This Nuxeo instance is not registered *****
Stopping Nuxeo instance due to threshold exceeded (TOTAL_COMMITS > 100000) after failed registration checks
```
The current limits of use are:
- 100,000 transaction commits
- 10 concurrent sessions (a session correspond to an access to the core)

If the expiration date is close (less than 15 days), a warning will be displayed and indicate how many days are left before expiration.
In the JSF UI, a message based on the Administrative message mechanism will be displayed: all users will be informed.

After expiration date, the following message will be displayed in the logs at startup:
```
ERROR [RuntimeService] NUXEO INSTANCE REGISTRATION EXPIRED

***** This Nuxeo instance registration is expired *****
It can only be used for development and will be stopped if used in production
```

The following message will be displayed in the logs when Nuxeo will be stopped automatically according to the same conditions as described earlier:
```
ERROR [RuntimeService] NUXEO INSTANCE STOPPING

***** This Nuxeo instance registration is expired *****
Stopping Nuxeo instance due to threshold exceeded (TOTAL_COMMITS > 100000) after registration expiration
```

**How Can I Avoid This?** </br>
Make sure to [register your Nuxeo instance]({{page version='810' space='nxdoc' page='registering-your-nuxeo-instance'}}): this can be done both for online and offline instances.

**Could it Break My CI Chain? Do I Need to Register My Test Instances?** </br>
The level of use needed  to stop an *unregistered instance with hotfixes* has been tuned to prevent any problems with CI chain tests. It would be possible to run the full test suite of Nuxeo server (both unit tests AND integration tests) several times before anything would happen.

Nevertheless, it is recommended to register your test instances, especially if you wish to test features that require heavy usage (e.g. load testing or mass import).

**How Often Do I Need to Register My Instance?** </br>
{{#> callout type='warning' }}
Registration tokens are valid until your current contract's expiration date. When renewing your Nuxeo Online Services subscription, you should register your instances again.
{{/callout}}

**I Have More Questions, Who Can I Ask For Help?** </br>
If you have any questions, feel free to contact our support team via a dedicated support ticket.

## Hotfix 15

### Security Issue on MS Windows

Windows users need to upgrade the Tomcat version to protect against a potential CSRF token leak in the default manager applications distributed with Tomcat. Follow this procedure to upgrade Tomcat to version `7.0.81`, version recommended by [NXP-19726](https://jira.nuxeo.com/browse/NXP-19726):
1. Open a PowerShell session.
2. Ensure you can run "java" and "jar" with the current `$env:Path` environment variable or set the `$env:Path` as needed.
3. Set the `ExecutionPolicy` to "Unrestricted" (see [Microsoft usage notes](https://go.microsoft.com/fwlink/?LinkID=135170)).
4. Run the script using the following command line format (using full path to `NUXEO_HOME`):
```
upgrade_tomcat7.ps1 NUXEO_HOME 7.0.81
```
(The script is available under `NUXEO_HOME\templates\common-base\client\scripts` when distributed by Hotfix 15, while the source of the script is available on [GitHub](https://github.com/nuxeo/nuxeo/blob/8.10/nuxeo-distribution/nuxeo-nxr-server/src/main/resources/templates/common-base/client/scripts/upgrade_tomcat7.ps1)).
5. Restore the ExecutionPolicy to your default level.
6. Exit the PowerShell session.


## Hotfix 10

### Package Upgrade
If you are using Nuxeo JSF UI, you must upgrade the package `nuxeo-jsf-ui` to version 8.10.1 to keep the workflows working. Run the following command from the command line to upgrade the installed packages:
```
./nuxeoctl mp-upgrade
```

## Hotfix 09

### Traffic Encryption in Elasticsearch
This hotfix brings a new default template for the Elasticsearch configuration to enable traffic encryption with the following properties:
```
    elasticsearch.shield.keystore.path
    elasticsearch.shield.keystore.password
```
If you have customized the template `templates/common-base/nxserver/config/elasticsearch-config.xml.nxftl`, please report the changes from this [diff](https://github.com/nuxeo/nuxeo/commit/035174c9645eb1689d6216dda85202efe7f8be47) to your custom template.

## Hotfix 01

### DBS Cache Configuration

This hotfix brings a new default template to configure a DBS repository. It exposes new parameters to configure the cache, which are listed below with their default value:
```
nuxeo.dbs.cache.enabled=true
nuxeo.dbs.cache.maxSize=1000
nuxeo.dbs.cache.concurrencyLevel=10
nuxeo.dbs.cache.ttl=10
```

### Orphan Versions Cleanup

[NXP-14187](https://jira.nuxeo.com/browse/NXP-14187) addresses the cleanup of orphan versions, left after a recursive delete (deletion of a folder). However this cleanup is disabled by default. To enable it, you have to add the following contribution:

```
  <extension target="org.nuxeo.ecm.core.scheduler.SchedulerService" point="schedule">
    <schedule id="orphanVersionsCleanup">
      <!-- cleanup every day at 1:30 AM -->
      <cronExpression>0 30 1 * * ?</cronExpression>
      <event>orphanVersionsCleanup</event>
    </schedule>
  </extension>
```

### Automation Compatibility

Some operations have been renamed since LTS 2015 and cannot be used any more with the Java Automation Client. Use the following contribution to enable the aliases and fix the bug:
```
<extension target="org.nuxeo.runtime.ConfigurationService" point="configuration">
  <property name="nuxeo.automation.export.aliases">true</property>
</extension>
```

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [nuxeoctl and Control Panel Usage]({{page page='nuxeoctl-and-control-panel-usage'}})
- [Configuration Parameters Index (nuxeo.conf)]({{page page='configuration-parameters-index-nuxeoconf'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Other Related Documentation'}}

- [List of hotfixes for Nuxeo Platform LTS 2016](https://connect.nuxeo.com/nuxeo/site/marketplace/hotfixes/server-8.10)

{{/panel}}</div></div>
