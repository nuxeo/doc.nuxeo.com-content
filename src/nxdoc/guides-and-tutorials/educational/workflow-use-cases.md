---
title: Workflow Use Cases
review:
    comment: ''
    date: ''
    status: ok
labels:
    - content-review-lts2015
confluence:
    ajs-parent-page-id: '28475557'
    ajs-parent-page-title: Educational
    ajs-space-key: NXDOC710
    ajs-space-name: Nuxeo Platform Developer Documentation — LTS 2015
    canonical: Workflow+Use+Cases
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC710/Workflow+Use+Cases'
    page_id: '28475546'
    shortlink: moCyAQ
    shortlink_source: 'https://doc.nuxeo.com/x/moCyAQ'
    source_link: /display/NXDOC710/Workflow+Use+Cases
history:
    - 
        author: Manon Lumeau
        date: '2016-07-20 13:45'
        message: emove children display macro
        version: '2'
    - 
        author: Alain Escaffre
        date: '2014-05-06 01:08'
        message: ''
        version: '1'

---
*   [Simple Workflow Example]({{page space='NXDOC710' page='Simple Workflow+Example'}})&nbsp;&mdash;&nbsp;<span class="smalltext">Company C has decided to be more rigorous on proposals sent by the sales team. A workflow has to be set up so that each proposal is reviewed by the head of operations, this one being able to decide of an additional juridical control.</span>
*   [Sub Workflow Example]({{page space='NXDOC710' page='Sub Workflow+Example'}})&nbsp;&mdash;&nbsp;<span class="smalltext">The subworkflow functionality is the ability to call a workflow from another workflow (creating inception-like workflows), and to pass it variables along the way. The main workflow is suspended while the subworkflow runs, and resumes when the subworkflow ends.</span>
*   [Workflow Escalation Rules Example]({{page space='NXDOC710' page='Workflow Escalation+Rules+Example'}})&nbsp;&mdash;&nbsp;<span class="smalltext">The company OhMyDoc has decided to set up a validation workflow for its press releases, with due dates and automatic escalation to the next step of the workflow after a defined period.</span>
*   [One step validation flow based on lifecycle only]({{page space='NXDOC710' page='One step+validation+flow+based+on+lifecycle+only'}})&nbsp;&mdash;&nbsp;<span class="smalltext">In this tutorial we will implement a chained workflow, that enables to validate a document in one step. We will make sure to store a few important dates on the document and we will log important steps into the document's history. Also, we will make sure that during this workflow, people receive consistent email notifications.</span>