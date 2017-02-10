---
title: Web UI Workflow Tasks
review:
    comment: ''
    date: 2017-01-16S
    status: ok
toc: true
labels:
    - lts2016-ok
    - nuxeo-web-ui
    - extension
    - workflow
    - task
tree_item_index: 400

---
## Workflow Tasks

Each workflow task has its own form defined by a dedicated element. This form is excluded from the [vulcanization process]({{page version='' space='nxdoc' page='web-ui-deployment'}}) and is therefore dynamically loaded.

In the `$NUXEO_SERVER/nxserver/nuxeo.war/ui/` directory, you can see:

```
└── workflow
    ├── nuxeo-document-task.html
    ├── nuxeo-document-task-review-result.html
    ├── paralleldocumentreview
    │   ├── nuxeo-task2169-layout.html
    │   ├── nuxeo-task2556-layout.html
    │   └── nuxeo-task328d-layout.html
    └── serialdocumentreview
        ├── nuxeo-task38e-layout.html
        ├── nuxeo-task542-layout.html
        └── nuxeo-task6d8-layout.html
```

By convention, a `$NUXEO_SERVER/nxserver/nuxeo.war/ui/workflow/{worfklowName}/nuxeo-{taskId}-layout.html` file defines the form layout of the task with task ID `{taskId}` for the workflow `{worfklowName}`.
