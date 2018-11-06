---
title: Graph Tab
review:
    comment: ''
    date: ''
    status: ok
labels:
    - graph
confluence:
    ajs-parent-page-id: '11534802'
    ajs-parent-page-title: Workflow screens
    ajs-space-key: Studio
    ajs-space-name: Nuxeo Online Services
    canonical: Graph+tab
    canonical_source: 'https://doc.nuxeo.com/display/Studio/Graph+tab'
    page_id: '11534818'
    shortlink: 4gGw
    shortlink_source: 'https://doc.nuxeo.com/x/4gGw'
    source_link: /display/Studio/Graph+tab
tree_item_index: 500
history:
    -
        author: Solen Guitter
        date: '2013-08-07 11:02'
        message: dded border to screensho
        version: '9'
    -
        author: Bertrand Chauvin
        date: '2013-08-06 14:27'
        message: Updated screenshot
        version: '8'
    -
        author: Solen Guitter
        date: '2013-05-22 18:37'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2013-05-22 18:37'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2013-05-22 18:34'
        message: Resized screenshot
        version: '5'
    -
        author: Alain Escaffre
        date: '2012-09-28 08:44'
        message: Migrated to Confluence 4.0
        version: '4'
    -
        author: Alain Escaffre
        date: '2012-09-28 08:44'
        message: ''
        version: '3'
    -
        author: Alain Escaffre
        date: '2012-09-28 08:01'
        message: ''
        version: '2'
    -
        author: Alain Escaffre
        date: '2012-09-28 07:58'
        message: ''
        version: '1'

---
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Graph Tab/Workflow Graph Tab
    name: workflow-graph-tab.png
    studio_modeler#screenshot#up_to_date
--}}
![Workflow Graph Tab](nx_asset://722153f8-ec36-4e2d-9a47-2c7f57317c56 ?w=500,border=true)

The Graph tab is where you define how steps of your workflow are ordered, by dropping nodes and pulling transitions between them.
 If you hover over a node, an **Edit** button will be displayed. It allows you to edit the properties of the node, in a
 [multi-tab pop-up]({{page page='node-popup'}}).

 Two kinds of nodes are available, one creates a user task, the other is automatic (the workflow engine goes over it and immediately follows the output transitions).

On the left side menu of the graph tab, you will find the items below:

*   **Resize graph editor**: It is possible that your graph does not fit in the default allocated design area. Click on **Resize graph editor** to make it larger. A **Reduce size** button will be added in a future version of Nuxeo Studio. Click on **Discard changes** to go back to the current size.
*   **Clear graph**: Beware, this button will delete all your graph after a warning.
*   **Node library**: Lists different pre-configured nodes. You can drag'n'drop  and modify them in the design area.

## Node library

### Automated Tasks

| Type  | Role |
|---|---|
| Node  | Creates an automated task ran by the workflow engine according to an input and an output automation chains.  |


### User Tasks 

| Type  | Role |
|---|---|
| Accept/Reject |  Creates a node with two transitions: accept and reject. |
| Approve  | Creates a node and an approve transition. |
| Multiple Tasks | Creates a task that has to be fulfilled by every assignee. The workflow is resumed only when all tasks created by this node are completed.|
| Simple task | Creates a task that can be fulfilled by any of the assignees.|

### Structural Nodes

| Type | Role |
|---|---|
| Fork 2 ways | Creates two transitions from one node.  |
| Fork 3 ways | Creates three transitions from one node.  |
| Merge  | Merges two transitions into one output node.  |
| Start  | Creates a starting node. Only one starting node must be inserted in the workflow.  |
| Stop  | Creates an ending node. Stops the execution of the workflow.  |
| Sub workflow  | Calls another workflow in the workflow. The main workflow is suspended while the sub workflow runs, and resumes when the sub workflow ends.  |

For more information on sub workflows, see [Sub workflow example]({{page version='' space='nxdoc' page='sub-workflow-example'}}).
