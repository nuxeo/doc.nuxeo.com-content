---
title: Nuxeo for Adobe CC
description: 'The Nuxeo for Adobe CC addon enables creative users to interact directly with Nuxeo repository assets from within InDesign, Photoshop or Illustrator.'
review:
    comment: ''
    date: '2018-07-30'
    status: ok
labels:
    - adobe-cc
    - lmcintyre
    - addon
toc: true
confluence:
    ajs-parent-page-id: '16089349'
    ajs-parent-page-title: Nuxeo Add-Ons
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Nuxeo+Adobe+CC+Connector
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Nuxeo+Adobe+CC+Connector'
    page_id: '31686663'
    shortlink: B4DjAQ
    shortlink_source: 'https://doc.nuxeo.com/x/B4DjAQ'
    source_link: /display/NXDOC/Nuxeo+Adobe+CC+Connector
tree_item_index: 850
---

{{! excerpt}}
The [Nuxeo for Adobe CC](https://connect.nuxeo.com/nuxeo/site/marketplace/package/adobe-connector-package) connector enables [Adobe Creative Cloud users](https://www.nuxeo.com/integration/adobe-creative-suite/) to import assets into an InDesign document directly from the Nuxeo repository. Link to the repository is maintained so as to facilitate updates of the referenced assets. Users can access the assets directly from Illustrator or Photoshop to make edits and trigger update warnings in InDesign.
{{! /excerpt}}

## Requirements

Nuxeo for Adobe CC is compliant with Adobe CC 2018 and 2019 and requires Nuxeo Platform 9.10 or newer.

## Support

For support related to the connector, please contact Nuxeo Support via your regular support channels.

## Installation

Installation is made of two steps:

1. Install the [server-side Nuxeo Package](https://connect.nuxeo.com/nuxeo/site/marketplace/package/adobe-connector-package) available from the marketplace.
  {{#> callout type='info' }}
  If you have previously used a Nuxeo Adobe connector, clear the application preferences by pressing and holding `Alt+Control+Shift` (on Windows) or `Option+Command+Shift` (on macOS) as you start Photoshop/InDesign/Illustrator
  {{/callout}}
2. Please contact Nuxeo Sales at contact@nuxeo.com for access to the local client side plugin installation.

Once the installation done, a new extension "Nuxeo CC Connector" is available on your Photoshop, InDesign or Illustrator application.

### Licensing Information

Once Nuxeo for Adobe CC is properly installed, launch InDesign CC 2018 or 2019 (licensing dialog does not appear in Photoshop or Illustrator) to see a dialog requesting license information:

- If you have a license key for Nuxeo CC Connector (provided to you by Nuxeo Sales), click “Yes” to activate now, or click “No” to activate later. You can activate in InDesign later via the Nuxeo dropdown menu item.

If you have questions related to licensing, contact your Nuxeo sales representative or contact Nuxeo at contact@nuxeo.com.

## Using the Nuxeo CC Connector

### Logging into Your Server

From the main InDesign, Photoshop or Illustrator menu, choose **Window** > **Extensions** > **Nuxeo CC Connector**

{{!--     ### NX_ASSET ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Nuxeo for Adobe CC /Adobe Extension Connector
    name: image10.png
    addins#popup#up_to_date
--}}
![Adobe Extension Connector](nx_asset://1e5e80d2-537d-4f49-8fc5-046623d3b567 ?w=350,border=true)

This will launch Connector and the Server Setup panel.

{{!--     ### NX_ASSET ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Nuxeo for Adobe CC /Adobe Connector Setup tab
    name: image7.png
    addins#popup#up_to_date
--}}
![Adobe Connector Setup tab](nx_asset://d7a36c14-7a39-47c8-a8ba-d0a199ee44f5 ?w=150,border=true)

Initially, you will need to create a server listing for your Nuxeo Instance. Once the listing is created, you can simply select it to log in.</br>
To create your server listing:
1. Fill in the field **New Server Name** with a "friendly value" to represent your Nuxeo instance.
1. Fill in the field **New Server URL** with the address of your Nuxeo instance (this is the same URL you would use to access your Nuxeo instance via the web. Be sure to include the `http/https` value and leave off any `/nuxeo` that might be included).
  {{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo for Adobe CC /Adobe Add server to list
    name: image16.png
    addins#popup#up_to_date
  --}}
  ![Adobe Add server to list](nx_asset://daff5596-bd62-41af-93e7-14753d921e31 ?w=200,border=true)
1. Click **Add Server to List** button. You should now see this value in your “Server List”
  {{!--     ### NX_ASSET ###
      path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Nuxeo for Adobe CC /Adobe Select Server name
      name: image4.png
      addins#popup#up_to_date
  --}}
  ![Adobe Select Server name](nx_asset://93a5cd9d-53bf-44c3-978e-017e7e50760c ?w=200,border=true)

To login:
1. Select your server from the list and click **Connect**. This will launch the Nuxeo login panel.
1. Enter your username and password and click **Log In**.

{{!--     ### NX_ASSET ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Nuxeo for Adobe CC /Adobe login connector
    name: image11.png
    addins#popup#up_to_date
--}}
![Adobe login connector](nx_asset://60bb96ca-75a3-4dc4-92d4-0e1a5cdf90bf ?w=350,border=true)

You should now see the connector populated with images that reside in your Nuxeo Instance.

To logout, simply select **Log Out** from the Nuxeo Connector fly out menu.

{{!--     ### NX_ASSET ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Nuxeo for Adobe CC /Adobe Connector Populated
    name: adobe-connector-populated.png
    addins#popup#up_to_date
--}}
![Adobe Connector Populated](nx_asset://c6d1d869-c0c1-41f9-9d69-82779c45aa7c ?w=350,border=true)

{{#> callout type='info'}}
You can always access the fly out menu by clicking on the burger menu in the upper right corner of the connector.
{{/callout}}

### Preferences

The connector has a number of customizable preferences to enhance your workflow. Below are the preferences available within InDesign.

{{!--     ### NX_ASSET ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Nuxeo for Adobe CC /Adobe Preferences
    name: image6.png
    addins#popup#up_to_date
--}}
![Adobe Preferences](nx_asset://68f83321-f2ef-45fe-9158-9c074c7427ea ?w=350,border=true)

**Place Options (InDesign only)**
- Replace Selected on place
  - when checked: Replaces any selected object with the asset you drag onto the page.
  - When unchecked: Dragging an item to the page, places it as a new object.
- Choose between High and Low Resolution on Place

**Download Options**
- Open File on Download
  - when checked: Opens any downloaded file if possible (depends on Adobe app).
- Save to default folder: Saves downloaded files to your `User Documents\nuxeo_connector_files\downloads` folder.
  - When unchecked: the User will be presented with the System browser to choose a folder.
- Choose folder location: Select the location for your downloads.

**Asset View**
- Use Grid view: Displays assets in a gallery.
- Use List view: Displays individual assets at width of the Connector panel, providing file name when hovered over the bottom of each asset.

**Troubleshooting**
- Write to log file: When checked, creates a log file in your `Documents/nuxeo_connector_files` folder
- Clear log file: Click this to clear the log file.

## Functional Overview

### Finding Content (InDesign, Photoshop and Illustrator)

The connector has three tabs, each with slightly different behavior: Search, Browse and Other.

Each tab uses a different page provider, included with the server-side Nuxeo for Adobe CC package, to control behavior. The page providers can be overridden in Nuxeo Studio to reflect your own content model and needs, such as displaying more results per page. For more information on page providers and overriding them, read the [related documentation]({{page version='' space='nxdoc' page='page-providers'}})

#### Search Tab

By default, when logging into the repository via the connector, the first view you see is the search tab.
The search bar supports wildcard operations, as in the example, and search the full-text index of the repository (including file names, and metadata fields).

{{!--     ### NX_ASSET ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Nuxeo for Adobe CC /Adobe Search Tab
    name: image8.png
    addins#popup#up_to_date
--}}
![Adobe Search Tab](nx_asset://f0901da6-6aca-488f-b243-2a4fb3dcfc4d ?w=250,border=true)

The Search tab allows you to search through all the repository at one time. It uses a page provider `adobe-connector-all-images` to control the objects searched and the query results.

Once you’ve entered your search terms in the Search field, clicking on the search icon lists the results below.

Results are shown in pages and you can navigate between pages using the arrow keys at the bottom of the panel.

You can also jump to a given page.

Whenever using the connector, if you want to perform a search, you can choose **Search** from the Nuxeo CC Connector panel fly out menu, or just click on the Search widget.

To see more information about the object, double click the thumbnail to see more information.
Each object comes with a detail view containing:
- The thumbnail of the asset
- Filename/title, creator, usage info (mapped to dc:rights) and the lifecycle state.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Nuxeo for Adobe CC /Adobe Ryan Walton Copyright
    name: adobe-ryan-walton.png
    addins#screenshot#up_to_date
--}}
![Adobe Ryan Walton Copyright](nx_asset://b9a94926-47fc-49cb-ac23-f98e0906a734 ?w=250,border=true)

To download a copy of an asset from Nuxeo CC Connector, click the blue download arrow to the right of the thumbnail to begin the download process. For more information, see Download Options in [Preferences section](#preferences).

#### Browse Tab

{{!--     ### NX_ASSET ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Nuxeo for Adobe CC /Adobe Browse tab
    name: image14.png
    addins#popup#up_to_date
--}}
![Adobe Browse tab](nx_asset://56631c62-1a5a-4e54-a683-00658ebf0b31 ?w=350,border=true)

The Browse tab allows you to browse through the hierarchical setup of the repository. It uses the `adobe-connector-browse` page provider. While browsing, you can still use the search bar; the search content is limited to the level in the hierarchy that you are currently viewing. You have the choice between a grid view (default) and a list view. You can toggle between view options using the buttons near the search bar.

The browse tab is easy to use by clicking on the folders in the hierarchy. Note that as you click through the repository, a breadcrumb is generated just above the content view, which allows you to easily go back to any point within your path. Simply click on one of the levels to change location. If your path becomes too long to fit the panel, a slider appears to allow you to move “up” or “down” the path.

As indicated earlier, to see more information about an object, double click into the item to see the detail view, where you can also download the file.

#### Other Tab

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo for Adobe CC /Adobe Other tab
    name: Screen Shot 2019-06-13 at 1.38.03 PM.png
    addins#popup#up_to_date
--}}
![Adobe Other tab](nx_asset://a11de8e1-2171-43ca-a63c-e3b55581b293 ?w=350,border=true)

By default, the other tab displays the collections you have access to. You will see the search bar here, but it is not supported within collections.

The Other tab, by default, is configured to work with the Collections within your repository. Two separate page providers are used to surface the collections and their content: `adobe-connector-other_primary` and `adobe-connector-other_secondary`. It is called "other" because you could configure it to show any "other" two step page provider query you want such as "Favorites".


#### Working in InDesign

Nuxeo CC Connector Menu Listings (accessed via the burger menu)

{{!--     ### NX_ASSET ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Nuxeo for Adobe CC /Adobe Connector Populated
    name: adobe-connector-populated.png
    addins#popup#up_to_date
--}}
![](nx_asset://c6d1d869-c0c1-41f9-9d69-82779c45aa7c ?w=350,border=true)

The Nuxeo CC Connector fly out menu has several options to assist the user:
- **About** takes you to our [website](https://www.nuxeo.com/)
- **Refresh** re-establishes an updated connection to your current folder
- **Upload from Disk** opens your System Browser to upload an asset to your current Connector folder
- **Upload Selected** uploads locally placed assets in InDesign to your current Connector folder (be sure to use “Relink…” as described below once saved)
- **Upload InDesign Document** uploads open (If saved) InDesign doc to your current Connector folder. You will be presented with an Upload option to either, Upload New File, or Replace.
- **Compound Doc Info** ensures HTTP links record a proper ID on the Nuxeo Server
- **Upload All Non-HTTP Assets** uploads all locally placed InDesign assets from your open InDesign document to your current Connector folder
- **Relink to Current Folder** relinks locally placed InDesign assets to the Current Connector folder, if they can be found there
- **Preferences** opens Nuxeo CC Connector Preferences
- **About Silicon Publishing** takes you to siliconpublishing.com


We can use the above menu items to work with the Nuxeo repository from within the Creative Cloud application

Starting from a **new INDD file**:
1. Start with new INDD file
1. Locate items from within the repository to place
1. Once you’ve found an image to use, drag it into to your InDesign document (can be from any view).
    {{#> callout type='note' }}
    Before dropping it, releasing your mouse button to load your cursor with the asset’s thumbnail. Then drag your image to size and place it into your document.
    {{/callout}}
1. If you are a power user who needs InDesign’s **Show Import Options** for PDF or other image types, hold down the alt/option key when you drag and drop.
1. For local files, place them as usual, then use the connector menu panel to upload them to the repository.
1. Select the local files and choose to “upload selected items” in the menu list
or
1. Use the menu list and choose to “upload non-http items”
1. Once local items are in the repository, be sure to “relink to current location” from the menu list. This will ensure the links are maintained server side.
1. If you have not already browsed to the location where you want to store the InDesign file, use the browse tab to navigate to your intended destination.
Upload the INDD document using the Nuxeo CC Connector fly out menu (Upload Indesign Document).

You will be asked if you want to **Upload new file** or **Replace**. As a new file, you need to choose **Upload new file** and then **Upload**.


{{!--     ### NX_ASSET ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Nuxeo for Adobe CC /Adobe Upload New File
    name: adobe-upload-new-file.png
    addins#popup#up_to_date
--}}
![](nx_asset://aea67a98-f744-4e9f-87cd-3efba00d1d22 ?w=350,border=true)


{{#> callout type='warning' }}
If you intend to continue working on this document, **immediately after** the initial save to the repository, **YOU MUST** first close the document, then open again by dragging and dropping the file from the panel, into the main InDesign window. This ensures future uploads of the file will be recognized as replacements for this file.
{{/callout}}

Working with an existing repository InDesign file:
To open InDesign files stored in the repository, simply drag and drop the file from the panel to the main view of the application.

After you have worked on your file (following instructions above for placing assets), use the Nuxeo Adobe Connector fly out menu to upload the file as before. Use "Replace" to update the same file in the DAM. Use "New" to create a new file in the DAM.

{{#> callout type='note' }}
If you did not open the InDesign file from the Connector panel (via drag and drop) and you choose “Replace”, you will still get a “new”/duplicate file in the repository.
{{/callout}}

Using the Nuxeo CC Connector includes features within the traditional InDesign Links panel as well.

{{!--     ### NX_ASSET ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Nuxeo for Adobe CC /Adobe Reveal in Nuxeo
    name: image13.png
    addins#screenshot#up_to_date
--}}
![](nx_asset://8b19591e-f3a8-43fb-9fa6-04c3116200e2 ?w=350,border=true)

Choose to work with the high resolution (HQ) or low resolution (LQ) rendition of the file by double clicking the entry in the Nuxeo column in the panel (you might need to expose the column in the “Panel Options” seen in the panel fly out).
Be notified when updates have been made to the placed repository items, so that you can update the items in the InDesign document (note - you also see this on the placed image within the document)
Select a link and choose to “Reveal in Nuxeo” which will open the file in your Nuxeo web instance to see more information about the file.

#### Working in Photoshop/Illustrator

Photoshop and Illustrator have both access to Nuxeo CC Connector when you install the program.

If you want to edit an existing file from your Nuxeo account:
1. Drag and Drop your asset from Connector, just like you would in InDesign.</br>
    A copy of the file will be saved locally at `nuxeo_connector_files\downloads` in your Documents folder, and then opened in your Adobe application.
1. Make your edits in Photoshop or Illustrator and **save**.
1. Once your local file is saved, choose **Upload Photoshop (Illustrator) Document** from the Nuxeo CC Connector fly out menu.</br>
    You will be presented with an option to either, **Upload New File**, or **Replace**.

    {{!--     ### NX_ASSET ###
        path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Nuxeo for Adobe CC /Adobe Upload New file
        name: adobe-upload-new-file.png
        addins#popup#up_to_date
    --}}
    ![](nx_asset://d435ccfb-4624-4e6f-8ca9-91c440b856b9 ?w=350,border=true)


When edits are made to repository content using the Connector, users in InDesign who have placed the content will be notified that updates are available.

<!--## Known limitations

-    Special characters (check with spi on other known issues)
-    Path issues (deep paths)
-    performance?
-->

## Uninstalling Nuxeo CC Connector

Nuxeo CC Connector has two parts: an extension to provide the panel and a plug-in to provide the underlying linking technology.

### On Mac

- Remove the extension folder:
```
/Library/Application Support/Adobe/CEP/extensions/NuxeoCCConnector.
```

- Remove the plug-in folder:
```
/Applications/Adobe InDesign CC 2018/Plug-Ins/SiliconConnectorNuxeo.
```

### On Windows
You can use the Windows Control Panel to uninstall Nuxeo for Adobe CC like you would do with any other installed application. If you need to uninstall manually, you can remove the following folders:
- Remove the extension folder:
```
C:\Program Files (x86)\Common Files\Adobe\CEP\extensions/NuxeoCCConnector.
```

- Remove the plug-in folder:
```
C:\Program Files\Adobe\Adobe InDesign CC 2018\Plug-Ins\SiliconConnectorNuxeo.
```

## Network Considerations (for Nuxeo Administrators)
Since Nuxeo CC Connector requires network access to Nuxeo and the Silicon Publishing licensing server, there are certain network requirements to consider. You may find that working from home, where there is not proxy or firewall, you can use Silicon Connector for Box without a problem, but at work you run into errors when trying to activate or use it.

### Proxy

You can configure your proxy settings in the `SC.properties` file located in:
- mac:
```
/Users/<username>/Library/Preferences/SiliconConnector/
```

- Windows:
```
C:\Users\username\AppData\Local\SiliconConnector\
```

This file can be edited with a basic text editor and is documented with definitions of each property. Properties should be formatted with `key=value syntax`, e.g. `sc.http.proxy_server=proxyserver.com`

### Firewall

If your company has a firewall, you will need to be sure to whitelist the Silicon Publishing licensing server. The url to whitelist is https://licensing.siliconpublishing.com.

## Roadmap

Below are the evolutions and improvements planned for the Nuxeo Adobe Connector.

<iframe src='https://ext.prodpad.com/ext/roadmap/8394e60a0789b66a7da9e54c9acee3d6a8d83f78' height='900' width='100%' frameborder='0'></iframe>
