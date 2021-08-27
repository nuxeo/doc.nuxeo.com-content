---
title: Nuxeo Android Connector
review:
    comment: ''
    date: ''
    status: ok
labels:
    - android
    - lts2015-ok
    - android-connector-component
    - mobile
    - todo
confluence:
    ajs-parent-page-id: '28475539'
    ajs-parent-page-title: Additional UI Frameworks
    ajs-space-key: NXDOC710
    ajs-space-name: Nuxeo Platform Developer Documentation — LTS 2015
    canonical: Nuxeo+Android+Connector
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC710/Nuxeo+Android+Connector'
    page_id: '28475544'
    shortlink: mICyAQ
    shortlink_source: 'https://doc.nuxeo.com/x/mICyAQ'
    source_link: /display/NXDOC710/Nuxeo+Android+Connector
tree_item_index: 300
history:
    -
        author: Solen Guitter
        date: '2013-09-05 17:44'
        message: ''
        version: '14'
    -
        author: Solen Guitter
        date: '2011-11-07 17:56'
        message: Migrated to Confluence 4.0
        version: '13'
    -
        author: Solen Guitter
        date: '2011-11-07 17:56'
        message: ''
        version: '12'
    -
        author: Thierry Delprat
        date: '2011-10-05 02:07'
        message: ''
        version: '11'
    -
        author: Thierry Delprat
        date: '2011-10-05 01:54'
        message: ''
        version: '10'
    -
        author: Thierry Delprat
        date: '2011-10-05 01:17'
        message: ''
        version: '9'
    -
        author: Thierry Delprat
        date: '2011-10-05 01:17'
        message: ''
        version: '8'
    -
        author: Thierry Delprat
        date: '2011-10-05 00:40'
        message: ''
        version: '7'
    -
        author: Thierry Delprat
        date: '2011-10-04 19:00'
        message: ''
        version: '6'
    -
        author: Thierry Delprat
        date: '2011-10-04 14:29'
        message: ''
        version: '5'
    -
        author: Thierry Delprat
        date: '2011-10-04 14:15'
        message: ''
        version: '4'
    -
        author: Thierry Delprat
        date: '2011-10-04 14:15'
        message: ''
        version: '3'
    -
        author: Thierry Delprat
        date: '2011-10-04 11:02'
        message: ''
        version: '2'
    -
        author: Thierry Delprat
        date: '2011-10-04 10:52'
        message: ''
        version: '1'

---
## What is Nuxeo Android Connector

{{! excerpt}}

Nuxeo Android Connector is a SDK to build Android Applications that communicate with a Nuxeo Server.

{{! /excerpt}}

## Nuxeo Content Automation

Nuxeo SDK for Android is based on Nuxeo Content Automation. Basically, the Android will use Automation REST API to communicate with the Nuxeo server.

Using Automation brings several advantages :

*   API calls is simple and very extensible
    (you can contribute new operations or chains via Nuxeo Studio or Nuxeo IDE)

*   Calls are efficient and easily cachable (REST + JSON Marshaling)

*   Thanks to Operation Chains, you can have a single call executing several operations within the same transaction

![]({{file name='Sélection_109.png'}} ?w=650,border=true)

The heart of Nuxeo SDK for Android is the Nuxeo Automation Client.

The version of the Automation Client is slightly different from the standard Java Automation Client because some dependencies are not the same (using Android SDK JSON on Android and Jackson on the standard Java).
But the API and the logic remain the same, only internal implementation is a little bit different.

In addition, as it will be presented later, the Nuxeo SDK for Android provides more than just the Automation Client.

## Android Connector Content Overview

The Android Connector is a single library that provides the required infrastructure to build an Android application that uses services and content from a Nuxeo server.

This connector includes :

*   a [Nuxeo Automation client]({{page page='nuxeo-automation-client'}})

*   [caching extension to Automation Client ]({{page page='android-connector-and-caching'}}) to manage offline mode

*   [additional services ]({{page page='android-connector-additional-services'}}) (FileUploader, FileDownloader ...)

*   a model to [manage synchronizable Document lists ]({{page page='documentproviders-in-android-connector'}}) with support for offline usage

*   an integration layer to expose [Nuxeo concepts the Android Way ]({{page page='android-sdk-integration'}}) (Content Providers, BroadCastReceivers, Services ...)

*   a layout system to be able to reuse [Nuxeo Layout]({{page page='nuxeo-layout-in-android'}})'s definition to build forms and views on Android

*   [base classes ]({{page page='sdk-provided-base-classes'}}) for building an Android Application

## Getting the Connector and the Source Code

Source code for Nuxeo Android Connector is available in [Nuxeo's GitHub](https://github.com/nuxeo/nuxeo-android) .

## Sample Application
