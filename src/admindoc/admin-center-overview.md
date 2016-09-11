---
title: Admin Center overview
review:
    comment: ''
    date: ''
    status: ok
labels:
    - admin-center
toc: true
confluence:
    ajs-parent-page-id: '16810081'
    ajs-parent-page-title: Installation and Administration
    ajs-space-key: ADMINDOC58
    ajs-space-name: Nuxeo Installation and Administration - 5.8
    canonical: Admin+Center+overview
    canonical_source: 'https://doc.nuxeo.com/display/ADMINDOC58/Admin+Center+overview'
    page_id: '16810003'
    shortlink: E4AAAQ
    shortlink_source: 'https://doc.nuxeo.com/x/E4AAAQ'
    source_link: /display/ADMINDOC58/Admin+Center+overview
history:
    - 
        author: Solen Guitter
        date: '2015-08-28 09:30'
        message: ''
        version: '20'
    - 
        author: Anonymous
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
&nbsp;

The different sub-tabs are:

*   **Host**: provides information about the computer on which the Nuxeo Platform is installed. This is also where you can easily restart Nuxeo, using the **Restart server** button.
*   **Nuxeo distribution**: provides information on the version of the Nuxeo Platform you are using.
*   **Setup**: enables you to change your application's configuration, such as where the logs are stored, or the default port. Some examples are available on the [Configuration Examples]({{page page='configuration-examples'}}) and [Recommended Configurations]({{page page='recommended-configurations'}}) pages. This tab enables you to perform the same configuration modification as you can do manually by editing the [nuxeo.conf file]({{page page='configuration-parameters-index-nuxeoconf'}}).
*   **Repository statistics**: provides some statistics about the content of your application (how many documents, how many versions, size of the biggest folder...).
*   **Repository binaries**: computes statistics on the binaries and enables you to delete the unused ones (deleted from the UI but still stored on the server).

### Activity

This section of the Admin Center enables administrators to have information and statistics on how the application is used.

![]({{file name='Admin-Center-Activity-tab.png'}} ?w=650,border=true)

The default Activity subtabs are:

*   **Users sessions**: provides information on who is logged in to the Platform.
*   **Events**: Lists the events that occurred on the platform. You can filter this list to only get the events from a specific user or only events from a specific category.
*   **Background work**: provides information on the asynchronous tasks performed by the server, such as video conversion when a video is imported.

### Nuxeo Connect

You can connect your Nuxeo instance with your [Nuxeo Connect](http://www.nuxeo.com/en/services/support2) account. This enables you to manage your Support tickets from your Nuxeo application, to install hotfixes and to connect your Nuxeo instance to the Nuxeo Marketplace and use any addon you want.

![]({{file name='Admin-Center-Connect.png'}} ?w=650,border=true)

*   The **Nuxeo Connect registration status** tab is where you can register your instance, if you haven't done it earlier from the [setup wizard]({{page page='setup#setup-wizard'}}). When you have already registered, it displays your contract's and instance's information.
*   The **Nuxeo Connect tickets** tab will display the list of JIRA issues linked to your contract. This feature is not yet available, but you can see all your JIRA issues from the My support cases view on the [Nuxeo Connect website](http://connect.nuxeo.com).

### Update Center

This section of the Admin Center provides all the updates you can need (updates and hotfixes, Nuxeo Marketplace addons, direct access to your Nuxeo Studio customizations, local packages).

![]({{file name='Admin-Center-updateCenter.png'}} ?w=650,h=239,border=true)

*   The **Nuxeo software updates** tab displays the hotfixes available for your Nuxeo version and the updates for the packages you have installed.
*   The **Nuxeo Studio** tab enables you to update your application with your Nuxeo Studio customizations.
*   The **Private packages** tab displays the lists of packages specific to your project, hence private: the Studio customizations and possible packaged customizations done outside Studio.
*   The **Packages from Nuxeo Marketplace** displays the list of all available packages.
*   The **Local packages** tab displays the packages (hotfixes, addons, Studio customization) you have downloaded and that are either ready to be installed or already installed.

### Monitoring

This section of the Admin Center enables administrators to monitor some technical information and display messages to users.

![]({{file name='Admin-Center-monitoring.png'}} ?w=650,border=true)

*   The **Administrative Statuses** tab is the place from which you can display messages to the application's users, make the application unavailable or to make SMTP services unavailable.
*   The **Probes** tab enables you to check the access to the SQL repositories, LDAP directory and the local Nuxeo instance.
*   The **Nuxeo Event Bus** displays statistics about the processing of listeners.
*   The **Shell** tab enables users to use the [Nuxeo Shell]({{page page='nuxeo-shell'}}).

### Users & Groups

This section enables administrators to [create, edit, delete users and groups of users]({{page space='userdoc58' page='managing-users-and-groups'}}).

![]({{file name='AdminCenter-users-groups-tab.png'}} ?w=650,border=true)

### Vocabularies

From this section, administrators can [customize and adapt the values displayed in lists]({{page space='userdoc58' page='managing-vocabularies'}}) in the application.

![]({{file name='AdminCenter-vocabularies-tab.png'}} ?w=650,border=true)

### Themes

This section gives administrators access to Nuxeo Themes, that enables them to create new themes for the application.

![]({{file name='AdminCenter-themes-tab.png'}} ?w=650,h=178,border=true)

### Workflow

This section enables administrators to manage the different workflows available (including your customized workflows from Studio) and especially to define for which users the workflow is available.

![]({{file name='AdminCenter-workflow-tab.png'}} ?w=650,border=true)

## Document Management Module Tabs

The Document Management module adds the tabs below.

### New Activity Tab: Activity Charts

Installing the Document Management module on the Nuxeo Platform adds a new tab in the **Activity** section of the Admin Center, called **Activity charts**. As its name stands it, it displays graphical charts showing how the activity on the server evolved.

![]({{file name='AdminCenter-activity-charts.png'}} ?w=650,border=true)

### OAuth / Open Social

This section of the Admin Center enables administrators to manage the authentication with other applications using OAuth protocol and to[add new gadgets]({{page space='userdoc58' page='managing-dashboards#managing-external-gadgets'}}).

![]({{file name='AdminCenter-OAuth-OpenSocial-tab.png'}} ?w=650,border=true)

*   The **Server key** tabs shows the Nuxeo certificate that is required by other applications.
*   The **Services providers** and **Services providers tokens** tabs enable to declare external applications to which the Nuxeo Platform will connect.
*   The **Consumers** and **Consumers tokens** tabs enable to declare external applications that will connect to the Nuxeo Platform.

### Dashboards

This section enables administrators to [define the dashboard displayed by default to users]({{page space='userdoc58' page='managing-dashboards#defining-the-default-user-dashboard'}}) and to [add new gadgets]({{page space='userdoc58' page='managing-dashboards#managing-external-gadgets'}}).

![]({{file name='Admin-Center-dashboards.png'}} ?w=650,border=true)

## Social Collaboration Module Tabs

The Social Collaboration module adds the tabs below.

### Users Registrations

From this section, administrators can manage invitations to workspaces.

![]({{file name='AdminCenter-users-registration.png'}} ?w=650,border=true)

*   From the **User registration requests** tab, they can validate, refuse or revive requests to invite external people to access the Platform.
*   From the **Configuration** tab, they can define how the invitation system should behave (limiting invitations to users that already have a user account for instance).

{{#> callout type='tip' }}

This tab is also available without the Social Collaboration module when you install the Nuxeo Platform User Registration addon.

{{/callout}}

### Social Collaboration

This sectionenables administrators to manage the creation of new social workspaces.

![]({{file name='Admin-Center-social-collaboration.png'}} ?w=650,h=240,border=true)

&nbsp;