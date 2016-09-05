---
title: Nuxeo Platform User Registration
labels:
    - nuxeo-user-registration
toc: true
confluence:
    ajs-parent-page-id: '17334336'
    ajs-parent-page-title: Additional Modules
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Nuxeo+Platform+User+Registration
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/Nuxeo+Platform+User+Registration'
    page_id: '17795190'
    shortlink: dogPAQ
    shortlink_source: 'https://doc.nuxeo.com/x/dogPAQ'
    source_link: /display/NXDOC58/Nuxeo+Platform+User+Registration
history:
    - 
        author: Solen Guitter
        date: '2016-09-02 07:44'
        message: ''
        version: '5'
    - 
        author: Solen Guitter
        date: '2014-01-29 16:43'
        message: ''
        version: '4'
    - 
        author: Solen Guitter
        date: '2014-01-29 16:43'
        message: ''
        version: '3'
    - 
        author: Solen Guitter
        date: '2013-12-24 11:27'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2013-12-24 11:27'
        message: ''
        version: '1'

---
<div class="row"><div class="column medium-8">

{{{excerpt 'USERDOC58:Nuxeo Platform User Registration'}}}

## Installation

The Nuxeo Platform User Registration package requires no specific installation steps. It can be installed like any other package [from the Marketplace or from the Admin Center]({{page space='admindoc58' page='installing-a-new-package-on-your-instance'}}).

After the package has been installed, a new User Registration tab is available in the Admin Center.

![]({{file name='user-registration-admin-center-tab.png'}} ?w=650,border=true)

</div><div class="column medium-4">{{#> panel heading='In this section'}}

{{/panel}}</div></div>

Users with Manage rights on workspaces and section have two new subtabs in the Manage tab:

*   User invitation
*   Bulk invitation

![]({{file name='nuxeo-platform-user-registration-CAP.png'}} ?w=650,h=227,border=true)

## Configuration

### Setting Up Email Sending

The Nuxeo Platform User Registration addon sends email to the invited user with his credentials. So your Nuxeo server must be able to reach an e-mail server. This is the same configuration that the one required for the email alerts to work. See [how to enable e-mail alerts]({{page space='admindoc58' page='recommended-configurations#setup-mail'}}).

### Global Configuration

The administrators can set up some configuration directly from the **Admin Center** > **User registration** > **Configuration** tab.

Possible configuration options are:

<table><tbody><tr><th colspan="1">Field</th><th colspan="1">Description</th></tr><tr><td colspan="1">Allow new user creation</td><td colspan="1">Enables users to invite user that don't have an account on the Platform. A new user account is then created. The new user is not included in any group by default.</td></tr><tr><td colspan="1">Force rights assignment</td><td colspan="1">This option is useful when user is manually created or comes from another system.</td></tr><tr><td colspan="1">Direct validation if user exists</td><td colspan="1">If a user invites a user that has already been invited to another space and so who already has a account on the Platform, then the administrators don't have to approve the invitation again. It is directly approved by the system.</td></tr><tr><td colspan="1">Local registration tab</td><td colspan="1">Displays a User registration requests subtab in the local Manage tab of a space, that displays the invitations that were done from the current space and their status.</td></tr></tbody></table>