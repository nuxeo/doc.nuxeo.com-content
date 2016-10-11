---
title: Nuxeo - BIRT Integration
review:
    comment: ''
    date: ''
    status: ok
labels:
    - marketplace-package
    - birt
toc: true
confluence:
    ajs-parent-page-id: '21299463'
    ajs-parent-page-title: Marketplace Add-Ons
    ajs-space-key: USERDOC60
    ajs-space-name: Nuxeo Platform User Documentation — 6.0
    canonical: Nuxeo+-+BIRT+Integration
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC60/Nuxeo+-+BIRT+Integration'
    page_id: '21299546'
    shortlink: WgFFAQ
    shortlink_source: 'https://doc.nuxeo.com/x/WgFFAQ'
    source_link: /display/USERDOC60/Nuxeo+-+BIRT+Integration
history:
    - 
        author: Solen Guitter
        date: '2016-08-31 15:23'
        message: ''
        version: '11'
    - 
        author: Solen Guitter
        date: '2015-11-09 16:29'
        message: ''
        version: '10'
    - 
        author: Manon Lumeau
        date: '2014-12-08 11:43'
        message: ''
        version: '9'
    - 
        author: Solen Guitter
        date: '2014-07-29 09:57'
        message: ''
        version: '8'
    - 
        author: Alain Escaffre
        date: '2014-07-28 14:20'
        message: ''
        version: '7'
    - 
        author: Solen Guitter
        date: '2013-11-19 17:22'
        message: ''
        version: '6'
    - 
        author: Solen Guitter
        date: '2013-11-19 15:46'
        message: 'Removed related topics from TOC, updated screenshots'
        version: '5'
    - 
        author: Solen Guitter
        date: '2013-08-07 15:52'
        message: ''
        version: '4'
    - 
        author: Solen Guitter
        date: '2013-08-07 15:17'
        message: Fixed required module and capitalized titles
        version: '3'
    - 
        author: Solen Guitter
        date: '2013-08-07 15:13'
        message: Add link to package on the Marketplace
        version: '2'
    - 
        author: Solen Guitter
        date: '2013-06-18 10:50'
        message: ''
        version: '1'

---
{{! excerpt}}

The [Nuxeo - BIRT Integration package](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-birt-integration) leverages the reporting features of [Eclipse BIRT](http://www.eclipse.org/birt/phoenix/), enabling users to create reports on the application's activity, directly from the Nuxeo Platform.

{{! /excerpt}}

When the Nuxeo - BIRT Integration package is installed on the Nuxeo Platform, users can create and generate reports, defining what statistics they want to compute. To help them, the application's administrators create report models, that already set up some parameters. The report models are based on BIRT report files that have been imported in the Nuxeo Platform. All the parameters defined in the BIRT report file are extracted and administrators can edit them in the Nuxeo Platform using the edit form of the Report Model
Then, users can create reports in the Platform, based on this model. Reports are bound to the document context, allowing to automatically get and use information on the report (like where the report is in the application's tree, etc).

## Before You Start / Prerequisites

The whole process to make reports available and use them takes places in two places:

*   in BIRT designer, to prepare the models,
*   in Nuxeo Platform, where administrators can create report models and users can create and generate reports.

As a consequence, you need to install and set up:

*   the Nuxeo Platform (the Document Management module is required),
*   BIRT designer (version 4.2),
*   the Nuxeo - BIRT Integration package.

### Nuxeo Platform

The Nuxeo - BIRT Integration package requires the Document Management module of the Nuxeo Platform.
The Nuxeo Platform must run with a background database (vs the embedded one). You can see and edit the database settings from the [Admin Center]({{page page='managing-your-nuxeo-application'}}).

### BIRT Designer

Of course, the administrators who will prepare report models need to have the BIRT designer installed to be able to create BIRT report files and use them in the Nuxeo Platform to create the models. However, it doesn't need to be installed on the same computer as the Platform. The BIRT engine required to generate reports from the Nuxeo Platform is included in the Nuxeo - BIRT Integration package.

You also need the database driver for being able to let the BIRT Designer with your Nuxeo Platform database.

### Nuxeo - BIRT Integration Package

The Nuxeo - BIRT Integration package is available from the [Nuxeo Marketplace](http://marketplace.nuxeo.com). See the [Nuxeo - BIRT Integration administration documentation]({{page space='nxdoc60' page='nuxeo-birt-integration'}}).

## Working with BIRT Reports

This section is about what needs to be changed in the BIRT configuration to have report files that can be imported successfully in the Nuxeo Platform. For information about how to create reports in BIRT and its features, you can report to the tutorials, FAQ and examples from the [Eclipse BIRT website](http://www.eclipse.org/birt/phoenix/).

### Setting Up the BIRT Report Data Sources

To automatically use Nuxeo data sources, the data sources you define in your BIRT report should follow a name convention. You have two possibilities:

*   `nuxeo`: in the Platform, the JDBC URL of the data source will be replaced by the one from the context document where you've created your BIRT Report document instance.
*   `nuxeo-repositoryName`: in the Nuxeo Platform, the JDBC URL of the data source will be replaced by the JDBC URL of the data source related to the 'repositoryName'. This name convention is the one to be used in a multi-repository configuration.

![]({{file name='BIRT-DataSources_Edit.png'}} ?w=650,h=323,border=true)

### Creating a Report Parameter

**To create a report parameter:**

1.  Define the `docType` parameter as a Report parameter:
    ![]({{file name='Screen shot 2011-03-07 at 5.50.36 PM.png'}} ?w=267,h=340,border=true)
2.  Define the `docType` parameter as a parameter of your Dataset, link it to the report parameter:
    ![]({{file name='Screen shot 2011-03-07 at 5.51.39 PM.png'}} ?w=800,h=350,border=true)
3.  Use the `docType` parameter in the query of your Dataset:
    ![]({{file name='Screen shot 2011-03-07 at 5.51.15 PM.png'}} ?w=800,h=353,border=true)

### Sample BIRT Reports

You will find attached a set of sample reports to get you started: []({{file name='Sample Reports.zip'}}).

## Working with Reports Models and Reports

### Report Models

Reports models can be created and edited by the Nuxeo Platform's administrators, from the Admin Center.

![]({{file name='BIRT-models.png'}} ?w=650,border=true)

The actions available on a report model are:

*   edition,
*   [access rights management](#make-a-report-model-available).

#### Creating a Report Model

Report models are managed (i.e. created, edited, deleted) from the Admin Center. As a consequence, only the administrators of the Nuxeo application can create new report models. After you installed the Nuxeo - BIRT Integration package, a new section is available in the Admin Center, called **Reporting**.

**To create a report model:**

1.  Click on the **Create Model** button.
2.  Fill in the form (see below for more information on the different fields available).
    ![]({{file name='BIRT_model_creation.png'}} ?w=400,border=true)
3.  Click **Save**.
    The report is saved and its **Summary** tab is displayed.
    The report model is accessible only by administrators for now. You need to make it available to non-administrator users so that they can create reports based on it.

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">

Field

</th><th colspan="1">

Description

</th></tr><tr><td colspan="1">

Title

</td><td colspan="1">

Type a title for the report model.
Note that if the BIRT file has a title in metadata, this title automatically overwrite your title.

</td></tr><tr><td colspan="1">

Description

</td><td colspan="1">

Optionally you can type a text explaining what the model is about.

</td></tr><tr><td colspan="1">

Content

</td><td colspan="1">

Select the BIRT report file (.rptdesign) to use for the model.

</td></tr></tbody></table></div>

#### Editing a Report Model

When you edit a report model, you can change all the information you filled in on the creation form, but you can also set a parameter. If you set a parameter on the model, it will be set up by default on the report based on the model and users won't be available to change it. See the [parameters section](#parameters) below.

#### Making a Report Model Available

By default, report models can be accessed by administrators only. So, they need to give access rights on the report models to non-administrator users. The access rights available on report models are [the same as in workspaces]({{page page='managing-access-rights'}}).
The access rights on report models are managed the same way as on any other space. You can report to the [Access rights management page]({{page page='managing-access-rights'}}) for detailed steps.

{{#> callout type='tip' }}

On a default Nuxeo Platform configuration, members inherit **Read** right automatically on report models. So you don't need to specify access rights on the model: users with **Write** right will be able to create reports on the model.

{{/callout}}

### Reports

Reports are available in workspaces and folders. They can be created by users with **Write** right, who choose which model to use and have the possibility to define some parameters as frozen. Users with **Read** right can generate the report and see the updated computed results.

#### Creating a New Report

A BIRT report is created as any other document in the Nuxeo Platform.

1.  In the **Content** tab of the workspace, click on the **New** button.
2.  On the window **Available document types**, click on **BIRT Report**.
    ![]({{file name='birt-report-doc-type.png' space='nxdoc60' page='nuxeo-birt-integration'}} ?w=450,border=true)
3.  Fill in the report's creation form.
4.  Click on the **Create** button.
    The **Preview** tab of the report is displayed.
    You can now either:

    *   [generate the report](#generating-a-report) from the **Preview** tab,
    *   [edit it](#editing-a-report) to [set up some parameters](#parameters) for users who will generate the reports,
    *   manage the access to the report.

**Report properties**

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">

Field

</th><th colspan="1">

Description

</th></tr><tr><td colspan="1">

Title

</td><td colspan="1">

Give the report a title.

</td></tr><tr><td colspan="1">

Description

</td><td colspan="1">

Optional text indicating what the report is about.

</td></tr><tr><td colspan="1">

Report Model

</td><td colspan="1">

Model used by the report.

</td></tr><tr><td colspan="1">

Report key

</td><td colspan="1">

The report key is used to generate the report. By default, it is automatically generated by the system when you create the report, but you can edit it afterward.

</td></tr></tbody></table></div>

#### Editing a Report

The steps to edit a report are the [same as for a default document of the Document Management module]({{page page='editing-content'}}). When you edit a report, you can modify its properties and you can set up some parameters. The parameters you set in the **Edit** tab are not displayed on the **Preview** tab anymore. Their value is set for all users for the report generation.

#### Managing Access to the Report

Unlike for notes and files (which are the most common default Nuxeo documents), users can manage the access to the BIRT reports. The report access rights are inherited from the workspace or folder it's created in. You can [grant or deny access rights]({{page page='managing-access-rights'}}) on the report just like on a workspace or a section.

#### Generating a Report

Generating a report means filling in the available parameters on the report's **Preview** tab with values meeting your criteria and getting the results. By default, the report is generated in HTML in the **Preview** tab of the report. However, you can also generate the report in PDF format from this URL: [`http://localhost:8080/nuxeo/site/reports/REPORT_KEY/pdf`](http://localhost:8080/nuxeo/site/reports/REPORT_KEY/pdf) . The `REPORT_KEY` can be found in the **Summary** tab of the report.

{{#> callout type='tip' }}

Instead of the Report Key metadata, you can use the report ID. To know the ID of the report:

1.  Click on the icon ![]({{file name='share.png' page='icons-index'}}).
    A window pops up that displays the permalink to the report.
2.  In the URL, copy the ID of the document, which is between `default/` and `/view_documents?`. In this example URL, the ID is in bold: "`http://localhost:8080/nuxeo/nxdoc/default/**e1f6d76f-405b-43d1-bb36-f7d8cd4068ba**/view_documents?tabId=&conversationId=0NXMAIN`".

{{/callout}}

If no parameter is left to be filled in by the user, the report is generated when you click on it to consult it.
For more information about the parameters, see the [parameter section](#parameters).

## Parameters

Reports are generally based on parameters whose values can be set by users so as to computer the report. Parameters values can be defined at three places:

*   on the report model **Edit** tab;
*   on the report **Edit** tab: Only the parameters which are not set into the report model can be set here;
*   on the report **Preview** tab: Only the parameters that are not set on the model or the report itself can be set here.
    ![]({{file name='BIRT-report-preview.png'}} ?w=650,border=true)

Reports are bound to the document context, which means that there is a set of parameters that will be automatically set from the document context if they are defined in the BIRT report. Those parameters will be filled by the Nuxeo instance when generating a report, and so you can use them when working on your BIRT report:

*   `${userName`}: the username of the current user asking for the BIRT Report;
*   `${docType`}: the document type of the BIRT Report (BirtReport);
*   `${currentPath`}: the path of the BIRT Report document in the Nuxeo Platform;
*   `${currentRepository`}: the repository name where the report is stored;
*   `${currentSuperSpacePath`}: the path of the first parent of the report that is a super space (ie that has the superspace facet). By default, workspaces and domains are super spaces.
*   `${currentSuperSpaceId`}:the ID of the first parent of the report that is a super space (ie that has the superspace facet). By default, workspaces and domains are super spaces.
*   `${currentWorkspacePath`}: the path of the first parent workspace of the BIRT report;
*   `${currentWorkspaceId`}: the ID of the workspace the report is in;
*   `${currentDomainPath`}: the path of the first parent Domain of the report;
*   `${currentDomainId`}: the ID of the domain the report is in.

&nbsp;

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

*   [Nuxeo - BIRT Integration dev documentation]({{page space='nxdoc60' page='nuxeo-birt-integration'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>