---
title: Nuxeo Drive Configuration Requirements on Windows
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

- Use Latest Nuxeo Drive version 
  
### CPU and RAM Requirements 

It depends on the third-party application used for file editing as well as the size of the file. Nuxeo Drive is tested against microsoft office suite and we recommend using it. (latest version) Version Office 365 at that time.  

You should allocate at least 500MB of free memory for Drive on top of Microsoft Office consumption for direct edit usage or at least twice the file size for larger files.

### Permissions 

Administrator rights are required on the machine while installing or uninstalling the application. Upgradation is similar to installation, so similar level of access is required.  

### Dependencies 

What dependencies are required by Nuxeo Drive? E.g., Python or other libraries or tools. 

As of now with nuxeo-drive version 5.5.0 Python v3.9.5  is required to be installed in the local machine. Make sure that no other software overrides the supported python version. 

Do they come embedded or have to be installed separately? 

Python needs to be installed. Dependencies come embedded. 

Which version of each is compatible with Drive? 

Python version 3.9.5. 

Does Nuxeo Drive isolate them or are they shared with the system? 

Yes, they may overlap with other dependencies. Nuxeo Drive embeds its own dependencies in the (name) folder, you should ensure that you do not override these dependencies system wide to prevent issues. 

Are there any other third parties tool that I need to install on my machine? 

We recommend using Microsoft Office 365 or the latest version for direct edit.  

Are there any security restrictions? 

No 

## Installation 

### Localization 

It is required to install Nuxeo Drive in the local Users folder. We do not support installing Nuxeo Drive in a different folder or folder type (e.g., redirected folder, network folder).

## Direct Edit 
