---
title: Getting Started with Nuxeo Studio
details:
    howto:
        excerpt: Learn how to start working with Nuxeo Studio.
        level: Beginner
        tool: Nuxeo Studio
        topics: 'Document type, Style'
labels:
    - lts2015-ok
    - howto
    - studio
toc: true
confluence:
    ajs-parent-page-id: '28475632'
    ajs-parent-page-title: Quick Start Dev Guide
    ajs-space-key: NXDOC710
    ajs-space-name: Nuxeo Platform Developer Documentation — LTS 2015
    canonical: Getting+Started+with+Nuxeo+Studio
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC710/Getting+Started+with+Nuxeo+Studio'
    page_id: '28475614'
    shortlink: 3oCyAQ
    shortlink_source: 'https://doc.nuxeo.com/x/3oCyAQ'
    source_link: /display/NXDOC710/Getting+Started+with+Nuxeo+Studio
history:
    - 
        author: Manon Lumeau
        date: '2016-05-06 13:01'
        message: ''
        version: '22'
    - 
        author: Solen Guitter
        date: '2016-04-14 12:40'
        message: ''
        version: '21'
    - 
        author: Manon Lumeau
        date: '2016-04-12 12:51'
        message: ''
        version: '20'
    - 
        author: Solen Guitter
        date: '2016-03-31 15:46'
        message: Fix links
        version: '19'
    - 
        author: Solen Guitter
        date: '2016-03-02 09:31'
        message: ''
        version: '18'
    - 
        author: Solen Guitter
        date: '2016-03-02 09:30'
        message: ''
        version: '17'
    - 
        author: Solen Guitter
        date: '2016-01-08 11:01'
        message: Update titles to fix anchor links
        version: '16'
    - 
        author: Manon Lumeau
        date: '2015-10-01 15:51'
        message: ''
        version: '15'
    - 
        author: Manon Lumeau
        date: '2015-10-01 15:51'
        message: ''
        version: '14'
    - 
        author: Solen Guitter
        date: '2015-08-03 07:39'
        message: ''
        version: '13'
    - 
        author: Manon Lumeau
        date: '2015-07-31 13:50'
        message: ''
        version: '12'
    - 
        author: Manon Lumeau
        date: '2015-07-31 13:20'
        message: ''
        version: '11'
    - 
        author: Manon Lumeau
        date: '2014-12-29 16:26'
        message: ''
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

*   Get a Nuxeo Studio project using Nuxeo Online Services
*   Get a running Nuxeo Platform instance
*   Change the logo of your Nuxeo Platform instance
*   Create a new Contract document type in Studio

## Step 1 - Get a Nuxeo Online Services Account

Nuxeo Studio is a Nuxeo tool provided as part of the Nuxeo Online Services subscription offer. If you are a Nuxeo customer, you should already have a username/password to connect and access to your Studio project. Otherwise, we provide a 30-day trial offer so you can discover Nuxeo Studio and its configuration capabilities.

1.  Go to the&nbsp;[Nuxeo Platform Online Trial registration form](http://www.nuxeo.com/downloads/#online-tria).
2.  Fill in the form. Provide a valid email address or else registration will not be completed.
3.  Confirm registration by clicking on the link sent to the email address in the previous step.
    Your Online Trial account is created.
    You can now access Nuxeo Studio by clicking on the&nbsp;link&nbsp;provided in the last email received.

## Step 2 - Getting a Nuxeo Platform Instance

You automatically get a nuxeo.io instance created when you subscribe to the Nuxeo Platform Online Trial offer. Thus&nbsp;you can now either use a nuxeo.io instance in the Cloud. Or you can run a Nuxeo Platform instance on your computer.&nbsp;

### Working in the Cloud...

When you register to [Nuxeo Platform Online Trial](http://www.nuxeo.com/downloads/#online-tria)&nbsp;a Nuxeo Platform environment is automatically created. This environment is bound to the first Nuxeo Studio project you have. All third-party software are installed and set up.

1.  Go to [nuxeo.io](https://manager.nuxeo.io).
    Your environment is stopped by default.
2.  Click on the **Start** button.
3.  Click on the instance URL to access your Nuxeo Platform environment.
    Your Nuxeo Platform instance is ready to be customized.
    Development mode is activated so you can enjoy hot reload of your Nuxeo Studio configuration.

![]({{file name='nuxeo_io.png'}} ?w=570,border=true)

### ...Or Working on Your Desktop

Installing the Nuxeo Platform using the&nbsp;[.zip package](http://www.nuxeo.com/downloads/)&nbsp;installs the Nuxeo Platform only. External dependencies must be&nbsp;[installed separately]({{page space='admindoc710' page='installing-and-setting-up-related-software'}}).

**To install and start the Nuxeo Platform zip archive:**

1.  Unzip the .zip archive using your favorite tool.
2.  Click on the Start Nuxeo.command to start the server.
3.  In a browser, go to [http://localhost:8080/nuxeo](http://localhost:8080/nuxeo).
4.  Fill in the information in the configuration wizard steps.
5.  At the Nuxeo Connect step, use your Nuxeo Online Services account created above.
6.  Click on&nbsp;**Start**&nbsp;at the final step.&nbsp;
    Your application is ready to use.&nbsp;
    You now need to activate development mode so as to enjoy the hot reload of your Nuxeo Studio configuration.

**To activate development mode:**

1.  When the application is started, log in with the Administrator / Administrator credentials.
2.  Click on&nbsp;**Admin Center**&nbsp;>&nbsp;**Update Center**.
    The Nuxeo Studio tab is displayed.
3.  Click on the&nbsp;**Enable**&nbsp;button to activate development mode.
4.  Click on the&nbsp;**Restart Server**&nbsp;button displayed on top of the Admin Center.
    The Nuxeo Platform instance restarts. You can then enjoy your Nuxeo Studio configuration without restarting your server.

Once your project registered on Online Services, you can start customizing your Nuxeo Application. The first&nbsp;customizations&nbsp;occur in Nuxeo Studio, where you can easily create new&nbsp;[document types]({{page space='studio' page='documents'}}),&nbsp;[content views]({{page space='studio' page='content-views'}})&nbsp;, etc. Here, we will change the logo and then create a document type "Contract".

You can now access Nuxeo Studio from Online Services by clicking on this&nbsp;link: [connect.nuxeo.com/nuxeo/](http://connect.nuxeo.com/nuxeo/).&nbsp;

## Step 3 - Editing the Logo

Goal is to change the logo displayed in the banner of the Nuxeo Platform application. You must preliminary have a logo in PNG or JPG.

### Studio Customization

**Change the logo:**

1.  In Studio's left menu, click on the&nbsp;**Branding**&nbsp;section.
2.  Click on the&nbsp;**New**&nbsp;button.
3.  In Feature ID field, type "MyBranding" and click on the&nbsp;**Next**&nbsp;button.
4.  In&nbsp;**Main Pages**&nbsp;tab:

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

1.  Go to your Nuxeo Platform instance, typically available&nbsp;at&nbsp;<span class="s2">[http://localhost:8080/nuxeo](http://localhost:8080/nuxeo). If you have decided to work in the Cloud, it will be available at&nbsp;[https://manager.nuxeo.io](https://manager.nuxeo.io/).</span>
2.  Connect as Administrator with Administrator password.
3.  Click on&nbsp;**Admin Center**&nbsp;>&nbsp;**Update Center**&nbsp;>&nbsp;**Nuxeo Studio**.
4.  Click on the&nbsp;**Update**&nbsp;button.
    Your logo is updated.

## <a name="contract-doc-type"></a>"Step 4 - Create a Contract Document Type&nbsp;

Here we want to create a document type "Contract" that will hold specific metadata related to the notion of contract: contract owner, starting date, policy.

### Studio Customization

1.  Unfold the&nbsp;**Content Model**&nbsp;item of the Studio tree, click on&nbsp;**Document Types** and click the&nbsp;**New**&nbsp;button.
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

1.  Go to your Nuxeo Platform&nbsp;instance, typically available&nbsp;at&nbsp;<span class="s2">[http://localhost:8080/nuxeo](http://localhost:8080/nuxeo). If you have decided to work in the Cloud, it will be available at&nbsp;[https://manager.nuxeo.io](https://manager.nuxeo.io/).</span>
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