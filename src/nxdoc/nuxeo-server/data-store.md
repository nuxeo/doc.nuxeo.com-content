---
title: Data Store
description: Browse the Core Server section of the developer documentation.
review:
    comment: ''
    date: '2018-06-12'
    status: ok
labels:
    - lts2017-ok
tree_item_index: 600
version_override:
    LTS 2019: nxdoc/1010/content-repository
    LTS 2017: nxdoc/910/content-repository
    LTS 2016: nxdoc/810/content-repository
---
<div class="row" data-equalizer data-equalize-on="medium">

<div class="column medium-6">
{{#> panel type='secondary' match_height='true'}}
### Data Modeling

{{{excerpt space='nxdoc' page='data-modeling'}}}

[More <i class="fa fa-long-arrow-right" aria-hidden="true"></i>]({{page space='nxdoc' page='data-modeling'}})
{{/panel}}
</div>

<div class="column medium-6">
{{#> panel type='secondary' match_height='true'}}
### Persistence Architecture

The Nuxeo Platform repository stores documents, either using VCS or BDS implementation, and binaries, using the binary store. This persistence layer is configurable.

[More <i class="fa fa-long-arrow-right" aria-hidden="true"></i>]({{page space='NXDOC' page='Persistence Architecture'}})

{{/panel}}
</div>

</div>

<div class="row" data-equalizer data-equalize-on="medium">

<div class="column medium-6">
{{#> panel type='secondary' match_height='true'}}
### Versioning

The Nuxeo Repository includes a configurable versioning system. Even the version storage service is pluggable so you can define your own storage for versions.

[More <i class="fa fa-long-arrow-right" aria-hidden="true"></i>]({{page space='nxdoc' page='versioning'}})
{{/panel}}
</div>

<div class="column medium-6">
{{#> panel type='secondary' match_height='true'}}
### Tutorials

Read our tutorials about documents, access to documents and document storage.

[More <i class="fa fa-long-arrow-right" aria-hidden="true"></i>]({{page space='nxdoc' page='data-modeling-tutorials'}})
{{/panel}}
</div>

</div>
