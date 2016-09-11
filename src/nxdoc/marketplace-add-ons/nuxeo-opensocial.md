---
title: Nuxeo OpenSocial
review:
    comment: ''
    date: ''
    status: ok
labels:
    - opensocial
toc: true
confluence:
    ajs-parent-page-id: '22380668'
    ajs-parent-page-title: Marketplace Add-Ons
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: Nuxeo+OpenSocial
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC60/Nuxeo+OpenSocial'
    page_id: '22380756'
    shortlink: 1IBVAQ
    shortlink_source: 'https://doc.nuxeo.com/x/1IBVAQ'
    source_link: /display/NXDOC60/Nuxeo+OpenSocial
history:
    - 
        author: Solen Guitter
        date: '2015-10-13 08:08'
        message: ''
        version: '9'
    - 
        author: Anonymous
        date: '2014-12-02 14:35'
        message: ''
        version: '8'
    - 
        author: Solen Guitter
        date: '2014-12-02 14:29'
        message: ''
        version: '7'
    - 
        author: Solen Guitter
        date: '2014-12-02 14:29'
        message: ''
        version: '6'
    - 
        author: Solen Guitter
        date: '2014-10-28 18:45'
        message: ''
        version: '5'
    - 
        author: Solen Guitter
        date: '2010-11-10 17:21'
        message: Migrated to Confluence 4.0
        version: '4'
    - 
        author: Solen Guitter
        date: '2010-11-10 17:21'
        message: ''
        version: '3'
    - 
        author: Solen Guitter
        date: '2010-11-10 17:20'
        message: ''
        version: '2'
    - 
        author: Thomas Roger
        date: '2010-04-21 18:17'
        message: ''
        version: '1'

---
{{{multiexcerpt 'DeprecatedAddOn_6.0' page='Generic Multi-Excerpts'}}}

{{{excerpt 'USERDOC60:Nuxeo OpenSocial'}}}

## Installation

Nuxeo OpenSocial requires no specific installation steps. It can be installed like any other package [from the Marketplace or from the Admin Center]({{page space='admindoc60' page='installing-a-new-package-on-your-instance'}}).

After the package is installed, you get the following elements in the Admin tab:

*   A Dashboard tab
    ![]({{file name='Admin-Center-dashboards.png'}} ?w=600,border=true)
*   A Activity charts tab in the Activity tab
    ![]({{file name='AdminCenter-activity-charts.png'}} ?w=600,border=true)

All users also have a new customizable dashboard.

![]({{file name='DM-dashboard.png' space='userdoc60' page='nuxeo-opensocial'}} ?w=600,border=true)

## Configuration

OpenSocial in Nuxeo can be configured through the GWT Container parameters.

### GWT Container Parameters

There are some parameters you can pass to the GWT container, through the `getGwtParams()` function, to customize the way it works.

Here are the definitions of the different parameters:

*   `dndValidation`: `'true'` if the container should wait the validation of the Drag'n Drop before doing the actual move, `'false'` otherwise. If the parameter is not present, default to `'false'`.

*   `showPreferences`: `'true'` if the gadget preferences need to be displayed after adding a gadget, `'false'` otherwise. If the parameter is not present, default to `'true'`.

*   `resetGadgetTitle`: `'true'` if the gadget title needs to be after its addition to the container, `'false'` otherwise. If the parameter is not present, default to `'true'`.

*   `userLanguage`: this parameter is used to store the user language. The user language is used to internationalize the gadgets title by creating the corresponding Locale. If this parameter is not present, we fallback on the default Locale when trying to retrieve the label.