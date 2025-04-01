---
title: How to upgrade Nuxeo REST Tests
description: Instructions to upgrade your REST tests to LTS 2025
review:
   comment: ''
   date: '2025-03-10'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 300
---

## Introduction

{{! excerpt}}
Firstly introduced in `2023.13` / `2023-HF23`, the `HttpClientTestRule` has become the standard to test HTTP REST Endpoints.

Especially since the `org.nuxeo.ecm.restapi.test.BaseTest` class has been removed in LTS 2025 because it was tied to
the Jersey Client library. As breaking changes were expected in Jersey, a complete rework of the `BaseTest` class into the 
`HttpClientTestRule` was done.
{{! /excerpt}}

## Design

Firstly, to avoid future breaking changes as the current one, the `org.nuxeo.http.test.HttpClientTestRule` was designed 
to not expose the HTTP library used to perform the HTTP requests.

Secondly, this new piece of the Nuxeo Test Framework has been rewritten as a JUnit TestRule in order to correctly handled
involved resources, such as HTTP connection, socket... 
And also to prefer the composition of its usage over extension.

Finally, the `HttpClientTestRule` proposes recent APIs leveraging the Java Language functional programming. You can write
your HTTP requests to run with a builder like API, allowing to express easily mandatory and optional parameters compared
to what `BaseTest` offered.

Last but not the least, you can use `HttpClientTestRule` in your unit tests deploying Nuxeo bundles in an embedded servlet 
container, or in your functional tests deploying Nuxeo externally as Tomcat zip or Docker image.

## Maven Dependency

The `org.nuxeo.http.test.HttpClientTestRule` class is available in the following dependency:

```xml

<dependencies>
  ..
  <dependency>
    <groupId>org.nuxeo.ecm.platform</groupId>
    <artifactId>nuxeo-features-test</artifactId>
  </dependency>
  ..
</dependencies>
```

## Java Code

The `HttpClientTestRule` should be declared and initialized as a JUnit test rule. The class proposes the three APIs below
to help with its creation:
- `defaultJsonClient(Supplier)` to configure a HTTP client with Administrator credentials and needed configuration
for JSON request and response handling
- `defaultClient(Supplier)` to configure a HTTP client with Administrator credentials
- `builder()` to fine configure a HTTP client

For the majority of test cases, and the help of the appropriate feature, your test would look like:

```java
import jakarta.inject.Inject;

import org.junit.Rule;
import org.junit.runner.RunWith;
import org.nuxeo.ecm.restapi.test.RestServerFeature;
import org.nuxeo.http.test.HttpClientTestRule;
import org.nuxeo.runtime.test.runner.Features;
import org.nuxeo.runtime.test.runner.FeaturesRunner;

@RunWith(FeaturesRunner.class)
@Features({ RestServerFeature.class })
public class TestMyEndpoint {

    @Inject
    protected RestServerFeature restServerFeature;

    @Rule
    public final HttpClientTestRule httpClient = HttpClientTestRule.defaultJsonClient(
            () -> restServerFeature.getRestApiUrl());

    ...
}
```

The `HttpClientTestRule`, with the `RestServerFeature`, will be configured to hit the `/nuxeo/api/v1` base URL.
This is the equivalent of extendind the `BaseTest` class and using its `getResponse` APIs.

Based on the piece of code above, let's see how to upgrade the REST tests.

The Nuxeo Server is initialiazed with the following documents:
- `/folder` a `Folder` document with named _folder_
- `/folder/file` a `File` document with named _file_ and an attached blob on `file:content`
- `/folder/picture` a `Picture` document named _picture_ and an attached picture on `file:content`

### Execute a GET Request

The test is about getting the _file_ document and asserting its title.

Previously, we would have written:

```java
import javax.ws.rs.core.Response;

import org.nuxeo.jaxrs.test.CloseableClientResponse;

@Test
public void testGet() throws Exception {
    try (CloseableClientResponse response = getResponse(RequestType.GET, "/path/folder/file")) {
        // Then it returns a OK
        assertEquals(Response.Status.OK.getStatusCode(), response.getStatus());
        JsonNode node = mapper.readTree(response.getEntityInputStream());
        // Then some assertion
        assertEquals("file", node.get("title").asText());
    }
}
```

Now, we write it as below:

```java
import org.nuxeo.http.test.handler.JsonNodeHandler;

@Test
public void testGet() {
    httpClient.buildGetRequest("/path/folder/file").executeAndConsume(new JsonNodeHandler(), node -> {
        // HTTP status code 200 assertion has been made by JsonNodeHandler
        // along with Content-Type header matching application/json
        // Then some assertion
        assertEquals("file", node.get("title").asText());
    });
}
```

### Execute a GET Request With Query Parameters

The test is about getting the result of `CURRENT_DOC_CHILDREN` page provider with the PageProvider web adapter.

Previously, we would have written:

```java
import javax.ws.rs.core.MultivaluedMap;
import javax.ws.rs.core.Response;

import org.nuxeo.ecm.restapi.test.JsonNodeHelper;
import org.nuxeo.jaxrs.test.CloseableClientResponse;

import com.sun.jersey.core.util.MultivaluedMapImpl;

@Test
public void testGetWithQueryParameters() throws Exception {
    MultivaluedMap<String, String> queryParameters = new MultivaluedMapImpl();
    queryParameters.putSingle("sortBy", "dc:title");
    queryParameters.putSingle("sortOrder", "ASC");
    try (CloseableClientResponse response = getResponse(RequestType.GET, "/path/folder/@pp/CURRENT_DOC_CHILDREN", 
            queryParameters)) {
        // Then it returns a OK
        assertEquals(Response.Status.OK.getStatusCode(), response.getStatus());
        JsonNode node = mapper.readTree(response.getEntityInputStream());
        List<JsonNode> entries = JsonNodeHelper.getEntries(node);
        // Then some assertion
        assertEquals(2, entries.size());
        assertEquals("file", entries.get(0).get("title").asText());
        assertEquals("picture", entries.get(1).get("title").asText());
    }
}
```

Now, we write it as below:

```java
import org.nuxeo.ecm.restapi.test.JsonNodeHelper;
import org.nuxeo.http.test.handler.JsonNodeHandler;

@Test
public void testGetWithQueryParameters() {
    httpClient.buildGetRequest("/path/folder/@pp/CURRENT_DOC_CHILDREN")
              .addQueryParameter("sortBy", "dc:title")
              .addQueryParameter("sortOrder", "ASC")
              .executeAndConsume(new JsonNodeHandler(), node -> {
                  // HTTP status code 200 assertion has been made by JsonNodeHandler
                  // along with Content-Type header matching application/json
                  List<JsonNode> entries = JsonNodeHelper.getEntries(node);
                  // Then some assertion
                  assertEquals(2, entries.size());
                  assertEquals("file", entries.getFirst().get("title").asText());
                  assertEquals("picture", entries.getLast().get("title").asText());
              });
}
```

### Execute a GET Request With Headers

The test is about getting the _breadcrumb_ of the _file_ document.

Previously, we would have written:

```java
import javax.ws.rs.core.Response;

import org.nuxeo.ecm.restapi.test.JsonNodeHelper;
import org.nuxeo.jaxrs.test.CloseableClientResponse;

@Test
public void testGetWithHeaders() throws Exception {
    try (CloseableClientResponse response = getResponse(RequestType.GET, "/path/folder/file",
            Map.of("enrichers-document", "breadcrumb"))) {
        // Then it returns a OK
        assertEquals(Response.Status.OK.getStatusCode(), response.getStatus());
        JsonNode node = mapper.readTree(response.getEntityInputStream());
        JsonNode contextParameters = node.get("contextParameters");
        JsonNode breadcrumb = node.get("breadcrumb");
        List<JsonNode> entries = JsonNodeHelper.getEntries(breadcrumb);
        // Then some assertion
        assertEquals(2, entries.size());
        assertEquals("folder", entries.getFirst().get("title").asText());
        assertEquals("file", entries.getLast().get("title").asText());
    }
}
```
Now, we write it as below:

```java
import org.nuxeo.ecm.restapi.test.JsonNodeHelper;
import org.nuxeo.http.test.handler.JsonNodeHandler;

@Test
public void testGetWithHeaders() {
    httpClient.buildGetRequest("/path/folder/file")
              .addHeader("enrichers-document", "breadcrumb")
              .executeAndConsume(new JsonNodeHandler(), node -> {
                  // HTTP status code 200 assertion has been made by JsonNodeHandler
                  // along with Content-Type header matching application/json
                  JsonNode contextParameters = node.get("contextParameters");
                  JsonNode breadcrumb = node.get("breadcrumb");
                  // Then some assertion
                  List<JsonNode> breadcrumbEntries = JsonNodeHelper.getEntries(breadcrumb);
                  assertEquals(2, entries.size());
                  assertEquals("folder", entries.getFirst().get("title").asText());
                  assertEquals("file", entries.getLast().get("title").asText());
              });
}
```

### Execute a POST Request

The test is about creating the _anotherFile_ document within the _folder_ document.

Previously, we would have written:

```java
import javax.ws.rs.core.Response;

import org.nuxeo.jaxrs.test.CloseableClientResponse;

@Test
public void testPost() throws Exception {
    String uid;
    try (CloseableClientResponse response = getResponse(RequestType.POST, "/path/folder/file", """
            {
              "entity-type": "document",
              "type": "File",
              "name": "anotherFile",
              "properties": {
                "dc:title": "anotherFile"
              }
            }
            """)) {
        // Then it returns a CREATED
        assertEquals(Response.Status.CREATED.getStatusCode(), response.getStatus());
        JsonNode node = mapper.readTree(response.getEntityInputStream());
        uid = node.get("uid").asText();
        // Then some assertion
        assertTrue(StringUtils.isNotBlank(uid));
        assertEquals("anotherFile", node.get("title").asText());
    }

    // Then assert we can get it
    try (CloseableClientResponse respone = getResponse(RequestType.GET, "/id/" + uid)) {
        assertEquals(Response.Status.OK.getStatusCode(), response.getStatus());
    }
}
```

Now, we write it as below:

```java
import static jakarta.servlet.http.HttpServletResponse.SC_CREATED;
import static jakarta.servlet.http.HttpServletResponse.SC_OK;

import org.nuxeo.http.test.handler.HttpStatusCodeHandler;
import org.nuxeo.http.test.handler.JsonNodeHandler;

@Test
public void testPost() {
    String id = httpClient.buildPostRequest("/path/folder/file")
                          .entity("""
                                  {
                                    "entity-type": "document",
                                    "type": "File",
                                    "name": "anotherFile",
                                    "properties": {
                                      "dc:title": "anotherFile"
                                    }
                                  }
                                  """)
                          .executeAndThen(new JsonNodeHandler(SC_CREATED), node -> {
                              // HTTP status code 201 assertion has been made by JsonNodeHandler
                              // along with Content-Type header matching application/json
                              String uid = node.get("uid").asText();
                              // Then some assertion
                              assertTrue(StringUtils.isNotBlank(uid));
                              assertEquals("anotherFile", node.get("title").asText());
                              return uid;
                          });

    // Then assert we can get it
    int status = httpClient.buildGetRequest("/id/" + id).execute(new HttpStatusCodeHandler());
    assertEquals(SC_OK, status);
}
```

### Execute a PUT With Multi Part Request

The test is about updating the `file:content` blob of _file_ document.

Previously, we would have written:

```java
import javax.ws.rs.core.Response;

import org.nuxeo.jaxrs.test.CloseableClientResponse;

import com.sun.jersey.multipart.BodyPart;
import com.sun.jersey.multipart.FormDataMultiPart;
import com.sun.jersey.multipart.file.StreamDataBodyPart;

@Test
public void testPutWithMultiPart() throws Exception {
    try (FormDataMultiPart form = new FormDataMultiPart()) {
        BodyPart fdp = new StreamDataBodyPart("content", new ByteArrayInputStream("modifiedData".getBytes()));
        form.bodyPart(fdp);
        form.field("versioning", "MINOR");
        try (CloseableClientResponse response = getResponse(RequestType.PUT,
                "path/folder/file/@blob/file:content", form)) {
            assertEquals(Response.Status.OK.getStatusCode(), response.getStatus());
        }
    }
}
```

Now, we write it as below:

```java
import static jakarta.servlet.http.HttpServletResponse.SC_OK;

import org.apache.http.entity.ContentType;
import org.apache.http.entity.mime.MultipartEntityBuilder;
import org.nuxeo.http.test.handler.HttpStatusCodeHandler;

@Test
public void testPutWithMultiPart() {
    var entity = MultipartEntityBuilder.create()
                                       .addBinaryBody("content", "modifiedData".getBytes(), ContentType.TEXT_PLAIN,
                                               "content.txt")
                                       .addTextBody("versioning", "MINOR")
                                       .build();
    try (InputStream requestBody = entity.getContent()) {
        httpClient.buildPutRequest("/path/folder/file/@blob/file:content")
                  .contentType(entity.getContentType().getValue())
                  .entity(requestBody)
                  .executeAndConsume(new HttpStatusCodeHandler(), status -> assertEquals(SC_OK, status.intValue()));
    }

    httpClient.buildGetRequest("/path/folder/file/@blob/file:content").executeAndConsume(response -> {
        assertEquals(SC_OK, response.getStatus());
        assertEquals("modifiedData", response.getEntityString());
    });
}
```

### Execute a DELETE Request

The test is about deleting the `file:content` blob of _file_ document.

Previously, we would have written:

```java
import javax.ws.rs.core.Response;

import org.nuxeo.jaxrs.test.CloseableClientResponse;

import com.sun.jersey.multipart.BodyPart;
import com.sun.jersey.multipart.FormDataMultiPart;
import com.sun.jersey.multipart.file.StreamDataBodyPart;

@Test
public void testDelete() throws Exception {
    try (CloseableClientResponse response = getResponse(RequestType.DELETE,
            "path/folder/file/@blob/file:content")) {
    }

    try (CloseableClientResponse response = getResponse(RequestType.GET,
            "path/folder/file/@blob/file:content")) {
        assertEquals(Response.Status.NOT_FOUND.getStatusCode(), response.getStatus());
    }
}
```

Now, we write it as below:

```java
import static jakarta.servlet.http.HttpServletResponse.SC_NOT_FOUND;

import org.nuxeo.http.test.handler.VoidHandler;

@Test
public void testDelete() {
    httpClient.buildDeleteRequest("/path/folder/file/@blob/file:content").execute(new VoidHandler())

    httpClient.buildGetRequest("/path/folder/file/@blob/file:content").executeAndConsume(response -> {
        assertEquals(SC_NOT_FOUND, response.getStatus());
    });
}
```

* * *

{{#> panel heading='Related topics'}}
* [How to upgrade to Jakarta RS 3 - WebEngine]({{page page='how-to-upgrade-to-jakarta-rs-3'}})
* [HttpClientTestRule Release Notes - 2023.13]({{page version='2023' page='nuxeo-server-release-notes-2023-13' anchor='backport-httpclienttestrule-improvements'}})
* [HttpClientTestRule - Javadoc](https://doc.nuxeo.com/javadoc/2025-lts/org/nuxeo/http/test/HttpClientTestRule.html)
{{/panel}}
