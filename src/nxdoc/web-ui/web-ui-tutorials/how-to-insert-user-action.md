---
title: 'HOWTO: Insert a User Action'
review:
    comment: ''
    date: '2018-02-22'
    status: ok
toc: true
details:
    howto:
        excerpt: Learn how to insert a new user action using the Studio Designer
        level: Intermediate
        tool: null
        topics: 'Web UI, Studio Designer'
labels:
    - tutorial
    - nuxeo-elements
    - tcardoso
    - nuxeo-ui-elements
    - polymer
    - lts2017-ok
tree_item_index: 1300

---
{{! excerpt}}
In this tutorial you will learn how to insert a user action on your instance using Studio Designer, to easily validate documents.
{{! /excerpt}}

{{#> callout type='info' heading='Nuxeo University'}}
Watch the related courses on Nuxeo University
- [Video on a simple Nuxeo Project Creation](https://university.nuxeo.com/learn/public/course/view/elearning/144/nuxeo-platform-quickstart-creation-of-a-simple-nuxeo-studio-project)
![]({{file name='university-quickstart-studio-project.png' page='nxdoc/university'}} ?w=450,border=true)
{{/callout}}

## Requirements

- A [Contract document type]({{page version='' space='nxdoc' page='web-ui-document-layouts'}}#create-a-contract-document-type) created in Studio Modeler.
- Make sure that the [Nuxeo Web UI]({{page version='' space='nxdoc' page='web-ui'}}) addon is installed on your instance.

## Create an Automation Chain

{{{multiexcerpt 'quick-switcher' page='generic-multi-excerpts'}}}

On Studio Modeler:
1. Go on **Configuration** > **Automation** and then on **Automation Chains**.
1. Click on the **New** button.
1. Give your automation chain an ID `validateDocument` and click on the **Next** button.
  ![]({{file name='NXS-automation-create.png' page='how-to-create-an-automation-chain'}} ?w=350,border=true)
  The automation chain editor is displayed. The **Fetch** > **Context Document(s)** is automatically added as the first operation of the chain.
1. Drag and drop the operation **Document** > **Follow Life Cycle Transition** and set the transition as `approve`.
1. Click on **Save**.

  You should end up with something like this:
  ![]({{file version='810' space='nxdoc' page='how-to-insert-user-action' name='validateDocument-chain-studio.png'}} ?w=650,border=true)

## Bind the Action to an Element

Now that your automation chain is ready, you will need to bind it to an action.

On Studio Designer, go on the **UI** tab:
1. In **Actions**, hover over the **Create** button and select the **Operation** button.
1. Fill in the creation form as shown below:
  ![]({{file version='810' space='nxdoc' page='how-to-insert-user-action' name='validate-action-button-VD.png'}} ?w=650,border=true)
1. Fill in the **Filters** section as shown below:
  ![]({{file version='810' space='nxdoc' page='how-to-insert-user-action' name='filters-action-VD.png'}} ?w=650,border=true)
  Only the users who have Manage Everything permission will see the button.
1. Save your changes and deploy your project.

![]({{file name='drop-down-menu-validate.png'}} ?w=200,border=true)

On a Contract document type that you want to validate (change status from Project to Approved), click on your brand new **Validate** button in the action toolbar and refresh your page.  
Your contract is approved! The button disappeared as the status has changed.
