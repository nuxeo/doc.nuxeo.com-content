---
title: Release Notes
description: Release notes for Nuxeo Drive.
tree_item_index: 700
review:
  comment: ''
  date: '2021-04-15'
  status: ok
toc: true
---

Welcome to the Release Notes for **Nuxeo Drive 5.2.0**

**Status**: <font color="#ff0000">**Beta**</font> </br>
<i class="fa fa-long-arrow-right" aria-hidden="true"></i> [Changelog](https://github.com/nuxeo/nuxeo-drive/blob/master/docs/changes/5.1.1.md)

## General

### Features

#### The Synchronization Mechanism is Now a Feature

A new feature selector has been added in the settings to enabled/disable synchronization feature. The feature is disabled by default and can be enabled through the GUI or the configuration file.
The `synchronization-enabled` option is now deprecated and should not be used anymore as it will be removed in a future release.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2581](https://jira.nuxeo.com/browse/NXDRIVE-2581).

#### New Settings Tab: Sync!

A new tab for the synchronization feature has been added in settings. This tab contains all synchronization options that were previously in the **Accounts** and **General** tabs. This tab will only be accessible when there is at least one account registered and the synchronization feature is enabled.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2583](https://jira.nuxeo.com/browse/NXDRIVE-2583).

#### OAuth2 Support

OAuth 2 finally landed in Nuxeo Drive!
Support for OpenID Connect Discovery and ADFS were implemented too.
A bunch of new options are now available to customize OAuth 2 connection: [oauth2-authorization-endpoint]({{page page='nuxeo-drive'}}#oauth2-authorization-endpoint), [oauth2-client-id]({{page page='nuxeo-drive'}}#oauth2-client-id), [oauth2-client-secret]({{page page='nuxeo-drive'}}#oauth2-client-secret), [oauth2-scope]({{page page='nuxeo-drive'}}#oauth2-scope) and [oauth2-openid-configuration-url]({{page page='nuxeo-drive'}}#oauth2-openid-configuration-url). Set relevant ones in the local configuration file before starting the application.

For now the legacy Nuxeo token authentication is still the default. To use OAuth 2, first add an [OAuth 2 consumer]({{page version='' space='nxdoc' page='using-oauth2'}}#client-registration), then when adding a new account in Nuxeo Drive, simply uncheck the **Use legacy authentication** checkbox.

Related tickets: [NXDRIVE-2627](https://jira.nuxeo.com/browse/NXDRIVE-2627) and [NXDRIVE-2403](https://jira.nuxeo.com/browse/NXDRIVE-2403).

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-826](https://jira.nuxeo.com/browse/NXDRIVE-826).

### Fixes

#### Less Watchers

When starting the application, the local folder contents were watched, but also the parent folder too to detect changes on the local folder itself.

Thanks to the recent `watchdog` upgrade, watching the local folder parent is no more necessary as the current watched will detect events targeting itself.
Moreover, with the old behavior the application was watching huge trees for nothing. It was consuming resources and battery, and we would like to reduce such impact on the OS.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2633](https://jira.nuxeo.com/browse/NXDRIVE-2633).

#### Windows and UNC Paths

Options taking a path a value are now supporting UNC paths (shared folders).
This completes the UNC paths support on Windows.

Reminder: to be able to use a UNC path for the synchronization folder, it is required to set `nofscheck = true` in the local configuration file.

Related ticket: [NXDRIVE-33](https://jira.nuxeo.com/browse/NXDRIVE-33).

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2630](https://jira.nuxeo.com/browse/NXDRIVE-2630).

#### Paths in Local Config File

The configuration file parser has been fixed to handle again path-like options.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2622](https://jira.nuxeo.com/browse/NXDRIVE-2622).

### Improvements

#### Fresh Account Tab

The Accounts tab in the Settings screen has been improved and is now visually closer to the interface of Direct Transfer and the new Synchronization tab.

SCREENSHOT

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2618](https://jira.nuxeo.com/browse/NXDRIVE-2618).

#### About Features Sates

In order to follow the [wygiwys principle](https://en.wikipedia.org/wiki/WYSIWYG), when manually changing the state of a feature, the state of all features will now be written into the local configuration file. the old behavior was saving only the impacted feature.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2612](https://jira.nuxeo.com/browse/NXDRIVE-2612).

## Direct Edit

### Fixes

The Direct Edit experience has been made more robust by better handling HTTP 404 (Not Found), 502 (Bad Gateway), 503 (Service Unavailable) and 504 (Gateway Timeout) errors.

Related ticket: [NXDRIVE-2621](https://jira.nuxeo.com/browse/NXDRIVE-2621).

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2608](https://jira.nuxeo.com/browse/NXDRIVE-2608).

## Direct Transfer

### Features

Allowing transfers into the Personal Space folder can be problematic. So we added a new option to hide it from the Direct Transfer window: [dt-hide-personal-space](https://doc.nuxeo.com/client-apps/nuxeo-drive/#dt-hide-personal-space).

The option can be set globally from the server configuration, and it will be taken into account almost instantly by all clients without requiring a restart of the application.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2632](https://jira.nuxeo.com/browse/NXDRIVE-2632).

### Fixes

When choosing a folder or a file in the direct Transfer window, symbolic links are now ignored to prevent dangerous or unhandled behaviors.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2635](https://jira.nuxeo.com/browse/NXDRIVE-2635).

## Synchronization

### Fixes

The synchronization engine has been made more robust against HTTP 405 (Method Not Allowed), 408 (Request Timeout) and 504 (Gateway Timeout) errors.

Related tickets: [NXDRIVE-2624](https://jira.nuxeo.com/browse/NXDRIVE-2624) and [NXDRIVE-2636](https://jira.nuxeo.com/browse/NXDRIVE-2636).

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXDRIVE-2609](https://jira.nuxeo.com/browse/NXDRIVE-2609).

## Download Links

- [GNU/Linux binary](https://community.nuxeo.com/static/drive-updates/beta/nuxeo-drive-5.2.0-x86_64.AppImage)
- [macOS](https://community.nuxeo.com/static/drive-updates/beta/nuxeo-drive-5.2.0.dmg)
- [Windows](https://community.nuxeo.com/static/drive-updates/beta/nuxeo-drive-5.2.0.exe)
