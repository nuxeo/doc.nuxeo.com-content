---
title: Version 3.0.10
description: Discover what's new in Web UI 3.0.10.
review:
    comment: ''
    date: '2022-02-11'
    status: ok
toc: true
labels:
tree_item_index: 994
hidden: false
---

{{{multiexcerpt 'matching-notes' page='web-ui-release-notes'}}}

{{! multiexcerpt name='web-ui-updates'}}
## What's New in Web UI for LTS 2021 (version 3.0.10)

Introduces the ability to search and browse documents across multiple repositories.

### Noteworthy Changes

### Search Across Multiple Repositories

When configuring a page provider for LTS 2021 in Nuxeo Studio, you can activate the "multi repository" option to search and get results across your different repositories. Web UI will display them and let you navigate to them, no matter where they are located.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Web UI Release Notes/multi-repo-page-provider.png
    name: multi-repo-page-provider.png
    studio_modeler#screenshot#up_to_date
--}}
![multi-repo-page-provider.png](nx_asset://d84cb333-d2d4-4500-b8fd-f6e14f34bec7 ?w=650,border=true)

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Web UI Release Notes/multi-repo-search-results.png
    name: multi-repo-search-results.png
    web_ui#screenshot#up_to_date
--}}
![multi-repo-search-results.png](nx_asset://bacbb4c8-e9b9-41d3-b37f-ad8045decca9 ?border=true)

If your search layout and result layout were already configured in LTS 2019, make sure to follow the [routing API upgrade notes]({{page space='nxdoc' page='web-ui-upgrade-notes-lts-2021'}}#routing-behavior-api-change) in order to get them working as expected.

### More Granular Coupling Between UI and Permissions

When configuring Web UI, it is important that some actions show as soon as you have the most granular permission to enable them. We made some changes in that regard for that release.

- The option to delete permanently documents is available when having the "Remove" permission instead of "Manage Everything".<br/>[[WEBUI-580](https://jira.nuxeo.com/browse/WEBUI-580)]
- Permissions can be managed as soon as you have the "WriteSecurity" permission instead of "Manage Everything".<br/>[[ELEMENTS-1451](https://jira.nuxeo.com/browse/ELEMENTS-1451)]

### Other

- Accessibility: when using a screen reader, the labels used to sort results are more explicit.<br/>[[ELEMENTS-1427](https://jira.nuxeo.com/browse/ELEMENTS-1427)]
- Web UI is now compatible with strict CSP headers.<br/>[[WEBUI-608](https://jira.nuxeo.com/browse/WEBUI-608)]
- The proper preview is displayed when navigating to another asset.<br/>[[ELEMENTS-1453](https://jira.nuxeo.com/browse/ELEMENTS-1453)]
- The browser title is updated correctly when navigating.<br/>[[WEBUI-245](https://jira.nuxeo.com/browse/WEBUI-245)]
- The Action bar is put to the background when opening the Creation popup.<br/>[[WEBUI-620](https://jira.nuxeo.com/browse/WEBUI-620)]

## Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/issues/?jql=project IN %28'WEBUI', 'ELEMENTS'%29 AND fixVersion IN %28'3.0.10'%29 ORDER BY type DESC, priority DESC) is available in our bug tracking tool.
{{! /multiexcerpt}}
