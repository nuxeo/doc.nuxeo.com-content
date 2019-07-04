---
title: Workflow Escalation Rules Example
review:
    comment: ''
    date: '2019-07-02'
    status: ok
labels:
    - lts2016-ok
    - workflow
    - grenard
    - escalation
    - excerpt
    - lts2017-ok
    - lts2019-ok
toc: true
confluence:
    ajs-parent-page-id: '19235786'
    ajs-parent-page-title: Workflow Use Cases
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Workflow+Escalation+Rules+Example
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Workflow+Escalation+Rules+Example'
    page_id: '14257473'
    shortlink: QY3Z
    shortlink_source: 'https://doc.nuxeo.com/x/QY3Z'
    source_link: /display/NXDOC/Workflow+Escalation+Rules+Example
tree_item_index: 300
history:
    -
        author: Solen Guitter
        date: '2015-10-08 15:26'
        message: emove mentions of 5.7.
        version: '23'
    -
        author: Manon Lumeau
        date: '2014-12-10 16:44'
        message: ''
        version: '22'
    -
        author: Bertrand Chauvin
        date: '2013-09-18 23:31'
        message: ''
        version: '21'
    -
        author: Solen Guitter
        date: '2013-09-11 12:28'
        message: ''
        version: '20'
    -
        author: Solen Guitter
        date: '2013-08-26 16:25'
        message: ''
        version: '19'
    -
        author: Bertrand Chauvin
        date: '2013-08-16 10:24'
        message: Simplified example to avoid using the cancel workflow operation
        version: '18'
    -
        author: Bertrand Chauvin
        date: '2013-08-14 10:17'
        message: Added smtp server pre requisite
        version: '17'
    -
        author: Bertrand Chauvin
        date: '2013-08-13 11:53'
        message: ''
        version: '16'
    -
        author: Solen Guitter
        date: '2013-08-08 16:27'
        message: Added required section
        version: '15'
    -
        author: Solen Guitter
        date: '2013-08-08 16:11'
        message: typos
        version: '14'
    -
        author: Solen Guitter
        date: '2013-08-08 16:08'
        message: Fixed typos and formated steps
        version: '13'
    -
        author: Solen Guitter
        date: '2013-08-08 14:52'
        message: ''
        version: '12'
    -
        author: Bertrand Chauvin
        date: '2013-08-08 13:43'
        message: 'Added how to achieve, fixed typos'
        version: '11'
    -
        author: Bertrand Chauvin
        date: '2013-08-07 18:19'
        message: Added pre requisites
        version: '10'
    -
        author: Bertrand Chauvin
        date: '2013-08-07 15:39'
        message: Fixed typo
        version: '9'
    -
        author: Bertrand Chauvin
        date: '2013-08-07 15:28'
        message: ''
        version: '8'
    -
        author: Bertrand Chauvin
        date: '2013-08-07 15:25'
        message: ''
        version: '7'
    -
        author: Bertrand Chauvin
        date: '2013-08-07 15:22'
        message: Removed restrictions
        version: '6'
    -
        author: Bertrand Chauvin
        date: '2013-08-07 15:11'
        message: ''
        version: '5'
    -
        author: Bertrand Chauvin
        date: '2013-08-07 12:32'
        message: ''
        version: '4'
    -
        author: Bertrand Chauvin
        date: '2013-08-06 18:31'
        message: Fixed typos
        version: '3'
    -
        author: Bertrand Chauvin
        date: '2013-08-06 18:28'
        message: ''
        version: '2'
    -
        author: Bertrand Chauvin
        date: '2013-08-06 18:28'
        message: ''
        version: '1'
---

## Use Case

{{! excerpt}}
The company OhMyDoc has decided to set up a validation workflow for its press releases, with due dates and automatic escalation to the next step of the workflow after a defined period.
{{! /excerpt}}

Here are the different steps of the use case:

1.  A user has to send a request to have his press release approved.
1.  The marketing manager (Jane) should review it within two days. She will be reminded every day that she still has this document to validate.
1.  If Jane has not reviewed the document within two days, then she is probably away: escalate the task to the general manager (Eric).
1.  Eric should review the document within two days.&nbsp;
1.  If Eric has not reviewed the document after two days, the workflow ends.
1.  If somebody validates the document, then publish it.
1.  If the document is rejected, the workflow ends.

### How Will We Achieve This?

We will take advantage of the escalation rules functionality. Three escalation rules will be used:

- One will take care of sending a reminder email to the marketing manager every day as long as the task is not completed.
- In case the marketing manager does not do any action before the due date, another rule will escalate the task to the general manager.
- The final rule will end the workflow if the general manager does not complete the task before the due date.

## Prerequisites

Before starting this tutorial, make sure you create two users on your platform with the following usernames: `Jane`, and `Eric`.

You also need a section called `press releases`, just below the Sections root (The Press Release section path should be `/default-domain/sections/press releases`).

If you want to receive the emails, make sure you have [set up a test SMTP server]({{page page='how-to-setup-a-test-smtp-server'}}).

## Creating the Workflow

1.  Go to **Workflow** > **Workflow definitions**.
2.  Click on **New**, fill in your workflow ID and label (and optionally description) then click on **Next**.

## Setting the Workflow's Availability

In our case, we want the workflow to be available only for File documents on which the user has the Edit permission. So we should do the following:

1. Go to the **Availability** tab.
1. "Current user has one of the permissions": select **Edit**.
1. "Current document has one of the types": select **File**.
1. Click on **Save**.

## Starting Designing the Graph

1. Go the **Graph** tab.
1. All workflows start with a **Start** node, so drag and drop it on on your graph.
1. Now drag and drop an **Accept/Reject** node from the User tasks. This will be used for the marketing manager's validation.
   Your graph should now look like the image below.
    {{!--     ### nx_asset ###
      path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Workflow Escalation Rules Example/graph-first-two-nodes.png
      name: graph-first-two-nodes.png
      server#screenshot#up_to_date
    --}}
    ![graph-first-two-nodes.png](nx_asset://543a3fa9-cb21-472c-81b9-97c49dd907aa ?w=400,border=true)

## Marketing Manager Validation Node

Let's define how the first step of the workflow, the marketing manager's approval, works.

### General Tab

Edit the **Accept/Reject** node by hovering over it and click on the edit icon ![]({{file name='editor_area.gif' space='studio' page='studio-icons-index'}}).

1.  Title: `Marketing manager validation`.
1.  Directive: "Please review this document for publication".
1.  Due date expression: `CurrentDate.days(2)`.
1.  Assignees: Use the **Add** button to add "Jane" (the marketing manager's username).
1.  Grant permission to task assignee: "Edit", so Jane can possibly modify the document.</br>
    Result should look like the image below:
    {{!--     ### nx_asset ###
      path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Workflow Escalation Rules Example/marketing-validation-node-general-tab.png
      name: marketing-validation-node-general-tab.png
      server#screenshot#up_to_date
    --}}
    ![marketing-validation-node-general-tab.png](nx_asset://3c773640-4c19-4f8a-8fdb-d660caff6890 ?w=400,border=true)

### Transitions Tab

In this tab, we will create the automation chains corresponding to the button the user clicked on.

1.  Click on the **Create** button corresponding to the&nbsp;`validate` transition.
    The Create Operation Chain window pops up.
2.  Name the chain: `validatePressRelease`.
3.  Fill the information like this:
    {{!--     ### nx_asset ###
      path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Workflow Escalation Rules Example/validatepressrelease-transitions.png
      name: validatepressrelease-transitions.png
      server#screenshot#up_to_date
    --}}
    ![validatepressrelease-transitions.png](nx_asset://bbe5837a-65d5-4e1c-b66a-a6d172a58479 ?w=400,border=true)
4.  Save your automation chain.

### Updating the Graph

1.  Go back to your workflow, in the **Graph** tab.
2.  Link the Start node to the&nbsp;`marketing manager validation` node entry point.
3.  Add an end node (Stop) on the graph.
4.  Link the&nbsp;`marketing manager validation` node's `validate` and `reject` transitions to this end node.
5.  Add another **Accept/Reject** node on the graph. This will become the general manager validation node.
6.  Save your workflow.</br>
    Your graph should now look like this:
    {{!--     ### nx_asset ###
      path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Workflow Escalation Rules Example/graph-before-first-escalation-rule.png
      name: graph-before-first-escalation-rule.png
      server#screenshot#up_to_date
    --}}
    ![graph-before-first-escalation-rule.png](nx_asset://ec7216bd-596e-483b-a6d7-004c3e16b197 ?w=400,border=true)

You may have realized that for now, we do not have any possibility to link the marketing manager's validation node to the general manager's one, or to have Jane be reminded to review the document. To handle this, we will need to add several elements:

- Another transition, so we can link the two nodes together. This transition should not have a corresponding button as it will be used only if the user is away.
- Escalation rules to remind Jane of her duty and, if needed, transfer the task to Eric.
- The automation chains that will be triggered by the escalation rules.

We will now see how to take care of these.

### Defining the Escalation Rules

#### Transitions Tab

If you already created workflows, you may know that by going into the Form tab, it is possible to create a button the user can click on, and generate a corresponding transition so you can tell which node to go to when following it.

However, in this case, we need a transition but no button. How could the user click on it if he is away? Therefore, we will simply create a transition:

1.  Go back to the Marketing manager validation node and then to the **Transitions** tab.
2.  Click on the **Add transition** button.
3.  Name your new transition `escalate`.</br>
    From now on, a third transition point is available on the marketing manager validation node.

You may see that the condition for this transition defaults to `true`. Every time a user completes a task by clicking on a button, the workflow engine will evaluate **ALL** transition conditions. **ANY** condition evaluated to true will be followed. Back to our example, this means that leaving the default value would end up in an escalation if the user clicks on a button, which is the exact contrary of what we want to achieve.

To avoid this situation, we need to activate the **Exclusive node** option. **This option tells the node to follow only the first transition that has been evaluated to true**. Back to our example, what does that imply?

- If the user clicks on a button, the condition for this button will be evaluated to `true`. The workflow engine will follow this transition without evaluating the others.
- If the user is away, when the escalation rule will be triggered, all conditions will be evaluated to `false` except for the escalation transition we just added. The workflow engine will then follow this transition.

Wow, this is perfectly adapted to our use case! Let's do it then!

#### Activating the Exclusive Node Option

1.  On the marketing manager's validation node, go to the **Transitions** tab.
2.  Check the **Exclusive node** option.
3.  Save the node properties and the graph.</br>
    That's it! Our transition is now secured.

Now, we should take care of transferring the task to the general manager if the user is away on to the escalation rules.

#### Creating the Escalation Rules

A little theory about escalation rules: this functionality is used on nodes that require a user action, when the user has not yet completed the task. It automatically executes automation chains depending on conditions you decide. A scheduler will check these rules every 5 minutes by default at a fixed time, when the minutes' number ends with 5 or 0 (thus not depending on when the server has been started). It will execute the rules once or multiple times depending on the parameters you have chosen.

We need two rules for this node: one that reminds Jane to review the document every day, and one that will transfer the task to Eric in case Jane is away. We will start off with the reminder.

##### Reminder Escalation Rule

Edit the `Marketing managers validation` node, go to the **Escalation Rules** tab and click on the **Add escalation rule** button:

1.  **Id**:&nbsp;`pressReleaseReviewReminder`
1.  **Condition**: if you paid close attention to what we did with transitions, you probably already understood that this situation has similarities and that leaving the default condition (true) will cause the rule to be executed as soon as the scheduler will check it. In this case, we need to change it. Replacing "true" with an [MVEL expression]({{page page='use-of-mvel-in-automation-chains'}}) will do the trick. In our case, we will use the following:

    ```
    Integer.parseInt(CurrentDate.format("Hm")) >= 2354 && Integer.parseInt(CurrentDate.format("Hm")) <= 2359
    ```
    This means that if the time of day is between 11:54 p.m. and 11:59 p.m. then we should execute the corresponding automation chain. The scheduler will be executed at 11:55PM and run the chain at this moment.
1.  **Multiple execution:** check this box, as this will make sure Jane will be reminded every day. Otherwise the chain would only be executed once.
1.  **Chain**: we will create a new chain for this, click on the **Create** button and and name it `pressReleaseReviewReminder`.
1.  The chain should be configured as following:
    <div class="table-scroll">
      <table class="hover">
        <tbody>
        <tr>
        <th colspan="1">Operation</th>
        <th colspan="1">Parameters</th>
      </tr>
      <tr>
        <td colspan="1">Fetch > Context document(s)</td>
        <td colspan="1">&nbsp;</td>
      </tr>
      <tr>
        <td colspan="1">Notification > Document.Mail</td>
        <td colspan="1">

        **From:**
        no-reply@ohmydoc.com
        <br/>
        **Message:**
        This is a friendly automated reminder.
        Please remember that you should review the following press release:
        <a \href="${docUrl}">${Document['dc:title']}</a>
        <br/>
        **Subject:**
        [Reminder] Please review `${Document['dc:title']}`
        <br/>
        **To:**
        `@{Fn.getEmail("Jane")}`
        <br/>
        **HTML:**
        `true`

        </td>
      </tr>
      </tbody>
      </table>
    </div>
1.  Click on **Save**.</br>
    That's it! Our first rule is ready.

Now we'll go for the second one.

##### Transfer Escalation Rule

Go back to the `Marketing manager validation` node, on the **Escalation Rules** tab and **Add escalation rule** button:

1. **Id**:&nbsp;`pressReleaseReviewEscalation`
1. **Condition**: Once again we will replace `true` with an [MVEL expression]({{page page='use-of-mvel-in-automation-chains'}}):

  ```
  @{CurrentDate.calendar.compareTo(Context["taskDueTime"])>0}
  ```

  This means that if today's date is superior to the task's due date, then we should execute the corresponding automation chain.
1. **Multiple execution:** Leave this box unchecked, this time there is no need to execute it several times.
1. **Chain**: we will create a new chain for this, click on **Create** and name it `pressReleaseReviewEscalation`.
1. The chain should be configured as following:

  <div class="table-scroll"><table class="hover">
  <tbody>
    <tr>
      <th colspan="1">Operation</th>
      <th colspan="1">Parameters</th>
    </tr>
    <tr>
      <td colspan="1">Fetch > Context document(s)</td>
      <td colspan="1">&nbsp;</td>
    </tr>
    <tr>
      <td colspan="1">Workflow context > Workflow.GetOpenTasks</td>
      <td colspan="1">&nbsp;</td>
    </tr>
    <tr>
      <td colspan="1">Fetch > Repository.GetDocument</td>
      <td colspan="1">
        **Value:** `@{This.get(0).id}`
      </td>
    </tr>
    <tr>
      <td colspan="1">Workflow Context > Complete task</td>
      <td colspan="1">&nbsp;</td>
    </tr>
  </tbody>
  </table>
  </div>

  It is not possible to simply change the assignee of a particular task. To do so we use:
  - The **Workflow context > Get open tasks** operation to retrieve all open tasks for the current document.
  - The **Fetch > Document** operation with a parameter returning only the first task found.
  - The **Workflow Context > Complete task** operation to simulate a user action and resume the workflow. In our case, as we did not set any parameter to it, the workflow engine will review the possible transitions and execute the escalation transition since it is the only one set to "true".

1. Click on **Save**.</br>
    And we're done with this node.

Next in the list is the general manager validation node.

## General Manager Validation Node

First things first: we haven't linked the nodes together. We will then take time to finalize the graph design.

### Updating the Graph

1.  Link the&nbsp;`escalate` transition of the `Marketing manager validation` node to the input point of the general manager validation node (Accept/Reject node).
2.  Add an end node (Stop) to the graph.
3.  Link the general manager validation node output transitions to the end node you just added.
    Your graph should now look like this:
    {{!--     ### nx_asset ###
      path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Workflow Escalation Rules Example/graph-almost-finalised.png
      name: graph-almost-finalised.png
      server#screenshot#up_to_date
    --}}
    ![graph-almost-finalised.png](nx_asset://b4104a48-7543-45e1-92f0-0692c0eb7fa9 ?w=400,border=true)
4.  Save the graph.

Good! On to the node edition.

### General Tab

Hover your mouse over the Accept/Reject node and click on the edit icon ![]({{file name='editor_area.gif' space='studio' page='studio-icons-index'}}):
1. Title: `General manager validation`.
1. Directive: "Automatic task transfer: Please review this document for publication".
1. Due date expression: `CurrentDate.days(2)`.
1. Assignees: Use the "Add" button to add "Eric" (the general manager's username).
1. Grant permission to task assignee: "Edit", so Eric can modify the document if needed.</br>
    Result should look like the image below:
    {{!--     ### nx_asset ###
      path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Workflow Escalation Rules Example/general-manager-node-general-tab.png
      name: general-manager-node-general-tab.png
      server#screenshot#up_to_date
    --}}
    ![general-manager-node-general-tab.png](nx_asset://9cf437e8-9ef4-4132-acff-602d26a750f6 ?w=400,border=true)

### Transitions Tab

Similarly to the previous node, if Eric validates the document we want to have it published.

1.  Go to the **Transitions** tab.
1. Check the **exclusive node** option.
1.  Select the&nbsp;`validatePressRelease` chain for the `validate` transition.
1.  Add a new transition that you may call `endWorkflow` and leave the default condition.

### Escalation Rules Tab

This time if Eric is away or too busy, we want to end the review. Our escalation rule and the associated automation chain should reflect just this.

On the **Escalation Rules** tab, click on the **Add escalation rule** button:
1.  **Id**: `endReview`
2.  **Condition**: Same [MVEL expression]({{page page='use-of-mvel-in-automation-chains'}}) than in the previous node:
  ```
  @{CurrentDate.calendar.compareTo(Context["taskDueTime"])>0}
  ```
3.  **Multiple execution:** Leave this box unchecked.
4.  **Chain**: Select the `pressReleaseReviewEscalation` chain previously created. This will end the task. The workflow engine will then follow the `endWorkflow` transition which will be the only one evaluated to true by the escalation rule.
5.  Save your modifications.

As you may have realized, the principle here is just the same than the one we used before: adding a transition, activating the exclusive node option and using an escalation rule to follow the added transition on to the next node. To make it fully functional though, we should take care of an important detail: linking the transition to the end node. A final update in our graph and we will be finished.

### Final Graph Update

Now that you are back on your graph, link the general manager's node `endWorkflow` transition to the end node. Your graph should now look like this:
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Workflow Escalation Rules Example/graph-final.png
    name: graph-final.png
    server#screenshot#up_to_date
--}}
![graph-final.png](nx_asset://18d09633-b7bb-488d-8db6-20e8f176a046 ?w=400,border=true)

## Configuring Workflow Layouts

The last step is to configure the layouts to be displayed on your interface, to do so:

1. On the graph tab, click on **Configure Layouts in Designer**. </br>
    You arrive on the `pressreleasevalidation` workflow screen on Designer side.
1. Click on **Configure Missing Layouts**.
1. Save your changes.

You are all done! You can now [deploy your Studio project on your instance]({{page page='nuxeo-dev-tools-extension'}}#hot-reload) and have fun with your brand new workflow!

&nbsp;
