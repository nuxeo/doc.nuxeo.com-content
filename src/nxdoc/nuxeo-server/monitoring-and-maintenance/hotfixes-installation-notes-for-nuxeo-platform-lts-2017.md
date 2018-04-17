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
