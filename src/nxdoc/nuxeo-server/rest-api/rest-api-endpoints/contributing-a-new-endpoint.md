---
title: Contributing a New Endpoint
review:
    comment: ''
    date: '2017-12-13'
    status: ok
labels:
    - lts2016-ok
    - endpoint
    - rest-api
    - troger
    - lts2017-ok
confluence:
    ajs-parent-page-id: '13664833'
    ajs-parent-page-title: REST API
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Contributing+a+New+Endpoint
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Contributing+a+New+Endpoint'
    page_id: '16090270'
    shortlink: noT1
    shortlink_source: 'https://doc.nuxeo.com/x/noT1'
    source_link: /display/NXDOC/Contributing+a+New+Endpoint
tree_item_index: 700
history:
    -
        author: Solen Guitter
        date: '2013-10-30 13:20'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2013-10-30 13:19'
        message: ''
        version: '6'
    -
        author: Alain Escaffre
        date: '2013-10-29 01:40'
        message: ''
        version: '5'
    -
        author: Alain Escaffre
        date: '2013-10-29 01:38'
        message: ''
        version: '4'
    -
        author: Alain Escaffre
        date: '2013-10-29 01:38'
        message: ''
        version: '3'
    -
        author: Alain Escaffre
        date: '2013-10-29 01:38'
        message: ''
        version: '2'
    -
        author: Alain Escaffre
        date: '2013-09-25 16:57'
        message: ''
        version: '1'

---

The Nuxeo REST API has been designed to be highly pluggable giving us the flexibility to add new modules whenever required. The REST API is coded in the [nuxeo-rest-api-server](https://github.com/nuxeo/nuxeo/tree/master/nuxeo-features/rest-api/nuxeo-rest-api-server) module. It is a [Web engine]({{page page='webengine-jax-rs'}}) module which:

 - defines an [APIRoot.java](https://github.com/nuxeo/nuxeo/blob/master/nuxeo-features/rest-api/nuxeo-rest-api-server/src/main/java/org/nuxeo/ecm/restapi/server/jaxrs/APIRoot.java), the resource class serving request for `/nuxeo/api/v1` through the `javax.ws.rs.Path` annotation:

 ```
 @Path("/api/v1{repo : (/repo/[^/]+?)?}")
 ```

 - provides these resources as [web objects]({{page page='web-object-model'}}).

 - allows the  [Writers and Readers]({{page page='creating-your-own-marshaller'}}) to marshal and unmarshal these resources.

As an example, let’s have a look at the directory endpoint and see how it resolves a `GET` on `/nuxeo/api/v1/directory/continent/africa`.

First, [APIRoot.java](https://github.com/nuxeo/nuxeo/blob/master/nuxeo-features/rest-api/nuxeo-rest-api-server/src/main/java/org/nuxeo/ecm/restapi/server/jaxrs/APIRoot.java) retrieves the proper directory WebObject with:

```
@Path("/directory")
public Object doGetDirectory() {
    return newObject("directory");
}
```

The directory WebObject is made available by [DirectoryRootObject.java](https://github.com/nuxeo/nuxeo/blob/master/nuxeo-features/rest-api/nuxeo-rest-api-server/src/main/java/org/nuxeo/ecm/restapi/server/jaxrs/directory/DirectoryRootObject.java):

```
@WebObject(type = "directory")
public class DirectoryRootObject extends DefaultObject {
    @Path("{directoryName}")
    public Object doGetDirectory(@PathParam("directoryName") String dirName){
         return newObject("directoryObject", dirName);
    }
}
```

This will resolve the `directoryName` continent passed as a path parameter and serve the [DirectoryObject.java](https://github.com/nuxeo/nuxeo/blob/master/nuxeo-features/rest-api/nuxeo-rest-api-server/src/main/java/org/nuxeo/ecm/restapi/server/jaxrs/directory/DirectoryObject.java).

```
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

This [DirectoryObject.java](https://github.com/nuxeo/nuxeo/blob/master/nuxeo-features/rest-api/nuxeo-rest-api-server/src/main/java/org/nuxeo/ecm/restapi/server/jaxrs/directory/DirectoryObject.java) then resolves the `africa` directory entry to serve the [DirectoryEntryObject.java](https://github.com/nuxeo/nuxeo/blob/master/nuxeo-features/rest-api/nuxeo-rest-api-server/src/main/java/org/nuxeo/ecm/restapi/server/jaxrs/directory/DirectoryEntryObject.java) which will finally return a [DirectoryEntry.java](https://github.com/nuxeo/nuxeo/blob/master/nuxeo-services/nuxeo-platform-directory/nuxeo-platform-directory-api/src/main/java/org/nuxeo/ecm/directory/api/DirectoryEntry.java) entity:

```
@GET
public DirectoryEntry doGet() {
    return entry;
}
```

Last but not the least, this DirectoryEntry entity has to be serialized and unserialized in JSON. This can be respectively done by:
 - [DirectoryEntryJsonWriter.java](https://github.com/nuxeo/nuxeo/blob/master/nuxeo-services/nuxeo-platform-directory/nuxeo-platform-directory-core/src/main/java/org/nuxeo/ecm/directory/io/DirectoryEntryJsonWriter.java) based on `javax.ws.rs.ext.MessageBodyWriter`
 - [DirectoryEntryJsonReader.java](https://github.com/nuxeo/nuxeo/blob/master/nuxeo-services/nuxeo-platform-directory/nuxeo-platform-directory-core/src/main/java/org/nuxeo/ecm/directory/io/DirectoryEntryJsonReader.java) based on `javax.ws.rs.ext.MessageBodyReader`

 ## Extend the REST API: The Workflow Example

Starting from the Nuxeo Platform 7.2, we have added new REST endpoints to initiate and run workflows. The new endpoints documentation is available on the [api-playground](https://nuxeo.github.io/api-playground/#/resources):
 - workflow endpoint
 - workflowModel endpoint
 - task endpoint

This a good example of how to contribute a new set of endpoints. One interesting point was extending the existing [Nuxeo REST API module](https://github.com/nuxeo/nuxeo/tree/master/nuxeo-features/rest-api) from another bundle in order to make new endpoints available under the existing `/nuxeo/api/v1 resource path`.

This is now possible, thanks to OSGI fragment. As defined in [OSGI documentation](https://www.osgi.org/community/wiki/):

>A Bundle fragment, or simply a fragment, is a bundle whose contents are made available to another bundle (the fragment host).

In case of the Nuxeo workflow REST API, we introduced a new bundle called [nuxeo-routing-rest-api](https://github.com/nuxeo/nuxeo-platform-document-routing/tree/master/nuxeo-routing-rest-api) which is a fragment of the host [rest-api bundle](https://github.com/nuxeo/nuxeo/tree/master/nuxeo-features/rest-api). To achieve this, we simply need to:
 - Declare the Fragment-Host in the [MANIFEST.MF](https://github.com/nuxeo/nuxeo-platform-document-routing/blob/master/nuxeo-routing-rest-api/src/main/resources/META-INF/MANIFEST.MF) of the fragment bundle as follow:
    ```
    Manifest-Version: 1.0
    Bundle-ManifestVersion: 1
    Bundle-Name: nuxeo-routing-rest-api
    Bundle-SymbolicName: org.nuxeo.ecm.platform.restapi.server.routing;singleton:=true
    Fragment-Host: org.nuxeo.ecm.platform.restapi.server
    Bundle-Vendor: Nuxeo
    Bundle-Version: 1.0.0
    ```

 - In the fragment bundle, all webObjects must be placed in a package with a name prefixed with the package name of the class [APIRoot.java](https://github.com/nuxeo/nuxeo/blob/master/nuxeo-features/rest-api/nuxeo-rest-api-server/src/main/java/org/nuxeo/ecm/restapi/server/jaxrs/APIRoot.java) (i.e. [org.nuxeo.ecm.restapi.server.jaxrs](https://github.com/nuxeo/nuxeo/tree/master/nuxeo-features/rest-api/nuxeo-rest-api-server/src/main/java/org/nuxeo/ecm/restapi/server/jaxrs)).

In case of the workflow REST API, all webObjects and entity readers/writers are grouped within the [org.nuxeo.ecm.restapi.server.jaxrs.routing](https://github.com/nuxeo/nuxeo-platform-document-routing/tree/master/nuxeo-routing-rest-api/src/main/java/org/nuxeo/ecm/restapi/server/jaxrs/routing) package.

As a direct result and thanks to a [routing method](https://github.com/nuxeo/nuxeo/blob/master/nuxeo-features/rest-api/nuxeo-rest-api-server/src/main/java/org/nuxeo/ecm/restapi/server/jaxrs/RepositoryObject.java#L88) introduced in the Nuxeo Platform 7.2, all webObjects located in the fragment bundle of the rest-api bundle will be discovered and made available on the /nuxeo/api/v1 resource path as well as to their readers and writers. For instance, [WorkflowObject.java](https://github.com/nuxeo/nuxeo-platform-document-routing/blob/master/nuxeo-routing-rest-api/src/main/java/org/nuxeo/ecm/restapi/server/jaxrs/routing/WorkflowObject.java) from the [nuxeo-routing-rest-api](https://github.com/nuxeo/nuxeo-platform-document-routing/tree/master/nuxeo-routing-rest-api) fragment bundle is directly detected and available under the ``/nuxeo/api/v1/workflow` path.
