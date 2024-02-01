---
title: Content Bots
review:
    comment: ''
    date: '2020-10-09'
    status: ok
toc: true
labels:
    - nuxeo-insight
    - user-documentation
tree_item_index: 100
---

![Content Bots](/nx_assets/836e5573-ad9e-4cb0-b1e8-067266ba1fe5.png ?w=100%,border=false)

Content bots are the main entities to provide intelligence. They study your content to learn a specific use case. When they feel confident, they will start to make suggestions and work on content creation.

They can understand:
- **text**: documents, word, PDF's, ...
- **images**: any format.
- **discrete data points**: vocabularies, classes, references, ...

## Learning By Example

These bots learn by studying the content, by looking at examples of their use case. If a bot is trying to predict what products exist in a picture, it will focus on pictures that already have that information and understand the patterns and how to identify products.

## Always Evolving

Even after they are trained, as the predict and users confirm, they will have more examples to work with. This allows them to retrain and be more confident about their predictions.

## Combining Sources

The Content Bots can look into several different sources to make their predictions. This allows us to experiment and see what better combinations can achieve the best performance. On the example above, if instead of having only the picture to study from, the bot had also the picture brand, it would allow it to make better predictions on the products on the picture. This is possible due to the intrinsic content's structure.

Another way having multiple inputs is useful is by having a specific bias to our content. Imagine your bot is predicting the urgency of emails. Most company departments have different organizations, contracts and context. It is normal that they will have very different notions of emergency.
So having also the target department as input will allow the bot to adjust urgency according to each department.

## Multiple Predictions

On the output side, content bots can take a content item and do several suggestions for different kinds of metadata.
Imagine a report document, a specific content bot can read it and predict details like urgency, main topics and best assignee.
This not only makes predictions more efficient as only a request is needed, but the content bot itself can look at patterns between the several outputs to improve its performance.

## Deep Learning

Our content bots Machine Learning is provided by deep neural networks. It tries to mimic some aspects of human brains. Nowadays with the available computation levels, it is possible to use huge artificial neural networks and train them with large amounts of data.

## Pre-trained

Even though we are build to scale and to allow big data to be trained, most use cases do not have a lot of examples to fuel on.</br>
This is why our content bots include pre-trained components that allow them to have a great baseline to understand natural language and vision.</br>
This transfer learning uses models train on millions of examples and uses that knowledge to very quickly understand other use cases.</br>
Doing so, we have seen cases of only needing 50 documents to comprehend a category.

## Tailored architecture

Every use case will depend on different types of content to analyze and different data to predict.
So, every content bot is automatically designed to have the best architecture and components to fulfill its purpose.</br>
You do not need to understand machine learning techniques to be sure that the best practices are applied for the best performance.

## Tuned Learning

While training there are a lot of factors and ways the content bot can apply to the best performance. This depends on the content that it's trying to study.</br>
Normally, ML experts would see the results and manually tune these parameters until they've achieved the better result.</br>
Our content bots are provided with a tuned training, which we call optimization. They learn how to train and get us the best result without any human intervention.
