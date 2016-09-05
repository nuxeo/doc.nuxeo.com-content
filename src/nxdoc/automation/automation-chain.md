---
title: Automation Chain
labels:
    - automation
confluence:
    ajs-parent-page-id: '22380844'
    ajs-parent-page-title: Automation
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: Automation+Chain
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC60/Automation+Chain'
    page_id: '22380638'
    shortlink: XoBVAQ
    shortlink_source: 'https://doc.nuxeo.com/x/XoBVAQ'
    source_link: /display/NXDOC60/Automation+Chain
history:
    - 
        author: Solen Guitter
        date: '2016-08-30 16:10'
        message: ''
        version: '18'
    - 
        author: Alain Escaffre
        date: '2014-05-02 17:04'
        message: ''
        version: '17'
    - 
        author: Solen Guitter
        date: '2014-04-07 11:12'
        message: ''
        version: '16'
    - 
        author: Alain Escaffre
        date: '2014-04-02 02:48'
        message: ''
        version: '15'
    - 
        author: Solen Guitter
        date: '2013-09-20 17:15'
        message: ''
        version: '14'
    - 
        author: Solen Guitter
        date: '2013-09-20 17:10'
        message: ''
        version: '13'
    - 
        author: Solen Guitter
        date: '2013-07-29 12:18'
        message: ''
        version: '12'
    - 
        author: Solen Guitter
        date: '2013-07-29 12:17'
        message: Fixed formatting and typos
        version: '11'
    - 
        author: Vladimir Pasquier
        date: '2013-07-23 12:12'
        message: ''
        version: '10'
    - 
        author: Solen Guitter
        date: '2013-07-17 14:47'
        message: ''
        version: '9'
    - 
        author: Solen Guitter
        date: '2013-07-17 12:03'
        message: ''
        version: '8'
    - 
        author: Solen Guitter
        date: '2013-07-17 12:03'
        message: >-
            Added link, formatting, replaced "operation chain" with "automation
            chain"
        version: '7'
    - 
        author: Vladimir Pasquier
        date: '2013-07-16 16:35'
        message: ''
        version: '6'
    - 
        author: Vladimir Pasquier
        date: '2013-07-16 16:34'
        message: ''
        version: '5'
    - 
        author: Solen Guitter
        date: '2011-11-07 18:25'
        message: Migrated to Confluence 4.0
        version: '4'
    - 
        author: Solen Guitter
        date: '2011-11-07 18:25'
        message: corrected links
        version: '3'
    - 
        author: Bogdan Stefanescu
        date: '2010-06-25 18:02'
        message: ''
        version: '2'
    - 
        author: Bogdan Stefanescu
        date: '2010-06-24 23:37'
        message: ''
        version: '1'

---
{{#> callout type='tip' }}

You can use [Nuxeo Studio]({{page space='studio' page='automation'}}) for contributing new automation chain graphically.

This page explains all the details of the necessary Platform contribution (that Studio produces) for an in-depth comprehension of the framework. Reading it is not necessary if you start with Automation.

{{/callout}}{{! excerpt}}

An automation chain is a pipe of parametrized atomic operations. This means the automation chain specifies the parametrization of each operation in the chain and not only the list of operations to execute. Because of this, when executing an automation chain, you should only specify the chain's name. The chain will be fetched from the registry and operations will be executed one after the other using the parametrization present in the chain.

{{! /excerpt}}

Chain contribution is done via the [Nuxeo extension point mechanism]({{page page='runtime-and-component-model'}}). The extension point name is [`chains`](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-6.0/viewExtensionPoint/org.nuxeo.ecm.core.operation.OperationServiceComponent--chains) and the component exposing the extension point is [`org.nuxeo.ecm.core.operation.OperationServiceComponent`](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-6.0/viewComponent/org.nuxeo.ecm.core.operation.OperationServiceComponent) .

Here is an example of a chain extension:

```html/xml
  <extension target="org.nuxeo.ecm.core.operation.OperationServiceComponent" point="chains">
    <chain id="downloadAllChain">
     <param type="string" name="chainParameterName">chainParameterValue</param>
     <operation id="Context.FetchDocument"/>
      <operation id="Context.SetVar">
        <param type="string" name="name">aoname</param>
        <param type="object" name="value">expr:@{Document["dc:title"]}</param>
      </operation>
      <operation id="Document.GetChildren"/>
      <operation id="Blob.Get">
        <param type="string" name="xpath">file:content</param>
      </operation>
      <operation id="Blob.CreateZip">
        <param type="string" name="filename">expr:@{aoname}.zip</param>
      </operation>
      <operation id="Seam.DownloadFile"/>
    </chain>
  </extension>

```

This is defining a chain that will do the following:

*   Fetching the current document in user interface and setting it as the input of the next operation.
*   Setting a context variable named "aoname" to the value of the input document title. The input document is returned as the input for the next operation.
*   Getting the children of the input document. The list of children documents is returned as the input of the next operation.
*   For each document in the list getting the attached blob (the blob property to use is specified using the `xpath` parameter) and returning the list of blobs as the input of the next operation.
*   Creating a zip from the input list of blobs. The `filename` parameter is setting the file name to be used for the zip. The value of the file name is retrieved from the "aoname" context variable that was set before in the chain. Returning the zip blob as the input of the next operation.
*   Showing the download file to download the input zip from the browser (this is a UI operation).

To summarize, this chain gets the current document in the user interface, extracts all blobs from its direct children, zips these blobs and offers to download the resulted zip file in the web browser.

You can see that the chain is specifying in order each operation that should be executed along with the parameter values to be used at runtime. The parameters are either hard coded strings or EL expressions that allow dynamic computation of actual values.

An atomic operation in a chain is uniquely identified by its ID. Each parameter should specify the name of the operation parameter to set (see `@Param` annotation in [Contributing an Operation]({{page page='contributing-an-operation'}})) and the type of the value to inject. The type is a hint to the chain compiler to correctly transform the string into an injectable Java object.

Since 5.7.2, all chains can contain parameters as operation to be used from the automation context along their execution (such as the `chainParameterName` which can be fetched from the automation sub-context `@{ChainParameters['chainParameterName ']}`).

You can find the complete list of the supported types in [Contributing an Operation]({{page page='contributing-an-operation'}}).

Since 5.7.2, it is possible to create "composite operations": putting some chains into chain.

Here is an example of how to contribute this kind of automation chain:

```html/xml
<extension point="chains"
    target="org.nuxeo.ecm.core.operation.OperationServiceComponent">
    <chain id="contributedchain">
      <operation id="contributedchainLeaf" />
      <param type="string" name="messageChain" />
      <operation id="operation1">
        <param type="string" name="message">Hello 1!</param>
      </operation>
      <operation id="operation2">
        <param type="string" name="message">Hello 2!</param>
      </operation>
      <operation id="operation3">
        <param type="string" name="message">expr:@{ChainParameters['messageChain']}</param>
      </operation>
    </chain>
    <chain id="contributedchainLeaf">
      <operation id="operation1">
        <param type="string" name="message">Hello 1!</param>
      </operation>
      <operation id="operation2">
        <param type="string" name="message">Hello 2!</param>
      </operation>
    </chain>
  </extension>
```

The `contributedchainleaf` chain is contributed with its operations and is included as an operation into `contributedchain`. During the execution of this chain, a validation is running to check if all inputs/outputs of the different chains/operations in the stack are matching.

&nbsp;

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related topics in other documentation'}}

*   [Operations Index]({{page page='operations-index'}})
*   [Automation How-To Index]({{page page='automation-how-to-index'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Automation chains in Nuxeo Studio'}}

*   [Automation]({{page space='studio' page='automation'}})
*   [Automation Scripting]({{page space='studio' page='automation-scripting'}})

{{/panel}}</div></div>