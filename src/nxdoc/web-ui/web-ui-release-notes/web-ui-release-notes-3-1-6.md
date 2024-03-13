---
title: Version 3.1.6
description: Discover what's new in Web UI 3.1.6.
review:
    comment: ''
    date: '2024-03-13'
    status: ok
toc: true
labels:
tree_item_index: 995
hidden: true
---

{{{multiexcerpt 'matching-notes' page='web-ui-release-notes'}}}

{{! multiexcerpt name='web-ui-updates'}}
## What’s New in Web UI for LTS 2023 (Version 3.1.6)

This release includes the upgrade of WebUI internal functional tests to NodeJS version 18. This means that functional tests written using the technological stack provided by Web UI for your projects will require to use NodeJS 18 to keep passing. Please refer to the [upgrade notes]({{page page='web-ui-upgrade-notes'}}) for detailed information. This release also includes fixes for accessibility issues related to keyboard usage and visible focus.

#### Keyboard Usage - WCAG 2.1 level A criteria 2.1.1

- Make document actions kebab menu usable with keyboard only.<br/>[[ELEMENTS-1714](https://jira.nuxeo.com/browse/ELEMENTS-1714)]

#### Reflow - WCAG 2.1 level AA criteria 1.4.10

- Fix reflow issue of typeselection in nuxeo-document-create popup.<br/>[[WEBUI-1290](https://jira.nuxeo.com/browse/WEBUI-1290)]
- Fix UI issues in nuxeo-document-import when zoom in.<br/>[[WEBUI-1289](https://jira.nuxeo.com/browse/WEBUI-1289)]
- Fix reflow issue in overflow charts in analytics.<br/>[[ELEMENTS-1718](https://jira.nuxeo.com/browse/ELEMENTS-1718)]


### Other Noteworthy Changes

- NodeJS is upgraded to version 18. Please refer to the [upgrade notes]({{page page='web-ui-upgrade-notes'}}) for detailed information.
- The content is centered in the document view.<br/>[[WEBUI-1449](https://jira.nuxeo.com/browse/WEBUI-1449)]
- The hierarchical vocabularies used in saved searches are correctly restored.<br/>[[WEBUI-1386](https://jira.nuxeo.com/browse/WEBUI-1386)] 
- Template properties are saved correctly.<br/>[[WEBUI-1385](https://jira.nuxeo.com/browse/WEBUI-1385)] 
- Document properties are correctly saved when the Edit form contains a nuxeo-directory-radio-group element.<br/>[[ELEMENTS-1713](https://jira.nuxeo.com/browse/ELEMENTS-1713)] 



## Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/issues/?jql=project IN %28%27WEBUI%27%2C %27ELEMENTS%27%29 AND fixVersion IN %28%273.1.6%27%29 ORDER BY 'Epic Link' ASC%2C type DESC%2C  'Backlog priority' DESC%2C component DESC%2C priority DESC) is available in our bug tracking tool.


{{! /multiexcerpt}}
