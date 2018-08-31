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

The Graph tab is where you define how steps of your workflow are ordered, by dropping nodes and pulling transitions between them. If you let the mouse over a node, you will be displayed an **Edit** button, that allows to edit the properties of the node, in a [multi-tab pop-up]({{page page='node-popup'}}). There are two kinds of nodes: one that creates task, one that is automatic (the workflow engine goes over it and immediately follows one the output transitions).

On the left side menu of the graph tab, you will find the items below:

*   **Resize graph editor**: It happens that your graph cannot fit in the default allocated design area. Clicking on this button will make it larger. A "Reduce size" button will be added in a future version of Nuxeo Studio.
*   **Clear graph**: Beware, this button will delete all your graph after a warning.
*   **Node library**: Lists different pre-configured nodes. You can drag'n drop them in the design area.
