---
title: Web UI Upgrade Notes
description: Detailed upgrade notes to transition to the latest Web UI version.
review:
    comment: ''
    date: '2024-01-25'
    status: ok
toc: true
labels:
tree_item_index: 550
---

{{! multiexcerpt name='matching-notes'}}
{{#> callout type='info' heading='Upgrade Notes'}}
This page mentions how to do a technical upgrade. Have a look at the [release notes]({{page page='web-ui-release-notes'}}) to see what's new.
{{/callout}}
{{! /multiexcerpt}}

{{{multiexcerpt 'upgrade-notes' page='web-ui-upgrade-notes-lts-2023'}}}

## Upgrading to NodeJS 18

Starting from Web UI version `3.1.6` (release on March 18, 2024), Nuxeo Web UI will upgrade its requirements for its functional tests stacks and accessibility tests stack. Any UI functional tests written in your project using NodeJS 14 or lower will need to be migrated to NodeJS 18.

### Why Are You Doing This?

This change is necessary to keep our stack up to date and secure.

### What Is the Impact? Does It Impact My Projects?

This is a transparent technical change in one of our dependencies that serves us to automatically test the addon before we deliver it. It does NOT have any impact on your end except a potential code change if you specifically built custom functional tests for your UI on top of our own tooling.

The code of your functional tests will require an update only if ALL of these conditions apply:
* Your project includes one or more UI functional tests.
* These UI functional tests leverage the [functional test stack provided by Nuxeo Web UI](https://github.com/nuxeo/nuxeo-web-ui/tree/maintenance-3.1.x/ftest).
* These UI functional tests are written using a version of NodeJS < 18.

Otherwise, you can safely ignore this notice.

### How Can I Test and Get Ready?

First, you will need to get the appropriate version and source code to test this out.

A dedicated version of Nuxeo Web UI is provided for you to test this change. To leverage it, you need to request the following package in your dependencies:
`nuxeo-web-ui-3.1.5-SNAPSHOT`

If your instance is not connected to internet, you can also retrieve this [Web UI NodeJS 18 upgrade test package for LTS 2023](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-web-ui?version=3.1.5-SNAPSHOT) directly from the marketplace.

The [related source code](https://github.com/nuxeo/nuxeo-web-ui/releases/tag/v3.1.5-rc.3) is available on GitHub.

With this, you should be able to update your code. The biggest change from NodeJS 14 to NodeJS 18 is that all tests need to be written using asynchronous methods. Nuxeo Web UI default tests will use this logic, and you need to adapt your own tests to follow.

### What Happens if I'm Not Ready in Time?

If you are not ready by the time this new version of Web UI is released, you can stay on your current Nuxeo Web UI version until you are ready to upgrade by explicitly setting a dependency to `nuxeo-web-ui-3.1.4`. That means you will not benefit from new fixes and features brought to Nuxeo Web UI until then. 

Nuxeo Server can still be updated independently with newer versions to benefit from the latest updates, fixes and potential security fixes.

### Can I Upgrade to LTS 2023 Without Doing This First?

This change is completely separate from a technical upgrade to LTS 2023.

If you are in the process of upgrading from LTS 2021, check your current Nuxeo Web UI version:
- If the version is `3.0.29` or lower, it means that it uses NodeJS 14 for its functional tests. You should check if there is a code change for you to do with our [guidelines](#what-are-the-impacts-does-it-impact-my-projects) above.
- If the version is `3.0.30` or higher, it is already using NodeJS 18 for its functional tests and there is nothing for you to do.

