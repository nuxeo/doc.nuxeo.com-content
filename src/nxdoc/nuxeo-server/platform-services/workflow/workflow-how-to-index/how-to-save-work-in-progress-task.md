---
title: 'HOWTO: Add a "Save Work in Progress" Option on a Task'
review:
    comment: ''
    date: '2019-06-05'
    status: ok
details:
    howto:
        excerpt: 'Learn how to implement a "save work in progress" option without completing a workflow task.'
        level: Intermediate
        tool: Studio
        topics: 'Workflow, Tasks'
labels:
    - task
    - workflow
    - howto
toc: true
tree_item_index: 710
---

{{! excerpt}}
While dealing with a workflow task, you may be interrupted, but you don't want to lose the review that you started. This how-to will teach you how to implement an option so that work in progress can be saved, giving more flexibility to users to complete it at their own pace.
{{! /excerpt}}

## Prerequisites

Start by [creating a group]({{page space='userdoc' page='administration'}}#creating-a-group) of users named `reviewers`; they will be in charge of reviewing the task.

## Create a Workflow

1. Go to **Workflow** > **Process Definitions** and click on **New**. Name it `importantReview` and click on **Ok**.
1. On the Variables tab, Add a new variable `reviewComment`. Click on **Edit** next to this new variable and click on "Required".
    {{!--     ### nx_asset ###
      path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/HOWTO: Add a "Save Work in Progress" option on a task/reviewComment-required.png
      name: reviewComment-required.png
      studio_modeler#screenshot#up_to_date
    --}}
    ![reviewComment-required.png](nx_asset://7c25a698-a9c1-4649-99f5-dffb7e5be429 ?w=350,border=true)
1. On the Graph tab, select an Accept/Reject user task and drag and drop it on the graph.
1. Click on the **Edit** button next to the task. Fill in the General tab as shown below:
    {{!--     ### nx_asset ###
      path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/HOWTO: Add a "Save Work in Progress" option on a task/general-tab-node.png
      name: general-tab-node.png
      studio_modeler#screenshot#up_to_date
    --}}
    ![general-tab-node.png](nx_asset://36f77e9a-97cf-44c1-aac3-ad4a17338280 ?w=350,border=true)
1. On the Variables tab, activate the `reviewComment` variable by moving it to the right box.
    {{!--     ### nx_asset ###
      path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/HOWTO: Add a "Save Work in Progress" option on a task/variables-tab-node.png
      name: variables-tab-node.png
      studio_modeler#screenshot#up_to_date
    --}}
    ![variables-tab-node.png](nx_asset://33abe3dc-dd24-4236-b405-4830b0287137 ?w=350,border=true)
1. On the Task Buttons tab, add a task button:
      - id: `saveprogress`</br>
      - Label: save progress</br>
      - Uncheck the box **Validate Form** of this new button.
  {{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/HOWTO: Add a "Save Work in Progress" option on a task/validate-form-node.png
    name: validate-form-node.png
    studio_modeler#screenshot#up_to_date
   --}}
   ![validate-form-node.png](nx_asset://9fa0bc42-94fe-45c0-b32a-78a49b773be3 ?w=350,border=true)
1. Go to Transitions tab, to make sure that the 3 transitions are automatically created.
1. Click on **Save** on the popup.
1. On the graph, link the `saveProgress` transition back to the beginning of the Document Review task as you want to go back to it when you click on the Save Work in Progress button.
    You should end up with a graph like this:
    {{!--     ### nx_asset ###
      path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/HOWTO: Add a "Save Work in Progress" option on a task/graph-document-review-done.png
      name: graph-document-review-done.png
      studio_modeler#screenshot#up_to_date
    --}}
    ![graph-document-review-done.png](nx_asset://916681fc-7e17-44c6-9302-908d57514bc9 ?w=350,border=true)

You can now click on **Configure layouts in Designer** at the top-right of your screen to go directly to the Designer side.

## Configure the Task Layout

1. Once you are on the Document Review layout, keep only the `Review Comment` property and delete the others by clicking on the trash icon next to each of them.
  {{!--     ### nx_asset ###
      path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/HOWTO: Add a "Save Work in Progress" option on a task/document-review-layout-config.png
      name: document-review-layout-config.png
      studio_designer#screenshot#up_to_date
  --}}
  ![document-review-layout-config.png](nx_asset://0eae005e-b513-467e-8318-24926377cc45 ?w=350,border=true)

1. Users may want to replace the text input (1 line max) with a textarea, made for larger text. It's just about changing the `<nuxeo-input>` element to `<nuxeo-textarea>` in the layout configuration after clicking on  **switch to code** at the bottom of the editor screen. </br>
    It should look like this:
  {{!--     ### nx_asset ###
      path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/HOWTO: Add a "Save Work in Progress" option on a task/textarea-reviewComment-designer.png
      name: textarea-reviewComment-designer.png
      studio_designer#screenshot#up_to_date
   --}}
   ![textarea-reviewComment-designer.png](nx_asset://1b647c3c-74ae-4246-8cc0-95ff877168f7 ?w=350,border=true)

1. That's it! Save your changes and deploy your configuration.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/HOWTO: Add a "Save Work in Progress" option on a task/task-save-progess-done.png
    name: task-save-progess-done.png
    1.1.3#screenshot#up_to_date
--}}
![task-save-progess-done.png](nx_asset://f5682958-8429-4530-950f-6228db7525ed ?w=350,border=true)

{{#> callout type='info' }}
When saving work in progress, it triggers again the output chain, input chain and the task assigned email.
{{/callout}}

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related How-Tos'}}

- [HOWTO: Modify a Workflow Variable outside of Workflow Context]({{page page='how-to-modify-a-workflow-variable-outside-of-workflow-context'}})
- [HOWTO: Set a Default Value on a Date Field of a Task Form]({{page space='nxdoc' page='how-to-set-a-default-value-on-a-date-field-of-a-task-form'}})
- [How-To Index]({{page page='how-to-index'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [Workflow in Nuxeo Studio]({{page space='studio' page='workflow'}})
- [Variables Available in the Automation Context]({{page page='variables-available-in-the-automation-context'}})
- [Workflow]({{page page='workflow'}})

{{/panel}}</div></div>
