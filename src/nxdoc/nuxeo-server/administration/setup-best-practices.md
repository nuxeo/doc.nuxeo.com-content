---
title: Setup Best Practices
review:
  comment: ''
  date: '2017-12-13'
  status: ok
labels:
  - content-review-lts2016
  - configuration
  - alerts
  - logs
  - bdelbosc
  - last-review-20141126
  - lts2017-ok
toc: true
confluence:
  ajs-parent-page-id: '31032113'
  ajs-parent-page-title: Administration
  ajs-space-key: NXDOC
  ajs-space-name: Nuxeo Platform Developer Documentation
  canonical: Setup+Best+Practices
  canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Setup+Best+Practices'
  page_id: '6030073'
  shortlink: _QJc
  shortlink_source: 'https://doc.nuxeo.com/x/_QJc'
  source_link: /display/NXDOC/Setup+Best+Practices
tree_item_index: 500
version_override:
  LTS 2015: 710/admindoc/recommended-configurations
  '6.0': 60/admindoc/recommended-configurations
  '5.8': 58/admindoc/recommended-configurations
history:
  - author: Solen Guitter
    date: '2016-07-25 13:21'
    message: ''
    version: '33'
  - author: Solen Guitter
    date: '2016-07-25 13:20'
    message: Make info panel a section of the page
    version: '32'
  - author: Alain Escaffre
    date: '2016-07-22 13:46'
    message: ''
    version: '31'
  - author: Alain Escaffre
    date: '2016-07-22 13:44'
    message: ''
    version: '30'
  - author: Alain Escaffre
    date: '2016-07-22 13:33'
    message: ''
    version: '29'
  - author: Julien Carsique
    date: '2016-07-18 14:10'
    message: ''
    version: '28'
  - author: Solen Guitter
    date: '2016-04-12 07:59'
    message: ''
    version: '27'
  - author: Solen Guitter
    date: '2016-03-29 15:31'
    message: ''
    version: '26'
  - author: Manon Lumeau
    date: '2016-03-25 15:17'
    message: ''
    version: '25'
  - author: Alain Escaffre
    date: '2016-03-23 22:43'
    message: ''
    version: '24'
  - author: Alain Escaffre
    date: '2016-03-23 11:12'
    message: ''
    version: '23'
  - author: Alain Escaffre
    date: '2016-03-23 11:09'
    message: ''
    version: '22'
  - author: Solen Guitter
    date: '2014-11-26 14:07'
    message: ''
    version: '21'
  - author: Solen Guitter
    date: '2014-04-11 10:15'
    message: ''
    version: '20'
  - author: Solen Guitter
    date: '2013-10-30 13:13'
    message: ''
    version: '19'
  - author: Solen Guitter
    date: '2013-10-30 10:27'
    message: Added some links and removed obsolete information
    version: '18'
  - author: Solen Guitter
    date: '2013-10-30 10:17'
    message: Added section about production-safe databases
    version: '17'
  - author: Solen Guitter
    date: '2013-10-10 16:41'
    message: ''
    version: '16'
  - author: Solen Guitter
    date: '2013-05-22 15:12'
    message: ''
    version: '15'
  - author: Florent Guillaume
    date: '2012-03-14 15:17'
    message: Migrated to Confluence 4.0
    version: '14'
  - author: Florent Guillaume
    date: '2012-03-14 15:17'
    message: ''
    version: '13'
  - author: Florent Guillaume
    date: '2012-03-14 15:16'
    message: ''
    version: '12'
  - author: Florent Guillaume
    date: '2012-03-14 15:06'
    message: ''
    version: '11'
  - author: Solen Guitter
    date: '2011-12-10 00:02'
    message: ''
    version: '10'
  - author: Solen Guitter
    date: '2011-12-10 00:01'
    message: ''
    version: '9'
  - author: Thierry Martins
    date: '2011-05-20 17:35'
    message: ''
    version: '8'
  - author: Solen Guitter
    date: '2011-04-21 15:01'
    message: 'added steps to move conf, data and logs'
    version: '7'
  - author: Solen Guitter
    date: '2011-04-21 11:35'
    message: added environment variables definition steps
    version: '6'
  - author: Florent Guillaume
    date: '2011-04-01 18:27'
    message: fix data vs log confusion
    version: '5'
  - author: Solen Guitter
    date: '2011-03-11 17:02'
    message: ''
    version: '4'
  - author: Solen Guitter
    date: '2011-03-11 15:41'
    message: ''
    version: '3'
  - author: Julien Carsique
    date: '2011-03-11 15:18'
    message: ''
    version: '2'
  - author: Solen Guitter
    date: '2011-03-11 11:40'
    message: ''
    version: '1'
---

Nuxeo applications come as ready-to-use applications, that you can quickly install and evaluate. However, if you plan to go in production, have several Nuxeo applications on the same machine or do some performance tests, here are some changes of configuration that we recommend to do, especially for advanced testing or before going into production.

The steps given below are given using the [Admin tab]({{page page='admin-tab-overview'}}). They can of course also be done by [editing the `nuxeo.conf` file manually]({{page page='configuration-parameters-index-nuxeoconf'}}).

## Global Recommendation

Nuxeo is designed by and for customization and extensibility: it is never required to edit a Nuxeo file, thus it should never be done. Following that principle will greatly ease the maintenance.

You must never edit the content of the server but use [the configuration properties]({{page page='configuration-parameters-index-nuxeoconf'}}), [the configuration templates]({{page page='configuration-templates'}}) and the [contributions]({{page page='how-to-contribute-to-an-extension'}}).

## Moving Configuration, data and log Directories Outside Nuxeo

The configuration of your application is saved in the `nuxeo.conf` configuration file, whatever the [means you use to configure your application]({{page page='configuration-wizard'}}) (manual edit, Startup Wizard or Admin tab). It is better, although not mandatory, to store your customized configuration outside the Nuxeo Platform. This way, you will be able to easily upgrade the Nuxeo Platform, keeping your configuration safely apart of Nuxeo directory.

**To move the configuration file outside the Nuxeo directory:**

1.  Move the `nuxeo.conf` file from its default location.
2.  After you moved `nuxeo.conf`, you need to [define its location as an environment variable](#nuxeo_conf).

By default, `data` and `log` directories are stored inside the Nuxeo tree. To ease backup and upgrades, it is highly recommended to move them outside the Nuxeo tree.

**To move the data and log directories:**

{{{multiexcerpt name='DeprecatedJSF' page='nxdoc/generic-multi-excerpts'}}}

1.  In the Admin tab **System Information** > **Setup** tab, type the path to the location where you want the directories to be stored (see the table below).
2.  Click on **Save**.
3.  Restart your server.
    The `data` and `log` directories are created at the location you typed.

**Data and log directories configuration**

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">

Field / Property

</th><th colspan="1">

Description

</th></tr><tr><td colspan="1">

Data directory
`nuxeo.data.dir`

</td><td colspan="1">

Data directory (absolute or relative to NUXEO_HOME). It involves all data not being stored in the database.
Linux recommended path: `/var/lib/nuxeo/...`

</td></tr><tr><td colspan="1">

Log directory
`nuxeo.log.dir`

</td><td colspan="1">

Log directory (absolute or relative to NUXEO_HOME).
Linux recommended path: `/var/log/nuxeo/...`

</td></tr></tbody></table></div>

## Defining Environment Variables {{> anchor 'define-environment-variables'}}

When the server starts, it guesses where the Nuxeo home directory and the Nuxeo configuration file (`nuxeo.conf`) are located. If it doesn't find it or if you want to force it to use a specific home directory and/or a specific configuration file, you can define their location as environment variables.

### `NUXEO_HOME`

Here is how Nuxeo home is guessed when the server starts: If `NUXEO_HOME` is not set, then we use the parent of the directory `nuxeoctl` is launched from.

Setting the Nuxeo home directory as an environment variable is recommended in the following cases:

- if you installed several Nuxeo applications on the same machine (for evaluation or production purpose),
- if you want to use other scripts than the `$NUXEO_HOME/bin/nuxeoctl` script (such as a service in `/ect/init.d`).

You must then set `NUXEO_HOME=/path/to/nuxeo/` in the system environment variables:

- Windows users must write `"set NUXEO_HOME=..."` or use the control panel interface to define user environment parameters (like it's done for `%PATH%`).
- Linux and Mac OS X users will write `"export NUXEO_HOME=...`." in `~/.bashrc` or `~/.profile`.

### `NUXEO_CONF`

You need to set the location of the `nuxeo.conf` file as an environment variable if you moved your configuration outside of the Nuxeo directory.

Moving the data and configuration outside the Nuxeo directory is recommended in a production environment because it makes upgrades easier and more secured: Your data and configuration won't risk to be overridden or lost. You must then set `NUXEO_CONF=/path/to/nuxeo.conf` in the system environment variables.

#### Windows Specific Case

Under Windows, the location of the `nuxeo.conf` is defined by that order of priority (i.e. first one of those found is used):

- Registry key `HKEY_LOCAL_MACHINE\SOFTWARE\%PRODNAME%\ConfigFile` with `%PRODNAME%` equals to "Nuxeo" (or in older versions, "Nuxeo CAP", "Nuxeo DM", "Nuxeo DAM", ...),
- Environment variable `NUXEO_CONF`,
- `"nuxeo.conf"` file in the working directory,
- `"nuxeo.conf"` file on the Desktop,
- `"nuxeo.conf"` file in the same location as `nuxeoctl.bat`.

## Changing the Default Embedded Database

The Nuxeo Platform provides a default embedded database for testing and evaluation purpose, called Derby. However, it is not adapted for a production environment (see the [H2 limitations page]({{page page='h2-limitations'}})).

Before going live, you should configure one of the production-safe database supported by the Nuxeo Platform. See the [Database]({{page page='database-configuration'}}) section of this documentation.

&nbsp;

---

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related content'}}

- [Admin Tab Overview]({{page page='admin-tab-overview'}})
- [Configuration Parameters Index (nuxeo.conf)]({{page page='configuration-parameters-index-nuxeoconf'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
