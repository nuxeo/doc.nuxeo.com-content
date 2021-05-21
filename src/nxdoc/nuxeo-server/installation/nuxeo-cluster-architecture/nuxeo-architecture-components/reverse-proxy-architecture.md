---
title: Reverse Proxy
description:
labels:
    - deployment
    - bchauvin
    - architecture
    - cluster
    - content-review-lts2017
    - lts2019-ok
review:
    comment: ''
    date: '2021-03-10'
    status: ok
toc: true
tree_item_index: 200
---

## Concept

A reverse proxy is used to avoid users from accessing the Nuxeo server directly. One simple rule you have to follow is that on a production setup, your Nuxeo server should *never* be exposed directly. Setting up a reverse proxy brings many benefits to performance and security aspects:

- HTTPS/SSL encryption
- HTTP caching
- URL rewriting

![]({{file name='reverse.png'}} ?w=500,h=349,border=true)

Additionally, when some clients use a WAN to access the server, the reverse proxy can be used to protect the server against slow connections that may use server-side resources for a long time. You may refer to the [reverse proxy configuration]({{page page='http-and-https-reverse-proxy-configuration'}}) for more details.

## Recommendation

A reverse proxy **to protect each Nuxeo server node** (usually Apache or Nginx).

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Going further'}}

- [HTTP and HTTPS Reverse-Proxy Configuration]({{page version='' space='nxdoc' page='http-and-https-reverse-proxy-configuration'}})

{{/panel}}</div><div class="column medium-6">
</div></div>
