---
title: Nuxeo Architecture Components
description: This page covers the elements that can be included in a production-ready Nuxeo cluster architecture.
review:
    comment: ''
    date: '2021-03-10'
    status: ok
toc: false
tree_item_index: 200
---

{{! excerpt}}
This page covers the principles and components that can be included in a production-ready Nuxeo cluster architecture.
{{! /excerpt}}

This diagram represents the logical architecture for a Nuxeo cluster. It contains the following components:

<div class="row" data-equalizer data-equalize-on="medium">
<center>

<div class="column medium-12">
{{#> panel type='secondary' match_height='true'}}
<h3>[Load Balancer]({{page version='' space='nxdoc' page='load-balancers-architecture'}})</h3>
{{/panel}}
</div>

<div class="column medium-12">
{{#> panel type='secondary' match_height='true'}}
<h3>[Reverse Proxy]({{page version='' space='nxdoc' page='reverse-proxy-architecture'}})</h3> 
{{/panel}}
</div>

<div class="column medium-12">
{{#> panel type='secondary' match_height='true'}}
<h3>[Nuxeo Server]({{page version='' space='nxdoc' page='nuxeo-server-architecture'}})</h3>
{{/panel}}
</div>

<div class="column medium-3">
{{#> panel type='secondary' match_height='true'}}
<h3>[File Storage]({{page version='' space='nxdoc' page='file-storage-architecture'}})</h3>
{{/panel}}
</div>

<div class="column medium-3">
{{#> panel type='secondary' match_height='true'}}
<h3>[Database]({{page version='' space='nxdoc' page='database-architecture'}})</h3>
{{/panel}}
</div>

<div class="column medium-3">
{{#> panel type='secondary' match_height='true'}}
<h3>[Elasticsearch]({{page version='' space='nxdoc' page='elasticsearch-architecture'}})</h3>
{{/panel}}
</div>

<div class="column medium-3">
{{#> panel type='secondary' match_height='true'}}
<h3>[Async Processing]({{page version='' space='nxdoc' page='asynchronous-processing-architecture'}})</h3>
{{/panel}}
</div>

<div class="column medium-6">
{{#> panel type='secondary' match_height='true'}}
<h3>[Redis]({{page version='' space='nxdoc' page='redis-architecture'}})</h3>
{{/panel}}
</div>

<div class="column medium-6">
{{#> panel type='secondary' match_height='true'}}
<h3>[PubSub Service]({{page version='' space='nxdoc' page='pubsub-architecture'}})</h3>
{{/panel}}
</div>

</center>
</div>

*Note: Redis and PubSub are at the same level as the "File Storage", the "Database", "Elasticsearch" and "Async processing" bricks: a new line is added for readability purposes*