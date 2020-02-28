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

### Automatic Translations Merge

Currently, configuring translations require to know for each feature whether the translation keys have to be entered in Studio Modeler or Designer, depending on the feature type. Server side features like workflows and vocabularies have to be translated using the Modeler properties files, UI related features using Designer json files.

With this change, no need to know where to configure your translation anymore! Whenever you configure a key in Studio Designer, the equivalent key is created in Studio Modeler if it doesn't exist. The reverse is true as well. This merge happens just before you download your studio package (e.g. when doing a hot reload) so that it doesn't interfere with your work.

### Conflict Management Screen Review

Conflict management screen is updated to provide a better experience:
- Long lines are nicely wrapped
- It is easier to understand which file you are picking when doing the selection

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/studio-updates-2020-02-03/conflict view summary
    name: conflict-summary.png
    studio_designer#screenshot#up_to_date
--}}
![conflict view summary](nx_asset://1798fa46-b2cb-4ed9-ade3-271c06b74d3f ?w=650,border=true)

Summary view

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/studio-updates-2020-02-03/conflict view detailed
    name: conflict-detailed-view.png
    studio_designer#screenshot#up_to_date
--}}
![conflict view detailed](nx_asset://58b0c81b-ad1c-45f7-8346-ac7c59010216 ?w=650,border=true)

Detailed view

### More Upcoming Changes

[More information about upcoming changes](https://jira.nuxeo.com/issues/?jql=project %3D NXS AND fixVersion IN %28'3.28.0','3.29.0'%29) is available in our bug tracking tool.

## Recently Released Changes

{{{multiexcerpt 'studio-updates-2020-02-03-changes' page='studio-updates-2020-02-03'}}}

### Other Noteworthy Mentions

{{{multiexcerpt 'studio-updates-2020-02-03-bugfix' page='studio-updates-2020-02-03'}}}

## Learn More
[More information about released changes and fixed bugs](https://jira.nuxeo.com/issues/?jql=project %3D NXS AND fixVersion IN %28'3.27.0','3.27.1','3.27.2'%29) is available in our bug tracking tool.

---

## Previous Release Notes

| &nbsp;Release&nbsp;Date&nbsp;                                          | Summary                                                                                                                                                                                                                |
| ----------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [February / March 2019]({{page page='studio-updates-2020-02-03'}})     | Custom icons support, security improvements |
| [January 2019]({{page page='studio-updates-2020-01'}})     | Automatically switch to a new branch |
| [December 2019]({{page page='studio-updates-2019-12'}})     | Layout Inheritance for faster layout configuration |
| [October / November 2019]({{page page='studio-updates-2019-10-11'}})     | Easier access to other services, scripts creation from Studio Modeler business logic screens |
| [August / September 2019]({{page page='studio-updates-2019-09'}})      | Package listing performance improvements, automation scripting scrolling bug fixed |
| [July 2019]({{page page='studio-updates-2019-07'}})      | Configure searches on file type or size, better help for page providers configuration |
| [May / June 2019]({{page page='studio-updates-2019-05-and-06'}})      | More consistent layouts, new options in page provider screen. |
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
