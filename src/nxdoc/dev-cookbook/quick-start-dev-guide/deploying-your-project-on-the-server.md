---
title: Deploying your project on the server
toc: true
confluence:
    ajs-parent-page-id: '17334418'
    ajs-parent-page-title: Quick Start Dev Guide
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Deploying+your+project+on+the+server
    canonical_source: >-
        https://doc.nuxeo.com/display/NXDOC58/Deploying+your+project+on+the+server
    page_id: '17334407'
    shortlink: h4AIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/h4AIAQ'
    source_link: /display/NXDOC58/Deploying+your+project+on+the+server
history:
    - 
        author: Solen Guitter
        date: '2015-08-28 14:04'
        message: ''
        version: '3'
    - 
        author: Solen Guitter
        date: '2013-07-15 14:14'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2013-07-15 14:07'
        message: ''
        version: '1'

---
&nbsp;

## Create a deployment profile

If you deploy your Studio project as is, you will have an error saying the operation does not exist. We need to deploy it on the server. To do that:

1.  Click on the 'select projects to deploy on server' button ![]({{file name='deploy.gif'}}), in the Nuxeo Server view.
    You should see a new panel opening called Deployment Configurations.

    ![]({{file name='screenshot-1373295791.png'}} ?w=500,border=true)

2.  Click on the **Add** button and give the new deployment a name.
    Now you can select the project to deploy on the server.
    ![]({{file name='screenshot-1373295813.png'}} ?w=500,border=true)
3.  Click on **OK**.
    You deployment profile is now created. You can now load it on your server.

## Hot Reload the Project

Click on the 'Reload projects on server' button to&nbsp; You should see something like this in the logs:

{{#> panel type='code' heading='Reload Logs'}}

```none
=== Reloaded Projects on Target Server ===
= Project: nuxeo-quickstart
==========================================
2013-07-08 17:05:42,151 INFO [org.nuxeo.runtime.reload.ReloadComponent] Before undeploy bundle with name 'nuxeo-quickstart'.
======================================================================
= Component Loading Status: Pending: 0 / Unstarted: 0 / Total: 595
======================================================================
2013-07-08 17:05:42,152 INFO [org.nuxeo.runtime.reload.ReloadComponent] Undeploy done.
======================================================================
= Component Loading Status: Pending: 0 / Unstarted: 0 / Total: 594
======================================================================
2013-07-08 17:05:42,366 INFO [org.nuxeo.runtime.reload.ReloadComponent] Flush the JAAS cache
2013-07-08 17:05:42,368 INFO [org.nuxeo.runtime.reload.ReloadComponent] Before deploy bundle for file at '/home/ldoguin/workspaces/sample/nuxeo-quickstart/pojo-bin/main'
======================================================================
= Component Loading Status: Pending: 0 / Unstarted: 0 / Total: 594
======================================================================
2013-07-08 17:05:42,373 INFO [org.nuxeo.runtime.reload.ReloadComponent] Deploy done for bundle with name 'nuxeo-quickstart'.
======================================================================
= Component Loading Status: Pending: 0 / Unstarted: 0 / Total: 595
======================================================================
2013-07-08 17:05:42,373 INFO [org.nuxeo.runtime.reload.ReloadComponent] Install web resources
2013-07-08 17:05:42,374 INFO [org.nuxeo.runtime.reload.ReloadComponent] Reload runtime properties
```

{{/panel}}

It means your project has been successfully loaded to your server.&nbsp;

## Verify the result on the server

<span style="color: rgb(51,51,51);font-size: 10.0pt;font-weight: normal;line-height: 13.0pt;">Now try to create a Book document again. Cool huh?&nbsp;This is of course a simple example, but now you know how to interact between your Eclipse project and Nuxeo Studio. You can go wild and add as many operations as you need for your operation chains and workflows.</span>

![]({{file name='FinalExample.png'}} ?w=603,h=510,border=true)