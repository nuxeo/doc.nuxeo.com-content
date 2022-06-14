---
title: Version 3.0.13
description: Discover what's new in Web UI 3.0.13.
review:
    comment: ''
    date: '2022-06-14'
    status: ok
toc: true
labels:
tree_item_index: 991
hidden: true
---

{{{multiexcerpt 'matching-notes' page='web-ui-release-notes'}}}

{{! multiexcerpt name='web-ui-updates'}}
## What's New in Web UI for LTS 2021 (version 3.0.13)

This release puts focus on accessibility improvements.

### Accessibility Improvements

The element serving as a basis for our `nuxeo-date-picker` (`vaadin-date-picker`) has been upgraded to the latest release in order to benefit from numerous accessibility improvements. This upgrade is transparent and we conducted an audit to ensure that it would come with no breaking change.<br/>[[ELEMENTS-1490](https://jira.nuxeo.com/browse/ELEMENTS-1490)]

The browsing tree has better compatibility with screen readers.<br/>[[WEBUI-209](https://jira.nuxeo.com/browse/WEBUI-209)]

Our [Voluntary Product Accessibility Template]({{page space='nxdoc' page='web-ui-overview'}}#accessibility) (VPAT) for Web UI is available to download anytime to check our conformance level.

### Noteworthy Changes

- Bulk edit forms keep good performance even when using many multivalued fields.<br/>[[WEBUI-739](https://jira.nuxeo.com/browse/WEBUI-739)]


## Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/issues/?jql=project IN %28'WEBUI', 'ELEMENTS'%29 AND fixVersion IN %28'3.0.13'%29 ORDER BY type DESC, priority DESC) is available in our bug tracking tool.
{{! /multiexcerpt}}
