---
title: Nuxeo Architecture Introduction
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
    date: '2021-03-10'
    status: ok
toc: true
tree_item_index: 100
---

{{! excerpt}}
This page mentions the key elements that should be in mind every time a Nuxeo architecture is set up.
{{! /excerpt}}

## Compatibility Matrix

For every component, the Nuxeo architecture must follow the compatibility matrix for your LTS distribution. The supported component versions are heavily tested, and all hotfixes and security fixes cover the specified versions during the support period.

{{#> callout type='info' heading='Useful links'}}
[Compatibility Matrix for LTS 2019]({{page version='1010' space='nxdoc' page='compatibility-matrix'}})</br>
[Supported Versions](https://www.nuxeo.com/legal/supported-versions/)
{{/callout}}

## Monitoring

Monitoring is critical; all components of the Nuxeo architecture should be supervised to make sure that the platform is running efficiently and make adjustments if bottlenecks or performance issues are identified. This is about monitoring the server capabilities in terms of CPU consumption, RAM, JVM performance, etc. Once monitoring is set up, the architecture should be benchmarked and stress tested.

{{#> callout type='info' heading='Useful links'}}
[Metrics and Monitoring]({{page version='' space='nxdoc' page='observability'}})
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
