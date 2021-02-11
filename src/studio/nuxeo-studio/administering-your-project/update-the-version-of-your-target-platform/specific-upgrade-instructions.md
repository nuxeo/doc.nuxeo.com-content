---
title: Specific Upgrade Instructions
review:
    comment: ''
    date: ''
    status: ok
labels:
    - content-view
    - upgrade
    - theme
toc: true
confluence:
    ajs-parent-page-id: '7536933'
    ajs-parent-page-title: Update the Version of Your Target Platform
    ajs-space-key: Studio
    ajs-space-name: Nuxeo Online Services
    canonical: Specific+Upgrade+Instructions
    canonical_source: 'https://doc.nuxeo.com/display/Studio/Specific+Upgrade+Instructions'
    page_id: '20513297'
    shortlink: EQI5AQ
    shortlink_source: 'https://doc.nuxeo.com/x/EQI5AQ'
    source_link: /display/Studio/Specific+Upgrade+Instructions
history:
    -
        author: Manon Lumeau
        date: '2016-04-26 14:51'
        message: 'ix Studio menu label '
        version: '13'
    -
        author: Manon Lumeau
        date: '2016-02-09 15:37'
        message: Remove theme migration mention
        version: '12'
    -
        author: Solen Guitter
        date: '2015-10-12 20:23'
        message: Fix DAM Compat link to point to 6.0 documentation
        version: '11'
    -
        author: Solen Guitter
        date: '2014-12-30 17:17'
        message: Add missing screenshot
        version: '10'
    -
        author: Solen Guitter
        date: '2014-11-25 11:40'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2014-11-04 21:18'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2014-11-04 21:16'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2014-10-20 16:46'
        message: Add link to Nuxeo DAM Compat page
        version: '6'
    -
        author: Solen Guitter
        date: '2014-10-20 16:17'
        message: 'Add steps to migrate project to 6.0 (to be completed) '
        version: '5'
    -
        author: Solen Guitter
        date: '2014-10-20 14:23'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2014-08-21 15:40'
        message: Change 5.7.2 to 5.8
        version: '3'
    -
        author: Anahide Tchertchian
        date: '2014-08-20 17:20'
        message: ''
        version: '2'
    -
        author: Anahide Tchertchian
        date: '2014-08-20 17:17'
        message: ''
        version: '1'
---

{{! excerpt}}
When upgrading your target platform in Studio, Studio will take care of generating the corresponding code for your target platform. Usually, no manual configuration changes are needed. This page lists a few exceptions.
{{! /excerpt}}

## Upgrading to LTS 2021 or 11.x

### Nuxeo Spreadsheet

Spreadsheet addon is now loaded by default but the button contribution is disabled. Users can rely on Studio Designer to re-enable the `spreadSheet` *button* in the `RESULTS_ACTIONS` slot (see [WEBUI-90](https://jira.nuxeo.com/browse/WEBUI-90)).

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Web UI 11.x upgrade notes/Spreadsheet package enable button in Designer
    name: spreadsheet-package-enable-button-designer.png
    1.1.3#screenshot#up_to_date
--}}
![Spreadsheet package enable button in Designer](nx_asset://b8fd28dd-0272-43b1-a083-dfde295c312b ?w=650,border=true)

### Nuxeo DAM 

Nuxeo DAM no longer exists as an addon and its contributions are now default on Web UI. If you are using it in Nuxeo Studio, you will see the Nuxeo DAM in the removed addons list when upgrading your project through the application definition page.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Web UI 11.x upgrade notes/Package removal in Studio's Application Definition
    name: app-def-package-removal.png
    1.1.3#screenshot#up_to_date
--}}
![Package removal in Studio's Application Definition](nx_asset://b47d5c8b-c1ba-4d2a-ab0b-8b8378d73c8d ?w=650,border=true)

## Upgrading to LTS 2015 and LTS 2016

Select the Nuxeo JSF UI target package in your [Application Definition]({{page page='application-definition'}}) for the content views, layouts, tabs and search customizations to be available.


## {{> anchor 'to-60'}}Upgrading to 6.0

Some packaging changes have occurred for Nuxeo Platform 6.0\. For instance some default features are now available as add-ons, some features have been moved to the default packaging. Although Studio will migrate most resources, here are some steps to follow to make sure you get the expected behavior.

### Migrating Virtual Navigation Customization

Virtual navigation used to come with the DM package. It is now an independent add-on. To keep your custom virtual navigations you need to:

1.  Check the Virtual navigation target package in Studio.
2.  Install the Virtual navigation add-on on your Nuxeo Platform.

### MIgrating Faceted Search Customization

Faceted search used to come with the DM package. For Nuxeo Platform 6.0 it is an independent add-on and has been deprecated. From an end user point of view, the search experience provided by faceted search is now available by default in the Search tab.

![]({{file name='search-tab.png' space='userdoc60' page='default-search'}} ?w=600,border=true)

#### Migrating Your Faceted Searches to the New Search Tab

When you choose the target platform 6.0, the faceted search target package is selected by default: uncheck it. Your faceted searches will be available in the Search tab as additional search filters.

In Studio your content views automatically gets a **FACETED_SEARCH*** flag. Uncheck it and check the **Search** flag.

#### Keeping Your Faceted Searches

If you want to keep your faceted search left tab in the Workspace main tab:

*   In Studio check the Faceted search target package in the Application Definition section.
    The Faceted search flag is available and checked on your content views.
*   In your Nuxeo Platform instance, install the Faceted search add-on.

### Migrating a DM Project Extending the Picture Document Type

Pictures were previously coming with the Document Management module, but are now available as part of the DAM add-on. When you migrate your project to 6.0, you need to:

1.  Select the DAM target package in the Studio Application Definition section.
2.  On your Nuxeo Platform instance, you need to install the DAM add-on.

### Migrating a DAM Project

For Nuxeo Platform 6.0, the DAM package has been simplified: it now holds the documents types Picture, Audio and Video.&nbsp; All the specific UI has been moved into the DAM compat add-on (see the page&nbsp;[Nuxeo DAM Compat]({{page space='nxdoc60' page='nuxeo-dam-compat'}}) for details).

#### Migrating Your DAM Project

##### Migrating DAM Content Views to the Search Tab

When you select the target platform 6.0, you need to:

1.  Select the DAM target package in Studio.
2.  Install the DAM add-on on your Nuxeo Platform.

This will bring you the DAM document types in Studio. Your DAM content views will be available in the Search tab of the Nuxeo Platform; in Studio they automatically have a **DAM*** flag. Uncheck it and check the **Search content view** flag.

##### Keeping DAM Content Views in a DAM Dedicated Tab

If you want to keep your content views available in a DAM dedicated main tab:

1.  In Studio, select the target packages DAM and DAM compat.
    The DAM flag is available and checked on content views.
2.  Install the DAM and DAM compat add-ons on your Nuxeo Platform instance.

## Upgrading to 5.8 or Higher

### User Actions on Content View Actions of Ordered Folders

Since [NXP-11845](https://jira.nuxeo.com/browse/NXP-11845), the default content view presenting ordering actions only presents actions with category&nbsp;`ORDERABLE_CURRENT_SELECTION_LIST` (labeled "Orderable Document List Toolbar" in Studio). It previously presented also actions available to non-orderable content views,&nbsp;`CURRENT_SELECTION_LIST` (labeled "Document List Toolbar" in Studio).

When upgrading to 5.8 or higher, Studio User Actions using this category will need to be duplicated to use the "Orderable Document List Toolbar" category so that actions are still available on the default content view `orderable_document_content`.
