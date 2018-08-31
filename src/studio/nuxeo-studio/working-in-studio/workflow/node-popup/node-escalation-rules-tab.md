---
title: Node Escalation Rules Tab
review:
    comment: ''
    date: ''
    status: ok
labels:
    - escalation
    - cron
    - node
confluence:
    ajs-parent-page-id: '11534824'
    ajs-parent-page-title: Node popup
    ajs-space-key: Studio
    ajs-space-name: Nuxeo Online Services
    canonical: Node+Escalation+Rules+Tab
    canonical_source: 'https://doc.nuxeo.com/display/Studio/Node+Escalation+Rules+Tab'
    page_id: '14257450'
    shortlink: Ko3Z
    shortlink_source: 'https://doc.nuxeo.com/x/Ko3Z'
    source_link: /display/Studio/Node+Escalation+Rules+Tab
tree_item_index: 600
history:
    -
        author: Alain Escaffre
        date: '2014-03-31 21:58'
        message: ''
        version: '16'
    -
        author: Solen Guitter
        date: '2013-10-28 10:25'
        message: ''
        version: '15'
    -
        author: Alain Escaffre
        date: '2013-10-27 14:42'
        message: ''
        version: '14'
    -
        author: Alain Escaffre
        date: '2013-10-27 14:38'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2013-10-07 11:40'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2013-10-07 11:40'
        message: ''
        version: '11'
    -
        author: Alain Escaffre
        date: '2013-10-06 16:25'
        message: ''
        version: '10'
    -
        author: Alain Escaffre
        date: '2013-10-06 15:32'
        message: ''
        version: '9'
    -
        author: Alain Escaffre
        date: '2013-10-06 15:31'
        message: ''
        version: '8'
    -
        author: Alain Escaffre
        date: '2013-10-05 20:44'
        message: ''
        version: '7'
    -
        author: Alain Escaffre
        date: '2013-10-05 14:52'
        message: ''
        version: '6'
    -
        author: Alain Escaffre
        date: '2013-10-05 14:51'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2013-08-07 10:53'
        message: Fixed formatting and typos
        version: '4'
    -
        author: Bertrand Chauvin
        date: '2013-08-06 15:15'
        message: ''
        version: '3'
    -
        author: Bertrand Chauvin
        date: '2013-08-06 15:13'
        message: ''
        version: '2'
    -
        author: Bertrand Chauvin
        date: '2013-08-06 15:13'
        message: ''
        version: '1'

---
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Node Escalation Rules Tab/Workflow Escalation Tab
    name: workflow-escalation-tab.png
    studio_modeler#popup#up_to_date
--}}
![Workflow Escalation Tab](nx_asset://986f1115-742d-4326-b735-4384b5018a32 ?w=500,border=true)

Escalation rules allow to execute an [automation chain]({{page space='nxdoc' page='content-automation-concepts'}}), depending on a condition. A scheduler checks every five minutes the condition and executes the chain if the condition is evaluated to true. Please read the escalation service page for [more information and examples of rules]({{page space='nxdoc' page='escalation-service'}}).

{{#> callout type='note' heading='Escalation rules and node types'}}
Please note that although this tab appears on every node, escalation rules only apply to nodes awaiting for a user action to be executed (corresponding to the suspended lifecycle state).
{{/callout}}

Multiple escalation rules can be added using the **Add escalation rule** button.

*   **Id**: The unique id of the escalation rule.
*   **Condition**: An [MVEL expression]({{page space='nxdoc' page='use-of-mvel-in-automation-chains'}}) to state when the escalation rule should be run.
*   **Chain**: The automation chain to be executed. You may create a new chain or edit an existing one using the **Create** and **Edit** buttons.
*   **Multiple execution**: The automation chain is only executed once by default. If you check this box, the automation chain will be run every time Nuxeo evaluates the condition to true.
