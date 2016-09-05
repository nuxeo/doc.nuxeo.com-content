---
title: Server Start and Stop
toc: true
confluence:
    ajs-parent-page-id: '16810081'
    ajs-parent-page-title: Installation and Administration
    ajs-space-key: ADMINDOC58
    ajs-space-name: Nuxeo Installation and Administration - 5.8
    canonical: Server+Start+and+Stop
    canonical_source: 'https://doc.nuxeo.com/display/ADMINDOC58/Server+Start+and+Stop'
    page_id: '16809987'
    shortlink: A4AAAQ
    shortlink_source: 'https://doc.nuxeo.com/x/A4AAAQ'
    source_link: /display/ADMINDOC58/Server+Start+and+Stop
history:
    - 
        author: Solen Guitter
        date: '2013-10-14 17:21'
        message: igration of unmigrated content due to installation of a new plugi
        version: '38'
    - 
        author: Solen Guitter
        date: '2013-10-14 17:20'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '37'
    - 
        author: Solen Guitter
        date: '2013-10-14 17:20'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '36'
    - 
        author: Solen Guitter
        date: '2013-10-14 17:20'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '35'
    - 
        author: Solen Guitter
        date: '2013-10-14 17:20'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '34'
    - 
        author: Solen Guitter
        date: '2013-10-14 17:20'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '33'
    - 
        author: Solen Guitter
        date: '2013-10-14 17:20'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '32'
    - 
        author: Solen Guitter
        date: '2013-10-14 17:20'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '31'
    - 
        author: Solen Guitter
        date: '2013-10-14 17:20'
        message: ''
        version: '30'
    - 
        author: Solen Guitter
        date: '2013-08-27 10:32'
        message: ''
        version: '29'
    - 
        author: Solen Guitter
        date: '2013-08-27 10:32'
        message: ''
        version: '28'
    - 
        author: Florent Guillaume
        date: '2012-08-13 12:43'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '27'
    - 
        author: Florent Guillaume
        date: '2012-08-13 12:43'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '26'
    - 
        author: Florent Guillaume
        date: '2012-08-13 12:43'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '25'
    - 
        author: Florent Guillaume
        date: '2012-08-13 12:43'
        message: Migrated to Confluence 4.0
        version: '24'
    - 
        author: Florent Guillaume
        date: '2012-08-13 12:43'
        message: Removed 5.4 specific steps
        version: '23'
    - 
        author: Solen Guitter
        date: '2011-12-07 14:48'
        message: Removed 5.4 specific steps
        version: '22'
    - 
        author: Solen Guitter
        date: '2011-12-07 12:36'
        message: Removed 5.4 specific steps
        version: '21'
    - 
        author: Solen Guitter
        date: '2011-12-07 12:24'
        message: ''
        version: '20'
    - 
        author: Solen Guitter
        date: '2011-12-07 12:23'
        message: ''
        version: '19'
    - 
        author: Solen Guitter
        date: '2011-06-16 12:41'
        message: ''
        version: '18'
    - 
        author: Solen Guitter
        date: '2011-05-19 09:50'
        message: added Windows 7 info
        version: '17'
    - 
        author: Solen Guitter
        date: '2011-05-16 15:28'
        message: ''
        version: '16'
    - 
        author: Solen Guitter
        date: '2011-04-26 17:00'
        message: ''
        version: '15'
    - 
        author: Solen Guitter
        date: '2011-04-26 16:47'
        message: ''
        version: '14'
    - 
        author: Solen Guitter
        date: '2011-04-22 19:00'
        message: fixed typo
        version: '13'
    - 
        author: Solen Guitter
        date: '2011-04-22 18:57'
        message: ''
        version: '12'
    - 
        author: Solen Guitter
        date: '2011-04-22 18:46'
        message: ''
        version: '11'
    - 
        author: Solen Guitter
        date: '2011-04-22 18:42'
        message: ''
        version: '10'
    - 
        author: Solen Guitter
        date: '2011-04-22 18:25'
        message: ''
        version: '9'
    - 
        author: Solen Guitter
        date: '2011-04-12 10:13'
        message: ''
        version: '8'
    - 
        author: Solen Guitter
        date: '2011-04-12 10:05'
        message: ''
        version: '7'
    - 
        author: Solen Guitter
        date: '2011-04-11 19:41'
        message: ''
        version: '6'
    - 
        author: Solen Guitter
        date: '2011-03-24 17:32'
        message: ''
        version: '5'
    - 
        author: Solen Guitter
        date: '2011-03-22 18:40'
        message: ''
        version: '4'
    - 
        author: Solen Guitter
        date: '2011-03-22 18:39'
        message: ''
        version: '3'
    - 
        author: Julien Carsique
        date: '2011-03-11 18:55'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2011-03-11 15:12'
        message: ''
        version: '1'

---
On this page, you will see how to start and stop your Nuxeo application.

Nuxeo applications come with a Control Panel that allows you to start and stop the server easily, and to access more administration features.

![]({{file name='Nuxeo_Control_Panel.png'}} ?w=300)

The Control Panel gives you access to:

*   A summary of the server status: is it running, is stopped, etc...
*   The logs of the server: the console and server logs are information of the tasks the server is doing and messages on how it is processing these tasks.
*   The [Nuxeo Shell]({{page page='nuxeo-shell'}}): the administrators' Swiss Army knife.

Here are the different ways to start and stop your Nuxeo application, depending on your OS:

## Starting Your Nuxeo Application

{{#> callout type='note' }}

By default, you cannot run two Nuxeo applications at the same time. If you want to run two Nuxeo applications at the same time (for instance a Nuxeo DM and a Nuxeo DAM), you need to [change the default port]({{page page='configuration-examples#change-the-default-port-8080'}}) used by one of the Nuxeo servers.

{{/callout}}

Depending on your OS, there are different ways to start the application. The steps below show how to use the Control Panel to start the server. However, you can use the command below in a terminal if you prefer. From the `$NUXEO_HOME/bin`, execute `nuxeoctl start`. You can refer to the [nuxeoctl and Control Panel Usage]({{page page='nuxeoctl-and-control-panel-usage'}}) for more information on the `nuxeoctl` command and the Control Panel.

### Starting Your Application on Windows {{> anchor 'start-windows'}}

{{!-- unmigrated-inline-wiki-markup: {multi-excerpt:name=start_windows} # Open the Nuxeo Control Panel: #* In the folder \{{C:\Nuxeo application}}, double-click on \{{Start Nuxeo.bat}}. #* In the folder \{{C:\Nuxeo application\bin\}}, double-click on \{{nuxeoctl.bat}}. The Nuxeo Control Panel opens. # Click on the *Start* button. Starting the Nuxeo server takes between a few seconds and several minutes, depending on your hardware and the distribution you have chosen to install. When the server is started, the *Start* button becomes a *Stop* button. # Open a browser and type the URL [http://localhost:8080/nuxeo/].{multi-excerpt} --}}

If the server is started for the first time after the installation, the [startup wizard]({{page page='setup#wizard'}}) is displayed so you can select what module you want to install on the platform and help you configure it.
Otherwise, the login page is displayed so you can use the application.

{{!-- unmigrated-inline-wiki-markup: {multi-excerpt:name=infos_windows} {info} On Windows 7, you need to run the \{{nuxeoctl.bat}} and \{{Start Nuxeo.bat}} commands as an administrator if you haven't installed your Nuxeo application at the root of \{{C:\}} (for instance in \{{C:\Program Files}}). To run them as an administrator, right-click on the command and click on "Run as administrator". {info} On Windows, it is possible to start Nuxeo as a service. Please report the [Installing the Nuxeo Platform as a Windows service] page for guidelines and examples.{multi-excerpt} --}}

### Starting Your Application on Linux {{> anchor 'start-linux'}}

Nuxeo applications are started using scripts.

{{!-- unmigrated-inline-wiki-markup: {multi-excerpt:name=start_linux}# Launch a terminal and go to your installation directory. # Start the server using the \{{nuxeoctl}} script (located in the \{{bin}} directory): {code}./bin/nuxeoctl gui{code} {tip} The command used to launch the Control Panel may not be executable by default. If it is the case, in the terminal go to the \{{bin}} directory of Nuxeo and type the line below to be able to use it: \{{chmod +x *.sh *ctl}} {tip} The Control Panel opens. # Click on the *Start* button. Starting the Nuxeo server takes between 30 sec and several minutes, depending on your hardware and the distribution you have chosen to install. When the server is started, the *Start* button becomes a *Stop* button. # Open a browser and type the URL [http://localhost:8080/nuxeo/]. If the server is started for the first time after the installation, the [startup wizard|Setup#wizard] is displayed so you can select what module you want to install on the platform and help you configure it. Otherwise, the login page is displayed so you can use the application.{multi-excerpt} --}}

### Starting Your Application on Mac OS X {{> anchor 'start-macos'}}

Mac OS users can use either the [same steps as Linux users](#start-linux) or some Mac OS convenient commands (see below).

{{!-- unmigrated-inline-wiki-markup: {multi-excerpt:name=start_macosx}# From the Finder, click on "Start Nuxeo.command". You can also drag and drop the start script in the terminal and press Enter. {tip} The command may not be executable by default. If it is the case, in the terminal go to the \{{bin}} directory of Nuxeo and type the line below: \{{chmod +x *.command}} {tip} The Control Panel opens. # Click on the *Start* button. Starting the Nuxeo server takes between 30 sec and several minutes, depending on your hardware and the distribution you have chosen to install. When the server is started, the *Start* button becomes a *Stop* button. # Open a browser and type the URL [http://localhost:8080/nuxeo/]. If the server is started for the first time after the installation, the [startup wizard|Setup#wizard] is displayed so you can select what module you want to install on the platform and help you configure it. Otherwise, the login page is displayed so you can use the application.{multi-excerpt} --}}

## Stopping Your Nuxeo Application

The steps to stop your Nuxeo application are the same for all operating systems.

{{#> panel heading='To stop your server:'}}

1.  On the Control Panel, click on the **Stop** button.
    Stopping the server takes several seconds. When the server is stopped, the **Stop** button becomes a **Start** button.
2.  Close the Control Panel.

{{/panel}} {{#> callout type='tip' }}

If you started the server using the `nuxeoctl start` command in the terminal, use the `nuxeoctl stop`&nbsp;command to stop it.

{{/callout}}