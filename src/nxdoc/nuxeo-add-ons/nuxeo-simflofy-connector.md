---
title: Content Federation with Simflofy
description: 'Nuxeo Simflofy connector allows to leverage content federation from Simflofy in Nuxeo.'
review:
    comment: ''
    date: '2019-12-19'
    status: ok
labels:
    - simflofy
toc: true
tree_item_index: 350
---

{{! excerpt}}
The Nuxeo Simflofy addon allows users to search, find and view documents stored in an external system, thanks to Nuxeo federation capabilities. Binary files can either be copied in Nuxeo repository or remain "in-place".
{{! /excerpt}}

[Simflofy](https://www.simflofy.com/) is a Federation and Integration platform for content management. It provides ways to search or migrate data across multiple content repositories.

## Synchronization Process

The synchronization is done according to the following scenario:

1. Simflofy queries 3rd party repositories to fetch content based on rules that can be specified (New documents, modified documents, etc.).
1. Simflofy creates documents in Nuxeo with references to these contents.
1. Nuxeo is then able to access the documents that are stored in those 3rd party repositories.

Simflofy documents are now stored in Nuxeo like any other document.

## Installation

- A Simflofy server is needed to run the federation process. You can follow the [Simflofy installation steps](http://simflofy.helpdocsonline.com/install-and-configuration).

{{#> callout type='warning' heading='Simflofy requirements'}}
Note that Simflofy requires **MongoDB 3.4.x** as a database.
{{/callout}}

- Install the [Nuxeo Simflofy connector](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-simflofy) available in the marketplace in your Nuxeo instance.

## Configuration

### Nuxeo Configuration

This addon comes with a [Blob Provider]({{page page='file-storage'}}#blob-manager-and-blob-providers) that enables access from Nuxeo to any content that Simflofy knows how to federate. This blob provider is configurable with the following parameters:

- `nuxeo.simflofy.url`: the Simflofy URL.
- `nuxeo.simflofy.username`: the username that Nuxeo use to access Simflofy.
- `nuxeo.simflofy.password`: the password that Nuxeo use to access Simflofy.
- `nuxeo.simflofy.createFromKey.users`: the list of users that can create blobs in this blob provider (separated by commas).

{{#> callout type='info' heading='Full access'}}
`nuxeo.simflofy.createFromKey.users=*` allows all users to be able to create blobs.
{{/callout}}

Example:
```
nuxeo.simflofy.url=http://localhost:8080/simflofy-admin
nuxeo.simflofy.username=admin
nuxeo.simflofy.password=admin
nuxeo.simflofy.createFromKey.users=user1,user2...
```

These configuration parameters should be provided in the configuration file `nuxeo.conf`.

### Simflofy Configuration

#### Authentication Connection

First, create an **authentication entry** for all the systems you need to federate.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Content Federation with Simflofy/simflofy-authentication1.png
    name: simflofy-authentication1.png
    addins#screenshot#up_to_date
--}}
![simflofy-authentication1.png](nx_asset://cabdf5a4-0165-480d-91a0-4ba69422fece ?w=650,border=true)

Each system has a specific authentication screen. Enter your credentials and any additional information needed for the authentication.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Content Federation with Simflofy/simflofy-authentication2.png
    name: simflofy-authentication2.png
    addins#screenshot#up_to_date
--}}
![simflofy-authentication2.png](nx_asset://f6707431-df76-45a0-8ac6-4d1482a1fb81 ?w=650,border=true)

#### Repository Connection

Once the authentication configuration is set, create a **repository connection** which will use the authentication connection you've just defined.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Content Federation with Simflofy/repository-connection1.png
    name: repository-connection1.png
    addins#screenshot#up_to_date
--}}
![repository-connection1.png](nx_asset://b61e7360-f640-402b-8b5b-d99f2e874f50 ?w=650,border=true)

Validate your configuration by clicking on the **Test** button.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Content Federation with Simflofy/repository-connection4.png
    name: repository-connection4.png
    addins#screenshot#up_to_date
--}}
![repository-connection4.png](nx_asset://a7981ae0-2455-4cdd-9f6f-89a6caebb164 ?w=650,border=true)

#### Content Service Connection

The **content service connection** allows you to use the addon for "in-place" federation. Thus, it is not needed if you only need to migrate content.

1. Set the **Security Mode** to **Simflofy Authentication Connection**.
1. Reuse the authentication connection you've initially created.
1. Optionally, edit the additional default settings.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Content Federation with Simflofy/content-service-connection.png
    name: content-service-connection.png
    addins#screenshot#up_to_date
--}}
![content-service-connection.png](nx_asset://66c41e9c-77f4-40fd-a2e4-40c0a9ef38fe ?w=650,border=true)

#### Output Connection

An **output connection** is necessary to indicate the target folder of the Nuxeo repository. It is typically something like `/default-domain/workspaces/federation-folder`.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Content Federation with Simflofy/nuxeo-output-connector.png
    name: nuxeo-output-connector.png
    addins#screenshot#up_to_date
--}}
![nuxeo-output-connector.png](nx_asset://4eb716c3-7b8e-4a9d-ac65-8ceb6d4eeaa8 ?w=650,border=true)

The **Nuxeo Config** tab indicates the folder where federated documents will be found.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Content Federation with Simflofy/nuxeo-output-connector2.png
    name: nuxeo-output-connector2.png
    addins#screenshot#up_to_date
--}}
![nuxeo-output-connector2.png](nx_asset://69e9e084-d2fb-4da0-acc9-554713b665c3 ?w=650,border=true)

#### Discovery

A **discovery** is a mechanism to retrieve all the document types and document properties available in a specific system. It is necessary to create a discovery instance if you need to establish a particular mapping between system: without discovery, you'll have to create the mapping manually, without any suggestion (and consequently, increase the federation error rate).

A discovery instance needs an authentication connection and additional properties.

Once created, you can run a **report** to view the discovery results.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Content Federation with Simflofy/nuxeo-discovery.png
    name: nuxeo-discovery.png
    addins#screenshot#up_to_date
--}}
![nuxeo-discovery.png](nx_asset://ed2cd7b3-5711-450c-919a-62121728e172 ?w=350,border=true)


#### Federation Job

The federation jobs are the cornerstone of the federation process. A job concerns **one source system** and **one target system**. Consequently, if you need to federate three applications to Nuxeo, you'll need three jobs.

{{#> callout type='info' }}
At the time of writing, in the case of **bidirectional synchronization**, you need to create one job per synchronization direction.
{{/callout}}

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Content Federation with Simflofy/nuxeo-job-main.png
    name: nuxeo-job-main.png
    addins#screenshot#up_to_date
--}}
![nuxeo-job-main.png](nx_asset://cfa2a93f-ff9c-4a40-be55-41ca1e0f3297 ?w=650,border=true)

Click on **Add a New Job** button to create a new job and fill in the information in the different tabs.

##### Job Description

In the **Details** tab, you need to indicate:
- The repository connection and the content services for the federation mechanism (source system).
- The output connection (target system).
- The migration type (simple migration, incremental migration or polling).

{{#> callout type='warning' heading='in place federation'}}
In the **Advanced Options**, uncheck the **Include Binary** checkbox if you're federating content. The connector won't work if this option is activated with "in place" federation.
{{/callout}}

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Content Federation with Simflofy/job-details.png
    name: job-details.png
    addins#screenshot#up_to_date
--}}
![job-details.png](nx_asset://a228e980-d9de-4e4d-93fe-a2c29b463bf6 ?w=650,border=true)

##### Tasks

The **Task** tab allows you to perform predefined actions on the federated content.

For example:
- The **Override Folder Path Task** helps you to build the target path according to document properties (in the case you don't want to replicate the same folder structure).
- The **Generic ACL Mapper Task** allows you to map permissions.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Content Federation with Simflofy/job-tasks.png
    name: job-tasks.png
    addins#screenshot#up_to_date
--}}
![job-tasks.png](nx_asset://bbe8ca67-6322-4299-8e9a-18246280f3bb ?w=650,border=true)

##### Mappings

The **Mappings** tab allows you to map document types as well as document properties. If you've run a discovery on the federated systems, then the connector offers you suggestion mechanism. On the left side, the source system information is listed and the target system on the right side.

1. Select the discovery instance.
1. Select the document type mapping.
1. Select the property mapping (Simflofy will indicate you the field nature to ensure mapping coherence).
1. Click on the **+** button to validate.

{{#> callout type='info' }}
You can use **Calculated Field** if you need to set the same value to a specific property.
{{/callout}}

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Content Federation with Simflofy/nuxeo-mapping.png
    name: nuxeo-mapping.png
    addins#screenshot#up_to_date
--}}
![nuxeo-mapping.png](nx_asset://4949a935-f1dd-41d7-9100-7d2e5a0c3069 ?w=650,border=true)

##### Additional Information

Depending on the system you're federating, some extra tabs will appear. For example, in the case of a CMIS connection, you can restrict the document you wish to federate with a CMIS Query:

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Content Federation with Simflofy/cmis-query.png
    name: cmis-query.png
    addins#screenshot#up_to_date
--}}
![cmis-query.png](nx_asset://380342db-ad2b-4315-bf86-2a1e0ebe09c2 ?w=650,border=true)

#### Job Execution

Once your job is configured, you can run it from the **Job Status and Monitoring** menu. Click on the **Start** link to trigger the job and then on the **Refresh** button to see the federation process status.

You can view among other metrics:
- The number on document retrieved from the source system.
- The number of created/modified documents in the target system.
- The number of synchronization errors.
- The job execution time.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Content Federation with Simflofy/job-report.png
    name: job-report.png
    addins#screenshot#up_to_date
--}}
![job-report.png](nx_asset://77135068-16b9-4c19-ab80-4c36356d52b0 ?w=650,border=true)

{{#> callout type='info'}}
If you need to execute the federation job automatically, then you'll have to set up a **job runner**. This process runs a specific federation job periodically.
More information on the [Simflofy Documentation Site](http://simflofy.helpdocsonline.com/simflofy-job-runner-2).
{{/callout}}

You can view the job report by clicking on the numbers displayed in each column (Read, Written, Errors...) to list the exhaustive list of related documents:

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Content Federation with Simflofy/job-report2.png
    name: job-report2.png
    addins#screenshot#up_to_date
--}}
![job-report2.png](nx_asset://0ad3664c-e7ee-4268-971c-f114009bec31 ?w=650,border=true)

## Functional Overview

### Data Sources

You can store in Nuxeo a huge variety of document types:
- Files stored in a **flat folder structure**: Either in a filesystem or a remote cloud storage unit such as Amazon S3 or Microsoft Azure.
- Similarly, you can federate content stored in the major **file storage and synchronization cloud application** (Google Drive, Dropbox, Box, etc.).
- Documents stored in a **legacy document management system**. In this scenario, the federation configuration is more complex as you would need to map document properties, document permissions, document ownership, document versions, etc.
- Information stored in **specific applications** with an existing Simflofy connector (Twitter, Microsoft Exchange, Salesforce...) or in a structured application (as a relational database for example)

### Integration Scenario

The Nuxeo Simflofy addon allows you to run two different scenario:
1. In the main cases, users are willing **to federate** their document repositories within Nuxeo. It means the document remains in the third party applications, but users are able to  search, find and view them in Nuxeo transparently. From a end-user perspective, the federation is totally transparent so a user don't know necessarily if a document is stored in Nuxeo or any other application
2. If the external document repository aims at being decommissioned, then the connector allows you **to migrate** the content into Nuxeo. Technically, it means the binaries are copied in Nuxeo.
