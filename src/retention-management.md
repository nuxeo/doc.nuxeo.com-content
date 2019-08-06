---
title: Nuxeo Retention Management
description: The retention management module offers the necessary features to cover all the aspects of data/retention management to fulfill legal requirement.
review:
    comment: ''
    date: '2019-08-05'
    status: 'ok'
labels:
    - lts2019-wip
    - grenard
    - jaubenque
    - retention-management
toc: true
tree_item_index: 3000
private: true
---

{{! excerpt}}
The retention management module lets you cover all the aspects of data/retention management to fulfill legal requirements. It includes management of records, retention rules, the deletion of the document at a specific date and legal case management features, such as putting document under legal hold and/or retention depending on a specific event or metadata and searching for a retention rules.
{{! /excerpt}}

## Concept

Retention management is the term used to define the fact to control the life cycle of a document using rules and policies.</br>
It describes the process of keeping or deleting documents under a set of circumstances not necessarily bounded by time, but to an event or a specific metadata on your document type.

Nuxeo Retention module lets you controls document that need to be retained over time. This module is meant to be used in highly regulated environment and on multiple document types, such as File, Audio, Video and Picture.

SCHEMA?

### Legal Hold

> A legal hold is a process that an organization uses to preserve all forms of potentially relevant information when litigation is pending or reasonably anticipated.

The legal hold acts like a lock action once activated, the main document. **can't be deleted** even at API or storage level.

The document can still be downloaded and exported but it can't be edited, replaced, etc.

### Retention Rule

A retention rule is a schedule of



### Audit Trail




### Record

> A record is a document or other electronic or physical entity in an organization that serves as evidence of an activity or transaction performed by the organization and that requires retention for some time period.

* * *

<div class="row" data-equalizer data-equalize-on="medium">
<div class="column medium-6">
{{#> panel type='secondary' match_height='true'}}
### Functional Overview



[More&nbsp;<i class="fa fa-long-arrow-right" aria-hidden="true"></i>]({{page page='nuxeo-retention-functional-overview'}})
{{/panel}}
</div>

<div class="column medium-6">
{{#> panel type='secondary' match_height='true'}}
### Installation / Configuration


[More&nbsp;<i class="fa fa-long-arrow-right" aria-hidden="true"></i>]({{page page='nuxeo-retention-installation'}})
{{/panel}}
</div>

</div>
