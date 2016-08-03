---
title: Special HTTP Headers
labels:
    - http
    - rest-api
    - rest-api-component
    - nxdoc-730
toc: true
confluence:
    ajs-parent-page-id: '13664833'
    ajs-parent-page-title: REST API
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Special+HTTP+Headers
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Special+HTTP+Headers'
    page_id: '20513691'
    shortlink: mwM5AQ
    shortlink_source: 'https://doc.nuxeo.com/x/mwM5AQ'
    source_link: /display/NXDOC/Special+HTTP+Headers
history:
    - 
        author: Thierry Martins
        date: '2015-11-20 13:46'
        message: ''
        version: '15'
    - 
        author: Solen Guitter
        date: '2015-10-15 09:32'
        message: Improve anchor links
        version: '14'
    - 
        author: Solen Guitter
        date: '2015-10-15 09:27'
        message: Remove deprecated headers
        version: '13'
    - 
        author: Nicolas Chapurlat
        date: '2015-10-14 15:24'
        message: ''
        version: '12'
    - 
        author: Nicolas Chapurlat
        date: '2015-10-14 15:23'
        message: ''
        version: '11'
    - 
        author: Nicolas Chapurlat
        date: '2015-10-14 15:22'
        message: ''
        version: '10'
    - 
        author: Nicolas Chapurlat
        date: '2015-10-13 15:47'
        message: ''
        version: '9'
    - 
        author: Solen Guitter
        date: '2015-04-20 11:58'
        message: Add details on depth and  X-NXfetch.document
        version: '8'
    - 
        author: Solen Guitter
        date: '2015-04-20 10:11'
        message: ''
        version: '7'
    - 
        author: Solen Guitter
        date: '2015-04-20 10:09'
        message: Add  X-NXfetch.document and depth
        version: '6'
    - 
        author: Solen Guitter
        date: '2015-04-20 09:53'
        message: >-
            Add X-NXproperties and X-NXenrichers.document, replacing deprecated
            X-NXDocumentProperties and X-NXContext-Category
        version: '5'
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
Here are HTTP headers that you can use to have more control with REST API Calls.

## X-NXVoidOperation

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

## Nuxeo-Transaction-Timeout

This header can be used when you want to control the transaction duration. As an example, if you want to inject a large blob in the repository, the default transaction timeout may be not enough. You can specify a 5 minutes timeout for the chain you're executing:

```
Nuxeo-Transaction-Timeout: 300
```

## <span>X-NXproperties</span>

{{#> callout type='info' }}

<span>Available since 7.2 to replace `X-NXDocumentProperties`.</span>

{{/callout}}

This header can be used whenever a Document will be returned by the server. The header forces the server to fill up the returned document with data from schemas that matches the `X-NXproperties` filter. So, `X-NXproperties` is a filter of schemas. If you don't use the header, all <span style="color: rgb(51,51,51);">properties of the document are returned.</span>

To have more properties in the returned document, you can specify a list of document schema names:

```
X-NXproperties: dublincore, file
```

or to have all the document content, you can use the&nbsp;`*` character as the filter value or you can simply skip the header definition:

```
X-NXproperties: *
```

## <span>X-NXRepository</span>

<span>This header can be used when you need to access a specific repository. The default value is "default", as it's the default repository name in the Nuxeo Platform. This is handy if you have changed the default name or if you have multiple repositories.</span>

```
X-NXRepository: myCustomRepositoryName
```

## <span><span>X-NXenrichers.document</span></span>

{{#> callout type='info' }}

<span><span>Available since 7.2 to replace&nbsp;</span></span>`X-NXContext-Category`.

{{/callout}}

<span><span>&nbsp;</span>It is sometimes useful to optimize the number of requests you send to the server. For that reason we provide a mechanism for requesting more information on the answer, simply by specifying the context you want in the request header. For instance, <span>when specifying&nbsp;`<span><span>X-NXenrichers.document</span></span> = "thumbnail"`, the JSON payload of the document REST calls response contains the related attached file thumbnail of the document. You can add several content enrichers into the header separated by comma. [(Content Enrichers listing)]({{page page='content-enricher'}})</span>
</span>

```
X-NXenrichers.document: "thumbnail"
```

## <span>X-<span>Versioning-Option</span></span>

<span>This header can be used when you need to increment the minor or major version and return the versioned document. (<span>Since 5.9.5</span>) By default, no version checkin is done and 'live' (snapshot) document is returned. This is handy if you have to update the document while incrementing the version for instance.</span>

<span>Accepted values are <span>MAJOR, MINOR or NONE</span>.
</span>

```
X-Versioning-Option: MAJOR
```

## &nbsp;X-NXfetch.document

This header can be used to load additional parts of an object whose entity-type is `document`.

```
X-NXfetch.document: value1,value2,...
```

Value could be:

*   `versionLabel`: Loads the versioning information
*   `lock` : Loads the lock owner and the lock date
*   `properties`: Loads every properties associated with a resolver and having a marshaller registered
*   Any field name (`dc:creator`, `dc:subjects`): Loads the given field if it's associated with a resolver and the related entity has a marshaller registered.
    For example, `dc:creator` would be loaded because it references a user and a user marshaller is provided by the Nuxeo Platform.
    Built-in fetchable properties are `dc:creator`, `dc:contributors`, `dc:lastContributor`, `dc:subjects`, `dc:coverage`, `dc:nature`.

{{#> callout type='info' }}

More details about properties you can fetch here: [Document JSON and Extended Fields]({{page page='json-marshalling'}})

{{/callout}}

## depth

This header can be used to control the aggregation depth.

Accepted values are:

*   `root`: Loads only the root element, does not load any enricher or fetched properties.
*   `children`:&nbsp; Loads the root document and one level of enricher or fetched properties.
*   `max`: Load the root, one level of enricher and fetched properties. And for each loaded children, loads one level of enricher or fetched properties.

```
depth: children
```

{{#> callout type='info' }}

More details about the control of the depth here: [Aggregating Marshallers and Avoiding Infinite Loops]({{page page='json-marshalling'}})

{{/callout}}

* * *

&nbsp;

<div class="row" data-equalizer="" data-equalize-on="medium">

<div class="column medium-6">{{#> panel heading="Related Documentation"}}

*   [JSON Marshalling]({{page page='json-marshalling'}})
*   [Ngnix bug](https://doc.nuxeo.com/display/ADMINDOC/HTTP+and+HTTPS+Reverse-Proxy+Configuration#HTTPandHTTPSReverse-ProxyConfiguration-Ngnixissue)

{{/panel}}</div>

<div class="column medium-6">

{{! Please update the label and target spaces in the Content by Label macro below. }}

&nbsp;

&nbsp;

</div>

</div>