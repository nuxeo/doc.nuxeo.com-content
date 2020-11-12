---
title: Nuxeo Sitecore Connector
description: 'Nuxeo Sitecore Connector.'
review:
    comment: ''
    date: '2020-09-17'
    status: ok
labels:
    - sitecore
toc: true
tree_item_index: 2630
---

The **Nuxeo Sitecore Connector** gives Sitecore users the ability to search content stored in Nuxeo, select renditions to use, then copy the content into the Sitecore Media Library for use in Sitecore-authored pages.

The majority of the installation and configuration is on the **Sitecore server**. There are some modifications/configurations that are necessary on the Nuxeo server, within the `nuxeo.conf` file, that will require work by a Nuxeo Administrator.

## Requirements

- **Sitecore** - version 9.x or newer
- **Nuxeo** - version 10.10 or newer

## Installation

There is nothing to install on the Nuxeo Server. All packages necessary for The Nuxeo Sitecore Connector are deployed on the **Sitecore Server** instance. For access to the necessary install package, please contact your Nuxeo Account Executive.

To deploy the Nuxeo for Sitecore Connector package, have your Sitecore Administrator login to Sitecore.
1. From the LaunchPad dashboard, choose **Control Panel**
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Sitecore Connector/9-sitecore
    name: 9-sitecore.png
    addins#screenshot#up_to_date
--}}
![9-sitecore](nx_asset://9695948f-15df-4a05-a0b7-cfe83b5a4fab ?border=true,w=200,h=300)
1. Within the Administration section, click **Install a Package**
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Sitecore Connector/5-sitecore
    name: 5-sitecore.png
    addins#screenshot#up_to_date
--}}
![5-sitecore](nx_asset://f9ed8668-c3be-415b-a830-a3f3560decc7 ?border=true,w=400,h=150)
1. **ALTERNATIVELY** - You can go through the Desktop Application > Development Tools > Installation Wizard
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Sitecore Connector/9-sitecore
    name: 9-sitecore.png
    addins#screenshot#up_to_date
--}}
![9-sitecore](nx_asset://9695948f-15df-4a05-a0b7-cfe83b5a4fab ?border=true,w=200,h=300)
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Sitecore Connector/3-sitecore
    name: 3-sitecore.png
    addins#screenshot#up_to_date
--}}
![3-sitecore](nx_asset://42d1fa7c-26f2-461f-956b-ea5b63a39635 ?border=true,w=400)
1. On the **Install a Package** dialog, choose **Upload Package**
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Sitecore Connector/11-sitecore
    name: 11-sitecore.png
    addins#screenshot#up_to_date
--}}
![11-sitecore](nx_asset://ac99400e-9eb3-4f5f-82fa-84ec5ed23a9e ?border=true,w=300)
  This brings up the **Upload files** dialog which you will use to browse to the package you want to install.
1. Navigate to the Package and select it, then click **Next**
1. You’ll be asked to **Overwrite existing files?** - this is in case anything in the system is named the same - it’s probably safe to select this regardless, but if you don’t, it will append a string of numbers to the filename before uploading. Choose **Next**.
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Sitecore Connector/1-sitecore
    name: 1-sitecore.png
    addins#screenshot#up_to_date
--}}
![1-sitecore](nx_asset://ee71be2d-45a5-4193-963a-d3704e39921f ?border=true,w=300)
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Sitecore Connector/6-sitecore
    name: 6-sitecore.png
    addins#screenshot#up_to_date
--}}
![6-sitecore](nx_asset://7871695d-9a01-4c43-b8a6-4c92566ed1c5 ?border=true,w=300)
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Sitecore Connector/1-sitecore
    name: 1-sitecore.png
    addins#screenshot#up_to_date
--}}
![1-sitecore](nx_asset://ee71be2d-45a5-4193-963a-d3704e39921f ?border=true,w=300)
1. You’re now ready to install, so click the **Install** button.

The next confirmation/warning box is going to ask what you want to do with items that already exist in the Sitecore Master and CORS databases.  

The most notable item for the Nuxeo Connector is the item at:</br>
`/sitecore/templates/System/Media/Unversioned/Jpeg`

We add a base template to this template to extend the media type with EXIF fields. If you have not modified the template before, it’s fine to choose **Overwrite**. If you have, choose **Merge - Append**.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Sitecore Connector/2-sitecore
    name: 2-sitecore.png
    addins#screenshot#up_to_date
--}}
![2-sitecore](nx_asset://4a37aab4-6cdf-4333-bef4-b6fecebc9ac2 ?border=true,w=300)

Merging options can be confusing, especially given the out of the box explanations.

The correct description of what each option does should be something like this:

|   Option             |         Description                                                                                                                                                                                                                                                          |
|:----------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Overwrite**      | Items with the same ID (along with it's descendants) will be removed and replaced by items from the package.                                                                                                                                                      |
| **Skip**           | Items with the same ID from the target database will remain unchanged; the item from the package will be skipped.                                                                                                                                                 |
| **Merge - Clear**  | All existing versions for a language of the item being installed are removed prior to adding new versions. This options 'clears out' the versions of the language and creates one new version.                                                                    |
| **Merge - Append** | Item versions from the package are added 'on-top' of the existing versions of the item. This preserves history, but numbers the package versions with numbers higher than the existing version numbers. A user can merge information between versions afterwards. |
| **Merge - Merge**  | If there is a version with the same number in the item, the Installation Wizard will overwrite it, otherwise a new version with the specific number is added. This makes it possible to replace specific versions of items.                                       |

Upon successful installation, you’ll see the next dialog box, where you can simply choose **Close**.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Sitecore Connector/4-sitecore
    name: 4-sitecore.png
    addins#screenshot#up_to_date
--}}
![4-sitecore](nx_asset://2529f64f-d4e1-4e3a-8990-992625f5526c ?border=true,w=300)

{{#> callout type='warning' }}
If you are using **Sitecore version 9.3** or newer, you will need to update the security policy in your `web.config` file in your sitecore instance. This is new in 9.3 and should not be necessary for older versions. </br>
To do:</br>
In your `web.config` on your Sitecore instance, add to your existing Content-Security-Policy the following (if you already have a specific security policy entry, you will need to add the Nuxeo info to that existing policy, just note in the example below the placement of the various URLs):
{{/callout}}

```
<add name="Content-Security-Policy" value="default-src 'self' 'unsafe-inline' 'unsafe-eval' https://apps.sitecore.net https://code.jquery.com https://yournuxeoservername.com/nuxeo/; img-src 'self' https://yournuxeoservername.com/ data: https://yournuxeoservername.com/ https://yournuxeostoragebucket.s3.amazonaws.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' 'unsafe-inline' https://fonts.gstatic.com; upgrade-insecure-requests; block-all-mixed-content;" />
```

There is nothing to install on your Nuxeo instance. See Configuration section for necessary additions to your `nuxeo.conf` file.

## Configuration

### Sitecore

In the Modules/Settings menu, you must add information related to your Nuxeo server. As part of the configuration, you will need to give Sitecore information related to your Nuxeo instance. In Sitecore/System/Modules/Nuxeo Connector, click on **Standard Configuration** to expose the following settings:
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Sitecore Connector/7-sitecore
    name: 7-sitecore.png
    addins#screenshot#up_to_date
--}}
![7-sitecore](nx_asset://b0e83efb-1533-4f7d-b670-8a45737c464e ?border=true,w=650)

- **ServerUrl:** the URL for your Nuxeo application. Be sure to include `/nuxeo` at the end of your URL. This should match what was added to your Content-Security-Policy in your `web.config`.

- **PageProvider:** by default, we use the out of the box Nuxeo `advanced\_document_content` page provider to query/display the Nuxeo content. As such, it includes **ALL** content in the repository, regardless of document type. You might want to create a new page provider to address  your specific content (i.e. to only include particular content). If you want to override this default page provider, simply modify the value used in this field.  It must match exactly a value that exists in your Nuxeo project.  It can be one specifically created for use in Sitecore (to isolate the types of files you want in expose for Sitecore use) or any other existing page provider you have. For more information on Nuxeo page providers, please see [Nuxeo documentation]({{page page='page-providers'}})

- **SecretKey:** The secret goes hand in hand with the JWT secret setting referenced below in the Nuxeo Configuration section.  The SecretKey is a base64 value of the secret entered in the `nuxeo.conf` file.  You can use a site like [Base64](https://www.base64encode.org/) to generate the base64 value of your secret.

It's possible that you might already be using a JWT secret with Nuxeo. If so, you can use the same value with Sitecore.

### Nuxeo

Within the Nuxeo application, there is nothing to install and very little configuration that needs to be done.  Your Nuxeo system administrator will need to make some additions to your **nuxeo.conf** file.  See [Nuxeo Documentation] (https://doc.nuxeo.com/nxdoc/configuration-parameters-index-nuxeoconf/) for information on where that is located.

- **JWT Secret:** In your `nuxeo.conf` file, add the following entry:
```
nuxeo.jwt.secret=my\_jwt\_secret_value
```
You can enter any value you’d like here. You will need to take this value and plug it into a [base64 encoding site](https://www.base64encode.org) to generate the base64 value that is used in your Nuxeo Sitecore SecretKey as described above. It's possible that you might already be using a JWT secret with Nuxeo. If so, you can use the same value with Sitecore.

- **Page provider:** By default, the Nuxeo Connector for Sitecore uses the `advanced\_document_content` page provider to expose content. If you want to be more explicit in the content available to your Sitecore users, your Nuxeo Admin can create a custom page provider.  You can name it however you choose, just be sure to modify the PageProvider setting in your Nuxeo Module settings in Sitecore (as described above) with the name of your custom page provider.

## Functional Overview

**The Nuxeo Connector for Sitecore** is designed so “downstream” Marketers can continue to work in applications they are familiar with, while at the same time, allowing the creative work to continue in a separate process. With the Connector, Sitecore users can **browse** and **search** items In Nuxeo and then save the renditions they need in Sitecore. Once items are saved in Sitecore, users can place them in Sitecore pages. The Connector takes advantage of existing EXIF information and maps that to the corresponding fields in Sitecore.

**Benefits:**
- Work where you want to work. Use Nuxeo to create content using workflows and task as desired and use Sitecore to serve first class pages using the content
- Use permissions to show Sitecore users only approved content
- Map existing EXIF data to Sitecore
- Access multiple renditions to get what you need

#### How-to

Nuxeo content is accessed via the **Sitecore Content Editor**.

While authoring your page/content in Sitecore, place your cursor where you want content to be placed. If you do not place the cursor on the page, the content will still be added to the Media Library/destination folder, but not placed in the page.

From any Sitecore page, click on the **Show Editor** link.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Sitecore Connector/12-sitecore
    name: 12-sitecore.png
    addins#screenshot#up_to_date
--}}
![12-sitecore](nx_asset://0fa7f4e9-795f-4abc-a02e-bb607dcb10b8 ?border=true)

Click on the **Nuxeo** logo in the menu bar:

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Sitecore Connector/8-sitecore
    name: 8-sitecore.png
    addins#screenshot#up_to_date
--}}
![8-sitecore](nx_asset://32c83050-c0e1-491d-84dc-e30ed34ca6ed ?border=true)

**Log into Nuxeo** with your Nuxeo credentials, if you haven’t already. (SSO will be enabled in upcoming releases).

**Choose the destination** path for the items to be stored in Sitecore:

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Sitecore Connector/14-sitecore
    name: 14-sitecore.png
    addins#screenshot#up_to_date
--}}
![14-sitecore](nx_asset://b671d0b7-b710-483a-8dfc-b202b0f43843 ?border=true)

Click **Select**.

**Search/browse content:**</br>
To search, type in the term(s) and click **Search**. To browse, click on the **Browse** button you see on **folder** items.  path

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Sitecore Connector/15-sitecore
    name: 15-sitecore.png
    addins#screenshot#up_to_date
--}}
![15-sitecore](nx_asset://a6ca396d-c701-45ca-b562-9d528c6486b4 ?border=true)

Once you start browsing, you will see a clickable breadcrumb:

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Sitecore Connector/10-sitecore
    name: 10-sitecore.png
    addins#screenshot#up_to_date
--}}
![10-sitecore](nx_asset://bc21ddeb-540f-42ed-9604-faaa8005f902 ?border=true,w=300)

**Select the rendition(s)** you’d like for import into Sitecore.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Sitecore Connector/13-sitecore
    name: 13-sitecore.png
    addins#screenshot#up_to_date
--}}
![13-sitecore](nx_asset://8a6d7b33-cf99-4849-8554-cb9496362699 ?border=true)


Click **import renditions** at the top of the page or below the item renditions list.
**Accept/reject** changes to your page. You will only see the renditions that exist in Nuxeo (making rendition requests are scoped for a later version).

{{#> callout type='note' }}
This makes a copy of the selected rendition in the location indicated in the steps above. When importing into Sitecore, there is NO continued connection between the Nuxeo file and the Sitecore file.
{{/callout}}

**Once in Sitecore**,
you may need to validate some information, depending on your required fields (like alt info).
You can remove content from your page without removing it from the library.
Once items are in the library, you can make modifications to the image and save as normal in Sitecore, the “connection” back to the Nuxeo instance is “cut” and changes will not be reflected in Nuxeo.

Place your cursor to add to the library AND the page directly, or simply click on the Nuxeo icon to add to the library.
