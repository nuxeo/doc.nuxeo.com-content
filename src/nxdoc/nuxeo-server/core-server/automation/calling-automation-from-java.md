---
title: Calling Automation from Java
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
    canonical: Calling+Automation+from+Java
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Calling+Automation+from+Java'
    page_id: '16091683'
    shortlink: I4r1
    shortlink_source: 'https://doc.nuxeo.com/x/I4r1'
    source_link: /display/NXDOC/Calling+Automation+from+Java
tree_item_index: 700
history:
    -
        author: Solen Guitter
        date: '2015-03-23 15:43'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2014-04-10 17:54'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2014-04-10 17:50'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2014-04-07 11:04'
        message: ''
        version: '7'
    -
        author: Alain Escaffre
        date: '2014-04-02 02:49'
        message: ''
        version: '6'
    -
        author: Vladimir Pasquier
        date: '2013-10-23 12:15'
        message: ''
        version: '5'
    -
        author: Vladimir Pasquier
        date: '2013-10-23 12:09'
        message: ''
        version: '4'
    -
        author: Vladimir Pasquier
        date: '2013-10-23 12:02'
        message: ''
        version: '3'
    -
        author: Vladimir Pasquier
        date: '2013-10-23 11:56'
        message: ''
        version: '2'
    -
        author: Vladimir Pasquier
        date: '2013-10-23 11:29'
        message: ''
        version: '1'

---
On server side, [AutomationService](http://community.nuxeo.com/api/nuxeo/9.10/javadoc/org/nuxeo/ecm/automation/AutomationService.html) can be used to:

*   Run a contributed chain with chain/operations
*   Run a runtime chain created on the fly
*   Run a contributed operation

{{! excerpt}}

The Automation service provides chain(s)/operation(s) parameters setting and [OperationContext](http://community.nuxeo.com/api/nuxeo/9.10/javadoc/org/nuxeo/ecm/automation/OperationContext.html) instantiation to inject Automation input(s).

{{! /excerpt}}

## Run Contributed Chain with Chain/Operations

Chain Contribution:

```xml
<extension point="chains"
             target="org.nuxeo.ecm.core.operation.OperationServiceComponent">
<chain id="contributedchain">
      <param type="string" name="paramChain" />
      <operation id="o1">
        <param type="string" name="param1">Hello 1!</param>
      </operation>
      <operation id="o2">
        <param type="string" name="param2">Hello 2!</param>
      </operation>
</chain>
</extension>
```

Automation Service API - with chain parameter setting:

```java
org.nuxeo.ecm.core.api.DocumentModel doc;
org.nuxeo.ecm.automation.AutomationService service;
org.nuxeo.ecm.core.api.CoreSession session;

// Input setting
org.nuxeo.ecm.automation.OperationContext ctx = new OperationContext(session);
ctx.setInput(doc);
// Setting parameters of the chain
Map<String, Object> params = new HashMap<String, Object>();
params.put("paramChain", "Hello i'm a parameter chain!");
// Run Automation service
service.run(ctx, "contributedchain", params);
```

## Run Runtime Chain Created on the Fly

Automation Service API - with chain/operations parameters setting:

```java
org.nuxeo.ecm.core.api.DocumentModel doc;
org.nuxeo.ecm.automation.AutomationService service;
org.nuxeo.ecm.core.api.CoreSession session;

// Input setting
org.nuxeo.ecm.automation.OperationContext ctx = new OperationContext(session);
ctx.setInput(doc);
org.nuxeo.ecm.automation.OperationChain chain = new OperationChain("notRegisteredChain");
// Adding operations - operations parameters setting
chain.add("Document.Fetch");
chain.add("o1").set("param1", "Hello 1!");
chain.add("o2").set("param2", "Hello 2!");
// Setting parameters of the chain
Map<String, Object> params = new HashMap<String, Object>();
params.put("messageChain", "Hello i'm a chain!");
chain.addChainParameters(params);
// Run Automation service
service.run(ctx, chain);
```

## Run Contributed Operation

Operation Contribution:

```xml
  <extension point="operations"
             target="org.nuxeo.ecm.core.operation.OperationServiceComponent">
    <operation class="org.nuxeo.ecm.automation.core.test.Operation1" />
  </extension>
```

Java Class Operation:

```java
@Operation(id = "o1")
public class Operation1 {

    @Param(name = "message")
    protected String message;

    @OperationMethod
    public DocumentModel run(DocumentModel doc) throws Exception {
        return doc;
    }

}
```

Automation Service API - with operations parameters setting:

```java
org.nuxeo.ecm.core.api.DocumentModel doc;
org.nuxeo.ecm.automation.AutomationService service;
org.nuxeo.ecm.core.api.CoreSession session;

// Input setting
org.nuxeo.ecm.automation.OperationContext ctx = new OperationContext(session);
ctx.setInput(doc);
// Operation1 parameter setting
Map<String,Object> params = new HashMap<String,Object>();
params.put("message","messageValue");
service.run(ctx, "o1", params);
```
