---
title: LTS 2021.10 / LTS 2021-HF10
description: Discover what's new in LTS 2021.10 / LTS 2021-HF10
review:
   comment: ''
   date: '2021-10-14'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 5500
---

{{! multiexcerpt name='nuxeo-server-updates-2021-10'}}
# What's New in LTS 2021.10 / LTS 2021-HF10

## Nuxeo Server

### Core Storage

#### Improve the Authentication Performances With MongoDB Indexes {{> tag 'admin'}} {{> tag 'dev'}}

We improved the authentication performances by adding default new MongoDB indexes on the `oauth2Tokens` collection: `accessToken` and `serviceName` fields.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30610](https://jira.nuxeo.com/browse/NXP-30610)

### Packaging / Distribution / Installation

#### Tomcat 9.0.54 {{> tag 'dev'}} {{> tag 'admin'}}

The Nuxeo Platform now relies on Tomcat 9.0.54.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30646](https://jira.nuxeo.com/browse/NXP-30646)

## Major Bug Fixes

### Fix CoreSession Association Error After Executing Multi-Repo Page Provider

A search using a multi-repo page provider now returns all the documents from all repositories.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30615](https://jira.nuxeo.com/browse/NXP-30615)

### Escape/Sanitize the First Malicious Character of a Cell in a CSV Export to Avoid CSV Injection

Following the [Open Web Application Security Project® (OWASP) recommendation](https://owasp.org/www-community/attacks/CSV_Injection), the first malicious character of a cell in a CSV export is now sanitized to avoid CSV injection.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30590](https://jira.nuxeo.com/browse/NXP-30590)

### Batch Upload Fails When Using `gridfsbinaries` Template

Batch Upload now supports [GridFS binary manager]({{page page='mongodb'}}#gridfs).

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30618](https://jira.nuxeo.com/browse/NXP-30618)

### WOPI - Fix Download With WOPI Integration

Downloads in the WOPI iframe is now allowed.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30229](https://jira.nuxeo.com/browse/NXP-30229)

### Retention - Only the Creator Can Edit a Record After Legal Hold Removal or After Retention Period Expired

Previously, for instances with versioning turned on, only the creator can edit a record after legal hold removal or after retention period expired.

Any granted user can do it now (as we disabled automatic versioning for all records documents).

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30453](https://jira.nuxeo.com/browse/NXP-30453)

### JSF UI - Fix Document Count

When repository had more than 10,000 documents, the Admin panel of the JSF UI was only showing 10,000 as the number of documents.

Elasticsearch document count is now accurate in JSF admin center.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30568](https://jira.nuxeo.com/browse/NXP-30568)

# Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/secure/ReleaseNote.jspa?projectId=10011&version=21506) is available in our bug tracking tool.

{{! /multiexcerpt}}
