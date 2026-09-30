---
title: LTS 2023.54 / LTS 2023-HF54
description: Discover what's new in LTS 2023.54 / LTS 2023-HF54
review:
   comment: ''
   date: '2026-09-30'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 0
hidden: true
---

{{! multiexcerpt name='nuxeo-server-updates-2023-54'}}
# What's New in LTS 2023.54 / LTS 2023-HF54

## CMIS: Cannot Use JOIN and CONTAINS Clause in Same Query

CMISQL queries combining a JOIN and a CONTAINS() clause no longer fail.

## Refuse Creating a User When a Group With the Same Id Exists, and Vice Versa

Added an opt-in check to refuse creating a user with the same id as an existing group, and vice versa.

Prior to this fix, an ACE stored a bare identifier with no indication of whether it designated a user or a group, so a user and a group sharing the same id ended up with the exact same permissions. A new `nuxeo.usermanager.check.user.group.id.conflict` configuration property can now be enabled to make `UserManager#createUser` and `UserManager#createGroup` refuse the creation when the id is already used by the other type, preventing this collision from happening.
## Fix Thumbnail Generation for Image Files With MIME Type Application/Illustrator

Thumbnails are now properly generated for illustrator and postscript MIME types.

## Fix XA Datasource Property Naming in Common-Base xadatasource-params.ftl for PostgreSQL

Fixed PostgreSQL XA datasource configuration where properties were incorrectly named, preventing successful connections when XA mode was enabled.

## tracing.jaeger.service Has No Effect Because Jaeger Reporter Template Omits the Service Option

Jaeger and Zipkin reporters now include the service option.

## Prevent OAuth2 Service Provider Creation Without authorizationServerURL

Fixed OAuth2 service provider creation/update accepting a blank authorization server URL

## Fix Build Failure With org.apache.avro:avro Upgrade From 1.12.1 to 1.12.2

Improved Avro serialization security by restricting reflection-based (de)serialization to trusted packages.

As part of adopting Avro 1.12.2's new class-security safeguard (ClassSecurityValidator), which restricts reflection-based Avro serialization to explicitly trusted classes, Nuxeo now trusts its own classes by default so internal usages (stream, bulk, audit messages, etc.) continue to work securely.

A new `nuxeo.conf` property, `nuxeo.stream.avro.serializable_packages`, lets you configure the comma-separated list of Java packages allowed for Avro serialization (defaults to `org.nuxeo`). No action is required unless you have custom classes outside the `org.nuxeo` package that need to be Avro-serialized, in which case add their package to this property.
## org.nuxeo.runtime.reload_strategy=restart Breaks Hot Reload With a NullPointerException: ReloadComponent Deactivates Itself and Nulls Its Own Static Bundle Field

Fix hot reload restart strategy

## Nuxeo Docker Image Should Follow Log

Dev-mode Docker containers now keep streaming the Nuxeo server log to standard output after a log file rollover, so docker logs / docker compose logs no longer goes  │ silent and requires a container restart to see new entries.

## Security Fixes

This release also contains security fixes.

{{! /multiexcerpt}}
