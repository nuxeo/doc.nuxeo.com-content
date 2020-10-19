---
title: Overview
review:
    comment: ''
    date: '2020-10-08'
    status: ok
labels:
    - nuxeo-insight
    - user-documentation
tree_item_index: 100
---

![Content Bots](nx_asset://b020ee48-25e2-4b3a-88e3-25f2661eb77c ?w=100%,border=false)

We've identified two different areas of Artificial Intelligence, generic AI and business focus AI.

## Generic AI ##
It includes all  available services that provide content enrichments. They are usually developed over open, public available datasets. 
They are generic commodity enrichments. On the example above, based on a fashion photo, they would identify usefull information that will help cataloging and find the asset. 

** Enrichment Pipeline ** service fullfil these by integrating with third-party services. 
It's configurable and extensible so new services can be added and tuned to they right behaviour.

Although these are an important resource of enrichments, they can easily be very limited on adding value for you business domain. 

As an example, on a fashion enterprise that is producing and managing the types of photos seen above, having labels like beauty, street fashion, clothing will not add any value as every assert is in the same categories. 
We need more spefic enrichments on the business scoped. Even more, we want prediction on concrete data used within the enterprise.

## Business focus AI ##
An organization would not want a librarian that didn't understand their content to be managing it. That's the same case as with your AI, you need it to understand your content to be usefull for your business. 
On the example above, we want prediction on concrete data, like Talent identification, products on assets and other taxonomies that are spefic only to our ontologies which are not public or widely availabe outside the organization.
A person doing fashion modeling for a couple of year during college will never be identifiable publicacly and by entities outside the business. 

** Nuxeo Insight ** occupies this space in AI. To do it so, it uses custom Machine Learning capabilities to undersand your content.
[Content Bots]({{page version='' space='nuxeo-insight' page='content-bots'}}) crafted for your use cases train on your content and are able to do predictions on your specific taxonomies and ontologies. Predictions that are used as suggestions and to fill in content, when confident enough.

### AI ready and enterprise ready ###
With ** Nuxeo Insight ** your application will be AI ready form the start. Your production content will be de facto corpora, the dataset to fuel any machine learning use case.
There is no need for data engineering. Your custom ML models will be embeded directly on where your users are.
This can happen due to the integration and feature set between the Nuxeo Platform and Nuxeo Insight that makes it fully  [Entreprise ready]({{page version='' space='nuxeo-insight' page='enterprise-ready'}}).

See how to [get start]({{page version='' space='nuxeo-insight' page='getting-start'}}) and follow up on this documentantion to be ready to make AI the easiest tool on your belt.
