---
title: 'HOWTO: Use Content Redaction'
description: 'Guidance to leverage content redaction with Nuxeo Enhanced Viewer'
review:
    comment: ''
    date: '2022-07-13'
    status: ok
labels:
    - addon
    - tutorial
    - howto
toc: true
tree_item_index: 100
---

Protecting and removing personal identifying information (PII) from your documents can be a requirement before sharing your content to a wider audience or in order to comply with regulations such as the General Data Privacy Regulation (GDPR) or the California Consumer Privacy Act (CCPA).

Nuxeo Enhanced Viewer helps you with this use case by allowing to apply temporary or permanent redactions to your content. This page explains what to expect from this feature, and how to configure it in your Nuxeo instance.

## Functional Overview

callout info
redaction actions require the Redact permission. Not displayed by default in the UI => link to how-to.

Redact text
Redact an area
Search to redact

Can search to redact be automated? => no

Redactions are
  temporary, I can see through with Redact permission, I can delete (creator of redaction or admin)
  unsafe, I can use another way to see through them

At this stage it is already possible to print / download with redactions to get a copy to print

How to generate a file with permanent redactions

How to override the logic from the generate button
  what's in the context, how do I get it

How does it behave with multi layer pdf files?

How does it behave with multiple docs?

Is there a way for me to make this work at scale?
  AI + creating annotations programatically

Known limitations

Update https://doc.nuxeo.com/nxdoc/nuxeo-data-privacy/ to mention redaction
