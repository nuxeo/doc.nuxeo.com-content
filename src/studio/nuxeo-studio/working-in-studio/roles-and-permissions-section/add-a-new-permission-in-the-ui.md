---
title: Add a new Permission in the UI
review:
    comment: ''
    date: ''
    status: ok
labels:
    - howto
    - permission
confluence:
    ajs-parent-page-id: '12911810'
    ajs-parent-page-title: Roles & Permissions Section
    ajs-space-key: Studio
    ajs-space-name: Nuxeo Online Services
    canonical: Add+a+new+Permission+in+the+UI
    canonical_source: 'https://doc.nuxeo.com/display/Studio/Add+a+new+Permission+in+the+UI'
    page_id: '7536711'
    shortlink: RwBz
    shortlink_source: 'https://doc.nuxeo.com/x/RwBz'
    source_link: /display/Studio/Add+a+new+Permission+in+the+UI
tree_item_index: 100
history:
    -
        author: Solen Guitter
        date: '2016-09-01 15:28'
        message: ''
        version: '10'
    -
        author: Manon Lumeau
        date: '2015-11-25 17:36'
        message: replace "access rights" by "permissions"
        version: '9'
    -
        author: Bertrand Chauvin
        date: '2015-05-13 13:58'
        message: Replaced mention of DM
        version: '8'
    -
        author: Solen Guitter
        date: '2014-03-11 18:34'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2013-08-30 10:19'
        message: Fixed broken picture
        version: '6'
    -
        author: Solen Guitter
        date: '2011-09-06 15:36'
        message: Migrated to Confluence 4.0
        version: '5'
    -
        author: Solen Guitter
        date: '2011-09-06 15:36'
        message: Added related tutorials
        version: '4'
    -
        author: Solen Guitter
        date: '2011-09-06 14:30'
        message: ''
        version: '3'
    -
        author: Arthur Gallouin
        date: '2011-06-01 16:19'
        message: ''
        version: '2'
    -
        author: Arthur Gallouin
        date: '2011-06-01 16:08'
        message: ''
        version: '1'

---
This howto gives you the steps to add a new permission in the permissions list of Nuxeo applications. For instance, in the Permissions tab in Nuxeo Platform.
You can then leverage this permission in the [definition of new user actions]({{page space='nxdoc' page='how-to-add-a-button-in-the-jsf-ui'}}) to filter who should see the new button, link or icon or in [automation chains]({{page space='nxdoc' page='how-to-create-an-automation-chain'}}).

To create a new permission in Nuxeo:

1.  Unfold the **Roles and Permissions** menu entry and click on **Permissions**.
2.  Click on the **New** button.
3.  On the window that pops up give your new permission a Feature ID and click on the **OK** button.
4.  Select where the permission should be displayed in the drop down menu and click on **Add**.
    {{!--     ### nx_asset ###
        path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Add a new Permission in the UI/Create New Permission
        name: create-new-permission.png
        studio_modeler#screenshot#up_to_date
    --}}
    ![Create New Permission](nx_asset://f7373240-d011-4520-a52b-231d56f4ae3b ?w=650,border=true)
5.  When you have chosen all the places where the permission should be displayed, click **Save** to save your modifications.
6. Don't forget to translate the permission label [using an I18N translation file]({{page space='nxdoc' page='how-to-upload-labels-translations-in-nuxeo-studio-i18n'}}) if needed.

{{#> callout type='info' }}
After you updated your Nuxeo application with Studio customizations, you must restart your server so the new permission is displayed.
{{/callout}}

<div class="row" data-equalizer data-equalize-on="medium">
<div class="column medium-6">
{{#> panel heading='Related documentation'}}
- [Implement the News "Publishing" Process]({{page space='nxdoc' page='implement-the-news-publishing-process'}})
{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
