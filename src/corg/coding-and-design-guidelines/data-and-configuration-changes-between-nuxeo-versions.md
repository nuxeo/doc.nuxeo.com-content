---
title: Data and Configuration Changes between Nuxeo Versions
review:
    comment: ''
    date: ''
    status: ok
toc: true
confluence:
    ajs-parent-page-id: '4685848'
    ajs-parent-page-title: Coding and Design Guidelines
    ajs-space-key: CORG
    ajs-space-name: Core Developer Guide
    canonical: Data+and+Configuration+Changes+between+Nuxeo+Versions
    canonical_source: >-
        https://doc.nuxeo.com/display/CORG/Data+and+Configuration+Changes+between+Nuxeo+Versions
    page_id: '29459716'
    shortlink: BIXBAQ
    shortlink_source: 'https://doc.nuxeo.com/x/BIXBAQ'
    source_link: /display/CORG/Data+and+Configuration+Changes+between+Nuxeo+Versions
tree_item_index: 1600
history:
    -
        author: Solen Guitter
        date: '2016-02-05 10:28'
        message: ''
        version: '2'
    -
        author: Julien Carsique
        date: '2016-01-29 17:57'
        message: ''
        version: '1'
---

{{! excerpt}}
As for the API, we have to conciliate stability and innovation. That means we want backward compliance and transparent changes for a smooth user experience on upgrades.
{{! /excerpt}}

Here's what can be done when some changes are required on data or configuration.

## Configuration

The method `ConfigurationGenerator.checkForDeprecatedParameters()` helps to manage the migration of deprecated configuration parameters.

## Data

## Migration Scripts

If a migration script is required, then:

*   Prefix its name with the current Nuxeo version
*   Attach it to the related JIRA issue
*   Add it to the source code under `nuxeo-distribution/nuxeo-server-tomcat/src/main/resources/tomcat/bin/upgrade-XX-YY/`
*   Reference it in the relevant sub-page of [Upgrading the Nuxeo Platform]({{page space='nxdoc' page='upgrading-the-nuxeo-platform'}})

In the script header, specify:

*   The source if it's a third-party copy (modified or not)
*   The related JIRA issue reference
*   A short description and the script usage
