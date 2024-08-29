---
title: LTS 2023.17 / LTS 2023-HF17
description: Discover what's new in LTS 2023.17 / LTS 2023-HF17
review:
   comment: ''
   date: '2024-08-22'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 0
hidden: true
---

{{! multiexcerpt name='nuxeo-server-updates-2023-17'}}
# What's New in LTS 2023.17 / LTS 2023-HF17

## Add a Way to Add Appenders to Loggers Configured With @LoggerLevel


You can now configure additional appenders to loggers configure with @LoggerLevel in tests.

Loggers configured with help of `@LoggerLevel` in tests can now receive additional appenders. The resulting logger has `additivity` enabled and so the configured appenders are added to the existing one (the file appender that logs DEBUG logs and higher to `target/trace.log` and the console appender that logs WARN logs and higher to the console).

For example, the following logger will print INFO logs to the console:
```Java
@LoggerLevel(klass = DBSSession.class, level = "TRACE", appenders = NuxeoLoggingConstants.APPENDER_CONSOLE_INFO)
```
Thus, you will have slow DBS queries printed to the console.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32836](https://jira.nuxeo.com/browse/NXP-32836)

## Add Amazon S3 Client-Side Encryption With AWS KMS Managed Keys


AWS S3 Client-side encryption with KMS is now possible.

AWS KMS client-side encryption can be enabled by defining a KMS key ID with the following property:
```Java
nuxeo.s3storage.crypt.kms.clientside.key=your-kms-key-id
```
Optionally, specify the region of the KMS key if it differs from the one in the environment or bucket:
```Java
nuxeo.s3storage.crypt.kms.clientside.region=your-kms-key-region
```

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32760](https://jira.nuxeo.com/browse/NXP-32760)

## Implement Nuxeo SCIM 2.0 Update Endpoint for Groups


The PATCH method is available for the /scim/v2/Groups/{id} endpoint.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32747](https://jira.nuxeo.com/browse/NXP-32747)

## Fix Inline Parameter Not Working When Direct Download Enabled


Blobs are now displayed in the browser with inline parameter and S3 direct download.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32451](https://jira.nuxeo.com/browse/NXP-32451)


# Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/secure/ReleaseNote.jspa?projectId=10011&version=23024) is available in our bug tracking tool.

{{! /multiexcerpt}}
