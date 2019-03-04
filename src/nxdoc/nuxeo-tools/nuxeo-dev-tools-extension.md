---
title: Nuxeo Dev Tools Extension
description: "The Nuxeo Dev Tools extension places some of the more commonly performed actions in the Nuxeo Platform at the administrator's fingertips in a convenient browser popup window."
review:
    date: '2017-09-22'
    status: ok
    comment: ''
labels:
    - lts2016-ok
    - lts2017-ok  
    - university
tree_item_index: 200
toc: true
---
{{! excerpt}}
The Nuxeo Dev Tools browser extension puts some of the more commonly performed actions in the Nuxeo Platform at the administrator's fingertips in a popup window in Google Chrome or Mozilla Firefox.
{{! /excerpt}}

![Nuxeo Dev Tools extension]({{file name='nuxeo-dev-tools-extension.png'}} ?w=600,border=true)

{{#> callout type='info'}}
Watch the related courses on Nuxeo University
- [Video on the Nuxeo Browser Extension](https://university.nuxeo.com/learn/public/course/view/elearning/83/NuxeoDevTools)
{{/callout}}

## Installation

### Requirements

- The **Nuxeo Dev Tools** extension requires Nuxeo Platform 8.2 and above.
- If using an **LTS distribution**, all available hotfixes should be installed.

### Installation

You can install directly from the [Chrome Web Store](https://chrome.google.com/webstore/detail/nuxeo-extension/kncphbjdicjganncpalklkllihdidcmh) or [Mozilla Add-ons](https://addons.mozilla.org/en-US/firefox/addon/nuxeo-dev-tools/).

### Building from GitHub

Alternatively you can build from our [GitHub repository](https://github.com/nuxeo/nuxeo-browser-extension):

```
$ git clone git@github.com:nuxeo/nuxeo-browser-extension.git
$ cd nuxeo-browser-extension
$ npm install
$ gulp clean build
```

## Features

Features include:
- **Hot Reload** of your registered Nuxeo Studio project
- **Designer Live Preview** of Web UI customizations
- **Restart** server
- Rebuild **Elasticsearch** Index
- Connect to **API Playground**
- **Automation Call Tracing** toggle
- **Useful Links** menu
- **Document Search** with JSON export (search with path, GUID or file name)
    ![Searching documents from the Nuxeo Dev Tools extension]({{file name='nuxeo-dev-tools-extension-search.png'}} ?w=600,border=true)
- One-click **JSON export** of document in current active tab
    ![JSON Export of a document using the Nuxeo Dev Tools extension]({{file name='nuxeo-dev-tools-extension-json-export.png'}} ?w=600,border=true)
- **Chrome Omnibox** to search for documents without even opening the extension
- Link to our **Customer Feedback Portal** from the **About** page. You can vote for requested features or even suggest your own, anonymously if you wish.

### Hot Reload

Hot reloading updates your instance with all your Nuxeo Studio customizations.

1. Install the extension (see [Installation](#installation) or [Building from GitHub](#building-from-github)).
1. Make sure **Dev mode** is enabled by checking your `nuxeo.conf` file (`org.nuxeo.dev=true` should be enabled).
1. Start your Nuxeo instance.</br>
1. Modify your Studio Project.
1. Go to your running server.
1. In the extension bar, open the Nuxeo Dev Tools extension.
1. In the pop-up window, click on **Hot Reload**. When the browser refreshes, the instance will be updated with your modifications.

### Designer Live Preview

Preview your Web UI customizations without having to wait for a hot reload.

1. Open your browser and navigate to your Nuxeo instance.
1. In a separate tab, log into Studio.
1. From the browser extension, activate the **Designer Live Preview** toggle.
1. Customize the Web UI from Studio Designer and save your changes.
1. Refresh your browser and see your customizations in the Web UI!

### Chrome Omnibox

- In the Chrome URL field, enter `nx` then hit tab. This will activate the **Nuxeo Dev Tools** omnibox.
- Enter the **correct path** or **GUID** of an existing document and the document JSON will open in a separate tab.
- Entering plain text will perform a **full-text search**, or you can enter an **NXQL query**.
- Searches return the first 5 results in a dropdown window from the omnibox.
  ![Chrome Omnibox search]({{file name='omnibox.gif'}} ?w=600,border=true)

## Limitations

- Multiple Studio projects are not supported.
- The extension is only active when a Nuxeo instance is in the current active tab.
- The **Hot Reload** and **Designer Live Preview** buttons are only active when a Studio project is associated with the current Nuxeo server.
- You must have **Administrator** access for some features.
- **Dev Mode** must be activated to benefit from the **Hot Reload** feature.
- [**CORS config**]({{page version='' space='nxdoc' page='cross-origin-resource-sharing-cors'}}) must be activated in your Nuxeo server to connect to your repository on API Playground.
- Some features may not behave correctly in **Incognito/Private** mode.
- Designer Live Preview with HTML imports is [currently unavailable](https://bugs.chromium.org/p/chromium/issues/detail?id=803115) in Chrome.

## Feedback

Please feel free give us your feedback and suggestions through our [feedback portal](https://portal.prodpad.com/40c295d6-739d-11e7-9e52-06df22ffaf6f).
