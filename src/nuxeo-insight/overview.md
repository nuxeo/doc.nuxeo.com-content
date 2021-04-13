---
title: Overview
review:
    comment: ''
    date: '2020-10-08'
    status: ok
toc: true
labels:
    - nuxeo-insight
    - user-documentation
tree_item_index: 100
---

![Content Bots](nx_asset://b020ee48-25e2-4b3a-88e3-25f2661eb77c ?w=100%,border=false)

We've identified two different areas of Artificial Intelligence, generic AI and business focus AI.

## Generic AI

It includes all available services that provide content enrichments. They are usually developed over open, publicly available datasets.</br>
They are generic commodity enrichments. On the example above, based on a fashion photo, they would identify useful information that will help to catalog and find the asset.

**Enrichment Pipeline** service fulfill these by integrating with third-party services.
It's configurable and extensible so new services can be added and tuned to the right behavior.

Although these are an important resource of enrichments, they can easily be very limited on adding value for your business domain.

As an example, on a fashion enterprise that is producing and managing the types of photos seen above, having labels like beauty, street fashion, clothing will not add any value as every asset is in the same categories.</br>
We need more specific enrichments on the business scoped. Even more, we want prediction on concrete data used within the enterprise.

## Business Focus AI

An organization would not want a librarian that didn't understand their content to be managing it. That's the same case as with your AI, you need it to understand your content to be useful for your business.</br>
On the example above, we want prediction on concrete data, like Talent identification, products on assets and other taxonomies that are specific only to our ontologies which are not public or widely available outside the organization.</br>
A person doing fashion modeling for a couple of years during college will never be identifiable publicly and by entities outside the business.

**Nuxeo Insight** occupies this space in AI. To do so, it uses custom Machine Learning capabilities to understand your content.</br>
[Content Bots]({{page version='' space='nuxeo-insight' page='content-bots'}}) crafted for your use cases train on your content and are able to do predictions on your specific taxonomies and ontologies. Predictions that are used as suggestions and to fill in content, when confident enough.

### AI Ready and Enterprise Ready

With **Nuxeo Insight** your application will be AI-ready from the beginning. Your production content will be de facto corpora, the dataset to fuel any machine learning use case.
There is no need for data engineering. Your custom ML models will be embedded directly on where your users are.</br>
This can happen due to the integration and feature set between the Nuxeo Platform and Nuxeo Insight that makes it fully [Enterprise ready]({{page version='' space='nuxeo-insight' page='enterprise-ready'}}).

<!--
See how to [get started]({{page version='' space='nuxeo-insight' page='getting-start'}}) and follow up on this documentation to be ready to make AI the easiest tool on your belt.
-->
