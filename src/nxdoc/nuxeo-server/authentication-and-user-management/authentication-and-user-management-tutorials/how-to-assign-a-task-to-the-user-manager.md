---
title: 'HOWTO: Assign a Task to the User Manager'
description: This page provides the instructions to assign a task according to the task performer properties.
review:
    comment: ''
    date: '2019-12-13'
    status: ok
tree_item_index: 410
toc: true
---

This tutorial explains how to dynamically assign a task to the user manager.

## Prerequisites

This tutorials assumes you have extended the user property schema with a `user:manager` property. All the instructions are provided in the [HOWTO: Add New Fields to the User Profile or Group Profile]({{page version='' space='nxdoc' page='how-to-add-new-fields-to-the-user-profile-or-group-profile'}}) Documentation page.

## Use Case

We will create a simple workflow template with only one validation task, sent to the document creator manager.

### Create a Document Property to Store the User Manager

To complete this use case, we will use a technical document property to store the manager information. For this tutorial, we will use the `File` schema, and create a `file_schema:manager` property, of type `User/Group`, with a restriction to be exclusively a User.

### Create the Users

- Create a user with username as `boss`.
- Create a user with username as `jdoe`, and set `boss` as `jdoe`'s manager

### Create a Workflow Template

- Create a workflow template with one validation task
- Assign the task to `jdoe`'s manager (`Assignees expression=Document["file_schema:manager"]`).

### Create a Automation Chain

- Create the following Automation chain:

```
- Context.FetchDocument
- Document.SetProperty:
    xpath: "file_schema:manager"
    save: "true"
    value: "@{CurrentUser[\"user:manager\"]}"
```

- Create the associated Event Handler, on the `Document Created` event for `File` document type. In our scenario, `CurrentUser` corresponds to the document creator (`dc:creator`)

### Generate the Workflow Task Layouts

- Navigate to **Nuxeo Studio Designer** > **UI** > **Layouts** > **Workflows** > **<Workflow Template Name>** and generate the task layout.

### Deploy your Configuration

- Hot Deploy your Nuxeo Studio Project
- Log in as `jdoe`
- Create a `File`
- Optionally, log in as another user to trigger the validation workflow
- Log out and log in as `boss`

User `boss` has a validation task!
