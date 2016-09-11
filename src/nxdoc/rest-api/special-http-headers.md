---
title: Special HTTP Headers
review:
    comment: ''
    date: ''
    status: ok
labels:
    - http
toc: true
confluence:
    ajs-parent-page-id: '22380745'
    ajs-parent-page-title: REST API
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: Special+HTTP+Headers
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC60/Special+HTTP+Headers'
    page_id: '22380768'
    shortlink: 4IBVAQ
    shortlink_source: 'https://doc.nuxeo.com/x/4IBVAQ'
    source_link: /display/NXDOC60/Special+HTTP+Headers
history:
    - 
        author: Manon Lumeau
        date: '2014-10-13 10:01'
        message: ''
        version: '4'
    - 
        author: Vladimir Pasquier
        date: '2014-10-10 11:37'
        message: ''
        version: '3'
    - 
        author: Solen Guitter
        date: '2014-09-01 10:12'
        message: ''
        version: '2'
    - 
        author: Vladimir Pasquier
        date: '2014-08-28 14:28'
        message: ''
        version: '1'

---
There are four custom HTTP headers that you can use to have more control with REST API Calls.

### X-NXVoidOperation

Possible values: "true" or "false". If not specified the default is "false"

This header can be used to force the server to assume that the executed operation has no content to return (a void operation). This can be very useful when dealing with blobs to avoid having the blob output sent back to the client.

For example, if you want to set a blob content on a document using the `Blob.Attach` operation, after the operation execution the blob you sent to the server is sent back to the client (because the operation is returning the original blob). This behavior is useful when creating operation chains but when calling such an operation from remote it will use more network traffic than necessary.

To avoid this, use the header: `X-NXVoidOperation: true`

Example:

```
POST /nuxeo/site/automation/Blob.Attach HTTP/1.1
Accept: application/json+nxentity, */*
Content-Type: multipart/related;
    boundary="----=_Part_0_130438955.1274713628403"; type="application/json+nxrequest"; start="request"
Authorization: Basic QWRtaW5pc3RyYXRvcjpBZG1pbmlzdHJhdG9y
X-NXVoidOperation: true
Host: localhost:8080

```

```
------=_Part_0_130438955.1274713628403
Content-Type: application/json+nxrequest; charset=UTF-8
Content-Transfer-Encoding: 8bit
Content-ID: request
Content-Length: 75

{"params":&nbsp;{"document":"/default-domain/workspaces/myws/file"}, "context":{}}

------=_Part_0_130438955.1274713628403
Content-Type: image/jpeg
Content-Transfer-Encoding: binary
Content-Disposition: attachment; filename=test.jpg
Content-ID: input

[binary data comes here]

------=_Part_0_130438955.1274713628403--

```

### Nuxeo-Transaction-Timeout

This header can be used when you want to control the transaction duration. As an example, if you want to inject a large blob in the repository, the default transaction timeout may be not enough. You can specify a 5 minutes timeout for the chain you're executing:

```
Nuxeo-Transaction-Timeout: 300
```

### X-NXDocumentProperties

This header can be used whenever a Document will be returned by the server. The header forces the server to fill up the returned document with data from schemas that matches the `X-NXDocumentProperties` filter. So, `X-NXDocumentProperties` is a filter of schemas. If you don't use the header, all <span style="color: rgb(51,51,51);">properties of the document are returned.</span>

To have more properties in the returned document, you can specify a list of document schema names:

```
X-NXDocumentProperties: dublincore, file
```

or to have all the document content, you can use the '*' character as the filter value or you can simply skip the header definition :

```
X-NXDocumentProperties: *
```

### X-NXRepository

This header can be used when you need to access a specific repository. The default value is "default", as it's the default repository name in the Nuxeo Platform. This is handy if you have changed the default name or if you have multiple repositories.

```
X-NXRepository: myCustomRepositoryName
```

### X-NXContext-Category

It is sometimes useful to optimize the number of requests you send to the server. For that reason we provide a mechanism for requesting more information on the answer, simply by specifying the context you want in the request header. For instance, when specifying&nbsp;`X-NXContext-Category = &ldquo;thumbnail&rdquo;`, the JSON payload of the document REST calls response contains the related attached file thumbnail of the document. You can add several content enrichers into the header separated by comma. [(Content Enrichers listing)]({{page page='content-enricher'}})

```
X-NXContent-Category: "thumbnail"
```

### X-Versioning-Option

This header can be used when you need to increment the minor or major version and return the versioned document. (Since 5.9.5) By default, no version checkin is done and 'live' (snapshot) document is returned. This is handy if you have to update the document while incrementing the version for instance. (values: MAJOR or MINOR or NONE)

```
X-Versioning-Option: MAJOR
```

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">

{{! Please update the label in the Content by Label macro below. }}

&nbsp;

</div><div class="column medium-6">

{{! Please update the label and target spaces in the Content by Label macro below. }}

&nbsp;

&nbsp;

</div></div>