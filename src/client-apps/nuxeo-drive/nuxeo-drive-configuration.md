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
