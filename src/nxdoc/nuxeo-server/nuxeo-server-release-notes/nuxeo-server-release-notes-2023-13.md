---
title: LTS 2023.13 / LTS 2023-HF13
description: Discover what's new in LTS 2023.13 / LTS 2023-HF13
review:
   comment: ''
   date: '2024-06-04'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 0
hidden: true
---

{{! multiexcerpt name='nuxeo-server-updates-2023-13'}}
# What's New in LTS 2023.13 / LTS 2023-HF13

## Make Sure Unit Tests Are Run in a Predictable Order


Unit tests are now executed in alphabetical order

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32576](https://jira.nuxeo.com/browse/NXP-32576)

## Backport HttpClientTestRule Improvements


Introducing HttpClientTestRule to execute HTTP requests in tests

We introduce a new way to perform HTTP requests in tests that is aimed to replace BaseTest.
This new API is more flexible by adopting a builder pattern like, it also brings HTTP request/response debug logging when the HTTP execution or the assertion in `executeAnd*` APIs fail, for instance:
```Java
2024-05-06 15:03:53,254 [main] ERROR [HttpClientTestRuleLogger] An error occurred during HTTP request execution or during HTTP response handling:
    HTTP request:
        POST http://localhost:54822/api/v1/path/folder_0 HTTP/1.1
        Headers:
            Authorization: Basic QWRtaW5pc3RyYXRvcjpBZG1pbmlzdHJhdG9y
            X-NXDocumentProperties: dublincore
            Content-Type: application/json
        Body:
            {
              "entity-type": "document",
              "type": "File",
              "name": "newName",
              "properties": {
                "dc:title": "My title",
                "dc:description": " "
              }
            }

    HTTP response:
        201 No Reason Phrase sent by Server HTTP/1.1
        Headers:
            X-Frame-Options: SAMEORIGIN
            Referrer-Policy: strict-origin-when-cross-origin
            X-UA-Compatible: IE=10; IE=11
            Cache-Control: no-cache
            X-Content-Type-Options: nosniff
            Content-Security-Policy: img-src data: blob: *; default-src blob: *; script-src 'unsafe-inline' 'unsafe-eval' data: *; style-src 'unsafe-inline' *; font-src data: *
            X-XSS-Protection: 1; mode=block
            Content-Type: application/json; nuxeo-entity=document
            Transfer-Encoding: chunked
            Date: Mon, 06 May 2024 13:03:53 GMT
            Connection: close
        Body:
            {
              "entity-type" : "document",
              "repository" : "test",
              "uid" : "0ae61509-4a87-4182-9630-a7f10fd395d9",
              "path" : "/folder_0/newName",
              "type" : "File",
              "state" : "project",
              "parentRef" : "bcebcc66-0bba-43b9-8607-a25da4d93b08",
              "isCheckedOut" : true,
              "isRecord" : false,
              "retainUntil" : null,
              "hasLegalHold" : false,
              "isUnderRetentionOrLegalHold" : false,
              "isVersion" : false,
              "isProxy" : false,
              "changeToken" : "0-0",
              "isTrashed" : false,
              "title" : "My title",
              "lastModified" : "2024-05-06T13:03:53.231Z",
              "properties" : {
                "dc:description" : " ",
                "dc:language" : null,
                "dc:coverage" : null,
                "dc:valid" : null,
                "dc:creator" : "Administrator",
                "dc:modified" : "2024-05-06T13:03:53.231Z",
                "dc:lastContributor" : "Administrator",
                "dc:rights" : null,
                "dc:expired" : null,
                "dc:format" : null,
                "dc:created" : "2024-05-06T13:03:53.231Z",
                "dc:title" : "My title",
                "dc:issued" : null,
                "dc:nature" : null,
                "dc:subjects" : [ ],
                "dc:contributors" : [ "Administrator" ],
                "dc:source" : null,
                "dc:publisher" : null
              },
              "facets" : [ "Versionable", "NXTag", "Publishable", "Commentable", "HasRelatedText", "Downloadable" ],
              "schemas" : [ {
                "name" : "uid",
                "prefix" : "uid"
              }, {
                "name" : "file",
                "prefix" : "file"
              }, {
                "name" : "common",
                "prefix" : "common"
              }, {
                "name" : "files",
                "prefix" : "files"
              }, {
                "name" : "dublincore",
                "prefix" : "dc"
              }, {
                "name" : "relatedtext",
                "prefix" : "relatedtext"
              }, {
                "name" : "facetedTag",
                "prefix" : "nxtag"
              } ]
            }



java.lang.AssertionError: HTTP response status mismatch, 
Expected :200
Actual   :201
<Click to see difference>


	at org.nuxeo.http.test.handler.AbstractStatusCodeHandler.handleResponse(AbstractStatusCodeHandler.java:49)
	at org.nuxeo.http.test.HttpClientTestRule.executeAndThen(HttpClientTestRule.java:454)
```

Let say we have a test class testing or FooObject deployed at `/api/v1/foo` like this:
```java
@RunWith(FeaturesRunner.class)
@Features({ RestServerFeature.class })
public class FooTest extends BaseTest {

    @Test
    public void testObject() {
        try (CloseableClientResponse response = getResponse(RequestType.GET, "/foo")) {
            // Then it returns a OK
            assertEquals(Response.Status.OK.getStatusCode(), response.getStatus());
            JsonNode node = mapper.readTree(response.getEntityInputStream());
            // Then some assertion
        }
    }
}
```

This would be replaced by:
```java
@RunWith(FeaturesRunner.class)
@Features({ RestServerFeature.class })
public class FooTest {

    @Inject
    protected RestServerFeature restServerFeature;

    @Rule
    public final HttpClientTestRule httpClient = HttpClientTestRule.defaultClient(
            () -> restServerFeature.getRestApiUrl());

    @Test
    public void testObject() {
        httpClient.buildGetRequest("/foo").executeAndConsume(new JsonNodeHandler(), node -> {
            // Then some assertion
        });
    }
}
```

You can find all available APIs in our [javadoc](https://doc.nuxeo.com/javadoc/2023-lts/org/nuxeo/http/test/HttpClientTestRule.html)

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32535](https://jira.nuxeo.com/browse/NXP-32535)

## Avoid DocumentNotFoundException in Listener 'checkedInCommentListener'


Fixed DocumentNotFoundException in "checkedInCommentListener".

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32516](https://jira.nuxeo.com/browse/NXP-32516)

## Forbid Jakarta Dependencies in Nuxeo Build


Jakarta dependencies not used by Nuxeo are now forbidden in the Maven build

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32501](https://jira.nuxeo.com/browse/NXP-32501)

## Upgrade or Remove Htmlunit From Nuxeo-Features-Test to Avoid Vulnerability


org.seleniumhq.selenium* and net.sourceforge.htmlunit.* are no longer dependencies of the nuxeo core platform modules

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32447](https://jira.nuxeo.com/browse/NXP-32447)


# Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/secure/ReleaseNote.jspa?projectId=10011&version=22899) is available in our bug tracking tool.

{{! /multiexcerpt}}
