---
title: Nuxeo Drive Update Site
review:
    comment: ''
    date: '2017-12-15'
    status: ok
labels:
    - lts2016-ok
    - nuxeo-drive
    - yachour
    - multiexcerpt
    - lts2017-ok
toc: true
confluence:
    ajs-parent-page-id: '14257229'
    ajs-parent-page-title: Nuxeo Drive
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Nuxeo+Drive+Update+Site
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Nuxeo+Drive+Update+Site'
    page_id: '19793145'
    shortlink: _QQuAQ
    shortlink_source: 'https://doc.nuxeo.com/x/_QQuAQ'
    source_link: /display/NXDOC/Nuxeo+Drive+Update+Site
tree_item_index: 300
history:
    -
        author: Manon Lumeau
        date: '2016-04-21 12:51'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2016-04-01 15:02'
        message: Update section Using a Custom Update Site to use update-site-url instead of org.nuxeo.drive.update.site.url
        version: '12'
    -
        author: Manon Lumeau
        date: '2016-03-21 15:25'
        message: ''
        version: '11'
    -
        author: Solen Guitter
        date: '2015-06-09 07:56'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2015-06-09 07:53'
        message: Format toc and update related pages
        version: '9'
    -
        author: Antoine Taillefer
        date: '2015-06-08 14:18'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2014-07-01 12:24'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2014-07-01 10:20'
        message: ''
        version: '6'
    -
        author: Antoine Taillefer
        date: '2014-06-30 15:27'
        message: ''
        version: '5'
    -
        author: Antoine Taillefer
        date: '2014-06-30 15:24'
        message: ''
        version: '4'
    -
        author: Antoine Taillefer
        date: '2014-06-30 15:18'
        message: ''
        version: '3'
    -
        author: Antoine Taillefer
        date: '2014-06-30 14:57'
        message: ''
        version: '2'
    -
        author: Antoine Taillefer
        date: '2014-06-30 14:12'
        message: ''
        version: '1'

---
{{! multiexcerpt name='update_site_page_content'}}

Since version 1.3.0611, Nuxeo Drive is able to update itself with a newer or an older version (such a downgrade can be required if the version of the Nuxeo server Nuxeo Drive is connected to is too old for the client version). This is very useful as it allows the user to keep the application up-to-date without having to manually install a new version.

The update process relies on an update site holding the Nuxeo Drive binary packages for Windows (MSI) and OS X (DMG) as well as available updates for both platforms packaged as ZIP files. This page aims to explain how this update site is structured in case you would like to host your own one to manage the update policy instead of relying on the official [Nuxeo update site](http://community.nuxeo.com/static/drive/).

## Using a Custom Update Site

The update site URL can be customized using the parameter `update-site-url`, its default value being [http://community.nuxeo.com/static/drive/](http://community.nuxeo.com/static/drive/). This parameter can be set up through the command line, a config.ini file or with a registry key for the Nuxeo Drive updater point at the custom site. See the [Nuxeo Drive configuration parameters documentation]({{page page='nuxeo-drive'}}) for more information.

Of course this update site will need to have the same structure as the one provided by Nuxeo, for the Nuxeo Drive updater to be able to communicate with it.

## Update Site Structure

The Nuxeo Drive update site is currently implemented as a simple directory listing served by Apache and that holds the following items.

### Binary Packages

The site must hold the Nuxeo Drive binary packages released for Windows (MSI) and OS X (DMG), for instance: `nuxeo-drive-1.3.0611-win32.msi` and `nuxeo-drive-1.3.0611-osx-10.7.dmg`.

These packages are aimed to be manually downloaded for the first Nuxeo Drive installation, though they can also be used to manually install a newer version in the place of an existing installation of Nuxeo Drive.

### Esky Compliant ZIP Files

It must also hold available updates for both platforms packaged as [esky](https://pypi.python.org/pypi/esky) compliant ZIP files (the auto-update framework for frozen Python applications). They must respect the following pattern:& `<application_name>-x.y.zzzz.<platform>`, for instance: `nuxeo-drive-1.4.0125.win32.zip` and `Nuxeo Drive-1.4.0125.macosx-10_7-x86_64.zip`.

### Metadata JSON Files

The update site must also contain JSON files representing the metadata about client and server versions. For instance:

*   `1.3.0611.json` holds the minimum Nuxeo server version compatible with Nuxeo Drive 1.3.0611.
*   `5.9.4.json` holds the minimum client version compatible with a Nuxeo Platform 5.9.4 instance.

This is how the Nuxeo Drive updater is able to compute the update status.

Let's say the Nuxeo Drive client version is 1.3.0611 and the version of the Nuxeo Platform instance it is connected to is 5.9.4\. It will first read the `5.9.4.json` file to see if the client version is compatible, meaning greater or equal than the `nuxeoDriveMinVersion` element. Let's say `nuxeoDriveMinVersion` is equal to 1.3.0611, we now know that an upgrade to a newer client is not required.

An update could still be available. To figure this out, the updater will check the JSON metadata files of all client versions compatible with the 5.9.4 server version looking for one more recent than 1.3.0611\. Imagine there is a `1.4.0125.json` file with 5.9.4 as a value of the `nuxeoPlatformMinVersion` element. Then, if the update site holds a ZIP file matching the 1.4.0125 version and the client platform, the update status will be `update_available`, allowing Nuxeo Drive to download the ZIP file and launch the update process.

This means that:

*   **For each Nuxeo Drive version deployed on the update site a JSON metadata file with the corresponding version needs to be deployed** (for instance 1.3.0611.json). It should have the following structure:

    ```
    {"nuxeoPlatformMinVersion": "5.6"}
    ```

*   **For each Nuxeo Platform version to which Nuxeo Drive might get connected a JSON metadata file with the corresponding version needs to be deployed** (for instance 5.9.4.json). It should have the following structure:

    ```
    {"nuxeoDriveMinVersion": "1.3.0414"}
    ```

### Symbolic Links to Packages

Symbolic links to both packages (MSI and DMG) of the latest Nuxeo Drive version available for a given version of the Nuxeo Platform, for instance in [http://community.nuxeo.com/static/drive/latest/](http://community.nuxeo.com/static/drive/latest/). This is used for the first download of Nuxeo Drive from the Nuxeo Drive tab of the user's Home on the Nuxeo Platform UI. The download links are generated server-side following this pattern: `<update_site_URL>/latest/<Nuxeo_distribution_version>/nuxeo-drive.<extension>`, for instance `http://community.nuxeo.com/static/drive/latest/5.9.4/nuxeo-drive.msi`.

{{! /multiexcerpt}}

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Other documentation about Nuxeo Drive'}}

- [How to Manually Initialize or Deploy a Nuxeo Drive Instance]({{page page='how-to-manually-initialize-or-deploy-a-nuxeo-drive-instance'}})
- [How to Customize Nuxeo Drive Versioning Policy]({{page page='how-to-customize-nuxeo-drive-versioning-policy'}})
- [Nuxeo Drive documentation]({{page page='nuxeo-drive'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
