---
title: OpenSocial configuration
review:
    comment: ''
    date: ''
    status: ok
labels:
    - opensocial
confluence:
    ajs-parent-page-id: '17334425'
    ajs-parent-page-title: 'OpenSocial, OAuth and the Nuxeo Platform'
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: OpenSocial+configuration
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/OpenSocial+configuration'
    page_id: '17334450'
    shortlink: soAIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/soAIAQ'
    source_link: /display/NXDOC58/OpenSocial+configuration
history:
    - 
        author: Solen Guitter
        date: '2015-08-28 13:16'
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
&nbsp;

OpenSocial in Nuxeo can be configured throug the GWT Container parameters.

## GWT Container parameters

There are some parameters you can pass to the GWT container, through the getGwtParams() function, to customize the way it works.

Here are the definitions of the different parameters:

*   `dndValidation`: `'true'` if the container should wait the validation of the Drag'n Drop before doing the actual move, `'false'` otherwise. If the parameter is not present, default to `'false'`.

*   `showPreferences`: `'true'` if the gadget preferences need to be displayed after adding a gadget, `'false'` otherwise. If the parameter is not present, default to `'true'`.

*   `resetGadgetTitle`: `'true'` if the gadget title needs to be after its addition to the container, `'false'` otherwise. If the parameter is not present, default to `'true'`.

*   `userLanguage`: this parameter is used to store the user language. The user language is used to internationalize the gadgets title by creating the corresponding Locale. If this parameter is not present, we fallback on the default Locale when trying to retrieve the label.