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

The goal of this section is to explain the principles and components that can be included in a production-ready Nuxeo cluster architecture. It also give insights on how to scale a Nuxeo cluster depending on your needs and set up a high availability architecture.

{{#> callout type='info' heading='Nuxeo University'}}
[Nuxeo Architecture Principals](https://university.nuxeo.com/learn/public/course/view/elearning/137/expert-session-disaster-recovery) & 
[Nuxeo Reference Architecture](https://university.nuxeo.com/learn/course/external/view/elearning/201/NuxeoReferenceArchitecture)</br>
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/UNIVERSITY/university_reference_architecture.png
    name: university_reference_architecture.png
    server#screenshot#up_to_date
--}}
![university_reference_architecture.png](nx_asset://2a075e0b-c150-4eeb-b248-b92650771b5a ?w=450,border=true)
{{/callout}}

## Cluster Basics

Setting up a Nuxeo cluster consists of answering two main constraint types, independently or combined:
1. **Scalability** - The setup has to scale easily without sacrificing performances to adapt to a varying load.
1. **High Availability** - When something goes wrong, you should be able to restore service quickly, losing as little data as possible in the process.

In order to scale out and provide high availability (HA), Nuxeo provides a simple clustering solution. When cluster mode is enabled, you can have several Nuxeo server nodes connected to the same components, and you can then simply add more Nuxeo server nodes if you need to serve more requests.


## Going further

The Nuxeo cluster documentation pages are structured in a logical order:
1. Understand the [main concepts]({{page version='' space='nxdoc' page='nuxeo-architecture-introduction'}}) of a Nuxeo cluster architecture 
1. Explore each [components]({{page version='' space='nxdoc' page='nuxeo-architecture-components'}}), with a clear explanation of the component role, the related Nuxeo recommendations and required configuration
1. Discover the different [reference architectures]({{page version='' space='nxdoc' page='nuxeo-reference-architectures'}})
1. Get a view on how to [scale out]({{page version='' space='nxdoc' page='nuxeo-scalability-options'}}) a particular Nuxeo architecture component

