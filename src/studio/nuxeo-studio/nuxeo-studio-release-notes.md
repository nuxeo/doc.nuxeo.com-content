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

By the Nuxeo layout styles instead:

```
<style include="nuxeo-layout-styles"></style>
```

Any custom styling you need can be kept inside the style tag.

### More Upcoming Changes

[More information about upcoming changes](https://jira.nuxeo.com/issues/?jql=project %3D NXS AND fixVersion IN %28'3.16.0'%29) is available in our bug tracking tool.

## Recently Released Changes

### Actions Renamed As Buttons

Actions menu in Designer are renamed as `Buttons`, and the related options as follows:
- `Operation Action` is now `Button`: Choose this option to create a button using configuration only.
- `Action` is now `Custom Button`: Choose it to create your own button element using code for extensive capabilities.

Icons reflect the options more clearly.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/studio-updates-2019-07/button-creation-plus-button
    name: button-creation-plus-button.png
    studio_designer#screenshot#up_to_date
--}}
![button-creation-plus-button](nx_asset://62c8b710-4e68-4849-aa41-3ff0cfab5d82 ?w=152,border=true)

The `+` button in Designer is refreshed to be more explicit:
- Tooltips are shown on the option you choose,
- When only two options are available, clicking the `+` button directly leads you to the one that is the simplest to use.

### Better Contextual Help

Studio Designer shows contextual help on click so that you can copy/paste code samples and click on documentation links.

### Help In Page Provider Configuration

- Contextual help is added to guide you on:
  - choosing an aggregate type between ranges, histogram and terms options
  - defining ranges
  - adding a quick filter
- Date format and interval provide a default value and guidance to let you tweak it, quick filter clause has a placeholder to guide you on the query format
- Format field for range aggregates and interval field for histogram aggregates are properly marked as required, and regrouped with other required fields for faster configuration
- Quick filter name is shown in the user interface when no translation has been defined for it

### Search on File Type or Size

It is possible to define aggregates on the sub-fields for a blob property. It can be used to provide search options to find files of a specific type, or based on the file size for example.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/studio-updates-2019-07/aggregates-blob-sub-properties
    name: aggregates-blob-sub-properties.png
    studio_modeler#screenshot#up_to_date
--}}
![aggregates-blob-sub-properties](nx_asset://1f8f789f-809b-43d8-8c22-c2d74c0d6b1c ?w=450,border=true)

Use the `histogram` or `range` aggregate types in combination with the `length` property for the file size, the `terms` aggregate with the `mime-type` property for the file type.

These options work with any blob property, multivalued ones as well.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/studio-updates-2019-07/aggregates-blob-sub-properties-search-form
    name: Screenshot from 2019-07-08 16-38-53.png
    1.1.3#screenshot#up_to_date
--}}
![aggregates-blob-sub-properties-search-form](nx_asset://ba6d5300-6056-40bc-9d59-4d326befd8b6 ?w=250)

### Polymer 3 Migration

Compatibility for Nuxeo Studio with Polymer 3 to keep our technical stack up to date.

### Other Noteworthy Mentions
- Workflow graph looks consistent between Studio and Web UI when using a fork node ([NXS-5292](https://jira.nuxeo.com/browse/NXS-5292)).
- Studio prevents you from using the same name for a content view and a page provider as it could lead to conflicts ([NXS-4590](https://jira.nuxeo.com/browse/NXS-4590)).
- Page providers that are named similarly as a document type are correctly handled when generating a search form ([NXS-4736](https://jira.nuxeo.com/browse/NXS-4736)).

{{{multiexcerpt 'studio-updates-2019-05-and-06-changes' page='studio-updates-2019-05-and-06'}}}

{{{multiexcerpt 'studio-updates-2019-05-and-06-bugfix' page='studio-updates-2019-05-and-06'}}}

## Learn More
[More information about released changes and fixed bugs](https://jira.nuxeo.com/issues/?jql=project %3D NXS AND fixVersion IN %28'3.15.0','3.15.2'%29) is available in our bug tracking tool.

---

## Previous Release Notes

| Release Date                                           | Summary                                                                                                                                                                                                                |
| ----------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
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
