---
title: Installing a New Package on Your Instance
review:
    comment: ''
    date: ''
    status: ok
labels:
    - update-center
    - admin-center
toc: true
confluence:
    ajs-parent-page-id: '16810003'
    ajs-parent-page-title: Admin Center overview
    ajs-space-key: ADMINDOC58
    ajs-space-name: Nuxeo Installation and Administration - 5.8
    canonical: Installing+a+New+Package+on+Your+Instance
    canonical_source: >-
        https://doc.nuxeo.com/display/ADMINDOC58/Installing+a+New+Package+on+Your+Instance
    page_id: '16810002'
    shortlink: EoAAAQ
    shortlink_source: 'https://doc.nuxeo.com/x/EoAAAQ'
    source_link: /display/ADMINDOC58/Installing+a+New+Package+on+Your+Instance
history:
    - 
        author: Manon Lumeau
        date: '2016-03-11 14:19'
        message: ix images
        version: '18'
    - 
        author: Manon Lumeau
        date: '2016-03-11 14:14'
        message: 'Merge install and uninstall package   '
        version: '17'
    - 
        author: Solen Guitter
        date: '2015-11-26 15:47'
        message: ''
        version: '16'
    - 
        author: Solen Guitter
        date: '2015-11-26 15:21'
        message: 'NXDOC-658: Marketplace packages are now called Nuxeo Packages'
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
<div class="row"><div class="column medium-8">

Packages can be installed directly [from the Admin Center](#installing-a-package-from-the-admin-center) or [from the Marketplace](#installing-a-package-from-the-market). Packages can be addons bringing new features, hotfixes providing corrections and small improvements. Some Nuxeo Packages are totally public, not requiring a Connect account to install them. Others can only be installed on instances [registered on Nuxeo Connect]({{page page='registering-your-nuxeo-instance'}}).

## Installing a Package from the Admin Center

The Admin Center includes a section called **Update Center** from which you can easily install hotfixes, updates, addons and your customizations. The Update Center features a **Packages from Marketplace** tab that shows the list of packages available from the Marketplace and allowing you to install these packages directly from your Nuxeo application.

**To install a package from the Admin Center:**

1.  As administrator (Administrator/Administrator by default),&nbsp;in the **Admin Center**, click on the **Update Center** left tab.
2.  Click on the **Packages from Nuxeo Marketplace**.
    The list of available packages, including hotfixes and addons, is displayed. By default, only packages compatible with your version of the Nuxeo Platform are listed.
3.  Optionally, filter the list of packages:

    *   uncheck the&nbsp;**Show only packages compatible with my distribution** box of you want to see all available packages;
    *   select a type of package in the drop down list if you want to narrow the list to a package type (addon, hotfix);
    *   check the **Show only new packages** box if you want to hide local packages (i.e. installed and downloaded packages) from the list.
        ![]({{file name='packages-from-marketplace-tab-filtered.png'}} ?w=650,border=true)
4.  Click on the **Download** link of the package you want to install.
    A download in progress page is displayed while the package is being downloaded.
    When download is finished, the list of packages is displayed again and the downloaded package has a green **Install** link.
    ![]({{file name='package-downloaded.png'}} ?w=650,border=true)
    The package is also available from the **Local packages** tab of the Update Center.
5.  Click on the **Install** link to start the installation.
6.  Start the installation by clicking on the **Start** button.

    {{#> callout type='note' heading='Packages with dependencies'}}

    If the package has some missing dependencies, the **Start** button is not displayed. You are displayed a series of steps to install the required dependencies.

    1.  If dependency packages are not already in the Local packages, you need to download them. Click on the **Download all packages** button.
        ![]({{file name='package-dependencies-download.png'}} ?w=350,border=true)
        Required packages are downloaded.
    2.  Click on the **Installation of package and dependencies** button.
        ![]({{file name='package-dependencies-installation.png'}} ?w=350,border=true)
        A page detailing the packages to be installed is displayed.
    3.  Click on the **Confirm install** button at the bottom of the page.
        ![]({{file name='package-dependencies-installation-confirmation.png'}} ?w=350,border=true){{/callout}}

    Once the installation is done, a confirmation screen is displayed.

7.  Click on the **Finish** button.
    ![]({{file name='package-installation-finish.png'}} ?w=350,border=true)

    The **Install** button is replaced by an **Uninstall** button. The package installation may require to restart the server to complete the installation. In that case, the **Uninstall** button is replaced by a **Restart required** button.
    ![]({{file name='package-restart-required.png'}} ?w=650,border=true)

8.  If required, click on the **Restart required** button to restart the server.
9.  On the pop-up displayed, click on the **OK** button to confirm restart.
    ![]({{file name='restart-confirmation-popup.png'}} ?w=169,h=100,border=true)

    You're displayed a Restarting page as the server is restarting. The login page is displayed as soon as the server is available again.
    ![]({{file name='restarting-page.png'}} ?w=650,h=175,border=true)
    The server immediately restarts. You're displayed a white page during the server restart. The login page will automatically be displayed when the server is restarted.

## Installing a Package from the Marketplace

There are two ways to install a package from the Marketplace:

1.  installing it directly: this requires to be able to access the Nuxeo server as you're on the Marketplace;
2.  Downloading it first, and then installing it on the Nuxeo server.

**To install the package directly from the Marketplace:**

1.  On the Marketplace, click on the **Install** button of the package you want to install.
    ![]({{file name='Marketplace-package-page.png'}} ?w=650,border=true)
    A window pops up.
2.  Type the URL of the Nuxeo server on which you want to set up the package (and on which you have administrator credentials). For instance, `localhost:8080`.
    ![]({{file name='server-address-popup.png'}} ?w=650,border=true)
    Your Nuxeo application opens in a new window.
3.  Log in as an administrator, if you are not already.
    A confirmation page is displayed.
4.  Click on the **Start download** button to confirm that you want to download the package.
    ![]({{file name='package-download-confirmation-1.png'}} ?w=650,border=true)
    You are directed in the Admin Center.
5.  Click on the **Confirm and Start download** button to confirm downloading.
    ![]({{file name='package-download-confirmation-2.png'}} ?w=600,border=true)
    Once the package has been downloaded, you are displayed the **Packages from Nuxeo Marketplace** tab of the Update Center. The package has a green **Install** button and is also available from the **Local packages** tab of the Update Center.
6.  Install the package by clicking on the **Install** link.
    ![]({{file name='package-ready-to-install.png'}} ?w=600,border=true)
    A confirmation page is displayed.
7.  Click on **Start** to confirm installation.
    ![]({{file name='package-installation-start-page.png'}} ?w=350,border=true)
    Once the set up is achieved, a message from the server confirms that the installation was performed correctly.
8.  If required, restart the server by clicking the **Restart required** button that replaces **Install** and **Remove** buttons. Otherwise, installation is completed and you're displayed an **Uninstall** button.

9.  On the pop-up displayed, click on the **OK** button to confirm restart.
    ![]({{file name='restart-confirmation-popup.png'}} ?w=169,h=100,border=true)

    You're displayed a Restarting page as the server is restarting. The login page is displayed as soon as the server is available again.
    ![]({{file name='restarting-page.png'}} ?w=650,h=175,border=true)

## Offline Installation

It is possible to install packages available on the Nuxeo Marketplace even if your server is not connected to the Internet. This takes two steps:

1.  Download the package from the Marketplace.
2.  Upload the package from the Update Center.

**To download the package you want to install from the Marketplace:**

{{#> callout type='tip' }}

Depending on the package you want to install, you may need to be logged in to the Marketplace to download the package.

{{/callout}}

1.  On the Nuxeo Marketplace, click on the **Download** link of the package you want to install, in the **Tools** box.
    ![]({{file name='Marketplace-package-diff-page.png'}} ?w=650,border=true)
2.  Save the .zip file on a disc that is accessible by the Nuxeo server or directly on a storage device.

**To install the downloaded package:**

1.  As administrator (Administrator/Administrator by default), in the **Admin Center**, click on the **Update Center** left tab.
2.  Click on the **Local packages** tab.
3.  Click on the **Upload a package** button.
    An upload form is displayed just below the tabs.
    ![]({{file name='package-upload.png'}} ?w=650,border=true)
4.  Click on the **Browse** button to select the package .zip package file.
5.  Click on the **Upload** button.
    The package is uploaded to the server and ready to be installed.
6.  Install the package by clicking on the **Install** link.
    ![]({{file name='package-diff-ready-to-install.png'}} ?w=650,border=true)
    A confirmation page is displayed.
7.  Click on **Start** to confirm installation.
    ![]({{file name='package-diff-installation-start.png'}} ?w=350,border=true)
    Once the set up is achieved, a message from the server confirms that the installation was performed correctly.
8.  If required, restart the server by clicking the **Restart required** button that replaces **Install** and **Remove** buttons. Otherwise, installation is completed and you're displayed an **Uninstall** button.

9.  On the pop-up displayed, click on the **OK** button to confirm restart.
    ![]({{file name='restart-confirmation-popup.png'}} ?w=169,h=100,border=true)

    You're displayed a Restarting page as the server is restarting. The login page is displayed as soon as the server is available again.
    ![]({{file name='restarting-page.png'}} ?w=650,h=175,border=true)

## Uninstalling a Package&nbsp;

Uninstalling a package can be done from the Admin Center only.

**To uninstall a package:**

1.  In the Admin Center, go on the&nbsp;**Local packages**&nbsp;tab of the&nbsp;**Update Center**.
    The list of packages that you have downloaded and possibly installed is displayed.
    ![]({{file name='DM-AdminCenter-uninstall1.png'}} ?w=725,border=true)
2.  Click on the&nbsp;**Uninstall**&nbsp;link of the package you want to uninstall from your application.
    A confirmation message is displayed.
3.  Click on the&nbsp;**Start**&nbsp;button to confirm you want to uninstall the package.
    ![]({{file name='DM-AdminCenter-uninstall2.png'}} ?w=533,h=255,border=true)
4.  When uninstallation is done, click on the&nbsp;**Finish**&nbsp;button.
    ![]({{file name='DM-AdminCenter-uninstall3.png'}})&nbsp;
    The list of packages is displayed. The uninstalled package now has an&nbsp;**Install**&nbsp;link displayed.
    ![]({{file name='DM-AdminCenter-uninstall4.png'}} ?w=725,border=true)

    {{#> callout type='tip' }}

    If the package doesn't support hotreload, you need to reboot the server so the unistallation is completed.

    {{/callout}}

&nbsp;

</div><div class="column medium-4">{{#> panel heading='In this section'}}

{{/panel}}</div></div>