---
title: Nuxeo WebDAV
description: Nuxeo supports the WebDAV protocol enabling you to create and edit Office documents stored in the Nuxeo Platform directly from your OS desktop.
review:
    comment: ''
    date: '2026-06-12'
    status: ok
labels:
    - webdav
toc: true
tree_item_index: 2780
---

{{! excerpt}}
[Nuxeo WebDAV](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-webdav) adds support for the WebDAV (Web-based Distributed Authoring and Versioning) protocol to the Nuxeo Platform, enabling you to create and edit Office documents stored in the Nuxeo Platform directly from your OS desktop, without having to go through your Nuxeo application in a browser.
{{! /excerpt}}

{{#> callout type='info' heading='Since Nuxeo LTS 2025'}}
WebDAV is no longer shipped by default with the Nuxeo server. To keep using the WebDAV protocol with Nuxeo LTS 2025 or later, install the `nuxeo-webdav` Nuxeo Package on your server.
{{/callout}}

## Installation

{{{multiexcerpt 'MP-installation-easy' page='Generic Multi-Excerpts'}}}

## Functional Overview

{{! multiexcerpt name='webdav-functional-overview'}}

After installing the `nuxeo-webdav` package, you just need to add the Nuxeo Platform as a network drive. You will then be able to perform the following actions on Nuxeo MS Office documents from your OS desktop directly:

*   Create documents and folders
*   Edit documents
*   Move documents and folders

{{#> callout type='info' heading='Nuxeo Drive'}}
There are several known limitations with using the WebDAV protocol on Windows machines to connect to the Nuxeo Platform: temporary files that are stored in the Nuxeo Platform, technical name displayed instead of title of the document. We do not recommend mounting WebDAV drives on Windows machines except for specific use cases. The behavior can vary depending on the version of Windows and service pack.

We recommend you to pay attention to [Nuxeo Drive]({{page version='' space='client-apps' page='nuxeo-drive'}}) that can offer you a file system access style without the above mentioned drawbacks.
{{/callout}}

### Adding the Nuxeo Platform as an External Drive

Depending on your OS, the steps to follow so the Nuxeo Platform is seen by the OS as an external drive are different depending on your OS.

{{#> callout type='note' heading='Requirement'}}
The first time you do the mapping, make sure that you have already logged in to the web interface once. This is required to setup the Windows authentication protocol.
{{/callout}}

#### Mapping a Network Drive from Windows Explorer

1.  Open the Windows Explorer.
2.  Click **Map network drive**.
3.  Choose a Drive letter.
4.  In **Folder**, type the address of your Nuxeo application adding the **site/dav/** suffix, for instance `https://NUXEO_SERVER/nuxeo/site/dav/`.
    Make sure **Connect using different credentials** is selected.
5.  Click on **Finish**.
    A connect window opens.
6.  Type your login and your password and click on the **OK** button.

#### Connecting to the Nuxeo Platform from macOS Finder

1.  From the Finder open the **Connect to Server** popup.
2.  Type the address of your Nuxeo application adding the **site/dav/** suffix, for instance `https://NUXEO_SERVER/nuxeo/site/dav/`.
3.  A connect window opens. Type your login and your password and click on the **OK** button.

#### Connecting to the Nuxeo Platform from Linux

The package comes with a default configuration which supports only a few clients. On Linux, it supports:

*   cadaver, which enables you to browse the content of the Nuxeo application in command line like you would do with a FTP server
*   davfs, which enables your to mount the Nuxeo Platform and see it as a file system directory

It is possible to [configure the application to work with other WebDAV clients](#adding-a-new-webdav-client).

### Browsing the Nuxeo Platform from Your OS

After you added the Nuxeo application as an external drive, you can browse the content of the Nuxeo Platform from your OS. You can see:

*   Workspaces
*   Folders
*   Templates
*   Files
*   Notes
*   Pictures

### Editing Documents

You can edit office documents available in your Nuxeo workspaces and folders from your OS, like any other local documents.
The document is automatically locked in the Nuxeo Platform. When you save your modifications, they are saved in the Nuxeo Platform directly. When done, closing the document will unlock the document in the Nuxeo Platform.

### Creating Content in the Nuxeo Platform

You can create folders and documents in the Nuxeo Platform from your desktop.
To create documents in a Nuxeo folder or workspace, you can:

*   Drag and drop files from a local folder into the target Nuxeo folder,
*   Create the document in the native office application and save it in the Nuxeo folder.

You can then create, copy and move documents and folders in the Nuxeo Platform via the Windows Explorer or Mac Finder the same way you would do in a local folder.

{{! /multiexcerpt}}

## Adding a New WebDAV Client

{{! multiexcerpt name='webdav-client-configuration'}}

The package comes with a default configuration which supports only a few clients among Windows's built-in one, litmus, davfs, cadaver. If your usual client is not listed, you can override this configuration by adding a new file `webdav-authentication-config.xml` under `$NUXEO/nxserver/config/` and update the list associated to the header.

Below is an example where BitKinex is added:

```xml
<?xml version="1.0"?>
<component name="org.nuxeo.ecm.platform.wi.auth.config.custom">

  <require>org.nuxeo.ecm.platform.wi.auth.config</require>

  <extension target="org.nuxeo.ecm.platform.ui.web.auth.service.PluggableAuthenticationService" point="specificChains">

    <specificAuthenticationChain name="WebDAV">
      <headers>
        <header name="User-Agent">(Microsoft-WebDAV-MiniRedir|DavClnt|litmus|gvfs|davfs|WebDAV|cadaver|BitKinex).*</header>
      </headers>

      <replacementChain>
        <plugin>DIGEST_AUTH</plugin>
        <plugin>WEBDAV_BASIC_AUTH</plugin>
      </replacementChain>
    </specificAuthenticationChain>
  </extension>

</component>
```

{{! /multiexcerpt}}
