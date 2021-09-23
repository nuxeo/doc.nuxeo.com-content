---
title: Version 3.0.6
description: Discover what's new in Web UI 3.0.6.
review:
    comment: ''
    date: '2021-09-02'
    status: ok
toc: true
labels:
tree_item_index: 998
hidden: true
---

{{{multiexcerpt 'matching-notes' page='web-ui-release-notes'}}}

{{! multiexcerpt name='web-ui-updates'}}
## What's New in Web UI for LTS 2021 (version 3.0.6)

### Execute Actions in Bulk

This release introduces a first iteration for bulk actions. Users can now select all documents from a results listing both in a search or browsing context, then execute an action on them.

Bulk actions can be executed on most default actions from Web UI like adding documents to a collection or publishing them. It is also possible to [create your custom bulk actions using Nuxeo Studio]({{page page='how-to-create-bulk-actions-studio'}}).

This feature is currently disabled by default; you can activate it by adding the property `nuxeo.selection.selectAllEnabled=true` in your [nuxeo.conf]({{page page='configuration-parameters-index-nuxeoconf'}}) file. Learn more with the [bulk actions documentation]({{page page='web-ui-bulk-actions'}}).

[[WEBUI-248](https://jira.nuxeo.com/browse/WEBUI-248)]

### Webdriver IO v4 and NodeJS v10 Deprecated

We migrated our functional tests to make use of Webdriver IO v7 and NodeJS v14.

If your project contains functional tests, we encourage you to check whether they rely or not on the Webdriver v4 API or on NodeJS v10; both of these tools have been deprecated for a long time and you should migrate them as soon as you can.

We recommend using the latest active LTS from NodeJS (v14 at the time of this writing). The minimal version for NodeJS becomes v12.

We are keeping a compatilibity layer with NodeJS v10 and the Webdriver v4 API for now, and we intend to drop it: date is currently being determined. If your project relies on these, feel free to reach out to us so that we can discuss a path forward. You can do that through your customer success representative or directly by email: ui@nuxeo.com

[[WEBUI-278](https://jira.nuxeo.com/browse/WEBUI-278)]

### Other Noteworthy Changes

- Web UI is now available in the Czech language. We would like to thank all the people who participated in that translation effort.<br/>[[WEBUI-403](https://jira.nuxeo.com/browse/WEBUI-403)]
- The HTML editor works properly in edit layouts and nuxeo-data-table-form. <br/> [[ELEMENTS-1393](https://jira.nuxeo.com/browse/ELEMENTS-1393)]

## Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/issues/?jql=project IN %28'WEBUI', 'ELEMENTS'%29 AND fixVersion IN %28'3.0.6'%29 ORDER BY type DESC, priority DESC) is available in our bug tracking tool.
{{! /multiexcerpt}}
