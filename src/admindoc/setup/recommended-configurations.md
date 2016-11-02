---
title: Recommended Configurations
review:
    comment: ''
    date: ''
    status: ok
labels:
    - alerts
    - last-review-20141126
    - configuration
    - logs
toc: true
confluence:
    ajs-parent-page-id: '21921866'
    ajs-parent-page-title: Setup
    ajs-space-key: ADMINDOC60
    ajs-space-name: Nuxeo Installation and Administration — 6.0
    canonical: Recommended+Configurations
    canonical_source: 'https://doc.nuxeo.com/display/ADMINDOC60/Recommended+Configurations'
    page_id: '21921858'
    shortlink: QoBOAQ
    shortlink_source: 'https://doc.nuxeo.com/x/QoBOAQ'
    source_link: /display/ADMINDOC60/Recommended+Configurations
tree_item_index: 100
version_override:
    'FT': '/nxdoc/setup-best-practices'
history:
    -
        author: Anonymous
        date: '2014-11-26 14:07'
        message: ormatting and link updat
        version: '21'
    -
        author: Solen Guitter
        date: '2014-04-11 10:15'
        message: ''
        version: '20'
    -
        author: Solen Guitter
        date: '2013-10-30 13:13'
        message: ''
        version: '19'
    -
        author: Solen Guitter
        date: '2013-10-30 10:27'
        message: Added some links and removed obsolete information
        version: '18'
    -
        author: Solen Guitter
        date: '2013-10-30 10:17'
        message: Added section about production-safe databases
        version: '17'
    -
        author: Solen Guitter
        date: '2013-10-10 16:41'
        message: ''
        version: '16'
    -
        author: Solen Guitter
        date: '2013-05-22 15:12'
        message: ''
        version: '15'
    -
        author: Florent Guillaume
        date: '2012-03-14 15:17'
        message: Migrated to Confluence 4.0
        version: '14'
    -
        author: Florent Guillaume
        date: '2012-03-14 15:17'
        message: ''
        version: '13'
    -
        author: Florent Guillaume
        date: '2012-03-14 15:16'
        message: ''
        version: '12'
    -
        author: Florent Guillaume
        date: '2012-03-14 15:06'
        message: ''
        version: '11'
    -
        author: Solen Guitter
        date: '2011-12-10 00:02'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2011-12-10 00:01'
        message: ''
        version: '9'
    -
        author: Thierry Martins
        date: '2011-05-20 17:35'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2011-04-21 15:01'
        message: 'added steps to move conf, data and logs'
        version: '7'
    -
        author: Solen Guitter
        date: '2011-04-21 11:35'
        message: added environment variables definition steps
        version: '6'
    -
        author: Florent Guillaume
        date: '2011-04-01 18:27'
        message: fix data vs log confusion
        version: '5'
    -
        author: Solen Guitter
        date: '2011-03-11 17:02'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2011-03-11 15:41'
        message: ''
        version: '3'
    -
        author: Julien Carsique
        date: '2011-03-11 15:18'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2011-03-11 11:40'
        message: ''
        version: '1'

---
Nuxeo applications come as ready-to-use applications, that you can quickly install and evaluate. However, if you plan to go in production, have several Nuxeo applications on the same machine or do some performance tests, here are some changes of configuration that we recommend to do, especially for advanced testing or before going into production:

The steps given below are given using the [Admin tab]({{page page='admin-tab-overview'}}). They can of course also be done by [editing the `nuxeo.conf` file manually]({{page page='setup#manual-edit'}}).

{{#> callout type='tip' }}

More configuration use cases on the [Configuration Examples]({{page page='configuration-examples'}}) page.

{{/callout}}

## Moving Configuration, data and log Directories Outside Nuxeo

The configuration of your application is saved in the `nuxeo.conf` configuration file, whatever the [means you use to configure your application]({{page page='setup'}}) (manual edit, Startup Wizard or Admin tab). It is better, although not mandatory, to store your customized configuration outside the Nuxeo Platform. This way, you will be able to easily upgrade the Nuxeo Platform, keeping your configuration safely apart of Nuxeo directory.

**To move the configuration file outside the Nuxeo directory:**

1.  Move the `nuxeo.conf` file from its default location.
2.  After you moved `nuxeo.conf`, you need to [define its location as an environment variable](#nuxeo_conf).

By default, `data` and `log` directories are stored inside the Nuxeo tree. To ease backup and upgrades, it is highly recommended to move them outside the Nuxeo tree.

**To move the data and log directories:**

1.  In the Admin tab **System Information** > **Setup** tab, type the path to the location where you want the directories to be stored (see the table below).
2.  Click on **Save**.
3.  Restart your server.
    The `data` and `log` directories are created at the location you typed.

**Data and log directories configuration**

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">

Field / Property

</th><th colspan="1">

Description

</th></tr><tr><td colspan="1">

Data directory
`nuxeo.data.dir`

</td><td colspan="1">

Data directory (absolute or relative to NUXEO_HOME). It involves all data not being stored in the database.
Linux recommended path: `/var/lib/nuxeo/...`

</td></tr><tr><td colspan="1">

Log directory
`nuxeo.log.dir`

</td><td colspan="1">

Log directory (absolute or relative to NUXEO_HOME).
Linux recommended path: `/var/log/nuxeo/...`

</td></tr></tbody></table></div>

## Defining Environment Variables

When the server starts, it guesses where the Nuxeo home directory and the Nuxeo configuration file (`nuxeo.conf`) are located. If it doesn't find it or if you want to force it to use a specific home directory and/or a specific configuration file, you can define their location as environment variables.

### `NUXEO_HOME`

Here is how Nuxeo home is guessed when the server starts: If `NUXEO_HOME` is not set, then the parent directory of the called script (`nuxeoctl`) is used.

Setting the Nuxeo home directory as an environment variable is recommended in the following cases:

*   if you installed several Nuxeo applications on the same machine (for evaluation or production purpose),
*   if you want to use other scripts than the `$NUXEO_HOME/bin/nuxeoctl` script (such as a service in `/ect/init.d`).

You must then set `NUXEO_HOME=/path/to/nuxeo/` in the system environment variables:

*   Windows users must write `"set NUXEO_HOME=..."` or use the control panel interface to define user environment parameters (like it's done for `%PATH%`).
*   Linux and Mac OS X users will write `"export NUXEO_HOME=...`." in `~/.bashrc` or `~/.profile`.

### `NUXEO_CONF`

You need to set the location of the `nuxeo.conf` file as an environment variable if you moved your configuration outside of the Nuxeo directory.

Moving the data and configuration outside the Nuxeo directory is recommended in a production environment because it makes upgrades easier and more secured: Your data and configuration won't risk to be overridden or lost. You must then set `NUXEO_CONF=/path/to/nuxeo.conf` in the system environment variables.

#### Windows Specific Case

Under Windows, the location of the `nuxeo.conf` is defined by that order of priority (i.e. first one of those found is used):

*   Registry key `HKEY_LOCAL_MACHINE\SOFTWARE\%PRODNAME%\ConfigFile` with `%PRODNAME%` equals to "Nuxeo" (or in older versions, "Nuxeo CAP", "Nuxeo DM", "Nuxeo DAM", ...),
*   Environment variable `NUXEO_CONF`,
*   `"nuxeo.conf"` file in the working directory,
*   `"nuxeo.conf"` file on the Desktop,
*   `"nuxeo.conf"` file in the same location as `nuxeoctl.bat`.

## Changing the Default Embedded Database

The Nuxeo Platform provides a default embedded database for testing and evaluation purpose, called Derby. However, it is not adapted for a production environment (see the [H2 limitations page]({{page page='h2-limitations'}})).

Before going live, you should configure one of the production-safe database supported by the Nuxeo Platform. See the [Database]({{page page='database'}}) section of this documentation.

## Enabling e-Mail Alerts {{> anchor 'setup-mail'}}

The default Nuxeo Platform email configuration is filled in with neutral values that you need to edit to make the platform&nbsp; work with your mail server. Unless you do that, alerts emails won't be sent to users.

**To make alerts available:**

1.  In the Admin tab, click on the **Setup** tab of System Information section.
2.  Edit and fill in the values of the Email information section (see below for expected parameters).

    {{#> callout type='tip' }}

    To enable alerts, filling in the SMTP parameters should be sufficient for most mail server configurations.

    {{/callout}}
3.  Click the button **Save**.
    As indicated on top of the page, you need to restart your server so the new configuration is taken into account.

**Email information configuration**

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">

Field / Property

</th><th colspan="1">

Description

</th></tr><tr><td colspan="1">

Email notifications subject prefix
`nuxeo.notification.eMailSubjectPrefix`

</td><td colspan="1">

Text displayed in the "Object" before the object of the alerts email to help users identify that the emails are coming from the application.
Default value is "[Nuxeo]". You can change is to whatever value you like.

</td></tr><tr><td colspan="1">

Mail store protocol
`mail.store.protocol`

</td><td colspan="1">

Name of the protocol used to store emails on the server.
Default value is "pop3". You may need to change it to "IMAP".

</td></tr><tr><td colspan="1">

Mail transport protocol
`mail.transport.protocol`

</td><td colspan="1">

Name of the protocol used to send emails.
Default value is "smtp". This should work in most cases.

</td></tr><tr><td colspan="1">

Host name for POP3
`mail.pop3.host`

</td><td colspan="1">

Name of the mail server host used to receive and store emails.
Default value is "pop3.nosuchhost.nosuchdomain.com". You need to change it.

</td></tr><tr><td colspan="1">

Debug mode
`mail.debug`

</td><td colspan="1">

Default value is set to "false". Change it to "true" if you want to have the details of what the server is doing in the logs.

</td></tr><tr><td colspan="1">

Host name for SMTP
`mail.smtp.host`

</td><td colspan="1">

Mail server host name for outgoing mails.
Default value is "localhost". You need to change it so emails can be sent from the server.

</td></tr><tr><td colspan="1">

Port number for SMTP
`mail.smtp.port`

</td><td colspan="1">

Mail server port for outgoing emails.
Default value is 25.

</td></tr><tr><td colspan="1">

Use authentication for SMTP
`mail.smtp.auth`

</td><td colspan="1">

Indicate if authentication is needed for the mail server to send emails.
Default value is "true". You should change it to "false" if no authentication for sending email is required.

</td></tr><tr><td colspan="1">

Use STARTTLS for SMTP
`mail.smtp.usetls`

</td><td colspan="1">

Indicate if STARTTLS is needed for the mail server.
Default value is "false". You should change it to "true" if your SMTP requires STARTTLS

</td></tr><tr><td colspan="1">

SMTP username
`mail.smtp.username`

</td><td colspan="1">

Type the username that will be used if you set the authentication for SMTP parameter to "true".

</td></tr><tr><td colspan="1">

SMTP password
`mail.smtp.password`

</td><td colspan="1">

Type the password that will be used if you set the authentication for SMTP parameter to "true".

</td></tr><tr><td colspan="1">

Sender address mail
`mail.from`

</td><td colspan="1">

Email address that will displayed as the sender's address.

</td></tr></tbody></table></div>{{#> callout type='info' }}

If you have complex mail server configurations, you may want to check the [Javamail API FAQ](http://www.oracle.com/technetwork/java/faq-135477.html) for more information.

{{/callout}}

&nbsp;

* * *

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related content'}}

*   [Admin Tab Overview]({{page page='admin-tab-overview'}})
*   [Configuration Examples]({{page page='configuration-examples'}})
*   [Configuration Parameters Index (nuxeo.conf)]({{page page='configuration-parameters-index-nuxeoconf'}})
*   [Database]({{page page='database'}})
*   [Where Are the Log and Configuration Files in Windows?]({{page page='where-are-the-log-and-configuration-files-in-windows'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
