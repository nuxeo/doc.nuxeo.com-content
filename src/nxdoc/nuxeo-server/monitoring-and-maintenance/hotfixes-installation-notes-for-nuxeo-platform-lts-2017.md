---
title: Hotfixes Installation Notes for Nuxeo Platform LTS 2017
review:
    comment: ''
    date: '2018-02-07'
    status: ok
labels:
    - lts2017-ok
    - multiexcerpt-include
toc: true
tree_item_index: 1200
version_override:
    LTS 2016: 810/nxdoc/hotfixes-installation-notes-for-nuxeo-platform-lts-2016
    LTS 2015: 710/admindoc/hotfixes-installation-notes-for-nuxeo-platform-lts-2015
    '6.0': 60/admindoc/hotfixes-installation-notes-for-nuxeo-platform-60
---
{{{multiexcerpt 'intro_hotfix' page='ADMINDOC710:Hotfixes Installation Notes for Nuxeo Platform LTS 2015'}}}

{{#> callout type='warning' }}
While installing hotfixes, you will see the following message, but you can ignore it and continue.  
```
Use of the <copy /> command on JAR files is not recommended, prefer using <update /> command to ensure a safe rollback. (nuxeo-launcher-9.10-HF01-jar-with-dependencies.jar)
```
{{/callout}}

## Instance Registration
Hotfixes released for LTS 2017 can only be used on valid, registered Nuxeo instances.

**Why?** </br>
If you are using an *unregistered LTS 2017 Nuxeo instance with hotfixes installed*, you may encounter the following behavior:
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

## Hotfix 24

### Recompute Missing Thumbnails

A new operation called `RecomputeThumbnails` has been added and is available for administrators to recompute the thumbnails, mainly the missing ones when errors occurred during conversions.  
A sample call to this operation is:
```
curl -v -H 'Content-Type:application/json' -d '{"params": {"query": "SELECT * FROM Document WHERE ecm:mixinType = \"Thumbnail\" AND thumb:thumbnail/data IS NULL AND ecm:isVersion = 0 AND ecm:isProxy = 0 AND ecm:isTrashed = 0"}, "context": {}}' -u Administrator:Administrator http://localhost:8080/nuxeo/site/automation/RecomputeThumbnails
```

### Date Format in CSV Importer

Dates in CSV files are using a legacy date format (without time information) `MM/dd/yyyy`.

However, it is possible to use the W3C date format, that supports time information, by setting the configuration property `nuxeo.csv.import.legacyDateFormat` to `false`:
```
<require>org.nuxeo.ecm.csv.core.properties</require>
<extension point="configuration" target="org.nuxeo.runtime.ConfigurationService">
  <property name="nuxeo.csv.import.legacyDateFormat">false</property>
</extension>
```

More information on the [W3C documentation](https://www.w3.org/TR/NOTE-datetime).

### Uniqueness in Transient Username

A new configuration property `nuxeo.transient.username.unique` is available to define if a computed transient username should be unique no matter what base username is provided, or if it should be always the same for a given base username.  
Having always the same transient username for a given base username allows to generate only one token for a given email when giving permission to an external user: that means if you invite the same external user on 2 documents, he won't have to log out from the first document to see the second one.  
It defaults to `true` for backward compatibility.

To disable the uniqueness of the transient username computation, use the following contribution:
```
<require>org.nuxeo.ecm.core.api.properties</require>
<extension target="org.nuxeo.runtime.ConfigurationService" point="configuration">
  <property name="nuxeo.transient.username.unique">false</property>
</extension>
```

## Hotfix 22

### Configuration for Elasticsearch RestClient Truststore

The following `nuxeo.conf` properties can be set to define appropriate TLS/SSL configuration for the Elasticsearch RestClient:
- `elasticsearch.restClient.truststore.path`
- `elasticsearch.restClient.truststore.password`
- `elasticsearch.restClient.truststore.type`
- `elasticsearch.restClient.keystore.path`
- `elasticsearch.restClient.keystore.password`
- `elasticsearch.restClient.keystore.type`

The following properties are **deprecated** (they were misnamed and are actually referring to the trustStore, not the keyStore):
- `elasticsearch.restClient.keystorePath`
- `elasticsearch.restClient.keystorePassword`
- `elasticsearch.restClient.keystoreType`

If a more fine-grained configuration is needed, the following extension point can be used:
```
  <require>org.nuxeo.elasticsearch.defaultConfig</require>
  <extension target="org.nuxeo.elasticsearch.ElasticSearchComponent" point="elasticSearchClient">
    <elasticSearchClient class="org.nuxeo.elasticsearch.client.ESRestClientFactory">
      ...
      <option name="trustStorePath">/path/to/cacerts.jks</option>
      <option name="trustStorePassword">changeit</option>
      <option name="trustStoreType">jks</option>
      <option name="keyStorePath">/path/to/keystore.jks</option>
      <option name="keyStorePassword">changeit</option>
      <option name="keyStoreType">jks</option>
    </elasticSearchClient>
  </extension>
```
### Configuration for In-Flight Encryption of MongoDB Client Truststore

The following `nuxeo.conf` properties can be set to define appropriate TLS/SSL configuration for MongoDB:
- `nuxeo.mongodb.ssl=true`
- `nuxeo.mongodb.truststore.path`
- `nuxeo.mongodb.truststore.password`
- `nuxeo.mongodb.truststore.type`
- `nuxeo.mongodb.keystore.path`
- `nuxeo.mongodb.keystore.password`
- `nuxeo.mongodb.keystore.type`

If a more fine-grained configuration is needed, the following extension point can be used:
```
  <require>org.nuxeo.mongodb.connection</require>
  <extension target="org.nuxeo.runtime.mongodb.MongoDBComponent" point="connection">
    <connection id="default">
      ...
      <ssl>true</ssl>
      <trustStorePath>/path/to/cacerts.jks</trustStorePath>
      <trustStorePassword>changeit</trustStorePassword>
      <trustStoreType>jks</trustStoreType>
      <keyStorePath>/path/to/keystore.jks</keyStorePath>
      <keyStorePassword>changeit</keyStorePassword>
      <keyStoreType>jks</keyStoreType>
    </connection>
  </extension>
```
### Configuration for Kafka SASL and TLS authentication

The following `nuxeo.conf` properties can be set to define Kafka SASL and TLS authentication
```
# SASL
kafka.sasl.enabled=false
kafka.security.protocol=SASL_PLAINTEXT
kafka.sasl.mechanism=SCRAM-SHA-256
kafka.sasl.jaas.config=org.apache.kafka.common.security.scram.ScramLoginModule required username="kafkaclient1" password="kafkaclient1-secret";

# SSL
kafka.ssl=false
kafka.truststore.type=JKS
kafka.truststore.path=
kafka.truststore.password=
kafka.keystore.type=JKS
kafka.keystore.path=
kafka.keystore.password=
```

## Hotfix 21

### New Seam Event
A new Seam event, `mainTabsChanged`, is thrown when switching between main tabs in the JSF UI. It is not used by default to avoid changes in the default behavior of one's application.
A use case is to reset the document selection of a content view. It can be done with this contribution:
```
<require>org.nuxeo.ecm.webapp.documentsLists.DefaultDocumentsLists</require>
  <extension target="org.nuxeo.ecm.webapp.documentsLists.DocumentsListsService"
    point="list">
    <documentsList name="CURRENT_SELECTION">
      <events>
        <event>folderishDocumentSelectionChanged</event>
        <event>searchPerformed</event>
        <event>mainTabsChanged</event>
      </events>
      <isSession>false</isSession>
    </documentsList>
  </extension>
```

## Hotfix 20

### New Nuxeo AWS Service

A new template `aws` is available, to define the AWS configuration. When activated (which is automatically done by the [amazon-s3-online-storage](https://connect.nuxeo.com/nuxeo/site/marketplace/package/amazon-s3-online-storage) package), the following `nuxeo.conf` properties are available:
```
nuxeo.aws.accessKeyId
nuxeo.aws.secretKey
nuxeo.aws.region
```
They are optional, and if not present the default AWS SDK mechanism for configuring them will be used (environment variables, Java system properties, local AWS profile, container-specific configuration (ECS/EC2)).</br>
For more information read the AWS documentation regarding [Credentials](https://docs.aws.amazon.com/sdk-for-java/v1/developer-guide/credentials.html#credentials-default) and [Region](https://docs.aws.amazon.com/sdk-for-java/v1/developer-guide/java-dg-region-selection.html#default-region-provider-chain).

Instead of using the template, the service can also be configured manually:
```
  <extension target="org.nuxeo.runtime.aws.AWSConfigurationService" point="configuration">
    <configuration>
      <accessKeyId>MY_ACCESS_KEY_ID</accessKeyId>
      <secretKey>MY_SECRET_KEY</secretKey>
      <region>MY_REGION</region>
    </configuration>
  </extension>
```

## Hotfix 16

### Protection from Local Filesystem CSRF Attack

The hotfix 15 includes a protection against local filesystem CSRF attack which is enabled by default. Unfortunately this protection has side-effects on other features, like hot-reload from Nuxeo Dev Tools extension or SAML authentication. Because of that, we decided to disable the protection by default, considering that the vulnerability is not critical.

If you need to be protected from local filesystem CSRF attack, then this contribution must be used:
```
   <require>org.nuxeo.ecm.platform.ui.web.cors</require>
   <extension target="org.nuxeo.runtime.ConfigurationService" point="configuration">
     <property name="nuxeo.cors.allowNullOrigin">false</property>
   </extension>
```

## Hotfix 15

### Package Not Found
After installing the hotfixes with the command `nuxeoctl mp-hotfix`, you may fall in this exception when starting Nuxeo:
```
org.nuxeo.connect.update.PackageException: Package not found: nuxeo-9.10-HF14-1.0.0 nuxeo-9.10-HF15-1.0.0
```

You need to add the parameter `--ignore-missing` to `nuxeoctl` command to be able to successfully start Nuxeo.


## Hotfix 13

### Enable GWT Annotations

The GWT annotations are enabled when using the old JSF preview which is enabled by setting up the `nuxeo.old.jsf.preview` property to `true`.

```
<require>org.nuxeo.ecm.platform.preview.properties</require>
<extension target="org.nuxeo.runtime.ConfigurationService" point="configuration">
  <property name="nuxeo.old.jsf.preview">true</property>
</extension>
```

### Support of Read-Only Directories with SAML Authentication

Two new parameters are now available when configuring SAML authentication plugin:
- `userResolverCreateIfNeeded` to create the user if it does not exist in the directory (default value is `true`)
- `userResolverUpdate` to update the user if present in the directory (default is value `true`)

When set to true, both parameters require a user directory which is not read-only.

## Hotfix 12

### Jsessionid Management in URL

A new system parameter is introduced with the hotfix 12 to handle how the `jsessionid` is propagated during the use of the application. The default behavior makes Tomcat to append the `jsessionid` to the URLs, for example in a file download URL. It can be changed to configure Tomcat with the `COOKIE` session tracking mode. The following line has to be added to your `nuxeo.conf` to enable it:
```
session.config.tracking.mode.cookie=true
```
If the `COOKIE` mode is set to:
- `enabled`: the `jsessionid` parameter won't be added to the URLs. Yet, cookies need to be enabled in the browser.
- `disabled`: the `jsessionid` parameter might be added to some URLs, for instance when sharing a document permalink to an anonymous user or when clearing the browser cookies. Yet, cookies don't need to be enabled in the browser.


## Hotfix 09

### Trash Flow
The Trash management is now available in Web UI on 9.10 but is disabled by default. The slot contributions below must be added to enable it.
```
<!-- Delete action on the current document -->
<nuxeo-slot-content name="deleteDocumentAction" slot="DOCUMENT_ACTIONS" order="15">
  <template>
    <nuxeo-delete-document-button document="[[document]]"></nuxeo-delete-document-button>
  </template>
</nuxeo-slot-content>

<!-- Trash pill to browse trash content of a Folderish -->
<nuxeo-slot-content name="documentTrashItem" slot="DOCUMENT_VIEWS_ITEMS" order="40">
  <template>
    <nuxeo-filter document="[[document]]" facet="Folderish">
      <template>
        <nuxeo-page-item name="trash" label="browser.trash"></nuxeo-page-item>
      </template>
    </nuxeo-filter>
  </template>
</nuxeo-slot-content>

<nuxeo-slot-content name="documentTrashPage" slot="DOCUMENT_VIEWS_PAGES" order="40">
  <template>
    <nuxeo-filter document="[[document]]" facet="Folderish">
      <template>
        <nuxeo-document-trash-content name="trash" document="[[document]]" provider="advanced_document_trash_content">
        </nuxeo-document-trash-content>
      </template>
    </nuxeo-filter>
  </template>
</nuxeo-slot-content>

<!-- New drawer menu item to access new trash search -->
<nuxeo-slot-content name="trashMenuButton" slot="DRAWER_ITEMS" order="100">
  <template>
    <nuxeo-menu-icon name="trash" icon="nuxeo:delete" label="app.trashSearch"></nuxeo-menu-icon>
  </template>
</nuxeo-slot-content>
<nuxeo-slot-content name="trashMenuPage" slot="DRAWER_PAGES">
  <template>
    <nuxeo-search-form name="trash" search-name="trash" auto
                       provider="default_trash_search" schemas="dublincore,common,uid"></nuxeo-search-form>
  </template>
</nuxeo-slot-content>

<!-- Make sure the legacy results selection action soft deletes -->
<nuxeo-slot-content name="deleteSelectionAction" slot="RESULTS_SELECTION_ACTIONS" order="30">
  <template>
    <nuxeo-delete-documents-button documents="[[selectedItems]]">
    </nuxeo-delete-documents-button>
  </template>
</nuxeo-slot-content>
<!-- And we have another one for hard deleting -->
<nuxeo-slot-content name="hardDeleteSelectionAction" slot="RESULTS_SELECTION_ACTIONS" order="30">
  <template>
    <nuxeo-delete-documents-button documents="[[selectedItems]]" hard></nuxeo-delete-documents-button>
  </template>
</nuxeo-slot-content>

<!-- Add a new action to untrash trashed documents -->
<nuxeo-slot-content name="untrashSelectionAction" slot="RESULTS_SELECTION_ACTIONS" order="40">
  <template>
    <nuxeo-untrash-documents-button documents="[[selectedItems]]"></nuxeo-untrash-documents-button>
  </template>
</nuxeo-slot-content>
```
Moreover these new operations are now available:
- `Document.Trash`: this operation will put the input documents to the trash
- `Document.Untrash`: this operation will restore the input documents from the trash
- `Document.EmptyTrash`: this operation allows to delete a Folderish trash content permanently

A `firstAccessibleAncestor` Json Enricher is also available to get the closest document's ancestor used to redirect when deleting a document.

### Forbidden Characters in Tag Names
In addition to the characters ' (single quote), \ (backslash), % (percent) and space, that were already forbidden in a tag, the character / (forward slash) is now also forbidden.

All these characters are removed at creation time and when we try to get a tag or update it.


## Hotfix 05

### Old Revision
You must install the last revision of the hotfix 5 for LTS 2017 and remove the revision 1.0.0
```
./nuxeoctl mp-install nuxeo-9.10-HF05-1.1.0
./nuxeo mp-remove nuxeo-9.10-HF05-1.0.0
```
### Directory Entry Format in a Data Table

The suggestion widgets now initialize using the `selected-item(s)` property of the value one. This is needed to correctly display the entry in a data table by using its label instead of its key.
It applies to `nuxeo-directory-suggestion`, `nuxeo-user-suggestion` and `nuxeo-document-suggestion` elements.
If you manually use these widgets in a data table, you have to follow these examples:
* Multiple suggestion
```
<nuxeo-directory-suggestion role="widget" label="[[i18n('label.dublincore.subjects')]]"
                            directory-name="l10nsubjects"
                            name="subjects"
                            selected-items="{{document.properties.dc:subjects}}"
                            multiple="true"
                            dbl10n="true"
                            placeholder="[[i18n('dublincoreEdit.directorySuggestion.placeholder')]]"
                            min-chars="0">
</nuxeo-directory-suggestion>
```
* Single suggestion
```
<nuxeo-directory-suggestion role="widget" label="[[i18n('label.dublincore.coverage')]]"
                            directory-name="l10ncoverage"
                            name="coverage"
                            selected-item="{{document.properties.dc:coverage}}"
                            dbl10n="true"
                            placeholder="[[i18n('dublincoreEdit.directorySuggestion.placeholder')]]"
                            min-chars="0">
</nuxeo-directory-suggestion>
```

## Hotfix 04

### Old Revision
You must install the last revision of the hotfix 4 for LTS 2017 and remove the revision 1.0.0
```
./nuxeoctl mp-install nuxeo-9.10-HF04-1.1.0
./nuxeo mp-remove nuxeo-9.10-HF04-1.0.0
```

## Hotfix 03

### CSRF Protection for Platform

CSRF protection is activated by default and based on the CORS configuration and its `allowOrigin` and `supportedMethods` parameters, which by default doesn't allow any cross origin.

To activate an insecure configuration that allows any cross origin, use:
```
<extension target="org.nuxeo.ecm.platform.web.common.requestcontroller.service.RequestControllerService" point="corsConfig">
    <!-- THIS IS INSECURE -->
    <corsConfig name="insecure" allowOrigin="*" supportedMethods="GET,HEAD,OPTIONS,POST,PUT,DELETE" >
      <pattern>/.*</pattern>
    </corsConfig>
</extension>
```
This configuration may fix the error `HTTP 403 - CSRF check failure`.
See the [related documentation page]({{page version='' space='nxdoc' page='cross-origin-resource-sharing-cors'}}) for more information.

### Evolution of the JSON Structure of the Task

Fetching a list of tasks now returns more information to the client side.
When using the REST API, the JSON structure of a Task object now also includes:
* the workflow initiator
* the workflow title
* the workflow lifecycle state
* the graph route URL

### Full Name Search in User Suggestions

The `SuggestUserEntries` operation performs a full name user search, e.g. typing "John Do" returns the user with first name "John" and last name "Doe".

The previous behavior (not returning any user when typing a full name) can be re-activated by using:
```
  <extension target="org.nuxeo.runtime.ConfigurationService" point="configuration">
    <property name="org.nuxeo.automation.user.suggest.fullname">false</property>
  </extension>
```
In any case, typing "John" still returns the "John Doe" user and possibly other users such as "John Foo". Respectively, typing "Do" returns the "John Doe" user and possibly other users such as "Jack Donald".


### Old Revision
You must install the last revision of the hotfix 3 for LTS 2017 and remove the revision 1.0.0 which contained a SNAPSHOT JAR for the Easyshare module.
```
./nuxeoctl mp-install nuxeo-9.10-HF03-1.0.1
./nuxeo mp-remove nuxeo-9.10-HF03-1.0.0
```

## Hotfix 02

### Stack Trace in REST API Exception

The exception stack trace is written if the media type is application/json+nxentity but it can be disabled for security reason with the `nuxeo.rest.write.exception.stack.trace` configuration parameter, which is set to `true` by default.

To disable it, use this code:
```
<extension target="org.nuxeo.runtime.ConfigurationService" point="configuration">
  <property name="nuxeo.rest.write.exception.stack.trace">false</property>
</extension>
```

## Hotfix 01

### New Searchable Property in Elasticsearch: ecm:versionVersionableId

With an Elasticsearch NXQL query you can retrieve all versions of a document by version series id. To search existing documents by `ecm:versionVersionableId` a re-index is required. This could either be done via a full re-index or a re-index of just documents that have versions, using this query:
```
SELECT * FROM Document WHERE ecm:isVersion = 1
```

### HSTS by Default

When HTTPS is enabled (which is the case if a non-0 value is specified for `nuxeo.server.https.port`), HSTS is automatically enabled with the following defaults:
* nuxeo.server.hsts.maxage=2592000
* nuxeo.server.hsts.includesubdomains=false
* nuxeo.server.hsts.preload=false

HSTS can be disabled by specifying:
```
nuxeo.server.hsts.enabled=false
```

### API to Recompute Quota for Tenant or User

A new operation is added to the Automation API to recompute quote for tenants or users: `Quotas.RecomputeStatistics`.
It can be called with these optional parameters:

* `tenantId` / `username` / `path` (only one allowed)
* `updaterName` (defaults to `documentsSizeUpdater`)

### Old Revision
You must install the last revision of the hotfix 1 for LTS 2017 and remove the revision 1.0.0 which contained a SNAPSHOT JAR for the Easyshare module.
```
./nuxeoctl mp-install nuxeo-9.10-HF01-1.0.1
./nuxeo mp-remove nuxeo-9.10-HF01-1.0.0
```
