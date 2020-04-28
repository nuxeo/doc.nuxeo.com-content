---
title: Contributing New Input-Output Types
review:
    comment: ''
    date: '2018-01-15'
    status: ok
labels:
    - lts2016-ok
    - codec
    - marshalling
    - troger
    - automation
    - excerpt
    - lts2017-ok
confluence:
    ajs-parent-page-id: '18451738'
    ajs-parent-page-title: Automation
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Contributing+New+Input-Output+Types
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Contributing+New+Input-Output+Types'
    page_id: '18451679'
    shortlink: 34wZAQ
    shortlink_source: 'https://doc.nuxeo.com/x/34wZAQ'
    source_link: /display/NXDOC/Contributing+New+Input-Output+Types
tree_item_index: 1100
history:
    -
        author: Solen Guitter
        date: '2014-03-31 17:54'
        message: ''
        version: '2'
    -
        author: Alain Escaffre
        date: '2014-03-31 09:34'
        message: ''
        version: '1'

---
{{! excerpt}}

This pages explains how to add new input/output types to the Automation Service.

{{! /excerpt}}

Default input/output types are blob, document or void. You can extend the input/output types by contributing the new marshalling logic to automation.

Marshalling and operation binding logic is done by selecting client and server side using the JSON type name. At this stage, we're always using the Java type simple name in lowercase. This makes the operation binding logic happy.

The logic you need to provide is as follow:

*   The JSON type name,
*   The POJO class,
*   A writing method that puts data extracted from the POJO object into the JSON object,
*   A reading method that gets data from the JSON object and builds a POJO object from it,
*   A reference builder that extracts the server reference from a POJO object,
*   A reference resolver that provides access to a POJO object giving a server reference.

Server and client do not share classes, so you need to provide two marshalling implementation classes.

Server side, you should provide a [codec](http://explorer.nuxeo.org/nuxeo/site/distribution/latest/viewExtensionPoint/org.nuxeo.ecm.automation.server.AutomationServer--codecs). The implementation class is to be contributed to the automation server component using the `codecs` extension point.

```xml
  <extension target="org.nuxeo.ecm.automation.server.AutomationServer"
        point="codecs">
        <codec class="org.nuxeo.ecm.automation.server.test.MyObjectCodec" />
  </extension>
```

[`MyObjectCodec`](https://github.com/nuxeo/nuxeo-features/blob/master/nuxeo-automation/nuxeo-automation-test/src/test/java/org/nuxeo/ecm/automation/server/test/MyObjectCodec.java) class should extend [`org.nuxeo.ecm.automation.server.jaxrs.io.ObjectCodec`](https://github.com/nuxeo/nuxeo-features/blob/master/nuxeo-automation/nuxeo-automation-io/src/main/java/org/nuxeo/ecm/automation/io/services/codec/ObjectCodec.java). The most common codecs provided by default into the Nuxeo server are implemented into [`org.nuxeo.ecm.automation.server.jaxrs.io.ObjectCodecService`](https://github.com/nuxeo/nuxeo-features/blob/master/nuxeo-automation/nuxeo-automation-io/src/main/java/org/nuxeo/ecm/automation/io/services/codec/ObjectCodecService.java).

For the client side configuration, see [Operation & Business Objects](https://github.com/nuxeo/nuxeo-java-client#operation--business-objects).

* * *
