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








