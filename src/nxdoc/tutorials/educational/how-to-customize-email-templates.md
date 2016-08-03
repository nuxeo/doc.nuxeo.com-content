---
title: How to Customize Email Templates
details:
    howto:
        excerpt: >-
            Learn how to create new alert&nbsp;email or override existing alert
            emails with Nuxeo Studio.
        level: Beginner
        tool: Studio
        topics: Alerts
labels:
    - howto
    - link-update
    - mail-template
    - alert
    - notification
    - studio
    - excerpt
toc: true
confluence:
    ajs-parent-page-id: '19235679'
    ajs-parent-page-title: Educational
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: How+to+Customize+Email+Templates
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/How+to+Customize+Email+Templates'
    page_id: '9274963'
    shortlink: U4aN
    shortlink_source: 'https://doc.nuxeo.com/x/U4aN'
    source_link: /display/NXDOC/How+to+Customize+Email+Templates
history:
    - 
        author: Solen Guitter
        date: '2015-12-08 10:11'
        message: ''
        version: '18'
    - 
        author: Solen Guitter
        date: '2015-10-08 09:40'
        message: Fix broken link
        version: '17'
    - 
        author: Solen Guitter
        date: '2015-01-29 13:16'
        message: ''
        version: '16'
    - 
        author: Solen Guitter
        date: '2015-01-29 11:14'
        message: ''
        version: '15'
    - 
        author: Solen Guitter
        date: '2015-01-29 11:13'
        message: merging page with Create a mail template
        version: '14'
    - 
        author: Solen Guitter
        date: '2015-01-28 16:43'
        message: ''
        version: '13'
    - 
        author: Solen Guitter
        date: '2015-01-28 16:42'
        message: ''
        version: '12'
    - 
        author: Solen Guitter
        date: '2014-09-17 11:33'
        message: ''
        version: '11'
    - 
        author: Solen Guitter
        date: '2013-09-02 15:58'
        message: ''
        version: '10'
    - 
        author: Solen Guitter
        date: '2013-09-02 15:58'
        message: ''
        version: '9'
    - 
        author: Solen Guitter
        date: '2013-05-22 12:06'
        message: Added link to list of notification templates in Explorer
        version: '8'
    - 
        author: Solen Guitter
        date: '2012-07-03 16:03'
        message: Migrated to Confluence 4.0
        version: '7'
    - 
        author: Solen Guitter
        date: '2012-07-03 16:03'
        message: Added link to related howto
        version: '6'
    - 
        author: Alain Escaffre
        date: '2011-12-27 19:15'
        message: ''
        version: '5'
    - 
        author: Alain Escaffre
        date: '2011-12-27 19:15'
        message: ''
        version: '4'
    - 
        author: Alain Escaffre
        date: '2011-12-27 19:09'
        message: ''
        version: '3'
    - 
        author: Alain Escaffre
        date: '2011-12-21 19:19'
        message: ''
        version: '2'
    - 
        author: Alain Escaffre
        date: '2011-12-21 19:19'
        message: ''
        version: '1'

---
An email template defines the content of an email that is sent to users under predefined circumstances. An email template is usually composed of text and variables. Typically, email templates are used to define the content of email alerts in the Nuxeo Platform.

## Creating an Email Template

You can see a use case of mail template in the how-to [One step validation flow based on lifecycle only]({{page page='one-step-validation-flow-based-on-lifecycle-only'}}).

**To create a new mail template:**

1.  Go to **Templates** -> **Mail Templates**.
2.  Click on the **New** button to create a new mail template.
3.  Give the mail template a ID and click **Next**.
    ![]({{file name='STUDIO-mailTemplateCreation.png'}} ?w=300,border=true,thumbnail=true)
4.  In the text area, type the content of the mail. The content is usually composed of text and variables.
    ![]({{file name='STUDIO-mailTemplateContent.png'}} ?w=600,border=true)
5.  When you're done, click **Save**.
    Your mail template is saved and can be used in [automation chains]({{page page='how-to-create-an-automation-chain'}}).

## Overriding Default Alert Emails

{{! excerpt}}

Default templates for mail notifications can be overridden. Just follow those steps:

&nbsp;

{{! /excerpt}}

1.  Create a new **Templates** > **Mail** feature in Studio. Choose ID among the ones that are used in the default product, like `subscriptionsUpdated` for instance (see the [list of all alert templates](http://explorer.nuxeo.org/nuxeo/site/distribution/current/viewContribution/org.nuxeo.ecm.platform.notification.service.NotificationContrib--templates)).
2.  Fill in the content of the email that you want to be sent.
    ![]({{file name='studio_mailtemplate_content_2.png'}} ?w=600,border=true)
    If you want to copy from the default content of the template, you can have a look at it from [GitHub](https://github.com/nuxeo/nuxeo-features/tree/master/nuxeo-platform-notification/nuxeo-platform-notification-core/src/main/resources/templates).
3.  Save.

&nbsp;

* * *

<div class="row" data-equalizer="" data-equalize-on="medium">

<div class="column medium-6">{{#> panel heading="Related How-Tos"}}

*   How to setup a test SMTP server
*   [One step validation flow based on lifecycle only]({{page page='one-step-validation-flow-based-on-lifecycle-only'}})
*   [How-To Index]({{page page='how-to-index'}})

{{/panel}}</div>

<div class="column medium-6">{{#> panel heading="Other Related Documentation"}}

*   [Available Variables in Email Templates]({{page page='available-variables-in-email-templates'}})

{{/panel}}</div>

</div>