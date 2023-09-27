---
title: Installation and Configuration
description: Learn how to install and configure the Nuxeo Retention addon.
review:
    comment: ''
    date: '2023-09-13'
    status: 'ok'
labels:
    - grenard
    - bchauvin
    - retention-management
tree_item_index: 100
is_overview: true
---

## Before You Start

This section gives all the necessary steps to install the Retention Management addon either in standard or strict (formerly known as compliance) mode.

{{#> callout type='info'}}
Picking a mode and an architecture is an impactful decision. Please consider it carefully depending both on your current and future usage.
{{/callout}}

{{#> callout type='info'}}
{{! multiexcerpt name='storage-support'}}
Using the Retention Management addon requires [storing files in Amazon S3]({{page page='amazon-s3-online-storage'}}). Other cloud platforms or storage options are not supported.
{{! /multiexcerpt}}
{{/callout}}

## {{> anchor 'configuration-modes'}} Configuration Modes

The Nuxeo Retention Management addon offers 2 modes:
 - **Standard mode**: This mode is made for maximum flexibility, and will be our usual recommendation. It offers multiple architecture choices depending on your compliance needs and allows using all the features of Nuxeo Server. Compliance with SEC Rule 17a-4 is supported: WORM storage is an option.

 - **Strict mode (formerly known as compliance mode)**: this mode is designed for companies who want to use their whole Nuxeo instance as a records management solution holding SEC-17A4 compliant records first and foremost, planning limited use beyond this use case. Using it as is provides the benefit of being certified with SEC Rule 17A-4 compliance out of the box, at the cost of some functional [limitations](#limitations). This mode requires the usage of Amazon S3 Object Lock in [compliance mode]({{page page='nuxeo-retention-installation'}}#s3-configuration-requirements) for WORM storage support.

## Standard Mode Specificities

Standard mode is designed for companies that want to manage retention, records and legal hold as a part of their use cases. It is meant to adapt smoothly to your needs, with an emphasis on flexibility to adapt to an always evolving regulatory landscape.

Compliance with SEC-17A4 requires that you leverage a specific set of features.

### Storage

In standard mode you can use Amazon S3, with or without the Object Lock option. Object Lock is supported:

- in "governance" mode
- in "compliance" mode, for WORM storage support

{{#> callout type='info'}}
Compliance with SEC-17A4 requires usage of Amazon S3 Object Lock in compliance mode.
{{/callout}}

Please refer to the [**Amazon S3 Object Lock**](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock.html) documentation for additional information about the different modes.

### Undeclaring a Record

In standard mode, it is possible to undeclare records that do not require full compliance with regulations like SEC-17A4.

A record manager can allow undeclaring a record as an option in a retention rule. Provided that: 
- The retention rule allows for it 
- A user has both the `Write` and the `UnsetRetention` permissions on the record 
- The record was never put under legal hold

then this user can undeclare the record.

Undeclaring a record is traced in the audit for compliance purpose, and triggers an event that can be leveraged to execute custom business logic. You can learn more about this option in our [how to undeclare a record]({{page page='nuxeo-retention-howto-undeclare-record'}}) documentation.

This feature requires **LTS 2021-HF43** or above and the Nuxeo Retention Management addon in version **2021.4.5** or above.

### {{> anchor 'deletion-role'}} Special Role for Deleting a Record

In standard mode, the users belonging to the **NuxeoRecordCleaners** group are allowed to delete documents under retention or legal hold. These users must still have the **Remove** permission granted on the documents to be deleted. The **NuxeoRecordCleaners** group does not exist by default, it must be created manually.

The **NuxeoRecordCleaners** group has been introduced in **LTS 2021-HF07**.

{{#> callout type='warning'}}
Compliance with SEC-17A4 requires that you do NOT leverage this feature, even if the files will be stored in WORM storage and cannot be deleted during their retention period.
{{/callout}}


## Strict (formerly known as compliance) Mode Specificities

Strict mode is designed to be used when your Nuxeo instance will be mostly holding records, and when all these records must be compliant with the SEC-17A4 regulation. An instance in strict mode used as is comes certified as compliant with SEC-17A4, at the cost of some functional limitations.

### Secured Storage

The SEC 17a-4 US regulation involves the usage of a secured storage media as part of the requirements to be compliant. Therefore, using the strict mode requires the usage of a SEC 17A-4 compatible storage solution.

The Nuxeo Retention Management addon is using Amazon S3 Object Lock in "Compliance mode", to fit with this requirement.

Amazon S3 Object Lock in compliance mode (see [**Amazon S3 Object Lock**](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock.html)) guarantees that no one can delete an object which is under retention or legal hold. Amazon S3 is provided with the retention period and/or legal hold information by Nuxeo, and ensures that no changes or deletions can occur during this period.

### {{> anchor 'limitations'}}Limitations

In strict mode, the Nuxeo Retention Management automatically disables support for **attachments**, **versioning**, and **comments** for the **whole instance** (i.e., not only for records but for ALL documents).

Technically, these changes happen by disabling the related facets and the `files` schema. So, once the addon is installed, there is no way to add a comment, an attachment or to create a version to a document, whether they are standard documents or records.

### Compliance to SEC 17a-4

Nuxeo can't guarantee the compliance to SEC 17a-4 in the event that:

- The installation/configuration recommendations are not applied.
- The developments added by a partner or a customer would interfere with the regulatory requirements and Nuxeo Retention Management addon behavior (for example: reintroduce disabled features like support for attachments through the use of a custom property).

<div class="row" data-equalizer data-equalize-on="medium">
<div class="column medium-6">
{{#> panel type='secondary' match_height='true'}}
### [<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;Installation in standard mode]({{page page='nuxeo-retention-installation-standard'}})
{{/panel}}
</div>

<div class="column medium-6">
{{#> panel type='secondary' match_height='true'}}
### [<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;Installation in strict mode]({{page page='nuxeo-retention-installation-compliance'}})
{{/panel}}
</div>
</div>
