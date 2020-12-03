---
title: Client SDKs
description: The platform provides multiple clients for accessing the platform remotely.
review:
    comment: ''
    date: '2020-02-20'
    status: ok
labels:
    - lts2016-ok
    - home
    - mlumeau
    - lts2017-ok
section_parent: sdks
tree_item_index: 600
is_overview: true
version_override:
    LTS 2015: 710/nxdoc/clients
    '6.0': 60/nxdoc/clients
    '5.8': 58/nxdoc/clients
history:
    -
        author: Solen Guitter
        date: '2016-07-29 16:26'
        message: ''
        version: '6'
    -
        author: Manon Lumeau
        date: '2016-07-20 09:47'
        message: remove children display macro
        version: '5'
    -
        author: Manon Lumeau
        date: '2016-04-15 15:43'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2013-10-17 11:39'
        message: Added list of children pages with excerpts
        version: '3'
    -
        author: Alain Escaffre
        date: '2013-10-16 17:01'
        message: ''
        version: '2'
    -
        author: Alain Escaffre
        date: '2013-10-16 01:56'
        message: ''
        version: '1'
---

The platform already provides multiple clients for accessing the platform remotely.

{{! multiexcerpt name='rest-api-clients'}}

<div class="row small-up-2 medium-up-5 space-top-1 space-bottom-2 text-center">
  {{> home_client_lib url='/nxdoc/javascript-client' lang='JavaScript'}} {{> home_client_lib url='/client-java' lang='Java'}} {{> home_client_lib url='/nxdoc/python-client'
  lang='Python'}} {{> home_client_lib
  url='/nxdoc/net-client' lang='.NET'}} {{> home_client_lib
  url='/nxdoc/php-automation-client' lang='PHP'}}
</div>

{{! /multiexcerpt}}
