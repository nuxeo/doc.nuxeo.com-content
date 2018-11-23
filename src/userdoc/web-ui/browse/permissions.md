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
tree_item_index: 1000

---
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

For more information on Permissions, see their [definitions](http://explorer.nuxeo.com/nuxeo/site/distribution/Nuxeo%20Platform-10.2/viewExtensionPoint/org.nuxeo.ecm.core.security.SecurityService--permissions).
## Managing Permissions on Content

### Granting Permissions to the Application Users and Groups

{{{multiexcerpt 'grant-permissions' page='managing-permissions'}}}

![]({{file name='add_permission_popup_web-ui.png'}} ?w=350,border=true)

### Granting Permissions to External Users (Instant Share)

{{{multiexcerpt 'grant-permissions-external-users' page='managing-permissions'}}}

![]({{file name='permissions_external_share_popup_web-ui.png'}} ?w=350,border=true)

{{{multiexcerpt 'grant-permissions-external-users-notes' page='managing-permissions'}}}

### Editing Permissions

To edit a permission click on ![]({{file name='edit-icon_web-ui.png' page='icons-index'}}) next to it, from there you can modify the permission and/or the date frame.

### Deleting Permissions

To delete a permission click on ![]({{file name='delete_web-ui.png' page='icons-index'}}) next to the permission you want to delete, click **Ok** on the confirmation popup.

![]({{file name='delete_permission_popup_web-ui.png'}} ?w=350,border=true)

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
