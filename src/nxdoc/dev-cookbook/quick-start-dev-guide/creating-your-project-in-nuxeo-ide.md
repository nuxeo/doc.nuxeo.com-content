---
title: Creating your project in Nuxeo IDE
toc: true
confluence:
    ajs-parent-page-id: '17334418'
    ajs-parent-page-title: Quick Start Dev Guide
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Creating+your+project+in+Nuxeo+IDE
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/Creating+your+project+in+Nuxeo+IDE'
    page_id: '17334404'
    shortlink: hIAIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/hIAIAQ'
    source_link: /display/NXDOC58/Creating+your+project+in+Nuxeo+IDE
history:
    - 
        author: Solen Guitter
        date: '2015-08-28 14:02'
        message: ''
        version: '3'
    - 
        author: Solen Guitter
        date: '2015-01-30 10:28'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2013-07-15 14:05'
        message: ''
        version: '1'

---
&nbsp;

## Creating a Nuxeo project (not a Webengine project)

Now that you are familiar with managing your server instance, we can start coding. First thing to do is to create a new Nuxeo project.

1.  Click on the **New Nuxeo Artifact** wizard button (![]({{file name='NxIDE_button.png' page='installing-nuxeo-ide'}})).
    It displays a list of wizards used to automatically generate some code.
2.  Select the first one, **Nuxeo Plugin Project**, and click on **Next**.
3.  You are first asked to choose an ID for your project. Let's name it `random-string-generator`. On the same screen you can choose the Java Root package (default is `org.nuxeo.sample`), the source code location and a working set. Here we'll leave the default values.
4.  Click on **Next**.
    You are now on the **Maven Settings** page. The whole Nuxeo Platform is built using Maven. You can choose to customize those Maven metadata, but it's not necessary.
5.  Leave the default one and click on the **Finish** button.
    Your project is created and displayed in the **Project Explorer** panel.

## Configuring Studio in IDE

We now have a brand new Nuxeo bundle. One of the cool feature of Nuxeo IDE is that it lets you bind your Eclipse project to your Nuxeo Studio project. Since you are using the Nuxeo perspective, you have two new tabs on the left Eclipse panel: one named **Nuxeo Components** and one named **Nuxeo Studio**. Take a look at the latest. You should see your Studio project if your Eclipse is properly configured. You can browse your Studio project from here. Time to make sure you have deployed the ID generation template :)

Now to actually bind the two projects together:

1.  Right-click on your Eclipse project and select **Properties**.
    You should have a Nuxeo entry, which contains a Nuxeo Studio sub-entry.
2.  Select your Studio project and click on **OK**.
3.  You have now binded your Eclipse project to your Studio project. This might seems like nothing, but we'll see how cool this actually is in the next step.