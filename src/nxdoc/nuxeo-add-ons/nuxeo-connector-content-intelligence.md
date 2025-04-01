---
title: Nuxeo Connector for Content Intelligence
description: 'Nuxeo Connector for Content Intelligence connects the Discovery module to the Nuxeo repository. This enables the Discovery module of Content Intelligence to access documents ingested from the repository and retrieve information using artificial intelligence.'
review:
    comment: ''
    date: '2025-03-26'
    status: ok
labels:
    - ingest
    - Contentintelligence
    - connector
toc: true
tree_item_index: 365
---

The Nuxeo Connector for Content Intelligence connects Knowledge Discovery to the Nuxeo repository. It enables you to perform tasks on Nuxeo documents using Artificial Intelligence (AI) from the Discovery module in the Content Intelligence Cloud. After you install and configure Nuxeo Connector for Content Intelligence, you must ingest the documents you want the Discovery module to access and perform tasks using AI.

## Install the Nuxeo Connector for Content Intelligence

To install the Nuxeo Connector for Content Intelligence, complete the following steps.

1. Install the addon package using the `mp-install` command. For additional information, refer to the installation steps mentioned in the [Installing a New Package on Your Instance](https://doc.nuxeo.com/nxdoc/installing-a-new-package-on-your-instance/) topic.

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
- Upload: Upload the binaries. The IDs are assigned to them in the S3 bucket.
- Data serialization: The metadata is serialized

The serialized metadata is then passed to the ingest service which then stores it in the data lake. The Discovery module enables Nuxeo users to retrieve information using artificial intelligence by accessing ingested data from the data lake. Therefore, to ensure that Discovery module has access to the required data, ensure that the mapping and transformation is configured to ingest the required data from the Nuxeo repository.

## Planning for ingestion

Before you start ingesting documents, identify what information you want to retrieve using the Discovery module. Based on your requirement, you can determine what data you want to ingest so that the Discovery module can access it and provide you the intended results. Once you have the clarity about the data you want to ingest, you can configure the mappings, ingestion parameters, ingest property mappers to simplify complex metadata, and transformation functions.

After the configuration is complete, you can test a document ingestion using the Dry run mode. For the connector to ingest documents, the documents must be selected and sent for ingestion. Nuxeo search capabilities are used to locate the documents and NXQL query language sends them for ingestion. The ingest action uses the Nuxeo Bulk Action Framework (BAF) to manage the documents matched by an NXQL query. BAF provides a REST API to call and monitor it. The following example displays the execution of the ingest action:

```
curl -ss -u foo:bar -H 'Content-Type: application/json' <myNuxeoUrl>/nuxeo/api/v1/automation/Bulk.RunAction -d \
'{"params":{
    "query":"SELECT * FROM Document WHERE ecm:ancestorId = '\''<my-root-doc-id>'\''",
    "action":"ingest",
    "parameters": "{\"inlineMapping\":\"dublincore,common\",\"inlineTransformer\":\"a=b=Function,c=d=OtherFunction\",\"replaceMapping\":false,\"aggregateDefaultMapping\":false,\"aggregateDefaultTransformer\":false,\"persistMapping\":false}
  }
}'
```

In the above curl command, the ingest action ingests document metadata for documents in the `<my-root-doc-id>`, If the documents have complex metadata, they must be simplified using the ingest property mappers before they are ingested.

## Configuring ingest parameters, mappings, and transformations

### Configuring ingest parameters

The ingest action uses the following parameters which can be categorized under persistent and non-persistent parameters:

**Persistent parameters**

These parameters are saved during ingestion so that repeat ingestions use the same parameters to update an ingested document.
 - `inlineMapping`
 - `inlineTransformer`
 - `aggregateDefaultMapping`
 - `aggregateDefaultTransformer`

 **Non-persistent parameters**
 These parameters are not saved during ingestion:
 - `replaceMapping`
 - `persistMapping`

The following table explains the parameters and how they can be configured:

| Parameters | Description |
| ------------- | ----------- |
| `inlineMapping` | Assign mappings as values to this parameter. For example, `dublincore`, `dc:title`, @myMappingReference. For additional information, refer to the Configure mappings section. |
| `inlineTransformer` | Assign transformation functions as values to this parameter. For example, `_Concat`. You can create your own transformation function and assign it to this parameter. You can also associate multiple functions that can execute in the given sequence. For additional information, refer to the Configure remap and transformation section. |
| `replaceMapping` | Set the value of this parameter to `true` to replace the mapping and transformation previously saved for a specific document. The default value is `false`. |
| `aggregateDefaultMapping` | Assign default mapping for a specific document type. This adds to the `inlineMapping` parameter.  |
| `aggregateDefaultTransformer` | Assign default transformation for a specific document type. This adds to the `inlineTransformer` parameter. |
| `persistMapping` | Set the value to `true` if you want the persistent values to be saved during ingestion. |

### Configuring mappings

In the Document Ingestion Life Cycle, mapping is the stage where the metadata and content of the documents selected for ingestion are mapped.  Mapping for specific type of documents can be configured which are referred to as custom maps. If a document type does not have a custom map associated with it, default mapping configuration is used to map its metadata.

#### Mapping syntax

The following values are recognized for mapping:

| Mapping values | Description |
| ------------- | ----------- |
| Unprefixed properties | These properties are recognized but not recommended. Example, `files # will add files:files to the mapping` |
| Prefixed properties |  - Add single properties, one by one. Example, `dc:title` |
| Schemas | Maps all the properties included in the schema. For example, the `dublincore` schema includes 18 properties. Therefore it maps all the 18 properties when used. |
| Mapping reference | Maps all the properties included in the mapping reference. For example, `@myMappingReference` |

They can be used individually or together as comma separated values. The following example shows how multiple mappings can be assigned to the `inlineMapping` parameter:
```
"inlineMapping": "@myMappingReference,dc:title,dublincore,files,"
```

#### Custom mappings

You can set a custom map as the default map for a specific document type. To implement this, the document type must be set as the mapping contribution’s ID. You can modify the following custom map sample based on your rquirement and set the default maps for different document types.

```
<?xml version="1.0"?>
<component name="org.nuxeo.hxai.IngestMappingServiceComponent.test.referencing" version="1.0">
  <extension target="org.nuxeo.hxai.IngestMappingServiceComponent" point="ingestMappings">
    <!--default for Picture typed documents-->
    <ingest id="Picture">
      <properties>dc:title,icon,relatedtext:relatedtextresources</properties>
    </ingest>
    <!--to be referred to as @first-->
    <ingest id="first">
      <properties>dc:title,icon,relatedtext:relatedtextresources</properties>
    </ingest>
    <ingest id="second">
      <properties>dc:description,uid:major_version,uid:minor_version</properties>
    </ingest>
    <ingest id="third">
      <properties>dc:content-type</properties>
    </ingest>
  </extension>
</component>
```

The IngestMappingDescriptor can be contributed via XML, validated and ready to use at runtime. It is a central way to define mappings.

#### Configuring custom property mappers

Ingest service can only process documents with metadata at the root level. Documents with nested or complex metadata must be simplified before they move to the Remap and Transform stage. Custom property mappers are used to simplify such complex metadata. This is useful in cases where multiple files are part of a document (files:files for example, which is spread into multiple files:files/n entries).

The `ingestPropertyMappers` configuration implements java.util.function.Consumer as `PropertyMappingContext`, which allows the properties in the configuration to access any element inside the properties part of the object of the ingestible document. The following sample component includes the setting to map `my:property` using the `my.custom.Mapper` custom mapper.

```
<?xml version="1.0" encoding="UTF-8"?>
<component name="my.component" version="1.0">
  <extension target="org.nuxeo.hxai.IngestMappingServiceComponent" point="ingestPropertyMappers">
    <ingestPropertyMappers id="myFileMappers">
      <class property="my:property">my.custom.Mapper</class>
    </ingestPropertyMappers>
  </extension>
</component>
```

### Configuring remapping and transformations

After the mapping is complete, the document metadata is remapped and transformed. This action is performed by transformers where the transforming values and remapping keys are regrouped to standardize the mappings. Different functions can be used on the data to transform the content. Based on the requirement, transformers can perform the following actions:

**Remap**
```
# Remap only
dc:=base: # Remap all dublincore properties to prefix them with 'base'
:title=:name # Remap all properties suffixed 'title' and apply Function to them
files:file/=ingest:binaries # Remap all files:files/whatever into ingestion:binaries/whatever
```

**Transform**
```
# Transform only
==Function # Apply Function to everything
a==Function # Apply Function to a, don't rename it
```

**Remap and transform**
```
# Remap and transform
a=b=Function # Map simple property a to b and apply Function
:title=:name=Function # Remap all properties suffixed 'title' and apply Function to them
a:b=c:d=Function # Exactly map a:b to c:d and apply Function to it
files:files/=ingestion:binaries=Function # Remap all flattened items from files:files/whatever to ingestion:binaries/whatever and apply Function to them one by one
```

#### Joining multiple transformations into a transformer

Transformations can be chained (joined by comma separators) into a transformer, which apply the transformations in the sequence they are joined. Here is an inline IngestTransformerDescriptor:

```
a=b=Function,a=b=OtherFunction # After being transformed int b, a is not matched by the second transformation and OtherFunction is not applied.
# This would work but there is a better way below
a=b=Function,b==OtherFunction # Function will be applied before OtherFunction
```

#### Configuring transformer functions

You can create custom functions based on your transformation requirements. The following functions are included in the package for testion:

- `_Flag`: assures that a property was contacted
- `_Concat`: concatenates a distinguishable value to the property value
- `_Count`: initiates or increments a numeric value to display how many times it was applied

##### Default function location

There is a default package for functions used by Transformers. If you include the functions in the default package, you do not need to specify the package when you execute them. For example:
```
// assumed package
org.nuxeo.hxai.ingest.functions
```

##### Custom function locations

You can put your functions in any custom location. The following example displays how to include functions from a custom location:
```
MyFunction # points to org.nuxeo.hxai.ingest.functions.MyFunction
.MyFunction # same thing
.my.sub.package.MyOtherFunction # points to org.nuxeo.hxai.ingest.functions.my.sub.package.MyFunction
my.complete.package.MyFunction # use a cannonical name
```

##### Joining multiple transformation functions

Multiple transformation functions can be joined to apply them on the metadata in the sequence the appear. For example:

```
# The most reliable solution to chain functions on a single property doesn't require you to figure things out:
a=b=Function1=Function2=Function3,c==Function1=Function3 # a is renamed to b and Function1 to 3 are applied to it in order. c will then be transformed by Function1, then Function3
# hard to distinguish both Transformations from each other? Add some comas. It's free!
a=b=Function1=Function2=Function3,,,c==Function1=Function3 # same result
```

### Adding ingestion parameters to ingest action

The ingestion parameters must be included as a string when the ingest action is executed to ingest documents. For this, you can save the parameters in a JSON file and add it to the `parameters` function in the command line. For example:

```
$(< myParams.json | jq -c | jq -R)
```

You can also add the parameters manually. For example:

```
"{\"inlineMapping\":\"dublincore,common\",\"inlineTransformer\":\"a=b=Function,c=d=OtherFunction\",\"replaceMapping\":false,\"aggregateDefaultMapping\":false,\"aggregateDefaultTransformer\":false,\"persistMapping\":false}"
```

### Testing document ingestion

After configuring the connector, you can perform a test ingestion to see that the ingestion task is executing correctly. To perform a test ingestion, activate the dryRun mode by setting the value of the `dryRun` parameter to `true` in the ingestion parameters. 
**Example**

```
  "dryRun": true,
  "inlineMapping": "dc:contributors,dc:description",
  "inlineTransformer": "dc:title=meta:name=_Flag",
  "aggregateDefaultMapping": false,
  "aggregateDefaultTransformer": false,
  "replaceMapping": true 
```

Once the `dryRun` mode gives the expected results, you can execute document ingestions on your repository. You can also automate your ingestion tasks using the scheduler service and event-based automation functionality available in Nuxeo.

## Automating document ingestion

Nuxeo supports schedule-based (default) and event-based automations, which can be used to automate ingestion tasks.

### Automation using Scheduler

Schedule-based automations are the preferred way to ingest your documents. They execute an even at periodic intervals as set by the user and require read-only access to documents. By setting up multiple schedules, you can run multiple ingestion jobs on subparts of the repository, each with its own config.

Sample module with Schedules and corresponding EventListeners:

**Schedule**

```
<?xml version="1.0" encoding="UTF-8"?>
<component name="org.nuxeo.hxai.crons.config" version="1.0.0">
  <extension target="org.nuxeo.ecm.core.scheduler.SchedulerService" point="schedule">
    <schedule id="ingest1">
      <eventId>ingest1</eventId>
      <eventCategory>ingest</eventCategory>
      <cronExpression>0/2 * * * * ?</cronExpression>
    </schedule>
    <schedule id="ingest2">
      <eventId>ingest2</eventId>
      <eventCategory>ingest</eventCategory>
      <cronExpression>1/2 * * * * ?</cronExpression>
    </schedule>
  </extension>
</component>
```

**EventListener**

```
<?xml version="1.0" encoding="UTF-8"?>
<component name="org.nuxeo.hxai.cron.events.listeners.config" version="1.0.0">
  <extension target="org.nuxeo.ecm.core.event.EventServiceComponent" point="listener">
    <listener name="ingest1" async="false" postCommit="false" priority="120" class="org.nuxeo.hxai.listeners.IngestListener1">
      <event>ingest1</event>
    </listener>
    <listener name="ingest2" async="false" postCommit="false" priority="120" class="org.nuxeo.hxai.listeners.IngestListener2">
      <event>ingest2</event>
    </listener>
  </extension>
</component>
```

**EventListener code**

```
public class IngestListener1 implements EventListener {

    @Override
    public void handleEvent(Event event) {
        String query = "SELECT * from Document WHERE ecm:path = '/default-domain/workspaces/test/test'";
        BulkCommand command = new BulkCommand.Builder(IngestAction.ACTION_NAME, query,
                SYSTEM_USERNAME).param(INLINE_MAPPING, "files:files,file:content,dublincore,tags,foo:bar")
                                .param(INLINE_TRANSFORMER, "files:files/=my:binaries")
                                .param(REPLACE_MAPPING, true)
                                .param(DRY_RUN_MODE, true)
                                .build();
        Framework.getService(BulkService.class).submit(command);
    }
}
```

### Automating repeat ingestions to update ingested documents using the IngestUpdateListener function

The IngestUpdateListener function can be used to updated an ingested document by automating subsequent ingestions. It uses the HxAI facet to update Nuxeo that the document is ingested and is eligible for ingestion update when necessary. However, this function is disabled by default and is not the preferred approach for ingestion because of the following reasons:

- It adds an extra facet to the documents
- Ingestion is not an synchronous process and Nuxeo is not required to take action immediately.

You can enable this automation feature by including the following configuration:

```
<?xml version="1.0" encoding="UTF-8"?>
<component name="org.nuxeo.hxai.events.listener.config.test" version="1.0.0">
  <require>org.nuxeo.hxai.events.listener.config</require>
  <extension target="org.nuxeo.ecm.core.event.EventServiceComponent" point="listener">
    <listener name="ingestlistener" enabled="true"/>
  </extension>
</component>
```





