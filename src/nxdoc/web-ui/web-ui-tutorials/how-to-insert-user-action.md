---
title: 'HOWTO: Insert a User Action'
review:
    comment: ''
    date: '2019-07-12'
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
    - lts2019-ok
tree_item_index: 1300
---

{{! excerpt}}
In this tutorial you will learn how to insert a user action on your instance using Studio Designer, to easily validate documents.
{{! /excerpt}}

{{#> callout type='info' heading='Nuxeo University'}}
Watch the related courses on Nuxeo University:</br>
[Video on a simple Nuxeo Project Creation](https://university.nuxeo.com/learn/public/course/view/elearning/144/nuxeo-platform-quickstart-creation-of-a-simple-nuxeo-studio-project)
![]({{file name='university-quickstart-studio-project.png' page='nxdoc/university'}} ?w=450,border=true)
{{/callout}}

## Requirements

- A [Contract document type]({{page version='' space='nxdoc' page='web-ui-document-layouts'}}#create-a-contract-document-type) created in Studio Modeler.
- Make sure that the [Nuxeo Web UI]({{page version='' space='nxdoc' page='web-ui'}}) addon is installed on your instance.

## Create an Automation Chain

{{{multiexcerpt 'quick-switcher' page='web-ui-document-layouts'}}}

On Studio Modeler:
1. Go on **Configuration** > **Automation** and then on **Automation Chains**.
1. Click on the **New** button.
1. Give your automation chain an ID `validateDocument` and click on the **Next** button.
  {{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/HOWTO: Insert a User Action /NXS-automation-create.png
    name: NXS-automation-create.png
    studio_modeler#popup#up_to_date
  --}}
  ![NXS-automation-create.png](nx_asset://3dd4b28e-363b-4d23-b2aa-e5b5387f22e6 ?w=350,border=true)
  The automation chain editor is displayed. The **Fetch** > **Context Document(s)** is automatically added as the first operation of the chain.
1. Drag and drop the operation **Document** > **Follow Life Cycle Transition** and set the transition as `approve`.
1. Click on **Save**.

  You should end up with something like this:
  {{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/HOWTO: Insert a User Action /validateDocument-chain-studio.png.1562678242765
    name: validateDocument-chain-studio.png
    studio_modeler#screenshot#up_to_date
  --}}
  ![validateDocument-chain-studio.png](nx_asset://e6da24c4-83da-4127-a93e-a93016bf89c9 ?w=650,border=true)

## Bind the Action to an Element

Now that your automation chain is ready, you will need to bind it to an action.

On Studio Designer, go on the **UI** tab:
1. In **Buttons**, hover over the **Create** button and select **Button**.
1. Fill in the creation form as shown below:
    {{!--     ### nx_asset ###
      path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/HOWTO: Insert a User Action /validate-action-button-VD-identity.png
      name: validate-action-button-VD-identity.png
      studio_designer#screenshot#up_to_date
    --}}
    ![validate-action-button-VD-identity.png](nx_asset://cc7f7edd-02cb-44b0-9985-823ee0259a54 ?w=500,border=true)

    {{!--     ### nx_asset ###
      path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/HOWTO: Insert a User Action /validate-action-button-VD.png
      name: validate-action-button-VD.png
      studio_designer#screenshot#up_to_date
    --}}
    ![validate-action-button-VD.png](nx_asset://3abb7e91-80ed-46e6-8f1a-c8184cc808ba ?w=500,border=true)
1. Fill in the **Filters** section as shown below:
  {{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/HOWTO: Insert a User Action /filters-action-VD.png
    name: filters-action-VD.png
    studio_designer#screenshot#up_to_date
  --}}
  ![filters-action-VD.png](nx_asset://f86b019d-a9dc-4715-86cd-71059b78079e ?w=500,border=true)
  Only the users who have Manage Everything permission will see the button.
1. Save your changes and deploy your project.

![]({{file name='drop-down-menu-validate.png'}} ?w=200,border=true)

On a Contract document type that you want to validate (change status from Project to Approved), click on your brand new **Validate** button in the action toolbar and refresh your page.  
Your contract is approved! The button disappeared as the status has changed.
