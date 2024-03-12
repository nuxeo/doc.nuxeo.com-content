---
title: LTS 2021.50 / LTS 2021-HF50
description: Discover what's new in LTS 2021.50 / LTS 2021-HF50
review:
   comment: ''
   date: '2024-02-27'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 0
---

{{! multiexcerpt name='nuxeo-server-updates-2021-50'}}
# What's New in LTS 2021.50 / LTS 2021-HF50

## Increase garbageCollectOrphanBlobs Action Bucket Size


Tune blob full GC to improve S3 scroll throughput

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32347](https://jira.nuxeo.com/browse/NXP-32347)

## Add Query Limit Parameter to Full GC Management Rest API Endpoint


You can now limit the number of blobs to be garbage collected on the Full GC Rest API

Add the **queryLimit=10000** parameter to the Rest API call to invoke the Full GC on the first 10000 blobs only:
```Java
curl -X DELETE -u Administrator:Administrator http://localhost:8080/nuxeo/api/v1/management/blobs/orphaned?dryRun=true&queryLimit=10000
```


<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32346](https://jira.nuxeo.com/browse/NXP-32346)

## Full Blob GC in dryRun Should Trace Samples of Blobs to Remove


A new "nuxeo.bulk.action.garbageCollectOrphanBlobs.sample.modulo" property to trace samples of blobs to remove

While running a Full Blob GC in dryRun mode, with the following property:
```Java
nuxeo.bulk.action.garbageCollectOrphanBlobs.sample.modulo=1000
```
every 1000th blob deletion will be logged at WARN level with such message:
```Java
dryRun sample: GC would have deleted blob: b967e77cce9e0582af118bfb467fbab9 of size 12 bytes.
```

You can assert the blob can effectively be deleted in MongoDB with such a query:
```Java
db.default.count({ecm:blobKeys: b967e77cce9e0582af118bfb467fbab9})
```
should return 0.
Assuming, the blob was referenced by the `file:content` document property, such a MongoDB query
```Java
db.default.count({content.data: b967e77cce9e0582af118bfb467fbab9})
```
should return 0.

Assuming the the `file:content` is used as default document content, if you want to assert that the `ecm:blobKeys` migration went through without mistake, the MongoDB query:
```Java
db.default.count({ecm:blobKeys: {: false}, content.data: {: true}})
```
should return 0.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32338](https://jira.nuxeo.com/browse/NXP-32338)

## Avoid Publishing Empty Timer Metrics to Datadog


You can reduce the number of Datadog metrics by discarding empty timers

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32329](https://jira.nuxeo.com/browse/NXP-32329)

## Use Better Default for Bulk bucketSize to Reduce Record Processing Duration


Tune bulk actions to avoid long record processing

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32317](https://jira.nuxeo.com/browse/NXP-32317)

## Fix Garbage Collection When Default Blob Provider Blob Keys Can Be Both Un/Prefixed


Document Blob Garbage Collection always check for prefixed and unprefixed default provider blob keys.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32308](https://jira.nuxeo.com/browse/NXP-32308)

## Update Aws Java SDK to 1.12.650


AWS java sdk upgraded to v1.12.650, ion-java-1.0.2.jar is no longer installed by amazon-s3-online-storage marketplace

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32306](https://jira.nuxeo.com/browse/NXP-32306)

## FileNotFoundException in Command Line Conversions


Tmp files are now deleted when appropriate. Tmp containers will remain empty.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32303](https://jira.nuxeo.com/browse/NXP-32303)

## Provide Different Levels of Metrics Exposition


You can select a minimal filter to reduce the number of metrics

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32297](https://jira.nuxeo.com/browse/NXP-32297)

## Fix Direct Download With Azure Blob Provider and S3 With subDirsDepth


Azure Direct Download links now works as well as the S3 one with subDirsDepth

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32247](https://jira.nuxeo.com/browse/NXP-32247)

## Handle Exceptions in AbstractSession#removeChildren


When a child document can not be removed, the reason is now log-warned.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32221](https://jira.nuxeo.com/browse/NXP-32221)

## Throw an Error if a String Is Used to Query a Long/Integer Field


The "nuxeo.primitive.type.strict.validation" nuxeo.conf property allows to throw an error when decoding a string input as a number (integer, long, float, double).

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32214](https://jira.nuxeo.com/browse/NXP-32214)

## Avoid Retries on Scroll That Has Already Downstream Records


Scrolls with downstream records are not retried anymore.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32166](https://jira.nuxeo.com/browse/NXP-32166)

## Avoid NPE on ACL Without Name


Nuxeo doesn't throw NPE on ACL without name anymore.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32094](https://jira.nuxeo.com/browse/NXP-32094)


# Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/secure/ReleaseNote.jspa?projectId=10011&version=22715) is available in our bug tracking tool.

{{! /multiexcerpt}}
