---
title: 'March 2021'
description: .
tree_item_index: 960
review:
  comment: ''
  date: '2021-03-19'
  status: ok
toc: true
---

{{! multiexcerpt name='studio-updates-2021-03'}}

### Update of Studio Designer Catalog

The Studio Designer catalog, in the code view, has been updated to include relevant LTS 2021 elements. These elements will be fully usable in front end templates, including relevant attributes.

### "Before document modification" Event Handler Filters by "All of" and "At least one of"

In the **Events Handler** section, for the event "Before document modification" it's be possible to set the condition for triggering the event as either:
- "All of", when all the properties for a relevant document have been modified.
- "At least one of", when any of the properties have been changed.

It will remain possible to choose individual fields, as currently.

This will enhance the effectiveness of this Event Handler for complex modification scenarios. In the image below the new selector:

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/studio-updates-2021-03/All of, One of feature
    name: Allof-oneof.png
    studio_modeler#screenshot#up_to_date
--}}
![All of, One of feature ](nx_asset://3c7590ad-0bf6-431c-96a9-9610ce8caf74 ?w=650,border=true)

### Removed "Save" Popup When Not Necessary

In Studio Modeler, a pop-up proposes to save your work when browsing certain sections, even when no change has been made to that section. It has been removed in these instances.

### Save Table Settings in Studio Designer

We have fixed an issue on table view when the settings applied to a table view of search results were not save correctly.

### Quick Switcher Navigation

We have introduced a new **Quick Switcher** for navigating between Nuxeo Studio projects and your Nuxeo Online Services account. Just type **Ctrl+SHIFT+k** / **Cmd+SHIFT+k**, from a Studio project or your NOS dashboard, and it will be displayed.

This new search function will allow you to search across packages, applications and projects available in your NOS account. The existing Quick Switcher within each project, activated with Ctrl+k / Cmd+k, will remain.

### Managing User Permissions in Nuxeo Connect

It's now easier to assign users to a service. In the **Account Management** section tab of your Connect Interface, you will be able to more clearly assign users to services.

### Marketplace Downloads

We've removed the download count for Marketplace Packages as the implementation needs to be reviewed.

{{! /multiexcerpt}}
<br/><br/>
