---
title: Managing Users and Groups
review:
    comment: ''
    date: ''
    status: ok
labels:
    - last-review-20141124
    - admin-center
    - user-management
toc: true
confluence:
    ajs-parent-page-id: '21299490'
    ajs-parent-page-title: Managing Your Nuxeo Application
    ajs-space-key: USERDOC60
    ajs-space-name: Nuxeo Platform User Documentation — 6.0
    canonical: Managing+Users+and+Groups
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC60/Managing+Users+and+Groups'
    page_id: '21299498'
    shortlink: KgFFAQ
    shortlink_source: 'https://doc.nuxeo.com/x/KgFFAQ'
    source_link: /display/USERDOC60/Managing+Users+and+Groups
tree_item_index: 200
history:
    -
        author: Solen Guitter
        date: '2016-09-01 14:31'
        message: ''
        version: '34'
    -
        author: Manon Lumeau
        date: '2014-11-25 15:08'
        message: ''
        version: '33'
    -
        author: Manon Lumeau
        date: '2014-11-25 15:06'
        message: ''
        version: '32'
    -
        author: Manon Lumeau
        date: '2014-11-24 17:26'
        message: ''
        version: '31'
    -
        author: Manon Lumeau
        date: '2014-11-24 17:24'
        message: ''
        version: '30'
    -
        author: Solen Guitter
        date: '2014-04-08 15:24'
        message: ''
        version: '29'
    -
        author: Solen Guitter
        date: '2014-01-29 14:44'
        message: ''
        version: '28'
    -
        author: Solen Guitter
        date: '2013-11-26 20:07'
        message: ''
        version: '27'
    -
        author: Solen Guitter
        date: '2013-11-04 22:58'
        message: Fixed screenshots size
        version: '26'
    -
        author: Solen Guitter
        date: '2013-11-04 22:54'
        message: Updated screenshots for 5.8
        version: '25'
    -
        author: Solen Guitter
        date: '2013-10-22 18:50'
        message: ''
        version: '24'
    -
        author: Solen Guitter
        date: '2013-01-25 18:56'
        message: ''
        version: '23'
    -
        author: Solen Guitter
        date: '2013-01-23 13:45'
        message: ''
        version: '22'
    -
        author: Solen Guitter
        date: '2012-12-03 18:14'
        message: Added links to Admin Center related pages
        version: '21'
    -
        author: Solen Guitter
        date: '2012-10-16 12:11'
        message: ''
        version: '20'
    -
        author: Solen Guitter
        date: '2012-07-27 15:45'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '19'
    -
        author: Solen Guitter
        date: '2012-07-27 15:45'
        message: Migrated to Confluence 4.0
        version: '18'
    -
        author: Solen Guitter
        date: '2012-07-27 15:45'
        message: Added missing screenshot
        version: '17'
    -
        author: Solen Guitter
        date: '2012-06-14 11:09'
        message: ''
        version: '16'
    -
        author: Solen Guitter
        date: '2012-06-13 14:43'
        message: ''
        version: '15'
    -
        author: Solen Guitter
        date: '2012-06-13 14:42'
        message: Merged Managing users and Managing groups pages
        version: '14'
    -
        author: Solen Guitter
        date: '2012-03-12 14:20'
        message: Added link to the User home page
        version: '13'
    -
        author: Solen Guitter
        date: '2012-02-07 15:16'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2012-01-25 18:01'
        message: Added link to related customization page
        version: '11'
    -
        author: Solen Guitter
        date: '2011-12-11 15:55'
        message: Added new 5.5 user profile information
        version: '10'
    -
        author: Solen Guitter
        date: '2011-11-24 11:16'
        message: Removed 5.4 references
        version: '9'
    -
        author: Solen Guitter
        date: '2011-11-18 10:28'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2011-11-08 18:50'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2011-11-08 18:46'
        message: Added toc and related pages
        version: '6'
    -
        author: Solen Guitter
        date: '2011-06-06 15:04'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2011-05-24 16:41'
        message: updated with new 5.4.2 main tabs
        version: '4'
    -
        author: Solen Guitter
        date: '2010-12-01 11:26'
        message: ''
        version: '3'
    -
        author: Solen Guitter
        date: '2010-05-10 18:47'
        message: fixed broken link to image
        version: '2'
    -
        author: Solen Guitter
        date: '2010-04-23 15:46'
        message: ''
        version: '1'

---
Only administrators and power users can manage users and groups. They can create new users and groups, modify their properties or delete them. It is also possible to connect the Platform to an external directory (LDAP directory for instance).

Users can only consult users and groups directories. Administrators and power users can create, edit and delete users and groups.

{{#> callout type='info' }}

When you use an external directory for users and groups, the actions available on users and groups are limited, even to administrators.

{{/callout}}

Users and groups management is available:

*   from the **Admin Center**, in the **Users & groups** tab,
    ![]({{file name='AdminCenter-users-groups-tab.png' space='admindoc60' page='admin-tab-overview'}} ?w=650,h=172,border=true)
*   from the **Home** tab, in the **Users & groups** tab.
    ![]({{file name='home-user-tab.png'}} ?w=650,border=true)

## Managing Users

### User's Parameters

The whole set of information about users consists of the items below:

{{! multiexcerpt name='user-info'}}<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">Field</th><th colspan="1">Description</th></tr><tr><td colspan="1">Username</td><td colspan="1">

The name the user will use to log in.

</td></tr><tr><td colspan="1">First name</td><td colspan="1">

First name of the user

</td></tr><tr><td colspan="1">Last name</td><td colspan="1">

Last name of the user

</td></tr><tr><td colspan="1">Company</td><td colspan="1">

Company or organization of the user

</td></tr><tr><td colspan="1">

Email

</td><td colspan="1">

email of the user

This address is used for [alerts]({{page page='alerts'}}).

</td></tr><tr><td colspan="1">Password</td><td colspan="1">User's password</td></tr><tr><td colspan="1">Password (Verify)</td><td colspan="1">User's password</td></tr><tr><td colspan="1">Groups for this user</td><td colspan="1">

Groups of which the user is a member.

User must be at least in 'administrators' or 'members' group, or one of their sub-groups.

</td></tr><tr><td colspan="1">Virtual groups for this user</td><td colspan="1">&nbsp;</td></tr><tr><td colspan="1">Avatar</td><td colspan="1">Image that represents the user in the application.</td></tr><tr><td colspan="1">Birth date</td><td colspan="1">User's birth date</td></tr><tr><td colspan="1">Phone number</td><td colspan="1">User's phone number</td></tr><tr><td colspan="1">Gender</td><td colspan="1">User's gender. Default value is Male.</td></tr></tbody></table></div>{{! /multiexcerpt}} {{#> callout type='tip' }}

The avatar, birth date, phone number and gender are personal information that can only be set by the user himself. They are not available from the Admin Center Users & Groups user interface.

{{/callout}}

### Creating a User

Only administrators and power users can create new users.

By default, the Nuxeo Platform has one user, called Administrator. This user is the administrator. You must use it to create new users and delegate them access rights.

{{#> callout type='info' }}

Users must be at least in "administrators" or "members" group, or one of their sub-groups to be able to browse the application's content.

{{/callout}}

When you create a new user, you can either create the user account immediately or invite the person to access the Nuxeo Platform.&nbsp;

#### Inviting a New User

Inviting a new user means creating a user account without setting its password, and having the user validate the invitation.

**To invite a user:**

1.  Click on the **Admin Center** main tab, and then on the **Users & groups** tab.
    The members management interface opens on the user directory search form.
2.  Click on the **Create a new user** button.
    The invitation form is displayed.
    ![]({{file name='invitation-form.png'}} ?w=650,border=true)
3.  Fill in the user creation form.
    Mandatory fields are indicated by a red asterisk.
4.  Click on the **Invite** button.
    The user directory search form is displayed.
    An invitation email is sent to the user at the email address you filled in. The user account is pending the user validation and the user account is not available in the user search results.

**To validate the invitation:**

1.  In the invitation email, click on the validation link.
    A browser page opens.
    ![]({{file name='invitation-password-creation.png'}} ?w=300,border=true,thumbnail=true)
2.  Define your password and click on the **Submit** button.
    Your user account is created. You are redirected to the login page of the Nuxeo Platform: you can now log in and use the Platform.

#### Creating a New User Account

When you create a new user account immediately, you choose and set the user's password.

**To create a user:**

1.  Click on the **Admin Center** main tab, and then on the **Users & groups** tab.
    The members management interface opens on the user directory search form.
2.  Click on the **Create a new user** button.
    The invitation form is displayed.
3.  Check the box **Set password for immediate user creation**.
    The complete user creation form with the password creation form is displayed.
4.  Fill in the user creation form.&nbsp;
    Mandatory fields are indicated by a red asterisk.

5.  Click on the **Save** button.
    The card of the new user is displayed. You can modify his properties and his password.

    {{#> callout type='tip' }}

    If you need to create several users click on the **Save and create** button. The user is saved and the user creation form is displayed so you can immediately create another user.

    {{/callout}}

    The user can immediately connect to the Nuxeo application using his or her username and password.
    ![]({{file name='users-card-view.png'}} ?w=300,border=true,thumbnail=true)

### Editing a User's Properties

Only administrators and power users can modify other users' properties. But every user can modify his own properties from the **Profile** tab of his [Home]({{page page='user-home'}}).

You cannot edit the username, as it is the ID of the user on the application.

![]({{file name='users-card-edit.png'}} ?w=350,border=true)

When you are using an external directory for users management, the **Edit** tab is not displayed as you cannot edit the users' properties (managed directly from the directory).

**To modify a user's properties:**

1.  Click on the **Admin Center** main tab, and then on the **Users & groups** tab.
    The members management interface opens on the user directory search form.
2.  Search a user and click on the user's name to open his or her card.
    The user's card is displayed.
3.  Click on the **Edit** tab.
4.  Modify the fields in the modification form.
5.  Click on the **Save** button.
    The **View** tab is displayed with your modifications

### {{> anchor 'edit-password'}}Changing a User's Password

Only administrators and power users can modify other users' password. However every user can modify his or her own password from his/her **Home** > **Profile** tab.

When you use an external directory for users management, the **Change password** tab is not displayed as you cannot edit your password.

![]({{file name='users-card-password.png'}} ?w=300,border=true,thumbnail=true)

**To modify a user's password:**

1.  Click on the **Admin Center** main tab, and then on the **Users & groups** tab.
    The members management interface opens on the user directory search form.
2.  Search a user and click on the user's name to open his or her card.
    The user's card is displayed.
3.  Click on the **Change password** tab.
4.  Type the new password and confirm it.
5.  Click on the **Save** button.
    The **View** tab is displayed.
    The user must use his or her new password the next time he or she logs in.

### Deleting a User

Only administrators and power users can delete users.

{{#> callout type='warning' }}

Deleting a user is a permanent action.

{{/callout}}

**To delete a user:**

1.  Click on the **Admin Center** main tab, and then on the **Users & groups** tab.
    The members management interface opens on the user directory search form.
2.  Search a user and click on the user's name to open his or her card.
    The user's card is displayed.
3.  Click on the **Delete** button.
    A window pops up.
4.  Click on the **OK** button.
    The user is deleted. He or she cannot log in to the Nuxeo application.&nbsp;

## Managing Groups

Groups of users can be created and their properties modified directly in the Nuxeo Platform.

{{{multiexcerpt 'groups-intro' page='Nuxeo Platform Concepts'}}}

Groups can be composed of users and of sub-groups. Sub-group's members automatically become members of the parent group. Thus, they are granted all the access rights you give to the group. You can create as many groups as needed.

### Groups Parameters

{{! multiexcerpt name='group-info'}}<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">Field</th><th colspan="1">Description</th></tr><tr><td colspan="1">

Group name

</td><td colspan="1">

The ID of the group.

The ID cannot be modified.

</td></tr><tr><td colspan="1">

Group label

</td><td colspan="1">

The name of the group displayed to users.

</td></tr><tr><td colspan="1">

Group's members

</td><td colspan="1">

Users that belong to the group.

</td></tr><tr><td colspan="1">

Sub-groups

</td><td colspan="1">

Groups that belong to the group.

</td></tr></tbody></table></div>{{! /multiexcerpt}}

### Creating a Group

Only administrators and power users can create groups of users.

**To create a group of users:**

1.  Click on the **Admin Center** main tab, and then on the **Users & groups** tab.
    The directory opens on the **Users** tab.
2.  Click on the **Groups** tab.
    A search form and the list of the existing groups is displayed.
3.  Click on the **Create a new Group** button.
4.  Fill in the creation form.
5.  Click on the **Save** button.

    {{#> callout type='tip' }}

    If you need to create several groups, click on the **Save and create** button. Your group is saved and the group creation form is displayed so you can immediately create another group.

    {{/callout}}

    The **View** tab of the group's card is displayed.

### Editing a Group

Only administrators and power users can modify groups.

Modifying groups most often consists in adding or removing members of the group. The name of the group cannot be changed.

![]({{file name='groups-card-edit.png'}} ?w=350,border=true)

**To edit a group:**

1.  Click on the **Admin Center** main tab, and then on the **Users & groups** tab.
    The directory opens on the **Users** tab.
2.  Click on the **Groups** tab.
    A search form is displayed.
3.  Search a group and click on its name to open its card.
    The card displays the members and sub-groups of the group in the **View** tab.
4.  Click on the **Edit** tab.
    The modification form is displayed.
5.  Modify the group's members and click on the **Save** button.
    The **View** tab of the group is displayed with the modifications you just made.
    The new group members are immediately granted the group's access rights.
    The users who are no longer members of the group are denied group's access rights. However they still have their individual access rights.

### Deleting a Group

Only administrators and power users can delete groups.

**To delete a group:**

1.  Click on the **Admin Center** main tab, and then on the **Users & groups** tab.
    The directory opens on the **Users** tab.
2.  Click on the **Groups** tab.
    A search form is displayed.
3.  Search the group to delete and click on its name to open its card.
    The card displays the members and sub-groups of the group in the **View** tab.
4.  Click on the **Delete** button.
    A window pops up.
5.  Click on the **OK** button.
    The group search form is displayed.
6.  The group is displayed and its members lose the group's access rights.

&nbsp;
