---
title: Configuring the JSF Number of Views
review:
    comment: ''
    date: '2020-09-30'
    status: ok
labels:
    - content-review-lts2016
    - jsf
    - howto
    - seam-jsf-component
    - atchertchian
    - content-review-lts2017
confluence:
    ajs-parent-page-id: '9830458'
    ajs-parent-page-title: JSF and Ajax Tips and How-To Index
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Configuring+the+JSF+Number+of+Views
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Configuring+the+JSF+Number+of+Views'
    page_id: '14255253'
    shortlink: lYTZ
    shortlink_source: 'https://doc.nuxeo.com/x/lYTZ'
    source_link: /display/NXDOC/Configuring+the+JSF+Number+of+Views
tree_item_index: 500
history:
    -
        author: Solen Guitter
        date: '2014-01-23 16:03'
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
The JSF/Seam stack used in the Nuxeo Platform uses server-side state saving: for each JSF component in the tree of graphical components, a state is saved server-side.

Each JSF component tree state is associated to a unique identifier, and the number of states is configurable using the JSF parameters&nbsp;`com.sun.faces.numberOfViewsInSession` and `com.sun.faces.numberOfLogicalViews`.

When the number of clicks exceeds this number of states, the page cannot be restored, and JSF may throw a `ViewExpiredException`.

Since version 5.7.1 (and 5.6.0-HF12), the default value in the Nuxeo Platform is set to 4 for both parameters (instead of 50 which was the previous default value) because it has an impact on performance.

Since version 5.7.2 (and 5.6.0-HF20), these values can be changed by adding (for example) the following line to the&nbsp;[`nuxeo.conf` file]({{page page='configuration-parameters-index-nuxeoconf'}}):

```
nuxeo.jsf.numberOfViewsInSession=25
nuxeo.jsf.numberOfLogicalViews=25
```

Related JIRA issues:

*   [NXP-9177](https://jira.nuxeo.com/browse/NXP-9177)<span class="link-summary">: Reduce default number of view in JSF</span>
*   [NXP-11423](https://jira.nuxeo.com/browse/NXP-11423): <span class="link-summary">Allow configuring the number of JSF logical views</span>
*   [NXP-11677](https://jira.nuxeo.com/browse/NXP-11677): <span class="link-summary">Make JSF/Seam more resiliant to mulithreaded navigation</span>
