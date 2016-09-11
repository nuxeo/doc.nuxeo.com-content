---
title: Nuxeo Platform User Registration
review:
    comment: ''
    date: ''
    status: ok
labels:
    - nuxeo-user-registration
toc: true
confluence:
    ajs-parent-page-id: '16092550'
    ajs-parent-page-title: Marketplace Add-Ons
    ajs-space-key: USERDOC58
    ajs-space-name: Nuxeo Platform User Documentation - 5.8
    canonical: Nuxeo+Platform+User+Registration
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC58/Nuxeo+Platform+User+Registration'
    page_id: '17793910'
    shortlink: doMPAQ
    shortlink_source: 'https://doc.nuxeo.com/x/doMPAQ'
    source_link: /display/USERDOC58/Nuxeo+Platform+User+Registration
history:
    - 
        author: Solen Guitter
        date: '2016-09-02 08:14'
        message: ''
        version: '5'
    - 
        author: Solen Guitter
        date: '2015-08-28 09:11'
        message: ''
        version: '4'
    - 
        author: Solen Guitter
        date: '2014-01-29 16:44'
        message: ''
        version: '3'
    - 
        author: Solen Guitter
        date: '2014-01-29 16:41'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2013-11-22 14:30'
        message: ''
        version: '1'

---
<div class="row"><div class="column medium-8">

&nbsp;

{{! excerpt}}

The [Nuxeo Platform User Registration addon](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-platform-user-registration) enables users to invite external users to access a specific space of the Platform or a limited set of spaces. The invitations must be approved by an administrator of the Platform.

{{! /excerpt}} {{#> callout type='info' }}

The user registration feature is included in the [Social Collaboration module]({{page page='social-collaboration'}}).

{{/callout}}

The user registration process takes three steps:

1.  A user with Manage everything right [invite](#inviting-users) one or several persons to access a workspace (or another type of space).
2.  The administrators of the application [review this invitation](#managing-pending-invitatio) and accept or reject it.
3.  If the invitation has been accepted by the administrators, an email is sent the invited user(s) so he validates his invitation.
    If the invitation has been rejected, it is canceled.

</div><div class="column medium-4">{{#> panel heading='On this page'}}

{{/panel}}</div></div>

## {{> anchor 'inviting-users'}}Inviting Users

### Inviting a Single User to the Platform

Users with Manage rights on workspaces or section can invite users to the Platform.

To invite a user:

1.  On the space, click on the **Manage** tab.
    The **Access Rights** subtab is displayed.
2.  Click on the **User invitation** tab.
3.  Fill in the form (see below for details).
    ![]({{file name='user-registration-user-invitation-tab.png'}} ?w=550,border=true)
4.  Click on the **Invite user** button.
    The administrators now have to approve the invitation so the invited user receives an invitation by email.

**Invitation form details**

<table><tbody><tr><th colspan="1">Field</th><th colspan="1">Description</th></tr><tr><td colspan="1">Email</td><td colspan="1">The email address to which the invitation will be sent.</td></tr><tr><td colspan="1">User name</td><td colspan="1">The username the invited user will use to log in.</td></tr><tr><td colspan="1">First name</td><td colspan="1">The invited user's first name.</td></tr><tr><td colspan="1">Last name</td><td colspan="1">The invited user's last name.</td></tr><tr><td colspan="1">Permission</td><td colspan="1">The access right you want to give the invited user on the space.</td></tr><tr><td colspan="1">Comment</td><td colspan="1">A comment for the invited user to explain why he's invited, for instance. This comment will be in the invitation email.</td></tr><tr><td colspan="1">Send me a copy</td><td colspan="1">Your email address will be in the Cc recipients of the invitation email.</td></tr></tbody></table>

### Inviting Several Users

It is possible to invite several users at the same time. You just need to provide their email addresses and indicate what permission they will have on the space. After the administrator has approved the invitations, the invited users receive an email to validate their invitation and which contains their credentials to the Platform. Their email address is their login and the Platform automatically generates a password.

To invite several users at the same time to a space:

1.  On the space, click on the **Manage** tab.
    The **Access Rights** subtab is displayed.
2.  Click on the **Bulk invitation** tab.
3.  Fill in the form (see below).
    ![]({{file name='user-registration-bulk-invitation-tab.png'}} ?w=550,border=true)
4.  Click on the **Invite list** button.
    The administrators now have to approve the invitations so the invited users receive an invitation by email.

**Bulk invitation form details**

<table><tbody><tr><th colspan="1">Fields</th><th colspan="1">Description</th></tr><tr><td colspan="1">List of recipients</td><td colspan="1">

The email addresses of the users you want to invite to the space. The email address will be their login.

{{#> callout type='note' }}

Be careful to use `;` to separate the different email addresses, it is the only accepted separator. If you use another separator (like the `,` for instance, only one invitation will be created.

{{/callout}}</td></tr><tr><td colspan="1">Permission</td><td colspan="1">The access right you want to give the invited users on the space.</td></tr><tr><td colspan="1">Comment</td><td colspan="1">A comment for the invited user to explain why he's invited, for instance. This comment will be in the invitation emails.</td></tr><tr><td colspan="1">Send me a copy</td><td colspan="1">Your email address will be in the Cc recipients of the invitation emails.</td></tr></tbody></table>

&nbsp;

## {{> anchor 'managing-pending-invitations'}}Managing Pending Invitations

When users invite external people to access the Platform, a new user account is created for this new external user. This is why the invitation must be accepted by an administrator before the invitation is actually sent.

Invitations can have different statuses:

*   created: a local manager invited a user; administrator now have to approve or reject the invitation and the required user account creation;
*   accepted: an administrator has approved the invitation; the needed user account is created and an invitation email is sent to the user;
*   rejected: an administrator has refused the invitation and the creation of the required new user account.
*   validated: the invited user has confirmed he received the invitation by clicking on the validation link in the invitation email.

### Accepting an Invitation

To accept an invitation:

1.  In the **Admin Center**, click on the **User Registration** tab.
    The **User registration requests** tab is displayed. All invitations are displayed.
    ![]({{file name='user-registration-requests-admin-tab.png'}} ?w=650,border=true)
2.  Click on the **Accept** link of the invitation to validate.
    The invitation now has the state Accepted.
    The invitation email is sent to the user, who will need to validate his invitation by clicking a link in the email.

### Rejecting an Invitation

To reject an invitation:

1.  In the **Admin Center**, click on the **User Registration** tab.
    The **User registration requests** tab is displayed. All invitations are displayed.
    ![]({{file name='user-registration-requests-admin-tab.png'}} ?w=650,border=true)
2.  Click on the **Reject** link of the invitation to validate.
    The invitation now has the state Rejected.

## Validating Your Invitation

When you have been invited to a workspace, a folder or any type of space in the Nuxeo Platform, you get an email with a link to validate your invitation.

Click on that link to validate your invitation.

The login page is displayed. You can then log in with the credentials in the email.

{{#> callout type='note' }}

You should [update your password]({{page page='managing-users-and-groups#edit-password'}}) in the Nuxeo Platform after logging in the first time.

{{/callout}}