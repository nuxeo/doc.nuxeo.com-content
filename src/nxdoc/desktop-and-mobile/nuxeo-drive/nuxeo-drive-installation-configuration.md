---
title: Nuxeo Drive Installation / Configuration
review:
    comment: ''
    date: '2016-12-15'
    status: ok
labels:
toc: true
tree_item_index: 100
---

## Requirements
To be able to synchronize folders on your computer, you need to install the Nuxeo Drive client on your computer.
We provide OS-specific installers for Mac OS X and Windows, available from the Nuxeo Drive tab of the Home.
For Linux, you need a PyQt4 with WebKit support.

### Known Working Configurations for OS
*   Windows:  Windows 7 and 8, 32b and 64b
*   Mac OS: starting from the version 10.8 (Mountain Lion)


## Installation

### Installing Nuxeo Drive Addon

{{{multiexcerpt 'MP-installation-easy' page='Generic Multi-Excerpts'}}}

After Nuxeo Drive has been installed on the server, a Nuxeo Drive tab in the user Home, from which you can see what Nuxeo spaces are synchronized with Drive.

![]({{file name='drive-newtab.png'}} ?w=650,border=true)

### Installing Nuxeo Drive on Your Computer

If you try to synchronize a folder and you haven't installed the Nuxeo Drive client yet or haven't provided your credentials to the Nuxeo Drive client, you are automatically directed to the Nuxeo Drive home tab to install it.

#### Installing Nuxeo Drive on Mac OS X

1.  Download the installer (.dmg file) from the **Nuxeo Drive** tab in the **Home** or from the [Nuxeo Drive update site](http://community.nuxeo.com/static/drive/latest/nuxeo-drive.dmg).
2.  Run the installer: drag and drop the Nuxeo Drive icon in the Applications directory.
    ![]({{file name='Drive-dmg-installer.png' space='userdoc' page='nuxeo-drive'}} ?w=400,border=true)
    Nuxeo Drive is now installed on your computer.
3.  You now need to [start Nuxeo Drive](#starting-nuxeo-drive) on your computer.
    A Nuxeo Drive folder will be created by the system at the root of your local home folder (`/Users/USER/`). This is the place where synchronized documents will be stored on your computer.

#### Installing Nuxeo Drive on Windows

1.  Download the Windows installer (.msi file) from the **Nuxeo Drive** tab in the **Home** or from the [Nuxeo Drive update site](http://community.nuxeo.com/static/drive/latest/nuxeo-drive.msi).
2.  Run the installer: indicate where Nuxeo Drive should be installed (typically `C:\Program Files (x86)`) and click **Next** until the installation process is done.
    Nuxeo Drive is now installed on your computer.

    {{#> callout type='tip' }}

    If you have any problem due to a previous installation of Nuxeo Drive you can try using this [Microsoft tool](https://support.microsoft.com/fr-fr/mats/program_install_and_uninstall) to uninstall it properly.

    {{/callout}}
3.  You now need to [start Nuxeo Drive](#starting-nuxeo-drive) to use it.
    A new Nuxeo Drive folder will be created by the system in your local Documents folder (`C:\Users\USER\Documents\`). This is the place where synchronized documents will be stored on your computer.

#### Installing Nuxeo Drive on Ubuntu/Debian (and Other Linux Variants)

The .deb package of the client is not yet available. In the mean time you can manually install the development version. Has been reported to work on: Ubuntu >= 12.04.

To Install Nuxeo Drive on your Linux computer:

**Requirements**

1.  **xattr**

    First note that Nuxeo Drive uses Extended file attributes through the [xattr](https://pypi.python.org/pypi/xattr/) Python wrapper.

    On FreeBSD, and Mac OS X, xattrs are enabled in the default kernel.

    On Linux, depending on the distribution, you may need a special mount option (user_xattr) to enable them for a given file system, e.g.:
    ```
    sudo mount -oremount,user_xattr /dev/sda3
    ```

2. **Python 2.7 or higher**

    Nuxeo Drive uses some packages, which are only compatible from python **version 2.7 on**. If this excludes using the standard python installation of certain OS distributions, you may still install python 2.7 (or higher) [manually from the download pages]( https://www.python.org/downloads/)on your system. However, this may break other tools in your environment, who need to be consistent with the default python packages. Using [Anaconda](http://continuum.io/downloads) to switch between different python installs/environments may help in this case.

3. **pip**

  Make sure that the latest version of [pip](http://www.pip-installer.org/) is installed.
  ```
  sudo pip install -U pip
  ```
4. **cffi**

    Make sure that the latest version of [cffi](https://pypi.python.org/pypi/cffi) is installed.
    ```
    sudo pip install -U cffi
    ```

**Installation**

1. Then install the required system and Python packages and the Nuxeo Drive code itself.

  Debian package manager:
  ```
  sudo apt-get install python-pip python-dev python-qt4 libffi-dev git
  ```
  Redhat package manager (RPM):
  ```
  sudo yum install python-pip python-devel PyQt4 libffi-devel git
  ```

  Then finally install the Nuxeo Drive requirements and Nuxeo Drive itself. These are common installation actions, not depending on the package manager (warning: define the version you want in the DRIVE_VERSION variable, ex: 2.1.113):
  ```
  DRIVE_VERSION=release-2.1.113
  sudo pip install -U -r https://raw.github.com/nuxeo/nuxeo-drive/$DRIVE_VERSION/requirements.txt
  sudo pip install -U -r https://raw.github.com/nuxeo/nuxeo-drive/$DRIVE_VERSION/unix-requirements.txt
  sudo pip install -U git+https://github.com/nuxeo/nuxeo-drive.git@$DRIVE_VERSION
  ```
  Waiting for [NXDRIVE-62](https://jira.nuxeo.com/browse/NXDRIVE-62) to be resolved you need to run these commands for Nuxeo Drive to work fine:
  ```
  # increase inotify file watch limit
  ofile=/proc/sys/fs/inotify/max_user_instances
  sudo sh -c "echo 8192 > $ofile"
  cat $ofile
  ```

2. For now, the systray icon is not visible under Unity desktop. As a consequence, the configuration window only appears at the first launch. If you want to change it, issue the following commands:

    ```
    pkill ndrive
    rm -rf ~/.nuxeo-drive
    ndrive &
    ```

4.  Now configure automatic start and protocol handler:

    ```
    # See $XDG_CONFIG_DIRS for a system wide install (vs user-specific)
    cat >~/.config/autostart/ndrive.desktop <<EOF
    [Desktop Entry]
    Type=Application
    Exec=ndrive
    Hidden=false
    NoDisplay=false
    X-GNOME-Autostart-enabled=true
    Name[fr_FR]=Nuxeo Drive
    Name=Nuxeo Drive
    Comment[fr_FR]=
    Comment=
    EOF

    /ndrive.desktop --create-dirs

    # See $XDG_DATA_DIRS for a system wide install (vs user-specific)
    cat >~/.local/share/applications/nxdrive-handler.desktop <<EOF
    [Desktop Entry]
    Type=Application
    Exec=ndrive %u
    Name=Nuxeo Drive Protocol Handler
    GenericName=Nuxeo Drive Handler
    Comment=Handle NXdrive URL
    Terminal=false
    MimeType=x-scheme-handler/nxdrive
    EOF
    update-desktop-database ~/.local/share/applications/
    ```

4.  You now need to [start Nuxeo Drive](#starting-nuxeo-drive) on your computer.
    A `Nuxeo Drive` folder will be created by the system at the root of your local home folder. This is the place where synchronized documents will be stored on your computer.

### Starting Nuxeo Drive

After you installed Nuxeo Drive, you need to start it manually.

Start Nuxeo Drive like any other application:

*   On Mac OS X, Nuxeo Drive is in the Applications directory.

    {{#> callout type='note' }}

    When you double click on the icon, a security message appears. To bypass it, you can modify your security settings or click right on Nuxeo Drive application and click on **Open**.

    ![]({{file name='Drive_Mac_OS_warning.png'}} ?w=350,border=true)

    {{/callout}}
*   On Windows, Nuxeo Drive is started from **Start** > **Programs** > **Nuxeo Drive**.
*   On Linux, press Alt+F2 and enter `ndrive`.

### Upgrading Nuxeo Drive

When a new version of Nuxeo Drive is available, a message is displayed at the bottom of the systray menu.

1.  Click on the upgrade message at the bottom of the systray menu.
    ![]({{file name='Drive_upgrade_available.png'}} ?w=200,border=true,thumbnail=true)
2.  If you want Nuxeo Drive to update silently the next time, check the box **Automatically update Drive** in the **General** tab.
    ![]({{file name='Drive-Settings.png'}} ?w=350,border=true)
3.  Click on the green icon.
    Nuxeo Drive is updated and automatically restarted.
    ![]({{file name='Drive_update_in_progress.png'}} ?w=200,border=true,thumbnail=true)

{{#> callout type='info' heading='Upgrading from Nuxeo Drive 1.3 to Nuxeo Drive 2'}}

Upgrading from Nuxeo Drive 1.3 to Nuxeo Drive 2 is transparent: Click on the icon ![]({{file name='nuxeo_drive_systray_icon_update_available_18.png' space='userdoc60' page='nuxeo-drive'}}) and the Update Nuxeo Drive item in the Nuxeo Drive menu to install the new version. After you confirmed the upgrade, Nuxeo Drive will download and restart and your synchronized folders will be automatically recovered.

{{/callout}}

## Configuration

### Settings

{{> anchor 'open-drive-settings'}} **Accessing the Settings Window**

**On Windows**

1.  Right-click on the the icon ![]({{file name='drive_online.png' space='userdoc' page='nuxeo-drive'}}) in the systray.
2.  Click on the icon ![]({{file name='drive-settings-icon.png' space='userdoc' page='nuxeo-drive'}}) and on the **Settings** menu item.
    The Settings window is displayed.

**On Mac OS X / Linux**

1.  Click on the the icon ![]({{file name='drive_online.png' space='userdoc' page='nuxeo-drive'}}) in the systray.
2.  Click on the icon ![]({{file name='drive-settings-icon.png' space='userdoc' page='nuxeo-drive'}}) and on the **Settings** menu item.
    The Settings window is displayed.

The Nuxeo Drive settings window shows four tabs that enable you to customize the behavior of your Nuxeo Drive:

*   **General**
    This is where you select the general behavior of your Nuxeo Drive: what language to use, the update policy, etc.
    ![]({{file name='Drive-Settings.png'}} ?w=400,border=true)
*   **Accounts**
    Set up one or several Nuxeo Platform accounts to synchronize with Nuxeo Drive.
    ![]({{file name='drive_Accounts_tab.png'}} ?w=350,border=true)
*   **Advanced**
    Set up your proxy, change the log level and get a zipped bug report.
    ![]({{file name='drive_Advanced_tab.png'}} ?w=350,border=true)
*   **About**
    Information about the Nuxeo Drive version and license.
    ![]({{file name='drive_About_tab.png'}} ?w=350,border=true)

### Managing Local Nuxeo Drive Accounts

You can use Nuxeo Drive to synchronize content from several Nuxeo Platform applications. This means that you can set up several accounts on Nuxeo Drive. Accounts are managed from the **Accounts** tab of the [Settings window](#open-drive-settings).

#### Adding a New Account

When you add a new account you need to provide the following information:

*   **Name**: Give a name to the Nuxeo Drive account you are setting.
    This is helpful when you use Nuxeo Drive with several applications.
*   **Folder**: Select where you want your Nuxeo Drive folder to be created.
*   **URL**: Type the URL of your Nuxeo application, with the `/nuxeo` suffix ( `http://www.mynuxeoapp.com/nuxeo`for instance).
*   **Username**: Type your username to the Nuxeo Platform application.
*   **Password**: Type your password to the Nuxeo Platform application.

The creation of a new account triggers the following actions:

*   A Nuxeo Drive folder is created at the location you chose (see section [Accessing the Nuxeo Drive Folder](#access-local-drive-folder)).
*   Nuxeo Drive starts synchronizing the Nuxeo workspaces or folders you [indicated as synchronized](#synchronizing-workspaces-root) in the Nuxeo Platform. It will automatically update content when there is a modification on the server.
*   In the **Nuxeo Drive** tab in your **Home**, an authentication token corresponding to the computer you are synchronizing from is displayed. The list of synchronized folders is displayed in the **Synchronization roots** section of the tab.
    ![]({{file name='drive-newtab.png'}} ?w=650,border=true)

#### Deleting an Account

You can delete accounts from your Nuxeo Drive at any time by clicking on the **Delete account** button of the corresponding account, in the **Settings** window. The local Nuxeo Drive folder is not deleted.

### Changing the Nuxeo Drive Language

By default, Nuxeo Drive is available in English and in French.

**To change the language of Nuxeo Drive:**

1.  Open the Nuxeo Drive Settings window.
2.  Click on the **General** tab.
3.  In the **Language** drop down list, select the language you want to use.
    The Settings window language is immediately changed.

{{! multiexcerpt name='drive-config-params'}}

## {{> anchor 'nuxeodrive-system-configure-drive'}}Configuration Parameters

Nuxeo Drive has different parameters that you can set up through:

*   The command line
*   A config.ini file inside the Drive binary folder or the Drive personal folder (.nuxeo-drive)
*   or with a registry key inside `HKEY_LOCAL_MACHINE\Software\Nuxeo\Drive` (registry since Nuxeo Drive 2.1.331)

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th colspan="1">Parameter</th>
<th colspan="1">Default Value</th>
<th colspan="1">Description</th>
</tr>
<tr>
<td colspan="1">`ndrive-home`</td>
<td colspan="1">`%USER_HOME%/.nuxeo-drive`</td>
<td colspan="1">Define the personal folder.</td>
</tr>
<tr>
<td colspan="1">`log-level-file`</td>
<td colspan="1">&nbsp;</td>
<td colspan="1">Define level for file log. Can be TRACE, DEBUG, INFO, WARNING, ERROR.
This can also be set up from the Settings window.</td>
</tr>
<tr>
<td colspan="1">`log-level-console`</td>
<td colspan="1">INFO</td>
<td colspan="1">Define level for console log. Can be TRACE, DEBUG, INFO, WARNING, ERROR.</td>
</tr>
<tr>
<td colspan="1">`log-filename`</td>
<td colspan="1">&nbsp;</td>
<td colspan="1">The name of the log file.</td>
</tr>
<tr>
<td colspan="1">`locale`</td>
<td colspan="1">&nbsp;</td>
<td colspan="1">Set up the language if not already defined.
This can also be set up by the user from the Settings window.</td>
</tr>
<tr>
<td colspan="1">`force-locale`</td>
<td colspan="1">&nbsp;</td>
<td colspan="1">Force the reset to the language.</td>
</tr>
<tr>
<td colspan="1">`update-site-url`</td>
<td colspan="1">[http://community.nuxeo.com/static/drive/](http://community.nuxeo.com/static/drive/)</td>
<td colspan="1">Configure custom update website.
See [Nuxeo Drive Update Site]({{page page='nuxeo-drive-update-site'}}) for more details.</td>
</tr>
<tr>
<td colspan="1">`beta-update-site-url`</td>
<td colspan="1">[http://community.nuxeo.com/static/drive-tests/](http://community.nuxeo.com/static/drive-tests/)</td>
<td colspan="1">Configure custom beta update website.</td>
</tr>
<tr>
<td colspan="1">`debug`</td>
<td colspan="1">false</td>
<td colspan="1">Activate the debug window, and debug mode.</td>
</tr>
<tr>
<td colspan="1">`nofscheck`</td>
<td colspan="1">0</td>
<td colspan="1">Disable the standard check for binding, to allow installation on network filesystem.</td>
</tr>
<tr>
<td colspan="1">`proxy-server`</td>
<td colspan="1">None</td>
<td colspan="1">Define proxy server.
This can also be set up by the user from the Settings window.</td>
</tr>
<tr>
<td colspan="1">`proxy-type`</td>
<td colspan="1">None</td>
<td colspan="1">Define proxy type.
This can also be set up by the user from the Settings window.</td>
</tr>
<tr>
<td colspan="1">`proxy-exceptions`</td>
<td colspan="1">None</td>
<td colspan="1">Define URLs exception for the proxy.</td>
</tr>
<tr>
<td colspan="1">`consider-ssl-errors`</td>
<td colspan="1">false</td>
<td colspan="1">Define if SSL errors should be ignored.</td>
</tr>
<tr>
<td colspan="1">`delay`</td>
<td colspan="1">30</td>
<td colspan="1">Define the delay before each remote check.</td>
</tr>
<tr>
<td colspan="1">`handshake-timeout`</td>
<td colspan="1">60</td>
<td colspan="1">Define the handshake timeout.</td>
</tr>
<tr>
<td colspan="1">`timeout`</td>
<td colspan="1">20</td>
<td colspan="1">Define the socket timeout.</td>
</tr>
<tr>
<td colspan="1">`update-check-delay`</td>
<td colspan="1">3600</td>
<td colspan="1">Define the auto-update check delay. 0 means disabled.</td>
</tr>
<tr>
<td colspan="1">`max-errors`</td>
<td colspan="1">3</td>
<td colspan="1">Define the maximum number of retries before considering the file as in error.</td>
</tr>
</tbody>
</table>
</div>

When use as command line argument you need to prefix with long argument modifier `--`.

{{! /multiexcerpt}}

{{! multiexcerpt name='drive-config-audit-logs'}}

### Nuxeo Drive and Audit Logs

Nuxeo Drive makes an extensive use of audit logs to get a summary of the server-side changes.

Since Nuxeo Platform 7.3 we chose to use Elasticsearch as a default back end for audit logs. This improves scalability especially when using Nuxeo Drive with a large set of users.

That's why we strongly recommend to keep this default configuration.

Please read the related sections: [Triggering SQL to Elasticsearch Audit Logs Migration]({{page page='elasticsearch-setup'}}#triggeringsqltoelasticsearchauditlogsmigration) and [Disabling Elasticsearch for Audit Logs]({{page page='elasticsearch-setup'}}#disablingelasticsearchforauditlogs).

{{! /multiexcerpt}}

{{! multiexcerpt name='drive-config-uninstall'}}

## {{> anchor 'nuxeodrive-system-configure-uninstall'}}Uninstalling Nuxeo Drive

To uninstall Nuxeo Drive from your computer, you need to remove the following items:

*   The .nuxeo-drive hidden folder where logs are stored
*   The Nuxeo Drive client application
*   The Nuxeo Drive local folder, **only if you want to get rid of all the synchronized files and folders**.

### Uninstalling Nuxeo Drive on Mac OS X

To uninstall Nuxeo Drive:

1.  Quit Nuxeo Drive:
    1.  Click on the icon in the system tray.
    2.  Click on **Quit** in the menu.
2.  Open a terminal and execute the following command:

    ```
    rm -rf ~/.nuxeo-drive
    ```

3.  Remove Nuxeo Drive from your applications like you usually remove any application.
4.  Delete the Nuxeo Drive item from your Favorites in the Finder.

{{#> callout type='warning' }}

At this point you have uninstalled the Nuxeo Drive program and its configuration. If you want to get rid of the synchronized data you also need to delete the Nuxeo Drive folder like you delete any regular folder.

{{/callout}}

### Uninstalling Nuxeo Drive on Windows

To uninstall Nuxeo Drive:

1.  Quit Nuxeo Drive:
    1.  Click on the icon in the system tray.
    2.  Click on **Quit** in the menu.

    {{#> callout type='info' }}
    At this point you can check that there are no `ndrivew.exe` or `ndrive.exe` remaining processes in the **Processes** tab of the **Windows Task Manager** that you can open by typing Ctrl + Shift + Esc.
    If you find such processes, kill them manually by right-clicking on their name and clicking on **End Process**.
    {{/callout}}

2.  Uninstall the Nuxeo Drive application like a regular program using the Control Panel.

    {{#> callout type='tip' }}
    If you have any problem during the uninstallation process you can try using this [Microsoft tool](https://support.microsoft.com/fr-fr/mats/program_install_and_uninstall) to uninstall Nuxeo Drive properly.
    {{/callout}}
3.  Waiting for [NXDRIVE-476](https://jira.nuxeo.com/browse/NXDRIVE-476) to be resolved you also need to manually delete the empty `C:\Program Files (x86)\Nuxeo` directory.

{{#> callout type='warning' }}

At this point you have uninstalled the Nuxeo Drive program and its configuration. If you want to get rid of the synchronized data you also need to delete the Nuxeo Drive folder like you delete any regular Windows folder.

{{/callout}}

### Uninstalling Nuxeo Drive on Linux

To uninstall Nuxeo Drive:

1.  Quit Nuxeo Drive:
    *   Click on the icon in the system tray.
    *   Click on **Quit** in the menu.
2.  Open a terminal and execute the following command:

    ```
    rm -rf ~/.nuxeo-drive
    ```

3.  Uninstall the Nuxeo Drive application using the following command:

    ```
    sudo pip uninstall nuxeo-drive
    ```
{{#> callout type='warning' }}
At this point you have uninstalled the Nuxeo Drive program and its configuration. If you want to get rid of the synchronized data you also need to delete the Nuxeo Drive folder like you delete any regular Linux folder.
{{/callout}}

{{! /multiexcerpt}}
