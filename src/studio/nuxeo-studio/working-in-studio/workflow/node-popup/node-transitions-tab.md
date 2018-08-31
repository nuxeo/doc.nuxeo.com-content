---
title: Node Transitions Tab
review:
    comment: ''
    date: ''
    status: ok
labels:
    - node
confluence:
    ajs-parent-page-id: '11534824'
    ajs-parent-page-title: Node popup
    ajs-space-key: Studio
    ajs-space-name: Nuxeo Online Services
    canonical: Node+Transitions+Tab
    canonical_source: 'https://doc.nuxeo.com/display/Studio/Node+Transitions+Tab'
    page_id: '11534839'
    shortlink: 9wGw
    shortlink_source: 'https://doc.nuxeo.com/x/9wGw'
    source_link: /display/Studio/Node+Transitions+Tab
tree_item_index: 500
history:
    -
        author: Solen Guitter
        date: '2013-08-07 10:55'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2013-08-07 10:55'
        message: Added border to screenshot
        version: '9'
    -
        author: Bertrand Chauvin
        date: '2013-08-06 14:35'
        message: Updated screenshot
        version: '8'
    -
        author: Solen Guitter
        date: '2013-05-23 10:11'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2013-05-23 10:11'
        message: ''
        version: '6'
    -
        author: Alain Escaffre
        date: '2013-01-21 00:26'
        message: ''
        version: '5'
    -
        author: Alain Escaffre
        date: '2012-09-29 16:05'
        message: ''
        version: '4'
    -
        author: Alain Escaffre
        date: '2012-09-28 10:18'
        message: Migrated to Confluence 4.0
        version: '3'
    -
        author: Alain Escaffre
        date: '2012-09-28 10:18'
        message: ''
        version: '2'
    -
        author: Alain Escaffre
        date: '2012-09-28 10:16'
        message: ''
        version: '1'

---
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Node Transition Tab /Node Transition Tab
    name: Node Transition Tab.png
    studio_modeler#popup#up_to_date
--}}
![Node Transition Tab](nx_asset://4f937076-ee59-4ca1-94f1-59e9d576a634 ?w=500,border=true)

**Exclusive Node**: If checked, transitions can be ordered and only the first transition for which conditions are true will be followed. If not checked and if several transitions are true, then they will all be followed corresponding to a fork in the workflow. (available from 5.7.2)

** Add a transition:**

When designing the graph, you cannot pull freely arrows from the output of a node to the next one. You first need to declare the transition in this tab. Once you did it, you will see an endpoint on the graph with the name of the transition, from which you will be able to pull the arrow.
When adding a transition, you need to specify:

*   **Name**: The name is only displayed in the graph, and used by the engine. You won't have to explicitly use this value later.
*   **Condition**: This is the condition the workflow engine evaluates so as to know where to go after an node is executed. You have access to all [the workflow context variables]({{page space='nxdoc' page='variables-available-in-the-automation-context'}}). If you don't set any condition, it will always be "true". The workflow engine supports having several conditions evaluated to true, in that case, you will have a "fork" on your workflow path.
*   **Chain**: The chain will be executed when the workflow engine goes into this transition. In the context of this chain, you will have access to the Node Variables of the node on which it is declared. For instance, you would like to log in the audit that it was rejected, validated, or requested for update, you could add chains that use the Log Event In Audit  operation and set a different value on each chain. The list of documents bound to the workflow instance will be the input of each chain. If there is only one document, it will still be a list, with one element.

{{#> callout type='info' heading='Automation Chains in Workflows'}}
When using automation chains in the context of a workflow, some things are important to remember. For more information read the [related documentation page]({{page page='node-general-tab'}}#automation-chains-in-workflows).
{{/callout}}
