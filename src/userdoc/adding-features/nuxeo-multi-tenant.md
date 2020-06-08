---
title: Nuxeo Multi-Tenant
review:
    comment: ''
    date: '2020-06-08'
    status: ok
labels:
    - lts2017-ok
    - marketplace-package
    - multi-tenant
    - excerpt
toc: true
confluence:
    ajs-parent-page-id: '11043055'
    ajs-parent-page-title: Adding Features
    ajs-space-key: USERDOC
    ajs-space-name: Nuxeo Platform User Documentation
    canonical: Nuxeo+Multi-Tenant
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC/Nuxeo+Multi-Tenant'
    page_id: '11043208'
    shortlink: iIGo
    shortlink_source: 'https://doc.nuxeo.com/x/iIGo'
    source_link: /display/USERDOC/Nuxeo+Multi-Tenant
tree_item_index: 1000
history:
    -
        author: Manon Lumeau
        date: '2015-11-25 16:57'
        message: ''
        version: '27'
    -
        author: Solen Guitter
        date: '2015-08-31 08:59'
        message: ''
        version: '26'
    -
        author: Solen Guitter
        date: '2015-02-17 13:26'
        message: Add schema
        version: '25'
    -
        author: Solen Guitter
        date: '2015-02-16 14:55'
        message: ''
        version: '24'
    -
        author: Solen Guitter
        date: '2015-02-16 14:52'
        message: ''
        version: '23'
    -
        author: Solen Guitter
        date: '2015-02-16 14:19'
        message: ''
        version: '22'
    -
        author: Manon Lumeau
        date: '2014-12-08 11:54'
        message: ''
        version: '21'
    -
        author: Manon Lumeau
        date: '2014-12-08 11:50'
        message: ''
        version: '20'
    -
        author: Solen Guitter
        date: '2013-12-23 11:53'
        message: ''
        version: '19'
    -
        author: Solen Guitter
        date: '2013-11-04 23:45'
        message: Removed related topics from TOC and added precision about members group being optional
        version: '18'
    -
        author: Solen Guitter
        date: '2013-08-05 16:15'
        message: ''
        version: '17'
    -
        author: Solen Guitter
        date: '2013-08-05 16:15'
        message: ''
        version: '16'
    -
        author: Solen Guitter
        date: '2013-08-05 15:47'
        message: ''
        version: '15'
    -
        author: Solen Guitter
        date: '2013-08-05 15:45'
        message: Added multi-tenancy activation section
        version: '14'
    -
        author: Solen Guitter
        date: '2013-08-05 15:22'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2013-06-19 16:41'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2012-07-24 11:42'
        message: Migrated to Confluence 4.0
        version: '11'
    -
        author: Solen Guitter
        date: '2012-07-24 11:42'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2012-07-24 11:38'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2012-06-18 17:06'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2012-06-18 16:54'
        message: Added global admin Vs tenant admin section
        version: '7'
    -
        author: Solen Guitter
        date: '2012-06-18 11:18'
        message: Added screenshots
        version: '6'
    -
        author: Solen Guitter
        date: '2012-06-15 17:42'
        message: Added information on access right management in the tenant
        version: '5'
    -
        author: Solen Guitter
        date: '2012-06-15 17:01'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2012-06-15 16:55'
        message: Added related content links
        version: '3'
    -
        author: Solen Guitter
        date: '2012-06-15 16:32'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2012-06-14 14:17'
        message: ''
        version: '1'
---

{{multiexcerpt 'JSF-UI-required' space='nxdoc' page='generic-multi-excerpts'}}

{{! excerpt}}
[Nuxeo Multi-tenant](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-multi-tenant) enables to have [domains]({{page page='nuxeo-platform-concepts'}}#available-spaces), or tenants, that are independent from each other, with their own users, vocabulary values etc.
{{! /excerpt}}

It is possible to have several domains on the default Nuxeo Platform without using Nuxeo Multi-tenant, but they all share the same [vocabularies definition]({{page page='managing-vocabularies'}}) and users. This means that when users [configure the access to a workspace]({{page page='managing-permissions'}}), for instance, and search for users, they can see all the users of the application. Nuxeo Multi-tenant modifies this behavior and enables domains to be completely isolated from each other, including their users and vocabulary values.
The tenant structure is the same as the default domain on a default Nuxeo Platform application.

## Isolated Items

Once tenant isolation is activated (see below), the following items are isolated and can only be seen from their tenant:

*   Users
*   Groups
*   Vocabularies (I10subjects and I10coverage)
*   Search forms
*   Documents

![](https://www.lucidchart.com/publicSegments/view/54e34139-0790-4e01-92ed-614a0a00cdf0/image.png ?w=500,border=true)

## Global Administrator vs Tenant Administrator

The multi-tenant addon adds the notion of global administrator and tenant administrator to the Nuxeo Platform.

Global administrators are technical administrators in charge of the configuration of the whole application through the Admin tab. The Administrator default user is a global administrator. For instance, they can install updates and new modules to the Platform, restart the server, configure the Platform so it can be accessible from other applications, etc.

Tenant administrators are functional administrators who have access to a "light" version of the Admin tab. They are the powerusers of the tenant. From there, they can create and edit users and group, and modify vocabularies. Their changes are applied to their tenant only, instead of the whole application.

## Activating Multi-Tenancy

Multi-tenancy is not automatically available on your Nuxeo Platform after the [package has been installed]({{page space='nxdoc' page='nuxeo-multi-tenant'}}). You need to activate it.

To activate multi-tenancy:

1.  In the Admin tab, click on the **Tenant isolation** tab.
2.  Click on the **Enable** button.
    Tenant isolation status goes to "enabled".
    You can now [create new tenants](#create-new-tenant).

## {{> anchor 'create-new-tenant'}}Creating a New Tenant

Only global administrators can create new tenants.

When a global administrator creates a new tenant, he needs to define some elements of local configuration.

**To create a new tenant:**

1.  On the page "Domains of the default server", click on **Create a new domain**.
2.  Fill in the creation form.
    *   Give the tenant a title and optionally a description.
    *   Select the presentation of content lists in the domain.
    *   Select which document types should be available or not in the tenant.
    *   Select the search forms that should be used in the tenant.
        ![]({{file name='multi-tenant-creation-form.png'}} ?w=350,border=true)
3.  Click on **Create**.<br/>
    The **Content** tab of the new tenant is displayed.<br/>
    The tenant is accessible by administrators only. You now need to define who the tenant administrator(s) is or are.

## Defining the Tenant Administrator

Tenant administrators can create new users and manage access to the tenant. They can also edit vocabularies to customize the metadata values.

When the tenant is just created, the global administrator should define at least one tenant administrator, who will then be able to delegate permissions and possibly define other tenant administrators.

It takes two steps to make a user a tenant administrator.

**Step 1: Edit the user's properties to associate them with a tenant:**

1.  Click on the **Admin** main tab, and then on the **Users & groups** tab.<br/>
    The members management interface opens on the user directory search form.
2.  Search a user and click on the user's name to open their card.<br/>
    The user's card is displayed.
3.  Click on the **Edit** tab.
4.  In the **Tenant ID** list, select the domain you want the user to be an administrator of.
    ![]({{file name='multi-tenant-user-card.png'}} ?w=350,border=true)
5.  Click on the **Save** button.<br/>
    The **View** tab is displayed with your modifications.<br/>
    The user now has access to the tenant. You now need to declare them as an administrator of the tenant.

**Step 2: Declare the user as a tenant administrator:**

1.  On the domain root, click on the **Manage** tab.
2.  In the first tab **Tenant isolation**, type the username, first name or last name of the user you want to be an administrator.
    The names of the users corresponding to the typed characters are automatically displayed as you type.
    ![]({{file name='multi-tenant-admin-search.png'}} ?w=350,border=true)
3.  Click on the user you want to give permissions to.
4.  Click on **Save**.
    The user now has access to the tenant administration and to the **Users and groups** and **Vocabularies** tabs of the Admin main tab.
    ![]({{file name='multi-tenant-admin-center.png'}} ?w=450,border=true)
    The user is automatically added in two virtual groups: a **powerusers** group for functional administration and a tenant administrators group for administration features.
    ![]({{file name='multi-tenant-user-groups.png'}} ?w=350,border=true)

## Giving Access to the Tenant

On a default installation of the Nuxeo Platform, permissions are configured so members have read access to the content. This behavior can be modified by changing the permissions.

Users created by the tenant administrators automatically have "Read" access to the tenant. Indeed, they are automatically members of a virtual group that has "Read" right on the tenant. They don't need to be part of the default "members" group, being a member of the tenant is enough to access content.

Tenant administrators can then [delegate permissions]({{page page='managing-permissions'}}) in the tenant, which will define what the user can do in the tenant.

## Defining the Tenant Specific Vocabulary Values

The vocabularies I10subjects and I10coverage are isolated and don't display any value by default once you activated tenant isolation. Tenant administrators should edit the vocabularies to customize the metadata values displayed to the tenant users.

See the [Managing Vocabularies]({{page page='managing-vocabularies'}}) page.

* * *

<div class="row" data-equalizer data-equalize-on="medium">
<div class="column medium-6">
{{#> panel heading='Related user documentation'}}

- [Managing Users and Groups]({{page page='managing-users-and-groups'}})
- [Managing Permissions]({{page page='managing-permissions'}})
- [Managing Vocabularies]({{page page='managing-vocabularies'}})
- [Local Configuration]({{page page='local-configuration'}})

{{/panel}}
</div>

<div class="column medium-6">

&nbsp;


</div>
</div>
