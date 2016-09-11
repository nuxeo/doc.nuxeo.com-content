---
title: Cross-Origin Resource Sharing (CORS)
review:
    comment: ''
    date: ''
    status: ok
labels:
    - cors
    - 5-7-2
toc: true
confluence:
    ajs-parent-page-id: '17334379'
    ajs-parent-page-title: Other Repository APIs
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: viewpage.action?pageId=17334317
    canonical_source: viewpage.action?pageId=17334317
    page_id: '17334317'
    shortlink: LYAIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/LYAIAQ'
    source_link: /pages/viewpage.action?pageId=17334317
history:
    - 
        author: Frantz Fischer
        date: '2016-09-02 13:54'
        message: ''
        version: '20'
    - 
        author: Solen Guitter
        date: '2014-02-26 09:21'
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
{{#> panel type='code' heading='Simplest contribution'}}

```html/xml
 <extension target="org.nuxeo.ecm.platform.web.common.requestcontroller.service.RequestControllerService" point="corsConfig">
    <corsConfig name="foobar">
      <pattern>/nuxeo/site/foobar/.*</pattern>
    </corsConfig>
 </extension>
```

{{/panel}}

## Configuration

Here is the list of all contribution attributes. There are all optional.

<table><tbody><tr><th colspan="1">Attribute name</th><th colspan="1">Description</th><th colspan="1">Default value</th><th colspan="1"><span style="color: rgb(102,153,204);">Possible values</span> <span style="color: rgb(102,153,204);">(</span><span style="color: rgb(102,153,204);">"|"</span> <span style="color: rgb(102,153,204);">separates possible values)</span></th></tr><tr><td colspan="1">`allowGenericHttpRequests`</td><td colspan="1">

If false, only valid and accepted CORS requests that be allowed (strict CORS filtering).

</td><td colspan="1">`true`</td><td colspan="1">`true` | `false`</td></tr><tr><td colspan="1">`allowOrigin`</td><td colspan="1">

The whitespace-separated list of origins that the CORS filter must allow.

</td><td colspan="1">

`*`

</td><td colspan="1">`*&nbsp;| <span class="nolink">http://example.com&nbsp;</span><span class="nolink">http://example.com:8080</span>`</td></tr><tr><td colspan="1">`allowSubdomains`</td><td colspan="1">

If true the CORS filter will allow requests from any origin which is a sub-domain origin of the allowed origins.

</td><td colspan="1">`false`</td><td colspan="1">`true` | `false`</td></tr><tr><td colspan="1">`supportedMethods`</td><td colspan="1">The list of the supported HTTP methods.</td><td colspan="1">`<span style="color: rgb(61,61,61);">GET, POST, HEAD, OPTIONS</span>`</td><td colspan="1">"," separates list of HTTP methods</td></tr><tr><td colspan="1">`supportedHeaders`</td><td colspan="1">The names of the supported author request headers.</td><td colspan="1">`*`</td><td colspan="1">*&nbsp;| "," separates list of headers</td></tr><tr><td colspan="1">`exposedHeaders`</td><td colspan="1">

The list of the response headers other than simple response headers that the browser should expose to the author of the cross-domain request through the `XMLHttpRequest.getResponseHeader()` method.

</td><td colspan="1">`-`</td><td colspan="1">"," separates list of headers</td></tr><tr><td colspan="1">`supportsCredentials`</td><td colspan="1">

Indicates whether user credentials, such as cookies, HTTP authentication or client-side certificates, are supported.

</td><td colspan="1">`true`</td><td colspan="1">`true` | `false`</td></tr><tr><td colspan="1">`maxAge`</td><td colspan="1">

Indicates how long the results of a preflight request can be cached by the web browser, in seconds.

</td><td colspan="1">`-1`</td><td colspan="1">`integer`</td></tr></tbody></table>

For instance, a `fooly` complete contribution could looks like:

{{#> panel type='code' heading='Fooly contribution'}}

```html/xml
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

## Making sure the contribution is taken into account

To debug your CORS configuration, you might use `cURL`&nbsp;and look at the response. If you haven't blocked OPTIONS method, you should test with the preflight request for an expected POST request:

{{#> panel type='code' heading='Simulate preflight request'}}

```bash
curl --verbose -H "Origin: http://www.nuxeo.com" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: X-Requested-With" -X OPTIONS http://localhost:8080/nuxeo/site/foobar/upload
```

{{/panel}}

With the default configuration, preflight's response must looks like:

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

With these "Access-Control-Allow-*" headers containing expected values.

&nbsp;