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

### More Consistent Styling in Layouts

Newly generated layouts will better reflect the Web UI default configuration, to check how your configuration will look like once deployed and provide a consistent experience.

For your existing configuration, a simple tweak can do the bulk of the work!</br>
 In a layout, use the **Switch to code** option and replace the following specific padding in your layout:

```
<style>
*[role=widget] {
  padding: 5px;
}
</style>
```

By the Nuxeo styles instead:

```
<style include="nuxeo-styles"></style>
```

Any custom styling you need can be kept inside the style tag.

{{#> callout type='note' heading='Update'}}
The tag to use is now `nuxeo-styles` instead of `nuxeo-layout-styles` as previously announced.
{{/callout}}

### More Upcoming Changes

[More information about upcoming changes](https://jira.nuxeo.com/issues/?jql=project %3D NXS AND fixVersion IN %28'3.18.0','3.19.0'%29) is available in our bug tracking tool.

## Recently Released Changes

{{{multiexcerpt 'studio-updates-2019-07-changes' page='studio-updates-2019-07'}}}

### Other Noteworthy Mentions

{{{multiexcerpt 'studio-updates-2019-07-bugfix' page='studio-updates-2019-07'}}}

## Learn More
[More information about released changes and fixed bugs](https://jira.nuxeo.com/issues/?jql=project %3D NXS AND fixVersion IN %28'3.15.0','3.15.2'%29) is available in our bug tracking tool.

---

## Previous Release Notes

| Release Date                                           | Summary                                                                                                                                                                                                                |
| ----------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [July 2019]({{page page='studio-updates-2019-07'}})      | Configure searches on file type or size, better help for page providers configuration |
| [April 2019]({{page page='studio-updates-2019-04'}})      | Support to select all schemas in page providers, improved support for workflow graph definition. |
| [March 2019]({{page page='studio-updates-2019-03'}})      | Easier search configuration, override Web UI default configuration, select your default theme in a click. |          
| [February 2019]({{page page='studio-updates-2019-02'}})      | Introducing the Layout Blocks and Git Status bar as well as an easier folderish documents configuration.                                                                                                                                                                               |
| [January 2019]({{page page='studio-updates-2019-01'}})      | Studio Designer interface improvements.                                                                                                                                                                                |
| [December 2018]({{page page='2018-12-12-studio-3-2-0'}})    | Faster layouts configuration.                                                                                                                                                                                          |
| [November 2018]({{page page='2018-11-26-studio-3-1-0'}})    | Firefox support for Studio Designer, performance improvements, drag and drop schema properties in Studio Designer and information about your subscription status.                                                      |
| [October 2018]({{page page='2018-10-29-studio-73-24'}})     | Develop faster with Git access and Quick Switcher, JSF to Web UI migration early access release.                                                                                                                       |
| [September 2018]({{page page='2018-06-11-studio-73-21-1'}}) | Introducing Git access for Studio Designer.                                                                                                                                                                            |
| [June 2018]({{page page='2018-06-11-studio-73-14'}})        | Application definition supports private package selection, introducing token management for enhanced security.                                                                                                         |
| [May 2018]({{page page='2018-05-28-studio-73-13'}})         | Selecting dependencies makes their content automatically available for use in Studio. There are several other usability improvements in Studio Designer that make life easier.                                         |
| [April 2018]({{page page='2018-04-17-studio-73-11-1'}})     | This release makes it easier to create a document type when using Web UI.                                                                                                                                              |
| [April 2018]({{page page='2018-04-02-studio-73-9'}})        | You can now configure your project as a real application containing dependencies on any public addon without having to make a dedicated custom bundle. This release also brings improvements to our Maven integration. |
| [March 2018]({{page page='2018-03-05-studio-73-8'}})        | A REST API to trigger Studio releases, a revamped editor for page providers results and the ability to declare constraints for workflow variables and node variables.                                                  |

{{! multiexcerpt name='studio-feedback'}}
## We Want Your Feedback!

Feel free to let us know how we could [make Studio better](https://portal.prodpad.com/eb062eda-6d54-11e7-8513-22000a2145da) for you!
{{! /multiexcerpt}}
