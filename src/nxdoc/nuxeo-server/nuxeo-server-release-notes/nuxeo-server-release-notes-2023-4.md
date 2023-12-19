---
title: LTS 2023.4 / LTS 2023-HF04
description: Discover what's new in LTS 2023.4 / LTS 2023-HF04
review:
   comment: ''
   date: '2023-11-02'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 0
---

{{! multiexcerpt name='nuxeo-server-updates-2023-4'}}
# What's New in LTS 2023.4 / LTS 2023-HF04

## Deactivate Optimistic Types to Speedup Nashorn Script Compilation


Nashorn javascript compilation has been tuned.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32134](https://jira.nuxeo.com/browse/NXP-32134)

## Management API Running Administration Bulk Action Should Be Marked as Exclusive


Management endpoints for long administratives tasks are now exclusive.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32126](https://jira.nuxeo.com/browse/NXP-32126)

## Add Ecm:isVersion Missing Aggregate Fields


Elasticsearch aggregates on ecm:isVerison are now returned by the Rest API.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32121](https://jira.nuxeo.com/browse/NXP-32121)

## Fix BulkStatus Result Map Merge Overflow on Numbers


The `deletedSize` and `totalSize` of the bulk status result returned by Blob GC are now correct.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32112](https://jira.nuxeo.com/browse/NXP-32112)

## Add a Bulk Action Option for Exclusive Action


There is a new flag for Bulk Action so that only one of such command can be scheduled and run at a time.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32091](https://jira.nuxeo.com/browse/NXP-32091)

## Prevent Concurrent Requests When Reassigning/Delegating a Task


Tasks are now reassigned/delegated automatically.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32083](https://jira.nuxeo.com/browse/NXP-32083)

## Amazon SES Mail Sender Implementation


Nuxeo can now send mails through Amazon SES.
To do so, users need to install the `nuxeo-mail-amazon-ses-package` which will activate the `aws-ses` template and override their default `MailSender`.

This will leverage the default AWS configuration unless users use the following nuxeo conf:
```
nuxeo.ses.aws.configuration.id=<myCustomConfId>
```
 

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32079](https://jira.nuxeo.com/browse/NXP-32079)

## Fix Incremental Blob GC When Async Digest Is Enabled


In case of async digest computation, the old blob is not garbage collected by the regular GC

A new boolean parameter is available in the **setBlob** method of low-level documents to not garbage collect old blob references if any. This parameter is leveraged when replacing the blob digest which only occurs when asynchronous blob digest is enabled.

The asynchronous blob digest computation keeps handling the old blob deletion later on through the **org.nuxeo.ecm.core.blob.BlobDeleteListener**.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32061](https://jira.nuxeo.com/browse/NXP-32061)

## Factorize Email Sending Code


Introducing a new MailService leveraging contributable MailSenders to send MailMessages.

# Introducing a new MailService leveraging contributable MailSenders to send MailMessages
## Configuration

SMTPMailSender, the provided implementation of MailSender comes as default sender and will leverage the following nuxeo conf:
- mail.debug
- mail.from
- mail.transport.protocol
- mail.transport.host
- mail.transport.port
- mail.transport.auth
- mail.transport.user
- mail.transport.password
- mail.transport.usetls
- mail.transport.ssl.protocol

## Contributing

Users can contribute their own MailSender like so:
```xml
<?xml version=1.0?>
<component name=org.nuxeo.mail.my.sender.contrib>
  <extension target=org.nuxeo.mail.MailServiceComponent point=senders>

    <sender name=mySender class=org.nuxeo.mail.SMTPMailSender>
      <property name=mail.transport.protocol>smtp</property>
      <property name=mail.smtp.host>127.0.0.1</property>
      <property name=mail.smtp.port>587</property>
      <property name=mail.from>noreply@nuxeo.com</property>
    </sender>

  </extension>
</component>
```


<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32029](https://jira.nuxeo.com/browse/NXP-32029)

## Install ARM Compatible Tools in Nuxeo Docker Image


The Nuxeo 2023 Docker image is available for ARM architectures, without LibreOffice support. Ghostscript was upgraded to 9.54.0.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31815](https://jira.nuxeo.com/browse/NXP-31815)

## Add a Bulk Action Option for Sequential Processing


There is a new flag for Bulk Action to avoid concurrency within a bulk command processing.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30985](https://jira.nuxeo.com/browse/NXP-30985)


# Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/secure/ReleaseNote.jspa?projectId=10011&version=22527) is available in our bug tracking tool.

{{! /multiexcerpt}}
