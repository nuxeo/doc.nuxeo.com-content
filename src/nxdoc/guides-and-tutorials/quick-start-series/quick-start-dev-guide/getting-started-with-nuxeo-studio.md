---
title: Getting Started with Nuxeo Studio
review:
    comment: ''
    date: ''
    status: ok
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
tree_item_index: 100
history:
    -
        author: Solen Guitter
        date: '2016-09-07 09:28'
        message: 'XDOC-857: remove nuxeo.i'
        version: '15'
    -
        author: Solen Guitter
        date: '2016-04-14 12:41'
        message: Update Studio menu labels
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
next_link: nxdoc/getting-started-with-nuxeo-ide

---
This page explains how to start customizing the Nuxeo Platform using Nuxeo Studio. It will guide you through the steps to:

*   Get a Nuxeo Studio project using Nuxeo Connect
*   Get a running Nuxeo Platform instance
*   Change the logo of your Nuxeo Platform instance
*   Create a new Contract document type in Studio

Nuxeo Studio is a Nuxeo tool provided as part of the Nuxeo Connect subscription offer. If you are a Nuxeo customer, you should already have a username/password to connect and access to your Studio project. Otherwise, we provide a 30-day trial offer so you can discover Nuxeo Studio and its configuration capabilities.

## Step 1 - Get a Nuxeo Platform Instance

The Nuxeo Platform is available in different packages. Here let's use the ZIP archive.

Installing the Nuxeo Platform using the [.zip package](http://www.nuxeo.com/downloads/) installs the Nuxeo Platform only. External dependencies must be [installed separately]({{page space='admindoc60' page='installing-and-setting-up-related-software'}}).

**To install and start the Nuxeo Platform zip archive:**

1.  Unzip the .zip archive using your favorite tool.
2.  Click on the Start Nuxeo.command to start the server.
3.  In a browser, go to `http://NUXEO_SERVER/nuxeo`.
4.  Fill in the information in the configuration wizard steps.
5.  At the Nuxeo Connect step, provide your Nuxeo Online Services credentials if you already have a Nuxeo Online Services account or register to the 30-day trial offer.

    1.  Provide a valid email address or else registration will not be completed.
    2.  Confirm registration by clicking on the link sent to the email address you provided.
        Your Online Trial account is created.
        You can now access Nuxeo Studio by clicking on the link provided in the last email received.
6.  Click on **Start** at the final step.
    Your application is ready to use.
    You now need to activate development mode so as to enjoy the hot reload of your Nuxeo Studio configuration.

**To activate development mode:**

1.  When the application is started, log in with the Administrator / Administrator credentials.
2.  Click on **Admin Center**&nbsp;> **Update Center**.
    The Nuxeo Studio tab is displayed.
3.  Click on the **Enable** button to activate development mode.
4.  Click on the **Restart Server** button displayed on top of the Admin Center.
    The Nuxeo Platform instance restarts. You can then enjoy your Nuxeo Studio configuration without restarting your server.

Once your project registered on Connect, you can start customizing your Nuxeo Application. The first customizations occur in Nuxeo Studio, where you can easily create new [document types]({{page space='studio' page='documents'}}), [content views]({{page space='studio' page='content-views'}}) , etc. Here, we will change the logo and then create a document type "Contract".

You can now access Nuxeo Studio from Connect by clicking on this link: [connect.nuxeo.com/nuxeo/](http://connect.nuxeo.com/nuxeo/).

## Step 2 - Edit the Logo

Goal is to change the logo displayed in the banner of the Nuxeo Platform application. You must preliminary have a logo in PNG or JPG.

### Studio Customization

**Change the logo:**

1.  In Studio's left menu, click on the **Branding** section.
2.  Click on the **New** button.
3.  In Feature ID field, type "MyBranding" and click on the **Next** button.
4.  In **Main Pages** tab:

    1.  Check-box "Set as default branding" must be checked.
    2.  Click on the **Select Resource** button of the "Logo image" field.
        A "Select Resource" window pops up. It shows a list of images imported with the DM template.
    3.  Click on **Choose File** and select an image from your desktop.
    4.  Click on the **Upload** button.
        The selected image is uploaded to Studio, added to the list of available images and selected.
    5.  Click on the **Ok** button at the bottom of the popup window.
        The path to the uploaded image is displayed next to the **Select resource** button.

### Deploying Changes on Your Nuxeo Platform Instance

1.  Go to your Nuxeo Platform instance.
2.  Connect as Administrator with Administrator password.
3.  Click on **Admin Center**&nbsp;> **Update Center**&nbsp;> **Nuxeo Studio**.
4.  Click on the **Update** button.
    Your logo is updated.

## Step 3- Create a Contract Document Type

Here we want to create a document type "Contract" that will hold specific metadata related to the notion of contract: contract owner, starting date, policy.

### Studio Customization

1.  Unfold the **Content Model** item of the Studio tree, click on **Document Types** and click the **New** button.
2.  Fill in the creation form and click on **Next**:
    *   ID: Contract
    *   Extends: File
    *   Label: Contract
    *   Description: Contract document type for internal use.Your document type is created.
3.  Fill in the [**Definition** tab]({{page space='studio' page='documents'}}):
    ![]({{file page='/nxdoc/getting-started-with-nuxeo-studio' name='definition_contract.png'}} ?w=600,h=365,border=true)
4.  Fill in the [**Schema** tab]({{page space='studio' page='schemas'}}) with the following metadata:
    ![]({{file npage='/nxdoc/getting-started-with-nuxeo-studio' ame='schema_contract.png'}} ?w=600,border=true)

5.  Specify the [form that will be used to create the document (aka creation layout)]({{page space='studio' page='form-layouts'}}):
    1.  Click on the icon ![]({{file name='delete.gif' space='studio' page='studio-icons-index'}}) to remove the WARNING and Description widgets.
    2.  Drag and drop the fields "Owner", "Start" and "Policy" from the schema Contract to the grid.
    3.  Click on ![]({{file name='editor_area.gif' space='studio' page='studio-icons-index'}}) if you want to edit their label and click on the popup **Save** button.
        ![]({{file page='/nxdoc/getting-started-with-nuxeo-studio' name='creation_layout_contract.png'}} ?w=580,border=true)
6.  On the Edit layout (the form used to update the metadata of the document):
    1.  Click on the button **Import Layout** and select **Import 'create' layout**.
    2.  Click on the button **Add Row**.
    3.  Drag and drop the field Reminder from the schema Contract to the grid.
    4.  Click on ![]({{file name='editor_area.gif' space='studio' page='studio-icons-index'}}) if you want to edit the widget label and click on the popup **Save** button.
        ![]({{file page='/nxdoc/getting-started-with-nuxeo-studio' name='edit_layout_contract.png'}} ?w=600,border=true)
7.  Repeat the Edit layout steps on the View Layout.
8.  Click on **Save.**

### Deploying Changes on Your Nuxeo Platform Instance

1.  Go to your Nuxeo Platform instance.
2.  Connect as Administrator with Administrator password.
3.  Click on **Admin Center**&nbsp;> **Update Center**&nbsp;> **Nuxeo Studio**.
4.  Click on the **Update** button.
5.  Go in a workspace and create a new Contract.
    ![]({{file name='create_contract.png'}} ?w=350,h=271,border=true)

{{#> callout type='info' }}

You are now ready to use Nuxeo Studio! You can:

*   Go deeper with learning more of Nuxeo Studio and Nuxeo Platform, by following a [complete tutorial]({{page page='first-steps-with-studio-technical-documentation-tutorial'}}).
*   Go to the next step of this quick start, so as to discover how you can contribute new Java development to the server.

{{/callout}}
