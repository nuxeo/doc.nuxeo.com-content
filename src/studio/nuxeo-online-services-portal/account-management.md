---
title: Account Management
description: Manage your users and assign them applications and services.
review:
    comment: ''
    date: ''
    status: ok
toc: true
tree_item_index: 300
---

## Getting Access

Access is granted by our support team, who needs to know first who among your organization should be considered organization admins.

Organization admins can access this user management screen and will eventually be able to manage roles on the Studio projects as well.

Once access is granted, a new option appears in the dashboard, called "Account Management".

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/account-management/account-management
    name: account-management.png
    studio_modeler#screenshot#up_to_date
--}}
![account-management](nx_asset://b6f5c5d0-ff94-4d52-bb8f-72ea2066bd59 ?border=true)

## Adding Users

Adding users to your organization is done with the Add User button.

If that person does not have a NOS account yet, she will receive an email to set it up.

The setup link in the email is valid for 7 days. After this delay, our support team can trigger a new email upon request.

## Assigning Applications and Services

To see who is assigned to your Studio projects and support service, click on the card with their name in the left panel. Then, you can assign or unassign users to them by clicking the checkmark icon.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/account-management/account-management-assign-users
    name: account-management-assign-users.png
    studio_modeler#screenshot#up_to_date
--}}
![account-management-assign-users](nx_asset://8e0bb27d-d1a0-4e3f-873c-33e7f447fea7 ?w=650,border=true)

Note that you won't be able to assign more people than your quota allows: you can see them anytime by looking at the corresponding card.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/account-management/account-management-quota
    name: account-management-quota.png
    studio_modeler#screenshot#up_to_date
--}}
![account-management-quota](nx_asset://48c3f661-1b9f-47d6-b38a-2dbe8158d154 ?border=true)

Click on the card again to remove the filter.

### Service Renewal

You may see multiple entries for a given service when it is about to expire / be renewed. Soon to expire services are shown with a specific badge on them, same for the ones to start soon.

Existing permissions are copied over when the renewed service entry is created. Afterwards, entries are independent so make sure to apply your changes to both if you want to avoid any discrepancy.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/account-management/service-starting-soon
    name: service-starting-soon.png
    studio_modeler#screenshot#up_to_date
--}}
![service-starting-soon](nx_asset://ecb4903e-d6d3-4d5e-87c7-63af2ee1c30a ?w=650,border=true)

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/account-management/service-ending-soon
    name: service-ending-soon.png
    studio_modeler#screenshot#up_to_date
--}}
![service-ending-soon](nx_asset://b5bdd9f8-9b9e-465b-a8b3-9c668d73e298 ?w=650,border=true)

## Removing Users

Removing a user from your organization is done by clicking the trash icon on that particular user.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/account-management/account-management-delete-user
    name: account-management-delete-user.png
    studio_modeler#screenshot#up_to_date
--}}
![account-management-delete-user](nx_asset://ec9c0a62-efdc-4e2d-8286-5b2a6dde5082 ?w=650,border=true)

Confirming the action will remove access to all applications and services from this organization; it does not delete the user account. If that person is also a member of other organizations, her access to them remains unchanged.
