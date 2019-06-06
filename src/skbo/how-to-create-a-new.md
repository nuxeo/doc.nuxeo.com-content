---
title: How to create a new WorkspaceRoot and SectionRoot in a domain
description: How to create a new WorkspaceRoot and SectionRoot in a domain
review:
    date: '2019-06-01'
    status: ok
    comment: 'public version'
labels:
    - runtime-administration
    - administration
    - rest

---
# How to create a new WorkspaceRoot and SectionRoot in a domain?
## Problem
You want to create a new WorkspaceRoot and a new SectionRoot in a domain, but at the domain level, there is not Create button displayed. How to create these new roots?
## Solution
It is for instance possible to use the following REST command to create a root document:

    curl -X POST -H "Content-Type: application/json" -u Administrator:Administrator --data-ascii @create.json "http://localhost:8080/nuxeo/site/api/v1/path/default-domain"

where the file *create.json* reads

    {
        "entity-type": "document",
        "name":"WorkspaceRoot2",
        "type": "WorkspaceRoot",
        "properties": {
            "dc:title": "WorkspaceRoot2",
            "dc:description": "Created via a very cool and easy REST API",
            "common:icon": "icons/workspace.gif",
            "common:icon-expanded": null,
            "common:size": null
        }
    }

This creates a WorkspaceRoot named "WorkspaceRoot2" under /default-domain

You can adapt the same process to a SectionRoot.


2019-06-01T17:38:06.064Z
## (c) Nuxeo Support Knowledge Base Outline 2019
