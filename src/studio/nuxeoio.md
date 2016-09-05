---
title: nuxeo.io
toc: true
confluence:
    ajs-parent-page-id: '1409040'
    ajs-parent-page-title: Nuxeo Online Services
    ajs-space-key: Studio
    ajs-space-name: Nuxeo Online Services
    canonical: nuxeo.io
    canonical_source: 'https://doc.nuxeo.com/display/Studio/nuxeo.io'
    page_id: '19793798'
    shortlink: hgcuAQ
    shortlink_source: 'https://doc.nuxeo.com/x/hgcuAQ'
    source_link: /display/Studio/nuxeo.io
history:
    - 
        author: Solen Guitter
        date: '2015-04-14 13:05'
        message: ''
        version: '14'
    - 
        author: Solen Guitter
        date: '2014-11-27 11:21'
        message: ''
        version: '13'
    - 
        author: Solen Guitter
        date: '2014-11-06 17:58'
        message: ''
        version: '12'
    - 
        author: Solen Guitter
        date: '2014-09-29 16:48'
        message: ''
        version: '11'
    - 
        author: Solen Guitter
        date: '2014-09-29 16:34'
        message: 'Add development mode ON on default conf '
        version: '10'
    - 
        author: Manon Lumeau
        date: '2014-09-22 16:03'
        message: ''
        version: '9'
    - 
        author: Bob Canaway
        date: '2014-09-10 16:11'
        message: ''
        version: '8'
    - 
        author: Bob Canaway
        date: '2014-09-10 15:48'
        message: ''
        version: '7'
    - 
        author: Solen Guitter
        date: '2014-07-16 18:21'
        message: Add Passivated status
        version: '6'
    - 
        author: Manon Lumeau
        date: '2014-07-16 18:04'
        message: ''
        version: '5'
    - 
        author: Solen Guitter
        date: '2014-07-16 16:56'
        message: ''
        version: '4'
    - 
        author: Solen Guitter
        date: '2014-07-16 16:53'
        message: Add screen shots
        version: '3'
    - 
        author: Solen Guitter
        date: '2014-07-16 12:34'
        message: Add instance default configuration
        version: '2'
    - 
        author: Solen Guitter
        date: '2014-07-15 18:43'
        message: ''
        version: '1'

---
nuxeo.io provides Nuxeo Platform instances on demand in the cloud. A nuxeo.io environment contains an instance of a Nuxeo Platform that can be associated to a Nuxeo Studio Project.

## Managing your Environments

When you register to Nuxeo Connect an environment is automatically created. This environment is bound to the first Nuxeo Studio project you have. You can create additional environments, remove them or edit their properties.

### Creating a New Environment

1.  In the Environment column, type a name for your new environment.
2.  Click on the **Create** button.
    Your new environment is displayed.
    ![]({{file name='nuxeo.io_environment-created.png'}} ?w=650,border=true)
    It has a Fast Track Nuxeo Platform instance and is associated to the first Studio project you have access to. Your Nuxeo Platform instance is automatically registered on Nuxeo Connect so you can benefit from the Update Center features. You can [edit the environment properties](#edit-environment-properties), to change the associated Studio Project for instance.

### {{> anchor 'edit-environment-properties'}}Editing Your Environment Properties

1.  Click on an environment name in the Environment column.
2.  Click on the **Edit** button.
3.  Edit the environment properties (see below).
    ![]({{file name='nuxeo.io_environment-editing.png'}} ?w=500,border=true)
4.  Click on the **Save** button.
    ![]({{file name='nuxeo.io_environment-edited.png'}} ?w=500,border=true)

**Environment properties**

<table><tbody><tr><th colspan="1">Field</th><th colspan="1">Description</th></tr><tr><td colspan="1">Description</td><td colspan="1">A text that explains what the environment is meant for. Typically you can indicate if it's a development, a staging or a production environment.</td></tr><tr><td colspan="1">Studio Project</td><td colspan="1">Select the Studio project you want to be able to deploy on the Nuxeo Platform instance of this environment. This list shows all the Nuxeo Studio projects you have access to.</td></tr><tr><td colspan="1">Domain</td><td colspan="1">The URL at which the Nuxeo Platform is available.</td></tr></tbody></table>

### Deleting an Environment

You can delete an environment at any time. Deleting an environment is definitive.

**To delete an environment:**

1.  In the Environment column, click on the environment to delete.
2.  Click on the **Delete** button.
3.  Confirm deletion on the displayed popup.
    The environment is immediately deleted. The associated Nuxeo Platform instance is also immediately deleted and not accessible anymore.

## Managing your Nuxeo Platform instances

Each environment holds a Nuxeo Platform instance, that you start and stop when you need it. The status of your instance is displayed so you can see in a blink if it's available or not.

**Nuxeo Platform instances status**

*   Stopped: The Nuxeo Platform instance is currently not running. Users cannot access it.
*   Started: The Nuxeo Platform instance is currently running and usable.
*   Passivated: The Nuxeo Platform instance is currently inactive. It switches to this status after twelve hours without activity on the instance. The instance starts automatically as soon as someone tries to access it, without data loss.
*   Starting:The Nuxeo Platform instance is being started. It is not yet available for log in.
*   Stopping: The Nuxeo Platform instance is being stopped.
*   N/A: The status of the Nuxeo Platform instance is undefined. You can click on the Start button to force starting it.
*   Error: An error occurred during the start or stop process. It should automatically switch to the Starting status.

### Nuxeo Platform Instance Default Configuration

By default, when you create an environment, the Nuxeo Platform instance associated is automatically registered on Nuxeo Online Services and associated to your Nuxeo Studio project. Your environment has the following add-ons activated:

*   [Digital Asset Management]({{page space='nxdoc' page='digital-asset-management-dam'}})
*   [Template Rendering]({{page space='nxdoc' page='template-rendering-addon'}})
*   [Nuxeo Drive]({{page space='userdoc' page='nuxeo-drive'}})
*   [Nuxeo Diff]({{page space='userdoc' page='nuxeo-diff'}})
*   [Nuxeo Spreadsheet]({{page space='nxdoc' page='nuxeo-spreadsheet'}})
*   Nuxeo Web Mobile

All third-party software required for these packages such as document preview or video story-boarding are automatically installed and set up.

You can easily uninstall these add-ons from the Update Center. Note however that nuxeo.io instances don't have the regular **Local packages** tab in the Update Center. All add-ons and their status is however available from the **Nuxeo Marketplace** tab.

In the **Nuxeo Studio** tab, the development mode is activated by default. You can thus directly enjoy hot reload when you deploy your Nuxeo Studio configuration.

Admin limitations as compared to a local Nuxeo Platform instance are:

*   No **System info** > **Configuration** tab
*   No **Update Center** > **Local Packages** tab
*   You cannot unregister your nuxeo.io instance
*   **Elasticsearch**: only the Admin tab is available

### Starting a Nuxeo Platform Instance

To start an instance, click on the **Start** button.

![]({{file name='nuxeo.io_instance-stopped.png'}} ?w=500,border=true)

The instance takes about one minute to start. The status Started is displayed when the instance is available and the Start button is replaced by a Stop button. You can now use it by clicking the domain URL.

### Stopping a Nuxeo Platform Instance

When a instance is started, you can stop it by clicking the **Stop** button. The instance goes to the status Stopping and takes about one minute to be stopped. You cannot use it anymore, but all your data are kept and will be available at the next start. An error page will be displayed if you try to access it using its domain URL.

![]({{file name='nuxeo.io_instance-started.png'}} ?w=500,border=true)

### Using a Nuxeo Platform instance

Your nuxeo.io Nuxeo Platform instance is a regular Nuxeo Platform instance. You can use it the same way you'd use an on premise Nuxeo Platform instance. You can check out the [User Guide]({{page space='userdoc'}}) for a complete description of the Nuxeo Platform features.

## Upgrading your Nuxeo Platform Instance

To upgrade your Nuxeo Platform instance, you can either [upgrade the target version of the Studio project]({{page page='update-the-version-of-your-target-platform'}}) associated to your environment or edit the environment properties to change the Studio project for one targeting a more recent version of the platform.