---
title: Nuxeo Outlook Connector
description: 'Nuxeo Outlook Connector enables users to use Nuxeo Platform in Outlook.'
review:
    comment: ''
    date: '2020-12-16'
    status: ok
labels:
    - lts2019-ok
    - mastarita
toc: true
tree_item_index: 2450
---

The Nuxeo Outlook Integration allows you to archive emails and files as documents to your Nuxeo instance and access the repository without leaving Microsoft Outlook.

**Features of the Nuxeo Outlook Integration include:**

- Archive Microsoft Outlook content (emails, meetings, and appointments) or files from the Windows file system as Nuxeo documents
- Browse and drag content from the repository to emails or your Windows desktop
Search inside your Nuxeo repository
  - As option, automatically extract email attachments to make them accessible for the search engine
- Access your favorite documents
- Create new versions and replace files of your documents
- View a documents' version history and download older versions

## Installation

### Client-side

#### Manual Installation

If you are distributing the Nuxeo Outlook Client across an organization, see [Scripted Installation](#scripted-installation) section.

- Extract the contents of the archive (usually called `Nuxeo-EmailClientOutlookPlugin-x.x.x.zip`) and choose the x86 or x64 version dependent on your current system

- Choose either the `msi` or `exe` (both will work, the `msi` file is needed for the scripted installation). </br>
  An installation wizard will open.

- Follow the installation process

- Open Microsoft Outlook</br>
  You will see the Nuxeo Outlook Integration docked to the right. You can access the settings (i.e. to apply a license) by pressing the gear icon

#### Command-line Installation

This is useful for larger companies who do not want their single clients to run the installation by themselves. Besides the actual client, the installation will copy a configuration file into the user profile folder (alias in Windows Explorer: `%USERPROFILE%`). If there already is a user configuration present, the existing parameters will not be overwritten.

There are two ways client can be installed using CMD parameters:
- Interactive installation
- Quiet installation (performs in a silent mode w/o any user interaction).

In order to run an installation, you need to do the following steps:

1. Run the Command Prompt as an Administrator (even if you are an Administrator on the machine) to force all operations to be performed under administrative permissions.

1. Navigate to the folder where the `NuxeoOutlookIntegration....msi` file is located. Depending on the OS running on the client machine, you have to choose between "x86" (32 bit) or "x64" (64 bit).</br>
    Optionally you can type the exact file-path instead.

1. Execute the following command:
    - For **interactive installation**: msiexec /i NuxeoOutlookIntegration.msi LIST OF PARAMETERS (i.e. msiexec /i NuxeoOutlookIntegration.msi HOSTNAME="https://mynuxeoinstance.com/nuxeo" OAUTH2CLIENTID="nuxeo-oi")

    - For **quiet installation**: msiexec /i NuxeoOutlookIntegration.msi LIST OF PARAMETERS /quiet (i.e. msiexec /i NuxeoOutlookIntegration.msi HOSTNAME="https://mynuxeoinstance.com/nuxeo" OAUTH2CLIENTID="nuxeo-oi" /quiet)

**Command line parameters:**
- **HOSTNAME** - Sets Nuxeo server URL. (format: <http | https>://<hostname> ). The name has to point to the API endpoint, which is usually i.e. https://nuxeoserverinstance/nuxeo (but may differ on your installation).
- **OAUTH2CLIENTID** - Set the name of the OAuth2 client Id used for authentication with OAuth2
- **AUTH** - Sets the type of authentication. "Basic" or "OAuth2"
- **NUXEODRIVEENABLED** - Enables or disables the context menu for "Edit with Nuxeo Drive" - default is false
- **OFFICEONLINEENABLED** - Enables or disables the context menu for "Edit with Office Online" - default is false
- **LANGUAGE** - Sets the language (format examples: "de-DE", "fr-FR", "en-US")

Culture settings, available languages:
- en-US = English
- fr-FR = French
- de-DE = German

**Example:**
- The URL of your Nuxeo instance is "https://mynuxeoinstance.com/nuxeo".
- Authentication should be set to OAuth2, your OAuth2 client Id is `nuxeo-oi`.
- Your company has set up the Nuxeo Drive for editing but has no Office Online integration.
- You want the default language to be french (can be changed by the user later)

It should look like this:
```
msiexec /i NuxeoOutlookIntegration.msi HOSTNAME="https://mynuxeoinstance.com/nuxeo" AUTH="OAuth2" OAUTH2CLIENTID="nuxeo-mi" NUXEODRIVEENABLED="true" LANGUAGE="fr-FR"
```

If you want the same installation to run quietly, you can just add /quiet:
```
msiexec /i NuxeoOutlookIntegration.msi HOSTNAME="https://mynuxeoinstance.com/nuxeo" AUTH="OAuth2" OAUTH2CLIENTID="nuxeo-mi" NUXEODRIVEENABLED="true" LANGUAGE="fr-FR" /quiet
```

### Server-side


## Configuration

### Settings Dialog

For configuring the Nuxeo Outlook Plugin open the settings dialog by clicking the gear wheel symbol in the menu bar.

PICTURE

#### General Settings

PICTURE

**Language**: choose your preferred language (currently available languages are English, French and German)

**Show sidebar for new emails**: Check this option if you want to access the Nuxeo repository directly from within a new email

**Enable email attachments extraction**: Check this option if you want that attachments are extracted from the email and stored as separate content items within Nuxeo as attachment of the email content object

**Online edit options**

- Enable Nuxeo Drive Edit: Check this option if you have Nuxeo Drive installed on your local computer. You will be able to edit documents directly from within the Nuxeo Outlook Integration panel.</br>
  Requirement: Nuxeo Drive installation, for further information see the [documentation]({{page version='' space='client-apps' page='nuxeo-drive'}}).

- Enable Office Online Edit: Check this option if your Nuxeo environment is leveraging the Nuxeo Office Online Integration. You will be able to edit documents directly from within the Nuxeo Outlook Integration panel.
  Requirement: WOPI integration configured at your Nuxeo Server, valid MS Office 365 subscription, for further information see the [documentation]({{page version='' space='nxdoc' page='nuxeo-office-online-integration'}}).

Please contact your Administrator if you are not sure which option is the appropriate one for your organization.

#### Connection Settings

PICTURE

**Host Url**: The web address your Nuxeo server is reachable at and points to your API endpoint. URL usually ends with "/nuxeo".

##### Authentication options

**Basic Authentication**: Standard authentication with user and password

**Check Connection**: Click this button to determine whether you have entered the correct server URL and username / password combination

**OAuth Authentication**: Check this option, if your organization is using OAuth Authentication

Client ID: Enter your Client ID for OAuth Authentication

**Reset OAuth**: Click this button, in the case you need to change your authentication (change of user)

##### Security

**Disable server certificate check**: Check this option if your Nuxeo server does not have a valid certificate installed. This is not recommended and should not be necessary on a productive system, but often test systems do not have valid certificates.

Please contact your Administrator if you are not sure which option is the appropriate one for your organization.

#### Debug Settings

PICTURE

This tab is providing access to the log file and the config file of your Nuxeo Outlook Integration.

**This is for support purpose and in general you will not have to change the settings.**

**Enable debug logging**: Check this option if you require a deeper level of debug information. Please be aware, that this debug log file can become rather huge in a short time frame.

**Open Log File**: Click this button to view the log file. You can copy and paste this information for support purpose and share it with your Administrator.

**Open Config File**: Click this button to view the current settings file. You can copy and paste this information for support purpose and share it with your Administrator.

If any error occurs, while working with the integration, you will get this information immediately in a separate information tray underneath the browsing window of the Nuxeo Outlook Integration pane.

For the case, that you are encountering any errors, while working with the Nuxeo Outlook Integration, please contact your Administrator before changing the log settings.

#### View Settings

PICTURE

**List view columns**: Check any combination of attributes, you want to see in the list view.

**Move buttons**: Use these buttons to change the sort order of the selected columns in the list view.

**Reset**: Click this button to reset the columns to the settings you had when the settings dialog was started.

**Default**: Click this button to select the default columns for the list view.

#### License

PICTURE

This section describes the process of applying a license for the Nuxeo Outlook Integration Client, for the case, that the client license is not provided by the Nuxeo server.

If your Administrator has set up a centralized client license provisioning, the license will be applied to your client upon first access to the Nuxeo server.

Please contact your Administrator to determine whether you have to apply the license on your own.


**License String**: Put the license string into this text field. The license string has the following pattern: `XXXXX-XXXXX-XXXXX-XXXXX-XXXXXX`

**License state**: Information whether license is valid or not

**Import license**: Click this button once you have entered the license string into the appropriate field

You will see the following information after the license is successfully imported

PICTURE

**Remove license**: Click this button in the case you need to apply a new license


## Functional Overview

After installation and configuration of the Nuxeo Outlook Integration, you will see a new pane at the right hand side of your Outlook client.

This panel gives you access to the Nuxeo repository. You can search for content, upload emails and other content to the repository and work with existing content.

PICTURE

Menu bar functions
