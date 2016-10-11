---
title: Back and Next Buttons Paradigm and JSF in the Nuxeo Platform
review:
    comment: ''
    date: '2015-12-01'
    status: ok
labels:
    - jsf
    - seam-jsf-component
    - limitations
    - excerpt
confluence:
    ajs-parent-page-id: '17794427'
    ajs-parent-page-title: JSF UI Limitations
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Back+and+Next+Buttons+Paradigm+and+JSF+in+the+Nuxeo+Platform
    canonical_source: >-
        https://doc.nuxeo.com/display/NXDOC/Back+and+Next+Buttons+Paradigm+and+JSF+in+the+Nuxeo+Platform
    page_id: '3344274'
    shortlink: kgcz
    shortlink_source: 'https://doc.nuxeo.com/x/kgcz'
    source_link: >-
        /display/NXDOC/Back+and+Next+Buttons+Paradigm+and+JSF+in+the+Nuxeo+Platform
history:
    - 
        author: Solen Guitter
        date: '2014-01-07 15:00'
        message: ''
        version: '18'
    - 
        author: Solen Guitter
        date: '2014-01-07 14:59'
        message: ''
        version: '17'
    - 
        author: Solen Guitter
        date: '2014-01-07 14:59'
        message: Terminology
        version: '16'
    - 
        author: Anahide Tchertchian
        date: '2013-12-20 15:18'
        message: ''
        version: '15'
    - 
        author: Thierry Martins
        date: '2012-01-04 12:12'
        message: Migrated to Confluence 4.0
        version: '14'
    - 
        author: Thierry Martins
        date: '2012-01-04 12:12'
        message: ''
        version: '13'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 17:23'
        message: ''
        version: '12'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 14:43'
        message: ''
        version: '11'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 10:27'
        message: ''
        version: '10'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 10:24'
        message: ''
        version: '9'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 10:14'
        message: ''
        version: '8'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 09:14'
        message: ''
        version: '7'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 09:10'
        message: ''
        version: '6'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 08:55'
        message: ''
        version: '5'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 08:51'
        message: ''
        version: '4'
    - 
        author: Stéfane Fermigier
        date: '2010-07-21 20:11'
        message: ''
        version: '3'
    - 
        author: Stéfane Fermigier
        date: '2010-07-21 20:06'
        message: ''
        version: '2'
    - 
        author: Stéfane Fermigier
        date: '2010-07-21 20:06'
        message: ''
        version: '1'

---
Nuxeo Platform navigation is based solely on the JSF library.

{{! excerpt}}

Although the&nbsp; JSF library is not designed to take advantage of the Back and Next buttons of the browser, these buttons work in most cases when called on GET actions, but some inconsistent display could happen if used after a user action modifying data. However, those cache-related display inconsistency aren't harmful in anyway for the system.

{{! /excerpt}}

Those unwanted displays are hard to fix: it could be done by pushing "by hand" some history info into a queue whenever the Nuxeo Platform does a navigation, and try to return to that when an application-based back button is pressed. But this would be quite complex and browser dependent.

So if you're massively using POST action, the solution is to train the users to never activate/use the Back and the Next buttons when using the Nuxeo Platform.