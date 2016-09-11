---
title: Web Exceptions - Errors
review:
    comment: ''
    date: ''
    status: ok
labels:
    - lts2015-ok
    - rest-api-component
    - rest-api
    - exception
toc: true
confluence:
    ajs-parent-page-id: '28475677'
    ajs-parent-page-title: REST API
    ajs-space-key: NXDOC710
    ajs-space-name: Nuxeo Platform Developer Documentation — LTS 2015
    canonical: Web+Exceptions+-+Errors
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC710/Web+Exceptions+-+Errors'
    page_id: '28475445'
    shortlink: NYCyAQ
    shortlink_source: 'https://doc.nuxeo.com/x/NYCyAQ'
    source_link: /display/NXDOC710/Web+Exceptions+-+Errors
history:
    - 
        author: Solen Guitter
        date: '2015-04-29 14:05'
        message: ormat and add link about standard HTTP status code
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
The Nuxeo API communicates error exceptions through standard HTTP status codes paired with exception details.

You can find more details about standard HTTP status codes on:

*   [The official W3C documentation](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html)
*   [The dedicated Wikipedia page](http://en.wikipedia.org/wiki/List_of_HTTP_status_codes)

Two modes are available:

*   Simple (without exception stack trace)

*   Extended (with exception stack trace)

Simple mode is activated by default. The extended mode can be configured through a parameter (in [nuxeo.conf]({{page space='admindoc710' page='configuration-parameters-index-nuxeoconf'}})): `org.nuxeo.rest.stack.enable=true`.

## Properties

<table><tbody><tr><th colspan="1">Key</th><th colspan="1">Value</th></tr><tr><td colspan="1">

`entity-type`

string

</td><td colspan="1">for exceptions is 'exception'</td></tr><tr><td colspan="1">

`code`

string

</td><td colspan="1">The technical exception identity (java class)</td></tr><tr><td colspan="1">

`status`

integer

</td><td colspan="1">The HTTP status of the error response</td></tr><tr><td colspan="1">

`message`

string

</td><td colspan="1">A human readable message about the error</td></tr><tr><td colspan="1">

`stacktrace` (extended version)

string

</td><td colspan="1">All stack trace in one simple string</td></tr><tr><td colspan="1">

`exception` (extended version)

json object

</td><td colspan="1">All stack trace wrapped into JSON Object</td></tr></tbody></table>

## Exception Example

Here is an example of an exception when fetching a missing document.

### Simple Mode

{{#> panel type='code' heading='JSON Response'}}

```
{
  "entity-type": "exception",
  "code": "org.nuxeo.ecm.webengine.model.exceptions.WebResourceNotFoundException",
  "status": 404,
  "message": "Failed to get document /wrongID"
}
```

{{/panel}}

### Extended Mode

```
{
  "entity-type": "exception",
  "code": "org.nuxeo.ecm.webengine.model.exceptions.WebResourceNotFoundException",
  "status": 404,
  "message": "Failed to get document /wrongID",
  "stacktrace": "org.nuxeo.ecm.webengine.WebException: Failed to get document /wrongID\n\tat org.nuxeo.ecm.webengine.WebException.newException(WebException.java[.........]
  "exception": {
    "className": "org.nuxeo.ecm.webengine.model.exceptions.WebResourceNotFoundException",
    "cause": {
      "className": "org.nuxeo.ecm.core.model.NoSuchDocumentException",
      "cause": null,
      "message": "No such document: No such document: /wrongID",
      "localizedMessage": "No such document: No such document: /wrongID",
      "stackTrace": [
      [.................................]
}
```

{{#> callout type='note' }}

The Automation Client requires to get the full stack trace by default. So compatibility has been kept and all automation client calls will activate the extended mode.

All calls with accepted media type `application/json+nxentity` will activate stack trace display.

{{/callout}}

### Mode Activation API

For testing purpose, you have the possibility to activate the extended mode by adding this code snippet:

```
JsonFactoryManager jsonFactoryManager = Framework.getLocalService(JsonFactoryManager.class);
if (!jsonFactoryManager.isStackDisplay()) {
    jsonFactoryManager.toggleStackDisplay();
}
```

To toggle the display mode (simple or extended) during runtime execution, you can:

*   Use the Automation `JsonStack.ToggleDisplay` Operation (Administrator role only).
    Example:

    {{#> panel type='code' heading='cURL Call'}}

    ```
    curl -H 'Content-Type:application/json+nxrequest' -X POST -d '{"params":{},"context":{}}' -u Administrator:Administrator http://localhost:8080/nuxeo/api/v1/automation/JsonStack.ToggleDisplay
    ```

    {{/panel}}
*   use the following endpoint URL into your browser (Administrator role only).

    {{#> panel type='code' heading='Type into your browser address'}}

    ```
    http://localhost:8080/nuxeo/site/automation/doc/toggleStackDisplay
    ```

    {{/panel}}