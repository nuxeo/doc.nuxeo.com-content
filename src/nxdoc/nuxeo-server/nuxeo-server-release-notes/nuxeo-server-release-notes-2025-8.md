---
title: LTS 2025.8 / LTS 2025-HF08
description: Discover what's new in LTS 2025.8 / LTS 2025-HF08
review:
   comment: ''
   date: '2025-09-18'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 0
hidden: true
---

{{! multiexcerpt name='nuxeo-server-updates-2025-8'}}
# What's New in LTS 2025.8 / LTS 2025-HF08

## Fix NPE When Reading Null Value Stored in the Extended Infos of the Audit

Support of null value in extended infos has been improved.

## "firstAccessibleAncestor" Enricher in Not Returning Correct Parent Details.


The firstAccessibleAncestor enricher traverses up the document hierarchy to find the first ancestor that the current user has READ permission on. It returns `null` if there are no readable ancestors.
## Fix Random Unit Test Failure With Google Storage

Clear bucket prefix content only a test tear down

## Fix Email Rendering When a Notification Is Configured With Both "Template" and "subjectTemplate"

Both the mail body and subject templates can now be defined together in mail notifications.

## Make Possible to Map an Authenticated SAML User to a Transient User

It is now possible to map SAML user to transient users.

To do so, just prefix the username with `transient/` in your SAML mapper. You can also attach groups to this transient user, allowing access to specific resources, for example:

```
      <extension target="org.nuxeo.usermapper.service.UserMapperComponent" point="mapper">
        <mapper name="saml" type="js">
          <mapperScript>
            searchAttributes.put("username",  "transient/" + userObject.getAttributeByName("email").getAttributeValues().get(0).value);
            userAttributes.put("email", userObject.getAttributeByName("email").getAttributeValues().get(0).value);
            userAttributes.put("firstName", userObject.getAttributeByName("first_name").getAttributeValues().get(0).value);
            userAttributes.put("lastName", userObject.getAttributeByName("last_name").getAttributeValues().get(0).value);
            userAttributes.put("groups", ["members"]);
          </mapperScript>
        </mapper>
      </extension>
```
## Enforce Type Restriction With the Document.Move Operation

A new nuxeo.conf property "nuxeo.subtype.restriction.enabled" to enforce subtype restriction platform-side is available, default is false.

A synchronous listener checks if the type of any created, moved, or copied document is allowed by the destination folderish document; otherwise, it throws an error with 400 HTTP Status Code (Bad request).This listener is disabled by default and can be enabled with the nuxeo configuration property `nuxeo.subtype.restriction.enabled=true`. 40
## Introduce a Transient Data Store

A TransientDataStoreService has been added to Nuxeo Platform.

You can now contribute and retrieve `TransientDataStore` from its service. The store allows you to store Java Map as transient data in a efficient way.

A `TransientDataStore` is always contributed with a TTL value and a policy, the policy acts on how the TTL might be considered, see below possible values:

- CREATED - define the TTL of the data at the creation time (useful for short live message)
- ACCESSED - define the TTL of the data each time it is accessed (useful for session like data)

See below an example of `TransientDataStore` contribution:

```
  <extension target="org.nuxeo.runtime.ts.TransientDataService" point="configuration">
    <dataStore name="userManager">
      <ttl policy="ACCESSED">${session.timeout:=60}m</ttl>
    </dataStore>
  </extension>
```
## Fix Broken Extraction of Rotation Metadata in Video Files

Correctly extract rotation metadata from Video files with FFmpeg >= 5

## Support Nuxeo Retention on GCP

Google Storage Blob Provider can now be used for storing record blobs for Retention

## Elastic/Search Reindex Management Endpoint Should Handle queryLimit for Tuning Purpose

The reindex management endpoint now supports a `queryLimit` parameter to ease indexing tuning.

## Fix Remove Legal Hold When Document Is Under Indeterminate Retention

Object in S3 storage keeps its legal hold as long as its referencing document is under indeterminate retention

## Limit Binary Fulltext Length at Indexing Time

Binary fulltext can now be limited at indexing time.

Binary fulltext can now be truncated at indexing time.

On LTS 2023 use the following option 

`elasticsearch.fulltext.size.max=10000`

on LTS 2025:

`nuxeo.search.default.fulltext.size.max=10000`
## Add Ability to Store Blob With INTELLIGENT_TIERING Default Storage Class in S3

Blobs can now be stored with INTELLIGENT_TIERING storage class in S3Blob Providers

The new Nuxeo configuration property `nuxeo.s3storage.storageClass` allows you to specify which storage class should be used to store blobs in an S3 bucket. Supported values are `STANDARD` (default) or `INTELLIGENT_TIERING`.

 You can also fine-tune which storage class should be applied to the full-text blobs extracted from binaries (when `nuxeo.vcs.fulltext.storedInBlob=true`) with the `nuxeo.s3storage.fulltext.storeInBlob.storageClass` property.

Alternatively, when defining your own S3 blob provider XML contribution, you can also specify the `storageClass` property:

```
  <extension target="org.nuxeo.ecm.core.blob.BlobManager" point="configuration">
    <blobprovider name="myBlobProvider">
      <class>org.nuxeo.ecm.blob.s3.S3BlobProvider</class>
      ...
      <property name="storageClass">INTELLIGENT_TIERING</property>
```

Note that the `INTELLIGENT_TIERING` class could only be used when the underlying bucket used to store data is configured to use only immediate (synchronous) access tiers:

- *Infrequent Access tier*
- *Archive Instant Access tier*
- *Archive Instant Access tier*

The 2 last tiers are prohibited as they must be accessed asynchronously (requires an explicit restore action) and the Nuxeo platform does not handle this use case.

- *Archive Access tier*
- *Deep Archive Access tier*

{{! /multiexcerpt}}
