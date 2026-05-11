---
title: LTS 2025.19 / LTS 2025-HF19
description: Discover what's new in LTS 2025.19 / LTS 2025-HF19
review:
   comment: ''
   date: '2026-05-07'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 0
hidden: true
---

{{! multiexcerpt name='nuxeo-server-updates-2025-19'}}
# What's New in LTS 2025.19 / LTS 2025-HF19

## Store Binary Fulltext in Blob Only Above a Threshold

It's now possible to store the binary fulltext into a blob only if the size exceed a threshold.

When using binary fulltext stored in blob, a size threshold can now be configured. Fulltext smaller than the threshold is stored inline in the repository, while fulltext equal to or larger than the threshold is externalized to a blob provider.

This option improves re-indexing performance by limiting blob access only for large content. 
This is a DBS (MongoDB) only option.

```
// store binary fulltext in blob ...
nuxeo.vcs.fullltext.storeInBlob=true
// ... only if bigger than 4k
nuxeo.dbs.fulltext.storeInBlobThreshold=4KiB 
```

The threshold can be activated on existing instance. It will apply only for new documents.

It’s possible to force the threshold to apply to the entire repository using the `management/fulltext/fixBinaryStorage` management endpoint.

## Create Management APIs to Copy Audit Backends and Check the Result

Management REST API to copy audit from one backend to another have been added.

Assuming you have configured two audit backends (for example, `default` and `archive`), the Management REST API now provides dedicated endpoints to copy audit log entries from one backend to another and to verify the result.

### Copy audit entries between backends

Use `POST /management/audit/copy` with `from` and `to` form parameters set to the source and target backend names. The operation runs asynchronously as a Bulk Action and returns a bulk status with a `commandId` you can poll.

```
curl -X POST -u Administrator:Administrator   http://localhost:8080/nuxeo/api/v1/management/audit/copy   -d 'from=default&to=archive'
```

```
{
  "entity-type": "bulkStatus",
  "commandId": "3b9ef220-a6b8-4e30-9f2e-a17e5f3b1c44",
  "state": "SCHEDULED",
  "processed": 0,
  "error": false,
  "errorCount": 0,
  "total": 0,
  "action": "copyAudit",
  "username": "system",
  "submitted": "2026-04-28T10:00:00.000Z",
  ...
}
```

Poll the command status using the `commandId`:

```
curl -u Administrator:Administrator   http://localhost:8080/nuxeo/api/v1/management/bulk/3b9ef220-a6b8-4e30-9f2e-a17e5f3b1c44
```

### Verify the copy result

Use `GET /management/audit/checkSearch` with one or more `backend` query parameters to compare the content of several backends side by side. By default the check runs `SELECT * FROM LogEntry` (ordered by `id DESC`) and returns the first page of IDs per backend along with their count.

```
curl -u Administrator:Administrator   "http://localhost:8080/nuxeo/api/v1/management/audit/checkSearch?backend=default&backend=archive"
```

```
{
  "pageProvider": "audit_check_nxql",
  "orders": ["id DESC"],
  "executions": {
    "default": {
      "duration": "45ms",
      "resultsCount": 1500,
      "resultsCountLimit": 0,
      "results": [1500, 1499, 1498, 1497, 1496, 1495, 1494, 1493, 1492, 1491]
    },
    "archive": {
      "duration": "32ms",
      "resultsCount": 1500,
      "resultsCountLimit": 0,
      "results": [1500, 1499, 1498, 1497, 1496, 1495, 1494, 1493, 1492, 1491]
    }
  }
}
```

You can customise the NXQL query and the page size with the `nxql` and `pageSize` query parameters respectively:

```
curl -u Administrator:Administrator   "http://localhost:8080/nuxeo/api/v1/management/audit/checkSearch?backend=default&backend=archive&nxql=SELECT%20*%20FROM%20SRC_BACKEND_NAME%20WHERE%event_id%20%3D%20%27documentCreated%27&pageSize=5"
```
## Fix UnsupportedOperationException When Uploading a File to an Encrypted Blob Store

Implemented `copyOrMoveBlob` method for `AESBlobStore`, enabling encrypted blob dispatch between blob stores.

## Fix WOPI Favicon Not Matching Opened Application

Use matching Microsoft favicons when opening a document through Microsoft 365 for the web.

## Add Property to Configure Search Behavior on LDAP Groups

A new property `nuxeo.ldap.group.searchBehavior` is added to the LDAP template to configure the search behavior for LDAP groups.

## Add @Cleanup Annotation to Control Test Fixture Cleanup Granularity

New @Cleanup annotation is now available for declarative test fixture cleanup granularity.

The new `@Cleanup` annotation (package `org.nuxeo.runtime.test.runner`) can be placed on a test class to control how often test fixtures — such as K/V stores, the document repository, and directory caches — are cleaned between tests.

### Usage

```
@RunWith(FeaturesRunner.class)
@Features(CoreFeature.class)
@Cleanup(granularity = Cleanup.Granularity.CLASS) // clean up once per test class (default: METHOD)
public class MyTest {
    // ...
}
```

### Granularity values

- `Cleanup.Granularity.METHOD` (default): fixtures are cleaned before each test method.
- `Cleanup.Granularity.CLASS`: fixtures are cleaned only once per test class. Useful for read-only or expensive-to-initialize datasets.

The `RuntimeKeyValueStoreFeature`, `CoreFeature`, `AuditFeature` and `DirectoryFeature` read the `@Cleanup` annotation at startup via `runner.getConfig(Cleanup.class)` and respect the configured granularity during test execution.

## Better Handling of Duration.ZERO Formatting With DurationUtils

DurationUtils now properly handle zero formatting.

## Improved fail-tolerance of NuxeoDrive.GetChangeSummary when Under Pressure With OpenSearch

NuxeoDrive.GetChangeSummary performance has been improved.


{{! /multiexcerpt}}
