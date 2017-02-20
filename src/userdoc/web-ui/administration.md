---
title: Administration
review:
    comment: ''
    date: '2017-01-26'
    status: ok
toc: true
tree_item_index: 700
description:
---
This Administration menu presents three different submenus:
- [Analytics](#analytics)
- [Users & Groups](#users-groups)
- [Vocabularies](#vocabularies)


## Analytics

This section of the Administration tab enables administrators to have information and statistics on how the application is used.

The default Activity subtabs are:
- **Document Distribution**:

- **Repository Content**: Provides statistics on the repository, the top downloads, the document created per week, etc. You can filter these statistics on a specific time period.

- **Search**: Provides statistics on the queries done by users and how search filters are used.

- **Workflow**: Provides statistics on tasks, like the average duration of a workflow, the actions per users, etc.

## Users & Groups

Only administrators and power users can create, edit and delete users and groups. They can create new users and groups, modify their properties or delete them. It is also possible to connect the Platform to an external directory (LDAP directory for instance). Users can only consult users and groups directories.

### Managing Users

By default, the Nuxeo Platform has one user, called Administrator, who is the administrator. You must use it to create new users and delegate them permissions.

{{#> callout type='info' }}
Users must be at least in "administrators" or "members" group, or one of their sub-groups to be able to browse the application's content.
{{/callout}}

**Users's Parameters**

The whole set of information about users consists of the items below:

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th colspan="1">Field</th>
<th colspan="1">Description</th>
</tr>
<tr>
<td colspan="1">Username</td>
<td colspan="1">

The name the user will use to log in.

</td>
</tr>
<tr>
<td colspan="1">First name</td>
<td colspan="1">

First name of the user

</td>
</tr>
<tr>
<td colspan="1">Last name</td>
<td colspan="1">

Last name of the user

</td>
</tr>
<tr>
<td colspan="1">Company</td>
<td colspan="1">

Company or organization of the user

</td>
</tr>
<tr>
<td colspan="1">

Email

</td>
<td colspan="1">

email of the user

This address is used for [alerts]({{page page='collaborative-features#alerts'}}).

</td>
</tr>
<tr>
<td colspan="1">Password</td>
<td colspan="1">User's password</td>
</tr>
<tr>
<td colspan="1">Password (Verify)</td>
<td colspan="1">User's password</td>
</tr>
<tr>
<td colspan="1">Groups for this user</td>
<td colspan="1">

Groups of which the user is a member.

User must be at least in 'administrators' or 'members' group, or one of their sub-groups.

</td>
</tr>
</tbody>
</table>
</div>

#### Inviting a New User

Inviting a new user means creating a user account without setting its password, and having the user validate the invitation.

- To invite a user, go to **Administration** menu > **Users & Groups**. Click on the **New** button and fill in the user creation form and leave **Set user password** to unactive. </br>
  An invitation email is sent to the user at the email address you filled in. The user account is pending the user validation and the user account is not available in the user search results.
- To validate the invitation, click on the validation link in the invitation email. Define your password and click on the **Submit** button. You are redirected to the login page of the Nuxeo Platform: you can now log in and use the Platform.

#### Creating a New User Account

When you create a new user account immediately, you choose and set the user's password.

To create a user, go to the **Administration** menu > **Users & groups**. Click on the **New** button and fill in the user creation form and active the **Set user password**.

{{#> callout type='tip' }}
If you need to create several users check the box **Create another** next to the **Create** button at the end of the creation form. The user is saved and the user creation form is displayed so you can immediately create another user.
{{/callout}}

The user can immediately connect to the Nuxeo application using his or her username and password.

#### Editing a User's Properties

Only administrators and power users can modify other users' properties. But every user can modify his own properties from their profile card in the **Users & Groups** menu.

You cannot edit the username, as it is the ID of the user on the application.

{{#> callout type='info' }}
When you are using an external directory for users management, the Edit button is not displayed as you cannot edit the users' properties (managed directly from the directory).
{{/callout}}

To modify a user's properties, go to the **Administration** menu > **Users & Groups**. Search a user and click on the user's name to open his or her card. Edit it by modifying the fields in the modification form.

#### Changing a User's Password

Only administrators and power users can modify other users' password. However every user can modify his or her own password from his/her profile card.

{{#> callout type='info' }}
When you use an external directory for users management, the **Change password** button is not displayed as you cannot edit your password.
{{/callout}}

SCREENSHOT

To modify a user's password, go to the **Administration** menu > **Users & Groups** and click on the **CHANGE PASSWORD** button.

#### Deleting a User

Only administrators and power users can delete users.

{{#> callout type='warning' }}
Deleting a user is a permanent action.
{{/callout}}

To delete a user, go to go to the **Administration** menu > **Users & Groups**. Search a user and click on the user's name to open his or her card. Click on **DELETE** at the top-right hand corner and confirm.

### Managing Groups

{{{multiexcerpt 'group-intro' page='managing-users-and-groups'}}}

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th colspan="1">Field</th>
<th colspan="1">Description</th>
</tr>
<tr>
<td colspan="1">

Group name

</td>
<td colspan="1">

The ID of the group.

The ID cannot be modified.

</td>
</tr>
<tr>
<td colspan="1">

Group label

</td>
<td colspan="1">

The name of the group displayed to users.

</td>
</tr>
<tr>
<td colspan="1">

Group's members

</td>
<td colspan="1">

Users that belong to the group.

</td>
</tr>
</tbody>
</table>
</div>

#### Creating a Group

Only administrators and power users can create groups of users.

To create a group of users, go to **Administration** menu > **Users & Groups** > click on the **New** button and select Group from the drop down list. Fill in the creation form and save.

{{#> callout type='tip' }}

If you need to create several groups, check the box **Create another** next to the **Create** button. Your group is saved and the group creation form is displayed so you can immediately create another group.

{{/callout}}

#### Editing a Group

Only administrators and power users can modify groups.

Modifying groups most often consists in adding or removing members of the group. The name of the group cannot be changed.

SCREENSHOT

To edit a group, go to the **Administration** menu > **Users & Groups**. Search a group and click on its name to open its card. Click on the **Edit** tab, modify the group's members and click on the **Save** button. The users who are no longer members of the group are denied group's permissions. However they still have their individual permissions.


#### Deleting a Group

Only administrators and power users can delete groups.

To delete a group, go to **Administration** menu > **Users & Groups**. Search the group to delete and click on its name to open its card. Click on **Delete** and confirm.


## Vocabularies

Only administrators and power users can consult and manage vocabularies.

Vocabularies are the lists of labels used in the application, for instance in drop down lists. A vocabulary is composed of several entries, that are the options in the drop down lists. Some vocabularies are hierarchical, i.e. they have several levels. For instance, the **Subjects** metadata uses a two level vocabulary called `I10nsubjects`. First level is **Topic**. Second level is **Subtopic** and each entry is linked to a **Topic** entry.

SCREENSHOT

{{#> callout type='tip' }}

Although the `I10nsubjects` vocabulary is used in most places to populate the Subject list (on edit forms and search forms for instance), the virtual navigations used the older "topic" and "subtopic" vocabularies. You need to use the same ID in all vocabularies to make the virtual navigations work.

{{/callout}}

Administrators and power users can only modify or delete vocabularies. They cannot create a new vocabulary from the user interface.

### Consulting Vocabularies

All vocabularies editable from the user interface are listed in the vocabularies management interface.

To consult a vocabulary or its entries click on the **Administration** menu > **Vocabularies** submenu and select the vocabulary you want to consult in the drop down list.

SCREENSHOT

{{#> callout type='info' }}

By default, the labels of default vocabularies entries are the IDs of labels in .properties files of source code.

{{/callout}}

### Vocabulary Entries Parameters

{{{multiexcerpt 'vocabulary-entries-parameter' page='managing-vocabularies'}}}

### Adding a Vocabulary Entry

To add an entry to a vocabulary,click on the **Add Entry** button of the vocabulary, fill in the entry creation form and click on the **Save** button.

SCREENSHOT

The new entry is displayed in the list of the vocabulary entries. It is immediately available in the corresponding drop down list in the user interface.

### Editing a Vocabulary Entry

Editing a vocabulary entry can be changing its label, making it obsolete or changing its order. When you make an entry obsolete, it means that it will not be displayed in the available choices when you edit a document.

### Deleting a Vocabulary Entry

{{#> callout type='warning' }}
Deleting a vocabulary entry is a permanent action.
{{/callout}}

To delete vocabulary entry, click on the **Delete** button ![]({{file name='delete_2.png' space='userdoc' page='icons-index'}}) of the entry to erase and confirm.The entry is permanently erased. The list of the vocabulary entries is displayed.
