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

### More Consistent Layouts
When creating a create / edit / import layout, the title field is automatically set as required to keep consistency with the default web ui behavior.

### New Options in Page Provider Screen
- `file:content` sub fields are exposed when defining an aggregate: to configure searches on file size or file mime type for instance.

 - `ecm:ancestorId` is exposed in both predicates and aggregates: can be used as an alternative to `ecm:path` when you know the document id instead.

### Polymer 3 Migration

Compatibility for Nuxeo Studio with Polymer 3 to keep our technical stack up to date.

## Upcoming Bugfixes

- Ability to use complex multivalued fields in page provider predicates ([NXS-5191](https://jira.nuxeo.com/browse/NXS-5191))
- Workflow resolution actions not displayed when there are several of them ([NXS-5201](https://jira.nuxeo.com/browse/NXS-5201))
- Branches should not be able to be merged when you have work in progress ([NXS-5215](https://jira.nuxeo.com/browse/NXS-5215))

[More information about upcoming changes](https://jira.nuxeo.com/issues/?jql=project %3D NXS AND fixVersion IN %28'3.10.0'%29) is available in our bug tracking tool.

## Recently Released Changes

{{{multiexcerpt 'studio-updates-2019-03' page='studio-updates-2019-03'}}}

---

## Previous Release Notes

| Release&nbsp;Date                                           | Summary                                                                                                                                                                                                                |
| ----------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [March 2019]({{page page='studio-updates-2019-03'}})      | Easier search configuration, override Web UI default configuration, select your default theme in a click |          
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

## We Want Your Feedback!

Feel free to let us know how we could [make Studio better](https://portal.prodpad.com/eb062eda-6d54-11e7-8513-22000a2145da) for you!

{{! /multiexcerpt}}
