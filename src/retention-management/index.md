---
title: Nuxeo Retention Management
description: The retention management module offers the necessary features to cover all the aspects of data/retention management to fulfill legal requirement.
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
tree_item_index: 3000
private: true
---

{{! excerpt}}
The retention management module lets you cover all the aspects of data/retention management to fulfill legal requirements. It includes management of records, retention rules, the deletion of the document at a specific date and legal case management features, such as putting document under legal hold and/or retention depending on a specific event or metadata and searching for a retention rules.
{{! /excerpt}}

## Concept

**Retention management** is the term used to define the fact to control the life cycle of a document using rules and policies.</br>
It describes the process of keeping or deleting documents under a set of circumstances not necessarily bounded by time, but to an event or a specific metadata on your document type.

Nuxeo Retention Management addon lets you controls document that need to be retained over time. This module is meant to be used in highly regulated environment and on multiple document types, such as File, Audio, Video and Picture.


## Compliance to the SEC Rule 17a-4

**SEC Rule 17a-4** is a regulation issued by the U.S. Securities and Exchange Commission which is an independent agency of the United States federal government.
This regulation contains requirements mainly for retention, legal hold, and accessibility of the records for organizations dealing in the trade or brokering of financial securities such as stocks, bonds, and futures.

The Nuxeo Retention addon has been designed to be fully compliant with this regulation.

## Main principles
### Record

The **ISO 15489 Information and documentation -- Records management** defines a record as "information created, received, and maintained as evidence and as an asset by an organization or person, in pursuit of legal obligations or in the transaction of business". While the main usage of a record is to serve as an evidence, it can have many purpose as preserving the company memory.

Depending on legal requirement or organization needs, a record has to be retained for some time period while it **can't be deleted** even at API or storage level.

On the Nuxeo Retention Management addon, a document is automatically declared as a record when a retention rule or a legal hold is applied on it (cf. following chapters).

### {{> anchor 'retention-rules'}}Retention Rules

A retention rule is a set of parameters which define the retention policy to be applied to the documents.

Those rules includes 3 main parameters:

  - the **retention period** (how long the record must be immutable)

  - the **retention type** (time based, event based, or metadata based retention)

  - the **post retention actions** (which action(s) to be automatically done once the retention has expired)

A retention rule can be applied to one document or a list of documents.

Once a retention rule is applied to the document, the document can still be downloaded and exported but it **can't be edited, replaced, or deleted** until the retention has expired.

### {{> anchor 'legal-hold'}}Legal Hold

Due to a litigation, audit or investigation, an organization must have to preserve some information for an indeterminate period in order to prevent any spoliation of evidence by changing or updating content.

The legal hold acts like a lock action once activated, the main document **can't be deleted** even at API or storage level.

The document can still be downloaded and exported but it **can't be edited, or replaced**.

Here the main differences between retention and legal hold:

  - The retention rules are defined as part of the organization, based on legal requirements, company policy,... and are included in the standard lifecycle of the content. A legal hold is unpredictable and more a special event.

  - The retention rules preserved data for a specified period compared to a legal hold which preserve data indefinitely until the legal hold is removed

  - A legal hold has priority over a retention rule. For instance, if a retention expires during a legal hold, the record keeps immutable until the legal hold is removed  

### {{> anchor 'audit-trail'}}Audit Trail

An audit trail (or audit log) provides a full history of a document from his creation until his disposal.

Regarding the Nuxeo Retention Management addon, the goal is to provide an audit system for both the original record and associated metadata file to account for the:

  - Initial capture and storage of the record object and metadata.

  - Changes to the index and metadata. (Note that the record object must be immutable. Certain metadata, such as unique object identifier and creation/storage date and time must also be immutable.)

  - Changes to the retention and legal hold attributes:

      - Changes to the retention rule, itself.
      - Application of a retention rule to a given document.
      - Application of a legal hold to a given document.</br>
</br>
  - Deletion of record object, metadata and audit trail data.


### Secured storage

As part of the SEC 17a-4 requirement, the Nuxeo Retention Management addon supports the usage of a secure storage media, Amazon S3 in compliance mode in this case.

This mode of Amazon S3 (cf. Amazon S3 Object Lock) guarantees that no one can delete an object which is under retention or legal hold. To do so, Nuxeo provides to Amazon S3 the retention period and/or legal hold to Amanzon S3, which then ensure any change or deletion of the content.

## Limitations

The Nuxeo Retention Management addon doesn't support the following features:

  - The versioning
  - The attachments

The attachments features is automatically disabled when the Nuxeo Retention Management addon is added to Nuxeo Server.

The versioning must be turn off during the [setup]({{page page='nuxeo-retention-installation'}}).

## Warning

### Caution on the irreversibility of some actions

Due to the SEC 17a-4 regulation requirements regarding the records preservation, most of the actions related to the retention are **not reversible**:

  - There is no way to rollback the application of a retention rule to a document, even for an administrator.

  - There is no way to shorten a retention duration, even for an administrator.

  - There is no way to delete a document under retention or legal hold, even for an administrator and even at S3 level (direct access to the storage).

  - There is no way to replace a document under retention or legal hold, even for an administrator and even at S3 level (direct access to the storage).
</br>

### Compliance to SEC 17a-4

Nuxeo can't guarantee the compliance to SEC 17a-4 in case of:

  - The [installation / Configuration]({{page page='nuxeo-retention-installation'}}) recommendations are not applied

  - Some specific developments are added to the UI or Retention features

</br>

* * *

<div class="row" data-equalizer data-equalize-on="medium">
<div class="column medium-6">
{{#> panel type='secondary' match_height='true'}}
### Functional Overview



[More&nbsp;<i class="fa fa-long-arrow-right" aria-hidden="true"></i>]({{page page='nuxeo-retention-functional-overview'}})
{{/panel}}
</div>

<div class="column medium-6">
{{#> panel type='secondary' match_height='true'}}
### Installation / Configuration


[More&nbsp;<i class="fa fa-long-arrow-right" aria-hidden="true"></i>]({{page page='nuxeo-retention-installation'}})
{{/panel}}
</div>

</div>
