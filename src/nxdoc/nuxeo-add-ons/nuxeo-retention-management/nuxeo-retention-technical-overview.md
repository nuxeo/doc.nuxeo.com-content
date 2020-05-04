---
title: Technical Overview
description: Discover technical implementation of the Nuxeo Retention Management addon.
review:
    comment: ''
    date: '2019-10-17'
    status: 'ok'
labels:
    - lts2019-wip
    - jaubenque
    - mlumeau
    - retention-management
toc: true
tree_item_index: 200
private: true
---


## {{> anchor 'dedicated-low-fields'}} Dedicated Low-Level Fields

To provide the required data to Amazon S3 (expiration date and legal hold) and to ensure that records can’t be deleted when not eligible, some new low-level fields have been added at the storage level:

- `ecm:isRecord` (boolean): `true` if the document is declared as a record.
- `ecm:retainUntil` (datetime): Expiration date (end of retention period).
- `ecm:hasLegalHold` (boolean): `true` if there is a legal hold applied to the record.
- `ecm:isUnderRetentionOrLegalHold` (boolean): `true` if the record is under retention and/or legal hold.

If a legal hold is applied to a document or if a retention rule is applied to a document, then:

- Modification of the main blob (`file:content`) is **prevented**: this includes modification through restoring an older version.
- Deletion (including recursive delete) is **prevented**: this is enforced at low-level and this information is made available per-document through a security policy.
- `ecm:isUnderRetentionOrLegalHold` is set to `true`.

This applies in **all situations**, no exception, including for Administrators.

In case of [event-based retention]({{page page='nuxeo-retention-functional-overview'}}#create-retention-rule), the record is put on a temporary hold waiting for the event to occur (see [Retention flow](#retention-flow) section). In this case, `ecm:retainUntil` is "indeterminate" (by setting the field to `9999-01-01T00:00:00.000+00:00`), so deletion is prevented as if it was a date far in the future (this is turned into a legal hold at the S3 storage level).

A copy of a document resets its record, retention and legal hold information. This includes creating a new version (that’s why versioning must be disabled to be compliant).
These fields don't apply to proxies, as proxies are just a convenience to access content stored elsewhere, and are not themselves records.

## {{> anchor 'retention-flow'}} Retention Flow

When a granted user applies a retention rule to a document, the document is declared as a record and copied into the S3 compliance mode bucket.

Then, depending on the retention rule type (immediate, metadata, or event-based retention), the expiration date is calculated and applied to both Nuxeo and S3 object.

A background process checks when the event occurs and then starts the retention period (event-based retention).

Another background process checks the document expiration to change the status and make the record deletable. This process is run once a day (there may be a short delay for the record to become deletable).

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Retention Management/Technical overview/retention-sequence-application
    name: Retention-sequencing - retention-sequence-application.png
    server#schema#up_to_date
--}}
![retention-sequence-application](nx_asset://2fce961d-d9e7-4772-a267-f00ba3c2d6a4 ?w=550,border=true)

## Legal Hold Flow

When a granted user applies a legal hold to a record, the legal hold is applied at Nuxeo level and also at S3 level.

There are some specific use cases:

- A legal hold is applied to a document which is not a record, the document is first declared as a record and moved to the compliance mode S3 bucket before applying the legal hold,

- There is an event-based retention rule applied to the document and the event hasn't occurred yet, a [temporary hold](#dedicated-low-fields) is applied to the record. So, the legal hold is only applied at Nuxeo level (as it is already done on S3 level),

- The document is already on legal hold, there is no action done except to log the legal hold action on the audit log.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Retention Management/Technical overview/retention-sequencing-legal-hold
    name: Retention-sequencing - retention-legal-hold.png
    server#schema#up_to_date
--}}
![retention-sequencing-legal-hold](nx_asset://970e5649-c2bb-405b-a194-e0b3cc8f735d ?w=550,border=true)

## Deletion Flow

### Standard Deletion Flow

The standard Nuxeo deletion flow is based on the following principles:

- Immediate deletion of the file content referenced in the Nuxeo database when a granted user requests deletion action,

- As Nuxeo handles deduplication of the file content (when 2 Nuxeo documents contain the exact same file, the file is stored only once), the deletion of the files in the storage media is done by the Garbage Collector process:

  - The Garbage Collector regularly compares the list of files stored on the storage media and the list of files referenced in Nuxeo Database as part of the document content,

  - If and only if a file is not referenced in any Nuxeo document (meaning all documents included the file have been deleted), the Garbage Collector process deletes the file in the storage media,

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Retention Management/Technical overview/retention-standard-deletion
    name: Retention-sequencing - standard-deletion.png
      server#schema#up_to_date
--}}
![retention-standard-deletion](nx_asset://1105e57b-5aa7-4ec6-abc5-03e9d5c90c95 ?w=550,border=true)

### {{> anchor 'record-deletion-flow'}} Record Deletion Flow

For the Retention Management addon, a specific deletion flow has been added for the following reasons:

- The deduplication feature is turned off for records content as it is not compliant with retention features (ex: it's not possible to handle a case where 2 records referenced the same file content with 2 different retention period and the legal constraint to delete it right after the retention period),

- For compliance purpose, we need to make sure the deletion is done when a granted user requests the deletion of a record and when Nuxeo logs the deletion event, which is complex to implement with an asynchronous deletion process,

That's why the record deletion flow is done as follow:

- The Garbage Collector process is disabled for the S3 Compliance mode buckets.
- The deletion process is done synchronously.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Retention Management/Technical overview/retention-sequencing-deletion
    name: Retention-sequencing - retention-deletion.png
    server#schema#up_to_date
--}}
![retention-sequencing-deletion](nx_asset://04d8ac4d-5935-495c-a054-bb84dd071663 ?w=550,border=true)
