---
title: Database
description:
labels:
    - deployment
    - bchauvin
    - architecture
    - cluster
    - content-review-lts2017
    - lts2019-ok
review:
    comment: ''
    date: '2021-03-10'
    status: ok
toc: true
tree_item_index: 500
---

## Concept

The database is a core component for your Nuxeo cluster infrastructure, since it will store the document hierarchy, all document properties, and will be used as well for various queries. Nuxeo supports many databases, both NoSQL and relational ones. Among them, MongoDB and PostgreSQL currently provide the best overall performances for Nuxeo usage.

## Recommendation

A database system providing high availability. Each solution has its own options for this, therefore we can't go into further details here.

Best performances are obtained using **MongoDB** because it is a document based database. It is built to manage large volumes and is highly scalable. Moreover, using MongoDB allows you to manage key/value stores, and therefore avoid a Redis deployment.

If you have no choice but relying on a SQL based database, then go for PostgreSQL.

## Configuration

Each database has its own solutions for high availability, therefore we may not recommend a specific option here. You may however refer to our [database configuration]({{page page='database-configuration'}}) documentation for further details.

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Going further'}}

- [MongoDB Configuration]({{page page='mongodb'}})

{{/panel}}</div><div class="column medium-6">
</div></div>
