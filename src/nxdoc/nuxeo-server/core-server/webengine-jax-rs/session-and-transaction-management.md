---
title: Session and Transaction Management
review:
    comment: ''
    date: '2016-12-20'
    status: ok
labels:
    - lts2016-ok
    - session
    - transaction
    - webengine
    - webengine-component
    - dmetzler
    - content-review-lts2017
toc: true
confluence:
    ajs-parent-page-id: '950281'
    ajs-parent-page-title: WebEngine (JAX-RS)
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Session+and+Transaction+Management
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Session+and+Transaction+Management'
    page_id: '4685871'
    shortlink: L4BH
    shortlink_source: 'https://doc.nuxeo.com/x/L4BH'
    source_link: /display/NXDOC/Session+and+Transaction+Management
tree_item_index: 200
history:
    -
        author: Solen Guitter
        date: '2016-08-31 14:09'
        message: ''
        version: '15'
    -
        author: Solen Guitter
        date: '2016-03-04 13:43'
        message: ''
        version: '14'
    -
        author: Vladimir Pasquier
        date: '2016-03-03 20:51'
        message: ''
        version: '13'
    -
        author: Vladimir Pasquier
        date: '2016-03-03 20:49'
        message: ''
        version: '12'
    -
        author: Vincent Dutat
        date: '2015-08-31 22:01'
        message: ''
        version: '11'
    -
        author: Solen Guitter
        date: '2015-08-31 14:27'
        message: Update table of contents look
        version: '10'
    -
        author: Solen Guitter
        date: '2014-01-30 14:54'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2014-01-30 14:53'
        message: Added TOC and related topics
        version: '8'
    -
        author: Florent Guillaume
        date: '2014-01-29 13:18'
        message: ''
        version: '7'
    -
        author: Stéphane Lacoin
        date: '2012-12-27 14:54'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2011-11-07 17:06'
        message: Migrated to Confluence 4.0
        version: '5'
    -
        author: Solen Guitter
        date: '2011-11-07 17:06'
        message: ''
        version: '4'
    -
        author: Bogdan Stefanescu
        date: '2010-10-28 13:19'
        message: ''
        version: '3'
    -
        author: Bogdan Stefanescu
        date: '2010-10-28 13:15'
        message: ''
        version: '2'
    -
        author: Bogdan Stefanescu
        date: '2010-10-28 12:17'
        message: ''
        version: '1'

---
## Transaction Management

By default WebEngine will automatically start a transaction for any request to a JAX-RS application (or WebEngine module). The default locations of static resources are omitted (so that no transaction will be started when requesting a static resource). The static resources locations is `*/skin/*`&nbsp;&mdash; this will match any path that targets a resource inside a `skin` directory in a JAX-RS application.

You may want to adapt the transaction timeout per-request. In that case, you should specify in the HTTP headers the timeout value in seconds using the header `Nuxeo-Transaction-Timeout`.

## Session Management

WebEngine provides a managed `CoreSession` to any JAX-RS resource that wants to connect to the repository. WebEngine will close the managed `CoreSession` when no more needed (at the end of the request) so you should not worry about leaks. This session can be used either in a JAX-RS resource method, or in JAX-RS a `MessageBodyReader` or `MessageBodyWriter`.

To get the managed `CoreSession` from a JAX-RS resource you can use the following code:

```java
UserSession.getCurrentSession(httpRequest);

```

If you don't have access to the current HTTP request object you can use this code (in that case a ThreadLocal variable will be used to retrieve the UserSession):

```java
 WebEngine.getActiveContext().getUserSession();

```

Then using the `UserSession` object you can get either the current `Principal` or a `CoreSession`:

```java
UserSession userSession = WebEngine.getActiveContext().getUserSession();
Principal principal = userSession.getPrincipal();
CoreSession session1 = userSession.getCoreSession();
CoreSession session2 = userSession.getCoreSession("myrepo");

```

When calling the `getCoreSession()` method and no managed `CoreSession` was yet created for the target repository then a new `CoreSession` is created and returned. If a `CoreSession` already exists then it is returned.

You can see that there are two flavors of `getCoreSession()` method:

*   `getCoreSession()`
*   `getCoreSession(String repositoryName)`

The first one is returning a session for the default repository. The second one will return a session for the given repository. By default the `getCoreSession()` method will use the default repository as configured in Nuxeo server, but you can change the repository that will be used on a request basis. See next section for how to change the default repository used by this method.

{{#> callout type='note' }}

Note that the `UserSession` object is available only in the context of a WebEngine request (_i.e._, inside JAX-RS applications or WebEngine modules).

{{/callout}}

## Selecting the Default Repository

You can choose from the client side which will be the repository used to create a managed `CoreSession`. To do this you can either use an HTTP request header:

```
Repository: myrepo
```

or a request parameter:

```
nxrepository=myrepo
```

If not specified the default repository defined by the Nuxeo server will be used.

## Cleaning Up at the End of the Request

Some JAX-RS resources will need to create temporary files or open other system resources that cannot be removed in the JAX-RS method because they are used by a `MessageBodyWriter`. In that case you can register a cleanup handler that will be invoked at the request end (after all JAX-RS objects finished their work and response was sent to the servlet output stream).

To register a cleanup handler you can do the following:

```java
UserSession.addRequestCleanupHandler(httpRequest, new RequestCleanupHandler() {
    @Override
    public void cleanup(HttpServletRequest httpRequest) {
        ...
    }
});

```

The `cleanup` method will be invoked after the request is processed and the response created.

## Configuring Transaction Management on a Path Basis

You can also configure how the transaction is managed on a subset of resources in your JAX-RS application. To do this you can contribute an extension as follows:

```xml
<extension target="org.nuxeo.ecm.webengine.WebEngineComponent" point="request-configuration">
  <path value="/mymodule1" autoTx="false" />
  <path value="/mymodule2/resources" autoTx="true" />
  <path value="/mymodule3/.*\.gif" autoTx="false" regex="true"/>
</extension>

```

The first rule says that for any resource which path begins with "/mymodule1" then automatic transaction is off.
The second one says that for any resource which path begins with "/mymodule2/resources" then automatic transaction is true.
The third rule says that for any .gif file inside "/mymodule3" automatic transaction is off.

By default the `value` attribute represent a path prefix. If you want to use a regular expression you must specify `regex="true"`.

{{#> callout type='note' }}

The recommended way to define rules is to use prefixes and not regular expression.

{{/callout}}

## Path Rule Matching

All the contributed path matching rules will be ordered from the longest path to the shortest one in lexicographical order. Regular expression rules will be always put after the prefix based rules (i.e. prefix based rules are _stronger_). Then to find the best matching rule, the path rules are iterated until a match occurs.

Paths specified in a rule must begin with a `/` (if not, a `/` will be automatically added by WebEngine). These paths are matched against the `HttpServletRequest` path info (which will always begin with a `/`).

For example, given the following path matching rule contributions:

```
/a/b/d/.*\.gif
/a
/a/b/c
/b
/b/c

```

they will be ordered as follow:

```
/a/b/c
/b/c
/a
/b
/a/b/d/.*\.gif

```

Therefore for the URL path `/a/b` the first match will be `/a,` and this rule will be used to define the transaction management for this resource.

## Using Custom Exception Mapper

When using a custom exception mapper implementation, don't forget to add the transaction rollback flagging `TransactionHelper.setTransactionRollbackOnly();`.

This flag is needed to tell to `org.nuxeo.ecm.platform.web.common.requestcontroller.filter.NuxeoRequestControllerFilter`, which does handle the TransactionManagement, to take care of the rollback.
