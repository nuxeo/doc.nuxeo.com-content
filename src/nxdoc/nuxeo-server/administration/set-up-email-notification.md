---
title: Set Up Email Notification
review:
    comment: ''
    date: '2020-02-14'
    status: ok
labels:
    - lts2016-ok
    - content-review-lts2017
confluence:
    ajs-parent-page-id: '31032113'
    ajs-parent-page-title: Administration
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Set+Up+Email+Notification
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Set+Up+Email+Notification'
    page_id: '31687458'
    shortlink: IoPjAQ
    shortlink_source: 'https://doc.nuxeo.com/x/IoPjAQ'
    source_link: /display/NXDOC/Set+Up+Email+Notification
tree_item_index: 1400
version_override:
    LTS 2015: 710/admindoc/recommended-configurations
    '6.0': 60/admindoc/recommended-configurations
    '5.8': 58/admindoc/recommended-configurations
history:
    -
        author: Solen Guitter
        date: '2016-07-25 07:55'
        message: ''
        version: '4'
    -
        author: Alain Escaffre
        date: '2016-07-22 13:33'
        message: ''
        version: '3'
    -
        author: Alain Escaffre
        date: '2016-07-22 13:31'
        message: ''
        version: '2'
    -
        author: Alain Escaffre
        date: '2016-07-22 13:28'
        message: ''
        version: '1'
---

{{{multiexcerpt 'JSF-UI-required' page='generic-multi-excerpts'}}}

{{! excerpt}}
The default Nuxeo Platform email configuration is filled in with neutral values that you need to edit to make the platform work with your mail server. Unless you do that, alerts emails won't be sent to users.
{{! /excerpt}}

To enable notifications: edit and fill in the values of the properties in your `nuxeo.conf` file. Please refer to the table below for the keys to add or fill in.{{/callout}}

**Email information configuration**

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">

Field / Property

</th><th colspan="1">

Description

</th></tr><tr><td colspan="1">

Email notifications subject prefix<br/>
`nuxeo.notification.eMailSubjectPrefix`

</td><td colspan="1">

Text displayed in the "Object" before the object of the alerts email to help users identify that the emails are coming from the application.
Default value is "[Nuxeo]". You can change is to whatever value you like.

</td></tr><tr><td colspan="1">

Mail store protocol<br/>
`mail.store.protocol`

</td><td colspan="1">

Name of the protocol used to store emails on the server.
Default value is "pop3". You may need to change it to "IMAP".

</td></tr><tr><td colspan="1">

Mail transport protocol<br/>
`mail.transport.protocol`

</td><td colspan="1">

Name of the protocol used to send emails.
Default value is "smtp". This should work in most cases.

</td></tr><tr><td colspan="1">

Host Name for Store<br/>
`mail.store.host`

</td><td colspan="1">

Name of the mail server host used to receive and store emails.
Default value is "localhost". You need to change it.

</td>
</tr>
<tr><td colspan="1">

Port Number for Store<br/>
`mail.store.port`

</td><td colspan="1">

Mail server port to receive and store emails.
Default value is 110.

</td></tr><tr><td colspan="1">

Username for Store</br>
`mail.store.user`

</td><td colspan="1">

Type the username that will be used if you set the authentication for SMTP parameter to "true".

</td></tr><tr><td colspan="1">

Password for Store<br/>
`mail.store.password`

</td><td colspan="1">

Type the password that will be used if you set the authentication for SMTP parameter to "true".

</td></tr><tr><td colspan="1">

Debug mode<br/>
`mail.debug`

</td><td colspan="1">

Default value is set to "false". Change it to "true" if you want to have the details of what the server is doing in the logs.

</td></tr><tr><td colspan="1">

Host Name for Transport<br/>
`mail.transport.host`

</td><td colspan="1">

Mail server host name for outgoing mails. Default value is "localhost". You need to change it so emails can be sent from the server.

</td></tr><tr><td colspan="1">

Port Number for Transport<br/>
`mail.transport.port`

</td><td colspan="1">

Mail server port for outgoing emails.
Default value is 25.

</td></tr><tr><td colspan="1">

Use Authentication for Transport<br/>
`mail.transport.auth`

</td><td colspan="1">

Indicate if authentication is needed for the mail server to send emails.

</td></tr><tr><td colspan="1">

Sender Address Mail<br/>
`mail.from`

</td><td colspan="1">

Email address that will displayed as the sender's address.

</td></tr><tr><td colspan="1">

Transport Connection using TLS<br/>
`mail.transport.usetls`

</td><td colspan="1">

Indicate if TLS is needed for the mail server.
Default value is "false". You should change it to "true" if your SMTP requires TLS

</td></tr>
</tbody></table></div>

{{#> callout type='tip' }}

You can use [fakeSMTP](https://answers.nuxeo.com/general/q/8ab0a80dead74dc496589244b7984548/How-can-I-setup-a-SMTP-server) for test purposes.

{{/callout}}

{{#> callout type='info' }}

If you have complex mail server configurations, you may want to check the [Javamail API FAQ](http://www.oracle.com/technetwork/java/faq-135477.html) for more information.

{{/callout}}

---

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [How to Customize Email Templates]({{page page='how-to-customize-email-templates'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
