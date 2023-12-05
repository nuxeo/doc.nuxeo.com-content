---
title: Version 3.1.4
description: Discover what's new in Web UI 3.1.4.
review:
    comment: ''
    date: '2023-12-05'
    status: ok
toc: true
labels:
tree_item_index: 997
hidden: true
---

{{{multiexcerpt 'matching-notes' page='web-ui-release-notes'}}}

{{! multiexcerpt name='web-ui-updates'}}
## What’s New in Web UI for LTS 2023 (Version 3.1.4)

This release focuses on accessibility issues related to keyboard usage and reflow.

### Accessibility Updates

- Grid views can be fully navigated using only the keyboard.<br/>[[WEBUI-555](https://jira.nuxeo.com/browse/WEBUI-555)]
- Grid views items can be selected used using only the keyboard.<br/>[[WEBUI-1262](https://jira.nuxeo.com/browse/WEBUI-1262)]
- Grid views action items can be fully used using only the keyboard<br/>[[ELEMENTS-1676](https://jira.nuxeo.com/browse/ELEMENTS-1676)] 
- Navigation through drawer menu entries can be achieved using the arrow keys<br/>[[WEBUI-1215](https://jira.nuxeo.com/browse/WEBUI-1215)] 
- The document creation popup is usable when using a 400% zoom.<br/>[[WEBUI-1255](https://jira.nuxeo.com/browse/WEBUI-1255)]
- The import screen is usable when zooming at 400%.<br/>[[WEBUI-1256](https://jira.nuxeo.com/browse/WEBUI-1256)]
- The vocabularies table is usable when zooming at 400%.<br/>[[WEBUI-1258](https://jira.nuxeo.com/browse/WEBUI-1258)]
- The export dialog is usable when zooming at 400%<br/>[[ELEMENTS-1673](https://jira.nuxeo.com/browse/ELEMENTS-1673)] 


### Other Noteworthy Changes

- Actions to update document files are now available again after removing legal hold.<br/>[[WEBUI-1241](https://jira.nuxeo.com/browse/WEBUI-1241)]
- When uploading a file during a workflow task, users stay on the current task and can do additional actions..<br/>[[WEBUI-1052](https://jira.nuxeo.com/browse/WEBUI-1052)]
- The browser tab name is correctly displayed after a refresh.<br/>[[WEBUI-1066](https://jira.nuxeo.com/browse/WEBUI-1066)]
- The image in `nuxeo-image-viewer` is well centered after closing the sidebar.<br/>[[ELEMENTS-1584](https://jira.nuxeo.com/browse/ELEMENTS-1584)] 
- Feedback is provided when adding a permission without providing a user or group.<br/>[[ELEMENTS-1665](https://jira.nuxeo.com/browse/ELEMENTS-1665)] 
- The image in `nuxeo-image-viewer` is well centered when the main file is removed<br/>[[ELEMENTS-1670](https://jira.nuxeo.com/browse/ELEMENTS-1670)] 
- Radio group widgets display the default value correctly when used in the context of multivalued complex subproperties<br/>[[ELEMENTS-1683](https://jira.nuxeo.com/browse/ELEMENTS-1683)] 



## Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/issues/?jql=project IN %28%27WEBUI%27%2C %27ELEMENTS%27%29 AND fixVersion IN %28%273.1.4%27%29 ORDER BY 'Epic Link' ASC%2C type DESC%2C  'Backlog priority' DESC%2C component DESC%2C priority DESC) is available in our bug tracking tool.


{{! /multiexcerpt}}
