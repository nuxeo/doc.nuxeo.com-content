---
title: LTS 2025.2 / LTS 2025-HF02
description: Discover what's new in LTS 2025.2 / LTS 2025-HF02
review:
   comment: ''
   date: '2025-05-07'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 0
---

{{! multiexcerpt name='nuxeo-server-updates-2025-2'}}
# What's New in LTS 2025.2 / LTS 2025-HF02

## Create a Cloudwatch Reporter to Expose Scale Metric

The scale metric can be exposed in CloudWatch to ease AutoScale group configuration,
[learn how to configure autoscaling for Nuxeo worker nodes using AWS EC2 Auto Scaling Groups based on Nuxeo cluster metrics](({{page page='how-to-autoscale'}})).

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

## Support RTL Languages

Arabic and Hebrew locales are enabled and labels displayed right-to-left in the login page.

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

## UnrestrictedSessionRunner and LockHelper Must Rollback Transaction on Failure

Transaction is marked as Rollback when an exception is thrown within an UnrestrictedSessionRunner or LockHelper


{{! /multiexcerpt}}
