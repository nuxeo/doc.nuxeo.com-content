---
title: Nuxeo Architecture Prerequisites
description: This page mentions the prerequisites that should be applied every time a Nuxeo architecture is set up.
labels:
    - deployment
    - gcarlin
    - architecture
    - cluster
    - lts2017-ok
    - lts2019-ok
review:
    comment: ''
    date: '2019-08-13'
    status: ok
toc: true
tree_item_index: 1210
---

{{! excerpt}}
This page mentions the prerequisites that should be applied every time a Nuxeo architecture is set up.
{{! /excerpt}}

{{#> callout type='info' heading='Nuxeo University'}}
Watch the related course on Nuxeo University:</br>
[Nuxeo Reference Architecture](https://university.nuxeo.com/learn/course/external/view/elearning/201/NuxeoReferenceArchitecture).
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/UNIVERSITY/university_reference_architecture.png
    name: university_reference_architecture.png
    server#screenshot#up_to_date
--}}
![university_reference_architecture.png](nx_asset://2a075e0b-c150-4eeb-b248-b92650771b5a ?w=450,border=true)
{{/callout}}

## Compatibility Matrix

For every component, the Nuxeo architecture must follow the compatibility matrix for your LTS distribution. The supported component versions are heavily tested, and all hotfixes and security fixes cover the specified versions during the support period.

{{#> callout type='info' heading='Useful links'}}
[Compatibility Matrix for LTS 2019]({{page version='1010' space='nxdoc' page='compatibility-matrix'}})</br>
[Supported Versions](https://www.nuxeo.com/legal/supported-versions/)
{{/callout}}

## Monitoring

Monitoring is critical; all components of the Nuxeo architecture should be supervised to make sure that the platform is running efficiently and make adjustments if bottlenecks or performance issues are identified. This is about monitoring the server capabilities in terms of CPU consumption, RAM, JVM performance, etc. Once monitoring is set up, the architecture should be benchmarked and stress tested.

{{#> callout type='info' heading='Useful links'}}
[Metrics and Monitoring]({{page version='' space='nxdoc' page='metrics'}})
{{/callout}}

## Component Tuning

It is important to read all the best practices and recommendations for every component. Indeed, individual components usually need a little fine-tuning to get the best performance for your architecture.

These topics are explained in the Nuxeo documentation, but we recommend to refer to external software’s documentation pages for complementary information.

{{#> callout type='info' heading='Useful links'}}
[Setup best practices]({{page version='' space='nxdoc' page='setup-best-practices'}})
{{/callout}}

## Non-Necessary Services

Finally, if some of the Nuxeo features are not needed, non-necessary services can be disabled, like the publishing system for example. The same goes for full-text extraction, if searching for terms placed within the binaries is not necessary.

{{#> callout type='info' heading='Useful links'}}
[Indexing options]({{page version='' space='nxdoc' page='repository-configuration'}}#indexing-options)
{{/callout}}

* * *

<div class="row" data-equalizer data-equalize-on="medium">
<div class="column medium-6">
{{#> panel heading='Next Steps'}}
- [Standard High Availability Nuxeo Cluster Architecture]({{page page='standard-high-availability-nuxeo-cluster-architecture'}})
- [Scale your Nuxeo cluster]({{page page='nuxeo-cluster-scalability-options'}})
{{/panel}}
</div>

<div class="column medium-6">
{{#> panel heading='Related Documentation'}}
- [Nuxeo Clustering Configuration]({{page page='nuxeo-clustering-configuration'}})
- [Elasticsearch Setup]({{page page='elasticsearch-setup'}})
- [Redis Configuration]({{page page='redis-configuration'}})
- [HTTP and HTTPS Reverse-Proxy Configuration]({{page page='http-and-https-reverse-proxy-configuration'}})
{{/panel}}
</div>
</div>
