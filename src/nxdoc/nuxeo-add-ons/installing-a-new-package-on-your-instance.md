---
title: Installing a New Package on Your Instance
review:
    comment: ''
    date: '2017-12-14'
    status: ok
labels:
    - content-review-lts2016
    - admin-center
    - bchauvin
    - update-center
    - admin-center-component
    - multiexcerpt-include
    - multiexcerpt
    - lts2017-ok
toc: true
confluence:
    ajs-parent-page-id: '16089349'
    ajs-parent-page-title: Nuxeo Add-Ons
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Installing+a+New+Package+on+Your+Instance
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Installing+a+New+Package+on+Your+Instance'
    page_id: '4686234'
    shortlink: moFH
    shortlink_source: 'https://doc.nuxeo.com/x/moFH'
    source_link: /display/NXDOC/Installing+a+New+Package+on+Your+Instance
tree_item_index: 100
version_override:
    LTS 2015: 710/admindoc/installing-a-new-package-on-your-instance
    '6.0': 60/admindoc/installing-a-new-package-on-your-instance
    '5.8': 58/admindoc/installing-a-new-package-on-your-instance
history:
    -
        author: Solen Guitter
        date: '2016-07-04 15:32'
        message: ove nuxeoctl instructions u
        version: '32'
    -
        author: Manon Lumeau
        date: '2016-04-22 09:21'
        message: 'Fix links '
        version: '31'
    -
        author: Manon Lumeau
        date: '2016-04-21 16:03'
        message: ''
        version: '30'
    -
        author: Manon Lumeau
        date: '2016-03-11 13:50'
        message: ''
        version: '29'
    -
        author: Manon Lumeau
        date: '2016-03-11 13:42'
        message: ''
        version: '28'
    -
        author: Manon Lumeau
        date: '2016-03-11 13:40'
        message: ''
        version: '27'
    -
        author: Manon Lumeau
        date: '2016-03-11 13:39'
        message: ''
        version: '26'
    -
        author: Manon Lumeau
        date: '2016-03-11 13:32'
        message: 'Merge install and uninstall package '
        version: '25'
    -
        author: Solen Guitter
        date: '2015-11-26 14:08'
        message: ''
        version: '24'
    -
        author: Solen Guitter
        date: '2015-11-26 13:41'
        message: 'NXDOC-658: Marketplace packages are now called Nuxeo Packages'
        version: '23'
    -
        author: Solen Guitter
        date: '2014-11-24 18:27'
        message: Add note about dependencies in offline mode
        version: '22'
    -
        author: Solen Guitter
        date: '2014-11-24 18:09'
        message: ''
        version: '21'
    -
        author: Thierry Martins
        date: '2014-11-24 18:00'
        message: ''
        version: '20'
    -
        author: Solen Guitter
        date: '2014-11-24 17:54'
        message: ''
        version: '19'
    -
        author: Solen Guitter
        date: '2014-11-24 17:49'
        message: Add nuxeoctl steps and related pages
        version: '18'
    -
        author: Solen Guitter
        date: '2014-11-24 16:14'
        message: Update screenshot for offline and Marketplace installation steps
        version: '17'
    -
        author: Solen Guitter
        date: '2014-11-24 15:10'
        message: Screenshot update
        version: '16'
    -
        author: Solen Guitter
        date: '2014-11-24 14:13'
        message: ''
        version: '15'
    -
        author: Solen Guitter
        date: '2013-10-16 16:58'
        message: ''
        version: '14'
    -
        author: Solen Guitter
        date: '2012-12-19 15:33'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2012-12-19 15:02'
        message: Added offline installation steps
        version: '12'
    -
        author: Solen Guitter
        date: '2012-12-14 12:09'
        message: ''
        version: '11'
    -
        author: Solen Guitter
        date: '2012-12-14 12:00'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2012-12-14 12:00'
        message: Updated steps
        version: '9'
    -
        author: Solen Guitter
        date: '2012-12-07 18:04'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2011-06-07 17:22'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '7'
    -
        author: Solen Guitter
        date: '2011-06-07 17:22'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '6'
    -
        author: Solen Guitter
        date: '2011-06-07 17:22'
        message: Migrated to Confluence 4.0
        version: '5'
    -
        author: Solen Guitter
        date: '2011-06-07 17:22'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2011-06-07 15:08'
        message: ''
        version: '3'
    -
        author: Solen Guitter
        date: '2010-11-15 12:07'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2010-11-05 16:52'
        message: ''
        version: '1'

---
Packages can be installed directly from the Admin tab, from the Marketplace or using the `nuxeoctl` script. Packages can be addons bringing new features or hotfixes providing corrections or small improvements. Some Nuxeo Packages are totally public, not requiring a Nuxeo Online Services account to install them. Others can only be installed on instances [registered on Nuxeo Online Services]({{page page='registering-your-nuxeo-instance'}}).

## Online Installation

### Installing a Package Using the nuxeoctl Script

{{! multiexcerpt name='nuxeoctl-note'}}

The instructions below provide the steps to follow to install a package using the `nuxeoctl` script, without detailed explanation about `nuxeoctl`. For an overview of this script, please read the page [nuxeoctl and Control Panel Usage]({{page space='NXDOC' page='nuxeoctl and+Control+Panel+Usage'}}).

For Windows users, use `nuxeoctl.bat` instead of `./nuxeoctl` commands below.

{{! /multiexcerpt}}

1.  Stop your server.

    ```
    ./nuxeoctl stop
    ```

2.  Get the name or ID of the package you want to download. You can get it from the package Marketplace URL: For instance, the ID of the Nuxeo Drive package ([https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-drive?version=1.6.6](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-drive?version=1.6.6)) is `nuxeo-drive-1.6.6`.

3.  Install the package.

    ```
    ./nuxeoctl mp-install nuxeo-drive-1.6.6
    ```

    The server checks possible dependencies.

    ```
    Detected Tomcat server.
    Nuxeo home:          /Users/NUXEO/Downloads/nuxeo-server-8.10-tomcat
    Nuxeo configuration: /Users/NUXEO/Downloads/nuxeo-server-8.10-tomcat/bin/nuxeo.conf
    Include template: /Users/NUXEO/Downloads/nuxeo-server-8.10-tomcat/templates/common-base
    Include template: /Users/NUXEO/Downloads/nuxeo-server-8.10-tomcat/templates/common
    Include template: /Users/NUXEO/Downloads/nuxeo-server-8.10-tomcat/templates/default

    Optional dependencies [nuxeo-jsf-ui] will be ignored for 'nuxeo-drive-1.6.6'.

    Dependency resolution:
    Installation order (1):        nuxeo-drive-1.6.6
    Unchanged packages (2):        nuxeo-web-ui:1.0.1, nuxeo-spreadsheet:1.2.4
    Packages to download (1):      nuxeo-drive:1.6.6
    ```

4.  Confirm installation.

    ```
    Do you want to continue (yes/no)? [yes] yes
    ```

    The package is downloaded and installed.

    ```
    Do you want to continue (yes/no)? [yes]
    Downloading [nuxeo-drive-1.6.6]...
    Added nuxeo-drive-1.6.6
    Installing nuxeo-drive-1.6.6
    ```

5.  Start your server.

    ```
    ./nuxeoctl start
    ```

#### Alternative Syntax Options
It is possible to ask for installation without specifying a version number. In this case, `nuxeoctl` will retrieve the latest version available compatible with your current Nuxeo Server version.

```
  ./nuxeoctl mp-install nuxeo-drive

  [...]

  Installation order (1):        nuxeo-drive-1.6.6
  Unchanged packages (2):        nuxeo-web-ui:1.0.1, nuxeo-spreadsheet:1.2.4
  Packages to download (1):      nuxeo-drive:1.6.6
```

You can also install several packages in a single command. Package names should be separated with a space.

```
./nuxeoctl mp-install nuxeo-web-ui nuxeo-dam nuxeo-drive

  [...]

  Dependency resolution:
    Installation order (3):        nuxeo-web-ui-1.0.1/nuxeo-dam-6.2.3/nuxeo-drive-1.6.6
    Packages to download (2):      nuxeo-web-ui:1.0.1, nuxeo-drive:1.6.6
    Local packages to install (1): nuxeo-dam:6.2.3
```

If for some reason one of the packages requested can't be installed, nuxeoctl will not install any of them.

```
./nuxeoctl mp-install nuxeo-web-ui nuxeo-drive unknown-package-name

[...]

org.nuxeo.connect.update.PackageException: Package not found: unknown-package-name
```

### Installing a Package from the Admin Tab

{{{multiexcerpt 'DeprecatedJSF' page='generic-multi-excerpts'}}}

The Admin tab includes a section called **Update Center** from which you can easily install hotfixes, updates, addons and your customizations. The Update Center features a **Packages from Nuxeo Marketplace** tab that shows the list of packages available from the Marketplace and allowing you to install these packages directly from your Nuxeo application.

**To install a package from the Admin tab:**

1.  As an administrator (Administrator/Administrator by default), in the **Admin** tab, click on the **Update Center** left tab.
2.  Click on the **Packages from Nuxeo Marketplace**.
    The list of available packages, including hotfixes and addons, is displayed. By default, only packages compatible with your version of the Nuxeo Platform are listed.
3.  Optionally, filter the list of packages:

    *   Uncheck the **Show only packages compatible with my distribution** box if you want to see all available packages;
    *   Check the **Hide local packages** box if you want to hide already downloaded packages from the list.
        ![]({{file name='Admin-Center-updateCenter.png'}} ?w=650,h=287,border=true)
4.  Click on the **Download** link of the package you want to install.
    A download in progress page is displayed while the package is being downloaded.
    ![]({{file name='package-downloading.png'}} ?w=350,border=true)
    When the download is finished, the list of packages is displayed again and the downloaded package has an **Install** link.
    ![]({{file name='package-downloaded.png'}} ?w=600,border=true)
    The package is also available from the **Local packages** tab of the Update Center.
5.  Click on the **Install** link to start the installation.
    ![]({{file name='package-installation-start-page.png'}} ?w=450,border=true)
6.  Start the installation by clicking on the **Start** button.

{{#> callout type='info' heading='Packages with dependencies'}}
If the package has some missing dependencies, the **Start** button is not displayed. You are displayed a series of steps to install the required dependencies.

a.  If dependency packages are not already in the Local packages, you need to download them. Click on the **Download all packages** button.
    ![]({{file name='package-dependencies-download.png'}} ?w=350,border=true)
    Required packages are downloaded.

b.  Click on the **Installation of package and dependencies** button.
    ![]({{file name='package-dependencies-installation.png'}} ?w=350,border=true)
    A page detailing the packages to be installed is displayed.

c.  Click on the **Confirm install** button at the bottom of the page.
    ![]({{file name='package-dependencies-installation-confirmation.png'}} ?w=400,border=true)
{{/callout}}

Once the installation is done, a confirmation screen is displayed.

7.  Click on the **Finish** button.

    ![]({{file name='package-installation-finish.png'}} ?w=600,border=true)

    You need to restart the application for the installation to be completed.
    ![]({{file name='package-restart-required.png'}} ?w=600,border=true)

    {{#> callout type='tip' heading='Hot-reload'}}
    Some packages don't require the server to be restarted to be fully installed. For instance your Nuxeo Studio configuration, when the [dev mode]({{page page='deploying-your-project-in-dev-mode' space='studio'}}) is activated.
    {{/callout}}
8.  Click on the **Restart required** button to restart the server.
9.  On the pop-up displayed, click on the **OK** button to confirm restart.
    ![]({{file name='restart-confirmation-popup.png'}} ?w=300,border=true,thumbnail=true)

    You're displayed a Restarting page as the server is restarting.
    ![]({{file name='restarting-page.png'}} ?w=550,border=true)
    The server immediately restarts. The login page will automatically be displayed when the server is restarted.

## Offline Installation

It is possible to install packages available on the Nuxeo Marketplace even if your server is not connected to the Internet. This takes two steps:

1.  Download the package from the Marketplace.
2.  Install the package using the `nuxeoctl` script or upload it from the Update Center.

### Installing a Package Offline Using the nuxeoctl Script

{{{multiexcerpt 'nuxeoctl-note' page='Installing a New Package on Your Instance'}}}

1.  Stop your server.

    ```
    ./nuxeoctl stop
    ```

2.  Install the package by providing the path to the downloaded .zip file.

    ```
    ./nuxeoctl mp-install /Users/NUXEO/Downloads/nuxeo-drive-1.6.6.zip
    ```

    The server checks possible dependencies.

    ```
    Detected Tomcat server.
    Nuxeo home:          /Users/NUXEO/Downloads/nuxeo-server-8.10-tomcat
    Nuxeo configuration: /Users/NUXEO/Downloads/nuxeo-server-8.10-tomcat/bin/nuxeo.conf
    Include template: /Users/NUXEO/Downloads/nuxeo-server-8.10-tomcat/templates/common-base
    Include template: /Users/NUXEO/Downloads/nuxeo-server-8.10-tomcat/templates/common
    Include template: /Users/NUXEO/Downloads/nuxeo-server-8.10-tomcat/templates/default
    Added /Users/NUXEO/Downloads/nuxeo-drive-1.6.6.zip

    Optional dependencies [nuxeo-jsf-ui] will be ignored for 'nuxeo-drive-1.6.6'.

    Dependency resolution:
    Installation order (1):        nuxeo-drive-1.6.6
    Unchanged packages (2):        nuxeo-web-ui:1.0.1, nuxeo-spreadsheet:1.2.4

    Do you want to continue (yes/no)? [yes]
    ```

    If some dependencies are not already locally available, repeat this step for each required package.

3.  Confirm installation.

    ```
    Do you want to continue (yes/no)? [yes] yes
    ```

    Installation is confirmed.

    ```
    Installing nuxeo-drive-1.6.6
    ```

4.  Start the server.

    ```
    ./nuxeoctl start
    ```

### Downloading a Package from the Marketplace

{{#> callout type='tip' }}

Depending on the package you want to install, you may need to be logged in to the Marketplace to download the package.

{{/callout}}

1.  On the Nuxeo Marketplace, click on the **Install** button of the package you want to install, then on the download link.
    ![]({{file name='marketplace-download.png'}} ?w=600,border=true)
2.  Save the .zip file on a disk that is accessible by the Nuxeo server or directly on a storage device.

### Installing a Package Offline from the Admin Tab

{{{multiexcerpt 'DeprecatedJSF' page='generic-multi-excerpts'}}}

1.  As administrator (Administrator/Administrator by default), in the **Admin** tab, click on the **Update Center** left tab.
2.  Click on the **Local packages** tab.
3.  Click on the **Upload a package** button.
    An upload form is displayed just below the tabs.
    ![]({{file name='package-upload.png'}} ?w=600,border=true)
4.  Click on the **Choose file** button to select the downloaded package .zip package file.
5.  Click on the **Upload** button.
    The package is uploaded to the server and ready to be installed.
6.  Install the package by clicking on the **Install** link.
    ![]({{file name='package-downloaded.png'}} ?w=600)
    A confirmation page is displayed.
7.  Click on **Start** to confirm installation.
    ![]({{file name='package-installation-start-page.png'}} ?w=500,border=true)
    Once the set up is achieved, a message from the server confirms that the installation was performed correctly.
8.  If required, restart the server by clicking the **Restart required** button that replaces **Install** and **Remove** buttons. Otherwise, installation is completed and you're displayed an **Uninstall** button.

9.  On the pop-up displayed, click on the **OK** button to confirm restart.
    ![]({{file name='restart-confirmation-popup.png'}} ?w=300,border=true,thumbnail=true)

    You're displayed a Restarting page as the server is restarting. The login page is displayed as soon as the server is available again.
    ![]({{file name='restarting-page.png'}} ?w=500,border=true)

## Uninstalling a Package

Uninstalling a package can be done from a terminal using the `nuxeoctl` script or from the Admin tab.

### Uninstalling a Package Using the nuxeoctl Script

The instructions below provide the steps to follow to uninstall a package using the `nuxeoctl` script. For a overview of this script, please read the page [nuxeoctl and Control Panel Usage]({{page page='nuxeoctl-and-control-panel-usage'}}).

1.  Stop your server.

    ```
    ./nuxeoctl stop
    ```

2.  In a terminal, get the list of packages available on your Nuxeo server.

    ```
    ./nuxeoctl mp-list
    ```

3.  Copy the name of the id of the package you want to uninstall.

4.  Run the uninstallation:

    ```
    ./nuxeoctl mp-uninstall nuxeo-dam-6.0.0
    ```

    The server checks possible dependencies:

    ```
    Detected Tomcat server.
    Nuxeo home:          /Users/NUXEO/Downloads/nuxeo-server-8.10-tomcat
    Nuxeo configuration: /Users/NUXEO/Downloads/nuxeo-server-8.10-tomcat/bin/nuxeo.conf
    Include template: /Users/NUXEO/Downloads/nuxeo-server-8.10-tomcat/templates/common-base
    Include template: /Users/NUXEO/Downloads/nuxeo-server-8.10-tomcat/templates/common
    Include template: /Users/NUXEO/Downloads/nuxeo-server-8.10-tomcat/templates/default
    Include template: /Users/NUXEO/Downloads/nuxeo-server-8.10-tomcat/templates/drive

    Dependency resolution:
      Uninstallation order (1):      nuxeo-dam-6.0.0
      Unchanged packages (2):        nuxeo-drive:1.4.1, nuxeo-spreadsheet:1.0.0
      Local packages to remove (1):  nuxeo-dam:6.0.0

    Do you want to continue (yes/no)? [yes]
    ```

5.  Confirm uninstallation.

    ```
    Do you want to continue (yes/no)? [yes] yes
    ```

    Uninstallation is confirmed.

    ```
    Uninstalling nuxeo-dam-6.0.0
    ```

6.  Start the server.

    ```
    ./nuxeoctl start
    ```

### Uninstalling a Package from the Admin Tab

{{{multiexcerpt 'DeprecatedJSF' page='generic-multi-excerpts'}}}

1.  In the **Admin** tab, go on the **Local packages** tab of the **Update Center**.
    The list of packages that you have downloaded and possibly installed is displayed.

2.  Click on the **Uninstall** link of the package you want to uninstall from your application.
    A confirmation message is displayed.
3.  Click on the **Start** button to confirm you want to uninstall the package.
    ![]({{file name='AdminCenter-uninstall2.png'}} ?w=450,border=true)
4.  When uninstallation is done, click on the **Finish** button.
    ![]({{file name='AdminCenter-uninstall3.png'}} ?w=600,border=true)
    The list of packages is displayed. You need to restart the application for the uninstallation to be completed.

    {{#> callout type='tip' heading='Hot-reload'}}

    Some packages don't require the server to be restarted to be fully uninstalled.

    {{/callout}}

    ![]({{file name='AdminCenter-uninstall4.png'}} ?w=600,h=186,border=true)

5.  Click on the **Restart server** button and confirm server restart.
6.  When the server is restarted, log back in and go the **Local Packages** tab. The uninstalled package now has an **Install** link displayed.
    ![]({{file name='AdminCenter-uninstall5.png'}} ?w=600)

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [nuxeoctl and Control Panel Usage]({{page page='nuxeoctl-and-control-panel-usage'}})
- [Admin Tab Overview]({{page page='admin-tab-overview'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
