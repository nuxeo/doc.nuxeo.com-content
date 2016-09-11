---
title: Nuxeo Drive Update Site
review:
    comment: ''
    date: ''
    status: ok
labels:
    - nuxeo-drive
    - last-review-20150609
    - content-review-lts2015
    - nuxeo-drive-component
toc: true
confluence:
    ajs-parent-page-id: '28475453'
    ajs-parent-page-title: Nuxeo Drive
    ajs-space-key: NXDOC710
    ajs-space-name: Nuxeo Platform Developer Documentation — LTS 2015
    canonical: Nuxeo+Drive+Update+Site
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC710/Nuxeo+Drive+Update+Site'
    page_id: '27604629'
    shortlink: lTalAQ
    shortlink_source: 'https://doc.nuxeo.com/x/lTalAQ'
    source_link: /display/NXDOC710/Nuxeo+Drive+Update+Site
history:
    - 
        author: Manon Lumeau
        date: '2016-03-21 15:55'
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

&nbsp;

Since version 1.3.0611, Nuxeo Drive is able to update itself with a newer or an older version (such a downgrade can be required if the version of the Nuxeo server Nuxeo Drive is connected to is too old for the client version). This is very useful as it allows the user to keep the application up-to-date without having to manually install a new version.

The update process relies on an update site holding the Nuxeo Drive binary packages for Windows (MSI) and OS X (DMG) as well as available updates for both platforms packaged as ZIP files. This page aims to explain how this update site is structured in case you would like to host your own one to manage the update policy instead of relying on the official [Nuxeo update site](http://community.nuxeo.com/static/drive/).

## Using a Custom Update Site

The update site URL is configured server-side by the `org.nuxeo.drive.update.site.url` Nuxeo framework property, default value being [http://community.nuxeo.com/static/drive/](http://community.nuxeo.com/static/drive/). So you only need to override this property in&nbsp; [`nuxeo.conf`]({{page space='admindoc710' page='configuration-parameters-index-nuxeoconf'}}) to make the Nuxeo Drive updater point at the custom site.

Of course this update site will need to have the same structure as the one provided by Nuxeo, for the Nuxeo Drive updater to be able to communicate with it.

## Update Site Structure

The Nuxeo Drive update site is currently implemented as a simple directory listing served by Apache and that holds the following items.

### Binary Packages

The site must hold the Nuxeo Drive binary packages released for Windows (MSI) and OS X (DMG), for instance: `nuxeo-drive-1.3.0611-win32.msi` and `nuxeo-drive-1.3.0611-osx-10.7.dmg`.

These packages are aimed to be manually downloaded for the first Nuxeo Drive installation, though they can also be used to manually install a newer version in the place of an existing installation of Nuxeo Drive.

### Esky Compliant ZIP Files

It must also hold available updates for both platforms packaged as [esky](https://pypi.python.org/pypi/esky) compliant ZIP files (the&nbsp;auto-update framework for frozen Python applications). They must respect the following pattern:&nbsp;`<application_name>-x.y.zzzz.<platform>`, for instance: `nuxeo-drive-1.4.0125.win32.zip` and `Nuxeo Drive-1.4.0125.macosx-10_7-x86_64.zip`.

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

Symbolic links to both packages (MSI and DMG) of the latest Nuxeo Drive version available for a given version of the Nuxeo Platform, for instance in [http://community.nuxeo.com/static/drive/latest/5.9.4/](http://community.nuxeo.com/static/drive/latest/5.9.4/). This is used for the first download of Nuxeo Drive from the Nuxeo Drive tab of the user's Home on the Nuxeo Platform UI. The download links are generated server-side following this pattern: `<update_site_URL>/latest/<Nuxeo_distribution_version>/nuxeo-drive.<extension>`, for instance [http://community.nuxeo.com/static/drive/latest/5.9.4/nuxeo-drive.msi](http://community.nuxeo.com/static/drive/latest/5.9.4/nuxeo-drive.msi).

{{! /multiexcerpt}}

&nbsp;

&nbsp;

* * *