---
title: When upgrading from Nuxeo 6.0 to LTS 2015, in-flight workflows cannot be pursued
description: When upgrading from Nuxeo 6.0 to LTS 2015, in-flight workflows cannot be pursued
review: 
    date: '2019-06-01'
    status: ok
    comment: 'public version'
labels:
    - runtime-administration
    - upgrade
    - workflow

---
# When upgrading from Nuxeo 6.0 to LTS 2015, in-flight workflows cannot be pursued
## Problem
When upgrading from Nuxeo 6.0 to LTS 2015, in-flight workflows cannot be pursued

A part of the exception that appears when touching the workflow reads:

    Caused by: org.nuxeo.ecm.core.api.validation.DocumentValidationException: 2 constraint violation(s) thrown. First one is: '"" is not a valid l10ncoverage id.', call DocumentValidationException.getViolations() to get the others
## Solution
This error comes from the upgrade from version 6.0 to 7.10, where empty fields and not null appear.

An approach that worked in previous cases is the following:  
One can modify directly data in the database so that constraints are validated
At this point in time, only 1 message appears: **First one is: '"" is not a valid l10ncoverage id.'**  
=> For documents of type DocumentRoute, one can fill the “coverage” column of table “dublincore” with a value from the vocabulary. “l10coverage” maps to the coverage column of the dublincore schema.  

Once this error ruled out, you will get another validation error with another message: the same procedure applies to the new field.  

From logs, one can often replace the value “empty chain” with the value NULL.

You *must* then synchronize again ElasticSearch.  

With a word of caution, a possible query to change the problematic value would be:  

    update dublincore set coverage = NULL where coverage = '' AND title IN (select distinct(title) from dublincore left join hierarchy on dublincore.id = hierarchy.id where hierarchy.primarytype in ('DocumentRoute', 'RouteNode'));

The following value would eventually be (depending of the exact new error message if it is about the creator field):

    update dublincore set creator = NULL where creator = '' AND title IN (select distinct(title) from dublincore left join hierarchy on dublincore.id = hierarchy.id where hierarchy.primarytype in ('DocumentRoute', 'RouteNode'));

There are also other fields of type user in <https://github.com/nuxeo/nuxeo/blob/7.10/nuxeo-core/nuxeo-core/src/main/resources/schema/dublincore.xsd> => the 3rd possibility might be about the lastContributor field.  
In the same URL, the field “nature” exists, and might be a 4th possibility.

NOTICE that if you can cancel workflows before migrating, migration is simplified. The above process is only about adapting a simple data schema. If in-flight workflows are complex, they could raise more complex situations.


2019-06-01T17:37:35.186Z
## (c) Nuxeo Support Knowledge Base Outline 2019
