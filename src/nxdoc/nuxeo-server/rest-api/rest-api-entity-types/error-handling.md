---
title: Error Handling
review:
    comment: ''
    date: '2017-12-12'
    status: ok
labels:
    - lts2016-ok
    - exception
    - rest-api
    - troger
    - lts2017-ok
toc: true
version_override:
    LTS 2015: 710/nxdoc/web-exceptions-errors
    '6.0': 60/nxdoc/web-exceptions-errors
confluence:
    ajs-parent-page-id: '13664833'
    ajs-parent-page-title: REST API
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Web+Exceptions+-+Errors
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Web+Exceptions+-+Errors'
    page_id: '20513317'
    shortlink: JQI5AQ
    shortlink_source: 'https://doc.nuxeo.com/x/JQI5AQ'
    source_link: /display/NXDOC/Web+Exceptions+-+Errors
tree_item_index: 500
history:
    -
        author: Solen Guitter
        date: '2015-04-29 14:05'
        message: ''
        version: '14'
    -
        author: Solen Guitter
        date: '2015-04-29 13:31'
        message: format
        version: '13'
    -
        author: Solen Guitter
        date: '2014-08-21 15:17'
        message: Formatting and spelling
        version: '12'
    -
        author: Vladimir Pasquier
        date: '2014-08-21 12:02'
        message: ''
        version: '11'
    -
        author: Vladimir Pasquier
        date: '2014-08-21 12:01'
        message: ''
        version: '10'
    -
        author: Vladimir Pasquier
        date: '2014-08-21 11:27'
        message: ''
        version: '9'
    -
        author: Vladimir Pasquier
        date: '2014-08-21 00:36'
        message: ''
        version: '8'
    -
        author: Vladimir Pasquier
        date: '2014-08-21 00:10'
        message: ''
        version: '7'
    -
        author: Vladimir Pasquier
        date: '2014-08-21 00:00'
        message: ''
        version: '6'
    -
        author: Vladimir Pasquier
        date: '2014-08-20 23:59'
        message: ''
        version: '5'
    -
        author: Vladimir Pasquier
        date: '2014-08-20 23:59'
        message: ''
        version: '4'
    -
        author: Vladimir Pasquier
        date: '2014-08-20 23:58'
        message: ''
        version: '3'
    -
        author: Vladimir Pasquier
        date: '2014-08-20 23:49'
        message: adding web exception documentation
        version: '2'
    -
        author: Vladimir Pasquier
        date: '2014-08-20 23:41'
        message: ''
        version: '1'

---
The Nuxeo API communicates error messages through standard HTTP status codes paired with exception details.

You can find more details about standard HTTP status codes on:

*   [The official W3C documentation](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html)
*   [The dedicated Wikipedia page](http://en.wikipedia.org/wiki/List_of_HTTP_status_codes)

Two modes are available:

*   Simple (without exception stack trace)

*   Extended (with exception stack trace)

Simple mode is activated by default. The extended mode can be configured through a parameter (in [nuxeo.conf]({{page page='configuration-parameters-index-nuxeoconf'}})): `org.nuxeo.rest.stack.enable=true`.

## Properties

<div class="table-scroll">
  <table class="hover">
    <tbody>
      <tr>
        <th>Key</th>
        <th>Type</th>
        <th>Value</th>
      </tr>
      <tr>
        <td>`entity-type`</td>
        <td>string</td>
        <td>'exception' (in the case of exceptions)</td>
      </tr>
      <tr>
        <td>`status`</td>
        <td>integer</td>
        <td>The HTTP status of the error response</td>
      </tr>
      <tr>
        <td>`message`</td>
        <td>string</td>
        <td>A human-readable message about the error</td>
      </tr>
      <tr>
        <td>`stacktrace`</td>
        <td>string</td>
        <td>The entire stack trace in one string</td>
      </tr>
      <tr>
        <td>`exception`</td>
        <td>JSON object</td>
        <td>The entire stack trace wrapped into a JSON Object</td>
      </tr>
    </tbody>
  </table>
</div>

## Exception Example

Here is an example of an exception when fetching a missing document.

### Simple Mode

{{#> panel type='code' heading='JSON Response'}}

```json
{
  "entity-type": "exception",
  "status": 404,
  "message": "Failed to get document /wrongID"
}
```

{{/panel}}

### Extended Mode

```json
{
  "entity-type": "exception",
  "status": 404,
  "message": "Failed to get document /wrongID",
  "stacktrace": "org.nuxeo.ecm.webengine.WebException: Failed to get document /wrongID\n\tat org.nuxeo.ecm.webengine.WebException.newException(WebException.java[.........]",
  "exception": {
    "className": "org.nuxeo.ecm.webengine.model.exceptions.WebResourceNotFoundException",
    "cause": {
      "className": "org.nuxeo.ecm.core.model.NoSuchDocumentException",
      "cause": null,
      "message": "No such document: No such document: /wrongID",
      "localizedMessage": "No such document: No such document: /wrongID",
      "stackTrace": [
      [.................................]
      ]
    }
  }
}
```

### Mode Activation API

For testing purposes, you can activate the extended mode by adding this code snippet:

```
JsonFactoryManager jsonFactoryManager = Framework.getService(JsonFactoryManager.class);
if (!jsonFactoryManager.isStackDisplay()) {
    jsonFactoryManager.toggleStackDisplay();
}
```

To toggle the display mode (simple or extended) during runtime execution, you can:

*   Use the Automation `JsonStack.ToggleDisplay` Operation (Administrator role only)
    Example:

    {{#> panel type='code' heading='cURL Call'}}

    ```bash
    curl -H 'Content-Type:application/json+nxrequest' -X POST -d '{"params":{},"context":{}}' -u Administrator:Administrator http://NUXEO_SERVER:8080/nuxeo/api/v1/automation/JsonStack.ToggleDisplay
    ```

    {{/panel}}
*   Use the following endpoint URL in your browser (Administrator role only)

    {{#> panel type='code' heading='Type into your browser address'}}

    ```bash
    http://NUXEO_SERVER/nuxeo/site/automation/doc/toggleStackDisplay
    ```

    {{/panel}}

## Custom HTTP Status Code

Since Nuxeo Platform 9.3, you can customize the HTTP status code returned by the Nuxeo Platform when throwing a `NuxeoException`.

Default subclasses of `NuxeoException` are already mapped to the right HTTP status code, such as:

* `DocumentNotFoundException`: 404
* `DocumentSecurityException`: 403
* `ConcurrentUpdateException`: 409
* `WebResourceNotFoundException`: 404
* ...

The `NuxeoException` class supports new constructors where you can specify a status code that will be used as the response HTTP status code. The mapping of the `NuxeoException#statusCode` with the response HTTP status code is done by the `WebEngineExceptionMapper` class.

For instance, calling a REST API endpoint where a listener throws the following exception will lead to a response with its HTTP status code set to `409`.

```java
...
    public void handleEvent(Event event) {
        ...
        throw new NuxeoException("there is a conflict!", 409);
    }
...
```
