---
title: Installing the Nuxeo Platform on Windows
review:
    comment: ''
    date: ''
    status: ok
labels:
    - install-windows
toc: true
confluence:
    ajs-parent-page-id: '16810055'
    ajs-parent-page-title: Installation
    ajs-space-key: ADMINDOC58
    ajs-space-name: Nuxeo Installation and Administration - 5.8
    canonical: Installing+the+Nuxeo+Platform+on+Windows
    canonical_source: >-
        https://doc.nuxeo.com/display/ADMINDOC58/Installing+the+Nuxeo+Platform+on+Windows
    page_id: '16810040'
    shortlink: OIAAAQ
    shortlink_source: 'https://doc.nuxeo.com/x/OIAAAQ'
    source_link: /display/ADMINDOC58/Installing+the+Nuxeo+Platform+on+Windows
history:
    - 
        author: Solen Guitter
        date: '2016-09-02 08:13'
        message: ''
        version: '26'
    - 
        author: Anonymous
        date: '2013-10-15 11:14'
        message: ''
        version: '25'
    - 
        author: Harlan Brown
        date: '2013-10-14 16:27'
        message: ''
        version: '24'
    - 
        author: Harlan Brown
        date: '2013-10-14 16:13'
        message: ''
        version: '23'
    - 
        author: Solen Guitter
        date: '2013-10-14 16:00'
        message: ''
        version: '22'
    - 
        author: Harlan Brown
        date: '2013-10-14 15:52'
        message: ''
        version: '21'
    - 
        author: Solen Guitter
        date: '2013-10-10 16:23'
        message: ''
        version: '20'
    - 
        author: Mathieu Guillaume
        date: '2013-08-23 16:31'
        message: ''
        version: '19'
    - 
        author: Thibaud Arguillere
        date: '2013-07-03 14:37'
        message: ''
        version: '18'
    - 
        author: Solen Guitter
        date: '2013-07-03 11:19'
        message: >-
            Changed recommended path installation from root of C:\ to root of
            any disk
        version: '17'
    - 
        author: Solen Guitter
        date: '2013-05-28 14:31'
        message: ''
        version: '16'
    - 
        author: Solen Guitter
        date: '2013-05-28 14:31'
        message: ''
        version: '15'
    - 
        author: Solen Guitter
        date: '2013-05-28 14:30'
        message: ''
        version: '14'
    - 
        author: Solen Guitter
        date: '2013-05-28 11:45'
        message: ''
        version: '13'
    - 
        author: Solen Guitter
        date: '2012-11-28 09:12'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '12'
    - 
        author: Solen Guitter
        date: '2012-11-28 09:12'
        message: ''
        version: '11'
    - 
        author: Solen Guitter
        date: '2011-12-14 11:45'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '10'
    - 
        author: Solen Guitter
        date: '2011-12-14 11:45'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '9'
    - 
        author: Solen Guitter
        date: '2011-12-14 11:45'
        message: Migrated to Confluence 4.0
        version: '8'
    - 
        author: Solen Guitter
        date: '2011-12-14 11:45'
        message: Added details on VM installation
        version: '7'
    - 
        author: Solen Guitter
        date: '2011-12-12 23:59'
        message: Added toc
        version: '6'
    - 
        author: Solen Guitter
        date: '2011-12-07 11:59'
        message: Added related content
        version: '5'
    - 
        author: Solen Guitter
        date: '2011-12-07 11:10'
        message: ''
        version: '4'
    - 
        author: Solen Guitter
        date: '2011-12-07 10:54'
        message: ''
        version: '3'
    - 
        author: Solen Guitter
        date: '2011-12-07 10:53'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2011-12-07 10:53'
        message: ''
        version: '1'

---
{{! multiexcerpt name='install-windows'}}

To install the application using the [Windows installer (.exe)](http://community.nuxeo.com/static/releases/nuxeo-5.8/nuxeo-5.8-setup.exe), double-click on the .exe installer you downloaded and follow the instructions displayed.

{{#> callout type='note' }}

On Windows in general, and especially on Windows 7, it is highly recommended to install your Nuxeo application at the root of a disk (`C:\Nuxeo` for instance),&nbsp;because of rights issues, limitations on paths length, 32/64 bits conflicts,... An installation in another folder could provoke restart issues at end of the [startup wizard steps]({{page page='setup'}}).

{{/callout}}
{{! /multiexcerpt}}

![]({{file name='DM-Windows_installer.png'}} ?w=300)

**What's next?**
You want to evaluate the application? You can now [start the server]({{page page='server-start-and-stop'}}).
You want to do a complete installation, compatible for a production environment? You should now [prepare your environment]({{page page='recommended-configurations'}}).

{{#> callout type='note' }} The Windows installer includes a full JDK installation. You will get an error while installing the **JavaFX** portion. The JavaFX platform is not used by Nuxeo, therefore, when the error appears, click **Close** and continue with the installation. {{/callout}} {{#> callout type='note' }} When you launch the Nuxeo services for the first time, you will see an error window that says **pdftohtml.exe** **has stopped working**. To get the pdftohtml utility to work properly, install the **Visual C++ Redistributable for Visual Studio 2012&nbsp;**available on [Microsoft's website](http://www.microsoft.com/en-us/download/details.aspx?id=30679). {{/callout}}
{{#> callout type='note' }} If you are using PostgreSQL, please review the [Configuring PostgreSQL]({{page page='configuring-postgresql'}}) document and use the recommended configurations. {{/callout}}

## <span style="line-height: 1.5;">How to Install the Nuxeo Platform from the .zip Archive</span>

Installing the Nuxeo Platform using the .zip package installs the Nuxeo Platform only. External dependencies must be installed separately.

**To install the Nuxeo Platform zip archive:**

{{! multiexcerpt name='unknown'}}

Unzip the .zip archive using your favorite tool.

{{#> callout type='note' }}

On Windows in general, and especially on Windows 7, it is highly recommended to install your Nuxeo application at the root of a disk (`C:\Nuxeo` for instance),&nbsp;because of rights issues, limitations on paths length, 32/64 bits conflicts,... An installation in another folder could provoke restart issues at end of the [startup wizard steps]({{page page='setup'}}).

{{/callout}}
{{! /multiexcerpt}}

**What's next?**
You want to evaluate the application? You can now [start the server]({{page page='server-start-and-stop'}}).
You want to do a complete installation, compatible for a production environment? You should now [prepare your environment]({{page page='recommended-configurations'}}).

## How to Install a Nuxeo Virtual Machine Image

{{! multiexcerpt name='install-vm'}}

The Nuxeo Platform is available as ready-to-use virtual machine images from [nuxeo.com](http://www.nuxeo.com). VM images are available for VMWare and Virtual Box. They provide a full environment (OS, database&hellip;) and all required dependencies to make the Nuxeo Platform work.

**To install the Nuxeo virtual machine image and start Nuxeo:**

1.  Unzip the downloaded package.
    You get a folder with the required file for the virtual machine image to run.
2.  Start the virtual machine image in your virtual machine application by double-clicking on it.

    *   For the VMWare package, double-click on the file "nuxeo.vmx".
    *   For the OVF package, double-click on the .ovf file that corresponds to the supported standard: "nuxeo_OVF10.ovf" for Open Virtualization Format 1.0, supported by Virtual Box for instance, or "nuxeo_OVF09.ovf" for Open Virtualization Format 0.9\. Then start the imported virtual machine.The VM image starts.
    ![]({{file name='DM-VM-starting.png'}} ?w=350)
    Then, the Nuxeo application automatically starts.
    ![]({{file name='DM-VM-server-starting.png'}} ?w=350)
    When the Nuxeo application is started, it displays the address at which it is available.
    ![]({{file name='DM-VM-server-started.png'}} ?w=350)
3.  In your browser, type the indicated address.
    The [startup wizard]({{page page='setup#wizard'}}) is displayed to help you configure your application.

    {{#> callout type='info' heading='Shell root access'}}

    The password for the root and nuxeo users are generated the first time you start the virtual machine and are displayed on the console.&nbsp;

    {{/callout}}

{{! /multiexcerpt}}
