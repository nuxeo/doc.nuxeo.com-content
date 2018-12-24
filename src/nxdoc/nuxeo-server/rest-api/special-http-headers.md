---
title: Special HTTP Headers
review:
    comment: ''
    date: '2018-01-15'
    status: ok
labels:
    - lts2016-ok
    - http
    - rest-api
    - troger
    - nxdoc-730
    - lts2017-ok
toc: false
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
tree_item_index: 300
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
        message: 'Add X-NXproperties and X-NXenrichers.document, replacing deprecated X-NXDocumentProperties and X-NXContext-Category'
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
In order to have more control over REST API Calls, you can use the following special Nuxeo HTTP headers.

<div class="table-scroll">
  <table class="hover">
    <tbody>
      <tr>
        <th class="small-2">HTTP Header</th>
        <th>Default Value</th>
        <th>Description</th>
        <th class="small-5">Example</th>
      </tr>
      <tr>
        <td>`X-NXVoidOperation`</td>
        <td>false</td>
        <td>Force server to return no content (like a void operation).</td>
        <td>`X-NXVoidOperation: true` <br/>
        Can be useful when dealing with blobs to avoid having the blob output sent back to the client.</td>
      </tr>
      <tr>
        <td>`Nuxeo-Transaction-Timeout`</td>
        <td>30</td>
        <td>Specify the duration of the transaction timeout (seconds)</td>
        <td>`Nuxeo-Transaction-Timeout: 300` <br/>
        (Sets timeout for 5 minutes for longer transactions)</td>
      </tr>
      <tr>
        <td>`properties`</td>
        <td> &#42; </td>
        <td>Filter properties so the returned document contains only data from the specified schemas</td>
        <td>`properties: dublincore, file` <br/>
        (`*` Returns data from all schemas)</td>
      </tr>
      <tr>
        <td>`Repository`</td>
        <td>default</td>
        <td>Specify the repository name if it has been changed or if you have multiple repositories</td>
        <td>`Repository: myCustomRepositoryName`</td>
      </tr>
      <tr>
        <td>`enrichers.document`</td>
        <td></td>
        <td>Request further information in the response. See [(Content Enrichers)]({{page page='content-enrichers'}}) for more details.</td>
        <td>`enrichers.document: "thumbnail"` <br/>
        (Returns related thumbnail of the document)</td>
      </tr>
      <tr>
        <td>`X-Versioning-Option`</td>
        <td>NONE</td>
        <td>Increment minor or major version and returns versioned document</td>
        <td>`X-Versioning-Option: MAJOR`</td>
      </tr>
      <tr>
        <td>`source`</td>
        <td></td>
        <td>Set this property in document context data to be used for automatic source-based versioning. See [source-based versioning]({{page page='versioning#source-based-versioning'}}) for more details.</td>
        <td>`source: REST`</td>
      </tr>
      <tr>
        <td>`fetch.document`</td>
        <td></td>
        <td>Load additional parts of an object with entity-type `document`</td>
        <td>
          `fetch.document: value1, value2,...` <br/>
          See [Document JSON and Extended Fields]({{page page='document-json-extended-fields'}}) for more details on accepted values.
        </td>
      </tr>
      <tr>
        <td>`depth`</td>
        <td>children</td>
        <td>Control aggregation depth</td>
        <td>
          `depth: children` <br/>
          Accepted values: `root`, `children`, `max`. <br/>
          See [Aggregating Marshallers and Avoiding Infinite Loops]({{page page='parameterizing-reusing-marshallers#aggregating-marshallers-infinite-loops'}}) for more details.
        </td>
      </tr>
      <tr>
        <td>`nx_es_sync`</td>
        <td>false</td>
        <td>Force ElasticSearch synchronous indexing during a REST call</td>
        <td>`nx_es_sync: true`</td>
      </tr>
      <tr>
        <td>`skipAggregates`</td>
        <td>false</td>
        <td>Tell the [search endpoint]({{page version='' space='nxdoc' page='search-endpoints'}}) to skip elasticsearch aggregate computation if any to speed up the query</td>
        <td>`skipAggregates: false`</td>
      </tr>
    </tbody>
  </table>
</div>

## Learn More

*   Test these headers on your local instance with [Nuxeo API Playground](http://nuxeo.github.io/api-playground/) (see [documentation]({{page version='' space='nxdoc' page='howto-nuxeo-api-playground'}}) to configure your local instance).

* * *

<div class="row" data-equalizer data-equalize-on="medium">
  <div class="column medium-6">
{{#> panel heading='Related Documentation'}}

- [JSON Marshalling]({{page page='json-marshalling'}})
- [Ngnix bug]({{page space='ADMINDOC' page='HTTP and+HTTPS+Reverse-Proxy+Configuration#HTTPandHTTPSReverse-ProxyConfiguration-Ngnixissue'}})
{{/panel}}
  </div>
</div>
