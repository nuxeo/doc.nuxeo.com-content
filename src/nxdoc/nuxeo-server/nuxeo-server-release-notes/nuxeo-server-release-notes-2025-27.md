---
title: LTS 2025.27 / LTS 2025-HF27
description: Discover what's new in LTS 2025.27 / LTS 2025-HF27
review:
   comment: ''
   date: '2026-10-26'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 0
hidden: true
---

{{! multiexcerpt name='nuxeo-server-updates-2025-27'}}
# What's New in LTS 2025.27 / LTS 2025-HF27

## OpenSearch 2.5+ Breaking Change Causes Nuxeo ILIKE Searches Containing Unicode Diacritics to Return No Results

Fixed ILIKE searches returning no results for values containing non-ASCII characters such as diacritics.

## Bulk Indexing Requests Are Sized by Document Count Only, Not Bytes

There is now a `nuxeo.search.indexing.bulk.size.max` property to limit the OpenSearch indexing request size, default is set to 10MiB

## Audit: Unify NXQLPredicate and MemAuditBackend's Log Entry Evaluators, Add Extended Support

Audit route predicates can now query `extended` info fields, including nested keys.

Audit route predicates can now query `extended` info fields, so routing and purge conditions are no longer limited to the fixed log entry fields:

- A top-level key is addressed as `extended/<key>`, e.g. `extended/app = 'Drive'`.
- A nested key is addressed by path, e.g. `extended/device/os = 'Linux'`.

Values are normalized before comparison, so numbers decoded from JSON content and `java.time` values compare correctly against NXQL literals.

```
<route name="drive-route" live="true">
  <backend name="drive" />
  <predicate class="org.nuxeo.audit.service.route.NXQLPredicate">
    <property name="query">
      SELECT * FROM LogEntry WHERE extended/app = 'Drive' AND extended/device/os = 'Linux'
    </property>
  </predicate>
</route>
```

Unlike the fixed fields, `extended` values have no declared type, so a query referencing them cannot be checked against real data when the contribution is deployed. A mismatch between the query literal and an entry's actual value surfaces when the entry is routed, not at startup.

Boolean composition follows the SQL ternary truth table: a clause mixing UNKNOWN and FALSE evaluates the same whatever the operand order.

The in-memory audit backend, a test double wired only by test contributions, now applies NXQL's three-valued logic to comparisons against a null field instead of its previous ad-hoc Java semantics. `STARTSWITH`, `<>`, `NOT IN`, `>` and `>=` evaluate to UNKNOWN rather than true or false, and `BETWEEN` returns UNKNOWN instead of throwing. `=` and `IN` against an object-valued `extended` field also evaluate to UNKNOWN, while `IS NULL` and `IS NOT NULL` still see such a field as present. No production backend is affected.
## Blob.ConcatenatePDFs Throws NPE for Valid Non-File-Backed Blobs on LTS 2025

Non-file-backed blobs are now properly handled by PDF utilities

## Fix Database Initialization With nuxeo.subtype.restriction.enabled=true

Fixed repository startup failures and subtype restriction errors for several system document types when nuxeo.subtype.restriction.enabled=true.

When `nuxeo.subtype.restriction.enabled=true` was set, repository startup could fail because several system container document types (`TaskRoot`, `UserWorkspaceRoot`, `CommentRoot`, `SavedSearchesRoot` and `UserProfile`) were not declared as allowed subtypes of their parent containers. These document types are now either declared as allowed subtypes, or explicitly bypass the subtype restriction check at creation time, so the platform starts correctly and features relying on these containers (personal workspace, favorites, collections, tasks, workflows, comments, saved searches, user profile) work as expected.
## SAML Logout Throws an Exception Instead of Being Gracefully Skipped When IdP Only Exposes HTTP-POST for Single Logout

Fixed SAML logout failing when the IDP only exposes an HTTP-POST SingleLogoutService binding.

SAML logout no longer fails when the Identity Provider's metadata only exposes an `HTTP-POST` binding for its `SingleLogoutService` (no `HTTP-Redirect`, the only outbound binding Nuxeo implements for Single Logout). In this case, Nuxeo now skips Single Logout and logs the information instead of throwing an exception, and a `WARNING` Runtime Message is raised at startup to warn administrators that Single Logout will not work properly with their current IdP binding configuration.
## Reset HTTP Session Timeout After Authentication

HTTP sessions now get the configured session.timeout applied after login. Previously a session kept whatever inactivity interval it had before authenticating.

## AbstractUserMapper Cannot Persist System-Schema Attributes Returned by resolveAttributes - JIT Create Throws NPE, Update Throws PropertyNotFoundException

null

## Make ExpressionEvaluator Ternary AND/OR Order-Independent and Drop the Audit Override

NXQL `AND` and `OR` now follow the SQL ternary truth table, so clause order no longer affects results.

`AND` and `OR` combining a clause whose value is unknown — typically a comparison against a missing or null property — produced a result that depended on the order the clauses were written in: `UNKNOWN AND FALSE` yielded UNKNOWN instead of FALSE, and `UNKNOWN OR FALSE` yielded FALSE instead of UNKNOWN. Both now follow standard SQL three-valued logic, so a query returns the same rows whatever the clause order.

This is only observable where the combined value is negated or nested, as in `NOT (a = 1 AND b = 2)`. A top-level `AND` or `OR` is unaffected, since an unknown result and a false result both exclude the row.

It affects NXQL evaluated in Java rather than delegated to the database:

- The in-memory (`mem`) DBS repository, which always evaluates NXQL in Java.
- MongoDB repositories, for `queryAndFetch` queries whose selected properties include a list wildcard, such as `SELECT ecm:uuid, dc:contributors/* FROM Document WHERE ...`. MongoDB cannot expand that projection itself, so Nuxeo retrieves the matching documents and re-evaluates the query in Java to emit one row per wildcard match. Ordinary document queries are translated to MongoDB and are unaffected.
- Memory directories, whose filters are evaluated in Java.

VCS (SQL) repositories compile NXQL to SQL and were never affected.
## Allow a Dedicated Fulltext Blob Location for Azure and GCP

Fulltext blobs can now be stored under a seperate prefix in Azure and GCP storages.

Added `nuxeo.storage.azure.fulltext.storeInBlob.prefix` and `nuxeo.gcp.fulltext.storeInBlob.bucket_prefix` properties, letting Azure and GCP store fulltext blobs (`nuxeo.fulltext.storedInBlob=true`) under a separate key prefix, matching existing S3 support. Both default to empty, so behavior is unchanged unless configured.
## RuntimeKeyValueStoreFeature Does Not Take Into Account the RepositoryInit#cleanup Value

Fixed RuntimeKeyValueStoreFeature not honoring the legacy RepositoryConfig#cleanup() granularity.

The `RuntimeKeyValueStoreFeature` test feature now correctly honors the cleanup granularity resolved by `CoreFeature`, including the one configured via the legacy `@RepositoryConfig(cleanup=...)` attribute, instead of only looking at `@Cleanup` directly. A related bug in `CoreFeature` that could silently downgrade a class-level cleanup granularity back to method-level was also fixed.
## Descriptor.merge(List) Keeps a Remove="true" Nested Descriptor When No Prior Contribution Exists for Its Id

Fixed Descriptor.merge incorrectly keeping a removed nested contribution when no prior contribution existed for its id.

Fixed a bug in `Descriptor.merge(List, List)` and `Descriptor.merge(Map, Map)` where a nested descriptor marked with `remove="true"` was incorrectly kept in the merged result instead of being dropped when there was no prior contribution registered for its id.
## RenditionObject#initialize Throws ArrayIndexOutOfBoundsException (500) Instead of 400 for Malformed Requests

`GET /api/v1/ext/Rendition` called with an invalid number of arguments now returns 400 Bad Request instead of 500 Internal Server Error.

## Stream Cat Management Endpoint Is Reachable by Any Authenticated User

Fixed an authorization bypass on the management stream cat endpoint.

The management `/stream/cat` endpoint used by the `StreamServlet` was reachable by any authenticated user, bypassing the management API's authorization guard (configured port, administrator/configured user/group check). The endpoint is now implemented as a `StreamCatObject` WebEngine sub-resource of `StreamObject`, so it automatically inherits the same authorization guard as the rest of `/api/v1/management/*`.
## Security Fixes

This release also contains security fixes.

{{! /multiexcerpt}}
