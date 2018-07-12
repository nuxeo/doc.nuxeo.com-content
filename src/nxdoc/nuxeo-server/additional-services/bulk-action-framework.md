---
title: Bulk Action Framework
review:
    comment: ''
    date: '2018-07-11'
    status: ok
labels:
    - bulk
    - bulk-component
toc: true
tree_item_index: 1500
---

The Bulk Action Framework provides a service to be able to run resilient bulk actions on a -possibly large- set of documents.

This framework introduces the notion of **action**, which is an operation to apply on a set of documents, and the notion of **bulk command**. A command is composed of multiple parameters, the most important ones being the action to execute and the NXQL query which materializes the document set. More details are available in this [link](https://github.com/nuxeo/nuxeo/tree/master/nuxeo-core/nuxeo-core-bulk#definitions).
 

## Bulk service

This service provides :

- A way to submit a command to be executed.

- A way to get the status of a submitted command.

- A way to wait for a command to be completely executed.


## Bulk automation operation

It is possible to submit a command through the [Bulk.RunAction](http://explorer.nuxeo.com/nuxeo/site/distribution/latest/viewOperation/Bulk.RunAction) automation operation.


## Contributing an action 

You need to register a couple action/stream processor:

```xml
<extension target="org.nuxeo.ecm.core.bulk" point="actions">
  <action name="myAction"/>
</extension>

<extension target="org.nuxeo.runtime.stream.service" point="streamProcessor">
  <streamProcessor name="myAction" class="org.nuxeo.ecm.core.bulk.actions.MyActionProcessor" logConfig="bulk"
      defaultConcurrency="1" defaultPartitions="1">
  </streamProcessor>
</extension>
```

It is possible to add several options to the stream processor to tune the way the documents are processed. 
Please visit [nuxeo-runtime-stream README](https://github.com/nuxeo/nuxeo/tree/master/nuxeo-runtime/nuxeo-runtime-stream#stream-processing) for more information.



