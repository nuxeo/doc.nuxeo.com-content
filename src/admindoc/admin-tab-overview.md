---
title: Admin Tab Overview
review:
    comment: ''
    date: ''
    status: ok
labels:
    - last-review-20141121
    - admin-center
toc: true
confluence:
    ajs-parent-page-id: '21921916'
    ajs-parent-page-title: Installation and Administration
    ajs-space-key: ADMINDOC60
    ajs-space-name: Nuxeo Installation and Administration — 6.0
    canonical: Admin+Tab+Overview
    canonical_source: 'https://doc.nuxeo.com/display/ADMINDOC60/Admin+Tab+Overview'
    page_id: '21921815'
    shortlink: F4BOAQ
    shortlink_source: 'https://doc.nuxeo.com/x/F4BOAQ'
    source_link: /display/ADMINDOC60/Admin+Tab+Overview
tree_item_index: 800
version_override:
    'FT': '/nxdoc/admin-tab-overview'
history:
    -
        author: Solen Guitter
        date: '2016-02-24 15:20'
        message: dd details on Users sessions ta
        version: '29'
    -
        author: Anonymous
        date: '2014-11-21 11:09'
        message: format
        version: '28'
    -
        author: Solen Guitter
        date: '2014-11-21 11:02'
        message: ''
        version: '27'
    -
        author: Solen Guitter
        date: '2014-11-21 10:42'
        message: ''
        version: '26'
    -
        author: Solen Guitter
        date: '2014-10-28 23:25'
        message: ''
        version: '25'
    -
        author: Solen Guitter
        date: '2014-10-28 18:42'
        message: ''
        version: '24'
    -
        author: Solen Guitter
        date: '2014-10-28 18:41'
        message: ''
        version: '23'
    -
        author: Thomas Roger
        date: '2014-09-03 15:26'
        message: Add "Logs" documentation to monitoring
        version: '22'
    -
        author: Solen Guitter
        date: '2014-07-15 12:12'
        message: 'NXP-13560 : Themes tab not available anymore since 5.9.5'
        version: '21'
    -
        author: Julien Carsique
        date: '2014-05-06 19:07'
        message: ''
        version: '20'
    -
        author: Solen Guitter
        date: '2013-11-04 23:23'
        message: ''
        version: '19'
    -
        author: Solen Guitter
        date: '2013-10-30 16:12'
        message: ''
        version: '18'
    -
        author: Solen Guitter
        date: '2013-10-16 16:49'
        message: ''
        version: '17'
    -
        author: Solen Guitter
        date: '2013-10-16 16:48'
        message: Updated screenshots for coming 5.8
        version: '16'
    -
        author: Solen Guitter
        date: '2013-08-06 11:25'
        message: ''
        version: '15'
    -
        author: Solen Guitter
        date: '2012-12-07 18:04'
        message: ''
        version: '14'
    -
        author: Solen Guitter
        date: '2012-12-07 18:03'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2012-12-07 17:55'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2012-12-07 16:42'
        message: ''
        version: '11'
    -
        author: Solen Guitter
        date: '2012-12-07 16:42'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2012-04-12 17:41'
        message: Migrated to Confluence 4.0
        version: '9'
    -
        author: Solen Guitter
        date: '2012-04-12 17:41'
        message: Updated tabs list with Social Collaboration and 5.5 screenshots.
        version: '8'
    -
        author: Solen Guitter
        date: '2011-06-07 15:07'
        message: added 5.4.2 new Admin Center tabs
        version: '7'
    -
        author: Solen Guitter
        date: '2011-03-03 17:04'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2011-03-03 16:35'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2011-03-03 15:58'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2010-11-08 15:37'
        message: Admin Center sections description
        version: '3'
    -
        author: Solen Guitter
        date: '2010-11-08 14:52'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2010-11-05 16:31'
        message: ''
        version: '1'

---
The Admin tab, formerly called Admin Center, is a space within the Nuxeo Platform that provides administrative services, such as server and application usage summary information, as well as access to upgrades, patches, the Nuxeo Marketplace, and Nuxeo Studio projects. It is available to administrators and power users. Power users have access to a limited set of admin features.

The Admin tab offers access to different kinds of information about your Nuxeo instance. Depending the add-ons you have installed on the Platform, you may have more or less information, i.e. more or less tabs.

{{#> callout type='info' }}

Installing Marketplace packages can add new tabs in the Admin tab. In that case, the new Admin tab feature is described in the add-on's documentation.

{{/callout}}

The default tabs available in the Admin tab are listed below. These tabs are available whatever the modules or add-ons you installed on the Platform.

## System Information

This section of the Admin tab provides information about the server the Nuxeo Platform is installed on, about your instance configuration.

![]({{file name='AdminCenter_SetupTab.png' page='setup'}} ?w=600,border=true)

The different sub-tabs are:

*   **Host**: Provides information about the computer on which the Nuxeo Platform is installed. This is also where you can easily restart Nuxeo, using the **Restart server** button.
*   **Nuxeo distribution**: Provides information on the Nuxeo distribution you are using, its name, version, build time, ... and all the Nuxeo bundles currently deployed.
*   **Setup**: Enables you to change your application's configuration, such as where the logs are stored, or the default port. Some examples are available on the [Configuration examples]({{page space='admindoc56' page='configuration-examples'}}) and [Recommended configurations]({{page space='admindoc56' page='recommended-configurations'}}) pages. This tab enables you to perform the same configuration modification as you can do manually by editing the [nuxeo.conf file]({{page page='configuration-parameters-index-nuxeoconf'}}).
*   **Repository statistics**: Provides some statistics about the content of your application (how many documents, how many versions, size of the biggest folder...).
*   **Repository binaries**: Computes statistics on the binaries and enables you to delete the unused ones (deleted from the UI but still stored on the server).

## Activity

This section of the Admin tab enables administrators to have information and statistics on how the application is used.

![]({{file name='Admin-Center-Activity-tab.png'}} ?w=600,border=true)

The default Activity subtabs are:

*   **Users sessions**: Provides information on who is logged in to the Platform.
    {{{multiexcerpt 'users-sessions-tab-details' page='Metrics and Monitoring'}}}
*   **Events**: Lists the events that occurred on the platform. You can filter this list to only get the events from a specific user or only events from a specific category.
*   **Background work**: Provides information on the asynchronous tasks performed by the server, such as video conversion when a video is imported.

## Nuxeo Connect

You can connect your Nuxeo instance with your [Nuxeo Connect](http://www.nuxeo.com/services/support/) account. This enables you to get a summary of your Nuxeo Online Services registration, and to register your Nuxeo Platform if you haven't done it yet.

![]({{file name='Admin-Center-Connect.png'}} ?w=600,border=true)

*   The **Nuxeo Connect registration status** tab is where you can register your instance, if you haven't done it earlier from the [setup wizard]({{page page='setup#setup-wizard'}}). When you have already registered, it displays your contract and instance information.
*   The **Nuxeo Connect tickets** tab will display the list of JIRA issues linked to your contract. This feature is not yet available, but you can see all your JIRA issues from the [Nuxeo Connect dashboard](http://connect.nuxeo.com).

## Update Center

This section of the Admin tab provides all the updates you can need (updates and hot-fixes, Nuxeo Marketplace add-ons, direct access to your Nuxeo Studio customizations, local packages).

![]({{file name='Admin-Center-updateCenter.png'}} ?w=600,border=true)

*   The **Nuxeo Studio** tab enables you to update your application with your Nuxeo Studio customizations.
*   The **Nuxeo software updates** tab displays the hot-fixes available for your Nuxeo version and the updates for the packages you have installed.
*   The **Private packages** tab displays the lists of packages specific to your project, hence private: the Studio customizations and possible packaged customizations done outside Studio.
*   The **Packages from Nuxeo Marketplace** displays the list of all available packages.
*   The **Local packages** tab displays the packages (hot-fixes, add-ons, Studio customization) you have downloaded and that are either ready to be installed or already installed.

## Monitoring

This section of the Admin tab enables administrators to monitor some technical information and display messages to users.

![]({{file name='Admin-Center-monitoring.png'}} ?w=600,border=true)

*   The **Administrative Statuses** tab is the place from which you can display messages to the application's users, make the application unavailable or to make SMTP services unavailable.
*   The **Probes** tab enables you to check the access to the SQL repositories, LDAP directory and the local Nuxeo instance.
*   The **Nuxeo Event Bus** displays statistics about the processing of listeners.
*   The **Shell** tab enables users to use the [Nuxeo Shell]({{page page='nuxeo-shell'}}).
*   The **Logs** tab displays the content of the server log files. You can also download the full log files.
    **Note:** If the Nuxeo clustering configuration is enabled, only the logs of the node you are connected to will be displayed.

## OAuth

This section of the Admin tab enables administrators to manage the authentication with other applications using OAuth protocol[]({{page space='userdoc60' page='managing-dashboards#managing-external-gadgets'}}).

![]({{file name='AdminCenter-OAuth-tab.png'}} ?w=600,border=true)

*   The **Server key** tabs shows the Nuxeo certificate that is required by other applications.
*   The **Services providers** and **Services providers tokens** tabs enable to declare external applications to which the Nuxeo Platform will connect.
*   The **Consumers** and **Consumers tokens** tabs enable to declare external applications that will connect to the Nuxeo Platform.

## Users & Groups

This section enables administrators to [create, edit, delete users and groups of users]({{page space='userdoc60' page='managing-users-and-groups'}}).

![]({{file name='AdminCenter-users-groups-tab.png'}} ?w=600,border=true)

## Vocabularies

From this section, administrators can [customize and adapt the values displayed in lists]({{page space='userdoc60' page='managing-vocabularies'}}) in the application.![]({{file name='AdminCenter-vocabularies-tab.png'}} ?w=600,border=true)

## Elasticsearch

This tab enables to check and manage the Elasticsearch indexation.

![]({{file name='AdminCenter_elasticsearch_tab.png'}} ?w=600,border=true)

*   The **Info** tab provides information and statistics about the Elasticsearch indexing.
*   The **Admin** tab enables to reindex the content repository.
*   The **Page Providers** tab provides information about the different types of page providers used.

## Workflow

This section enables administrators to manage the different workflows available (including your customized workflows from Studio) and especially to define for which users the workflow is available.

![]({{file name='AdminCenter-workflow-tab.png'}} ?w=600,border=true)
