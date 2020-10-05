---
title: Nuxeo Drive
review:
    comment: ''
    date: '2019-10-25'
    status: ok
labels:
    - lts2017-ok
    - nuxeo-drive
    - mschoentgen
    - lklein
toc: true
tree_item_index: 100
---

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

If you try to synchronize a folder and you haven't installed the Nuxeo Drive client yet or haven't provided your credentials to the Nuxeo Drive client, you are automatically directed to the Nuxeo Drive home tab to install it.

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
![download-document-web-ui.png](nx_asset://55bbb17d-d2e5-40ba-a3d8-86d06be630b9)</br>
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
![download-document-web-ui.png](nx_asset://55bbb17d-d2e5-40ba-a3d8-86d06be630b9)</br>
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
![download-document-web-ui.png](nx_asset://55bbb17d-d2e5-40ba-a3d8-86d06be630b9)</br>
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
2.  If you want Nuxeo Drive to update silently the next time, check the box **Automatically update Drive** in the **General** tab.
    ![]({{file name='drive-tab-general.png' page='nuxeo-drive'}})
3.  Click on the green icon.
    Nuxeo Drive is updated and automatically restarted.
    ![]({{file name='drive-notif-upgrade-progress.png' page='nuxeo-drive'}} ?w=300)

## Configuration

### Settings

{{> anchor 'open-drive-settings'}} **Accessing the Settings Window**

#### macOS

1. Click on the the icon ![]({{file name='drive-icon-online.png' page='nuxeo-drive'}} ?w=20) (or ![]({{file name='drive-icon-online-old.png' page='nuxeo-drive'}} ?w=14) on old versions) in the systray.
2. Click on the icon ![]({{file name='drive-icon-settings.png' page='nuxeo-drive'}} ?w=20) and on the **Settings** menu item.</br>
    The Settings window is displayed.

#### Windows

1. Right-click on the the icon ![]({{file name='drive-icon-online.png' page='nuxeo-drive'}} ?w=20) (or ![]({{file name='drive-icon-online-old.png' page='nuxeo-drive'}} ?w=14) on old versions) in the systray.
2. Click on the icon ![]({{file name='drive-icon-settings.png' page='nuxeo-drive'}} ?w=20) and on the **Settings** menu item.</br>
    The Settings window is displayed.

The Nuxeo Drive settings window shows four tabs that enable you to customize the behavior of your Nuxeo Drive:

### Graphical User Interface

- **General**</br>
    This is where you select the general behavior of your Nuxeo Drive: what language to use, the update policy, etc.
    ![]({{file name='drive-tab-general.png' page='nuxeo-drive'}})

- **Features**</br>
    This is where you can turn on/off the features available on your application.
    ![]({{file name='drive-tab-features.png' page='nuxeo-drive'}})

- **Accounts**</br>
    Set up one or several Nuxeo Platform accounts to synchronize with Nuxeo Drive.
    ![]({{file name='drive-tab-accounts.png' page='nuxeo-drive'}})

- **About**</br>
    Information about the Nuxeo Drive version and license.
    ![]({{file name='drive-tab-about.png' page='nuxeo-drive'}})

### Managing Local Nuxeo Drive Accounts

You can use Nuxeo Drive to synchronize content from several Nuxeo Platform applications. This means that you can set up several accounts on Nuxeo Drive. Accounts are managed from the **Accounts** tab of the [Settings window](#open-drive-settings).

#### Adding a New Account

When you add a new account you need to provide the following information:

- **URL**: Type the URL of your Nuxeo application, either the domain name only (`example.org`) or partial URL (`https://example.org`) or a full URL (`https://example.org/nuxeo`).
- **Folder**: Select where you want your Nuxeo Drive folder to be created.

Clicking on **Connect** will open your browser to the login page. Sign-in and you will be redirected to Drive.

The creation of a new account triggers the following actions:

- A Nuxeo Drive folder is created at the location you chose (see section [Accessing the Nuxeo Drive Folder](#access-local-drive-folder)).
- Nuxeo Drive starts synchronizing the Nuxeo workspaces or folders you [indicated as synchronized](#synchronizing-workspaces-root) in the Nuxeo Platform. It will automatically update content when there is a modification on the server.
- In the **Nuxeo Drive** tab in your **Home**, an authentication token corresponding to the computer you are synchronizing from is displayed. The list of synchronized folders is displayed in the **Synchronization roots** section of the tab.
    ![]({{file name='drive-webui-newtab.png' page='nuxeo-drive'}} ?w=650)

#### Deleting an Account

You can delete accounts from your Nuxeo Drive at any time by clicking on the **Delete account** button of the corresponding account, in the **Settings** window. The local Nuxeo Drive folder is not deleted.

### Changing the Nuxeo Drive Language

By default, Nuxeo Drive is available in English.

**To change the language of Nuxeo Drive:**

1. Open the Nuxeo Drive Settings window.
2. Click on the **General** tab.
3. In the **Language** drop down list, select the language you want to use.</br>
    The Settings window language is immediately changed.

{{! multiexcerpt name='drive-config-params'}}

## {{> anchor 'nuxeodrive-system-configure-drive'}}Configuration Parameters

{{#> callout type='note' }}
Starting with Nuxeo Drive 4.0, invalid parameter names and values will make the program to stop.
This is a quality check to ensure a good experience.
{{/callout}}

Nuxeo Drive has different parameters that you can set up through:

- The REST API endpoint `/drive/configuration` served by the server (since [NXP-22946](https://jira.nuxeo.com/browse/NXP-22946) and Drive 3.0.0).
- The command line.
- A registry key inside `HKEY_CURRENT_USER\Software\Nuxeo\Drive` (since Drive 3.1.0, Windows only).
- A `config.ini` file that can be located in different places:
  - next to the Nuxeo Drive executable
  - from the `$HOME/.nuxeo-drive` folder
  - from the current working directory

Each of these ways overrides the previous one.

### Names and Values

Parameter names are quite flexible. There is no differentiation between lowercase and uppercase, nor between hyphens and underscores.</br>
For instance, you can specify `ssl-no-verify`, `ssl_no_verify`, `ssl_no-verify` or `SSL_No_verify`, it will be the same result.

Parameter values are taken as is, except for booleans. In that case, you can specify, in lowercase or uppercase:

- `true`, `1`, `on`, `yes` or `oui` to enable
- `false`, `0`, `off`, `no` or `non` to disable

### Value Types

- bool: boolean
- int: integer
- list: list of strings (one item by line)
- map: simple key/value map.
- str: string

### Available Parameters

#### `behavior`

Application behavior that can be turned on/off on-demand.</br>
That parameter cannot be set via the local configuration file: only the server has rights to define it.

- Default value (map): [...](#behaviors)
- Version added: 4.4.2

* * *

#### `beta-channel`

Use the beta channel for auto-updates.

- Default value (bool): `False`
- Version added: 2.0
- Version removed: 4.0.2, use [channel](#channel) set to `beta` instead

* * *

#### `beta-update-site-url`

Configure custom beta update website.

- Default value (str): [https://community.nuxeo.com/static/drive-updates](https://community.nuxeo.com/static/drive-updates)
- Version added: 2.0
- Version removed: 4.0.2, use [update-site-url](#update-site-url) instead

* * *

#### `big-file`

File size in MiB. Files bigger than this limit are considered "big".</br>
This implies few tweaks in the synchronization engine like bypassing most of the expensive and time-consuming digest computations.</br>
It is a tradeoff to handle large files as best effort.

- Default value (int): `300`
- Version added: 4.1.4

* * *

#### `ca-bundle`

File or directory with certificates of trusted Certificate Authorities.</br>
If set, [ssl-no-verify](#ssl-no-verify) has no effect.</br>
See the `requests` [documentation](http://docs.python-requests.org/en/master/user/advanced/#ssl-cert-verification) for more details.

- Default value (str): None
- Version added: 4.0.2

* * *

#### `channel`

Update channel. Can be `centralized`, `release`, `beta` or `alpha`.

- Default value (str): `centralized`
- Version added: 4.0.2
- Version changed: 4.2.0, changed from `release` to `centralized`


* * *

#### `chunk-limit`

Size in MiB above which files will be uploaded in chunks (if [chunk-upload](#chunk-upload) is `True`).</br>
Has to be above 0.

- Default value (int): `20`
- Version added: 4.1.2

* * *

#### `chunk-size`

Size of the chunks in MiB. Has to be above 0 and lower or equal to 20.

- Default value (int): `20`
- Version added: 4.1.2

* * *

#### `chunk-upload`

Activate the upload in chunks for files bigger than [chunk-limit](#chunk-limit).


- Default value (bool): `True`
- Version added: 4.1.2

* * *

#### `client-version`

Force the client version to run when using the centralized update channel (must be >= `4.2.0`).

- Default value (str): None
- Version added: 4.2.0

* * *

#### `consider-ssl-errors`

Define if SSL errors should be ignored.

- Default value (bool): `True`
- Version added: 2.0
- Version removed: 4.0.1, use [ssl-no-verify](#ssl-no-verify) set to `True` instead

* * *

#### `database-batch-size`

[Direct Transfer]({{page version='' space='client-apps' page='nuxeo-drive-direct-transfer'}}) When adding files into the database, the operation is done by batch instead of one at a time.
This option controls the batch size.

- Default value (int): `256`
- Version added: 4.4.4

* * *

#### `debug`

Activate the debug window, and debug mode.

- Default value (bool): `False`
- Version added: 2.0
- Version removed: 4.0.0

* * *

#### `delay`

Delay in seconds before each remote check (calling the [NuxeoDrive.GetChangeSummary](https://explorer.nuxeo.com/nuxeo/site/distribution/10.10/viewOperation/NuxeoDrive.GetChangeSummary) operation).

- Default value (int): `30`
- Version added: 2.0

* * *

#### `disabled-file-integrity-check`

Set to `True` to disable downloaded files integrity check.</br>
It is a needed option when the [managed blob store key strategy](https://doc.nuxeo.com/nxdoc/hotfixes-installation-notes-for-nuxeo-platform-lts-2019/#s3-direct-upload-of-5-gb-files) is set up on the server, because there is no logic digest filled, the application would not be able to validate such files.

- Default value (bool): `False`
- Version added: 4.4.5

* * *

#### `disallowed-types-for-dt`

List of document types where Direct Transfer is not allowed.

- Default value (list):
```python
[
    "Domain",
    "Section",
]
```
- Version added: 4.4.6

* * *

#### `feature`

Application features that can be turned on/off on-demand.

- Default value (map): [...](#features)
- Version added: 4.4.2

* * *

#### `force-locale`

Force the reset to the language.

- Default value (str): None
- Version added: 2.0

* * *

#### `handshake-timeout`

Define the handshake timeout in seconds.

- Default value (int): `60`
- Version added: 2.0

* * *

#### `ignored-files`

Lowercase file patterns to ignore while syncing.

- Default value (list):
```python
[
    r"^atmp\d+$",
]
```
- Version added: 2.4.1

* * *

#### `ignored-prefixes`

Lowercase file prefixes to ignore while syncing.

- Default value (list):
```python
[
    ".",
    "desktop.ini",
    "icon\r",
    "thumbs.db",
    "~$",
]
```
- Version added: 2.4.1

* * *

#### `ignored-suffixes`

Lowercase file suffixes to ignore while syncing.

- Default value (list):
```python
[
    ".bak",
    ".crdownload",
    ".dwl",
    ".dwl2",
    ".idlk",
    ".lnk",
    ".lock",
    ".nxpart",
    ".part",
    ".partial",
    ".swp",
    ".tmp",
    "~",
]
```
- Version added: 2.4.1
- Version changed: 4.1.0, added `.idlk` (Adobe InDesign lock files)

* * *

#### `locale`

Set up the language if not already defined.</br>
This can also be set up by the user from the Settings window.

- Default value (str): `en`
- Version added: 2.0

* * *

#### `log-filename`

The name of the log file.</br>
If not set, defaults to `nxdrive.log`.

- Default value (str): None
- Version added: 2.0

* * *

#### `log-level-console`

Define level for console log.</br>
Can be `DEBUG`, `INFO`, `WARNING` or `ERROR`.

- Default value (str): `WARNING`
- Version added: 2.0
- Version changed: 4.1.0, removed the `TRACE` level

`TRACE` level has been deprecated since 4.1.0, and will be treated as `DEBUG`.

* * *

#### `log-level-file`

Define level for file log.</br>
Can be `DEBUG`, `INFO`, `WARNING` or `ERROR`.

- Default value (str): `INFO`
- Version added: 2.0
- Version changed: 4.1.0, removed the `TRACE` level

`TRACE` level has been deprecated since 4.1.0, and will be treated as `DEBUG`.

* * *

#### `max-errors`

Define the maximum number of retries before considering the document as in error.

- Default value (int): `3`
- Version added: 2.0

* * *

#### `max-sync-step`

Number of consecutive sync operations to perform without refreshing the internal state DB.

- Default value (int): `10`
- Version added: 2.0
- Version removed: 4.1.3

* * *

#### `nofscheck`

Disable the standard check for binding, to allow installation on network filesystem.

- Default value (bool): `False`
- Version added: 2.0.911

* * *


#### `proxy-exceptions`

Define URLs exception for the proxy.

- Default value (str): None
- Version added: 2.0
- Version removed: 4.0

* * *

#### `proxy-server`

Define the address of the proxy server (e.g. `http://proxy.example.com:3128`).</br>
This can also be set up by the user from the Settings window.

- Default value (str): None
- Version added: 2.0

* * *

#### `proxy-type`

Define proxy type.</br>
This can also be set up by the user from the Settings window.

- Default value (str): None
- Version added: 2.0
- Version removed: 4.0, pass the scheme directly in the [proxy-server](#proxy-server) URL

* * *

#### `ssl-no-verify`

Define if SSL errors should be ignored.
Highly unadvised to enable this option.

- Default value (bool): `False`
- Version added: 4.0.1

* * *

#### `sync-and-quit`

Launch the synchronization and then exit the application.

- Default value (bool): `False`
- Version added: 4.2.0

* * *

#### `synchronization-enabled`

Synchronization features are enabled.</br>
If set to `False`, nothing will be downloaded/uploaded/synchronized but Direct Edit and Direct Transfer features will work.

- Default value (bool): `True`
- Version added: 4.4.0

* * *

#### `timeout`

Define the socket timeout in seconds.

- Default value (int): `30`
- Version added: 2.0

* * *

#### `tmp-file-limit`

File size in MiB.</br>
Files smaller than this limit will be written at once to the file rather than chunk by chunk.

- Default value (float): `10.0`
- Version added: 4.1.4

* * *

#### `update-check-delay`

Define the auto-update check delay in seconds.</br>
0 means disabled.

- Default value (int): `3600`
- Version added: 2.0

* * *

#### `update-site-url`

Configure a custom update website.</br>
See Nuxeo Drive Update Site for more details.

- Default value (str): [https://community.nuxeo.com/static/drive-updates](https://community.nuxeo.com/static/drive-updates)
- Version added: 2.0

* * *

#### `use-analytics`

Share anonymous usage analytics to help the developers build the best experience for you.

- Default value (bool): `False`
- Version added: 4.1.0
- Version changed: 4.4.5, a minimal set of GDPR-information is sent even if set to `False` (see [NXDRIVE-2254](https://jira.nuxeo.com/browse/NXDRIVE-2254))

* * *

#### `use-sentry`

Allow sharing error reports when something unusual happens.</br>
This parameter is critical for the product's health, please do not turn it off.

- Default value (bool): `True`
- Version added: 4.1.0

## Behaviors

The application can be tweaked using on-demand on/off options via the `behavior` parameter.</br>
As this is targeting server actions, this parameter cannot be set via the local configuration file but only via the server configuration one.

Available behaviors:

| Parameter | Default Value (bool) | Version Added | Description
|---|---|---|---
| `server_deletion` | true | 4.4.2 | Allow or disallow server deletions.

Here is how to tweak behaviors via the server configuration file:

```json
{
  "behavior": {
    "server-deletion": true
  }
}
```

## Features

Several features can be turned on/off on-demand via the `feature` parameter.</br>
This parameter can be set via the local configuration file and the server configuration one.

If the same feature is defined locally and remotely, then only the local value will be taken into account.

Available features:

| Parameter | Default Value (bool) | Version Added | Description
|---|---|---|---
| `auto_update` | true | 4.4.2 | Allow or disallow auto-updates.
| `direct_edit` | true | 4.4.2 | Allow or disallow Direct Edit.
| `direct_transfer` | true | 4.4.2 | Allow or disallow Direct Transfer.
| `s3` | true | 4.4.2 | Allow or disallow using Amazon S3 direct uploads.

Here is how to tweak features via the local configuration file:

```ini
[DEFAULT]
env = myFeatures

[myFeatures]
; (other parameters...)
feature.auto-update     = true
feature.direct-edit     = true
feature.direct-transfer = true
feature.s3              = true
```

Here is how to tweak features via the server configuration file:

```json
{
  // (other parameters...)
  "feature": {
    "auto-update"     : true,
    "direct-edit"     : true,
    "direct-transfer" : true,
    "s3"              : true
  }
}
```

### Command Line Arguments

When used as a command line argument you need to prefix with the long argument modifier `--`, e.g.: `--log-level-file=DEBUG`.

## Configuration File

The format of the `config.ini` file is as following:

```ini
[DEFAULT]
env = custom

[no-updates]
; Unused section
update-check-delay = 0

[custom]
ca_bundle = C:\certificates\terena-ssl.crt
debug = False
feature.auto-update = true
log-level-file = DEBUG
ignored_suffixes =
    .bak
    .tmp
    .XXX
```

The `env` option from the `[DEFAULT]` section defines in which section looking for options.
Here, options defined in the `[custom]` section will be taken into account.

### Interpolation

If you are using special characters in values like:

```ini
ca_bundle = %userprofile%\.certificates
```

You may end up on such error:

```python
configparser.InterpolationSyntaxError: '%' must be followed by '%' or '(', found: '%userprofile%/.certificates'
```

This is a special processing done by the configuration parser named [values interpolation](https://docs.python.org/3/library/configparser.html#interpolation-of-values).

In that case, just double the percent sign:

```ini
ca_bundle = %%userprofile%%\.certificates
```

{{! /multiexcerpt}}

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
