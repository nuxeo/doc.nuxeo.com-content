---
title: Automation Helpers
labels:
    - automation
    - automation-component
    - excerpt
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

Two helpers are set by default into Nuxeo Platform: "**Fn**" and "**HTTP**".

*   **Fn**:
    Functions of **Fn** helper can be retrieved on this [class](https://github.com/nuxeo-archives/nuxeo-features/blob/master/nuxeo-automation/nuxeo-automation-features/src/main/java/org/nuxeo/ecm/automation/features/PlatformFunctions.java). (Fn.getVocabularyLabel(...), Fn.getNextId(), Fn.getEmails(...).....)

*   **HTTP**:
    Functions of **HTTP** helper can be used to make remote REST Calls.

### **HTTP** Examples

```
import org.nuxeo.ecm.core.api.Blob;
import org.nuxeo.ecm.core.api.CoreSession;
import org.nuxeo.ecm.automation.AutomationService;
import org.nuxeo.ecm.automation.OperationContext;
import org.nuxeo.ecm.automation.OperationException;

Map params = new HashMap<>();

// Defining MVEL expression and store it in Operation Context under 'script' key parameter
params.put("script","Context.result = HTTP.call(\"Administrator\",\"Administrator\",\"GET\", \"http://localhost:18090/api/v1/path/default-domain\");");

OperationContext ctx = new OperationContext(session);

// Running the operation 'RunScript' which is evaluate a MVEL expression 'script'
automationService.run(ctx, "RunScript", params);

// 'result' will be the JSON Payload definition of the document 'default-domain'
String result = ((Blob) ctx.get("result")).getString();
```

```
import org.nuxeo.ecm.core.api.Blob;
import org.nuxeo.ecm.core.api.CoreSession;
import org.nuxeo.ecm.automation.AutomationService;
import org.nuxeo.ecm.automation.OperationContext;
import org.nuxeo.ecm.automation.OperationException;

// Defining the new document to create in JSON Format
String data = "{\"entity-type\": \"document\",\"type\": \"Workspace\",\"name\":\"newName\",\"properties\": {\"dc:title\":\"My title\",\"dc:description\":\" \"}}";

Map headers = new HashMap<>();
headers.put("Content-type", "application/json+nxentity");
Map params = new HashMap<>();
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

## Contributions

Automation Helpers can be contributed to the Nuxeo Platform easily through extension point:

```

Default Contribution

Custom Contribution
In order to contribute custom Helpers contribution, you have to create your own POJO extending the interface 'org.nuxeo.ecm.automation.context.ContextHelper':

package org.test;

import org.nuxeo.ecm.automation.context.ContextHelper;

public class DummyHelper implements ContextHelper {

    public String helper1() {
        return "hello";
    }
}

```