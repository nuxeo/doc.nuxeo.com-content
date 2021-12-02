---
title: Nuxeo Cluster Architecture
is_overview: true
review:
    comment: ''
    date: '2021-03-10'
    status: ok
toc: true
tree_item_index: 290
---

The goal of this section is to explain the principles and components that can be included in a production-ready Nuxeo cluster architecture. It also gives insights on how to scale a Nuxeo cluster depending on your needs and set up a high availability architecture.

{{#> callout type='info' heading='Nuxeo University'}}
[Nuxeo Architecture Principals](https://university.hyland.com/courses/e4038) &
[Nuxeo Reference Architecture](https://university.hyland.com/courses/e4137)</br>
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/UNIVERSITY/university_reference_architecture.png
    name: university_reference_architecture.png
    server#screenshot#up_to_date
--}}
![university_reference_architecture.png](nx_asset://2a075e0b-c150-4eeb-b248-b92650771b5a ?w=450,border=true)
{{/callout}}

## Cluster Basics

Running Nuxeo in cluster mode addresses two important cases:

- **Scalability**: Adapt to varying load by adding or removing nodes
- **High Availability**: Supporting node failure without impacting activity

In order to scale out and provide high availability (HA), Nuxeo provides a simple clustering solution. When cluster mode is enabled, you can have several Nuxeo server nodes connected to the same services.

## Going Further

The Nuxeo cluster documentation pages are structured in the following order:
1. Understand the [main concepts]({{page page='nuxeo-architecture-introduction'}}) of a Nuxeo cluster architecture.
1. Explore each [components]({{page page='nuxeo-architecture-components'}}) of them, with a clear explanation of the component role, the related Nuxeo recommendations and required configuration.
1. Discover the different [reference architectures]({{page page='nuxeo-reference-architectures'}}).
1. Get a view on how to [scale out]({{page page='nuxeo-scalability-options'}}) a particular Nuxeo architecture component.
