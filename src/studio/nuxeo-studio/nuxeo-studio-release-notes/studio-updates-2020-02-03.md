---
title: 'February / March 2020'
description: .
tree_item_index: 971
review:
  comment: ''
  date: '2020-02-28'
  status: ok
toc: true
---

## Released Changes

{{! multiexcerpt name='studio-updates-2020-02-03-changes'}}

### Consistent Notifications

Whenever you work in Studio Modeler and Studio Designer, notifications:
- always appear on the bottom left
- benefit from a higher contrast to be easily seen
- can be closed to avoid hiding other elements temporarily

### Security Improvements

Nuxeo Online Services is improved to enhance security and may require actions on your end. Learn how to [adapt to this change]({{{page page='security-improvements-faq'}}}).

### Custom Icons Support

In Studio Designer, a new option lets you upload a custom SVG icon for your buttons and drawer menu entries.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/studio-updates-2020-02-03/custom icon import
    name: custom-icon-import.png
    studio_designer#screenshot#up_to_date
--}}
![custom icon import](nx_asset://4ed9c1fb-23d5-491c-9ed3-7e8498eb21d9 ?border=true)

### Conflict Management

Conflict management screen is updated to provide a better experience:
- Long lines are wrapped
- It is easier to understand which file you are picking when doing the selection

**Summary view**:
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/studio-updates-2020-02-03/conflict view summary
    name: conflict-summary.png
    studio_designer#screenshot#up_to_date
--}}
![conflict view summary](nx_asset://1798fa46-b2cb-4ed9-ade3-271c06b74d3f ?w=650,border=true)

**Detailed view**:
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/studio-updates-2020-02-03/conflict view detailed
    name: conflict-detailed-view.png
    studio_designer#screenshot#up_to_date
--}}
![conflict view detailed](nx_asset://58b0c81b-ad1c-45f7-8346-ac7c59010216 ?w=650,border=true)

{{! /multiexcerpt}}


### Other Noteworthy Mentions

{{! multiexcerpt name='studio-updates-2020-02-03-bugfix'}}
- Files in the Studio Designer resources tab can be renamed/moved when the destination name is almost similar ([NXS-5570](https://jira.nuxeo.com/browse/NXS-5570))
- Workflow transitions configuration are drawn correctly in all situations ([NXS-4682](https://jira.nuxeo.com/browse/NXS-4682))
- Cancelling changes in a workflow task configuration works correctly ([NXS-5261](https://jira.nuxeo.com/browse/NXS-5261))
- Workflow variables are available even if you didn't save the workflow yet ([NXS-5255](https://jira.nuxeo.com/browse/NXS-5255))


{{! /multiexcerpt}}

{{{multiexcerpt 'studio-feedback' page='nuxeo-studio-release-notes'}}}
