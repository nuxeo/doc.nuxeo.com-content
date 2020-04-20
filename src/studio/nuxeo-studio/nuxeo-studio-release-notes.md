---
title: Nuxeo Studio Release Notes
description: Discover changes brought in our recent Nuxeo Studio updates.
review:
  comment: ''
  date: ''
  status: ok
toc: true
tree_item_index: 730
---

Discover upcoming and recent changes in Nuxeo Studio.

## Upcoming Changes

### Default Role Change
On new Studio projects, developers will get write access by default to the [underlying Studio Git repository]({{page page='nuxeo-studio-designer-git-access'}}) instead of read. It will still be possible to switch back to read access as an option.

### Widgets Drag and Drop Instead of Mode

When configuring a document type or workflow task layout, each property in the tree will offer a [list of available widgets](https://jira.nuxeo.com/browse/NXS-5775) (e.g. text input, text area) you can drag and drop instead of a view and edit mode.

### Properties Filtering in Layouts

When configuring layouts visually, a quick search will let you filter through the options you can drag and drop.

### Translation Keys in Layouts

To facilitate translating your application, when saving configuration in Studio Modeler, [translation keys will be automatically generated](https://jira.nuxeo.com/browse/NXS-5826) for their content. Studio Designer will [use these keys](https://jira.nuxeo.com/browse/NXS-5827) by default instead of generating hardcoded labels.

### Simplified Layout Blocks Experience

[Several improvements](https://jira.nuxeo.com/browse/NXS-5836) will simplify the way you can create and [use](https://jira.nuxeo.com/browse/NXS-5778) layout blocks in your configuration.

### More Upcoming Changes

[More information about upcoming changes](https://jira.nuxeo.com/issues/?jql=project %3D NXS AND fixVersion IN %28'3.30.0'%29) is available in our bug tracking tool.

## Recently Released Changes

{{{multiexcerpt 'studio-updates-2020-04-changes' page='studio-updates-2020-04'}}}

### Other Noteworthy Mentions

{{{multiexcerpt 'studio-updates-2020-04-bugfix' page='studio-updates-2020-04'}}}

## Learn More
[More information about released changes and fixed bugs](https://jira.nuxeo.com/issues/?jql=project %3D NXS AND fixVersion IN %28'3.29.0'%29) is available in our bug tracking tool.

---

## Previous Release Notes

| &nbsp;Release&nbsp;Date&nbsp;                                          | Summary                                                                                                                                                                                                                |
| ----------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [April 2020]({{page page='studio-updates-2020-02-04'}})     | Improved Visual Layout Configuration Experience |
| [February / March 2020]({{page page='studio-updates-2020-02-03'}})     | Custom icons support, security improvements |
| [January 2020]({{page page='studio-updates-2020-01'}})     | Automatically switch to a new branch |
| [December 2019]({{page page='studio-updates-2019-12'}})     | Layout Inheritance for faster layout configuration |

{{! multiexcerpt name='studio-feedback'}}
## We Want Your Feedback!

Feel free to let us know how we could [make Studio better](https://portal.prodpad.com/eb062eda-6d54-11e7-8513-22000a2145da) for you!
{{! /multiexcerpt}}
