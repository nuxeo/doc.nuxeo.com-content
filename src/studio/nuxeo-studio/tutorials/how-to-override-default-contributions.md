---
title: 'HOWTO: Override Existing Contributions'
review:
    comment: ''
    date: '2019-03-01'
    status: ok
details:
    howto:
        excerpt: Learn how to override Web UI Default contributions with Nuxeo Studio
        tool: Nuxeo Studio
        topics: Nuxeo Studio
        level: Intermediate
labels:
    - howto
tree_item_index: 1200
toc: true
---

This tutorial provides steps to override Web UI Default contributions with Nuxeo Studio.

Learn how to customize the User Settings Menu by:

- Restricting access to a contribution in a menu to a specific group of users
- Copying a contribution from the Administration menu in the User Settings menu
- Configuring the order of contributions in a menu

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/HOWTO: Override Existing Contributions/User settings menu
    name: user-settings-menu.png
    studio_designer#screenshot#up_to_date
--}}
![User settings menu](nx_asset://f2b96a32-5333-4a95-a656-cce6b7cca97d ?w=250,border=true)

## Restricting Access to a Specific Group

In this section, we will restrict access to the authorized apps menu only to Administrators.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/HOWTO: Override Existing Contributions/Edit contribution
    name: edit-contribution.png
    studio_designer#screenshot#up_to_date
--}}
![Edit contribution ](nx_asset://0b23b253-2c55-4ce2-9c29-53d709743864 ?w=600,border=true)

1. In **Studio Designer**, go to **Drawer** > **Main Menu Pages**.
1. Hover over **authorizedAppsUserPage** and click **Edit**.
1. In Activation Filter section, click **DEFINE FILTERS**.
1. In User has membership of, enter **administrators**.
1. Save.

## Copying a Contribution

In this section, we want to give access to a contribution that is by default available in the Administration menu, the Analytics page in the **User Settings** menu.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/HOWTO: Override Existing Contributions/Copy contribution analytics
    name: analytics-contribution-copy.png
    studio_designer#screenshot#up_to_date
--}}
![Copy contribution analytics](nx_asset://2dd8c1ad-aa51-4319-a6b7-8853c4ac1db9 ?w=600,border=true)

1. In **Studio Designer**, go to **Drawer** > **Main Menu Pages**.
1. Hover over **adminAnalyticsPage** and click **Copy**.
1. In **Identity** > **Name**, edit the name to `userAnalyticsPage`.
1. In User will access it from, select **User Menu**.
1. In Activation Filter, click **DEFINE FILTERS**.
1. In Custom expression, remove `user.isAdministrator` to enable this contribution to be displayed to all users.
1. Save.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/HOWTO: Override Existing Contributions/Configuration userAnalyticsPage
    name: userAnalyticsPage.png
    studio_designer#screenshot#up_to_date
--}}
![Configuration userAnalyticsPage](nx_asset://ed9ce51f-c702-44ca-9178-46ad4878df3c ?w=600,border=true)

## Disabling a Contribution

In this section, we will disable the Theme page so that the user cannot select another theme than the default one.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/HOWTO: Override Existing Contributions/Disable contribution themes
    name: themes-contribution-disable.png
    studio_designer#screenshot#up_to_date
--}}
![Disable contribution themes](nx_asset://57bb0b91-c249-4562-bb4b-0aa4073cb834 ?w=600,border=true)

1. In **Studio Designer**, go to **Drawer** > **Main Menu Pages**.
1. Hover over **themesUserMenuItem** and click on the toggle button.
1. Save.

## Configuring the Order of Contributions

In this section, we will reorder the contributions of the User Settings menu to showcase the pages we just configured.

1. In **Studio Designer**, go to **Drawer** > **Main Menu Pages**.
1. Hover over **userAnalyticsPage** and click **Edit**.
1. In Order, enter `3`.
1. Save your changes and return to Main Menu Pages.
1. Hover over **authorizedAppsUserPage** and click **Edit**.
1. In Order, enter `4`.
1. Save and deploy to your instance.

You should have this result.

| For administrator users |  For non-admistrator users |
|---|---|
| ![Customized menu ](nx_asset://f73344cd-a726-4378-9832-bebbd5cba976 ?w=300,border=true) | ![Customized menu members](nx_asset://500b4e0c-bdea-4bfb-bb9b-fc15c0a6d2a9 ?w=300,border=true)|
