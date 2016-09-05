---
title: Managing the Workspace Users
toc: true
confluence:
    ajs-parent-page-id: '21299518'
    ajs-parent-page-title: Managing a Social Workspace
    ajs-space-key: USERDOC60
    ajs-space-name: Nuxeo Platform User Documentation — 6.0
    canonical: Managing+the+Workspace+Users
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC60/Managing+the+Workspace+Users'
    page_id: '21299525'
    shortlink: RQFFAQ
    shortlink_source: 'https://doc.nuxeo.com/x/RQFFAQ'
    source_link: /display/USERDOC60/Managing+the+Workspace+Users
history:
    - 
        author: Solen Guitter
        date: '2016-09-01 14:04'
        message: ''
        version: '19'
    - 
        author: Solen Guitter
        date: '2016-01-18 13:53'
        message: ''
        version: '18'
    - 
        author: Manon Lumeau
        date: '2014-12-05 18:18'
        message: ''
        version: '17'
    - 
        author: Solen Guitter
        date: '2014-02-24 10:41'
        message: ''
        version: '16'
    - 
        author: Solen Guitter
        date: '2014-02-14 16:53'
        message: ''
        version: '15'
    - 
        author: Solen Guitter
        date: '2013-11-04 18:14'
        message: ''
        version: '14'
    - 
        author: Solen Guitter
        date: '2013-11-04 18:13'
        message: ''
        version: '13'
    - 
        author: Solen Guitter
        date: '2013-10-22 18:29'
        message: ''
        version: '12'
    - 
        author: Solen Guitter
        date: '2013-01-23 12:03'
        message: ''
        version: '11'
    - 
        author: Solen Guitter
        date: '2012-10-11 10:11'
        message: ''
        version: '10'
    - 
        author: Solen Guitter
        date: '2012-07-25 14:13'
        message: Migrated to Confluence 4.0
        version: '9'
    - 
        author: Solen Guitter
        date: '2012-07-25 14:13'
        message: Fixed links
        version: '8'
    - 
        author: Solen Guitter
        date: '2011-12-21 12:16'
        message: Added screenshots
        version: '7'
    - 
        author: Solen Guitter
        date: '2011-11-21 16:50'
        message: ''
        version: '6'
    - 
        author: Solen Guitter
        date: '2011-11-17 22:59'
        message: Added join request management steps
        version: '5'
    - 
        author: Solen Guitter
        date: '2011-11-17 21:26'
        message: Added members using email addresses and groups
        version: '4'
    - 
        author: Solen Guitter
        date: '2011-11-17 18:49'
        message: Added steps to add members individually
        version: '3'
    - 
        author: Solen Guitter
        date: '2011-11-17 17:46'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2011-11-16 12:10'
        message: ''
        version: '1'

---
{{{multiexcerpt 'nuxeo_social_collaboration_deprecated' page='Nuxeo Social Collaboration'}}}

Social workspaces can be either private or public.

On public workspaces, users can ask to join the workspace to have access to more content and share articles on the workspace. The workspace administrators must then validate these join requests.

On private workspace, users have no access to the workspace unless they are a member. As a consequence, they cannot ask to join it. Only the space administrators can add new members to the workspace.

The members management actions all take place in the Document Management view.

## Adding Members to a Social Workspace

Administrators can add new members to a workspace on both public and private workspaces, at anytime.

There are two ways to add new members to a social workspace:

*   [you can add users one by one](#adding-members-individually),
*   [you can import several users using their email address](#adding-several-users-using-email-addresses).

### Adding Members Individually

**To add new members one by one:**

1.  On the Document Management view of the social workspace, click on the **Manage** tab.
    The **Membership Management** subtab is displayed.
2.  In the Members group, type the name of the user you want to add.
    The names of the users corresponding to the typed characters are automatically displayed as you type.
    ![]({{file name='member s management.png'}} ?w=650,border=true)
3.  Click on the user you want to make a workspace member.
4.  Click on the **Save** button.
    The user now sees the workspace displayed in his gadget **My social workspaces** and can add and edit content in the social workspace.
    The other members of the workspace receive an email, informing them that new members have joined the workspace.

### Adding Several Users Using Email Addresses

**To add users using their email address:**

1.  On the Document Management view of the social workspace, click on the **Manage** tab.
    The **Membership Management** subtab is displayed.
2.  Click on the **Bulk invitation** tab.
3.  Type the email addresses of the users you want to add to the workspace.
    ![]({{file name='bulk import.png'}} ?w=650,border=true)
4.  Select the permission you want to give to these users: member or administrator of the social workspace.

5.  Optionally, type a comment that will be in the email sent to new members.

6.  Check the box **Do not send email notifications for members creation** if you don't want user to be notified by email that you added them on the workspace.

7.  Click on the **Import** button.
    The users are added to the members of the workspace in the **Membership management** tab. The users now see the workspace displayed in their gadget **My social workspaces** and can add and edit content in the social workspace.
    The other members of the workspace receive an email, informing them that new members have joined the workspace.

## Managing Join Requests

On public workspaces, user can ask to join the workspace. If the social workspace has an approval subscription workflow enabled, the administrators of the workspace must approve the request so users actually become members of the workspace.

{{#> callout type='tip' }}

The public dashboard of the workspace must display the **Join Us** gadget to enable users to ask to join the workspace.

![]({{file name='join-us-gadget.png'}} ?w=350,border=true)

{{/callout}}

**To process subscription requests:**

1.  On the Document Management view of the social workspace, click on the **Manage** tab.
    The **Membership Management** subtab is displayed.
2.  Click on the **User registration requests**.
    The list of pending requests are displayed.
    ![]({{file name='pending subscription request.png'}} ?w=650,h=218,border=true)
3.  Check the box corresponding to the users whose request you want to process.
4.  Click on the **Accept** or **Reject** link.
    The users are added to the members of the workspace in the **Membership management** tab. The users now see the workspace displayed in their gadget **My social workspaces** and can add and edit content in the social workspace.
    The other members of the workspace receive an email, informing them that new members have joined the workspace.

&nbsp;