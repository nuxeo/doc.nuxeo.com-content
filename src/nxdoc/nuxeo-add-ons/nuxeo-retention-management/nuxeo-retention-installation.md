---
title: Installation and Configuration
description: Learn how to install and configure the Nuxeo Retention addon.
review:
    comment: ''
    date: '2019-08-05'
    status: 'ok'
labels:
    - lts2019-wip
    - grenard
    - jaubenque
    - retention-management
tree_item_index: 300
is_overview: true
---

## Before You Start

This section gives all the necessary steps to install the Retention Management addon with both standard and strict (formerly known as compliance) modes.

{{#> callout type='info' heading=' '}}
Picking a mode and an architecture is an impactful decision. Please consider it carefully depending both on your current and future usage.
{{/callout}}


## {{> anchor 'configuration-modes'}} Configuration Modes

The Nuxeo Retention Management addon offers 2 modes:
 - **Standard mode**: This mode is made for maximum flexibility, and will be our usual recommendation. It offers multiple architecture choices depending on your compliance needs and allows using all the retention features with all the storage options supported by Nuxeo Platform. Compliance with SEC Rule 17a-4 is supported: WORM storage is an option.

 - **Strict mode (formerly known as compliance mode)**: this mode is designed for companies who want to use their whole Nuxeo instance as a records management solution holding SEC-17A4 compliant records first and foremost, planning limited use beyond this use case. Using it as is provides the benefit of being certified with SEC Rule 17A-4 compliance out of the box, at the cost of some functional [limitations](#limitations). This mode requires the usage of Amazon S3 object lock in [compliance mode]({{page page='nuxeo-retention-installation'}}#s3-configuration-requirements) for WORM storage support.

## Standard Mode Specificities

Standard mode is designed for companies that want to manage retention, records and legal hold as a part of their use cases. It is meant to adapt smoothly to your needs, with an emphasis on flexibility to adapt to an always evolving regulatory landscape.

### Storage

In standard mode, you can use all the [file storages]({{page page='file-storage'}}) supported by Nuxeo Platform. As part of the supported storages, you can use Amazon S3, including with Object Lock:

- in "Governance" mode
- in "Compliance" mode for WORM storage support

{{#> callout type='info' heading=' '}}
Compliance with SEC-17A4 requires usage of Amazon S3 Object Lock in compliance mode.
{{/callout}}

Please refer to the [**Amazon S3 Object Lock**](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock.html)) documentation for additional information about them.

### Undeclaring a Record

In standard mode, it is possible to undeclare records that do not require full compliance with regulations like SEC-17A4.

A record manager can allow undeclaring a record as an option in a retention rule. Provided that the retention rule allows for it and that a user has the **UnsetRetention** permission on the record, then this user can undeclare the record.

Undeclaring a record is traced in the audit for compliance purpose. 

### {{> anchor 'deletion-role'}} Special Role for Deleting a Record

In standard mode, the users belonging to the **NuxeoRecordCleaners** group are allowed to delete documents under retention or legal hold. These users must still have the **Remove** permission granted on the documents to be deleted. The **NuxeoRecordCleaners** group does not exist by default, it must be created manually.

The **NuxeoRecordCleaners** group has been introduced in **LTS 2021-HF07**.


## Strict (formerly known as compliance) Mode Specificities

Strict mode is designed to be used when your Nuxeo instance will be mostly holding records, and when all these records must be compliant with the SEC-17A4 regulation. An instance in strict mode used as is comes certified with SEC-17A4, at the cost of some functional limitations.

### Secured Storage

The SEC 17a-4 US regulation involves the usage of a secured storage media as part of the requirements to be compliant. Therefore, using the strict mode requires the usage of a SEC 17A-4 compatible storage solution.

The Nuxeo Retention Management addon is using Amazon S3 Object Lock in "Compliance mode", to fit with this requirement.

Amazon S3 Object Lock compliance mode (see [**Amazon S3 Object Lock**](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock.html)) guarantees that no one can delete an object which is under retention or legal hold. Amazon S3 is provided with the retention period and/or legal hold information by Nuxeo, and ensures that no changes or deletions can occur during this period.

### {{> anchor 'limitations'}}Limitations

In strict mode, the Nuxeo Retention Management addon does not support **attachments**, **versioning**, and **comments**.

Those features **are automatically disabled** for the full instance when the Nuxeo Retention Management addon is added to Nuxeo Server (the related facets and the **file** schema are disabled). So, once the addon is installed, there is no way to add a comment, an attachment or to create a version to a document, whether they are standard documents or records.


//TODO move below to functional side for each mode

### Irreversibility of Some Actions

To allow compliance with the SEC 17a-4 regulation requirements regarding records preservation, most of the actions related to the retention are **not reversible** when using enforced retention:

- There is no way to roll back the application of a retention rule to a document, even as an administrator (in standard mode, records can be undeclared in specific conditions).
- There is no way to shorten a retention duration, even as an administrator.
- There is no way to delete a document under retention or legal hold, even as an administrator and even with a direct access to the storage when using Amazon S3 object lock in compliance mode.
- There is no way to replace a document under retention or legal hold, even as an administrator and even with a direct access to the storage when using Amazon S3 object lock in compliance mode.
</br>

### Compliance to SEC 17a-4

Nuxeo can't guarantee the compliance to SEC 17a-4 in the event that:

- The installation/configuration recommendations are not applied.
- The developments added by a partner or a customer would interfere with the regulatory requirements and Nuxeo Retention Management addon behavior (for example: reintroduce disabled features).

<div class="row" data-equalizer data-equalize-on="medium">
<div class="column medium-6">
{{#> panel type='secondary' match_height='true'}}
### [<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;Standard mode]({{page page='nuxeo-retention-installation-standard'}})
{{/panel}}
</div>

<div class="column medium-6">
{{#> panel type='secondary' match_height='true'}}
### [<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;Compliance mode]({{page page='nuxeo-retention-installation-compliance'}})
{{/panel}}
</div>
</div>
