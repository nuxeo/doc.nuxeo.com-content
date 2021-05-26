---
title: Configuration
description: ''
review:
    comment: ''
    date: '2021-05-24'
    status: ok
labels:
    - nuxeo-drive
    - configuration
    - parameters
tree_item_index: 350
toc: true
---

## Settings

{{> anchor 'open-drive-settings'}} **Accessing the Settings Window**

### macOS

1. Click on the the icon ![]({{file name='drive-icon-online.png' page='nuxeo-drive'}} ?w=20) (or ![]({{file name='drive-icon-online-old.png' page='nuxeo-drive'}} ?w=14) on old versions) in the systray.
2. Click on the icon ![]({{file name='drive-icon-settings.png' page='nuxeo-drive'}} ?w=20) and on the **Settings** menu item.</br>
    The Settings window is displayed.

### Windows

1. Right-click on the the icon ![]({{file name='drive-icon-online.png' page='nuxeo-drive'}} ?w=20) (or ![]({{file name='drive-icon-online-old.png' page='nuxeo-drive'}} ?w=14) on old versions) in the systray.
2. Click on the icon ![]({{file name='drive-icon-settings.png' page='nuxeo-drive'}} ?w=20) and on the **Settings** menu item.</br>
    The Settings window is displayed.

The Nuxeo Drive settings window shows four tabs that enable you to customize the behavior of your Nuxeo Drive:

## Graphical User Interface

- **Features**</br>
    This is where you can turn on/off the features available on your application.
    ![]({{file name='drive-tab-features.png' page='nuxeo-drive'}})

- **Accounts**</br>
    Set up one or several Nuxeo Platform accounts to use with Nuxeo Drive.
    ![]({{file name='drive-tab-accounts.png' page='nuxeo-drive'}})

- **Advanced**</br>
    This is where you select the general behavior of your Nuxeo Drive: what language to use, the update policy, etc.
    ![]({{file name='drive-tab-advanced.png' page='nuxeo-drive'}})

- **About**</br>
    Information about the Nuxeo Drive version and license.
    ![]({{file name='drive-tab-about.png' page='nuxeo-drive'}})

## Managing Local Nuxeo Drive Accounts

You can use Nuxeo Drive to synchronize content from several Nuxeo Platform applications. This means that you can set up several accounts on Nuxeo Drive. Accounts are managed from the **Accounts** tab of the [Settings window](#open-drive-settings).

### Adding a New Account

When you add a new account you need to provide the following information:

- **URL**: Type the URL of your Nuxeo application, either the domain name only (`example.org`) or partial URL (`https://example.org`) or a full URL (`https://example.org/nuxeo`).
- **Folder**: Select where you want your Nuxeo Drive folder to be created.

Clicking on **Connect** will open your browser to the login page. Sign-in and you will be redirected to Drive.

The creation of a new account triggers the following actions:

- A Nuxeo Drive folder is created at the location you chose (see section [Accessing the Nuxeo Drive Folder](#access-local-drive-folder)).
- Nuxeo Drive starts synchronizing the Nuxeo workspaces or folders you [indicated as synchronized](#synchronizing-workspaces-root) in the Nuxeo Platform. It will automatically update content when there is a modification on the server.
- In the **Nuxeo Drive** tab in your **Home**, an authentication token corresponding to the computer you are synchronizing from is displayed. The list of synchronized folders is displayed in the **Synchronization roots** section of the tab.
    ![]({{file name='drive-webui-newtab.png' page='nuxeo-drive'}} ?w=650)

### Deleting an Account

You can delete accounts from your Nuxeo Drive at any time by clicking on the **Delete account** button of the corresponding account, in the **Settings** window. The local Nuxeo Drive folder is not deleted.

## Changing the Nuxeo Drive Language

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

#### `cert-file`

File that is a client certificate signed by the server Certificate Authorities.
If set, [cert-key-file](#cert-key-file) must also be set, otherwise it will be ignored.
See the `requests` [documentation](http://docs.python-requests.org/en/master/user/advanced/#ssl-cert-verification) for more details.

- Default value (str): None
- Version added: 5.0.0

* * *

#### `cert-key-file`

File that is the key to the specified [cert-file](#cert-file).
The file MUST NOT be password protected to be usable.
If set, [cert-file](#cert-file) must also be set, otherwise it will be ignored.
See the `requests` [documentation](http://docs.python-requests.org/en/master/user/advanced/#ssl-cert-verification) for more details.

- Default value (str): None
- Version added: 5.0.0

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

Size of the chunks in MiB. Has to be above 0 and lower or equal to 5120 (5 GiB).

- Default value (int): `20`
- Version added: 4.1.2
- Version changed: 4.5.0, bumped the upper limit from `20` to `5120`

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

#### `custom-metrics`

Asynchronously send custom metrics from time to time to the server.

- Default value (bool): `True`
- Version added: 5.1.0

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
- Version added: 4.5.0

* * *

#### `exec-profile`

Define the execution profile for the application in metrics.
Can be `private` for development/QA cases or `public` for production versions.

- Default value (str): `public`
- Version added: 5.10

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
- Version changed: 4.1.0, `TRACE` level has been deprecated and is treated as `DEBUG`
- Version changed: 5.2.0, `TRACE` level was removed

* * *

#### `log-level-file`

Define level for file log.</br>
Can be `DEBUG`, `INFO`, `WARNING` or `ERROR`.

- Default value (str): `INFO`
- Version added: 2.0
- Version changed: 4.1.0, `TRACE` level has been deprecated and is treated as `DEBUG`
- Version changed: 5.2.0, `TRACE` level was removed

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

#### `use-idempotent-requests`

Control whenever specific HTTP calls should be made idempotent or not.

- Default value (bool): `False`
- Version added: 5.1.1

It requires [NXP-29978](https://jira.nuxeo.com/browse/NXP-29978) on the server.

If enabled, those requests will be impacted:
- `FileManager.Import` (Direct Transfer)
- `NuxeoDrive.CreateFile` (synchronization)

* * *

#### `use-sentry`

Allow sharing error reports when something unusual happens.</br>
This parameter is critical for the product's health, please do not turn it off.

- Default value (bool): `True`
- Version added: 4.1.0
