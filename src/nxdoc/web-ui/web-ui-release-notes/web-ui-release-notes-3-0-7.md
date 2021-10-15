---
title: Version 3.0.7
description: Discover what's new in Web UI 3.0.7.
review:
    comment: ''
    date: '2021-10-15'
    status: ok
toc: true
labels:
tree_item_index: 997
hidden: true
---

{{{multiexcerpt 'matching-notes' page='web-ui-release-notes'}}}

{{! multiexcerpt name='web-ui-updates'}}
## What's New in Web UI for LTS 2021 (version 3.0.7)

### Bulk Actions Improvements

This release brings the ability for users to copy detailed information to the clipboard when an error happens while executing a bulk action. This information can then be leveraged by developers and system administrators to find the root cause of the issue.</br> [[WEBUI-402](https://jira.nuxeo.com/browse/WEBUI-402)]

It also brings numerous fixes, mostly around the support of bulk actions when using a justified grid view. </br>
[[WEBUI-422](https://jira.nuxeo.com/browse/WEBUI-422)] [[WEBUI-425](https://jira.nuxeo.com/browse/WEBUI-425)] [[WEBUI-426](https://jira.nuxeo.com/browse/WEBUI-426)] [[ELEMENTS-1398](https://jira.nuxeo.com/browse/ELEMENTS-1398)]

If you are not familiar with the feature yet, you can learn more with the [bulk actions documentation]({{page page='web-ui-bulk-actions'}}).

### Other Noteworthy Changes

- The `nuxeo-date` element takes into account the locale to display the dates.<br/>[[ELEMENTS-1373](https://jira.nuxeo.com/browse/ELEMENTS-1373)]
- The `nuxeo-diff` element handles dynamic facets.<br/> [[WEBUI-261](https://jira.nuxeo.com/browse/WEBUI-261)]
- The Admin audit page is refreshed when a parameter is changed.<br/> [[WEBUI-449](https://jira.nuxeo.com/browse/WEBUI-449)]
- The default search criteria when picking images in the rich text editor uses the full-text search instead of searching on the title.<br/> [[WEBUI-465](https://jira.nuxeo.com/browse/WEBUI-465)]
- JSP Web UI resources files are no longer cached.<br/> [[WEBUI-485](https://jira.nuxeo.com/browse/WEBUI-485)]
- The EXIF original date is displayed in the EXIF card of a Picture asset.<br/> [[WEBUI-435](https://jira.nuxeo.com/browse/WEBUI-435)]
- The **Save as** button disappears when navigating away from a search.<br/> [[WEBUI-418](https://jira.nuxeo.com/browse/WEBUI-418)]
- The **Save** button is not clickable as long as the file upload is in progress.<br/>[[ELEMENTS-1409](https://jira.nuxeo.com/browse/ELEMENTS-1409)]

## Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/issues/?jql=project IN %28'WEBUI', 'ELEMENTS'%29 AND fixVersion IN %28'3.0.7'%29 ORDER BY type DESC, priority DESC) is available in our bug tracking tool.
{{! /multiexcerpt}}
