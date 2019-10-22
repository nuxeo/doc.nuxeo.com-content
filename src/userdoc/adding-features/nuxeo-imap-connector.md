---
title: Nuxeo IMAP Connector
review:
    comment: ''
    date: '2018-04-04'
    status: ok
labels:
    - excerpt
    - lts2017-ok
toc: true
confluence:
    ajs-parent-page-id: '11043055'
    ajs-parent-page-title: Adding Features
    ajs-space-key: USERDOC
    ajs-space-name: Nuxeo Platform User Documentation
    canonical: Nuxeo+IMAP+Connector
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC/Nuxeo+IMAP+Connector'
    page_id: '2392392'
    shortlink: SIEk
    shortlink_source: 'https://doc.nuxeo.com/x/SIEk'
    source_link: /display/USERDOC/Nuxeo+IMAP+Connector
tree_item_index: 800
history:
    -
        author: Solen Guitter
        date: '2015-12-08 14:36'
        message: ink updat
        version: '32'
    -
        author: Manon Lumeau
        date: '2015-10-07 10:04'
        message: ''
        version: '31'
    -
        author: Manon Lumeau
        date: '2015-10-07 10:03'
        message: ''
        version: '30'
    -
        author: Manon Lumeau
        date: '2015-10-07 10:02'
        message: ''
        version: '29'
    -
        author: Solen Guitter
        date: '2015-09-14 19:38'
        message: ''
        version: '28'
    -
        author: Solen Guitter
        date: '2015-08-31 12:43'
        message: 'User doc reorganization: fix link to relations'
        version: '27'
    -
        author: Solen Guitter
        date: '2015-08-27 13:43'
        message: 'User doc reorganization: fix link to alerts and comments'
        version: '26'
    -
        author: Solen Guitter
        date: '2015-08-27 13:43'
        message: 'User doc reorganization: fix link to alerts'
        version: '25'
    -
        author: Solen Guitter
        date: '2014-11-06 18:22'
        message: ''
        version: '24'
    -
        author: Solen Guitter
        date: '2014-06-11 15:18'
        message: ''
        version: '23'
    -
        author: Solen Guitter
        date: '2014-02-24 14:20'
        message: ''
        version: '22'
    -
        author: Solen Guitter
        date: '2013-10-22 18:19'
        message: ''
        version: '21'
    -
        author: Solen Guitter
        date: '2013-09-30 17:12'
        message: ''
        version: '20'
    -
        author: Solen Guitter
        date: '2012-07-24 11:42'
        message: Migrated to Confluence 4.0
        version: '19'
    -
        author: Solen Guitter
        date: '2012-07-24 11:42'
        message: Added related pages
        version: '18'
    -
        author: Solen Guitter
        date: '2012-07-24 11:38'
        message: Added related pages
        version: '17'
    -
        author: Solen Guitter
        date: '2012-07-03 17:46'
        message: Added related pages
        version: '16'
    -
        author: Solen Guitter
        date: '2012-05-30 17:01'
        message: Added TOC
        version: '15'
    -
        author: Solen Guitter
        date: '2011-11-24 10:44'
        message: ''
        version: '14'
    -
        author: Solen Guitter
        date: '2011-11-09 09:48'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2011-11-08 17:09'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2011-06-06 14:55'
        message: ''
        version: '11'
    -
        author: Solen Guitter
        date: '2010-10-20 10:41'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2010-10-20 10:39'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2010-09-23 17:01'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2010-09-23 17:00'
        message: added screenshots
        version: '7'
    -
        author: Solen Guitter
        date: '2010-09-23 16:31'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2010-09-23 14:59'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2010-09-21 18:25'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2010-09-21 18:19'
        message: ''
        version: '3'
    -
        author: Solen Guitter
        date: '2010-09-21 18:07'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2010-04-14 11:31'
        message: ''
        version: '1'

---
{{! excerpt}}
The [Nuxeo IMAP Connector](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-imap-connector) provides email folders in which you can fetch emails to store and share them in your Nuxeo application. Email folders are not intended to be webmails. It will fetch the unread emails on your email server either when you manually trigger the fetch from Nuxeo interface or automatically at regular intervals.
{{! /excerpt}}

When emails are imported in Nuxeo, some metadata is automatically extracted from the email:

*   Subject
*   Sender
*   Sending date
*   Recipients
*   CC Recipients
*   Text: content of the email
*   Attachments

{{#> callout type='note' }}

The emails imported in the email folder cannot be modified in the Nuxeo Platform.

{{/callout}}

## Creating an Email Folder

**To create an email folder**

### Web UI
1. In a workspace click on the **Create** button
1. Select the Email Folder document type.</br>
   The email folder creation form is displayed.
1. Fill in the creation form (see parameters below) and click on the **CREATE** button.
   ![]({{file name='emailFolder-created-web-ui.png'}} ?w=650,border=true)
   The **View** tab of the email folder is displayed.
   You can now fetch emails.

### JSF UI

1.  In a workspace, click on the **New** button.
2.  In the modal window displayed, click on **Email folder**
    The email folder creation form is displayed.
3.  Fill in the creation form (see parameters below) and click on the **OK** button.
    The **Content** tab of the email folder is displayed.
    ![]({{file name='DM-emailFolder-created.png'}} ?w=650,border=true)
    You can now fetch emails.


### Email folder parameters

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">

Field

</th><th colspan="1">

Description

</th></tr><tr><td colspan="1">

Title

</td><td colspan="1">

Name of your email folder

</td></tr><tr><td colspan="1">

Email

</td><td colspan="1">

Email address of the account from which the emails will be fetched.

</td></tr><tr><td colspan="1">

Password

</td><td colspan="1">

Password of the email account from which the emails will be fetched.

</td></tr><tr><td colspan="1">

Protocol

</td><td colspan="1">

Select the receive protocol used for the email account.

</td></tr><tr><td colspan="1">

Host

</td><td colspan="1">

Type the name of the host of the email account.

</td></tr><tr><td colspan="1">

Port

</td><td colspan="1">

Type the port number.\ Default value is 993, which should be ok in most cases. Check with your administrator if this value should be changed.

</td></tr><tr><td colspan="1">

Socket factory fallback

</td><td colspan="1">

Default value is set to "Yes". This parameter sets the behaviour in case the socket used to connect the Nuxeo server to the email server fails to be created using the implemented socket factory.

</td></tr><tr><td colspan="1">

Socket factory port

</td><td colspan="1">

Port used to connect the Nuxeo server to the email server. Default value is set to 993.

</td></tr><tr><td colspan="1">

Start TLS (IMAP)

</td><td colspan="1">

Default value is set to "Yes" to secure exchanges with the email server.

</td></tr><tr><td colspan="1">

SSL protocols (IMAP)

</td><td colspan="1">

Default value is "SSL". You can add other protocols, separated by whitespace.

</td></tr><tr><td colspan="1">

Limit of new fetched emails

</td><td colspan="1">

Indicate the maximum number of emails to be fetched at the same time.

</td></tr></tbody></table></div>

The actions available on an email folder are:

*   Edit the folder (see parameters above),
*   Subscribe to [alerts]({{page page='nxdoc/collaborative-features'}}#alerts),
*   [Manage the access]({{page page='nxdoc/managing-permissions'}}) to the folder,
*   [Manage the trash]({{page page='nxdoc/deleting-content'}}) of the folder.

### Email Folder Parameters for a Gmail Account

<div class="table-scroll"><table class="hover"><tbody><tr><td colspan="1">

Title

</td><td colspan="1">

Name of your email folder

</td></tr><tr><td colspan="1">

Email

</td><td colspan="1">

<div>mycompany@gmail.com</div>

</td></tr><tr><td colspan="1">

Password

</td><td colspan="1">

<div>Password of the email account from which the emails will be fetched. </div>

<div>

&nbsp;

{{#> callout type='note' }}

If you have set the 2 steps Verification, you need to generate a dedicated password.

{{/callout}}</div>

</td></tr><tr><td colspan="1">

Protocol

</td><td colspan="1">

<div>IMAPS</div>

</td></tr><tr><td colspan="1">

Host

</td><td colspan="1">

<div>imap.gmail.com</div>

</td></tr><tr><td colspan="1">

Port

</td><td colspan="1">

<div>993</div>

</td></tr><tr><td colspan="1">

Socket factory fallback

</td><td colspan="1">

No

</td></tr><tr><td colspan="1">

Socket factory port

</td><td colspan="1">

<div>993</div>

</td></tr><tr><td colspan="1">

Start TLS (IMAP)

</td><td colspan="1">

Yes

</td></tr><tr><td colspan="1">

SSL protocols (IMAP)

</td><td colspan="1">

<div>TLSv1.2</div>

</td></tr><tr><td colspan="1">

Limit of new fetched emails

</td><td colspan="1">

100

</td></tr></tbody></table></div>

## Fetching Emails

**To fetch emails:**

### Web UI
1. In your email client, mark the emails you want to fetch as unread.
1. Go to your email folder on Nuxeo Platform side.
   The **View** tab is displayed.
1. Click on the **Check Email** button.
   The unread emails are imported in the email folders.
   ![]({{file name='emailFolder-content-web-ui.png'}} ?w=650,border=true)
1. To open a mail, click on its subject.
   ![]({{file name='emailFolder-summary-web-ui.png'}} ?w=650,border=true)


### JSF UI
1.  In your email client, mark the emails you want to fetch as unread.
2.  In Nuxeo, open the email folder.
    The **Content** tab is displayed.
3.  Click on the **Check email** button.
    The unread emails are imported in the email folders.
    ![]({{file name='DM-emailFolder-content.png'}} ?w=650,border=true)
4.  To open a mail, click on its subject.
    ![]({{file name='DM-emailFolder-summary.png'}} ?w=650,border=true)

Emails cannot be edited, but you can [comment]({{page page='nxdoc/collaborative-features'}}#comments) them, [link]({{page page='nxdoc/editing-content'}}#relations) them to other documents and [follow the email folder's activity]({{page page='nxdoc/collaborative-features'}}#alerts).
