---
title: Workflow Naming Conventions
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
    canonical: Workflow+Naming+Conventions
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Workflow+Naming+Conventions'
    page_id: '16091806'
    shortlink: nor1
    shortlink_source: 'https://doc.nuxeo.com/x/nor1'
    source_link: /display/NXDOC/Workflow+Naming+Conventions
tree_item_index: 1100
history:
    -
        author: Solen Guitter
        date: '2015-08-31 14:00'
        message: pdate table of contents loo
        version: '15'
    -
        author: Mariana Cedica
        date: '2013-10-31 15:34'
        message: ''
        version: '14'
    -
        author: Mariana Cedica
        date: '2013-10-31 15:33'
        message: ''
        version: '13'
    -
        author: Mariana Cedica
        date: '2013-10-31 15:31'
        message: ''
        version: '12'
    -
        author: Mariana Cedica
        date: '2013-10-31 15:30'
        message: ''
        version: '11'
    -
        author: Mariana Cedica
        date: '2013-10-31 15:28'
        message: ''
        version: '10'
    -
        author: Mariana Cedica
        date: '2013-10-31 15:25'
        message: ''
        version: '9'
    -
        author: Mariana Cedica
        date: '2013-10-31 15:21'
        message: ''
        version: '8'
    -
        author: Mariana Cedica
        date: '2013-10-31 15:15'
        message: ''
        version: '7'
    -
        author: Alain Escaffre
        date: '2013-10-27 12:44'
        message: ''
        version: '6'
    -
        author: Alain Escaffre
        date: '2013-10-27 12:43'
        message: ''
        version: '5'
    -
        author: Alain Escaffre
        date: '2013-10-27 12:37'
        message: ''
        version: '4'
    -
        author: Alain Escaffre
        date: '2013-10-27 00:24'
        message: ''
        version: '3'
    -
        author: Alain Escaffre
        date: '2013-10-27 00:23'
        message: ''
        version: '2'
    -
        author: Alain Escaffre
        date: '2013-10-27 00:21'
        message: ''
        version: '1'

---
{{! excerpt}}

We provide in this page a few rules for facilitating maintenance of your workflow models.

{{! /excerpt}}

## Graph object names

*   The workflow name is the workflow definition name as it was configured in Studio. Only alphanumeric characters, `'_'` and `'-'` are allowed. Also follow this rule when building workflows without Studio. Example: `Purchase Order = por`
*   Start transition technical name and nodes not-translated labels with this prefix. Main reason is that the transition name and node labels are directly used for translations. Buttons id doesn't need to be prefixed. Buttons label translation key should be `_workflow_prefix.node_name.button_id_`
*   Use `_node_name_.directive` for the content of the directive ex: `prl_choose_particiants.directive`. This improves maintainability of the translation as you better now what it matches.
*   In translations, use verbs for tasks (ex: "Choose Participants"), verbs for buttons (ex: "Reject") and nouns for transitions (ex: "Validation"). This will greatly improve readability of your graph, and facilitate the flow.

## Automation chains

Consider having two kinds of automaton chains.

*   Automation chains that are "entry point" automation chains, bound to input, output, transition or escalation. Name those with the following convention:
    *   input chain: `project_prefix-workflow_prefix-node_name-input`
    *   output chain: `project_prefix-workflow_prefix-node_name-output`
    *   transition chain: `project_prefix-workflow_prefix-node_name-transition_name`
    *   escalation rule chain: `project_prefix-workflow_prefix-node_name-escalation_rule_name`
*   Automations chains that are target to do one thing: they are focused on an objective and do nothing else. Name those with the following convention
    *   `project_prefix-workflow_prefix-doThis` (You can even remove the workflow prefix if you think of using it in many workflows).

Usually you will reference the second kind of automation chains in the first one. That way, you will very easily add new features/ small implementation details to each node whenever you want, without having to refactor everything each time. (Note that in the future, we will want to be able to contribute several input, output, etc. chains to avoid the first kind of operations chains.)

## <span style="color: rgb(0,0,0);">Workflow and versioning
</span>

{{#> callout type='info' }}

A workflow instance is created by copy form the workflow model when you start a new workflow. There is no lazy loading. If you change the graph, the workflow instances that were launched before the deployment of the new workflow graph will keep on using the former graph, while new ones will use the new version of the model.

{{/callout}}

You can have some troubles if you change the behavior of a chain let's say the chain "wkf-validate-input" in such a way that the new behavior is not compatible with what expects the former graph definition. One way to handle the situation correctly is to have a suffix versioning on automation chain ids. You duplicate the automaton chain and add the suffix `_1` , `_2`, `_3`  to the new name, to be able to easily do some maintenance on both chains if necessary. So for the new version of your graph with an impacting change, you would use `wkf-validate-input_01` and you will not delete wkf-validate-input as long as some old instances are using it.
