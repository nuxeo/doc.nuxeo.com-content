---
title: 'April 2020'
description: .
tree_item_index: 970
review:
  comment: ''
  date: '2020-04-03'
  status: ok
toc: true
---

## Released Changes

{{! multiexcerpt name='studio-updates-2020-04-changes'}}

### Improved Document Type / Workflow Tasks Layout Configuration Experience

#### Undo / Redo

When using visual mode to configure document type or workflow tasks layouts, undo and redo buttons are available and take into account the following changes:
- dragging and dropping a widget
- moving a widget
- copying a widget
- editing a property value inside a widget
- deleting a widget

Note that change history is lost when switching to code or switching to another screen. <a href="https://jira.nuxeo.com/browse/NXS-5771" target="_blank">Detailed behavior</a> is described in the change ticket.

#### Copy / Delete Widgets

A new copy icon is added to quickly duplicate a widget. Copy, delete, edit result columns icons are moved to make them easy to access, no matter which widget you are using.

#### Keyboard Shortcuts

The following keyboard shortcuts are available (mac users, use cmd instead of ctrl):
- *Ctrl+z*: undo (visual and code mode, with separate change history)
- *Ctrl+shift+Z*: redo (visual and code mode, with separate change history)
- *Ctrl+s*: save (visual and code mode)
- *Suppr*: when a widget is selected, delete it (visual mode)

### Automatic Translations Merge

Before, managing translations required to know for each feature whether the translation keys have to be entered in Studio Modeler or Designer, depending on the feature type. Server-side features like workflows and vocabularies had to be translated using the Modeler properties files, UI related features using Designer JSON files.

With this change, no need to know where to configure your translation anymore! Whenever you configure a key in Studio Designer, the equivalent key is created in Studio Modeler if it doesn't exist, and vice versa. This merge happens just before the download of your studio package (e.g. when doing a hot reload) so that it doesn't interfere with your work.

#### Trigger an Event Handler When Field Values Have Changed

A new filtering option is available in the event handlers screen. When using the `before document modification` event, it allows you to trigger your logic only if particular properties have been changed.

{{! /multiexcerpt}}


### Other Noteworthy Mentions

{{! multiexcerpt name='studio-updates-2020-04-bugfix'}}
- In workflows, the "follow only first true transition" option can be checked ([NXS-5806](https://jira.nuxeo.com/browse/NXS-5806))

{{! /multiexcerpt}}

{{{multiexcerpt 'studio-feedback' page='nuxeo-studio-release-notes'}}}
