---
title: How to initialize multivalued variables in a workflow?
description: In a workflow, you can define multivalued variables. How to give them default values?
review:
    date: '2019-06-01'
    status: ok
    comment: 'public version'
labels:
    - jsf-jsfdevelopment
    - webui-webuidevelopment
    - multivaluedvariables
    - workflow

---
# How to initialize multivalued variables in a workflow?

## The problem
In a workflow, you can define multivalued variables. How to give them multiple default values?

## The solution
In a workflow, only String and Boolean assignments of default values to multivalued variables are supported (Since 8.10-HF18, numeric data and dates are also supported)

The separator of values is the space.

Example of multivalues:
* myString (String, multivalued) &#61;&gt; String1 String2
* myBoolean (Boolean, multivalued) &#61;&gt; true true false


2019-06-01T21:50:29.134Z
## (c) Nuxeo Support Knowledge Base Outline 2019
