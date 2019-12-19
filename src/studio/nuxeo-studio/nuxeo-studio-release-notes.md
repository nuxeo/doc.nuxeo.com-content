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

### [Breaking Change] Tokens to Become Mandatory
Whenever using command line tools like nuxeoctl, Nuxeo CLI, Maven, the REST API to trigger Nuxeo Studio releases, Nuxeo Online Services will request a token instead of your password in order to authenticate.

In order to prevent any issue, we strongly recommend you to do the switch as soon as possible: see our [token management]({{page page='token-management'}}) documentation for details on how to create and apply your token.

### Custom icons support
In Studio Designer, a new option will let you upload a custom SVG icon for your buttons and drawer menu entries.

### More Upcoming Changes

[More information about upcoming changes](https://jira.nuxeo.com/issues/?jql=project %3D NXS AND fixVersion IN %28'3.24.0','3.24.1','3.25.0'%29) is available in our bug tracking tool.

## Recently Released Changes

{{{multiexcerpt 'studio-updates-2019-12-changes' page='studio-updates-2019-12'}}}

### Other Noteworthy Mentions

{{{multiexcerpt 'studio-updates-2019-12-bugfix' page='studio-updates-2019-12''}}}

## Learn More
[More information about released changes and fixed bugs](https://jira.nuxeo.com/issues/?jql=project %3D NXS AND fixVersion IN %28'3.21.0'%29) is available in our bug tracking tool.

---

## Previous Release Notes

| Release Date                                           | Summary                                                                                                                                                                                                                |
| ----------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [October / November 2019]({{page page='studio-updates-2019-10-11'}})     | Easier access to other services, scripts creation from Studio Modeler business logic screens |
| [August / September 2019]({{page page='studio-updates-2019-09'}})      | Package listing performance improvements, automation scripting scrolling bug fixed |
| [July 2019]({{page page='studio-updates-2019-07'}})      | Configure searches on file type or size, better help for page providers configuration |
| [May/June 2019]({{page page='studio-updates-2019-05-and-06'}})      | More consistent layouts, new options in page provider screen. |
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
