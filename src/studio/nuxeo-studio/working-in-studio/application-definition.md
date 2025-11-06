---
title: Application Definition
review:
    comment: ''
    date: '2018-03-29'
    status: ok
confluence:
    ajs-parent-page-id: '12911781'
    ajs-parent-page-title: Working in Studio
    ajs-space-key: Studio
    ajs-space-name: Nuxeo Online Services
    canonical: Application+Dependencies
    canonical_source: 'https://doc.nuxeo.com/display/Studio/Application+Dependencies'
    page_id: '23364231'
    shortlink: h4JkAQ
    shortlink_source: 'https://doc.nuxeo.com/x/h4JkAQ'
    source_link: /display/Studio/Application+Dependencies
tree_item_index: 1400
history:
    -
        author: Manon Lumeau
        date: '2016-03-18 11:06'
        message: ''
        version: '7'
    -
        author: Manon Lumeau
        date: '2015-08-07 16:20'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2015-01-12 14:11'
        message: Add some details
        version: '5'
    -
        author: Manon Lumeau
        date: '2015-01-09 16:00'
        message: ''
        version: '4'
    -
        author: Manon Lumeau
        date: '2014-12-31 14:47'
        message: ''
        version: '3'
    -
        author: Manon Lumeau
        date: '2014-12-31 14:20'
        message: ''
        version: '2'
    -
        author: Manon Lumeau
        date: '2014-12-31 14:18'
        message: ''
        version: '1'
---

The Application Definition page enables you to manage the requirements of your Nuxeo Studio project and your application.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Application Definition/Application Definition Screen
    name: application-definition.png
    studio_modeler#screenshot#up_to_date
--}}
![Application Definition Screen](/nx_assets/studio/application-definition-full-screen.png ?border=true)

{{#> callout type='info' heading='Watch the related courses on Hyland University'}}
[Video on a simple Nuxeo Project Creation](https://university.hyland.com/courses/e4114)
![]({{file name='university-quickstart-studio-project.png' page='nxdoc/university'}} ?w=450,border=true)
{{/callout}}

## Main Options

-   **Nuxeo Server Version:** Studio will generate valid configuration for this Nuxeo Server version.
-   **Packages:** The list of additional dependencies needed to make your application work. Selected dependencies will be automatically installed when you deploy your Nuxeo Studio configuration on your server.

Any Nuxeo public or [private]({{page page='delivering-a-customization-package-through-the-nuxeo-marketplace'}}) addon uploaded in the [Nuxeo Marketplace](https://marketplace.nuxeo.com) can be selected. Type a character to start filtering them. The title and description are provided for each addon to help you select the package you need.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Application Definition/Addons List
    name: addons-list.png
    studio_modeler#screenshot#up_to_date
--}}
![Addons List](/nx_assets/studio/application-definition-search-packages.png ?border=true)

Some addons bring additional options into Studio such as new screens or options, making their configuration easier. Once you select addons impacting Studio, their specific features are instantly available.

Addons that display a `Private` tag mean they have been uploaded on the marketplace through the [private channel]({{page page='delivering-a-customization-package-through-the-nuxeo-marketplace'}}).

You can select the version of added packages, remove existing packages, or change the version of already installed ones.
No change is kept until you manually press the save button. Pending changes are displayed so that you can assess what will be added or removed and undo it if necessary.
Each dependency line is color-coded according to its status:
<span style="padding: 2px 10px; background: rgba(22,136,70,0.5)">ADDED</span>
<span style="padding: 2px 10px; background: rgba(231,29,19,0.5)">REMOVED</span>
<span style="padding: 2px 10px; background: rgba(0,108,250,0.5)">CHANGED</span>
<span style="padding: 2px 10px; background: rgba(25,59,103,0.05)">INSTALLED</span>

![Package Changes](/nx_assets/studio/application-definition-package-changes.png ?border=true)

## Upgrading to a Newer Nuxeo Server version

When upgrading to a newer Nuxeo Version, Nuxeo Studio will automatically adapt the configuration. Some exceptions requiring a manual change may still happen and are listed in the [specific upgrade instructions]({{page page='specific-upgrade-instructions'}}) page.

When a previously selected package is not available for your new Nuxeo Server version, Nuxeo Studio lists it under removed packages to alert you.
For available packages, each one is automatically upgraded to the latest version compatible with the new server version. 
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Application Definition/Removal Notice
    name: removal-notice.png
    studio_modeler#screenshot#up_to_date
--}}
![Service Version Update](/nx_assets/studio/application-definition-server-version-update.png ?border=true)

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [Specific Upgrade Instructions]({{page page='specific-upgrade-instructions'}})
- [Update the Version of Your Target Platform]({{page page='update-the-version-of-your-target-platform'}})

{{/panel}}</div><div class="column medium-6">
</div></div>
