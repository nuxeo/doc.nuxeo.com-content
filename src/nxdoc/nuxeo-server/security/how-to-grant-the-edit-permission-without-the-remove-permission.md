---
title: How to Grant the Edit Permission without the Remove Permission
details:
    howto:
        excerpt: >-
            Learn how to override the default Edit permission so it does not
            include Remove by default, and set a new ReadWriteAndRemove
            permission.
        level: Intermediate
        tool: XML Extension
        topics: Permissions
labels:
    - howto
    - link-update
    - permission
toc: true
confluence:
    ajs-parent-page-id: '20515363'
    ajs-parent-page-title: Security
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: How+to+Grant+the+Edit+Permission+without+the+Remove+Permission
    canonical_source: >-
        https://doc.nuxeo.com/display/NXDOC/How+to+Grant+the+Edit+Permission+without+the+Remove+Permission
    page_id: '24052147'
    shortlink: swFvAQ
    shortlink_source: 'https://doc.nuxeo.com/x/swFvAQ'
    source_link: >-
        /display/NXDOC/How+to+Grant+the+Edit+Permission+without+the+Remove+Permission
history:
    - 
        author: Manon Lumeau
        date: '2016-01-18 15:36'
        message: ''
        version: '10'
    - 
        author: Manon Lumeau
        date: '2016-01-18 14:30'
        message: ''
        version: '9'
    - 
        author: Manon Lumeau
        date: '2016-01-18 14:09'
        message: ''
        version: '8'
    - 
        author: Manon Lumeau
        date: '2016-01-18 11:16'
        message: ''
        version: '7'
    - 
        author: Manon Lumeau
        date: '2016-01-18 11:09'
        message: ''
        version: '6'
    - 
        author: Ronan Daniellou
        date: '2016-01-11 09:55'
        message: Added a 'heading' for the procedure (prevents TOC being empty)
        version: '5'
    - 
        author: Ronan Daniellou
        date: '2016-01-11 09:51'
        message: Added Nuxeo TOC panel
        version: '4'
    - 
        author: Solen Guitter
        date: '2015-04-09 13:45'
        message: ''
        version: '3'
    - 
        author: Thierry Martins
        date: '2015-04-09 09:45'
        message: ''
        version: '2'
    - 
        author: Thierry Martins
        date: '2015-04-09 09:43'
        message: ''
        version: '1'

---
As described on the page [Managing Permissions]({{page space='userdoc' page='managing-permissions'}}), the Edit permission visible in the UI contains the permission to remove content. This means that you cannot grant the Edit permission and deny the Remove access right at the same level of the repository. So you need to override the [default&nbsp;`Write` permission](http://explorer.nuxeo.com/nuxeo/site/distribution/latest/viewContribution/org.nuxeo.ecm.core.security.defaultPermissions--permissions) to be able to do that.

## Procedure

1.  [Add a new contribution]({{page page='how-to-contribute-to-an-extension'}}) to remove the `Remove` permission from `Write` permission.

    ```

          Remove

    ```

    This change will make the permission `ReadWrite`, displayed under the permission label "Edit" in the UI, act as wanted: it no longer includes the right to remove content.

    If you want users to be able to add and remove content, you must now grant them the Edit permission and the Remove permission. Or you can add a new permission that will behave like the default `ReadWrite` permission used to.

2.  Define a new global permission to read, edit and remove content.

    ```

            Read
            Write
            Remove

    ```

3.  Make the new `ReadWriteAndRemove` permission visible in the drop down list in the UI.

    ```

          Read
          ReadWrite
          ReadWriteAndRemove
          ReadRemove
          Everything

    ```

    ![]({{file name='ReadWriteAndRemove_permission_UI.png'}} ?w=400,border=true)

4.  Add the new permission label to [your internationalization files]({{page page='how-to-upload-labels-translations-in-nuxeo-studio-i18n'}}).
5.  [Deploy your customizations]({{page space='studio' page='deploying-your-project-in-dev-mode'}}).

&nbsp;

* * *