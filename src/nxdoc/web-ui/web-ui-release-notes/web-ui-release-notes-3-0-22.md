---
title: Version 3.0.22
description: Discover what's new in Web UI 3.0.22.
review:
    comment: ''
    date: '2023-05-08'
    status: ok
toc: true
labels:
tree_item_index: 982
hidden: true
---

{{{multiexcerpt 'matching-notes' page='web-ui-release-notes'}}}

{{! multiexcerpt name='web-ui-updates'}}
## What’s New in Web UI for LTS 2021 (Version 3.0.22)

This release includes bugfix and accessibility improvements.

### Accessibility Improvements

This release brings improvements around screen reader support, keyboard usage and contrast.

#### Information and Relationships - WCAG 2.1 level A criteria 1.3.1

[[WEBUI-566](https://jira.nuxeo.com/browse/WEBUI-566)]
[[ELEMENTS-1598](https://jira.nuxeo.com/browse/ELEMENTS-1598)]

#### Keyboard Usage - WCAG 2.1 level A criteria 2.1.1

[[WEBUI-563](https://jira.nuxeo.com/browse/WEBUI-563)]
[[ELEMENTS-1594](https://jira.nuxeo.com/browse/ELEMENTS-1594)]
[[ELEMENTS-1592](https://jira.nuxeo.com/browse/ELEMENTS-1592)]
[[ELEMENTS-1596](https://jira.nuxeo.com/browse/ELEMENTS-1596)]

#### Label in name - WCAG 2.1 level A criteria 2.5.3

[[ELEMENTS-1610](https://jira.nuxeo.com/browse/ELEMENTS-1610)]


An updated VPAT can be found in [this page]({{page page='web-ui-accessibility'}}).

### Other Noteworthy Changes

- The crossorigin attribute is added to the img tag for nuxeo-document-thumbnail and nuxeo-image-viewer.<br/>[[ELEMENTS-1589](https://jira.nuxeo.com/browse/ELEMENTS-1589)]
- Clicking on the browser back button from the Compare view returns to the Folderish view tab.<br/>[[WEBUI-1107](https://jira.nuxeo.com/browse/WEBUI-1107)]
- Clicking on the browser back button from the Compare view after clicking the switch side returns to the Folderish view tab.<br/>[[WEBUI-1108](https://jira.nuxeo.com/browse/WEBUI-1108)]
- The nuxeo-directory-suggestion element manages to save the "false" value used in a search form.<br/>[[WEBUI-1101](https://jira.nuxeo.com/browse/WEBUI-1101)]
- The preview is correctly displayed even if a download is triggered during the preview loading.<br/>[[ELEMENTS-1597](https://jira.nuxeo.com/browse/ELEMENTS-1597)]
- The Compare feature correctly displays the multivalued fields.<br/>[[WEBUI-1067](https://jira.nuxeo.com/browse/WEBUI-1067)]
- Fixed active notification checked state on creation of easyshare folder.<br/>[[WEBUI-466](https://jira.nuxeo.com/browse/WEBUI-466)]
- Hyperlink tooltip adapts to the position of selected text.<br/>[[ELEMENTS-1599](https://jira.nuxeo.com/browse/ELEMENTS-1599)]
- Nuxeo-tag-suggestion displays its label only once.<br/>[[ELEMENTS-1607](https://jira.nuxeo.com/browse/ELEMENTS-1607)]
- Scrollbar is displayed in header when selected multiple values.<br/>[[ELEMENTS-1608](https://jira.nuxeo.com/browse/ELEMENTS-1608)]
- Administration's Authorized Applications messages are displayed only for authorized members.<br/>[[WEBUI-859](https://jira.nuxeo.com/browse/WEBUI-859)]


## Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/issues/?jql=project IN %28%27WEBUI%27%2C %27ELEMENTS%27%29 AND fixVersion IN %28%273.0.22%27%29 ORDER BY 'Epic Link' ASC%2C type DESC%2C  'Backlog priority' DESC%2C component DESC%2C priority DESC) is available in our bug tracking tool.



{{! /multiexcerpt}}
