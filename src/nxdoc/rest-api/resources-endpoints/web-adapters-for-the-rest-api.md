---
title: Web Adapters for the REST API
confluence:
    ajs-parent-page-id: '22380806'
    ajs-parent-page-title: Resources Endpoints
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: Web+Adapters+for+the+REST+API
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC60/Web+Adapters+for+the+REST+API'
    page_id: '22380876'
    shortlink: TIFVAQ
    shortlink_source: 'https://doc.nuxeo.com/x/TIFVAQ'
    source_link: /display/NXDOC60/Web+Adapters+for+the+REST+API
history:
    - 
        author: Alain Escaffre
        date: '2014-07-03 00:51'
        message: ''
        version: '1'

---
This API also has the concept of "adapter". An adapter is a URL segment that starts with "@" and that transforms the input resource so as to return another resource. For example, using&nbsp;`@blob`&nbsp;will return the file of a document (the one stored on the property given by the next URL segment), and chaining it to&nbsp;`@op`&nbsp;will call an operation (that takes a blob in input):

```
/nuxeo/api/v1/id/{docId}/@blob/file:content/@op/Blob.ToPDF
```