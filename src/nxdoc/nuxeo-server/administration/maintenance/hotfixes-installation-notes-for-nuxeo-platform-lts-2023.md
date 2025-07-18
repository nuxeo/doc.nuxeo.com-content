---
title: Hotfixes Installation Notes
review:
    comment: ''
    date: '2023-03-14'
    status: ok
labels:
    - multiexcerpt-include
toc: true
tree_item_index: 1200
version_override:
    LTS 2021: 2021/nxdoc/hotfixes-installation-notes-for-nuxeo-platform-lts-2021
    LTS 2019: 1010/nxdoc/hotfixes-installation-notes-for-nuxeo-platform-lts-2019
    LTS 2017: 910/nxdoc/hotfixes-installation-notes-for-nuxeo-platform-lts-2017
    LTS 2016: 810/nxdoc/hotfixes-installation-notes-for-nuxeo-platform-lts-2016
    LTS 2015: 710/admindoc/hotfixes-installation-notes-for-nuxeo-platform-lts-2015
    '6.0': 60/admindoc/hotfixes-installation-notes-for-nuxeo-platform-60
---

The purpose of this page is to describe the additional actions that need to be done when installing the hotfixes on Nuxeo Platform and that cannot be done automatically. The page provides an exhaustive list of manipulations for the installation of Nuxeo Platform LTS 2023 hotfixes, but you need only to apply those relevant for your own instance.

{{{multiexcerpt 'intro_hotfix' page='ADMINDOC710:Hotfixes Installation Notes for Nuxeo Platform LTS 2015'}}}

{{#> callout type='warning' }}
While installing hotfixes, you will see the following message, but you can ignore it and continue.
```
Use of the <copy /> command on JAR files is not recommended, prefer using <update /> command to ensure a safe rollback. (nuxeo-launcher-9.10-HF01-jar-with-dependencies.jar)
```
{{/callout}}

Since LTS 2021, the addon "Nuxeo JSF UI" is handled outside the main Nuxeo repository on GitHub. As a consequence, the related fixes for JSF UI will not be embedded in a hotfix.</br>
Therefore if the addon "Nuxeo JSF UI" is installed on your instance, you must upgrade this package after installing a hotfix by running the following command:

```
> nuxeoctl mp-upgrade
```
Note that this command will upgrade the versions of any package.

## Instance Registration

Hotfixes released for LTS 2023 can only be used on valid, registered Nuxeo instances.

**Why?** </br>
If you are using an *unregistered LTS 2023 Nuxeo instance with hotfixes installed*, you may encounter the following behavior:
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

## Hotfix 33

### Upgrade DuoWeb SDK to the Latest Version

See [https://doc.nuxeo.com/nxdoc/nuxeo-duoweb-two-factor-authentication/](https://doc.nuxeo.com/nxdoc/nuxeo-duoweb-two-factor-authentication/) for configuring Duo's two-factor authentication.

### Fix JSF 2023 Functional Tests Failing on Document Update

We’ve added two nuxeo.conf parameters, allowing to configure the Tomcat Connector’s `maxPartCount` and `maxPartHeaderSize` attributes. The default values match the ones set in the future version of Tomcat, 9.0.107:

- `nuxeo.server.http.maxPartCount=50`
- `nuxeo.server.http.maxPartHeaderSize=512`

## Hotfix 31

### Allow Having FFMpeg Installed in the LTS 2023/2025 Docker Image

Upgraded ImageMagick 7 from 7.1.1.36-341 to 7.1.1.47-1.

### Fix Vim Low CVE in Docker Image

Vim editor was upgraded in the Docker image from `8.2.2637-21.0.1` to `8.2.2637-22.0.1`.

### Fix Commons-Beanutils CVE in 2023

Upgraded the `commons-beanutils:commons-beanutils` dependency from 1.10.0 to 1.11.0.

### Fix Postgresql CVE in 2023/2025

Upgraded the `org.postgresql:postgresql` dependency from 42.7.5 to 42.7.7.

## Hotfix 29

### Restrict the Visibility of Administrators' Members

The new `nuxeo.group.administrators.members.resticted` nuxeo.conf property, when set to `true`, allows to restrict the visibility of the member users, member groups and parent groups of an administrator group, typically the “administrators” group. In this case, making a call to `/nuxeo/api/v1/groups/administrators` as a non administrator user returns empty lists for the ”memberUsers”, “memberGroups” and “parentGroups“ properties.

This property is not set by default.

## Hotfix 27

### Migration Tool to Extract Full Text From Mongo DB to an S3 Blob

Here is the 4 step migration process when you want to switch the storage of binary fulltext from the repository (MongoDB) to a S3 bucket on an existing instance.

**1. Update the** `nuxeo.conf` **and restart all nodes**

```
nuxeo.vcs.fulltext.storedInBlob=true
# when fulltext is stored in blob, repository fulltext search is disabled
nuxeo.vcs.fulltext.search.disabled=true
# bucket prefix to store fulltext blobs
nuxeo.s3storage.fulltext.storeInBlob.bucket_prefix=fulltext
# enable the fulltext migration
nuxeo.bulk.action.fixBinaryFulltextStorage.enabled=true
nuxeo.bulk.action.fixBinaryFulltextStorage.defaultConcurrency=2
nuxeo.bulk.action.fixBinaryFulltextStorage.defaultPartitions=4
```

After this, the binary fulltext of new blob will be stored in the s3 bucket under `/fulltext/` prefix.

Everything should work properly while there are two different storages for binary fulltext.
Re-indexing will not change this state. Running `extractBinaryFulltext` will do but this is not efficient since it’s slow and expensive. Follow the next steps for the migration.

**2. Clean MongoDB fulltext**

Since we have disabled the fulltext search from the repository, we can remove existing index and fields. Check if MongoDB `fulltext` index exists in the following code.

```
db.default.getIndex("fulltext")
  {
    v: 2,
    key: { _fts: 'text', _ftsx: 1 },
    name: 'fulltext',
    weights: { 'ecm:fulltextBinary': 1, 'ecm:fulltextSimple': 1 },
    default_language: 'english',
    language_override: '__language',
    textIndexVersion: 3
  },
```

then remove it

```
db.default.dropIndex('fulltext')
```

Remove MongoDB field `ecm:fulltextSimple`. This can be a long operation depending on the db size.

```
db.default.updateMany({}, {$unset: {"ecm:fulltextSimple":1}});
```

**3. Run the migration**

```
curl -s -X POST "http://localhost:8080/nuxeo/api/v1/management/fulltext/fixBinaryStorage" -u Administrator:Administrator
```

It’s possible to test it by providing a custom NXQL `query`. The default query matches all docs that is not a proxy.

**4. Remove the migration bulk action and restart all nodes**

Change the `nuxeo.conf` and restart

```
nuxeo.bulk.action.fixBinaryFulltextStorage.enabled=false
```

## Hotfix 24

### Fix Vim Low CVE in Docker Image


Vim editor was upgraded in the Docker image from `8.2.2637-20.0.1` to `8.2.2637-21.0.1`.


### Fix Property Name in 'quartz.properties.nxftl' File


Renamed the following Quartz scheduler property:

```
org.quartz.scheduler.mongoOptionWriteConcernTimeoutMillis
```

to

```
org.quartz.jobStore.mongoOptionWriteConcernTimeoutMillis
```


## Hotfix 23

### Align Quartz-Mongodb on  quartz-2.5.0


The upgrade of `quartz` breaks the compatibility with `quartz-mongodb` but since the project [https://github.com/michaelklishin/quartz-mongodb](https://github.com/michaelklishin/quartz-mongodb|smart-link) is in an abandoned state we have to fork it to apply the require changes. This result in a change in the `groupId` of the dependency, so if you’re using this dependency in your project, you must update it to:

```xml
<dependency>
  <groupId>org.nuxeo.lib.novemberain</groupId>
  <artifactId>quartz-mongodb</artifactId>
</dependency>
```


## Hotfix 22

### Fix Being Able to Create User With Empty Password

A POST request on the `/nuxeo/api/v1/user` endpoint now returns a 400 _Bad Request_ status code if no password or a blank password is provided.

### Fix Tomcat Upgrade from 9.0.96 to 9.0.97

If you have configured a custom contextPath like described in the [documentation]({{page space='nxdoc' page='how-to-change-context-path'}}), you need to update your `$NUXEO_HOME/templates/common-base/conf/Catalina/localhost/myapp.xml.nxftl` and add `notFoundClassResourceCacheSize="0"` to the `Context` element.


## Hotfix 20

### Use Oracle Linux 9 Instead of Rocky Linux 9 as Base Image for LTS 2023 Docker Image


The `docker-private.packages.nuxeo.com/nuxeo/nuxeo:2023` Docker image is built from `oraclelinux:9-slim`.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32711](https://jira.nuxeo.com/browse/NXP-32711)

## Hotfix 19

### Make the Nuxeo Launcher Log4j Configuration File Overridable

The {{bin/nuxeoctl}} script has been updated by this feature, so if you're using the HF mechanism on a standalone zip server, you might set back the execute permission to {{bin/nuxeoctl}}, something like below:
```bash
chmod +x bin/nuxeoctl
```

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32668](https://jira.nuxeo.com/browse/NXP-32668)

### Configure Tomcat Logs With Log4j


If you enable the Tomcat logs with Log4j configuration feature in LTS 2023, you might need to migrate `conf/logging.properties` to `log4j2.xml` if you have one.
 The default `conf/logging.properties` was migrated to this portion of the default `log4j2.xml` file:
```java
    <!-- Tomcat catalina loggers -->
    <Logger name="org.apache.catalina" level="warn" additivity="false">
      <AppenderRef ref="CATALINA" />
    </Logger>
    <Logger name="org.apache.catalina.core.AprLifecycleListener" level="info" />
    <Logger name="org.apache.catalina.core.ContainerBase" level="info" />
    <Logger name="org.apache.catalina.startup.Catalina" level="info">
      <AppenderRef ref="CONSOLE" />
    </Logger>
    <Logger name="org.apache.catalina.startup.VersionLoggerListener" level="info" />
    <!-- Tomcat coyote loggers -->
    <Logger name="org.apache.coyote" level="warn" additivity="false">
      <AppenderRef ref="CATALINA" />
    </Logger>
    <!-- Tomcat jasper loggers -->
    <Logger name="org.apache.jasper" level="warn" additivity="false">
      <AppenderRef ref="CATALINA" />
    </Logger>
```

The JUL configuration present under `conf/logging.properties` will be removed in LTS 2025.
The log files `classloader.log`, `stderr.log`, and `tomcat.log` will also be removed in LTS 2025 as their logs are now written to `catalina.log`.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32875](https://jira.nuxeo.com/browse/NXP-32875)

### DocumentTaskProvider getTasks Should Rely on an Elastic to Avoid Mongo Timeouts


The page providers below are set to use Elasticsearch by default. Ensure that you add them to the `elasticsearch.override.pageproviders` nuxeo.conf property if you've overridden it.
```
GET_TASKS_FOR_ACTORS,GET_TASKS_FOR_ACTORS_OR_DELEGATED_ACTORS,GET_TASKS_FOR_PROCESS,GET_TASKS_FOR_PROCESS_AND_ACTORS,GET_TASKS_FOR_PROCESS_AND_NODE,GET_TASKS_FOR_TARGET_DOCUMENT,GET_TASKS_FOR_TARGET_DOCUMENTS,GET_TASKS_FOR_TARGET_DOCUMENTS_AND_ACTORS,GET_TASKS_FOR_TARGET_DOCUMENTS_AND_ACTORS_OR_DELEGATED_ACTORS
```

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32754](https://jira.nuxeo.com/browse/NXP-32754)

## Hotfix 18

### Allow to Use S3 StrictAuthenticatedEncryption With a Local Keystore


You must set the **nuxeo.s3storage.crypt.keystore.legacymode** configuration property to **true** when upgrading from **lts-2023** to **lts-2025** if you have objects encrypted client-side with a local keystore in v1 AWS encryption API.

If you want to start a fresh production environment in **lts-2023** with a higher level of security, you should set the **nuxeo.s3storage.crypt.keystore.legacymode** configuration property to **true**.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32842](https://jira.nuxeo.com/browse/NXP-32842)

### Move Swagger Rest API Doc to an Optional Marketplace


If you need the old swagger documentation, please install the **nuxeo-rest-api-documentation** marketplace from connect.

Doc source is now located at https://github.com/nuxeo/nuxeo-rest-api-swagger-doc.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32841](https://jira.nuxeo.com/browse/NXP-32841)

## Hotfix 12

### Use Keycloak Auth After Automation Basic Auth in Specific Auth Chains


Now when doing automation or rest calls, Automation basic auth precedes Keycloak auth. This brings change to the response status codes to expect.

These have been documented in [the Nuxeo Keycloak documentation]({{page page='nuxeo-keycloak'}}#nuxeokeycloak-automation-and-rest-api-status-code-specifications) alongside with a [sample xml contrib]({{page page='nuxeo-keycloak'}}#sample-contribution-to-change-the-authentication-pluginsand39-order-overriding-the-keycloak-packages-contribution) to reverse back the auth plugins order to the older state.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32514](https://jira.nuxeo.com/browse/NXP-32514)

## Hotfix 11

### Upgrade Commons-Cli From 1.6.0 to 1.7.0


commons-cli:commons:cli was upgraded from 1.6.0 to 1.7.0.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32498](https://jira.nuxeo.com/browse/NXP-32498)

## Hotfix 10

### Handle Openpdf Upgrade Dependabot Pull Request

The `com.github.librepdf:openpdf` dependency has been upgraded from 1.3.40 to 1.4.1.
Thus, the `AcroFields#getSignatureNames()` method isn't available anymore, it is replaced by `AcroFields#getSignedFieldNames()`.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32386](https://jira.nuxeo.com/browse/NXP-32386)

###  Provide Option to Enable Nashorn Optimistic Typing

A new framework property allows to toggle this behavior by adding the following to your nuxeo.conf:
```java
nuxeo.automation.scripting.optimistic.types.enabled=true
```

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32342](https://jira.nuxeo.com/browse/NXP-32342)

### Add Support of Keycloak 24.0.x

The following dependency (Keycloak BOM) has been removed:

```xml
<dependency>
  <groupId>org.keycloak</groupId>
  <artifactId>keycloak-tomcat-adapter-dist</artifactId>
</dependency>
```

in favor of:

```xml
<dependency>
  <groupId>org.keycloak</groupId>
  <artifactId>keycloak-tomcat-adapter</artifactId>
</dependency>
<dependency>
  <groupId>org.keycloak</groupId>
  <artifactId>keycloak-common</artifactId>
</dependency>
<dependency>
  <groupId>org.keycloak</groupId>
  <artifactId>keycloak-crypto-default</artifactId>
</dependency>
<dependency>
  <groupId>org.keycloak</groupId>
  <artifactId>keycloak-policy-enforcer</artifactId>
</dependency>
```

The version of these artifacts has been upgraded from 19.0.3 to 24.0.2.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32352](https://jira.nuxeo.com/browse/NXP-32352)

## Hotfix 9

### Update H2database Dep to 2.2.220

The following dependency was upgraded from 2.1.214 to 2.2.224:
```
<dependency>
  <groupId>com.h2database</groupId>
  <artifactId>h2</artifactId>
</dependency>
```

If on start you encounter the following exception, you have to delete the `${nuxeo.data.dir}/h2` directory.
Yet, you will LOSE DATA if you use the default H2 backend.
This should mainly impact development environments, as H2 must never be used in production.

```
2024-03-06T12:53:46,788 WARN  [JdbcEnvironmentInitiator] HHH000342: Could not obtain connection to query metadata
java.sql.SQLException: Cannot create PoolableConnectionFactory (Unsupported database file version or invalid file header in file "/var/lib/nuxeo/nuxeo-server-tomcat-2023.7-SNAPSHOT/nxserver/data/h2/nuxeo.mv.db"
Unsupported database file version or invalid file header in file "/var/lib/nuxeo-server-tomcat-2023.7-SNAPSHOT/nxserver/data/h2/nuxeo.mv.db" [90048-224])
	at org.apache.commons.dbcp2.managed.BasicManagedDataSource.createPoolableConnectionFactory(BasicManagedDataSource.java:155) ~[commons-dbcp2-2.11.0.jar:2.11.0]
	at org.apache.commons.dbcp2.BasicDataSource.createDataSource(BasicDataSource.java:535) ~[commons-dbcp2-2.11.0.jar:2.11.0]
	at org.apache.commons.dbcp2.BasicDataSource.getConnection(BasicDataSource.java:711) ~[commons-dbcp2-2.11.0.jar:2.11.0]
	...
Caused by: org.h2.jdbc.JdbcSQLNonTransientConnectionException: Unsupported database file version or invalid file header in file "/var/lib/nuxeo/nuxeo-server-tomcat-2023.7-SNAPSHOT/nxserver/data/h2/nuxeo.mv.db"
Unsupported database file version or invalid file header in file "/var/lib/nuxeo/nuxeo-server-tomcat-2023.7-SNAPSHOT/nxserver/data/h2/nuxeo.mv.db" [90048-224]
	at org.h2.message.DbException.getJdbcSQLException(DbException.java:690) ~[h2-2.2.224.jar:2.2.224]
	at org.h2.message.DbException.getJdbcSQLException(DbException.java:489) ~[h2-2.2.224.jar:2.2.224]
	at org.h2.message.DbException.get(DbException.java:212) ~[h2-2.2.224.jar:2.2.224]
	at org.h2.mvstore.db.Store.convertMVStoreException(Store.java:158) ~[h2-2.2.224.jar:2.2.224]
	at org.h2.mvstore.db.Store.<init>(Store.java:142) ~[h2-2.2.224.jar:2.2.224]
	at org.h2.engine.Database.<init>(Database.java:326) ~[h2-2.2.224.jar:2.2.224]
	at org.h2.engine.Engine.openSession(Engine.java:92) ~[h2-2.2.224.jar:2.2.224]
	at org.h2.engine.Engine.openSession(Engine.java:222) ~[h2-2.2.224.jar:2.2.224]
	at org.h2.engine.Engine.createSession(Engine.java:201) ~[h2-2.2.224.jar:2.2.224]
	at org.h2.engine.SessionRemote.connectEmbeddedOrServer(SessionRemote.java:343) ~[h2-2.2.224.jar:2.2.224]
	at org.h2.jdbc.JdbcConnection.<init>(JdbcConnection.java:125) ~[h2-2.2.224.jar:2.2.224]
	at org.h2.Driver.connect(Driver.java:59) ~[h2-2.2.224.jar:2.2.224]
	at org.apache.commons.dbcp2.DriverConnectionFactory.createConnection(DriverConnectionFactory.java:52) ~[commons-dbcp2-2.11.0.jar:2.11.0]
	at org.apache.commons.dbcp2.managed.LocalXAConnectionFactory.createConnection(LocalXAConnectionFactory.java:359) ~[commons-dbcp2-2.11.0.jar:2.11.0]
	at org.apache.commons.dbcp2.managed.PoolableManagedConnectionFactory.makeObject(PoolableManagedConnectionFactory.java:77) ~[commons-dbcp2-2.11.0.jar:2.11.0]
	at org.apache.commons.dbcp2.BasicDataSource.validateConnectionFactory(BasicDataSource.java:113) ~[commons-dbcp2-2.11.0.jar:2.11.0]
	at org.apache.commons.dbcp2.managed.BasicManagedDataSource.createPoolableConnectionFactory(BasicManagedDataSource.java:151) ~[commons-dbcp2-2.11.0.jar:2.11.0]
	... 76 more
Caused by: org.h2.mvstore.MVStoreException: The write format 2 is smaller than the supported format 3 [2.2.224/5]
	at org.h2.mvstore.DataUtils.newMVStoreException(DataUtils.java:996) ~[h2-2.2.224.jar:2.2.224]
	at org.h2.mvstore.FileStore.getUnsupportedWriteFormatException(FileStore.java:943) ~[h2-2.2.224.jar:2.2.224]
	at org.h2.mvstore.FileStore.processCommonHeaderAttributes(FileStore.java:547) ~[h2-2.2.224.jar:2.2.224]
	at org.h2.mvstore.RandomAccessStore.readStoreHeader(RandomAccessStore.java:227) ~[h2-2.2.224.jar:2.2.224]
	at org.h2.mvstore.FileStore.start(FileStore.java:916) ~[h2-2.2.224.jar:2.2.224]
	at org.h2.mvstore.MVStore.<init>(MVStore.java:289) ~[h2-2.2.224.jar:2.2.224]
	at org.h2.mvstore.MVStore$Builder.open(MVStore.java:2035) ~[h2-2.2.224.jar:2.2.224]
	at org.h2.mvstore.db.Store.<init>(Store.java:133) ~[h2-2.2.224.jar:2.2.224]
	at org.h2.engine.Database.<init>(Database.java:326) ~[h2-2.2.224.jar:2.2.224]
	at org.h2.engine.Engine.openSession(Engine.java:92) ~[h2-2.2.224.jar:2.2.224]
	at org.h2.engine.Engine.openSession(Engine.java:222) ~[h2-2.2.224.jar:2.2.224]
	at org.h2.engine.Engine.createSession(Engine.java:201) ~[h2-2.2.224.jar:2.2.224]
	at org.h2.engine.SessionRemote.connectEmbeddedOrServer(SessionRemote.java:343) ~[h2-2.2.224.jar:2.2.224]
	at org.h2.jdbc.JdbcConnection.<init>(JdbcConnection.java:125) ~[h2-2.2.224.jar:2.2.224]
	at org.h2.Driver.connect(Driver.java:59) ~[h2-2.2.224.jar:2.2.224]
	at org.apache.commons.dbcp2.DriverConnectionFactory.createConnection(DriverConnectionFactory.java:52) ~[commons-dbcp2-2.11.0.jar:2.11.0]
	at org.apache.commons.dbcp2.managed.LocalXAConnectionFactory.createConnection(LocalXAConnectionFactory.java:359) ~[commons-dbcp2-2.11.0.jar:2.11.0]
	at org.apache.commons.dbcp2.managed.PoolableManagedConnectionFactory.makeObject(PoolableManagedConnectionFactory.java:77) ~[commons-dbcp2-2.11.0.jar:2.11.0]
	at org.apache.commons.dbcp2.BasicDataSource.validateConnectionFactory(BasicDataSource.java:113) ~[commons-dbcp2-2.11.0.jar:2.11.0]
	at org.apache.commons.dbcp2.managed.BasicManagedDataSource.createPoolableConnectionFactory(BasicManagedDataSource.java:151) ~[commons-dbcp2-2.11.0.jar:2.11.0]
	... 76 more
 ```

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32341](https://jira.nuxeo.com/browse/NXP-32341)

## Hotfix 8

### Throw an Error if a String Is Used to Query a Long/Integer Field


Added the `nuxeo.primitive.type.strict.validation` Framework property.


 By default it is set to `false`, keeping the previous behavior: at low level, when trying to decode a string input as a number, fall back on 0 if the string cannot be decoded as a number, e.g. foo.

If set to `true`, in such case, a `NumberFormatException` is thrown.

Consequently, when executing a REST API search request on a PageProvider and passing foo as a query parameter for a predicate on an integer field, the server will respond with a 400 Bad Request status code, e.g.:
```
curl -u ******:******r -X GET http://localhost:8080/nuxeo/api/v1/search/pp/test_primitive_type_predicates/execute?integerField=foo | jq
{
  entity-type: exception,
  status: 400,
  message: java.lang.NumberFormatException: For input string: "foo"
}
```

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32214](https://jira.nuxeo.com/browse/NXP-32214)

## Hotfix 7

### Add Support for ZIP Generated With 7-Zip and Including Files Whose Name Contains Special Characters


A fallback charset can be configured. This is being documented in nxdoc/preview.
But here is the TL;DR:
```xml
<?xml version=1.0?>
<component name=org.nuxeo.ecm.zip.file.reader.fallback.config>
  <extension target=org.nuxeo.runtime.ConfigurationService point=configuration>
    <property name=org.nuxeo.ecm.zip.file.reader.charset.fallback>cp850</property>
  </extension>
</component>
```


<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32042](https://jira.nuxeo.com/browse/NXP-32042)

## Hotfix 5

### Upgrade or Remove Htmlunit From Nuxeo-Runtime-Test to Avoid Vulnerability


Removed the following Maven dependencies from `nuxeo-runtime-test`:
```
<dependency>
  <groupId>org.seleniumhq.selenium</groupId>
  <artifactId>selenium-api</artifactId>
</dependency>
<dependency>
  <groupId>org.seleniumhq.selenium</groupId>
  <artifactId>selenium-support</artifactId>
</dependency>
<dependency>
  <groupId>org.seleniumhq.selenium</groupId>
  <artifactId>selenium-firefox-driver</artifactId>
</dependency>
<dependency>
  <groupId>org.seleniumhq.selenium</groupId>
  <artifactId>selenium-ie-driver</artifactId>
</dependency>
<dependency>
  <groupId>org.seleniumhq.selenium</groupId>
  <artifactId>selenium-chrome-driver</artifactId>
</dependency>
<dependency>
  <groupId>org.seleniumhq.selenium</groupId>
  <artifactId>htmlunit-driver</artifactId>
</dependency>
```
Added the following Maven dependencies to `nuxeo-features-test`:
```
<dependency>
  <groupId>org.seleniumhq.selenium</groupId>
  <artifactId>selenium-firefox-driver</artifactId>
</dependency>
<dependency>
  <groupId>org.seleniumhq.selenium</groupId>
  <artifactId>selenium-ie-driver</artifactId>
</dependency>
<dependency>
  <groupId>org.seleniumhq.selenium</groupId>
  <artifactId>selenium-chrome-driver</artifactId>
</dependency>
<dependency>
  <groupId>org.seleniumhq.selenium</groupId>
  <artifactId>htmlunit-driver</artifactId>
</dependency>
<dependency>
  <groupId>org.assertj</groupId>
  <artifactId>assertj-core</artifactId>
  <scope>compile</scope>
</dependency>
```
Moved the following classes from `nuxeo-runtime-test` to `nuxeo-features-test`:
```
Attachment.java
Browser.java
BrowserFamily.java
ConcordionFixture.java
Configuration.java
DriverFactory.java
HomePage.java
SkipBrowser.java
TakesAttachment.java
WebDriverFeature.java
WebPage.java
ExpectedCondition.java
TimeoutException.java
Wait.java
WebDriverWait.java
MyHomePage.java
SearchResultPage.java
WebTest.java
```
The related package names haven't changed:
```
org.nuxeo.runtime.test.runner.web
org.openqa.selenium.support.ui
```
If you are explicitly depending on one of these classes, you need to replace the Maven dependency:
```
<dependency>
  <groupId>org.nuxeo.runtime</groupId>
  <artifactId>nuxeo-runtime-test</artifactId>
  <scope>test</scope>
</dependency>
```
by:
```
<dependency>
  <groupId>org.nuxeo.ecm.platform</groupId>
  <artifactId>nuxeo-features-test</artifactId>
  <scope>test</scope>
</dependency>
```

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32144](https://jira.nuxeo.com/browse/NXP-32144)

### Fix Results Selection Actions Made From Multi-Repository Search Results


Added:
- `nuxeo.bulk.download.multi.repositories` Framework property
- `AbsoluteDocumentRef`
- `TypeAdapterHelper#createDocumentModel(AbsoluteDocumentRef docRef)`
- `DocumentInputResolver#BULK_DOWNLOAD_MULTI_REPOSITORIES`
- `TestDocumentInputResolvers`
- `MultiRepositoryDummyOperation`

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31487](https://jira.nuxeo.com/browse/NXP-31487)

## Hotfix 4

### Factorize Email Sending Code


## Compatibility with Custom jndi Sessions

Compatibility has been ensured for users that contributed a custom jndi session name via a general settings contribution. 
 A JndiSMTPMailSender is contributed on the fly at server start and a warning will be given so users can be aware they need to contribute their own MailSender.

A JndiSMTPMailSender can also be contributed by the users like below but bear in mind this is only a compatibility implementation and we encourage you to leverage another implementation of MailSender instead:
```xml
<?xml version=1.0?>
<component name=org.nuxeo.mail.my.sender.contrib>
  <extension target=org.nuxeo.mail.MailServiceComponent point=senders>

    <sender name=mySender class=org.nuxeo.mail.JndiSMTPMailSender>
      <property name=jndiSessionName>mySessionName</property>
    </sender>

  </extension>
</component>
```

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32029](https://jira.nuxeo.com/browse/NXP-32029)

### Install ARM Compatible Tools in Nuxeo Docker Image


The Nuxeo 2023 Docker image (`docker-private.packages.nuxeo.com/nuxeo/nuxeo:2023`) supports multiple platforms: it contains variants for the `amd64` (`x86`) and `arm64v8` architectures.

When pulling this image, Docker automatically selects the variant that matches your OS and architecture. For instance, if you're running on:
- Linux (AMD64), you'll get the `amd64` variant.
- Apple Silicon M1 (ARM64), you'll get the `arm64` variant.

The `arm64` variant doesn't include the LibreOffice converter. Unfortunately, there is currently no LibreOffice RPM package available in a recent version for Rocky Linux (the base OS) in the `arm64` architecture.

Consequently, **the `arm64` variant of the Nuxeo 2023 Docker image is not production-ready. It is for development purpose only**.

Note that you can force the target platform when pulling or running the Docker image with the `--platform` option, for instance to pull the `amd64` variant:
```
docker pull docker-private.packages.nuxeo.com/nuxeo/nuxeo:2023 --platform=linux/amd64
```

The Nuxeo 2021 Docker image isn't impacted by this change, it only supports the `amd64` architecture.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31815](https://jira.nuxeo.com/browse/NXP-31815)

## Hotfix 3

### Orphan Version Full GC Is Not Working With orphanVersionRemovalFilter Contributions


On 2023 the contribution `org.nuxeo.ecm.core.event.orphanVersionRemoval.listener` has been removed.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32073](https://jira.nuxeo.com/browse/NXP-32073)

## Hotfix 1

### Add Flexible Record Core API


When using the Retention package with a MongoDB backend, it is recommended to create new indexes manually, otherwise, the Nuxeo server will attempt to create them at start-up. In the case of an existing instance with large amounts of documents, this process may time out and/or affect performance.

```Java
db.default.createIndex({ ecm:isRecord: 1}, {sparse: true});
db.default.createIndex({ ecm:isFlexibleRecord: 1}, {sparse: true});
```

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31968](https://jira.nuxeo.com/browse/NXP-31968)

### Rename Compliance Mode as Strict Mode


The `nuxeo.conf` property `nuxeo.retention.compliance.enabled` has been deprecated in favor of `nuxeo.retention.strictmode.enabled`.
When both properties are configured, `nuxeo.retention.strictmode.enabled` takes precedence.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31878](https://jira.nuxeo.com/browse/NXP-31878)









