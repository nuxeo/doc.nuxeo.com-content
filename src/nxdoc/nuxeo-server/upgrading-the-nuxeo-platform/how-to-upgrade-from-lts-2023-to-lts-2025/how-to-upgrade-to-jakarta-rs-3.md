---
title: How to upgrade to Jakarta RS 3 - WebEngine
description: Instructions to upgrade your Nuxeo Project to LTS 2025 - Jakarta RS part
review:
   comment: ''
   date: '2025-03-12'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 200
---

## Introduction

{{! excerpt}}
While the upgrade to **Jakarta RS 3** is part of the Jakarta EE 10 one, it has its own section because the implementation
(Jersey), leveraged by Nuxeo WebEngine, has more changes.

Nuxeo WebEngine has undergone breaking changes to benefit from the new Jakarta RS additions.
{{! /excerpt}}

You must first follow the [How to upgrade to Jakarta EE 10]({{page page='how-to-upgrade-to-jakarta-ee-10'}}) page.

_JAX-RS_ occurrences have been replaced by _REST_ within the Nuxeo Server codebase.

## Maven Dependency

In addition to the Jakarta RS Specification and Implementation dependencies to change, you will need to update:
- `nuxeo-webengine-jaxrs` to `nuxeo-webengine-rest`
- `nuxeo-importer-jaxrs` to `nuxeo-importer-rest`
- `nuxeo-target-platforms-jaxrs` to `nuxeo-target-platforms-rest`
- `nuxeo-template-rendering-jaxrs` to `nuxeo-template-rendering-rest`

## Java Code

One of the biggest change in the Jersey Implementation is the total rework of their Dependency Injection engine.
It is now more extendable, and better fits with the direction of Jakarta RS specification to support `jakarta.inject-api`
annotations, such as `@Singleton` which is currently used.

### Package

The following Nuxeo packages have changed in order to remove _JAX-RS_ occurrences:
- `org.nuxeo.ecm.webengine.jaxrs` to `org.nuxeo.ecm.webengine.rest`
- `org.nuxeo.ecm.restapi.server.jaxrs` to `org.nuxeo.ecm.restapi.server`
- `org.nuxeo.ecm.automation.jaxrs.io` to `org.nuxeo.ecm.automation.io.rest`
- `org.nuxeo.ecm.automation.server.jaxrs` to `org.nuxeo.ecm.automation.server.rest`
- `org.nuxeo.targetplatforms.jaxrs` to `org.nuxeo.targetplatforms.rest`
- `org.nuxeo.template.jaxrs` to `org.nuxeo.template.rest`

{{#> callout type='info' }}
If you were extending the Nuxeo REST API, your package `org.nuxeo.ecm.restapi.server.jaxrs` must be updated to 
`org.nuxeo.ecm.restapi.server` to keep the Package Scan working.
{{/callout}}

### Nuxeo Component

The following Nuxeo bundle names have changed in order to remove _JAX-RS_ occurrences:
- `org.nuxeo.ecm.webengine.jaxrs` to `org.nuxeo.ecm.webengine.rest`
- `org.nuxeo.targetplatforms.jaxrs` to `org.nuxeo.targetplatforms.rest`
- `org.nuxeo.template.manager.jaxrs` to `org.nuxeo.template.manager.rest`

`@Deploy` annotation in test classes must be updated accordingly.

### Message Body Writer Selection Algorithm

The `MessageBodyWriter` is retrieved differently in this upgrade as explained in the [Jakarta Documentation](https://eclipse-ee4j.github.io/jersey.github.io/documentation/latest/message-body-workers.html#providers-selection).

The impact on the WebEngine application code is that Jersey now makes more use of Java Reflection to retrieve the right
`MessageBodyWriter`, and so declaring the generic Object type may cause errors.

For example, following method in a resource/WebObject:

```java
    @GET
    public Object doGet() {
        return new DocumentModelImpl(...);
    }
```

May produce this kind of errors:

```
Caused by: org.glassfish.jersey.message.internal.MessageBodyProviderNotFoundException: MessageBodyWriter not found for media type=application/json, type=class org.nuxeo.ecm.core.api.impl.DocumentModelImpl, genericType=class java.lang.Object.
    at org.glassfish.jersey.message.internal.WriterInterceptorExecutor$TerminalWriterInterceptor.aroundWriteTo(WriterInterceptorExecutor.java:248) ~[jersey-common-2.27.jar:?]
    at org.glassfish.jersey.message.internal.WriterInterceptorExecutor.proceed(WriterInterceptorExecutor.java:163) ~[jersey-common-2.27.jar:?]
    at org.glassfish.jersey.server.internal.JsonWithPaddingInterceptor.aroundWriteTo(JsonWithPaddingInterceptor.java:109) ~[jersey-server-2.27.jar:?]
    at org.glassfish.jersey.message.internal.WriterInterceptorExecutor.proceed(WriterInterceptorExecutor.java:163) ~[jersey-common-2.27.jar:?]
    at org.glassfish.jersey.server.internal.MappableExceptionWrapperInterceptor.aroundWriteTo(MappableExceptionWrapperInterceptor.java:85) ~[jersey-server-2.27.jar:?]
    ... 66 more
```

```
Caused by: javax.ws.rs.NotAcceptableException: HTTP 406 Not Acceptable
    at org.glassfish.jersey.server.internal.routing.MethodSelectingRouter.getMethodRouter(MethodSelectingRouter.java:471)
    at org.glassfish.jersey.server.internal.routing.MethodSelectingRouter.access$000(MethodSelectingRouter.java:73)
    at org.glassfish.jersey.server.internal.routing.MethodSelectingRouter$4.apply(MethodSelectingRouter.java:673)
    at org.glassfish.jersey.server.internal.routing.MethodSelectingRouter.apply(MethodSelectingRouter.java:304)
    at org.glassfish.jersey.server.internal.routing.RoutingStage._apply(RoutingStage.java:86)
    at org.glassfish.jersey.server.internal.routing.RoutingStage._apply(RoutingStage.java:89)
```

In such cases you should declare the concrete type: `DocoumentModel`.

If the method returns different incompatible types, you can replace `Object` by `jakarta.ws.rs.core.Response` (and adapt 
the code to return a `Response` with help of `ResponseBuilder`).
This ensures that Jersey does not rely on method reflection introspection.

### WebContext Managed by A Jakarta Provider

Previously, the `WebContext` was initialized with a Servlet `Filter`, and filled later on with its `HttpHeaders` and `UriInfo`.
Now in LTS 2025, the `WebContext` is initialiazed by a Jakarta `Provider` and is immutable. This allows to access the context
in any Jakarta objects with the help of the `@Context` annotation.

If you are overriding the `WebEngineModule#getClasses` without getting the result from the super class, you must add the 
`WebContextProvider` to the classes:

```java
import org.nuxeo.ecm.webengine.app.WebContextProvider;

public class MyModule extends WebEngineModule {

    @Override
    public Set<Class<?>> getClasses() {
        var result = new HashSet<Class<?>>();
        result.add(WebContextProvider.class);
        return result;
    }
}
```

Otherwise you may have such exception:

```
Caused by: org.glassfish.hk2.api.MultiException: A MultiException has 2 exceptions.  They are:
1. java.lang.NullPointerException: Cannot invoke "org.nuxeo.ecm.webengine.model.WebContext.getModule()" because "context" is null
2. java.lang.IllegalStateException: Unable to perform operation: method inject on org.nuxeo.modyle.rest.MyModuleRoot

    at org.jvnet.hk2.internal.ClazzCreator.create(ClazzCreator.java:368) ~[hk2-locator-2.6.1.jar:?]
    at org.jvnet.hk2.internal.SystemDescriptor.create(SystemDescriptor.java:463) ~[hk2-locator-2.6.1.jar:?]
    at org.glassfish.jersey.inject.hk2.RequestContext.findOrCreate(RequestContext.java:59) ~[jersey-hk2-2.43.jar:?]
    ...
Caused by: java.lang.NullPointerException: Cannot invoke "org.nuxeo.ecm.webengine.model.WebContext.getModule()" because "context" is null
    at org.nuxeo.ecm.webengine.model.impl.ModuleRoot.setContext(ModuleRoot.java:55) ~[classes/:?]
    ...
```

### Form APIs have been removed from WebContext

The Form APIs have been removed from the WebContext class in order to leverage the Jersey provided feature.

If you were using the `WebContext#getForm()` method, you must upgrade your code to leverage method parameters.

For example, the following code:

```java
    @POST
    public Response doPost() {
        DocumentModel doc = getTarget().getAdapter(DocumentModel.class);
        FormData form = ctx.getForm();
        form.fillDocument(doc);
        String xpath = ctx.getForm().getString(FormData.PROPERTY);
        Blob blob = form.getFirstBlob();
        if (xpath == null || blob == null) {
            throw new RuntimeException("Illegal parameters");
        }
        ...
    }
```

Should be updated to:

```java
import javax.ws.rs.FormParam;
import javax.ws.rs.core.MultivaluedMap;
import org.glassfish.jersey.media.multipart.FormDataParam;

    @POST
    public Response doPost(MultivaluedMap<String, String> formParams, @FormParam("property") String xpath,
            @FormDataParam("content") Blob blob) {
        DocumentModel doc = getTarget().getAdapter(DocumentModel.class);
        DocumentHelper.fillDocument(doc, formParams);
        if (xpath == null || blob == null) {
            throw new RuntimeException("Illegal parameters");
        }
        ...
    }
```

The `@FormParam` annotations allow retrieving the value of the named form parameter. If you need dynamic access
to form parameters, you should declare one parameter with `MultivaluedMap<String, String>` that will collect them.

### ModuleRoot Does Not Hold HttpServletRequest Anymore

The `HttpServletRequest request` field present in `ModuleRoot` has been removed as it is not needed anymore since
`WebContext` can be retrieved from the Jakarta Context.

If you need it, just declare it as a field or method parameter in your code:

```java

    @Context
    protected HttpServletRequest request;

```

### WebEngine Module Singletons

The support of singletons has been marked as deprecated in Jakarta RS 3, we encourage you to update your WebEngine Module 
`getSingletons` method to `getClasses` and leverage the new Jersey Dependency Injection engine to handle their lifecycle.

If your WebEngine Module looks like this:

```java
public class MyModule extends WebEngineModule {

    @Override
    public Set<Object> getSingletons() {
        var result = new HashSet<>();
        result.add(new MyModuleExceptionMapper());
        return result;
    }
}

public class MyModuleExceptionMapper implements ExceptionMapper<Exception> {

    @Override
    public Response toResponse(Exception exception) {
        return Response.status(500).build();
    }
}
```

You should update it to:

```java
public class MyModule extends WebEngineModule {

    @Override
    public Set<Class<?>> getClasses() {
        var result = new HashSet<Class<?>>();
        result.add(MyModuleExceptionMapper.class);
        return result;
    }
}

import jakarta.inject.Singleton;
import jakarta.ws.rs.ext.Provider;

@Singleton
@Provider
public class MyModuleExceptionMapper implements ExceptionMapper<Exception> {

    @Override
    public Response toResponse(Exception exception) {
        return Response.status(500).build();
    }
}
```

* * *

{{#> panel heading='Related topics'}}
* [How to upgrade to Jakarta EE 10]({{page page='how-to-upgrade-to-jakarta-ee-10'}})
* [How to upgrade Nuxeo Rest Tests]({{page page='how-to-upgrade-rest-tests'}})
{{/panel}}

