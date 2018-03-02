---
title: Variables Tab
review:
    comment: ''
    date: ''
    status: ok
confluence:
    ajs-parent-page-id: '11534802'
    ajs-parent-page-title: Workflow screens
    ajs-space-key: Studio
    ajs-space-name: Nuxeo Online Services
    canonical: Variables+tab
    canonical_source: 'https://doc.nuxeo.com/display/Studio/Variables+tab'
    page_id: '11534811'
    shortlink: 2wGw
    shortlink_source: 'https://doc.nuxeo.com/x/2wGw'
    source_link: /display/Studio/Variables+tab
tree_item_index: 300
history:
    -
        author: Solen Guitter
        date: '2013-08-07 11:05'
        message: dded border to screensho
        version: '10'
    -
        author: Bertrand Chauvin
        date: '2013-08-06 14:08'
        message: Updated screenshot
        version: '9'
    -
        author: Solen Guitter
        date: '2013-05-23 10:04'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2013-05-22 18:36'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2013-05-22 18:36'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2013-05-22 18:27'
        message: Resized screenshot and fixed typos
        version: '5'
    -
        author: Vincent Dutat
        date: '2013-05-10 16:49'
        message: ''
        version: '4'
    -
        author: Vincent Dutat
        date: '2013-05-10 16:48'
        message: ''
        version: '3'
    -
        author: Alain Escaffre
        date: '2012-09-28 00:23'
        message: Migrated to Confluence 4.0
        version: '2'
    -
        author: Alain Escaffre
        date: '2012-09-28 00:23'
        message: ''
        version: '1'

---
![]({{file name='workflow-variables-tab.png'}} ?w=500,border=true)

Variables at workflow level can be used to store information that can be accessed at any time during the workflow, when editing a node properties for example. Those variables will store data that come from user forms or that are computed by automation chains, using from their the `WorkflowVariables[]` object.

{{! multiexcerpt name='studio-variable-tab'}}

*   **Name** and **Prefix**: You don't have to modify this.
*   **Add variable**: Adds a new row on the variables table.
*   **Delete variable**: Deletes selected variable. You can select only one variable at a time.
*   Table columns:

    *   **Name**: Used to reference the variables later.
    *   **Type**: The type of the value that is going to be stored. This type has an impact on the available widgets in the forms.
    *   **Edit**: Press this button to decide on [field constraints]({{page space='nxdoc' page='field-constraints-and-validation'}}) to set for this variable.
    *   **Multi-Valued**: Check the box if we need to store multiple values of the same type on this field.
    *   **Default**: The default value of the variable.

{{! /multiexcerpt}}
