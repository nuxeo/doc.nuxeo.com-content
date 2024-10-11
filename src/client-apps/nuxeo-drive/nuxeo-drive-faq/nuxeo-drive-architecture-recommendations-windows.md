---
title: Configuration Requirements on Windows
review:
  comment: ''
  date: '2024-10-05'
  status: ok
labels:
  - nuxeo-drive
  - mlumeau
  - multiexcerpt
  - excerpt
  - lts2023-ok
toc: true
tree_item_index: 100
---

## Before You Install

### Supported Windows Version 

- Windows >= 10, both 32 and 64 bits

### Nuxeo Drive Version 

All Nuxeo Drive versions are compatible with Windows. We recommend to use the latest stable version to benefit from the latest bugfixes and improvements.
  
### CPU and RAM Requirements 

Resources consumption depends mostly on the third-party application used for file editing as well as the size of the file. 
### Requirements for Direct Edit
Nuxeo Drive is tested against Microsoft Office 365 and is therefore our recommendation. Direct edit can also be used with alternative office suites, but has not been tested against them.

To use Direct Edit, you should allocate at least **500MB of free memory** for Nuxeo Drive on top of Microsoft Office consumption for direct edit usage or at least **twice the file size** for larger files.

### Permissions 

Administrator rights are required on the machine while installing or uninstalling the application. Upgrade is similar to installation, so a similar level of access is required.  

### Dependencies 

Starting from Nuxeo-drive version 5.2.0, Python `v3.9.5` is the required version to be installed separately in the local machine. Please make sure to use this version specifically as bugs could happen even with a patch upgrade.
Make sure that no other software overrides the supported python version. 

Although Nuxeo Drive embeds its own dependencies, you should ensure that you do not override these dependencies system wide to prevent issues. 

We recommend using **Microsoft Office 365** or the latest version for Direct Edit.  

## Installation 

### Localization and Permission

It is required to install Nuxeo Drive in the local Users folder. We do not support installing Nuxeo Drive in a different folder or folder type (e.g., redirected folder, network folder).

You need at least Read and Write access to the local Users folder. 

Info: 
In order to show the icon overlay on the explorer on Windows platform, user needs the permission to update the registry editor. 

### Account Information 

Once Nuxeo Drive is installed, all the information related to the account, (e.g: Account configuration, database, logs, etc.) will be stored in a folder named `.nuxeo-drive` stored inside the user profile folder. No specific permission is required to store this information. 

## Direct Edit

When performing a Direct Edit on a document, the document is stored in a temp folder inside `.nuxeo-drive`, no specific permission is required on this folder to use Direct Edit. 

### File Size Limits For Direct Edit

Direct Edit has been tested with files **up to 15GB file size, with a machine having 65GB of RAM**. 

### After Direct Editing 

The document will not be deleted immediately after the direct edit process. The document is stored inside the `edit` folder under `.nuxeo-drive` folder. The folder will be cleaned at the time of Drive startup. So, until Nuxeo drive will be restarted, all of the documents will be kept locally.

**Recommended Storage Capacity:**
As the documents are kept locally until Drive is restarted, the required storage size will depend on the number and size of the documents edited and how often the Nuxeo Drive gets restarted.
To optimize storage space, Nuxeo Drive should be restarted on a regular basis if multiple direct editings are performed.

## Debugging 

When encountering issues with Nuxeo Drive, information is necessary to us to reproduce the issue and provide a quick and efficient resolution. We recommend following these steps:
1. The first thing to do is to change the log level to **DEBUG**. To do so, on the Advanced tab, go to Advanced Settings > Log level, select DEBUG from the drop-down list and click **Apply**. 

2. Then perform the whole operation you're having trouble with, and then generate the bug report. 

3. Apart from this we require:
- Nuxeo drive version
- System info: system configuration, RAM, free storage space, free memory space, CPU usage, system logs, server logs.  
- Scenario/ steps to reproduce which resulted into the crash and information on the documents you are trying to edit (e.g: format, size). 

Providing an example document greatly facilitates reproducing the issue. We understand that your content is sensitive and recommend that you share a version deprived of any sensitive information or personally identifying information as a precaution measure.
