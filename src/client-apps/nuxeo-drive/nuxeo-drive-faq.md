---
title: Nuxeo Drive FAQ
review:
  comment: ''
  date: '2019-03-15'
  status: ok
labels:
  - nuxeo-drive
  - mschoentgen
  - lklein
  - yachour
  - multiexcerpt
  - excerpt
  - lts2017-ok
toc: true
tree_item_index: 900
version_override:
  LTS 2015: 710/userdoc/nuxeo-drive-faq
  '6.0': 60/userdoc/nuxeo-drive-faq
confluence:
    ajs-parent-page-id: '13664723'
    ajs-parent-page-title: Nuxeo Drive
    ajs-space-key: USERDOC
    ajs-space-name: Nuxeo Platform User Documentation
    canonical: Nuxeo+Drive+FAQ
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC/Nuxeo+Drive+FAQ'
    page_id: '23364863'
    shortlink: '-4RkAQ'
    shortlink_source: 'https://doc.nuxeo.com/x/-4RkAQ'
    source_link: /display/USERDOC/Nuxeo+Drive+FAQ
history:
    -
        author: Antoine Taillefer
        date: '2016-05-30 17:25'
        message: ''
        version: '16'
    -
        author: Antoine Taillefer
        date: '2016-01-07 10:51'
        message: ''
        version: '15'
    -
        author: Antoine Taillefer
        date: '2016-01-07 10:49'
        message: ''
        version: '14'
    -
        author: Antoine Taillefer
        date: '2016-01-07 10:45'
        message: ''
        version: '13'
    -
        author: Antoine Taillefer
        date: '2016-01-06 16:43'
        message: ''
        version: '12'
    -
        author: Antoine Taillefer
        date: '2015-10-27 13:50'
        message: ''
        version: '11'
    -
        author: Thierry Delprat
        date: '2015-10-27 13:42'
        message: ''
        version: '10'
    -
        author: Thierry Delprat
        date: '2015-10-27 13:41'
        message: ''
        version: '9'
    -
        author: Antoine Taillefer
        date: '2015-10-27 11:37'
        message: ''
        version: '8'
    -
        author: Antoine Taillefer
        date: '2015-10-27 11:33'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2015-06-09 09:25'
        message: ''
        version: '6'
    -
        author: Antoine Taillefer
        date: '2015-06-08 14:33'
        message: ''
        version: '5'
    -
        author: Antoine Taillefer
        date: '2015-06-08 14:31'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2015-01-20 15:31'
        message: ''
        version: '3'
    -
        author: Solen Guitter
        date: '2015-01-20 15:26'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2015-01-20 15:26'
        message: ''
        version: '1'
---

{{! multiexcerpt name='drive_faq_page_content'}}
{{! excerpt}}
This page non exhaustively lists frequently asked questions about Nuxeo Drive
{{! /excerpt}}

## What are the required Nuxeo versions/hotfixes when using a Drive client version?

In order to be fully compatible with Nuxeo Drive, the  minimum required version of the `nuxeo-drive` server addon is:

- **7.10**: 1.5.7
- **8.10**: 1.6.6
- **9.10**: 1.7.3
- **10.10**: 1.8.1

And the minimum required installed Hotfix (HF) is:

Client | 7.10 | 8.10 | 9.10 | 10.10
--- | --- | --- | --- | ---
3.x | HF43 | HF33 | HF12 | HF11
4.x | HF47 | HF39 | HF22 | HF11

## What are the supported OS?

Nuxeo Drive is guaranted to run on:

- GNU/Linux, 64 bits
- macOS >= 10.11, 64 bits
- Windows 7, both 32 and 64 bits
- Windows 8, both 32 and 64 bits
- Windows 8.1, both 32 and 64 bits
- Windows 10, both 32 and 64 bits

### Supported GNU/Linux Distributions

This is a table of minimum supported versions.

| Nuxeo Drive | Debian | Ubuntu | Fedora | Manjaro
|---|---|---|---|---
| 4.2.0+ | 10 | 16.04 | 29 | 18.1.0

## What Actions Trigger a Synchronization?

### Server Actions

Server side actions are all reflected locally (rename, move, delete, permissions change).

### Local Actions

Those local actions will trigger a synchronization with the server:

- file/folder rename;
- file/folder move;
- file/folder delete.

Note that changes on file metadata at the OS level (like date modification) that do not alter the file integrity (e.g.: its digest has not changed) will **not** trigger the synchronization.

## How to Configure the Synchronization Delay

Since the version `1.3.1216` of Nuxeo Drive client, the synchronization delay is 30 seconds (5 seconds in the previous releases). There are three ways to change this value:

1. For test purpose, run Nuxeo Drive in console mode with the `--delay` parameter:

   ```sh
   ndrive --delay=120
   ```

2. Add a `config.ini` file in the folder `%HOME/.nuxeo-drive` with the following lines:

    ```ini
    [DEFAULT]
    env = longDelay

    [longDelay]
    delay = 120
    ```

    This example sets the delay to 120 seconds by activating the `longDelay` setting environment.

3. Finally, if you want to change the delay for all the Nuxeo Drive clients, you can update the `delay` setting of the [Nuxeo Drive global configuration]({{page page='how-to-configure-nuxeo-drive-globally'}}).

## How to Change the Log Verbosity

1. The simplest way is to access it in the Settings panel through:

    - the Advanced tab on Drive <= 2.4.0,
    - the General tab on Drive >= 4.1.0.

2. This can also be done by adding the following lines in the `config.ini` file:

    - Increase log verbosity:

    ```ini
    log-level-file = DEBUG
    ```

    - Decrease log verbosity:

    ```ini
    log-level-file = ERROR
    ```

3. Finally, if you want to change the log verbosity for all the Nuxeo Drive clients, you can update the `log_level_file` setting of the [Nuxeo Drive global configuration]({{page page='how-to-configure-nuxeo-drive-globally'}}).

## How to Enable Icon Overlays on macOS

They are available since Nuxeo Drive 3.1.0 and should be enabled by default. If not, you can do it manually in **System Preferences** > **Extensions**:

![]({{file name='drive-macos-settings.png' page='nuxeo-drive'}})

And ensure the Nuxeo Drive > Finder Extensions is checked:

![]({{file name='drive-macos-settings-extensions.png' page='nuxeo-drive'}})

## How to Make Nuxeo Drive Work with a Nuxeo Cluster

You only need to make sure that:

- [Redis]({{page space='nxdoc' page='redis-configuration'}}) is enabled.
- The `$DATA_DIR/transientstores/default` directory is shared by all the Nuxeo instances, see the [related documentation]({{page space='nxdoc' page='transient-store'}}) for details.

## How to Report Bugs or Problems about Nuxeo Drive Usage

If you want to report any issue regarding Nuxeo Drive, you need to provide these informations:

- Drive client version, for example `4.1.0`: this information can be found in the **Settings** > **About** menu when doing a right-click on Nuxeo Drive icon in the systray
- Drive package version, for example `1.8.1`: this information can be found in **Admin** > **Update Center** > **Local packages** (administrator rights are needed to access this section)
- Nuxeo Platform version, for example `10.10`, and the level of hotfixes installed
- Bug report generated by Nuxeo Drive, see **Settings > Generate a bug report**.
- Drive client logs, located in `$HOME/.nuxeo-drive/logs/nxdrive.log`
- Nuxeo Platform logs, located in `$NUXEO/log/server.log` by default

## How to Migrate Content

If you need to move your Nuxeo Drive content from one computer to another, we suggest you to just initiate an empty Nuxeo Drive on the new computer.

Another possibility is to use a [Microsoft Migration Tool](https://technet.microsoft.com/en-us/library/cc974331).

We do not recommend to copy the Nuxeo Drive files to USB keys to transfer them as it will not migrate all the data correctly.

## Windows CLI for Nuxeo Drive

Useful commands for sysadmin, but it can be helpful to everyone at times.

- Stop/Kill Nuxeo Drive:

```batch
taskkill /im ndrive.exe /f 2>null
```

- Silently uninstall Nuxeo Drive:

```batch
"%USERPROFILE%\AppData\Local\Nuxeo Drive\unins000.exe /VERYSILENT"
```

## Limitations

Currently Nuxeo Drive has some limitations:

- The target use case is not to synchronize a huge tree on a lot of desktops: Nuxeo Drive is not optimized to replicate the Document Repository on each desktop.
- Complex synchronization cases where you delete files that are being synchronized.
- Drive will generates errors and will ignore files that are duplicates on the server. Thus, it is not recommended to have an extensive usage of Nuxeo Drive with plateform use cases implying file duplicates.

{{! /multiexcerpt}}

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Nuxeo Drive Related Documentation'}}

- [Nuxeo Drive developer documentation]({{page space='nxdoc' page='nuxeo-drive'}})
- [HOWTO: Configure Nuxeo Drive Globally]({{page space='nxdoc' page='how-to-configure-nuxeo-drive-globally'}})
- [HOWTO: Manually Initialize or Deploy a Nuxeo Drive Instance]({{page space='nxdoc' page='how-to-manually-initialize-or-deploy-a-nuxeo-drive-instance'}})
- [Nuxeo Drive Update Site]({{page space='nxdoc' page='nuxeo-drive-update-site'}})

{{/panel}}

</div><div class="column medium-6">{{#> panel heading='Other Related Documentation '}}

- [Nuxeo Support Documentation]({{page space='studio' page='how-to-fill-a-jira-ticket'}})

{{/panel}}</div></div>
