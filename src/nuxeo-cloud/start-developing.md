---
title: Start Developing an Application
review:
    comment: ''
    date: '05-14-2020'
    status: ok
labels:
    - nuxeo-cloud
tree_item_index: 400
toc: true
---

## Overview

The Nuxeo Development Sandbox is built on top of Docker containers and Kubernetes pods. Today, we use Openshift to support all Development Sandbox efforts.

The primary focus of the Development Sandbox is to enable you to easily build and deploy applications during the development process.

The Nuxeo Development Sandbox is meant purely for Development. It does not support large data storage or data backups and should never be used to store production data.

## Environments

During the application development process, there is a need to test new configurations and changes in a development environment rather than Pre-Production or Production Environments.

The standard Development Sandbox project provides customers with 2 sandbox environments that can be managed directly via the OpenShift developer admin:

- Development Environment (DEV): Initial environment for exploration of updates that is continuously updated with the latest changes.
- Test Environment (UAT): Secondary environment for validation of updates that may require additional manual/user test efforts.

The DEV & UAT Environments share a MongoDB and Elasticsearch server, but each has its own MongoDB database and ElasticSearch index.

## Prerequesites

The Nuxeo Cloud Team needs:
- A Github project URL for the custom developments. 
- SSh keys to be included to the Nuxeo Cloud DEV CI/CD chain to deploy your custom package. Please refer to the [Github Documentation Page](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).

{{#> callout type='Note' heading='Additional information'}}
- These elements are mandatory even if the Nuxeo application will deploy only a Nuxeo Studio project.
- The Github project cannot be created inside the Nuxeo Github organisation: every client has to own their Github project.
{{/callout}}

## OpenShift Web Console

Access to the OpenShift administration is managed by Nuxeo through Okta. An account with Okta is required to login.

https://openshift.prod.nuxeo.io

## Build and Deploy the Application

### Principals

If you have pushed changes to the ​Nuxeo Studio project and/or to the project GitHub repository​, you will likely need to build and deploy the latest application with these changes to one or both Sandbox environments.

To do so, you can use the preconfigured default pipeline. Basically, it checks out the master branch of the Github repository containing the marketplace package module, runs a Maven build, generates the marketplace package zip, then deploys it to the Dev environment, and possibly to the UAT environment after user validation.

For both Dev and UAT environments, the pipeline is by default aligned with the master branch of the Github repository, so it's not possible to deploy a certain branch to the Dev environment and another branch to UAT.

### Process

To start the pipeline, go to Builds > Pipelines, choose the default one and click on Start Pipeline.
It takes minutes to complete the pipeline (depending on test coverage). At the end of the pipeline, you can click on the yellow Input Required message asking if you want to deploy the application to the UAT environment too.

- If you are asked to login, please login with Okta. Then select I’m a Nuxeo Customer.
- Answering **Proceed** will deploy the application to the UAT environment. </br>
  Answering **Abort**  will only deploy the application to the Dev environment.

## Release the Application

### Principals

If you wish to save the current state of the application to make it available to users as a stable version, and still be able to continue the development process, you can perform a release of the application. For instance, you would want to release the 1.0.0 version, deploy it to pre-production and production, continue to develop the application on the master branch, and then release the 1.1.0 version, 2.0.0 version... etc

You can use the preconfigured release pipeline. Basically, it first asks you to choose the release scope (patch, minor, major), then checks out the master branch of the Github repository, uses the Nuxeo Devtools python release script, prepares and performs a release (automatically detecting the version to release depending on the release scope you select), then deploys the release artifacts to a Nexus repository embedded in the OpenShift project.

### Process

To start the pipeline, go to **​Builds** > **Pipelines** > **release-pipeline** and click on **Start Pipeline**. The pipeline takes around 30 minutes to be completed.

At the beginning of the build, you can click on the yellow Input Required message, asking you to choose the increment version release scope (patch: 1.2.3 => 1.2.4 / minor: 1.2.3 => 1.3.0 / major: 1.2.3 => 2.0.0).

- Answering **Abort** cancel the release.
- Answering **Release** release the application with the selected release scope.

At the end of the build, a new tag with the release version is automatically created (available in Github in Releases > Tags​), and the `pom.xml` file of the master branch of the Github repository is automatically updated with the next SNAPSHOT version in a Post release commit.s

## Standard Operations on Dev Sandbox

### Access the Nuxeo Logs

- Go to **Applications** > **Pods** > Nuxeo server pod suffixed by **(projectname)-dev-interactive** or **(projectname)-uat-interactive** > **Logs**
- Alternatively, you can use the [Openshift command line interface](https://docs.openshift.com/container-platform/4.5/cli_reference/openshift_cli/getting-started-cli.html), also called OC CLI.

### Access the Database Logs

- Either from **Applications** > **Pods** > **Mongo pod** > **Logs** or **Terminal**. Enter `mongo` to get into shell. The databases for both Dev and UAT exist in the pod. Use the correct database and run mongo commands.

### Edit to the Nuxeo Configuration

If you want to make changes to the application configuration from the ​`nuxeo.conf` file, for instance to set `org.nuxeo.dev` property to `true`.

- Go on **Resources** > **Config Map** >  **(projectname)-dev-config** or **(projectname)-uat-config** > **Actions** > **Edit** > Add the lines on the `nuxeo.conf` file.
-  Never update directly on the Nuxeo server the `nuxeo.conf` file because it will be lost if a new image is deployed.

{{#> callout type='info'}}
You will be able to edit the `nuxeo.conf` file, and it will be deployed next time the pipeline is run or the pod can be deleted: **Applications** > **Pods** > **Nuxeo server pod suffixed by (projectname)-dev-interactive or  (projectname)-uat-interactive** > **Actions** > **Delete**, so a new pod is deployed with the config changes.
{{/callout}}

### Install a Nuxeo Package

- Go to **Applications** > **Deployments** > **(projectname)-dev-interactive** or **(projectname)-uat-interactive**  > **Environment** > Edit `NUXEO_PACKAGES` value with your package name
- Alternatively **Applications** > **Deployments** > **(projectname)-dev-interactive** or **(projectname)-uat-interactive**  > **Actions** > Edit YAML and your package in the value of `NUXEO_PACKAGES`

### Deploy a Nuxeo Studio Project

- Make a dependency on your Nuxeo package to the version of the Nuxeo Studio project.
- Update the `org.nuxeo.dev` property to `true` on the `nuxeo.conf` file and hot reload on the instance with the [Nuxeo Browser Extension]({{page space='nxdoc' page='nuxeo-dev-tools-extension'}}).

### Drop the Database and Index

If you want to drop the database and Elasticsearch index (for instance if you want to clean the data, or if you have pushed changes about a Document Type or a schema), go to **​Builds** > **Pipelines**, and select the reset pipeline on the target environment.

You will be ask to confirm the environment that you would like to reset (Dev or UAT) and then if you are sure that you want to drop all the data.

### Run nuxeoctl Command

Within the nuxeo pod’s console you can access to the `nuxeoctl` command.

{{#> callout type='warning'}}
Remember that any packages using `nuxeoctl` will  be removed  after  a new deployment: Use Config Map instead.
{{/callout}}

## Troubleshooting

If something goes wrong, the first reaction you should have is to check the logs. For every build or deployment, you can click on View logs located on the left side of the running pipeline. For instance, if the pipeline build fails, you can click on View logs and you will be redirected to the Jenkins console output.

- **Build** > **Pipelines** > **View logs**
- Or **Applications** > **Routes** > Open the Jenkins URL

The second reaction to have is to check global logs and pods status.
Go to Monitoring​: You can see all the warning and error events on the right.

The third reaction you should have in case of a failing build is simply to start a new build. Within a containerized deployment, issues with pulling packages from remote sources may make it time-out. Starting a new build, will make the remote pull attempt again and possibly a successful build.

Finally, you can contact Nuxeo via email for more questions.
