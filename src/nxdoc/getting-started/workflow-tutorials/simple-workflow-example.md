---
title: Simple Workflow Example
description: Discover how workflows work in Nuxeo Platform following this simple example.
review:
  comment: ''
  date: '2019-02-18'
  status: ok
labels:
  - lts2016-ok
  - excerpt
  - lts2017-ok
  - lts2019-ok
toc: true
notes: Documentation page used by the Marketing team. Check with Marketing before deleting or moving.
confluence:
  ajs-parent-page-id: '19235786'
  ajs-parent-page-title: Workflow Use Cases
  ajs-space-key: NXDOC
  ajs-space-name: Nuxeo Platform Developer Documentation
  canonical: Simple+Workflow+Example
  canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Simple+Workflow+Example'
  page_id: '12915754'
  shortlink: KhTF
  shortlink_source: 'https://doc.nuxeo.com/x/KhTF'
  source_link: /display/NXDOC/Simple+Workflow+Example
tree_item_index: 100
---

## Use Case

{{! excerpt}}
A company has decided to be more rigorous on proposals sent by the sales team. A workflow has to be set up so that each proposal is reviewed by the head of operations, this one being able to decide of an additional juridical control.
{{! /excerpt}}

The graph we want is like this:

![](https://www.lucidchart.com/publicSegments/view/54edd493-2438-46d6-8c71-742e0a00c1d3/image.png?w=500)

## Prerequisites

The following operations have to be done in your Nuxeo Platform before following this tutorial:

- Create a user having for id `Emily`, a sales employee who launches the workflow, and give her `ReadWrite` access on the domain.
- Create a user having for id `Jack`, as Head of Operations, and give him `ReadWrite` access on the domain.
- Create a group having for id `Internal_Lawyers` and populate it with at least one user (like `Internal_Lawyers1`).

{{#> callout type='tip' }}
You can perform these operations from the Web UI Administration menu and the domain permission tab. For advanced users, you can alternatively use the **Users and Groups** menu in Studio Modeler and update the Domain Structure Template (`DomainFactory`) to grant the required permissions.
{{/callout}}

<!--
{{#> callout type='info' }}
Web UI and JSF UI

This tutorial gives all the necessary steps to build the custom workflow template for Nuxeo JSF UI and Nuxeo Web UI.
* The workflow template design, the task description, workflow variables and all the business logic is hold by Studio Modeler for both interfaces
* **JSF UI** is fully based upon **Studio Modeler**, including the forms and layouts design.
* **Web UI** uses forms and layouts design from **Studio Designer**.
{{/callout}}
-->

## Implementation Steps

### Creating the Workflow

1. In **Studio Modeler**, navigate to the **Workflow** > **Process Definitions** submenu.
2. Click on the **New** button.
3. Give the workflow an id (`SalesProposalWorkflow`), a label and a description.
    {{!--     ### nx_asset ###
      path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Simple Workflow Example/Simple_Workflow_000.png
      name: Simple_Workflow_000.png
      studio_modeler#screenshot#up_to_date
    --}}
    ![simple_Workflow_000.png](nx_asset://a18252e0-cb6a-43c4-9058-398e169c50f9 ?w=450,border=true)
4. Click on the **Ok** button.

### Defining the Workflow's Activation

Workflows can be launched through a dropdown list on the summary screen of every document. Into the **Activation** tab, you can decide for which type of document the workflow you create will be usable, for which group of users, etc.

1. From the workflow, click on the **Activation** tab.
2. In the **Current document has one of the types**, select **File**.
    {{!--     ### nx_asset ###
      path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Simple Workflow Example/simple_Workflow_002.png
      name: Simple_Workflow_002.png
      studio_modeler#screenshot#up_to_date
    --}}
    ![simple_Workflow_002.png](nx_asset://24ee8a6e-aac4-46f9-ba6d-2840806f0b83 ?w=600,border=true)

### Starting the Graph

A workflow must start with a node for which the "start node" property is checked and have at least one end node with the "end node" property checked.

To start the workflow graph:
1. Click on the **Graph** tab.
2. By default, Studio adds the Start and Stop nodes automatically. If not, drag and drop the **Start** node on the graph.
   ![](https://www.lucidchart.com/publicSegments/view/54ede03e-bcb8-4715-a9f3-1f500a008a99/image.png ?w=300,border=true)

### Defining the Technical Validation Step

Let's create and configure the technical validation step.

This node will create a task for Jack, the head of operations. He will have to accept or reject the proposal submitted by the salesman or decide that it requires a juridical advice.

1. Drag the **Accept/Reject** node template from the node template library and drop it on the graph.
  It will already have some of the needed transitions and buttons pre-configured: Validate and Reject. You need another transition (Need juridical advice), which you will add manually in a future step.
  {{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Simple Workflow Example/simple_Workflow_003.png
    name: Simple_Workflow_003.png
    studio_modeler#screenshot#up_to_date
    --}}
    ![simple_Workflow_003.png](nx_asset://07d27b3a-4105-4e62-a97b-ddfad1af64bb ?w=400,border=true)

2. Hover on the **Accept/Reject** node you just dropped and click on the icon ![]({{file name='editor_area.gif' space='studio' page='studio-icons-index'}}) that appears to open the node properties.
{{!--     ### nx_asset ###
path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Simple Workflow Example/simple_Workflow_005.png
name: Simple_Workflow_005.png
studio_modeler#screenshot#up_to_date
--}}
![simple_Workflow_005.png](nx_asset://cbf4cf4b-c51a-4807-b8ec-edeacf246d14 ?w=150,border=true)

3. In the **General** tab edit the following properties:
  - Title: `Technical validation`
  - Due date expression: `CurrentDate.days(5)`

4. Update the assignee related fields:
  - Assignees: Add a statical assignee (`Jack`). Click on the "Add" link in front of the "Assignees" field.
  - Grant permission to task assignees: Leave this field blank.

5. Click on the **Save** button of the popup.

6. Click on the **Save** button of the workflow feature on the bottom left corner.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Simple Workflow Example/technical-validation-node.png
    name: technical-validation-node.png
    1.1.3#screenshot#up_to_date
--}}
![technical-validation-node.png](nx_asset://7dc45826-454d-446c-a2d4-c91548ec277e ?w=650,border=true)

### Configuring the Workflow Variables

During this task, we want to record the head of operations' comment. We could use a node variable, but using a workflow variable is more appropriate as it will let us leverage the head of operations' comment value in the other nodes. For example, to display it to the other users in their own task validation form, to know what was the option of the head of operations when taking the decision. Getting the juridical advisor and salesman's comment are needed at a later stage, so that workflow variables are added to their comments as well.

This variable will be named `hoo_comment`.

**To add the workflow variables:**

1.  Click on the **Variables** tab of the workflow.
2.  Add the head of operation's comment variable and name it `hoo_comment`. It is like editing a schema.
3.  Add the juridical advisor's comment variable: `juridical_comment`.
4.  Add the salesman's comment variable: `sales_comment`.
    {{!--     ### nx_asset ###
      path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Simple Workflow Example/simple_Workflow_004.png
      name: Simple_Workflow_004.png
      studio_modeler#screenshot#up_to_date
    --}}
    ![simple_Workflow_004.png](nx_asset://7b94f177-7f48-4b31-8ab1-7368ab501861 ?w=600,border=true)
5.  Click on **Save**.

### Configuring the Technical Validation Step Layout and Actions

#### Initializing the Task Layout

The workflow task layout lets the user edit some of the workflow's variables (either at workflow level or node level), and the buttons help the engine to know which transition to play after the node, depending on what the user clicked on.

1.  Go back to the **Technical validation** node.
2.  Click on the **Variables** tab.
    Add the **hoo_comment** to the right column.
    {{!--     ### nx_asset ###
        path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Simple Workflow Example/technical-validation-layout1.png
        name: technical-validation-layout1.png
        studio_modeler#screenshot#up_to_date
    --}}
    ![technical-validation-layout1.png](nx_asset://a8fceac5-6af1-4647-b501-9a2312cd57b9 ?w=650,border=true)
3.  Save your work.
4.  Click on the **Configure layouts in Designer** button.
    {{!--     ### nx_asset ###
        path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Simple Workflow Example/technical-validation-layout2.png
        name: technical-validation-layout2.png
        studio_designer#screenshot#up_to_date
    --}}
    ![technical-validation-layout2.png](nx_asset://184b7cb0-47e4-4e37-a9f5-612eeb0ffb5c ?w=200,border=true)
5.  Select the **Technical validation** task and click on the **Configure** button.
    {{!--     ### nx_asset ###
        path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Simple Workflow Example/technical-validation-layout3.png
        name: technical-validation-layout3.png
        studio_designer#screenshot#up_to_date
    --}}
    ![technical-validation-layout3.png](nx_asset://98461ec6-4aa5-4380-a4b2-7e6dca2d9324 ?w=650,border=true)
6.  Delete the properties already displayed in the layout using the delete icon once an element is selected. Keep only the "hoo_comment" property.
    ![]({{file name='vd_wf_technical_validation_layout3.png'}} ?w=600,border=true)
7.  Change its label for `Head of Operations Comment`.
    ![]({{file name='vd_wf_technical_validation_layout5.png'}} ?w=600,border=true)
8. Click on the **Save work in progress** button.    

<!--
##### With Studio Modeler and JSF UI

1.  Go back to the **Technical validation** node.
2. Click on the **Variables** tab.
   Add the **hoo_comment** to the right column.
   ![]({{file name='Simple_Workflow_006_1.png'}} ?w=600,border=true)
3.  Click on the **Form** tab.
    A form like the one to edit a document's layout is displayed.
4.  Add a field for the comment of the user who validates: Drag the **hoo_comment** field from the workflow variables schema and drop it on the layout.
5.  Edit the widget, the same way you edit the form of a document:
    *   Title: `Head of operations comment`.
    *   Widget type: Textarea.
    ![]({{file name='technical-validation-textarea.png'}} ?w=600,border=true)
-->

#### Setting up the Tasks Buttons

In Studio Modeler, the buttons that are shown on the form are configured on the **Task Buttons** tab. Two are already available because of the template node you chose. You need to add a third one when the document requires juridical expertise.

1. Go back to the graph of the workflow on Modeler side.
1. Click on **Add task button**.
1. Fill in the button id `require_juridical_advice` and label `Require Juridical Advice?`.
1. Let the box **Generate the condition for the transition** checked.
  {{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Simple Workflow Example/Simple_Workflow_008_1.png.1550847107661
    name: Simple_Workflow_008_1.png
    studio_modeler#screenshot#up_to_date
   --}}
   ![Simple_Workflow_008_1.png](nx_asset://72e58bb7-a5df-4720-b5ec-6a089cda5ae7 ?w=450,border=true)

#### Check the Transitions

Each button is automatically associated to a transition to define what should be done when the user clicks on the button. Transitions automatically get a condition, which is a system node variable called "button". This variable is systematically updated with the id of the button used to process the task. It is useful to configure the behavior of the transitions.

1. Click on the **Transition** tab.
    Note that you could add more terms in the condition if necessary.
    {{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Simple Workflow Example/technical-validation-transitions.png
    name: technical-validation-transitions.png
    studio_modeler#screenshot#up_to_date
    --}}
    ![technical-validation-transitions.png](nx_asset://67d49953-8417-4717-9d41-8554d307021a ?w=450,border=true)
2. Click on **Save**.

#### Connecting the Nodes

1. Go back to the graph.
2. Link the **Start** node to the **Technical validation** node, by pulling an arrow between the unique transition point of the Start node to the input point of the Technical validation node.
    {{!--     ### nx_asset ###
      path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Simple Workflow Example/simple_Workflow_012.png
      name: Simple_Workflow_012.png
      studio_modeler#screenshot#up_to_date
    --}}
    ![simple_Workflow_012.png](nx_asset://bbb147f1-ec4f-4f07-8661-cec1c7dd3e7f ?w=200,border=true)

    Note that you have three transition points on the technical validation node, ready to be pulled to the next nodes.

### Defining the Juridical Advice Node

Now that we have our Technical validation node set up, we need to create the nodes used for its possible transitions. First comes the Juridical advice node. As most operations have been described before, we will only comment this node&rsquo;s specificities.

#### Configuring the Node

1. Drag the **Approve** node from the node template library and drop it on the graph.
![](https://www.lucidchart.com/publicSegments/view/54eefcaf-64e8-42a2-ad51-6ed50a00c10c/image.png ?w=300,border=true)

1. Open the node properties.
1. Rename the node to `Juridical advice`.
1. Define the assignees.</br>
   This time we would like to ask a member of the &ldquo;Internal\_ Lawyers&rdquo; user group to comment instead of a specific person. Therefore, instead of adding a specific username, you may simply add an assignee and use the prefix `group:` to specify a user group (`group:Internal_Lawyers`).

1. Grant the appropriate rights. The internal lawyers may not have the necessary rights to read and/or edit a sales proposal document. To avoid an exception to be thrown because of this, you need to grant them the appropriate rights on the document that needs juridical advice temporarily. This is what the **Grant permission to task assignees** field is used for. In this case, choose the **Read & Edit** permission to let them modify the document. Keep in mind that these rights will only be granted during the operations made on this node, and reverted to their previous state when following a transition to another node.
   {{!--     ### nx_asset ###
     path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Simple Workflow Example/juridical-advice-node.png
     name: juridical-advice-node.png
     studio_modeler#screenshot#up_to_date
   --}}
   ![juridical-advice-node.png](nx_asset://d7b5c04b-88bf-4800-ab1b-6d2bdbaa650e ?w=550,border=true)

#### Configuring the Task Layout

1. Click on the **Variables** tab and add the **juridical_comment** and **hoo_comment** variables to the right column.
   {{!--     ### nx_asset ###
       path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Simple Workflow Example/juridical-advice-node2.png
       name: juridical-advice-node2.png
       studio_modeler#screenshot#up_to_date
   --}}
   ![juridical-advice-node2.png](nx_asset://636781ec-ea16-4e2f-bd8d-8dbbabe3c5d9 ?w=550,border=true)
2. Save you work
3. Click on the **Configure layouts in Designer** button.
4. Open the **Juridical Advice** workflow task and click on the **Configure** button.
5. Delete the properties displayed in the layout using the delete icon once an element is selected. Keep only the **hoo_comment** and the **juridical_comment** properties.
6. Select the **juridical_comment** field and set the property as required.
    {{!--     ### nx_asset ###
      path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Simple Workflow Example/vd_wf_technical_validation_layout6.png
      name: vd_wf_technical_validation_layout6.png
      studio_designer#screenshot#up_to_date
    --}}
    ![vd_wf_technical_validation_layout6.png](nx_asset://3a025d89-f8d7-44ee-9d5b-5766b47a678e ?w=300,border=true)
7. Select the **hoo_comment** as well, change its label for `Head of Operations Comment` and set the property as read only.
   {{!--     ### nx_asset ###
       path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Simple Workflow Example/juridical-advice-layout.png
       name: juridical-advice-layout.png
       studio_designer#screenshot#up_to_date
   --}}
   ![juridical-advice-layout.png](nx_asset://7fa1a583-0ec6-4120-865e-79204af09bd3 ?w=650,border=true)
8. Click on **Save work in progress**.

<!--
##### With Studio Modeler and JSF UI

1. Click on the **Variables** tab and add the **juridical_comment** and **hoo_comment** variables to the right column.
  ![]({{file name='Simple_Workflow_015_1.png'}} ?w=600,border=true)
2.  Click on the **Form** tab.
3.  Add the **juridical_comment** field the same way you did with the **Technical validation** node.
    ![]({{file name='juridical-comment.png'}} ?w=450,border=true)
4.  Add the **hoo_comment** as well, but make sure to set it as read only.
    ![]({{file name='hoo-comment.png'}} ?w=450,border=true)
5.  Click on **Save**.
    ![]({{file name='juridical-advice-form.png'}} ?w=450,border=true)
-->

#### Connecting the Nodes

1. Go back on the graph, in Studio Modeler.
2. Search for the Technical validation node&rsquo;s juridical advice requirement output point.
3. Pull an arrow from there to the Juridical advice node&rsquo;s input point.
    {{!--     ### nx_asset ###
      path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Simple Workflow Example/simple_Workflow_018.png
      name: Simple_Workflow_018.png
      studio_modeler#screenshot#up_to_date
    --}}
    ![simple_Workflow_018.png](nx_asset://d68e990f-708f-4c15-98e8-cbbc53f35584 ?w=200,border=true)

### Defining the Proposal Update Node

You will now take care of the Proposal update node, which will be used in case Jack refuses the proposal.

#### Adding the Node

The **Approve** node will once again be the most appropriate. Pick it up and drop it on the graph.

#### Configuring the Proposal Update Node

1. Open the node properties.
2. Rename the node to `Proposal update`.
3. Rename the directive: `Proposal update`.
4. Define the Due date expression: `CurrentDate.days(5)`
5. Define the assignees.</br>
    This task may not be assigned to a particular person, neither may it be assigned to a group. It needs to be assigned to the document's creator. To do so, a variable needs to be used instead of a hard coded value.
    We use the **Assignees expression** field and use this variable: `@{Document["dc:creator"]}`. This will return the document creator's username.
    Note that there are no specific rights to grant there as in this situation the document will be heading back to its creator.
    {{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Simple Workflow Example/proposal-update-general.png
    name: proposal-update-general.png
    studio_modeler#screenshot#up_to_date
    --}}
    ![proposal-update-general.png](nx_asset://2e6836c7-1769-48aa-bfc3-372df1f513ec ?w=450,border=true)
6. Calling the task an approval task could lead to confusion for the salesman who wants to submit an updated proposal. Thus, we will call the task button differently:
    1. Click on the **Task Buttons** tab.
    1. Delete the `approve` existing task button.
    1. Click on the **Add task button** link.
    - id: `submit_updated_proposal`
    - Label: `Submit updated proposal`  
    {{!--     ### nx_asset ###
      path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Simple Workflow Example/simple_Workflow_022_1.png
      name: Simple_Workflow_022_1.png
      studio_modeler#screenshot#up_to_date
    --}}
    ![simple_Workflow_022_1.png](nx_asset://27330534-2b95-4e3f-92f1-e913f30cb726 ?w=650,border=true)
7. Save.

{{#> callout type='info' }}
In this scenario, if Jack (Head of Operations) rejects the tasks, it is sent back to the document creator. We could have used the `workflowInitiator` expression so that the task is returned to **the user who has launched the workflow** (assuming it could have been distinct from the document creator).
{{/callout}}

#### Configuring the Task layout

1. Click on the **Variables** tab and add the **sales_comment** and **hoo_comment** variables to the right column.
    {{!--     ### nx_asset ###
        path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Simple Workflow Example/proposal-update-node.png
        name: proposal-update-node.png
        studio_modeler#screenshot#up_to_date
    --}}
    ![proposal-update-node.png](nx_asset://d23602e0-6558-49b3-8672-b60c619d55fc ?w=650,border=true)
2. Save you work.
3. Click on the **Configure layouts in Designer** button.
4. Click on the **Configure** button next to the **Proposal Update** layout.
5. Delete the properties displayed in the layout using the delete icon once an element is selected. Keep only the **Hoo Comment** and the **Sales Comment** properties.
6. Change the **hoo_comment** label for `Head of Operations Comment` and set it as read only mode.
    {{!--     ### nx_asset ###
        path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Simple Workflow Example/proposal-update-layout.png
        name: proposal-update-layout.png
        studio_designer#screenshot#up_to_date
    --}}
    ![proposal-update-layout.png](nx_asset://99a96a40-e0b9-4e3d-b0c4-c50c435bda4c ?w=650,border=true)
7. Click on the **Save work in progress** button.

<!--
##### With Studio Modeler and JSF UI

1. Click on the **Variables** tab and add the **sales_comment** and **hoo_comment** variables to the right column.
![]({{file name='Simple_Workflow_020_1.png'}} ?w=450,border=true,thumbnail=true)
2.  Click on the **Form** tab.
3.  Add the **sales_comment** field as well as the **hoo_comment** field, the latter still in read only mode.
    ![]({{file name='Simple_Workflow_020_2.png'}} ?w=450,border=true,thumbnail=true)
-->

#### Removing the Approve Transition

1. Go back to the Proposal update node, in Studio Modeler.
1. Click on the **Transitions** tab.
1. Click on the icon ![]({{file name='edit_wiz.png'}}) next to the "approve" transition and click on **Remove** in the contextual menu.
    {{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Simple Workflow Example/proposal-update-transitions.png
    name: proposal-update-transitions.png
    studio_modeler#screenshot#up_to_date
    --}}
    ![proposal-update-transitions.png](nx_asset://2aa2608a-8527-4209-a954-f88e73e94c58 ?w=450,border=true)
1. Confirm row deletion on the popup window.
1. Click on **Save**.

#### Connecting the Nodes

1. Go back to the graph.
1. Link the reject output of the Technical validation node to the Proposal Update node's input.
1. Link the Proposal update node's output point to the Technical validation node's input point.
    {{!--     ### nx_asset ###
      path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Simple Workflow Example/simple_Workflow_024.png
      name: Simple_Workflow_024.png
      studio_modeler#screenshot#up_to_date
    --}}
    ![simple_Workflow_024.png](nx_asset://a3d270c7-e336-4886-a31c-f73e7c67820a ?w=300,border=true)
5. Link the `validate` outpoint point of the Technical validation task to the end node.
6. Link the `approve` outpoint point of the Juridical advice task to the end node as well.

{{#> callout type='info' }}
This node sets a possible ending to the workflow. In this situation only one end node will be used, but remember that you may use several end nodes if needed.
{{/callout}}

### Automating Document's Metadata Update

A document being accepted by the Head of Operations or the Juridical services has to see its metadata updated. This is something we can achieve through an automation chain.

1. Open the **Stop** node properties.
1. In the **General** tab, click on the **Create** button next to the field "Select the input automation chain".
    {{!--     ### nx_asset ###
      path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Simple Workflow Example/empty-end-node.png
      name: empty-end-node.png
      studio_modeler#screenshot#up_to_date
    --}}
    ![empty-end-node.png](nx_asset://81c63939-c710-48b5-a1dd-1a38ac34d0d7 ?w=450,border=true)

    1. Give an id to your chain: `SetAsApproved`.
        {{!--     ### nx_asset ###
          path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Simple Workflow Example/simple_Workflow_026.png
          name: Simple_Workflow_026.png
          studio_modeler#screenshot#up_to_date
        --}}
        ![simple_Workflow_026.png](nx_asset://2b3ac7f5-fb14-4bcb-8260-91d02b302f18 ?w=350,border=true)
    1. In the editor, add the **Document** > **Follow Life Cycle Transition** operation using drag and drop.
        {{!--     ### nx_asset ###
          path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Simple Workflow Example/empty-automation-chain.png
          name: empty-automation-chain.png
          studio_modeler#screenshot#up_to_date
        --}}
        ![empty-automation-chain.png](nx_asset://3b279711-2104-447b-929a-f637bcaf8e68 ?w=450,border=true)
    1. Open it and set its value to `approve`.
        {{!--     ### nx_asset ###
          path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Simple Workflow Example/simple_Workflow_028_1.png
          name: Simple_Workflow_028_1.png
          studio_modeler#screenshot#up_to_date
        --}}
        ![simple_Workflow_028_1.png](nx_asset://6d9ff8ac-8004-4227-95d0-b1c663b4f12c ?w=450,border=true)
    1. Save the chain and go back to your workflow graph.

3. Now that the chain is created, you may have a look at your end node properties.
   The input operation chain has been automatically filled in thanks to our previous operation.
   {{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Simple Workflow Example/end-node-setasapproved.png
    name: end-node-setasapproved.png
    studio_modeler#screenshot#up_to_date
    --}}
    ![end-node-setasapproved.png](nx_asset://681d65e0-ac2b-456a-a4ef-67a7c602ab5b ?w=450,border=true)

## Deploy and Test

1. Log in as `Administrator`.
2. [Hot reload your instance]({{page space='nxdoc' page='nuxeo-dev-tools-extension'}}) to deploy the Nuxeo Studio Configuration.
3. Navigate to **Domain** > **Workspaces** and create a `Proposals` workspace.
4. Create a file in the Proposals folder.
5. Log out and log in as `Emily` and open the proposal you've just created.
6. Click on the **Start Process** button.
   {{!--     ### nx_asset ###
       path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Simple Workflow Example/simple-worfklow-step1.png
       name: simple-worfklow-step1.png
       1.1.3#screenshot#up_to_date
   --}}
   ![simple-worfklow-step1.png](nx_asset://bf8f8f83-d6d1-44fe-8a91-57c19c1db1e8 ?w=200,border=true)
7. Select the **Sales Proposal** workflow.
   {{!--     ### nx_asset ###
       path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Simple Workflow Example/simple-worfklow-step2.png
       name: simple-worfklow-step2.png
       1.1.3#screenshot#up_to_date
   --}}
   ![simple-worfklow-step2.png](nx_asset://86cb738b-95b7-45a4-8a50-166a75b4aa3b ?w=450,border=true)
   You should see a information banner indicating a workflow as been triggered. As a workflow initiator, you can **View the Workflow graph** or **Abandon** it.
8. Log in as `Jack`: there's a new task in your dashboard as well as a notification on the workflow task menu.
   {{!--     ### nx_asset ###
       path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Simple Workflow Example/simple-worfklow-step3.png
       name: simple-worfklow-step3.png
       1.1.3#screenshot#up_to_date
   --}}
   ![simple-worfklow-step3.png](nx_asset://1a2150b1-9ba5-42af-bf89-28e11dcbb75a ?w=650,border=true)
9. Open the task, add a comment and send it for review to the Internal Lawyers by clicking on the **Require Juridical Advice** button.
10. Log in as one member of the `Internal_Lawyers` group: there's a Juridical Advice workflow task.
    {{#> callout type='info' }}
    Il you click on the document, or try to navigate, you won't be able to see the **Domain** > **Workspaces** > **Proposals** folder structure as we have just given Read and Write access to the document for this group.
    {{/callout}}
11. Add a comment and approve the document.
    {{!--     ### nx_asset ###
        path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Simple Workflow Example/simple-worfklow-step4.png
        name: simple-worfklow-step4.png
        1.1.3#screenshot#up_to_date
    --}}
    ![simple-worfklow-step4.png](nx_asset://62871e10-4965-451f-a761-bc2a22155799 ?w=650,border=true)
    {{#> callout type='info' }}
    Once completed, the task performer of the "Require Juridical Advice" task can no longer access the document.
    {{/callout}}
12. Log in as `Jack` and open the document: the document status has been updated to **Approved**.
    {{!--     ### nx_asset ###
        path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Simple Workflow Example/simple-worfklow-step5.png
        name: simple-worfklow-step5.png
        1.1.3#screenshot#up_to_date
    --}}
    ![simple-worfklow-step5.png](nx_asset://b294fee9-d2a2-444f-b9a6-141eb1630061 ?w=650,border=true)

You can execute again the workflow with another document and pass through the **Reject task**.
