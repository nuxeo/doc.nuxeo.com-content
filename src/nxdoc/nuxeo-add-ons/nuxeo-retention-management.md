---
title: Nuxeo Retention Management
description: The retention management module covers all the necessary aspects of retention management to fulfill legal requirements.
review:
    comment: ''
    date: '2019-08-05'
    status: 'ok'
labels:
    - lts2019-wip
    - grenard
    - jaubenque
    - retention-management
toc: true
tree_item_index: 2530
private: true
---

{{! excerpt}}
The Nuxeo Retention Management addon covers all the necessary aspects of retention management to fulfill legal requirements. It includes management of records, retention rules, deletion of the document at a specific date and legal case management features, such as putting documents under legal hold and/or retention depending on a specific event or metadata and searching for a retention rule.
{{! /excerpt}}

## Concept

**Retention management** refers to the control of a document's lifecycle through rules and policies. Documents can be kept or deleted depending on a set of rules which may pertain to time, events or specific metadata contained in the document type.

## {{> anchor 'sec-rule-17a4'}} SEC Rule 17a-4 Compliance

**SEC Rule 17a-4** is a regulation issued by the U.S. Securities and Exchange Commission which is an independent agency of the United States federal government.
This regulation contains requirements mainly for retention, legal hold, and accessibility of the records for organizations dealing in the trade or brokering of financial securities such as stocks, bonds, and futures.

The Nuxeo Retention Management addon has been designed to be fully compliant with this regulation.

## {{> anchor 'configuration-modes'}} Configuration Modes

The Nuxeo Retention Management addon allows 2 modes:
 - **Standard mode**: this is the default mode when installing the addon. It allows using all the retention features with all storage media supported by Nuxeo Platform. This mode is not compliant with [SEC Rule 17a-4]({{page page='index'}}#sec-rule-17a4).
 - **Compliance mode**: this mode is required to be compliant with [SEC Rule 17a-4]({{page page='index'}}#sec-rule-17a4). It offers the same features than the standard mode but it requires the usage of Amazon S3 [Compliance mode]({{page page='nuxeo-retention-installation'}}#s3-configuration-requirements). It also involves some functional [limitations]({{page page='index'}}#limitations).

## Main Principles

### Record

**ISO 15489 Information and documentation -- Records management** defines a record as:
> information created, received, and maintained as evidence and as an asset by an organization or person, in pursuit of legal obligations or in the transaction of business.

While the main usage of a record is to serve as evidence, it can have many purposes as preserving the company memory.

Depending on legal requirements or organizational needs, a record may need to be retained for a period during which it **cannot be deleted**, even at API or storage level.

With the Nuxeo Retention Management addon, a document is automatically declared a record when a retention rule or a legal hold is applied to it.

### {{> anchor 'retention-rules'}}Retention Rules

A retention rule is a set of parameters which defines the retention policy to be applied to the documents.

A rule includes three parameters:
  - **Retention period**: how long the record must be immutable
  - **Retention type**: how the retention end date is calculated. It can be an immediate, event-based or metadata-based retention rule
  - **Post-retention actions**: action(s) to be performed automatically once the retention period has expired

A retention rule can be applied to one document or a list of documents.

Once a retention rule is applied to a document, it can still be downloaded and exported but it **can't be edited, replaced, or deleted** until the retention has expired.

### {{> anchor 'legal-hold'}}Legal Hold

In the event of litigation, audit or investigation, an organization may have to preserve certain information for an indeterminate period in order to prevent any spoliation of evidence by changing or updating content.

The legal hold acts as a lock action once activated; the main document **can't be deleted**, even at API or storage level.

The document can still be downloaded and exported but it **can't be edited, replaced, or deleted**.

Here are the main differences between **retention** and **legal hold**:

- Retention rules are defined as part of the organization, based on legal requirements, company policy and other factors and are included in the standard lifecycle of a document. A legal hold is an unpredictable and more unique event.

- Retention rules preserve data for a specified period, whereas a legal hold preserves data indefinitely until the legal hold is removed.

- A legal hold takes priority over a retention rule. For instance, if a retention expires during a legal hold, the record stays immutable until the legal hold is removed.

### {{> anchor 'audit-trail'}}Audit Trail

An audit trail (or audit log) provides the full history of a document from its creation until its disposal.

The Nuxeo Retention Management addon provides an audit system for both the original record and associated metadata file to account for:

- Initial capture and storage of the record object and metadata.

- Changes to the index and metadata.

{{#> callout type='info' heading=' '}}
Note that the record object must be immutable. Specific metadata, such as unique object identifier and creation/storage date and time must also be immutable.
{{/callout}}

- Changes to the retention and legal hold attributes:

    - Changes to the retention rule itself.
    - Application of a retention rule to a given document.
    - Application of a legal hold to a given document.</br>
</br>
- Deletion of record object, metadata and audit trail data.

## Compliance Mode Specificities

### Secured Storage

The SEC 17a-4 US regulation involves the usage of a secured storage media as part of the requirements to be compliant.

The Nuxeo Retention Management addon is using Amazon S3 in "Compliance mode", to fit with this requirement.

Amazon S3 compliance mode (see [**Amazon S3 Object Lock**](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock.html)) guarantees that no one can delete an object which is under retention or legal hold. Amazon S3 is provided with the retention period and/or legal hold information by Nuxeo, and ensures that no changes or deletions can occur during this period.

### {{> anchor 'limitations'}}Limitations

In Compliance mode, the Nuxeo Retention Management addon does not support **attachments**, **versioning**, and **comments**.

Those features **are automatically disabled** for the full instance when the Nuxeo Retention Management addon is added to Nuxeo Server (the related facets and the **file** schema are disabled). So, once the addon is installed, there is no way to add a comment, an attachment or to create a version to a document, whatever if they are standard documents or records.

## Warnings

### Irreversibility of Some Actions

Due to the SEC 17a-4 regulation requirements regarding records preservation, most of the actions related to the retention are **not reversible**:

- There is no way to roll back the application of a retention rule to a document, even as an administrator.

- There is no way to shorten a retention duration, even as an administrator.

- There is no way to delete a document under retention or legal hold, even as an administrator and even at S3 level (direct access to the storage).

- There is no way to replace a document under retention or legal hold, even as an administrator and even at S3 level (direct access to the storage).
</br>

### Compliance to SEC 17a-4

Nuxeo can't guarantee the compliance to SEC 17a-4 in the event that:

- The installation/configuration recommendations are not applied.
- The developments added by a partner or a customer would interfere with the regulatory requirements and Nuxeo Retention Management addon behavior (for example: reintroduce disabled features).

* * *

<div class="row" data-equalizer data-equalize-on="medium">
<div class="column medium-4">
{{#> panel type='secondary' match_height='true'}}
### [Installation&nbsp;<i class="fa fa-long-arrow-right" aria-hidden="true"></i>]({{page page='nuxeo-retention-installation'}})
{{/panel}}
</div>

<div class="column medium-4">
{{#> panel type='secondary' match_height='true'}}
### [Functional Overview&nbsp;<i class="fa fa-long-arrow-right" aria-hidden="true"></i>]({{page page='nuxeo-retention-functional-overview'}})
{{/panel}}
</div>

<div class="column medium-4">
{{#> panel type='secondary' match_height='true'}}
### [Technical Overview&nbsp;<i class="fa fa-long-arrow-right" aria-hidden="true"></i>]({{page page='nuxeo-retention-technical-overview'}})
{{/panel}}
</div>

</div>
