---
title: Seam JSF Webapp Limitations
review:
    comment: ''
    date: ''
    status: ok
labels:
    - jsf
    - seam
    - limitations
confluence:
    ajs-parent-page-id: '17334348'
    ajs-parent-page-title: Seam JSF Webapp Overview
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Seam+JSF+Webapp+Limitations
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/Seam+JSF+Webapp+Limitations'
    page_id: '18449572'
    shortlink: pIQZAQ
    shortlink_source: 'https://doc.nuxeo.com/x/pIQZAQ'
    source_link: /display/NXDOC58/Seam+JSF+Webapp+Limitations
history:
    - 
        author: Manon Lumeau
        date: '2016-07-20 14:48'
        message: 'emove children display macro '
        version: '2'
    - 
        author: Solen Guitter
        date: '2014-01-22 14:21'
        message: ''
        version: '1'

---
This chapter presents the limitations to the Seam/JSF web application.

*   [Back and Next Buttons Paradigm and JSF in the Nuxeo Platform]({{page space='NXDOC58' page='Back and+Next+Buttons+Paradigm+and+JSF+in+the+Nuxeo+Platform'}})&nbsp;&mdash;&nbsp;<span class="smalltext">Although this library is not designed to take advantage of the back and next buttons of the browser, these buttons work in most cases when called on GET actions, but some inconsistent display could happen if used after a user action modifying data. However, those cache-related display inconsistency aren't harmful in anyway for the system.</span>
*   [I Get an Error When I Click on Two Links Quickly]({{page space='NXDOC58' page='I Get+an+Error+When+I+Click+on+Two+Links+Quickly'}})&nbsp;&mdash;&nbsp;<span class="smalltext">Sometimes if you click on a link and then, after a very short time, click on another link without waiting the response from the server, you can get a JSF error. This can happen very frequently when using Ajax requests as users does not always see that the server did not answer yet, so it can be easier from them to trigger an additional request.</span>