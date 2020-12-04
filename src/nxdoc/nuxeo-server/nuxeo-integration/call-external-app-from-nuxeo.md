---
title: Call an external application from within Nuxeo
toc: true
review:
    comment: ''
    date: '2020-12-05'
    status: ok
tree_item_index: 50
---

This chapter will focus on having Nuxeo calls an external application to trigger a processing, send data or retrieve data.

<img src="https://app.lucidchart.com/publicSegments/view/ed826c37-96c2-481d-b4f6-56b8d55cf2e1/image.png" width="800px"/>

## Challenges to address

### Security

The goals is to handle:

- Authentication
  - How do we present credential to the external application?
- Identity propagation
  - Do we want to use a service account or not?

Nuxeo provides several **authentication protocols**:
 
- [OAuth2]({{page version='' space='nxdoc' page='using-oauth2'}} support / Cloud Services (prefered option}})
- Basic Authentication 
- Any kind of custom token 

### Handling errors

The goal is to handle:

- Exceptions in the external application
- Availability of the external application
- By extension, we may also need to address retry and back-off policies.

For interactive integration, the right approach is probably to let the exceptions and errors bubble. If needed, Nuxeo integrates the `failsafe` [library](https://jodah.net/failsafe/). For asynchronous/batch integration, the Nuxeo infrastructure already provides patterns to do automatic retries.

### Result handling

The goal is to handle asynchronous requests and callback/resume.

On the Nuxeo side, the standard way to address that is to:

- Store the call context inside the key/value store
- Expose a callback endpoint that will restore the context from the key/value store
- Store the final result into the transient store

In addition, all steps of the calls can be tracked inside the Audit Log.

## Interactive / API level integration

Here the idea is to extend or hook onto the Nuxeo API so that the call to the external service is executed when a Nuxeo API is called

### Possible Implementations

#### Automation Scripting

Automation Scripting allows to deploy JavaScript code that wraps Automation Operations.

Interesting operations are:

- Call external HTTP Service
  - `Blob.PostToURL`
  - `HTTP.Call` from [nuxeo-labs-operations](https://github.com/nuxeo/nuxeo-labs/tree/master/nuxeo-labs-operations)
  - Use the automation [HTTPHelper](https://github.com/nuxeo/nuxeo/blob/master/modules/platform/nuxeo-automation/nuxeo-automation-features/src/main/java/org/nuxeo/ecm/automation/features/HTTPHelper.java)
- Add a log entry
 	- `Audit.LogEvent`

Current limitations:

- No direct support for OAuth Service providers
- No API to access the transient store or the key/value store

#### Custom Java operation 

The idea is to build a custom Automation Operation that will:

- Contain the java logic to handle the remote call
- Expose a API for the rest of the platform including the client side

Interesting APIs and services:

- HTTP Client libraries
 	- Jersey Http Client
 	- Apache httpcore
 	- Google Http Client
- OAuth2ServiceProvider
- KeyValueStore
- TransientStore

#### Java Service

##### Concepts

A service wrapper allows you to:

- Expose a native Nuxeo service
- Bring consistency
- Implement unit tests

Leverage extension point system to configure calls to external service.

Access Existing Nuxeo Services through OAuth Service Providers registration and the Transient Store / Blob Store.


{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Integration/service-wrapper
    name: service-wrapper.png
    server#diagram#up_to_date
--}}
![service-wrapper](nx_asset://7947ecbc-36cf-40f3-b9f1-2f56336aac60 ?w=650,border=true)


Associated gains:

- Easier to use from the pure java code (Listener, Enricher, etc.)
- Leverage extension point system

### API Integration

Two options are possible:

- Automation API
  - Automation Script or Automation Operation are exposed as part of the command API (RPC)
- Enrichers and adapters
 	- Integrate result of call to external service into existing Nuxeo API result 

  {{!--     ### nx_asset ###
      path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Integration/automation-rest-api.png
      name: automation-rest-api.png
      server#diagram#up_to_date
  --}}
  ![automation-rest-api.png](nx_asset://14d6b4e4-638d-4e27-ba88-f168eef01c72 ?w=650,border=true)


## Event Driven approach

The idea is to trigger the call to the external service via an event

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Integration/streams-intro
    name: streams-intro.png
    server#screenshot#up_to_date
--}}
![streams-intro](nx_asset://46fa57db-00c2-4930-8f8a-eddde23e23a3 ?w=650,border=true)


### Possible implementation

#### Native Nuxeo Integration

- Event Listener
  - Synchronous or asynchronous Java class 
- Work
 	- Asynchronous batch
- Computation
  - Stream processing

#### Kafka Integration

##### Concepts

Leverage `nuxeo-stream` API or even directly Kafka API:

- Leverage events or messages published by Nuxeo in Kafka
- Deploy a Kafka Consumer/Producer
  - Only depend on Kafka API
 	- Read or write messages to communicate with Nuxeo

<img src="https://app.lucidchart.com/publicSegments/view/a55374e0-b5b3-432b-927d-c5b80a341974/image.png" width="600px"/>

##### Code sample for the Kafka integration

You can check the `nuxeo-external-service-sample` [Github repository](https://github.com/nuxeo-sandbox/nuxeo-external-service-sample), which contains a sample code to manage communication between a Nuxeo Server and an external service using `nuxeo-stream` (Kafka).

<img src="https://github.com/nuxeo-sandbox/nuxeo-external-service-sample/raw/master/doc/principles.png" width="600px"/>

## Event and CallBack system

Define a model for Async / Callback system

<img src="https://app.lucidchart.com/publicSegments/view/f96a15e6-ef69-4646-a077-0cb869402ce8/image.png" width="600px"/>

Review complete flow based on how it currently works for AWS Lambda

<img src="https://app.lucidchart.com/publicSegments/view/5c56708f-fd85-49a5-99c7-79d3a4e3d67f/image2.png" width="800px"/>

<!--
I think that it would make sense to extract a standard code sample for implementing such a flow:

 - standard structure in KVStore
 	- call ID 
 	- Context info
 		- user
 		- target document/documents
 		- info needed to resume processing after callback 
 - standard structure in Transient Store
 	- blobs and result
 - standard callback endpoint
 	- Check KV to resume context
 	- Store result in Transicent Store
 	- Resume processing
 		- Listener?
 		- Work?
 		- Computation?
 -->
 
## Client side

Here are the possible approaches to integrate an external application inside Nuxeo UI on the front-end side:

- Direct JavaScript
 	- Custom JavaScript to call external API
- Custom Webcomponents
- IFrame / Popup integration	

Challenges to address:

- Authentication
 	- OAuth integration
- Handling errors and availability
- Async and Return code
 	- SSE, WebWorker..
- UI/UX

{{#> callout type='info' heading='training'}}
Test the Nuxeo API with the [Nuxeo Javascript Client]({{page version='' space='nxdoc' page='discover-nuxeo-platform-apis'}})
{{/callout}}