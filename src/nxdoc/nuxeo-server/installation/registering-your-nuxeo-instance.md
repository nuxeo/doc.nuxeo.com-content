---
title: Registering your Nuxeo Instance
review:
    comment: ''
    date: '2017-12-13'
    status: ok
labels:
    - admin-center
    - bchauvin
    - update-center
    - lts2017-ok
toc: true
confluence:
    ajs-parent-page-id: '3866685'
    ajs-parent-page-title: Installation
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Registering+your+Nuxeo+Instance
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Registering+your+Nuxeo+Instance'
    page_id: '4686231'
    shortlink: l4FH
    shortlink_source: 'https://doc.nuxeo.com/x/l4FH'
    source_link: /display/NXDOC/Registering+your+Nuxeo+Instance
tree_item_index: 1200
version_override:
    LTS 2015: 710/admindoc/registering-your-nuxeo-instance
    '6.0': 60/admindoc/registering-your-nuxeo-instance
    '5.8': 58/admindoc/registering-your-nuxeo-instance
history:
    -
        author: Solen Guitter
        date: '2016-09-08 11:57'
        message: 'XDOC-857: remove nuxeo.i'
        version: '30'
    -
        author: Solen Guitter
        date: '2016-07-04 14:32'
        message: Add since 8.3 mention
        version: '29'
    -
        author: Solen Guitter
        date: '2016-07-04 14:32'
        message: Add section about nuxeoctl register
        version: '28'
    -
        author: Solen Guitter
        date: '2016-03-31 15:31'
        message: ''
        version: '27'
    -
        author: Solen Guitter
        date: '2016-03-30 13:04'
        message: Rename Connect into Online Services
        version: '26'
    -
        author: Julie Allouch
        date: '2016-03-29 20:32'
        message: ''
        version: '25'
    -
        author: Manon Lumeau
        date: '2016-03-25 10:06'
        message: ''
        version: '24'
    -
        author: Solen Guitter
        date: '2015-09-04 09:07'
        message: ''
        version: '23'
    -
        author: Solen Guitter
        date: '2014-11-21 16:40'
        message: ''
        version: '22'
    -
        author: Solen Guitter
        date: '2014-11-21 16:24'
        message: Update screenshots and content with new registration steps
        version: '21'
    -
        author: Manon Lumeau
        date: '2014-09-23 14:27'
        message: ''
        version: '20'
    -
        author: Solen Guitter
        date: '2014-02-10 18:15'
        message: ''
        version: '19'
    -
        author: Solen Guitter
        date: '2014-02-10 18:04'
        message: Updated screenshot
        version: '18'
    -
        author: Solen Guitter
        date: '2014-02-10 17:27'
        message: ''
        version: '17'
    -
        author: Solen Guitter
        date: '2014-02-10 17:23'
        message: ''
        version: '16'
    -
        author: Solen Guitter
        date: '2013-10-16 16:52'
        message: ''
        version: '15'
    -
        author: Solen Guitter
        date: '2012-12-14 12:00'
        message: ''
        version: '14'
    -
        author: Solen Guitter
        date: '2012-12-11 14:33'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2012-12-11 14:32'
        message: Updated offline registration steps with latest Connect UI
        version: '12'
    -
        author: Solen Guitter
        date: '2012-12-07 18:04'
        message: ''
        version: '11'
    -
        author: Solen Guitter
        date: '2012-12-07 18:04'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2012-09-14 09:48'
        message: Migrated to Confluence 4.0
        version: '9'
    -
        author: Solen Guitter
        date: '2012-09-14 09:48'
        message: Updated links
        version: '8'
    -
        author: Solen Guitter
        date: '2012-04-20 18:14'
        message: ''
        version: '7'
    -
        author: Benjamin Jalon
        date: '2012-01-20 10:02'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2010-11-15 10:13'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2010-11-08 18:08'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2010-11-05 16:57'
        message: ''
        version: '3'
    -
        author: Solen Guitter
        date: '2010-11-05 16:45'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2010-11-05 16:44'
        message: ''
        version: '1'

---
Registering your Nuxeo application with [Nuxeo Online Services]({{page space='studio' page='index'}}) will let you easily install patches and bug fixes, install addons from the [Nuxeo Marketplace](https://marketplace.nuxeo.com/), or update your application with your Nuxeo Studio customization, all that directly from the Nuxeo Platform.

The registration process only copies a file on your file system. This enables the Nuxeo Online Services portal to identify the instance among all the registered instances. You can register multiple instances.

{{#> callout type='info' heading='Nuxeo University'}}
Watch the related courses on Nuxeo University
- [Video on Nuxeo Studio Concepts](https://university.nuxeo.com/learn/public/course/view/elearning/142/nuxeo-platform-quickstart-nuxeo-studio-concepts)
![]({{file name='university-nuxeo-studio-concepts.png' page='nxdoc/university'}} ?w=450,border=true)
{{/callout}}

{{#> callout type='note' no_icon=true}}
The instance registration is only valid for your current subscription contract dates, and needs to be renewed on a regular basis. Please refer to the [registration renewal](#renewal) section for further information.
{{/callout}}

## How to Register

To be able to register, you need to have a [Nuxeo Online Services account](#connect-account-creation).

Registration can be done during the installation steps using the configuration wizard or at any time later, using the [`nuxeoctl` script]({{page page='nuxeoctl-and-control-panel-usage'}}) or through the _Admin_ tab if the JSF UI addon is installed.

Registration does not require an Internet access. If your server cannot connect to the Internet, follow the [offline registration steps](#offline-registration). Otherwise, follow the [online registration steps](#online-registration).

For development instances on which you may need to remove your data, you may need to [re-register your instance](#re-registration).

### Creating your Nuxeo Online Services Account {{> anchor 'connect-account-creation'}}

If you already have an account for Nuxeo Online Services, either because you are a Nuxeo customer, or because you created a trial account, you can continue to the [Registering Online]({{page page='registering-your-nuxeo-instance'}}#registering-online-through-the-admin-tab) step. If not, follow those steps to get credentials to Online Services.

To subscribe to a Nuxeo Online Services trial:

1.  Go to the [Nuxeo Online Services trial registration form](https://connect.nuxeo.com/register/#/).
2.  Fill in the form. Provide a valid email address or else registration will not be completed.
3.  Confirm registration by clicking on the link sent to the email address in the previous step.
    You can now [download](https://www.nuxeo.com/downloads/) the Nuxeo Platform.

### Registering Online Using nuxeoctl {{> anchor 'online-registration'}}

The following method requires an Internet connection.

1. Make sure your instance is stopped

```
// Linux and Mac OS
$ $NUXEO_HOME/bin/nuxeoctl stop

// Windows
$ .\$NUXEO_HOME\bin\nuxeoctl.bat stop
```

2. Register the instance

```
// Linux and Mac OS
// Requires a Nuxeo Online Service account
$ $NUXEO_HOME/bin/nuxeoctl register

// Windows
// Requires a Nuxeo Online Service account
$ .\$NUXEO_HOME\bin\nuxeoctl.bat register
```

For more information about the `nuxeoctl` script, read [nuxeoctl and Control Panel Usage]({{page page='nuxeoctl-and-control-panel-usage'}}).

### Registering Online through the Admin Tab

{{! multiexcerpt name='requires-jsf-ui'}}
{{#> callout type='info' no_icon=true}}
These instructions require the JSF UI addon. If you are using Web UI, you should [register using the nuxeoctl script](#online-registration) instead.{{/callout}}
{{! /multiexcerpt}}

1.  Start your Nuxeo instance and connect as an administrator (Administrator/Administrator by default).
2.  Click on the **Admin** tab.
3.  In the **Nuxeo Online Services** tab, click on **Register this instance**.
    A Nuxeo Connect login window pops up.
4.  Authenticate to Nuxeo Online Services portal by giving your credentials.
5.  Select the project to associate with your instance.
    The pop-up closes. Your instance is now registered. You can now browse the various tabs of the Update Center area, and install addons from the [Nuxeo Marketplace](https://marketplace.nuxeo.com) (see the page [Installing a New Package on Your Instance]({{page page='installing-a-new-package-on-your-instance'}})).

### Registering Offline using nuxeoctl {{> anchor 'offline-registration'}}

Offline registration can be used when the server does not connect to the Internet. It allows to use hotfixes on the instance.

Since 10.3, the `nuxeoctl` script allows you to register your instance offline using an existing Nuxeo Online Services account.

**To register your instance for the first time:**

1.  On the offline server:
  1. Make sure your instance is stopped

  ```
  // Linux and Mac OS
  $ $NUXEO_HOME/bin/nuxeoctl stop

  // Windows
  $ .\$NUXEO_HOME\bin\nuxeoctl.bat stop
  ```

  2. Launch Registration

  ```
  // Linux and Mac OS
  // Requires a Nuxeo Online Service account
  $ $NUXEO_HOME/bin/nuxeoctl register --offline

  // Windows
  // Requires a Nuxeo Online Service account
  $ .\$NUXEO_HOME\bin\nuxeoctl.bat register --offline
  ```

  nuxeoctl will display a CTID to be used for registration.

  3.  Store the CTID in a file that you can use from another computer that can connect to the Internet.

2.  From an Internet-connected computer:
    1.  Go to the [Nuxeo Online Services portal](https://connect.nuxeo.com).
    2.  Click on the `My Applications` tab
    3.  Click on the application name for which you want to register your Nuxeo Platform to access its settings.
    4.  Click on the `Instances` tab
    5.  Click on the `Register Instance` button
    6.  Fill in the registration form and submit it. The instance is registered.
    7.  Copy the identifier (CLID) from the instance you just registered.

3.  On the offline server:
    1.  In nuxeoctl, paste the identifier (CLID) from Nuxeo Online Services and confirm registration.
        The registration is approved and the registration summary is displayed. You can now use hotfixes on this instance for the duration of your subscription.

### Registering Offline through the Admin Tab

{{{multiexcerpt 'requires-jsf-ui' page='registering-your-nuxeo-instance'}}}

Offline registration can be used when the server does not connect to the Internet. It allows to use hotfixes on the instance and removes the Nuxeo Online Services registration message.

**To register your instance for the first time:**

1.  On the offline server:

    1.  Start your Nuxeo instance and connect as an administrator (Administrator/Administrator by default).
    2.  Click on the **Admin** tab.
        The **Nuxeo Online Services** tab is displayed.
    3.  Copy the **instance technical identifier** called CTID (ex:`Mac OS X-EbMKUsirT9WQszM5mDkaKAp=-BhnJsMDaabDHAQ0A300d6Q==`) displayed in the **No network access?** box.
        ![]({{file name='AdminCenter-offline-registration.png'}} ?w=500,border=true)
    4.  Store the CTID in a file that you can use from another computer that can connect to the Internet.

2.  From an Internet-connected computer:

    1.  Go to the [Nuxeo Online Services portal](https://connect.nuxeo.com).
    2.  Click on the `My Applications` tab
    3.  Click on the application name for which you want to register your Nuxeo Platform to access its settings.
    4.  Click on the `Instances` tab
    5.  Click on the `Register Instance` button
    6.  Fill in the registration form and submit it. The instance is registered.
    7.  Copy the identifier (CLID) from the instance you just registered.

3.  On the offline server:
    1.  In the Admin tab, fill in the instance description, paste the CLID from Nuxeo Online Services and click on the **Register this instance** button.
        ![]({{file name='AdminCenter-offline-registration-3.png'}} ?w=500,border=true)
        The registration is approved and the registration summary is displayed. The Nuxeo Online Services registration message is not displayed anymore after you browse the application, although registration cannot be validated on the Nuxeo Online Services server.
        ![]({{file name='AdminCenter-offline-registration-done.png'}} ?w=600,border=true)

## Renewing Registration for Your Nuxeo Instance {{> anchor 'renewal'}}

Renewing your Nuxeo instance registration can be done anytime while you have an active Nuxeo Online Services subscription using the `nuxeoctl` script:

**To renew the registration**:

```
// Linux and Mac OS
// Requires an active Nuxeo Online Services subscription
// An internet connection
// And that instance is currently registered
$ $NUXEO_HOME/bin/nuxeoctl register --renew
```
```
// Windows
// Requires an active Nuxeo Online Services subscription
// An internet connection
// And that instance is currently registered
$ .\$NUXEO_HOME\bin\nuxeoctl.bat register --renew
```

Provided that your instance has internet access, this call can easily be automated using a cron / scheduled task. If for some reason your contract expires before you launch the command above though, you can still register your Nuxeo server instance as a new one by following the [online](#online-registration) of [offline](#offline-registration) registration indications.

{{#> callout type='note' title='Important Note About Hotfixes' no_icon=true}}
Using hotfixes on your instance requires a valid subscription.

If your instance is not registered anymore but still uses hotfixes, you will receive specific warnings in the logs during startup explaining the situation.

If it happens, your Nuxeo instance will stop after a certain number of commits or when too many users are connected at the same time. You should make sure to register your instance as soon as you can to prevent this.
{{/callout}}

## Re-Registering your Nuxeo Instance

{{> anchor 're-registration'}}If you have removed your data from your Nuxeo application, in case of a development instance, for example, you will need to register your instance again.

**To re-register your instance:**

{{{multiexcerpt 'requires-jsf-ui' page='registering-your-nuxeo-instance'}}}

1.  Log in to the [Nuxeo Online Services portal](https://connect.nuxeo.com).
1.  Go to the [Nuxeo Online Services portal](https://connect.nuxeo.com).
1.  Click on the `My Applications` tab
1.  Click on the application name for which you want to register your Nuxeo Platform to access its settings.
1.  Click on the `Instances` tab
1.  Copy the Identifier of the instance you want to register.
    In the Nuxeo Admin tab, paste this identifier in the CLID field and click on the **Register this instance** button.
    ![]({{file name='AdminCenter-offline-registration-3.png'}} ?w=450,border=true)
    Your instance is registered again and the registration summary is displayed.
    ![]({{file name='Admin-Center-Connect.png'}} ?w=650,h=267,border=true)
