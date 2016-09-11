---
title: JSF number of views configuration
review:
    comment: ''
    date: ''
    status: ok
labels:
    - jsf
    - 5-7-2
    - 5-7-1
confluence:
    ajs-parent-page-id: '17334513'
    ajs-parent-page-title: JSF and Ajax Tips and How-Tos
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: JSF+number+of+views+configuration
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/JSF+number+of+views+configuration'
    page_id: '17334499'
    shortlink: 44AIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/44AIAQ'
    source_link: /display/NXDOC58/JSF+number+of+views+configuration
history:
    - 
        author: Solen Guitter
        date: '2015-08-28 12:08'
        message: ''
        version: '7'
    - 
        author: Solen Guitter
        date: '2013-06-28 16:43'
        message: Format
        version: '6'
    - 
        author: Anahide Tchertchian
        date: '2013-06-25 18:18'
        message: fix links
        version: '5'
    - 
        author: Anahide Tchertchian
        date: '2013-06-25 18:09'
        message: 'NXP-11423: add configuration for JSF number of views'
        version: '4'
    - 
        author: Anahide Tchertchian
        date: '2013-06-20 16:29'
        message: ''
        version: '3'
    - 
        author: Anahide Tchertchian
        date: '2013-06-20 16:27'
        message: ''
        version: '2'
    - 
        author: Anahide Tchertchian
        date: '2013-06-20 12:56'
        message: ''
        version: '1'

---
&nbsp;

The JSF/Seam stack used in the Nuxeo Platform uses server-side state saving: for each JSF component in the tree of graphical components, a state is saved server-side.

Each JSF component tree state is associated to a unique identifier, and the number of states is configurable using the JSF parameters&nbsp;`com.sun.faces.numberOfViewsInSession` and `com.sun.faces.numberOfLogicalViews`.

When the number of clicks exceeds this number of states, the page cannot be restored, and JSF may throw a `ViewExpiredException`.

Since version 5.7.1 (and 5.6.0-HF12), the default value in the Nuxeo Platform is set to 4 for both parameters (instead of 50 which was the previous default value) because it has an impact on performance.

Since version 5.7.2 (and 5.6.0-HF20), these values can be changed by adding (for example) the following line to the&nbsp;`bin/nuxeo.conf` file:

```
nuxeo.jsf.numberOfViewsInSession=25
nuxeo.jsf.numberOfLogicalViews=25
```

Related JIRA issues:

*   [NXP-9177](https://jira.nuxeo.com/browse/NXP-9177)<span class="link-summary">: Reduce default number of view in JSF</span>
*   [NXP-11423](https://jira.nuxeo.com/browse/NXP-11423): <span class="link-summary">Allow configuring the number of JSF logical views</span>
*   [NXP-11677](https://jira.nuxeo.com/browse/NXP-11677): <span class="link-summary">Make JSF/Seam more resiliant to mulithreaded navigation</span>