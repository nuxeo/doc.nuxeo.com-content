---
title: Functional Tour
review:
    comment: ''
    date: '2016-12-21'
    status: ok
labels:
    - lts2016-ok
confluence:
    ajs-parent-page-id: '3345551'
    ajs-parent-page-title: One step validation flow based on lifecycle only
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Functional+tour
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Functional+tour'
    page_id: '3345801'
    shortlink: iQ0z
    shortlink_source: 'https://doc.nuxeo.com/x/iQ0z'
    source_link: /display/NXDOC/Functional+tour
tree_item_index: 100
history:
    -
        author: Arthur Gallouin
        date: '2011-06-01 15:48'
        message: ''
        version: '13'
    -
        author: Arthur Gallouin
        date: '2011-06-01 15:48'
        message: ''
        version: '12'
    -
        author: Arthur Gallouin
        date: '2011-06-01 15:45'
        message: ''
        version: '11'
    -
        author: Arthur Gallouin
        date: '2011-06-01 15:45'
        message: ''
        version: '10'
    -
        author: Arthur Gallouin
        date: '2011-06-01 15:44'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2010-08-25 17:23'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2010-08-18 10:59'
        message: ''
        version: '7'
    -
        author: Alain Escaffre
        date: '2010-07-28 02:15'
        message: ''
        version: '6'
    -
        author: Alain Escaffre
        date: '2010-07-28 02:14'
        message: ''
        version: '5'
    -
        author: Alain Escaffre
        date: '2010-07-28 01:39'
        message: ''
        version: '4'
    -
        author: Alain Escaffre
        date: '2010-07-28 01:38'
        message: ''
        version: '3'
    -
        author: Alain Escaffre
        date: '2010-07-28 01:19'
        message: ''
        version: '2'
    -
        author: Alain Escaffre
        date: '2010-07-28 01:19'
        message: ''
        version: '1'

---
Here is the use case we want to implement:

1.  The administrator creates a new workspace:
    ![]({{file name='Image 20.png'}} ?w=600, border=true)
2.  He assigns permissions "Edit" and "Workflow_validation" to user Jack:
    ![]({{file name='Image 10.png'}} ?w=600, border=true)
3.  He creates a new document by drag'n drop, this document is in state "Project":
    ![]({{file name='Image 11.png'}} ?w=600, border=true)
4.  He clicks on "Request validation" user action, on the top right part of the screen:
    ![]({{file name='request-validation-link.png'}} ?w=300, border=true )
5.  Jack logs in
6.  He goes to his dashboard and sees he has a new task:
    ![]({{file name='Image 14.png'}} ?w=600, border=true)
7.  He clicks on it and falls on the summary tab, with, at the end, the detail of the task. He can put a comment and the choose between "Approve" or "Reject".
    ![]({{file name='Image 15.png'}} ?w=600, border=true)
8.  He approves the task and then state of the document goes to "Approved":
    ![]({{file name='Image 16.png'}} ?w=600, border=true)
9.  If he goes to the history tab, he will see the event "Document Validated", as well as the history of the task creation, etc. ...
    ![]({{file name='Image 17.png'}} ?w=600, border=true)

<div class="row" data-equalizer data-equalize-on="medium">
<div class="column medium-6">&nbsp;</div>
<div class="column medium-6" style="text-align:right">[Implement the Validation Logic]({{page version='' space='nxdoc' page='implement-the-validation-logic'}})&nbsp;&rarr;</div>
</div>
