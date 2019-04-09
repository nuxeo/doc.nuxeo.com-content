---
title: Functional tour
review:
    comment: ''
    date: ''
    status: ok
labels:
    - content-review-lts2015
confluence:
    ajs-parent-page-id: '28475680'
    ajs-parent-page-title: One step validation flow based on lifecycle only
    ajs-space-key: NXDOC710
    ajs-space-name: Nuxeo Platform Developer Documentation — LTS 2015
    canonical: Functional+tour
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC710/Functional+tour'
    page_id: '28475685'
    shortlink: JYGyAQ
    shortlink_source: 'https://doc.nuxeo.com/x/JYGyAQ'
    source_link: /display/NXDOC710/Functional+tour
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
next_link: nxdoc/implement-the-validation-logic

---
Here is the use case we want to implement:

1.  The administrator creates a new workspace:
    ![]({{file name='Image 20.png'}} ?border=true)
2.  He assigns permissions "Write" and "Validation" to user Jack:
    ![]({{file name='Image 10.png'}} ?border=true)
3.  He creates a new document by drag and drop, this document is in state "Project":
    ![]({{file name='Image 11.png'}} ?border=true)
4.  He clicks on "Request validation" link, on the top right part of the screen:
    ![]({{file name='screenshot_2011-06-01_15.42.26.png'}})
5.  Jack logs in
6.  He goes to his dashboard and sees he has a new task:
    ![]({{file name='Image 14.png'}} ?border=true)
7.  He clicks on it and falls on the summary tab, with, at the end, the detail of the task. If you have a look at assignees, it is actually all the users that have the permission "Validation" on the document:
    ![]({{file name='Image 15.png'}} ?border=true)
8.  He accepts the task, the state of the document goes to "Approved":
    ![]({{file name='Image 16.png'}} ?border=true)
9.  If he goes to the audit, he will see the event "Document Validated", as well as the history of the task creation, etc. ...
    ![]({{file name='Image 17.png'}} ?border=true)
