---
title: Web UI Limitations
review:
    comment: ''
    date: ''
    status: ok
labels:
    - jsf
    - limitations
    - seam
confluence:
    ajs-parent-page-id: '22380912'
    ajs-parent-page-title: Web UI Framework Overview
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: Web+UI+Limitations
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC60/Web+UI+Limitations'
    page_id: '22380812'
    shortlink: DIFVAQ
    shortlink_source: 'https://doc.nuxeo.com/x/DIFVAQ'
    source_link: /display/NXDOC60/Web+UI+Limitations
tree_item_index: 200
version_override:
    'FT': '/nxdoc/jsf-ui-framework-overview'
    'LTS 2015': 710/nxdoc/jsf-ui-limitations
history:
    -
        author: Manon Lumeau
        date: '2016-07-20 14:23'
        message: 'emove children display macro '
        version: '6'
    -
        author: Alain Escaffre
        date: '2014-11-24 16:54'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2014-01-07 15:36'
        message: ''
        version: '4'
    -
        author: Anahide Tchertchian
        date: '2013-12-20 15:17'
        message: ''
        version: '3'
    -
        author: Anahide Tchertchian
        date: '2013-12-04 15:05'
        message: typo
        version: '2'
    -
        author: Anahide Tchertchian
        date: '2013-12-04 15:05'
        message: ''
        version: '1'

---
{{! excerpt}}

This chapter presents the limitations to the Seam/JSF web application.

{{! /excerpt}}

*   [Back and Next Buttons Paradigm and JSF in the Nuxeo Platform]({{page space='NXDOC60' page='Back and+Next+Buttons+Paradigm+and+JSF+in+the+Nuxeo+Platform'}})&nbsp;&mdash; Although the&nbsp; JSF library is not designed to take advantage of the Back and Next buttons of the browser, these buttons work in most cases when called on GET actions, but some inconsistent display could happen if used after a user action modifying data. However, those cache-related display inconsistency aren't harmful in anyway for the system.

*   [I Get an Error When I Click on Two Links Quickly]({{page space='NXDOC60' page='I Get+an+Error+When+I+Click+on+Two+Links+Quickly'}})&nbsp;&mdash; Sometimes if you click on a link and then, after a very short time, click on another link without waiting the response from the server, you can get a JSF error. This can happen very frequently when using Ajax requests as users does not always see that the server did not answer yet, so it can be easier from them to trigger an additional request.
