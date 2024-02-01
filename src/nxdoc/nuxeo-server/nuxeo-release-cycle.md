---
title: Nuxeo Release Cycle
review:
    comment: ''
    date: '2021-04-29'
    status: ok
confluence:
    ajs-parent-page-id: '3868746'
    ajs-parent-page-title: Nuxeo Documentation Center Home
    ajs-space-key: MAIN
    ajs-space-name: Main
    canonical: Nuxeo+Release+Cycle
    canonical_source: 'https://doc.nuxeo.com/display/MAIN/Nuxeo+Release+Cycle'
    page_id: '14254883'
    shortlink: I4PZ
    shortlink_source: 'https://doc.nuxeo.com/x/I4PZ'
    source_link: /display/MAIN/Nuxeo+Release+Cycle    
tree_item_index: 10200
history:
    -
        author: Solen Guitter
        date: '2015-09-25 12:27'
        message: ix double negatio
        version: '7'
    -
        author: Solen Guitter
        date: '2015-09-25 11:16'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2014-11-26 17:19'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2014-04-10 18:16'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2013-11-06 15:14'
        message: Updated version numbers
        version: '3'
    -
        author: Florent Guillaume
        date: '2013-11-06 15:10'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2013-06-13 11:46'
        message: ''
        version: '1'
---

The Nuxeo release cycle is centered around **two release types**:

- **LTS releases every 18 to 24 months**. LTS releases can be seen as major releases. They can introduce non-transparent architecture, data, or code migration steps.

- **LTS updates every three weeks during the active phase** of the LTS (More on “Active” status below) and monthly when in the maintenance phase. LTS updates do not require any architecture, data, or code migration steps, making them easy and secure to install regularly.

{{#> callout type='info' }}
As always, critical security fix updates are scheduled for release as soon as they are ready.
{{/callout}}

Nuxeo defines three distinct phases of the LTS lifecycle:

- **Active**: The LTS updates deliver both bug fixes and new features and improvements. The active window lasts at least a year and until the next LTS version is released. When we deliver an LTS Update that includes new features that affect user interfaces, we will flag these changes and disable them by default. Examples include a new user action, a new menu entry, a new document tree, etc. Application builders can review the list of new features available along the LTS lifecycle and enable them individually. Flagged features will become the default option in the next active LTS release.

- **Maintenance**: The LTS updates deliver bug fixes only. The maintenance phase for a given LTS lasts two years after its active phase. LTS releases are available for at least three years. For instance, if the active period lasts two years, then the entire LTS cycle will last four years.

- **End of Life** (end of maintenance end): once the maintenance phase ends, the LTS version will no longer receive updates.

LTS versions take the number of the year during which they are released. For example, our latest LTS release, which was launched earlier this year, is LTS 2021. Below is an example of a projection for currently maintained and upcoming LTS releases. Note that defined release dates in this diagram for LTS are subject to change. LTS releases are driven by the release’s scope, which explains the variation of the period between two LTS releases.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Release Cycle/release-cycle-diagram
    name: release-cycle-diagram.png
    server#screenshot#up_to_date
--}}
![release-cycle-diagram](/nx_assets/06844453-da73-4c66-9fd3-e420214f1bc7.png ?w=650)

As you can see, the major releases trend provides our customers more time to migrate while still benefiting from the most recent product evolutions.
