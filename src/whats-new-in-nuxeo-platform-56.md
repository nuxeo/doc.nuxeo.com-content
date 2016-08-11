---
title: What's new in Nuxeo Platform 5.6
no_side_menu: true
confluence:
    ajs-parent-page-id: '3868746'
    ajs-parent-page-title: Nuxeo Documentation Center Home
    ajs-space-key: MAIN
    ajs-space-name: Main
    canonical: What%27s+new+in+Nuxeo+Platform+5.6
    canonical_source: 'https://doc.nuxeo.com/display/MAIN/What%27s+new+in+Nuxeo+Platform+5.6'
    page_id: '11043496'
    shortlink: qIKo
    shortlink_source: 'https://doc.nuxeo.com/x/qIKo'
    source_link: /display/MAIN/What%27s+new+in+Nuxeo+Platform+5.6
history:
    -
        author: Solen Guitter
        date: '2012-09-14 18:21'
        message: igrated to Confluence 4.
        version: '7'
    -
        author: Solen Guitter
        date: '2012-09-14 18:21'
        message: Updated introduction and links now that 5.6 has been released
        version: '6'
    -
        author: Solen Guitter
        date: '2012-09-11 14:33'
        message: Updated introduction and links now that 5.6 has been released
        version: '5'
    -
        author: Solen Guitter
        date: '2012-07-06 15:52'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2012-07-06 15:48'
        message: ''
        version: '3'
    -
        author: Solen Guitter
        date: '2012-07-06 15:20'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2012-07-05 18:07'
        message: ''
        version: '1'

---
## On a tech side

### For developers

The configurability of the Summary tab of document has been improved, enabling developers to add plugins in container widgets instead of overriding the default Summary.
User actions also have new properties to enable different behaviors in a single area.
Content views have been optimized to improve the performances of the Platform.
Nuxeo Platform 5.6 also features the new [template rendering system](https://github.com/nuxeo/nuxeo-template-rendering) that enables to associate a Nuxeo document with an MS Office document, OpenOffice.org document, XSLT, etc. It can then be rendered to the end-user in different formats.

Nuxeo Studio features a tab designer that enables to create new tabs, leveraging the improvements on layouts, content views and widgets.

### For administrators

For administrators, new configuration parameters are available, enabling them to make the deployment of new features easier on a test environment for instance. The control panel script has also been improved with new options.

## On a functional side

The Nuxeo Platform gets new social features to keep the initiative started with Nuxeo Platform 5.5 to provide user-centric and social features. Social workspace now have a [wall]({{page space='userdoc56' page='wall-overview'}}), which, on the same principle as the [activity stream]({{page space='userdoc56' page='activity-stream-overview'}}), provides an overview of what is happening in the workspace. From this wall, they can directly comment documents and vote for documents that they think are of most value.

The [alert]({{page space='userdoc56' page='alerts'}}) system has been simplified: users now just need to indicate that they want to follow the activities on a document or a space. No need to select one or several events, with one click, they get emails whenever the document is modified, commented or a workflow started.

Users can now create documents from a [template]({{page space='userdoc56' page='template-rendering-addon'}}), with content being automatically extracted from Nuxeo, and to have an automated rendering generated from a set of user-defined preferences.