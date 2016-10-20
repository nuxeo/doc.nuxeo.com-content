---
title: How to Customize Email Templates
review:
    comment: ''
    date: ''
    status: ok
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
    - content-review-6-0
toc: true
confluence:
    ajs-parent-page-id: '22380615'
    ajs-parent-page-title: Educational
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: How+to+Customize+Email+Templates
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC60/How+to+Customize+Email+Templates'
    page_id: '23365295'
    shortlink: r4ZkAQ
    shortlink_source: 'https://doc.nuxeo.com/x/r4ZkAQ'
    source_link: /display/NXDOC60/How+to+Customize+Email+Templates
tree_item_index: 600
history:
    -
        author: Solen Guitter
        date: '2015-01-29 14:05'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2015-01-29 14:04'
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

1.  Create a new **Templates** > **Mail** feature in Studio. Choose ID among the ones that are used in the default product, like `subscriptionsUpdated` for instance (see the [list of all alert templates](http://explorer.nuxeo.org/nuxeo/site/distribution/latest/viewContribution/org.nuxeo.ecm.platform.notification.service.NotificationContrib--templates)).
2.  Fill in the content of the email that you want to be sent.
    ![]({{file name='studio_mailtemplate_content_2.png'}} ?w=650,border=true)
    If you want to copy from the default content of the template, you can have a look at it from [GitHub](https://github.com/nuxeo/nuxeo-features/tree/master/nuxeo-platform-notification/nuxeo-platform-notification-core/src/main/resources/templates).
3.  Save.

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related How-Tos'}}

*   [How to setup a test SMTP server]({{page page='how-to-setup-a-test-smtp-server'}})
*   [One step validation flow based on lifecycle only]({{page page='one-step-validation-flow-based-on-lifecycle-only'}})
*   [How-To Index]({{page page='how-to-index'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Other Related Documentation'}}

*   [Available Variables in Email Templates]({{page page='available-variables-in-email-templates'}})

{{/panel}}</div></div>
