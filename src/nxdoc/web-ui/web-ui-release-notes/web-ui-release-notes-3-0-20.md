---
title: Version 3.0.20
description: Discover what's new in Web UI 3.0.20.
review:
    comment: ''
    date: '2023-03-21'
    status: ok
toc: true
labels:
tree_item_index: 984
hidden: false
---

{{{multiexcerpt 'matching-notes' page='web-ui-release-notes'}}}

{{! multiexcerpt name='web-ui-updates'}}
## What’s New in Web UI for LTS 2021 (Version 3.0.20)

This release brings configurability and experience improvements around tables and the date picker.

{{! multiexcerpt name='upgrade-notes'}}
### Improved Flexibility for Data Table Configuration

In order to provide the flexibility needed by our customers to cover both cases where a lot of content can be put in a cell (e.g., tens of tags or values) and cases where scrollbars are better avoided, we changed the way the element can be configured.

The `data-table-column` element now exposes a property named `overflow`. It controls how cells content is displayed when larger than their column and is configurable on a per column basis.

Authorized values are auto (display an horizontal scrollbar inside the cells when necessary, recommended for multivalued properties) or hidden (hide overflowing content, recommended for finer control over display).

The default value is set to hidden, in order to keep a consistent behavior with previous releases and to let developers decide where horizontal scrollbars should appear specifically.

Your existing configuration needs to be updated if you intend to display a horizontal scrollbar for specific columns.

Since this change should help with managing the various cases to display cell content, we reverted a previous change that was enforcing a minimum size for a column. You can again define a specific size for any column.

[[ELEMENTS-1576](https://jira.nuxeo.com/browse/ELEMENTS-1576)]
<br/>[[ELEMENTS-1570](https://jira.nuxeo.com/browse/ELEMENTS-1570)]


### Date-picker Shows a Clear Date Button

The `nuxeo-date-picker` element now shows again a button that allows a user to reset the date with a single click. This brings back a missing feature for users coming from LTS 2019 where this button was present.

Since this is considered an experience improvement, this behavior is enabled by default. The button can be hidden by setting the property `hideClearDateButton` to `true` on the element.

[[ELEMENTS-1569](https://jira.nuxeo.com/browse/ELEMENTS-1569)]
{{! /multiexcerpt}}

### Accessibility Improvements

This release brings improvements around screen reader support, keyboard usage, headings and labels.

#### Information and Relationships - WCAG 2.1 level A criteria 1.3.1

[[WEBUI-212](https://jira.nuxeo.com/browse/WEBUI-212)]
<br/>[[WEBUI-539](https://jira.nuxeo.com/browse/WEBUI-539)]

#### Keyboard Usage - WCAG 2.1 level A criteria 2.1.1

[[ELEMENTS-1581](https://jira.nuxeo.com/browse/ELEMENTS-1581)]

#### Headings and Labels - WCAG 2.1 level AA criteria 2.4.6

[[WEBUI-505](https://jira.nuxeo.com/browse/WEBUI-505)]
<br/>[[WEBUI-508](https://jira.nuxeo.com/browse/WEBUI-508)]
<br/>[[WEBUI-509](https://jira.nuxeo.com/browse/WEBUI-509)]
<br/>[[WEBUI-510](https://jira.nuxeo.com/browse/WEBUI-510)]
<br/>[[ELEMENTS-1577](https://jira.nuxeo.com/browse/ELEMENTS-1577)]

An updated VPAT can be found in [this page]({{page page='web-ui-accessibility'}}).

### Other Noteworthy Changes

- The actions menu is correctly displayed after navigating back to a document.<br/>[[ELEMENTS-1540](https://jira.nuxeo.com/browse/ELEMENTS-1540)]
- A clear error message is provided when attempting to create a user that already exists.<br/>[[ELEMENTS-1428](https://jira.nuxeo.com/browse/ELEMENTS-1428)]
- Translations for activity.versionRemoved and activity.documentRestored have been added.<br/>[[WEBUI-532](https://jira.nuxeo.com/browse/WEBUI-532)]
- Text area elements stretch to a maximum height to avoid creating visual glitches.<br/>[[ELEMENTS-1564](https://jira.nuxeo.com/browse/ELEMENTS-1564)]
- On a version, the HTML editor is in readonly and displays the content of the property `note:note`.<br/>[[ELEMENTS-1529](https://jira.nuxeo.com/browse/ELEMENTS-1529)]
- The "PUBLISH" button is disabled until a Location is specified.<br/>[[WEBUI-1056](https://jira.nuxeo.com/browse/WEBUI-1056)]
- A clearer message is provided when trying to add a tag that is already added to the document.<br/>[[ELEMENTS-1578](https://jira.nuxeo.com/browse/ELEMENTS-1578)]

## Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/issues/?jql=project IN %28%27WEBUI%27%2C %27ELEMENTS%27%29 AND fixVersion IN %28%273.0.20%27%29 ORDER BY 'Epic Link' ASC%2C type DESC%2C  'Backlog priority' DESC%2C component DESC%2C priority DESC) is available in our bug tracking tool.



{{! /multiexcerpt}}
