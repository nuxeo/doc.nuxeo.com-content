---
title: Nuxeo Drive
review:
    comment: ''
    date: '2023-12-13'
    status: ok
labels:
    - lts2017-ok
    - nuxeo-drive
    - mschoentgen
    - lklein
toc: true
tree_item_index: 100
---

Nuxeo Drive proposes 3 main features:
- [Direct Transfer]({{page page='nuxeo-drive-direct-transfer'}}): One-time transfer of content between the Nuxeo Server and the user desktop.
- [Direct Edit]({{page page='nuxeo-drive-direct-edit'}}): Edition of document's content even if they are not synchronized.
- [Synchronization]({{page page='nuxeo-drive-sync'}}): Bidirectional synchronization of content between the Nuxeo Server and the user desktop.

## Current Versions

| Channel | Version                                                                    |
| ------- | -------------------------------------------------------------------------- |
| Release | [5.6.0](https://community.nuxeo.com/static/drive-updates/release/?C=M;O=D) |
| Beta    | [6.0.0](https://community.nuxeo.com/static/drive-updates/beta/?C=M;O=D) |
| Alpha   | [6.0.x](https://community.nuxeo.com/static/drive-updates/alpha/?C=M;O=D) |

Find more information about our release cycle on [this page]({{page version='' space='client-apps' page='nuxeo-drive-release-cycle'}}).

<!--
## Requirements
To be able to synchronize folders on your computer, you need to install the Nuxeo Drive client on your computer.
We provide OS-specific installers for macOS and Windows, available from the Nuxeo Drive tab of the Home.

### Support

See this up-to-date [support page](https://github.com/nuxeo/nuxeo-drive/blob/master/docs/support.md) to know what OS vendor and version we are supporting; but also the Python version we are currently using.

### Authentication

Nuxeo Drive uses the same authentication way as any user would do with its browser. So it can handle basic authentications [available in the platform]({{page page='authentication-and-user-management'}}) and Kerberos. But it is missing several protocols that require deep changes in Nuxeo Drive itself, as of now those are not available:

- OAuth 2
- NTLM (tracked with the ticket [NXDRIVE-875](https://jira.nuxeo.com/browse/NXDRIVE-875))
-->

## Installation

### Installing Nuxeo Drive on Your Computer

If you try to use Nuxeo Drive and haven't installed the Nuxeo Drive client yet or haven't provided your credentials to the Nuxeo Drive client, you are automatically directed to the Nuxeo Drive home tab to install it.

<div>
<table style="border-width:0px;">
<tbody style="border-width:0px;">
<tr>
<td colspan="1" style="text-align:center; font-size:200%;">

<b>
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/USERDOC/Icons Index/download-document-web-ui.png
    name: download-document-web-ui.png
    1.1.3#screenshot#up_to_date
--}}
![download-document-web-ui.png](/nx_assets/55bbb17d-d2e5-40ba-a3d8-86d06be630b9.png)</br>
[macOS](https://community.nuxeo.com/static/drive-updates/nuxeo-drive.dmg)
</b>
</br>
</td>
<td colspan="1" style="text-align:center; font-size:200%;">

<b>
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/USERDOC/Icons Index/download-document-web-ui.png
    name: download-document-web-ui.png
    1.1.3#screenshot#up_to_date
--}}
![download-document-web-ui.png](/nx_assets/55bbb17d-d2e5-40ba-a3d8-86d06be630b9.png)</br>
[Linux](https://community.nuxeo.com/static/drive-updates/nuxeo-drive-x86_64.AppImage)
</b>
</br>
</td>
<td colspan="1" style="text-align:center; font-size:200%;">

<b>
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/USERDOC/Icons Index/download-document-web-ui.png
    name: download-document-web-ui.png
    1.1.3#screenshot#up_to_date
--}}
![download-document-web-ui.png](/nx_assets/55bbb17d-d2e5-40ba-a3d8-86d06be630b9.png)</br>
[Windows](https://community.nuxeo.com/static/drive-updates/nuxeo-drive.exe)
</b>
</br>
</td>
</tr>
</tbody>
</table>
</div>


<!--**Windows**

- Download the Windows installer (`.exe` file) from the **Nuxeo Drive** tab in the **User Settings** or from the [Nuxeo Drive update site](https://community.nuxeo.com/static/drive-updates/nuxeo-drive.exe).

**macOS**

- Download the installer (`.dmg` file) from the **Nuxeo Drive** tab in the **User Settings** or from the [Nuxeo Drive update site](https://community.nuxeo.com/static/drive-updates/nuxeo-drive.dmg).

**GNU/Linux**

1. Download the binary (`.AppImage` file) from the **Nuxeo Drive** tab in the **User Settings** or from the [Nuxeo Drive update site](https://community.nuxeo.com/static/drive-updates/nuxeo-drive-x86_64.AppImage).
2. [Make the file executable](https://discourse.appimage.org/t/how-to-run-an-appimage/80).

-->

### Installing Nuxeo Drive Addon

{{{multiexcerpt 'MP-installation-easy' space='nxdoc' page='generic-multi-excerpts'}}}

After Nuxeo Drive has been installed on the server, a Nuxeo Drive tab in the user Home, from which you can see what Nuxeo spaces are synchronized with Drive.

![]({{file name='drive-webui-newtab.png' page='nuxeo-drive'}} ?w=550)

{{#> callout type='warning' }}
Once the installation is done, make sure that the `drive` template is correctly installed by setting the `nuxeo.templates` property in your `nuxeo.conf` configuration file. If not, it will prevent Nuxeo Drive from working properly.
{{/callout}}

### Starting Nuxeo Drive

After you installed Nuxeo Drive, you need to start it manually.

Start Nuxeo Drive like any other application:

- On macOS, Nuxeo Drive is in the Applications directory.
    {{#> callout type='note' }}
    When you double click on the icon the first time, a security message appears. This is normal, jus click on **Open**.
    ![]({{file name='drive-macos-warning.png' page='nuxeo-drive'}})
    {{/callout}}
- On Windows, Nuxeo Drive is started from **Start** > **Programs** > **Nuxeo** > **Nuxeo Drive**.

### Upgrading Nuxeo Drive

When a new version of Nuxeo Drive is available, a message is displayed at the bottom of the systray menu.

1.  Click on the upgrade message at the bottom of the systray menu.
    ![]({{file name='drive-notif-upgrade-available.png' page='nuxeo-drive'}})
2.  If you want Nuxeo Drive to update silently the next time, check the box **Install new version automatically** in the **Advanced** tab.
    ![]({{file name='drive-tab-advanced.png' page='nuxeo-drive'}})
3.  Click on the green icon.
    Nuxeo Drive is updated and automatically restarted.
    ![]({{file name='drive-notif-upgrade-progress.png' page='nuxeo-drive'}} ?w=300)

{{! multiexcerpt name='drive-config-audit-logs'}}
## {{> anchor 'nuxeodrive-audit-logs'}}Nuxeo Drive and Audit Logs

Nuxeo Drive makes an extensive use of audit logs to get a summary of the server-side changes.

Since Nuxeo Platform 7.3 we chose to use Elasticsearch as a default back end for audit logs. This improves scalability especially when using Nuxeo Drive with a large set of users.

That's why we **strongly recommend to keep** this default configuration, but you can still [disable Elasticsearch for Audit Logs]({{page version='' space='nxdoc' page='elasticsearch-setup'}}#disabling-elasticsearch-for-audit-logs).

{{! /multiexcerpt}}

{{! multiexcerpt name='drive-config-uninstall'}}

## {{> anchor 'nuxeodrive-system-configure-uninstall'}}Uninstalling Nuxeo Drive

To uninstall Nuxeo Drive from your computer, you need to remove the following items:

- The `.nuxeo-drive` hidden folder where logs are stored
- The Nuxeo Drive client application
- The Nuxeo Drive local folder, **only if you want to get rid of all the synchronized files and folders**.

### Uninstalling Nuxeo Drive on macOS

To uninstall Nuxeo Drive:

1. Quit Nuxeo Drive:
    1. Click on the icon in the system tray.
    2. Click on **Quit** in the menu.

2. Open a terminal and execute the following command:

    ```sh
    rm -rf ~/.nuxeo-drive
    ```

3. Remove Nuxeo Drive from your applications like you usually remove any application.
4. Delete the Nuxeo Drive item from your Favorites in the Finder.

{{#> callout type='warning' }}
At this point you have uninstalled the Nuxeo Drive program and its configuration. If you want to get rid of the synchronized data you also need to delete the Nuxeo Drive folder like you delete any regular folder.
{{/callout}}

### Uninstalling Nuxeo Drive on Windows

To uninstall Nuxeo Drive:

1. Quit Nuxeo Drive:
    1. Click on the icon in the system tray.
    2. Click on **Quit** in the menu.

    {{#> callout type='info' }}
    At this point you can check that there are no `ndrive.exe` remaining processes in the **Processes** tab of the **Windows Task Manager** that you can open by typing Ctrl + Shift + Esc.
    If you find such processes, kill them manually by right-clicking on their name and clicking on **End Process**.
    {{/callout}}

2. Uninstall the Nuxeo Drive application like a regular program using the Control Panel.

{{#> callout type='warning' }}
At this point you have uninstalled the Nuxeo Drive program and its configuration. If you want to get rid of the synchronized data you also need to delete the Nuxeo Drive folder like you delete any regular Windows folder.
{{/callout}}
{{! /multiexcerpt}}

## Customization

You can override classes to implement your own Nuxeo Drive following the [developer guide](https://github.com/nuxeo/nuxeo-drive/blob/master/DEVELOPERS.md).
