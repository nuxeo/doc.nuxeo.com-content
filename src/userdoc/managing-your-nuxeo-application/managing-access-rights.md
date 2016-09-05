---
title: Managing Access Rights
labels:
    - access-rights
    - last-review-20141121
toc: true
confluence:
    ajs-parent-page-id: '21299490'
    ajs-parent-page-title: Managing Your Nuxeo Application
    ajs-space-key: USERDOC60
    ajs-space-name: Nuxeo Platform User Documentation — 6.0
    canonical: Managing+Access+Rights
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC60/Managing+Access+Rights'
    page_id: '21299489'
    shortlink: IQFFAQ
    shortlink_source: 'https://doc.nuxeo.com/x/IQFFAQ'
    source_link: /display/USERDOC60/Managing+Access+Rights
history:
    - 
        author: Solen Guitter
        date: '2016-09-01 14:39'
        message: ''
        version: '38'
    - 
        author: Manon Lumeau
        date: '2015-10-02 13:55'
        message: ''
        version: '37'
    - 
        author: Manon Lumeau
        date: '2014-11-21 11:12'
        message: ''
        version: '36'
    - 
        author: Manon Lumeau
        date: '2014-11-21 11:11'
        message: ''
        version: '35'
    - 
        author: Manon Lumeau
        date: '2014-11-21 11:05'
        message: ''
        version: '34'
    - 
        author: Manon Lumeau
        date: '2014-11-20 19:10'
        message: ''
        version: '33'
    - 
        author: Manon Lumeau
        date: '2014-11-20 18:51'
        message: ''
        version: '32'
    - 
        author: Manon Lumeau
        date: '2014-11-20 17:56'
        message: ''
        version: '31'
    - 
        author: Solen Guitter
        date: '2014-11-04 22:31'
        message: >-
            Denying access rights now disabled by default, but can be activated
            through nuxeo.conf
        version: '30'
    - 
        author: Solen Guitter
        date: '2014-08-21 10:25'
        message: wording
        version: '29'
    - 
        author: Manon Lumeau
        date: '2014-08-14 16:53'
        message: ''
        version: '28'
    - 
        author: Solen Guitter
        date: '2014-03-26 17:40'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '27'
    - 
        author: Solen Guitter
        date: '2014-03-26 17:40'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '26'
    - 
        author: Solen Guitter
        date: '2014-03-26 17:40'
        message: Added anchor to rights inheritance
        version: '25'
    - 
        author: Solen Guitter
        date: '2013-10-22 18:48'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '24'
    - 
        author: Solen Guitter
        date: '2013-10-22 18:48'
        message: Removed related topics from TOC
        version: '23'
    - 
        author: Solen Guitter
        date: '2013-10-22 18:48'
        message: ''
        version: '22'
    - 
        author: Solen Guitter
        date: '2012-07-24 11:42'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '21'
    - 
        author: Solen Guitter
        date: '2012-07-24 11:42'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '20'
    - 
        author: Solen Guitter
        date: '2012-07-24 11:42'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '19'
    - 
        author: Solen Guitter
        date: '2012-07-24 11:42'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '18'
    - 
        author: Solen Guitter
        date: '2012-07-24 11:42'
        message: Migrated to Confluence 4.0
        version: '17'
    - 
        author: Solen Guitter
        date: '2012-07-24 11:42'
        message: ''
        version: '16'
    - 
        author: Solen Guitter
        date: '2012-07-24 11:38'
        message: ''
        version: '15'
    - 
        author: Solen Guitter
        date: '2012-02-07 14:44'
        message: ''
        version: '14'
    - 
        author: Solen Guitter
        date: '2012-02-07 14:27'
        message: ''
        version: '13'
    - 
        author: Solen Guitter
        date: '2012-02-07 11:40'
        message: ''
        version: '12'
    - 
        author: Solen Guitter
        date: '2012-02-07 11:38'
        message: ''
        version: '11'
    - 
        author: Solen Guitter
        date: '2012-01-30 10:45'
        message: ''
        version: '10'
    - 
        author: Solen Guitter
        date: '2012-01-24 11:44'
        message: ''
        version: '9'
    - 
        author: Solen Guitter
        date: '2012-01-23 17:48'
        message: Fixed broken link to Access rights table
        version: '8'
    - 
        author: Solen Guitter
        date: '2011-11-24 11:11'
        message: ''
        version: '7'
    - 
        author: Solen Guitter
        date: '2011-11-09 10:56'
        message: Added toc and related customization content
        version: '6'
    - 
        author: Solen Guitter
        date: '2011-11-08 17:09'
        message: ''
        version: '5'
    - 
        author: Solen Guitter
        date: '2011-06-06 15:03'
        message: ''
        version: '4'
    - 
        author: Solen Guitter
        date: '2011-01-12 10:29'
        message: added rights prioritization section
        version: '3'
    - 
        author: Solen Guitter
        date: '2010-12-01 11:25'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2010-04-23 15:38'
        message: ''
        version: '1'

---
&nbsp;

&nbsp;

Only users with management rights can manage the access rights of a space.

{{! multiexcerpt name=''}}

Managing access rights means granting or denying access rights in a space. The access rights management screen is available as a sub-tab in the *Manage* tab of the space.

The access rights management sub-tab is accessible composed of three parts:

![]({{file name='access-rights-interface.png'}} ?w=550,border=true)

1.  The **Inherited rights** part displays rights that were granted or denied in a parent space.
2.  The **Local rights** part displays the rights that were granted or denied in the current space.
3.  The form to grant access rights in the current space.

{{! /multiexcerpt}}

## Rights Prioritization

The access rights available are:

{{{excerpt 'Nuxeo Platform Concepts'}}}

As you can see, some rights include more permissions than others, and sometimes include other rights. That's the case for "Write", that includes "Remove". Beside the fact that some rights are stronger than others, you should be aware, when you set up rights on a space, that some rights have priority over others:

*   Local rights have priority over inherited rights
*   Granted rights have priority over denied rights

There is no precedence of users rights over groups rights or the other way around.

## Granting Access Rights

**To grant access rights:**

1.  Click on the **Manage** tab of the space.
    The **Access Rights** sub-tab is displayed.
2.  In the form, type the username of the user you want to grant rights to. To give access rights to a group, type the group's name.
    The names of the users or groups corresponding to the typed characters are automatically displayed as you type.&nbsp;
    ![]({{file name='rights-form.png'}} ?w=350,border=true)
3.  Click on the user you want to give access rights to.
4.  Select the right to grant in the **Permission** drop down list.
    ![]({{file name='access-rights-selection.png'}} ?w=450,border=true)
5.  Click on the **Add permission** button.
    The user and its rights are displayed in the **Local Rights** part of the screen.
    ![]({{file name='rights-granted.png'}} ?w=450,border=true)
6.  Save local rights modification by clicking on the **Save local rights** button.
    Local rights are saved and applied.

## Removing a User from Local Rights

If you want to refuse rights to a user, and that these rights have been granted in the current space, you can remove the user from the local rights.

**To remove a user from the local rights:**

1.  Click on the **Manage** tab of the space.
    The **Access Rights** sub-tab is displayed.
2.  In the **Local Rights** part of the screen, check the box corresponding to the user you want to remove.
3.  Click on the **Remove permission(s)** button.
    The user is removed from the **Local Rights** table.
    ![]({{file name='rights-local-no.png'}} ?w=345,h=95,border=true)
4.  Save local rights modification by clicking on the **Save local rights** button.
    Local rights are saved and applied.

## {{> anchor 'rights-inheritance'}}Blocking Rights Inheritance

The rights that are granted or denied in a space are applied to the space's content, including its sub-spaces. You thus have the same rights in the sub-spaces as in the parent space. That is called rights inheritance.

You can block this inheritance. It enables you to block the access of a sub-workspace to the workspace's users, for instance, or to deeply modify the access rights in the sub-workspace.

**To block rights inheritance:**

1.  Click on the **Manage** tab of the space of which you want to the access rights.
    The **Access Rights** sub-tab is displayed.
2.  Check the box **Block permissions inheritance** located under the **Inherited Rights** table.
    The inherited rights table is not displayed anymore.
    ![]({{file name='rights-blocked.png'}} ?w=320,h=90,border=true)
    You are added in the list of the local rights, like the administrators group.
    ![]({{file name='rights-blocked-2.png'}} ?w=650,border=true)
    In the **Access Rights** tab of the possible sub-spaces, a group **Everyone** is denied all rights.
    ![]({{file name='rights-blocked-3.png'}} ?w=650,border=true)
    You can now grant access rights to users.

## Denying Access Rights

{{#> callout type='info' }}

In a default configuration, it is not possible to deny access rights. It can however be enabled by a system administrator, using the `nuxeo.security.allowNegativeACL` parameter in the [nuxeo.conf]({{page space='admindoc60' page='configuration-parameters-index-nuxeoconf'}}) file.

{{/callout}}

If a user has inherited rights that you don't want him to have in the current space, you can then deny him these rights. If you want to deny access rights to a large number of users, block rights inheritance and give access rights only to the users you want to be able to access the workspace or section.

**To deny access rights:**

1.  Click on the **Manage** tab of the space.
    The **Access Rights** sub-tab is displayed.
2.  In the form, type the username of the user you want to grant rights to. To deny access rights to a group, type the group's name.
    The usernames corresponding to the typed characters are automatically displayed.
    ![]({{file name='deny-rights.png'}} ?w=450,border=true)
3.  Click on the user you want to deny rights to.
4.  Select **Deny** in the Action drop down list.&nbsp;
5.  Select the right to deny in the **Permission** drop down list.
6.  Click on the **Add permission** button.
    The user is displayed in the **Local rights** form. The denied rights is displayed in the **Denied permissions** column.
    ![]({{file name='rights-denied.png'}} ?w=650,border=true)
7.  Save local rights modification by clicking on the **Save local rights** button.
    Local rights are saved and applied.

&nbsp;

* * *