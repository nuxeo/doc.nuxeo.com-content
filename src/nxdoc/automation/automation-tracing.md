---
title: Automation Tracing
review:
    comment: ''
    date: ''
    status: ok
labels:
    - lts2015-ok
    - automation-component
    - trace
    - automation
confluence:
    ajs-parent-page-id: '28475489'
    ajs-parent-page-title: Automation
    ajs-space-key: NXDOC710
    ajs-space-name: Nuxeo Platform Developer Documentation — LTS 2015
    canonical: Automation+Tracing
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC710/Automation+Tracing'
    page_id: '28475745'
    shortlink: YYGyAQ
    shortlink_source: 'https://doc.nuxeo.com/x/YYGyAQ'
    source_link: /display/NXDOC710/Automation+Tracing
tree_item_index: 1000
history:
    -
        author: Solen Guitter
        date: '2016-07-25 15:59'
        message: ix broken excerp
        version: '9'
    -
        author: Solen Guitter
        date: '2014-04-10 17:54'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2013-11-27 15:41'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2013-11-27 15:40'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2013-11-27 15:40'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2013-11-27 15:40'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2013-11-27 15:33'
        message: ''
        version: '3'
    -
        author: Alain Escaffre
        date: '2013-11-26 00:14'
        message: ''
        version: '2'
    -
        author: Alain Escaffre
        date: '2013-11-26 00:13'
        message: ''
        version: '1'

---
{{! excerpt}}{{! multiexcerpt name=''}}

&nbsp;Automation chains and operations calls information is collected during their execution by the Automation Trace feature.

{{! /multiexcerpt}}{{! /excerpt}}

This Automation trace mode can be enabled through the&nbsp;[nuxeo.conf file]({{page space='admindoc710' page='configuration-parameters-index-nuxeoconf'}})&nbsp;properties:

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">Property</th><th colspan="1">Default value</th><th colspan="1">Description</th></tr><tr><td colspan="1">{{{multiexcerpt 'org.nuxeo.automation.trace' page='ADMINDOC710:Configuration Parameters Index (nuxeo.conf)'}}}</td><td colspan="1">{{{multiexcerpt 'org.nuxeo.automation.trace-default' page='ADMINDOC710:Configuration Parameters Index (nuxeo.conf)'}}}</td><td colspan="1">{{{multiexcerpt 'org.nuxeo.automation.trace-description' page='ADMINDOC710:Configuration Parameters Index (nuxeo.conf)'}}}</td></tr><tr><td colspan="1">

{{{multiexcerpt 'org.nuxeo.automation.trace.printable' page='ADMINDOC710:Configuration Parameters Index (nuxeo.conf)'}}}

</td><td colspan="1">{{{multiexcerpt 'org.nuxeo.automation.trace.printable-default' page='ADMINDOC710:Configuration Parameters Index (nuxeo.conf)'}}}</td><td colspan="1">{{{multiexcerpt 'org.nuxeo.automation.trace.printable-description' page='ADMINDOC710:Configuration Parameters Index (nuxeo.conf)'}}}</td></tr></tbody></table></div>{{#> callout type='info' }}

To display traces even for executions without errors, this appender is added by default in your `nuxeo-***-tomcat/lib/log4j` configuration file:

```xml
<category name="org.nuxeo.ecm.automation.core">    
  <priority value="INFO" />
</category>
```

{{/callout}}

##### Examples: Simple chain

```
****** chain ******
Name: chainA
Produced output type: DocumentModelImpl

****** Context.FetchDocument ******
Chain ID: chainA
Class: FetchContextDocument
Method:
 'run' | Input Type: interface org.nuxeo.ecm.core.api.DocumentModel |
Output Type: interface org.nuxeo.ecm.core.api.DocumentModel
Input: DocumentModelImpl(5eff3564-1a69-4d91-ae0c-51fb879a6a5a, path=/default-domain, title=Default domain)
Context Variables | Key: ChainParameters, Value: {}

****** Seam.AddInfoMessage ******
Chain ID: chainA
Class: AddInfoMessage
Method: 'run' | Input Type: void | Output Type: void
Input: DocumentModelImpl(5eff3564-1a69-4d91-ae0c-51fb879a6a5a, path=/default-domain, title=Default domain)
Parameters  | Name: message, Value: Message INFO
Context Variables | Key: ChainParameters, Value: {}
```

&nbsp;

*   '`chainA`' is executed, produces a document model and runs two operations:&nbsp; [`Context.FetchDocument`](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-7.10/viewOperation/Context.FetchDocument) &nbsp;and&nbsp; [`Seam.AddInfoMessage`](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-7.10/viewOperation/Seam.AddInfoMessage) .
*   These two operations display the following information during their executions:

    *   &nbsp;Input Type, Output Type,
    *   &nbsp;The Input (here the 'default-domain' document),
    *   &nbsp;Parameters defined into each operation with their values,
    *   &nbsp;Context Variables (injected during execution).

##### Examples: Composite Chains

```
****** chain ******
Name: chainA
Produced output type: DocumentModelImpl

****** Context.FetchDocument ******
Chain ID: chainA
Class: FetchContextDocument
Method:
 'run' | Input Type: interface org.nuxeo.ecm.core.api.DocumentModel |
Output Type: interface org.nuxeo.ecm.core.api.DocumentModel
Input: DocumentModelImpl(5eff3564-1a69-4d91-ae0c-51fb879a6a5a, path=/default-domain, title=Default domain)
Context Variables | Key: ChainParameters, Value: {}

****** Context.RunOperation ******
Chain ID: chainA
Class: RunOperation
Method: 'run' | Input Type: void | Output Type: void
Input: DocumentModelImpl(5eff3564-1a69-4d91-ae0c-51fb879a6a5a, path=/default-domain, title=Default domain)
Parameters  | Name: id, Value: chainB | Name: isolate, Value: false
Context Variables | Key: ChainParameters, Value: {}

****** start sub chain ******

****** chain ******
Parent Chain ID: chainA
Name: chainB
Produced output type: DocumentModelImpl

****** Context.FetchDocument ******
Chain ID: chainB
Class: FetchContextDocument
Method:
 'run' | Input Type: interface org.nuxeo.ecm.core.api.DocumentModel |
Output Type: interface org.nuxeo.ecm.core.api.DocumentModel
Input: DocumentModelImpl(5eff3564-1a69-4d91-ae0c-51fb879a6a5a, path=/default-domain, title=Default domain)
Context Variables | Key: ChainParameters, Value: {}

****** Seam.AddInfoMessage ******
Chain ID: chainB
Class: AddInfoMessage
Method: 'run' | Input Type: void | Output Type: void
Input: DocumentModelImpl(5eff3564-1a69-4d91-ae0c-51fb879a6a5a, path=/default-domain, title=Default domain)
Parameters  | Name: message, Value: Message INFO
Context Variables | Key: ChainParameters, Value: {}

****** end sub chain ******

****** Seam.AddInfoMessage ******
Chain ID: chainA
Class: AddInfoMessage
Method: 'run' | Input Type: void | Output Type: void
Input: DocumentModelImpl(5eff3564-1a69-4d91-ae0c-51fb879a6a5a, path=/default-domain, title=Default domain)
Parameters  | Name: message, Value: test
Context Variables | Key: ChainParameters, Value: {} | Key: Seam.AddInfoMessage, Value: Message INFO
```

&nbsp;

*   '`chainA`' is executed, produces a document model and runs three operations:&nbsp;[Context.FetchDocument](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-7.10/viewOperation/Context.FetchDocument),&nbsp;[Context.RunOperation](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-7.10/viewOperation/Context.RunOperation)&nbsp;and&nbsp;[Seam.AddInfoMessage](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-7.10/viewOperation/Seam.AddInfoMessage).
*   The&nbsp;`Context.RunOperation`&nbsp;runs a second subchain '`chainB`':

    *   These chain has parent ID attribute to '`chainA`';
    *   It contains two operations:&nbsp;`Context.FetchDocument`&nbsp;and&nbsp;`Seam.AddInfoMessage`;
    *   At subchain ending, third&nbsp;`Seam.AddInfoMessage`&nbsp;operation contained into '`chainB`' is executed.

##### JMX Automation Trace Activation

The Automation Trace mode can be activated through JMX via `org.nuxeo:TracerFactory` MBean during runtime.

{{#> callout type='tip' }}

You can also activate the traces (and download them for each chain) from the dynamical documentation of Automation module : [http://localhost:8080/nuxeo/site/automation/doc](http://localhost:8080/nuxeo/site/automation/doc) (you should adapt server name and port number).

{{/callout}}

Please follow guidelines to activate it:

1.  Install the VisualVM MBean plugin
    ![]({{file name='screenshot_2013-08-29_15-16-23.png'}} ?w=500)
2.  Run VisualVM and connect it to the Nuxeo server.
    ![]({{file name='screenshot_2013-08-29_15-41-25.png'}} ?w=500)
3.  Look for the MBean org.automation.trace.TracerFactory to access to several services.
    ![]({{file name='screenshot_2013-08-29_15-22-59.png'}} ?w=500)

    *   '`clearTraces`' to clean up traces collected during execution.
    *   '`toggleRecording`' to enable/disable automation trace mode.
    *   '`setPrintableTraces`' to filter on several chains to print.

{{#> callout type='note' }}

Traces are collected and cached for one hour.

{{/callout}}
