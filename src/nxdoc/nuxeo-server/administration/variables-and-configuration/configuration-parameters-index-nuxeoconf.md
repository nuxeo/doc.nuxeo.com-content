---
title: Configuration Parameters Index (nuxeo.conf)
description: Manage your configuration properties around the Nuxeo Platform.
review:
  comment: ''
  date: '2021-01-12'
  status: ok
labels:
  - content-review-lts2016
  - nuxeo_conf
  - properties
  - templates
  - launcher
  - akervern
  - multiexcerpt
  - lts2017-ok
  - jsf-ui
confluence:
  ajs-parent-page-id: '31032113'
  ajs-parent-page-title: Administration
  ajs-space-key: NXDOC
  ajs-space-name: Nuxeo Platform Developer Documentation
  canonical: viewpage.action?pageId=3866689
  canonical_source: viewpage.action?pageId=3866689
  page_id: '3866689'
  shortlink: QQA7
  shortlink_source: 'https://doc.nuxeo.com/x/QQA7'
  source_link: /pages/viewpage.action?pageId=3866689
tree_item_index: 100
toc: true
version_override:
  LTS 2015: 710/admindoc/configuration-parameters-index-nuxeoconf
  '6.0': 60/admindoc/configuration-parameters-index-nuxeoconf
  '5.8': 58/admindoc/configuration-parameters-index-nuxeoconf
---

The Nuxeo Platform reads configuration properties that you can set either:

- In the `nuxeo.conf` file
- By contributing to the [Configuration Service](http://explorer.nuxeo.com/nuxeo/site/distribution/latest/viewExtensionPoint/org.nuxeo.runtime.ConfigurationService--configuration#contribute)
- From the Setup tab in the Admin Center (if Nuxeo JSF UI is installed)

## nuxeo.conf File {{> anchor 'conf-manual-edition'}}

Nuxeo Platform reads configuration properties in the `nuxeo.conf` file. Those parameters can be either environment parameters used by Nuxeo runtime or template parameters used for values replacement in configuration files.

Existing configuration parameters are listed in the index section below.

### Docker Image

In the Docker image, the `nuxeo.conf` file is located in `/etc/nuxeo`. Thus, the `NUXEO_CONF` environment variable is set to `/etc/nuxeo/nuxeo.conf`.

To add some configuration properties when running a container from a Nuxeo image, you can mount property files as volumes into the `/etc/nuxeo/conf.d` directory of the container. Each property file will be appended to `nuxeo.conf` during startup, ordered by filename.

For instance, to append the following `postgresql.conf` file to `nuxeo.conf`:

```properties
nuxeo.db.name=nuxeo
nuxeo.db.user=nuxeo
nuxeo.db.password=nuxeo
nuxeo.db.host=localhost
nuxeo.db.port=5432
```

you can run:

```shell
docker run --name nuxeo -p 8080:8080 -v /path/to/postgresql.conf:/etc/nuxeo/conf.d/postgresql.conf docker.packages.nuxeo.com/nuxeo/nuxeo
```

### Tomcat Server ZIP

In the Tomcat server ZIP, the `nuxeo.conf` file is located in `$NUXEO_HOME/bin`.

If you plan to use the application in production, you should [move the configuration file outside the Nuxeo home directory]({{page page='setup-best-practices'}}#moving-configuration-data-and-log-directories-outside-nuxeo), to make upgrades easier and more secured: your data and configuration won't risk to be overridden or lost.

{{! multiexcerpt name='nuxeo-conf-editor-warning'}} {{#> callout type='warning' heading='For Windows users'}}

Do not use Office writers, nor Notepad.

Wordpad is fine, Notepad++ and SciTE are good text editors, there are lots of [other text editors](http://en.wikipedia.org/wiki/List_of_text_editors).

{{/callout}}{{! /multiexcerpt}}

## Admin Center/Setup Tab {{> anchor 'setup-admincenter'}}

{{{multiexcerpt 'JSF-UI-required' page='generic-multi-excerpts'}}}

Administrators can also change the `nuxeo.conf` configuration parameters from the Admin center.

**To edit the configuration of the application using the Admin Center:**

1. Log in with an administrator account.
    Default administrator credentials are:
    - login: `Administrator`
    - password: `Administrator`
2. Click on the **Admin** tab in the page header.
3. Click on the **Setup** tab, edit the configuration you want to change and click on **Save**.
    ![]({{file name='AdminCenter_SetupTab.png' page='admin-tab-overview'}} ?w=650,border=true)
4. If indicated as needed on top of the page, restart the server.

{{#> callout type='tip' }}
You can also take a look at the [following page]({{page page='setup-best-practices'}}) for recommendations and examples.
{{/callout}}

## Configuration Parameters Index

The properties that can be set in nuxeo.conf are below. Properties that can be contributed to the Configuration service are available [from the Nuxeo Platform Explorer](http://explorer.nuxeo.com/nuxeo/site/distribution/latest/viewExtensionPoint/org.nuxeo.runtime.ConfigurationService--configuration#contribute).

#### `JAVA_HOME`

Path to Java home directory.

**Default Value**

None.<br/>

If undefined `nuxeoctl` script will try to discover it.

* * *

#### `JAVA_OPTS`

Optional settings passed to the JVM.<br/>
Nuxeo requires at least 1024 MB of JVM heap size. By setting the maximum heap size to 25% of the available memory, this requirement is satisfied on a machine with at least 4 GB of RAM.

**Default Value**

```shell
-XX:InitialRAMPercentage=3 -XX:MaxRAMPercentage=25 -Dfile.encoding=UTF-8
-Dmail.mime.decodeparameters=true -Dnet.sf.ehcache.skipUpdateCheck=true
-Djava.util.Arrays.useLegacyMergeSort=true -Dsun.net.http.retryPost=false
```

* * *

#### `launcher.start.max.wait`

In seconds. Maximum time to wait for effective Nuxeo server start before giving up (applies on commands "start" and "restart").

**Default Value**

`300`

* * *

#### `launcher.stop.max.wait`

In seconds. Maximum time to wait for effective Nuxeo server stop cleanly before using forced stop.

**Default Value**

`60`

* * *

#### `launcher.override.java.tmpdir`

Possible values: `true` or `false` .<br/>
If true, will set `java.io.tmpdir = ${nuxeo.tmp.dir}`.

**Default Value**

`true`

* * *

#### `nuxeo.log.dir`

Log directory (absolute or relative to `NUXEO_HOME`).<br/>
Linux recommended path: `/var/log/nuxeo/...`

**Default Value**

`log`

* * *

#### `nuxeo.pid.dir`

Directory where to store Nuxeo PID file (absolute or relative to `NUXEO_HOME`).

**Default Value**

`log`

* * *

#### `nuxeo.data.dir`

Data directory (absolute or relative to `NUXEO_HOME`). It involves all data not being stored in database.<br/>
Linux recommended path: `/var/lib/nuxeo/...`

**Default Value**

`nxserver/data`

* * *

#### `nuxeo.tmp.dir`

Location of the temporary files (absolute or relative to `NUXEO_HOME`).

**Default Value**

`tmp`

* * *

#### `nuxeo.mp.dir`

Nuxeo Packages directory (absolute or relative to `NUXEO_HOME`).

**Default Value**

`packages`

* * *

#### `nuxeo.force.generation`

If "`true`", will force generation of configuration files; otherwise they are only generated when not existing.<br/>
If "`once`", will force one time and switch to false after successful generation.<br/>
If "`false`", configuration changes are ignored.

**Default Value**

`true` | `once`

* * *

#### `nuxeo.templates`

Comma separated list of templates to include.<br/>
Templates paths are absolute or relative to `$NUXEO_HOME/templates/`.<br/>
Available templates: postgresql, mongodb, custom, ...

**Default Value**

`default`

* * *

#### `nuxeo.bind.address`

Server binding address. "0.0.0.0" means "all available network interfaces".<br/>
WARNING: When changing `nuxeo.bind.address`, you must accordingly change `nuxeo.loopback.url`.

**Default Value**

`0.0.0.0`

* * *

#### `nuxeo.server.http.port`

Server HTTP listen port.

**Default Value**

`8080`

* * *

#### `nuxeo.server.http.connectionUploadTimeout`

Configure the Tomcat `connectionUploadTimeout` to specify the timeout, in milliseconds, to use while a data upload is in progress.

**Default Value**

`60000`

* * *

#### `nuxeo.server.ajp.enabled`

Enable Tomcat AJP connector.

**Default Value**

`false`

* * *

#### `nuxeo.server.ajp.port`

Server AJP listen port.

**Default Value**

`8009`

* * *

#### `nuxeo.server.cookies.sameSite`

Allows setting the same site cookie policy.

Possible values: none, lax or strict.

**Default Value**

`lax`

* * *

#### `nuxeo.server.jvmRoute`

Server AJP route for load-balancing

**Default Value**

`nuxeo`

* * *

#### `nuxeo.server.tomcat_admin.host`

Tomcat server's "admin" host.<br/>
This is the address on which the server waits for a shutdown command.

**Default Value**

`localhost`

* * *

#### `nuxeo.server.tomcat-admin.port`

**Deprecated since Nuxeo 5.6**

Replaced by `nuxeo.server.tomcat_admin.port`. Tomcat server's "admin" port.<br/>
This is only useful if you have another Tomcat server running and want to avoid port conflicts.

**Default Value**

`8005`

* * *

#### `nuxeo.server.tomcat_admin.port`

Tomcat server's "admin" port.<br/>
Replaces `nuxeo.server.tomcat-admin.port`. This is only useful if you have another Tomcat server running and want to avoid port conflicts.

**Default Value**

`8005`

* * *

#### `nuxeo.server.tomcat_error.show_report`

Tomcat report displayed or not on Tomcat error page.

**Default Value**

`false`

* * *

#### `nuxeo.server.tomcat_error.show_server_info`

Tomcat version info (as Tomcat server version) displayed or not on Tomcat error page.

**Default Value**

`false`

* * *

#### `nuxeo.server.https.port`

Server HTTPS listen port.<br/>
This is only useful if you have modified the application server to use HTTPS.

**Default Value**

`8443`

* * *

#### `nuxeo.server.signature`

If set, this will replace the default value of the "Server:" HTTP response header.

**Default Value**

None.

* * *

#### `org.nuxeo.ecm.instance.name`

Server name.

**Default Value**

`Nuxeo 5.9.3-SNAPSHOT`

* * *

#### `org.nuxeo.ecm.instance.description`

Server description.

**Default Value**

`Nuxeo`

* * *

#### `org.nuxeo.ecm.product.name`

Product name, displayed in the page title on your browser.

**Default Value**

`Nuxeo Platform`

* * *

#### `org.nuxeo.ecm.product.version`

**Default Value**

`5.9.3-SNAPSHOT`

* * *

#### {{> anchor 'orgnuxeodev'}} `org.nuxeo.dev`

This property uses the "dev" mode when running the Nuxeo application. This parameter should not be set to `true` on a production server, as it disables some caches, and enables hot redeploy of some JARs (Studio JARs for instance). For more information about the dev mode, see [How to do incremental deployment (hot reload)]({{page space='corg' page='supporting-hot-reload'}}).

Before 5.6, setting this property to true stopped the runtime when an error occured at deployment. This behaviour has been removed from the dev mode and is now controlled by the property `org.nuxeo.runtime.strict`.

**Default Value**

`false`

* * *

#### `org.nuxeo.prod`

Setting this property to "true" will display a quite visible warning message in the Admin tab, stating that this is a production instance. This is useful for administrators who are sometimes confusing their Nuxeo production server with their test server (not to rat anyone out).

**Default Value**

`false`

* * *

#### {{! multiexcerpt name='org.nuxeo.rest.stack.enable'}}`org.nuxeo.rest.stack.enable`

{{! /multiexcerpt}}

{{! multiexcerpt name='org.nuxeo.rest.stack.enable-description'}}
You can enable this mode if you'd like to display exception stacktraces in JSON response when error occurs after REST calls.

See [Web Exceptions documentation]({{page page='error-handling'}}) to get modes description and examples.
{{! /multiexcerpt}}

**Default Value**

{{! multiexcerpt name='org.nuxeo.rest.stack.enable-default'}}
`false`
{{! /multiexcerpt}}

* * *

#### {{! multiexcerpt name='org.nuxeo.automation.trace'}}`org.nuxeo.automation.trace`
{{! /multiexcerpt}}

Enable this mode if you'd like to display automation traces during runtime:<br/>

{{! multiexcerpt name='org.nuxeo.automation.trace-description'}}
- You'll benefit from exhaustive logs to debug all automation chain and/or operation execution.<br/>
- The automation trace mode is disabled by default (not suitable for production).<br/>
- It can be activated through JMX via `org.nuxeo:TracerFactory` MBean during runtime.

{{! /multiexcerpt}}
**Default Value**

{{! multiexcerpt name='org.nuxeo.automation.trace-default'}}
`false`
{{! /multiexcerpt}}

* * *

#### {{! multiexcerpt name='org.nuxeo.automation.trace.printable'}}`org.nuxeo.automation.trace.printable`
{{! /multiexcerpt}}

{{! multiexcerpt name='org.nuxeo.automation.trace.printable-description'}}
By default, all automation executions are 'printable' (appear in logs) when automation trace mode is on.<br/>

- You can filter chain and/or operation execution trace printing by setting this property to chain name and/or operation separated by comma.<br/>
- Comment this property to get all automation chains/operations back in printing (by default set to \* (star))
{{! /multiexcerpt}}

**Default Value**

{{! multiexcerpt name='org.nuxeo.automation.trace.printable-default'}}
`*`
{{! /multiexcerpt}}

* * *

#### `templateName.include` - only available in template properties

Templates to include prior to the one being included.

* * *

#### `templateName.target` - only available in template properties

Directory where *templateName* files will be deployed (relative to `NUXEO_HOME`).

**Default Value**

`nxserver`

* * *

#### `mail.store.protocol`

Server protocol parameters for e-mailing.

**Default Value**

`pop3`<br/>
`smtp`

* * *

#### `mail.user`

User who will receive e-mail (unused in Nuxeo).

**Default Value**

nobody

* * *

#### `mail.store.host`

e-Mail server.

**Default Value**

`localhost`

* * *

#### `mail.store.user`

**Default Value**

`anonymous`

* * *

#### `mail.store.password`

**Default Value**

password

* * *

#### `mail.debug`

Enable debugging output from the JavaMail classes.

**Default Value**

false

* * *

#### `nuxeo.notification.eMailSubjectPrefix`

Subject prefix in Nuxeo notification e-mails.

**Default Value**

[Nuxeo]

* * *

#### `nuxeo.notification.eMailSigner`

Signer of the sent e-mail.

**Default Value**

The Nuxeo team

* * *

#### `mail.transport.host`

SMTP gateway server.

**Default Value**

`localhost`

* * *

#### `mail.transport.port`

e-Mail server port.

**Default Value**

`25` (without authentication)<br/>
`587` (with authentication)<br/>
`465` (SSL)

* * *

#### `mail.transport.usetls`

Use TLS for the SMTP connection.

**Default Value**

`false`

* * *

#### `mail.transport.auth`

**Default Value**

`true`

* * *

#### `mail.transport.user`

**Default Value**

`anonymous`

* * *

#### `mail.transport.password`

**Default Value**

`password`

* * *

#### `mail.from`

The e-mail address will be sent from.

**Default Value**

`noreply@nuxeo.com`

* * *

#### `nuxeo.db.name`

Database name.

**Default Value**

`nuxeo` | `NUXEO`

* * *

#### `nuxeo.db.user`

Database username.

**Default Value**

`sa` | `nuxeo`

* * *

#### `nuxeo.db.password`

Database password.

**Default Value**

(empty value) | `password`

* * *

#### `nuxeo.db.host`

Database host URL.

**Default Value**

`localhost`

* * *

#### `nuxeo.db.port`

Database host port.

**Default Value**

`3700` (DB2)<br/>
`5432` (PostgreSQL)<br/>
`3306` (MySQL)<br/>
`1521` (Oracle)<br/>
`1433` (MSSQL)

* * *

#### `nuxeo.db.jdbc.url`

Database JDBC connection URL for Nuxeo datasources, for instance `jdbc:postgresql://${nuxeo.db.host}:${nuxeo.db.port}/${nuxeo.db.name}`.

**Default Value**

(database-dependent)

* * *

#### `nuxeo.db.validationQuery`

Database validation query, a `SELECT` statement used to check connections before using them, usually `SELECT 1`. Using this has a noticeable speed impact but makes connections resilient to network or sever problems.

* * *

#### `nuxeo.db.min-pool-size`

Database minimum pool size for Nuxeo datasources.

**Default Value**

`5`

* * *

#### `nuxeo.db.max-pool-size`

Database maximum pool size for Nuxeo datasources.

**Default Value**

`100` (Tomcat)

* * *

#### `nuxeo.db.idle-timeout-minutes`

Database timeout after which connections not in use are removed from the pool.

**Default Value**

`5`

* * *

#### `nuxeo.db.xaMode`

Enable XA mode (required if multiple datasources configured)

**Default Value**

`false`

* * *

#### `nuxeo.vcs.min-pool-size`

Database minimum pool size for Nuxeo repository (VCS).

**Default Value**

`0`

* * *

#### `nuxeo.vcs.max-pool-size`

Database maximum pool size for Nuxeo repository (VCS).

**Default Value**

`20`

* * *

#### `nuxeo.vcs.blocking-timeout-millis`

Database maximum wait time to get a connection from the pool when all connections are in use, for Nuxeo repository (VCS).

**Default Value**

`100`

* * *

#### `nuxeo.vcs.idle-timeout-minutes`

Database timeout after which connections not in use are removed from the pool, for Nuxeo repository (VCS).

**Default Value**

`10`

* * *

#### `nuxeo.vcs.fulltext.disabled`

Whether full text indexing and querying should be completely disabled in the repository. See [VCS]({{page page='vcs'}}) for details.

**Default Value**

`false`

* * *

#### `nuxeo.vcs.fulltext.search.disabled`

Full text querying from VCS (database backend) is disabled, full text extraction is done. See [VCS]({{page page='vcs'}}) for details.

**Default Value**

`false`

* * *

#### `nuxeo.vcs.fulltext.analyzer.language`

Full text analyzer language. Only applies to`postgresql` and `mssql` database types.

**Default Value**

`english`

* * *

#### `nuxeo.vcs.noddl`

Where DDL generation should be disabled in the repository. See [VCS]({{page page='vcs'}}) for details.

**Default Value**

`false`

* * *

#### `nuxeo.vcs.ddlmode`

What kind of DDL generation is done. See [VCS]({{page page='vcs'}}) for details.

**Default Value**

`execute`

* * *

#### `nuxeo.vcs.idtype`

The type of `id` column. See [VCS]({{page page='vcs'}}) for details.

**Default Value**

`varchar`

* * *

#### `nuxeo.vcs.copy.findFreeName.disabled`

Set to true to disable free-name detection and let the database raise a constraint error in case of collisions **if the constraints have been added by hand**.

**Default Value**

`false`

* * *

#### `nuxeo.url`

Application URL (without final slash), should be the public URL of your server (i.e.: [http://www.yourdomain.com/](http://www.yourdomain.com/)....)<br />
It is also used for emails sent out and to detect images in HTML documents when converting to PDF.

**Default Value**

`http://localhost:8080/nuxeo`

* * *

#### `nuxeo.loopback.url`

Nuxeo URL, for connections from Nuxeo to itself (theme banks default). The port should be the same as `nuxeo.server.http.port.`<br/>
If not explicitly configured, the loop back URL is generated from `nuxeo.bind.address`, `nuxeo.server.http.port` and `org.nuxeo.ecm.contextPath` values.

**Default Value**

`http://localhost:8080/nuxeo`

* * *

#### `org.nuxeo.ecm.contextPath`

Application context path.<br/>
Note: Changing this parameter is not enough. See [How to Change Context Path]({{page page='setup-best-practices'}})

**Default Value**

`/nuxeo`

* * *

#### `repository.clustering.enabled`

**DEPRECATED since 11.1**, use `nuxeo.cluster.enabled`</br>Activate clustering mode.

**Default Value**

`false`

* * *

#### `repository.clustering.id`

**DEPRECATED since 11.1**, use `nuxeo.cluster.nodeid`</br>The cluster node id for this Nuxeo instance. This can be any arbitrary string.

* * *

#### `repository.clustering.delay`

When clustering is activated, defines the delay during which invalidations don't need to be processed (expressed in milliseconds).

**Default Value**

`1000`

* * *

#### `repository.clustering.invalidation`

Allows the configuration of VCS cluster invalidations. The value `default` uses VCS. Since Nuxeo 8.1 you can use `redis` to specify Redis-based invalidations.

**Default Value**

`default`

* * *

#### `repository.binary.store`

**DEPRECATED.**</br>
Defines the folder where binaries are stored. Useful when using clustering or to change the location of binaries to another location. This parameter is still in use in existing configurations: for new installation, use `nuxeo.binarystores.root`

**Default Value**

`default`

* * *

#### `nuxeo.binarystores.root`

Defines the root folder where all binaries are stored. Useful when using clustering or to change the location of binaries to another location (See [NXP-27109](https://jira.nuxeo.com/browse/NXP-27109) for more details).

#### `nuxeo.cluster.enabled`

Activate clustering mode.

**Default Value**

`false`

* * *

#### `nuxeo.cluster.nodeid`

The cluster node id for this Nuxeo instance. This can be any arbitrary string.

* * *

#### `nuxeo.core.binarymanager`

Custom class for the Binary Manager, to replace the default file-base storage.

* * *

#### `nuxeo.core.binarymanager_key`

Key configuration for the binary manager, if applicable.

* * *

#### `nuxeo.plaintext_parsing_extensions`

Files extensions being parsed for parameters replacement when copying templates.

**Default Value**

`xml,properties`

* * *

#### `zip.entry.encoding`

Choose how to encode filename when exporting documents to zip in the worklist.<br/>
The ZIP entries names are encoded in UTF8 by default. If you want to get the old behavior back (having entry name encoded in ascii), use `zip.entry.encoding=ascii`.

#### `org.nuxeo.ecm.platform.liveedit.autoversioning`

**Default Value**

`none`, `minor`, `major`

* * *

#### `nuxeo.http.proxy.host`

HTTP proxy host.

* * *

#### `nuxeo.http.proxy.port`

HTTP proxy port.

* * *

#### `nuxeo.http.proxy.login`

HTTP proxy login.

* * *

#### `nuxeo.http.proxy.password`

HTTP proxy password.

* * *

#### `nuxeo.http.proxy.ntlm.host`

NT Lan Manager (NTLM) Proxy. Host name of the Windows machine running the Nuxeo server.

* * *

#### `nuxeo.http.proxy.ntlm.domain`

NT Lan Manager (NTLM) Proxy. Domain name to authenticate against.

* * *

#### `nuxeo.http.proxy.pac.url`

Proxy auto-config (PAC) file URL.

* * *

#### `facelets.REFRESH_PERIOD`

Indicates to the compiler the number of seconds to wait between subsequent checks for changes in modified JSF facelets in a running application. Useful for facelet debugging.<br/>
To disable this compiler check use a value of -1 which is a recommended value for production deployments as compiler checks have an impact on application performance.<br/>
The parameter [`undefined`](#orgnuxeodev) should be used instead as it forces this parameter to value "2".

**Default Value**

`-1`

* * *

#### `nuxeo.db.transactiontimeout`

Database transaction timeout in seconds (available for Tomcat server only)

**Default Value**

`300`

* * *

#### `server.status.key`

Secure key for connecting to server status monitoring servlet. It is randomly generated if not set.<br/>
It is also used by defaultfor sensitive configuration data encryption, see `server.crypt.secretkey`.

* * *

#### `session.timeout`

Session timeout (see [web.xml session-timeout](http://www.google.com/search?q=web.xml+session-timeout)).

**Default Value**

`60`

* * *

#### `session.config.tracking.mode.cookie`

Session tracking mode.<br/>
If `true`, prevents Tomcat from appending the `jsessionid` parameter to the URLs, for example a file download URL. Yet, cookies need to be enabled in the browser.<br/>
Otherwise, the `jsessionid` parameter might be appended to some URLs, for instance when sharing a document permalink to an anonymous user or when clearing the browser's cookies. Yet, cookies don't need to be enabled in the browser.

**Default Value**

`true`

* * *

#### `nuxeo.updatecenter.disabled`

Disables the Update Center feature.

**Default Value**

`false` (unset)

* * *

#### `org.nuxeo.big.file.size.limit`

Redirects onto the big file download URL if size exceeds limit.

**Default Value**

`5Mi` (unset)

* * *

#### `org.nuxeo.ecm.platform.ui.web.auth.NuxeoAuthenticationFilter.isLoginNotSynchronized`

Disables login synchronization.

**Default Value**

`false` (unset)

* * *

#### `nuxeo.jsf.numberOfConversationsInSession`

Parameter to control the number of conversation states that are saved in session. Each conversation holds a number of view states that is defined by `nuxeo.jsf.numberOfViewsInSession`

**Default Value**

`4`

* * *

#### `nuxeo.jsf.numberOfViewsInSession`

Parameter to control the JSF init parameter `com.sun.faces.numberOfViewsInSession`

**Default Value**

`4`

* * *

#### `nuxeo.jsf.numberOfLogicalViews`

Parameter to control the JSF init parameter `com.sun.faces.numberOfLogicalViews`

**Default Value**

`4`

* * *

#### `nuxeo.jsf.tmp.dir`

Faces Servlet multi-part config: an absolute path to a directory on the file system. The location attribute does  **not** support a path relative to the application context. This location is used to store files temporarily while the parts are processed or when the size of the file exceeds the specified `fileSizeThreshold` setting. The default location is "".

**Default Value**

`nuxeo.tmp.dir` (unset)</span>

* * *

#### `nuxeo.jsf.maxFileSize`

Faces Servlet multi-part config: the maximum size allowed for uploaded files, in bytes. The default size is unlimited.

**Default Value**

`-1` (unlimited) (unset)

* * *

#### `nuxeo.jsf.maxRequestSize`

Faces Servlet multi-part config: the maximum size allowed for a `multipart/form-data` request, in bytes. The default size is unlimited.

**Default Value**

`-1` (unlimited) (unset)

* * *

#### `nuxeo.jsf.fileSizeThreshold`

Faces Servlet multi-part config: The file size in bytes after which the file will be temporarily stored on disk. The default size is 0 bytes.

**Default Value**

`0` (unset)

* * *

#### `nuxeo.vcs.use-nulls-last-on-desc`

Ask the database to use "NULLS LAST" when sorting DESC. True by default to get the same result order between different databases.<br/>
Also turning this option to false enable PostgreSQL and Oracle to use an index on the sorted column which can be huge performance improvement.

**Default Value**

`true` (unset)

* * *

#### `org.nuxeo.connect.connector.cache.duration`

Nuxeo Packages list cache (in minutes).

**Default Value**

`60min` (5min for Studio packages)

* * *

#### `org.nuxeo.connect.server.reachable`

Launcher online/offline mode for connections to Nuxeo Connect.

**Default Value**

`true`

* * *

#### `org.nuxeo.connect.url`

Nuxeo Connect URL.

**Default Value**

`https://connect.nuxeo.com/nuxeo/site/`

* * *

#### `nuxeo.automation.properties.multiline.escape`

Enable/Disable multi-line strings escaped with a trailing \ when using `Document.Update` or `Workflow.SetWorkflowVariables` Automation operations.

**Default Value**

`false`

* * *

#### `org.nuxeo.cmis.joins`

When true, CMISQL JOINs are allowed if VCS is used.

**Default Value**

`false`

* * *

#### `org.nuxeo.cmis.proxies`

If false, proxies are not visible through CMIS. Cannot be `true` if `org.nuxeo.cmis.joins` is `true`.

**Default Value**

`true`

* * *

#### `org.nuxeo.cmis.enableComplexProperties`

When true, complex properties are exposed as JSON-encoded strings.

**Default Value**

`false`

* * *

#### `nuxeo.security.allowNegativeACL`

When true, enables adding negative ACL (deny permissions) in the UI, otherwise only grant permissions are available.

**Default Value**

`false`

* * *

#### `audit.elasticsearch.enabled`

See [Disabling Elasticsearch for Audit Logs]({{page page='elasticsearch-setup'}}#disabling-elasticsearch-for-audit-logs).<br/>
Defaults to false on server upgrade, true on new install.

**Default Value**

`false` | `true`

* * *

#### `audit.elasticsearch.indexName`

Name of the Elasticsearch index for audit logs.

**Default Value**

`${elasticsearch.indexName}`-audit

* * *

#### `seqgen.elasticsearch.indexName`

Name of the Elasticsearch index for the uid sequencer.

**Default Value**

`${elasticsearch.indexName}`-uidgen

* * *

#### `audit.elasticsearch.migration`

See [Triggering SQL to Elasticsearch Audit Logs Migration]({{page version='710' space='admindoc' page='elasticsearch-setup'}}#triggering-sql-to-elasticsearch-audit-logs-migration)

**Default Value**

`false`

* * *

#### `audit.elasticsearch.migration.batchSize`

See [Triggering SQL to Elasticsearch Audit Logs Migration]({{page version='710' space='admindoc' page='elasticsearch-setup'}}#triggering-sql-to-elasticsearch-audit-logs-migration)

**Default Value**

`1000`

* * *

#### `elasticsearch.httpReadOnly.baseUrl`

Required when using a standalone Elasticsearch instance. See [Elasticsearch Passthrough]({{page page='elasticsearch-passthrough'}}#requirement)

**Default Value**

`http://localhost:9200/`

* * *

#### `org.nuxeo.cmis.elasticsearch`

To send the CMISQL queries to Elasticsearch, set to true.

**Default Value**

`false`

* * *

#### `nuxeo.redis.enabled`

Set to true to activate Redis.

**Default Value**

`false`

* * *

#### `nuxeo.redis.host`

**Default Value**

`redishost`

* * *

#### `nuxeo.redis.port`

**Default Value**

`6379`

* * *

#### `nuxeo.redis.password`

* * *

#### `nuxeo.redis.database`

**Default Value**

`0`

* * *

#### `nuxeo.redis.timeout`

**Default Value**

`2000`

* * *

#### `nuxeo.redis.maxTotal`

The maximum size of the Redis connections pool.

**Default Value**

`16`

* * *

#### `nuxeo.redis.maxIdle`

The maximum number of Redis idle connections in the pool.

**Default Value**

`8`

* * *

#### `nuxeo.redis.prefix`

This allows you to use a single Redis server between several Nuxeo cluster installations by having a different prefix for each cluster. See the page [Redis Configuration]({{page page='redis-configuration'}}) for more details.

**Default Value**

`nuxeo:`

* * *

#### `server.crypt.secretkey`

Custom secret key used for sensitive configuration data encryption. It takes either a raw value or an URL (e.g. <a class="external-link" rel="nofollow">file:///path/to/secretkey</a> or [http://some.online.file.com](http://some.online.file.com)).

**Default Value**

`${server.status.key}`

* * *

#### `server.crypt.keystore.path`

Path to the keystore to use for sensitive configuration data encryption.

**Default Value**

`${javax.net.ssl.keyStore}`

* * *

#### `server.crypt.keystore.pass`

The password used to protect the integrity of the keystore contents.

**Default Value**

`${javax.net.ssl.keyStorePassword:="changeit"}`

* * *

#### `server.crypt.keyalias`

The alias prefix where to retrieve the secret key from the keystore. It is automatically suffixed with the algorithm ("AES" or "DES").

* * *

#### `nuxeo.virtual.host`

This parameter can be used to replace the nuxeo-virtual-host request header (usually when using HTTPS) when it is not possible to set it at the reverse-proxy level.<br/>
The use of the header is still preferred as the parameter forces your Nuxeo instance to be accessible from one URL only.<br/>
Example: https://my.nuxeo.com/

* * *

#### `elasticsearch.enabled`

Switch to enable/disable Elasticsearch usage

**Default Value**

`true`

* * *

#### `elasticsearch.client`

Choose between TransportClient and RestClient protocols

**Default Value**

`TransportClient`

* * *

#### `elasticsearch.indexName`

Name of the Elasticsearch index for the default document repository

**Default Value**

`nuxeo`

* * *

#### `elasticsearch.addressList`

For TransportClient protocol a comma separated list of Elasticsearch node `host:port`.
For RestClient protocol a comma separated list of URL. If empty an in JVM embedded Elasticsearch node is used, the embedded node is only for testing and it is not supported for production.

#### `elasticsearch.clusterName`

Name of the Elasticsearch cluster to join when using a TranportClient protocol

**Default Value**

`nuxeoCluster`

* * *

#### `elasticsearch.indexNumberOfReplicas`

Number of replicas (not for local node)

**Default Value**

`1`

* * *

#### `elasticsearch.indexNumberOfShards`

Number of shards (not for local node)

**Default Value**

`5`

* * *

#### `elasticsearch.nodeName`

Name of the local node

**Default Value**

`nuxeoNode`

* * *

#### `elasticsearch.httpEnabled`

Does the local node accept HTTP request on port 9200

**Default Value**

`false`

* * *

#### `elasticsearch.override.pageproviders`

Comma separated list of CorePageProvider names to supersede by Elasticsearch

**Default Value**

`default_search,DEFAULT_DOCUMENT_SUGGESTION`

* * *

#### `elasticsearch.reindex.bucketReadSize`

Reindexing option, number of documents to process per worker

**Default Value**

`500`

* * *

#### `elasticsearch.reindex.bucketWriteSize`

Reindexing option, number of documents to submit to Elasticsearch per bulk command

**Default Value**

`50`

* * *

#### `elasticsearch.indexing.maxThreads`

Maximum size of the indexing thread pool

**Default Value**

`4`

* * *

#### `elasticsearch.indexing.clearCompletedAfterSeconds`

Time to keep the completed indexing worker states

**Default Value**

`90`

* * *

#### `elasticsearch.adminCenter.displayClusterInfo`

Display Elasticsearch cluster and nodes information in the admin center @since 6.0-HF06, always true for embedded mode

**Default Value**

`false`

* * *

#### `elasticsearch.reindex.onStartup`

Reindex the repository content on startup if the index is empty

**Default Value**

`false`

* * *

#### `elasticsearch.restClient.connectionTimeoutMs`

A timeout in milliseconds until a connection is established

**Default Value**

`5000`

* * *

#### `elasticsearch.restClient.socketTimeoutMs`

A maximum period, in milliseconds, of inactivity between two consecutive data packets

**Default Value**

`20000`

* * *

#### `elasticsearch.restClient.username`

A username for client basic authentication

* * *

#### `elasticsearch.restClient.password`

A password for client basic authentication

* * *

#### `elasticsearch.restClient.keystorePath`

A path to a valid keystore

* * *

#### `elasticsearch.restClient.keystorePassword`

The keystore password

* * *

#### `elasticsearch.restClient.keystoreType`

The type of keystore, e.g. jks

**Default Value**

Default Java system keystore type

* * *

#### `elasticsearch.index.translog.durability`

The translog durability for Elasticsearch indexes. To reduce disk IO and increase performance this can be tuned to `async`.

**Default Value**

`request`

* * *

#### `nuxeo.directory.type`

Type of directory, used for LDAP or multi-directory configuration. Possible values are `default`, `ldap`, `multi`.

**Default Value**

`default`

* * *

#### `nuxeo.user.anonymous.enable`

When LDAP is enabled and this parameter is set to `true`, allows anonymous login with `Guest` user

**Default Value**

`false`

* * *

#### `nuxeo.user.emergency.enable`

When LDAP is enabled and this parameter is set to `true`, declares an emergency user to connect to Nuxeo in case of LDAP issues

**Default Value**

`false`

* * *

#### `nuxeo.user.emergency.username`

The username of emergency user when `nuxeo.user.emergency.enable` is set to `true`

**Default Value**

`MyAdministrator`

* * *

#### `nuxeo.user.emergency.password`

The password of emergency user when `nuxeo.user.emergency.enable` is set to `true`

**Default Value**

`secret`

* * *

#### `nuxeo.user.emergency.firstname`

The firstname of emergency user when `nuxeo.user.emergency.enable` is set to `true`

* * *

#### `nuxeo.user.emergency.lastname`

The lastname of emergency user when `nuxeo.user.emergency.enable` is set to `true`

* * *

#### `nuxeo.picture.migration.enabled`

When set to `false` allows to disable the picture migration that is run on startup and that can be slow on big volume.

**Default Value**

`true`

* * *

#### `nuxeo.dbs.cache.enabled`

Whether or not the cache is enabled

**Default Value**

`true`

* * *

#### `nuxeo.dbs.cache.concurrencyLevel`

Guava cache parameter: Guides the allowed concurrency among update operations. Used as a hint for internal sizing. The table is internally partitioned to try to permit the indicated number of concurrent updates without contention. Because assignment of entries to these partitions is not necessarily uniform, the actual concurrency observed may vary. Ideally, you should choose a value to accommodate as many threads as will ever concurrently modify the table. Using a significantly higher value than you need can waste space and time, and a significantly lower value can lead to thread contention. But overestimates and underestimates within an order of magnitude do not usually have much noticeable impact. A value of one permits only one thread to modify the cache at a time, but since read operations and cache loading computations can proceed concurrently, this still yields higher concurrency than full synchronization.

**Default Value**

`10`

* * *

#### `nuxeo.dbs.cache.maxSize`

The maximum size of DBS cache

**Default Value**

`1000`

* * *

#### `nuxeo.dbs.cache.ttl`

The expire after write value in minutes

**Default Value**

`10`

* * *

#### `kafka.enabled`

Switch the default Stream configuration to Apache Kafka

**Default Value**

`false`

* * *

#### `kafka.zkServers`

**Deprecated since 10.2**, Nuxeo doesn't need Zookeeper access

**Default Value**

`localhost:2181`

* * *

#### `kafka.bootstrap.servers`

host:port comma separated list of Kafka Brokers

**Default Value**

`localhost:9092`

* * *

#### `kafka.default.replication.factor`

Default replication factor per partition when creating a new Topic

**Default Value**

`1`

* * *

#### `kafka.topicPrefix`

The prefix applied to any Kafka Topic

**Default Value**

`nuxeo-`

* * *

#### `kafka.request.timeout.ms`

Request timeout between Nuxeo and a Kafka broker

**Default Value**

`30000`

* * *

#### `kafka.default.api.timeout.ms`

Default timeout for consumer API related to position

**Default Value**

`120000`

* * *

#### `kafka.max.poll.interval.ms`

Maximum delay between poll invocation

**Default Value**

`7200000`

* * *

#### `kafka.max.poll.records`

Maximum number of records to read per poll

**Default Value**

`2`

* * *

#### `kafka.session.timeout.ms`

Consumers that don't send heartbeat during this delay are removed from the group

**Default Value**

`50000`

* * *

#### `kafka.heartbeat.interval.ms`

Heartbeat interval

**Default Value**

`4000`

* * *

#### `kafka.delivery.timeout.ms`

Timeout for a producer to get an acknowledgement

**Default Value**

`120000`

* * *

#### `kafka.acks`

The number of acknowledgments expected by a producer

**Default Value**

`1`

* * *

#### `kafka.sasl.enabled`

Enable SASL authentication to communicate with Kafka brokers

**Default Value**

`false`

* * *

#### `kafka.security.protocol`

When using SASL authentication, choose the protocol to communicate with brokers, valid values are: PLAINTEXT, SSL, SASL_PLAINTEXT, SASL_SSL

**Default Value**

`SASL_PLAINTEXT`

* * *

#### `kafka.sasl.mechanism`

SASL mechanism used for client connections

**Default Value**

`SCRAM-SHA-256`

* * *

#### `kafka.sasl.jaas.config`

JAAS login context parameters for SASL connections in the format used by JAAS configuration files. See [Kafka documentation for more information](https://kafka.apache.org/documentation/#security_sasl_scram_clientconfig).

* * *

#### `kafka.ssl`

Use SSL to communicate with Kafka Broker

**Default Value**

`false`

* * *

#### `kafka.truststore.path`

The location of the trust store file, empty path means no truststore.

* * *

#### `kafka.truststore.type`

The file format of the trust store file

**Default Value**

`JKS`

* * *

#### `kafka.truststore.password`

The password for the trust store file. If a password is not set access to the truststore is still available, but integrity checking is disabled.

* * *

#### `kafka.keystore.path`

The location of the key store file used by the client for two-way authentication, empty value means no keystore.

* * *

#### `kafka.keystore.type`

The file format of the key store file

**Default Value**

`JKS`

* * *

#### `kafka.keystore.password`

The store password for the key store file

* * *

#### `nuxeo.stream.chronicle.dir`

The directory where Chronicle Queue files are stored.

**Default Value**

`${nuxeo.data.dir}/data/stream`

* * *

#### `nuxeo.stream.chronicle.retention.duration`

Default retention for Chronicle Queue Log, default to 4 days.

**Default Value**

`4d`

* * *

#### `nuxeo.stream.audit.enabled`

Enable the Nuxeo Stream Audit Writer implementation

**Default Value**

`true`

* * *

#### `nuxeo.stream.audit.log.config`

The Log configuration to use for the Stream Audit Writer

**Default Value**

`audit`

* * *

#### `nuxeo.stream.audit.batch.size`

The entries batch size to submit the the audit backend

**Default Value**

`25`

* * *

#### `nuxeo.stream.audit.batch.threshold.ms`

Do not wait more than this threshold if the batch is not full

**Default Value**

`500`

* * *

#### `nuxeo.stream.work.enabled`

Supersed the default WorkManager with the Sream WorkManager

**Default Value**

`false`

* * *

#### `nuxeo.stream.work.log.config`

The Log configuration to use for the Stream WorkManager

**Default Value**

`work`

* * *

#### `nuxeo.stream.work.over.provisioning.factor`

The factor to use on the Work Thread pool size to get the number of Log partition.

**Default Value**

`3`

* * *

#### `nuxeo.stream.work.computation.filter.enabled`

Filter work with a serialized size that exceed a threshold so they are stored outside of the stream.

**Default Value**

`false`

* * *

#### `nuxeo.stream.work.computation.filter.thresholdSize`

Threshold in bytes that is used to store work outside of the stream.

**Default Value**

`1000000`

* * *

#### `nuxeo.stream.work.computation.filter.class`

The class that implement the external storage of large work. Default is using a Transient store, there is also a KeyValue implementation `org.nuxeo.ecm.core.work.KeyValueStoreOverflowRecordFilter`.

**Default Value**

`org.nuxeo.ecm.core.transientstore.computation.TransientStoreOverflowRecordFilter`

* * *

#### `nuxeo.stream.work.computation.filter.storeName`

The storage name to use.

**Default Value**

`default`

* * *

#### `nuxeo.stream.work.computation.filter.storeKeyPrefix`

A key prefix to use on the external storage.

**Default Value**

`bigRecord:`

* * *

#### `nuxeo.stream.work.computation.filter.storeTTL`

The time to live used the KeyValue storage implementation.
This does not apply to the Transient store where the retention is fixed by its configuration.

**Default Value**

`4d`

* * *

#### `org.nuxeo.runtime.reload_strategy`

The strategy to use when hot reloading Nuxeo Server.<br/>
There're two possible values, changing slightly the before/after reload logic:

<ul>
  <li>`standby`: components are stopped, new/former components are deployed/undeployed, components are started</li>
  <li>`restart`: components are stopped, then de-activated, new/former components are deployed/undeployed, components are activated, then started</li>
</ul>

**Default Value**

`standby`

* * *

<div class="row" data-equalizer data-equalize-on="medium">
<div class="column medium-6">

{{#> panel heading='Related content'}}
- [Setup Best Practices]({{page page='setup-best-practices'}})
- [Nuxeo Clustering Configuration]({{page page='nuxeo-clustering-configuration'}})
{{/panel}}
</div>

<div class="column medium-6">
&nbsp;
</div>
</div>
