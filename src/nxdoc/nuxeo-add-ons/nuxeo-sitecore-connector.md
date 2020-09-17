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

The Nuxeo Sitecore Connector gives Sitecore users the ability to search content stored in Nuxeo, select renditions to use, then copy the content into the Sitecore Media Library for use in Sitecore authored pages.

The majority of the installation and configuration is on the Sitecore server. There are some modifications that are necessary on the Nuxeo server, within the nuxeo.conf file, that will require work by a Nuxeo Admininistrator.

## Requirements
Sitecore - must be 9.x or newer

Nuxeo - must be 10.10 or newer

## Installation

Have your Sitecore Administrator log in to Sitecore.
From the Launch Pad dashboard, choose Control Panel



Within the Administration section, click “Install a package”


ALTERNATIVELY - You can go through the Desktop Application > Development Tools > Installation Wizard





On the Install a Package dialog, choose Upload Package


This brings up the Upload files dialog which you will use to browse to the package you want to install. Navigate to the Package and select, then click Next


You’ll be asked to Overwrite existing files - this is in case anything in the system is named the same - it’s probably safe to select this regardless, but if you don’t, it will append a string of numbers to the filename before uploading. Choose Next



You’re now ready to Install, so click the “Install” button.

The next confirmation/warning box is going to ask what you want to do with items that already exist in the Sitecore Master and Cors databases.  

The most notable item for the Nuxeo Connector is the item at  -
/sitecore/templates/System/Media/Unversioned/Jpeg

We add a base template to this template to extend the media type with EXIF fields. If you have not modified the template before, it’s fine to choose Overwrite. If you have, choose Merge - Append.


Merging options can be confusing, especially given the out of the box explanations.

The correct description of what each option does should be something like this:

Overwrite
Items with the same ID (along with it's descendants) will be removed and replaced by items from the package. 
Skip
Items with the same ID from the target database will remain unchanged; the item from the package will be skipped.
Merge - Clear
All existing versions for a language of the item being installed are removed prior to adding new versions. This options 'clears out' the versions of the language and creates one new version.
Merge - Append
Item versions from the package are added 'on-top' of the existing versions of the item. This preserves history, but numbers the package versions with numbers higher than the existing version numbers. A user can merge information between versions afterwards.


Merge - Merge
If there is a version with the same number in the item, the Installation Wizard will overwrite it, otherwise a new version with the specific number is added. This makes it possible to replace specific versions of items.




Upon successful installation, you’ll see the next dialog box, where you can simply choose “Close”.




Installation Continued:
VERY IMPORTANT:
If you are using Sitecore version 9.3 or newer, you will need to update the security policy in your web.config file in your sitecore instance.  This is new in 9.3 and should not be necessary for older versions.

In you web.config, add to your existing Content-Security-Policy the following:


<add name="Content-Security-Policy" value="default-src 'self' 'unsafe-inline' 'unsafe-eval' https://apps.sitecore.net https://code.jquery.com https://dam-solution-east.cloud.nuxeo.com; img-src 'self' data: https://dam-solution-east.cloud.nuxeo.com https://dam-solution-east-10-10-bucket.s3.amazonaws.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' 'unsafe-inline' https://fonts.gstatic.com; upgrade-insecure-requests; block-all-mixed-content;" />


Nuxeo - there is nothing to install on your Nuxeo instance.  See Configuration section for necessary additions to your nuxeo.conf file.

Configuration
Sitecore - In the Modules/Settings you must add information related to your Nuxeo server.  As part of the configuration, you will need to give Sitecore information related to your Nuxeo instance. In the “Sitecore/System/Modules/Nuxeo Connector, click on “Standard Configuration” to expose the following settings:

ServerUrl: the url for your Nuxeo application.  Be sure to include ‘/nuxeo’ at the end of your url. This should match what was added to your Content-Security-Policy in your web.config.
PageProvider: by default, we use the out of the box Nuxeo “advanced_document_content” page provider to query/display the Nuxeo Content.  As such, it includes ALL content in the repository.  You might want to create a new page provider to address  your specific content (i.e. to only include particular content).  If you want to override this default page provider, simply modify the value used in this field.  It must match exactly a value that exists in your Nuxeo project.  It can be one specifically created for use in Sitecore (to isolate the types of files you want in expose for Sitecore use) or any other existing page provider you have. For more information on Nuxeo page providers, please see https://doc.nuxeo.com/nxdoc/page-providers/
SecretKey = The secret goes hand in hand with the jwt secret setting referenced below in the Nuxeo Configuration section.  The SecretKey is a base64 value of the secret entered in the nuxeo.conf file.  You can use a site like https://www.base64encode.org/ to generate the base64 value of your secret.


        
Nuxeo
Within the Nuxeo application, there is nothing to install and very little configuration that needs to be done.  Your Nuxeo system administrator will need to make some additions to your nuxeo.conf file.  For information on where that is located, see https://doc.nuxeo.com/nxdoc/configuration-parameters-index-nuxeoconf/

JWT Secret: In your nuxeo.conf file, add the following entry:
nuxeo.jwt.secret=my_jwt_secret_value

You can enter any value you’d like here.  You will need to take this value and plug it into a base64 encoding site like https://www.base64encode.org/ to generate the base64 value that is used in your Nuxeo Sitecore SecretKey as described above.

Page provide: by default, the Nuxeo Connector for Sitecore uses the advanced_document_content page provider to expose content.  If you want to be more explicit in the content available to your Sitecore users, your Nuxeo Admin can create a custom page provider.  You can name it however you choose, just be sure to modify the PageProvider setting in your Nuxeo Module settings in Sitecore (as described above) with the name of your custom page provider.



Use
The Nuxeo Connector for Sitecore is designed so “downstream” Marketers can continue to work in applications they are familiar with, while at the same time, allowing the creative work to continue in a separate process. With the Connector, Sitecore users can browse and search items In Nuxeo and then save the renditions they need in Sitecore.  Once items are saved in Sitecore, users can place them in Sitecore pages.  The Connector takes advantage of existing Exif information and maps that to the corresponding fields in Sitecore.

Benefits:
Work where you want to work (best tool for the job. Use Nuxeo for creative work in progress and Sitecore to server first class pages)
Use permissions to show Sitecore users only approved content
Map existing EXIF data to Sitecore
Access multiple renditions to get what you need
Single direction (save from Nuxeo to Sitecore, connection is cut and now any changes made in Sitecore are kept in Sitecore)

How-to
Nuxeo content is accessed via the Sitecore Content Editor.

Place cursor for where you want content on page. If you do not place the cursor, the content will be added to the Media Library/destination folder, but not placed in the page.

From any Sitecore page, click on the “Show Editor” link. 





Click on the Nuxeo logo in the menu bar:



Log into Nuxeo with your Nuxeo credentials, if you haven’t already. (SSO will be enabled in upcoming releases)


Choose the destination path for the items to be stored in Sitecore:

Click “Select”


Search/browse content.  
To search, type in the term(s) and click “Search”. To browse, click on the “Browse” button you see on “folder” items.  Once you start browsing, you will see a clickable breadcrumb path

Select the rendition(s) you’d like for import into Sitecore



Click “import renditions” at the top of the page or below the item renditions list
accept/reject changes to your page.  You will only see the renditions that exist in Nuxeo (making rendition requests are scoped for a later version).

***This makes a copy of the selected rendition in the location indicated in the steps above.  When importing into Sitecore, there is NO continued connection between the Nuxeo file and the Sitecore file***

Once in Sitecore:
you may need to validate some information, depending on your required fields (like alt info).
You can remove content from your page without removing it from the library
Once items are in the library, you can make modifications to the image and save as normal in Sitecore, the “connection” back to the Nuxeo instance is “cut” and changes will not be reflected in Nuxeo.

Place your cursor to add to the library AND the page directly, or simply click on the nuxeo icon to add to the library.
