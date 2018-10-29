---
title: Automation Helpers
review:
    comment: ''
    date: '2017-12-14'
    status: ok
labels:
    - lts2016-ok
    - automation
    - fdavid
    - excerpt
    - lts2017-ok
toc: true
confluence:
    ajs-parent-page-id: '18451738'
    ajs-parent-page-title: Automation
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Automation+Helpers
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Automation+Helpers'
    page_id: '24674372'
    shortlink: RIB4AQ
    shortlink_source: 'https://doc.nuxeo.com/x/RIB4AQ'
    source_link: /display/NXDOC/Automation+Helpers
tree_item_index: 1500
history:
    -
        author: Solen Guitter
        date: '2015-10-12 10:18'
        message: ix page layout to use 2/3 layou
        version: '16'
    -
        author: Solen Guitter
        date: '2015-10-12 10:17'
        message: ''
        version: '15'
    -
        author: Vladimir Pasquier
        date: '2015-05-26 13:22'
        message: ''
        version: '14'
    -
        author: Vladimir Pasquier
        date: '2015-05-26 13:21'
        message: ''
        version: '13'
    -
        author: Vladimir Pasquier
        date: '2015-05-26 13:18'
        message: ''
        version: '12'
    -
        author: Vladimir Pasquier
        date: '2015-05-26 13:17'
        message: ''
        version: '11'
    -
        author: Vladimir Pasquier
        date: '2015-05-26 13:15'
        message: ''
        version: '10'
    -
        author: Vladimir Pasquier
        date: '2015-05-26 13:14'
        message: ''
        version: '9'
    -
        author: Vladimir Pasquier
        date: '2015-05-26 13:14'
        message: ''
        version: '8'
    -
        author: Vladimir Pasquier
        date: '2015-05-26 13:14'
        message: ''
        version: '7'
    -
        author: Vladimir Pasquier
        date: '2015-05-26 13:13'
        message: ''
        version: '6'
    -
        author: Vladimir Pasquier
        date: '2015-05-26 13:13'
        message: ''
        version: '5'
    -
        author: Vladimir Pasquier
        date: '2015-05-26 13:13'
        message: ''
        version: '4'
    -
        author: Vladimir Pasquier
        date: '2015-05-26 13:12'
        message: ''
        version: '3'
    -
        author: Vladimir Pasquier
        date: '2015-05-26 12:43'
        message: ''
        version: '2'
    -
        author: Vladimir Pasquier
        date: '2015-05-25 18:45'
        message: ''
        version: '1'

---
{{! excerpt}}

Automation Helpers are stateless tool functions used in MVEL or Javascript Automation scripts.

{{! /excerpt}}

## Default Automation Helpers

Two helpers are set by default into Nuxeo Platform: **Fn** and **HTTP**.

*   **Fn**:
    Functions of **Fn** helper can be retrieved on this [class](https://github.com/nuxeo/nuxeo/blob/master/nuxeo-features/nuxeo-automation/nuxeo-automation-features/src/main/java/org/nuxeo/ecm/automation/features/PlatformFunctions.java). (`Fn.getVocabularyLabel(...)`, `Fn.getNextId()`, `Fn.getEmails(...)`, ...)

*   **HTTP**:
    Functions of **HTTP** helper can be used to make remote REST Calls.

### HTTP Examples

{{#> panel type='code' heading='GET REST Call from Nuxeo to another Nuxeo repository'}}

```java
import org.nuxeo.ecm.core.api.Blob;
import org.nuxeo.ecm.core.api.CoreSession;
import org.nuxeo.ecm.automation.AutomationService;
import org.nuxeo.ecm.automation.OperationContext;
import org.nuxeo.ecm.automation.OperationException;

Map<String, Object> params = new HashMap<>();

// Defining MVEL expression and store it in Operation Context under 'script' key parameter
params.put("script","Context.result = HTTP.call(\"Administrator\",\"Administrator\",\"GET\", \"http://localhost:18090/api/v1/path/default-domain\");");

OperationContext ctx = new OperationContext(session);

// Running the operation 'RunScript' which is evaluate a MVEL expression 'script'
automationService.run(ctx, "RunScript", params);

// 'result' will be the JSON Payload definition of the document 'default-domain'
String result = ((Blob) ctx.get("result")).getString();
```

{{/panel}}{{#> panel type='code' heading='POST REST Call from Nuxeo to another Nuxeo repository'}}

```java
import org.nuxeo.ecm.core.api.Blob;
import org.nuxeo.ecm.core.api.CoreSession;
import org.nuxeo.ecm.automation.AutomationService;
import org.nuxeo.ecm.automation.OperationContext;
import org.nuxeo.ecm.automation.OperationException;

// Defining the new document to create in JSON Format
String data = "{\"entity-type\": \"document\",\"type\": \"Workspace\",\"name\":\"newName\",\"properties\": {\"dc:title\":\"My title\",\"dc:description\":\" \"}}";

Map<String, String> headers = new HashMap<>();
headers.put("Content-type", "application/json");
Map<String, Object> params = new HashMap<>();
OperationContext ctx = new OperationContext(session);

// Store headers and JSON Format in Operation Context
ctx.put("data", data);
ctx.put("headers", headers);

// Set the MVEL Expression to assess in RunScript operation
params.put("script", "Context.result = HTTP.call(\"Administrator\",\"Administrator\",\"POST\", \"http://localhost:18090/api/v1/path/default-domain\", Context.data, Context.headers);");

// RunScript
automationService.run(ctx, "RunScript", params);

// 'result' will be the current document JSON Payload definition which has been created under 'default-domain'
String result = ((Blob) ctx.get("result")).getString();
```

{{/panel}}

## Contributions

Automation Helpers can be contributed to the Nuxeo Platform easily through extension point:

```xml
<extension-point name="contextHelpers">
  <documentation>
    <code>
      <!-- 'id' is the prefix to use in MVEL or Javascript scripts to get access to all embedded functions -->
      <contextHelper id="platformFunctions" class="org.nuxeo.ecm.automation.features.PlatformFunctions"/>
    </code>
  </documentation>
  <object class="org.nuxeo.ecm.automation.context.ContextHelperDescriptor"/>
</extension-point>
```

### Default Contribution

```xml
<extension target="org.nuxeo.ecm.core.operation.OperationServiceComponent"
           point="contextHelpers">
  <contextHelper id="Fn" class="org.nuxeo.ecm.automation.features.PlatformFunctions"/>
  <contextHelper id="HTTP" class="org.nuxeo.ecm.automation.features.HTTPHelper"/>
</extension>
```

### Custom Contribution

In order to contribute custom Helpers contribution, you have to create your own POJO extending the interface `org.nuxeo.ecm.automation.context.ContextHelper`:

{{#> panel type='code' heading='XML Contribution'}}

```xml
<extension target="org.nuxeo.ecm.core.operation.OperationServiceComponent"
           point="contextHelpers">
  <contextHelper id="dummy" class="org.test.DummyHelper"/>
</extension>
```

{{/panel}}{{#> panel type='code' heading='POJO'}}

```java
package org.test;

import org.nuxeo.ecm.automation.context.ContextHelper;

public class DummyHelper implements ContextHelper {

    public String helper1() {
        return "hello";
    }
}

```

{{/panel}}
