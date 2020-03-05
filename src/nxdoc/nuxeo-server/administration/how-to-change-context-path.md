---
title: 'HOWTO: Change Context Path'
review:
    comment: ''
    date: '2015-12-01'
    status: ok
details:
    howto:
        excerpt: 'The Nuxeo Platform offers the capability to change the context path, i.e. /nuxeo in the URL of your application.'
        level: Intermediate
        tool: ''
        topics: 'Server configuration, URL'
labels:
    - content-review-lts2016
    - howto
    - content-review-lts2017
confluence:
    ajs-parent-page-id: '31032113'
    ajs-parent-page-title: Administration
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: How+to+Change+Context+Path
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/How+to+Change+Context+Path'
    page_id: '31687473'
    shortlink: MYPjAQ
    shortlink_source: 'https://doc.nuxeo.com/x/MYPjAQ'
    source_link: /display/NXDOC/How+to+Change+Context+Path
tree_item_index: 2200
version_override:
    LTS 2015: 710/admindoc/how-to-change-context-path
    '6.0': 60/admindoc/how-to-change-context-path
history:
    -
        author: Solen Guitter
        date: '2016-07-25 07:45'
        message: ''
        version: '3'
    -
        author: Solen Guitter
        date: '2016-07-25 07:45'
        message: ''
        version: '2'
    -
        author: Alain Escaffre
        date: '2016-07-22 13:47'
        message: ''
        version: '1'
---

{{! excerpt}}
The Nuxeo Platform offers the capability to change the context path, i.e.&nbsp;`/nuxeo`&nbsp;in the URL of your application.
{{! /excerpt}}

This configuration is done in two steps:

1.  Edit the&nbsp;configuration file `nuxeo.conf`&nbsp;to change the property&nbsp;`org.nuxeo.ecm.contextPath`.

    ```bash
    org.nuxeo.ecm.contextPath=/myapp

    # if you have configured nuxeo.url, update it as well
    nuxeo.url=http://localhost:8080/myapp
    ```

2.  Rename the file&nbsp;`$NUXEO_HOME/templates/common-base/conf/Catalina/localhost/nuxeo.xml.nxftl`&nbsp;into&nbsp;`$NUXEO_HOME/templates/common-base/conf/Catalina/localhost/myapp.xml.nxftl`.

&nbsp;
