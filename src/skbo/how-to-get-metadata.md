---
title: How to get metadata/properties of document via REST API?
description: When using the REST API, by default, metadata (or properties) are not fetched. How to get them that way?
review:
    date: '2019-06-01'
    status: ok
    comment: 'public version'
labels:
    - runtime-administration
    - metadata
    - property
    - rest

---
# How to get the dc:description of a File document using NXQL called via REST GET API?

## Problem

I would like to fetch the *dc:description* field of a document of file "File". I would like to use a GET REST request.

## Solution

As the **dc:description** property is part of the **dublincore** schema, the header **properties: dublincore** of the HTTP request must be set.
You can then extract the value of the **dc:description** field in the returned JSON data:

    curl -u Administrator:Administrator -H "properties: dublincore" "http://localhost:8080/nuxeo/api/v1/repo/default/path/default-domain/workspaces/ws/AAA"

> {"entity-type":"document","repository":"default","uid":"ab7abce5-09b3-4a2e-88b6-9e05f5516a33","path":"/default-domain/workspaces/ws/AAA","type":"File","state":"project","parentRef":"3901a3c0-4b55-4daa-8d44-29e04cfbbefe","isCheckedOut":true,"isVersion":false,"isProxy":false,"changeToken":"1558432900000","title":"AAA","lastModified":"2019-05-21T10:01:40.000Z","properties":{"dc:description":"The desired description","dc:language":null,"dc:coverage":null,"dc:valid":null,"dc:creator":"Administrator","dc:modified":"2019-05-21T10:01:40.000Z","dc:lastContributor":"Administrator","dc:rights":null,"dc:expired":null,"dc:format":null,"dc:created":"2018-11-14T17:27:47.666Z","dc:title":"AAA","dc:issued":null,"dc:nature":null,"dc:subjects":[],"dc:contributors":["Administrator"],"dc:source":null,"dc:publisher":null},"facets":["Versionable","Publishable","Commentable","HasRelatedText","Thumbnail","Downloadable"]}

All enrichers are documented at https://doc.nuxeo.com/nxdoc/content-enrichers/ and https://doc.nuxeo.com/nxdoc/special-http-headers/


2019-06-01T15:18:44.962Z
## (c) Nuxeo Support Knowledge Base Outline 2019
