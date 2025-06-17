---
title: LTS 2023.30 / LTS 2023-HF30
description: Discover what's new in LTS 2023.30 / LTS 2023-HF30
review:
   comment: ''
   date: '2025-05-07'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 0
---

{{! multiexcerpt name='nuxeo-server-updates-2023-30'}}
# What's New in LTS 2023.30 / LTS 2023-HF30

## Create a Cloudwatch Reporter to Expose Scale Metric

Scale metric can be exposed in CloudWatch to ease AutoScale group configuration

Nuxeo is now able to report a custom AWS CloudWatch metric based on the [Nuxeo Scale metric](https://doc.nuxeo.com/nxdoc/2021/metrics/#nuxeo-scaling-metrics).

This metric is intend to be used by an EC2 auto scaling group to dynamically scale worker nodes depending on the asynchronous load.

To enable the metric reporter, in addition to the `nuxeo-amazon-s3` package, you need to set the following option in `nuxeo.conf`:

```
metrics.cloudwatch.scale.enabled=true
```

This will publish 2 metrics that can be used in different [dynamic auto-scaling type](https://urldefense.com/v3/__https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scale-based-on-demand.html__;)s:

- `Nuxeo/Stream` `StepScale`: This is the number of worker nodes to add or remove from the current cluster, it is suited for the Step Scaling policy. 
  You have to define 2 alarms on this metric, a “scale out” alarm: when the value >=1 and a “scale in” alarm when the value <-1. 
  In your EC2 auto scaling group, create 2 dynamic scaling policies:
  -  one based on the “scale out” alarm:
    - Add 1 capacity unit when 1 <= StepScale < 1.2
    - Add 2 capacity units when 1.2 <= StepScale < 2.2
    - Add 3 capacity units when 2.2 <= StepScale < 3.2
    - Add 4 capacity units when 3.2 <= StepScale < 4.2
    - … up to your max capacity
  - another based on the “scale in” alarm
    - Remove 1 capacity unit when -1 <= StepScale < -2
    - Remove 2 capacity unit when -2 <= StepScale < -3
    - Remove 1 capacity unit when -3 <= StepScale < -3
    - Remove 1 capacity unit when -4 <= StepScale < -5
    - … up to your max capacity
- `Nuxeo/Stream` `TargetScale`: This metrics simulate a CPU like utilization with a target of 50%. Just use a Target Tracking scaling policy with a target of 50.

It’s possible to publish only one metric using either `metrics.cloudwatch.scale.target.enabled=false` or `metrics.cloudwatch.scale.scale.enabled=false`

## Add Bulk Management Endpoint to Abort a Command

There is now a management endpoint to abort a bulk command:

```
DELETE /api/v1/management/bulk/<BULK_COMMAND_ID>
```

## Add New Property to 'quartz.properties.nxftl' and Make 2 Properties Configurable via 'nuxeo.conf'

New nuxeo.conf properties are available to configure quartz scheduler on mongodb

You can now configure the following quartz properties when running on MongoDB:

- `org.quartz.jobStore.mongoOptionWriteConcernTimeoutMillis` (defaults to `5000`)
- `org.quartz.jobStore.mongoOptionWriteConcernW` (defaults  to `Majority`)

## Rollback Changes on a Task When Completing It With an Incorrect Action

Transaction is rolled back when a task completion fails within a wokflow execution.

## Clean Up sequentialScroll Usage When Useless

Remove unnecessary sequentialScroll flag since this "garbageCollectOrphanBlobs" bulk command is always run in exclusive mode.

## Support RTL Languages

Arabic and Hebrew locales are enabled and labels displayed right-to-left in the login page.

## Make It Easier to Subclass KeycloakAuthenticationPlugin

The KeycloakAuthenticationPlugin can be subclassed more easily.

## Allow the Test Framework to Declare Several JUnit Rules of Same Type

Allow the Nuxeo Test Framework to declare several JUnit rules of same type

You can now declare several JUnit rules of the same type in your tests, such as:

```java
public class ITOAuth2Test {

    @Rule
    public final HttpClientTestRule unauthenticatedClient = HttpClientTestRule.builder().build();
    
    @Rule
    public final HttpClientTestRule testUserClient = HttpClientTestRule.builder()
                                                                       .credentials(TEST_USERNAME, TEST_PASSWORD)
                                                                       .build();
                                                                       
   ...
}
```


{{! /multiexcerpt}}
