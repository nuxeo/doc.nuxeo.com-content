---
title: Working with Documents
review:
    comment: ''
    date: ''
    status: ok
labels:
    - lifecyle
confluence:
    ajs-parent-page-id: '16092666'
    ajs-parent-page-title: Working in Workspaces
    ajs-space-key: USERDOC58
    ajs-space-name: Nuxeo Platform User Documentation - 5.8
    canonical: Working+with+Documents
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC58/Working+with+Documents'
    page_id: '16092634'
    shortlink: 2o31
    shortlink_source: 'https://doc.nuxeo.com/x/2o31'
    source_link: /display/USERDOC58/Working+with+Documents
history:
    - 
        author: Solen Guitter
        date: '2015-08-28 08:22'
        message: ''
        version: '27'
    - 
        author: Solen Guitter
        date: '2014-04-07 17:05'
        message: ''
        version: '26'
    - 
        author: Solen Guitter
        date: '2014-02-03 15:09'
        message: ''
        version: '25'
    - 
        author: Anonymous
        date: '2013-10-22 17:51'
        message: ''
        version: '24'
    - 
        author: Solen Guitter
        date: '2013-10-22 15:56'
        message: '5.8: removed website / blog document types that are now in an addon'
        version: '23'
    - 
        author: Solen Guitter
        date: '2012-06-19 14:53'
        message: ''
        version: '22'
    - 
        author: Solen Guitter
        date: '2012-06-19 14:53'
        message: ''
        version: '21'
    - 
        author: Solen Guitter
        date: '2011-12-11 23:46'
        message: ''
        version: '20'
    - 
        author: Solen Guitter
        date: '2011-06-06 16:04'
        message: ''
        version: '19'
    - 
        author: Solen Guitter
        date: '2011-06-06 16:03'
        message: fixed brocken link
        version: '18'
    - 
        author: Solen Guitter
        date: '2011-06-06 14:41'
        message: ''
        version: '17'
    - 
        author: Solen Guitter
        date: '2010-10-20 10:44'
        message: ''
        version: '16'
    - 
        author: Solen Guitter
        date: '2010-10-20 10:42'
        message: ''
        version: '15'
    - 
        author: Solen Guitter
        date: '2010-10-20 10:42'
        message: ''
        version: '14'
    - 
        author: Solen Guitter
        date: '2010-10-20 10:41'
        message: ''
        version: '13'
    - 
        author: Solen Guitter
        date: '2010-10-20 10:41'
        message: ''
        version: '12'
    - 
        author: Solen Guitter
        date: '2010-10-20 10:41'
        message: ''
        version: '11'
    - 
        author: Solen Guitter
        date: '2010-10-01 14:09'
        message: ''
        version: '10'
    - 
        author: Solen Guitter
        date: '2010-10-01 14:08'
        message: ''
        version: '9'
    - 
        author: Solen Guitter
        date: '2010-09-30 11:47'
        message: ''
        version: '8'
    - 
        author: Solen Guitter
        date: '2010-09-27 17:48'
        message: ''
        version: '7'
    - 
        author: Solen Guitter
        date: '2010-09-27 17:48'
        message: ''
        version: '6'
    - 
        author: Solen Guitter
        date: '2010-09-27 17:43'
        message: fixed broken links
        version: '5'
    - 
        author: Solen Guitter
        date: '2010-09-23 17:01'
        message: fixed broken links
        version: '4'
    - 
        author: Solen Guitter
        date: '2010-05-28 17:23'
        message: fixed broken links
        version: '3'
    - 
        author: Solen Guitter
        date: '2010-05-10 18:35'
        message: fixed broken links
        version: '2'
    - 
        author: Eric Barroca
        date: '2010-04-23 17:14'
        message: ''
        version: '1'

---
&nbsp;

&nbsp;

The Nuxeo Platform enables you to create, edit and share documents within the application.

## Available Documents

Depending on what you're using, the naked platform or the Document Management module, you don't have exactly the same documents available. Documents are sorted in two categories:

*   Collaborative services
*   Documents

Collaborative services are folderish documents that enable users to share information.
The naked Platform collaborative services are:

*   [Workspaces]({{page page='working-with-workspaces'}})
*   [Folders]({{page page='folders'}})
*   [Forum]({{page page='forums'}})

The Document Management module add a new collaborative service:

*   [Picture book]({{page page='pictures'}})
*   [Mail folder]({{page page='email-folders'}})

Documents available in the naked Platform are:

*   The [note]({{page page='notes'}}): a text typed in a rich editor integrated to the Nuxeo Platform;
*   The [file]({{page page='files'}}): an attached file.

The Document Management module adds the documents below:

*   The [picture]({{page page='pictures'}}): a picture file with specific features available.

## Documents Evolution

The evolution of a document, each time contributors edit it, constitutes its life cycle. This life cycle is composed of the following states:

*   **Project**: the document has been created and it can be modified;
*   **Approved**: the document has been approved and is considered as valid. Modifying it makes it back to project life cycle state;
*   **Obsolete**: the document is not accurate anymore and, for instance, has been replaced by a new version;
*   **Deleted**: the document is moved into the workspace's or folder's trash.

To change the life cycle state of a document, you need to submit it to a [workflow]({{page page='workflows'}}).