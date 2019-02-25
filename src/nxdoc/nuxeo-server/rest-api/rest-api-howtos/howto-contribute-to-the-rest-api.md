---
title: 'HOWTO: Contribute to the REST API'
review:
    comment: ''
    date: '2018-01-09'
    status: ok
details:
    howto:
        excerpt: Learn how to contribute to the REST API.
        level: Advanced
        tool: Code
        topics: REST API
labels:
    - howto
    - rest-api
    - excerpt
    - content-review-lts2017
    - lts2017-ok
toc: true
tree_item_index: 250
version_override:
    LTS 2016: 810/nxdoc/contributing-a-new-endpoint
    LTS 2015: 710/nxdoc/contributing-a-new-endpoint
---

The Nuxeo REST API provides many [endpoints]({{page page='rest-api-endpoints'}}). Moreover, it has been designed to be highly pluggable allowing to contribute your own endpoint whenever required.
Similarly, you can contribute your own [web adapter]({{page page='rest-api-web-adapters'}}).
Let's first see how the REST API works, then how it can be extended.

## How the REST API Works

 The REST API is coded in the [nuxeo-rest-api-server](https://github.com/nuxeo/nuxeo/tree/master/nuxeo-features/rest-api/nuxeo-rest-api-server) Maven module. It is a [WebEngine]({{page page='webengine-jax-rs'}}) module that:

 - Defines the [APIRoot](https://github.com/nuxeo/nuxeo/blob/master/nuxeo-features/rest-api/nuxeo-rest-api-server/src/main/java/org/nuxeo/ecm/restapi/server/jaxrs/APIRoot.java) instance, the resource class serving requests for `/nuxeo/api/v1` through the `javax.ws.rs.Path` annotation:

 ```java
 @Path("/api/v1{repo : (/repo/[^/]+?)?}")
 ```

 - Provides these resources as [Web Objects]({{page page='web-object-model'}}).

 - Allows the [Writers and Readers]({{page page='creating-your-own-marshaller'}}) to marshal and unmarshal these resources.

As an example, let’s have a look at the `directory` endpoint and see how it resolves a `GET` request on `/nuxeo/api/v1/directory/continent/africa`.

First, [APIRoot](https://github.com/nuxeo/nuxeo/blob/master/nuxeo-features/rest-api/nuxeo-rest-api-server/src/main/java/org/nuxeo/ecm/restapi/server/jaxrs/APIRoot.java) retrieves the proper directory `WebObject` with:

```java
@Path("/directory")
public Object doGetDirectory() {
    return newObject("directory");
}
```

The directory `WebObject` is made available by [DirectoryRootObject](https://github.com/nuxeo/nuxeo/blob/master/nuxeo-features/rest-api/nuxeo-rest-api-server/src/main/java/org/nuxeo/ecm/restapi/server/jaxrs/directory/DirectoryRootObject.java):

```java
@WebObject(type = "directory")
public class DirectoryRootObject extends DefaultObject {
    @Path("{directoryName}")
    public Object doGetDirectory(@PathParam("directoryName") String dirName){
         return newObject("directoryObject", dirName);
    }
}
```

This will resolve the directory name `continent` passed as a path parameter and serve the relevant [DirectoryObject](https://github.com/nuxeo/nuxeo/blob/master/nuxeo-features/rest-api/nuxeo-rest-api-server/src/main/java/org/nuxeo/ecm/restapi/server/jaxrs/directory/DirectoryObject.java).

This [DirectoryObject](https://github.com/nuxeo/nuxeo/blob/master/nuxeo-features/rest-api/nuxeo-rest-api-server/src/main/java/org/nuxeo/ecm/restapi/server/jaxrs/directory/DirectoryObject.java) then resolves the `africa` directory entry to serve the relevant [DirectoryEntryObject](https://github.com/nuxeo/nuxeo/blob/master/nuxeo-features/rest-api/nuxeo-rest-api-server/src/main/java/org/nuxeo/ecm/restapi/server/jaxrs/directory/DirectoryEntryObject.java):

```java
@Path("{entryId}")
public Object getEntry(@PathParam("entryId") final String entryId) {
    return withDirectorySession(directory, new DirectorySessionRunner<Object>()) {
        @Override
        Object run(Session session) throws ClientException {
            DocumentModel entry = session.getEntry(entryId);
            if (entry == null) {
                throw new WebResourceNotFoundException("Entry not found");
            }
            return newObject("directoryEntry", new DirectoryEntry(directory.getName(), entry));
        }
    });
}
```

 This [DirectoryEntryObject](https://github.com/nuxeo/nuxeo/blob/master/nuxeo-features/rest-api/nuxeo-rest-api-server/src/main/java/org/nuxeo/ecm/restapi/server/jaxrs/directory/DirectoryEntryObject.java) will finally return a [DirectoryEntry](https://github.com/nuxeo/nuxeo/blob/master/nuxeo-services/nuxeo-platform-directory/nuxeo-platform-directory-api/src/main/java/org/nuxeo/ecm/directory/api/DirectoryEntry.java) entity:

```java
@GET
public DirectoryEntry doGet() {
    return entry;
}
```

Last but not the least, this `DirectoryEntry` entity has to be serialized and unserialized in JSON. This can be respectively done by:

- [DirectoryEntryJsonWriter](https://github.com/nuxeo/nuxeo/blob/master/nuxeo-services/nuxeo-platform-directory/nuxeo-platform-directory-core/src/main/java/org/nuxeo/ecm/directory/io/DirectoryEntryJsonWriter.java) based on `javax.ws.rs.ext.MessageBodyWriter`.

- [DirectoryEntryJsonReader](https://github.com/nuxeo/nuxeo/blob/master/nuxeo-services/nuxeo-platform-directory/nuxeo-platform-directory-core/src/main/java/org/nuxeo/ecm/directory/io/DirectoryEntryJsonReader.java) based on `javax.ws.rs.ext.MessageBodyReader`.

## Extending the REST API: the Workflow Case

As an example, let's take the REST API endpoints allowing to initiate and run workflows. Documentation for these endpoints is available in the [API Playground](https://nuxeo.github.io/api-playground/#/resources):

- Workflow endpoint.
- WorkflowModel endpoint.
- Task endpoint.

### Main Principle: the Fragment Bundle

The most important point is to understand how we can extend the existing [Nuxeo REST API Server](https://github.com/nuxeo/nuxeo/tree/master/nuxeo-features/rest-api/nuxeo-rest-api-server) Maven module from another module in order to add new endpoints available under the existing `/nuxeo/api/v1` resource path.

This is possible thanks to the OSGI fragments. As defined in the [OSGI documentation](https://www.osgi.org/community/wiki/):

> A Bundle fragment, or simply a fragment, is a bundle whose contents are made available to another bundle (the fragment host).

In the case of the Workflow REST API, we added a new bundle called [nuxeo-routing-rest-api](https://github.com/nuxeo/nuxeo-platform-document-routing/tree/master/nuxeo-routing-rest-api) which is a fragment of the host bundle [rest-api bundle-server](https://github.com/nuxeo/nuxeo/tree/master/nuxeo-features/rest-api/nuxeo-rest-api-server). To achieve this, we simply needed to declare the `Fragment-Host` in the [MANIFEST.MF](https://github.com/nuxeo/nuxeo-platform-document-routing/blob/master/nuxeo-routing-rest-api/src/main/resources/META-INF/MANIFEST.MF) of the fragment bundle as follow:

```
Manifest-Version: 1.0
Bundle-ManifestVersion: 1
Bundle-Name: nuxeo-routing-rest-api
Bundle-SymbolicName: org.nuxeo.ecm.platform.restapi.server.routing;singleton:=true
Fragment-Host: org.nuxeo.ecm.platform.restapi.server
Bundle-Vendor: Nuxeo
Bundle-Version: 1.0.0
```

**This causes the classes included in the fragment bundle to be deployed as part of the host bundle.**

{{#> callout type='warning' }}

This also causes all of the other components in the fragment bundle not to be deployed.
Thus, any endpoint or web adapter class you add, respectively annotated with `@WebObject` or `@WebAdapter`, need to be in a standalone bundle, not in the same bundle as extension point XML contributions for instance.

{{/callout}}

### Contributing a REST API Endpoint

A REST API endpoint is defined by a class annotated with `@WebObject`.

In the fragment bundle, all the `@WebObject` annotated classes need to be placed in a package with a name prefixed with the package name of the [APIRoot](https://github.com/nuxeo/nuxeo/blob/master/nuxeo-features/rest-api/nuxeo-rest-api-server/src/main/java/org/nuxeo/ecm/restapi/server/jaxrs/APIRoot.java) class, i.e. [org.nuxeo.ecm.restapi.server.jaxrs](https://github.com/nuxeo/nuxeo/tree/master/nuxeo-features/rest-api/nuxeo-rest-api-server/src/main/java/org/nuxeo/ecm/restapi/server/jaxrs).

In the case of the Workflow REST API, the `@WebObject` annotated classes are grouped within the [org.nuxeo.ecm.restapi.server.jaxrs.routing](https://github.com/nuxeo/nuxeo-platform-document-routing/tree/master/nuxeo-routing-rest-api/src/main/java/org/nuxeo/ecm/restapi/server/jaxrs/routing) package.

As a direct result and thanks to a [routing method](https://github.com/nuxeo/nuxeo/blob/master/nuxeo-features/rest-api/nuxeo-rest-api-server/src/main/java/org/nuxeo/ecm/restapi/server/jaxrs/RepositoryObject.java#L92), the `@WebObject` annotated classes located in the fragment bundle will be discovered and made available under the `/nuxeo/api/v1` resource path as well as to their readers and writers. For instance, the [WorkflowObject](https://github.com/nuxeo/nuxeo-platform-document-routing/blob/master/nuxeo-routing-rest-api/src/main/java/org/nuxeo/ecm/restapi/server/jaxrs/routing/WorkflowObject.java) from the [nuxeo-routing-rest-api](https://github.com/nuxeo/nuxeo-platform-document-routing/tree/master/nuxeo-routing-rest-api) fragment bundle is automatically detected and available under the `/nuxeo/api/v1/workflow` path.

```java
@WebObject(type = "workflow")
@Produces(MediaType.APPLICATION_JSON)
public class WorkflowObject extends DefaultObject {

    @GET
    @Path("{workflowInstanceId}")
    public DocumentRoute getWorkflowInstance(@PathParam("workflowInstanceId") String workflowInstanceId) {
        DocumentModel workflowInstance;
        try {
            workflowInstance = getContext().getCoreSession().getDocument(new IdRef(workflowInstanceId));
            return workflowInstance.getAdapter(DocumentRoute.class);
        } catch (NuxeoException e) {
            e.addInfo("Can not get workflow instance with id: " + workflowInstanceId);
            throw e;
        }
    }
}
```

### Contributing a Web Adapter

A web adapter is defined by a class annotated with `@WebAdapter`.

In the exact same way as for a new endpoint, all the `@WebAdapter` annotated classes need to be placed in a package with a name prefixed with `org.nuxeo.ecm.restapi.server.jaxrs`.

In the case of the Workflow REST API, the `@WebAdapter` annotated classes are grouped within the [org.nuxeo.ecm.restapi.server.jaxrs.routing.adapter](https://github.com/nuxeo/nuxeo-platform-document-routing/tree/master/nuxeo-routing-rest-api/src/main/java/org/nuxeo/ecm/restapi/server/jaxrs/routing/adapter) package.

As a direct result, the `@WebAdapter` annotated classes located in the fragment bundle will be discovered and made available. For instance, the [WorkflowAdapter](https://github.com/nuxeo/nuxeo-platform-document-routing/blob/master/nuxeo-routing-rest-api/src/main/java/org/nuxeo/ecm/restapi/server/jaxrs/routing/adapter/WorkflowAdapter.java) from the [nuxeo-routing-rest-api](https://github.com/nuxeo/nuxeo-platform-document-routing/tree/master/nuxeo-routing-rest-api) fragment bundle is automatically detected and available under the `/nuxeo/api/v1/path/my/doc/path/@workflowAdapter` path.

```java
@WebAdapter(name = WorkflowAdapter.NAME, type = "workflowAdapter")
public class WorkflowAdapter extends DefaultAdapter {

    public static final String NAME = "workflow";

    @GET
    public List<DocumentRoute> doGet() {
        DocumentModel doc = getTarget().getAdapter(DocumentModel.class);
        return Framework.getService(DocumentRoutingService.class).getDocumentRelatedWorkflows(doc,
                getContext().getCoreSession());
    }
}
```

* * *

<div class="row" data-equalizer data-equalize-on="medium">
  <div class="column medium-6">
  {{#> panel heading='Related Documentation'}}
- [REST API Endpoints]({{page page='rest-api-endpoints'}})
- [REST API Web Adapters]({{page page='rest-api-web-adapters'}})
  {{/panel}}
  </div>
  <div class="column medium-6">
    &nbsp;
  </div>
</div>
