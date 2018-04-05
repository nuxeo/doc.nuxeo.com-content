---
title: Upgrade from LTS 2017 to FT 10.1
description: Instructions to upgrade your Nuxeo Platform instance from LTS 2017 version to FT 10.1.
review:
    comment: ''
    date: '2018-03-11'
    status: ok
labels:
    - multiexcerpt
toc: true
tree_item_index: 91

---

## From LTS 2017 to FT 10.1

### Installation and Configuration

#### New Parameters

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th colspan="1">Parameter</th>
<th colspan="1">Modification</th>
<th colspan="1">Reference</th>
</tr>
<tr>
<td colspan="1">`nuxeo.server.hsts.enabled`</td>
<td colspan="1">New Default Value to `false`</td>
<td colspan="1">[NXP-24030](https://jira.nuxeo.com/browse/NXP-24030)</td>
</tr>
</tbody>
</table>
</div>

### Code Changes

#### Replace `json-lib` with `jackson`

{{{multiexcerpt 'upgrade-10.1-code.jackson' page='Upgrade from LTS 2017 following Fast Tracks'}}}

#### CSRF Protection

{{{multiexcerpt 'upgrade-10.1-code.csrf-protection' page='Upgrade from LTS 2017 following Fast Tracks'}}}

#### Video Conversion Listener

{{{multiexcerpt 'upgrade-10.1-code.video-listeners' page='Upgrade from LTS 2017 following Fast Tracks'}}}

#### Code Behavior Changes

{{{multiexcerpt 'upgrade-10.1-behavior.field.version.indexed' page='Upgrade from LTS 2017 following Fast Tracks'}}}

{{{multiexcerpt 'upgrade-10.1-code.rest-stack-trace' page='Upgrade from LTS 2017 following Fast Tracks'}}}


#### Operation Changes

#### Deprecated APIs

##### @LocalDeploy

{{{multiexcerpt 'upgrade-10.1-deprecated.localdeploy' page='Upgrade from LTS 2017 following Fast Tracks'}}}

##### CoreSession#close

{{{multiexcerpt 'upgrade-10.1-deprecated.coresession-close' page='Upgrade from LTS 2017 following Fast Tracks'}}}

### Complementary Information

- [Upgrade notes for 10.1](https://jira.nuxeo.com/issues/?jql=project%20in%20%28NXP%29%20AND%20resolution%20%3D%20Fixed%20AND%20fixVersion%20IN%20%28%2210.1%22%20%29%20AND%20%28%22Impact%20type%22%20%3D%20%22API%20change%22%20OR%20%22Upgrade%20notes%22%20is%20not%20EMPTY%29%20ORDER%20BY%20component%20DESC%2C%20key%20DESC)
- [Release notes for 10.1]({{page version='' space='nxdoc' page='nuxeo-server-release-notes'}})
