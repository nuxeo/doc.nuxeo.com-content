---
title: Automation
confluence:
    ajs-parent-page-id: '17334392'
    ajs-parent-page-title: Customization and Development
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Automation
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/Automation'
    page_id: '17334309'
    shortlink: JYAIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/JYAIAQ'
    source_link: /display/NXDOC58/Automation
history:
    - 
        author: Manon Lumeau
        date: '2016-07-20 15:02'
        message: 'emove children display macro '
        version: '7'
    - 
        author: Solen Guitter
        date: '2013-10-28 12:28'
        message: ''
        version: '6'
    - 
        author: Alain Escaffre
        date: '2013-10-27 20:42'
        message: ''
        version: '5'
    - 
        author: Solen Guitter
        date: '2013-09-20 15:41'
        message: ''
        version: '4'
    - 
        author: Alain Escaffre
        date: '2013-09-17 04:08'
        message: ''
        version: '3'
    - 
        author: Alain Escaffre
        date: '2013-09-17 01:03'
        message: ''
        version: '2'
    - 
        author: Alain Escaffre
        date: '2013-09-17 00:55'
        message: ''
        version: '1'

---
{{! excerpt}}

In this section you'll find information on how to use the Automation service, how to contribute a new chain, a new operation, etc.

{{! /excerpt}}

If you are not familiar with Content Automation, you should first read the&nbsp;[Content Automation introduction in the Architecture section]({{page page='content-automation'}}).

Here are the different sub-sections of this chapter:

*   [Operations Index]({{page space='NXDOC58' page='Operations Index'}})&nbsp;&mdash;&nbsp;<span class="smalltext">The lists of operations and their description is available on the Nuxeo Platform Explorer.</span>
*   [Contributing an Operation]({{page space='NXDOC58' page='Contributing an+Operation'}})&nbsp;&mdash;&nbsp;<span class="smalltext">In order to implement an operation you need to create a Java class annotated with @Operation. An operation class should also provide at least one method that will be invoked by the automation service when executing the operation. To mark a method as executable you must annotate it using @OperationMethod.</span>
*   [Contributing an Automation Chain]({{page space='NXDOC58' page='Contributing an+Automation+Chain'}})&nbsp;&mdash;&nbsp;<span class="smalltext">An automation chain is a pipe of parametrized atomic operations. This means the automation chain specifies the parametrization of each operation in the chain and not only the list of operations to execute. Because of this, when executing an automation chain, you should only specify the chain's name. The chain will be fetched from the registry and operations will be executed one after the other using the parametrization present in the chain.</span>
*   [Automation Service API]({{page space='NXDOC58' page='Automation Service+API'}})
*   [Returning a Custom Result with Automation]({{page space='NXDOC58' page='Returning a+Custom+Result+with+Automation'}})&nbsp;&mdash;&nbsp;<span class="smalltext">As automatic marshalling is not implemented into Automation server and client, only Document(s) and Blob(s) can be manipulated. Therefore, the way to return a custom type is to encapsulate the value in a Blob.</span>
*   [Automation Exception]({{page space='NXDOC58' page='Automation Exception'}})&nbsp;&mdash;&nbsp;<span class="smalltext">Since Nuxeo 5.7.3, Automation provides means to debug and handle exception during the Automation operations and chains calls.</span>
*   [Automation Tracing]({{page space='NXDOC58' page='Automation Tracing'}})
*   [Use of MVEL in Automation Chains]({{page space='NXDOC58' page='Use of+MVEL+in+Automation+Chains'}})