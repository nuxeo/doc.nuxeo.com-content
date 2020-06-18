---
title: Development Sandbox
review:
    comment: ''
    date: '03-19-2020'
    status: ok
labels:
    - nuxeo-cloud
tree_item_index: 600
toc: true
---

## Concept

The Nuxeo Dev Sandbox is built using OpenShift. OpenShift is an open source container application platform, based on top of Docker containers and Kubernetes pods. It enables you to easily build and deploy applications during their development process.

Nuxeo uses the Dev Sandbox, as part of the development process, to deploy and validate work before pushing to production cloud environments.

The Nuxeo Sandbox is meant purely for Development. It does not support large volume data storage, data backups and it should never store production data.

## Two sandbox environments

During the application development process, there is a need to test the latest work on test environments other than pre-production or production environments.

Thus, the OpenShift project offers two such sandbox environments that can be managed directly via the OpenShift developer admin:



These two environments share a MongoDB server and an Elasticsearch server, but each has its own MongoDB database and ElasticSearch index.

## OpenShift Web Console

Access to the OpenShift administration is managed by Nuxeo through Okta. An account with Okta is required to login.

https://openshift.prod.nuxeo.io

## Build & deploy the application

### Principals

If you have pushed changes to the ​Nuxeo Studio project and/or to the project GitHub repository​, you will likely need to build and deploy the latest application with these changes to one or both Sandbox environments.

To do so, you can use the preconfigured default pipeline. Basically, it checks out the master branch of the Github repository containing the marketplace package module, runs a Maven build, generates the marketplace package zip, then deploys it to the Dev environment, and possibly to the UAT environment after user validation.

For both Dev and UAT environments, the pipeline is by default aligned with the master branch of the Github repository - so it's not possible to deploy a certain branch to the Dev environment and another branch to UAT.

### Process

To start the pipeline, go to Builds > Pipelines, choose the default one and click on Start Pipeline.
It takes minutes to complete the pipeline (depending on test coverage). At the end of the pipeline, you can click on the yellow Input Required message asking if you want to deploy the application to the UAT environment too.

- If you are asked to login – please login with Okta. Then select I’m a Nuxeo Customer
- Answering Proceed will deploy the application to the UAT environment. Answering Abort will only deploy the application to the Dev environment.

### Edit to the Nuxeo configuration

If you want to make changes to the application configuration from the ​nuxeo.conf file

for instance to set ​org.nuxeo.dev property to true

Go to ​Resources > Config Maps and select the target environment configuration

You will be able to edit the nuxeo.conf file, and it will be deployed next time the pipeline is run or the pod can be deleted (Applications-->Pods-->devORuatpod-->Actions-->delete), so a new pod is deployed with the config changes.

## Release the application

### Principals

If you wish to save the current state of the application to make it available to users as a stable version, and still be able to continue the development process, you can perform a release of the application. For instance, you would want to release the 1.0.0 version, deploy it to pre-production and production, continue to develop the application on the master branch, and then release the 1.1.0 version, 2.0.0 version... etc

You can use the preconfigured release pipeline. Basically, it first asks you to choose the release scope (patch, minor, major), then checks out the master branch of the Github repository, uses the Nuxeo Devtools python release script, prepares and performs a release (automatically detecting the version to release depending on the release scope you select), then deploys the release artifacts to a Nexus repository embedded in the OpenShift project.

### Process

To start the pipeline, go to ​Builds > Pipelines > release-pipeline and click on Start Pipeline. The pipeline takes around 30 minutes to be completed.

At the beginning of the build, you can click on the yellow Input Required message, asking you to choose the increment version release scope (patch: 1.2.3 => 1.2.4 / minor: 1.2.3 => 1.3.0 / major: 1.2.3 => 2.0.0). Answering Abort will cancel the release. Answering Release will release the application with the selected release scope.

At the end of the build, a new tag with the release version is automatically created (available in Github in Releases > Tags​), and the pom.xml file of the master branch of the Github repository is automatically updated with the next SNAPSHOT version in a Post release commit.

## Drop the database and index

If you want to drop the database and Elasticsearch index (for instance if you want to clean the data, or if you have pushed changes about a Document Type or a schema), go to ​Builds > Pipelines and select the reset pipeline on the target environment.

You will be ask to confirm the environment that you would like to reset (Dev or UAT) and then if you are sure that you want to drop all the data.


## Troubleshooting

If something goes wrong, the first reaction you should have is to check the logs. For every build or deployment, you can click on View logs located on the left side of the running pipeline. For instance, if the pipeline build fails, you can click on View logs and you will be redirected to the Jenkins console output.

The second reaction to have is to check global logs and pods status. Go to Monitoring​. You can see all the warning and error events on the right.

The third reaction you should have in case of a failing build is simply to start a new build. Within a containerized deployment, issues with pulling packages from remote sources may make it time-out. Starting a new build, will make the remote pull attempt again and possibly a successful build.

Finally, you can contact Nuxeo via email for more questions.

## Run nuxeoctl command

Within the nuxeo pod’s console you can access to the nuxeoctl command.
