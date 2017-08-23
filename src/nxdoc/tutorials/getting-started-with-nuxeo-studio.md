---
title: Getting Started with Nuxeo Studio
review:
    comment: ''
    date: '2017-03-28'
    status: ok
details:
    howto:
        excerpt: Learn how to start working with Nuxeo Studio.
        level: Beginner
        tool: Nuxeo Studio
        topics: 'Document type, Style'
notes: >-
    Documentation page used by the Marketing team. Check with Marketing before deleting or moving.
labels:
    - howto
    - studio
    - lts2016-ok
toc: true
confluence:
    ajs-parent-page-id: '14256538'
    ajs-parent-page-title: Start Customizing the Nuxeo Platform
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Getting+Started+with+Nuxeo+Studio
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Getting+Started+with+Nuxeo+Studio'
    page_id: '20518152'
    shortlink: CBU5AQ
    shortlink_source: 'https://doc.nuxeo.com/x/CBU5AQ'
    source_link: /display/NXDOC/Getting+Started+with+Nuxeo+Studio
tree_item_index: 100
hidden: true
history:
    -
        author: Solen Guitter
        date: '2016-09-07 09:23'
        message: ''
        version: '26'
    -
        author: Solen Guitter
        date: '2016-09-07 09:12'
        message: 'NXDOC-857: remove nuxeo.io'
        version: '25'
    -
        author: Manon Lumeau
        date: '2016-05-06 13:02'
        message: ''
        version: '24'
    -
        author: Manon Lumeau
        date: '2016-05-06 12:53'
        message: ''
        version: '23'
    -
        author: Solen Guitter
        date: '2016-04-14 12:39'
        message: Update Studio menu labels
        version: '22'
    -
        author: Solen Guitter
        date: '2016-03-31 15:41'
        message: Fix links
        version: '21'
    -
        author: Manon Lumeau
        date: '2016-03-31 09:26'
        message: Fix links
        version: '20'
    -
        author: Julie Allouch
        date: '2016-03-29 19:51'
        message: ''
        version: '19'
    -
        author: Solen Guitter
        date: '2016-03-02 09:32'
        message: ''
        version: '18'
    -
        author: Solen Guitter
        date: '2016-03-02 09:31'
        message: ''
        version: '17'
    -
        author: Bertrand Chauvin
        date: '2016-01-07 11:00'
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
next_link: /nxdoc/develop-with-nuxeo-platform/
---
This page shows you how to start customizing the Nuxeo Platform using Nuxeo Studio. You'll see how to:

*   Get a Nuxeo Studio project using Nuxeo Online Services
*   Get a running Nuxeo Platform instance
*   Change the logo of your Nuxeo Platform instance
*   Create a new  document type

Nuxeo Studio is a Nuxeo tool provided as part of the Nuxeo Online Services subscription offer. If you are a Nuxeo customer, you should already have a username and password to connect to and access your Studio project. Otherwise, we provide a 30-day trial offer so you can discover Nuxeo Studio and its configuration capabilities.

## Get a Nuxeo Platform Instance

The Nuxeo Platform is available in different packages. Here we will use the ZIP archive.

Installing the Nuxeo Platform using the [`.zip` package](http://www.nuxeo.com/downloads/) installs the Nuxeo Platform only. External dependencies must be [installed separately]({{page page='installing-and-setting-up-related-software'}}).

**To install and start the Nuxeo Platform ZIP archive:**

1.  Unzip the `.zip` archive using your favorite tool.
2.  To start the Nuxeo Server:
      **MAC OS**: Double-click on the `Start Nuxeo.command` file.
      **Windows**: Double-click on the `Start Nuxeo.bat` file.
      **Linux**:
      ```bash
      chmod +x ./bin/nuxeoctl
      ./bin/nuxeoctl start --gui
      ```
3.  In a browser, go to `http://NUXEO_SERVER/nuxeo`.
4.  Fill in the information in the configuration wizard steps.
5.  At the **Nuxeo Online Services** step, provide your Nuxeo Online Services credentials. If you don't have an account, you can register for a free 30-day trial offer:
  - Provide a valid email address
  - Click on the confirmation link sent to the email address you provided
  - Your Online Trial account should now be created
6.  At the **Modules** step, select Nuxeo JSF UI.
7.  Click on **Start** at the final step. Your application is ready to use.

Activate development mode to avoid having to package and deploy your application whenever you want to visualize your changes from Nuxeo Studio. This way you only need to hot reload from the Update Center or the [**Nuxeo Dev Tools** extension](https://doc.nuxeo.com/nxdoc/nuxeo-dev-tools-extension/).

**To activate development mode:**

1.  When the application has started, log in with Administrator/Administrator credentials.
2.  Click on **ADMIN** > **Update Center**. The Nuxeo Studio tab is displayed.
3.  Click on the **Activate** button to activate development mode.
4.  Click on the **Restart Server** button displayed on top of the Admin Center.

You can now access Nuxeo Studio from Online Services by clicking on this link: [connect.nuxeo.com/nuxeo/](https://connect.nuxeo.com/nuxeo/), or from the **Go to Studio** button in  [**Nuxeo Dev Tools**](https://doc.nuxeo.com/nxdoc/nuxeo-dev-tools-extension/) and start customizing your application.

## Edit the Logo

Our firs goal is to change the logo displayed in the banner of the Nuxeo Platform application. We'll assume you already have a logo in the PNG or JPG format.

### Studio Customization

**Change the logo:**

1.  In Studio's menu, under **Configuration**, click on the **Branding** section.
2.  Click on the **New** button.
3.  In Feature ID field, type "MyBranding" and click on the **Next** button.

On the **Main Pages** tab:

4.  Check the box "Set as default branding".
5.  Click on the **Select Resource** button of the "Logo image" field. A "Select Resource" window pops up. It shows a list of images available by default, imported with the "Default Nuxeo Platform Configuration" template.
6.  Click on **Choose File** and select an image from your desktop.
7.  Click on the **Upload** button. The selected image is uploaded to Studio, added to the list of available images and selected.
8.  Click on the **Ok** button at the bottom of the popup window. The path of the uploaded image is displayed next to the **Select resource** button.
9.  Click on **Save** at the bottom of the screen.

### Deploying Changes on Your Nuxeo Platform Instance

In [**Nuxeo Dev Tools**](https://doc.nuxeo.com/nxdoc/nuxeo-dev-tools-extension/) extension, simply click on the **Hot Reload** button. Otherwise...

1.  Go to your Nuxeo Platform instance, typically available at `http://NUXEO_SERVER/nuxeo`.
2.  Connect with login/password Administrator/Administrator.
3.  Click on **ADMIN** > **Update Center** > **Nuxeo Studio**.
4.  Click on the **Update** button. Your logo is updated.

## {{> anchor 'contract-doc-type'}}Create a Contract Document Type

Here we want to create a custom document type named "Contract" that will hold specific metadata related to the notion of a contract: contract owner, starting date, policy.

### Studio Customization

1.  In Studio's menu, under **Configuration**, click on the **Content Model** section, then **Document Types**. Click on the **New** button.
2.  Fill in the creation form as follows and click on **Next**:
      **ID**: Contract
      **Extends**: File
      **Label**: Contract
      **Description**: Contract document type for internal use.

    Your document type is created.
3.  Fill in the [**Definition** tab]({{page space='studio' page='documents'}}):
![]({{file name='definition_contract.png'}} ?w=600,h=365,border=true)
4.  Fill in the [**Schema** tab]({{page space='studio' page='schemas'}}) with the following metadata:
![]({{file name='schema_contract.png'}} ?w=600,border=true)

Now we'll customize the form that's used to **create** the document. On the **Creation Layout** tab:

5.  Click on the ![]({{file name='delete.gif' space='studio' page='studio-icons-index'}}) icon to remove the WARNING and Description widgets.
6.  Drag and drop the fields **Owner**, **Start** and **Policy** from the schema **Contract** to the grid.
7.  Click on&nbsp;![]({{file name='editor_area.gif' space='studio' page='studio-icons-index'}}) if you wish to edit a label, then click on **Save** in the popup when you're done.

![]({{file name='creation_layout_contract.png'}} ?w=580,border=true)
*Creation Layout Tab*

On the **Edit Layout** tab, we can customize the form used to update the metadata of the document:

8.  Click on the button **Import Layout** and select **Import 'create' layout**.
9.  Click on the button **Add Row**.
10. Drag and drop the field **Reminder** from the schema **Contract** to the grid.
11. Click on&nbsp;![]({{file name='editor_area.gif' space='studio' page='studio-icons-index'}}) if you want to edit the widget label, then click on **Save** in the popup when you're done.

![]({{file name='edit_layout_contract.png'}} ?w=600,border=true)
*Edit Layout Tab*

12. On the View Layout click on the button **Import Layout** and select **Import 'edit' layout**.
13. Click on **Save**.
14. Deploy your changes on your Nuxeo Platform instance.
15. Now go to a workspace in your Nuxeo Platform instance and create a new Contract document!

{{#> callout type='info' }}

You are now ready to use Nuxeo Studio! You can:
*   Go to the next step of this quick start, to discover how you can [contribute new features using Java code]({{page page='getting-started-with-nuxeo-generator'}}) to the server.
*   Learn more about Nuxeo Studio and Nuxeo Platform, by following a [complete tutorial]({{page page='first-steps-with-studio-technical-documentation-tutorial'}}).
{{/callout}}
