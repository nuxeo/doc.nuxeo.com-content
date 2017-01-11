---
title: Running your Projects on the Server
review:
    comment: ''
    date: ''
    status: ok
labels:
    - server-view
toc: true
confluence:
    ajs-parent-page-id: '22905665'
    ajs-parent-page-title: Nuxeo IDE
    ajs-space-key: IDEDOC
    ajs-space-name: Nuxeo IDE
    canonical: Running+your+Projects+on+the+Server
    canonical_source: 'https://doc.nuxeo.com/display/IDEDOC/Running+your+Projects+on+the+Server'
    page_id: '8684239'
    shortlink: z4KE
    shortlink_source: 'https://doc.nuxeo.com/x/z4KE'
    source_link: /display/IDEDOC/Running+your+Projects+on+the+Server
tree_item_index: 300
history:
    -
        author: Bertrand Chauvin
        date: '2014-11-14 17:08'
        message: dded warning about 6.0 bu
        version: '25'
    -
        author: Manon Lumeau
        date: '2014-09-04 11:16'
        message: ''
        version: '24'
    -
        author: Solen Guitter
        date: '2014-09-01 11:57'
        message: ''
        version: '23'
    -
        author: Solen Guitter
        date: '2014-08-28 14:58'
        message: ''
        version: '22'
    -
        author: Solen Guitter
        date: '2014-08-28 14:57'
        message: ''
        version: '21'
    -
        author: Anahide Tchertchian
        date: '2012-06-27 19:08'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '20'
    -
        author: Anahide Tchertchian
        date: '2012-06-27 19:08'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '19'
    -
        author: Anahide Tchertchian
        date: '2012-06-27 19:08'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '18'
    -
        author: Anahide Tchertchian
        date: '2012-06-27 19:08'
        message: ''
        version: '17'
    -
        author: Anahide Tchertchian
        date: '2012-06-27 19:08'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '16'
    -
        author: Anahide Tchertchian
        date: '2012-06-27 19:08'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '15'
    -
        author: Anahide Tchertchian
        date: '2012-06-27 19:08'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '14'
    -
        author: Anahide Tchertchian
        date: '2012-06-27 19:08'
        message: Migrated to Confluence 4.0
        version: '13'
    -
        author: Anahide Tchertchian
        date: '2012-06-27 19:08'
        message: ''
        version: '12'
    -
        author: Anahide Tchertchian
        date: '2012-06-27 19:08'
        message: ''
        version: '11'
    -
        author: Benjamin Jalon
        date: '2012-03-17 12:14'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2011-10-06 15:00'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2011-10-06 12:26'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2011-10-06 11:06'
        message: ''
        version: '7'
    -
        author: Bogdan Stefanescu
        date: '2011-10-05 14:36'
        message: ''
        version: '6'
    -
        author: Bogdan Stefanescu
        date: '2011-10-05 14:24'
        message: ''
        version: '5'
    -
        author: Bogdan Stefanescu
        date: '2011-10-05 14:24'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2011-10-04 18:06'
        message: ''
        version: '3'
    -
        author: Solen Guitter
        date: '2011-10-04 15:17'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2011-09-28 17:18'
        message: ''
        version: '1'

---
{{multiexcerpt 'ide-replaced-by-generator-info' page='nuxeo-ide'}}

Installing Nuxeo IDE adds a new perspective to Eclipse, called Nuxeo. This perspective is composed of three views:

*   [the Studio view]({{page page='browsing-a-studio-project-content'}}),
*   the Shell view,
*   the server view.

The server view enables you to deploy your changes and control the runtime.

## {{> anchor 'configuringserverlauncher'}}Configuring the Server Launcher

The server launcher can be configured from the Eclipse preferences.

1.  In the Eclipse preferences, click on **Nuxeo** > **Run/Debug**.
2.  Change the parameters you need (see below).
3.  Click on the **Apply** or **OK** button.

**Run/Debug parameters**

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">

Field

</th><th colspan="1">

Description

</th></tr><tr><td colspan="1">

VM Arguments

</td><td colspan="1">

System properties of the JVM

</td></tr><tr><td colspan="1">

Debug port

</td><td colspan="1">

Port used to debug

</td></tr><tr><td colspan="1">

Suspend server

</td><td colspan="1">

Indicate if you want the server to wait for the debugger to be attached to it before actually starting.

</td></tr></tbody></table></div>

## {{> anchor 'deploymentprofiles'}}Deployment Profiles

As you develop new features, you want to be able to easily test them. To do so, you need to deploy them on the Nuxeo SDK. However, you often don't want to deploy all the features or projects you are working on. You may want to deploy only some of them. To make this easy, Nuxeo IDE includes a deployment profile configuration. A deployment profile is a set of Nuxeo IDE projects that will be deployed at the same time.

To create a new deployment profile:

{{! multiexcerpt name='deployment-profile-creation'}}

1.  &nbsp;Go into the **Nuxeo Server** view (on the bottom right).
2.  Click on the button&nbsp;![]({{file name='NxIDE_deploy_project_button.png'}}) in the view toolbar. The button tooltip is "Select projects to deploy on server".
3.  Click on **Add**.
    ![]({{file name='NxIDE_deployment_profile_conf.png'}} ?w=450,h=338,border=true)
4.  Enter a name (in the right panel) for your deployment profile. Example: "My Projects".
5.  In the left panel click on the newly created profile.
6.  In the right panel, check the projects that will be deployed with this profile.
7.  If you want the new profile to be the default deployment profile, check it.
8.  Click on the **OK** button.

{{! /multiexcerpt}}

## {{> anchor 'launchingserver'}}Launching the Server

The server can be started either in **Run** or **Debug** mode. In both cases, when launched the server will automatically deploy (at the end of the start process) all the projects and user libraries you configured in the current deployment profile.

{{#> callout type='tip' }}

You can see in the server console messages that are detailing which projects and user libraries were deployed.

{{/callout}}

## {{> anchor 'remotedebugging'}}Remote Debugging

If you need to check your developments or watch Nuxeo source code behavior this is possible throw the remote debugging.

### With Eclipse and Nuxeo IDE

First configure the port the JVM will listen for remote debug:

1.  Go to Preferences > Nuxeo > Run/Debug
2.  Set a value for the debug port (choose one free :smile:
    Then start your Nuxeo Server from the Nuxeo perspective as debug and connect Eclipse to the JVM:
3.  Go to Run > Debug configurations... > Remote Java Application
4.  Create a new debug configurations
5.  Type the host name as localhost and the port as the one set below

You can set breakpoints and have fun.

### With Other IDE or with a Server Not Local

First configure the port the JVM will listen for remote debug:

1.  Open the nuxeo.conf file, by default is here `$TOMCAT_HOME/bin/nuxeo.conf or /etc/nuxeo.conf`.

2.  Uncomment the following line:

    ```
    #JAVA_OPTS=$JAVA_OPTS -Xdebug -Xrunjdwp:transport=dt_socket,address=8787,server=y,suspend=n
    ```

3.  You can change the port number here.
4.  Start your server.
5.  Add source code you want to watch into your IDE.
6.  Create a remote debug connection with the port set.

You can set breakpoints and have fun.

## Hot Reload

If you are modifying the sources of a project while the server is running, you may reload your changes on the server by simply clicking on the **refresh** button (in the Server View).
A message will appear in the server console detailing the projects that were reloaded.

{{#> callout type='note' }}

Be sure that the project you modify is selected in the current deployment profile, otherwise it will not be reloaded on the server.

{{/callout}}

You can modify the current deployment profile at any time by removing or adding projects. The next time you will click on the **refresh** button, the old profile will be uninstalled form the server and the new one will be installed. Projects that are common to both old and new deployment profiles will be reloaded.

For more information about Nuxeo hot reload support, see [Supporting Hot Reload]({{page space='corg' page='supporting-hot-reload'}}).

{{#> callout type='warning' }}

A bug affects hot reload when using Nuxeo 6.0 SDK (fixed in Nuxeo 6.0 HF01). Refer to the following JIRA ticket for a workaround if you have not installed any hotfix yet: [fix dev bundles not taken in account](https://jira.nuxeo.com/browse/NXP-15889)

{{/callout}}
