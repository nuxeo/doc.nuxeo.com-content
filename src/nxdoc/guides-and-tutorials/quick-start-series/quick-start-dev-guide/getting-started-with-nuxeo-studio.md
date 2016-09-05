---
title: Getting Started with Nuxeo Studio
toc: true
confluence:
    ajs-parent-page-id: '22380836'
    ajs-parent-page-title: Quick Start Dev Guide
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: Getting+Started+with+Nuxeo+Studio
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC60/Getting+Started+with+Nuxeo+Studio'
    page_id: '22380822'
    shortlink: FoFVAQ
    shortlink_source: 'https://doc.nuxeo.com/x/FoFVAQ'
    source_link: /display/NXDOC60/Getting+Started+with+Nuxeo+Studio
history:
    - 
        author: Solen Guitter
        date: '2016-04-14 12:41'
        message: pdate Studio menu label
        version: '14'
    - 
        author: Solen Guitter
        date: '2016-03-31 15:48'
        message: Fix links
        version: '13'
    - 
        author: Solen Guitter
        date: '2016-03-02 09:30'
        message: ''
        version: '12'
    - 
        author: Solen Guitter
        date: '2016-03-02 09:26'
        message: ''
        version: '11'
    - 
        author: Solen Guitter
        date: '2016-01-08 11:02'
        message: Update titles to fix anchor links
        version: '10'
    - 
        author: Manon Lumeau
        date: '2014-11-07 10:48'
        message: ''
        version: '9'
    - 
        author: Manon Lumeau
        date: '2014-11-07 10:48'
        message: ''
        version: '8'
    - 
        author: Manon Lumeau
        date: '2014-11-07 10:47'
        message: ''
        version: '7'
    - 
        author: Manon Lumeau
        date: '2014-11-07 10:44'
        message: ''
        version: '6'
    - 
        author: Manon Lumeau
        date: '2014-11-07 10:44'
        message: ''
        version: '5'
    - 
        author: Manon Lumeau
        date: '2014-11-07 10:39'
        message: ''
        version: '4'
    - 
        author: Manon Lumeau
        date: '2014-11-07 10:35'
        message: ''
        version: '3'
    - 
        author: Manon Lumeau
        date: '2014-11-06 12:23'
        message: ''
        version: '2'
    - 
        author: Manon Lumeau
        date: '2014-11-06 12:21'
        message: ''
        version: '1'

---
This page explains how to start customizing the Nuxeo Platform using Nuxeo Studio. It will guide you through the steps to:

*   Get a Nuxeo Studio project using Nuxeo Connect
*   Get a running Nuxeo Platform instance
*   Change the logo of your Nuxeo Platform instance
*   Create a new Contract document type in Studio

## Step 1 - Get a Nuxeo Connect Account

Nuxeo Studio is a Nuxeo tool provided as part of the Nuxeo Connect subscription offer. If you are a Nuxeo customer, you should already have a username/password to connect and access to your Studio project. Otherwise, we provide a 30-day trial offer so you can discover Nuxeo Studio and its configuration capabilities.

1.  Go to the&nbsp;[Nuxeo Connect trial registration form](http://www.nuxeo.com/downloads/#online-trial).
2.  Fill in the form. Provide a valid email address or else registration will not be completed.
3.  Confirm registration by clicking on the link sent to the email address in the previous step.
    Your Connect account is created.
    You can now access Nuxeo Studio by clicking on the&nbsp;link&nbsp;provided in the last email received.

## Step 2 - Getting a Nuxeo Platform Instance

You automatically get a nuxeo.io instance created when you subscribe to the Nuxeo Connect trial offer. Thus&nbsp;you can now either use a nuxeo.io instance in the Cloud. &nbsp;Or you can run a Nuxeo Platform instance on your computer.&nbsp;

### Working in the Cloud...

When you register to [Nuxeo Connect](http://www.nuxeo.com/downloads/#online-trial) a Nuxeo Platform environment is automatically created. This environment is bound to the first Nuxeo Studio project you have. All third-party software are installed and set up.

1.  Go to [nuxeo.io](https://manager.nuxeo.io).
    Your environment is stopped by default.
2.  Click on the **Start** button.
3.  Click on the instance URL to access your Nuxeo Platform environment.
    Your Nuxeo Platform instance is ready to be customized.
    Development mode is activated so you can enjoy hot reload of your Nuxeo Studio configuration.

![]({{file name='nuxeo_io.png'}} ?w=570,border=true)

### ...Or Working on Your Desktop

Installing the Nuxeo Platform using the [.zip package](http://www.nuxeo.com/downloads/) installs the Nuxeo Platform only. External dependencies must be [installed separately]({{page space='admindoc60' page='installing-and-setting-up-related-software'}}).

**To install and start the Nuxeo Platform zip archive:**

1.  Unzip the .zip archive using your favorite tool.
2.  Click on the Start Nuxeo.command to start the server.
3.  In a browser, go to [http://localhost:8080/nuxeo](http://localhost:8080/nuxeo).
4.  Fill in the information in the configuration wizard steps.
5.  At the Nuxeo Connect step, use your Nuxeo Connect account created above.
6.  Click on **Start** at the final step.&nbsp;
    Your application is ready to use.
    You now need to activate development mode so as to enjoy the hot reload of your Nuxeo Studio configuration.

**To activate development mode:**

1.  When the application is started, log in with the Administrator / Administrator credentials.
2.  Click on&nbsp;**Admin Center**&nbsp;> **Update Center**.
    The Nuxeo Studio tab is displayed.
3.  Click on the&nbsp;**Enable**&nbsp;button to activate development mode.
4.  Click on the **Restart Server** button displayed on top of the Admin Center.
    The Nuxeo Platform instance restarts. You can then enjoy your Nuxeo Studio configuration without restarting your server.

Once your project registered on Connect, you can start customizing your Nuxeo Application.&nbsp;&nbsp;The first&nbsp;customizations&nbsp;occur in Nuxeo Studio, where you can easily create new&nbsp;[document types]({{page space='studio' page='documents'}}),&nbsp;[content views]({{page space='studio' page='content-views'}})&nbsp;, etc. Here, we will change the logo and then create a document type "Contract".

You can now access Nuxeo Studio from Connect by clicking on this&nbsp;link: [connect.nuxeo.com/nuxeo/](http://connect.nuxeo.com/nuxeo/).&nbsp;

## Step 3 - Editing the Logo

Goal is to change the logo displayed in the banner of the Nuxeo Platform application. You must preliminary have a logo in png or jpg.

### Studio Customization

**Change the logo:**

1.  In Studio's left menu, click on the&nbsp;**Branding**&nbsp;section.
2.  Click on the&nbsp;**New**&nbsp;button.
3.  In Feature ID field, type "MyBranding" and click on the&nbsp;**Next**&nbsp;button.
4.  In **Main Pages** tab:

    1.  Check-box "Set as default branding" must be checked.
    2.  Click on the&nbsp;**Select Resource**&nbsp;button of the "Logo image" field.
        A "Select Resource" window pops up. It shows a list of images imported with the DM template.
    3.  Click on&nbsp;**Choose File**&nbsp;and select an image from your desktop.
    4.  Click on the&nbsp;**Upload&nbsp;**button.
        The selected image is uploaded to Studio, added to the list of available images and selected.
    5.  Click on the&nbsp;**Ok**&nbsp;button at the bottom of the popup window.
        The path to the uploaded image is displayed next to the&nbsp;**Select resource**&nbsp;button.

### **Deploying Changes on Your Nuxeo Platform Instance
**

1.  Go to your Nuxeo Platform instance.
2.  Connect as Administrator with Administrator password.
3.  Click on&nbsp;**Admin Center**&nbsp;>&nbsp;**Update Center**&nbsp;>&nbsp;**Nuxeo Studio**.
4.  Click on the&nbsp;**Update**&nbsp;button.
    Your logo is updated.

## Step 4 - Create a Contract Document Type&nbsp;

Here we want to create a document type "Contract" that will hold specific metadata related to the notion of contract: contract owner, starting date, policy.

### Studio Customization

1.  Unfold the&nbsp;**Content Model**&nbsp;item of the Studio tree, click on&nbsp;**Document Types**&nbsp;and click the&nbsp;**New**&nbsp;button.
2.  Fill in the creation form and click on&nbsp;**Next**:
    *   ID: Contract
    *   Extends: File
    *   Label: Contract
    *   Description: Contract document type for internal use.Your document type is created.
3.  Fill in the&nbsp;[ **Definition**&nbsp;tab]({{page space='studio' page='documents'}}):
    ![]({{file name='definition_contract.png'}} ?w=600,h=365,border=true)
4.  Fill in the&nbsp;[&nbsp;**Schema**&nbsp;tab]({{page space='studio' page='schemas'}})&nbsp;with the following metadata:&nbsp;
    ![]({{file name='schema_contract.png'}} ?w=600,border=true)

5.  Specify the&nbsp;[form that will be used to create the document (aka creation layout)]({{page space='studio' page='form-layouts'}}):&nbsp;
    1.  Click on the&nbsp; icon&nbsp;![]({{file name='delete.gif' space='studio' page='studio-icons-index'}})&nbsp;to remove the WARNING and Description widgets.
    2.  Drag and drop the fields "Owner", "Start" and "Policy" from the schema Contract to the grid.
    3.  Click on&nbsp;_&nbsp;![]({{file name='editor_area.gif' space='studio' page='studio-icons-index'}})_ &nbsp;if you want to edit their label and click on the popup&nbsp;**Save**&nbsp;button.&nbsp;
        ![]({{file name='creation_layout_contract.png'}} ?w=580,border=true)
6.  On the Edit layout (the form used to update the metadata of the document):
    1.  Click on the&nbsp;button&nbsp;**Import Layout**&nbsp;and select&nbsp;**Import 'create' layout**.
    2.  Click on the button&nbsp;**Add Row**.&nbsp;
    3.  Drag and drop the field Reminder from the schema Contract to the grid.
    4.  Click on&nbsp;_&nbsp;![]({{file name='editor_area.gif' space='studio' page='studio-icons-index'}})_ &nbsp;if you want to edit the widget label and click on the popup&nbsp;**Save**&nbsp;button.&nbsp;
        ![]({{file name='edit_layout_contract.png'}} ?w=600,border=true)
7.  Repeat the Edit layout steps on the View Layout.
8.  Click on&nbsp;**Save.**

### **Deploying Changes on Your Nuxeo Platform Instance
**

1.  Go to your Nuxeo Platform instance.
2.  Connect as Administrator with Administrator password.
3.  Click on&nbsp;**Admin Center**&nbsp;>&nbsp;**Update Center**&nbsp;>&nbsp;**Nuxeo Studio**.
4.  Click on the&nbsp;**Update**&nbsp;button.
5.  Go in a workspace and create a new Contract.
    ![]({{file name='create_contract.png'}} ?w=350,h=271,border=true)

{{#> callout type='info' }}

You are now ready to use Nuxeo Studio !&nbsp;You can :

*   Go deeper with learning more of Nuxeo Studio and Nuxeo Platform, by following a&nbsp;[complete tutorial]({{page page='first-steps-with-studio-technical-documentation-tutorial'}})
*   Go to the next step of this quick start, so as to discover how you can contribute new java development to the server. Click on the Next Step link below.

{{/callout}}

&nbsp;

&nbsp;