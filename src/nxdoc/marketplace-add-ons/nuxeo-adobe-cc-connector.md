---
title: Nuxeo Adobe CC Connector
description: Nuxeo Adobe CC Connector enables designers to import assets into an InDesign, Photoshop or Illustrator document directly from the Nuxeo repository.
review:
    comment: ''
    date: '2016-12-07'
    status: ok
toc: true
---

The [Nuxeo Adobe CC Connector addon](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-cc-connector-marketplace) enables designers to import assets into an InDesign, Photoshop or Illustrator document directly from the Nuxeo repository. Link to the repository is maintained so as to facilitate updates of the referenced assets.

![]({{file name='NuxeoCCConnector.png'}} ?w=200,h=303,border=true)

## Requirements

Nuxeo Adobe CC Connector is compliant with Adobe CC 2015 and 2017.

## Installation

Installation is made of two steps:

1.  Install the [Nuxeo Package](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-cc-connector-marketplace) available from the marketplace.
2.  Install the client side plugin. It is available as a zip on the marketplace page. Unzip the client side plugin in the following location:
    *   On OS X, into `~/Library/Application\ Support/Adobe/CEP/extensions`. We recommend you remove the previous client-side extensions/files. Be sure to close, then open the applications if you had them opened before installing the update.
    *   In your Window/extensions view in the Creative suite, you will now see a "Nuxeo CC" option.

A new extension "Nuxeo CC Connector" is now available on your Photoshop, InDesign or Illustrator Application.

## Configuration

A connection to your Nuxeo server must be implemented. Go to the settings part of the connect and fill the following information:

*   Choose between HTTP and HTTPS
*   Type your Nuxeo server address: [http://localhost:8080/nuxeo](http://localhost:8080/nuxeo) for example
*   Type your login and password

## Functional Overview

### Assets Listing View

By default, all assets with the facet "Picture" will be displayed, with a maximum of 35 by default.

Each displayed asset comes with a **card view** containing:

*   The thumbnail of the asset
*   Customized information: filename, format and modification date.
*   For Photoshop so far: a green checkbox added when the document is already placed on the current project.

You can **search** for assets, using one of the following options:

*   On document title: only documents with the keyword in their title are returned.
*   On folder title: search results show all the assets located in folders whose title matches the keyword.

![]({{file name='NuxeoCCConnector_search.png'}} ?w=600,h=506,border=true)

### Asset View

When selecting an asset, you are redirected to the asset view, that shows the following information:

*   The asset thumbnail
*   The asset filename with a link: it enables the user to directly open the asset on the Nuxeo instance
*   The same customized fields as on the document listing view: format and modification date

![]({{file name='NuxeoCCConnector_assetView.png'}} ?w=400,border=true)

### Update / Place / Synchronization

Depending on the Adobe application some actions are available on the asset view:

*   On **Photoshop**: "Open", "Place", "Update" or "Delete" pictures/PSD projects
*   On **InDesign** and **Illustrator**: "Place" pictures.


Updated documents in the Nuxeo instance or in an Adobe application will be replicated everywhere. A red icon indicates that synchronization to the server has to be done.

![]({{file name='NuxeoCCConnector_sync_required.png'}} ?w=400,h=376,border=true)

* * *

<div class="row" data-equalizer data-equalize-on="medium">
<div class="column medium-6">
{{#> panel heading='Related Documentation'}}

- [Digital Asset Management (DAM)]({{page page='digital-asset-management-dam'}})

{{/panel}}
</div>
<div class="column medium-6">

</div>
</div>
