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

The Bulk Action Framework provides a service to be able to run resilient bulk actions on a _possibly large_ set of documents.

This framework introduces the notion of **action**, which is an operation to apply on a set of documents, and the notion of **bulk command**. A command is composed of multiple parameters, the most important ones being the action to execute and the NXQL query which materializes the document set. More details are available in [GitHub](https://github.com/nuxeo/nuxeo/tree/master/nuxeo-core/nuxeo-core-bulk#definitions).

## Bulk Service

This service provides ways to:

- Submit a command to be executed.
- Get the status of a submitted command.
- Wait for a command to be completely executed.
- Wait for all running commands to be completely executed (for tests).

The following is an example of use of bulk service:

{{{multiexcerpt 'baf-set-properties-action-java-example' page='bulk-actions-directory'}}}

## Bulk Automation Operation

It is possible to submit a command through the [Bulk.RunAction](http://explorer.nuxeo.com/nuxeo/site/distribution/latest/viewOperation/Bulk.RunAction) automation operation.

{{#> callout type='info' heading='Info'}}
This is a temporary operation, it will be removed for LTS 2018.
{{/callout}}

The following is an example of use of operation:

{{{multiexcerpt 'baf-set-properties-action-operation-example' page='bulk-actions-directory'}}}

## Contributing an Action

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
