---
title: Nuxeo Architecture Components
description: This page covers the elements that can be included in a production-ready Nuxeo cluster architecture.
review:
    comment: ''
    date: '2021-03-10'
    status: ok
is_overview: true
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
<h3>[Load Balancer]({{page page='load-balancers-architecture'}})</h3>
{{/panel}}
</div>

<div class="column medium-12">
{{#> panel type='secondary' match_height='true'}}
<h3>[Reverse Proxy]({{page page='reverse-proxy-architecture'}})</h3>
{{/panel}}
</div>

<div class="column medium-12">
{{#> panel type='secondary' match_height='true'}}
<h3>[Nuxeo Server]({{page page='nuxeo-server-architecture'}})</h3>
{{/panel}}
</div>

<div class="column medium-3">
{{#> panel type='secondary' match_height='true'}}
<h3>[File Storage]({{page page='file-storage-architecture'}})</h3>
{{/panel}}
</div>

<div class="column medium-3">
{{#> panel type='secondary' match_height='true'}}
<h3>[Data Storage]({{page page='database-architecture'}})</h3>
{{/panel}}
</div>

<div class="column medium-3">
{{#> panel type='secondary' match_height='true'}}
<h3>[Search Engine]({{page page='elasticsearch-architecture'}})</h3>
{{/panel}}
</div>

<div class="column medium-3">
{{#> panel type='secondary' match_height='true'}}
<h3>[Messaging System]({{page version='' space='nxdoc' page='messaging-system-architecture'}})</h3>
{{/panel}}
</div>

</center>
</div>


