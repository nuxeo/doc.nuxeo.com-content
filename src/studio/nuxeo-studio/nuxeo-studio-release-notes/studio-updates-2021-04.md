---
title: 'April 2021'
description: .
tree_item_index: 955
review:
  comment: ''
  date: '2021-04-01'
  status: ok
toc: true
---

{{! multiexcerpt name='studio-updates-2021-04'}}

### Document Trashed and Untrashed Event Handlers

We have added in the out-of-the-box configuration new event handlers, 'Document Trashed' and 'Document Untrashed', to more easily treat these common use cases.

### Login Box Branding

In Studio we have added the possibility to add new styling elements to the Login Box. While it was only possible to configure Button Background Color, it will now be possible to also configure:
- Background image
- Vertical Position (of the Background image)
- Horizontal Position (of the Background image)
- Width

This is available in **CONFIGURATION** > **Branding** > **Login Box**

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/studio-release-2021-04-A-LoginBox
    name: studio-release-2021-04-B.png
    studio_designer#screenshot#up_to_date
--}}
![studio-release-2021-04-A-LoginBox](/nx_assets/0dae0dc1-fcd8-4b75-8e28-046ba0e261b7.png)

### Project Installation Instructions

In the **Release and Tags** entry in Studio, we have added specific instructions with each release on how to install the package with Nuxeo CTL.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/studio-release-2021-04-A-InstallRelease
    name: studio-release-2021-04-A.png
    studio_modeler#screenshot#up_to_date
--}}
![studio-release-2021-04-A-InstallRelease](/nx_assets/e98aa8a5-6555-4edf-b692-f93ba79e8929.png)

### `getUserApplications` Call in Connect

If a search is made for an inexistent user with `getUserApplications` it will return a 404 error message, instead of a 500.

### Error Message on Studio Project Page for Incorrect Project Name

Studio project pages that are generated for a submitted orgId and/or project symbolic name, where the corresponding project does not exist an error message will now be shown.

{{! /multiexcerpt}}
