---
title: Cross-Origin Resource Sharing (CORS)
review:
    comment: ''
    date: '2017-12-11'
    status: ok
labels:
    - lts2016-ok
    - cors
    - rest-api
    - troger
    - lts2017-ok
toc: true
confluence:
    ajs-parent-page-id: '13664833'
    ajs-parent-page-title: REST API
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: viewpage.action?pageId=14257084
    canonical_source: viewpage.action?pageId=14257084
    page_id: '14257084'
    shortlink: vIvZ
    shortlink_source: 'https://doc.nuxeo.com/x/vIvZ'
    source_link: /pages/viewpage.action?pageId=14257084
tree_item_index: 800
history:
    -
        author: Frantz Fischer
        date: '2016-09-02 13:43'
        message: ''
        version: '25'
    -
        author: Michaël Vachette
        date: '2016-07-15 15:31'
        message: ''
        version: '24'
    -
        author: Bertrand Chauvin
        date: '2016-04-22 13:32'
        message: Define excerpt for future REST API Training
        version: '23'
    -
        author: Solen Guitter
        date: '2015-08-31 13:53'
        message: ''
        version: '22'
    -
        author: Solen Guitter
        date: '2015-08-31 13:52'
        message: ''
        version: '21'
    -
        author: Solen Guitter
        date: '2015-08-31 13:51'
        message: Update table of contents look
        version: '20'
    -
        author: Arnaud Kervern
        date: '2014-02-25 11:02'
        message: ''
        version: '19'
    -
        author: Solen Guitter
        date: '2013-08-01 15:35'
        message: ''
        version: '18'
    -
        author: Arnaud Kervern
        date: '2013-07-29 18:33'
        message: ''
        version: '17'
    -
        author: Arnaud Kervern
        date: '2013-07-29 18:33'
        message: ''
        version: '16'
    -
        author: Arnaud Kervern
        date: '2013-07-29 18:32'
        message: ''
        version: '15'
    -
        author: Solen Guitter
        date: '2013-07-29 17:22'
        message: Added Since 5.7.2
        version: '14'
    -
        author: Florent Guillaume
        date: '2013-07-29 17:10'
        message: ''
        version: '13'
    -
        author: Florent Guillaume
        date: '2013-07-29 17:10'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2013-07-29 17:00'
        message: Fixed typos
        version: '11'
    -
        author: Arnaud Kervern
        date: '2013-07-29 16:38'
        message: ''
        version: '10'
    -
        author: Arnaud Kervern
        date: '2013-07-29 16:38'
        message: ''
        version: '9'
    -
        author: Arnaud Kervern
        date: '2013-07-29 16:36'
        message: ''
        version: '8'
    -
        author: Arnaud Kervern
        date: '2013-07-29 16:35'
        message: ''
        version: '7'
    -
        author: Arnaud Kervern
        date: '2013-07-29 16:34'
        message: ''
        version: '6'
    -
        author: Arnaud Kervern
        date: '2013-07-29 16:34'
        message: ''
        version: '5'
    -
        author: Arnaud Kervern
        date: '2013-07-29 16:32'
        message: ''
        version: '4'
    -
        author: Arnaud Kervern
        date: '2013-07-29 16:31'
        message: ''
        version: '3'
    -
        author: Arnaud Kervern
        date: '2013-07-29 16:31'
        message: ''
        version: '2'
    -
        author: Arnaud Kervern
        date: '2013-07-29 16:29'
        message: ''
        version: '1'

---
If you perform cross-domain requests from any JavaScript client to access WebEngine resources or [Automation APIs]({{page page='content-automation-concepts'}}), there's a chance that your browser will block it. CORS allows you to communicate with Nuxeo from another domain using `XMLHttpRequests`.

Nuxeo uses a filter to handle those cases. It's based on [Vladimir Dzhuvinov's universal CORS filter](http://software.dzhuvinov.com/cors-filter.html), and allows you to configure on which URLs cross-origin headers are needed. You'll be able to configure each URL independently.

## Configuration

Here is the list of all [optional] contribution attributes.

<div class="table-scroll">
  <table class="hover">
    <tbody>
      <tr>
        <th>Attribute name</th>
        <th>Description / Possible Values</th>
        <th>Default value</th>
      </tr>
      <tr>
        <td>`allowGenericHttpRequests`</td>
        <td>
          If false, only valid and accepted CORS requests are allowed (strict CORS filtering).<br />
          `true` | `false`
        </td>
        <td>`true`</td>
      </tr>
      <tr>
        <td>`allowOrigin`</td>
        <td>
          The whitespace-separated list of origins that the CORS filter must allow.<br />
          `*` | `http://example.com http://example.com:8080`
        </td>
        <td>`*`</td>
      </tr>
      <tr>
        <td>`allowSubdomains`</td>
        <td>
          If true, CORS filter will allow requests from any origin which is a sub-domain origin of the allowed origins.<br />
          `true` | `false`
        </td>
        <td>`false`</td>
      </tr>
      <tr>
        <td>`supportedMethods`</td>
        <td>
          The list of the supported HTTP methods.<br />
          `*` | comma-separated list of HTTP methods
        </td>
        <td>`GET, POST, HEAD, OPTIONS`</td>
      </tr>
      <tr>
        <td>`supportedHeaders`</td>
        <td>
          The names of the supported author request headers.<br />
        `*` | comma-separated list of headers
        </td>
        <td>`*`</td>
      </tr>
      <tr>
        <td>`exposedHeaders`</td>
        <td>
          The list of  response headers other than simple response headers that the browser should expose to the author of the cross-domain request through the `XMLHttpRequest.getResponseHeader()` method.<br />
          `*` | comma-separated list of headers
        </td>
        <td>`*`</td>
      </tr>
      <tr>
        <td>`supportsCredentials`</td>
        <td>
          Indicates whether user credentials, such as cookies, HTTP authentication or client-side certificates, are supported.<br />
          `true` | `false`
        </td>
        <td>`true`</td>
      </tr>
      <tr>
        <td>`maxAge`</td>
        <td>
          Indicates how long the results of a preflight request can be cached by the web browser, in seconds.<br />
          `integer`
        </td>
        <td>`-1`</td>
      </tr>
    </tbody>
  </table>
</div>

## Verifying That the Contribution Is Taken into Account

To debug your CORS configuration,  use a `cURL` request and look at the response. If you haven't blocked the OPTIONS method, you should test with the preflight request for an expected POST request:

{{#> panel type='code' heading='Simulate preflight request'}}

```bash
curl --verbose -H "Origin: http://www.nuxeo.com" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: X-Requested-With" -X OPTIONS http://NUXEO_SERVER/nuxeo/site/foobar/upload
```

{{/panel}}

With the default configuration, preflight's response looks like this:

{{#> panel type='code' heading='Default response'}}

```bash
< HTTP/1.1 200 OK
< Server: Apache-Coyote/1.1
< Access-Control-Allow-Origin: http://www.nuxeo.com
< Access-Control-Allow-Credentials: true
< Access-Control-Allow-Methods: HEAD, POST, GET, OPTIONS
< Access-Control-Allow-Headers: X-Requested-With
< Content-Length: 0 
```

{{/panel}}

The `Access-Control-Allow-*` headers contain the expected values.

## Examples

{{! multiexcerpt name='CORS-contrib'}}

Here is an example of the simplest contribution, allowing cross-domain requests on the whole `foobar` site:

{{#> panel type='code' heading='Simplest contribution'}}

```xml
<extension target="org.nuxeo.ecm.platform.web.common.requestcontroller.service.RequestControllerService" point="corsConfig">
    <corsConfig name="foobar" supportedMethods ="GET,POST,HEAD,OPTIONS,DELETE,PUT">
      <pattern>/nuxeo/.*</pattern>
    </corsConfig>
</extension>
```

{{/panel}}{{! /multiexcerpt}}

A `fooly` complete contribution would look like:

{{#> panel type='code' heading='Fooly contribution'}}

```xml
<extension target="org.nuxeo.ecm.platform.web.common.requestcontroller.service.RequestControllerService" point="corsConfig">
    <corsConfig name="fooly" allowGenericHttpRequests="true"
      allowOrigin="http://example.com http://example.com:8080"
      allowSubdomains="true" supportedMethods="GET"
      supportedHeaders="Content-Type, X-Requested-With"
      exposedHeaders="X-Custom-1, X-Custom-2"
      supportsCredentials="false" maxAge="3600">
      <pattern>/fooly/site/.*</pattern>
    </corsConfig>
</extension>
```

{{/panel}}
