---
title: Starting a Serial Workflow
labels:
    - last-review-20141202
    - workflow
confluence:
    ajs-parent-page-id: '21299439'
    ajs-parent-page-title: Serial Document Workflow
    ajs-space-key: USERDOC60
    ajs-space-name: Nuxeo Platform User Documentation — 6.0
    canonical: Starting+a+Serial+Workflow
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC60/Starting+a+Serial+Workflow'
    page_id: '21299504'
    shortlink: MAFFAQ
    shortlink_source: 'https://doc.nuxeo.com/x/MAFFAQ'
    source_link: /display/USERDOC60/Starting+a+Serial+Workflow
history:
    - 
        author: Solen Guitter
        date: '2015-09-09 08:52'
        message: dd precisions about lock status during workflo
        version: '26'
    - 
        author: Solen Guitter
        date: '2015-02-06 14:20'
        message: Add note about tasks assigned to a group and update related pages
        version: '25'
    - 
        author: Manon Lumeau
        date: '2014-12-02 15:57'
        message: ''
        version: '24'
    - 
        author: Solen Guitter
        date: '2013-11-25 15:29'
        message: ''
        version: '23'
    - 
        author: Solen Guitter
        date: '2013-11-25 15:21'
        message: Fixed typos
        version: '22'
    - 
        author: Solen Guitter
        date: '2013-11-03 16:03'
        message: 'Updated screenshots for 5.8, added link to task delegation'
        version: '21'
    - 
        author: Solen Guitter
        date: '2013-11-03 15:20'
        message: ''
        version: '20'
    - 
        author: Solen Guitter
        date: '2013-10-22 18:15'
        message: ''
        version: '19'
    - 
        author: Solen Guitter
        date: '2013-09-30 14:07'
        message: ''
        version: '18'
    - 
        author: Solen Guitter
        date: '2013-01-18 12:45'
        message: ''
        version: '17'
    - 
        author: Solen Guitter
        date: '2012-10-02 15:50'
        message: ''
        version: '16'
    - 
        author: Solen Guitter
        date: '2012-09-12 16:21'
        message: Migrated to Confluence 4.0
        version: '15'
    - 
        author: Solen Guitter
        date: '2012-09-12 16:21'
        message: Updated content with latest version workflow
        version: '14'
    - 
        author: Solen Guitter
        date: '2012-01-19 16:55'
        message: Updated screenshots
        version: '13'
    - 
        author: Solen Guitter
        date: '2011-11-24 10:11'
        message: Removed 5.4 references
        version: '12'
    - 
        author: Solen Guitter
        date: '2011-11-24 10:09'
        message: ''
        version: '11'
    - 
        author: Solen Guitter
        date: '2011-06-06 11:47'
        message: ''
        version: '10'
    - 
        author: Solen Guitter
        date: '2011-05-24 12:15'
        message: ''
        version: '9'
    - 
        author: Solen Guitter
        date: '2011-05-24 12:15'
        message: ''
        version: '8'
    - 
        author: Solen Guitter
        date: '2011-05-24 12:06'
        message: ''
        version: '7'
    - 
        author: Solen Guitter
        date: '2011-05-24 12:06'
        message: updated with 5.4.2 new features
        version: '6'
    - 
        author: Wojciech Sulejman
        date: '2010-08-30 15:53'
        message: added screenshots
        version: '5'
    - 
        author: Solen Guitter
        date: '2010-05-27 10:26'
        message: added screenshots
        version: '4'
    - 
        author: Solen Guitter
        date: '2010-05-26 19:03'
        message: added link
        version: '3'
    - 
        author: Solen Guitter
        date: '2010-05-26 18:26'
        message: added link
        version: '2'
    - 
        author: Solen Guitter
        date: '2010-04-29 18:08'
        message: ''
        version: '1'

---
You need to have writing or management rights to start a workflow.

To start a workflow, you need to select the workflow type, reviewers and review type.

**To start a workflow:**

1.  On the **Summary** tab, in the **Workflow process** section, select the workflow type you want to start and click on the **Start** button.
    ![]({{file name='summary-tab-no-workflow.png'}} ?w=350,border=true)
    The form to select the reviewers and start the workflow is displayed on the **Summary** tab. A **Show graph view** button is also available, that displays the workflow route in a pop-up window.
    ![]({{file name='workflow-choose-reviewers-task-summary.png'}} ?w=650,border=true)
    A **Workflow** tab is now available on the document from which you can select the reviewers, [delegate your task]({{page page='delegating-a-task'}}), show the graph view but also see the current and previous tasks and [abandon the workflow]({{page page='abandoning-a-workflow'}}).
    ![]({{file name='workflow-choose-reviewers-task-workflow-tab.png'}} ?w=650,border=true)
2.  Add users on the workflow:
    1.  In the **Participants on the review** field, type the name of a user or a group.
        The users and groups corresponding to the letters typed are displayed.
        ![]({{file name='workflow-reviewer-selection.png'}} ?w=350,h=196,border=true)
    2.  Click on the user you want to add on the workflow.
    3.  Repeat these two steps to add all the participants to the review.
    4.  Optionally, drag and drop the participants to change their order on the workflow, or the icon&nbsp;![]({{file name='action-delete.png' page='icons-index'}}) to remove them.{{{multiexcerpt 'tasks-assigned-to-group' page='Participating to a Serial Workflow'}}}
3.  Select the type of review you want to do:
    *   Simple review: the document's state will not change.
    *   Validation review: when all the reviewers have approved the document, it goes to the **Approved** life cycle state.
        ![]({{file name='workflow-review-type-selection.png'}} ?w=350,border=true)
4.  Type a comment, indicating the purpose of the review for instance.
5.  Click on the **Start the review** button to let participants approve or reject the document.
    Only the **Show graph view** button remains on the **Summary** tab. The document remains unlocked.
    On the **Workflow** tab, the current task and the previous ones are displayed.
    ![]({{file name='workflow-choose-participants-done.png'}} ?w=650,border=true)
    The first participant(s) on the review get(s) an email and have his (their) task displayed on his (their) dashboard.

* * *

&nbsp;

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation:'}}

*   [Participating to a Serial Workflow]({{page page='participating-to-a-serial-workflow'}})
*   [Delegating a Task]({{page page='delegating-a-task'}})
*   [Reassigning a Task]({{page page='reassigning-a-task'}})
*   [Abandoning a Workflow]({{page page='abandoning-a-workflow'}})
*   [Parallel Document Workflow]({{page page='parallel-document-workflow'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Other Related Documentation'}}

*   [Workflow How-To Index]({{page space='nxdoc60' page='workflow-how-to-index'}})
*   [Workflow Studio documentation]({{page space='studio' page='workflow'}})
*   [Workflow developer documentation overview]({{page space='nxdoc60' page='workflow-overview'}})

{{/panel}}</div></div>