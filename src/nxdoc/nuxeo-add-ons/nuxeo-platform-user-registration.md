---
title: Nuxeo Platform User Registration
review:
    comment: ''
    date: '2018-08-27'
    status: ok
labels:
    - lts2016-ok
    - user-registration
    - fdavid
    - user-registration-component
    - lts2017-ok
    - jsf-ui
toc: true
confluence:
    ajs-parent-page-id: '16089349'
    ajs-parent-page-title: Nuxeo Add-Ons
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Nuxeo+Platform+User+Registration
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Nuxeo+Platform+User+Registration'
    page_id: '18450090'
    shortlink: qoYZAQ
    shortlink_source: 'https://doc.nuxeo.com/x/qoYZAQ'
    source_link: /display/NXDOC/Nuxeo+Platform+User+Registration
tree_item_index: 2400
history:
    -
        author: Manon Lumeau
        date: '2016-06-09 12:17'
        message: ''
        version: '18'
    -
        author: Manon Lumeau
        date: '2016-05-13 15:02'
        message: ''
        version: '17'
    -
        author: Manon Lumeau
        date: '2016-05-13 14:31'
        message: ''
        version: '16'
    -
        author: Manon Lumeau
        date: '2016-05-13 10:18'
        message: ''
        version: '15'
    -
        author: Manon Lumeau
        date: '2016-05-12 16:24'
        message: ''
        version: '14'
    -
        author: Manon Lumeau
        date: '2016-04-29 15:38'
        message: ''
        version: '13'
    -
        author: Alain Escaffre
        date: '2015-09-22 00:45'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2014-12-12 15:36'
        message: ''
        version: '11'
    -
        author: Solen Guitter
        date: '2014-12-12 10:54'
        message: formatting
        version: '10'
    -
        author: Maxime Hilaire
        date: '2014-12-11 21:11'
        message: ''
        version: '9'
    -
        author: Maxime Hilaire
        date: '2014-12-11 21:03'
        message: ''
        version: '8'
    -
        author: Maxime Hilaire
        date: '2014-12-11 21:01'
        message: ''
        version: '7'
    -
        author: Maxime Hilaire
        date: '2014-12-11 20:57'
        message: ''
        version: '6'
    -
        author: Maxime Hilaire
        date: '2014-12-11 20:56'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2014-12-11 14:54'
        message: Merging all docs about Nuxeo Platform User Registration
        version: '4'
    -
        author: Maxime Hilaire
        date: '2014-12-10 23:40'
        message: ''
        version: '3'
    -
        author: Maxime Hilaire
        date: '2014-12-10 23:39'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2014-01-29 15:58'
        message: ''
        version: '1'

---
{{{multiexcerpt 'JSF-UI-required' page='Generic Multi-Excerpts'}}}

{{! excerpt}}
The [Nuxeo Platform User Registration add-on](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-platform-user-registration) enables users to invite external users to access a specific space of the Platform or a limited set of spaces. The invitations must be approved by an administrator of the Platform.
{{! /excerpt}}

## Installation

{{{multiexcerpt 'mp-installation-easy' page='Generic Multi-Excerpts'}}}

When you have installed the package, as an admin, you have three new sub tabs under the **Manage** tab of any folderish document:

*   User Invitation
*   Bulk Invitation
*   User Registration Requests

![]({{file name='manage-tab-user-registration.png'}} ?w=450,border=true)

You also have a new **User Registration** tab in the **Admin** tab.

![]({{file name='user_registration_admin_tab.png'}} ?w=600,border=true)

## Configuration

### Setting Up Email Sending

The Nuxeo Platform User Registration add-on sends email to the invited user with his credentials. So your Nuxeo server must be able to reach an e-mail server. This is the same configuration that the one required for the email alerts to work. See [how to enable e-mail alerts]({{page page='set-up-email-notification'}}).

### Global Configuration

The administrators can set up some configuration directly from the **Admin** > **User registration** > **Configuration** tab.

Possible configuration options are:

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th colspan="1">Field</th>
<th colspan="1">Description</th>
</tr>
<tr>
<td colspan="1">Allow New User Creation</td>
<td colspan="1">Enables users to invite user that don't have an account on the Platform. A new user account is then created. The new user is not included in any group by default.</td>
</tr>
<tr>
<td colspan="1">Force Rights Assignment</td>
<td colspan="1">This option is useful when user is manually created at a later time or comes from a computed group.</td>
</tr>
<tr>
<td colspan="1">Direct Validation If User Exists</td><td colspan="1">If a user invites a user that has already been invited to another space and so who already has a account on the Platform, then the administrators don't have to approve the invitation again. It is directly approved by the system.</td>
</tr>
<tr>
<td colspan="1">Local Registration Tab</td>
<td colspan="1">Displays a User registration requests subtab in the local **Manage** tab of a space, that displays the invitations that were done from the current space and their status.</td>
</tr>
</tbody>
</table>
</div>

## Functional Overview

The user registration process takes three steps:

1.  A user with Manage everything right [invite](#inviting-users) one or several persons to access a workspace (or another type of space).
2.  The administrators of the application [review this invitation](#managing-pending-invitations) and approve or reject it.
3.  If the invitation has been approved by the administrators, an email is sent the invited user(s) so he validates his invitation.
    If the invitation has been rejected, it is canceled.

### {{> anchor 'inviting-users'}}Inviting Users

#### Inviting a Single User to the Platform

Users with Manage rights on workspaces or section can invite users to the Platform.

To invite a user:

1.  Click on the **User invitation** sub tab.
2.  Fill in the form (see below for details).
    ![]({{file name='manage-tab-user-registration.png'}} ?w=450,border=true)
3.  Click on the **Invite user** button.
    The administrators now have to approve the invitation so the invited user receives an invitation by email.

**Invitation form details**

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th colspan="1">Field</th>
<th colspan="1">Description</th>
</tr>
<tr>
<td colspan="1">Email</td>
<td colspan="1">The email address to which the invitation will be sent.</td>
</tr>
<tr>
<td colspan="1">User name</td>
<td colspan="1">The username the invited user will use to log in.</td>
</tr>
<tr>
<td colspan="1">First name</td>
<td colspan="1">The invited user's first name.</td>
</tr>
<tr>
<td colspan="1">Last name</td>
<td colspan="1">The invited user's last name.</td>
</tr>
<tr>
<td colspan="1">Permission</td>
<td colspan="1">The access right you want to give the invited user on the space.</td>
</tr>
<tr>
<td colspan="1">Time Frame</td>
<td colspan="1">Period during which the access right given to the user will be valid.</td>
</tr>
<tr>
<td colspan="1">Groups</td>
<td colspan="1">The group(s) in which the user will be a member.</td>
</tr>
<tr>
<td colspan="1">Comment</td>
<td colspan="1">A comment for the invited user to explain why he's invited, for instance. This comment will be in the invitation email.</td>
</tr>
<tr>
<td colspan="1">Send me a copy</td>
<td colspan="1">Your email address will be in the Cc recipients of the invitation email.</td>
</tr>
</tbody>
</table>
</div>

#### Inviting Several Users

It is possible to invite several users at the same time. You just need to provide their email addresses and indicate what permission they will have on the space. After the administrator has approved the invitations, the invited users receive an email to validate their invitation.

To invite several users at the same time to a space:

1.  Click on the **Bulk Invitation** sub tab.
2.  Fill in the form (see below).
3.  Click on the **Invite List** button.
    The administrators now have to approve the invitations so the invited users receive an invitation by email.

**Bulk Invitation Form Details**

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">Fields</th><th colspan="1">Description</th></tr><tr><td colspan="1">List of Recipients</td><td colspan="1">The email addresses of the users you want to invite to the space. The email address will be their login. Use a comma (`,`) to separate the emails.</td></tr><tr><td colspan="1">Permission</td><td colspan="1">The access right you want to give the invited users on the space.</td></tr><tr><td colspan="1">Comment</td><td colspan="1">A comment for the invited user to explain why he's invited, for instance. This comment will be in the invitation emails.</td></tr><tr><td colspan="1">Send me a copy</td><td colspan="1">Your email address will be in the Cc recipients of the invitation emails.</td></tr></tbody></table></div>

&nbsp;

### {{> anchor 'managing-pending-invitations'}}Managing Pending Invitations

When users invite external people to access the Platform, a new user account is created for this new external user. This is why the invitation must be approved by an administrator before the invitation is actually sent.

Invitations can have different statuses:

*   Created: A local manager invited a user; administrator now have to approve or reject the invitation and the required user account creation.
*   Approved: An administrator has approved the invitation; the needed user account is created and an invitation email is sent to the user.
*   Rejected: An administrator has refused the invitation and the creation of the required new user account.
*   Accepted: The invited user has confirmed he received the invitation by clicking on the validation link in the invitation email.

#### Approving an Invitation

To approve an invitation:

1.  Click on the sub tab **User Registration Requests** of the space.
    You can also see all invitation requests from the **Admin** > **User Registration Requests** tab.
    ![]({{file name='review-user-invitation.png'}} ?w=600,border=true)
2.  Click on the **Approve**&nbsp;button next to the invitation.</br>
    Now that the invitation has the state Approved, you can:

    - Click on **Revive**: It will resend a new mail to the user to remember him he has been invited.
    - Click on **Delete**: It will cancel the creation of the account if the user hasn't already accepted the invitation by entering his password.
    - Click on **Validate**: It will finalize the invitation process.![]({{file name='accepted-user-registration.png'}} ?w=600,border=true)

#### Rejecting an Invitation

To reject an invitation:

1.  Click on the sub tab **User registration Requests** of the space.
    You can also see all invitation requests from the **Admin** > **User Registration** tab.
    ![]({{file name='review-user-invitation.png'}} ?w=600,border=true)
2.  Click on the **Reject** link of the invitation to validate.
    The invitation now has the state Rejected.

### Validating Your Invitation

When you have been invited to a workspace, a folder or any type of space in the Nuxeo Platform, you get an email with a link to validate your invitation.

1.  Click on that link to validate your invitation.
2.  Create your password by typing it.
    ![]({{file name='invitation-password-creation.png' space='userdoc' page='managing-users-and-groups'}} ?w=300,border=true,thumbnail=true)
3.  Log in to the Nuxeo Platform.

Once the invited user has validated the invitation by clicking on the invitation link and setting his password, the administrator can see the invitation in **Accepted** state.

## Technical Configuration Overview

The user registration contributes to the `nuxeo-invite` and `nuxeo-webengine-invite` modules.

### Default Configuration of the User Registration

```xml
<extension target="org.nuxeo.ecm.user.registration.UserRegistrationService"
             point="configuration">
    <configuration merge="true">
      <requestDocType>UserRegistration</requestDocType>
      <container>
        <docType>UserRegistrationContainer</docType>
        <parentPath>/management/</parentPath>
        <name>registrationRequests</name>
        <title>Registration Requests Container</title>
      </container>
		<userInfo>
          <schemaName>userinfo</schemaName>
          <usernameField>userinfo:login</usernameField>
          <passwordField>userinfo:password</passwordField>
          <emailField>userinfo:email</emailField>
          <firstnameField>userinfo:firstName</firstnameField>
          <lastnameField>userinfo:lastName</lastnameField>
          <groupsField>userinfo:groups</groupsField>
          <companyField>userinfo:company</companyField>
        </userInfo>
      <validationEmail>
        <title>You are invited to access Nuxeo</title>
        <template>skin/views/userRegistration/EmailInviteDocTemplate.ftl</template>
      </validationEmail>
      <reviveEmail>
        <title>You are invited to access Nuxeo</title>
        <template>skin/views/userRegistration/ReviveEmailInviteDocTemplate.ftl</template>
      </reviveEmail>
      <enterPasswordUrl>site/userRegistration/enterpassword/</enterPasswordUrl>
      <validationRelUrl>site/userRegistration/validate</validationRelUrl>
      <registrationUserFactory>org.nuxeo.ecm.user.registration.DefaultRegistrationUserFactory</registrationUserFactory>
    </configuration>
  </extension>
```

You can contribute to the default user registration configuration or add your new configuration by adding a specific&nbsp;`name` attribute in the&nbsp;`configuration` tag.&nbsp;

{{#> callout type='info' }}

The invitation UI action uses the `default_registration` name to get the configuration of the user registration. If you contribute a new configuration name you will have also to contribute new actions that will use this configuration.

{{/callout}}

<span style="line-height: 21.58px;">Each&nbsp;user invitation request is actually a document stored in a specific container. In the default configuration, requests are stored under</span> `/management` <span style="line-height: 21.58px;">.</span>

*   The container type is&nbsp;`UserRegistrationContainer`. The folder is created if it does not exist. It has the facet <span style="line-height: 21.58px;">`RegistrationConfiguration` to store&nbsp;</span> the configuration name of the request object.
*   The user registration request documents have the type&nbsp;`UserRegistration` that store all request metadata (username, email etc) thanks to the <span style="line-height: 21.58px;">`UserInvitation` facet.</span>

## How to Contribute a New "User Registration Request" Document Type

See the page [How to Contribute a New "User Registration Request" Document Type]({{page page='how-to-contribute-a-new-user-registration-request-document-type'}}).

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [Authentication and User Management]({{page page='authentication-and-user-management'}}) (developer documentation)
- [How to Contribute a New "User Registration Request" Document Type]({{page page='how-to-contribute-a-new-user-registration-request-document-type'}})
- [Managing Users and Groups]({{page space='userdoc' page='managing-users-and-groups'}}) (user documentation)
- [Setup Best Practices]({{page page='setup-best-practices'}}) (admin documentation)

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
