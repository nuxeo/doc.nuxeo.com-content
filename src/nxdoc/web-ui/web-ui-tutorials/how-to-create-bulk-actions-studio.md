---
title: 'HOWTO: Create a Bulk Action Using Nuxeo Studio'
review:
    comment: ''
    date: '2021-09-10'
    status: ok
toc: true
details:
    howto:
        excerpt: Learn how to create an action executing logic in bulk using Nuxeo Studio Designer
        level: Intermediate
        tool: null
        topics: 'Web UI, Studio Designer, UIElements, Bulk'
labels:
    - tutorial
tree_item_index: 1350
---

{{! excerpt}}
In this tutorial you will learn how to insert a button that can execute logic on a large set of documents.
{{! /excerpt}}

## Requirements

{{#> callout type='info'}}
This capability is available since LTS 2021.
{{/callout}}

- Activate the `Select All and Bulk Actions` feature by adding the `nuxeo.selection.selectAllEnabled=true` property in your [nuxeo.conf]({{page page="configuration-parameters-index-nuxeoconf"}}) file 
{{{multiexcerpt 'requirements-bulk-action' page='how-to-insert-user-action'}}}

## Create Your Logic

{{{multiexcerpt 'quick-switcher' page='generic-multi-excerpts'}}}

On Studio Modeler:
1. Go on **Configuration** > **Automation** and then on **Automation Scripting**
1. Click on the **New** button
1. Give your automation script an ID, e.g. `bulkValidation`
1. Set the input type to **documents**
1. Click on the **Next** button
1. The automation scripting editor is displayed. Replace the existing code with the one below:
```
function run(input, params) {

  var transition, allowedTransitions, iDoc;

  // Transition name we want to follow  
  // Could be moved to a parameter to make the script more flexible
  transition = "approve";

  // We're getting a list of documents in the input variable, so we need to loop over them
  for(iDoc = 0; iDoc < input.length; iDoc++) {
  	allowedTransitions = input[iDoc].doc.getAllowedStateTransitions();
    // This is a Java Collection<String>
    if(allowedTransitions.contains(transition)) {
      input[iDoc] = Document.FollowLifecycleTransition(input[iDoc], {'value': transition});
    }
    else {
      Console.warn(input[iDoc].title + " cannot follow the transition <" + transition + "> from state <" + input.lifeCycle + ">");
    }
  }

  return;
}
```
1. Click on **Save**

This script will change the state of the selected documents to `approved` for the ones that are allowed to.

## Bind the Logic to a Button

Now that your logic is ready, you will need to bind it to a button.

1. Go to Studio Designer. You will start in the **UI** tab.
1. Open the **Buttons** menu, hover over the **Create** button and select **Button**.
1. Fill in the form as follows:
  1. Name: `bulkValidationButton`
  1. Slot: `Results Selection Actions`
  1. Order: `1`
  1. Icon: select an icon or upload your own
  1. Label: `Validate Selection of Documents`
  1. Input: `selection`
  1. Event: `refresh`
1. Save your changes and deploy your project.

## Testing the Result

From any [Folderish]({{page page="available-facets"}}#folderish) document (e.g. a `Folder`, a `Workspace`) or in the results of a search, select one or several documents you want to validate. Click on your brand new button in the toolbar on top of the screen to execute the logic. When finished, the listing is updated to reflect the result.

## Executing Multiple Bulk Actions

In the example above, we used the `refresh` event. Its particularity is that Web UI will request an update to the server once the logic is finished being processed. As a result, the listing is updated and the current selection is lost.

In some cases, you may want the selection to be kept so that a user can execute multiple actions on the same selection. To do that, replace the `refresh` event used above with the `refresh-display` event. This one will keep the selection after the logic is executed, but comes with the downside that the results listing will not be updated: as such it's best to use it with actions that won't have an impact with what is currently displayed on screen to the user.

More information about Web UI events can be found in the [How to Use Web UI Internal Events]({{page page="how-to-use-events"}}) page.
