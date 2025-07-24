---
title: Web UI Upgrade Notes
description: Detailed upgrade notes to transition to the latest Web UI version.
review:
    comment: ''
    date: '2025-07-23'
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

## Upgrading from NodeJS 18 to NodeJS 22 for Functional tests.

Starting from Web UI version `3.1.20` (released on July 23, 2025), Nuxeo Web UI functional tests will officially support Node.js 22, in addition to Node.js 18.
This means our test stack has been validated on both versions, ensuring compatibility moving forward.

### Why Are You Doing This?

Keeping up with the latest Node.js LTS versions ensure better performance, security, and compatibility with the evolving JavaScript ecosystem.
Node.js 22 introduces modern JavaScript improvements that we want to leverage in our tooling and test infrastructure — such as native ES Modules (ESM), enhanced diagnostics, and better performance optimizations.
Additionally, Node.js 18 is reaching its end of active support from the Node.js maintainers (End-of-Life: April 2025). To maintain a secure and future-proof test stack, it’s important to move forward to a supported LTS version.

### What Is the Impact? Does It Impact My Projects?

This upgrade is transparent for most users.
However, if you wish to upgrade to NodeJS 22 you may need to update your code only if all of the following apply:

* Your project includes custom UI functional tests.

* These tests are built on top of the Nuxeo Web UI testing stack. These UI functional tests leverage the [functional test stack provided by Nuxeo Web UI](https://github.com/nuxeo/nuxeo-web-ui/tree/maintenance-3.1.x/ftest).

* Your tests are not yet using ECMAScript Modules (ESM) and rely on CommonJS (require) syntax.

If you’re using only our default tests or haven’t written custom functional tests, you can safely ignore this notice.

### How Can I Test and Get Ready?

If you have custom functional tests and want them to work with Node.js 22, you’ll need to address two major changes introduced by the shift to ESM:

1. require() Is No Longer Supported
In ESM-based Node.js environments (which is default from Node.js 22), you must use import instead of require().

2. Explicit .js File Extensions Required
When using import, you must include the file extension explicitly (for example, .js) in relative paths.

Failing to do this will result in module resolution errors in Node.js 22.

First, you will need to get the appropriate version and source code to test this out.

A dedicated version of Nuxeo Web UI is provided for you to test this change. To leverage it, you need to request the following package in your dependencies:
`nuxeo-web-ui-3.1.20`

If your instance is not connected to internet, you can also retrieve this [Web UI NodeJS 18 upgrade test package for LTS 2023](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-web-ui?version=3.1.20) directly from the marketplace.

The [related source code](https://github.com/nuxeo/nuxeo-web-ui/releases/tag/v3.1.20) is available on GitHub.

With this, you should be able to update your code.

### What Happens if I'm Not Ready in Time?

You can still run your tests using Node.js 18 if you're not ready to adopt Node.js 22 yet. Both versions are compatible with Web UI 3.1.20.
However, future releases may eventually drop Node.js 18 support, so early adoption is encouraged.
To stay on Node.js 18 temporarily, you don’t need to do anything special — just continue using your current test setup until you’re ready to migrate. 

Nuxeo Server can still be updated independently with newer versions to benefit from the latest updates, fixes and potential security fixes.

### Can I Upgrade to LTS 2023 Without Doing This First?

Yes. This change is independent of any LTS upgrades to the Nuxeo Platform.
You can upgrade your Nuxeo Server version to LTS 2023 while still running Web UI functional tests using Node.js 18 — but again, we recommend preparing your codebase for Node.js 22 compatibility to future-proof your stack.

## Upgrading from NodeJS 14 to NodeJS 18

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

