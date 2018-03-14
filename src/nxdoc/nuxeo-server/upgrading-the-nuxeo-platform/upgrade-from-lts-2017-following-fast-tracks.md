---
title: Upgrade from LTS 2017 following Fast Tracks
review:
    comment: ''
    date: '2018-03-12'
    status: ok
labels:
    - multiexcerpt
    - upgrade
    - akervern
toc: true
tree_item_index: 97

---

## From LTS 2017 to 10.1

### Installation and Configuration

#### Parameters to Update

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th colspan="1">Parameter</th>
<th colspan="1">Modification</th>
<th colspan="1">Reference</th>
</tr>
<tr>
<td colspan="1">`nuxeo.rest.write.exception.stack.trace`</td>
<td colspan="1">Renamed to `org.nuxeo.rest.stack.enable`</td>
<td colspan="1">[NXP-23861](https://jira.nuxeo.com/browse/NXP-23861)</td>
</tr>
</tbody>
</table>
</div>

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
<td colspan="1">`org.nuxeo.rest.stack.enable`</td>
<td colspan="1">New Default Value to `false`</td>
<td colspan="1">[NXP-23861](https://jira.nuxeo.com/browse/NXP-23861)</td>
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

{{! multiexcerpt name='upgrade-10.1-code.jackson'}}

You should now use `com.fasterxml.jackson.core:jackson-*` instead of `net.sf.json-lib:json-lib`. See [NXP-24093](https://jira.nuxeo.com/browse/NXP-24093).

{{! /multiexcerpt}}

#### CSRF Protection

{{! multiexcerpt name='upgrade-10.1-code.csrf-protection'}}

CSRF protection is activated by default and based on the CORS configuration and its allowOrigin and supportedMethods parameters, which by default doesn't allow any cross origin. See [NXP-24331](https://jira.nuxeo.com/browse/NXP-24331).

{{! /multiexcerpt}}

#### Video Conversion listener

{{! multiexcerpt name='upgrade-10.1-code.video-listeners'}}

The video info (duration, format, etc.) is now computed by an asynchronous work to avoid loading the blob and running ffmpeg-info synchronously. This work, in turn, schedules two asynchronous works to process the video storyboard and conversions.

Class removed: `VideoAutomaticConversionListener`, `VideoStoryboardListener` and `org.nuxeo.ecm.platform.video.VideoConstants#VIDEO_CHANGED_EVENT` (`videoChanged`).

New Works: `VideoInfoWork` and `VideoStoryboardWork`.

See [NXP-24316](https://jira.nuxeo.com/browse/NXP-24316).

{{! /multiexcerpt}}

#### Code Behavior Changes

{{! multiexcerpt name='upgrade-10.1-behavior.field.version.indexed'}}

- `ecm:versionVersionableId` is now indexed by Elasticsearch. See [NXP-24114](https://jira.nuxeo.com/browse/NXP-24114).

{{! /multiexcerpt}}

{{! multiexcerpt name='upgrade-10.1-code.rest-stack-trace'}}

- Exception stack trace is no longer written in the response per default. Use parameter `org.nuxeo.rest.stack.enable` to enable it. See [NXP-23861](https://jira.nuxeo.com/browse/NXP-23861).

{{! /multiexcerpt}}

#### Operation Changes

#### Deprecated APIs

##### @LocalDeploy

{{! multiexcerpt name='upgrade-10.1-deprecated.localdeploy'}}

`@LocalDeploy` is now deprecated it must not be used anymore, use `@Deploy` instead that now allows you to deploy local contributions. See [NXP-22544](https://jira.nuxeo.com/browse/NXP-22544).

{{! /multiexcerpt}}

##### CoreSession#close

{{! multiexcerpt name='upgrade-10.1-deprecated.coresession-close'}}

CoreSession.close() is deprecated and should not be used anymore. See [NXP-24089](https://jira.nuxeo.com/browse/NXP-24089).

{{! /multiexcerpt}}

### Complementary Information

- [Upgrade notes for 10.1](https://jira.nuxeo.com/issues/?jql=project%20in%20%28NXP%29%20AND%20resolution%20%3D%20Fixed%20AND%20fixVersion%20IN%20%28%2210.1%22%20%29%20AND%20%28%22Impact%20type%22%20%3D%20%22API%20change%22%20OR%20%22Upgrade%20notes%22%20is%20not%20EMPTY%29%20ORDER%20BY%20component%20DESC%2C%20key%20DESC)
- [Release notes for 10.1]({{page version='' space='nxdoc' page='nuxeo-server-release-notes'}})
