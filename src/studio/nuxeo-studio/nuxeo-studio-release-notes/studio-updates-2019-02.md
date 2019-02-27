---
title: 'February 2019'
description: .
tree_item_index: 980
review:
  comment: ''
  date: '2019-02-14'
  status: ok
toc: true

---

## Released Changes

{{! multiexcerpt name='studio-updates-2019-02'}}

### Git Status Bar

Some actions, previously found in the header, are moved into a new status bar at the bottom of the screen ([NXS-5080](https://jira.nuxeo.com/browse/NXS-5080)). This is a first step towards providing greater consistency in the Nuxeo Online Services ecosystem.

Some changes also happen to the Git actions at the same time:

- All conflicts will be visible at once so you can better understand the result of merging a branch.
- In advanced mode, commit and push actions will be separated so that we can display the commits you will push and what they contain before you decide to do it or not.

[<i class="fa fa-long-arrow-right" aria-hidden="true"></i>**For more information, see the Branch Management page**]({{page version='' space='studio' page='branch-management'}}).

### Easier Folderish Documents Configuration

When using LTS 2019 or greater, visually configure columns to be displayed for every folderish document type you create ([NXS-4994](https://jira.nuxeo.com/browse/NXS-4994)). To prevent disruption only newly configured layouts will benefit from this feature. You can erase the existing configuration and generate it again to benefit from it otherwise.

### New Layout Blocks Menu in Studio Designer

This menu lets you create reusable sets of properties, that can be used in your layouts afterwards.
For example, you could define a form where you would change the elements configuration, then make sure these changes apply to all your document type layouts by reusing it.
</br>

[<i class="fa fa-long-arrow-right" aria-hidden="true"></i>**For more information, see the UI page**]({{page version='' space='studio' page='ui-designer'}}).

At this stage forms can only be used when switching to code in a layout. A future update will allow them to be dragged and dropped from the catalog in the visual editor mode as well.

### Increased Scope for JSF UI to Web UI Migration Tool

JSF UI form layouts are migrated as forms in Studio Designer.

Content views containing parameters are supported, query parameters are mapped to page provider predicates.
</br>

[<i class="fa fa-long-arrow-right" aria-hidden="true"></i>**For more information, see the Migration Services page**]({{page version='' space='studio' page='migration-services'}}).

### Noteworthy Improvements and Bugfixes

- Blob fields are properly handled in workflow tasks layouts ([NXS-5023](https://jira.nuxeo.com/browse/NXS-5023)).
- Workflows task drawing is correctly handled ([NXS-4682](https://jira.nuxeo.com/browse/NXS-4682)).
- Studio generates proper configuration when handling files in workflow tasks ([NXS-5023](https://jira.nuxeo.com/browse/NXS-5023)).
- UI items work correctly when used from a Studio Designer page provider configuration ([NXS-5092](https://jira.nuxeo.com/browse/NXS-5092)).

[More information about bugs fixed since last release notes](https://jira.nuxeo.com/issues/?jql=project %3D NXS AND fixVersion IN %28'3.5.0','3.5.1','3.5.2','3.6.0'%29) is available in our bug tracking tool.

{{! /multiexcerpt}}

{{{multiexcerpt 'studio-feedback' page='nuxeo-studio-release-notes'}}}
