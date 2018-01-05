---
title: Escalation Service
review:
    comment: ''
    date: '2017-12-14'
    status: ok
labels:
    - lts2016-ok
    - workflow
    - grenard
    - excerpt
    - lts2017-ok
toc: true
confluence:
    ajs-parent-page-id: '12913723'
    ajs-parent-page-title: Workflow
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Escalation+Service
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Escalation+Service'
    page_id: '16091822'
    shortlink: ror1
    shortlink_source: 'https://doc.nuxeo.com/x/ror1'
    source_link: /display/NXDOC/Escalation+Service
tree_item_index: 600
history:
    -
        author: Manon Lumeau
        date: '2015-09-16 11:40'
        message: ''
        version: '24'
    -
        author: Manon Lumeau
        date: '2014-09-19 12:26'
        message: ''
        version: '23'
    -
        author: Solen Guitter
        date: '2014-04-28 10:08'
        message: Format
        version: '22'
    -
        author: Jean-Christophe Melaunay
        date: '2014-04-25 18:18'
        message: ''
        version: '21'
    -
        author: Jean-Christophe Melaunay
        date: '2014-04-25 18:15'
        message: ''
        version: '20'
    -
        author: Jean-Christophe Melaunay
        date: '2014-04-25 18:13'
        message: ''
        version: '19'
    -
        author: Jean-Christophe Melaunay
        date: '2014-04-25 10:44'
        message: ''
        version: '18'
    -
        author: Jean-Christophe Melaunay
        date: '2014-04-24 11:46'
        message: ''
        version: '17'
    -
        author: Jean-Christophe Melaunay
        date: '2014-04-24 11:45'
        message: ''
        version: '16'
    -
        author: Jean-Christophe Melaunay
        date: '2014-04-24 11:42'
        message: ''
        version: '15'
    -
        author: Jean-Christophe Melaunay
        date: '2014-04-24 11:37'
        message: ''
        version: '14'
    -
        author: Jean-Christophe Melaunay
        date: '2014-04-24 11:36'
        message: ''
        version: '13'
    -
        author: Jean-Christophe Melaunay
        date: '2014-04-24 11:35'
        message: ''
        version: '12'
    -
        author: Jean-Christophe Melaunay
        date: '2014-04-24 11:33'
        message: ''
        version: '11'
    -
        author: Solen Guitter
        date: '2014-01-09 11:18'
        message: Format
        version: '10'
    -
        author: Alain Escaffre
        date: '2014-01-08 15:49'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2013-12-10 12:11'
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
{{! excerpt}}

The Nuxeo workflow engine comes with an escalation service useful for having some automated evolution in the workflow graph.

{{! /excerpt}}

## Principle

It is possible to [set escalation rules on a given node]({{page space='studio' page='node-escalation-rules-tab'}}). An escalation rule has:

*   A name,
*   A condition (MVEL based expression),
*   An automation chain id,
*   Multiple execution properties.

The escalation service periodically queries for all suspended node (a node is suspended while the engine is waiting for all tasks originating from the node to be completed). For each suspended node, it fetches all its escalation rules. It verifies the condition and if it is true, it runs the corresponding automation chain.

## Functions

The following functions are available in the Escalation Rules Expression Editor of a node, so as to simplify rule expression:

*   `WorkflowFn.timeSinceTaskWasStarted()`: returns the time difference in milliseconds between the current time and the time the current workflow was started.
*   `WorkflowFn.timeSinceWorkflowWasStarted()`: returns the time difference in milliseconds between the current time and the time the current node was started.
*   `WorkflowFn.timeSinceDueDateIsOver()`: returns the time difference in milliseconds between the current time and the task due date.
*   `WorkflowFn.timeSinceRuleHasBeenFalse()`: returns -1 if the current rule hasn't been executed or the execution date was not set on this rule or returns the time difference in milliseconds between the current time and the last time the rule was executed ( equivalent to the rule being evaluated to 'true').
*   `WorkflowFn.ruleAlreadyExecuted()`: returns 'true' if the current rule has already been executed.

## Example of Conditions For Escalation Rules

### Remind Every Day as Soon as Task Due Date is Over

```
@{(WorkflowFn.timeSinceRuleHasBeenFalse()==-1 && WorkflowFn.timeSinceDueDateIsOver()>0) || (WorkflowFn.timeSinceRuleHasBeenFalse()>86400000)}
```

### Remind Every 60 Sec as Soon as the Task Has Been Assigned

```
@{(WorkflowFn.timeSinceRuleHasBeenFalse()==-1 && WorkflowFn.timeSinceTaskWasStarted()>60000) || (WorkflowFn.timeSinceRuleHasBeenFalse()>60000)}
```

## Rules Evaluation Frequency

Rules are evaluated by default every five minutes. You can override the related scheduler contribution if you want to change it. You may want to reduce the frequency while you are doing the configuration, but then don't forget to set it back to a reasonable value when in production!

```xml
<extension
 target="org.nuxeo.ecm.platform.scheduler.core.service.SchedulerRegistryService"
 point="schedule">
 <!-- every 10 seconds -->
 <schedule id="escalationScheduler">
 <eventId>executeEscalationRules</eventId>
 <eventCategory>escalation</eventCategory>
 <cronExpression>0/10 * * * * ?</cronExpression>
 </schedule>
</extension>
```
