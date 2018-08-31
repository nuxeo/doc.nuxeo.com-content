---
title: Node Resolution Actions Tab
review:
    comment: ''
    date: ''
    status: ok
tree_item_index: 400
history:
---
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Node Resolution Actions Tab/Node Resolution Actions Tab
    name: node-resolution-actions-tab.png
    studio_modeler#popup#up_to_date
--}}
![Node Resolution Actions Tab](nx_asset://4cac2311-c4be-4a1a-98c4-344c01eb609d ?w=500,border=true)

On this tab, you define which buttons will be displayed on the form.

Buttons can be added easily. You need to specify:

*   **Id**: This value is important as it will be stored in `NodeVariables"button"` and can be used for instance to express conditions for knowing which transition the workflow engine should use.
*   **Label**: The label of the button, supports [i18n]({{page space='nxdoc' page='how-to-upload-labels-translations-in-nuxeo-studio-i18n'}}).
*   **Filter**: A filter to hide or display the button on some conditions. Works only starting from 5.7.1\. In future release of Studio, there will be the usual screen to express a filter.
*   **Generate the condition for transition**: This column, checked by default when you add a line, is a helper so that a transition corresponding to the button is automatically declared, with the correct condition, like: `NodeVariables"button"=='Reject'`. See the [Transitions]({{page page='node-transitions-tab'}}) page for more information.
