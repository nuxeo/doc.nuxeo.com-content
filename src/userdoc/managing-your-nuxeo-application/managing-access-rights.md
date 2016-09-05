---
title: Managing Access Rights
labels:
    - access-rights
toc: true
confluence:
    ajs-parent-page-id: '16092626'
    ajs-parent-page-title: Managing Your Nuxeo Application
    ajs-space-key: USERDOC58
    ajs-space-name: Nuxeo Platform User Documentation - 5.8
    canonical: Managing+Access+Rights
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC58/Managing+Access+Rights'
    page_id: '16092623'
    shortlink: z431
    shortlink_source: 'https://doc.nuxeo.com/x/z431'
    source_link: /display/USERDOC58/Managing+Access+Rights
history:
    - 
        author: Solen Guitter
        date: '2016-09-01 15:14'
        message: ''
        version: '34'
    - 
        author: Manon Lumeau
        date: '2015-10-02 13:56'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '33'
    - 
        author: Manon Lumeau
        date: '2015-10-02 13:56'
        message: ''
        version: '32'
    - 
        author: Manon Lumeau
        date: '2015-10-02 13:55'
        message: ''
        version: '31'
    - 
        author: Solen Guitter
        date: '2013-10-22 18:49'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '30'
    - 
        author: Solen Guitter
        date: '2013-10-22 18:49'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '29'
    - 
        author: Solen Guitter
        date: '2013-10-22 18:48'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '28'
    - 
        author: Solen Guitter
        date: '2013-10-22 18:48'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '27'
    - 
        author: Solen Guitter
        date: '2013-10-22 18:48'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '26'
    - 
        author: Solen Guitter
        date: '2013-10-22 18:48'
        message: Migration of unmigrated content due to installation of a new plugin
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

## Rights Prioritization

The access rights available are:

{{{excerpt 'Document Management concepts'}}}

{{! multiexcerpt name='access-rights-priorization'}}

As you can see, some rights include more permissions than others, and sometimes include other rights. That's the case for "Write", that includes "Remove".

Beside the fact that some rights are stronger than others, you should be aware, when you set up rights on a space, that some rights have priority over others:

*   local rights have priority over inherited rights,
*   granted rights have priority over denied rights.

The fact that the rights are given or denied to a single user or a group doesn't have any influence.

{{! /multiexcerpt}}

## Granting Access Rights

**To grant access rights:**

&nbsp;

{{! multiexcerpt name='grant-access-rights-steps'}}

1.  Click on the **Manage** tab of the space.
    The **Access Rights** sub-tab is displayed.
2.  In the form, type the username of the user you want to grant rights to.
    To give access rights to a group, type the group's name.
    The names of the users or groups corresponding to the typed characters are automatically displayed as you type.
    ![]({{file name='rights-form.png'}} ?w=350,border=true)
3.  Click on the user you want to give access rights to.
4.  Select the right to grant in the **Permission** drop down list.
    ![]({{file name='access-rights-selection.png'}} ?w=379,h=160,border=true)
5.  &nbsp;Click on the **Add permission** button.
    The user and its rights are displayed in the **Local Rights** part of the screen.
    ![]({{file name='rights-granted.png'}} ?w=600,border=true)
6.  Save local rights modification by clicking on the **Save local rights** button.
    Local rights are saved and applied.

{{! /multiexcerpt}}

## Denying Access Rights

If a user has inherited rights that you don't want him to have in the current space, you can deny him these rights. If you want to deny access rights to a large number of users, block rights inheritance and give access rights only to the users you want to be able to access the workspace or section.

**To deny access rights:**

{{! multiexcerpt name='deny-access-rights-steps'}}

1.  Click on the **Manage** tab of the space.
    The **Access Rights** sub-tab is displayed.
2.  In the form, type the username of the user you want to grant rights to.
    To deny access rights to a group, type the group's name.
    The usernames corresponding to the typed characters are automatically displayed.
    ![]({{file name='rights-form.png'}} ?w=350,border=true)
3.  Click on the user you want to deny rights to.
4.  Select the right to deny in the **Permission** drop down list.
5.  Click on the **Add permission** button.
    The user is in the **Local rights** form.
    The denied rights is displayed in the **Denied permissions** column.
    ![]({{file name='rights-denied.png'}} ?w=600,border=true)
6.  Save local rights modification by clicking on the **Save local rights** button.
    Local rights are saved and applied.

{{! /multiexcerpt}}

## Removing a User from Local Rights

If you want to refuse rights to a user, and that these rights have been granted in the current space, you can remove the user from the local rights.

**To remove a user from the local rights:**

{{! multiexcerpt name='remove-local-rights'}}

1.  Click on the **Manage** tab of the space.
    The **Access Rights** sub-tab is displayed.
2.  In the **Local Rights** part of the screen, check the box corresponding to the user you want to remove.
3.  Click on the **Remove permission(s)** button.
    The user is removed from the **Local Rights** table.
    ![]({{file name='rights-local-no.png'}} ?w=345,h=95,border=true)
4.  Save local rights modification by clicking on the **Save local rights** button.
    Local rights are saved and applied.

{{! /multiexcerpt}}

&nbsp;

## Blocking Rights Inheritance

The rights that are granted or denied in a space are applied to the space's content, including its sub-spaces. You thus have the same rights in the sub-spaces as in the parent space. That is called rights inheritance.

You can block this inheritance. It enables you to block the access of a sub-workspace to the workspace's users, for instance, or to deeply modify the access rights in the sub-workspace.

**To block rights inheritance:**

{{! multiexcerpt name='block-rights-inheritance'}}

1.  Click on the **Manage** tab of the space of which you want to the access rights.
    The **Access Rights** sub-tab is displayed.
2.  Check the box **Block permissions inheritance** located under the **Inherited Rights** table.
    The inherited rights table is not displayed anymore.
    ![]({{file name='rights-blocked.png'}} ?w=320,h=90,border=true)
    You are added in the list of the local rights, like the administrators group.
    ![]({{file name='rights-blocked-2.png'}} ?w=600,border=true)
    In the **Access Rights** tab of the possible sub-spaces, a group Everyone is denied all rights.
    ![]({{file name='rights-blocked-3.png'}} ?w=600,border=true)
    You can now grant access rights to users.

{{! /multiexcerpt}}

&nbsp;

&nbsp;

&nbsp;

&nbsp;