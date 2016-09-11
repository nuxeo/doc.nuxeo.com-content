---
title: Working with Documents
review:
    comment: ''
    date: ''
    status: ok
labels:
    - lifecyle
    - last-review-20141124
confluence:
    ajs-parent-page-id: '21299507'
    ajs-parent-page-title: Working in Workspaces
    ajs-space-key: USERDOC60
    ajs-space-name: Nuxeo Platform User Documentation — 6.0
    canonical: Working+with+Documents
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC60/Working+with+Documents'
    page_id: '21299491'
    shortlink: IwFFAQ
    shortlink_source: 'https://doc.nuxeo.com/x/IwFFAQ'
    source_link: /display/USERDOC60/Working+with+Documents
history:
    - 
        author: Solen Guitter
        date: '2015-08-28 08:23'
        message: ''
        version: '31'
    - 
        author: Anonymous
        date: '2014-11-24 23:35'
        message: ''
        version: '30'
    - 
        author: Solen Guitter
        date: '2014-11-24 18:44'
        message: >-
            Removing pictures, picture books and mail folders (now in DAM and
            IMAP connector add-ons)
        version: '29'
    - 
        author: Solen Guitter
        date: '2014-04-07 17:04'
        message: ''
        version: '28'
    - 
        author: Solen Guitter
        date: '2014-02-24 15:05'
        message: ''
        version: '27'
    - 
        author: Solen Guitter
        date: '2014-02-24 14:28'
        message: ''
        version: '26'
    - 
        author: Solen Guitter
        date: '2014-02-03 15:09'
        message: ''
        version: '25'
    - 
        author: Solen Guitter
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

Documents are sorted in two categories:

*   Collaborative services
*   Documents

**Collaborative services**

Collaborative services are folderish documents that enable users to share information.
The naked Platform collaborative services are:

*   [Workspaces]({{page page='working-with-workspaces'}})
*   [Folders]({{page page='folders'}})
*   [Forum]({{page page='forums'}})
*   [Collections]({{page page='collections'}})

**Documents**

Documents available in the naked Platform are:

*   The [note]({{page page='notes'}}): a text typed in a rich editor integrated to the Nuxeo Platform;
*   The [file]({{page page='files'}}): an attached file.

## Documents Evolution

The evolution of a document, each time contributors edit it, constitutes its life cycle. This life cycle is composed of the following states:

*   **Project**: the document has been created and it can be modified;
*   **Approved**: the document has been approved and is considered as valid. Modifying it makes it back to project life cycle state;
*   **Obsolete**: the document is not accurate anymore and, for instance, has been replaced by a new version;
*   **Deleted**: the document is moved into the workspace or folder trash.

To change the life cycle state of a document, you need to submit it to a [workflow]({{page page='workflows'}}).