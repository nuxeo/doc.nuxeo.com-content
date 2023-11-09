---
title: Nuxeo Mail Amazon SES
description: The Nuxeo Mail Amazon SES addon allows you to send mails via AWS SES. To do so, it adds a Nuxeo MailSender implementation specific to Amazon SES which overrides the default SMTPMailSender and leverages the Nuxeo MailService.
tree_item_index: 350
---

The [Nuxeo Mail Amazon SES](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-mail-amazon-ses) addon allows you to send mails via [AWS SES](https://docs.aws.amazon.com/ses). To do so, it adds a Nuxeo `MailSender` implementation specific to Amazon SES which overrides the `"default"` `SMTPMailSender` and leverages the Nuxeo `MailService`.

## Before You Start

You should be familiar with Amazon AWS and in possession of your credentials and region.
You should also be familiar with [SES reputation](https://docs.aws.amazon.com/ses/latest/dg/monitor-sender-reputation.html) and [identity verification](https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html).

{{#> callout type='tip'}}
Knowing how to use the [SES Simulator](https://docs.aws.amazon.com/ses/latest/dg/send-an-email-from-console.html) and being aware of the [SES sandbox](https://docs.aws.amazon.com/ses/latest/dg/request-production-access.html) limitations is a nice-to-have.
{{/callout}}

## Installation

{{{multiexcerpt 'MP-installation-easy' page='Generic Multi-Excerpts'}}}

{{#> callout type='info' }}
The `ses` template leverages the `aws` template and its configuration (see below).
{{/callout}}

## Nuxeo Configuration

To configure the package, you will need to provide values for some configuration parameters defined in the `aws` template.
You can configure the package using the `nuxeo.conf` properties described below.

### Specifying Your AWS Credentials and Region

#### Default AWS Credentials and Region

By default, Nuxeo will get your `"default"` [configuration](../amazon-s3-online-storage/#nuxeo-configuration) by leveraging the following properties in `nuxeo.conf`:

{{{multiexcerpt 'aws-config-credentials' page='amazon-s3-online-storage'}}}

However, if those are not set, the fallback mechanism will use the [DefaultAWSCredentialsProviderChain](https://docs.aws.amazon.com/AWSJavaSDK/latest/javadoc/com/amazonaws/auth/DefaultAWSCredentialsProviderChain.html). So it will first look for the following envs (and so on with the fallbacks):
```
AWS_ACCESS_KEY_ID=your_AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY=your_AWS_SECRET_ACCESS_KEY
AWS_REGION=your_AWS_REGION
```

#### SES specific AWS Credentials

You can also use specific AWS Credentials with SES.
To do so, you need to contribute a configuration on the following extension:

```xml
<extension target="org.nuxeo.runtime.aws.AWSConfigurationService" point="configuration">
  <configuration id="mySESspecificConfigId">
    <accessKeyId>your_AWS_ACCESS_KEY_ID</accessKeyId>
    <secretKey>your_AWS_SECRET_ACCESS_KEY</secretKey>
    <region>your_AWS_REGION</region>
  </configuration>
</extension>
```

Then you need to point to that configuration in your `nuxeo.conf`:
```
nuxeo.ses.aws.configuration.id=mySESspecificConfigId
```

#### Default mail.from

The default `SESMailSender` configuration will send mails from your `mail.from` nuxeo.conf property. This can be customized by [contributing a custom SESMailSender](#customContribution).

### {{> anchor 'customContribution'}} Contributing a custom `SESMailSender`

The [Nuxeo Mail Amazon SES](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-mail-amazon-ses) addon can be customized by contributing to the `MailServiceComponent`'s `senders` extension point.
You can specify the following properties:

- awsConfigurationId (if absent, "default" will be used)
- mail.from (required, [verified email](https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#just-verify-email-proc))

Here is an example of contribution:

```xml
<?xml version="1.0"?>
<component name="org.acme.mail.component" version="1.0">
  <!-- uncomment this if you wish to override your SES default configuration but then the sender name attribute should be "default" -->
  <!-- <require>org.nuxeo.mail.sender.amazon.ses</require> -->
  <extension target="org.nuxeo.mail.MailServiceComponent" point="senders">
    <!-- The name attribute identifies the sender, if you override the default sender, set it to "default" -->
    <sender name="myCustomSender" class="org.nuxeo.mail.amazon.ses.SESMailSender">
      <!-- if absent, your "default" aws configuration will be used -->
      <property name="awsConfigurationId">myCustomConfig</property>
      <!-- required, the mail.from your sender will use by default -->
      <property name="mail.from">my@verified.mail</property>
    </sender>
  </extension>
</component>

```

To use your "myCustomSender", you need to set it when building the mails:
```java
// Builds a mail to to@some.one from your default mail.from with the default sender. The default mail.from can be set up in nuxeo.conf.
new MailMessage.Builder("to@some.one").build();
// Builds a mail to to@some.one from another@verified.mail with the myCustomSender sender.
new MailMessage.Builder("to@some.one").from("another@verified.mail").sender("myCustomSender").build();
```
