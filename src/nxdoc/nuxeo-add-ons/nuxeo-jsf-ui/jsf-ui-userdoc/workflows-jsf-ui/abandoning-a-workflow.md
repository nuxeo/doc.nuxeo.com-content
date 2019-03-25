---
title: Abandoning a Workflow
review:
    comment: ''
    date: '2018-02-20'
    status: ok
labels:
    - lts2016-ok
    - workflow
    - content-review-lts2017
confluence:
    ajs-parent-page-id: '2392410'
    ajs-parent-page-title: Workflows
    ajs-space-key: USERDOC
    ajs-space-name: Nuxeo Platform User Documentation
    canonical: Abandoning+a+Workflow
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC/Abandoning+a+Workflow'
    page_id: '2392412'
    shortlink: XIEk
    shortlink_source: 'https://doc.nuxeo.com/x/XIEk'
    source_link: /display/USERDOC/Abandoning+a+Workflow
tree_item_index: 500
history:
    -
        author: Solen Guitter
        date: '2016-08-30 12:45'
        message: ''
        version: '15'
    -
        author: Manon Lumeau
        date: '2015-09-18 16:14'
        message: ''
        version: '14'
    -
        author: Manon Lumeau
        date: '2015-09-18 16:03'
        message: ''
        version: '13'
    -
        author: Manon Lumeau
        date: '2014-12-02 18:32'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2013-11-25 16:23'
        message: ''
        version: '11'
    -
        author: Solen Guitter
        date: '2013-10-22 18:16'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2012-09-12 16:26'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2012-09-12 16:26'
        message: Updated content with latest version workflow
        version: '8'
    -
        author: Solen Guitter
        date: '2011-11-24 10:24'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2011-06-06 14:42'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2011-05-24 12:17'
        message: fixed broken steps
        version: '5'
    -
        author: Solen Guitter
        date: '2011-05-24 12:16'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2010-05-28 12:16'
        message: ''
        version: '3'
    -
        author: Solen Guitter
        date: '2010-05-27 15:41'
        message: added screenshot
        version: '2'
    -
        author: Solen Guitter
        date: '2010-04-29 18:08'
        message: ''
        version: '1'

---
Only the workflow initiator and administrators can abandon a workflow.

Abandoning a workflow means canceling it. When you abandon a workflow, the lifecycle state of the document does not change. The modifications made on the document during the workflow are kept.

Abandoning the workflow can be done at any time. The workflow initiator can also decide to cancel the workflow when he gets an update request from the first reviewer. When the first reviewer [rejects the document]({{page page='serial-document-workflow'}}#approve-reject-document), it goes back to the initiator, who should then either edit the document and resubmit it, or cancel the review.

**To abandon a workflow:**

1.  Click on the **Workflow** tab of the document.
    ![]({{file name='workflow-choose-reviewers-task-workflow-tab.png' page='serial-document-workflow'}} ?w=600,border=true)
2.  Click on the **Abandon** button.
    A confirmation window pops up.
3.  Click on **OK** to confirm abandon.
    The workflow is immediately canceled. The lifecycle state of the document does not change and the modifications done during the workflow are still saved.

**To cancel a workflow after an update request:**

1.  From your dashboard, click on the document for which you have an update task in the "My tasks" gadget.
    The Summary tab of the document is displayed. It shows a "Your tasks" section.
    ![]({{file name='workflow-back-to-intiator.png'}} ?w=350,border=true)
2.  Click on the **Cancel the review** button.
    The workflow is immediately stopped. The lifecycle state of the document does not change and the possible modifications done during the workflow are still saved.


<div class="row" data-equalizer data-equalize-on="medium">
<div class="column medium-6">
{{#> panel heading='Related Documentation'}}

- [Workflows user documentation]({{page page='workflows-jsf-ui'}})
- [Case Management with the Nuxeo Platform]({{page page='case-management-with-the-nuxeo-platform'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Customizing the workflow'}}

- [Workflow in Nuxeo Studio]({{page space='studio' page='workflow'}})
- [Workflow developer documentation]({{page space='nxdoc' page='workflow'}})

{{/panel}}</div></div>
