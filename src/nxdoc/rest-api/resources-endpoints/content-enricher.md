---
title: Content Enricher
review:
    comment: ''
    date: ''
    status: ok
labels:
    - 5-9-5
toc: true
confluence:
    ajs-parent-page-id: '22380806'
    ajs-parent-page-title: Resources Endpoints
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: Content+Enricher
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC60/Content+Enricher'
    page_id: '22380874'
    shortlink: SoFVAQ
    shortlink_source: 'https://doc.nuxeo.com/x/SoFVAQ'
    source_link: /display/NXDOC60/Content+Enricher
tree_item_index: 500
history:
    -
        author: Solen Guitter
        date: '2014-12-16 10:48'
        message: ''
        version: '17'
    -
        author: Nelson Silva
        date: '2014-12-16 10:32'
        message: ''
        version: '16'
    -
        author: Nelson Silva
        date: '2014-12-15 10:39'
        message: Add parameters and vocabulary enricher
        version: '15'
    -
        author: Manon Lumeau
        date: '2014-10-06 11:35'
        message: ''
        version: '14'
    -
        author: Vladimir Pasquier
        date: '2014-10-02 14:04'
        message: ''
        version: '13'
    -
        author: Vladimir Pasquier
        date: '2014-10-02 14:02'
        message: Add preview content enricher
        version: '12'
    -
        author: Solen Guitter
        date: '2014-08-21 15:09'
        message: Formatting
        version: '11'
    -
        author: Vladimir Pasquier
        date: '2014-08-20 11:08'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2014-07-28 09:23'
        message: formatting
        version: '9'
    -
        author: Vincent Dutat
        date: '2014-07-24 17:55'
        message: ''
        version: '8'
    -
        author: Vincent Dutat
        date: '2014-07-24 17:49'
        message: ''
        version: '7'
    -
        author: Vladimir Pasquier
        date: '2014-07-24 17:15'
        message: little update on content enrich
        version: '6'
    -
        author: Vladimir Pasquier
        date: '2014-07-24 15:54'
        message: renaming rest contrib into content enrich
        version: '5'
    -
        author: Vladimir Pasquier
        date: '2014-07-24 14:18'
        message: ''
        version: '4'
    -
        author: Vladimir Pasquier
        date: '2014-07-22 11:05'
        message: ''
        version: '3'
    -
        author: Vladimir Pasquier
        date: '2014-07-22 11:03'
        message: Rest Contributors
        version: '2'
    -
        author: Alain Escaffre
        date: '2014-07-03 00:58'
        message: ''
        version: '1'

---
## Pluggable Context

It is sometimes useful to optimize the number of requests you send to the server. For that reason we provide a mechanism for requesting more information on the answer, simply by specifying the context you want in the request header.

For example, it is some times useful to get the children of a document while requesting that document. Or its parents. Or its open related workflow tasks.

The blog post ["How to Retrieve a Video Storyboard Through the REST API"](http://www.nuxeo.com/blog/development/2013/09/qa-friday-video-storyboard-rest-api/) gives an example of how to use this mechanism and the dedicated extension point (Since 5.9.5, "rest contributor" has been renamed "content enricher"):

```xml
<extension target="org.nuxeo.ecm.automation.io.services.enricher.ContentEnricherService" point="enricher">
 <enricher name="name" class="namespace">
 </enricher>
</extension>
```

You can add several content enrichers into the header separated by comma

## Default Content Enrichers

### Thumbnail

When specifying&nbsp;`X-NXContext-Category = &ldquo;thumbnail&rdquo;`, the JSON payload of the document REST calls response contains the related attached file thumbnail of the document:
&nbsp;

{{#> panel type='code' heading='Call Example'}}

```
Request URL:
http://localhost:8080/nuxeo/api/v1/id/889cebf8-1704-45d5-99de-9f540d9b6655
 Request Method:
 GET
 Request Headersview source
 ...
 Content-type:
 application/json+nxentity
 X-NXContext-Category:
 thumbnail
 X-NXDocumentProperties:
 dublincore
```

{{/panel}}{{#> panel type='code' heading='Json Response Example'}}

```
{
    "entity-type": "document",
    "repository": "default",
    "uid": "889cebf8-1704-45d5-99de-9f540d9b6655",
    "path": "/default-domain/workspaces/workspace/image",
    "type": "Picture",
    "state": "project",
    "versionLabel": "0.0",
    "isCheckedOut": true,
    "title": "image",
    "lastModified": "2014-07-15T16:38:42.80Z",
    "properties": {
        "dc:description": "",
        ...
    },
    "facets": [
        "Versionable",
        ...
    ],
    "changeToken": "1405442322802",
    "contextParameters": {
        "thumbnail": {
            "url": "http://localhost:8080/nuxeo/nxthumb/default/889cebf8-1704-45d5-99de-9f540d9b6655/thumb:thumbnail/Small_photo.jpg"
        }
    }
}
```

{{/panel}}

### ACLs

When specifying&nbsp;`X-NXContext-Category = &ldquo;acls&rdquo;`, the JSON payload of the document REST calls response contains all related ACLs of the document:

{{#> panel type='code' heading='Call Example'}}

```
Request URL:
http://localhost:8080/nuxeo/api/v1/id/889cebf8-1704-45d5-99de-9f540d9b6655
Request Method:
GET
Request Headers
...
Content-type:
application/json+nxentity
X-NXContext-Category:
acl
X-NXDocumentProperties:
dublincore
```

{{/panel}}{{#> panel type='code' heading='Json Response Example'}}

```
{
    "entity-type": "document",
    "repository": "default",
    "uid": "889cebf8-1704-45d5-99de-9f540d9b6655",
    "path": "/default-domain/workspaces/workspace/image",
    "type": "Picture",
    "state": "project",
    "versionLabel": "0.0",
    "isCheckedOut": true,
    "title": "image",
    "lastModified": "2014-07-15T16:38:42.80Z",
    "properties": {
        "dc:description": "",
        ...
    },
    "facets": [
        "Versionable",
        ...
    ],
    "changeToken": "1405442322802",
    "contextParameters": {
            "acls": [
                {
                    "name": "inherited",
                    "ace": [
                        {
                            "username": "Administrator",
                            "permission": "Everything",
                            "granted": true
                        },
                        {
                            "username": "members",
                            "permission": "Read",
                            "granted": true
                        }
                    ]
                }
            ]
    }
}
```

{{/panel}}

### Preview

When specifying&nbsp;`X-NXContext-Category = &ldquo;preview&rdquo;`, the JSON payload of the document REST calls response contains the related attached file preview of the document:
&nbsp;

{{#> panel type='code' heading='Call Example'}}

```
Request URL:
http://localhost:18090/api/v1/repo/test/path/folder_1/note_0
 Request Method:
 GET
 Request Headersview source
 ...
 Content-type:
 application/json+nxentity
 X-NXContext-Category:
 preview
 X-NXDocumentProperties:
 dublincore
```

{{/panel}}{{#> panel type='code' heading='Json Response'}}

```
{
    "entity-type": "document",
    "repository": "default",
    "uid": "efe571a9-b211-47d4-9358-ad1aa1ceaa4d",
    "path": "/folder_1/note_0",
    "type": "Note",
    "state": "project",
    "versionLabel": "0.0",
    "isCheckedOut": true,
    "title": "image",
    "lastModified": "2014-07-15T16:38:42.80Z",
    "properties": {
        "dc:description": "",
        ...
    },
    "facets": [
        "Versionable",
        ...
    ],
    "changeToken": "1405442322802",
    "contextParameters": {
        "preview": {
            "url": "http://localhost:8080/nuxeo/restAPI/preview/test/efe571a9-b211-47d4-9358-ad1aa1ceaa4d/default/"
        }
    }
}
```

{{/panel}}

## Parameterized Content Enrichers

Some content enrichers might require some form of parameterization to better adjust to each use case.

These parameters are set during the content enricher's initialization and must be declared in the contribution:

```xml
<enricher name="myenricher" class="...">
    <category>mycategory</category>
    <parameter name="param1">value1</parameter>
    <parameter name="param2">value2</parameter>
</enricher>
```

### **Vocabulary**

This enricher&nbsp;adds the labels for each value of a property referencing a vocabulary.

To enable it for a given property two parameters must be set in the contribution:

*   **field:&nbsp;**the xpath of the property holding the values to process
*   **directoryName:&nbsp;**the name of the directory to get the labels from

For each vocabulary backed property an enricher must be set up. For example, to allow retrieving labels from the `l10nsubjects`&nbsp;directory:

```xml
<enricher name="l10nsubjects" class="org.nuxeo.ecm.automation.io.services.enricher.VocabularyEnricher">
    <category>vocabularies</category>
    <parameter name="field">dc:subjects</parameter>
    <parameter name="directoryName">l10nsubjects</parameter>
</enricher> 
```

Then, when specifying&nbsp; `X-NXContext-Category = &ldquo;vocabularies&rdquo;` , the JSON payload of the document REST calls response contains all the labels for each value of&nbsp;`dc:subjects`:

{{#> panel type='code' heading='Json Response'}}

```
{
    "entity-type": "document",
    "repository": "default",
    "uid": "efe571a9-b211-47d4-9358-ad1aa1ceaa4d",
    "path": "/folder/note",
    "type": "Note",
    "state": "project",
    "versionLabel": "0.0",
    "isCheckedOut": true,
    "title": "Note",
    "lastModified": "2014-07-15T16:38:42.80Z",
    "properties": {
        "dc:description": "",
        ...
    },
    "facets": [
        "Versionable",
        ...
    ],
    "changeToken": "1405442322802",
    "contextParameters": {
        "l10nsubjects": {
            "dc:subjects": [
                {"id":"art/cinema","label_en":"Art/Cinema","label_fr":"Art/Cinéma"}
            ]
        }
    }
}
```

{{/panel}}

Note that the key used in&nbsp;`contextParameters` &nbsp;is the enricher's name and not the category. This allows using multiple vocabulary content enrichers with a single category.
