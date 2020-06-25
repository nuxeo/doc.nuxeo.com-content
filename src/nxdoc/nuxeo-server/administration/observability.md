---
title: Monitoring and Observability
review:
    date: '2020-06-10'
    status: ok
labels:
    - observability
    - monitoring
    - status
    - logs
    - metrics
    - tracing
    - profiling
tree_item_index: 300
history:
---

**Monitoring** is about instrumenting code to collect data that enables to trigger alerts when something goes wrong.
This can be done using an alert system on top of the metrics dashboard and centralized logs.
It enables to react to known problems on a known system.

On the other hand **Observability** helps developers and SRE teams to understand the state of a deployed application.
This is particularly important on complex system subjects to change (scaling up or down, frequent deployment, different type of load ...).
Being able to react to unknown problems requires more information than metrics and logs,
the system needs to expose its health and to describe how requests make their way through all the services, i.e. tracing capabilities.

Dive into the subpages to understand how Nuxeo deals with all the topics involved in Monitoring and Observability:

- [Health Check]({{page page='health-check'}})
- [Logs]({{page page='logs'}})
- [Metrics]({{page page='metrics'}})
- [Tracing]({{page page='tracing'}})
- [Profiling]({{page page='Profiling'}})
