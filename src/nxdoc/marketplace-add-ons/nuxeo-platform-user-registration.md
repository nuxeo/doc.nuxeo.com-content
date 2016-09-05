---
title: Nuxeo Platform User Registration
labels:
    - user-registration
    - last-review-20141211
toc: true
confluence:
    ajs-parent-page-id: '22380668'
    ajs-parent-page-title: Marketplace Add-Ons
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: Nuxeo+Platform+User+Registration
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC60/Nuxeo+Platform+User+Registration'
    page_id: '22380721'
    shortlink: sYBVAQ
    shortlink_source: 'https://doc.nuxeo.com/x/sYBVAQ'
    source_link: /display/NXDOC60/Nuxeo+Platform+User+Registration
history:
    - 
        author: Solen Guitter
        date: '2015-04-15 11:49'
        message: ''
        version: '7'
    - 
        author: Maxime Hilaire
        date: '2014-12-12 16:41'
        message: ''
        version: '6'
    - 
        author: Solen Guitter
        date: '2014-12-12 16:27'
        message: Reverted from v. 3 (technical overview section only applies to FT)
        version: '5'
    - 
        author: Solen Guitter
        date: '2014-12-12 15:39'
        message: Add technical overview section
        version: '4'
    - 
        author: Maxime Hilaire
        date: '2014-12-11 21:27'
        message: ''
        version: '3'
    - 
        author: Solen Guitter
        date: '2014-12-11 15:03'
        message: >-
            Merging all docs about Nuxeo Platform User Registration and add
            Technical overview
        version: '2'
    - 
        author: Solen Guitter
        date: '2014-01-29 15:58'
        message: ''
        version: '1'

---
{{! excerpt}}

The [Nuxeo Platform User Registration add-on](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-platform-user-registration) enables users to invite external users to access a specific space of the Platform or a limited set of spaces. The invitations must be approved by an administrator of the Platform.

{{! /excerpt}}

## Installation

{{{multiexcerpt 'MP-installation-easy' page='Generic Multi-Excerpts'}}}

When you have installed the package, as an admin, you have three new sub tabs under the **Manage** tab of any folderish document:

*   User invitation
*   Bulk invitation
*   User registration requests

![]({{file name='manage-tab-user-registration.png'}} ?w=500,h=300,border=true)

You also have a new **User Registration** tab in the **Admin** tab.

![]({{file name='user_registration_admin_tab.png'}} ?w=600,border=true)

## Configuration

### Setting Up Email Sending

The Nuxeo Platform User Registration add-on sends email to the invited user with his credentials. So your Nuxeo server must be able to reach an e-mail server. This is the same configuration that the one required for the email alerts to work. See [how to enable e-mail alerts]({{page space='admindoc60' page='recommended-configurations#setup-mail'}}).

### Global Configuration

The administrators can set up some configuration directly from the **Admin** > **User registration** > **Configuration** tab.

Possible configuration options are:

<table><tbody><tr><th colspan="1">Field</th><th colspan="1">Description</th></tr><tr><td colspan="1">Allow new user creation</td><td colspan="1">Enables users to invite user that don't have an account on the Platform. A new user account is then created. The new user is not included in any group by default.</td></tr><tr><td colspan="1">Force rights assignment</td><td colspan="1">This option is useful when user is manually created at a later time or comes from a computed group.</td></tr><tr><td colspan="1">Direct validation if user exists</td><td colspan="1">If a user invites a user that has already been invited to another space and so who already has a account on the Platform, then the administrators don't have to approve the invitation again. It is directly approved by the system.</td></tr><tr><td colspan="1">Local registration tab</td><td colspan="1">Displays a User registration requests subtab in the local **Manage** tab of a space, that displays the invitations that were done from the current space and their status.</td></tr></tbody></table>

## Functional Overview

The user registration process takes three steps:

1.  A user with Manage everything right [invite](#inviting-users) one or several persons to access a workspace (or another type of space).
2.  The administrators of the application [review this invitation](#managing-pending-invitatio) and accept or reject it.
3.  If the invitation has been accepted by the administrators, an email is sent the invited user(s) so he validates his invitation.
    If the invitation has been rejected, it is canceled.

### {{> anchor 'inviting-users'}}Inviting Users

#### Inviting a Single User to the Platform

Users with Manage rights on workspaces or section can invite users to the Platform.

To invite a user:

1.  Click on the **User invitation** sub tab.
2.  Fill in the form (see below for details).
    ![]({{file name='manage-tab-user-registration.png'}} ?w=600,border=true)
3.  Click on the **Invite user** button.
    The administrators now have to approve the invitation so the invited user receives an invitation by email.

**Invitation form details**

<table><tbody><tr><th colspan="1">Field</th><th colspan="1">Description</th></tr><tr><td colspan="1">Email</td><td colspan="1">The email address to which the invitation will be sent.</td></tr><tr><td colspan="1">User name</td><td colspan="1">The username the invited user will use to log in.</td></tr><tr><td colspan="1">First name</td><td colspan="1">The invited user's first name.</td></tr><tr><td colspan="1">Last name</td><td colspan="1">The invited user's last name.</td></tr><tr><td colspan="1">Permission</td><td colspan="1">The access right you want to give the invited user on the space.</td></tr><tr><td colspan="1">Comment</td><td colspan="1">A comment for the invited user to explain why he's invited, for instance. This comment will be in the invitation email.</td></tr><tr><td colspan="1">Send me a copy</td><td colspan="1">Your email address will be in the Cc recipients of the invitation email.</td></tr></tbody></table>

#### Inviting Several Users

It is possible to invite several users at the same time. You just need to provide their email addresses and indicate what permission they will have on the space. After the administrator has approved the invitations, the invited users receive an email to validate their invitation.

To invite several users at the same time to a space:

1.  Click on the **Bulk invitation** sub tab.
2.  Fill in the form (see below).
3.  Click on the **Invite list** button.
    The administrators now have to approve the invitations so the invited users receive an invitation by email.

**Bulk invitation form details**

<table><tbody><tr><th colspan="1">Fields</th><th colspan="1">Description</th></tr><tr><td colspan="1">List of recipients</td><td colspan="1">The email addresses of the users you want to invite to the space. The email address will be their login. Use a comma (`,`) to separate the emails.</td></tr><tr><td colspan="1">Permission</td><td colspan="1">The access right you want to give the invited users on the space.</td></tr><tr><td colspan="1">Comment</td><td colspan="1">A comment for the invited user to explain why he's invited, for instance. This comment will be in the invitation emails.</td></tr><tr><td colspan="1">Send me a copy</td><td colspan="1">Your email address will be in the Cc recipients of the invitation emails.</td></tr></tbody></table>

&nbsp;

### {{> anchor 'managing-pending-invitations'}}Managing Pending Invitations

When users invite external people to access the Platform, a new user account is created for this new external user. This is why the invitation must be accepted by an administrator before the invitation is actually sent.

Invitations can have different statuses:

*   created: A local manager invited a user; administrator now have to approve or reject the invitation and the required user account creation.
*   accepted: An administrator has approved the invitation; the needed user account is created and an invitation email is sent to the user.
*   rejected: An administrator has refused the invitation and the creation of the required new user account.
*   validated: The invited user has confirmed he received the invitation by clicking on the validation link in the invitation email.

#### Accepting an Invitation

To accept an invitation:

1.  Click on the sub tab **User registration requests** of the space.
    You can also see all invitation requests from the **Admin** > **User Registration** tab.
    ![]({{file name='review-user-invitation.png'}} ?w=600,border=true)
2.  Click on the **Accept** link of the invitation to validate.
    The invitation now has the state Accepted. You can then:

    *   Click on revive.
        It will resend a new mail to the user to remember him he has been invited.
    *   Delete the invitation.
        It will cancel the creation of the account if the user has not already enter his password.
    *   Click on Validate.
        It will finalize the invitation process.![]({{file name='accepted-user-registration.png'}} ?w=600,border=true)
    The invitation email is sent to the user, who will need to validate his invitation by clicking a link in the email.

#### Rejecting an Invitation

To reject an invitation:

1.  Click on the sub tab **User registration requests** of the space.
    You can also see all invitation requests from the **Admin** > **User Registration** tab.
    ![]({{file name='review-user-invitation.png'}} ?w=600,border=true)
2.  Click on the **Reject** link of the invitation to validate.
    The invitation now has the state Rejected.

### Validating Your Invitation

When you have been invited to a workspace, a folder or any type of space in the Nuxeo Platform, you get an email with a link to validate your invitation.

1.  Click on that link to validate your invitation.
2.  Create your password by typing it.
    ![]({{file name='invitation-password-creation.png' space='userdoc60' page='managing-users-and-groups'}} ?w=300,border=true,thumbnail=true)
3.  Log in to the Nuxeo Platform.

## Technical Configuration Overview

The user registration contributes to the&nbsp;`nuxeo-invite`&nbsp;and&nbsp;`nuxeo-webengine-invite`&nbsp;modules.

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

You can contribute to the default user registration configuration or add your new configuration by adding a specific&nbsp;`name`&nbsp;attribute in the&nbsp;`configuration`&nbsp;tag.&nbsp;

{{#> callout type='info' }}

The invitation UI action uses the `default_registration` name to get the configuration of the user registration. If you contribute a new configuration name you will have also to contribute new actions that will use this configuration.

{{/callout}}

Each&nbsp;user invitation request is actually a document stored in a specific container. In the default configuration, requests are stored under&nbsp;`/management`.

*   The container type is&nbsp;`UserRegistrationContainer`.&nbsp;The folder is created if it does not exist. It has the facet&nbsp;`RegistrationConfiguration`&nbsp;to store&nbsp;the configuration name of the request object.
*   The user registration request documents have the type&nbsp;`UserRegistration`&nbsp;that store all request metadata (username, email etc) thanks to the&nbsp;`UserInvitation`&nbsp;facet.

* * *