---
title: 'January 2019'
description: .
tree_item_index: 981
review:
  comment: ''
  date: '2019-01-17'
  status: ok
toc: true
hidden: true
---
{{! multiexcerpt name='studio-updates-2019-01'}}

## January 2019 - Upcoming Changes

### Studio Designer Interface Improvements

Layouts and UI menus in Studio Designer are now merged into a single menu to be more consistent with Studio Modeler and provide an smoother user experience.

Menus change as following:
- `Layouts` are integrated as menu option (non-expanded by default).

![Layouts Change]({{file name='layouts-menu-change.png' page='studio-updates-2019-01'}})

- The former `Document Pages` entry becomes `Tabs`.

![Document Pages Change]({{file name='document-pages-change.png' page='studio-updates-2019-01'}})

- `Left Menu Items` and `Main Menu Pages` are merged into a dedicated `Drawer` menu.

![Left Menu Items Change]({{file name='left-menu-items-change.png' page='studio-updates-2019-01'}})

### New Forms Menu in Studio Designer
This menu will let you create reusable sets of properties, that can be used in your layouts afterwards.
<br>For example, you could define a form where you would change the elements configuration, then make sure these changes apply to all your document type layouts by reusing it.

At this stage forms can only be used when switching to code in a layout. A future update will allow them to be dragged and dropped from the catalog in the visual editor mode as well.

### Increased Scope for JSF UI to Web UI Migration Tool
JSF UI form layouts are migrated as forms in Studio Designer.

Content views containing parameters are supported, query parameters are mapped to page provider predicates.

### Git Actions Update
Some actions found in the header today will be moved into a new status bar at the bottom of the screen. This is a first step towards providing greater consistency in the Nuxeo Online Services ecosystem.

Some changes will also happen to the Git actions at the same time:
- All conflicts will be visible at once so you can better understand the result of merging a branch.
- In advanced mode, commit and push actions will be separated so that we can display the commits you will push and what they contain before you decide to do it or not.

### Other Upcoming Improvements and Bugfixes

- Blob fields are properly handled in workflow tasks layouts ([NXS-5023](https://jira.nuxeo.com/browse/NXS-5023)).
- Workflows task drawing is correctly handled ([NXS-4682](https://jira.nuxeo.com/browse/NXS-4682)).
- Tags can be pushed using Git access ([NXS-4882](https://jira.nuxeo.com/browse/NXS-4882)).
- A warning is given when you create a query using the deprecated trash management behavior in content views ([NXS-5054](https://jira.nuxeo.com/browse/NXS-5054)).

{{! /multiexcerpt}}

{{{multiexcerpt 'studio-feedback' page='nuxeo-studio-release-notes'}}}
