---
title: LTS 2023.55 / LTS 2023-HF55
description: Discover what's new in LTS 2023.55 / LTS 2023-HF55
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

{{! multiexcerpt name='nuxeo-server-updates-2023-55'}}
# What's New in LTS 2023.55 / LTS 2023-HF55

## [Web UI] Add Server-Side Export of Users, Groups and Group Members as CSV/XLSX (Blocks WEBUI-2042)

Users, groups and group members can now be exported as CSV server-side via the new `userCSVExport` and `groupCSVExport` bulk actions on the user and group REST endpoints.

Four new bulk endpoints (POST) return a CSV blob through the usual bulk download:

- `/api/v1/user/search/bulk/userCSVExport` — all users, or those matching `q`

- `/api/v1/group/search/bulk/groupCSVExport` — all groups, or those matching `q`

- `/api/v1/group/{groupName}/@users/bulk/userCSVExport` — direct member users

- `/api/v1/group/{groupName}/@groups/bulk/groupCSVExport` — direct member groups

Member exports are not recursive; `sort` and `zip` are supported. Each row is a directory entry: `directoryName`, the id field, then schema fields sorted by name.

With `nuxeo.group.administrators.members.resticted=true`, restricted groups come back with empty `memberUsers`, `memberGroups` and `parentGroups`, as `GET /group/{name}` already does.

Query limits default to 100000 (`nuxeo.core.bulk.userCSVExport.queryLimit`, `nuxeo.core.bulk.groupCSVExport.queryLimit`). Blob assembly is now shared, tuned by `nuxeo.bulk.action.csvExportBlob.defaultConcurrency`, `nuxeo.bulk.action.csvExportBlob.defaultPartitions` and `nuxeo.bulk.action.csvExportBlob.produceImmediate`, which default to the `csvExport` values.
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

## RenditionObject#initialize Throws ArrayIndexOutOfBoundsException (500) Instead of 400 for Malformed Requests

`GET /api/v1/ext/Rendition` called with an invalid number of arguments now returns 400 Bad Request instead of 500 Internal Server Error.

## Stream Cat Management Endpoint Is Reachable by Any Authenticated User

Fixed an authorization bypass on the management stream cat endpoint.

The management `/stream/cat` endpoint used by the `StreamServlet` was reachable by any authenticated user, bypassing the management API's authorization guard (configured port, administrator/configured user/group check). The endpoint is now implemented as a `StreamCatObject` WebEngine sub-resource of `StreamObject`, so it automatically inherits the same authorization guard as the rest of `/api/v1/management/*`.
## Security Fixes

This release also contains security fixes.

{{! /multiexcerpt}}
