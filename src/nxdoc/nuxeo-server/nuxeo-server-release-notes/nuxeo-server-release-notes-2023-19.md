---
title: LTS 2023.19 / LTS 2023-HF19
description: Discover what's new in LTS 2023.19 / LTS 2023-HF19
review:
   comment: ''
   date: '2024-09-18'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 340
---

{{! multiexcerpt name='nuxeo-server-updates-2023-19'}}
# What's New in LTS 2023.19 / LTS 2023-HF19

## Configure Tomcat Logs With Log4j


Tomcat Log configuration with Log4j

The Tomcat logs configuration can be handled by Log4j which easily allows to configure Tomcat logs in Cloud environments.

The introduced configuration routes all Tomcat logs to `log/catalina.log` (without the date) with same level as with the JUL configuration under `conf/logging.properties`.
 This mechanism will be the default for LTS 2025 and must be opted-in in LTS 2023.
 You need to enable the `tomcat-logs` template for LTS 2023, for example by adding the following to your `nuxeo.conf`:
```java
nuxeo.append.templates.tomcat-logs=tomcat-logs
```
 

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32875](https://jira.nuxeo.com/browse/NXP-32875)

## Comments Not Showing on Version Documents


`AbstracSession#getOrCreateDocument` now works properly to create a document under a version.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32845](https://jira.nuxeo.com/browse/NXP-32845)

## DocumentTaskProvider getTasks Should Rely on an Elastic to Avoid Mongo Timeouts


The task related page providers now rely on Elasticsearch by default.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32754](https://jira.nuxeo.com/browse/NXP-32754)

## Make the Nuxeo Launcher Log4j Configuration File Overridable


The Log4j configuration file for Nuxeo Launcher can now be customized.

Previously present in the launcher, the Nuxeo Launcher Log4j configuration file has been extracted to `/lib/log4j2-launcher.xml` so it could be edited.

A new `nuxeo.conf` property has been introduced to reference the log4j configuration file if needed:
```Java
launcher.log4j2.file=/etc/nuxeo/log4j2-launcher.xml
```
WARNING:
Variable expansion is not supported on this property because the property is used before launcher invocation, which owns this mechanism.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32668](https://jira.nuxeo.com/browse/NXP-32668)

## Fix How Framework.getProperty Reads Accentued Characters


The `nuxeo.conf` and other nuxeo properties files are now read / written with UTF-8 encoding.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32489](https://jira.nuxeo.com/browse/NXP-32489)


# Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/secure/ReleaseNote.jspa?projectId=10011&version=23082) is available in our bug tracking tool.

{{! /multiexcerpt}}
