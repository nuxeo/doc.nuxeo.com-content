---
title: 'HOWTO: Assign a Task to the User Manager'
description: This page provides the instructions to assign a task according to the task performer properties.
details:
    howto:
        excerpt: This page provides the instructions to assign a task according to the task performer properties.
        level: Intermediate
        tool: Studio
        topics: 'LDAP, Workflow'
review:
    comment: ''
    date: '2019-12-19'
    status: ok
tree_item_index: 410
toc: true
---

This tutorial explains how to dynamically assign a task to the user manager.

## Prerequisites

- Start by following this [HOWTO: Add New Fields to the User Profile or Group Profile]({{page version='' space='nxdoc' page='how-to-add-new-fields-to-the-user-profile-or-group-profile'}}).
- On your Studio project, in **Modeler** > **External Templates**, install the **Default Nuxeo Platform Configuration** template.

## Use Case

We create a simple workflow template with only one validation task, sent to the document creator manager.

### Create a Document Property to Store the User Manager

To complete this use case, we use a technical document property to store the manager information. For this tutorial, we will use the `File` schema, and create a `file_schema:manager` property, of type `User/Group`, with a restriction to be exclusively a User.

To do so:
1. In **Modeler**, go to **Content Model** > **Document Types** and click on **File**.
1. Go to the **Schema** tab and add a new field `manager`, type `User/Group`.
1. Save your modifications.

### Create a Workflow Template

1. In **Modeler**, go to **Workflow** and create a new workflow:
    - Feature ID: `WF_Automatic_Task_Assignment`
    - Label: `Automatic Task Assignment`
1. Click on **Ok**
1. Go to the **Graph** tab and drag and drop an **Approve** task.
1. Edit the task, and on the field **Assignees expression** put:
    ```
    Document["file_schema:manager"]
    ```
1. Click on **Save**
1. Connect the Start and End points to the approve task and save your modifications.

### Create the Automation Chain

1. In **Modeler**, go to **Automation** > **Automation Chains** and create a new chain `Set_WorkflowManager`.
1. Click to **Switch editor** at the top of the page and copy/paste the following chain:
    ```
    - Context.FetchDocument
    - Document.SetProperty:
        xpath: "file_schema:manager"
        save: "true"
        value: "@{CurrentUser[\"user:manager\"]}"
    ```
1. Save your modifications.

### Create the Event Handler

1. In **Modeler**, go to **Automation** > **Event Handlers** and create a new event handler `EH_AC_SetAssigneeTask`:
    - **Events**: Document created
    - **Current document has one of the type**: File
    - **Chain or script**: Set_WorkflowManager
1. Save your modifications.

### Generate the Workflow Task Layouts

1. Navigate to **Designer** > **UI** > **Layouts** > **Workflows** > **<Workflow Template Name>** and click on **Configure Missing Layouts**.
1. Save your modifications.

### Deploy and Test your Configuration

1. [Deploy your changes]({{page version='' space='nxdoc' page='nuxeo-dev-tools-extension'}}#hot-reload).
1. Create a user `boss` and a user `jdoe`, and set `boss` as `jdoe`'s manager
1. Log in as `jdoe` and create a `File` document type.
1. Launch the **Automatic Task Assignment** workflow on it.
1. Log out and log in as `boss`.</br>
  The user `boss` has a validation task!
