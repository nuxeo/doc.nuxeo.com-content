---
title: Nuxeo Connector for Content Intelligence
description: 'Nuxeo Connector for Content Intelligence connects the Discovery module to the Nuxeo repository. This enables the Discovery module of Content Intelligence to access documents ingested from the repository and retrieve information using artificial intelligence.'
review:
    comment: ''
    date: '2025-03-31'
    status: ok
labels:
    - ingest
    - Contentintelligence
    - connector
toc: true
tree_item_index: 2000
---

The Nuxeo Connector for Content Intelligence connects Knowledge Discovery to the Nuxeo repository. It enables you to perform tasks on Nuxeo documents using Artificial Intelligence (AI) from the Discovery module in the Content Intelligence Cloud. After you install and configure Nuxeo Connector for Content Intelligence, you must ingest the documents you want the Discovery module to access and perform tasks using AI.

## Install the Nuxeo Connector for Content Intelligence

To install the Nuxeo Connector for Content Intelligence, complete the following steps.

1. Install the addon package using the mp-install command. For additional information, refer to the installation steps mentioned in the [Installing a New Package on Your Instance](https://doc.nuxeo.com/nxdoc/installing-a-new-package-on-your-instance/) topic.

2. Update nuxeo.conf with appropriate properties. Please refer to list of configuration options in the Configure the Nuxeo Connector for Content Intelligence section.

## Configure the Nuxeo Connector for Content Intelligence

Configure the plugin based on your environment using the following nuxeo.conf properties.

| Property name | Description |
| ------------- | ----------- |
| hxai.api.client.id | The Hxai client ID |
| hxai.api.client.secret | The Hxai client secret |
| hxai.api.auth.baseurl | The IDP base URL (ex: https://auth.iam.dev.experience.hyland.com) |
| hxai.api.ingest.baseurl | The Hxai ingest base URL (ex: https://ingestion-api.insight.dev.ncp.hyland.com/v1) |
| hxai.api.ingest.env.key | The ingest environment key |

## About ingestion 

The connector leverages Nuxeo’s search capabilities to select documents and sends them for ingestion using the NXQL query language. The Nuxeo documents selected for ingestion go through the following stages:
- Mapping: The metadata of the documents are mapped. If there are no custom maps defined, the default map can be used for mapping the document metadata. However, custom maps can be specified as default for specific document types.
- Remap and transform: The name of the properties are standardized and values are transformed using functions.
- Upload: Upload the binaries and IDs are assigned to them in the S3 bucket.
- Data serialization: The metadata is serialized

The serialized metadata is then passed to the ingest service which is then stores it in the data lake. The Discovery module enables Nuxeo users to retrieve information using artificial intelligence by accessing ingested data from the data lake. Therefore, to ensure that Discovery module has access to the required data, ensure that the mapping and transformation is configured to ingest the required data from the Nuxeo repository.

## Planning for ingestion

Before you start ingesting documents, identify what information you want to retrieve using the Discovery module. Based on your requirement, you can determine what data you want to ingest so that the Discovery module can access it and provide you the intended results. Once you have the clarity about the data you want to ingest, you can configure the mappings, ingestion parameters, ingest property mappers to simplify complex metadata, and transformation functions.

After the configuration is complete, you can test a document ingestion using the Dry run mode. For the connector to ingest documents, the documents must be selected and sent for ingestion. Nuxeo search capabilities are used to locate the documents and NXQL query language sends them for ingestion. The ingest action uses the Nuxeo Bulk Action Framework (BAF) to manage the documents matched by an NXQL query. BAF provides a REST API to call and monitor it. The following example displays the execution of the ingest action:

```curl -ss -u foo:bar -H 'Content-Type: application/json' <myNuxeoUrl>/nuxeo/api/v1/automation/Bulk.RunAction -d \
'{"params":{
    "query":"SELECT * FROM Document WHERE ecm:ancestorId = '\''<my-root-doc-id>'\''",
    "action":"ingest",
    "parameters": "{\"inlineMapping\":\"dublincore,common\",\"inlineTransformer\":\"a=b=Function,c=d=OtherFunction\",\"replaceMapping\":false,\"aggregateDefaultMapping\":false,\"aggregateDefaultTransformer\":false,\"persistMapping\":false}
  }
}'```

In the above curl command, the ingest action ingests document metadata for documents in the `<my-root-doc-id>`, If the documents have complex metadata, they must be simplified using the ingest property mappers before they are ingested.

## Configuring ingest parameters, mappings, and transformations

### Configuring ingest parameters

The ingest action uses the following parameters which can be categorized under persistent and non-persistent parameters:

**Persistent parameters**

These parameters are saved during ingestion so that repeat ingestions to update the document use the same parameters.
 - `inlineMapping`
 - `inlineTransformer`
 - `aggregateDefaultMapping`
 - `aggregateDefaultTransformer`

 **Non-persistent parameters**
 These parameters are not saved during ingestion:
 - `replaceMapping`
 - `persistMapping`

 