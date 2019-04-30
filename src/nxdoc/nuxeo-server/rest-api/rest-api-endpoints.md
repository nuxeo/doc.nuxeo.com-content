---
title: REST API Endpoints
description: Nuxeo REST API provides many document-oriented endpoints, but also allows you to customize your own. This page lists all the endpoints provided by Nuxeo.
review:
    comment: ''
    date: '2018-01-15'
    status: ok
labels:
    - lts2016-ok
    - rest-api
    - troger
    - endpoint
    - lts2017-ok
toc: true
tree_item_index: 100
---

Nuxeo REST API provides many document-oriented endpoints, but also allows you to customize your own.

Here are the endpoints provided by Nuxeo:

## {{> anchor 'resources-endpoints'}}Resources Endpoints

Perform CRUD operations on Nuxeo resources in REST style. The following resources are exposed:

<div class="table-scroll">
  <table class="hover">
    <tbody>
      <tr>
        <td class="small-3">**Documents**</td>
        <td class="small-3">
          `/nuxeo/api/v1/id/{docId}`
          `/nuxeo/api/v1/path/{path}`
        </td>
        <td  class="small-6">
          CRUD on documents including paginated search
          (See [Document Resources Endpoints]({{page page='document-resources-endpoints'}}))
        </td>
      </tr>
      <tr>
        <td class="small-3">**Users**</td>
        <td class="small-3">
          `/nuxeo/api/v1/user/{userId}`
        </td>
        <td class="small-6">CRUD on users</td>
      </tr>
      <tr>
        <td class="small-3">**Groups**</td>
        <td class="small-3">
          `/nuxeo/api/v1/group/{groupId}`
        </td>
        <td class="small-6">CRUD on user groups</td>
      </tr>
      <tr>
        <td class="small-3">**Directories**</td>
        <td class="small-3">
          `/nuxeo/api/v1/directory/{directoryId}`
        </td>
        <td class="small-6">CRUD on directories</td>
      </tr>
      <tr>
        <td class="small-3">**Document Type, Schema and Facet definitions**</td>
        <td class="small-3">
          `/nuxeo/api/v1/config/types/{type}`<br/>
          `/nuxeo/api/v1/config/schemas/{schema}`<br/>
          `/nuxeo/api/v1/config/facets/{facet}`
        </td>
        <td class="small-6">
          Remote introspection of the repository structure, automated form generation, etc. See [ticket NXP-14114](https://jira.nuxeo.com/browse/NXP-14114) for more information.
        </td>
      </tr>
      <tr>
        <td class="small-3">**Search**</td>
        <td class="small-3">
          `/nuxeo/api/v1/search/lang`<br/>
          `/nuxeo/api/v1/search/pp`<br/>
          `/nuxeo/api/v1/search/saved`
        </td>
        <td class="small-6">
          Perform search by query or page provider, store search and reproduce it later. See [Search Resource Endpoint]({{page page='search-endpoints'}}) for more information.
        </td>
      </tr>
      <tr>
        <td class="small-3">**OAuth2**</td>
        <td class="small-3">
          `/nuxeo/api/v1/oauth2/provider`<br/>
          `/nuxeo/api/v1/oauth2/client`<br/>
          `/nuxeo/api/v1/oauth2/token`
        </td>
        <td class="small-6">
          CRUD on OAuth2 providers, clients and tokens. See [OAuth2 Resource Endpoint]({{page page='oauth2-endpoint'}}) for more information.</td>
      </tr>
      <tr>
        <td class="small-3">**Workflows and Tasks**</td>
        <td class="small-3">
          `/nuxeo/api/v1/workflow/{workflowId}`<br/>
          `/nuxeo/api/v1/task/{taskId}`
        </td>
        <td class="small-6">See [Workflow and Task Resources Endpoints]({{page page='workflow-task-endpoints'}}) for more information.</td>
      </tr>
      <tr>
        <td class="small-3">**Batch Upload**</td>
        <td class="small-3">
          `/nuxeo/api/v1/upload/{batchId}`
        </td>
        <td class="small-6">
          Upload a set of files before using them in a transactional operation. See [Batch Upload Endpoint]({{page page='batch-upload-endpoint'}}) for more information.
        </td>
      </tr>
    </tbody>
  </table>
</div>

## Command Endpoint

<div class="table-scroll">
  <table class="hover">
    <tbody>
      <tr>
        <td class="small-3">**Command Endpoint**</td>
        <td class="small-3">
          `/nuxeo/api/v1/automation/{operationId}`
        </td>
        <td  class="small-6">
          Call an operation or chain of operations deployed on the server. See [Command Resource Endpoint]({{page page='command-endpoint'}}) for more information.
        </td>
      </tr>
    </tbody>
  </table>
</div>

The [Command Resource Endpoint]({{page page='command-endpoint'}}) calls a "command" (an operation or chain of operations) deployed on the server. This is the primary way of exposing the platform services remotely. [All operations](http://nuxeo.github.io/api-playground/#/commands) from the [Automation]({{page page='content-automation-concepts'}}) module are exposed, offering more than 100 commands to remotely process resources.

The framework makes it easy to [add new custom Java operations]({{page page='contributing-an-operation'}}) to complete the API if you're missing a web-service. You can also [chain operations server-side using Nuxeo Studio]({{page page='how-to-create-an-automation-chain'}}), in order to expose a coarse-grained API that fits your business logic, without any development.

## Customizing Nuxeo REST API

Not completely satisfied with what's on offer? See how to [contribute a REST API endpoint]({{page page='howto-contribute-to-the-rest-api#contributing-a-rest-api-endpoint'}})!
