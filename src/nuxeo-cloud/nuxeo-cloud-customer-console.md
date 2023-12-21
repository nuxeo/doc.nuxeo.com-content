---
title: Nuxeo Cloud Customer Console
labels:
    - nuxeo-cloud
description: Get an overview of the Nuxeo Cloud Console.
review:
    comment: ''
    date: '2023-12-21'
    status: ok
tree_item_index: 350
toc: true
---

The Nuxeo Cloud Customer Console provides our customers with increased self service capabilities. Among other useful features, the Cloud Customer Console primarily gives users the ability to build Dedicated Customer Images and deploy them to Customer Pre-Production Environments. Our long term goal is to enable more self service capabilities allowing customer increased visibility to hosted Nuxeo Cloud environments and related information.

## Dedicated Image Build and Deployment Pipelines

TThe Nuxeo Cloud Customer Console introduces the ability to build and deploy a dedicated Nuxeo Docker Image to your Pre-Production Cloud Environment. The same Docker image can then be promoted to production at your request by the Hyland Cloud team.
-	**Image Build Pipeline** - The Image Build Pipeline is defined in a Project that is preconfigured by the Cloud Service Team. It uses a Nuxeo+HF Base Docker image and combines it with your application Marketplace package and dependent add-ons to produce your Dedicated Customer Docker Image. The Image is managed in a Project that you have access to.  This Dedicated Docker Image artifact can then be deployed to your Pre-Production & Production environments.
-	**Image Deployment Pipeline** - The Deployment pipeline is used to deploy the Dedicated Customer Docker Image to a Development Sandbox, Pre-Production, or Production environment. The same Image Build and Deployment pipelines are used by the Nuxeo Cloud team. At this time, only the Nuxeo Cloud Team can deploy the Dedicate Customer image to your Production environment. The Nuxeo Customer Docker Image is an artifact that has a unique build number. The Nuxeo Cloud Customer Console references the build number to select and deploy to the Environment.

{{#> callout type='info' heading='Build Number'}}
All customers should provide the Build Number as part of all Production deployment Jira requests. The Build Number refers to the Nuxeo Docker Image you have tested in your Pre-Production environment and want deployed to Production.
{{/callout}}

## Overview Page

After logging into the Cloud Console, users will land on the Overview page which provides the following features:
1.	Add, Remove, Edit and View Customer Contact Information
2.	Link to Nuxeo Cloud documentation
3.	List of Production, Pre-Production and Development Sandbox Environments

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Nuxeo Cloud/Cloud Console Homepage
    name: cloud-console-homepage.png
    server#screenshot#up_to_date
--}}
![Cloud Console Homepage](nx_asset://675c9b0d-c30b-4ba9-869b-410d9375128e ?w=650,border=true)
 
Environment details can be accessed by clicking on the “eye” icon shown next to available environments listed on the Overview Page. At this time customers can only view and schedule deployments to Pre-Production and Development Sandbox environments within the Cloud Console. Production deployment requests must be made by submitting a Jira SUPNXP ticket. 

### Product Version and Product Revision

For each environment, we display the Product Version and the Nuxeo Product Revision. These provide information on the latest HotFix deployed to each environment. 
Please note that versions are dynamically retrieved from the login page. If a customer uses a custom login page instead of the default Nuxeo login page, we will not be able to retrieve the version and will display _Not Available_.

## Environment Details and Deployments

Environment details for the selected environment are shown on this page.

### Pre-Production

For pre-production environments customers are able to view environment details, recent Image Builds and Logs, recent and scheduled Deploys, as well as initiate new Image Builds or Deploys. There is also a sub-page for collecting data on the pre-production environment.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Nuxeo Cloud/Cloud Console Env page
    name: cloud-console-env-page.pg
    server#screenshot#up_to_date
--}}
![Cloud Console Env page](nx_asset://18fff4ed-6794-4dc5-adff-fdd1a4454b17 ?w=650,border=true)
 
### Development Sandbox

For development sandbox environments customers are able to view environment details, recent Image Builds and Logs and Tasks, as well as initiate new Image Builds or Deployments. There are also sub-pages for sandbox and collecting data on the development sandbox environment.

### Image Builds

The Customer Cloud Console gives users the ability to create a new Docker Image Build that can be deployed to development sandbox or pre-production environments.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Nuxeo Cloud/Cloud Console New build
    name: cloud-console-new-build.png
    server#screenshot#up_to_date
--}}
![Cloud Console New build](nx_asset://4c996bc2-d2e3-46b9-9e74-a7f688ca34ec ?w=350,border=true)

Image builds can also be filtered by Project in the dropdown at the top of the Image Builds table. This dropdown feature shows projects being run in pre-production or development sandbox environment. 

 
When creating a new Image Build, customers are asked to provide the following:
-	**Package Name** The name of the Nuxeo Marketplace Package to be used.
-	**Package Version** The version of the Nuxeo Marketplace Package to be used. NO _SNAPSHOT build is permitted in the Preprod/Prod environments, you must create a fully versioned MP package.
-	**Nuxeo Packages** There will be a list of packages/add-ons for the environment and should not be altered.  You can include additional add-ons which your application requires.  You can also add dependent packages in you MP application to install as dependencies instead of listing them here.  There are Cloud Based packages that you should not remove (amazon-s3-online-storage, nco-cloud). If you have questions, please ask our support team.
-	**Product Version** This is the Nuxeo Version for ex LTS 2021 and will be predefined in the Project by the Cloud Team.  If you need to create a new Docker Image for LTS 2023 please open a request and we will create a new Project for you.
-	**Product Revision** The Nuxeo Hotfix version to be used. ex LTS 2021 HF25.
-	**Cloud project** A cloud project is the container where the Image Build is managed. This is predefined by the Cloud Team based on the Nuxeo Version and your Application needs. 
-	**Status & Logs** The Build Image creation process provides a summary status and access to logs following the success or failure of the Build Deployment Pipeline. Logs can be accessed via Environment details page in the Build section. Build Image errors can be resolved by creating a Jira SUPNXP ticket to notify the Nuxeo Cloud team of the error.

### Tasks

Located on the right side of the **development sandbox** overview page, there is a table for environment tasks. This table shows all recent pending, processing, and completed actions and deployments in the development sandbox environment.

#### Task Types

SCREENSHOT

The task table can be filtered by the different task types that are listed there. By selecting this dropdown and selecting or deselecting the task type options, you can view the corresponding tasks.

### Deployment 

The Cloud Console provides customers with the ability to deploy an Image to development sandbox environments and pre-production ONLY.

#### Deployment Types 

**Blue-Green Deployment:** 

Available for pre-production and production environments. This deployment type brings up a new stack and brings it online when it is fully working. In case of failure, the new stack is destroyed and the previous remains online.

**Simple Deployment:**

During this deployment, the stack is updated, and the nodes are redeployed using the “Re-deploy Task”. This deployment type is used for development sandbox, test, and UAT environments and it is faster than a blue-green deployments.

#### Deployments by Environment

**Development Sandbox Environments** 

SCREENSHOT

When creating a new development sandbox deployment, the customer is asked to identify the following: 
* Image Build: The image build number created as a result of the image build process.
* Deployment Time: The preferred time for the deployment. If the `Deploy during next maintenance window` is selected, the Deployment Time will become read only and display the maintenance window start time. 

**Pre-Production Environments** 

SCREENSHOT 

When creating a new pre-production deployment, the customer is asked to identify the following: 
* Image Build: The image build number created as a result of the image build process.
* Deploy Now: Will start the deployment right after you hit the deploy button.

  SCREENSHOT 
* Custom Deployment Time: Allows you to schedule a time for deployment. This is a good option and allows you to control the time of deployment.
* Deploy on next maintenance window: This option will deploy during the next predefined Maintenance window. The Deployment Time will show as a read only and display the maintenance window start time. 

**Production Environment** 

Production deployments can be requested by following the Jira ticketing process which can be found [here]({{page space='studio' page='how-to-fill-a-jira-ticket'}}). Jira tickets should include the Build Number when requesting Production Deployments to ensure that the correct Build Image is deployed to Production. 

### Maintenance Windows

All Customers have a pre-defined Maintenance Window for performing deployments. Customers have the option to perform Pre-Production deployment during the next scheduled maintenance window by selecting the `Deploy during next maintenance window` checkbox. 

The standard maintenance window for each region is as follows:
* US Customers - 12AM - 2AM ET Daily
* EU Customers - 12AM - 2AM CST Daily
* APAC Customers - 12AM - 2AM JST Daily

Maintenance Windows are defined in your Cloud Service Agreement.  If you have questions, please contact your Customer Service representative.

### Deployment Status & Details

Additional deployment information regarding the success or failure of the deployment can be found in the deployments table. More information will be provided on commonly found errors in the future. Deployment errors can be resolved by creating a Jira SUPNXP ticket to notify the Nuxeo Cloud team of the error. 

**Scheduled Deployments** 

When **pre-production deployments** are scheduled using a custom deploy time outside of their standard maintenance window, deployments will appear in the **Scheduled Deployments** table on their pre-production environment details page. Once scheduled deployments have been initiated, they will appear alongside previous deployments in the **Deployments** table. Scheduled deployments can also be deleted if the timeframe or other deployment details are no longer accurate.

### Development Sandbox Features

#### Package Builds

Packages can be initiated in the Sandbox sub-page by selecting either “Build Only” or “Build & Deploy” from the drop down on the Package Builds table.  

SCREENSHOT 

#### Tasks and Package Build/Deploy Pipeline Status

Additional details are provided for development sandbox tasks, package builds, and package deployments. The details of a task, package build, or package deployment can be viewed by selecting the status listed for the respective item.

SCREENSHOT 

#### Environment Configuration

##### Redeploy Nodes

Environment nodes can be re-deployed by selecting the “Action” dropdown and “Redeploy Nodes”.

SCREENSHOT 

Once selected, a confirmation message will appear. After the user confirms and selects “Redeploy Nodes” on this message, the existing nodes are terminated, and new nodes are created. 

SCREENSHOT 

The status of the redeploy nodes action can be monitored on the Overview page in the Tasks table. Details can be viewed by selecting the current status shown next to the redeploy nodes task.

SCREENSHOT

##### Log Override

Users can edit and update the development sandbox log configuration by pasting a full log4j2.xml file into the populated window below. This window can be accessed by selecting the “Config” dropdown and “Edit Log Override”. The configuration file can be edited or updated at any time.

Once the changes have been entered into the text field and the “Save” button has been selected, there is an automatic trigger to create a log override task and re-deploy the environment nodes. 

Customers can monitor the log override status in the tasks table as it’s running, and when the new configuration is available it will show in the task table as “Success”.

Below are log4j2.xml files that must be updated and included in the development sandbox Log Override Configuration to ensure that data is properly being communicated to DataDog. If you have questions, please ask our support team.

* LTS 2023 log4j2.xml File
* LTS 2021 log4j2.xml File 

##### Secrets

If you have secrets, you can enter those in this window. Then if customers would like to have the secrets added to the “Cloud Stack Secrets Manager”, you can communicate that to the Nuxeo Cloud Operations team to update this for you. 

SCREENSHOT 

##### Configuration Override

Users can edit and update the development sandbox override configuration by entering an extract from a nuxeo.conf file or a=b parameters (one per line) into the populated window below. This window can be accessed by selecting the “Config” dropdown and “Edit Log Override”. The configuration file can be edited or updated at any time.

Please wait for any running Deploy or Log Override to complete to save any Configuration Override changes to ensure all changes are consistent. If a Configuration Override is saved while another task is processing, redeploying nodes once all tasks are complete will resolve any inconsistencies. 

Once the changes have been entered into the text field and the “Save” button has been selected, the changes won’t be applied until the nodes have been re-deployed. 

Additional details and examples of nuxeo.conf files that can be used for this feature can be found on the [related documentation page]({{page space='nxdoc' page='configuration-parameters-index-nuxeoconf'}}). 

SCREENSHOT

#### Package Configurations

Edit Packages, Edit Projects, and Set/Reset SSH Key Pair can be accessed from the dropdown button located in the upper right-hand corner of the Package Build table on the sandbox page. 

SCREENSHOT 

##### Edit Packages

Once a package has been created by the NCO team, a package can be edited by selecting “Edit Packages” from the dropdown shown in the above screenshot.

SCREENSHOT 

* Package Project: Package project to be edited. 
* Package project title: The package project title can be edited to any customizable name. 
* Git repository URL: SSH related Git URL (Example: git@github.com:myorg/myrepo.git)</br>
  This URL is not limited to GitHub. The console is compatible with other code repositories like BitBucket, as long they support SSH keys.
* Default project: The project to be selected from available development projects. 

##### Edit Projects 

SCREENSHOT 

* Project: Project to be edited. 
* Project title: The package project title can be edited to any customizable name. 
* Nuxeo Packages (space separated): There will be a list of packages/add-ons for the environment and should not be altered.  You can include additional add-ons which your application requires.  You can also add dependent packages in you MP application to install as dependencies instead of listing them here.  There are Cloud Based packages that you should not remove (amazon-s3-online-storage, nco-cloud). If you have questions, please ask our support team.

##### Set / Reset SSH Key Pair

By selecting Set / Reset SSH Key Pair from the dropdown, the user can generate a local public SSH key. A confirmation window will appear when the Set / Reset SSH Key Pair, and by selecting **Yes** a new SSH key pair will be generated. Once generated, the new SSH Key Pair will be displayed only once, and the key must be updated in their GitHub repository deploy keys section manually. If a SSH key is lost, you must generate a new SSH key pair. 
