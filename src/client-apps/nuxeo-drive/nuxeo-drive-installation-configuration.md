---
title: Nuxeo Drive Installation / Configuration
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

## Requirements

To be able to synchronize folders on your computer, you need to install the Nuxeo Drive client on your computer.
We provide OS-specific installers for macOS and Windows, available from the Nuxeo Drive tab of the Home.

### Support

See this up-to-date [support page](https://github.com/nuxeo/nuxeo-drive/blob/master/docs/support.md) to know what OS vendor and version we are supporting; but also the Python version we are currently using.

### Authentication

Nuxeo Drive uses the same authentication way as any user would do with its browser. So it can handle basic authentications [available in the platform]({{page page='authentication-and-user-management'}}) and Kerberos. But it is missing several protocols that require deep changes in Nuxeo Drive itself, as of now those are not available:

- OAuth 2
- NTLM (tracked with the ticket [NXDRIVE-875](https://jira.nuxeo.com/browse/NXDRIVE-875))

## Installation

### Installing Nuxeo Drive Addon

{{{multiexcerpt 'MP-installation-easy' space='nxdoc' page='generic-multi-excerpts'}}}

After Nuxeo Drive has been installed on the server, a Nuxeo Drive tab in the user Home, from which you can see what Nuxeo spaces are synchronized with Drive.

![]({{file name='drive-webui-newtab.png' page='nuxeo-drive'}} ?w=550)

### Installing Nuxeo Drive on Your Computer

If you try to synchronize a folder and you haven't installed the Nuxeo Drive client yet or haven't provided your credentials to the Nuxeo Drive client, you are automatically directed to the Nuxeo Drive home tab to install it.

#### Installing Nuxeo Drive on macOS

1. Download the installer (`.dmg` file) from the **Nuxeo Drive** tab in the **Home** or from the [Nuxeo Drive update site](https://community.nuxeo.com/static/drive-updates/nuxeo-drive.dmg).
2. Run the installer: drag and drop the Nuxeo Drive icon in the Applications directory.
    ![]({{file name='drive-installer-dmg.png' page='nuxeo-drive'}})
    Nuxeo Drive is now installed on your computer.
3. You now need to [start Nuxeo Drive](#starting-nuxeo-drive) on your computer.
    A Nuxeo Drive folder will be created by the system at the root of your local home folder (`/Users/USER/`). This is the place where synchronized documents will be stored on your computer.

#### Installing Nuxeo Drive on Windows

1. Download the Windows installer (`.exe` file) from the **Nuxeo Drive** tab in the **Home** or from the [Nuxeo Drive update site](https://community.nuxeo.com/static/drive-updates/nuxeo-drive.exe).
2. Run the installer: indicate where Nuxeo Drive should be installed (typically `C:\Program Files (x86)`) and click **Next** until the installation process is done.
    Nuxeo Drive is now installed on your computer.

    {{#> callout type='tip' }}
    If you have any problem due to a previous installation of Nuxeo Drive you can try using this [Microsoft tool](https://support.microsoft.com/fr-fr/mats/program_install_and_uninstall) to uninstall it properly.
    {{/callout}}

3. You now need to [start Nuxeo Drive](#starting-nuxeo-drive) to use it.
    A new Nuxeo Drive folder will be created by the system in your local Documents folder (`C:\Users\USER\Documents\`). This is the place where synchronized documents will be stored on your computer.

#### Installing Nuxeo Drive on GNU/Linux

1. Download the binary (`.AppImage` file) from the **Nuxeo Drive** tab in the **Home** or from the [Nuxeo Drive update site](https://community.nuxeo.com/static/drive-updates/nuxeo-drive-x86_64.AppImage).
2. [Make the file executable](https://discourse.appimage.org/t/how-to-run-an-appimage/80).
3. You now need to start Nuxeo Drive by clicking on the file.
    A Nuxeo Drive folder will be created by the system at the root of your local home folder (`/home/USER/`). This is the place where synchronized documents will be stored on your computer.

If you encounter any error, please check those pages: [Manual Usage](https://github.com/nuxeo/nuxeo-drive/blob/master/docs/gnu_linux.md) and [Troubleshooting](https://github.com/nuxeo/nuxeo-drive/blob/master/docs/gnu_linux_qa.md).

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
    ![]({{file name='drive-notif-upgrade-progress.png' page='nuxeo-drive'}})

## Configuration

### Settings

{{> anchor 'open-drive-settings'}} **Accessing the Settings Window**

#### Windows

1. Right-click on the the icon ![]({{file name='drive-icon-online.png' page='nuxeo-drive'}} ?w=20) (or ![]({{file name='drive-icon-online-old.png' page='nuxeo-drive'}} ?w=14) on old versions) in the systray.
2. Click on the icon ![]({{file name='drive-icon-settings.png' page='nuxeo-drive'}} ?w=20) and on the **Settings** menu item.</br>
    The Settings window is displayed.

#### macOS

1. Click on the the icon ![]({{file name='drive-icon-online.png' page='nuxeo-drive'}} ?w=20) (or ![]({{file name='drive-icon-online-old.png' page='nuxeo-drive'}} ?w=14) on old versions) in the systray.
2. Click on the icon ![]({{file name='drive-icon-settings.png' page='nuxeo-drive'}} ?w=20) and on the **Settings** menu item.</br>
    The Settings window is displayed.

The Nuxeo Drive settings window shows four tabs that enable you to customize the behavior of your Nuxeo Drive:

### Graphical User Interface

- **General**</br>
    This is where you select the general behavior of your Nuxeo Drive: what language to use, the update policy, etc.
    ![]({{file name='drive-tab-general.png' page='nuxeo-drive'}})

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

Parameter names are quite flexible. There is no differentiation between lowercase and uppercase, nor between hyphens and underscores.
For instance, you can specify `ssl-no-verify`, `ssl_no_verify`, `ssl_no-verify` or `SSL_No_verify`, it will be the same result.

Parameter values are taken as is, except for booleans. In that case, you can specify, in lowercase or uppercase:

- `true`, `1`, `on`, `yes` or `oui` to enable
- `false`, `0`, `off`, `no` or `non` to disable

### Value Types

- bool: boolean
- int: integer
- list: list of strings (one item by line)
- str: string

### Available Parameters

| Parameter | Default Value | Type | Version Added | Description
|---|---|---|---|---
| `big-file` | 300 | int | 4.1.4 | File size in MiB. Files bigger than this limit are considered "big". This implies few tweaks in the synchronization engine like bypassing most of the expensive and time-consuming digest computations. It is a tradeoff to handle large files as best effort.
| `ca-bundle` | None | str | 4.0.2 | File or directory with certificates of trusted CAs. If set, `ssl-no-verify` has no effect. See the `requests` [documentation](http://docs.python-requests.org/en/master/user/advanced/#ssl-cert-verification) for more details.
| `channel` | centralized | str | 4.0.2 | Update channel. Can be centralized, release, beta or alpha.
| `chunk_limit` | 20 | int | 4.1.2 | Size in MiB above which files will be uploaded in chunks (if `chunk_upload` is `True`). Has to be above 0.
| `chunk_size` | 20 | int | 4.1.2 | Size of the chunks in MiB. Has to be above 0 and lower or equal to 20.
| `chunk_upload` | True | bool | 4.1.2 | Activate the upload in chunks for files bigger than `chunk_limit`.
| `delay` | 30 | int | 2 | Define the delay before each remote check.
| `force-locale` | None | str | 2 | Force the reset to the language.
| `handshake-timeout` | 60 | int | 2 | Define the handshake timeout.
| `ignored-files` | ... | list | 2.4.1 | File names to ignore while syncing.
| `ignored-prefixes` | ... | list | 2.4.1 | File prefixes to ignore while syncing.
| `ignored-suffixes` | ... | list | 2.4.1 | File suffixes to ignore while syncing.
| `locale` | en | str | 2 | Set up the language if not already defined. This can also be set up by the user from the Settings window.
| `log-filename` | None | str | 2 | The name of the log file.
| `log-level-console` | WARNING | str | 2 | Define level for console log. Can be DEBUG, INFO, WARNING, ERROR. TRACE level has been deprecated since 4.1.0, and will be treated as DEBUG.
| `log-level-file` | INFO | str | 2 | Define level for file log. Can be DEBUG, INFO, WARNING, ERROR. TRACE level has been deprecated since 4.1.0, and will be treated as DEBUG.
| `max-errors` | 3 | int | 2 | Define the maximum number of retries before considering the file as in error.
| `nofscheck` | False | bool | 2.0.911 | Disable the standard check for binding, to allow installation on network filesystem.
| `proxy-server` | None | str | 2 | Define the address of the proxy server (e.g. `http://proxy.example.com:3128`). This can also be set up by the user from the Settings window.
| `ssl-no-verify` | False | bool | 4.0.1 | Define if SSL errors should be ignored. Highly unadvised to enable this option.
| `sync-and-quit` | False | bool | 4.2.0 | Launch the synchronization and then exit the application.
| `timeout` | 30 | int | 2 | Define the socket timeout.
| `tmp_file_limit` | 10.0 | float | 4.1.4 | File size in MiB. Files smaller than this limit will be written at once to the file rather than chunk by chunk.
| `update-check-delay` | 3600 | int | 2 | Define the auto-update check delay. 0 means disabled.
| `update-site-url` | [URL](https://community.nuxeo.com/static/drive-updates) | str | 2 | Configure a custom update website. See Nuxeo Drive Update Site for more details.
| `use-analytics` | False | bool | 4.1.0 | Share anonymous usage analytics to help the developers build the best experience for you.
| `use-sentry` | True | bool | 4.1.0 | Allow sharing error reports when something unusual happen.

### Obsolete Parameters

| Parameter | Default Value | Version Removed | New Option Name | New Default Value
|---|---|---|---|---
| `beta-update-site-url` | [URL](https://community.nuxeo.com/static/drive-updates) (str) | 4.0.2 | None | None
| `beta-channel` | False (bool) | 4.0.2 | `channel` | release (str)
| `consider-ssl-errors` | True (bool) | 4.0.1 | `ssl-no-verify` | False (bool)
| `debug` | False (bool) | 4.0.0 | None | None
| `max-sync-step` | 10 (int) | 4.1.3 | None | None
| `proxy-exceptions` | None (str) | 4.0.0 | None | None
| `proxy-type` | None (str) | 4.0.0 | None | None

Other changes:

- `channel` was set to "release" in 4.0.2. It then changed to "centralized" in 4.2.0.

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

That's why we **strongly recommend to keep** this default configuration, but you can still [disable Elasticsearch for Audit Logs]({{page page='elasticsearch-setup'}}#disabling-elasticsearch-for-audit-logs).

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

    {{#> callout type='tip' }}
    If you have any problem during the uninstallation process you can try using this [Microsoft tool](https://support.microsoft.com/fr-fr/mats/program_install_and_uninstall) to uninstall Nuxeo Drive properly.
    {{/callout}}

{{#> callout type='warning' }}
At this point you have uninstalled the Nuxeo Drive program and its configuration. If you want to get rid of the synchronized data you also need to delete the Nuxeo Drive folder like you delete any regular Windows folder.
{{/callout}}

{{! /multiexcerpt}}
