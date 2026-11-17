---
title: LTS 2025.28 / LTS 2025-HF28
description: Discover what's new in LTS 2025.28 / LTS 2025-HF28
review:
   comment: ''
   date: '2026-11-17'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 0
hidden: true
---

{{! multiexcerpt name='nuxeo-server-updates-2025-28'}}
# What's New in LTS 2025.28 / LTS 2025-HF28

## Propose a Way to Migrate User and Group for External Uid Support

User and group directories can now expose a generated external id, usable in REST API paths instead of the username/groupname

Users and groups can now be identified by a generated external id, in addition to their internal id (commonly the `username` / `groupname`). This avoids exposing usernames, group names or emails in REST API URLs (CWE-522), e.g. `/api/v1/user/{id}` and `/api/v1/group/{id}`.

### Behavior

- The external id is stored in the `sys:id` system property of the `userDirectory` and `groupDirectory` entries and is returned next to the previous id (the `username` / `groupname`).
- The REST API stays backward compatible: both the external id and the internal id (`username` / `groupname`) can be used in REST paths to get, update or delete a user or group.
- The external id is only meant to be used in REST paths. It must not be used elsewhere, such as in document permissions (ACLs), where the `username` / `groupname` remains the reference.
- Related improvements: the Java client, the JavaScript client and the Web UI leverage the new id in REST paths while falling back on the `username` against older servers.

### Enabling the feature

The feature is disabled by default and is driven by the `nuxeo.user.group.externalid.enabled` configuration property, which adds the `external-id` type to the `userDirectory` and `groupDirectory` in `default-directories-bundle.xml`. It only applies when `nuxeo.directory.type` and `nuxeo.user.group.storage` are both `default`.

### Migrating existing users and groups

Users and groups created while the feature is enabled get an external id automatically. Existing ones are populated by a new migration, `user-group-external-id-migration`, relying on the Migration Service and the Bulk Action Framework, with two states: `empty` and `populated`. To use it:

1. Set `nuxeo.user.group.externalid.enabled=true` and restart the server.
2. Check the current state of the migration with the `probe` endpoint of the management API.
3. Run the `empty-to-populated` step and follow its progress with the `GET` endpoint, as shown below.

```
# Probe the current state
POST /nuxeo/api/v1/management/migration/user-group-external-id-migration/probe

HTTP/1.1 200 OK
{
  "entity-type": "migration",
  "id": "user-group-external-id-migration",
  "description": "Populate sys:id property of user and group directories",
  "descriptionLabel": "migration.directory.user-group-external-id",
  "status": {
    "state": "empty",
    "running": false,
    ...
  },
  "steps": [
    {
      "id": "empty-to-populated",
      "fromState": "empty",
      "toState": "populated",
      "description": "Populate sys:id property",
      "descriptionLabel": "migration.directory.user-group-external-id.empty-to-populated"
    }
  ]
}

# Run the migration
POST /nuxeo/api/v1/management/migration/user-group-external-id-migration/run

HTTP/1.1 202 Accepted

# Or explicitly run the step
POST /nuxeo/api/v1/management/migration/user-group-external-id-migration/run/empty-to-populated

HTTP/1.1 202 Accepted

# Follow the progress until the state is populated
GET /nuxeo/api/v1/management/migration/user-group-external-id-migration

HTTP/1.1 200 OK
{
  "entity-type": "migration",
  "id": "user-group-external-id-migration",
  "status": {
    "state": "populated",
    "running": false,
    ...
  },
  ...
}
```

For instance, with `curl`:

```
curl -u Administrator:Administrator -X POST   http://localhost:8080/nuxeo/api/v1/management/migration/user-group-external-id-migration/run

curl -u Administrator:Administrator   http://localhost:8080/nuxeo/api/v1/management/migration/user-group-external-id-migration
```

Once an entry is populated, its external id is returned in the REST responses.

To support this migration, the bulk migration framework has been made repository agnostic: `AbstractBaseBulkMigrator` is the new base class, `AbstractBulkMigrator` and `AbstractDirectoryBulkMigrator` extend it.
## Enable Azurite With AzureBlobProvider

New nuxeo.storage.azure.endpoint to target an Azure Storage emulator or a compatible gateway

`AzureBlobProvider` now offers the `nuxeo.storage.azure.endpoint` property. It allows to define the blob service endpoint, container excluded (default is `<https://<nuxeo.storage.azure.account.name>>.blob.core.windows.net`).

Set it to target an Azure Storage emulator or a compatible gateway, for example `<http://127.0.0.1:10000/devstoreaccount1`.

A path-style endpoint, where the account name is the first path segment, must carry an explicit port; otherwise, the Azure SDK reads the account name from the host instead.
## MimetypeRegistryService#getMimetypeFromBlob Fails for MP3 Files With and Without ID3v2 Headers

MP3 files are now detected as audio/mpeg from their content, with or without an ID3v2 tag, instead of getting an empty MIME type or failing with "no registered mimetype has extension: bin".

## Fix Error When Uploading 2GB+ Blob to S3 With Client-Side Encryption

S3 client-side encryption and the AES blob store now support encrypting and decrypting objects of 2 GiB or more.

Encrypting and decrypting objects of 2 GiB and more is now supported, for S3 client-side encryption and for the AES blob store. Before, writing them failed with "SunJCE provider only supports input size up to 2147483647 bytes", and reading large objects needed a heap several times their size.

The AES-GCM cipher now comes from Bouncy Castle and decrypts as a stream, so memory use no longer grows with the object size. Bouncy Castle is a pure Java implementation here: for objects under 2 GiB on a fast network, encryption can be slower than with the JDK cipher and uses more CPU. This is not noticeable on typical network bandwidth.

Native AES-GCM, much faster, is planned for 2027 ([NXP-34182](https://hyland.atlassian.net/browse/NXP-34182))
## Fix Azure Blob Storage Exception in Parallel Document Creation

Concurrent writes to Azure are now handled gracefully.

## BulkParameters.paramsToMap Silently Yields No Parameters for a Non-Object Payload

Bulk action parameters that are not valid JSON object are now rejected with HTTP Bad Request (400) status code.

## Move HttpClientTestRule to Nuxeo-Common-Test

HttpClientTestRule moved to nuxeo-common-test, making it usable in the tests of low-level modules

The `HttpClientTestRule` HTTP test client and its handlers moved from `org.nuxeo.http.test` in `nuxeo-features-test` to `org.nuxeo.common.test.http` in `nuxeo-common-test`. Modules that don't depend on `nuxeo-features-test`, such as `nuxeo-platform-web-common`, can now use it in their tests instead of duplicating HTTP request builders. The former classes are kept as deprecated facades. See the upgrade notes to migrate.
## S3BlobStoreConfiguration Sends GetBucketVersioning Unconditionally at Startup Since 2025.15, Blocking S3-Compatible Backends That Deny It (403), Even With Digest Key Strategy

S3 blob providers now check the bucket's versioning status only when using the doc-id key strategy.

## Nuxeo LTS 2025 Logs a Native-Access Warning at Startup on JDK 24 and Later

A new `nuxeo.conf` property, `nuxeo.server.apr.enabled` (default `true`), can be set to `false` to disable Tomcat's APR lifecycle listener and remove the native-access warning  logged at startup on JDK 24 and later.

## Security Fixes

This release also contains security fixes.

{{! /multiexcerpt}}
