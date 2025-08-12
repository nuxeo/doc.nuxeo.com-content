---
title: LTS 2025.6 / LTS 2025-HF06
description: Discover what's new in LTS 2025.6 / LTS 2025-HF06
review:
   comment: ''
   date: '2025-08-06'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 0
hidden: true
---

{{! multiexcerpt name='nuxeo-server-updates-2025-6'}}
# What's New in LTS 2025.6 / LTS 2025-HF06

## The Number of Documents in a Collection Should Be Capped

Number of documents in a Collection is now capped.

The number of documents in a collection is now capped at 10000 for LTS-2025 and 100000 for LTS-2023. This value can be customized with the `nuxeo.collection.max.size` Nuxeo configuration property.

Fields `collection:documentIds` and `collectionMember:collectionIds` are no longer added to the fulltext index.

## Fix Broken Annotation Json Writer Marshaller When Overriding Comment Json Writer Marshaller

Improve Marshaller resolution algorithm.

The Marshaller resolution algorithm has been improved for `Collection` entities by taking into account their parameter type.

This fixes several Marshaller resolution issues, not necessarily tied to Collection, because the `Comparable` contract imposed by the JDK was not respected.

One of those fixes is to effectively disable a marshaller by contributions.

## Remove Buildnumber-Maven-Plugin From Default Execution

The buildnumber-maven-plugin has been removed from default Maven execution.

## Make Possible to Relax Package Installation With Docker Image

You can now relax package installation when building your Nuxeo Docker image.

The `install-packages.sh` script present in the Nuxeo Docker image has been improved to be able to get the `--relax [no|yes]` option. It defaults to `no` if not provided.


{{! /multiexcerpt}}
