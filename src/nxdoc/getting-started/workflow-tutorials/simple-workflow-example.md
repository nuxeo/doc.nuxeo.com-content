---
title: Simple Workflow Example
review:
    comment: ''
    date: '2017-12-14'
    status: ok
labels:
    - lts2016-ok
    - excerpt
    - lts2017-ok
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

Company C has decided to be more rigorous on proposals sent by the sales team. A workflow has to be set up so that each proposal is reviewed by the head of operations, this one being able to decide of an additional juridical control.

{{! /excerpt}}

The graph we want is like this:

![](https://www.lucidchart.com/publicSegments/view/54edd493-2438-46d6-8c71-742e0a00c1d3/image.png?w=500)

## Prerequisites

The following operations have to be done in your Nuxeo Platform before following this tutorial:

*   Create a user having for id "Jack".
*   Give Jack read and edit access on the domain.
*   Create a user group having for id `Internal_Lawyers`.
*   Populate the Internal_Lawyers group with at least one user.
*   Create the user that will launch the workflow.

{{#> callout type='info' }}

Web UI and JSF UI

This tutorial gives all the necessary steps to build the custom workflow template for Nuxeo JSF UI and Nuxeo Web UI.
* The workflow template design, the task description, workflow variables and all the business logic is hold by Studio Modeler for both interfaces
* **JSF UI** is fully based upon **Studio Modeler**, including the forms and layouts design.
* **Web UI** uses forms and layouts design from **Studio Designer**.

{{/callout}}


## Implementation Steps

### Creating the Workflow

1.  In the Workflow category, click on **Process Definitions**.
2.  Click on the **New** button.
3.  Give the workflow an id (`SalesProposalWorkflow`), a label and a description.
    ![]({{file name='Simple_Workflow_000.png'}} ?w=450,border=true)
4.  Click on the **Ok** button.

### Defining the Workflow's Availability

Workflows can be launched through a drop down list on the summary screen of every document. Into the **Activation** tab, you can decide for which type of document the workflow you do will be usable, for which group of users, etc.

1.  From the workflow, click on the **Activation** tab.
2.  In the **Current document has one of the types**, select **File**.
    ![]({{file name='Simple_Workflow_002.png'}} ?w=600,h=407,border=true)

### Starting the Graph

A workflow must start with a node for which the "start node" property is checked and have at least one end node with the "end node" property checked. To make it simpler, Studio provides a node template library (on the left), from which a Start node and an Stop node are available.

To start the workflow graph:

1.  Click on the **Graph** tab.
2. By default, Studio adds the Start and Stop nodes automatically. If not, drag and drop the **Start** node on the graph.
    ![](https://www.lucidchart.com/publicSegments/view/54ede03e-bcb8-4715-a9f3-1f500a008a99/image.png ?w=400,border=true)

### Defining the Technical Validation Step

Let's create and configure the technical validation step.

#### Adding the Technical Validation Node

This node will create a task for the head of operations, named "Jack". Jack will have to accept or reject the proposal submitted by the salesman, or decide that it requires a juridical advice.

Drag the **Accept/Reject** node template from the node template library and drop it on the graph.
It will already have some of the needed transitions and buttons pre-configured: Validate and Reject. You actually need another transition (Need juridical advice), which you will add manually in a future step.
![]({{file name='Simple_Workflow_003.png'}} ?w=400,border=true)

#### Configuring the Technical Validation Node

1.  Hover on the **Accept/Reject** node you just dropped and click on the icon ![]({{file name='editor_area.gif' space='studio' page='studio-icons-index'}}) that appears to open the node properties.
    ![]({{file name='Simple_Workflow_005.png'}} ?w=150,border=true,thumbnail=true)
2.  In the **General** tab edit the following properties:
  * Title: `Technical validation`
  * Due date expression: `CurrentDate.days(5)`
    ![]({{file name='technical-validation-general.png'}} ?w=450,border=true)
3. Update the assignee related fields:  
  * Assignees: Add a statical assignee ("Jack"). Click on the "Add" link in front of the "Assignees" field.
  * Assignees expression: `NodeVariables["assignees"]`
  * Grant permission to task assignees: Leave this field blank.
    ![]({{file name='technical-validation-assignee.png'}} ?w=450,border=true)
4.  Click on the **Save** button of the popup.
5.  Click on the **Save** button of the workflow feature on the bottom left corner.

### Configuring the Workflow Variables

During this task, we want to capture the head of operations' comment. We could use a node variable, but using a workflow variable is more appropriate as it will let us leverage the head of operations' comment value in the other nodes. For example, to display it to the other users in their own task validation form, so as to know what was the option of the head of operations when taking the decision. Getting the juridical advisor and salesman's comment will be needed at a later stage, so we will add workflow variables for their comments as well.

This variable will be named `hoo_comment`.

**To add the workflow variables:**

1.  Click on the **Variables** tab of the workflow.
2.  Add the head of operation's comment variable and name it `hoo_comment`. It is like editing a schema.
3.  Add the juridical advisor's comment variable: `juridical_comment`.
4.  Add the salesman's comment variable: `sales_comment`.
    ![]({{file name='Simple_Workflow_004.png'}} ?w=600,border=true)
5.  Click on **Save**.

### Configuring the Technical Validation Step Forms and Actions

The form lets the user edit some of the workflow's variables (either at workflow level or node level), and the buttons help the engine to know which transition to play after the node, depending on what the user clicked on.

#### Configuring the Form

The way you process the next step will depend on the UI you chose for your platform:

##### With Nuxeo Studio and JSF UI

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

##### With Studio Designer and Web UI

1.  Go back to the **Technical validation** node.
2. Click on the **Variables** tab.
   Add the **hoo_comment** to the right column.
   ![]({{file name='Simple_Workflow_006_1.png'}} ?w=600,border=true)
3.  Save you work.
4.  Click on the **Designer** button.
   ![]({{file name='link_view_designer.png'}} ?w=300,border=true)
5.  In the Layout tab, navigate to **Workflows**&nbsp;> **SalesProposalWorkflow** and click on **Technical validation**.
   ![]({{file name='vd_wf_technical_validation_layout1.png'}} ?w=200,border=true)
    A  page with the Technical validation task layout is displayed. If there is no layout, click on the **Configure** button.
    ![]({{file name='vd_wf_technical_validation_layout2.png'}} ?w=600,border=true)
5.  Delete the properties displayed in the layout using the delete icon once an element is selected.
    ![]({{file name='vd_wf_technical_validation_layout3.png'}} ?w=600,border=true)
6.  Add a field for the comment of the user who validates: Drag the **hoo_comment** field from the workflow variables schema from the element catalogue and drop it on the layout, using the **edit** mode.
    ![]({{file name='vd_wf_technical_validation_layout4.png'}} ?w=600,border=true)
7.  Change its label for `Head of operations comment`.
    ![]({{file name='vd_wf_technical_validation_layout5.png'}} ?w=600,border=true)

#### Setting up the Tasks Buttons

In Studio Modeler, the buttons that are shown on the form are configured on the **Resolution Actions** tab. Two are already available because of the template node you chose. You need to add a third one when the document requires juridical expertise.

1.  Click on **Add task button**.
2.  Fill in the button id `require_juridical_advice` and label `Require Juridical Advice?`.
3.  Let the box **Generate the condition for the transition** checked.
 ![]({{file name='Simple_Workflow_008_1.png'}} ?w=450,h=316, border=true)

#### Check the Transitions

Each button is automatically associated to a transition to define what should be done when the user clicks on the button. Transitions automatically get a condition, which is a system node variable called &ldquo;button&rdquo;. This variable is systematically updated with the id of the button used to process the task. It is useful to configure the behavior of the transitions.

1.  Finally, click on the **Transition** tab.
    Note that you could add more terms in the condition if necessary.
    ![]({{file name='technical-validation-transitions.png'}} ?w=450,border=true)
2.  Click on **Save**.

#### Connecting the Nodes

1.  Go back to the graph.
2.  Link the **Start** node to the **Technical validation** node, by pulling an arrow between the unique transition point of the Start node to the input point of the Technical validation node.
  ![]({{file name='Simple_Workflow_012.png'}} ?w=200,border=true,thumbnail=true)

    Note that you have three transition points on the technical validation node, ready to be pulled to the next nodes.

### Defining the Juridical Advice Node

Now that we have our Technical validation node set up, we need to create the nodes used for its possible transitions. First comes the Juridical advice node. As most operations have been described before, we will only comment this node&rsquo;s specificities.

#### Adding the Node

Drag the **Approve** node from the node template library and drop it on the graph.

![](https://www.lucidchart.com/publicSegments/view/54eefcaf-64e8-42a2-ad51-6ed50a00c10c/image.png ?w=300,border=true)

#### Configuring the Juridical Advice Node

1.  Open the node properties.
2.  Rename the node to `Juridical advice`.
3.  Define the assignees.

    This time we would like to ask a member of the &ldquo;Internal_ Lawyers&rdquo; user group to comment instead of a specific person. Therefore, instead of adding a specific username, you may simply add an assignee and use the prefix `group:` to specify a user group.
    * Assignees: `group:Internal_Lawyers`
    * Assignees expression: `NodeVariables["assignees"]`
4.  Grant the appropriate rights.
    The internal lawyers may not have the necessary rights to read and/or edit a sales proposal document. To avoid an exception to be thrown because of this, you need to grant them the appropriate rights on the document that needs juridical advice temporarily. This is what the **Grant permission to task assignees** field is used for. In this case, choose the **Read & Edit** permission to let them modify the document. Keep in mind that these rights will only be granted during the operations made on this node, and reverted to their previous state when following a transition to another node.

    ![]({{file name='juridical-advice-general.png'}} ?w=450,border=true)

#### Configuring the Form

The way you process the next step will depend on the UI you chose for your platform:

##### With Nuxeo Studio and JSF UI

1. Click on the **Variables** tab and add the **juridical_comment** and **hoo_comment** variables to the right column.
  ![]({{file name='Simple_Workflow_015_1.png'}} ?w=600,border=true)
2.  Click on the **Form** tab.
3.  Add the **juridical_comment** field the same way you did with the **Technical validation** node.
    ![]({{file name='juridical-comment.png'}} ?w=450,border=true)
4.  Add the **hoo_comment** as well, but make sure to set it as read only.
    ![]({{file name='hoo-comment.png'}} ?w=450,border=true)
5.  Click on **Save**.
    ![]({{file name='juridical-advice-form.png'}} ?w=450,border=true)

##### With Studio Designer and Web UI

1. Click on the **Variables** tab and add the **juridical_comment** and **hoo_comment** variables to the right column.
  ![]({{file name='Simple_Workflow_015_1.png'}} ?w=600,border=true)
2.  Save you work and click on the **Designer** button.
3.  In the Layout tab, navigate to **Workflows**&nbsp;> **SalesProposalWorkflow** and click on **Juridical Advice**.

  A page with the Juridical Advice task layout is displayed. If there is no layout, click on the **Configure** button.
4.  Delete the properties displayed in the layout using the delete icon once an element is selected.
5.  Add the **juridical_comment** field the same way you did with the **Technical validation** node, setting the property as required.
![]({{file name='vd_wf_technical_validation_layout6.png'}} ?w=300,border=true)
6.  Add the **hoo_comment** as well, but make sure to set it as read only by using the **view** mode.
![]({{file name='vd_wf_technical_validation_layout7.png'}} ?w=600,border=true)
7.  Click on **Save**.

#### Connecting the Nodes

1.  Go back on the graph, in Studio Modeler.
2.  Search for the Technical validation node&rsquo;s juridical advice requirement output point.
3.  Pull an arrow from there to the Juridical advice node&rsquo;s input point.
    ![]({{file name='Simple_Workflow_018.png'}} ?w=200,border=true,thumbnail=true)

### Defining the Proposal Update Node

You will now take care of the Proposal update node, which will be used in case Jack refuses the proposal.

#### Adding the Node

The **Approve** node will once again be the most appropriate. Pick it up and drop it on the graph.

#### Configuring the Proposal Update Node

1.  Open the node properties.
2.  Rename the node to `Proposal update`.
3.  Rename the directive: `Proposal update`.
4.  Define the Due date expression: `CurrentDate.days(5)`
5.  Define the assignees.
    Here comes another interesting situation: This task may not be assigned to a particular person, neither may it be assigned to a group. It needs to be assigned to the document's creator. To do so, a variable needs to be used instead of a hard coded value. The "Assignees" field may only receive usernames or groups, not variables.
    We will rather use the **Assignees expression** field and set this variable as value: `@{Document["dc:creator"]}`. This will return the document creator's username.
    Note that there are no specific rights to grant there as in this situation the document will be heading back to its creator.
    ![]({{file name='proposal-update-general.png'}} ?w=450,border=true)
6.  Rename the task.
    Calling the task an approval task could lead to confusion for the salesman that wants to submit an updated proposal. Thus, we will rename it.
    1.  Click on the **Resolution Actions** tab.
    2.  Click on the **Add task button** link.
      * id: `submit_updated_proposal`
      * Label: `Submit updated proposal`    
    ![]({{file name='Simple_Workflow_022_1.png'}} ?w=450,border=true,thumbnail=true)
7. Save.

#### Configuring the Form

The way you process the next step will depend on the UI you chose for your platform:

##### With Nuxeo Studio and JSF UI

1. Click on the **Variables** tab and add the **sales_comment** and **hoo_comment** variables to the right column.
![]({{file name='Simple_Workflow_020_1.png'}} ?w=450,border=true,thumbnail=true)
2.  Click on the **Form** tab.
3.  Add the **sales_comment** field as well as the **hoo_comment** field, the latter still in read only mode.
    ![]({{file name='Simple_Workflow_020_2.png'}} ?w=450,border=true,thumbnail=true)

##### With Studio Designer and Web UI

1. Click on the **Variables** tab and add the **sales_comment** and **hoo_comment** variables to the right column.
![]({{file name='Simple_Workflow_020_1.png'}} ?w=450,border=true,thumbnail=true)
2.  Save you work and click on the **Designer** button.
3.  In the **Layout** tab, navigate to **Workflows**&nbsp;> **SalesProposalWorkflow** and click on **Proposal Update**. A page with the Proposal Update task layout is displayed. If there is no layout, click on the **Configure** button
4.  Delete the properties displayed in the layout using the delete icon once an element is selected.
5.  Add the **sales_comment** field as well as the **hoo_comment** field, the latter still in read only mode.
    ![]({{file name='vd_wf_technical_validation_layout9.png'}} ?w=600,border=true)

#### Removing the Approve Transition

1. Go back to the Proposal update node, in Studio Modeler.
1.  Click on the **Transitions** tab.
    As you may see, deleting the task button in the previous step does not automatically remove the transition as well. We will do it manually then.
2.  Click on the icon ![]({{file name='edit_wiz.png'}}) next to the "approve" transition and click on **Remove** in the contextual menu.
    ![]({{file name='proposal-update-transitions.png'}} ?w=450,border=true)
3.  Confirm row deletion on the popup window.
4.  Click on **Save**.

#### Connecting the Nodes

1.  Go back to the graph.
2.  Search for the Technical validation node&rsquo;s reject output point.
3.  Pull an arrow from there to the Proposal update node&rsquo;s input point.
4.  Make sure you connect the Proposal update node&rsquo;s output point back to the Technical validation node&rsquo;s input point too.
    ![]({{file name='Simple_Workflow_024.png'}} ?w=300,border=true,thumbnail=true)

### Adding the End Node

This is almost finished. The last node needed is the end node. This node sets a possible ending to the workflow. In this situation only one end node will be used, but remember that you may use several end nodes if needed.

Pickup the **Stop** node from the node template library and drop it on the graph.

### Automating Document's Metadata Update

A document being accepted by the head of operations or the juridical services has to see its metadata updated. This is something we can achieve through an automation chain. Let's see how we will manage this situation.

1.  Open the **Stop** node properties.

  In the **General** tab, the "Automation chains" section lets you make use of an existing automation chain, that you may even edit by using the corresponding link. Automation chains can be launched at different moments, depending of your needs. The input operation chain will be played when entering the node, the output chain when the node is being left. In this situation the chain needs to be played from the start, but is not existing yet though.

2.  Click on the **Create** link of the "Input operation chain".
    ![]({{file name='empty-end-node.png'}} ?w=450,border=true)
    1.  Give an id to your chain : `SetAsApproved`.
        ![]({{file name='Simple_Workflow_026.png'}} ?w=350,border=true)
    1.  In the editor, add the **Document**&nbsp;> **Follow Life Cycle Transition** operation using drag and drop.
        ![]({{file name='empty-automation-chain.png'}} ?w=450,border=true)

    1.  Open it and set its value to `approve`.
        ![]({{file name='Simple_Workflow_028_1.png'}} ?w=450,border=true)

    1.  Save the chain and go back to your workflow graph.

3.  Now that the chain is created, you may have a look at your end node properties.
  The input operation chain has been automatically filled in thanks to our previous operation.
  ![]({{file name='end-node-setasapproved.png'}} ?w=450,border=true)

### Connecting the Nodes

1.  Link both the Technical validation node&rsquo;s accept output point **and** the Juridical advice&rsquo;s outpoint to the end node.
2.  Save your work.
    Your workflow is now complete. Enjoy it!
    Below is a screenshot of what it looks like once finished.

    ![]({{file name='Simple_Workflow_031.png'}} ?w=450,border=true)
