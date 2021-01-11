---
title: Setup Best Practices
description: Nuxeo applications come as ready-to-use applications that you can quickly install and evaluate. However, if you want to go to production, you may want to follow best practices.
review:
  comment: ''
  date: '2021-01-18'
  status: ok
labels:
  - content-review-lts2016
  - configuration
  - alerts
  - logs
  - bdelbosc
  - last-review-20141126
  - lts2017-ok
  - jsf-ui
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

Nuxeo applications come as ready-to-use applications, that you can quickly install and evaluate. However, if you plan to go in production, here are some changes of configuration that we recommend to do.

## Global Recommendation

Nuxeo is designed by and for customization and extensibility: it is never required to edit a Nuxeo file, thus it should never be done. Following that principle will greatly ease the maintenance.

You must never edit the content of the server but use [the configuration properties]({{page page='configuration-parameters-index-nuxeoconf'}}), [the configuration templates]({{page page='configuration-templates'}}) and the [contributions]({{page page='how-to-contribute-to-an-extension'}}).

## Mounting Data, Log and Temporary Directories as Volumes

{{#> callout type='info' }}
The following recommendations are for the Nuxeo Docker image. If you are using [the Tomcat server ZIP](#tomcat-server-zip), please read the related section.
{{/callout}}

Any data written by Nuxeo should be stored outside the container run from the Nuxeo Docker image. This ensures that the data is persisted and independent from the container that could be killed and removed at any time. It also eases backups and upgrades.

Thus, the following directories should be mounted as external volumes in the container run from the Nuxeo Docker image:

```shell
/var/lib/nuxeo
/var/log/nuxeo
/tmp
```

For instance:

```shell
docker run --name nuxeo \
  -p 8080:8080 \
  -v /path/to/nuxeo/data:/var/lib/nuxeo \
  -v /path/to/nuxeo/log:/var/log/nuxeo \
  -v /path/to/tmp:/tmp \
  docker.packages.nuxeo.com/nuxeo/nuxeo
```

## Add Configuration Properties

To add or update some configuration properties for the Nuxeo Platform, please read the related section about [nuxeo.conf]({{page page='configuration-parameters-index-nuxeoconf'}}#nuxeoconf-file).

## Changing the Default Embedded Database

The Nuxeo Platform provides a default embedded database for testing and evaluation purpose, called H2. However, it is not adapted for a production environment (see the [H2 limitations page]({{page page='h2-limitations'}})).

Before going live, you should configure one of the production-safe database supported by the Nuxeo Platform. See the [Database]({{page page='database-configuration'}}) section of this documentation.

## Java Virtual Machine Settings

Since Java 10, the JVM has better support for container environments. It offers some new options to control the JVM heap size: `InitialRAMPercentage` and `MaxRAMPercentage.`
They are respectively equivalent to the `Xms` and `Xmx` options, using a percentage of the Control Group memory limit (`cgroup`), the memory available for the Java process.
The default values are:

```shell
InitialRAMPercentage = 3
MaxRAMPercentage = 25
```

The historical requirements for Nuxeo are `-Xms512m -Xmx1024m`.

Let's see how we satisfy this minimum `Xmx` requirement using the new options.

### Development Settings

By default, in `nuxeo.conf`, we define the following settings:

```properties
JAVA_OPTS=-XX:InitialRAMPercentage=3 -XX:MaxRAMPercentage=25
```

By setting the minimum and maximum heap size to respectively 3% and 25% of the available memory, we get the following equivalent of the `Xms` and `Xmx` options:

| Available memory | Xms    | Xmx  |
| ---------------- | ------ | ---- |
| 4 GB             | 128 MB | 1 GB |
| 8 GB             | 256 MB | 2 GB |
| 16 GB            | 512 MB | 4 GB |
| 32 GB            | 1 GB   | 8 GB |

Therefore, a server or container with 4 GB of memory satisfies the 1 GB minimum heap size.

### Production Settings

In production, it is recommended to have the minimum heap size equal to the maximum heap size. This way, the JVM doesn't have to expand the heap size at runtime, which is more efficient and prevents possible out of memory errors.

#### Container Environment

When running in a Linux container, the JVM will automatically detect the `cgroup` memory limit with the `UseContainerSupport` option, enabled by default.

By default, the Nuxeo Docker image overrides the `JAVA_OPTS` property in `nuxeo.conf` to set the heap size to a fixed size, equal to 50% of the `cgroup` memory limit.
This is achieved by using the same percentage for `InitialRAM` as for `MaxRAM`, resulting in equal `Xms` and `Xmx`.

```properties
JAVA_OPTS=-XX:InitialRAMPercentage=50 -XX:MaxRAMPercentage=50
```

You can override or add some JVM setting by passing the `JAVA_OPTS` environment variable to the Nuxeo Docker image.

For instance, to make the Nuxeo Launcher display the JVM settings in the console, run:

```shell
docker run --name nuxeo \
  -p 8080:8080 \
  -e JAVA_OPTS=-XshowSettings:vm \
  docker.packages.nuxeo.com/nuxeo/nuxeo
```

#### Non Container Environment

You can either:

- Use the same settings as for a container environment.
- Choose the exact heap size with, at the very least:

```properties
JAVA_OPTS=-Xms1g -Xmx1g
```

## Tomcat Server ZIP

### Moving Configuration, data and log Directories Outside Nuxeo

The configuration of your application is saved in the `nuxeo.conf` configuration file, whatever the means you use to configure your application (manual edit or Admin tab). It is better, although not mandatory, to store your customized configuration outside the Nuxeo Platform. This way, you will be able to easily upgrade the Nuxeo Platform, keeping your configuration safely apart of Nuxeo directory.

**To move the configuration file outside the Nuxeo directory:**

1. Move the `nuxeo.conf` file from its default location.
2. After you moved `nuxeo.conf`, you need to [define its location as an environment variable](#nuxeo_conf).

By default, `data` and `log` directories are stored inside the Nuxeo tree. To ease backup and upgrades, it is highly recommended to move them outside the Nuxeo tree.

**To move the data and log directories:**

{{{multiexcerpt name='JSF-UI-required' page='generic-multi-excerpts'}}}

1. In the Admin tab **System Information** > **Setup** tab, type the path to the location where you want the directories to be stored (see the table below).
2. Click on **Save**.
3. Restart your server.
   The `data` and `log` directories are created at the location you typed.

**Data and log directories configuration**

<div class="table-scroll">
  <table class="hover">
    <tbody>
      <tr>
        <th colspan="1">Field / Property</th>
        <th colspan="1">Description</th>
      </tr>
      <tr>
        <td colspan="1">
          Data directory<br/>
          `nuxeo.data.dir`
        </td>
        <td colspan="1">
          Data directory (absolute or relative to NUXEO_HOME). It involves all data not being stored in the database.<br/>
          Linux recommended path: `/var/lib/nuxeo/...`
        </td>
      </tr>
      <tr>
        <td colspan="1">
          Log directory<br/>
          `nuxeo.log.dir`
        </td>
        <td colspan="1">
          Log directory (absolute or relative to NUXEO_HOME).<br/>
          Linux recommended path: `/var/log/nuxeo/...`
        </td>
      </tr>
    </tbody>
  </table>
</div>

### Defining Environment Variables {{> anchor 'define-environment-variables'}}

When the server starts, it guesses where the Nuxeo home directory and the Nuxeo configuration file (`nuxeo.conf`) are located. If it doesn't find it or if you want to force it to use a specific home directory and/or a specific configuration file, you can define their location as environment variables.

#### `NUXEO_HOME`

Here is how Nuxeo home is guessed when the server starts: If `NUXEO_HOME` is not set, then we use the parent of the directory `nuxeoctl` is launched from.

Setting the Nuxeo home directory as an environment variable is recommended in the following cases:

- if you installed several Nuxeo applications on the same machine (for evaluation or production purpose),
- if you want to use other scripts than the `$NUXEO_HOME/bin/nuxeoctl` script (such as a service in `/ect/init.d`).

You must then set `NUXEO_HOME=/path/to/nuxeo/` in the system environment variables:

- Windows users must write `"set NUXEO_HOME=..."` or use the control panel interface to define user environment parameters (like it's done for `%PATH%`).
- Linux and macOS X users will write `"export NUXEO_HOME=...`." in `~/.bashrc` or `~/.profile`.

#### `NUXEO_CONF`

You need to set the location of the `nuxeo.conf` file as an environment variable if you moved your configuration outside of the Nuxeo directory.

Moving the data and configuration outside the Nuxeo directory is recommended in a production environment because it makes upgrades easier and more secured: Your data and configuration won't risk to be overridden or lost. You must then set `NUXEO_CONF=/path/to/nuxeo.conf` in the system environment variables.

##### Windows Specific Case

Under Windows, the location of the `nuxeo.conf` is defined by that order of priority (i.e. first one of those found is used):

- Registry key `HKEY_LOCAL_MACHINE\SOFTWARE\%PRODNAME%\ConfigFile` with `%PRODNAME%` equals to "Nuxeo" (or in older versions, "Nuxeo CAP", "Nuxeo DM", "Nuxeo DAM", ...),
- Environment variable `NUXEO_CONF`,
- `"nuxeo.conf"` file in the working directory,
- `"nuxeo.conf"` file on the Desktop,
- `"nuxeo.conf"` file in the same location as `nuxeoctl.bat`.

&nbsp;

---

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related content'}}

- [Admin Tab Overview]({{page page='admin-tab-overview'}})
- [Configuration Parameters Index (nuxeo.conf)]({{page page='configuration-parameters-index-nuxeoconf'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
