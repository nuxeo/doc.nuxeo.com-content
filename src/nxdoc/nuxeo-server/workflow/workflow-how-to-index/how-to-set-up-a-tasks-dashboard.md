---
title: How to Set Up a Tasks Dashboard
details:
    howto:
        excerpt: Learn how to manage a tasks dashboard.
        level: Advanced
        tool: Studio
        topics: 'Workflow, Dashboard'
labels:
    - task
    - dashboard
    - workflow
    - howto
    - workflow-component
    - excerpt
confluence:
    ajs-parent-page-id: '19235619'
    ajs-parent-page-title: Workflow How-To Index
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: How+to+Set+Up+a+Tasks+Dashboard
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/How+to+Set+Up+a+Tasks+Dashboard'
    page_id: '12914746'
    shortlink: OhDF
    shortlink_source: 'https://doc.nuxeo.com/x/OhDF'
    source_link: /display/NXDOC/How+to+Set+Up+a+Tasks+Dashboard
history:
    - 
        author: Guillaume Renard
        date: '2015-12-08 14:35'
        message: orma
        version: '15'
    - 
        author: Guillaume Renard
        date: '2015-12-08 14:34'
        message: ''
        version: '14'
    - 
        author: Manon Lumeau
        date: '2014-09-09 17:55'
        message: ''
        version: '13'
    - 
        author: Manon Lumeau
        date: '2014-09-09 17:37'
        message: ''
        version: '12'
    - 
        author: Solen Guitter
        date: '2013-09-11 15:19'
        message: ''
        version: '11'
    - 
        author: Solen Guitter
        date: '2013-05-23 10:05'
        message: ''
        version: '10'
    - 
        author: Alain Escaffre
        date: '2013-04-22 11:43'
        message: ''
        version: '9'
    - 
        author: Alain Escaffre
        date: '2013-04-22 11:43'
        message: ''
        version: '8'
    - 
        author: Alain Escaffre
        date: '2013-03-27 07:01'
        message: ''
        version: '7'
    - 
        author: Alain Escaffre
        date: '2013-03-27 07:00'
        message: ''
        version: '6'
    - 
        author: Alain Escaffre
        date: '2013-03-27 06:50'
        message: ''
        version: '5'
    - 
        author: Thibaud Arguillere
        date: '2013-03-16 05:06'
        message: ''
        version: '4'
    - 
        author: Alain Escaffre
        date: '2013-03-15 17:34'
        message: ''
        version: '3'
    - 
        author: Alain Escaffre
        date: '2013-03-15 17:29'
        message: ''
        version: '2'
    - 
        author: Alain Escaffre
        date: '2013-03-15 16:51'
        message: ''
        version: '1'

---
{{! excerpt}}

In Studio, we provide the Time Off Request template that sets up a workflow for scheduling time off. If you installed this template, you would see that it displays a new tab "Workflow" in which there are the tasks queues related to the time off workflow.

{{! /excerpt}}

![]({{file name='workflow_tab.png'}} ?w=500,border=true)

We provide some quick steps to follow using [Extension points]({{page page='how-to-contribute-to-an-extension'}}):

1.  **Activate Workflow tab**
    Add the following extension:

    ```

          MAIN_TABS

    ```

2.  **Choose the document type of the tasks that are created**
    When designing the workflow, you can choose the document type of the task on Tasks nodes. By default there is only one "TaskDoc". But you can contribute an other one in Studio, for example if you want the task to hold some business data of the document, so as to display it in the task listing (ex: when time off request was created, ...). To create another type of task, you can create a new document type, assign it the `Task` lifecycle, and the `task` facet, and all the schemas you want the task to hold.
3.  **Set additional data on the task** **object**
    If at step two you chose another document type for the task, you might want to populate the additional metadata with some values.

    1.  Create a listener that listens to "Document created" events.

    2.  Update task properties in it. To do so, you can

        *   either use the usual **Update Property** or **Update Properties** operations,

        *   or the dedicated&nbsp;**Workflow** > **Apply Mapping on Input Task** operation, with the name of the mapping.&nbsp;A mapping can be contributed in the **Advanced settings** > **XML Extensions** feature:

            ```

             common-asset:_destination
             common-asset:altTag
             common-asset:approvedCountries
             common-asset:dateTaken
             common-asset:retouched
             dc:title
             dc:expired

            ```

4.  **Create the content views for each specific tasks queues you want to see**
    List of tasks in your dashboard are content views. Only the query is a bit different, with the NXQL keyword "`nt:type`". Here is an example:

    ```
    nt:type = 'Task626' AND ecm:currentLifeCycleState != 'ended'
    ```

    The `nt:type` value comes from the node id that generates the task you want to list. You can see it on the [node editor general view]({{page space='studio' page='node-general-tab'}}). That way, you can do one content view per node if you want to separate the queues, or list several `nt:type` in the same content view, or don't rely on it at all...

    {{#> callout type='info' }}

    To have a link to the originating document in the content view, you can add a document suggest widget bound to the property `nt:targetDocumentId` (schema task)

    {{/callout}}
5.  **Configure the queues tabs**

    Finally, you want to display tabs with the content views inside. There is a specific convention to follow that will automatically match the tab and the content view, based on the content view ID, see the exemple below, better than a long paragraph:

    ```

        WORKFLOW_DASHBOARD

        timeOff_request_sub_tab

              hr_manager

        timeOff_request_sub_tab

                hr_manager

              hr_operational_managers

    ```

    * * *

    &nbsp;

<div class="row" data-equalizer="" data-equalize-on="medium">

<div class="column medium-6">{{#> panel heading="Related How-Tos"}}

*   [undefined]({{page}})&nbsp;
*   [How to Modify a Workflow Variable outside of Workflow Context]({{page page='how-to-modify-a-workflow-variable-outside-of-workflow-context'}})
*   [undefined]({{page}})&nbsp;
*   [How to Make a Simple Task Assignment to One or Many Users]({{page page='how-to-make-a-simple-task-assignment-to-one-or-many-users'}})&nbsp;
*   [How-To Index]({{page page='how-to-index'}})

{{/panel}}</div>

<div class="column medium-6">{{#> panel heading="Related Documentation"}}

*   [Workflow in Nuxeo Studio]({{page space='studio' page='workflow'}})
*   [Full-Text Queries]({{page page='full-text-queries'}})
*   [NXQL]({{page page='nxql'}})
*   [Variables Available in the Automation Context]({{page page='variables-available-in-the-automation-context'}})
*   [Workflow]({{page page='workflow'}})

{{/panel}}</div>

</div>