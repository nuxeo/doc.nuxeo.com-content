---
title: How to Refresh the Task Widget on the Summary Tab
review:
    comment: ''
    date: ''
    status: ok
details:
    howto:
        excerpt: Learn how to refresh the task widget on the summary tab.
        level: Advanced
        tool: Studio
        topics: 'Workflow, Widget'
labels:
    - howto
    - widget
    - workflow
confluence:
    ajs-parent-page-id: '17334313'
    ajs-parent-page-title: Workflow
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: How+to+Refresh+the+Task+Widget+on+the+Summary+Tab
    canonical_source: >-
        https://doc.nuxeo.com/display/NXDOC58/How+to+Refresh+the+Task+Widget+on+the+Summary+Tab
    page_id: '24052982'
    shortlink: 9gRvAQ
    shortlink_source: 'https://doc.nuxeo.com/x/9gRvAQ'
    source_link: /display/NXDOC58/How+to+Refresh+the+Task+Widget+on+the+Summary+Tab
history:
    - 
        author: Solen Guitter
        date: '2015-04-24 09:06'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2015-04-24 09:03'
        message: ''
        version: '1'

---
{{! excerpt}}

If you start workflow automatically using the&nbsp;[Workflow > StartWorkflow](http://explorer.nuxeo.org/nuxeo/site/distribution/current/viewOperation/Context.StartWorkflow)&nbsp;operation and that your workflow's first node creates a task to the workflow initiator, you need to use in the input chain the&nbsp;**[User Interface > Refresh](http://explorer.nuxeo.org/nuxeo/site/distribution/current/viewOperation/Seam.Refresh)**&nbsp;operation, with the value "<span style="color: rgb(34,34,34);">`**workflowNewProcessStarted**`" for the event name.</span>

{{! /excerpt}}

&nbsp;

* * *

&nbsp;