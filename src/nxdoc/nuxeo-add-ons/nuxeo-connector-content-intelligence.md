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

The Nuxeo Connector for Content Intelligence ingests data from the Nuxeo repository to the Cloud Content Repository so that it is available to Content Innovation Cloud services, such as Knowledge Discovery. It enables you to perform tasks on Nuxeo documents using artificial intelligence (AI) from the Discovery module in the Content Innovation Cloud. After you install and configure Nuxeo Connector for Content Intelligence, ingest the documents that you want the Discovery module to access.

## Understanding the Connector

### About Nuxeo

Nuxeo associates metadata and content such as text and binaries. Nuxeo indexes documents and provides powerful search capabilities. Nuxeo's metadata are stored in schemas. For example:

```xml
<schema xmlns:common="http://www.nuxeo.org/ecm/schemas/common/" name="common">
  <common:icon>/icons/pdf.png</common:icon>
</schema>
<schema xmlns:dc="http://www.nuxeo.org/ecm/schemas/dublincore/" name="dublincore">
  <dc:contributors>
    <item>Administrator</item>
  </dc:contributors>
  <dc:created>2024-11-21T15:38:08.620Z</dc:created>
  <dc:creator>Administrator</dc:creator>
  <dc:description>A poem from the heart</dc:description>
  <dc:lastContributor>Administrator</dc:lastContributor>
  <dc:modified>2024-11-21T15:55:19.496Z</dc:modified>
  <dc:nature>article</dc:nature>
  <dc:title>testPoem</dc:title>
</schema>
```

### About Ingest

The Ingest service provides a REST API to send your documents to Content Intelligence. The Ingest payload is an array of "ingest events" with two distinguishable parts:

**The hard-coded part:** This part of the schema is mandatory and handled by the connector. You do not need to configure it.

**The properties part:** Data is expected in the following structure:
- **Files:** Must be flat at the root of properties. Nested files will be ignored.
- **Values:** Regular metadata values that can be nested.
- **ACL:** Access Control Lists are mandatory but part of the properties. They are sent automatically.

## Connector Capabilities

To ingest documents efficiently, Nuxeo Connector for Content Intelligence provides the following capabilities:

- Synchronize Groups, Users, and Members with Nucleus based on email address
- Ingest existing repositories in a single command leveraging the Bulk Action Framework
- Map documents in a fine-grained way to select which metadata to send for specific document types
- Add extra metadata to comply with the Ingest service specification
- Transform data in real time using transformation functions
- Flatten binaries as required by the Ingest service
- Upload binaries to Ingest
- Mark ingested documents for future document updates
- Automatically trigger ingestion with scheduled jobs
- Consistently ingest documents using the same parameters
- Provide centralized configurations that apply to all eligible documents
- Support per-document-type default configurations
- Combine default, saved, and ad hoc parameters in any configuration
- Provide a dry-run mode to explore possibilities safely

## Installing the Nuxeo Connector for Content Intelligence

To install the Nuxeo Connector for Content Intelligence, complete the following steps:

1. Install the `nuxeo-hxai-connector` addon package using the `mp-install` command. The following example displays how the command is used to install the connector:
   ```
   <NUXEO_HOME>/nuxeoctl mp-install nuxeo-hxai-connector
   ```
   For additional information, refer to the installation steps mentioned in the [Installing a New Package on Your Instance](https://doc.nuxeo.com/nxdoc/installing-a-new-package-on-your-instance/) topic.

2. Update `nuxeo.conf` with appropriate properties. Refer to the configuration options in the Configure the Nuxeo Connector for Content Intelligence section.

## Configuring the Nuxeo Connector for Content Intelligence

Configure the connector based on your environment using the configuration methods described in the following sections.

### Configuring Through nuxeo.conf

#### Configuring Credentials

Update `nuxeo.conf` with the following credential properties:

| Property name | Description |
| --- | --- |
| `hxai.ingest.client.id` | Ingest service client ID for authentication |
| `hxai.ingest.client.secret` | Ingest service client secret for authentication |
| `hxai.ingest.env.key` | Environment key to identify which environment the repository belongs to (format: `hxai-<uuid>`) |
| `hxai.ingest.source.id` | Source ID to uniquely identify the repository in the Ingest service context (format: `<uuid>`) |
| `hxai.nucleus.client.id` | Nucleus service client ID for authentication |
| `hxai.nucleus.client.secret` | Nucleus service client secret for authentication |
| `hxai.nucleus.system.id` | System ID to uniquely identify the repository in the Nucleus context (format: `<uuid>`) |

#### Configuring Bulk Action Defaults

Configure the default concurrency and partitioning for bulk ingestion actions:

| Property name | Default | Description |
| --- | --- | --- |
| `nuxeo.bulk.action.ingestAction.defaultConcurrency` | 1 | Number of concurrent threads for ingest bulk actions |
| `nuxeo.bulk.action.ingestAction.defaultPartitions` | 4 | Number of partitions for parallel processing in ingest bulk actions |
| `nuxeo.bulk.action.nucleusMappingAction.defaultConcurrency` | 1 | Number of concurrent threads for Nucleus mapping bulk actions |
| `nuxeo.bulk.action.nucleusMappingAction.defaultPartitions` | 1 | Number of partitions for parallel processing in Nucleus mapping bulk actions |

### Configuring Through ConfigurationService

Some configurations come with default values and are configurable through the Nuxeo ConfigurationService:

| Property name | Default | Description |
| --- | --- | --- |
| `hxai.nucleus.auth.base.url` | `https://auth.iam.experience.hyland.com` | Base URL for Nucleus authentication |
| `hxai.nucleus.system.integration.base.url` | `https://api.nucleus.experience.hyland.com` | Base URL for Nucleus system integration API |
| `hxai.ingest.base.url` | `https://ingestion.insight.experience.hyland.com` | Base URL for the Ingest service |
| `hxai.connection.pool.max.size` | 1 | Maximum size of connection pool used for binary upload |
| `hxai.executor.pool.size.max` | 1 | Maximum size of thread pool used for serialization and binary upload |
| `hxai.ingest.binary.check.threshold.byte.size` | 26214400 (25 MB) | Minimum file size threshold for digest checking. Files smaller than this threshold are not checked for digest; sending them is faster. In dry-run mode, this check is still performed to allow you to test and tune the threshold. |
| `hxai.ingest.presigned.url.cache.size.max` | 100 | Maximum cache size for presigned URLs used in binary upload |
| `hxai.ingest.inline.consumer.cache.size.max` | 1000 | Maximum cache size for inline transformation consumers. When an inline consumer is submitted to the IngestAction, it is cached for reuse with matching documents. The cache is cleared when it reaches maximum size to prevent unexpected growth. |

### Configuring Through Contributions

Default configuration is based on the `Document` type. Descriptors with ID matching a document type are targeted to that document type.

#### Extension Points

Three extension points are available for contributing custom configurations:

- `IngestMappings` — Define custom mapping configurations
- `IngestTransformations` — Define custom transformation configurations
- `IngestPropertyMappers` — Define custom property mapper configurations

All three extension points use `IngestDescriptor` objects.

#### IngestDescriptor and IngestItemDescriptor

The `IngestDescriptor` is a flexible descriptor that can take an `args` String attribute or a list of `item` child elements (which are `IngestItemDescriptor`s). The `IngestItemDescriptor` is also flexible and can take either an `args` String attribute or a list of `arg` child elements (which are `IngestArgDescriptor`s).

#### Case Study: Default Configuration

Here is a representative sample showing how to use ingestion descriptors with all three extension points:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<component name="org.nuxeo.hxai.config.example" version="1.0">
  <extension target="org.nuxeo.hxai.IngestMappingServiceComponent" point="ingestMappings">
    <ingest id="system" args="ingestProperty:type"/>
    <ingest id="Root" args="@system root:title"/>
    <ingest id="default" args="@system dublincore file:content files:files"/>
  </extension>
  <extension target="org.nuxeo.hxai.IngestMappingServiceComponent" point="ingestPropertyMappers">
    <ingest id="default">
      <item args="files:files FilesPropertyMapper"/>
      <item>
        <arg value="ingestProperty:type"/>
        <arg value="ExtraPropertiesMapper"/>
        <arg value="ingestProperty:type:DOCTYPE"/>
        <arg value="dc:title:BASENAME"/>
        <arg value="dc:created:EPOCH"/>
        <arg value="dc:creator:system"/>
        <arg value="dc:modified:EPOCH"/>
        <arg value="dc:lastContributor:system"/>
      </item>
    </ingest>
    <ingest id="Root">
      <item>
        <arg value="root:title"/>
        <arg value="ExtraPropertiesMapper"/>
        <arg value="ingestProperty:type:DOCTYPE"/>
        <arg value="dc:title:/"/>
        <arg value="dc:created:EPOCH"/>
        <arg value="dc:creator:system"/>
        <arg value="dc:modified:EPOCH"/>
        <arg value="dc:lastContributor:system"/>
      </item>
    </ingest>
  </extension>
  <extension target="org.nuxeo.hxai.IngestMappingServiceComponent" point="ingestTransformations">
    <ingest id="default">
      <item args="dc:title==AddKv annotation:name"/>
      <item args="dc:created==AddKv annotation:dateCreated"/>
      <item args="dc:creator==AddKv annotation:createdBy"/>
      <item args="dc:modified==AddKv annotation:dateModified"/>
      <item args="dc:lastContributor==AddKv annotation:modifiedBy"/>
      <item args="ingestProperty:type==AddKv annotation:type"/>
    </ingest>
  </extension>
</component>
```

## About Ingestion

The connector uses Nuxeo's search capabilities to select documents and sends them for ingestion using the NXQL query language. The Nuxeo documents selected for ingestion go through the following stages:

- **Mapping:** The metadata of the documents are mapped. If no custom maps are defined, the default map is used. Custom maps can be specified as default for specific document types.
- **Remap and transform:** Property names are standardized and values are transformed using custom functions.
- **Upload:** Binaries are uploaded and assigned IDs in the S3 bucket.
- **Data serialization:** The metadata is serialized into the format expected by the Ingest service.

The serialized metadata is then passed to the Ingest service, which stores it in the data lake. The Discovery module retrieves information from this ingested data by using artificial intelligence. Configure mapping and transformation to ingest all repository data that the Discovery module requires.

## Planning for Ingestion

Before you start ingesting documents, identify what information you want to retrieve using the Discovery module. Based on your requirements, determine what data you want to ingest so the Discovery module can access it and provide the intended results. Once you have clarity about the data, configure the mappings, ingestion parameters, ingest property mappers, and transformation functions.

### Important Detail About Ingestion Phases

Ingest `folderish` documents (containers and folders) first. This approach reduces ACL (Access Control List) recomputation downstream. You can control which documents are ingested by using the `onlyContent` parameter (to ingest only non-`folderish` documents) and the `onlyAncestorsAndFolders` parameter (to ingest only `folderish` documents).

### Testing Configuration with Dry Run

After configuration is complete, test document ingestion by using dry-run mode before you perform actual ingestion. To trigger ingestion, select documents and send them for ingestion by using the Bulk Action Framework (BAF). The Ingest action uses BAF to manage documents matched by an NXQL query. BAF provides a REST API to run and monitor the action.

The following example displays a basic Ingest action execution:

```bash
curl -sS -u <myNuxeoCredentials> -H 'Content-Type: application/json' <myNuxeoUrl>/nuxeo/api/v1/automation/Bulk.RunAction -d \
'{"params":{
    "query":"SELECT * FROM Document WHERE ecm:ancestorId = '\''<my-root-doc-id>'\''",
    "action":"ingest"
  }
}'
```

If the documents have complex metadata, they must be simplified using ingest property mappers before they are ingested.

## Configuring Ingest Parameters, Mappings, and Transformations

### Configuring Ingest Parameters

The Ingest action uses parameters that can be categorized as either persistent or non-persistent:

**Persistent parameters** — These parameters are saved during ingestion so that repeat ingestions use the same parameters to update an ingested document:
- `inlineMappings`
- `inlineTransformations`
- `inlinePropertyMappers`
- `aggregateDefaultMappings`
- `aggregateDefaultTransformations`
- `aggregateDefaultPropertyMappers`

**Non-persistent parameters** — These parameters are not saved during ingestion:
- `dryRun`
- `replaceMapping`
- `persistMapping`
- `onlyContent`
- `onlyAncestorsAndFolders`

#### Complete Parameter Reference

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| `dryRun` | boolean | false | When set to `true`, prevents saving any inline parameters, uploading binaries to S3, and sending payloads to the Ingest service. Does not prevent checkDigest calls, allowing you to test and tune the check threshold. |
| `inlineMappings` | String or Array | — | An inline `IngestDescriptor` contributing to `ingestMappings` to apply to documents matching the NXQL query. See Configuring Mappings section. |
| `inlineTransformations` | String or Array | — | An inline `IngestDescriptor` contributing to `inlineTransformations` to apply to documents matching the NXQL query. See Configuring Remapping and Transformations section. |
| `inlinePropertyMappers` | String or Array | — | An inline `IngestDescriptor` contributing to `ingestPropertyMappers` to apply to documents matching the NXQL query. See Configuring Custom Property Mappers section. |
| `aggregateDefaultMappings` | boolean | true | Leverages the default `ingestMappings` for the document based on its type. This adds to `inlineMappings`. |
| `aggregateDefaultTransformations` | boolean | true | Leverages the default `ingestTransformations` for the document based on its type. This adds to `inlineTransformations`. |
| `aggregateDefaultPropertyMappers` | boolean | true | Leverages the default `ingestPropertyMappers` for the document based on its type. This adds to `inlinePropertyMappers`. |
| `replaceMapping` | boolean | false | When set to `true`, replaces the mapping, transformations, and property mappers previously saved on the document. |
| `persistMapping` | boolean | false | When set to `true`, saves `inline*` and `aggregate*` parameters. Has no effect when `dryRun` is `true`. Enables live document update by adding the `Hxai` facet to documents. |
| `onlyContent` | boolean | false | When set to `true`, only ingests non-`folderish` (content) documents. |
| `onlyAncestorsAndFolders` | boolean | false | When set to `true`, only ingests `folderish` documents (containers and folders). |

### Configuring Mappings

In the document ingestion life cycle, mapping is the stage where metadata and content of selected documents are mapped. You can configure custom mappings for specific document types. If a document type does not have a custom mapping, the default mapping configuration is used.

#### Mapping Syntax

The following values are recognized for mapping:

| Mapping Value | Description | Example |
| --- | --- | --- |
| Unprefixed properties | Properties recognized but not recommended; adds the base property mapping | `files` (maps to `files:files`) |
| Prefixed properties | Add single properties one by one | `dc:title`, `dc:description` |
| Schemas | Maps all properties in a schema (e.g., `dublincore` includes 18 properties) | `dublincore`, `common` |
| Mapping reference | Maps all properties in a referenced mapping | `@myMappingReference` |

Mappings can be used individually or combined as comma-separated values:

```
"inlineMappings": "@myMappingReference,dc:title,dublincore,files"
```

#### Inline IngestMappingDescriptors

Chain comma or space-separated mappings to build complete mappings in one line:

```
dc:title,dc:description           # Add individual properties
dublincore,common                 # Add entire schemas
dublincore,icon                   # Mix schemas and individual properties
dublincore,common,!dc:title       # Add schemas except specific properties
files:files,dublincore file:content # Spaces also work as separators
```

**Important:** Order matters. Properties are added left-to-right. Negation happens after inclusion:

```
dublincore,!dc:title              # Correct: add all dublincore except dc:title
!dc:title,dublincore              # Incorrect: removes dc:title, then adds it back
```

#### Custom Mappings

You can set a custom map as the default for a specific document type. The document type must be set as the mapping contribution's ID:

```xml
<?xml version="1.0"?>
<component name="org.nuxeo.hxai.IngestMappingServiceComponent.test.referencing" version="1.0">
  <extension target="org.nuxeo.hxai.IngestMappingServiceComponent" point="ingestMappings">
    <!-- Default for Picture typed documents -->
    <ingest id="Picture">
      <properties>dc:title,icon,relatedtext:relatedtextresources</properties>
    </ingest>
    <!-- To be referred to as @first -->
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

Mappings can reference other mappings using the `@` prefix:

```
dublincore,@bigMapping            # Reference mapping with id 'bigMapping'
dublincore,@bigMapping,!unwanted:prop  # Add mapping but exclude specific properties
```

**Note:** Mappings are deduplicated. Requesting the same property multiple times has no effect.

#### Debugging Mappings

Logs can identify errors in mapping descriptors. Enable `DEBUG` or `TRACE` level logging for `IngestMappingServiceImpl` and `SimpleIngestMapping`.

**Successful (DEBUG level) logs:**

```
DEBUG [IngestMappingServiceImpl] processing mapping descriptor: default
DEBUG [IngestMappingServiceImpl] IngestMapping: 'default' was processed successfully.
DEBUG [IngestMappingServiceImpl] processing mapping descriptor: first
DEBUG [IngestMappingServiceImpl] IngestMapping: first directly depends on: second
DEBUG [IngestMappingServiceImpl] processing mapping descriptor: second
DEBUG [IngestMappingServiceImpl] IngestMapping: second directly depends on: third
DEBUG [IngestMappingServiceImpl] processing mapping descriptor: third
DEBUG [IngestMappingServiceImpl] IngestMapping: 'third' was processed successfully.
```

**Successful (TRACE level) logs show additional detail:**

```
TRACE [SimpleIngestMapping] the 'dublincore' mapping was identified as a schema.
TRACE [SimpleIngestMapping] processing mapping: 'dublincore'
```

**Mapping cycle detection:**

If mappings contain circular references, Nuxeo will not start. The error message identifies the cycle:

```
java.lang.IllegalArgumentException: Detected cycle in IngestMapping: first->second->third->forth->second
```

The cycle chain clearly shows the problematic path. Verify your mapping contributions do not have circular dependencies.

### Configuring Custom Property Mappers

The Ingest service processes documents with metadata at the root level. Documents with nested or complex metadata must be simplified before the Remap and Transform stage. Custom property mappers simplify complex metadata.

`IngestPropertyMapper`s allow you to map properties with access to the context of the whole IngestDocument, enabling you to:
- Customize how complex properties are mapped
- Add properties that are not in the original object
- Perform logic involving multiple properties

Mappers implement `java.util.function.Consumer<PropertyMappingContext>`, allowing access to any element inside the document. This is useful for cases like `files:files`, which must be destructured into multiple `files:files/n` entries at the root of properties.

#### Mapper Package Locations

**Default package location:**

If you put your custom mappers in the default package, you do not need to specify the package:

```
// Assumed package location
org.nuxeo.hxai.client.objects.json.mappers
```

**Custom mapper locations:**

Mappers can be placed in any custom package:

```
MyMapper                                    # Points to org.nuxeo.hxai.client.objects.json.mappers.MyMapper
.MyMapper                                   # Same as above
.my.sub.package.MyOtherMapper               # Points to org.nuxeo.hxai.client.objects.json.mappers.my.sub.package.MyOtherMapper
my.complete.package.MyMapper                # Use canonical package name
```

#### Provided Property Mappers

**`ArraySplatPropertyMapper`** — Handles destructuring of arrays into individual properties (properties cannot be nested).

**`FilesPropertyMapper`** — Destructures file collections, typically used for `files:files` property.

**`ExtraPropertyMapper`** — Adds arbitrary properties to an IngestDocument. Takes positional arguments:

```
root:title ExtraPropertiesMapper ingestProperty:type:DOCTYPE dc:title:BASENAME dc:created:EPOCH dc:creator:system
^          ^                     ^                     ^              ^
target     mapper name           added key:value pair  preset value   another pair
```

The mapper matches a property (e.g., `root:title`) which may not exist but acts as a hook to trigger the mapper. Properties are added as `prefix:suffix:(PRESET|literal_value)`.

**PRESET values:**
- `BASENAME` — The document's path last segment
- `DOCTYPE` — The document type
- `EPOCH` — An instant representing the oldest possible date
- `NOW` — An instant representing the current moment

**Example from default configuration:**

```xml
<item>
  <arg value="root:title"/>
  <arg value="ExtraPropertiesMapper"/>
  <arg value="ingestProperty:type:DOCTYPE"/>
  <arg value="dc:title:/"/>
  <arg value="dc:created:EPOCH"/>
  <arg value="dc:creator:system"/>
  <arg value="dc:modified:EPOCH"/>
  <arg value="dc:lastContributor:system"/>
</item>
```

This configuration, when mapping `root:title`, calls `ExtraPropertiesMapper` to add:
- `ingestProperty:type=Root`
- `dc:title=/`
- `dc:created=<EPOCH Value>`
- `dc:creator=system`
- Additional configured key-value pairs

#### Configuring Custom Property Mappers

Custom property mappers are configured using an XML contribution:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<component name="my.component" version="1.0">
  <extension target="org.nuxeo.hxai.IngestMappingServiceComponent" point="ingestPropertyMappers">
    <ingestPropertyMappers id="myFileMappers">
      <class property="my:property">my.custom.Mapper</class>
    </ingestPropertyMappers>
  </extension>
</component>
```

**Merge behavior:** Property mappers do not merge; they replace each other.

### Configuring Remapping and Transformations

After mapping is complete, document metadata is remapped and transformed using transformation descriptors. Remapping standardizes property names, while transformation functions modify values. Transformers perform three optional operations:

1. Match a source property name pattern
2. Remap to a target property name pattern
3. Apply transformation functions in sequence

#### Remapping Operations

**Remap only (no transformation):**

```
dc:=base:                    # Remap all dublincore properties to 'base:' prefix
:title=:name                 # Remap properties ending with 'title' to end with 'name'
files:files/=ingest:binaries # Remap files:files/* to ingest:binaries/*
```

**Transform only (no remapping):**

```
==Function                   # Apply Function to all properties
a==Function                  # Apply Function to property 'a' without renaming
```

**Remap and transform:**

```
a=b=Function                 # Rename 'a' to 'b' and apply Function
:title=:name=Function        # Remap title suffix and apply Function
files:files/=ingestion:binaries=Function  # Remap and apply Function to binaries
```

#### Transformation Function Specification

**Function interface:** All functions must implement `Consumer<IngestProperty>`. They operate at the property level (unlike mappers, which have access to the whole document).

**Default function package:**

If you put custom functions in the default package, you do not need to specify the package:

```java
// Assumed package
org.nuxeo.hxai.ingest.functions
```

**Custom function locations:**

```
MyFunction                              # Points to org.nuxeo.hxai.ingest.functions.MyFunction
.MyFunction                             # Same as above
.my.sub.package.MyOtherFunction         # Points to org.nuxeo.hxai.ingest.functions.my.sub.package.MyOtherFunction
my.complete.package.MyFunction          # Use canonical package name
```

#### Provided Transformation Functions

**`AddKv`** — Adds key:value pairs to a property. Takes parameters like `key1:value1 key2:value2`.

**`_Flag`** — Test function that marks a property as transformed (for verification purposes).

**`_Concat`** — Test function that concatenates a distinguishable value to the property value (for verification purposes).

**`_Count`** — Test function that counts how many times a transformation was applied (for verification purposes).

#### Chaining Multiple Transformations

Transformations can be chained (joined by commas) to apply multiple transformations in sequence:

```
a=b=Function,a=b=OtherFunction      # Invalid: does not work as expected
                                     # After transforming to 'b', 'a' is no longer matched
a=b=Function,b==OtherFunction       # Valid: Function applies first, then OtherFunction to 'b'
a=b=Function1=Function2=Function3   # Valid: Chain functions on a single property
```

**Joining functions on a single property:**

```
a=b=Function1=Function2=Function3           # Rename 'a' to 'b', apply Function1, 2, 3 in order
a=b=Function1 arg1 arg2=Function2 arg1      # Functions with parameters
c==Function1 arg1 arg2=Function3            # Multiple chains: 'c' transformed by Function1 then Function3
```

#### Debugging Transformations

**Detecting malformed transformations:**

Malformed transformations are caught at Nuxeo startup:

```
// Missing left side
java.lang.IllegalArgumentException: Malformed Transformation: 'inline#=c=_Flag' with a missing left side.

// Left side only
java.lang.IllegalArgumentException: Malformed Transformation: 'inline#a==' with a left side only.

// Right side only
java.lang.IllegalArgumentException: Malformed Transformation: 'inline#=c=' with a right side only.
```

**Detecting excessive remappings:**

Transformations cannot map multiple source properties to a single target (causing collisions):

```
// Invalid: All 'a:' prefixed properties would override each other
XPath: 'a:' cannot be the left side of: 'c' in Transformation: 'inline#a:=c=_Flag'
'a:' is a prefix and can only be mapped to another prefix.
```

#### Remapping Combinations Glossary

The following table shows all valid and invalid remapping combinations:

| Status | Pattern | From | To |
| :---: | :-----: | :-----: | :-----: |
| No remap | `=` | star | star (no remap) |
| Invalid | `=3` | star | simple |
| Invalid | `=3:` | star | prefix |
| No remap | `1=` | simple | star (no remap) |
| Valid | `1=3` | simple | simple |
| Valid | `1=3:` | simple | prefix |
| Valid | `1=:4` | simple | suffix |
| Valid | `1=3:4` | simple | full |
| No remap | `1:=` | prefix | star (no remap) |
| Invalid | `1:=3` | prefix | simple |
| Valid | `1:=3:` | prefix | prefix |
| Invalid | `1:=:4` | prefix | suffix |
| No remap | `:2=` | suffix | star (no remap) |
| Invalid | `:2=3` | suffix | simple |
| Valid | `:2=:4` | suffix | suffix |
| No remap | `1:2=` | full | star (no remap) |
| Valid | `1:2=3` | full | simple |
| Valid | `1:2=3:` | full | prefix |
| Valid | `1:2=:4` | full | suffix |
| Valid | `1:2=3:4` | full | full |

#### Transformation Combinations Glossary

The following table shows all valid and invalid transformation combinations:

| Status | Pattern | Meaning |
| :---: | :-----: | :--- |
| No transformation | `==` | No transformation |
| Valid | `==Function` | Transform every property value |
| Valid | `left==Function` | Transform property matching left expression without remapping |
| Valid | `left=right=` | Remap left to right without transformation |
| Valid | `left=right=Function` | Remap and transform |
| Invalid | `=right=` | Only right side (invalid) |
| Invalid | `=right=Function` | Only right side (invalid) |
| Invalid | `left==` | Left side only (invalid) |

### Flattening Nested Binaries

Ingest only handles binaries at the root of the properties part. This works for simple properties like `file:content` but not for complex properties nesting binaries, like `files:files`. Several approaches can flatten binaries for Ingest:

#### Clean Method

Use custom mappers to separate complex properties (e.g., `files:files`) into multiple simple properties, omitting the containing array. Custom mapping happens before the main Mapping and Transform stages, so properties generated by custom mapping can be transformed as well.

#### Fallback Method

Post-filter the outgoing JSON payload to flatten unnoticed nested binaries. If a complex property containing binaries lacks a custom mapping, binaries are moved to the root of properties to prevent them from being silently ignored by Ingest.

#### Example

Original structure with a containing array:
```json
{
  "my:complex": [
    { "file": {} },
    { "file": {} }
  ]
}
```

With a custom mapper, the structure can become:
```json
{
  "renamed:transformed/0": { "file": {} },
  "renamed:transformed/1": { "file": {} }
}
```

With post-filtering (fallback):
```json
{
  "my:complex": [],
  "my:complex/0": { "file": {} },
  "my:complex/1": { "file": {} }
}
```

### Injecting Ingestion Parameters

Parameters must be stringified to be sent in the query as the `parameters` key. Two approaches are available:

#### Escaping Parameter JSON Manually

Write stringified JSON by hand, escaping all sensitive characters:

```bash
"{\"inlineMappings\":\"dublincore,common\",\"inlineTransformations\":\"a=b=Function,c=d=OtherFunction\",\"replaceMapping\":false,\"aggregateDefaultMappings\":false,\"aggregateDefaultTransformations\":false,\"persistMapping\":false}"
```

#### Generating Parameter JSON with jq

Use `jq` for a more maintainable approach. Create a `myParams.json` file and inject it:

```bash
$(jq -c < myParams.json | jq -R)
```

#### Sample Parameterized Queries

**Plain (with escaped JSON):**

```bash
curl -sS -u <myNuxeoCredentials> -H 'Content-Type: application/json' <myNuxeoUrl>/nuxeo/api/v1/automation/Bulk.RunAction -d \
'{"params":{
    "query":"SELECT * FROM Document WHERE ecm:ancestorId = '\''<my-root-doc-id>'\''",
    "action":"ingest",
    "parameters": "{\"inlineMappings\":\"dublincore,common\",\"inlineTransformations\":\"a=b=Function,c=d=OtherFunction\",\"replaceMapping\":false,\"aggregateDefaultMappings\":false,\"aggregateDefaultTransformations\":false,\"persistMapping\":false}"
  }
}'
```

**Externalized (using jq):**

```bash
curl -sS -u <myNuxeoCredentials> -H 'Content-Type: application/json' <myNuxeoUrl>/nuxeo/api/v1/automation/Bulk.RunAction -d \
'{"params":{
    "query":"SELECT * FROM Document WHERE ecm:ancestorId = '\''<my-root-doc-id>'\''",
    "action":"ingest",
    "parameters": '$(jq -c < myParams.json | jq -R)'
  }
}'
```

### Testing Document Ingestion

After configuring the connector, perform a test ingestion to verify the configuration works correctly. Activate the `dryRun` mode by setting the `dryRun` parameter to `true`:

```json
{
  "dryRun": true,
  "inlineMappings": "dc:contributors,dc:description",
  "inlineTransformations": "dc:title=meta:name=_Flag",
  "aggregateDefaultMappings": false,
  "aggregateDefaultTransformations": false,
  "replaceMapping": true
}
```

In dry-run mode, the connector processes documents but does not save parameters, upload binaries, or send payloads to Ingest. You can verify that mappings and transformations produce the expected results. Once dry-run results are satisfactory, you can execute actual ingestions on your repository.

## Synchronizing Groups, Users, and Members with Nucleus

The connector can synchronize Nuxeo groups, users, and members with the Nucleus system. This synchronization handles entities returned by the Nuxeo `UserManager` and uses email address to match and sync entities. Run this synchronization when users or groups are created or updated in your identity provider (IDP), Active Directory, or other user management system, as Nuxeo is not automatically notified of updates made outside Nuxeo.

To synchronize groups, users, and members:

```bash
curl -XPOST -sS -u <myNuxeoCredentials> -H 'Accept: application/json' <myNuxeoUrl>/nuxeo/site/automation/Nucleus.Sync.Users.Groups \
  -H "Content-type: application/json+nxrequest" -d "{}"
```

## Automating Document Ingestion

Document ingestion can be automated in two ways: schedule-based (preferred) or event-based (disabled by default).

### Schedule-Based Automation

Schedule-based automations are the preferred way to automate ingestion. They require read-only access to documents and execute at periodic intervals. By setting up multiple schedules, you can run multiple ingestion jobs on different repository subparts, each with its own configuration.

#### Setting Up Scheduled Ingestion

To set up scheduled ingestion:

1. Create a component with scheduling configuration:

```xml
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

2. Create event listeners to handle scheduled events:

```xml
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

3. Implement the event listener code:

```java
public class IngestListener1 implements EventListener {

    @Override
    public void handleEvent(Event event) {
        String query = "SELECT * FROM Document WHERE ecm:path = '/default-domain/workspaces/test/test'";
        BulkCommand command = new BulkCommand.Builder(IngestAction.ACTION_NAME, query,
                SYSTEM_USERNAME).param(INLINE_MAPPINGS, "files:files,file:content,dublincore,tags,foo:bar")
                                .param(INLINE_TRANSFORMATIONS, "files:files/=my:binaries")
                                .param(REPLACE_MAPPING, true)
                                .param(DRY_RUN_MODE, false)
                                .build();
        Framework.getService(BulkService.class).submit(command);
    }
}
```

4. Configure the listener to update only documents that changed during a defined time interval for your use case. Do not reprocess all documents on every schedule execution.

### Event-Based Automation: IngestUpdateListener

The `IngestUpdateListener` automatically triggers ingestion on documents when they are modified. It is enabled by default and monitors the following document events:

- `documentModified`
- `documentSecurityUpdated`
- `documentRestored`

When any of these events occur on a document with the `Hxai` facet, the `IngestUpdateListener` automatically triggers re-ingestion by using the parameters previously saved on the document.

#### Requirements for IngestUpdateListener

**Priming the root document:**

To avoid concurrency issues when using concurrency in the `IngestAction`, ensure the root document has the `Hxai` facet. This is not necessary if:

- `nuxeo.bulk.action.ingestAction.defaultConcurrency` is set to 1
- Your root document already has data in its `common` schema

If both conditions are false, prime the root document:

```bash
curl -sS -u <myNuxeoCredentials> -H "Content-type: application/json" <myNuxeoUrl>/nuxeo/api/v1/automation/Document.AddFacet -d \
'{
  "input": "doc:/",
  "params": { "facet": "Hxai" }
}'
```

**Faceting other documents:**

To enable `IngestUpdateListener` for other documents, send them for ingestion once with `persistMapping` set to `true`. This adds the `Hxai` facet to the documents. Subsequent document modifications will trigger automatic re-ingestion.

#### Disabling IngestUpdateListener

The `IngestUpdateListener` is enabled by default. You can disable it by contributing the following configuration:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<component name="org.nuxeo.hxai.events.listener.config.test" version="1.0.0">
  <require>org.nuxeo.hxai.events.listener.config</require>
  <extension target="org.nuxeo.ecm.core.event.EventServiceComponent" point="listener">
    <listener name="ingestlistener" enabled="false"/>
  </extension>
</component>
```

## Hxai Facet

The `Hxai` facet marks documents as ingested and eligible for ingestion updates. To use this feature, meet the requirements described in the IngestUpdateListener section above.

### Flagging Role

The `Hxai` facet acts as a flag to tell Nuxeo that a document's ingestion has been performed at least once and is eligible for re-ingestion when necessary. Documents with this facet can be automatically updated when modified if the `IngestUpdateListener` is enabled.

### Persistence Function: Hxai Schema

The `hxai` schema stores ingestion-related information. Its usage depends on the document type:

**For `folderish` documents (containers and folders):**

The `hxai` schema is not populated with mapping parameters. Parameters stored on `folderish` documents are unnecessary.

**For non-`folderish` documents (content):**

The `hxai` schema stores valuable ingestion information. The following `IngestAction` parameters are saved in the `hxai` schema and allow you to repeat document ingestion exactly as it was last done:

- `inlineMappings`
- `inlineTransformations`
- `inlinePropertyMappers`
- `aggregateDefaultMappings`
- `aggregateDefaultTransformations`
- `aggregateDefaultPropertyMappers`

The following `IngestAction` parameters are NOT storable:

- `dryRun`
- `onlyContent`
- `onlyAncestorsAndFolders`
- `replaceMapping`
- `persistMapping`

This design allows you to save a document's ingestion configuration and later repeat the same ingestion for updates without needing to reconfigure parameters.
