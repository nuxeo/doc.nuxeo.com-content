---
title: Migrating Search Technology
description: What has to be migrated when you change search technology in Nuxeo LTS 2025 — repository index, audit logs index and uid sequencer — and which procedure applies to each.
review:
    comment: ''
    date: '2026-09-02'
    status: ok
labels:
    - elasticsearch
    - elasticsearch-component
toc: true
confluence:
    ajs-parent-page-id: '20518480'
    ajs-parent-page-title: Search Setup
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
tree_item_index: 1012
---

{{! excerpt}}
Changing search technology — such as moving from OpenSearch 1.x to OpenSearch 2.x, or to Elasticsearch 9.x — involves more than migrating the document repository index. This page outlines all the components that require migration and links to the appropriate procedure for each.
{{! /excerpt}}

## What Must Be Migrated

Nuxeo uses three indexes on the search cluster, and they do not migrate the same way.

| Index | Can it be rebuilt? | How to migrate it |
| --- | --- | --- |
| Repository index | Yes, from the repository content | [Re-index without service interruption]({{page page='search-setup'}}#reindexing), using the blue/green procedure |
| Audit logs index | **No**, it is a primary storage | [Copy the audit backend]({{page page='copy-audit-backend'}}), using the `copyAudit` bulk action |
| UID sequencer index | Not applicable | Nothing to do, see [UID Sequencer](#uid-sequencer) |

{{#> callout type='warning' heading='The audit index is not covered by the repository procedure'}}
The blue/green re-indexing procedure migrates the repository index only. The audit logs index is a primary storage that cannot be rebuilt from the repository, so it has to be migrated separately. If you change search technology without migrating the audit backend, your audit entries remain on the previous cluster.
{{/callout}}

## Before You Start

- **Nuxeo version.** Re-indexing the repository without service interruption requires LTS 2025.11 or later. Copying an audit backend requires LTS 2025.19 or later.
- **Disk space.** The source and target indexes exist at the same time during the migration, so size your target cluster accordingly.
- **Packages.** Install the search client package of the target technology, and its audit package if you store the audit on the search cluster. See the dedicated setup guide for your target stack in the table on the [Search Setup]({{page page='search-setup'}}) page.

## Repository Index

The repository index is rebuilt by re-indexing the repository content, so there is no data to copy. Since LTS 2025.11 this can be done without service interruption, using a blue/green index: the current index keeps serving search requests while the new one is populated, and you switch over when you are satisfied with it.

The same procedure covers moving to a different cluster and moving to a different search implementation. See [Re-index Repository Without Service Interruption]({{page page='search-setup'}}#reindexing), and in particular the [Cross-Implementation Reindexing]({{page page='search-setup'}}#cross-implementation-reindexing) section for the OpenSearch 1.x to OpenSearch 2.x and OpenSearch 1.x to Elasticsearch 9.x variants.

{{#> callout type='tip' heading='Upgrading from LTS 2023 without an up-front re-index'}}
Since the OpenSearch 2.x search client addon 2025.5, an LTS 2025 instance can query an index built by LTS 2023, which lets you defer the repository re-index instead of running it before going live.

The LTS 2023 and LTS 2025 mappings differ by a single field, `ecm:ancestorId`, which LTS 2025 populates at index time and an LTS 2023 index does not have. LTS 2025 resolves `ecm:ancestorId` NXQL clauses as a direct term query on that field, so on a 2023 index they would match nothing. Enable the legacy compatibility flag on the default OpenSearch 2.x client for the transition window:

```
nuxeo.opensearch2.legacyAncestorIdSearch=true
```

The client then rewrites those clauses to the `ecm:path STARTSWITH` form used by LTS 2023, so they match documents indexed by 2023.

You can then run the blue/green procedure above to re-index onto a new OpenSearch 2.x cluster without service interruption, and remove the flag once that is done. Do not set it on the green client: once the green index is populated by LTS 2025, `ecm:ancestorId` is present and the native query must be used.
{{/callout}}

## Audit Logs Index

The audit logs index cannot be rebuilt, so its entries have to be copied to the new backend. Since LTS 2025.19, Nuxeo provides a blue/green audit migration: a `copyAudit` bulk action copies log entries from one [Audit Backend]({{page page='audit'}}#audit-back-ends) to another, and Management endpoints trigger and verify the copy.

Nuxeo performs the copy itself, reading entries from the source backend and writing them to the target one. The two backends can therefore use different technologies — OpenSearch 1.x to OpenSearch 2.x, for instance, or a SQL backend to OpenSearch.

See [Copy an Audit Backend]({{page page='copy-audit-backend'}}) for the procedure, and the [Audit Router]({{page page='audit-router'}}) page for declaring the second backend and mirroring live ingestion to it while the historical entries are copied.

{{#> callout type='info' heading='Changing only the mapping or settings'}}
If you are not changing search technology, and only need to apply a new mapping or new settings to the audit index of the same implementation, use the [Updating the Audit Logs Index Configuration]({{page page='search-setup'}}#updating-the-audit-logs-index-configuration) procedure instead.
{{/callout}}

## UID Sequencer

The sequencer index, configured with `nuxeo.uidsequencer.default.<namespace>.index.name`, is also a primary storage, but it does not need to be migrated: the audit backends that use it initialize the sequence to the right value when the Nuxeo Platform starts.

## Verifying the Migration

- **Repository index** — run a query against the new index with `GET /nuxeo/api/v1/management/search/checkSearch`, and test your Page Providers against it, as described in the [re-indexing procedure]({{page page='search-setup'}}#reindexing).
- **Audit logs index** — compare the content of both backends with `GET /nuxeo/api/v1/management/audit/checkSearch`, passing one `backend` parameter per backend to compare.
- **Progress** — both the repository re-indexing and the audit copy run as [Bulk Actions]({{page page='bulk-action-framework'}}) and return a `commandId` you can poll for status.

## Rolling Back

For the repository index, the previous index is not deleted and remains available: if you encounter a problem after switching, revert the configuration change and perform another rolling restart.

For the audit logs index, the copy only reads from the source backend, which therefore still holds every entry it had: to go back, revert the configuration that promoted the new backend as the default. Entries ingested after that switch exist only in the new backend, unless you kept a [route]({{page page='audit-router'}}#routes-extension-point) mirroring ingestion to both.

## Learn More

- [Search Setup]({{page page='search-setup'}})
- [Copy an Audit Backend]({{page page='copy-audit-backend'}})
- [Audit Router]({{page page='audit-router'}})
- [Bulk Action Framework]({{page page='bulk-action-framework'}})
- [How to upgrade to New Search Service]({{page page='how-to-upgrade-search-service'}})
