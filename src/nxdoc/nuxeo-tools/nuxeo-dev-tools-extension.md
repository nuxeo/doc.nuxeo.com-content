---
title: Nuxeo Dev Tools Extension
description: The Nuxeo Dev Tools extension places some of the more commonly performed actions in the Nuxeo Platform at the administrator's fingertips in a convenient browser popup window.

review:
    date: '2017-06-27'
    status: ok
    comment: ''
labels:
    - lts2016-ok
tree_item_index: 200

---
{{! excerpt}}

The Nuxeo Dev Tools browser extension places some of the more commonly performed actions in the Nuxeo Platform at the administrator's fingertips in a popup window in Google Chrome or Mozilla Firefox.

{{! /excerpt}}

![Nuxeo Dev Tools extension]({{file name='nuxeo-dev-tools-extension.png'}} ?w=600,border=true)

## Installation

### Requirements
The Nuxeo Dev Tools extension requires Nuxeo Platform 8.2 and above.

### Installation from the Stores

You can install it directly from the [Chrome Web Store](https://chrome.google.com/webstore/detail/nuxeo-extension/kncphbjdicjganncpalklkllihdidcmh) or [Mozilla Add-ons](https://addons.mozilla.org/en-US/firefox/addon/nuxeo-dev-tools/).

### Building from GitHub

Alternatively you can build from our GitHub repository:

```
$ git clone git@github.com:nuxeo/nuxeo-chrome-extension.git
$ cd nuxeo-chrome-extension
$ npm install && bower install
$ gulp build:<browser>
```

## Features

Features include:
* Hot Reload on related Studio project
* Link to Studio project
* Link to Automation Documentation
* Restart server
* Rebuild Elasticsearch Index
* Connect to API Playground
* Toggle Automation Call Tracing
* Useful Links menu
* Document Search with JSON export (search with path, GUID or file name)
    ![Searching documents from the Nuxeo Dev Tools extension]({{file name='nuxeo-dev-tools-extension-search.png'}} ?w=600,border=true)<br /><br />
* One-click JSON export of document in current active tab
    ![JSON Export of a document using the Nuxeo Dev Tools extension]({{file name='nuxeo-dev-tools-extension-json-export.png'}} ?w=600,border=true)

{{#> callout type='info' heading='Learn more'}}

*   [Nuxeo Dev Tools course from Nuxeo University](https://university.nuxeo.com/store/199348-nuxeo-dev-tools)

{{/callout}}

## Limitations

* Multiple Nuxeo projects are not supported.
* The extension is only active when a Nuxeo instance in the current active tab.
* The Hot Reload and Go To Studio buttons are only active when a Studio project is associated with the current Nuxeo server.
* [CORS config]({{page page='cross-origin-resource-sharing-cors'}}) must be activated in your Nuxeo server to connect to your repository on API Playground.

## Roadmap

Planned improvements for the browser extension:


<iframe src="https://ext.prodpad.com/ext/roadmap/3cb7ad79a0f9fce3382633f486d40cfa15430ece" height="210" width="100%"></iframe>

You can also give us your feedback and suggestions through our [feedback portal](https://portal.prodpad.com/40c295d6-739d-11e7-9e52-06df22ffaf6f).
