---
title: Configuration Wizard
description: The first time you start the Nuxeo Platform, a Startup Wizard will guide you to the main configuration steps and enable you to choose which addons you want to enable on the Platform.
review:
    comment: ''
    date: '2018-01-02'
    status: ok
toc: true
labels:
    - lts2016-ok
    - installation
    - lts2017-ok
    - mlumeau
confluence:
    ajs-parent-page-id: '3866685'
    ajs-parent-page-title: Installation
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Configuration+Wizard
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Configuration+Wizard'
    page_id: '31032126'
    shortlink: PoPZAQ
    shortlink_source: 'https://doc.nuxeo.com/x/PoPZAQ'
    source_link: /display/NXDOC/Configuration+Wizard
tree_item_index: 1000
version_override:
    LTS 2015: 710/admindoc/setup
    '6.0': 60/admindoc/setup
    '5.8': 58/admindoc/setup
history:
    -
        author: Alain Escaffre
        date: '2016-03-23 11:16'
        message: ''
        version: '4'
    -
        author: Alain Escaffre
        date: '2016-03-23 11:03'
        message: ''
        version: '3'
    -
        author: Alain Escaffre
        date: '2016-03-23 10:36'
        message: ''
        version: '2'
    -
        author: Alain Escaffre
        date: '2016-03-23 10:35'
        message: ''
        version: '1'

---
The Nuxeo Platform provides you with easy access to the configuration of your Nuxeo server, thanks to the Admin tab and the Startup Wizard. For advanced configuration or a simple review, manual edition of Nuxeo's configuration file, called `nuxeo.conf`, and a [template system]({{page page='configuration-templates'}}) is also available.

## Startup Wizard {{> anchor 'wizard'}}

The first time you start the Nuxeo Platform and go the URL [http://localhost:8080/nuxeo](http://localhost:8080/nuxeo), a Startup Wizard will guide you to the main configuration steps and enable you to choose which addons you want to enable on the Platform. For each step, a default setting is proposed that enables you to test the application. You can change this default configuration to adapt it to specific environments.

The settings defined during the initial setup can be changed afterward by [editing Nuxeo's configuration file]({{page page='configuration-parameters-index-nuxeoconf'}}) manually. Addons can also be added or removed afterwards with [nuxeoctl]({{page page='nuxeoctl-and-control-panel-usage'}}).

{{#> callout type='tip' }}

The Startup wizard will be run only if the configuration sets `nuxeo.wizard.done=false`. You can edit the value in order to replay the wizard (using the Admin tab or editing the nuxeo.conf file manually), or simply run `nuxeoctl wizard`.

{{/callout}}

### Server General Settings {{> anchor 'general-settings'}}

This step enables you to change the default IP address of the server and where the logs and data are stored.

![]({{file name='Wizard_general_settings.png'}} ?w=550,border=true)

### Proxy Settings {{> anchor 'proxy-settings'}}

Some features of Nuxeo applications requires to access the Internet. If you have installed Nuxeo JSF UI, that's the case of the Update Center from which you can access to the Marketplace addons and plugins, updates for your application, your Studio customizations.

![]({{file name='Wizard_proxy_settings.png'}} ?w=550,border=true)

### Database Settings {{> anchor 'database-settings'}}

Nuxeo applications embed a database by default, called H2/Derby. This database enables you to fully test and evaluate the application. However it is not recommended to use this embedded database for production and load testing. Select the database you want to use and provide the connection information to the database.
Possible databases are:

*   [PostgreSQL]({{page page='postgresql'}})
*   [Oracle]({{page page='oracle'}})
*   [MS SQL Server]({{page page='microsoft-sql-server'}})
*   [MySQL]({{page page='mysql'}})
*   [MongoDB]({{page page='mongodb'}})

![]({{file name='Startup_wizard.png'}} ?w=550,border=true)

### Users & Groups {{> anchor 'ldap-settings'}}

By default users and groups are stored in the embedded database. You can however set up the platform from the beginning to use your own users and groups directory.

![]({{file name='wizard-users-groups.png'}} ?w=550,border=true)

### Mail Settings {{> anchor 'mail-settings'}}

Nuxeo applications include email alert features. By default, no SMTP configuration is enabled and therefore no email alerts will be sent to users. You can refer to the [email alerts section]({{page page='setup-best-practices#enable-email-alerts'}}) for more information about the SMTP configuration.

![]({{file name='Wizard_smtp_settings.png'}} ?w=550,border=true)

### Nuxeo Online Services Settings {{> anchor 'connect-settings'}}

From this step, you can subscribe to a free 30 days trial offer of Nuxeo Online Services which gives you the possibility to evaluate and fully leverage the [Marketplace catalog](http://marketplace.nuxeo.com) and [Nuxeo Studio](http://www.nuxeo.com/products/studio/), the online Nuxeo customization environment. If you subscribe to the trial offer of Nuxeo Online Services, you will be sent an email confirming your subscription and your credentials and giving you the links to access the [Nuxeo Online Services Portal]({{page space='connect' page='nuxeo-online-services-documentation'}}) and [Nuxeo Studio]({{page space='studio'}}).

![]({{file name='Wizard_connect.png'}} ?w=550,border=true)

{{#> callout type='tip' }}

If you already have a Nuxeo Online Services account, you can register your Nuxeo instance from this step to directly be able to apply your Nuxeo Studio customizations and the installation of Nuxeo Addons in your instance.

{{/callout}}

### Module Installation {{> anchor 'module-installation'}}

Select the additional features you want to install on the Platform. You can also just keep the naked Nuxeo Server.

{{#> callout type='tip' }}
You can install or uninstall addons afterwards with [nuxeoctl]({{page page='nuxeoctl-and-control-panel-usage'}}).
{{/callout}}

![]({{file name='Wizard_module_selection.png'}} ?w=550,border=true)

And if needed, download the addons packages. Packages most probably are already included in the Platform.

![]({{file name='Wizard_module_download.png'}} ?w=550,border=true)

### Summary {{> anchor 'summary'}}

A final Summary step provides you with a screen on which you can see all the configuration parameters that you set in the previous steps so you can review them and possibly go back to a step to change them.

![]({{file name='Wizard_summary.png'}} ?w=550,border=true)

To validate your configuration, click on the **Start** button. The server will automatically restart and your configuration will be applied.

Once the server is restarted, you are displayed the login page. Log in to your application the **Administrator** user name and the **Administrator** password.

![]({{file name='Wizard_restart.png'}} ?w=550,border=true)

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [Admin Tab Overview]({{page page='admin-tab-overview'}})
- [Setup Best Practices]({{page page='setup-best-practices'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
