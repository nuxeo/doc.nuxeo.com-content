---
title: Nuxeo Retention Management
description: The retention management addon covers all the necessary aspects of retention management to fulfill legal requirements.
review:
    comment: ''
    date: '2023-09-05'
    status: 'ok'
labels:
    - grenard
    - bchauvin
    - retention-management
toc: true
tree_item_index: 2530
---

{{! excerpt}}
The Nuxeo Retention Management addon covers all the necessary aspects of retention management to fulfill legal requirements. It includes: 
- Records management related features such as defining and enforcing retention rules based on events or dates
- Legal case management features such as managing legal holds
- Reporting and searching capabilities for the above to monitor and prove compliance
{{! /excerpt}}

This page intends to make you familiar with the underlying concepts used by the addon, that will be used throughout the documentation.

## Concepts

As a large company, you want to centralize content coming from different business entities and compliance is a requirement. Your content will have varying requirements when it comes to managing its retention and its lifecycle. Different regulations may apply to it. These regulations will evolve over time, and new ones will appear regularly.

The Nuxeo Retention Management addon is designed to provide maximum flexibility to adapt to an always evolving legal landscape. Combined with the flexibility of Nuxeo Server, it makes it easy to automate your records management needs, facilitates proving that you are compliant and remaining compliant.

The Nuxeo Retention Management addon has been designed for maximum security as well, allowing full compliance with the SEC-17A4 regulation.

## Main Principles

Using the Nuxeo Retention Management addon requires to become familiar with the following concepts.

### {{> anchor 'sec-rule-17a4'}} SEC Rule 17a-4 Compliance

**SEC Rule 17a-4** is a regulation issued by the U.S. Securities and Exchange Commission which is an independent agency of the United States federal government. This regulation contains requirements mainly for retention, legal hold, and accessibility of the records for organizations dealing in the trade or brokering of financial securities such as stocks, bonds, and futures.

The Nuxeo Retention Management addon is designed to be compliant with this regulation.

### Record

**ISO 15489 Information and documentation -- Records management** defines a record as:
> information created, received, and maintained as evidence and as an asset by an organization or person, in pursuit of legal obligations or in the transaction of business.

While the main usage of a record is to serve as evidence, it can have many purposes as preserving the company memory. Depending on legal requirements or organizational needs, a record may need to be retained for a period during which it **cannot be deleted**, even at API or storage level.

With the Nuxeo Retention Management addon, a document is automatically declared a record when a retention rule or a legal hold is applied to it.

### {{> anchor 'retention-rules'}}Retention Rules

A retention rule is a set of parameters which defines the retention policy to be applied to the documents.

A rule includes three main parameters:
  - **Retention period**: how long the record must be immutable
  - **Retention type**: how the retention end date is calculated. It can be an immediate, event-based or metadata-based retention rule
  - **Post-retention actions**: action(s) to be performed automatically once the retention period has expired

A retention rule can be applied to one document or a list of documents.

Once a retention rule is applied to a document, it is considered a record. As such, its main file can still be downloaded and exported but it **can't be edited, replaced, or deleted** until the retention has expired. Additional document properties can also be put under retention to follow the same principles, and the document itself cannot be deleted.

### {{> anchor 'legal-hold'}}Legal Hold

In the event of litigation, audit or investigation, an organization may have to preserve certain information for an indeterminate period in order to prevent any spoliation of evidence by changing or updating content.

The legal hold acts as a lock action once activated; the main file **can't be deleted**, even at API or storage level if you configured the addon to use WORM storage.

When a document is under legal hold, the main file of the document can still be downloaded and exported but it **can't be edited, replaced, or deleted**. Additional document properties can also follow the same principles, and the document itself cannot be deleted.

Here are the main differences between **retention** and **legal hold**:

- Retention rules are defined as part of the organization, based on legal requirements, company policy and other factors and are included in the standard lifecycle of a document. A legal hold is an unpredictable and more unique event.

- Retention rules preserve data for a specified period, whereas a legal hold preserves data indefinitely until the legal hold is removed.

- A legal hold takes priority over a retention rule. For instance, if a retention expires during a legal hold, the record stays immutable until the legal hold is removed.

### {{> anchor 'audit-trail'}}Audit Trail

An audit trail provides the full history of a document from its creation until its disposal. The Nuxeo Retention Management addon provides an audit system for both the original record and associated metadata file to account for:

- Initial capture and storage of the record object and metadata
- Changes to the index and metadata

{{#> callout type='info'}}
Note that the record object must be immutable. Specific metadata, such as unique object identifier and creation/storage date and time must also be immutable.
{{/callout}}

- Changes to the retention and legal hold attributes:

    - Changes to the retention rule itself.
    - Application of a retention rule to a given document.
    - Application of a legal hold to a given document.</br>
</br>
- Deletion of record object and metadata.


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