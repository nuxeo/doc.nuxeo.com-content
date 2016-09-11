---
title: EAR
review:
    comment: ''
    date: ''
    status: ok
confluence:
    ajs-parent-page-id: '3868922'
    ajs-parent-page-title: Nuxeo Glossary
    ajs-space-key: GLOS
    ajs-space-name: Glossary
    canonical: EAR
    canonical_source: 'https://doc.nuxeo.com/display/GLOS/EAR'
    page_id: '11534554'
    shortlink: 2gCw
    shortlink_source: 'https://doc.nuxeo.com/x/2gCw'
    source_link: /display/GLOS/EAR
history:
    - 
        author: Julien Carsique
        date: '2012-09-14 17:07'
        message: igrated to Confluence 4.
        version: '4'
    - 
        author: Julien Carsique
        date: '2012-09-14 17:07'
        message: ''
        version: '3'
    - 
        author: Julien Carsique
        date: '2012-09-14 16:08'
        message: ''
        version: '2'
    - 
        author: Julien Carsique
        date: '2012-09-14 16:06'
        message: ''
        version: '1'

---
## EAR (Enterprise application ARchive)

### From [Wikipedia](http://en.wikipedia.org/wiki/EAR_%28file_format%29):

> EAR (Enterprise application ARchive) is a file format used by Java EE for packaging one or more modules into a single archive so that the deployment of the various modules onto an application server happens simultaneously and coherently. It also contains XML files called deployment descriptors which describe how to deploy the modules.

### Nuxeo EAR concept

We usually called the Nuxeo base archive as an EAR for historical reasons: it was mainly designed as an EAR for application servers (JBoss). But, that's no more the case. The current archive is specific to Nuxeo and reorganized while being deployed depending on the target server.
So, from now on, that concept is named [NXR]({{page page='nxr'}}).

See [NXR definition]({{page page='nxr'}}).