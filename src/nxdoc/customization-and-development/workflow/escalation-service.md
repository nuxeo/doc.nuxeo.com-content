---
title: Escalation Service
toc: true
confluence:
    ajs-parent-page-id: '17334313'
    ajs-parent-page-title: Workflow
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Escalation+Service
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/Escalation+Service'
    page_id: '17334512'
    shortlink: 8IAIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/8IAIAQ'
    source_link: /display/NXDOC58/Escalation+Service
history:
    - 
        author: Solen Guitter
        date: '2014-01-09 11:19'
        message: ''
        version: '9'
    - 
        author: Michaël Vachette
        date: '2013-12-06 12:22'
        message: ''
        version: '8'
    - 
        author: Mariana Cedica
        date: '2013-10-31 14:24'
        message: ''
        version: '7'
    - 
        author: Solen Guitter
        date: '2013-10-28 10:29'
        message: ''
        version: '6'
    - 
        author: Solen Guitter
        date: '2013-10-28 10:29'
        message: ''
        version: '5'
    - 
        author: Solen Guitter
        date: '2013-10-28 10:28'
        message: ''
        version: '4'
    - 
        author: Alain Escaffre
        date: '2013-10-27 14:40'
        message: ''
        version: '3'
    - 
        author: Alain Escaffre
        date: '2013-10-27 14:39'
        message: ''
        version: '2'
    - 
        author: Alain Escaffre
        date: '2013-10-27 14:36'
        message: ''
        version: '1'

---
<div class="row"><div class="column medium-8">{{! excerpt}}

The Nuxeo workflow engine comes with an escalation service useful for having some automated evolution in the workflow graph.&nbsp;

{{! /excerpt}}

## Principle

It is possible to [set escalation rules on a given node]({{page space='studio' page='node-escalation-rules-tab'}}). An escalation rule has:

*   A name,
*   A condition (MVEL based expression),
*   An automation chain id,
*   Multiple execution properties.

The escalation service periodically queries for all suspended node (a node is suspended while the engine is waiting for all tasks originating from the node to be completed). For each suspended node, it fetches all its escalation rules. It verifies the condition and if it is true, it runs the corresponding automation chain.

</div><div class="column medium-4">{{#> panel heading='In this section'}}

{{/panel}}</div></div>

## Example of Conditions For Escalation Rules

### Remind Every Day as Soon as Task Due Date is Over

Given a&nbsp;`last_reminder`&nbsp;node variable of type Date, and making sure to update that&nbsp;`last_reminder`&nbsp;to the current date in the automation chain executed (by using **Workflow Context** > **Set Node Variable** | name: `last_reminder`, value `@{CurrentDate.calendar}`)::

```
@{!(NodeVariables["last_reminder"]==empty) && Context["taskDueTime"].compareTo(CurrentDate.calendar)<0&&Fn.date(NodeVariables["last_reminder"]).days(1).calendar.compareTo(CurrentDate.calendar)<0}
```

### Remind Every 2 Min 30 Sec as Soon as the Task Has Been Assigned

Given a&nbsp;`last_reminder`&nbsp;node variable of type Date, that has been set to&nbsp;`CurrentDate.calendar`&nbsp;in the input node, and making sure to update that&nbsp;`last_reminder`&nbsp;to the current date in the automation chain executed several times by the rule:

```
@{!(NodeVariables["last_reminder"]==empty) && nodeStartTime.compareTo(CurrentDate.calendar)<0&&Fn.date(NodeVariables["last_reminder"]).seconds(150).calendar.compareTo(CurrentDate.calendar)<0}
```

{{#> callout type='info' heading='In the roadmap'}}

You can see that variables definition always have the same structure:

*   How much do you add to the l`ast_reminder` (depending on the frequency at which you want the rule to be executed)
*   From where to start: task due date, nodeStartTime, ...

==> We plan to add a Fn helper for making the expression of this kind of rule easier, and to have a "last_reminder" field part of the built-in variables.

{{/callout}}

## Rules Evaluation Frequency

Rules are evaluated by default every five minutes. You can override the related scheduler contribution if you want to change it. You may want to reduce the frequency while you are doing the configuration, but then don't forget to set it back to a reasonable value when in production!

```xml
<extension
 target="org.nuxeo.ecm.platform.scheduler.core.service.SchedulerRegistryService"
 point="schedule">
 <!-- every 30 seconds -->
 <schedule id="escalationScheduler">
 <eventId>executeEscalationRules</eventId>
 <eventCategory>escalation</eventCategory>
 <cronExpression>0/30 * * * * ?</cronExpression>
 </schedule>
</extension>
```