---
title: Nuxeo Server Cloud 2020 Release Notes
description: This page relates to the release notes of Nuxeo Server and related addons for the 11 cycle, a.k.a Cloud release 2020 cycle.
review:
   comment: ''
   date: '2020-06-30'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 10000
---

This page relates to the release notes of Nuxeo Server and related addons for 11 cycle, a.k.a Cloud release 2020 cycle. It will list the improvements and features that are successively shipped with the 11.1 release. Evolutions are grouped by components.

You can also find detailed JIRA release notes:

- [11.1 JIRA release notes](https://jira.nuxeo.com/secure/ReleaseNote.jspa?projectId=10011&version=19367)

We will also provide soon instructions for upgrading to the latest release.

## Nuxeo Server

### Core Storage

#### Allow Optimized MongoDB Ids With Shorter Size
(also available in 10.10)

We can now use 8 bytes MongoDB ids (instead of 36 bytes) to reduce database and index sizes.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28763](https://jira.nuxeo.com/browse/NXP-28763)

#### Blob Provider Improvements
(also available in 10.10)

A new blob provider implementation has been added to provide more flexibility and more options:
- making them transactional,
- adding a caching layer,
- allowing direct deletion,
- changing the digest computation for keys into something based on doc or blob info,
- passing down more information to the storage layer (as filename, mime type, username,...),
- avoid temporary files when streaming decrypted binaries (TL-318).

This new blob provider can be enabled using a property in `nuxeo.config`

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on the following JIRA tickets:
- [NXP-28276](https://jira.nuxeo.com/browse/NXP-28276)
- [NXP-28460](https://jira.nuxeo.com/browse/NXP-28460)
- [NXP-28716](https://jira.nuxeo.com/browse/NXP-28716)
- [NXP-25712](https://jira.nuxeo.com/browse/NXP-25712)

#### Better Management of Temporary Files for the Encrypted (AES) Blob Provider
(also available in 10.10)

A new implementation of the AESBinaryManager has been added to improve temporary files management.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28456](https://jira.nuxeo.com/browse/NXP-28456)

#### DefaultBlobDispatcher Supports Full Regexp-Based Match
(also available in 10.10)

Full regexp-based match has been added to `DefaultBlobDispatcher`.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28267](https://jira.nuxeo.com/browse/NXP-28267)

#### Add `ecm:path` Variable to the Default Blob Dispatcher
(also available in 10.10)

`ecm:path` variable is added to the default blob dispatcher.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28227](https://jira.nuxeo.com/browse/NXP-28227)

#### Allow Avoiding Use of the HTTP Proxy for S3 Connections if the S3 Endpoint Is Internal
(also available in 10.10)

In some situations, the S3BinaryManager needs to connect to a local S3-compatible endpoint that must not go through the global `nuxeo.http.proxy.host` defined.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28185](https://jira.nuxeo.com/browse/NXP-28185)

#### Better Management of Authentication Parameters for Google Storage
(also available in 10.10)

We can now reference a file with the JSON content rather than the JSON value itself as a framework property.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-27925](https://jira.nuxeo.com/browse/NXP-27925)

#### Configurable Digest in S3BinaryManager
(also available in 10.10)

The digest algorithm to use to compute a unique key when storing blobs in S3 can now be configured among standard algorithms listed here for Java 11.

The default value is MD5.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-27805](https://jira.nuxeo.com/browse/NXP-27805)

#### S3 Cache and Connection Parameters Configurable Through `nuxeo.conf`

Instead of editing the template defining the S3 blob provider, we can now set the S3 cache and the connection parameters in `nuxeo.conf`

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-27777](https://jira.nuxeo.com/browse/NXP-27777)

#### S3 Transfer Acceleration Support

We now allow using the accelerate mode of S3, more details here: https://docs.aws.amazon.com/AmazonS3/latest/dev/transfer-acceleration.html

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-27657](https://jira.nuxeo.com/browse/NXP-27657)

#### Configure S3 Multipart Part Size
(also available in 10.10)

It is now possible to configure the chunk size of multipart part size (from 5MB to 5GB).

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-26899](https://jira.nuxeo.com/browse/NXP-26899)

#### Document Deletion With Bulk Action Framework on DBS

We now use the Bulk Action Framework to delete massively documents. This is supported for DBS only.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-26908](https://jira.nuxeo.com/browse/NXP-26908)

#### MongoDB New Indexes

To improve performances, new indexes have been added on the metadata `rend:sourceId` and `rend:sourceVersionableId` that are used for standard queries on Nuxeo Server.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-26676](https://jira.nuxeo.com/browse/NXP-26676)

#### H2 1.4.200

The Nuxeo Platform now relies on H2 1.4.200

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28956](https://jira.nuxeo.com/browse/NXP-28956)

### Directory

#### Allow Directory Initialization to Just Add Missing Entries

It is now possible to initialize a directory by adding missing entries and keep the existing entries untouched.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-27877](https://jira.nuxeo.com/browse/NXP-27877)

### Workflow

#### Support Task Variables on Nuxeo-Dropzone

Nuxeo-dropzone has been improved to be usable on workflow tasks layouts for uploading blobs to variables.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28263](https://jira.nuxeo.com/browse/NXP-28263)

#### Task Endpoint Paginable
(also available in 10.10)

The Task endpoint is now paginable.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28008](https://jira.nuxeo.com/browse/NXP-28008)

### Nuxeo Streams

#### Kafka 2.5.0
The Nuxeo Platform now relies on Kafka 2.5.0.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-29045](https://jira.nuxeo.com/browse/NXP-29045)

#### Report Stream lag and latency from Nuxeo

Previously, the stream processing lag and latency could be monitored by using Nuxeo `stream.sh`.

Stream lag and latency are now directly delivered by Nuxeo Server.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28801](https://jira.nuxeo.com/browse/NXP-28801)

#### Expose Nuxeo Stream latency metrics to Datadog
(also available in 10.10)

In the same way, it has been done for Graphite (cf. [NXP-26248](https://jira.nuxeo.com/browse/NXP-26248)), we can now expose Nuxeo Stream lag and latency in Datadog.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28508](https://jira.nuxeo.com/browse/NXP-28508)

#### Nuxeo Stream probe in the default health check

The default Nuxeo health check that is used by the `runningstatus` REST endpoint now includes a probe to check Nuxeo Stream Processors.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28094](https://jira.nuxeo.com/browse/NXP-28094)

#### Nuxeo Stream expose latency to Prometheus

Nuxeo deployments with Nuxeo Stream/Kafka on Kubernetes/OpenShift exposes latency to Prometheus, the metrics and monitoring engine commonly bundled with Kubernetes/OpenShift.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-26416](https://jira.nuxeo.com/browse/NXP-26416)

#### Enable to register a Processor without running it

There are cases where a processor needs to be defined but not start/stop by the StreamService.
For instance, an import processor can be registered and start/stop using a REST API.
Another case is when having different processors that work together, we may want to initialize all the streams first and then control the order the processors are started.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28356](https://jira.nuxeo.com/browse/NXP-28356)

#### Recovery procedure for systematic failure in a stream processor

There is a new option to recover from systematic stream processor failure.</br>
First, add `nuxeo.stream.recovery.skipFirstFailures=1` to a single Nuxeo node, Processors will skip the first record in failure instead of terminating.
Second, once the problematic record is skipped remove the option from the `nuxeo.conf` and perform a rolling restart of other Nuxeo nodes to restore all processor threads.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-27529](https://jira.nuxeo.com/browse/NXP-27529)

#### Expose stream processor failures as metrics

A new counter metric has been added when the processing enters in termination due to an error. Also, even if the probe is disabled, it will be nice to have the stream processor probe output to list which processing is failing.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-27471](https://jira.nuxeo.com/browse/NXP-27471)

#### Stream Processor Probe in The `runningstatus`

Since 11.1, you can activate a health check probe to check the status of stream processors.
The option to activate in `nuxeo.conf` is:`nuxeo.stream.healthCheck.enabled=true`

If a stream processor fails after retries and its failover policy is to stop on error the `runningstatus` will be in error.</br>
When this happens the Nuxeo node needs to be restarted to continue the processing.</br>
Note that, by default, the health check probe is not activated.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-27164](https://jira.nuxeo.com/browse/NXP-27164)

### WorkManager

#### Trigger an action after completion of a group of Works
(also available in 10.10)

The StreamWorkManager provides the capability to trigger an action once all tasks of a group of Works are completed.
For instance, it is now possible to fire a document rendition done Event once all the renderings for a document are completed.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28182](https://jira.nuxeo.com/browse/NXP-28182)

#### New metrics for Works DLQ usage
(also available in 10.10)

Introduce a new metric nuxeo.works.dlq.count that counts the Works in failure that has been put in the dead letter queue (DLQ) stream since the instance is up.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-27673](https://jira.nuxeo.com/browse/NXP-27673)

#### Store Work in Failure in DLQ for Repair Purpose
(also available in 10.10)

After retries, Works in failure are stored in a dead letter queue (DLQ) stream named `dlq-work`.
This DLQ is activated by default on both WorkManager implementations (default and StreamWorkManager).

Works in this DLQ can be re-executed for repair purpose using an automation operation.
Note that in cluster mode when NOT using Kafka you need to run this automation operation on each Nuxeo node.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-27148](https://jira.nuxeo.com/browse/NXP-27148)

#### WorkManager Processing Disabling

You can now use `nuxeo.work.processing.disable=true` to disable WorkManager processing

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-24314](https://jira.nuxeo.com/browse/NXP-24314)

### Scheduler

#### Scheduler Services to Support Multiple Nuxeo Nodes Startup
(also available in 10.10)

The scheduler services handle the startup with multiple Nuxeo nodes.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-285585](https://jira.nuxeo.com/browse/NXP-28558)

### Audit

#### Export Audit in CSV Files
(also available in 10.10)

Audit is now exportable as a CSV file.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-27935](https://jira.nuxeo.com/browse/NXP-27935)

### Query

#### NOW Expression in NXQL
(also available in 10.10)

NOW expression is supported in the NXQL language.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-26305](https://jira.nuxeo.com/browse/NXP-26305)

### Rendition

#### Ability to Disable the Rendition Computations

Previously, the renditions were automatically and systematically computed/re-computed when adding or updating a file content.
It is now possible to configure Nuxeo Server to disable this behavior.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28743](https://jira.nuxeo.com/browse/NXP-28743)

#### Bulk Action Framework for `Picture.RecomputeViews` Operation

`Picture.RecomputeViews` operation has been re-implemented to use the Bulk Action Framework.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-26420](https://jira.nuxeo.com/browse/NXP-26420)

#### Thumbnail Recomputation with Bulk Action Framework
(also available in 10.10)

Thumbnail recomputation is now done using the Bulk Action Framework.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-27605](https://jira.nuxeo.com/browse/NXP-27605)

### Elasticsearch

#### Elasticsearch `nested` Operator
(also available in 10.10)

Nuxeo Server now supports the Elasticsearch "nested" operator.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-25489](https://jira.nuxeo.com/browse/NXP-25489)

#### Multiple Nuxeo With Embedded Elasticsearch
(also available in 10.10)

Multiple Nuxeo with embedded Elasticsearch can run on the same server.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-27922](https://jira.nuxeo.com/browse/NXP-27922)

#### Elasticsearch Reindexing Optimization When a Document Is Checked In
(also available in 10.10)

The number of versions reindexed at document check-in has been optimized.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-27663](https://jira.nuxeo.com/browse/NXP-27663)

### Bulk Service (Aka "Bulk Action Framework")

#### Bulk Service Processor Can Be Contributed by Configuration

Previously, the Bulk Service Processor (the scroller and status computations) required development to handle the dynamic parts (the action source stream) and to control the initialization.
- The Bulk Service Processor can now be created by using configuration only for:
- Register a processor
- Initialize its streams
- Mark streams as external (defined in another processor)

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28357](https://jira.nuxeo.com/browse/NXP-28357)

#### Bulk Service Handles Elasticsearch Scroller
(also available in 10.10)

Elasticsearch scroller is usable with the Bulk Service.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28086](https://jira.nuxeo.com/browse/NXP-28086)

### Monitoring

#### Improvements in Error Messages

We improved some error messages to help analysis and diagnosis.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on the following JIRA tickets:
- [NXP-28129](https://jira.nuxeo.com/browse/NXP-28129)
- [NXP-27124](https://jira.nuxeo.com/browse/NXP-27124)
- [NXP-26528](https://jira.nuxeo.com/browse/NXP-26528)
- [NXP-27175](https://jira.nuxeo.com/browse/NXP-27175)
- [NXP-22770](https://jira.nuxeo.com/browse/NXP-22770)
- [NXP-26687](https://jira.nuxeo.com/browse/NXP-26687)

#### `javax.mail` Messages in Nuxeo Logs
(also available in 10.10)

`javax.mail` messages are now redirected to Nuxeo logs.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28275](https://jira.nuxeo.com/browse/NXP-28275)

#### `nuxeoctl` Now Starts Nuxeo Platform in Strict Mode

Previously, it was possible to start a Nuxeo instance with an undeployed component. This can be risky, especially in cluster mode.

By default, nuxeoctl start is now in strict mode which prevents this to happen.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-20418](https://jira.nuxeo.com/browse/NXP-20418)

#### Datadog and Metrics Improvements

A lot of improvements have been made to improve metrics scope, visibility and usability:
- Improve Datadog metrics using tagging,
- Reduce the default number of metrics published by Graphite and Datadog,
- Report Stream lag and latency from Nuxeo,
- Expose stream processor failures as metrics,
- Refactor MetricsService to support more reporters,
- Enable to publish Datadog metrics in UDP,

It is now possible to easily build Datadog dashboards in the same way as for Grafana/Graphite.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on the following JIRA tickets:
- [NXP-28801](https://jira.nuxeo.com/browse/NXP-28801)
- [NXP-28795](https://jira.nuxeo.com/browse/NXP-28795)
- [NXP-28639](https://jira.nuxeo.com/browse/NXP-28639)
- [NXP-27471](https://jira.nuxeo.com/browse/NXP-27471)
- [NXP-28697](https://jira.nuxeo.com/browse/NXP-28697)
- [NXP-28696](https://jira.nuxeo.com/browse/NXP-28696)

#### Change Default Datadog Poll Interval to 1 Min

The option to configure the metrics poll interval for Datadog is now `metrics.datadog.pollInterval` and the default value is 60 (previously `datadog.pollinterval=10`)

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28760](https://jira.nuxeo.com/browse/NXP-28760)

### Comment Service

#### Rework Comments Storage/Architecture
(also available in 10.10)

- The comments storage has been refactored to improve several aspects:
- Permissions management
- Storage
- Versioning
- Copy
- export/import
- ...

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-27984](https://jira.nuxeo.com/browse/NXP-27984)

#### Add Parent Post Content in 'New Comment' Notification

If a comment is a reply to another comment, the parent comment is now quoted in the comment notification mail.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28255](https://jira.nuxeo.com/browse/NXP-28255)

#### Comments Indexed on Linked Document Full-Text Field

Comments are now indexed on linked document full-text field.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-26669](https://jira.nuxeo.com/browse/NXP-26669)

#### Automatically Send Notifications to the Users Who Participate in a Conversation
(also available in 10.10)

Automatic notifications are sent to users who participate on Comment conversation.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28254](https://jira.nuxeo.com/browse/NXP-28254)

### Download Service

#### Digest and Last-Modified Negotiation for Download Service
(also available in 10.10)

Digest and Last-Modified negotiation are added to the download service to manage the following request/response headers:
- Want-Digest / Digest
- If-Modified-Since / Last-Modified

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28092](https://jira.nuxeo.com/browse/NXP-28092)

#### Refactor `Downloadservice.Downloadblob` to Use Builder Pattern
(also available in 10.10)

Previously, the API DownloadService.downloadBlob had lots of different overloaded versions with different numbers of arguments.

We now use a builder pattern itself, to pass a download context object with all the required information.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28005](https://jira.nuxeo.com/browse/NXP-28005)

#### Make Download Service Deal With Head Efficiently
(also available in 10.10)

The download service responds to a HEAD request with a better efficiency.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28093](https://jira.nuxeo.com/browse/NXP-28093)

### CMIS

#### Use the Nuxeo Downloadservice Framework for Cmis Downloads
(also available in 10.10)

We now use the Nuxeo DownloadService framework for CMIS downloads, instead of the native OpenCMIS library code.
This allows us to better deal with buffering, transactions, and take into account potential CDN redirects.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-27337](https://jira.nuxeo.com/browse/NXP-27337)

### REST API

#### Facet API on `SimpleDocumentModel`
(also available in 10.10)

The facet API has been implemented on `SimpleDocumentModel`.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28597](https://jira.nuxeo.com/browse/NXP-28597)

#### Offset Support to PaginableObject

The `PaginableObject.java` now supports the ability to specify an offset instead of a page index when it comes to fetching a page provider result set.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28418](https://jira.nuxeo.com/browse/NXP-28418)

#### New Parameter to the `Document.Copy` Operation to Reset the Document Lifecycle

There is a listener linked to the copy event and which looks at a context variable to reset the lifecycle or not.

The new parameter "reset lifecycle" allows to set or not this context variable.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-27735](https://jira.nuxeo.com/browse/NXP-27735)

#### Improve ConfigurationService API

A new API on ConfigurationService has been added to handle primitive like types:
- Integer getInteger(String key) (TBC)
- int getInteger(String key, int defaultValue) (TBC)
- Long getLong(String key)
- long getLong(String key, long defaultValue)
- Boolean getBoolean(String key)
- boolean getBoolean(String key, boolean defaultValue)
- Duration getDuration(String key)
- Duration getDuration(String key, Duration defaultValue)
- String getString(String key)
- String getString(String key, String defaultValue)

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-26181](https://jira.nuxeo.com/browse/NXP-26181)

### AWS Service

#### Multiple Configurations for AWSConfigurationService
(also available in 10.10)

Multiple AWS configurations are now supported.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-26823](https://jira.nuxeo.com/browse/NXP-26823)

### CSV Export Service

#### Elasticsearch Scroll for CSV Export Bulk Action

The CSV Export now uses Elasticsearch scroll. This allows to improve resilience and ensure that an export from the UI (search result from Elasticsearch) matches the export.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28577](https://jira.nuxeo.com/browse/NXP-28577)

### Scroll Service
(also available in 10.10)

We added a new service dedicated to retrieve a long list of identifiers representing a result set.

This service allows to globalize the existing scrolling API to get a document list ids or Elasticsearch resultset.

It also allows to have other document scrollers:
- a list of ids (so we don't have to query the repository or elastic)
- a file in transient store containing a list of ids
- Or to scroll on non-documents identifier:
- audit entry ids
- user ids
- dictionary ids
- a stream

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28334](https://jira.nuxeo.com/browse/NXP-28334)

### Customisation

#### Allow Global Disabling of Schemas, Like Files
(also available in 10.10)

We can now disable an existing schema (make it so that it's ignored whenever a doctype references it, or when the list of all schemas is returned).
For instance, some use cases require that no attachments are created in the platform. With this feature, this becomes possible by simply disabling the files schema.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-27962](https://jira.nuxeo.com/browse/NXP-27962)

#### Allow Global Disabling of Facets, Like Versionable
(also available in 10.10)

A facet can be globally disabled.
For instance, some use cases require that no versions are created in the platform.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-27873](https://jira.nuxeo.com/browse/NXP-27873)

#### Allow Map and List in Nuxeo Platform List Template Parameters

It is now possible to contribute a complex structure as `templateParam`.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-27613](https://jira.nuxeo.com/browse/NXP-27613)

#### Improve OpenID Provider Descriptor to Handle User Info Request Authentication per Bearer
(also available in 10.10)

We improved OpenID provider to be able to choose between authentication though query parameters or through Authentication header.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-27446](https://jira.nuxeo.com/browse/NXP-27446)

### Packaging / Distribution / Miscellaneous

#### Tomcat 9.0.35

The Nuxeo Platform now relies on Tomcat 9.0.35.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-29093](https://jira.nuxeo.com/browse/NXP-29093)

#### Other Upgrades

Other upgrades are listed in the following JIRA ticket: [NXP-28537](https://jira.nuxeo.com/browse/NXP-28537)

#### Remove Post Commit Listeners

Post-commit listeners have been converted to asynchronous listeners.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-2691](https://jira.nuxeo.com/browse/NXP-26911)

#### Allow Event.Fire to Use Properties

It is now possible to use properties into the asynchronous events.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-26449](https://jira.nuxeo.com/browse/NXP-26449)

#### `DocumentModelJsonWriter` Exposes Schemas
(also available in 10.10)

Documents exported through JSON now have an addition schemas field (similar to facets).

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-27995](https://jira.nuxeo.com/browse/NXP-27995)

#### Clusterservice to Hold Cluster Node Info

A new service has been added to hold info about whether clustering is enabled and the cluster node id.
This replaces ad-hoc uses of the framework properties repository.clustering.enabled and repository.clustering.id and multiple different random generations of ids when there is no node id specified.
Current direct users of the properties are:
- MigrationServiceImpl
- StreamPubSubProvider
- CacheServiceImpl

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-25499](https://jira.nuxeo.com/browse/NXP-25499)

#### Reduce Response Size of the ACL Enricher
(also available in 10.10)

The User object representation is now returned to the client without its groups.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-27947](https://jira.nuxeo.com/browse/NXP-27947)

#### `ecm:isProxy` A Valid Field for Aggregates
(also available in 10.10)

The field `ecm:isProxy` is now part of the valid fields for Elasticsearch aggregates.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-26656](https://jira.nuxeo.com/browse/NXP-26656)

#### Cleanup

This release also comes with hundreds of bugs fixed and also code cleanups, making Nuxeo Server more solid than ever.

## Addons

### Web UI

For more information on Web UI latest release:
- [Web UI Release Notes]({{page version='next' space='nxdoc' page='web-ui-release-notes'}})
- [Web UI Upgrade Notes]({{page version='next' space='nxdoc' page='web-ui-upgrade-notes'}})

<!--
## Deprecation


## Farewell
-->
