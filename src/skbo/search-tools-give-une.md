---
title: Search tools give unexpected results when accentuated documents are sought
description: Search tools give unexpected results when accentuated documents are sought
review: 
    date: '2019-06-01'
    status: ok
    comment: 'public version'
labels:
    - jsf-jsfruntime
    - webui-webuiruntime
    - 3rdparties-elasticsearch
    - configuration
    - elasticsearch
    - localization
    - nxql
    - users

---
# Search tools give unexpected results when accentuated documents are sought
## Problem
Have a document named « Héhé »  
Looking for "Hehe" returns the document  
Looking for "Héhé" returns the document  
Looking for "Héhe" or "Hehé" does NOT return the document  
## Solution
This might happen on an unconfigured Nuxeo version, in which the database might be the Full Text Search engine.  

Uncommenting in nuxeo.conf the line:  

    elasticsearch.override.pageproviders=default_search,document_content,section_content,document_content,tree_children,default_document_suggestion,simple_search,advanced_search,nxql_search,DEFAULT_DOCUMENT_SUGGESTION

will make ElasticSearch the Full Text Search engine for user queries, and this is usually sufficient to make a coherent search return, whether the data contains or not accentuated letters.


2019-06-01T17:37:37.541Z
## (c) Nuxeo Support Knowledge Base Outline 2019
