---
title: Nuxeo DAM Compat
review:
    comment: ''
    date: ''
    status: ok
labels:
    - nuxeo-dam-compat
toc: true
confluence:
    ajs-parent-page-id: '22380668'
    ajs-parent-page-title: Marketplace Add-Ons
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: Nuxeo+DAM+Compat
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC60/Nuxeo+DAM+Compat'
    page_id: '22380763'
    shortlink: 24BVAQ
    shortlink_source: 'https://doc.nuxeo.com/x/24BVAQ'
    source_link: /display/NXDOC60/Nuxeo+DAM+Compat
history:
    - 
        author: Solen Guitter
        date: '2016-08-31 12:37'
        message: ''
        version: '11'
    - 
        author: Solen Guitter
        date: '2016-08-31 12:31'
        message: ''
        version: '10'
    - 
        author: Solen Guitter
        date: '2016-01-18 14:01'
        message: ''
        version: '9'
    - 
        author: Solen Guitter
        date: '2015-06-30 14:21'
        message: Add note about deprecation
        version: '8'
    - 
        author: Solen Guitter
        date: '2014-11-06 17:04'
        message: Add installation section
        version: '7'
    - 
        author: Solen Guitter
        date: '2014-11-04 23:18'
        message: ''
        version: '6'
    - 
        author: Thomas Roger
        date: '2014-11-03 11:26'
        message: ''
        version: '5'
    - 
        author: Solen Guitter
        date: '2014-10-21 10:26'
        message: ''
        version: '4'
    - 
        author: Solen Guitter
        date: '2014-10-20 18:24'
        message: ''
        version: '3'
    - 
        author: Solen Guitter
        date: '2014-10-20 18:23'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2014-10-20 18:07'
        message: ''
        version: '1'

---
{{{multiexcerpt 'DeprecatedAddOn_6.0' page='Generic Multi-Excerpts'}}}

{{{excerpt 'USERDOC60:Nuxeo DAM Compat'}}}

## Installation

{{{multiexcerpt 'MP-installation-easy' page='Digital Asset Management (DAM)'}}}

After the package is installed, users have a DAM tab on top of the application, next to the Workspace tab.

![]({{file name='DAM-tabs-users.png' space='userdoc60' page='nuxeo-dam-compat-concepts'}} ?w=650,border=true)

## Technical Overview

This section explains what is included in the Nuxeo DAM Compat add-on.

### Schemas

Schemas defined by Nuxeo DAM Compat:

*   `dam_common`:&nbsp;used to store DAM related&nbsp;information like author of the assets, authoring date of the assets.
*   `ip_rights`: used to store Intellectual Property rights information.&nbsp;

### Facets

DAM Compat defined the&nbsp;`Asset`&nbsp;facet, to be added to document types that should be considered as Assets so that they will be available in the default search, in the creation popup, ...

The&nbsp;`Asset`&nbsp;facet contains by default the&nbsp;`dam_common`&nbsp;and&nbsp;`ip_rights`&nbsp;schemas.

The&nbsp;`Asset`&nbsp;facet is added to the following document types:&nbsp;`File`,&nbsp;`Picture`,&nbsp;`Video`,&nbsp;`Audio`.

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">

{{! Please update the label in the Content by Label macro below. }}

{{#> panel heading='Related documentation'}}

*   [Nuxeo DAM Compat user documentation]({{page page='digital-asset-management-dam'}})
*   [Customizing DAM Compat Bulk Edit]({{page page='customizing-dam-compat-bulk-edit'}})
*   [Customizing DAM Compat Bulk Import]({{page page='customizing-dam-compat-bulk-import'}})
*   [Digital Asset Management (DAM)]({{page page='digital-asset-management-dam'}})
*   [Nuxeo DAM PDF Export]({{page page='nuxeo-dam-pdf-export'}})

{{/panel}}</div><div class="column medium-6">

{{! Please update the label and target spaces in the Content by Label macro below. }}

&nbsp;

</div></div>