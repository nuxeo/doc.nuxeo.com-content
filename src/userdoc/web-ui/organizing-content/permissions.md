---
title: Managing Permissions
description: 'Depending on the document you are on, you can be granted different permissions and be allowed different actions on the document.'
review:
    comment: ''
    date: '2018-10-15'
    status: ok
toc: true
labels:
    - permissions
tree_item_index: 400
---
{{! multiexcerpt name='permissions'}}
{{{multiexcerpt 'permissions-introduction' page='managing-permissions'}}}

## Permissions Overview

<div class="table-scroll">
<table class="hover">
<tbody>
<tr><th colspan="1">Permission</th>
<th colspan="1">Actions in Workspaces</th>
<th colspan="1">Actions in Sections</th>
</tr>
<tr>
<td colspan="1">Read</td>
<td colspan="1">
<ul>
<li>Consult content</li>
<li>Comment documents</li>
<li>Tag documents</li>
<li>Collect content</li>
<li>Follow content</li>
</ul>
</td>
<td colspan="1">
<ul>
<li>Consult content</li>
<li>Comment documents</li>
<li>Tag documents</li>
<li>Follow content</li>
</ul>
</td>
</tr>
<tr>
<td colspan="1">ReadWrite</td>
<td colspan="1">
<ul>
<li>Create documents</li>
<li>Edit documents</li>
<li>Add / remove relations</li>
<li>Start a workflow</li>
<li>Delete documents</li>
<li>+ Read actions</li>
</ul>
</td>
<td colspan="1">
<ul>
<li>Create sections</li>
<li>Unpublish documents</li>
<li>Delete sub-sections</li>
<li>+ Read actions</li>
</ul>
</td>
</tr>
<tr>
<td colspan="1">Manage everything</td>
<td colspan="1">
<ul>
<li>Manage permissions</li>
<li>Set alerts to other users</li>
<li>Apply a preset look on documents</li>
<li>Manage deleted documents</li>
<li>Define publication targets</li>
<li>+ Edit actions</li>
<li>+ Read actions</li>
</ul>
</td>
<td colspan="1">
<ul>
<li>Manage permissions</li>
<li>Set alerts to other users</li>
<li>Apply a preset look on documents</li>
<li>Manage deleted documents</li>
<li>+ Edit actions</li>
<li>+ Read actions</li>
</ul>
</td>
</tr>
<tr>
<td colspan="1">Can ask for publishing</td>
<td colspan="1">&nbsp;</td>
<td colspan="1">Submit documents for publishing</td>
</tr>
</tbody>
</table>
</div>

## Granting Permissions to the Application Users and Groups

{{{multiexcerpt 'grant-permissions' page='managing-permissions'}}}

![]({{file name='add_permission_popup_web-ui.png'}} ?w=350,border=true)

## Granting Permissions to External Users (Instant Share)
Granting permissions via Instant Share makes it possible to share content with external users who do not have an ID/password access to the Nuxeo Platform. <br>
A Nuxeo Platform user can give permissions to external users on a workspace, folder, document, etc. Therefore, external users receive an email with a link to access restricted features.
When users click the link and access the content that was shared with them, they can act on it depending on the [permissions]({{page space='userdoc' page='permissions'}}#permissions-overview) set for them.

{{#> callout type='note' }}
External users can also access the **Search** menu, which can be useful when navigating through lots of documents in a whole workspace for example.
{{/callout}}

**To grant permissions to external users via Instant Share:**

1. In Nuxeo Platform, open the **Browse > Domain** menu.
1. Open the workspace, folder or document you want to share.
1. Open the "Permissions" tab.
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/USERDOC/Functional Overview.1544549838807/Organizing Content/Managing Permissions - Permissions tab.png
    name: Managing Permissions - Permissions tab.png
    1.1.3#screenshot#up_to_date
--}}
![Managing Permissions - Permissions tab.png](nx_asset://dacb5f5f-de69-406e-a93a-073f7a10c193 ?w=650,border=true)
1. From the "Permissions assigned to external users" area, click on the **New** button. 
{{#> callout type='note' }}
Permissions already set to external users display in this area.
{{/callout}}

1. Fill in the following information:
  - **Email** of the external user (directly type it over the example)
  - **Right** granted
  - **From/To**: start and end dates of the granting
  - **Notification** attached to the email (_optional_)
{{{multiexcerpt 'grant-permissions-external-users' page='managing-permissions'}}}
![]({{file name='permissions_external_share_popup_web-ui.png'}} ?w=350,border=true)
{{{multiexcerpt 'grant-permissions-external-users-notes' page='managing-permissions'}}}
1. Click on the:
  - **Cancel** icon to cancel the granting of the access
  - **Create** icon to grant access to the external user
  - **Create and add another** icon to grant access to the user and directly re-open the popup for granting access to another user

When created, the granted access is saved and displays in the "Permissions assigned to external users" area. The external user you granted permissions to receives an email with a link to access the desired type of content. 

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/USERDOC/Functional Overview.1544549838807/Organizing Content/Managing Permissions - Permission granted.png
    name: Managing Permissions - Permission granted.png
    1.1.3#screenshot#up_to_date
--}}
![Managing Permissions - Permission granted.png](nx_asset://2e4970c9-a1e0-45f4-aa1c-991da7713ba0 ?w=650,border=true)

At this stage, you can click on the: 
+ **Modify** icon to display the "Update permission" popup and update the needed information 
+ **Send again** icon to send the permission again to the external user 
+ **Delete** icon to remove the already recorded permission of the external user

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/USERDOC/Functional Overview.1544549838807/Organizing Content/Managing Permissions - Actions.png
    name: Managing Permissions - Actions.png
    1.1.3#screenshot#up_to_date
--}}
![Managing Permissions - Actions.png](nx_asset://f95b8d04-3786-46fe-90b5-17a82aea105b ?w=650,border=true)

**To access the Nuxeo Platform as an external user:**

1. Open your mailbox. <br>
There you can find an email sent by a Nuxeo user granting you to access the type of content he gave you permission on.

1. Click on the hyperlink to access the platform and the content.  <br>
At this stage, your web browser opens on the Nuxeo Platform and directly places you on the content you have permission on. Depending on the set [permissions]({{page space='userdoc' page='permissions'}}#permissions-overview), you can now view and/or act on the content and use the **Search** menu to navigate through the documents you have access to.

{{#> callout type='note' }}
You do not benefit from the **Home** menu and its features (dashboard, alerts, users/groups search, etc.).
{{/callout}}

## Editing Permissions

To edit a permission click on ![]({{file name='edit-icon_web-ui.png' page='icons-index'}}) next to it, from there you can modify the permission and/or the date frame.

## Deleting Permissions

To delete a permission click on ![]({{file name='delete_web-ui.png' page='icons-index'}}) next to the permission you want to delete, click **Ok** on the confirmation popup.

![]({{file name='delete_permission_popup_web-ui.png'}} ?w=350,border=true)

## Blocking Rights Inheritance

The rights that are granted or denied in a space are applied to the space's content, including its sub-spaces. You thus have the same rights in the sub-spaces as in the parent space. That is called rights inheritance.

You can block this inheritance. It enables you to block the access of a sub-workspace to the workspace's users, for instance, or to deeply modify the access rights in the sub-workspace.

**To block rights inheritance:**
1. Click on the **Permissions** tab of the space of which you want to the access rights. The Access Rights sub-tab is displayed.
1. Click on the **Block** button located under the **PERMISSIONS INHERITED FROM UPPER LEVELS** table.

    Now that only local permissions are applied, any change made on parent document won't affect the access conditions to this document. You and the administrators will be added to local permissions.

1. You can now grant access rights to specific users.

{{! /multiexcerpt}}

* * *

<div class="row" data-equalizer data-equalize-on="medium">
<div class="column medium-6">
{{#> panel heading='Want to add your own access rights?'}}

- [Add a new Permission in the UI]({{page space='studio' page='add-a-new-permission-in-the-ui'}})
- [How to Grant the Edit Permission without the Remove Permission]({{page space='nxdoc' page='how-to-grant-the-edit-permission-without-the-remove-permission'}})

{{/panel}}
</div>
<div class="column medium-6">

&nbsp;

</div>
</div>
