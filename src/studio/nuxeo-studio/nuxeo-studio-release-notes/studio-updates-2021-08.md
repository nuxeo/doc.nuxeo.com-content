---
title: 'September 2021'
description: .
tree_item_index: 951
review:
  comment: ''
  date: '2021-09-24'
  status: ok
toc: true
---

{{! multiexcerpt name='studio-updates-2021-09'}}

**Multi-Layer Public Release** 

Multi-layer is the ability to add a Studio project as a dependency of another and have the configuration of that project inherited.

This release will render fully public and by default the Multi layer functionality.  

Please find more information in our documentation :


**Warning for outdated dependencies** 

In App Def, the dependencies are only updated when that page is saved, not simply loaded. Hence, a situation can exist where newer versions of packages are available, but these are not yet loaded in the project. From now, a warning will appear in the package blocks in App Def, when a newer version is available but not installed, for Studio packages.   


**Marketplace Search** 

All package short descriptions have been updated and indexed, taking into account relevant versions. This is the second phase of the new ES mapping work in Studio, making search much more expensive.  


**Marketplace LTS Version Table**

The LTS version table will recap if a package is compatible with any version of an LTS, however, some packages may not be compatible with a specific version, hence please confirm with the detailed table before using a package.

**Recusive Dependencies**

From now, we will be able to deploy Packages that include recursive dependencies. Safeguards will also avoid circular dependceis creating errors. Although, these can still have negative consequences on installation times.

**Project Naming Convention**

To avoid very long project names being truncated into duplicates, max-length will be changed to 40 characters, it should prevent having only one word in the truncated symbolic name.


{{! /multiexcerpt}}
