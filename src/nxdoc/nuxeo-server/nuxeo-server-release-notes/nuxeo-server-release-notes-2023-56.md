---
title: LTS 2023.56 / LTS 2023-HF56
description: Discover what's new in LTS 2023.56 / LTS 2023-HF56
review:
   comment: ''
   date: '2026-11-16'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 0
---

{{! multiexcerpt name='nuxeo-server-updates-2023-56'}}
# What's New in LTS 2023.56 / LTS 2023-HF56

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
## Document Updates Are Sometimes Not Applied to Elasticsearch in a Multi-Node Cluster

Add an opt-in setting to order Elasticsearch index writes by document revision, so updates are no longer silently lost in multi-node clusters (recommended on Windows).

## Security Fixes

This release also contains security fixes.

{{! /multiexcerpt}}
