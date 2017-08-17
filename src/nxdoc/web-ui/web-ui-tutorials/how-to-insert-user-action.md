---
title: "HOWTO: Insert a User Action"
review:
    comment: ''
    date: '2017-06-15'
    status: ok
toc: true
details:
    howto:
        excerpt: Learn how to insert a new user action using the Studio Designer
        level: Intermediate
        tool:
        topics: Web UI, Studio Designer
labels:
    - tutorial
    - nuxeo-elements
    - nuxeo-ui-elements
    - polymer
tree_item_index: 1300
---
{{! excerpt}}
In this tutorial you will learn how to insert a user action on your instance using Studio Designer, to easily validate documents.
{{! /excerpt}}

{{#> callout type='note' }}
The Studio Designer is not available for everyone yet, but if you can't wait any longer to try it, do not hesitate to contact your sales representative to enable it on your project.
{{/callout}}

## Requirements

- Web UI addon installed on your instance.
- Studio Designer enabled on your Studio project.
- A [Contract document type]({{page version='' space='nxdoc' page='getting-started-with-nuxeo-studio'}}#step-3-create-a-contract-document-type) created in Studio Modeler and [customized on Studio Designer]({{page page='web-ui-document-layouts'}}).

## Create an Automation Chain

On Modeler side:
1. Go on **Configuration**&nbsp;> **Automation** and then on **Automation Chains**.
1. Click on the **New** button.
1. Give your automation chain an ID `validateDocument` and click on the **Next** button.
  ![]({{file name='NXS-automation-create.png' page='how-to-create-an-automation-chain'}} ?w=350,border=true)
  The automation chain editor is displayed. The `Fetch&nbsp;> Context Document(s)` is automatically added as the first operation of the chain.
1. Drag and drop the operation **Document**&nbsp;> **Follow Life Cycle Transition** and set the transition as `approve`.
1. Click on **Save**.

  You should end up with something like this:
  ![]({{file version='810' space='nxdoc' page='how-to-insert-user-action' name='validateDocument-chain-studio.png'}} ?w=650,border=true)

## Bind the Action to an Element

Now that your automation chain is ready, you will need to bind it to an action.

On Studio Designer, go on the **UI** tab:
1. In **Actions**, click on the **Create** button.
1. Fill in the creation form as shown below:
  ![]({{file version='810' space='nxdoc' page='how-to-insert-user-action' name='validate-action-button-VD.png'}} ?w=650,border=true)
1. Fill in the **Filters** section as shown below:
  ![]({{file version='810' space='nxdoc' page='how-to-insert-user-action' name='filters-action-VD.png'}} ?w=650,border=true)
  Only the users who have Manage Everything permission will see the button.
1. Save your changes and deploy your project.

  You should end up with something like this:
  ![]({{file version='810' space='nxdoc' page='how-to-insert-user-action' name='validate-button-VD.png'}} ?w=450,border=true)

On a Contract document type that you want to validate (change status from Project to Approved) click on your brand new **Validate** button and refresh your page, your contract is approved! The button disappeared as the status has changed.
