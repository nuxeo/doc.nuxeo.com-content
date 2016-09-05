---
title: Digital Asset Management (DAM)
labels:
    - dam
toc: true
confluence:
    ajs-parent-page-id: '17334336'
    ajs-parent-page-title: Additional Modules
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: viewpage.action?pageId=17334501
    canonical_source: viewpage.action?pageId=17334501
    page_id: '17334501'
    shortlink: 5YAIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/5YAIAQ'
    source_link: /pages/viewpage.action?pageId=17334501
history:
    - 
        author: Manon Lumeau
        date: '2016-03-10 13:52'
        message: ''
        version: '18'
    - 
        author: Solen Guitter
        date: '2015-02-26 16:02'
        message: ''
        version: '17'
    - 
        author: Anonymous
        date: '2013-10-07 14:57'
        message: ''
        version: '16'
    - 
        author: Solen Guitter
        date: '2013-10-07 14:15'
        message: ''
        version: '15'
    - 
        author: Solen Guitter
        date: '2012-09-17 09:17'
        message: Migrated to Confluence 4.0
        version: '14'
    - 
        author: Solen Guitter
        date: '2012-09-17 09:17'
        message: Fixed broken link
        version: '13'
    - 
        author: Solen Guitter
        date: '2012-09-03 14:46'
        message: >-
            Replaced Mercurial with GitHub and moved page to the technical
            documentation space
        version: '12'
    - 
        author: Solen Guitter
        date: '2012-09-03 14:46'
        message: Updated link to PDF to download 5.6-SNAPSHOT version
        version: '11'
    - 
        author: Solen Guitter
        date: '2011-12-21 14:42'
        message: Fixed broken link
        version: '10'
    - 
        author: Solen Guitter
        date: '2011-12-15 15:11'
        message: Fixed PDF icon not diplayed anymore
        version: '9'
    - 
        author: Solen Guitter
        date: '2011-12-15 12:18'
        message: ''
        version: '8'
    - 
        author: Thomas Roger
        date: '2011-12-06 18:14'
        message: ''
        version: '7'
    - 
        author: Thomas Roger
        date: '2011-12-06 18:14'
        message: ''
        version: '6'
    - 
        author: Solen Guitter
        date: '2011-11-16 12:48'
        message: Added PDF download panel
        version: '5'
    - 
        author: Solen Guitter
        date: '2011-08-05 12:03'
        message: ''
        version: '4'
    - 
        author: Jane Zupan
        date: '2010-08-06 17:04'
        message: ''
        version: '3'
    - 
        author: Jane Zupan
        date: '2010-08-06 17:04'
        message: ''
        version: '2'
    - 
        author: Alain Escaffre
        date: '2010-08-03 00:40'
        message: ''
        version: '1'

---
## Ajaxified search-centric UI

{{! excerpt}}

The navigation is not document-centric and organized in collaborative&nbsp;workspaces as in Nuxeo DM but is instead search-centric. Furthermore, the&nbsp;application ergonomy should feel like a rich collection browser such as iTunes&nbsp;or iPhoto by extensively using Ajax. Speed and responsiveness to user actions&nbsp;should be considered a major feature of Nuxeo DAM.

{{! /excerpt}}

Ajax features are implemented using the Rich faces components and the Ajax4JSF&nbsp;extensions. The online demo is available here: [http://livedemo.exadel.com/richfaces-demo/richfaces/support.jsf?c=support&tab=usage](http://livedemo.exadel.com/richfaces-demo/richfaces/support.jsf?c=support&tab=usage)

Some a4j tips are gathered on the following wiki page:[ Ajax4jsf Best Practices]({{page page='ajax4jsf-best-practices'}})

In addition to JSFs Ajax features, we plan to also reuse existing Ajax&nbsp;features of Nuxeo DM such as the right click actions menu based on&nbsp;jQuery plugins.

## Development with Nuxeo DAM

Nuxeo DAM source files can be retrieved for development using [GitHub](https://github.com/).

### Nuxeo DAM Source code

The source code specific to the DAM project is located here: [https://github.com/nuxeo/nuxeo-dam](https://github.com/nuxeo/nuxeo-dam)

To clone the Nuxeo DAM repository, use the following:

```
git clone https://github.com/nuxeo/nuxeo-dam

```

The main development branch is `master`. To switch to this branch, use:

```
git checkout master

```

You can also update on stable branches, or releases tags.

Stable branches are named from the Nuxeo DAM version: `1.0`, `1.1`, ...

Release tags are named from the release version of Nuxeo DAM: `release-1.0`, `release-1.1`

### Source code layout

The project layout is as follows:

*   `nuxeo-dam-api`
    Common classes used in other modules (Constants, Exceptions, ...)

*   `nuxeo-dam-core`
    Core document schemas definitions and other contributions to services

*   `nuxeo-dam-importer`
    Contains the core importer classes to be used during the import process&nbsp;and JAX-RS classes to be able to use the HTTP importer.

*   `nuxeo-dam-web`
    Web resources for Nuxeo DAM

### Continuous integration

The automated build / selenium test reports are hosted there: [http://qa.nuxeo.org/jenkins/view/DAM/](http://qa.nuxeo.org/jenkins/view/DAM/)

## Resources

*   To help us prioritize new features, please see [JIRA](http://jira.nuxeo.org/secure/IssueNavigator.jspa?mode=hide&requestId=10735). You can vote on your favorite features.
*   To ask questions and give feedback, please see the [Nuxeo](http://forum.nuxeo.com/f/15/) [answers](http://answers.nuxeo.com).