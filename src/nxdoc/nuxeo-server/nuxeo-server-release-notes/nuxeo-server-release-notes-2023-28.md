---
title: LTS 2023.28 / LTS 2023-HF28
description: Discover what's new in LTS 2023.28 / LTS 2023-HF28
review:
   comment: ''
   date: '2025-03-26'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 250
---

{{! multiexcerpt name='nuxeo-server-updates-2023-28'}}
# What's New in LTS 2023.28 / LTS 2023-HF28

## Upgrade Plexus-Archiver

Maven Plugins have been updated

The Maven Plugins used by Nuxeo were updated to not depend on very old libraries, this is the case for:

- maven-clean-plugin
- maven-enforcer-plugin
- maven-install-plugin
- maven-jar-plugin

We removed the Maven Eclipse Plugin from our dependency tree as it was not maintained. if you were leveraging it, you should add it back to your pom:

```xml
<plugin>
  <groupId>org.apache.maven.plugins</groupId>
  <artifactId>maven-eclipse-plugin</artifactId>
  <version>2.10</version>
</plugin>
```

## Make Creation of User Without Password Using the REST API Configurable

The `nuxeo.user.password.empty.enabled` nuxeo configuration property can be set to `true` to create users without password. Its default value is `false`**.**


{{! /multiexcerpt}}
