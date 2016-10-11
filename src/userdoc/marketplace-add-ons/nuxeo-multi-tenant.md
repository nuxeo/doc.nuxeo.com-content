---
title: Nuxeo Multi-Tenant
review:
    comment: ''
    date: ''
    status: ok
labels:
    - marketplace-package
    - multi-tenant
toc: true
confluence:
    ajs-parent-page-id: '16092550'
    ajs-parent-page-title: Marketplace Add-Ons
    ajs-space-key: USERDOC58
    ajs-space-name: Nuxeo Platform User Documentation - 5.8
    canonical: Nuxeo+Multi-Tenant
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC58/Nuxeo+Multi-Tenant'
    page_id: '16092554'
    shortlink: io31
    shortlink_source: 'https://doc.nuxeo.com/x/io31'
    source_link: /display/USERDOC58/Nuxeo+Multi-Tenant
history:
    - 
        author: Solen Guitter
        date: '2016-08-31 14:54'
        message: ''
        version: '20'
    - 
        author: Solen Guitter
        date: '2013-12-23 11:55'
        message: ''
        version: '19'
    - 
        author: Solen Guitter
        date: '2013-11-04 23:45'
        message: >-
            Removed related topics from TOC and added precision about members
            group being optional
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
## Activating Multi-Tenancy

Multi-tenancy is not automatically available on your Nuxeo Platform after the [package has been installed]({{page space='nxdoc58' page='nuxeo-multi-tenant'}}). You need to activate it.

To activate multi-tenancy:

1.  In the Admin Center, click on the **Tenant isolation** tab.
2.  Click on the **Enable** button.
    Tenant isolation status goes to "enabled".
    You can now [create new tenants](#create-new-t).

## {{> anchor 'create-new-tenant'}}Creating a New Tenant

Only global administrators can create new tenants.

When a global administrator creates a new tenant, he needs to define some elements of local configuration.

**To create a new tenant:**

1.  On the page "Domains of the default server", click on **Create a new domain**.
2.  Fill in the creation form.
    *   Give the tenant a title and optionally a description.
    *   Select the presentation of content lists in the domain.
    *   Select which document types should be available or not in the tenant.
    *   Select the advanced and faceted search forms that should be used in the tenant.
        ![]({{file name='multi-tenant-creation-form.png'}} ?w=550,border=true)
3.  Click on **Create**.
    The **Content** tab of the new tenant is displayed.
    The tenant is accessible by administrators only. You now need to define who the tenant administrator(s) is or are.

## Defining the Tenant Administrator

Tenant administrators can create new users and manage access to the tenant. They can also edit vocabularies to customize the metadata values.

When the tenant is just created, the global administrator should define at least one tenant administrator, who will then be able to delegate access rights and possibly define other tenant administrators.

It takes two steps to make a user a tenant administrator.

**Step 1: Edit the user's properties to associate him with a tenant:**

1.  Click on the Admin Center main tab, and then on the Users & groups tab.
    The members management interface opens on the user directory search form.
2.  Search a user and click on the user's name to open his or her card.
    The user's card is displayed.
3.  Click on the Edit tab.
4.  In the **Tenant ID** list, select the domain you want the user to be an administrator of.
    ![]({{file name='multi-tenant-user-card.png'}} ?w=350,border=true)
5.  Click on the **Save** button.
    The **View** tab is displayed with your modifications.
    The user now has access to the tenant. You now need to declare him as an administrator of the tenant.

**Step 2: Declare the user as a tenant administrator:**

1.  On the domain root, click on the **Tenant administration** tab.
2.  In the first tab **Tenant isolation**, type the username, first name or last name of the user you want to be an administrator.
    To make all the members of a group administrators, type the group's name.
    The names of the users or groups corresponding to the typed characters are automatically displayed as you type.
    ![]({{file name='multi-tenant-admin-search.png'}} ?w=350,border=true)
3.  Click on the user you want to give access rights to.
4.  Click on **Save**.
    The user now has access to the tenant administration and to the **Users and groups**, **Dashboards** and **Vocabularies** tabs of the Admin Center.
    ![]({{file name='multi-tenant-admin-center.png'}} ?w=450,border=true)
    The user is automatically added in two virtual groups: a **powerusers** groups for functional administration and a tenant administrators group for administration features.
    ![]({{file name='multi-tenant-user-groups.png'}} ?w=350,border=true)

## Giving Access to the Tenant

On a default installation of the Nuxeo Platform, access rights are configured so members have read access to the content. This behavior can be modified by changing the access rights.

Users created by the tenant administrators automatically have "Read" access to the tenant. Indeed, they are automatically members of a virtual group that has "Read" right on the tenant.&nbsp;They don't need to be part of the default "members" group, being a member of the tenant is enough to access content.

Tenant administrators can then [delegate access rights]({{page page='managing-access-rights'}}) in the tenant, which will define what the user can do in the tenant.

## Defining the Tenant Specific Vocabulary Values

Tenant administrators can edit the vocabularies to customize the metadata values displayed to the tenant users.
See the [Managing Vocabularies]({{page page='managing-vocabularies'}}) page.

&nbsp;

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related user documentation'}}

*   [Managing Users and Groups]({{page page='managing-users-and-groups'}})
*   [Managing Access Rights]({{page page='managing-access-rights'}})
*   [Managing Vocabularies]({{page page='managing-vocabularies'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>