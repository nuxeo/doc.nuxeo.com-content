---
title: Scheduling Periodic Events
review:
    comment: ''
    date: '2018-05-21'
    status: ok
labels:
    - lts2016-ok
    - cron
    - event
    - scheduler
    - core-component
    - fguillaume
    - excerpt
    - lts2017-ok
toc: true
confluence:
    ajs-parent-page-id: '950283'
    ajs-parent-page-title: Events and Listeners
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Scheduling+Periodic+Events
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Scheduling+Periodic+Events'
    page_id: '4688820'
    shortlink: tItH
    shortlink_source: 'https://doc.nuxeo.com/x/tItH'
    source_link: /display/NXDOC/Scheduling+Periodic+Events
tree_item_index: 200
history:
    -
        author: Vladimir Pasquier
        date: '2015-09-22 03:24'
        message: dding warning info related to Automation usage for Schedule
        version: '17'
    -
        author: Solen Guitter
        date: '2015-08-31 14:04'
        message: Update table of contents look
        version: '16'
    -
        author: Solen Guitter
        date: '2014-08-25 10:28'
        message: Remove 5.4 reference
        version: '15'
    -
        author: Solen Guitter
        date: '2013-09-04 16:50'
        message: Added link to the explorer
        version: '14'
    -
        author: Solen Guitter
        date: '2013-09-04 16:50'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2013-08-26 14:44'
        message: ''
        version: '12'
    -
        author: Julien Carsique
        date: '2013-08-09 12:47'
        message: ''
        version: '11'
    -
        author: Julien Carsique
        date: '2013-08-08 16:39'
        message: ''
        version: '10'
    -
        author: Florent Guillaume
        date: '2013-08-08 15:20'
        message: ''
        version: '9'
    -
        author: Thibaud Arguillere
        date: '2013-08-08 03:31'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2013-02-25 11:00'
        message: Added TOC and a note about component name change
        version: '7'
    -
        author: Damien Metzler
        date: '2013-02-24 11:02'
        message: ''
        version: '6'
    -
        author: Florent Guillaume
        date: '2011-04-29 12:53'
        message: Migrated to Confluence 4.0
        version: '5'
    -
        author: Florent Guillaume
        date: '2011-04-29 12:53'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2011-03-04 09:52'
        message: ''
        version: '3'
    -
        author: Solen Guitter
        date: '2011-03-04 09:51'
        message: ''
        version: '2'
    -
        author: Florent Guillaume
        date: '2010-12-24 15:44'
        message: ''
        version: '1'

---
{{! excerpt}}

The [Scheduler Service](http://explorer.nuxeo.org/nuxeo/site/distribution/current/viewService/org.nuxeo.ecm.core.scheduler.SchedulerService) is a Nuxeo Platform service to schedule events at periodic times. This is the best way in Nuxeo Platform to execute things every night, every hour, every five minutes, or at whatever granularity you require.

{{! /excerpt}}

## Scheduler Contribution

To schedule an event, you contribute a `<schedule>` to the [schedule](http://explorer.nuxeo.com/nuxeo/site/distribution/current/viewExtensionPoint/org.nuxeo.ecm.core.scheduler.SchedulerService--schedule) extension point of the [SchedulerService](http://explorer.nuxeo.com/nuxeo/site/distribution/current/viewComponent/org.nuxeo.ecm.core.scheduler.SchedulerService) component.

A schedule is defined by:

*   **id**: an identifier.
*   **username**: the user under which the event should be executed.
*   **event**: the identifier of the event to execute.
*   **eventCategory**: the event category to use.
*   **cronExpression**: an expression to specify the schedule.

The **id** is used for informational purposes and programmatic unregistration.

If the **username** is missing, the event is executed as a system user, otherwise as that user. No password is needed: the login is done internally.

The **event** specifies the event to execute. See [the section about Events and Listeners]({{page page='events-and-listeners'}}) for more.

The **eventCategory** is also used to specify the event, but usually it can be skipped.

The **cronExpression** is described in the following section.

Here is an example contribution:

```xml
<extension target="org.nuxeo.ecm.core.scheduler.SchedulerService" point="schedule">
  <schedule id="monthly_stuff">
    <eventId>doStuff</eventId>
    <eventCategory>default</eventCategory>
    <!-- Every first of the month at 3am -->
    <cronExpression>0 0 3 1 * ?</cronExpression>
  </schedule>
</extension>
```

## Cron Expression

A Scheduler cron expression is similar to a [Unix cron expression](http://en.wikipedia.org/wiki/Cron), except that it has an additional _seconds_ field (that isn't needed in Unix which doesn't need this kind of precision).

The expression is a sequence of 6 or 7 fields. Each field can hold a number or a wildcard, or in complex cases a sequence of numbers or an additional increment specification. The fields and their allowed values are:

| seconds | minutes | hours | day of month | month | day of week | year |
| --- | --- | --- | --- | --- | --- | --- |
| 0-59 | 0-59 | 0-23 | 1-31 | 1-12 | 1-7 or SUN-SAT | optional |

A star (`*`) can be used to mean "all values". A question mark (`?`) can be used to mean "no specific value" and is allowed for one (but not both) of the **day of month** and **day of week** fields.

Note that in the **day of week**, 1 stands for Sunday, 2 for Monday, 3 for Tuesday, etc. For clarity it's best to use SUN, MON, TUE, etc.

A range of values can be specified using a dash, for instance `1-6` for the months field or `MON-WED` for the day of week field.

Several values can be specified by separating them with commas, for instance `0,15,30,45` for the minutes field.

Repetitions can be specified using a slash followed by an increment, for instance `0/15` means start at 0 and repeat every 15\. This example means the same as the one above.

There's actually more but rarely used functionality; the Scheduler's full cron expression syntax is described in detail in the [Quartz CronExpression Javadoc](http://www.quartz-scheduler.org/api/2.2.1/org/quartz/CronExpression.html) and in [the CronTrigger Tutorial](http://www.quartz-scheduler.org/documentation/quartz-2.x/tutorials/crontrigger.html).

### Cron Expression Examples

Every first of the month at 3:15am:

```
0 15 3 1 * ?
```

At 3:15am every day:

```
0 15 3 * * ?
```

Every minute starting at 2pm and ending at 2:15pm, every day:

```
0 0-15 14 * * ?
```

At 3:15am every Monday, Tuesday, Wednesday, Thursday and Friday:

```
0 15 3 ? * MON-FRI
```

At 3:15a, every 5 days every month, starting on the first day of the month:

```
0 15 3 1/5 * ?
```

## Scheduler and Events

In order to run the scheduler, you need to register a new event into the **Core Event Registry**. Navigate to **Settings** > **Registries** > **Core Events** and add the event you've created in the `<eventId>` tag.

```
{
  "events": {
    "doStuff": "My scheduler event"
  }
}
```

Finally, create a new event handler from **Configuration** > **Automation** > **Event Handlers** and activate the event you've just created:

![]({{file name='event-handler-scheduler.png'}} ?w=650,border=true)

## Automation

When using the Scheduler Service to trigger [Automation Chains]({{page page='content-automation-concepts'}}) through [Event Listener]({{page page='events-and-listeners'}}) and [Event Handler]({{page space='studio' page='event-handlers'}}), the Core Session cannot be retrieved and cannot be set within the Operation Context _(Core Session is not found)_.

If the need is to execute operations needing an operation context session, the first operation of the chain should be [LoginAs Operation](http://explorer.nuxeo.com/nuxeo/site/distribution/current/viewOperation/Auth.LoginAs). It will create a new authenticated session and set the Automation context session accordingly.

{{#> callout type='info' }}
Check that the field **Current document is** is set to **Any** (default value is Regular document)
{{/callout}}

## Clustering

Note that when Nuxeo is used in cluster mode, and a proper [cluster-aware Quartz configuration]({{page page='nuxeo-clustering-configuration'}}#quartz-scheduler-cluster-configuration) is done, then a given schedule is triggered only on one of the nodes of the cluster, not on all nodes.
