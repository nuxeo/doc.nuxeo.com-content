---
title: 'March 2019'
description: .
tree_item_index: 979
review:
  comment: ''
  date: '2019-03-01'
  status: ok
toc: true
hidden: true
---

## Released Changes

{{! multiexcerpt name='studio-updates-2019-03'}}
<!-- 3.7.0 -->
### [Impacting Change] Layout Blocks Scope Fix

Layout blocks no longer list all custom elements you created so far. Instead they contain specifically form layouts:
- migrated from your JSF UI configuration.
- created from the Studio user interface.

As a consequence, layout blocks that were created previously may no longer appear in the list. Note that this is just a visual change: they are still available in your project and you can keep using them. To display them in the layout blocks list again, all you need to do is to move them inside the `UI/forms` folder using the actions at your disposal in the `resources` tab of Studio Designer.

### Override Default Web UI Configuration

In Studio Designer, click on a default configuration item to see how it is configured, and possibly tweak it. If you break anything, it is possible at any time to go back to the original configuration by using a `reset` button.

[<i class="fa fa-long-arrow-right" aria-hidden="true"></i>**For more information, see How to Override Existing Contributions**]({{page version='' space='studio' page='how-to-override-default-contributions'}}).

### Default Theme Selection

Choose the theme to use by default in one click ([NXS-4891](https://jira.nuxeo.com/browse/NXS-4891)).

[<i class="fa fa-long-arrow-right" aria-hidden="true"></i>**For more information, discover How to Customize Themes**]({{page page='how-to-customize-theme-studio'}}).

### Parameters Mapping in Search and Listings Configuration

When configuring a UI element for a search or a listing, search parameters are visible right away. The corresponding JavaScript expression benefits from autocompletion ([NXS-5122](https://jira.nuxeo.com/browse/NXS-5122)).

[<i class="fa fa-long-arrow-right" aria-hidden="true"></i>**For more information, see our use case**]({{page version='' space='nxdoc' page='how-to-display-children-documents-listing'}}).

<!--
### Noteworthy Improvements and Bugfixes

- Bla ([NXS-0000](https://jira.nuxeo.com/browse/NXS-0000)).
-->

[More information about upcoming changes](https://jira.nuxeo.com/issues/?jql=project %3D NXS AND fixVersion IN %28'3.7.0','3.8.0'%29) is available in our bug tracking tool.

{{! /multiexcerpt}}

{{{multiexcerpt 'studio-feedback' page='nuxeo-studio-release-notes'}}}
