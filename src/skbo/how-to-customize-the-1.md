---
title: How to customize the number of results returned by a document or user query
description: How to customize the number of results returned by a document or user query
review: 
    date: '2019-06-01'
    status: ok
    comment: 'public version'
labels:
    - runtime-administration
    - configuration
    - template

---
# How to customize the number of results returned by a document or user query?
## Problem
When querying a vast set of results, by default, only *50* results are returned by NXL queries, for instance in a content view. How to customize the number of documents returned by such queries?
## Solution
When using a database as a repository, in the directory nxserver/config, there exists a file
**default-sql-directories-bundle.xml** , in which there is a line

     <querySizeLimit>50</querySizeLimit>

that limits the number of results returned.
To overwrite this default limit, in the directory **templates\common\config\** , there is the file named **default-sql-directories-bundle.xml** .  
Increasing the value in this file will overwrite the value of **<querySizeLimit>** when the server will be restarted. However, when patching the instance, there is a risk for your custom file to be itself overwritten.

So, the recommendation is to use a custom template, in the following way:

+ In bin/nuxeo.conf, add to the the nuxeo.templates lines the value “,custom”
+ In **templates/custom**, copy the **templates\common\config\default-sql-directories-bundle.xml** file as **templates/custom/config/custom-default-sql-directories-bundle.xml**
+ In **templates/custom/nuxeo.defaults** , change the line **"\#nuxeo.template.includes=common"** in **"nuxeo.template.includes=\."**
+ In **templates/custom/config/custom-default-sql-directories-bundle.xml** , change the component name to


    <component name="org.nuxeo.ecm.directory.sql.storage.custom">

and the query size  

    <querySizeLimit>500</querySizeLimit>

+ Restart the Nuxeo server which will take into account the custom configuration


2019-06-01T17:37:44.760Z
## (c) Nuxeo Support Knowledge Base Outline 2019
